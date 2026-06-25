import request from '@/config/axios'

/** 请假申请 VO */
export type LeaveVO = {
  id: number
  status: number
  type: number
  reason: string
  processInstanceId: string
  startTime: string
  endTime: string
  createTime: string
}

/**
 * 创建请假申请
 * @param {LeaveVO} data 请假申请数据
 * @returns {Promise<any>} 创建结果
 */
export const createLeave = async (data: LeaveVO) => {
  return await request.post({ url: '/admin-api/bpm/oa/leave/create', data: data })
}

/**
 * 获得请假申请详情
 * @param {number} id 请假申请ID
 * @returns {Promise<any>} 请假申请详情
 */
export const getLeave = async (id: number) => {
  return await request.get({ url: '/admin-api/bpm/oa/leave/get?id=' + id })
}

/**
 * 获得请假申请分页
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 请假申请分页数据
 */
export const getLeavePage = async (params: PageParam) => {
  return await request.get({ url: '/admin-api/bpm/oa/leave/page', params })
}
