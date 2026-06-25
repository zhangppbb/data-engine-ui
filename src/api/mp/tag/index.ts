import request from '@/config/axios'

/** 公众号标签 VO */
export interface TagVO {
  id?: number
  name: string
  accountId: number
  createTime: Date
}

/**
 * 创建公众号标签
 * @param {TagVO} data 标签数据
 * @returns {Promise<any>} 创建结果
 */
export const createTag = (data: TagVO) => {
  return request.post({
    url: '/admin-api/mp/tag/create',
    data: data
  })
}

/**
 * 更新公众号标签
 * @param {TagVO} data 标签数据
 * @returns {Promise<any>} 更新结果
 */
export const updateTag = (data: TagVO) => {
  return request.put({
    url: '/admin-api/mp/tag/update',
    data: data
  })
}

/**
 * 删除公众号标签
 * @param {number} id 标签ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteTag = (id: number) => {
  return request.delete({
    url: '/admin-api/mp/tag/delete?id=' + id
  })
}

/**
 * 获得公众号标签详情
 * @param {number} id 标签ID
 * @returns {Promise<any>} 标签详情
 */
export const getTag = (id: number) => {
  return request.get({
    url: '/admin-api/mp/tag/get?id=' + id
  })
}

/**
 * 获得公众号标签分页列表
 * @param {PageParam} query 分页查询参数
 * @returns {Promise<any>} 标签分页数据
 */
export const getTagPage = (query: PageParam) => {
  return request.get({
    url: '/admin-api/mp/tag/page',
    params: query
  })
}

/**
 * 获取公众号标签精简信息列表
 * @returns {Promise<any>} 标签精简列表
 */
export const getSimpleTagList = () => {
  return request.get({
    url: '/admin-api/mp/tag/list-all-simple'
  })
}

/**
 * 同步公众号标签
 * @param {number} accountId 公众号账号ID
 * @returns {Promise<any>} 同步结果
 */
export const syncTag = (accountId: number) => {
  return request.post({
    url: '/admin-api/mp/tag/sync?accountId=' + accountId
  })
}
