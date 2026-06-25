import request from '@/config/axios'

/** 公众号账号 VO */
export interface AccountVO {
  id: number
  name: string
}

/**
 * 创建公众号账号
 * @param {any} data 公众号账号数据
 * @returns {Promise<any>} 创建结果
 */
export const createAccount = async (data) => {
  return await request.post({ url: '/admin-api/mp/account/create', data })
}

/**
 * 更新公众号账号
 * @param {any} data 公众号账号数据
 * @returns {Promise<any>} 更新结果
 */
export const updateAccount = async (data) => {
  return request.put({ url: '/admin-api/mp/account/update', data: data })
}

/**
 * 删除公众号账号
 * @param {any} id 公众号账号ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteAccount = async (id) => {
  return request.delete({ url: '/admin-api/mp/account/delete?id=' + id, method: 'delete' })
}

/**
 * 获得公众号账号详情
 * @param {any} id 公众号账号ID
 * @returns {Promise<any>} 公众号账号详情
 */
export const getAccount = async (id) => {
  return request.get({ url: '/admin-api/mp/account/get?id=' + id })
}

/**
 * 获得公众号账号分页列表
 * @param {any} query 分页查询参数
 * @returns {Promise<any>} 公众号账号分页数据
 */
export const getAccountPage = async (query) => {
  return request.get({ url: '/admin-api/mp/account/page', params: query })
}

/**
 * 获取公众号账号精简信息列表
 * @returns {Promise<any>} 公众号账号精简列表
 */
export const getSimpleAccountList = async () => {
  return request.get({ url: '/admin-api/mp/account/list-all-simple' })
}

/**
 * 生成公众号二维码
 * @param {any} id 公众号账号ID
 * @returns {Promise<any>} 生成结果
 */
export const generateAccountQrCode = async (id) => {
  return request.put({ url: '/admin-api/mp/account/generate-qr-code?id=' + id })
}

/**
 * 清空公众号API配额
 * @param {any} id 公众号账号ID
 * @returns {Promise<any>} 清空结果
 */
export const clearAccountQuota = async (id) => {
  return request.put({ url: '/admin-api/mp/account/clear-quota?id=' + id })
}
