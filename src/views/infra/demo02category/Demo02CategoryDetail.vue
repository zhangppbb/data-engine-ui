<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-descriptions :column="1" border>
      <el-descriptions-item label="名字" label-align="right" width="80">
        {{ formData.name }}
      </el-descriptions-item>
      <el-descriptions-item label="名称规则" label-align="right" width="80">
        {{ formData.nameRule }}
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
import { Demo02CategoryApi } from '@/api/infra/demo02category'

/** 示例分类 详情 */
defineOptions({ name: 'Demo02CategoryDetail' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formData = ref({
  name: undefined,
  nameRule: undefined,
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
      formData.value = await Demo02CategoryApi.getDemo02Category(id)
    } finally {
      formLoading.value = false
    }
  } else {
    message.error(t('common.showNoData'))
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗
</script>
