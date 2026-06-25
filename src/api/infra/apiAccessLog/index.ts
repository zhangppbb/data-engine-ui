import request from '@/config/axios'

/** API访问日志 VO */
export interface ApiAccessLogVO {
  id: number
  traceId: string
  userId: number
  userType: number
  applicationName: string
  requestMethod: string
  requestParams: string
  responseBody: string
  requestUrl: string
  userIp: string
  userAgent: string
  operateModule: string
  operateName: string
  operateType: number
  beginTime: Date
  endTime: Date
  duration: number
  resultCode: number
  resultMsg: string
  createTime: Date
}

/**
 * 查询API访问日志分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} API访问日志分页数据
 */
export const getApiAccessLogPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/infra/api-access-log/page', params })
}

/**
 * 导出API访问日志
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportApiAccessLog = (params) => {
  return request.download({ url: '/admin-api/infra/api-access-log/export-excel', params })
}
