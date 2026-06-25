import request from '@/config/axios'

/** 参数配置 VO */
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

/**
 * 查询参数配置分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 参数配置分页数据
 */
export const getConfigPage = (params: PageParam) => {
  return request.get({ url: '/admin-api/infra/config/page', params })
}

/**
 * 查询参数配置详情
 * @param {number} id 参数ID
 * @returns {Promise<any>} 参数配置详情
 */
export const getConfig = (id: number) => {
  return request.get({ url: '/admin-api/infra/config/get?id=' + id })
}

/**
 * 根据参数键名查询参数值
 * @param {string} configKey 参数键名
 * @returns {Promise<any>} 参数值
 */
export const getConfigKey = (configKey: string) => {
  return request.get({ url: '/admin-api/infra/config/get-value-by-key?key=' + configKey })
}

/**
 * 新增参数配置
 * @param {ConfigVO} data 参数配置数据
 * @returns {Promise<any>} 新增结果
 */
export const createConfig = (data: ConfigVO) => {
  return request.post({ url: '/admin-api/infra/config/create', data })
}

/**
 * 修改参数配置
 * @param {ConfigVO} data 参数配置数据
 * @returns {Promise<any>} 修改结果
 */
export const updateConfig = (data: ConfigVO) => {
  return request.put({ url: '/admin-api/infra/config/update', data })
}

/**
 * 删除参数配置
 * @param {number} id 参数ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteConfig = (id: number) => {
  return request.delete({ url: '/admin-api/infra/config/delete?id=' + id })
}

/**
 * 导出参数配置
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportConfig = (params) => {
  return request.download({ url: '/admin-api/infra/config/export-excel', params })
}
