import request from '@/config/axios'

/**
 * 更新公众号粉丝信息
 * @param {any} data 粉丝数据
 * @returns {Promise<any>} 更新结果
 */
export const updateUser = (data) => {
  return request.put({
    url: '/admin-api/mp/user/update',
    data: data
  })
}

/**
 * 获得公众号粉丝详情
 * @param {any} id 粉丝ID
 * @returns {Promise<any>} 粉丝详情
 */
export const getUser = (id) => {
  return request.get({
    url: '/admin-api/mp/user/get?id=' + id
  })
}

/**
 * 获得公众号粉丝分页列表
 * @param {any} query 分页查询参数
 * @returns {Promise<any>} 粉丝分页数据
 */
export const getUserPage = (query) => {
  return request.get({
    url: '/admin-api/mp/user/page',
    params: query
  })
}

/**
 * 同步公众号粉丝
 * @param {any} accountId 公众号账号ID
 * @returns {Promise<any>} 同步结果
 */
export const syncUser = (accountId) => {
  return request.post({
    url: '/admin-api/mp/user/sync?accountId=' + accountId
  })
}
