import request from '@/config/axios'

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

// 查询字典数据（精简)列表
export const getSimpleDictDataList = () => {
  return request.get({ url: '/admin-api/system/dict-data/simple-list' })
}

// 查询字典数据列表
export const getDictDataList = (params) => {
  return request.get({ url: '/admin-api/system/dict-data/list', params })
}

// 查询字典数据详情
export const getDictData = (id: number) => {
  return request.get({ url: '/admin-api/system/dict-data/get?id=' + id })
}

// 新增字典数据
export const createDictData = (data: DictDataVO) => {
  return request.post({ url: '/admin-api/system/dict-data/create', data })
}

// 修改字典数据
export const updateDictData = (data: DictDataVO) => {
  return request.put({ url: '/admin-api/system/dict-data/update', data })
}

// 删除字典数据
export const deleteDictData = (id: number) => {
  return request.delete({ url: '/admin-api/system/dict-data/delete?id=' + id })
}

// 导出字典类型数据
export const exportDictData = (params) => {
  return request.download({ url: '/admin-api/system/dict-data/export-excel', params })
}

// 修改字典屏蔽状态
export const updateDictDataDisabled = (id: number, status: number, category: number) => {
  const data = { id, status, category }
  return request.post({ url: '/admin-api/system/dict-data/update-disabled', data })
}

// 修改字典启用状态
export const updateDictDataStatus = (id: number, status: number, category: number) => {
  const data = { id, status, category }
  return request.put({ url: '/admin-api/system/dict-data/update-status', data: data })
}
