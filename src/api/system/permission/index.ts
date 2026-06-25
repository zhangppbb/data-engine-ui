import request from '@/config/axios'

export interface PermissionAssignUserRoleReqVO {
  userId: number
  deptId: number
  roleIds: number[]
}

export interface PermissionAssignRoleMenuReqVO {
  roleId: number
  menuIds: number[]
}

export interface PermissionAssignRoleDataScopeReqVO {
  roleId: number
  dataScope: number
  dataScopeDeptIds: number[]
}

export interface PermissionAssignRoleUsersReqVO{
  roleId: number
  userIds: number[]
}

// 查询角色拥有的菜单权限
export const getRoleMenuList = async (roleId: number) => {
  return await request.get({ url: '/admin-api/system/permission/list-role-menus?roleId=' + roleId })
}

// 赋予角色菜单权限
export const assignRoleMenu = async (data: PermissionAssignRoleMenuReqVO) => {
  return await request.post({ url: '/admin-api/system/permission/assign-role-menu', data })
}

// 赋予角色数据权限
export const assignRoleDataScope = async (data: PermissionAssignRoleDataScopeReqVO) => {
  return await request.post({ url: '/admin-api/system/permission/assign-role-data-scope', data })
}

// 查询用户拥有的角色数组
export const getUserRoleList = async (userId: number, deptId: number) => {
  return await request.get({ url: '/admin-api/system/permission/list-user-roles?userId=' + userId + '&deptId=' + deptId })
}

// 赋予用户角色
export const assignUserRole = async (data: PermissionAssignUserRoleReqVO) => {
  return await request.post({ url: '/admin-api/system/permission/assign-user-role', data })
}

// 查询角色拥有的用户数组
export const roleOwnedUserArray = async (roleId: number) => {
  return await request.get({ url: '/admin-api/system/permission/list-role-users?roleId=' + roleId })
}

// 批量赋予角色用户
export const assignRoleUsers = async (data: PermissionAssignRoleUsersReqVO) => {
  return await request.post({ url: '/admin-api/system/permission/assign-role-users', data })
}


// 获取图谱目录树
export const getTreeListRole = async () => {
  return await request.get({ url: '/admin-api/atlas/catalogue-tree/getTreeListRolePermission' })
}

// 角色设置权限
export const createOrUpdateRolePermission = async (data) => {
  return await request.post({ url: '/admin-apisystem/catalogue-role/createOrUpdate', data })
}

// 查询角色信息
export const getRoleInfo = async (roleId: number) => {
  return await request.get({ url: '/admin-apisystem/catalogue-role/get?roleId=' + roleId })
}

