import request from '@/config/axios'

/** 站内信模板 VO */
export interface NotifyTemplateVO {
  id?: number
  name: string
  nickname: string
  code: string
  content: string
  type?: number
  params: string
  status: number
  remark: string
}

/** 站内信发送请求 VO */
export interface NotifySendReqVO {
  userId: number | null
  templateCode: string
  templateParams: Map<String, Object>
}

/**
 * 查询站内信模板分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 站内信模板分页数据
 */
export const getNotifyTemplatePage = async (params: PageParam) => {
  return await request.get({ url: '/admin-api/system/notify-template/page', params })
}

/**
 * 查询站内信模板详情
 * @param {number} id 模板ID
 * @returns {Promise<any>} 站内信模板详情
 */
export const getNotifyTemplate = async (id: number) => {
  return await request.get({ url: '/admin-api/system/notify-template/get?id=' + id })
}

/**
 * 新增站内信模板
 * @param {NotifyTemplateVO} data 模板数据
 * @returns {Promise<any>} 新增结果
 */
export const createNotifyTemplate = async (data: NotifyTemplateVO) => {
  return await request.post({ url: '/admin-api/system/notify-template/create', data })
}

/**
 * 修改站内信模板
 * @param {NotifyTemplateVO} data 模板数据
 * @returns {Promise<any>} 修改结果
 */
export const updateNotifyTemplate = async (data: NotifyTemplateVO) => {
  return await request.put({ url: '/admin-api/system/notify-template/update', data })
}

/**
 * 删除站内信模板
 * @param {number} id 模板ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteNotifyTemplate = async (id: number) => {
  return await request.delete({ url: '/admin-api/system/notify-template/delete?id=' + id })
}

/**
 * 发送站内信
 * @param {NotifySendReqVO} data 发送参数，包含用户ID、模板编码和模板参数
 * @returns {Promise<any>} 发送结果
 */
export const sendNotify = (data: NotifySendReqVO) => {
  return request.post({ url: '/admin-api/system/notify-template/send-notify', data })
}
