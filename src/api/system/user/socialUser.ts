import request from '@/config/axios'

/**
 * 社交绑定（使用授权码）
 * @param {any} type 社交平台类型
 * @param {any} code 授权码
 * @param {any} state 状态参数
 * @returns {Promise<any>} 绑定结果
 */
export const socialBind = (type, code, state) => {
  return request.post({
    url: '/admin-api/system/social-user/bind',
    data: {
      type,
      code,
      state
    }
  })
}

/**
 * 取消社交绑定
 * @param {any} type 社交平台类型
 * @param {any} openid 社交平台OpenID
 * @returns {Promise<any>} 解绑结果
 */
export const socialUnbind = (type, openid) => {
  return request.delete({
    url: '/admin-api/system/social-user/unbind',
    data: {
      type,
      openid
    }
  })
}

/**
 * 获取社交授权跳转地址
 * @param {any} type 社交平台类型
 * @param {any} redirectUri 回调地址
 * @returns {Promise<any>} 授权跳转地址信息
 */
export const socialAuthRedirect = (type, redirectUri) => {
  return request.get({
    url: '/admin-api/system/auth/social-auth-redirect?type=' + type + '&redirectUri=' + redirectUri
  })
}
