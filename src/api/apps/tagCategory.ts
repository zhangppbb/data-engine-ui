import request from '@/config/axios'

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
 * 标签分类接口
 */
export interface TagCategory {
  /** 分类编码（唯一标识，如：DATA_SERVICE） */
  categoryCode: string
  /** 分类名称（如：数据服务） */
  categoryName: string
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
  /** 标签信息列表 */
  tagInfos: TagInfo[]
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 标签分类查询参数
 */
export interface TagCategoryQueryDTO {
  /** 分类编码（如：DATA_SERVICE，传值则按编码过滤，不传则查全部） */
  categoryCode?: string
}

/**
 * 获取所有标签分类
 * 
 * @description 查询全部有效标签分类数据，支持按分类编码过滤
 * @param params 查询参数
 * @returns 标签分类列表
 * 
 * @example
 * ```typescript
 * // 获取全部标签分类
 * const categories = await fetchAllTagCategory()
 * 
 * // 按分类编码过滤
 * const categories = await fetchAllTagCategory({ categoryCode: 'DATA_SERVICE' })
 * ```
 */
export const fetchAllTagCategory = (params?: TagCategoryQueryDTO) => {
  return request.get({ url: '/engineclient/client/tag-category/getAllTagCategory', params })
}
