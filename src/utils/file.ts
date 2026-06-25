import { IMAGE_EXTENSIONS, FILE_ICON_MAP } from '@/utils/constants'

// 获取文件扩展名
export const getFileExtension = (fileName: string): string => {
  if (!fileName || fileName.lastIndexOf('.') === -1) {
    return 'unknown'
  }
  return fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase()
}

// 判断是否为图片文件
export const isImageFile = (fileName: string): boolean => {
  const ext = getFileExtension(fileName)
  return IMAGE_EXTENSIONS.includes(ext)
}

// 获取文件显示图标
export const getFileDisplayIcon = (file: { url: string; name: string }): string => {
  if (isImageFile(file.name)) {
    return file.url || ''
  } else {
    const ext = getFileExtension(file.name)
    return FILE_ICON_MAP[ext as keyof typeof FILE_ICON_MAP] || FILE_ICON_MAP.unknown
  }
}
