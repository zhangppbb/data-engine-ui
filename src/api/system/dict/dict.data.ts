import request from '@/config/axios'

/** 字典数据 VO */
export type DictDataVO = {
  id: number | undefined
  parentId: number | undefined
  sort: number | undefined
  label: string
  value: string
  dictType: string
  status: number
  colorType: string
  cssClass: string
  remark: string
  createTime: Date
  disabled: number
  labelRuleData: string
}

/**
 * 查询字典数据（精简）列表
 * @returns {Promise<any>} 字典数据精简列表
 */
export const getSimpleDictDataList = () => {
  return request.get({ url: '/admin-api/system/dict-data/simple-list' })
}

/**
 * 查询字典数据列表
 * @param {any} params 查询参数
 * @returns {Promise<any>} 字典数据列表
 */
export const getDictDataList = (params) => {
  return request.get({ url: '/admin-api/system/dict-data/list', params })
}

/**
 * 查询字典数据详情
 * @param {number} id 字典数据ID
 * @returns {Promise<any>} 字典数据详情
 */
export const getDictData = (id: number) => {
  return request.get({ url: '/admin-api/system/dict-data/get?id=' + id })
}

/**
 * 新增字典数据
 * @param {DictDataVO} data 字典数据
 * @returns {Promise<any>} 新增结果
 */
export const createDictData = (data: DictDataVO) => {
  return request.post({ url: '/admin-api/system/dict-data/create', data })
}

/**
 * 修改字典数据
 * @param {DictDataVO} data 字典数据
 * @returns {Promise<any>} 修改结果
 */
export const updateDictData = (data: DictDataVO) => {
  return request.put({ url: '/admin-api/system/dict-data/update', data })
}

/**
 * 删除字典数据
 * @param {number} id 字典数据ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteDictData = (id: number) => {
  return request.delete({ url: '/admin-api/system/dict-data/delete?id=' + id })
}

/**
 * 导出字典类型数据
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportDictData = (params) => {
  return request.download({ url: '/admin-api/system/dict-data/export-excel', params })
}

/**
 * 修改字典屏蔽状态
 * @param {number} id 字典数据ID
 * @param {number} status 目标状态
 * @param {number} category 字典分类
 * @returns {Promise<any>} 状态修改结果
 */
export const updateDictDataDisabled = (id: number, status: number, category: number) => {
  const data = { id, status, category }
  return request.post({ url: '/admin-api/system/dict-data/update-disabled', data })
}

/**
 * 修改字典启用状态
 * @param {number} id 字典数据ID
 * @param {number} status 目标状态
 * @param {number} category 字典分类
 * @returns {Promise<any>} 状态修改结果
 */
export const updateDictDataStatus = (id: number, status: number, category: number) => {
  const data = { id, status, category }
  return request.put({ url: '/admin-api/system/dict-data/update-status', data: data })
}
