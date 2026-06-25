<template>
  <!-- 文件列表 -->
  <Dialog v-model="dialogVisible" title="附件列表" :width="600" :appendToBody="true">
    <div class="file-list">
      <div
        v-for="(file, index) in validFileList"
        :key="index"
        class="file-list-item"
        :style="{ borderRadius: '10%' }"
      >
        <img :src="getFileDisplayIcon(file)" class="list-file-icon" />
        <div class="file-info">
          <div class="file-name">{{ file.name || '未知文件名' }}</div>
          <div class="file-actions">
            <span class="action-btn" @click.stop="handlePreview(file)">
              <Icon icon="ep:zoom-in" /> 查看
            </span>
            <span class="action-btn" @click.stop="handleDownload(file)">
              <Icon icon="ep:download" /> 下载
            </span>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>
<script setup lang="ts">
import { isImageFile, getFileDisplayIcon } from '@/utils/file'
import { createImageViewer } from '@/components/ImageViewer'

defineOptions({ name: 'Dialogs' })

const message = useMessage()

const dialogVisible = ref(false) // 弹窗的是否展示

const validFileList = ref([])

// 预览文件
const handlePreview = (file: { url: string; name: string }) => {
  if (isImageFile(file.name)) {
    createImageViewer({
      zIndex: 9999999,
      urlList: [file.url]
    })
  } else {
    message.info('非图片文件暂不支持预览！')
  }
}

// 下载文件
const handleDownload = (file: { url: string; name: string }) => {
  if (!file.url) {
    message.error('文件地址不存在，无法下载')
    return
  }

  try {
    // 创建下载链接
    const link = document.createElement('a')
    link.href = file.url
    link.download = file.name || 'download.file'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    message.error('下载失败，请重试')
    console.error('下载错误:', error)
  }
}

/** 打开弹窗 */
const open = async (fileList) => {
  dialogVisible.value = true
  validFileList.value = fileList
}

defineExpose({ open }) // 提供 open 方法，用于打开弹窗
</script>
<style scoped>
.file-list {
  max-height: 400px;
  padding: 10px 0;
  overflow-y: auto;
}

.file-list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 8px;
  background-color: #f5f7fa;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9ecef;
  }
}

.list-file-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 15px;
}

.file-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.file-name {
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-actions {
  display: flex;
  gap: 15px;
}

.action-btn {
  font-size: 14px;
  color: #409eff;
  cursor: pointer;

  &:hover {
    color: #66b1ff;
  }
}
</style>
