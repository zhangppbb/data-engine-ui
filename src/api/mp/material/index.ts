import request from '@/config/axios'

/**
 * 获得公众号素材分页列表
 * @param {any} query 分页查询参数
 * @returns {Promise<any>} 素材分页数据
 */
export const getMaterialPage = (query) => {
  return request.get({
    url: '/admin-api/mp/material/page',
    params: query
  })
}

/**
 * 删除公众号永久素材
 * @param {any} id 素材ID
 * @returns {Promise<any>} 删除结果
 */
export const deletePermanentMaterial = (id) => {
  return request.delete({
    url: '/admin-api/mp/material/delete-permanent?id=' + id
  })
}
