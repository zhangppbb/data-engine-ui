import request from '@/config/axios'

/** 邮件日志 VO */
export interface MailLogVO {
  id: number
  userId: number
  userType: number
  toMails: string[]
  ccMails?: string[]
  bccMails?: string[]
  accountId: number
  fromMail: string
  templateId: number
  templateCode: string
  templateNickname: string
  templateTitle: string
  templateContent: string
  templateParams: string
  sendStatus: number
  sendTime: Date
  sendMessageId: string
  sendException: string
}

/**
 * 查询邮件日志分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 邮件日志分页数据
 */
export const getMailLogPage = async (params: PageParam) => {
  return await request.get({ url: '/admin-api/system/mail-log/page', params })
}

/**
 * 查询邮件日志详情
 * @param {number} id 日志ID
 * @returns {Promise<any>} 邮件日志详情
 */
export const getMailLog = async (id: number) => {
  return await request.get({ url: '/admin-api/system/mail-log/get?id=' + id })
}
