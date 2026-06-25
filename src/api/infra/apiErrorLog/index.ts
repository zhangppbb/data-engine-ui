import request from '@/config/axios'

/** API错误日志 VO */
export interface ApiErrorLogVO {
  id: number
  traceId: string
  userId: number
  userType: number
  applicationName: string
  requestMethod: string
  requestParams: string
  requestUrl: string
  userIp: string
  userAgent: string
  exceptionTime: Date
  exceptionName: string
  exceptionMessage: string
  exceptionRootCauseMessage: string
  exceptionStackTrace: string
  exceptionClassName: string
  exceptionFileName: string
  exceptionMethodName: string
  exceptionLineNumber: number
  processUserId: number
  processStatus: number
  processTime: Date
  resultCode: number
  createTime: Date
}

/**
 * 查询API错误日志分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} API错误日志分页数据
 */
export const getApiErrorLogPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/infra/api-error-log/page', params })
}

/**
 * 更新API错误日志的处理状态
 * @param {number} id 日志ID
 * @param {number} processStatus 处理状态
 * @returns {Promise<any>} 更新结果
 */
export const updateApiErrorLogPage = (id: number, processStatus: number) => {
  return request.put({
    url: '/admin-api/infra/api-error-log/update-status?id=' + id + '&processStatus=' + processStatus
  })
}

/**
 * 导出API错误日志
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportApiErrorLog = (params) => {
  return request.download({
    url: '/admin-api/infra/api-error-log/export-excel',
    params
  })
}
