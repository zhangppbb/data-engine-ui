import request from '@/config/axios'

// 获得公众号素材分页
export const getMaterialPage = (query) => {
  return request.get({
    url: '/admin-api/mp/material/page',
    params: query
  })
}

// 删除公众号永久素材
export const deletePermanentMaterial = (id) => {
  return request.delete({
    url: '/admin-api/mp/material/delete-permanent?id=' + id
  })
}
