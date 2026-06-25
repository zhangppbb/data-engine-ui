import request from '@/config/axios'

// 学生 VO
export interface Demo03StudentVO {
  id: number // 编号
  name: string // 名字
  sex: number // 性别
  birthday: Date // 出生日期
  description: string // 简介
  createDept: number // 创建部门
  version: number // 乐观锁
  demo03GradeList: [] // 学生班级列表
  demo03CourseList: [] // 学生课程列表
}

// 学生班级 VO
export interface Demo03GradeVO {
  id: number // 编号
  studentId: number // 学生编号
  name: string // 名字
  teacher: string // 班主任
}

// 学生课程 VO
export interface Demo03CourseVO {
  id: number // 编号
  studentId: number // 学生编号
  name: string // 名字
  score: number // 分数
}

// 学生 API
export const Demo03StudentApi = {
  // 查询学生分页
  getDemo03StudentPage: async (params: any) => {
    return await request.get({ url: `/infra/demo03-student/page`, params })
  },

  // 查询学生详情
  getDemo03Student: async (id: number) => {
    return await request.get({ url: `/infra/demo03-student/get?id=` + id })
  },

  // 新增学生
  createDemo03Student: async (data: Demo03StudentVO) => {
    return await request.post({ url: `/infra/demo03-student/create`, data })
  },

  // 修改学生
  updateDemo03Student: async (data: Demo03StudentVO) => {
    return await request.put({ url: `/infra/demo03-student/update`, data })
  },

  // 删除学生
  deleteDemo03Student: async (ids: number[]) => {
    return await request.delete({ url: `/infra/demo03-student/delete?ids=` + ids })
  },

  // 导出学生 Excel
  exportDemo03Student: async (params) => {
    return await request.download({ url: `/infra/demo03-student/export-excel`, params })
  },

  // ==================== 子表（学生班级） ====================

  // 获得学生班级列表
  getDemo03GradeListByStudentId: async (studentId) => {
    return await request.get({
      url: `/infra/demo03-student/demo03-grade/list-by-student-id?studentId=` + studentId
    })
  },

  // ==================== 子表（学生课程） ====================

  // 获得学生课程列表
  getDemo03CourseListByStudentId: async (studentId) => {
    return await request.get({
      url: `/infra/demo03-student/demo03-course/list-by-student-id?studentId=` + studentId
    })
  }
}
