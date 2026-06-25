import request from '@/config/axios'

/**
 * 获得地区树
 * @returns {Promise<any>} 地区树结构数据
 */
export const getAreaTree = async () => {
  return await request.get({ url: '/admin-api/system/area/tree' })
}

/**
 * 获得IP对应的地区名
 * @param {string} ip IP地址
 * @returns {Promise<any>} 地区名称信息
 */
export const getAreaByIp = async (ip: string) => {
  return await request.get({ url: '/admin-api/system/area/get-by-ip?ip=' + ip })
}
