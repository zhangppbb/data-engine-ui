import request from '@/config/axios'

/** 邮箱账号 VO */
export interface MailAccountVO {
  id: number
  mail: string
  username: string
  password: string
  host: string
  port: number
  sslEnable: boolean
  starttlsEnable: boolean
}

/**
 * 查询邮箱账号分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 邮箱账号分页数据
 */
export const getMailAccountPage = async (params: PageParam) => {
  return await request.get({ url: '/admin-api/system/mail-account/page', params })
}

/**
 * 查询邮箱账号详情
 * @param {number} id 账号ID
 * @returns {Promise<any>} 邮箱账号详情
 */
export const getMailAccount = async (id: number) => {
  return await request.get({ url: '/admin-api/system/mail-account/get?id=' + id })
}

/**
 * 新增邮箱账号
 * @param {MailAccountVO} data 邮箱账号数据
 * @returns {Promise<any>} 新增结果
 */
export const createMailAccount = async (data: MailAccountVO) => {
  return await request.post({ url: '/admin-api/system/mail-account/create', data })
}

/**
 * 修改邮箱账号
 * @param {MailAccountVO} data 邮箱账号数据
 * @returns {Promise<any>} 修改结果
 */
export const updateMailAccount = async (data: MailAccountVO) => {
  return await request.put({ url: '/admin-api/system/mail-account/update', data })
}

/**
 * 删除邮箱账号
 * @param {number} id 账号ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteMailAccount = async (id: number) => {
  return await request.delete({ url: '/admin-api/system/mail-account/delete?id=' + id })
}

/**
 * 获得邮箱账号精简列表
 * @returns {Promise<any>} 邮箱账号精简列表
 */
export const getSimpleMailAccountList = async () => {
  return request.get({ url: '/admin-api/system/mail-account/simple-list' })
}
