<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form ref="formRef" :model="formData" :rules="formRules" label-width="100px" v-loading="formLoading">
      <el-form-item label="上级目录" prop="parentId">
        <el-tree-select
v-model="formData.parentId" :data="fileCatalogueTree" :props="defaultProps" check-strictly
                        default-expand-all placeholder="请选择上级目录" />
      </el-form-item>
      <el-form-item label="目录名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入目录名称" />
      </el-form-item>
      <el-form-item label="目录编码" prop="code">
        <el-input v-model="formData.code" placeholder="请输入目录编码" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { FileCatalogueApi, FileCatalogueVO } from '@/api/infra/filecatalogue'
import { defaultProps, handleTree } from '@/utils/tree'

/** 文件目录 表单 */
defineOptions({ name: 'FileCatalogueForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  parentId: undefined,
  name: undefined,
  code: undefined,
})
const formRules = reactive({
  parentId: [{ required: true, message: '上级目录不能为空', trigger: 'blur' }],
  name: [{ required: true, message: '目录名称不能为空', trigger: 'blur' }],
  code: [{ required: true, message: '目录编码不能为空', trigger: 'blur' }],
})
const formRef = ref() // 表单 Ref
const fileCatalogueTree = ref() // 树形结构

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await FileCatalogueApi.getFileCatalogue(id)
    } finally {
      formLoading.value = false
    }
  }
  await getFileCatalogueTree()
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  await formRef.value.validate()
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as FileCatalogueVO
    if (formType.value === 'create') {
      await FileCatalogueApi.createFileCatalogue(data)
      message.success(t('common.createSuccess'))
    } else {
      await FileCatalogueApi.updateFileCatalogue(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    parentId: undefined,
    name: undefined,
    code: undefined,
  }
  formRef.value?.resetFields()
}

/** 获得文件目录树 */
const getFileCatalogueTree = async () => {
  fileCatalogueTree.value = []
  const data = await FileCatalogueApi.getFileCatalogueList(null)
  const root: Tree = { id: 0, name: '顶级文件目录', children: [] }
  root.children = handleTree(data)
  fileCatalogueTree.value.push(root)
}
</script>
