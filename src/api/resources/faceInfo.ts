import request from '@/config/axios'


export interface InterfaceResourceResponse {
  /** 接口资源目录列表 */
  data: InterfaceResource[]
  /** 总记录数 */
  total: number
}

/**
 * 接口资源目录接口
 */
export interface InterfaceResource {
  /** 主键ID */
  id: string
  /** 父级ID */
  parentId: string
  /** 权重 */
  weight: string
  /** 名称 */
  name: string
}


/**
 * 参数详情接口
 */
export interface FaceDetailPo {
  /** 示例值 */
  exampleVal: string
  /** 必填 */
  isRequired: boolean
  /** 参数名 */
  key: string
  /** 参数子集 */
  paramSub: FaceDetailPo[]
  /** 备注信息 */
  remark: string
  /** 数据类型 */
  type: string
  /** 参数描述 */
  value: string
}

/**
 * 供应商接口单价接口
 */
export interface CallingPartyPrice {
  /** 数据提供方 */
  callingParty: string
  /** 价格 */
  price: string
}

/**
 * 接口详情接口
 */
export interface WebapiFaceInfoDetail {
  /** 返回参数说明 */
  backArgument: FaceDetailPo[]
  /** 返回参数示例 */
  backExample: string
  /** 请求体 */
  bodyArgument: FaceDetailPo[]
  /** 请求体示例 */
  bodyExample: string
  /** 供应商接口单价 */
  callingPartyPrice: CallingPartyPrice[]
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 接口状态码说明 */
  faceCode: FaceDetailPo[]
  /** 接口主键 */
  faceId: string
  /** 文件ID */
  fileId: string
  /** 请求头描述 */
  headerDescription: string
  /** 主键ID */
  id: string
  /** 参数 */
  params: object
  /** 备注 */
  remark: string
  /** 备注信息 */
  remarks: string
  /** 请求头 */
  reqHeader: FaceDetailPo[]
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 文件信息接口
 */
export interface IconFileInfo {
  /** 文件ID */
  fileId: string
  /** 文件名称 */
  fileName: string
  /** 文件标签 */
  fileTag: string
  /** 原始文件名称 */
  originalFileName: string
  /** 后缀名 */
  suffixName: string
  /** 文件URL */
  url: string
}

/**
 * 标签信息接口
 */
export interface TagInfo {
  /** 分类ID */
  categoryId: string
  /** 颜色 */
  color: string
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 删除标记 */
  deleted: number
  /** 图标 */
  icon: string
  /** 主键ID */
  id: string
  /** 参数 */
  params: object
  /** 备注 */
  remark: string
  /** 排序号 */
  sort: number
  /** 状态 */
  status: number
  /** 标签编码 */
  tagCode: string
  /** 标签名称 */
  tagName: string
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
}

/**
 * 接口信息接口
 */
export interface WebapiFaceInfo extends PageParam {
  /** 供应商价格 */
  amount: string
  /** 供应商价格单位 */
  amountUnit: string
  /** 数据提供方标识 */
  callingParty: string
  /** 数据提供方类型 */
  callingType: string
  /** 创建人 */
  createBy: string
  /** 创建时间 */
  createTime: string
  /** 删除标记 */
  delFlag: string
  /** 接口说明 */
  description: string
  /** 过滤不需要的接口 */
  excludeFaceIds: string[]
  /** 我方接口编号 */
  faceCode: string
  /** 接口主键 */
  faceId: string
  /** 接口详情 */
  faceInfoDetail: WebapiFaceInfoDetail
  /** 接口名称 */
  faceName: string
  /** 接口URL */
  faceUrl: string
  /** 图标文件ID */
  iconFileId: string
  /** 图标文件信息 */
  iconFileInfo: IconFileInfo
  /** 包ID */
  packageId: string
  /** 参数 */
  params: object
  /** 部分ID */
  partId: string
  /** 部分ID关联 */
  partIdShip: string[]
  /** 权限标识 */
  permIdent: string
  /** QPS限制 */
  qpsRestrict: string
  /** 备注 */
  remark: string
  /** 备注信息 */
  remarks: string
  /** 渲染URL */
  renderUrl: string
  /** 请求方式 */
  reqWay: string
  /** 来源ID */
  sourceId: string
  /** 状态 */
  status: string
  /** 标签信息 */
  tagInfos: TagInfo[]
  /** 类型 */
  type: string
  /** 更新人 */
  updateBy: string
  /** 更新时间 */
  updateTime: string
  /** 使用量 */
  usAmount: string
  /** 版本 */
  version: string
}

/**
 * 分页响应数据接口
 */
export interface TableDataInfo<T> {
  /** 状态码 */
  code: number
  /** 消息 */
  msg: string
  /** 数据列表 */
  rows: T[]
  /** 总记录数 */
  total: number
}

/**
 * 获取接口列表信息
 * @description 获取接口列表分页数据，支持关键字搜索、标签分类ID筛选
 * @param params 查询参数
 * @returns 分页接口列表数据
 */
export const fetchFaceInfoListPage = (params: WebapiFaceInfo): Promise<TableDataInfo<WebapiFaceInfo>> => {
  return request.post({ url: '/engineclient/client/face-info/listPage', data: params })
}

/**
 * 获取接口资源目录
 * @description 获取接口资源目录列表
 * @returns 接口资源目录列表
 */
export const fetchInterfaceResources = (): Promise<InterfaceResourceResponse> => {
  return request.get({ url: '/engineclient/client/face-info/interface/resources' })
}

/**
 * 获取接口详情
 * @description 根据接口ID获取接口详情
 * @param params 查询参数
 * @returns 接口详情
 */
export const fetchInterfaceDetail = (data: Partial<WebapiFaceInfo>): Promise<WebapiFaceInfo> => {
  return request.post({ 
    url: '/engineclient/client/face-info/face/detail',
    data
  })
}

/**
 * 下载接口文档
 * @description 根据接口ID下载相关文档文件
 * @param faceId 接口ID
 * @returns 文件流
 */
export const downloadFaceInfoFile = (faceId: string): Promise<Blob> => {
  return request.download({ 
    url: '/engineclient/client/face-info/downloadFile',
    params: { faceId }
  })
}

/**
 * 调用接口调试请求参数
 */
export interface FacePreviewDto {
  /** Body请求参数 */
  bodyData: Record<string, any>
  /** 接口主键 */
  faceId: string
  /** query请求参数 */
  queryData: Record<string, any>
}

/**
 * 调试接口调用
 * @description 根据接口预览参数调用调试接口
 * @param data 预览参数
 * @returns 接口调用结果
 */
export const callFaceInfo = (data: FacePreviewDto): Promise<any> => {
  return request.postOriginal({ url: '/engineclient/face-info/call', data })
}
