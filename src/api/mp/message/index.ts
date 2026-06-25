import request from '@/config/axios'

/**
 * 获得公众号消息分页列表
 * @param {PageParam} query 分页查询参数
 * @returns {Promise<any>} 消息分页数据
 */
export const getMessagePage = (query: PageParam) => {
  return request.get({
    url: '/admin-api/mp/message/page',
    params: query
  })
}

/**
 * 给粉丝发送消息
 * @param {any} data 消息数据
 * @returns {Promise<any>} 发送结果
 */
export const sendMessage = (data) => {
  return request.post({
    url: '/admin-api/mp/message/send',
    data: data
  })
}
