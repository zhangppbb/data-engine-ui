<script setup lang="ts">
import downloadIcon from '@/assets/imgs/download-icon.svg'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
import { ElMessage } from 'element-plus'
import { Document, PieChart } from '@element-plus/icons-vue'
import { AppTable } from '@/components/AppTable'

// 图表容器 ref
const chartRef = ref<HTMLElement | null>(null)

interface Emits {
  // 下载图片
  (event: 'downloadTable'): void
}

enum VIEW_TYPE {
  CHART = 'chart',
  TABLE = 'table'
}

interface Props {
  title: string
  icon?: string
  type?: string
  width?: string
  height?: string
  hasData?: boolean
  loading?: boolean

  /**
   * 表格描述
   */
  tableDescription?: string;

  /**
   * 是否展示下载图片
   */
  showDownload?: boolean;

  /**
   * 是否展示表格
   */
  showTable?: boolean;

  /**
   * 表格数据
   */
  tableData?: Record<string, any>[];
  
  /**
   * 列数据
   */
  tableColumns?: Record<string, any>[];
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  isDrillDown: false,
  showDownload: true,
  showTable: false,
  hasData: false,
  loading: false
})

const emits = defineEmits<Emits>()

/**
 * 下载图表
 */
const download = async () => {
  if (currentView.value === VIEW_TYPE.CHART) {
    downloadImage()
  } else if (currentView.value === VIEW_TYPE.TABLE) {
    emits('downloadTable')
  }
}


/**
 * 下载图表图片
 */
const downloadImage = async () => {
  if (!chartRef.value) {
    return
  }

  try {
    // 将图表容器转换为 Canvas
    const canvas = await html2canvas(chartRef.value, {
      backgroundColor: '#fff', // 防止透明背景
      useCORS: true,           // 允许跨域图片渲染
      scale: 2                 // 提高清晰度
    })

    // 将 Canvas 转为 Blob
    canvas.toBlob((blob) => {
      if (blob) {
        const fileName = `${props.title}-${Date.now()}.png`
        saveAs(blob, fileName)
        ElMessage.success('下载成功')
      }
    })
  } catch (error) {
    throw error
  }
}

const currentView = ref<VIEW_TYPE>(VIEW_TYPE.CHART)

// 切换视图
const toggleView = () => {
   if (!props.showTable) return
  currentView.value =
    currentView.value === VIEW_TYPE.CHART ? VIEW_TYPE.TABLE : VIEW_TYPE.CHART
}
</script>

<template>
  <div class="box-border pos-relative w-full border-[1px] border-solid border-[#e0e0e0] px-[10px]" v-loading="props.loading">
    <slot name="header">
      <div class="relative flex items-center justify-between pt-[10px]">

      <slot name="title">
        <div
            class="leading-none font-bold text-sm text-[#000] flex-1 text-left flex-1 truncate">
              {{ props.title }}
              </div>
      </slot>
  
        <slot name="right">
          <div class="flex items-center ml-auto ">
            <slot name="search"></slot>
            <div class="flex items-baseline cursor-pointer" v-if="props.hasData">
              <img  @click="download" v-if="props.showDownload" class="w-[18px] h-[18px]" :src="downloadIcon" alt=""/>
              <div class="ml-sm" v-if="props.showTable">
                <Icon @click="toggleView" color="#7DB6F9" :icon="currentView === VIEW_TYPE.TABLE ? 'fa:bar-chart' : 'fa:table'" />
              </div>
            </div>
          </div>
        </slot>
      </div>
    </slot>

    <!-- Chart -->
    <div
      class="chart-wrapper-content-container"
      :style="{ height: props.height || '300px', width: props.width || '100%' }"
      ref="chartRef"
    >
      <!-- <div class="h-100% relative" v-if="!props.hasData">
        <Empty class="pos-absolute top-[-5px]" />
      </div>

      <template v-else>
        <slot> </slot>
      </template> -->

        <!-- 图表 -->
      <template v-if="currentView === VIEW_TYPE.CHART">
        <div class="h-100% relative" v-if="!props.hasData">
          <Empty class="pos-absolute top-[-5px]" />
        </div>
        <template v-else>
          <slot> </slot>
        </template>
      </template>

      <!-- 表格 -->
      <template v-else>
        <div class="pb-xs overflow-hidden flex flex-col h-full">
          <div class="text-right text-grey4 text-sm pt-xs" v-if="props.tableDescription">{{ props.tableDescription }}</div>
          
          <div class="flex-1 h-full overflow-hidden pt-xs">
            <AppTable v-if="props.tableData?.length" :data="props.tableData" :columns="props?.tableColumns || []" style="width: 100%"/>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
