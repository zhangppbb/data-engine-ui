import request from '@/config/axios'

/** 租户 VO */
export interface TenantVO {
  id: number
  name: string
  contactName: string
  contactMobile: string
  status: number
  domain: string
  packageId: number
  username: string
  password: string
  expireTime: Date
  accountCount: number
  websites: string[]
  createTime: Date
}

/** 租户分页查询 VO */
export interface TenantPageReqVO extends PageParam {
  name?: string
  contactName?: string
  contactMobile?: string
  status?: number
  createTime?: Date[]
}

/** 租户导出查询 VO */
export interface TenantExportReqVO {
  name?: string
  contactName?: string
  contactMobile?: string
  status?: number
  createTime?: Date[]
}

/**
 * 查询租户分页列表
 * @param {TenantPageReqVO} params 分页查询参数
 * @returns {Promise<any>} 租户分页数据
 */
export const getTenantPage = (params: TenantPageReqVO) => {
  return request.get({ url: '/admin-api/system/tenant/page', params })
}

/**
 * 查询租户详情
 * @param {number} id 租户ID
 * @returns {Promise<any>} 租户详情
 */
export const getTenant = (id: number) => {
  return request.get({ url: '/admin-api/system/tenant/get?id=' + id })
}

/**
 * 新增租户
 * @param {TenantVO} data 租户数据
 * @returns {Promise<any>} 新增结果
 */
export const createTenant = (data: TenantVO) => {
  return request.post({ url: '/admin-api/system/tenant/create', data })
}

/**
 * 修改租户
 * @param {TenantVO} data 租户数据
 * @returns {Promise<any>} 修改结果
 */
export const updateTenant = (data: TenantVO) => {
  return request.put({ url: '/admin-api/system/tenant/update', data })
}

/**
 * 删除租户
 * @param {number} id 租户ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteTenant = (id: number) => {
  return request.delete({ url: '/admin-api/system/tenant/delete?id=' + id })
}

/**
 * 导出租户
 * @param {TenantExportReqVO} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportTenant = (params: TenantExportReqVO) => {
  return request.download({ url: '/admin-api/system/tenant/export-excel', params })
}

/**
 * 查询租户精简列表
 * @param {number} [id=0] 排除的租户ID（默认0）
 * @returns {Promise<any>} 租户精简列表
 */
export const getTenantSimpleList = (id: number = 0) => {
  return request.get({ url: '/admin-api/system/tenant/select-simple-list?id=' + id })
}
