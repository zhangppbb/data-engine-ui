import { useCache, CACHE_KEY } from '@/hooks/web/useCache'
import { TokenType } from '@/api/login/types'
import { decrypt, encrypt } from '@/utils/jsencrypt'

const { wsCache } = useCache()

const AccessTokenKey = 'ACCESS_TOKEN'

// 获取token
export const getAccessToken = () => {
  // 此处与TokenKey相同，此写法解决初始化时Cookies中不存在TokenKey报错
  const accessToken = wsCache.get(AccessTokenKey)
  return accessToken ? accessToken : wsCache.get('ACCESS_TOKEN')
}

// 刷新token（与 getAccessToken 返回相同值，兼容旧调用方）
export const getRefreshToken = () => {
  return getAccessToken()
}

// 设置token
export const setToken = (token: string) => {
  wsCache.set(AccessTokenKey, token)
}

// 删除token
export const removeToken = () => {
  wsCache.delete(AccessTokenKey)
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return 'Bearer ' + token
}
// ========== 账号相关 ==========

export type LoginFormType = {
  username: string
  password: string
  rememberMe: boolean
}

export const getLoginForm = () => {
  const loginForm: LoginFormType = wsCache.get(CACHE_KEY.LoginForm)
  if (loginForm) {
    loginForm.password = decrypt(loginForm.password) as string
  }
  return loginForm
}

export const setLoginForm = (loginForm: LoginFormType) => {
  loginForm.password = encrypt(loginForm.password) as string
  wsCache.set(CACHE_KEY.LoginForm, loginForm, { exp: 30 * 24 * 60 * 60 })
}

export const removeLoginForm = () => {
  wsCache.delete(CACHE_KEY.LoginForm)
}

// ========== 租户相关 ==========

export type UserTenantsVO = {
  tenantId: number
  tenantName: string
  packageId: number
  managedTenantIds: number[]
}

export const getTenantId = () => {
  return wsCache.get(CACHE_KEY.TenantId)
}

export const setTenantId = (tenantId: string) => {
  wsCache.set(CACHE_KEY.TenantId, tenantId)
}

export const getUserTenants = () => {
  return wsCache.get(CACHE_KEY.UserTenants)
}

export const setUserTenants = (userTenants: UserTenantsVO) => {
  wsCache.set(CACHE_KEY.UserTenants, userTenants)
}

export const getManagedTenantId = () => {
  return wsCache.get(CACHE_KEY.ManagedTenantId)
}

export const setManagedTenantId = (managedTenantId: number[] = []) => {
  // 默认将当前租户加入
  let managedTenantIdStr = getTenantId()
  if (managedTenantId && managedTenantId.length > 0) {
    managedTenantId.forEach((id) => {
      managedTenantIdStr += ',' + id
    })
  }
  wsCache.set(CACHE_KEY.ManagedTenantId, managedTenantIdStr)
}
