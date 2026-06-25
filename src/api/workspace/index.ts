import request from '@/config/axios'

/**
 * 最近使用应用 VO
 */
export interface RecentAppVO {
  /** 应用ID */
  appId: string
  /** 应用名称 */
  appName: string
  /** 应用图标 */
  appIcon: string
  /** 应用描述 */
  appDesc: string
  /** 应用链接 */
  appLink: string
  /** 来源类型：1-内部 / 2-外部 */
  sourceType: number
  /** 最后使用时间 */
  lastUsedTime: string
}

/**
 * 个人信息 VO
 */
export interface UserProfileVO {
  /** 用户ID */
  id: number
  /** 用户名称 */
  nickname: string
  /** 头像 */
  avatar: string
  /** 邮箱 */
  email: string
  /** 手机号 */
  phone: string
  /** 剩余点数 */
  remainingPoints: number
  /** 总调用次数 */
  totalCallCount: number
  /** 今日调用次数 */
  todayCallCount: number
  /** 注册时间 */
  registeredAt: string
}

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
 * 编辑个人信息 DTO
 */
export interface UpdateProfileDTO {
  /** 用户名称 */
  nickname: string
  /** 邮箱 */
  email: string
}

/**
 * 密钥信息 VO
 */
export interface ApiKeyInfoVO {
  /** 密钥（加密显示，如 sk-prod-****83gdjw2qx） */
  apiKey: string
  /** 今日调用次数 */
  todayCallCount: number
  /** 额度限制次数 */
  quotaLimit: number
}

// ==================== 工作空间 - 最近使用应用 ====================

/**
 * 获取最近使用应用列表
 *
 * @description 获取当前用户最近使用的应用列表（需登录）
 * @returns 最近使用应用列表
 */
export const getRecentApps = (): Promise<RecentAppVO[]> => {
  return request.get({ url: '/engineclient/client/workspace/recent-apps' })
}

// ==================== 工作空间 - 个人信息 ====================

/**
 * 获取个人信息
 *
 * @description 获取当前用户的个人信息，包含基本信息、剩余点数、调用次数（需登录）
 * @returns 用户个人信息
 */
export const getProfile = (): Promise<UserProfileVO> => {
  return request.get({ url: '/engineclient/client/workspace/profile' })
}

/**
 * 编辑个人信息
 *
 * @description 编辑当前用户的个人信息（用户名称、邮箱）（需登录）
 * @param data 编辑参数
 * @returns 操作结果
 */
export const updateProfile = (data: UpdateProfileDTO) => {
  return request.post({ url: '/engineclient/client/workspace/profile/update', data })
}

// ==================== 工作空间 - 使用记录 ====================

/**
 * 获取使用记录列表（分页）
 *
 * @description 获取当前用户的使用记录，包含时间、服务、调用内容、消耗点数、状态（需登录）
 * @param params 查询参数（支持分页和日期筛选）
 * @returns 分页使用记录列表
 */
export const getUsageRecords = (params: UsageRecordQuery): Promise<PageResult<UsageRecordVO>> => {
  return request.post({ url: '/engineclient/client/workspace/usage-records', data: params })
}

// ==================== 工作空间 - 密钥信息 ====================

/**
 * 获取密钥信息
 *
 * @description 查看密钥相关信息（需登录）。
 *              注意：密钥只能返回一次，后续调用返回 null。
 * @returns 密钥信息，apiKey 首次返回完整密钥，后续为 null
 */
export const getApiKeyInfo = (): Promise<ApiKeyInfoVO> => {
  return request.get({ url: '/engineclient/client/workspace/api-key-info' })
}
