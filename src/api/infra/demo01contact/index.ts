import request from '@/config/axios'

/** 示例联系人 VO */
export interface Demo01ContactVO {
  /** 编号 */
  id: number
  /** 名字 */
  name: string
  /** 性别 */
  sex: number
  /** 出生年 */
  birthday: Date
  /** 简介 */
  description: string
  /** 头像 */
  avatar: string
  /** 乐观锁 */
  version: number
  /** 创建部门 */
  createDept: number
}

/** 示例联系人 API */
export const Demo01ContactApi = {
  /**
   * 查询示例联系人分页
   * @param {any} params 分页查询参数
   * @returns {Promise<any>} 示例联系人分页数据
   */
  getDemo01ContactPage: async (params: any) => {
    return await request.get({ url: `/infra/demo01-contact/page`, params })
  },

  /**
   * 查询示例联系人详情
   * @param {number} id 联系人编号
   * @returns {Promise<any>} 示例联系人详情
   */
  getDemo01Contact: async (id: number) => {
    return await request.get({ url: `/infra/demo01-contact/get?id=` + id })
  },

  /**
   * 新增示例联系人
   * @param {Demo01ContactVO} data 联系人数据
   * @returns {Promise<any>} 新增结果
   */
  createDemo01Contact: async (data: Demo01ContactVO) => {
    return await request.post({ url: `/infra/demo01-contact/create`, data })
  },

  /**
   * 修改示例联系人
   * @param {Demo01ContactVO} data 联系人数据
   * @returns {Promise<any>} 修改结果
   */
  updateDemo01Contact: async (data: Demo01ContactVO) => {
    return await request.put({ url: `/infra/demo01-contact/update`, data })
  },

  /**
   * 删除示例联系人
   * @param {number[]} ids 联系人编号数组
   * @returns {Promise<any>} 删除结果
   */
  deleteDemo01Contact: async (ids: number[]) => {
    return await request.delete({ url: `/infra/demo01-contact/delete?ids=` + ids })
  },

  /**
   * 导出示例联系人 Excel
   * @param {any} params 导出参数
   * @returns {Promise<any>} Excel文件流
   */
  exportDemo01Contact: async (params) => {
    return await request.download({ url: `/infra/demo01-contact/export-excel`, params })
  }
}
