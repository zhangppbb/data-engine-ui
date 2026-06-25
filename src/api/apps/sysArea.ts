import request from '@/config/axios'

/**
 * 系统区域树节点
 */
export interface SysAreaNode {
  /** 区域ID */
  id: string
  /** 父级ID */
  parentId: string
  /** 排序权重 */
  weight: number
  /** 区域名称 */
  name: string
  /** 子节点 */
  children?: SysAreaNode[]
}

/**
 * 获取省市区树形数据
 *
 * @returns 区域树
 */
export const fetchSysAreaTree = () => {
  return request.get({ url: '/engineclient/client/sys-area/tree' })
}
