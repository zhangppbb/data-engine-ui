import request from '@/config/axios'

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

export type CodegenTemplateVO = {
  id: number | undefined // 主键
  tableId: number | undefined // 表单id
  type: string | undefined // 模版类型
  code: string | undefined // 模板编码
  name: string | undefined // 模板名称
  attachment: [] | undefined // 附件
}

/**
 * 关联列表刷新 VO
 */
export type CodegenListRefreshVO = {
  id: number | undefined // 主键
  tableId: number | undefined // 表单id
  otherModuleCode: string | undefined // 刷新路由模块编码
}

// 代码生成字典 VO
export type CodegenDictVO = {
  id: number // 主键
  tableName: string // 编码
  tableComment: string // 名称
}

export type DatabaseTableVO = {
  name: string
  comment: string
}

export type CodegenPreviewVO = {
  filePath: string
  code: string
}

export type CodegenUpdateReqVO = {
  table: CodegenTableVO | any
  columns: CodegenColumnVO[]
  templates: CodegenTemplateVO[]
  listRefreshes: CodegenListRefreshVO[]
}

// 查询列表代码生成表单
export const getCodegenTableList = (dataSourceConfigCode: string) => {
  return request.get({
    url: '/admin-api/infra/codegen/table/list?dataSourceConfigCode=' + dataSourceConfigCode
  })
}

// 查询列表代码生成表单
export const getCodegenTablePage = (params: PageParam) => {
  return request.get({ url: '/admin-api/infra/codegen/table/page', params })
}

// 查询详情代码生成表单
export const getCodegenTable = (id: number) => {
  return request.get({ url: '/admin-api/infra/codegen/detail?tableId=' + id })
}

// 修改代码生成表单
export const updateCodegenTable = (data: CodegenUpdateReqVO) => {
  return request.put({ url: '/admin-api/infra/codegen/update', data })
}

// 基于数据库的表结构，同步数据库的表和字段单
export const syncCodegenFromDB = (id: number) => {
  return request.put({ url: '/admin-api/infra/codegen/sync-from-db?tableId=' + id })
}

// 预览生成代码
export const previewCodegen = (id: number) => {
  return request.get({ url: '/admin-api/infra/codegen/preview?tableId=' + id })
}

// 下载生成代码
export const downloadCodegen = (id: number) => {
  return request.download({ url: '/admin-api/infra/codegen/download?tableId=' + id })
}

// 获得表单
export const getSchemaTableList = (params) => {
  return request.get({ url: '/admin-api/infra/codegen/db/table/list', params })
}

// 基于数据库的表结构，创建代码生成器的表单
export const createCodegenList = (data) => {
  return request.post({ url: '/admin-api/infra/codegen/create-list', data })
}

// 删除代码生成表单
export const deleteCodegenTable = (id: number) => {
  return request.delete({ url: '/admin-api/infra/codegen/delete?tableId=' + id })
}

// 查询代码生成精简信息(Map)
export const getCodegenSimpleMap = () => {
  return request.get({ url: `/admin-api/infra/codegen/simple-data-map` })
}

// 查询代码生成精简信息(List)
export const getCodegenSimpleList = () => {
  return request.get({ url: `/admin-api/infra/codegen/simple-data-list` })
}

// ==================== 子表（代码生成表字段定义） ====================

// 获得代码生成表字段定义列表
export const getCodegenColumnListByTableId = (tableId) => {
  return request.get({
    url: `/infra/codegen/codegen-column/list-by-table-id?tableId=` + tableId
  })
}

// 获得代码生成表字段精简信息列表
export const getCodegenColumnSimpleListByTableId = (tableId) => {
  return request.get({
    url: `/infra/codegen/codegen-column/simple-list-by-table-id?tableId=` + tableId
  })
}

// ==================== 子表（模板附件） ====================

// 获得模板附件列表
export const getModuleTemplateListByTableId = (tableId) => {
  return request.get({
    url: `/infra/codegen/module-template/list-by-table-id?tableId=` + tableId
  })
}

// ==================== 子表（关联列表刷新） ====================

// 获得关联列表刷新列表
export const getCodegenListRefreshListByTableId = (tableId) => {
  return request.get({
    url: `/infra/codegen/codegen-list-refresh/list-by-table-id?tableId=` + tableId
  })
}
