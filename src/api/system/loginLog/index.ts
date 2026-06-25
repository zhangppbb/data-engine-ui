import request from '@/config/axios'

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

// 查询登录日志列表
export const getLoginLogPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/login-log/page', params })
}

// 导出登录日志
export const exportLoginLog = (params) => {
  return request.download({ url: '/admin-api/system/login-log/export-excel', params })
}
