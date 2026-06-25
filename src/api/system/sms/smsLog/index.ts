import request from '@/config/axios'

/** 短信日志 VO */
export interface SmsLogVO {
  id: number | null
  channelId: number | null
  channelCode: string
  templateId: number | null
  templateCode: string
  templateType: number | null
  templateContent: string
  templateParams: Map<string, object> | null
  apiTemplateId: string
  mobile: string
  userId: number | null
  userType: number | null
  sendStatus: number | null
  sendTime: Date | null
  apiSendCode: string
  apiSendMsg: string
  apiRequestId: string
  apiSerialNo: string
  receiveStatus: number | null
  receiveTime: Date | null
  apiReceiveCode: string
  apiReceiveMsg: string
  createTime: Date | null
}

/**
 * 查询短信日志分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 短信日志分页数据
 */
export const getSmsLogPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/sms-log/page', params })
}

/**
 * 导出短信日志
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportSmsLog = (params) => {
  return request.download({ url: '/admin-api/system/sms-log/export-excel', params })
}
