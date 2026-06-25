import request from '@/config/axios'

/** BPM 流程表达式 VO */
export interface ProcessExpressionVO {
  /** 编号 */
  id: number
  /** 表达式名字 */
  name: string
  /** 表达式状态 */
  status: number
  /** 表达式 */
  expression: string
}

/** BPM 流程表达式 API */
export const ProcessExpressionApi = {
  /**
   * 查询流程表达式分页
   * @param {any} params 分页查询参数
   * @returns {Promise<any>} 流程表达式分页数据
   */
  getProcessExpressionPage: async (params: any) => {
    return await request.get({ url: `/bpm/process-expression/page`, params })
  },

  /**
   * 查询流程表达式详情
   * @param {number} id 表达式编号
   * @returns {Promise<any>} 流程表达式详情
   */
  getProcessExpression: async (id: number) => {
    return await request.get({ url: `/bpm/process-expression/get?id=` + id })
  },

  /**
   * 新增流程表达式
   * @param {ProcessExpressionVO} data 流程表达式数据
   * @returns {Promise<any>} 新增结果
   */
  createProcessExpression: async (data: ProcessExpressionVO) => {
    return await request.post({ url: `/bpm/process-expression/create`, data })
  },

  /**
   * 修改流程表达式
   * @param {ProcessExpressionVO} data 流程表达式数据
   * @returns {Promise<any>} 修改结果
   */
  updateProcessExpression: async (data: ProcessExpressionVO) => {
    return await request.put({ url: `/bpm/process-expression/update`, data })
  },

  /**
   * 删除流程表达式
   * @param {number} id 表达式编号
   * @returns {Promise<any>} 删除结果
   */
  deleteProcessExpression: async (id: number) => {
    return await request.delete({ url: `/bpm/process-expression/delete?id=` + id })
  },

  /**
   * 导出流程表达式 Excel
   * @param {any} params 导出参数
   * @returns {Promise<any>} Excel文件流
   */
  exportProcessExpression: async (params) => {
    return await request.download({ url: `/bpm/process-expression/export-excel`, params })
  }
}
