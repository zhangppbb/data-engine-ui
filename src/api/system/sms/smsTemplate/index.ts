import request from '@/config/axios'

/** 短信模板 VO */
export interface SmsTemplateVO {
  id?: number
  type?: number
  status: number
  code: string
  name: string
  content: string
  remark: string
  apiTemplateId: string
  channelId?: number
  channelCode?: string
  params?: string[]
  createTime?: Date
}

/** 发送短信请求 VO */
export interface SendSmsReqVO {
  mobile: string
  templateCode: string
  templateParams: Map<String, Object>
}

/**
 * 查询短信模板分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 短信模板分页数据
 */
export const getSmsTemplatePage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/sms-template/page', params })
}

/**
 * 查询短信模板详情
 * @param {number} id 模板ID
 * @returns {Promise<any>} 短信模板详情
 */
export const getSmsTemplate = (id: number) => {
  return request.get({ url: '/admin-api/system/sms-template/get?id=' + id })
}

/**
 * 新增短信模板
 * @param {SmsTemplateVO} data 短信模板数据
 * @returns {Promise<any>} 新增结果
 */
export const createSmsTemplate = (data: SmsTemplateVO) => {
  return request.post({ url: '/admin-api/system/sms-template/create', data })
}

/**
 * 修改短信模板
 * @param {SmsTemplateVO} data 短信模板数据
 * @returns {Promise<any>} 修改结果
 */
export const updateSmsTemplate = (data: SmsTemplateVO) => {
  return request.put({ url: '/admin-api/system/sms-template/update', data })
}

/**
 * 删除短信模板
 * @param {number} id 模板ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteSmsTemplate = (id: number) => {
  return request.delete({ url: '/admin-api/system/sms-template/delete?id=' + id })
}

/**
 * 导出短信模板
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportSmsTemplate = (params) => {
  return request.download({
    url: '/admin-api/system/sms-template/export-excel',
    params
  })
}

/**
 * 发送短信
 * @param {SendSmsReqVO} data 发送参数，包含手机号、模板编码和模板参数
 * @returns {Promise<any>} 发送结果
 */
export const sendSms = (data: SendSmsReqVO) => {
  return request.post({ url: '/admin-api/system/sms-template/send-sms', data })
}
