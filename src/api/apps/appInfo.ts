import request from '@/config/axios'

/**
 * 应用分类信息接口
 */
export interface AppCategory {
  /** 分类编码(唯一) */
  categoryCode: string
  /** 分类名称 */
  categoryName: string
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 删除标记 0-正常 1-删除 */
  deleted: number
  /** 主键ID */
  id: string
  /** 参数 */
  params: object
  /** 备注 */
  remark: string
  /** 排序号，越小越靠前 */
  sort: number
  /** 状态 0-启用 1-停用 */
  status: number
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 应用场景信息接口
 */
export interface AppScene {
  /** 关联应用ID */
  appId: string
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 删除标记 */
  deleted: number
  /** 主键ID */
  id: number
  /** 参数 */
  params: object
  /** 备注 */
  remark: string
  /** 场景描述 */
  sceneContent: string
  /** 排序号 */
  sort: number
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 标签信息接口
 */
export interface TagInfo {
  /** 所属分类ID，关联tag_category.id */
  categoryId: number
  /** 标签颜色（HEX值，如：#00FF00 绿色） */
  color: string
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 是否删除：0-未删除，1-已删除 */
  deleted: number
  /** 图标 */
  icon: string
  /** 主键ID */
  id: string
  /** 参数 */
  params: object
  /** 备注 */
  remark: string
  /** 排序号，越小越靠前 */
  sort: number
  /** 状态：0-停用，1-启用 */
  status: number
  /** 标签编码（唯一标识，如：ENTERPRISE_PORTRAIT） */
  tagCode: string
  /** 标签名称（如：企业画像） */
  tagName: string
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 应用信息接口
 */
export interface AppInfo {
  /** 应用分类信息 */
  appCategoryInfo: AppCategory
  /** 应用馆描述 */
  appDesc: string
  /** 应用图标URL */
  appIcon: string
  /** 应用介绍 */
  appIntro: string
  /** 应用访问链接 */
  appLink: string
  /** 应用名称 */
  appName: string
  /** 使用场景信息 */
  appScenesInfos: AppScene[]
  /** 应用分类ID（关联tag_category.id） */
  categoryId: string
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 删除标记 */
  deleted: number
  /** 主键ID */
  id: string
  /** 参数 */
  params: object
  /** 备注 */
  remark: string
  /** 排序号 */
  sort: number
  /** 内部系统名称 */
  sourceName: string
  /** 来源系统/单位 */
  sourceSystem: string
  /** 应用来源：1-内部 2-外部 */
  sourceType: number
  /** 状态：0-启用 1-停用 */
  status: number
  /** 使用标签信息 */
  tagInfos: TagInfo[]
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 应用列表查询参数接口
 */
export interface AppListQueryDTO extends PageParam {
  /** 应用ID */
  appId?: string
  /** 应用分类ID */
  categoryId?: string
  /** 搜索关键字(应用名称/简介) */
  keyword?: string
}

/**
 * 获取应用分页列表
 * 
 * @description 支持关键字搜索、标签分类ID筛选
 * @param params 查询参数
 * @returns 分页应用信息列表
 * 
 * @example
 * ```typescript
 * // 获取全部应用
 * const result = await getAppList({})
 * 
 * // 按分类筛选
 * const result = await getAppList({ categoryId: 'xxx' })
 * 
 * // 关键字搜索
 * const result = await getAppList({ keyword: '财务' })
 * ```
 */
export const getAppList = (params: AppListQueryDTO): Promise<PageResult<AppInfo>> => {
  return request.post({ url: '/engineclient/client/app-info/getAppList', data: params })
}

/**
 * 根据应用ID获取应用详情
 * 
 * @description 根据应用ID获取应用详细信息
 * @param appId 应用ID
 * @returns 应用信息
 * 
 * @example
 * ```typescript
 * const appInfo = await getAppInfoById('123')
 * console.log(appInfo.appName)
 * ```
 */
export const getAppInfoById = (appId: string): Promise<AppInfo> => {
  return request.get({ url: `/engineclient/client/app-info/getAppInfoById/${appId}` })
}

/**
 * 应用跳转调用请求参数
 */
export interface AppCallDTO {
  /** 应用ID */
  appId: string
}

/**
 * 应用跳转调用
 *
 * @description 调用应用跳转接口，返回应用信息后根据 appLink 跳转
 * @param data 调用参数
 * @returns 应用信息（包含 appLink 跳转链接）
 */
export const callApp = (data: AppCallDTO): Promise<AppInfo> => {
  return request.post({ url: '/engineclient/app-info/call', data })
}
