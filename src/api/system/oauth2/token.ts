import request from '@/config/axios'

/** OAuth2 Token VO */
export interface OAuth2TokenVO {
  id: number
  accessToken: string
  refreshToken: string
  userId: number
  userType: number
  clientId: string
  createTime: Date
  expiresTime: Date
}

/**
 * 查询OAuth2 Token分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} Token分页数据
 */
export const getAccessTokenPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/oauth2-token/page', params })
}

/**
 * 删除OAuth2 Token
 * @param {string} accessToken 待删除的accessToken
 * @returns {Promise<any>} 删除结果
 */
export const deleteAccessToken = (accessToken: string) => {
  return request.delete({ url: '/admin-api/system/oauth2-token/delete?accessToken=' + accessToken })
}
