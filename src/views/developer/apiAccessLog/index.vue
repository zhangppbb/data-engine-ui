<template>
  <ContentWrap>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">API 调用日志</h2>
    </div>

    <el-form :model="queryForm" inline label-width="100px" class="mb-4">
      <el-form-item label="请求URI">
        <el-input v-model="queryForm.requestUri" placeholder="请输入请求URI" />
      </el-form-item>
      <el-form-item label="响应状态码">
        <el-input v-model="queryForm.responseCode" type="number" placeholder="请输入状态码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loadLogs">搜索</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="logList" border>
      <el-table-column label="请求URI" prop="requestUri" />
      <el-table-column label="请求方法" prop="requestMethod" />
      <el-table-column label="响应状态码">
        <template #default="scope">
          <el-tag :type="getStatusCodeType(scope.row.responseCode)">
            {{ scope.row.responseCode }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="响应时间(ms)" prop="responseTime" />
      <el-table-column label="客户端IP" prop="clientIp" />
      <el-table-column label="访问时间" prop="accessTime" />
      <el-table-column label="操作" width="100">
        <template #default="scope">
          <el-button size="small" @click="viewDetail(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :total="total"
      v-model:current-page="queryForm.pageNo"
      v-model:page-size="queryForm.pageSize"
      :page-sizes="[10, 20, 30, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      background
      class="float-right mb-15px mt-15px"
      @size-change="loadLogs"
      @current-change="loadLogs"
    />
  </ContentWrap>

  <el-dialog title="日志详情" v-model="detailModalVisible">
    <div class="space-y-4">
      <div class="flex">
        <span class="w-32 text-gray-500">请求URI:</span>
        <span>{{ currentLog?.requestUri }}</span>
      </div>
      <div class="flex">
        <span class="w-32 text-gray-500">请求方法:</span>
        <span>{{ currentLog?.requestMethod }}</span>
      </div>
      <div class="flex">
        <span class="w-32 text-gray-500">请求参数:</span>
        <span>{{ currentLog?.requestParams || '无' }}</span>
      </div>
      <div class="flex">
        <span class="w-32 text-gray-500">响应状态码:</span>
        <span>{{ currentLog?.responseCode }}</span>
      </div>
      <div class="flex">
        <span class="w-32 text-gray-500">响应时间:</span>
        <span>{{ currentLog?.responseTime }}ms</span>
      </div>
      <div class="flex">
        <span class="w-32 text-gray-500">客户端IP:</span>
        <span>{{ currentLog?.clientIp }}</span>
      </div>
      <div class="flex">
        <span class="w-32 text-gray-500">访问时间:</span>
        <span>{{ currentLog?.accessTime }}</span>
      </div>
      <div v-if="currentLog?.errorMessage" class="flex">
        <span class="w-32 text-gray-500">错误信息:</span>
        <span class="text-red-500">{{ currentLog.errorMessage }}</span>
      </div>
    </div>
    <template #footer>
      <el-button @click="closeDetailModal">关闭</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Icon } from '@/components/Icon'

import * as ApiAccessLogApi from '@/api/developer/apiAccessLog'
import type { ApiAccessLogVO, ApiAccessLogQuery } from '@/api/developer/apiAccessLog'

const logList = ref<ApiAccessLogVO[]>([])
const total = ref(0)
const detailModalVisible = ref(false)
const currentLog = ref<ApiAccessLogVO | null>(null)

const queryForm = reactive({
  requestUri: '',
  responseCode: undefined,
  pageNo: 1,
  pageSize: 10
})

const loadLogs = async () => {
  const data: ApiAccessLogQuery = {
    requestUri: queryForm.requestUri || undefined,
    responseCode: queryForm.responseCode,
    pageNo: queryForm.pageNo,
    pageSize: queryForm.pageSize
  }

  const res = await ApiAccessLogApi.listApiAccessLogs(data)
  logList.value = res.data.list
  total.value = res.data.total
}

const resetForm = () => {
  queryForm.requestUri = ''
  queryForm.responseCode = undefined
  queryForm.pageNo = 1
  loadLogs()
}

const getStatusCodeType = (code: number) => {
  if (code >= 200 && code < 300) return 'success'
  if (code >= 300 && code < 400) return 'warning'
  if (code >= 400 && code < 500) return 'info'
  if (code >= 500) return 'danger'
  return 'info'
}

const viewDetail = (log: ApiAccessLogVO) => {
  currentLog.value = log
  detailModalVisible.value = true
}

const closeDetailModal = () => {
  detailModalVisible.value = false
}

onMounted(() => {
  loadLogs()
})
</script>
