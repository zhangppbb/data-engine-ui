import request from '@/config/axios'

/** 邮件模板 VO */
export interface MailTemplateVO {
  id: number
  name: string
  code: string
  accountId: number
  nickname: string
  title: string
  content: string
  status: number
  remark: string
}

/** 邮件发送请求 VO */
export interface MailSendReqVO {
  toMails: string[]
  ccMails?: string[]
  bccMails?: string[]
  templateCode: string
  templateParams: Map<String, Object>
}

/**
 * 查询邮件模版分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 邮件模版分页数据
 */
export const getMailTemplatePage = async (params: PageParam) => {
  return await request.get({ url: '/admin-api/system/mail-template/page', params })
}

/**
 * 查询邮件模版详情
 * @param {number} id 模版ID
 * @returns {Promise<any>} 邮件模版详情
 */
export const getMailTemplate = async (id: number) => {
  return await request.get({ url: '/admin-api/system/mail-template/get?id=' + id })
}

/**
 * 新增邮件模版
 * @param {MailTemplateVO} data 邮件模版数据
 * @returns {Promise<any>} 新增结果
 */
export const createMailTemplate = async (data: MailTemplateVO) => {
  return await request.post({ url: '/admin-api/system/mail-template/create', data })
}

/**
 * 修改邮件模版
 * @param {MailTemplateVO} data 邮件模版数据
 * @returns {Promise<any>} 修改结果
 */
export const updateMailTemplate = async (data: MailTemplateVO) => {
  return await request.put({ url: '/admin-api/system/mail-template/update', data })
}

/**
 * 删除邮件模版
 * @param {number} id 模版ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteMailTemplate = async (id: number) => {
  return await request.delete({ url: '/admin-api/system/mail-template/delete?id=' + id })
}

/**
 * 发送邮件
 * @param {MailSendReqVO} data 发送参数，包含收件人、模板编码和模板参数
 * @returns {Promise<any>} 发送结果
 */
export const sendMail = (data: MailSendReqVO) => {
  return request.post({ url: '/admin-api/system/mail-template/send-mail', data })
}
