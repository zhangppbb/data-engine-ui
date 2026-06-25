import request from '@/config/axios'

export interface ApiAccessLogQuery {
  keyId?: string
  userId?: number
  teamId?: number
  requestUri?: string
  responseCode?: number
  pageNo?: number
  pageSize?: number
}

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

export const listApiAccessLogs = (data: ApiAccessLogQuery) => {
  return request.post({ url: '/admin-api/api-access-log/list', data })
}

export const getApiAccessLog = (id: number) => {
  return request.get({ url: `/api-access-log/get/${id}` })
}
