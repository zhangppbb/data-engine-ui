import request from '@/config/axios'

export interface CreateApiKeyDTO {
  name: string
  type: string
  teamId?: number
  expireTime?: string
  permissions?: string[]
}

export interface UpdateApiKeyDTO {
  id: number
  name: string
  expireTime?: string
}

export interface ApiKeyStatusDTO {
  id: number
  status: number
}

export interface ApiKeyVO {
  id: number
  keyId: string
  apiKey?: string
  name: string
  type: string
  typeName: string
  userId: number
  username: string
  teamId?: number
  teamName?: string
  status: number
  statusName: string
  expireTime?: string
  permissions: string[]
  createTime: string
  callCount: number
}

export const createApiKey = (data: CreateApiKeyDTO) => {
  return request.post({ url: '/admin-api/api-key/create', data })
}

export const updateApiKey = (data: UpdateApiKeyDTO) => {
  return request.post({ url: '/admin-api/api-key/update', data })
}

export const deleteApiKey = (id: number) => {
  return request.post({ url: `/api-key/delete/${id}` })
}

export const updateApiKeyStatus = (data: ApiKeyStatusDTO) => {
  return request.post({ url: '/admin-api/api-key/status', data })
}

export const getApiKey = (id: number) => {
  return request.get({ url: `/api-key/get/${id}` })
}

export const listPersonalApiKeys = () => {
  return request.get({ url: '/admin-api/api-key/personal/list' })
}

export const listTeamApiKeys = (teamId: number) => {
  return request.get({ url: `/api-key/team/list/${teamId}` })
}
