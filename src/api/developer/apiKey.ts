import request from '@/config/axios'

/** 创建API密钥DTO */
export interface CreateApiKeyDTO {
  name: string
  type: string
  teamId?: number
  expireTime?: string
  permissions?: string[]
}

/** 更新API密钥DTO */
export interface UpdateApiKeyDTO {
  id: number
  name: string
  expireTime?: string
}

/** API密钥状态更新DTO */
export interface ApiKeyStatusDTO {
  id: number
  status: number
}

/** API密钥VO */
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

/**
 * 创建API密钥
 * @param {CreateApiKeyDTO} data 创建参数，包含名称、类型、团队ID、过期时间、权限列表
 * @returns {Promise} 创建结果
 */
export const createApiKey = (data: CreateApiKeyDTO) => {
  return request.post({ url: '/admin-api/api-key/create', data })
}

/**
 * 更新API密钥
 * @param {UpdateApiKeyDTO} data 更新参数，包含ID、名称、过期时间
 * @returns {Promise} 更新结果
 */
export const updateApiKey = (data: UpdateApiKeyDTO) => {
  return request.post({ url: '/admin-api/api-key/update', data })
}

/**
 * 删除API密钥
 * @param {number} id API密钥ID
 * @returns {Promise} 删除结果
 */
export const deleteApiKey = (id: number) => {
  return request.post({ url: `/api-key/delete/${id}` })
}

/**
 * 更新API密钥状态（启用/停用）
 * @param {ApiKeyStatusDTO} data 状态更新参数，包含ID和状态值
 * @returns {Promise} 更新结果
 */
export const updateApiKeyStatus = (data: ApiKeyStatusDTO) => {
  return request.post({ url: '/admin-api/api-key/status', data })
}

/**
 * 根据ID获取API密钥详情
 * @param {number} id API密钥ID
 * @returns {Promise} API密钥详情
 */
export const getApiKey = (id: number) => {
  return request.get({ url: `/api-key/get/${id}` })
}

/**
 * 获取个人API密钥列表
 * @returns {Promise} 个人API密钥列表
 */
export const listPersonalApiKeys = () => {
  return request.get({ url: '/admin-api/api-key/personal/list' })
}

/**
 * 获取团队API密钥列表
 * @param {number} teamId 团队ID
 * @returns {Promise} 团队API密钥列表
 */
export const listTeamApiKeys = (teamId: number) => {
  return request.get({ url: `/api-key/team/list/${teamId}` })
}
