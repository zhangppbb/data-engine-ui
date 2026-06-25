import request from '@/config/axios'

/**
 * 案例场景对象
 */
export interface CaseScene {
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 场景主键UUID */
  id: string
  /** 场景编码 */
  sceneCode: string
  /** 场景描述 */
  sceneDesc: string
  /** 场景名称 */
  sceneName: string
  /** 排序 */
  sort: number
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 查询案例场景列表
 * @description 查询所有案例场景数据
 * @returns 案例场景列表
 */
export const fetchAllCaseSceneList = (): Promise<CaseScene[]> => {
  return request.get({ url: '/engineclient/client/case-scene/queryAllCaseSceneList' })
}
