import request from '@/config/axios'

/** 操作日志 VO */
export type OperateLogVO = {
  id: number
  traceId: string
  userType: number
  userId: number
  userName: string
  type: string
  subType: string
  bizId: number
  action: string
  extra: string
  requestMethod: string
  requestUrl: string
  userIp: string
  userAgent: string
  creator: string
  creatorName: string
  createTime: Date
}

/**
 * 查询操作日志分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 操作日志分页数据
 */
export const getOperateLogPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/operate-log/page', params })
}

/**
 * 导出操作日志
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportOperateLog = (params: any) => {
  return request.download({ url: '/admin-api/system/operate-log/export-excel', params })
}
