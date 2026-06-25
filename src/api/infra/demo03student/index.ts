import request from '@/config/axios'

/** 学生 VO */
export interface Demo03StudentVO {
  /** 编号 */
  id: number
  /** 名字 */
  name: string
  /** 性别 */
  sex: number
  /** 出生日期 */
  birthday: Date
  /** 简介 */
  description: string
  /** 创建部门 */
  createDept: number
  /** 乐观锁 */
  version: number
  /** 学生班级列表 */
  demo03GradeList: []
  /** 学生课程列表 */
  demo03CourseList: []
}

/** 学生班级 VO */
export interface Demo03GradeVO {
  /** 编号 */
  id: number
  /** 学生编号 */
  studentId: number
  /** 名字 */
  name: string
  /** 班主任 */
  teacher: string
}

/** 学生课程 VO */
export interface Demo03CourseVO {
  /** 编号 */
  id: number
  /** 学生编号 */
  studentId: number
  /** 名字 */
  name: string
  /** 分数 */
  score: number
}

/** 学生 API */
export const Demo03StudentApi = {
  /**
   * 查询学生分页
   * @param {any} params 分页查询参数
   * @returns {Promise<any>} 学生分页数据
   */
  getDemo03StudentPage: async (params: any) => {
    return await request.get({ url: `/infra/demo03-student/page`, params })
  },

  /**
   * 查询学生详情
   * @param {number} id 学生编号
   * @returns {Promise<any>} 学生详情
   */
  getDemo03Student: async (id: number) => {
    return await request.get({ url: `/infra/demo03-student/get?id=` + id })
  },

  /**
   * 新增学生
   * @param {Demo03StudentVO} data 学生数据
   * @returns {Promise<any>} 新增结果
   */
  createDemo03Student: async (data: Demo03StudentVO) => {
    return await request.post({ url: `/infra/demo03-student/create`, data })
  },

  /**
   * 修改学生
   * @param {Demo03StudentVO} data 学生数据
   * @returns {Promise<any>} 修改结果
   */
  updateDemo03Student: async (data: Demo03StudentVO) => {
    return await request.put({ url: `/infra/demo03-student/update`, data })
  },

  /**
   * 删除学生
   * @param {number[]} ids 学生编号数组
   * @returns {Promise<any>} 删除结果
   */
  deleteDemo03Student: async (ids: number[]) => {
    return await request.delete({ url: `/infra/demo03-student/delete?ids=` + ids })
  },

  /**
   * 导出学生 Excel
   * @param {any} params 导出参数
   * @returns {Promise<any>} Excel文件流
   */
  exportDemo03Student: async (params) => {
    return await request.download({ url: `/infra/demo03-student/export-excel`, params })
  },

  // ==================== 子表（学生班级） ====================

  /**
   * 获得学生班级列表
   * @param {any} studentId 学生编号
   * @returns {Promise<any>} 学生班级列表
   */
  getDemo03GradeListByStudentId: async (studentId) => {
    return await request.get({
      url: `/infra/demo03-student/demo03-grade/list-by-student-id?studentId=` + studentId
    })
  },

  // ==================== 子表（学生课程） ====================

  /**
   * 获得学生课程列表
   * @param {any} studentId 学生编号
   * @returns {Promise<any>} 学生课程列表
   */
  getDemo03CourseListByStudentId: async (studentId) => {
    return await request.get({
      url: `/infra/demo03-student/demo03-course/list-by-student-id?studentId=` + studentId
    })
  }
}
