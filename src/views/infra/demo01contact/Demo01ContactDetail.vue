<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-descriptions :column="1" border>
      <el-descriptions-item label="名字" label-align="right" width="80">
        {{ formData.name }}
      </el-descriptions-item>
      <el-descriptions-item label="性别" label-align="right" width="80">
        <dict-tag :type="DICT_TYPE.SYSTEM_USER_SEX" :value="formData.sex" />
      </el-descriptions-item>
      <el-descriptions-item label="出生年" label-align="right">
        {{ formatDate(formData.birthday) }}
      </el-descriptions-item>
      <el-descriptions-item label="简介" label-align="right">
        <div v-html="formData.description"></div>
      </el-descriptions-item>
      <el-descriptions-item label="头像" label-align="right">
        <UploadFile v-model="formData.avatar" :disabled="true" />
      </el-descriptions-item>
      <el-descriptions-item label="创建部门" label-align="right">
        <DeptSelect v-model="formData.createDept" :disabled="true" />
      </el-descriptions-item>
    </el-descriptions>
    <template #footer>
      <el-button @click="dialogVisible = false">关 闭</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { DICT_TYPE } from '@/utils/dict'
import { formatDate } from '@/utils/formatTime'
import { Demo01ContactApi } from '@/api/infra/demo01contact'

/** 示例联系人 详情 */
defineOptions({ name: 'Demo01ContactDetail' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formData = ref({
  name: undefined,
  sex: undefined,
  birthday: undefined,
  description: undefined,
  avatar: [],
  createDept: undefined,
  version: undefined
})

/** 打开弹窗 */
const open = async (id: number) => {
  // 查看时，设置数据
  if (id) {
    dialogVisible.value = true
    dialogTitle.value = t('action.detail')
    formLoading.value = true
    try {
      formData.value = await Demo01ContactApi.getDemo01Contact(id)
    } finally {
      formLoading.value = false
    }
  } else {
    message.error(t('common.showNoData'))
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗
</script>
