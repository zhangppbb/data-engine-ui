import request from '@/config/axios'
import { ProcessDefinitionVO } from '@/api/bpm/model'
import { NodeType, CandidateStrategy } from '@/components/SimpleProcessDesignerV2/src/consts'

/** 任务信息 */
export type Task = {
  id: string
  name: string
}

/** 流程实例 VO */
export type ProcessInstanceVO = {
  id: number
  name: string
  processDefinitionId: string
  category: string
  result: number
  tasks: Task[]
  fields: string[]
  status: number
  remark: string
  businessKey: string
  createTime: string
  endTime: string
  processDefinition?: ProcessDefinitionVO
}

/** 用户信息 */
export type User = {
  id: number
  nickname: string
  avatar: string
}

/** 审批任务信息 */
export type ApprovalTaskInfo = {
  id: number
  ownerUser: User
  assigneeUser: User
  status: number
  reason: string
  signPicUrl: string
}

/** 审批节点信息 */
export type ApprovalNodeInfo = {
  id: number
  name: string
  nodeType: NodeType
  candidateStrategy?: CandidateStrategy
  status: number
  startTime?: Date
  endTime?: Date
  processInstanceId?: string
  candidateUsers?: User[]
  tasks: ApprovalTaskInfo[]
}

/**
 * 获取我的流程实例分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 流程实例分页数据
 */
export const getProcessInstanceMyPage = async (params: any) => {
  return await request.get({ url: '/admin-api/bpm/process-instance/my-page', params })
}

/**
 * 获取管理流程实例分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 流程实例分页数据
 */
export const getProcessInstanceManagerPage = async (params: any) => {
  return await request.get({ url: '/admin-api/bpm/process-instance/manager-page', params })
}

/**
 * 创建流程实例
 * @param {any} data 流程实例创建数据
 * @returns {Promise<any>} 创建结果
 */
export const createProcessInstance = async (data) => {
  return await request.post({ url: '/admin-api/bpm/process-instance/create', data: data })
}

/**
 * 发起人取消流程实例
 * @param {number} id 流程实例ID
 * @param {string} reason 取消原因
 * @returns {Promise<any>} 取消结果
 */
export const cancelProcessInstanceByStartUser = async (id: number, reason: string) => {
  const data = {
    id: id,
    reason: reason
  }
  return await request.delete({ url: '/admin-api/bpm/process-instance/cancel-by-start-user', data: data })
}

/**
 * 管理员取消流程实例
 * @param {number} id 流程实例ID
 * @param {string} reason 取消原因
 * @returns {Promise<any>} 取消结果
 */
export const cancelProcessInstanceByAdmin = async (id: number, reason: string) => {
  const data = {
    id: id,
    reason: reason
  }
  return await request.delete({ url: '/admin-api/bpm/process-instance/cancel-by-admin', data: data })
}

/**
 * 获取流程实例详情
 * @param {string} id 流程实例ID
 * @returns {Promise<any>} 流程实例详情
 */
export const getProcessInstance = async (id: string) => {
  return await request.get({ url: '/admin-api/bpm/process-instance/get?id=' + id })
}

/**
 * 获取流程实例抄送分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 抄送分页数据
 */
export const getProcessInstanceCopyPage = async (params: any) => {
  return await request.get({ url: '/admin-api/bpm/process-instance/copy/page', params })
}

/**
 * 获取审批详情
 * @param {any} params 查询参数
 * @returns {Promise<any>} 审批详情（含审批节点和任务信息）
 */
export const getApprovalDetail = async (params: any) => {
  return await request.get({ url: '/admin-api/bpm/process-instance/get-approval-detail', params })
}

/**
 * 获取下一个执行的流程节点
 * @param {any} params 查询参数
 * @returns {Promise<any>} 下一个审批节点列表
 */
export const getNextApprovalNodes = async (params: any) => {
  return await request.get({ url: '/admin-api/bpm/process-instance/get-next-approval-nodes', params })
}

/**
 * 获取表单字段权限
 * @param {any} params 查询参数
 * @returns {Promise<any>} 表单字段权限配置
 */
export const getFormFieldsPermission = async (params: any) => {
  return await request.get({ url: '/admin-api/bpm/process-instance/get-form-fields-permission', params })
}

/**
 * 获取流程实例的BPMN模型视图
 * @param {string} id 流程实例ID
 * @returns {Promise<any>} BPMN模型视图数据
 */
export const getProcessInstanceBpmnModelView = async (id: string) => {
  return await request.get({ url: '/admin-api/bpm/process-instance/get-bpmn-model-view?id=' + id })
}
