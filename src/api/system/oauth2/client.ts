import request from '@/config/axios'

/** OAuth2 客户端 VO */
export interface OAuth2ClientVO {
  id: number
  clientId: string
  secret: string
  name: string
  logo: []
  description: string
  status: number
  accessTokenValiditySeconds: number
  refreshTokenValiditySeconds: number
  redirectUris: string[]
  autoApprove: boolean
  authorizedGrantTypes: string[]
  scopes: string[]
  authorities: string[]
  resourceIds: string[]
  additionalInformation: string
  isAdditionalInformationJson: boolean
  createTime: Date
}

/**
 * 查询OAuth2客户端分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} OAuth2客户端分页数据
 */
export const getOAuth2ClientPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/oauth2-client/page', params })
}

/**
 * 查询OAuth2客户端详情
 * @param {number} id 客户端ID
 * @returns {Promise<any>} OAuth2客户端详情
 */
export const getOAuth2Client = (id: number) => {
  return request.get({ url: '/admin-api/system/oauth2-client/get?id=' + id })
}

/**
 * 新增OAuth2客户端
 * @param {OAuth2ClientVO} data 客户端数据
 * @returns {Promise<any>} 新增结果
 */
export const createOAuth2Client = (data: OAuth2ClientVO) => {
  return request.post({ url: '/admin-api/system/oauth2-client/create', data })
}

/**
 * 修改OAuth2客户端
 * @param {OAuth2ClientVO} data 客户端数据
 * @returns {Promise<any>} 修改结果
 */
export const updateOAuth2Client = (data: OAuth2ClientVO) => {
  return request.put({ url: '/admin-api/system/oauth2-client/update', data })
}

/**
 * 删除OAuth2客户端
 * @param {number} id 客户端ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteOAuth2Client = (id: number) => {
  return request.delete({ url: '/admin-api/system/oauth2-client/delete?id=' + id })
}
