import request from '@/config/axios'

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

// 查询部门（精简)列表
export const getSimpleDeptList = async (): Promise<DeptVO[]> => {
  return await request.get({ url: '/admin-api/system/dept/simple-list' })
}

// 查询部门列表
export const getDeptList = async (params) => {
  return await request.get({ url: '/admin-api/system/dept/list', params })
}

// 查询部门详情
export const getDept = async (id: number) => {
  return await request.get({ url: '/admin-api/system/dept/get?id=' + id })
}

// 新增部门
export const createDept = async (data: DeptVO) => {
  return await request.post({ url: '/admin-api/system/dept/create', data: data })
}

// 修改部门
export const updateDept = async (params: DeptVO) => {
  return await request.put({ url: '/admin-api/system/dept/update', data: params })
}

// 删除部门
export const deleteDept = async (id: number) => {
  return await request.delete({ url: '/admin-api/system/dept/delete?id=' + id })
}

// 部门状态修改
export const updateDeptStatus = (id: number, status: number) => {
  const data = { id, status }
  return request.put({ url: '/admin-api/system/dept/update-status', data: data })
}
