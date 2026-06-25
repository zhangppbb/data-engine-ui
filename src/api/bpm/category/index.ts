import request from '@/config/axios'

/** BPM 流程分类 VO */
export interface CategoryVO {
  /** 分类编号 */
  id: number
  /** 分类名 */
  name: string
  /** 分类标志 */
  code: string
  /** 分类状态 */
  status: number
  /** 分类排序 */
  sort: number
}

/** BPM 流程分类 API */
export const CategoryApi = {
  /**
   * 查询流程分类分页
   * @param {any} params 分页查询参数
   * @returns {Promise<any>} 流程分类分页数据
   */
  getCategoryPage: async (params: any) => {
    return await request.get({ url: `/bpm/category/page`, params })
  },

  /**
   * 查询流程分类精简列表
   * @returns {Promise<any>} 流程分类精简列表
   */
  getCategorySimpleList: async () => {
    return await request.get({ url: `/bpm/category/simple-list` })
  },

  /**
   * 查询流程分类详情
   * @param {number} id 分类编号
   * @returns {Promise<any>} 流程分类详情
   */
  getCategory: async (id: number) => {
    return await request.get({ url: `/bpm/category/get?id=` + id })
  },

  /**
   * 新增流程分类
   * @param {CategoryVO} data 流程分类数据
   * @returns {Promise<any>} 新增结果
   */
  createCategory: async (data: CategoryVO) => {
    return await request.post({ url: `/bpm/category/create`, data })
  },

  /**
   * 修改流程分类
   * @param {CategoryVO} data 流程分类数据
   * @returns {Promise<any>} 修改结果
   */
  updateCategory: async (data: CategoryVO) => {
    return await request.put({ url: `/bpm/category/update`, data })
  },

  /**
   * 批量修改流程分类的排序
   * @param {number[]} ids 分类ID数组
   * @returns {Promise<any>} 批量修改结果
   */
  updateCategorySortBatch: async (ids: number[]) => {
    return await request.put({
      url: `/bpm/category/update-sort-batch`,
      params: {
        ids: ids.join(',')
      }
    })
  },

  /**
   * 删除流程分类
   * @param {number} id 分类编号
   * @returns {Promise<any>} 删除结果
   */
  deleteCategory: async (id: number) => {
    return await request.delete({ url: `/bpm/category/delete?id=` + id })
  }
}
