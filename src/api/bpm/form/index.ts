import request from '@/config/axios'

/** 工作流表单定义 VO */
export type FormVO = {
  id: number
  name: string
  conf: string
  fields: string[]
  status: number
  remark: string
  createTime: string
}

/**
 * 创建工作流的表单定义
 * @param {FormVO} data 表单定义数据
 * @returns {Promise<any>} 创建结果
 */
export const createForm = async (data: FormVO) => {
  return await request.post({
    url: '/admin-api/bpm/form/create',
    data: data
  })
}

/**
 * 更新工作流的表单定义
 * @param {FormVO} data 表单定义数据
 * @returns {Promise<any>} 更新结果
 */
export const updateForm = async (data: FormVO) => {
  return await request.put({
    url: '/admin-api/bpm/form/update',
    data: data
  })
}

/**
 * 删除工作流的表单定义
 * @param {number} id 表单定义ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteForm = async (id: number) => {
  return await request.delete({
    url: '/admin-api/bpm/form/delete?id=' + id
  })
}

/**
 * 获得工作流的表单定义
 * @param {number} id 表单定义ID
 * @returns {Promise<any>} 表单定义详情
 */
export const getForm = async (id: number) => {
  return await request.get({
    url: '/admin-api/bpm/form/get?id=' + id
  })
}

/**
 * 获得工作流的表单定义分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 表单定义分页数据
 */
export const getFormPage = async (params) => {
  return await request.get({
    url: '/admin-api/bpm/form/page',
    params
  })
}

/**
 * 获得动态表单的精简列表
 * @returns {Promise<any>} 表单精简列表
 */
export const getFormSimpleList = async () => {
  return await request.get({
    url: '/admin-api/bpm/form/simple-list'
  })
}
