import request from '@/config/axios'

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

export interface AssignUserSidelineReqVO {
  userId: number
  deptIds: number[]
}

// 查询用户管理列表
export const getUserPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/user/page', params })
}

// 查询用户详情
export const getUser = (userDeptId: number) => {
  return request.get({ url: '/admin-api/system/user/get?userDeptId=' + userDeptId })
}

// 新增用户
export const createUser = (data: UserVO) => {
  return request.post({ url: '/admin-api/system/user/create', data })
}

// 修改用户
export const updateUser = (data: UserVO) => {
  return request.put({ url: '/admin-api/system/user/update', data })
}

// 删除用户
export const deleteUser = (userDeptId: number) => {
  return request.delete({ url: '/admin-api/system/user/delete?userDeptId=' + userDeptId })
}

// 导出用户
export const exportUser = (params: any) => {
  return request.download({ url: '/admin-api/system/user/export-excel', params })
}

// 下载用户导入模板
export const importUserTemplate = () => {
  return request.download({ url: '/admin-api/system/user/get-import-template' })
}

// 用户密码重置
export const resetUserPassword = (id: number, password: string) => {
  const data = {
    id,
    password
  }
  return request.put({ url: '/admin-api/system/user/update-password', data: data })
}

// 用户状态修改
export const updateUserStatus = (userDeptId: number, status: number) => {
  const data = {
    userDeptId,
    status
  }
  return request.put({ url: '/admin-api/system/user/update-status', data: data })
}

/**
 * 获取用户精简信息列表
 * @param hasPartTime 是否包含兼职，默认不包含 (true-包含，false-不包含)
 * @returns 用户列表
 */
// export const getSimpleUserList = (hasPartTime: string = 'false'): Promise<UserVO[]> => {
//   return request.get({ url: '/admin-api/system/user/simple-list?hasPartTime=' + hasPartTime })
// }
export const getSimpleUserList = (hasPartTime: string = 'false'): Promise<UserVO[]> => {
  return request.get({ url: '/admin-api/system/user/all-list?hasPartTime=' + hasPartTime })
}

// 赋予用户兼职
export const assignUserSideline = async (data: AssignUserSidelineReqVO) => {
  return await request.post({ url: '/admin-api/system/user/assign-user-sideline', data })
}

export const verifyUserName = (userName: string) => {
  const data = {
    userName
  }
  return request.get({
    url: '/admin-api/system/user/verify-userName',
    params: data
  })
}

export const createUserDept = (data) => {
  return request.post({
    url: '/admin-api/system/user/create-user-dept',
    data: data
  })
}
