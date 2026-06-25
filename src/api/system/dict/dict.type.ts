import request from '@/config/axios'

/** 字典类型 VO */
export type DictTypeVO = {
  id: number | undefined
  name: string
  type: string
  status: number
  category: number
  remark: string
  createTime: Date
}

/**
 * 查询字典类型（精简）列表
 * @returns {Promise<any>} 字典类型精简列表
 */
export const getSimpleDictTypeList = () => {
  return request.get({ url: '/admin-api/system/dict-type/list-all-simple' })
}

/**
 * 查询字典类型分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 字典类型分页数据
 */
export const getDictTypePage = (params: PageParam) => {
  return request.get({ url: '/admin-api/system/dict-type/page', params })
}

/**
 * 查询字典类型详情
 * @param {number} id 字典类型ID
 * @returns {Promise<any>} 字典类型详情
 */
export const getDictType = (id: number) => {
  return request.get({ url: '/admin-api/system/dict-type/get?id=' + id })
}

/**
 * 新增字典类型
 * @param {DictTypeVO} data 字典类型数据
 * @returns {Promise<any>} 新增结果
 */
export const createDictType = (data: DictTypeVO) => {
  return request.post({ url: '/admin-api/system/dict-type/create', data })
}

/**
 * 修改字典类型
 * @param {DictTypeVO} data 字典类型数据
 * @returns {Promise<any>} 修改结果
 */
export const updateDictType = (data: DictTypeVO) => {
  return request.put({ url: '/admin-api/system/dict-type/update', data })
}

/**
 * 删除字典类型
 * @param {number} id 字典类型ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteDictType = (id: number) => {
  return request.delete({ url: '/admin-api/system/dict-type/delete?id=' + id })
}

/**
 * 导出字典类型
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportDictType = (params) => {
  return request.download({ url: '/admin-api/system/dict-type/export-excel', params })
}
