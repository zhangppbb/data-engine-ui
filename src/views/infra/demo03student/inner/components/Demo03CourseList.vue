<template>
  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" :stripe="true" :show-overflow-tooltip="true">
      <el-table-column label="编号" align="center" prop="id" />
      <el-table-column label="名字" align="center" prop="name" />
      <el-table-column label="分数" align="center" prop="score" />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        :formatter="datetimeFormatter"
        width="180px"
      />
    </el-table>
  </ContentWrap>
</template>
<script setup lang="ts">
import { datetimeFormatter } from '@/utils/formatTime'
import * as Demo03StudentApi from '@/api/infra/demo03student/inner'

const props = defineProps<{
  studentId: number | undefined // 学生编号（主表的关联字段）
}>()
const loading = ref(false) // 列表的加载中
const list = ref([]) // 列表的数据

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    list.value = await Demo03StudentApi.getDemo03CourseListByStudentId(props.studentId)
  } finally {
    loading.value = false
  }
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
