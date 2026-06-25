import request from '@/config/axios'

/** BPM 流程监听器 VO */
export interface ProcessListenerVO {
  /** 编号 */
  id: number
  /** 监听器名字 */
  name: string
  /** 监听器类型 */
  type: string
  /** 监听器状态 */
  status: number
  /** 监听事件 */
  event: string
  /** 监听器值类型 */
  valueType: string
  /** 监听器值 */
  value: string
}

/** BPM 流程监听器 API */
export const ProcessListenerApi = {
  /**
   * 查询流程监听器分页
   * @param {any} params 分页查询参数
   * @returns {Promise<any>} 流程监听器分页数据
   */
  getProcessListenerPage: async (params: any) => {
    return await request.get({ url: `/bpm/process-listener/page`, params })
  },

  /**
   * 查询流程监听器详情
   * @param {number} id 监听器编号
   * @returns {Promise<any>} 流程监听器详情
   */
  getProcessListener: async (id: number) => {
    return await request.get({ url: `/bpm/process-listener/get?id=` + id })
  },

  /**
   * 新增流程监听器
   * @param {ProcessListenerVO} data 流程监听器数据
   * @returns {Promise<any>} 新增结果
   */
  createProcessListener: async (data: ProcessListenerVO) => {
    return await request.post({ url: `/bpm/process-listener/create`, data })
  },

  /**
   * 修改流程监听器
   * @param {ProcessListenerVO} data 流程监听器数据
   * @returns {Promise<any>} 修改结果
   */
  updateProcessListener: async (data: ProcessListenerVO) => {
    return await request.put({ url: `/bpm/process-listener/update`, data })
  },

  /**
   * 删除流程监听器
   * @param {number} id 监听器编号
   * @returns {Promise<any>} 删除结果
   */
  deleteProcessListener: async (id: number) => {
    return await request.delete({ url: `/bpm/process-listener/delete?id=` + id })
  }
}
