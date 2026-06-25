import request from '@/config/axios'

/** 用户个人资料 VO */
export interface ProfileVO {
  id: number
  username: string
  nickname: string
  depts: {
    id: number
    deptId: number
    deptName: string
    status: number
    createTime: Date
    mainJob: string
    roles: string
    posts: string
  }[]
  email: string
  mobile: string
  sex: number
  avatar: string
  status: number
  remark: string
  loginIp: string
  loginDate: Date
  createTime: Date
}

/** 用户个人资料更新请求 VO */
export interface UserProfileUpdateReqVO {
  nickname: string
  email: string
  mobile: string
  sex: number
}

/**
 * 查询用户个人信息
 * @returns {Promise<any>} 用户个人资料
 */
export const getUserProfile = () => {
  return request.get({ url: '/admin-api/system/user/profile/get' })
}

/**
 * 修改用户个人信息
 * @param {UserProfileUpdateReqVO} data 更新参数，包含昵称、邮箱、手机号、性别
 * @returns {Promise<any>} 修改结果
 */
export const updateUserProfile = (data: UserProfileUpdateReqVO) => {
  return request.put({ url: '/admin-api/system/user/profile/update', data })
}

/**
 * 修改用户密码
 * @param {string} oldPassword 旧密码
 * @param {string} newPassword 新密码
 * @returns {Promise<any>} 修改结果
 */
export const updateUserPassword = (oldPassword: string, newPassword: string) => {
  return request.put({
    url: '/admin-api/system/user/profile/update-password',
    data: {
      oldPassword: oldPassword,
      newPassword: newPassword
    }
  })
}

/**
 * 上传用户头像
 * @param {any} data 头像文件数据（FormData）
 * @returns {Promise<any>} 上传结果
 */
export const uploadAvatar = (data) => {
  return request.upload({ url: '/admin-api/system/user/profile/update-avatar', data: data })
}
