<template>
  <Dialog v-model="dialogVisible" title="数据权限" width="800">
    <el-form ref="formRef" v-loading="formLoading" :model="formData" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="角色名称">
            {{ formData.name }}
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="角色标识">
            {{ formData.code }}
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="角色类型">
            {{ formData.type == "2" ? '普通角色' : '系统角色' }}
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="数据权限" label-width="80px">
        <el-card class="w-full h-400px !overflow-y-scroll permission-box" shadow="never">
          <template #header>
            <div> 全选/全不选:
              <el-switch 
                v-model="treeNodeAll" active-text="是" inactive-text="否" inline-prompt
                @change="handleCheckedTreeNodeAll()" />
            </div>
            <div>

              全部展开/折叠:
              <el-switch 
                v-model="deptExpand" active-text="展开" inactive-text="折叠" inline-prompt
                @change="handleCheckedTreeExpand" />
            </div>
            <div>
              父子联动(选中父节点，自动选择子节点):
              <el-switch 
                v-model="checkStrictly" active-text="是" inactive-text="否" inline-prompt />
            </div>
          </template>
          <el-tree 
            ref="treeRef" :check-strictly="!checkStrictly" :data="deptOptions" :props="defaultProps"
            empty-text="加载中，请稍后" node-key="id" show-checkbox />
        </el-card>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import * as RoleApi from '@/api/system/role'
import * as PermissionApi from '@/api/system/permission'

defineOptions({ name: 'RoleDataPermissionFormChain' })

const { t } = useI18n()
const message = useMessage()
const defaultProps = {
  children: 'children',
  label: 'catalogueName',
  value: 'id',
  isLeaf: 'leaf',
  emitPath: false
}
const dialogVisible = ref(false) // 弹窗的是否展示
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formData = reactive({
  id: undefined as number | undefined,
  name: "",
  code: "",
  type: "",
  catalogueId: []
})
const formRef = ref()
const deptOptions = ref<any[]>([])
const deptExpand = ref(false) // 展开/折叠
const treeRef = ref() // 菜单树组件 Ref
const treeNodeAll = ref(false) // 全选/全不选
const checkStrictly = ref(true) // 是否严格模式，即父子不关联

/** 打开弹窗 */
const open = async (row: RoleApi.RoleVO) => {
  dialogVisible.value = true
  resetForm()
  // 加载 Role 数据权限
  deptOptions.value = await PermissionApi.getTreeListRole()
  // 查询角色信息
  await PermissionApi.getRoleInfo(row.id).then((roleInfo) => {
    // 需要在 DOM 渲染完成后，再设置选中状态
    roleInfo?.catalogueId?.forEach((deptId: number): void => {
      treeRef.value.setChecked(deptId, true, false)
    })
  })
  // 设置数据
  formData.id = row.id
  formData.name = row.name
  formData.code = row.code
  formData.type = row.type.toString()


}
defineExpose({ open })

/** 提交表单 */
const emit = defineEmits(['success'])
const submitForm = async () => {
  formLoading.value = true
  try {
    const checkedNodes = treeRef.value.getCheckedNodes(false)
    const checkedLeafIds = checkedNodes.filter(node => node.isLeaf == "1").map(node => node.id)
    const data = {
      roleId: formData.id,
      catalogueId: checkedLeafIds || []
    }
    await PermissionApi.createOrUpdateRolePermission(data)
    message.success(t('common.updateSuccess'))
    dialogVisible.value = false
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  // 重置选项
  treeNodeAll.value = false
  deptExpand.value = false
  checkStrictly.value = true
  // 重置表单
  formData.value = {
    id: undefined as number | undefined,
    name: "",
    code: "",
    type: "",
    catalogueId: []
  }
  treeRef.value?.setCheckedNodes([])
  formRef.value?.resetFields()
}

/** 全选/全不选 */
const handleCheckedTreeNodeAll = () => {
  treeRef.value.setCheckedNodes(treeNodeAll.value ? deptOptions.value : [])
}

/** 展开/折叠全部 */
const handleCheckedTreeExpand = () => {
  const nodes = treeRef.value?.store.nodesMap
  for (let node in nodes) {
    if (nodes[node].expanded === deptExpand.value) {
      continue
    }
    nodes[node].expanded = deptExpand.value
  }
}
</script>
<style scoped lang="scss">
.permission-box {
  :deep(.el-card__header) {
    display: flex;
    padding: 8px 12px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
