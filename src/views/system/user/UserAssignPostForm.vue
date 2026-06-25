<template>
  <Dialog v-model="dialogVisible" title="分配岗位">
    <el-form ref="formRef" v-loading="formLoading" :model="formData" label-width="80px">
      <el-form-item label="用户名称">
        <el-input v-model="formData.username" :disabled="true" />
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="formData.nickname" :disabled="true" />
      </el-form-item>
      <el-form-item label="用户部门">
        <el-input v-model="formData.deptId" :disabled="true" />
      </el-form-item>
      <el-form-item label="岗位">
        <el-select v-model="formData.postIds" multiple placeholder="请选择岗位">
          <el-option v-for="item in postList" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
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
import * as PostApi from '@/api/system/post'

defineOptions({ name: 'SystemUserAssignPostForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formData = ref({
  id: -1,
  deptId: -1,
  nickname: '',
  username: '',
  postIds: []
})
const formRef = ref() // 表单 Ref
const postList = ref([] as PostApi.PostVO[]) // 岗位的列表

/** 打开弹窗 */
const open = async (row: UserApi.UserVO) => {
  dialogVisible.value = true
  resetForm()
  // 设置数据
  formData.value.id = row.id
  formData.value.deptId = row.deptId
  formData.value.username = row.username
  formData.value.nickname = row.nickname
  // 获得用户拥有的岗位集合
  formLoading.value = true
  try {
    formData.value.postIds = await PostApi.getUserPosts(row.id, row.deptId)
  } finally {
    formLoading.value = false
  }
  // 获得岗位列表
  postList.value = await PostApi.getSimplePostList()
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
    await PostApi.assignUserPost({
      userId: formData.value.id,
      deptId: formData.value.deptId,
      postIds: formData.value.postIds
    })
    message.success(t('common.updateSuccess'))
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
    deptId: -1,
    nickname: '',
    username: '',
    postIds: []
  }
  formRef.value?.resetFields()
}
</script>
