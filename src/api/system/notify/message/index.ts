import request from '@/config/axios'
import qs from 'qs'

/** 站内信消息 VO */
export interface NotifyMessageVO {
  id: number
  userId: number
  userType: number
  templateId: number
  templateCode: string
  templateNickname: string
  templateContent: string
  templateType: number
  templateParams: string
  readStatus: boolean
  readTime: Date
  createTime: Date
}

/**
 * 查询站内信消息分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 站内信消息分页数据
 */
export const getNotifyMessagePage = async (params: PageParam) => {
  return await request.get({ url: '/admin-api/system/notify-message/page', params })
}

/**
 * 获得我的站内信分页
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 我的站内信分页数据
 */
export const getMyNotifyMessagePage = async (params: PageParam) => {
  return await request.get({ url: '/admin-api/system/notify-message/my-page', params })
}

/**
 * 批量标记站内信已读
 * @param {number[]} ids 站内信ID数组
 * @returns {Promise<any>} 标记结果
 */
export const updateNotifyMessageRead = async (ids) => {
  return await request.put({
    url: '/admin-api/system/notify-message/update-read?' + qs.stringify({ ids: ids }, { indices: false })
  })
}

/**
 * 标记所有站内信为已读
 * @returns {Promise<any>} 标记结果
 */
export const updateAllNotifyMessageRead = async () => {
  return await request.put({ url: '/admin-api/system/notify-message/update-all-read' })
}

/**
 * 获取当前用户的最新站内信列表
 * @returns {Promise<any>} 未读站内信列表
 */
export const getUnreadNotifyMessageList = async () => {
  return await request.get({ url: '/admin-api/system/notify-message/get-unread-list' })
}

/**
 * 获得当前用户的未读站内信数量
 * @returns {Promise<any>} 未读数量
 */
export const getUnreadNotifyMessageCount = async () => {
  return await request.get({ url: '/admin-api/system/notify-message/get-unread-count' })
}
