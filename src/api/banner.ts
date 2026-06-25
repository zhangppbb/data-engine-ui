import request from '@/config/axios'
import { CaseInfoItem } from './cases/caseInfo'
import { ZONE_TYPE } from '@/constants/zone'

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
  /** 分类ID */
  categoryId: number
  /** 颜色 */
  color: string
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
  /** 参数 */
  params: object
  /** 备注 */
  remark: string
  /** 排序号 */
  sort: number
  /** 状态 */
  status: number
  /** 标签编码 */
  tagCode: string
  /** 标签名称 */
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
  /** 来源系统 */
  sourceSystem: string
  /** 来源类型 */
  sourceType: number
  /** 状态 */
  status: number
  /** 标签信息 */
  tagInfos: TagInfo[]
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 专区目录接口
 */
export interface AppZone {
  /** 应用信息列表 */
  appInfos: AppInfo[]
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
  /** 图片URL */
  image: string
  /** 参数 */
  params: object
  /** 备注 */
  remark: string
  /** 排序号 */
  sort: number
  /** 状态 */
  status: number
  /** 标签信息列表 */
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
 * Banner对象接口
 */
export interface AppBanner {
  /** 专区目录信息 */
  appZoneInfo: AppZone
  /** 案例信息 */
  caseInfo: CaseInfoItem
  /** Banner描述 */
  bannerDesc: string
  /** Banner名称 */
  bannerName: string
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 删除标记 */
  deleted: number
  /** 主键ID */
  id: string
  /** Banner图片URL */
  imageUrl: string
  /** 跳转专区ID */
  jumpZoneId: string
  /** 参数 */
  params: object
  /** 备注 */
  remark: string
  /** 排序号 */
  sort: number
  /** 状态 */
  status: number
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 获取Banner列表
 * @description 自动过滤已停用的Banner数据
 * @param bannerType Banner类型：APP-应用轮播图 / CASE-案例轮播图
 * @returns Banner数据列表
 */
export const fetchBannerList = (bannerType: ZONE_TYPE): Promise<AppBanner[]> => {
  return request.get({ url: `/engineclient/client/app-banner/getBannerList/${bannerType}` })
}

/**
 * 获取Banner详情请求参数
 */
export interface FetchBannerRequest {
  /** Banner ID */
  bannerId: string
  /** 专区编码 */
  zoneCode: string
}

/**
 * 获取Banner详情
 * @description 根据ID和专区编码查询Banner详情
 * @param params 请求参数
 * @returns Banner数据
 */
export const fetchBanner = (params: FetchBannerRequest): Promise<AppBanner> => {
  return request.get({ 
    url: '/engineclient/client/app-banner/getBannerDetail',
    params: {
      id: params.bannerId,
      zoneCode: params.zoneCode
    }
  })
}
