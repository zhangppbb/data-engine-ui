import request from '@/config/axios'

/** 部门 VO */
export interface DeptVO {
  id?: number
  name: string
  parentId: number
  status: number
  category: number
  sort: number
  leaderUserId: number
  phone: string
  email: string
  createTime: Date
}

/**
 * 查询部门（精简）列表
 * @returns {Promise<DeptVO[]>} 部门精简列表
 */
export const getSimpleDeptList = async (): Promise<DeptVO[]> => {
  return await request.get({ url: '/admin-api/system/dept/simple-list' })
}

/**
 * 查询部门列表
 * @param {any} params 查询参数
 * @returns {Promise<any>} 部门列表
 */
export const getDeptList = async (params) => {
  return await request.get({ url: '/admin-api/system/dept/list', params })
}

/**
 * 查询部门详情
 * @param {number} id 部门ID
 * @returns {Promise<any>} 部门详情
 */
export const getDept = async (id: number) => {
  return await request.get({ url: '/admin-api/system/dept/get?id=' + id })
}

/**
 * 新增部门
 * @param {DeptVO} data 部门数据
 * @returns {Promise<any>} 新增结果
 */
export const createDept = async (data: DeptVO) => {
  return await request.post({ url: '/admin-api/system/dept/create', data: data })
}

/**
 * 修改部门
 * @param {DeptVO} params 部门数据
 * @returns {Promise<any>} 修改结果
 */
export const updateDept = async (params: DeptVO) => {
  return await request.put({ url: '/admin-api/system/dept/update', data: params })
}

/**
 * 删除部门
 * @param {number} id 部门ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteDept = async (id: number) => {
  return await request.delete({ url: '/admin-api/system/dept/delete?id=' + id })
}

/**
 * 修改部门状态
 * @param {number} id 部门ID
 * @param {number} status 目标状态
 * @returns {Promise<any>} 状态修改结果
 */
export const updateDeptStatus = (id: number, status: number) => {
  const data = { id, status }
  return request.put({ url: '/admin-api/system/dept/update-status', data: data })
}
