import request from '@/config/axios'

export interface ConfigVO {
  id: number | undefined
  category: string
  name: string
  key: string
  value: string
  type: number
  visible: boolean
  remark: string
  createTime: Date
}

// 查询参数列表
export const getConfigPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/infra/config/page', params })
}

// 查询参数详情
export const getConfig = (id: number) => {
  return request.get({ url: '/admin-api/infra/config/get?id=' + id })
}

// 根据参数键名查询参数值
export const getConfigKey = (configKey: string) => {
  return request.get({ url: '/admin-api/infra/config/get-value-by-key?key=' + configKey })
}

// 新增参数
export const createConfig = (data: ConfigVO) => {
  return request.post({ url: '/admin-api/infra/config/create', data })
}

// 修改参数
export const updateConfig = (data: ConfigVO) => {
  return request.put({ url: '/admin-api/infra/config/update', data })
}

// 删除参数
export const deleteConfig = (id: number) => {
  return request.delete({ url: '/admin-api/infra/config/delete?id=' + id })
}

// 导出参数
export const exportConfig = (params) => {
  return request.download({ url: '/admin-api/infra/config/export-excel', params })
}
