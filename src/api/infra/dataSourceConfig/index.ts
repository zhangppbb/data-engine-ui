import request from '@/config/axios'

/**
 * 查询数据源配置名称列表
 * @returns {Promise<any>} 数据源配置列表
 */
export const getDataSourceConfigList = () => {
  return request.get({ url: '/admin-api/infra/data-source-config/list' })
}
