<template>
  <div>
    <el-dialog v-model="dialogVisible" title="请选择部门" @close="handleClose">
      <el-select
        v-model="selectedValue"
        placeholder="请选择部门"
        style="width: 100%"
        :disabled="deptList.length === 0"
      >
        <el-option
          v-for="item in deptList"
          :key="item.deptId"
          :label="item.deptName"
          :value="item.deptId"
        />
        <template #empty> 暂无可用部门 </template>
      </el-select>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleConfirm" :disabled="!selectedValue">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore, PermissionDeptVO, UserDeptVO } from '@/store/modules/user'
const message = useMessage() // 消息弹窗

// 明确props类型
const props = defineProps<{
  permissions: string[]
}>()

// props校验
if (!Array.isArray(props.permissions) || props.permissions.length === 0) {
  message.error('参数错误：permissions必须是非空数组')
}

const userStore = useUserStore()
const emits = defineEmits<{
  (e: 'confirm', deptId: number): void
  (e: 'cancel'): void
}>()

// 响应式变量
const dialogVisible = ref(false)
const selectedValue = ref<number>()
const deptList = ref<UserDeptVO[]>([])
const isAutoConfirmed = ref(false) // 标记是否已自动确认（避免重复触发）
const errorTriggered = ref(false) // 标记是否已触发错误提示（避免重复提示）

// 生成部门列表
const generateDeptList = () => {
  const permissionList = userStore.getPermissions || []
  const userDepts = userStore.getDepts || []
  deptList.value = []
  isAutoConfirmed.value = false // 重置自动确认状态
  errorTriggered.value = false // 重置错误提示状态

  if (permissionList.length === 0) {
    if (!errorTriggered.value) {
      message.error('未获取到权限列表数据')
      errorTriggered.value = true
    }
    return
  }

  if (userDepts.length === 0) {
    if (!errorTriggered.value) {
      message.error('未获取到部门列表数据')
      errorTriggered.value = true
    }
    return
  }

  // 部门信息Map
  const deptMap = new Map<number, UserDeptVO>(userDepts.map((dept) => [dept.deptId, dept]))

  // 筛选有权限的部门ID（去重）
  const uniqueDeptIds = new Set<number>()
  permissionList
    .filter((perm: PermissionDeptVO) => props.permissions.includes(perm.code))
    .forEach((perm) => {
      perm.depts.forEach((deptId) => {
        if (deptMap.has(deptId)) uniqueDeptIds.add(deptId)
      })
    })

  // 生成部门列表
  deptList.value = Array.from(uniqueDeptIds).map((deptId) => {
    const dept = deptMap.get(deptId)!
    return { ...dept, mainJob: dept.mainJob || '' }
  })

  // 检查是否找到部门
  if (deptList.value.length === 0 && !errorTriggered.value) {
    message.error('未找到与指定权限匹配的部门，请检查权限配置')
    errorTriggered.value = true
    return
  }

  // 自动选中第一个部门（为后续判断做准备）
  if (deptList.value.length > 0) {
    selectedValue.value = deptList.value[0].deptId
  }
}

// 核心逻辑：根据部门数量判断是否显示弹窗
const handleModalDisplay = () => {
  // 避免重复处理（如数据多次更新时）
  if (isAutoConfirmed.value || errorTriggered.value) return

  nextTick(() => {
    // 确保deptList已更新
    if (deptList.value.length === 1) {
      // 只有一个部门：自动确认，不弹窗
      isAutoConfirmed.value = true
      emits('confirm', deptList.value[0].deptId)
      dialogVisible.value = false
    } else if (deptList.value.length > 1) {
      // 多个部门：显示弹窗
      dialogVisible.value = true
    }
  })
}

// 监听数据变化，重新生成列表并判断弹窗逻辑
watch(
  () => [userStore.getPermissions, userStore.getDepts],
  () => {
    generateDeptList()
    handleModalDisplay() // 数据更新后重新判断是否显示弹窗
  },
  { immediate: true, deep: true }
)

// 初始化时执行一次判断
onMounted(() => {
  handleModalDisplay()
})

// 事件处理
const handleConfirm = () => {
  if (selectedValue.value) {
    emits('confirm', selectedValue.value)
    dialogVisible.value = false
  }
}

const closeModal = (isCancel = true) => {
  if (isCancel) emits('cancel')
  dialogVisible.value = false
}

const handleCancel = () => closeModal(true)
const handleClose = () => closeModal(true)
</script>
