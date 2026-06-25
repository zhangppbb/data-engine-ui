import request from '@/config/axios'

/** 用户组 VO */
export type UserGroupVO = {
  id: number
  name: string
  description: string
  userIds: number[]
  status: number
  remark: string
  createTime: string
}

/**
 * 创建用户组
 * @param {UserGroupVO} data 用户组数据
 * @returns {Promise<any>} 创建结果
 */
export const createUserGroup = async (data: UserGroupVO) => {
  return await request.post({
    url: '/admin-api/bpm/user-group/create',
    data: data
  })
}

/**
 * 更新用户组
 * @param {UserGroupVO} data 用户组数据
 * @returns {Promise<any>} 更新结果
 */
export const updateUserGroup = async (data: UserGroupVO) => {
  return await request.put({
    url: '/admin-api/bpm/user-group/update',
    data: data
  })
}

/**
 * 删除用户组
 * @param {number} id 用户组ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteUserGroup = async (id: number) => {
  return await request.delete({ url: '/admin-api/bpm/user-group/delete?id=' + id })
}

/**
 * 获得用户组详情
 * @param {number} id 用户组ID
 * @returns {Promise<any>} 用户组详情
 */
export const getUserGroup = async (id: number) => {
  return await request.get({ url: '/admin-api/bpm/user-group/get?id=' + id })
}

/**
 * 获得用户组分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 用户组分页数据
 */
export const getUserGroupPage = async (params) => {
  return await request.get({ url: '/admin-api/bpm/user-group/page', params })
}

/**
 * 获取用户组精简信息列表
 * @returns {Promise<UserGroupVO[]>} 用户组精简列表
 */
export const getUserGroupSimpleList = async (): Promise<UserGroupVO[]> => {
  return await request.get({ url: '/admin-api/bpm/user-group/simple-list' })
}
