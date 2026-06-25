import request from '@/config/axios'

/** 菜单 VO */
export interface MenuVO {
  id: number
  name: string
  permission: string
  type: number
  sort: number
  parentId: number
  path: string
  icon: string
  component: string
  componentName?: string
  status: number
  visible: boolean
  keepAlive: boolean
  alwaysShow?: boolean
  createTime: Date
}

/**
 * 查询菜单（精简）列表
 * @returns {Promise<any>} 菜单精简列表
 */
export const getSimpleMenusList = () => {
  return request.get({ url: '/admin-api/system/menu/simple-list' })
}

/**
 * 查询菜单列表
 * @param {any} params 查询参数
 * @returns {Promise<any>} 菜单列表
 */
export const getMenuList = (params) => {
  return request.get({ url: '/admin-api/system/menu/list', params })
}

/**
 * 获取菜单详情
 * @param {number} id 菜单ID
 * @returns {Promise<any>} 菜单详情
 */
export const getMenu = (id: number) => {
  return request.get({ url: '/admin-api/system/menu/get?id=' + id })
}

/**
 * 新增菜单
 * @param {MenuVO} data 菜单数据
 * @returns {Promise<any>} 新增结果
 */
export const createMenu = (data: MenuVO) => {
  return request.post({ url: '/admin-api/system/menu/create', data })
}

/**
 * 修改菜单
 * @param {MenuVO} data 菜单数据
 * @returns {Promise<any>} 修改结果
 */
export const updateMenu = (data: MenuVO) => {
  return request.put({ url: '/admin-api/system/menu/update', data })
}

/**
 * 删除菜单
 * @param {number} id 菜单ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteMenu = (id: number) => {
  return request.delete({ url: '/admin-api/system/menu/delete?id=' + id })
}
