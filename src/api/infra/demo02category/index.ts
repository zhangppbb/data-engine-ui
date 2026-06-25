import request from '@/config/axios'

/** 示例分类 VO */
export interface Demo02CategoryVO {
  /** 编号 */
  id: number
  /** 名字 */
  name: string
  /** 父级编号 */
  parentId: number
}

/** 示例分类 API */
export const Demo02CategoryApi = {
  /**
   * 查询示例分类列表
   * @param {any} params 查询参数
   * @returns {Promise<any>} 示例分类列表
   */
  getDemo02CategoryList: async (params) => {
    return await request.get({ url: `/infra/demo02-category/list`, params })
  },

  /**
   * 查询示例分类详情
   * @param {number} id 分类编号
   * @returns {Promise<any>} 示例分类详情
   */
  getDemo02Category: async (id: number) => {
    return await request.get({ url: `/infra/demo02-category/get?id=` + id })
  },

  /**
   * 新增示例分类
   * @param {Demo02CategoryVO} data 分类数据
   * @returns {Promise<any>} 新增结果
   */
  createDemo02Category: async (data: Demo02CategoryVO) => {
    return await request.post({ url: `/infra/demo02-category/create`, data })
  },

  /**
   * 修改示例分类
   * @param {Demo02CategoryVO} data 分类数据
   * @returns {Promise<any>} 修改结果
   */
  updateDemo02Category: async (data: Demo02CategoryVO) => {
    return await request.put({ url: `/infra/demo02-category/update`, data })
  },

  /**
   * 删除示例分类
   * @param {number} id 分类编号
   * @returns {Promise<any>} 删除结果
   */
  deleteDemo02Category: async (id: number) => {
    return await request.delete({ url: `/infra/demo02-category/delete?id=` + id })
  },

  /**
   * 导出示例分类 Excel
   * @param {any} params 导出参数
   * @returns {Promise<any>} Excel文件流
   */
  exportDemo02Category: async (params) => {
    return await request.download({ url: `/infra/demo02-category/export-excel`, params })
  }
}
