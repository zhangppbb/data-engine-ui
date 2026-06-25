import request from '@/config/axios'
import type { WebapiFaceInfo } from '@/api/resources/faceInfo'
import type { CaseInfoItem } from '@/api/cases/caseInfo'

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
 * 应用分类信息接口
 */
export interface AppCategoryInfo {
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
 * 应用信息接口
 */
export interface AppInfo {
  /** 应用分类信息 */
  appCategoryInfo: AppCategoryInfo
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
 * 专区信息接口
 */
export interface AppZone {
  /** 应用信息列表 */
  appInfos: AppInfo[]
  /** 案例信息列表 */
  caseInfos: CaseInfoItem[]
  /** 资源（接口）信息列表 */
  webapiFaceInfos: WebapiFaceInfo[]
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 删除标记 */
  deleted: number
  /** 图标 */
  icon: string
  /** 主键ID */
  id: string
  /** 图片 */
  image: string
  /** 参数 */
  params: object
  /** 备注 */
  remark: string
  /** 排序号 */
  sort: number
  /** 状态 */
  status: number
  /** 标签信息 */
  tagInfos: TagInfo[]
  /** 租户ID */
  tenantId: number
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
  /** 专区编码 */
  zoneCode: string
  /** 专区描述 */
  zoneDesc: string
  /** 专区名称 */
  zoneName: string
}

/**
 * 专区应用列表查询参数
 */
export interface ZoneRelAppQueryDTO {
  /** 专区ID */
  id?: string
  /** 搜索关键字 */
  keyword?: string
  /** 专区编码 */
  zoneCode?: string
  /** 应用类型（如：apps-应用馆、resources-资源馆、cases-案例馆） */
  appType?: string
}

/**
 * 获取专区关联的应用列表
 * 
 * @description 根据专区ID或专区编码获取专区关联的应用列表
 * @param params 查询参数
 * @returns 专区信息列表
 * 
 * @example
 * ```typescript
 * // 根据专区编码获取应用列表
 * const zones = await getZoneRelAppList({ zoneCode: 'ZONE_001' })
 * 
 * // 根据专区ID获取应用列表
 * const zones = await getZoneRelAppList({ id: 'xxx' })
 * ```
 */
export const getZoneRelAppList = (params: ZoneRelAppQueryDTO): Promise<AppZone[]> => {
  return request.post({ url: '/engineclient/client/app-zone/getZoneRelAppList', data: params })
}
