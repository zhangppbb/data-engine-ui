import request from '@/config/axios'

/** 短信渠道 VO */
export interface SmsChannelVO {
  id: number
  code: string
  status: number
  signature: string
  remark: string
  apiKey: string
  apiSecret: string
  callbackUrl: string
  createTime: Date
}

/**
 * 查询短信渠道分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 短信渠道分页数据
 */
export const getSmsChannelPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/sms-channel/page', params })
}

/**
 * 获得短信渠道精简列表
 * @returns {Promise<any>} 短信渠道精简列表
 */
export function getSimpleSmsChannelList() {
  return request.get({ url: '/admin-api/system/sms-channel/simple-list' })
}

/**
 * 查询短信渠道详情
 * @param {number} id 渠道ID
 * @returns {Promise<any>} 短信渠道详情
 */
export const getSmsChannel = (id: number) => {
  return request.get({ url: '/admin-api/system/sms-channel/get?id=' + id })
}

/**
 * 新增短信渠道
 * @param {SmsChannelVO} data 短信渠道数据
 * @returns {Promise<any>} 新增结果
 */
export const createSmsChannel = (data: SmsChannelVO) => {
  return request.post({ url: '/admin-api/system/sms-channel/create', data })
}

/**
 * 修改短信渠道
 * @param {SmsChannelVO} data 短信渠道数据
 * @returns {Promise<any>} 修改结果
 */
export const updateSmsChannel = (data: SmsChannelVO) => {
  return request.put({ url: '/admin-api/system/sms-channel/update', data })
}

/**
 * 删除短信渠道
 * @param {number} id 渠道ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteSmsChannel = (id: number) => {
  return request.delete({ url: '/admin-api/system/sms-channel/delete?id=' + id })
}
