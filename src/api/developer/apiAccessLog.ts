import request from '@/config/axios'

/** API访问日志查询参数 */
export interface ApiAccessLogQuery {
  keyId?: string
  userId?: number
  teamId?: number
  requestUri?: string
  responseCode?: number
  pageNo?: number
  pageSize?: number
}

/** API访问日志VO */
export interface ApiAccessLogVO {
  id: number
  keyId: string
  userId: number
  teamId?: number
  requestUri: string
  requestMethod: string
  requestParams?: string
  responseCode: number
  responseTime: number
  clientIp: string
  errorMessage?: string
  accessTime: string
}

/**
 * 分页查询API访问日志列表
 * @param {ApiAccessLogQuery} data 查询参数，包含keyId、userId、teamId、requestUri、responseCode及分页参数
 * @returns {Promise} API访问日志分页列表
 */
export const listApiAccessLogs = (data: ApiAccessLogQuery) => {
  return request.post({ url: '/admin-api/api-access-log/list', data })
}

/**
 * 根据ID获取API访问日志详情
 * @param {number} id API访问日志ID
 * @returns {Promise} API访问日志详情
 */
export const getApiAccessLog = (id: number) => {
  return request.get({ url: `/api-access-log/get/${id}` })
}
