import request from '@/config/axios'

/** 学生 ERP VO */
export interface Demo03StudentVO {
  id: number
  name: string
  sex: number
  birthday: Date
  description: string
}

/**
 * 查询学生分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 学生分页数据
 */
export const getDemo03StudentPage = async (params) => {
  return await request.get({ url: `/infra/demo03-student/page`, params })
}

/**
 * 查询学生详情
 * @param {number} id 学生编号
 * @returns {Promise<any>} 学生详情
 */
export const getDemo03Student = async (id: number) => {
  return await request.get({ url: `/infra/demo03-student/get?id=` + id })
}

/**
 * 新增学生
 * @param {Demo03StudentVO} data 学生数据
 * @returns {Promise<any>} 新增结果
 */
export const createDemo03Student = async (data: Demo03StudentVO) => {
  return await request.post({ url: `/infra/demo03-student/create`, data })
}

/**
 * 修改学生
 * @param {Demo03StudentVO} data 学生数据
 * @returns {Promise<any>} 修改结果
 */
export const updateDemo03Student = async (data: Demo03StudentVO) => {
  return await request.put({ url: `/infra/demo03-student/update`, data })
}

/**
 * 删除学生
 * @param {number} id 学生编号
 * @returns {Promise<any>} 删除结果
 */
export const deleteDemo03Student = async (id: number) => {
  return await request.delete({ url: `/infra/demo03-student/delete?id=` + id })
}

/**
 * 导出学生 Excel
 * @param {any} params 导出参数
 * @returns {Promise<any>} Excel文件流
 */
export const exportDemo03Student = async (params) => {
  return await request.download({ url: `/infra/demo03-student/export-excel`, params })
}

// ==================== 子表（学生课程） ====================

/**
 * 获得学生课程分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 学生课程分页数据
 */
export const getDemo03CoursePage = async (params) => {
  return await request.get({ url: `/infra/demo03-student/demo03-course/page`, params })
}

/**
 * 新增学生课程
 * @param {any} data 课程数据
 * @returns {Promise<any>} 新增结果
 */
export const createDemo03Course = async (data) => {
  return await request.post({ url: `/infra/demo03-student/demo03-course/create`, data })
}

/**
 * 修改学生课程
 * @param {any} data 课程数据
 * @returns {Promise<any>} 修改结果
 */
export const updateDemo03Course = async (data) => {
  return await request.put({ url: `/infra/demo03-student/demo03-course/update`, data })
}

/**
 * 删除学生课程
 * @param {number} id 课程编号
 * @returns {Promise<any>} 删除结果
 */
export const deleteDemo03Course = async (id: number) => {
  return await request.delete({ url: `/infra/demo03-student/demo03-course/delete?id=` + id })
}

/**
 * 获得学生课程详情
 * @param {number} id 课程编号
 * @returns {Promise<any>} 学生课程详情
 */
export const getDemo03Course = async (id: number) => {
  return await request.get({ url: `/infra/demo03-student/demo03-course/get?id=` + id })
}

// ==================== 子表（学生班级） ====================

/**
 * 获得学生班级分页
 * @param {any} params 分页查询参数
 * @returns {Promise<any>} 学生班级分页数据
 */
export const getDemo03GradePage = async (params) => {
  return await request.get({ url: `/infra/demo03-student/demo03-grade/page`, params })
}

/**
 * 新增学生班级
 * @param {any} data 班级数据
 * @returns {Promise<any>} 新增结果
 */
export const createDemo03Grade = async (data) => {
  return await request.post({ url: `/infra/demo03-student/demo03-grade/create`, data })
}

/**
 * 修改学生班级
 * @param {any} data 班级数据
 * @returns {Promise<any>} 修改结果
 */
export const updateDemo03Grade = async (data) => {
  return await request.put({ url: `/infra/demo03-student/demo03-grade/update`, data })
}

/**
 * 删除学生班级
 * @param {number} id 班级编号
 * @returns {Promise<any>} 删除结果
 */
export const deleteDemo03Grade = async (id: number) => {
  return await request.delete({ url: `/infra/demo03-student/demo03-grade/delete?id=` + id })
}

/**
 * 获得学生班级详情
 * @param {number} id 班级编号
 * @returns {Promise<any>} 学生班级详情
 */
export const getDemo03Grade = async (id: number) => {
  return await request.get({ url: `/infra/demo03-student/demo03-grade/get?id=` + id })
}
