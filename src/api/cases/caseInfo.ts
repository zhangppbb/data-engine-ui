import request from '@/config/axios'
import type { CaseScene } from './caseScene'

/**
 * 分页数据通用结构
 */
export interface TableDataInfo<T> {
  /** 列表数据 */
  rows: T[]
  /** 总条数 */
  total: number
  /** 当前页 */
  currentPage: number
  /** 每页条数 */
  pageSize: number
}

/**
 * 案例模块子项（业务痛点、解决方案、功能界面、客户价值等通用结构）
 */
export interface CaseSectionItem {
  /** 排序号 */
  sort: number
  /** 标题 */
  title: string
  /** 描述（功能界面时为图片路径） */
  description: string
  /** 特征标签列表 */
  characteristic: string[]
}

/**
 * 标签信息
 */
export interface TagInfo {
  /** 所属分类ID */
  categoryId: string
  /** 标签颜色（HEX值） */
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
  /** 排序号 */
  sort: number
  /** 状态：0-停用，1-启用 */
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
 * 案例信息查询参数（分页）
 */
export interface CaseInfoQueryDTO extends PageParam {
  /** 项目必要性总结 */
  businessSummary?: string
  /** 业务背景与痛点 */
  caseBusinesses?: CaseSectionItem[]
  /** 业务背景与痛点标题 */
  caseBusinessTitle?: string
  /** 核心系统功能界面 */
  caseCoreImage?: CaseSectionItem[]
  /** 核心系统功能界面标题 */
  caseCoreImageTitle?: string
  /** 客户价值与行业意义 */
  caseCustomerIndustry?: CaseSectionItem[]
  /** 客户价值与行业意义标题 */
  caseCustomerIndustryTitle?: string
  /** 解决方案 */
  caseSolution?: CaseSectionItem[]
  /** 解决方案标题 */
  caseSolutionTitle?: string
  /** 客户名称 */
  customerName?: string
  /** 项目简介 */
  description?: string
  /** 案例主键UUID */
  id?: string
  /** 所属行业 */
  industry?: string
  /** 行业示范价值详情 */
  industryValueContent?: string
  /** 行业示范价值标题 */
  industryValueTitle?: string
  /** 项目落地成果内容 */
  resultContent?: string
  /** 落地成果标题 */
  resultTitle?: string
  /** 关联场景ID */
  sceneId?: string
  /** 状态：0-启用 1-停用 */
  status?: number
  /** 系统功能模块标题 */
  systemTitle?: string
  /** 标签信息 */
  tagInfos?: TagInfo[]
  /** 项目标题 */
  title?: string
}

/**
 * 案例信息列表项
 */
export interface CaseInfoItem {
  /** 项目必要性总结 */
  businessSummary: string
  /** 业务背景与痛点 */
  caseBusinesses: CaseSectionItem[]
  /** 业务背景与痛点标题 */
  caseBusinessTitle: string
  /** 核心系统功能界面 */
  caseCoreImage: CaseSectionItem[]
  /** 核心系统功能界面标题 */
  caseCoreImageTitle: string
  /** 客户价值与行业意义 */
  caseCustomerIndustry: CaseSectionItem[]
  /** 客户价值与行业意义标题 */
  caseCustomerIndustryTitle: string
  /** 场景信息 */
  caseSceneInfo: CaseScene
  /** 解决方案 */
  caseSolution: CaseSectionItem[]
  /** 解决方案标题 */
  caseSolutionTitle: string
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 客户名称 */
  customerName: string
  /** 项目简介 */
  description: string
  /** 案例主键UUID */
  id: string
  /** 所属行业 */
  industry: string
  /** 行业示范价值详情 */
  industryValueContent: string
  /** 行业示范价值标题 */
  industryValueTitle: string
  /** 备注 */
  remark: string | null
  /** 项目落地成果内容 */
  resultContent: string
  /** 落地成果标题 */
  resultTitle: string
  /** 关联场景ID */
  sceneId: string
  /** 状态：0-启用 1-停用 */
  status: number
  /** 系统功能模块标题 */
  systemTitle: string
  /** 标签信息 */
  tagInfos: TagInfo[]
  /** 项目标题 */
  title: string
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
  /** 更新时间(版本) */
  updateVersion: string
}

/**
 * 分页查询案例列表
 * @description 分页查询案例列表，支持场景ID筛选
 * @param params 查询参数
 * @returns 分页案例数据
 */
export const fetchCaseInfoPage = (params: CaseInfoQueryDTO & PageParam): Promise<TableDataInfo<CaseInfoItem>> => {
  return request.post({ url: '/engineclient/client/case-info/queryCaseInfoPage', data: params })
}

/**
 * 获取案例详情
 * @description 根据案例ID获取案例详细信息
 * @param id 案例ID
 * @returns 案例详情数据
 */
export const fetchCaseDetail = (id: string): Promise<CaseInfoItem> => {
  return request.get({ url: `/engineclient/client/case-info/getCaseInfoDetail/${id}` })
}
