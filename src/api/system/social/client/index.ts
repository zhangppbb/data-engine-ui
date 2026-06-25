import request from '@/config/axios'

/** 社交客户端 VO */
export interface SocialClientVO {
  id: number
  name: string
  socialType: number
  userType: number
  clientId: string
  clientSecret: string
  agentId: string
  status: number
}

/**
 * 查询社交客户端分页列表
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 社交客户端分页数据
 */
export const getSocialClientPage = async (params) => {
  return await request.get({ url: `/system/social-client/page`, params })
}

/**
 * 查询社交客户端详情
 * @param {number} id 客户端ID
 * @returns {Promise<any>} 社交客户端详情
 */
export const getSocialClient = async (id: number) => {
  return await request.get({ url: `/system/social-client/get?id=` + id })
}

/**
 * 新增社交客户端
 * @param {SocialClientVO} data 社交客户端数据
 * @returns {Promise<any>} 新增结果
 */
export const createSocialClient = async (data: SocialClientVO) => {
  return await request.post({ url: `/system/social-client/create`, data })
}

/**
 * 修改社交客户端
 * @param {SocialClientVO} data 社交客户端数据
 * @returns {Promise<any>} 修改结果
 */
export const updateSocialClient = async (data: SocialClientVO) => {
  return await request.put({ url: `/system/social-client/update`, data })
}

/**
 * 删除社交客户端
 * @param {number} id 客户端ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteSocialClient = async (id: number) => {
  return await request.delete({ url: `/system/social-client/delete?id=` + id })
}
