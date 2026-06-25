<template>
  <ContentWrap>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">个人 API Key</h2>
      <el-button type="primary" @click="openCreateModal">
        <Icon icon="ep:plus" /> 创建 API Key
      </el-button>
    </div>

    <el-table :data="apiKeyList" border>
      <el-table-column label="Key名称" prop="name" />
      <el-table-column label="Key标识" prop="keyId" />
      <el-table-column label="类型" prop="typeName" />
      <el-table-column label="状态">
        <template #default="scope">
          <el-tag :type="scope.row.status === 1 ? 'success' : 'danger'">
            {{ scope.row.statusName }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="过期时间" prop="expireTime" />
      <el-table-column label="创建时间" prop="createTime" />
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button size="small" @click="copyApiKey(scope.row)">复制</el-button>
          <el-button 
            size="small" 
            :type="scope.row.status === 1 ? 'warning' : 'success'"
            @click="toggleStatus(scope.row)"
          >
            {{ scope.row.status === 1 ? '禁用' : '启用' }}
          </el-button>
          <el-button size="small" type="danger" @click="deleteApiKey(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </ContentWrap>

  <el-dialog title="创建 API Key" v-model="createModalVisible">
    <el-form :model="createForm" label-width="100px">
      <el-form-item label="Key名称" prop="name">
        <el-input v-model="createForm.name" placeholder="请输入Key名称" />
      </el-form-item>
      <el-form-item label="过期时间" prop="expireTime">
        <el-date-picker v-model="createForm.expireTime" type="datetime" placeholder="选择过期时间" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="closeCreateModal">取消</el-button>
      <el-button type="primary" @click="submitCreate">创建</el-button>
    </template>
  </el-dialog>

  <el-dialog title="API Key 创建成功" v-model="showApiKeyModal">
    <div class="mb-4">
      <p class="text-sm text-gray-500 mb-2">您的新API Key已创建成功，请妥善保管：</p>
      <el-input :value="newApiKey" readonly class="font-mono text-sm" />
    </div>
    <template #footer>
      <el-button @click="copyNewApiKey">复制</el-button>
      <el-button type="primary" @click="closeApiKeyModal">知道了</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Icon } from '@/components/Icon'
import * as ApiKeyApi from '@/api/developer/apiKey'
import type { ApiKeyVO, CreateApiKeyDTO } from '@/api/developer/apiKey'

const apiKeyList = ref<ApiKeyVO[]>([])
const createModalVisible = ref(false)
const showApiKeyModal = ref(false)
const newApiKey = ref('')

const createForm = reactive({
  name: '',
  expireTime: ''
})

const loadApiKeys = async () => {
  const res = await ApiKeyApi.listPersonalApiKeys()
  apiKeyList.value = res.data
}

const openCreateModal = () => {
  createForm.name = ''
  createForm.expireTime = ''
  createModalVisible.value = true
}

const closeCreateModal = () => {
  createModalVisible.value = false
}

const submitCreate = async () => {
  if (!createForm.name.trim()) {
    ElMessage.error('请输入Key名称')
    return
  }

  const data: CreateApiKeyDTO = {
    name: createForm.name,
    type: 'PERSONAL',
    expireTime: createForm.expireTime
  }

  const res = await ApiKeyApi.createApiKey(data)
  newApiKey.value = res.data.apiKey
  createModalVisible.value = false
  showApiKeyModal.value = true
  loadApiKeys()
}

const closeApiKeyModal = () => {
  showApiKeyModal.value = false
}

const copyNewApiKey = () => {
  navigator.clipboard.writeText(newApiKey.value)
  ElMessage.success('复制成功')
}

const copyApiKey = (row: ApiKeyVO) => {
  ElMessage.warning('完整的API Key仅在创建时显示一次')
}

const toggleStatus = async (row: ApiKeyVO) => {
  await ApiKeyApi.updateApiKeyStatus({
    id: row.id,
    status: row.status === 1 ? 0 : 1
  })
  row.status = row.status === 1 ? 0 : 1
  row.statusName = row.status === 1 ? '启用' : '禁用'
  ElMessage.success('状态已更新')
}

const deleteApiKey = async (row: ApiKeyVO) => {
  await ApiKeyApi.deleteApiKey(row.id)
  loadApiKeys()
  ElMessage.success('删除成功')
}

onMounted(() => {
  loadApiKeys()
})
</script>
