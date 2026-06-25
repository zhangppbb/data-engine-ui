<template>
  <div class="upload-box">
    <el-upload
      v-model:file-list="fileList"
      :action="uploadUrl"
      :auto-upload="autoUpload"
      :before-upload="beforeUpload"
      :class="['upload', drag ? 'no-border' : '']"
      :disabled="disabled"
      :drag="drag"
      :http-request="httpRequest"
      :limit="props.limit"
      :multiple="props.limit > 1"
      :on-error="excelUploadError"
      :on-exceed="handleExceed"
      :on-success="handleFileSuccess"
      list-type="picture-card"
      :data="module"
    >
      <div class="upload-empty">
        <slot name="empty">
          <Icon icon="ep:plus" />
        </slot>
      </div>
      <template v-if="isShowTip && !disabled" #tip>
        <div style="font-size: 10px">
          每个文件大小不超过 <b style="color: #f56c6c">{{ fileSize }}MB</b>； 最多上传<b
            style="color: #f56c6c"
            >{{ limit }}</b
          >
          个文件； 格式为<b style="color: #f56c6c">{{ fileType.join('/') }}</b> 的文件
        </div>
      </template>
      <template #file="{ file }">
        <div class="file-item-container">
          <img :src="getFileDisplayIcon(file)" class="upload-file" />
          <span class="file-name">{{ file.name }}</span>
        </div>
        <div class="upload-handle" @click.stop>
          <div class="handle-icon" @click="handlePreview(file)">
            <Icon icon="ep:zoom-in" />
            <span>查看</span>
          </div>
          <div v-if="!disabled" class="handle-icon" @click="handleDownload(file)">
            <Icon icon="ep:download" />
            <span>下载</span>
          </div>
          <div v-if="!disabled" class="handle-icon" @click="handleRemove(file)">
            <Icon icon="ep:delete" />
            <span>删除</span>
          </div>
        </div>
      </template>
    </el-upload>
  </div>
</template>
<script lang="ts" setup>
import { propTypes } from '@/utils/propTypes'
import type { UploadProps, UploadRawFile, UploadUserFile } from 'element-plus'
import { isImageFile, getFileDisplayIcon } from '@/utils/file'
import { createImageViewer } from '@/components/ImageViewer'
import { useUpload } from '@/components/UploadFile/src/useUpload'
import { UploadFile } from 'element-plus/es/components/upload/src/upload'

defineOptions({ name: 'UploadFile' })

const message = useMessage() // 消息弹窗
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: propTypes.oneOfType<UploadUserFile[]>([Array<UploadUserFile>]).isRequired,
  module: propTypes.string.isRequired,
  fileType: propTypes.array.def(['doc', 'xls', 'ppt', 'txt', 'pdf']), // 文件类型, 例如['png', 'jpg', 'jpeg']
  fileSize: propTypes.number.def(10), // 大小限制 ==> 非必传（默认为 10M）
  limit: propTypes.number.def(20), // 最大上传数 ==> 非必传（默认为 20）
  autoUpload: propTypes.bool.def(true), // 自动上传
  drag: propTypes.bool.def(true), // 是否支持拖拽上传 ==> 非必传（默认为 true）
  isShowTip: propTypes.bool.def(true), // 是否显示提示
  disabled: propTypes.bool.def(false), // 是否禁用上传组件 ==> 非必传（默认为 false）
  height: propTypes.string.def('150px'), // 组件高度 ==> 非必传（默认为 150px）
  width: propTypes.string.def('150px'), // 组件宽度 ==> 非必传（默认为 150px）
  borderradius: propTypes.string.def('8px') // 组件边框圆角 ==> 非必传（默认为 8px）
})

// ========== 上传相关 ==========
const uploadList = ref<UploadUserFile[]>([])
const fileList = ref<UploadUserFile[]>([])
const uploadNumber = ref<number>(0)

const { uploadUrl, httpRequest } = useUpload()

// 文件上传之前判断
const beforeUpload: UploadProps['beforeUpload'] = (file: UploadRawFile) => {
  if (!props.module || Object.keys(props.module).length === 0) {
    message.error('上传组件缺少模块参数，请检查代码！')
    return false
  }
  if (fileList.value.length >= props.limit) {
    message.error(`上传文件数量不能超过${props.limit}个!`)
    return false
  }
  let fileExtension = ''
  if (file.name.lastIndexOf('.') > -1) {
    fileExtension = file.name.slice(file.name.lastIndexOf('.') + 1)
  }
  const isImg = props.fileType.some((type: string) => {
    if (file.type.indexOf(type) > -1) return true
    return !!(fileExtension && fileExtension.indexOf(type) > -1)
  })
  const isLimit = file.size < props.fileSize * 1024 * 1024
  if (!isImg) {
    message.error(`文件格式不正确, 请上传${props.fileType.join('/')}格式!`)
    return false
  }
  if (!isLimit) {
    message.error(`上传文件大小不能超过${props.fileSize}MB!`)
    return false
  }
  message.success('正在上传文件，请稍候...')
  // 只有在验证通过后才增加计数器
  uploadNumber.value++
  return true
}

// 文件上传成功
const handleFileSuccess: UploadProps['onSuccess'] = (res: any): void => {
  message.success('上传成功')
  // 删除自身
  const index = fileList.value.findIndex((item) => item.response?.data.id === res.data.id)
  fileList.value.splice(index, 1)
  uploadList.value.push(res.data)
  if (uploadList.value.length == uploadNumber.value) {
    fileList.value.push(...uploadList.value)
    uploadList.value = []
    uploadNumber.value = 0
    emitUpdateModelValue()
  }
}

// 文件数超出提示
const handleExceed: UploadProps['onExceed'] = (): void => {
  message.error(`上传文件数量不能超过${props.limit}个!`)
}

// 上传错误提示
const excelUploadError: UploadProps['onError'] = (): void => {
  message.error('文件上传失败，请重试！')
  // 上传失败时减少计数器，避免后续上传被阻塞
  uploadNumber.value = Math.max(0, uploadNumber.value - 1)
}

// 删除上传文件
const handleRemove = (file: UploadFile) => {
  const index = fileList.value.map((f) => f.name).indexOf(file.name)
  if (index > -1) {
    fileList.value.splice(index, 1)
    emitUpdateModelValue()
  }
}

// 下载文件
const handleDownload = (file: UploadFile) => {
  message.info('下载功能待完善！')
}

// 预览文件
const handlePreview = (file: UploadFile) => {
  if (isImageFile(file.name)) {
    createImageViewer({
      zIndex: 9999999,
      urlList: [file.url ? file.url : '']
    })
  } else {
    message.info('预览功能待完善！')
  }
}

// 监听模型绑定值变动
watch(
  () => props.modelValue,
  (val: UploadUserFile[]) => {
    if (!val) {
      fileList.value = [] // fix：处理掉缓存，表单重置后上传组件的内容并没有重置
      return
    }

    fileList.value = [] // 保障数据为空
    fileList.value.push(...val)
  },
  { immediate: true, deep: true }
)

// 发送文件链接列表更新
const emitUpdateModelValue = () => {
  emit('update:modelValue', fileList.value)
}
</script>

<style lang="scss" scoped>
.is-error {
  .upload {
    :deep(.el-upload--picture-card),
    :deep(.el-upload-dragger) {
      border: 1px dashed var(--el-color-danger) !important;

      &:hover {
        border-color: var(--el-color-primary) !important;
      }
    }
  }
}

:deep(.disabled) {
  .el-upload--picture-card,
  .el-upload-dragger {
    cursor: not-allowed;
    background: var(--el-disabled-bg-color) !important;
    border: 1px dashed var(--el-border-color-darker);

    &:hover {
      border-color: var(--el-border-color-darker) !important;
    }
  }
}

.upload-box {
  .no-border {
    :deep(.el-upload--picture-card) {
      border: none !important;
    }
  }

  :deep(.upload) {
    .el-upload-dragger {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0;
      overflow: hidden;
      border: 1px dashed var(--el-border-color-darker);
      border-radius: v-bind(borderradius);

      &:hover {
        border: 1px dashed var(--el-color-primary);
      }
    }

    .el-upload-dragger.is-dragover {
      background-color: var(--el-color-primary-light-9);
      border: 2px dashed var(--el-color-primary) !important;
    }

    .el-upload-list__item {
      padding: 0 !important; // 去掉默认内边距，让内容充分利用高度
    }

    .el-upload--picture-card {
      width: v-bind(width);
      height: v-bind(height);
      background-color: transparent;
      border-radius: v-bind(borderradius);
    }

    .file-item-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 8px;
      box-sizing: border-box;
      justify-content: flex-start;
    }

    .upload-file {
      width: 100%;
      max-height: calc(100% - 20px);
      object-fit: contain;
      margin: 0 auto;
    }

    .file-name {
      width: 100%;
      height: 20px;
      margin-top: 4px;
      overflow: hidden;
      font-size: 12px;
      line-height: 20px;
      color: var(--el-text-color-regular);
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .upload-handle {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: rgb(0 0 0 / 60%);
      opacity: 0;
      box-sizing: border-box;
      transition: var(--el-transition-duration-fast);
      align-items: center;
      justify-content: center;

      .handle-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 6%;
        color: aliceblue;

        .el-icon {
          margin-bottom: 15%;
          font-size: 140%;
        }

        span {
          font-size: 100%;
        }
      }
    }

    .el-upload-list__item {
      &:hover {
        .upload-handle {
          opacity: 1;
        }
      }
    }

    .upload-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      line-height: 30px;
      color: var(--el-color-info);

      .el-icon {
        font-size: 28px;
        color: var(--el-text-color-secondary);
      }
    }
  }

  .el-upload__tip {
    line-height: 15px;
    text-align: center;
  }
}
</style>
