import request from '@/config/axios'
import type { TagInfo } from './tagCategory'
import { method } from 'lodash-es'

/**
 * 分页数据通用结构
 */
export interface TableDataInfo<T> {
  /** 列表数据 */
  rows: T[]
  /** 总条数 */
  total: number
}

/**
 * 报告信息对象
 */
export interface ReportInfo {
  /** 区 */
  area: string
  /** 区域编码 */
  areaValue: string
  /** 市 */
  city: string
  /** 封面预览图片 */
  coverImage: string
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 描述 */
  description: string
  /** 下载量 */
  downloadCount: number
  /** 主键32位UUID */
  id: string
  /** 扩展参数 */
  params: object
  /** 预览图片 */
  previewImage: string
  /** 省 */
  province: string
  /** 发布时间 */
  publishTime: string
  /** 大区 */
  region: string
  /** 备注 */
  remark: string
  /** 报告文件（文件存储路径） */
  reportFile: string
  /** 报告类型ID（关联report_type.id） */
  reportId: string
  /** 文件大小 */
  reportSize: string
  /** 报告标题 */
  reportTitle: string
  /** 年度 */
  reportYear: string
  /** 排序号 */
  sort: number
  /** 状态：0-启用 1-停用 */
  status: number
  /** 标签信息 */
  tagInfos: TagInfo[]
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
  /** 访问量 */
  visitCount: number
}

/**
 * 报告分页查询参数（复用 ReportInfo 字段作为筛选条件）
 */
export interface ReportInfoQueryDTO extends Partial<ReportInfo> {
  /** 页码 */
  pageNum?: number
  /** 每页条数 */
  pageSize?: number
}

/**
 * 分页查询报告信息
 *
 * @param params 查询参数
 * @returns 分页报告数据
 */
export const fetchReportInfoPage = (params: ReportInfoQueryDTO): Promise<TableDataInfo<ReportInfo>> => {
  return request.post({ url: '/engineclient/client/report-info/page', data: params })
}

/**
 * 根据ID获取报告详情
 *
 * @param id 报告ID
 * @returns 报告详情
 */
export const getReportInfoById = (id: string) => {
  return request.get({ url: '/engineclient/client/getInfoById', params: { id } })
}

/**
 * 下载报告文件
 *
 * @param data 报告信息对象
 * @returns 文件 Blob
 */
export const downloadReportFile = (data: ReportInfo) => {
  return request.download({ url: '/engineclient/client/report/download/file', data, responseType: 'blob', method: 'post' })
}

/**
 * 预览报告（获取 reportFile 路径）
 *
 * @param data 报告信息对象
 * @returns 报告信息（含 reportFile）
 */
export const previewReportFile = (data: ReportInfo) => {
  return request.post({ url: '/engineclient/client/report/preview', data })
}
