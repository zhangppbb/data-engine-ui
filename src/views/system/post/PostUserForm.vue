<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" width="800">
    <el-form ref="postUserFormRef" v-loading="formLoading" :model="formData" label-width="80px">
      <el-form-item label="岗位名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入岗位名称" />
      </el-form-item>
      <el-form-item label="用户">
        <el-select v-model="formData.userIds" placeholder="请选择用户" multiple clearable style="width: 100%" filterable>
          <el-option v-for="item in userList" :key="item.id" :label="item.nickname" :value="item.id" />
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
import * as PostApi from '@/api/system/post'
import * as UserApi from '@/api/system/user'
defineOptions({ name: 'PostUserForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('分配用户') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const userList = ref<UserApi.UserVO[]>([]) // 系统用户
const formData = ref({
  postId: -1,
  name: '',
  userIds: []
})
const postUserFormRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (row: PostApi.PostVO) => {
  dialogVisible.value = true
  resetForm()
  if (userList.value.length === 0) {
    userList.value = await UserApi.getSimpleUserList();
  }
  formData.value.postId = row.id;
  formData.value.name = row.name;
  formData.value.userIds = await PostApi.getPostUsers(row.id);
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!postUserFormRef) return
  const valid = await postUserFormRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as PostApi.PostUserVO
    if (data.postId) {
      await PostApi.assignPostUser(data)
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
    postId: undefined,
    name: '',
    userIds: []
  } as any
  postUserFormRef.value?.resetFields()
}
</script>
