<template>
  <div class="dept-selector">
    <!-- Tag 标签展示区域 -->
    <div class="tags-container">
      <!-- 支持简称/全称切换及悬浮提示 -->
      <template v-for="(dept, index) in selectedDepts" :key="dept.id">
        <el-tooltip
          :disabled="!showAbbreviation"
          effect="dark"
          :content="dept.nameRule"
          placement="top"
        >
          <div
            class="bg-gray-100 h-35px rounded-3xl flex items-center pr-8px dark:color-gray-600 position-relative"
          >
            <Icon icon="ep:office-building" class="!m-5px text-20px" />
            {{ props.showAbbreviation ? dept.name : dept.nameRule }}
            <Icon
              v-if="!disabled"
              icon="ep:close"
              class="ml-2 cursor-pointer hover:text-red-500"
              @click="handleTagClose(index)"
            />
          </div>
        </el-tooltip>
      </template>

      <!-- 选择按钮 -->
      <el-button v-if="!disabled" type="primary" link @click="openSelectDialog" class="add-btn">
        <Icon icon="ep:plus" /> 选择部门
      </el-button>
    </div>

    <!-- 部门选择弹窗 -->
    <Dialog v-model="dialogVisible" title="部门选择" width="600">
      <el-row v-loading="formLoading && !deptTree.length">
        <el-col :span="24">
          <ContentWrap class="h-1/1">
            <el-tree
              ref="treeRef"
              :data="deptTree"
              :props="defaultProps"
              show-checkbox
              :check-strictly="checkStrictly || !props.multiple"
              check-on-click-node
              default-expand-all
              highlight-current
              node-key="id"
              @check="handleCheck"
              @node-click="handleNodeClick"
              :disabled="disabled"
            />
          </ContentWrap>
        </el-col>
      </el-row>
      <template #footer>
        <el-button
          :disabled="formLoading || !selectedDeptIds?.length || disabled"
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

defineOptions({ name: 'DeptSelect' })

// 内部部门信息类型定义
// 包含默认字段（id/name/nameRule）和动态扩展字段（通过internal-fields传入）
type InternalDept = {
  id: number
  name: string // 简称
  nameRule: string // 全称
  [key: string]: any // 用于存储通过internal-fields指定的额外字段
}

// 采用对象形式定义Props
const props = defineProps({
  modelValue: {
    type: [Number, Array, null] as PropType<number | number[] | null>,
    default: null,
    description: '双向绑定的部门ID（单选为number，多选为number[]）'
  },
  disabled: {
    type: Boolean,
    default: false,
    description: '是否禁用组件'
  },
  checkStrictly: {
    type: Boolean,
    default: false,
    description: '是否严格勾选（父子节点不关联）'
  },
  multiple: {
    type: Boolean,
    default: false,
    description: '是否支持多选'
  },
  internalFields: {
    type: Array as PropType<string[]>,
    default: () => [],
    description: '需要额外提取的部门字段（如code、parentId等）'
  },
  showAbbreviation: {
    type: Boolean,
    default: true,
    description: '标签显示简称（true）还是全称（false）'
  }
})

// 定义事件
const emit = defineEmits<{
  'update:modelValue': [id: number | number[] | null] // 用于v-model双向绑定
  change: [depts: InternalDept[] | InternalDept] // 当需要额外字段时，传递完整部门信息
}>()

// 内部状态管理
const selectedDepts = ref<InternalDept[]>([]) // 存储选中的部门完整信息（含额外字段）
const treeRef = ref() // 部门树组件引用
const deptTree = ref<any[]>([]) // 格式化后的部门树形结构数据
const selectedDeptIds = ref<number[]>([]) // 弹窗中选中的部门ID（临时存储）
const dialogVisible = ref(false) // 部门选择弹窗的显示状态
const formLoading = ref(false) // 部门数据加载状态
const deptMap = ref<Map<number, any>>(new Map()) // 部门ID到部门信息的映射表（用于快速查询）
const isUpdating = ref(false) // 防止数据更新时的循环触发标记
const deptDataLoaded = ref(false) // 部门数据是否已加载（用于缓存）
const lastClickedNodeId = ref<number | null>(null) // 记录最后点击的节点ID（用于单选逻辑）

/**
 * 工具函数：比较两个值是否相等（支持基本类型和数组）
 * @param a 比较值A
 * @param b 比较值B
 * @returns 是否相等
 */
const valuesEqual = (a: any, b: any): boolean => {
  if (a === b) return true
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    return a.every((item, index) => item === b[index])
  }
  return false
}

/**
 * 加载部门数据（带缓存机制）
 * 首次加载后缓存数据，避免重复请求接口
 */
const loadDeptData = async () => {
  // 若数据已加载且存在，直接返回（缓存逻辑）
  if (deptDataLoaded.value && deptTree.value.length) {
    return
  }

  formLoading.value = true
  try {
    const deptData = await DeptApi.getSimpleDeptList() // 调用接口获取原始部门数据
    deptTree.value = handleTree(deptData) // 格式化原始数据为树形结构
    initDeptMap(deptData) // 初始化部门映射表（用于快速查询）
    deptDataLoaded.value = true // 标记数据已加载
  } finally {
    formLoading.value = false // 无论成功失败，都关闭加载状态
  }
}

/**
 * 初始化部门映射表
 * 将扁平/树形结构的部门数据转换为ID到部门信息的Map，方便通过ID快速查询部门详情
 * @param depts 原始部门数据（数组）
 */
const initDeptMap = (depts: any[]) => {
  const map = new Map<number, any>()
  // 递归遍历所有部门节点，存入Map
  const traverse = (nodes: any[]) => {
    nodes.forEach((node) => {
      map.set(node.id, node)
      if (node.children?.length) traverse(node.children) // 处理子节点
    })
  }
  traverse(depts)
  deptMap.value = map
}

/**
 * 提取内部需要的部门字段（默认字段+额外字段）
 * 根据internal-fields配置，从完整部门信息中提取所需字段
 * @param fullDept 接口返回的完整部门信息
 * @returns 格式化后的InternalDept对象
 */
const extractInternalDept = (fullDept: any): InternalDept => {
  // 合并默认字段（id/name/nameRule）和用户指定的额外字段
  const fields = ['id', 'name', 'nameRule', ...props.internalFields]
  return fields.reduce((acc, field) => {
    if (fullDept.hasOwnProperty(field)) {
      acc[field] = fullDept[field]
    }
    return acc
  }, {} as InternalDept)
}

/**
 * 处理初始值回显
 * 当modelValue有初始值时，根据ID查询部门详情并初始化selectedDepts
 */
const handleInitialValues = async () => {
  if (isUpdating.value) return // 防止更新过程中重复触发
  if (props.modelValue == null) return // 无初始值时不处理

  await loadDeptData() // 确保部门数据已加载

  // 将初始值统一转为数组（单选时包裹成数组处理）
  const ids = Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]
  // 根据ID查询部门详情，并提取所需字段
  const depts = ids
    .map((id) => deptMap.value.get(id)) // 通过映射表快速查询
    .filter(Boolean) // 过滤无效ID（未找到对应部门）
    .map(extractInternalDept) // 格式化部门信息

  // 处理单选/多选逻辑（单选只取第一个）
  const newSelectedDepts = props.multiple ? depts : depts.slice(0, 1)

  // 若回显数据与当前选中数据不一致，则更新并触发事件
  if (
    !valuesEqual(
      newSelectedDepts.map((d) => d.id),
      selectedDepts.value.map((d) => d.id)
    )
  ) {
    selectedDepts.value = newSelectedDepts
    emitModelValue() // 同步更新外部绑定值
  }
}

/**
 * 同步发射选中的ID和完整信息
 * 1. 更新v-model绑定的ID值
 * 2. 当需要额外字段时（internal-fields不为空），触发change事件传递完整信息
 */
const emitModelValue = () => {
  isUpdating.value = true // 标记为更新中，防止watch循环触发
  try {
    let newValue: number | number[] | null = null
    // 根据单选/多选，生成对应的ID值
    if (props.multiple) {
      const ids = selectedDepts.value.map((dept) => dept.id)
      newValue = ids.length ? ids : null
    } else {
      newValue = selectedDepts.value[0]?.id || null
    }
    // 触发v-model更新（仅当值变化时）
    if (!valuesEqual(newValue, props.modelValue)) {
      emit('update:modelValue', newValue)
    }
    // 优化点：仅当需要额外字段时（internal-fields不为空），才触发change事件
    // 避免无意义的事件通信，提升性能
    if (props.internalFields.length > 0) {
      // 传递数组副本，防止外部直接修改内部状态
      emit('change', props.multiple ? [...selectedDepts.value] : selectedDepts.value[0])
    }
  } finally {
    isUpdating.value = false // 解除更新标记
  }
}

/**
 * 监听modelValue变化（外部修改时同步内部状态）
 * 当父组件修改v-model时，重新初始化选中数据
 */
watch(
  () => props.modelValue,
  async (newId, oldId) => {
    // 若值未变化或处于内部更新中，则不处理
    if (valuesEqual(newId, oldId) || isUpdating.value) return
    if (newId != null) {
      await handleInitialValues() // 有初始值时回显
    } else {
      selectedDepts.value = [] // 清空选中
      emitModelValue()
    }
  },
  { immediate: true, deep: true } // 立即执行+深度监听（数组变化时触发）
)

/**
 * 打开部门选择弹窗
 * 1. 重置弹窗状态
 * 2. 确保部门数据已加载
 * 3. 回显当前选中状态到弹窗的树组件中
 */
const openSelectDialog = async () => {
  if (props.disabled) return // 禁用状态下不执行
  resetForm() // 重置弹窗临时状态
  await loadDeptData() // 确保部门数据已加载
  dialogVisible.value = true // 显示弹窗

  // 等待弹窗渲染完成后，设置树组件的选中状态
  await nextTick()
  if (selectedDepts.value.length) {
    const selectedIds = selectedDepts.value.map((dept) => dept.id)
    treeRef.value?.setCheckedKeys(selectedIds) // 设置勾选状态
    // 单选时高亮当前选中节点
    if (!props.multiple && selectedIds.length) {
      treeRef.value?.setCurrentKey(selectedIds[0])
      lastClickedNodeId.value = selectedIds[0]
    }
  }
}

/**
 * 处理树组件的勾选事件
 * 单选模式下确保只勾选最后一个节点
 */
const handleCheck = (checkedNode: any) => {
  if (props.disabled) return
  if (!props.multiple) {
    lastClickedNodeId.value = checkedNode.id // 记录最后勾选的节点ID
  }
  selectedDeptIds.value = treeRef.value.getCheckedKeys() // 更新临时选中ID

  // 单选模式下，若勾选多个则只保留最后一个
  if (!props.multiple && selectedDeptIds.value.length > 1) {
    const lastId = lastClickedNodeId.value || selectedDeptIds.value.at(-1)!
    treeRef.value.setCheckedKeys([lastId]) // 强制只勾选最后一个
    selectedDeptIds.value = [lastId]
  }
}

/**
 * 处理树节点点击事件
 * 单选模式下点击节点直接勾选
 */
const handleNodeClick = (node: any) => {
  if (props.disabled || props.multiple) return // 禁用或多选模式下不处理
  lastClickedNodeId.value = node.id // 记录点击的节点ID
  treeRef.value.setCheckedKeys([node.id]) // 勾选当前节点
  selectedDeptIds.value = [node.id] // 更新临时选中ID
}

/**
 * 提交弹窗选择的部门
 * 将弹窗中选中的部门信息同步到组件内部状态
 */
const submitForm = () => {
  if (props.disabled) return
  let selectedValues: InternalDept[] = []

  if (props.multiple) {
    // 多选模式：获取所有勾选的节点并格式化
    const checkedNodes = treeRef.value.getCheckedNodes() as any[]
    selectedValues = checkedNodes.map(extractInternalDept)
  } else {
    // 单选模式：获取最后点击的节点并格式化
    if (lastClickedNodeId.value) {
      const selectedNode = deptMap.value.get(lastClickedNodeId.value)
      if (selectedNode) {
        selectedValues = [extractInternalDept(selectedNode)]
      }
    }
  }

  // 处理选中数据（去重/单选限制）
  selectedDepts.value = props.multiple
    ? // 多选：通过Map去重（保留最新选中的）
      [...new Map([...selectedDepts.value, ...selectedValues].map((d) => [d.id, d])).values()]
    : // 单选：只保留第一个
      selectedValues.slice(0, 1)

  dialogVisible.value = false // 关闭弹窗
  emitModelValue() // 同步更新外部绑定
}

/**
 * 重置弹窗的临时状态
 */
const resetForm = () => {
  selectedDeptIds.value = [] // 清空临时选中ID
  lastClickedNodeId.value = null // 清空最后点击节点记录
}

/**
 * 处理标签删除事件
 * @param index 要删除的标签索引
 */
const handleTagClose = (index: number) => {
  if (props.disabled) return
  selectedDepts.value.splice(index, 1) // 从选中列表中删除
  emitModelValue() // 同步更新外部绑定
}

/**
 * 组件挂载时预加载部门数据
 * 若有初始值，提前加载数据用于回显
 */
onMounted(async () => {
  if (props.modelValue != null) {
    await loadDeptData()
  }
})

// 初始化回显（组件创建时执行）
handleInitialValues()
</script>

<style scoped>
.dept-selector {
  width: 100%;
}

.tags-container {
  display: flex;
  min-height: 35px; /* 适配新标签高度 */
  padding: 4px 8px;
  border-radius: 4px;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center; /* 确保标签和按钮垂直居中 */
}

/* 调整选择按钮的对齐方式 */
.add-btn {
  align-self: center;
  white-space: nowrap; /* 防止按钮文字换行 */
}

/* 补充可能需要的样式调整 */
:deep(.el-tooltip__popper) {
  max-width: 300px; /* 限制tooltip宽度 */
}
</style>
