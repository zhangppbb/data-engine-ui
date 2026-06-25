<template>
  <Dialog v-model="dialogVisible" title="分配兼职">
    <el-form
        ref="formRef"
        v-loading="formLoading"
        :model="formData"
        :rules="formRules"
        label-width="80px"
    >
      <el-form-item label="用户名称">
        <el-input v-model="formData.username" :disabled="true" />
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="formData.nickname" :disabled="true" />
      </el-form-item>
      <el-form-item label="兼职部门" prop="deptIds">
        <el-tree-select
            v-model="formData.deptIds"
            :data="deptList"
            :props="defaultProps"
            check-strictly
            multiple
            node-key="id"
            placeholder="请选择兼职部门"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import * as UserApi from '@/api/system/user'
import * as DeptApi from '@/api/system/dept'
import { defaultProps, handleTree } from '@/utils/tree'
import { FormRules } from 'element-plus'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formData = ref({
  id: -1,
  nickname: '',
  username: '',
  deptIds: []
})
const formRules = reactive<FormRules>({
  deptIds: [{ required: true, message: '兼职部门不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref
const deptList = ref<Tree[]>([]) // 树形结构

/** 打开弹窗 */
const open = async (row: UserApi.UserVO) => {
  dialogVisible.value = true
  resetForm()
  // 设置数据
  formData.value.id = row.id
  formData.value.username = row.username
  formData.value.nickname = row.nickname
  // 获得部门列表
  deptList.value = handleTree(await DeptApi.getSimpleDeptList())
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    await UserApi.assignUserSideline({
      userId: formData.value.id,
      deptIds: formData.value.deptIds
    })
    message.success(t('common.createSuccess'))
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success', true)
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: -1,
    nickname: '',
    username: '',
    deptIds: []
  }
  formRef.value?.resetFields()
}
</script>
