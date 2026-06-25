import request from '@/config/axios'

/**
 * 报告类型对象
 */
export interface ReportType {
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 主键UUID(32位) */
  id: string
  /** 扩展参数 */
  params: object
  /** 备注 */
  remark: string
  /** 排序号 */
  sort: number
  /** 状态：0-启用 1-停用 */
  status: number
  /** 类型编码 */
  typeCode: string
  /** 类型名称 */
  typeName: string
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 查询全部启用的报告类型下拉列表
 *
 * @returns 报告类型列表
 */
export const fetchAllReportType = () => {
  return request.get({ url: '/engineclient/client/report-type/listAll' })
}
