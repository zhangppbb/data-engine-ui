import request from '@/config/axios'

/** 文件预签名地址 Response VO */
export interface FilePresignedUrlRespVO {
  /** 文件配置编号 */
  configId: number
  /** 文件上传 URL */
  uploadUrl: string
  /** 文件 URL */
  url: string
}

/**
 * 查询文件分页列表
 * @param {PageParam} params 分页查询参数
 * @returns {Promise<any>} 文件分页数据
 */
export const getFilePage = (params: PageParam) => {
  return request.get({ url: '/admin-api/infra/file/page', params })
}

/**
 * 删除文件
 * @param {number} id 文件ID
 * @returns {Promise<any>} 删除结果
 */
export const deleteFile = (id: number) => {
  return request.delete({ url: '/admin-api/infra/file/delete?id=' + id })
}

/**
 * 获取文件预签名地址
 * @param {string} path 文件路径
 * @returns {Promise<FilePresignedUrlRespVO>} 预签名地址信息
 */
export const getFilePresignedUrl = (path: string) => {
  return request.get<FilePresignedUrlRespVO>({
    url: '/admin-api/infra/file/presigned-url',
    params: { path }
  })
}

/**
 * 创建文件记录
 * @param {any} data 文件数据
 * @returns {Promise<any>} 创建结果
 */
export const createFile = (data: any) => {
  return request.post({ url: '/admin-api/infra/file/create', data })
}

/**
 * 上传文件
 * @param {any} data 文件数据（FormData）
 * @returns {Promise<any>} 上传结果
 */
export const updateFile = (data: any) => {
  return request.upload({ url: '/admin-api/infra/file/upload', data })
}
