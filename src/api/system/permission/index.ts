import request from '@/config/axios'

/** 分配用户角色请求 VO */
export interface PermissionAssignUserRoleReqVO {
  userId: number
  deptId: number
  roleIds: number[]
}

/** 分配角色菜单请求 VO */
export interface PermissionAssignRoleMenuReqVO {
  roleId: number
  menuIds: number[]
}

/** 分配角色数据权限请求 VO */
export interface PermissionAssignRoleDataScopeReqVO {
  roleId: number
  dataScope: number
  dataScopeDeptIds: number[]
}

/** 分配角色用户请求 VO */
export interface PermissionAssignRoleUsersReqVO{
  roleId: number
  userIds: number[]
}

/**
 * 查询角色拥有的菜单权限
 * @param {number} roleId 角色ID
 * @returns {Promise<any>} 角色菜单权限列表
 */
export const getRoleMenuList = async (roleId: number) => {
  return await request.get({ url: '/admin-api/system/permission/list-role-menus?roleId=' + roleId })
}

/**
 * 赋予角色菜单权限
 * @param {PermissionAssignRoleMenuReqVO} data 分配参数，包含角色ID和菜单ID列表
 * @returns {Promise<any>} 分配结果
 */
export const assignRoleMenu = async (data: PermissionAssignRoleMenuReqVO) => {
  return await request.post({ url: '/admin-api/system/permission/assign-role-menu', data })
}

/**
 * 赋予角色数据权限
 * @param {PermissionAssignRoleDataScopeReqVO} data 分配参数，包含角色ID、数据权限范围和部门ID列表
 * @returns {Promise<any>} 分配结果
 */
export const assignRoleDataScope = async (data: PermissionAssignRoleDataScopeReqVO) => {
  return await request.post({ url: '/admin-api/system/permission/assign-role-data-scope', data })
}

/**
 * 查询用户拥有的角色数组
 * @param {number} userId 用户ID
 * @param {number} deptId 部门ID
 * @returns {Promise<any>} 用户角色列表
 */
export const getUserRoleList = async (userId: number, deptId: number) => {
  return await request.get({ url: '/admin-api/system/permission/list-user-roles?userId=' + userId + '&deptId=' + deptId })
}

/**
 * 赋予用户角色
 * @param {PermissionAssignUserRoleReqVO} data 分配参数，包含用户ID、部门ID和角色ID列表
 * @returns {Promise<any>} 分配结果
 */
export const assignUserRole = async (data: PermissionAssignUserRoleReqVO) => {
  return await request.post({ url: '/admin-api/system/permission/assign-user-role', data })
}

/**
 * 查询角色拥有的用户数组
 * @param {number} roleId 角色ID
 * @returns {Promise<any>} 角色用户列表
 */
export const roleOwnedUserArray = async (roleId: number) => {
  return await request.get({ url: '/admin-api/system/permission/list-role-users?roleId=' + roleId })
}

/**
 * 批量赋予角色用户
 * @param {PermissionAssignRoleUsersReqVO} data 分配参数，包含角色ID和用户ID列表
 * @returns {Promise<any>} 分配结果
 */
export const assignRoleUsers = async (data: PermissionAssignRoleUsersReqVO) => {
  return await request.post({ url: '/admin-api/system/permission/assign-role-users', data })
}


/**
 * 获取图谱目录树（用于角色权限分配）
 * @returns {Promise<any>} 图谱目录树数据
 */
export const getTreeListRole = async () => {
  return await request.get({ url: '/admin-api/atlas/catalogue-tree/getTreeListRolePermission' })
}

/**
 * 角色设置图谱权限
 * @param {any} data 权限数据
 * @returns {Promise<any>} 设置结果
 */
export const createOrUpdateRolePermission = async (data) => {
  return await request.post({ url: '/admin-apisystem/catalogue-role/createOrUpdate', data })
}

/**
 * 查询角色图谱权限信息
 * @param {number} roleId 角色ID
 * @returns {Promise<any>} 角色图谱权限详情
 */
export const getRoleInfo = async (roleId: number) => {
  return await request.get({ url: '/admin-apisystem/catalogue-role/get?roleId=' + roleId })
}

