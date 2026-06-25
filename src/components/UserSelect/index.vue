<template>
  <div class="user-selector">
    <!-- 人员展示区域 -->
    <div class="flex flex-wrap gap-2">
      <div
        v-for="user in selectedUsers"
        :key="user.id"
        class="bg-gray-100 h-35px rounded-3xl flex items-center pr-8px dark:color-gray-600 position-relative"
      >
        <el-avatar class="!m-5px" :size="28" v-if="user.avatar" :src="user.avatar" />
        <el-avatar class="!m-5px" :size="28" v-else>
          {{ user.nickname.substring(0, 1) }}
        </el-avatar>
        {{ user.nickname }}
        <Icon
          v-if="!disabled"
          icon="ep:close"
          class="ml-2 cursor-pointer hover:text-red-500"
          @click="handleRemoveUser(user)"
        />
      </div>
      <el-button v-if="!disabled" type="primary" link @click="openSelectDialog" class="add-btn">
        <Icon icon="ep:plus" />选择人员
      </el-button>
    </div>

    <!-- 选择弹窗 -->
    <Dialog v-model="dialogVisible" title="人员选择" width="800">
      <el-row class="gap2" v-loading="formLoading && (!deptDataLoaded || !userDataLoaded)">
        <el-col :span="6">
          <ContentWrap class="h-1/1">
            <el-tree
              ref="treeRef"
              :data="deptTree"
              :expand-on-click-node="false"
              :props="defaultProps"
              default-expand-all
              highlight-current
              node-key="id"
              @node-click="handleNodeClick"
              :disabled="disabled"
            />
          </ContentWrap>
        </el-col>
        <el-col :span="17">
          <el-transfer
            ref="transferRef"
            v-model="selectedUserIdList"
            :titles="['未选', '已选']"
            filterable
            filter-placeholder="搜索成员"
            :data="transferUserList"
            :props="{ label: 'nickname', key: 'id' }"
            @change="handleTransferChange"
            @left-check-change="handleLeftCheckChange"
            :disabled="disabled"
          />
        </el-col>
      </el-row>
      <template #footer>
        <el-button
          :disabled="formLoading || !selectedUserIdList?.length || disabled"
          type="primary"
          @click="submitForm"
        >
          确 定
        </el-button>
        <el-button @click="dialogVisible = false" :disabled="disabled">取 消</el-button>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { defaultProps, handleTree } from '@/utils/tree'
import * as DeptApi from '@/api/system/dept'
import * as UserApi from '@/api/system/user'

defineOptions({ name: 'UserSelect' })

// 内部用户信息类型定义
type InternalUser = {
  id: number
  nickname: string
  avatar?: string
  [key: string]: any // 用于存储通过internal-fields指定的额外字段
}

// 支持v-model双向绑定及扩展功能
const props = defineProps({
  modelValue: {
    type: [Number, Array, null] as PropType<number | number[] | null>,
    default: null,
    description: '双向绑定的用户ID（单选为数字，多选为数组）'
  },
  disabled: {
    type: Boolean,
    default: false,
    description: '是否禁用组件'
  },
  multiple: {
    type: Boolean,
    default: false,
    description: '是否支持多选'
  },
  internalFields: {
    type: Array as PropType<string[]>,
    default: () => [],
    description: '需要额外提取的用户字段（如email、phone等）'
  }
})

const emit = defineEmits<{
  'update:modelValue': [value: number | number[] | null]
  change: [value: InternalUser[] | InternalUser | null]
}>()

const deptTree = ref<any[]>([])
const deptList = ref<any[]>([])
const userList = ref<UserApi.UserVO[]>([]) // 所有用户数据缓存
const filteredUserList = ref<UserApi.UserVO[]>([]) // 部门过滤后的用户列表
const selectedUserIdList = ref<number[]>([]) // 右侧已选的用户ID
const dialogVisible = ref(false)
const formLoading = ref(false)
const treeRef = ref()
const transferRef = ref() // 穿梭框组件引用

// 内部状态管理
const selectedUsers = ref<InternalUser[]>([]) // 已选用户对象列表
const deptDataLoaded = ref(false) // 部门数据缓存标记
const userDataLoaded = ref(false) // 用户数据缓存标记
const isUpdating = ref(false) // 防止更新循环的标记

/** 工具函数：比较两个值是否相等 */
const valuesEqual = (a: any, b: any): boolean => {
  if (a === b) return true
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    return a.every((item, index) => item === b[index])
  }
  return false
}

/** 提取内部需要的用户字段（默认字段+额外字段） */
const extractInternalUser = (fullUser: UserApi.UserVO): InternalUser => {
  const fields = ['id', 'nickname', 'avatar', ...props.internalFields]
  return fields.reduce((acc, field) => {
    if (fullUser.hasOwnProperty(field)) {
      acc[field] = fullUser[field]
    }
    return acc
  }, {} as InternalUser)
}

/** 计算属性：合并已选择的用户和当前部门过滤后的用户 */
const transferUserList = computed(() => {
  const selectedUsers = userList.value.filter((user) => selectedUserIdList.value.includes(user.id))
  const filteredUnselectedUsers = filteredUserList.value.filter(
    (user) => !selectedUserIdList.value.includes(user.id)
  )
  return [...selectedUsers, ...filteredUnselectedUsers]
})

/** 加载部门数据（带缓存） */
const loadDeptData = async () => {
  if (deptDataLoaded.value && deptList.value.length) return

  formLoading.value = true
  try {
    const deptData = await DeptApi.getSimpleDeptList()
    deptList.value = deptData
    deptTree.value = handleTree(deptData)
    deptDataLoaded.value = true
  } finally {
    formLoading.value = false
  }
}

/** 加载用户数据（带缓存） */
const loadUserData = async () => {
  if (userDataLoaded.value && userList.value.length) return

  formLoading.value = true
  try {
    userList.value = await UserApi.getSimpleUserList()
    userDataLoaded.value = true
  } finally {
    formLoading.value = false
  }
}

/** 打开选择弹窗 */
const openSelectDialog = async () => {
  if (props.disabled) return
  resetForm()

  // 加载缓存数据
  await loadDeptData()
  await loadUserData()

  // 初始化过滤列表
  filteredUserList.value = [...userList.value]

  // 初始化右侧已选用户ID列表（从外部传入的值）
  selectedUserIdList.value = props.modelValue
    ? Array.isArray(props.modelValue)
      ? [...props.modelValue]
      : [props.modelValue]
    : []

  // 单选模式下确保右侧最多只有一个选中项
  if (!props.multiple && selectedUserIdList.value.length > 1) {
    selectedUserIdList.value = [selectedUserIdList.value[0]]
  }

  await nextTick()
  dialogVisible.value = true
}

/** 获取指定部门及其所有子部门的ID列表 */
const getChildDeptIds = (deptIdRule?: string): number[] => {
  const ids = [] as number[]
  const children = deptList.value.filter((dept) => dept.idRule.startsWith(deptIdRule))
  children.forEach((child) => {
    ids.push(child.id)
  })
  return ids
}

/** 获取部门过滤后的用户列表 */
const filterUserList = async (deptIdRule?: string) => {
  formLoading.value = true
  try {
    if (!deptIdRule) {
      filteredUserList.value = [...userList.value]
      return
    }

    const deptIds = getChildDeptIds(deptIdRule)
    filteredUserList.value = userList.value.filter((user) => deptIds.includes(user.deptId))
  } finally {
    formLoading.value = false
  }
}

/** 处理左侧勾选变化事件 - 单选模式下左侧最多只能选一个 */
const handleLeftCheckChange = async (value) => {
  // 只在单选且未禁用状态下才进行控制
  if (props.multiple || props.disabled) return

  // 确保左侧最多只有一个勾选项
  if (value.length == 2) {
    value.splice(0, 1)
  } else if (value.length > 2) {
    // 可能是全选操作，单选不支持全选，全部清空
    value.splice(0)
  }
}

/** 处理穿梭框变化 - 仅当用户手动点击移动按钮时触发 */
const handleTransferChange = (value: number[]) => {
  if (!props.multiple) {
    // 单选模式下右侧最多只能有一个选中项
    if (value.length > 1) {
      // 保留最后一个移动过来的用户
      selectedUserIdList.value = [value[value.length - 1]]
    } else {
      selectedUserIdList.value = [...value]
    }
  } else {
    // 多选模式保持原样
    selectedUserIdList.value = [...value]
  }
}

/** 提交选择 */
const submitForm = async () => {
  try {
    let selectedIds = [...selectedUserIdList.value]

    // 单选模式处理 - 确保只有一个选中项
    if (!props.multiple) {
      selectedIds = selectedIds.slice(-1) // 只保留最后一个选中的ID
    }

    // 筛选选中的用户对象并提取需要的字段
    const selectedUserList = userList.value
      .filter((user) => selectedIds.includes(user.id))
      .map(extractInternalUser)

    // 更新内部状态
    selectedUsers.value = props.multiple ? selectedUserList : selectedUserList.slice(0, 1)
    emitModelValue()
    dialogVisible.value = false
  } finally {
    // 可添加最终处理逻辑
  }
}

/** 移除已选用户 */
const handleRemoveUser = (user: InternalUser) => {
  if (props.disabled) return
  selectedUsers.value = selectedUsers.value.filter((item) => item.id !== user.id)
  emitModelValue()
}

/** 重置表单 */
const resetForm = () => {
  filteredUserList.value = []
  selectedUserIdList.value = []
}

/** 处理部门被点击 */
const handleNodeClick = (row: { [key: string]: any }) => {
  if (!props.disabled) {
    filterUserList(row.idRule)
  }
}

/** 同步发射选中值 */
const emitModelValue = () => {
  isUpdating.value = true
  try {
    let newValue: number | number[] | null = null
    if (props.multiple) {
      newValue = selectedUsers.value.length ? selectedUsers.value.map((u) => u.id) : null
    } else {
      newValue = selectedUsers.value[0]?.id || null
    }

    if (!valuesEqual(newValue, props.modelValue)) {
      emit('update:modelValue', newValue)
    }

    // 当需要额外字段时，触发change事件传递完整信息
    if (props.internalFields.length > 0) {
      const changeValue = props.multiple ? [...selectedUsers.value] : selectedUsers.value[0] || null
      emit('change', changeValue)
    }
  } finally {
    isUpdating.value = false
  }
}

/** 处理初始值回显 */
const handleInitialValues = async () => {
  if (isUpdating.value || props.modelValue === null) return

  await loadUserData()

  let newSelected: InternalUser[] = []
  if (Array.isArray(props.modelValue)) {
    const modelValueArr = props.modelValue as number[]
    newSelected = userList.value
      .filter((user) => modelValueArr.includes(user.id))
      .map(extractInternalUser)

    // 单选模式下确保只显示一个选中项
    if (!props.multiple && newSelected.length > 1) {
      newSelected = [newSelected[0]]
    }
  } else if (typeof props.modelValue === 'number') {
    const matched = userList.value.find((user) => user.id === props.modelValue)
    if (matched) newSelected = [extractInternalUser(matched)]
  }

  // 比较 ID 数组是否变化，避免无效更新
  if (
    !valuesEqual(
      newSelected.map((u) => u.id),
      selectedUsers.value.map((u) => u.id)
    )
  ) {
    selectedUsers.value = newSelected
  }
}

/** 监听外部值变化 */
watch(
  () => props.modelValue,
  async (newVal, oldVal) => {
    if (valuesEqual(newVal, oldVal) || isUpdating.value) return
    await handleInitialValues()
  },
  { immediate: true, deep: true }
)

/** 组件挂载时初始化 */
onMounted(async () => {
  if (props.modelValue !== null) {
    await loadUserData()
    handleInitialValues()
  }
})

defineExpose({ openSelectDialog })
</script>

<style lang="scss" scoped>
.user-selector {
  width: 100%;
}

.add-btn {
  align-self: center;
  white-space: nowrap;
}

:deep() {
  .el-transfer {
    display: flex;
  }

  .el-transfer__buttons {
    display: flex !important;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 20px;

    .el-transfer__button:nth-child(2) {
      margin: 0;
    }
  }
}
</style>
