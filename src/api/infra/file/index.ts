import request from '@/config/axios'

// 文件预签名地址 Response VO
export interface FilePresignedUrlRespVO {
  // 文件配置编号
  configId: number
  // 文件上传 URL
  uploadUrl: string
  // 文件 URL
  url: string
}

// 查询文件列表
export const getFilePage = (params: PageParam) => {
  return request.get({ url: '/admin-api/infra/file/page', params })
}

// 删除文件
export const deleteFile = (id: number) => {
  return request.delete({ url: '/admin-api/infra/file/delete?id=' + id })
}

// 获取文件预签名地址
export const getFilePresignedUrl = (path: string) => {
  return request.get<FilePresignedUrlRespVO>({
    url: '/admin-api/infra/file/presigned-url',
    params: { path }
  })
}

// 创建文件
export const createFile = (data: any) => {
  return request.post({ url: '/admin-api/infra/file/create', data })
}

// 上传文件
export const updateFile = (data: any) => {
  return request.upload({ url: '/admin-api/infra/file/upload', data })
}
