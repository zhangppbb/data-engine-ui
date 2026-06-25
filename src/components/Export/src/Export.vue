<template>
  <el-dropdown @command="(command) => handleCommand(command)" :disabled="exportLoading">
    <el-button type="warning"> <Icon icon="ep:download" class="mr-5px" /> 导出 </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="exportSelected"> 导出选中 </el-dropdown-item>
      </el-dropdown-menu>
      <el-dropdown-menu>
        <el-dropdown-item command="exportThisPage"> 导出本页 </el-dropdown-item>
      </el-dropdown-menu>
      <el-dropdown-menu>
        <el-dropdown-item command="exportAllPage"> 导出全部 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { propTypes } from '@/utils/propTypes'
import download from '@/utils/download'

defineOptions({ name: 'Export' })

const props = defineProps({
  queryParams: {
    required: true,
    type: propTypes.object
  },
  fileName: {
    required: true,
    type: propTypes.string.def('')
  },
  listRef: {
    required: true,
    type: propTypes.object
  },
  exportFunction: {
    required: true,
    type: propTypes.object
  }
})

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗
const exportLoading = ref(false) // 导出的加载中

const handleCommand = async (command) => {
  if (props.listRef.isEmpty) {
    message.info('列表无数据，不能导出！')
    return
  }
  const thisQueryParams = { ...props.queryParams }
  switch (command) {
    case 'exportSelected':
      const selectionRows = props.listRef.getSelectionRows()
      if (!selectionRows || selectionRows.length <= 0) {
        message.info(t('common.exportNoData'))
        return
      }
      selectionRows.forEach((row) => {
        thisQueryParams.exportIds.push(row.id)
      })
      break
    case 'exportThisPage':
      break
    case 'exportAllPage':
      thisQueryParams.exportAll = true
      break
    default:
      break
  }
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await props.exportFunction(thisQueryParams)
    download.excel(data, props.fileName)
    // 清空列表选择项
    props.listRef.clearSelection()
  } catch {
  } finally {
    exportLoading.value = false
  }
}
</script>
