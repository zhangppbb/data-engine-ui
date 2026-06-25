import request from '@/config/axios'

/**
 * 获得公众号菜单列表
 * @param {any} accountId 公众号账号ID
 * @returns {Promise<any>} 公众号菜单列表
 */
export const getMenuList = (accountId) => {
  return request.get({
    url: '/admin-api/mp/menu/list?accountId=' + accountId
  })
}

/**
 * 保存公众号菜单
 * @param {any} accountId 公众号账号ID
 * @param {any} menus 菜单配置数据
 * @returns {Promise<any>} 保存结果
 */
export const saveMenu = (accountId, menus) => {
  return request.post({
    url: '/admin-api/mp/menu/save',
    data: {
      accountId,
      menus
    }
  })
}

/**
 * 删除公众号菜单
 * @param {any} accountId 公众号账号ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteMenu = (accountId) => {
  return request.delete({
    url: '/admin-api/mp/menu/delete?accountId=' + accountId
  })
}
