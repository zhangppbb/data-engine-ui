import request from '@/config/axios'

/** 代码生成表 VO */
export type CodegenTableVO = {
  id: number
  tableId: number
  isParentMenuIdValid: boolean
  dataSourceConfigCode: string
  scene: number
  tableName: string
  tableComment: string
  remark: string
  moduleName: string
  businessName: string
  className: string
  classComment: string
  author: string
  createTime: Date
  updateTime: Date
  templateType: number
  parentMenuId: number
}

/** 代码生成列 VO */
export type CodegenColumnVO = {
  id: number
  tableId: number
  columnName: string
  dataType: string
  columnComment: string
  nullable: number
  primaryKey: number
  ordinalPosition: number
  javaType: string
  javaField: string
  dictType: string
  example: string
  createOperation: number
  updateOperation: number
  listOperation: number
  detailOperationResult: number
  listOperationCondition: string
  listOperationResult: number
  htmlType: string
  recordOperationLogs: string
  relatedTableId: number
  relatedColumnId: number
  showColumnId: number
}

/** 代码生成模板 VO */
export type CodegenTemplateVO = {
  id: number | undefined
  tableId: number | undefined
  type: string | undefined
  code: string | undefined
  name: string | undefined
  attachment: [] | undefined
}

/**
 * 关联列表刷新 VO
 */
export type CodegenListRefreshVO = {
  id: number | undefined
  tableId: number | undefined
  otherModuleCode: string | undefined
}

/** 代码生成字典 VO */
export type CodegenDictVO = {
  id: number
  tableName: string
  tableComment: string
}

/** 数据库表 VO */
export type DatabaseTableVO = {
  name: string
  comment: string
}

/** 代码预览 VO */
export type CodegenPreviewVO = {
  filePath: string
  code: string
}

/** 代码生成更新请求 VO */
export type CodegenUpdateReqVO = {
  table: CodegenTableVO | any
  columns: CodegenColumnVO[]
  templates: CodegenTemplateVO[]
  listRefreshes: CodegenListRefreshVO[]
}

/**
 * 查询代码生成表列表（按数据源）
 * @param {string} dataSourceConfigCode 数据源配置编码
 * @returns {Promise<any>} 代码生成表列表
 */
export const getCodegenTableList = (dataSourceConfigCode: string) => {
  return request.get({
    url: '/admin-api/infra/codegen/table/list?dataSourceConfigCode=' + dataSourceConfigCode
  })
}

/**
 * 查询代码生成表分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 代码生成表分页数据
 */
export const getCodegenTablePage = (params: PageParam) => {
  return request.get({ url: '/admin-api/infra/codegen/table/page', params })
}

/**
 * 查询代码生成表详情
 * @param {number} id 表ID
 * @returns {Promise<any>} 代码生成表详情
 */
export const getCodegenTable = (id: number) => {
  return request.get({ url: '/admin-api/infra/codegen/detail?tableId=' + id })
}

/**
 * 修改代码生成表配置
 * @param {CodegenUpdateReqVO} data 更新数据
 * @returns {Promise<any>} 修改结果
 */
export const updateCodegenTable = (data: CodegenUpdateReqVO) => {
  return request.put({ url: '/admin-api/infra/codegen/update', data })
}

/**
 * 基于数据库表结构同步代码生成配置
 * @param {number} id 表ID
 * @returns {Promise<any>} 同步结果
 */
export const syncCodegenFromDB = (id: number) => {
  return request.put({ url: '/admin-api/infra/codegen/sync-from-db?tableId=' + id })
}

/**
 * 预览生成代码
 * @param {number} id 表ID
 * @returns {Promise<any>} 代码预览数据
 */
export const previewCodegen = (id: number) => {
  return request.get({ url: '/admin-api/infra/codegen/preview?tableId=' + id })
}

/**
 * 下载生成代码
 * @param {number} id 表ID
 * @returns {Promise<any>} 代码文件流
 */
export const downloadCodegen = (id: number) => {
  return request.download({ url: '/admin-api/infra/codegen/download?tableId=' + id })
}

/**
 * 获得数据库表列表
 * @param {any} params 查询参数
 * @returns {Promise<any>} 数据库表列表
 */
export const getSchemaTableList = (params) => {
  return request.get({ url: '/admin-api/infra/codegen/db/table/list', params })
}

/**
 * 基于数据库表结构创建代码生成配置
 * @param {any} data 创建数据
 * @returns {Promise<any>} 创建结果
 */
export const createCodegenList = (data) => {
  return request.post({ url: '/admin-api/infra/codegen/create-list', data })
}

/**
 * 删除代码生成表配置
 * @param {number} id 表ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteCodegenTable = (id: number) => {
  return request.delete({ url: '/admin-api/infra/codegen/delete?tableId=' + id })
}

/**
 * 查询代码生成精简信息（Map格式）
 * @returns {Promise<any>} 代码生成精简数据
 */
export const getCodegenSimpleMap = () => {
  return request.get({ url: `/admin-api/infra/codegen/simple-data-map` })
}

/**
 * 查询代码生成精简信息（List格式）
 * @returns {Promise<any>} 代码生成精简数据列表
 */
export const getCodegenSimpleList = () => {
  return request.get({ url: `/admin-api/infra/codegen/simple-data-list` })
}

// ==================== 子表（代码生成表字段定义） ====================

/**
 * 获得代码生成表字段定义列表
 * @param {any} tableId 表ID
 * @returns {Promise<any>} 字段定义列表
 */
export const getCodegenColumnListByTableId = (tableId) => {
  return request.get({
    url: `/infra/codegen/codegen-column/list-by-table-id?tableId=` + tableId
  })
}

/**
 * 获得代码生成表字段精简信息列表
 * @param {any} tableId 表ID
 * @returns {Promise<any>} 字段精简列表
 */
export const getCodegenColumnSimpleListByTableId = (tableId) => {
  return request.get({
    url: `/infra/codegen/codegen-column/simple-list-by-table-id?tableId=` + tableId
  })
}

// ==================== 子表（模板附件） ====================

/**
 * 获得模板附件列表
 * @param {any} tableId 表ID
 * @returns {Promise<any>} 模板附件列表
 */
export const getModuleTemplateListByTableId = (tableId) => {
  return request.get({
    url: `/infra/codegen/module-template/list-by-table-id?tableId=` + tableId
  })
}

// ==================== 子表（关联列表刷新） ====================

/**
 * 获得关联列表刷新列表
 * @param {any} tableId 表ID
 * @returns {Promise<any>} 关联列表刷新数据
 */
export const getCodegenListRefreshListByTableId = (tableId) => {
  return request.get({
    url: `/infra/codegen/codegen-list-refresh/list-by-table-id?tableId=` + tableId
  })
}
