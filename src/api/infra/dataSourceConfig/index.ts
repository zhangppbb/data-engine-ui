import request from '@/config/axios'

// 查询数据源名称列表
export const getDataSourceConfigList = () => {
  return request.get({ url: '/admin-api/infra/data-source-config/list' })
}
