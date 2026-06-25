import request from '@/config/axios'
import type { CaptchaRequestVO, RegisterVO, ResetPasswordVO, SmsCodeVO, SmsLoginVO, UserLoginVO } from './types'
import { getRefreshToken } from '@/utils/auth'

// 登录
export const login = (data: UserLoginVO) => {
  return request.post({
    url: '/client-api/system/auth/login',
    data,
    headers: {
      isEncrypt: true
    }
  })
}

// 注册
export const register = (data: RegisterVO) => {
  return request.post({ url: '/client-api/client/auth/register', data })
}

// 使用租户名，获得租户编号
export const getTenantIdByName = (name: string) => {
  return request.get({ url: '/client-api/system/tenant/get-id-by-name?name=' + name })
}

// 使用租户域名，获得租户信息
export const getTenantByWebsite = (website: string) => {
  return request.get({ url: '/client-api/system/tenant/get-by-website?website=' + website })
}

// 登出
export const loginOut = () => {
  return request.post({ url: '/client-api/client/auth/logout' })
}

// 获取用户权限信息
export const getInfo = () => {
  return request.get({ url: '/client-api/client/auth/get-info' })
}

//获取登录验证码
export const sendSmsCode = (data: SmsCodeVO) => {
  return request.post({ 
    url: '/client-api/client/auth/send-sms-code', 
    data,headers: {
    isEncrypt: true
    } 
  })
}

// 短信验证码登录
export const smsLogin = (data: SmsLoginVO) => {
  return request.post({ url: '/client-api/client/auth/sms-login', data })
}

// 社交快捷登录，使用 code 授权码
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

// 社交授权的跳转
export const socialAuthRedirect = (type: number, redirectUri: string) => {
  return request.get({
    url: '/client-api/system/auth/social-auth-redirect?type=' + type + '&redirectUri=' + redirectUri
  })
}
// 获取验证图片以及 token
export const getCode = (data: CaptchaRequestVO) => {
  return request.postOriginal({ url: '/client-apisystem/captcha/get', data })
}

// 滑动或者点选验证
export const reqCheck = (data: CaptchaRequestVO) => {
  return request.postOriginal({ url: '/client-apisystem/captcha/check', data })
}

// 通过短信重置密码
export const smsResetPassword = (data: ResetPasswordVO) => {
  return request.post({ url: '/client-api/system/auth/reset-password', data })
}

export function changeTenantToken(newTenantId: number) {
  return request.post({
    url:
      '/system/auth/change-tenant-token?refreshToken=' +
      getRefreshToken() +
      '&newTenantId=' +
      newTenantId
  })
}


// 单点登录
export const ssoLogin = (code: string) => {
  return request.get({ url: '/client-apisystem/auth/manage-login?code=' + code })
}

// 交建通单点登录
export const jjtssoLogin = (code: string) => {
  return request.get({ url: '/client-apisystem/auth/jjt-login?code=' + code })
}

// 申请使用
export interface ApplyUseVO {
  name?: string
  mobile?: string
  companyName?: string
  remark?: string
}

export const applyUse = (data: ApplyUseVO) => {
  return request.post({ url: '/client-api/sewage-resource/add-trial', data })
}
