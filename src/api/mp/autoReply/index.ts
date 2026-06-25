import request from '@/config/axios'

/**
 * 创建公众号的自动回复
 * @param {any} data 自动回复数据
 * @returns {Promise<any>} 创建结果
 */
export const createAutoReply = (data) => {
  return request.post({
    url: '/admin-api/mp/auto-reply/create',
    data: data
  })
}

/**
 * 更新公众号的自动回复
 * @param {any} data 自动回复数据
 * @returns {Promise<any>} 更新结果
 */
export const updateAutoReply = (data) => {
  return request.put({
    url: '/admin-api/mp/auto-reply/update',
    data: data
  })
}

/**
 * 删除公众号的自动回复
 * @param {any} id 自动回复ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteAutoReply = (id) => {
  return request.delete({
    url: '/admin-api/mp/auto-reply/delete?id=' + id
  })
}

/**
 * 获得公众号的自动回复详情
 * @param {any} id 自动回复ID
 * @returns {Promise<any>} 自动回复详情
 */
export const getAutoReply = (id) => {
  return request.get({
    url: '/admin-api/mp/auto-reply/get?id=' + id
  })
}

/**
 * 获得公众号的自动回复分页列表
 * @param {any} query 分页查询参数
 * @returns {Promise<any>} 自动回复分页数据
 */
export const getAutoReplyPage = (query) => {
  return request.get({
    url: '/admin-api/mp/auto-reply/page',
    params: query
  })
}
