import request from '@/config/axios'

/** 登录日志 VO */
export interface LoginLogVO {
  id: number
  logType: number
  traceId: number
  userId: number
  userType: number
  username: string
  result: number
  status: number
  userIp: string
  userAgent: string
  createTime: Date
}

/**
 * 查询登录日志分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 登录日志分页数据
 */
export const getLoginLogPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/login-log/page', params })
}

/**
 * 导出登录日志
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportLoginLog = (params) => {
  return request.download({ url: '/admin-api/system/login-log/export-excel', params })
}
