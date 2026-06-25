import request from '@/config/axios'

/**
 * 获取消息发送概况数据
 * @param {any} query 查询参数
 * @returns {Promise<any>} 消息发送概况数据
 */
export const getUpstreamMessage = (query) => {
  return request.get({
    url: '/admin-api/mp/statistics/upstream-message',
    params: query
  })
}

/**
 * 获取用户增减数据
 * @param {any} query 查询参数
 * @returns {Promise<any>} 用户增减统计数据
 */
export const getUserSummary = (query) => {
  return request.get({
    url: '/admin-api/mp/statistics/user-summary',
    params: query
  })
}

/**
 * 获得用户累计数据
 * @param {any} query 查询参数
 * @returns {Promise<any>} 用户累计统计数据
 */
export const getUserCumulate = (query) => {
  return request.get({
    url: '/admin-api/mp/statistics/user-cumulate',
    params: query
  })
}

/**
 * 获得接口分析数据
 * @param {any} query 查询参数
 * @returns {Promise<any>} 接口分析统计数据
 */
export const getInterfaceSummary = (query) => {
  return request.get({
    url: '/admin-api/mp/statistics/interface-summary',
    params: query
  })
}
