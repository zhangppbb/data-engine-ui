import request from '@/config/axios'
import { ZONE_TYPE } from '@/constants/zone'

/**
 * 使用记录 VO
 */
export interface UsageRecordVO {
  /** 记录ID */
  id: number
  /** 时间 */
  time: string
  /** 服务名称 */
  service: string
  /** 调用内容 */
  content: string
  /** 消耗点数 */
  points: number
  /** 状态：成功/失败 */
  status: string
}

/**
 * 使用记录查询参数
 */
export interface UsageRecordQuery extends PageParam {
  /** 开始时间 */
  startTime?: string
  /** 结束时间 */
  endTime?: string
}

/**
 * 查询使用记录（分页）
 *
 * @description POST /engineclient/personal-center/service/usage/record
 * @param params 查询参数
 * @returns 分页使用记录
 */
export const getUsageRecords = (params: UsageRecordQuery): Promise<PageResult<UsageRecordVO>> => {
  return request.post({ url: '/engineclient/personal-center/service/usage/record', data: params })
}

/**
 * 用户企业信息
 */
export interface PersonalCenterCompanyInfo {
  /** 联系人姓名 */
  contactName: string
  /** 公司邮箱 */
  email: string
  /** ID */
  id: string
  /** 公司KeyNo */
  keyNo: string
  /** 企业LongId */
  longCompId: number
  /** 公司名称 */
  name: string
  /** 联系电话 */
  phone: string
  /** 公司密钥 */
  secretKey: string
  /** 简称 */
  shortName: string
}

/**
 * 个人中心用户信息
 */
export interface PersonalCenterInfo {
  /** 归属公司 */
  companyId: string
  /** 创建时间 */
  createTime: string
  /** 邮箱 */
  email: string
  /** 编号 */
  id: string
  /** 平台语言 */
  lang: string
  /** 最后登陆时间 */
  loginDate: string
  /** 最后登陆IP */
  loginIp: string
  /** 登录名 */
  loginName: string
  /** 用户LongId */
  longUserId: number
  /** 已使用次数 */
  madeCalls: string
  /** 姓名 */
  name: string
  /** 电话 */
  phone: string
  /** 用户头像 */
  photo: string
  /** 剩余点数 */
  remainAmount: number
  /** 备注信息 */
  remarks: string
  /** 用户状态 */
  status: string
  /** 用户类型 */
  userType: string
  /** 用户企业信息 */
  webapiCompInfo: PersonalCenterCompanyInfo
}

/**
 * 获取当前用户信息
 *
 * @description GET /engineclient/personal-center/getInfo
 * @returns 用户信息
 */
export const getPersonalCenterInfo = (): Promise<PersonalCenterInfo> => {
  return request.get({ url: '/engineclient/personal-center/getInfo' })
}

/**
 * 修改用户信息
 *
 * @description POST /engineclient/personal-center/update/info
 * @param data 用户信息
 * @returns 操作结果
 */
export const updatePersonalCenterInfo = (data: Partial<PersonalCenterInfo>): Promise<boolean> => {
  return request.post({ url: '/engineclient/personal-center/update/info', data })
}

// ==================== 最近使用记录（接口调用） ====================

/** 最近使用记录行中的 faceInfo */
export interface LatestFaceInfo {
  faceId: string
  faceName: string
  description: string
  reqWay: string
  faceUrl: string
  points: string
  amount: string
  amountUnit: string
}

/** 最近使用记录行中的 appInfo */
export interface LatestAppInfo {
  id: string
  appName: string
  appDesc: string
  appIcon: string
  appLink: string
}

/** 最近使用记录响应行 */
export interface LatestUsageRecordRow {
  appInfo: LatestAppInfo | null
  caseInfo: Record<string, unknown> | null
  reportInfo: Record<string, unknown> | null
  faceInfo: LatestFaceInfo | null
}

/** 最近使用记录响应 */
export interface LatestUsageRecordResponse {
  total: string
  rows: LatestUsageRecordRow[]
}

/** 扁平化后的最近使用条目（前端展示用） */
export interface LatestUsageItemVO {
  /** ZONE_TYPE 枚举 */
  type: ZONE_TYPE
  name: string
  description: string
  /** faceId 或 appId */
  id: string
  reqWay: string
  points: string
  icon: string
}

/**
 * 获取最近使用的接口记录
 *
 * @description POST /engineclient/personal-center/user/latest/usage/records
 * @returns 最近使用记录
 */
export const getLatestUsageRecords = () => {
  return request.post({ url: '/engineclient/personal-center/user/latest/usage/records', data: {} })
}
