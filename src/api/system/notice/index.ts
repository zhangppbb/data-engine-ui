import request from '@/config/axios'

/** 公告 VO */
export interface NoticeVO {
  id: number | undefined
  title: string
  type: number
  content: string
  status: number
  remark: string
  creator: string
  createTime: Date
}

/**
 * 查询公告分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 公告分页数据
 */
export const getNoticePage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/notice/page', params })
}

/**
 * 查询公告详情
 * @param {number} id 公告ID
 * @returns {Promise<any>} 公告详情
 */
export const getNotice = (id: number) => {
  return request.get({ url: '/admin-api/system/notice/get?id=' + id })
}

/**
 * 新增公告
 * @param {NoticeVO} data 公告数据
 * @returns {Promise<any>} 新增结果
 */
export const createNotice = (data: NoticeVO) => {
  return request.post({ url: '/admin-api/system/notice/create', data })
}

/**
 * 修改公告
 * @param {NoticeVO} data 公告数据
 * @returns {Promise<any>} 修改结果
 */
export const updateNotice = (data: NoticeVO) => {
  return request.put({ url: '/admin-api/system/notice/update', data })
}

/**
 * 删除公告
 * @param {number} id 公告ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteNotice = (id: number) => {
  return request.delete({ url: '/admin-api/system/notice/delete?id=' + id })
}

/**
 * 推送公告
 * @param {number} id 公告ID
 * @returns {Promise<any>} 推送结果
 */
export const pushNotice = (id: number) => {
  return request.post({ url: '/admin-api/system/notice/push?id=' + id })
}
