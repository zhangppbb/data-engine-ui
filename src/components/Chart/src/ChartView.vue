<script setup lang="ts">
import { ref, watch, markRaw, nextTick } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'
import { debounce } from 'lodash-es'
import type { ECElementEvent, EChartsType, SetOptionOpts } from 'echarts/core'
import axios from 'axios'
import type { GeoJSON } from 'echarts/types/src/coord/geo/geoTypes.js'
import { type EChartsOption } from 'echarts'
import echarts from '@/plugins/echarts'
import { ECBasicOption } from 'echarts/types/src/util/types'
import 'echarts-gl'

type Style = string

interface Props {
  width?: Style
  height?: Style
  option: EChartsOption | null
  theme?: string | object | null // 主题
  highlight?: boolean // 高亮饼图
}

export interface Emits {
  // 点击
  (event: 'drillDown', params: ECElementEvent, chart: EChartsType): void
  // 点击空白区域
  (event: 'dblclick', params: ECElementEvent): void
  // 点击图例
  (event: 'legendselectchanged'): void
  // 地图
  (event: 'bmaproam'): void
  // 渲染
  (event: 'render'): void
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  highlight: false
})

const emits = defineEmits<Emits>()

const chartRef = ref<HTMLElement>()
const chartInstance = ref<EChartsType>()

/**
 * 获取地图JSON
 * @param {string} cityId
 */
const registerMap = async (name: string, cityId: string): Promise<GeoJSON> => {
  try {
    const res = await axios.get<GeoJSON>(`${import.meta.env.VITE_BASE_PATH}/static/map/${cityId}.json`)

    echarts.registerMap(name, res.data)

    return res.data
  } catch (error) {
    throw error
  }
}

// 绘制
const draw = (init?: boolean) => {
  if (chartInstance.value) {
    showLoading()

    setOption(props.option, { notMerge: true })

    if (!init) {
      hideLoading()
    }
  }
}

const showLoading = () => {
  // if (chartInstance.value) {
  //   chartInstance.value.showLoading()
  // }
}

const hideLoading = () => {
  // if (chartInstance.value) {
  //   chartInstance.value.hideLoading()
  // }
}

const setOption = (option: EChartsOption | null, opts?: SetOptionOpts) => {
  if (!option) return
  if (chartInstance.value) {
    chartInstance.value.setOption(option, opts)

    nextTick(() => {
      if (props.highlight) {
        highlightAction()
      }
    })
  }
}

const getOption = (): ECBasicOption | undefined => {
  if (chartInstance.value) {
    return chartInstance.value.getOption()
  }
}

const getDataURL = (): string | undefined => {
  if (chartInstance.value) {
    return chartInstance.value.getDataURL({
      backgroundColor: '#fff'
    })
  }
}

// 初始化
const init = () => {
  if (!chartRef.value) return

  // 校验 Dom 节点上是否已经挂载了 ECharts 实例，只有未挂载时才初始化
  chartInstance.value = echarts.getInstanceByDom(chartRef.value)
  if (!chartInstance.value) {
    chartInstance.value = markRaw(echarts.init(chartRef.value, props.theme, { renderer: 'canvas' }))

    triggerEvent()

    draw(true)
  }
}

const triggerEvent = () => {
  if (!chartInstance.value) return false

  const chart = chartInstance.value

  chart.off('click')
  chart.off('dblclick')
  chart.off('legendselectchanged')
  chart.off('bmaproam')

  chart.on('click', (params) => {
    emits('drillDown', params, chart)
  })

  // 点击空白区域
  chart.getZr().on('dblclick', (params: ECElementEvent) => {
    emits('dblclick', params)
  })

  chart.on('legendselectchanged', () => {
    emits('legendselectchanged')
  })

  // 地图
  chart.on('bmaproam', () => {
    emits('bmaproam')
  })
}

// 高亮饼图第一个元素
const highlightAction = () => {
  const chart = chartInstance.value
  if (!chart) return

  let defaultIndex = 0 // 默认高亮第一个元素

  // 初始化高亮第一个
  chart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: defaultIndex
  })

  chart.on('mouseover', (e) => {
    if (e.dataIndex !== undefined) {
      // 取消默认高亮
      chart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: defaultIndex
      })
      // 高亮当前
      chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: e.dataIndex
      })
    }
  })

  chart.on('mouseout', (e) => {
    if (e.dataIndex !== undefined) {
      // 取消当前高亮
      chart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: e.dataIndex
      })
      // 恢复默认高亮
      chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: defaultIndex
      })
    }
  })
}

watch(props, () => {
  draw()
})

onMounted(() => {
  init()

  window.addEventListener('resize', debouncedResize)
})

// 窗口自适应并开启过渡动画
const resize = () => {
  if (chartInstance.value) {
    chartInstance.value.resize({ animation: { duration: 300 } })

    hideLoading()
  }
}

// 自适应防抖优化
const debouncedResize = debounce(resize, 500, { maxWait: 800 })

onBeforeUnmount(() => {
  // 容器被销毁之后，销毁实例，避免内存泄漏
  chartInstance.value?.dispose()

  window.removeEventListener('resize', debouncedResize)
})

defineExpose({
  registerMap,
  chartInstance,
  setOption,
  showLoading,
  hideLoading,
  getOption,
  getDataURL,
  resize
})
</script>

<template>
  <div
    id="echart"
    ref="chartRef"
    class="relative"
    :style="{ width: props.width, height: props.height }"
  ></div>
</template>
