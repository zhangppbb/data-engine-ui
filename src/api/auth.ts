import request from '@/config/axios'

/**
 * 发送手机验证码请求参数
 */
export interface ClientAuthSmsSendReqVO {
  /** 手机号 */
  phone: string
}

/**
 * 发送手机验证码响应
 */
export interface SendSmsResponse {
  /** 状态码 */
  code: number
  /** 是否成功 */
  data: boolean
  /** 消息 */
  msg: string
}

/**
 * 手机验证码登录请求参数
 */
export interface ClientAuthSmsLoginReqVO {
  /** 验证码 */
  code: string
  /** 手机号 */
  phone: string
}

/**
 * 登录响应数据
 */
export interface LoginResponse {
  /** 用户ID */
  userId: string
  /** 用户名 */
  username: string
  /** 昵称 */
  nickname: string
  /** 头像 */
  avatar?: string
  /** Token */
  token: string
}

/**
 * 发送手机验证码
 * 
 * @description 调用后端接口发送手机验证码
 * @param params 请求参数
 * @returns 是否发送成功
 * 
 * @example
 * ```typescript
 * const result = await sendSmsCode({ phone: '13800138000' })
 * if (result) {
 *   console.log('验证码发送成功')
 * }
 * ```
 */
export const sendSmsCode = (params: ClientAuthSmsSendReqVO): Promise<boolean> => {
  return request.post({ url: '/engineclient/client/auth/send-sms-code', data: params })
}

/**
 * 手机验证码登录
 * 
 * @description 调用后端接口进行手机验证码登录
 * @param params 请求参数
 * @returns 登录响应数据
 * 
 * @example
 * ```typescript
 * const result = await smsLogin({ phone: '13800138000', code: '123456' })
 * if (result) {
 *   console.log('登录成功', result)
 * }
 * ```
 */
export const smsLogin = (params: ClientAuthSmsLoginReqVO): Promise<LoginResponse> => {
  return request.post({ url: '/engineclient/client/auth/sms-login', data: params })
}
