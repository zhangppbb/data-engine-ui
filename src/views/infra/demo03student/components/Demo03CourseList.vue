<template>
  <el-table
    v-loading="loading"
    :data="list"
    :stripe="true"
    :show-overflow-tooltip="true"
    highlight-current-row
  >
    <el-table-column label="序号" type="index" align="center" width="60" />
    <el-table-column label="名字" align="center" prop="name" />
    <el-table-column label="分数" align="center" prop="score" />
  </el-table>
</template>
<script setup lang="ts">
import { Demo03StudentApi } from '@/api/infra/demo03student'

const props = defineProps<{
  studentId: undefined // 学生编号（主表的关联字段）
}>()
const loading = ref(false) // 列表的加载中
const list = ref([]) // 列表的数据

/** 监听主表的关联字段的变化，加载对应的子表数据 */
watch(
  () => props.studentId,
  async (val) => {
    // 1. 重置列表
    list.value = []
    // 2. val 非空，则加载数据
    if (!val) {
      return
    }
    loading.value = true
    try {
      list.value = await Demo03StudentApi.getDemo03CourseListByStudentId(val)
    } finally {
      loading.value = false
    }
  },
  { immediate: true }
)
</script>
