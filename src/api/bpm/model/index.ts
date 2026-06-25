import request from '@/config/axios'

/** 流程定义 VO */
export type ProcessDefinitionVO = {
  id: string
  version: number
  deploymentTIme: string
  suspensionState: number
  formType?: number
}

/** 流程模型 VO */
export type ModelVO = {
  id: number
  formName: string
  key: string
  name: string
  description: string
  category: string
  formType: number
  formId: number
  formCustomCreatePath: string
  formCustomViewPath: string
  processDefinition: ProcessDefinitionVO
  status: number
  remark: string
  createTime: string
  bpmnXml: string
}

/**
 * 获取流程模型列表
 * @param {string | undefined} name 模型名称（可选筛选）
 * @returns {Promise<any>} 流程模型列表
 */
export const getModelList = async (name: string | undefined) => {
  return await request.get({ url: '/admin-api/bpm/model/list', params: { name } })
}

/**
 * 获取流程模型详情
 * @param {string} id 模型ID
 * @returns {Promise<any>} 流程模型详情
 */
export const getModel = async (id: string) => {
  return await request.get({ url: '/admin-api/bpm/model/get?id=' + id })
}

/**
 * 更新流程模型
 * @param {ModelVO} data 流程模型数据
 * @returns {Promise<any>} 更新结果
 */
export const updateModel = async (data: ModelVO) => {
  return await request.put({ url: '/admin-api/bpm/model/update', data: data })
}

/**
 * 批量修改流程模型的排序
 * @param {number[]} ids 模型ID数组
 * @returns {Promise<any>} 批量修改结果
 */
export const updateModelSortBatch = async (ids: number[]) => {
  return await request.put({
    url: `/bpm/model/update-sort-batch`,
    params: {
      ids: ids.join(',')
    }
  })
}

/**
 * 更新流程模型的BPMN定义
 * @param {ModelVO} data 模型数据（含BPMN XML）
 * @returns {Promise<any>} 更新结果
 */
export const updateModelBpmn = async (data: ModelVO) => {
  return await request.put({ url: '/admin-api/bpm/model/update-bpmn', data: data })
}

/**
 * 修改流程模型状态
 * @param {number} id 模型ID
 * @param {number} state 目标状态
 * @returns {Promise<any>} 状态修改结果
 */
export const updateModelState = async (id: number, state: number) => {
  const data = {
    id: id,
    state: state
  }
  return await request.put({ url: '/admin-api/bpm/model/update-state', data: data })
}

/**
 * 创建流程模型
 * @param {ModelVO} data 流程模型数据
 * @returns {Promise<any>} 创建结果
 */
export const createModel = async (data: ModelVO) => {
  return await request.post({ url: '/admin-api/bpm/model/create', data: data })
}

/**
 * 删除流程模型
 * @param {number} id 模型ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteModel = async (id: number) => {
  return await request.delete({ url: '/admin-api/bpm/model/delete?id=' + id })
}

/**
 * 部署流程模型
 * @param {number} id 模型ID
 * @returns {Promise<any>} 部署结果
 */
export const deployModel = async (id: number) => {
  return await request.post({ url: '/admin-api/bpm/model/deploy?id=' + id })
}

/**
 * 清理流程模型
 * @param {number} id 模型ID
 * @returns {Promise<any>} 清理结果
 */
export const cleanModel = async (id: number) => {
  return await request.delete({ url: '/admin-api/bpm/model/clean?id=' + id })
}
