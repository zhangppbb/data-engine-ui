import request from '@/config/axios'

/** 租户套餐 VO */
export interface TenantPackageVO {
  id: number
  name: string
  status: number
  remark: string
  creator: string
  updater: string
  updateTime: string
  menuIds: number[]
  createTime: Date
}

/**
 * 查询租户套餐分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 租户套餐分页数据
 */
export const getTenantPackagePage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/tenant-package/page', params })
}

/**
 * 获得租户套餐详情
 * @param {number} id 套餐ID
 * @returns {Promise<any>} 租户套餐详情
 */
export const getTenantPackage = (id: number) => {
  return request.get({ url: '/admin-api/system/tenant-package/get?id=' + id })
}

/**
 * 新增租户套餐
 * @param {TenantPackageVO} data 套餐数据
 * @returns {Promise<any>} 新增结果
 */
export const createTenantPackage = (data: TenantPackageVO) => {
  return request.post({ url: '/admin-api/system/tenant-package/create', data })
}

/**
 * 修改租户套餐
 * @param {TenantPackageVO} data 套餐数据
 * @returns {Promise<any>} 修改结果
 */
export const updateTenantPackage = (data: TenantPackageVO) => {
  return request.put({ url: '/admin-api/system/tenant-package/update', data })
}

/**
 * 删除租户套餐
 * @param {number} id 套餐ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteTenantPackage = (id: number) => {
  return request.delete({ url: '/admin-api/system/tenant-package/delete?id=' + id })
}

/**
 * 获取租户套餐精简信息列表
 * @returns {Promise<any>} 租户套餐精简列表
 */
export const getTenantPackageList = () => {
  return request.get({ url: '/admin-api/system/tenant-package/simple-list' })
}
