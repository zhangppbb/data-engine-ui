import request from '@/config/axios'

/**
 * 获取流程定义详情
 * @param {string} [id] 流程定义ID
 * @param {string} [key] 流程定义Key
 * @returns {Promise<any>} 流程定义详情
 */
export const getProcessDefinition = async (id?: string, key?: string) => {
  return await request.get({
    url: '/admin-api/bpm/process-definition/get',
    params: { id, key }
  })
}

/**
 * 获取流程定义分页列表
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 流程定义分页数据
 */
export const getProcessDefinitionPage = async (params) => {
  return await request.get({
    url: '/admin-api/bpm/process-definition/page',
    params
  })
}

/**
 * 获取流程定义列表
 * @param {any} params 查询参数
 * @returns {Promise<any>} 流程定义列表
 */
export const getProcessDefinitionList = async (params) => {
  return await request.get({
    url: '/admin-api/bpm/process-definition/list',
    params
  })
}

/**
 * 获取流程定义精简列表
 * @returns {Promise<any>} 流程定义精简列表
 */
export const getSimpleProcessDefinitionList = async () => {
  return await request.get({
    url: '/admin-api/bpm/process-definition/simple-list'
  })
}
