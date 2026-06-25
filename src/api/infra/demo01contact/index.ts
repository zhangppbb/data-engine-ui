import request from '@/config/axios'

// 示例联系人 VO
export interface Demo01ContactVO {
  id: number // 编号
  name: string // 名字
  sex: number // 性别
  birthday: Date // 出生年
  description: string // 简介
  avatar: string // 头像
  version: number // 乐观锁
  createDept: number // 创建部门
}

// 示例联系人 API
export const Demo01ContactApi = {
  // 查询示例联系人分页
  getDemo01ContactPage: async (params: any) => {
    return await request.get({ url: `/infra/demo01-contact/page`, params })
  },

  // 查询示例联系人详情
  getDemo01Contact: async (id: number) => {
    return await request.get({ url: `/infra/demo01-contact/get?id=` + id })
  },

  // 新增示例联系人
  createDemo01Contact: async (data: Demo01ContactVO) => {
    return await request.post({ url: `/infra/demo01-contact/create`, data })
  },

  // 修改示例联系人
  updateDemo01Contact: async (data: Demo01ContactVO) => {
    return await request.put({ url: `/infra/demo01-contact/update`, data })
  },

  // 删除示例联系人
  deleteDemo01Contact: async (ids: number[]) => {
    return await request.delete({ url: `/infra/demo01-contact/delete?ids=` + ids })
  },

  // 导出示例联系人 Excel
  exportDemo01Contact: async (params) => {
    return await request.download({ url: `/infra/demo01-contact/export-excel`, params })
  }
}
