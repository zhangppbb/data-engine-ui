import request from '@/config/axios'


/**
 * 更新简易流程模型
 * @param {any} data 简易流程模型数据
 * @returns {Promise<any>} 更新结果
 */
export const updateBpmSimpleModel = async (data) => {
  return await request.post({
    url: '/admin-api/bpm/model/simple/update',
    data: data
  })
}

/**
 * 获取简易流程模型
 * @param {any} id 模型ID
 * @returns {Promise<any>} 简易流程模型详情
 */
export const getBpmSimpleModel = async (id) => {
  return await request.get({
    url: '/admin-api/bpm/model/simple/get?id=' + id
  })
}
