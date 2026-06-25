import request from '@/config/axios'
import type { CaptchaRequestVO, RegisterVO, ResetPasswordVO, SmsCodeVO, SmsLoginVO, UserLoginVO } from './types'
import { getRefreshToken } from '@/utils/auth'

/**
 * 用户登录
 * @param {UserLoginVO} data 登录参数，包含用户名、密码、验证码等
 * @returns {Promise} 登录结果，包含token和用户信息
 */
export const login = (data: UserLoginVO) => {
  return request.post({
    url: '/client-api/system/auth/login',
    data,
    headers: {
      isEncrypt: true
    }
  })
}

/**
 * 用户注册
 * @param {RegisterVO} data 注册参数，包含手机号、验证码、昵称、密码
 * @returns {Promise} 注册结果
 */
export const register = (data: RegisterVO) => {
  return request.post({ url: '/client-api/client/auth/register', data })
}

/**
 * 通过租户名获取租户编号
 * @param {string} name 租户名称
 * @returns {Promise} 租户编号信息
 */
export const getTenantIdByName = (name: string) => {
  return request.get({ url: '/client-api/system/tenant/get-id-by-name?name=' + name })
}

/**
 * 通过租户域名获取租户信息
 * @param {string} website 租户域名
 * @returns {Promise} 租户信息
 */
export const getTenantByWebsite = (website: string) => {
  return request.get({ url: '/client-api/system/tenant/get-by-website?website=' + website })
}

/**
 * 用户登出
 * @returns {Promise} 登出结果
 */
export const loginOut = () => {
  return request.post({ url: '/engineclient/logout' })
}

/**
 * 获取当前用户权限信息
 * @returns {Promise} 用户权限信息，包含角色、菜单等
 */
export const getInfo = () => {
  return request.get({ url: '/client-api/client/auth/get-info' })
}

/**
 * 发送登录短信验证码
 * @param {SmsCodeVO} data 短信验证码请求参数，包含手机号和场景值
 * @returns {Promise} 发送结果
 */
export const sendSmsCode = (data: SmsCodeVO) => {
  return request.post({ 
    url: '/client-api/client/auth/send-sms-code', 
    data,headers: {
    isEncrypt: true
    } 
  })
}

/**
 * 短信验证码登录
 * @param {SmsLoginVO} data 短信登录参数，包含手机号、验证码、场景值
 * @returns {Promise} 登录结果
 */
export const smsLogin = (data: SmsLoginVO) => {
  return request.post({ url: '/client-api/client/auth/sms-login', data })
}

/**
 * 社交快捷登录（使用授权码）
 * @param {string} type 社交平台类型
 * @param {string} code 授权码
 * @param {string} state 状态参数，用于防CSRF攻击
 * @returns {Promise} 登录结果
 */
export function socialLogin(type: string, code: string, state: string) {
  return request.post({
    url: '/client-api/system/auth/social-login',
    data: {
      type,
      code,
      state
    }
  })
}

/**
 * 获取社交授权跳转地址
 * @param {number} type 社交平台类型
 * @param {string} redirectUri 授权成功后的回调地址
 * @returns {Promise} 授权跳转地址信息
 */
export const socialAuthRedirect = (type: number, redirectUri: string) => {
  return request.get({
    url: '/client-api/system/auth/social-auth-redirect?type=' + type + '&redirectUri=' + redirectUri
  })
}

/**
 * 获取验证码图片及token
 * @param {CaptchaRequestVO} data 验证码请求参数
 * @returns {Promise} 验证码信息，包含图片和token
 */
export const getCode = (data: CaptchaRequestVO) => {
  return request.postOriginal({ url: '/client-apisystem/captcha/get', data })
}

/**
 * 滑动或点选验证码校验
 * @param {CaptchaRequestVO} data 验证码校验参数
 * @returns {Promise} 校验结果
 */
export const reqCheck = (data: CaptchaRequestVO) => {
  return request.postOriginal({ url: '/client-apisystem/captcha/check', data })
}

/**
 * 通过短信验证码重置密码
 * @param {ResetPasswordVO} data 重置密码参数，包含手机号、验证码、新密码
 * @returns {Promise} 重置结果
 */
export const smsResetPassword = (data: ResetPasswordVO) => {
  return request.post({ url: '/client-api/system/auth/reset-password', data })
}

/**
 * 切换租户Token
 * @param {number} newTenantId 新租户ID
 * @returns {Promise} 切换结果，返回新租户的token
 */
export function changeTenantToken(newTenantId: number) {
  return request.post({
    url:
      '/system/auth/change-tenant-token?refreshToken=' +
      getRefreshToken() +
      '&newTenantId=' +
      newTenantId
  })
}


/**
 * 管理端单点登录
 * @param {string} code 单点登录授权码
 * @returns {Promise} 登录结果
 */
export const ssoLogin = (code: string) => {
  return request.get({ url: '/client-apisystem/auth/manage-login?code=' + code })
}

/**
 * 交建通单点登录
 * @param {string} code 交建通授权码
 * @returns {Promise} 登录结果
 */
export const jjtssoLogin = (code: string) => {
  return request.get({ url: '/client-apisystem/auth/jjt-login?code=' + code })
}

/** 试用申请参数 */
export interface ApplyUseVO {
  /** 姓名 */
  name?: string
  /** 手机号 */
  mobile?: string
  /** 公司名称 */
  companyName?: string
  /** 备注 */
  remark?: string
}

/**
 * 提交试用申请
 * @param {ApplyUseVO} data 申请参数，包含姓名、手机号、公司名称、备注等
 * @returns {Promise} 申请结果
 */
export const applyUse = (data: ApplyUseVO) => {
  return request.post({ url: '/client-api/sewage-resource/add-trial', data })
}
