import request from '@/config/axios'

/**
 * 跳转前校验请求参数
 */
export interface AppVerifyDTO {
  /** 应用ID */
  appId: string
}

/**
 * 跳转前校验响应
 */
export interface AppVerifyVO {
  /** 是否可跳转 */
  canRedirect: boolean
  /** 不可跳转原因（如：点数不足、应用已停用等） */
  reason?: string
  /** 剩余点数 */
  remainingPoints?: number
}

/**
 * 重定向到应用请求参数
 */
export interface AppRedirectDTO {
  /** 应用ID */
  appId: string
}

/**
 * 重定向到应用响应
 */
export interface AppRedirectVO {
  /** 重定向URL */
  redirectUrl: string
  /** 是否需要新窗口打开 */
  newWindow: boolean
}

// ==================== 应用馆 - 跳转前校验 ====================

/**
 * 跳转前校验
 *
 * @description 在跳转到应用前校验用户是否具备使用条件（如点数是否足够等）（需登录）
 * @param data 校验参数
 * @returns 校验结果
 */
export const verifyBeforeRedirect = (data: AppVerifyDTO): Promise<AppVerifyVO> => {
  return request.post({ url: '/engineclient/client/apps/verify-redirect', data })
}

/**
 * 重定向到应用
 *
 * @description 获取应用的重定向地址。
 *              注意：以 / 开头的为数擎内部开发应用，其它都为外部应用，需新窗口打开。
 * @param data 重定向参数
 * @returns 重定向信息
 */
export const redirectToApp = (data: AppRedirectDTO): Promise<AppRedirectVO> => {
  return request.post({ url: '/engineclient/client/apps/redirect', data })
}
