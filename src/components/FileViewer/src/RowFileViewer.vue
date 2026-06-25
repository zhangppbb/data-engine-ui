<template>
  <div class="attachment-container" :style="{ width, height }">
    <!-- 显示第一个有效文件 -->
    <div v-if="hasValidFile" class="file-item" :style="{ borderRadius }" @click="handleOpenDialog">
      <img
        :src="firstFileIcon"
        class="file-icon"
        :style="{ width: '100%', height: '100%', objectFit: 'cover', borderRadius }"
      />
      <div v-if="validFileCount > 1" class="file-count-tip"> 1/{{ validFileCount }} </div>
    </div>
  </div>
  <FileViewer ref="dialogRef" />
</template>

<script setup lang="ts">
import { isImageFile, getFileDisplayIcon } from '@/utils/file'
import { createImageViewer } from '@/components/ImageViewer'
import FileViewer from './FileViewer.vue'

defineOptions({ name: 'RowFileViewer' })

const props = defineProps({
  /** 文件数据数组（每项含url和name，允许空数组） */
  fileList: {
    type: Array as () => Array<{ url: string; name: string; [key: string]: any }>,
    default: () => [],
    required: true,
    validator: (value: Array<{ url: string; name: string }>) => {
      return value.every((item) => 'url' in item && 'name' in item)
    }
  },
  /** 展示宽度 */
  width: {
    type: String,
    default: '30px'
  },
  /** 展示高度 */
  height: {
    type: String,
    default: '30px'
  },
  /** 圆角 */
  borderRadius: {
    type: String,
    default: '10%'
  }
})

// 是否有有效文件（数组非空 + 至少一个item的url非空）
const hasValidFile = computed(() => {
  return (
    props.fileList && props.fileList.length > 0 && props.fileList.some((item) => item.url?.trim())
  )
})

// 有效文件总数（过滤空url/空格url）
const validFileCount = computed(() => {
  if (!props.fileList) return 0
  return props.fileList.filter((item) => item.url?.trim()).length
})

// 有效文件列表
const validFileList = computed(() => {
  if (!props.fileList) return []
  return props.fileList.filter((item) => item.url?.trim())
})

// 判断所有文件是否都是图片
const allImages = computed(() => {
  return validFileList.value.every((file) => isImageFile(file.name))
})

// 第一个有效文件的图标
const firstFileIcon = computed(() => {
  if (!hasValidFile.value) return ''
  const validItem = props.fileList.find((item) => item.url?.trim())
  return validItem ? getFileDisplayIcon(validItem) : ''
})

// 对话框显示状态
const dialogRef = ref()

// 打开对话框或直接预览图片
const handleOpenDialog = () => {
  if (validFileCount.value > 0) {
    if (allImages.value) {
      // 全部是图片，直接打开图片预览
      createImageViewer({
        zIndex: 9999999,
        urlList: validFileList.value.map((file) => file.url)
      })
    } else {
      // 包含非图片文件，打开对话框
      dialogRef.value.open(validFileList.value)
    }
  }
}
</script>

<style scoped>
.attachment-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.file-item {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f5f7fa;
}

.file-icon {
  display: block;
}

.file-count-tip {
  position: absolute;
  right: 2px;
  bottom: 2px;
  padding: 1px 4px;
  font-size: 8px;
  line-height: 1;
  color: #fff;
  pointer-events: none;
  background-color: rgb(0 0 0 / 50%);
  border-radius: 2px;
}
</style>
