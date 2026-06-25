import request from '@/config/axios'

/** 角色 VO */
export interface RoleVO {
  id: number
  name: string
  code: string
  sort: number
  status: number
  type: number
  dataScope: number
  dataScopeDeptIds: number[]
  createTime: Date
}

/**
 * 查询角色分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 角色分页数据
 */
export const getRolePage = async (params: PageParam) => {
  return await request.get({ url: '/admin-api/system/role/page', params })
}

/**
 * 查询角色（精简）列表
 * @returns {Promise<RoleVO[]>} 角色精简列表
 */
export const getSimpleRoleList = async (): Promise<RoleVO[]> => {
  return await request.get({ url: '/admin-api/system/role/simple-list' })
}

/**
 * 查询角色详情
 * @param {number} id 角色ID
 * @returns {Promise<any>} 角色详情
 */
export const getRole = async (id: number) => {
  return await request.get({ url: '/admin-api/system/role/get?id=' + id })
}

/**
 * 新增角色
 * @param {RoleVO} data 角色数据
 * @returns {Promise<any>} 新增结果
 */
export const createRole = async (data: RoleVO) => {
  return await request.post({ url: '/admin-api/system/role/create', data })
}

/**
 * 修改角色
 * @param {RoleVO} data 角色数据
 * @returns {Promise<any>} 修改结果
 */
export const updateRole = async (data: RoleVO) => {
  return await request.put({ url: '/admin-api/system/role/update', data })
}

/**
 * 删除角色
 * @param {number} id 角色ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteRole = async (id: number) => {
  return await request.delete({ url: '/admin-api/system/role/delete?id=' + id })
}

/**
 * 导出角色
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportRole = (params: any) => {
  return request.download({
    url: '/admin-api/system/role/export-excel',
    params
  })
}

/**
 * 查询角色关联的所有用户
 * @param {number} id 角色ID
 * @returns {Promise<any>} 角色关联用户详情
 */
export const getUsers = async (id: number) => {
  return await request.get({ url: '/admin-api/system/role/get?id=' + id })
}
