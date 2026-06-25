import request from '@/config/axios'

/**
 * 任务状态枚举
 */
export enum TaskStatusEnum {
  /** 跳过 */
  SKIP = -2,
  /** 未开始 */
  NOT_START = -1,
  /** 待审批 */
  WAIT = 0,
  /** 审批中 */
  RUNNING = 1,
  /** 审批通过 */
  APPROVE = 2,
  /** 审批不通过 */
  REJECT = 3,
  /** 已取消 */
  CANCEL = 4,
  /** 已退回 */
  RETURN = 5,
  /** 审批通过中 */
  APPROVING = 7
}

/**
 * 获取待办任务分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 待办任务分页数据
 */
export const getTaskTodoPage = async (params: any) => {
  return await request.get({ url: '/admin-api/bpm/task/todo-page', params })
}

/**
 * 获取已办任务分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 已办任务分页数据
 */
export const getTaskDonePage = async (params: any) => {
  return await request.get({ url: '/admin-api/bpm/task/done-page', params })
}

/**
 * 获取管理任务分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 管理任务分页数据
 */
export const getTaskManagerPage = async (params: any) => {
  return await request.get({ url: '/admin-api/bpm/task/manager-page', params })
}

/**
 * 审批通过任务
 * @param {any} data 审批数据
 * @returns {Promise<any>} 审批结果
 */
export const approveTask = async (data: any) => {
  return await request.put({ url: '/admin-api/bpm/task/approve', data })
}

/**
 * 审批拒绝任务
 * @param {any} data 拒绝数据（含原因）
 * @returns {Promise<any>} 拒绝结果
 */
export const rejectTask = async (data: any) => {
  return await request.put({ url: '/admin-api/bpm/task/reject', data })
}

/**
 * 根据流程实例ID获取任务列表
 * @param {string} processInstanceId 流程实例ID
 * @returns {Promise<any>} 任务列表
 */
export const getTaskListByProcessInstanceId = async (processInstanceId: string) => {
  return await request.get({
    url: '/admin-api/bpm/task/list-by-process-instance-id?processInstanceId=' + processInstanceId
  })
}

/**
 * 获取所有可退回的节点
 * @param {string} id 任务ID
 * @returns {Promise<any>} 可退回节点列表
 */
export const getTaskListByReturn = async (id: string) => {
  return await request.get({ url: '/admin-api/bpm/task/list-by-return', params: { id } })
}

/**
 * 退回任务
 * @param {any} data 退回数据（含目标节点和原因）
 * @returns {Promise<any>} 退回结果
 */
export const returnTask = async (data: any) => {
  return await request.put({ url: '/admin-api/bpm/task/return', data })
}

/**
 * 委派任务
 * @param {any} data 委派数据（含被委派人）
 * @returns {Promise<any>} 委派结果
 */
export const delegateTask = async (data: any) => {
  return await request.put({ url: '/admin-api/bpm/task/delegate', data })
}

/**
 * 转派任务
 * @param {any} data 转派数据（含转派人）
 * @returns {Promise<any>} 转派结果
 */
export const transferTask = async (data: any) => {
  return await request.put({ url: '/admin-api/bpm/task/transfer', data })
}

/**
 * 加签
 * @param {any} data 加签数据（含加签人列表）
 * @returns {Promise<any>} 加签结果
 */
export const signCreateTask = async (data: any) => {
  return await request.put({ url: '/admin-api/bpm/task/create-sign', data })
}

/**
 * 减签
 * @param {any} data 减签数据（含待移除的加签人）
 * @returns {Promise<any>} 减签结果
 */
export const signDeleteTask = async (data: any) => {
  return await request.delete({ url: '/admin-api/bpm/task/delete-sign', data })
}

/**
 * 抄送任务
 * @param {any} data 抄送数据（含抄送人）
 * @returns {Promise<any>} 抄送结果
 */
export const copyTask = async (data: any) => {
  return await request.put({ url: '/admin-api/bpm/task/copy', data })
}

/**
 * 撤回任务
 * @param {string} taskId 任务ID
 * @returns {Promise<any>} 撤回结果
 */
export const withdrawTask = async (taskId: string) => {
  return await request.put({ url: '/admin-api/bpm/task/withdraw', params: { taskId } })
}

/**
 * 获取我的待办任务
 * @param {string} processInstanceId 流程实例ID
 * @returns {Promise<any>} 待办任务详情
 */
export const myTodoTask = async (processInstanceId: string) => {
  return await request.get({ url: '/admin-api/bpm/task/my-todo?processInstanceId=' + processInstanceId })
}

/**
 * 获取子任务列表（用于减签）
 * @param {string} id 父任务ID
 * @returns {Promise<any>} 子任务列表
 */
export const getChildrenTaskList = async (id: string) => {
  return await request.get({ url: '/admin-api/bpm/task/list-by-parent-task-id?parentTaskId=' + id })
}
