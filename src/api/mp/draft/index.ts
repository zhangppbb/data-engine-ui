import request from '@/config/axios'

/**
 * 获得公众号草稿分页列表
 * @param {any} query 分页查询参数
 * @returns {Promise<any>} 草稿分页数据
 */
export const getDraftPage = (query) => {
  return request.get({
    url: '/admin-api/mp/draft/page',
    params: query
  })
}

/**
 * 创建公众号草稿
 * @param {any} accountId 公众号账号ID
 * @param {any} articles 文章列表
 * @returns {Promise<any>} 创建结果
 */
export const createDraft = (accountId, articles) => {
  return request.post({
    url: '/admin-api/mp/draft/create?accountId=' + accountId,
    data: {
      articles
    }
  })
}

/**
 * 更新公众号草稿
 * @param {any} accountId 公众号账号ID
 * @param {any} mediaId 素材ID
 * @param {any} articles 文章列表
 * @returns {Promise<any>} 更新结果
 */
export const updateDraft = (accountId, mediaId, articles) => {
  return request.put({
    url: '/admin-api/mp/draft/update?accountId=' + accountId + '&mediaId=' + mediaId,
    method: 'put',
    data: articles
  })
}

/**
 * 删除公众号草稿
 * @param {any} accountId 公众号账号ID
 * @param {any} mediaId 素材ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteDraft = (accountId, mediaId) => {
  return request.delete({
    url: '/admin-api/mp/draft/delete?accountId=' + accountId + '&mediaId=' + mediaId
  })
}
