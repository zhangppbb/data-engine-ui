import request from '@/config/axios'

/**
 * 获取OAuth2授权信息
 * @param {string} clientId 客户端ID
 * @returns {Promise} 授权页面所需信息，包含客户端详情和授权范围
 */
export const getAuthorize = (clientId: string) => {
  return request.get({ url: '/admin-api/system/oauth2/authorize?clientId=' + clientId })
}

/**
 * 发起OAuth2授权请求
 * @param {string} responseType 响应类型（如code）
 * @param {string} clientId 客户端ID
 * @param {string} redirectUri 授权成功后的回调地址
 * @param {string} state 状态参数，用于防CSRF攻击
 * @param {boolean} autoApprove 是否自动批准授权
 * @param {string[]} checkedScopes 用户已勾选的授权范围
 * @param {string[]} uncheckedScopes 用户未勾选的授权范围
 * @returns {Promise} 授权结果，包含授权码等信息
 */
export const authorize = (
  responseType: string,
  clientId: string,
  redirectUri: string,
  state: string,
  autoApprove: boolean,
  checkedScopes: string[],
  uncheckedScopes: string[]
) => {
  // 构建 scopes
  const scopes = {}
  for (const scope of checkedScopes) {
    scopes[scope] = true
  }
  for (const scope of uncheckedScopes) {
    scopes[scope] = false
  }
  // 发起请求
  return request.post({
    url: '/admin-api/system/oauth2/authorize',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: {
      response_type: responseType,
      client_id: clientId,
      redirect_uri: redirectUri,
      state: state,
      auto_approve: autoApprove,
      scope: JSON.stringify(scopes)
    }
  })
}
