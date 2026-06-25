import request from '@/config/axios'

/** 用户 VO */
export interface UserVO {
  id: number
  username: string
  nickname: string
  deptId: number
  postIds: string[]
  email: string
  mobile: string
  sex: number
  avatar: string
  loginIp: string
  status: number
  remark: string
  loginDate: Date
  createTime: Date
  userDeptId: number
}

/** 分配用户兼职请求 VO */
export interface AssignUserSidelineReqVO {
  userId: number
  deptIds: number[]
}

/**
 * 查询用户管理分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 用户分页数据
 */
export const getUserPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/user/page', params })
}

/**
 * 查询用户详情
 * @param {number} userDeptId 用户部门关联ID
 * @returns {Promise<any>} 用户详情
 */
export const getUser = (userDeptId: number) => {
  return request.get({ url: '/admin-api/system/user/get?userDeptId=' + userDeptId })
}

/**
 * 新增用户
 * @param {UserVO} data 用户数据
 * @returns {Promise<any>} 新增结果
 */
export const createUser = (data: UserVO) => {
  return request.post({ url: '/admin-api/system/user/create', data })
}

/**
 * 修改用户
 * @param {UserVO} data 用户数据
 * @returns {Promise<any>} 修改结果
 */
export const updateUser = (data: UserVO) => {
  return request.put({ url: '/admin-api/system/user/update', data })
}

/**
 * 删除用户
 * @param {number} userDeptId 用户部门关联ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteUser = (userDeptId: number) => {
  return request.delete({ url: '/admin-api/system/user/delete?userDeptId=' + userDeptId })
}

/**
 * 导出用户
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportUser = (params: any) => {
  return request.download({ url: '/admin-api/system/user/export-excel', params })
}

/**
 * 下载用户导入模板
 * @returns {Promise<any>} 模板文件流
 */
export const importUserTemplate = () => {
  return request.download({ url: '/admin-api/system/user/get-import-template' })
}

/**
 * 重置用户密码
 * @param {number} id 用户ID
 * @param {string} password 新密码
 * @returns {Promise<any>} 重置结果
 */
export const resetUserPassword = (id: number, password: string) => {
  const data = {
    id,
    password
  }
  return request.put({ url: '/admin-api/system/user/update-password', data: data })
}

/**
 * 修改用户状态
 * @param {number} userDeptId 用户部门关联ID
 * @param {number} status 目标状态
 * @returns {Promise<any>} 状态修改结果
 */
export const updateUserStatus = (userDeptId: number, status: number) => {
  const data = {
    userDeptId,
    status
  }
  return request.put({ url: '/admin-api/system/user/update-status', data: data })
}

/**
 * 获取用户精简信息列表
 * @param {string} [hasPartTime='false'] 是否包含兼职，true-包含，false-不包含
 * @returns {Promise<UserVO[]>} 用户精简列表
 */
// export const getSimpleUserList = (hasPartTime: string = 'false'): Promise<UserVO[]> => {
//   return request.get({ url: '/admin-api/system/user/simple-list?hasPartTime=' + hasPartTime })
// }
export const getSimpleUserList = (hasPartTime: string = 'false'): Promise<UserVO[]> => {
  return request.get({ url: '/admin-api/system/user/all-list?hasPartTime=' + hasPartTime })
}

/**
 * 赋予用户兼职部门
 * @param {AssignUserSidelineReqVO} data 分配参数，包含用户ID和部门ID列表
 * @returns {Promise<any>} 分配结果
 */
export const assignUserSideline = async (data: AssignUserSidelineReqVO) => {
  return await request.post({ url: '/admin-api/system/user/assign-user-sideline', data })
}

/**
 * 校验用户名是否可用
 * @param {string} userName 用户名
 * @returns {Promise<any>} 校验结果
 */
export const verifyUserName = (userName: string) => {
  const data = {
    userName
  }
  return request.get({
    url: '/admin-api/system/user/verify-userName',
    params: data
  })
}

/**
 * 创建用户部门关联
 * @param {any} data 用户部门关联数据
 * @returns {Promise<any>} 创建结果
 */
export const createUserDept = (data) => {
  return request.post({
    url: '/admin-api/system/user/create-user-dept',
    data: data
  })
}
