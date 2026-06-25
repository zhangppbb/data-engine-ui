import request from '@/config/axios'

/**
 * 获得公众号发布内容分页列表
 * @param {any} query 分页查询参数
 * @returns {Promise<any>} 发布内容分页数据
 */
export const getFreePublishPage = (query) => {
  return request.get({
    url: '/admin-api/mp/free-publish/page',
    params: query
  })
}

/**
 * 删除公众号发布内容
 * @param {any} accountId 公众号账号ID
 * @param {any} articleId 文章ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteFreePublish = (accountId, articleId) => {
  return request.delete({
    url: '/admin-api/mp/free-publish/delete?accountId=' + accountId + '&articleId=' + articleId
  })
}

/**
 * 发布公众号内容
 * @param {any} accountId 公众号账号ID
 * @param {any} mediaId 素材ID
 * @returns {Promise<any>} 发布结果
 */
export const submitFreePublish = (accountId, mediaId) => {
  return request.post({
    url: '/admin-api/mp/free-publish/submit?accountId=' + accountId + '&mediaId=' + mediaId
  })
}
