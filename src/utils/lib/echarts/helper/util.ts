import type { DataZoomComponentOption, GridComponentOption } from 'echarts'
import type { LabelOption, LineStyleOption } from 'echarts/types/src/util/types.js'
import { sortBy, merge } from 'lodash-es'
import { cloneDeep } from 'lodash-es'
import { DESIGN_WIDTH, px } from '@/utils/theme'
import { ChartDataType } from '..'

export const value = document.documentElement.clientWidth / DESIGN_WIDTH

/**
 * 获取图表数据
 * @param data 原始数据
 * @param valueKey 数值字段名（默认 value）
 * @param labelKey 名称字段名（默认 label）
 * @param valueFn 可选：自定义数值处理回调
 * @param labelFn 可选：自定义名称处理回调
 * @returns 处理后的图表数据
 */
export const getChartData = (
  data: any,
  valueKey: string = 'value',
  labelKey: string = 'label',
  valueFn?: (item: ChartDataType) => number,
  labelFn?: (item: ChartDataType) => string
): ChartDataType[] => {
  return data.map((o) => ({
    target: o,
    value: valueFn ? valueFn(o) : Number(o[valueKey] || 0),
    name: labelFn ? labelFn(o) : String(o[labelKey] || ''),
    proportion: 0,
    code: o.code
  }))
}

/**
 * 图表数量排序
 * @param {ChartDataType[]} data
 * @param {string} valueKey
 * @param {string} labelKey 
 * @returns {ChartDataType[]}
 */
export const getSortChartData = (
  data: ChartDataType[],
  valueKey: string = 'value',
  labelKey: string = 'label'
): ChartDataType[] => {
  let chartData = getChartData(data, valueKey, labelKey)
  chartData = sortBy(chartData, (o) => -Number(o.value))

  return chartData
}

/**
 * 边距
 * @param {GridComponentOption} opts
 * @returns {GridComponentOption}
 */
export const getGrid = (opts?: GridComponentOption): GridComponentOption =>
  merge(
    {
      left: '2%',
      right: '2%',
      top: '14%',
      bottom: '2%',
      containLabel: true
    },
    cloneDeep(opts)
  )

/**
 * 获取线条样式
 * @param {LineStyleOption} opts
 * @returns {LineStyleOption}
 */
export const getLineStyle = (opts?: LineStyleOption): LineStyleOption =>
  merge(
    {
      width: 1,
      color: '#DCDCDC'
    },
    cloneDeep(opts)
  )

/**
 * 获取坐标线条样式
 * @param {LineStyleOption} opts
 * @returns {LineStyleOption}
 */
export const getSplitLineStyle = (opts?: LineStyleOption): LineStyleOption =>
  merge(
    {
      width: 1,
      color: '#CCCCCC',
      type: 'dashed'
    },
    cloneDeep(opts)
  )

/**
 * 获取 label
 * @param {LabelOption} opts
 * @returns {LabelOption}
 */
export const getAxisLabel = (opts?: LabelOption): LabelOption =>
  merge(
    {
      overflow: 'truncate',
      color: '#333',
      show: true,
      // margin: (10),
      fontSize: px(14)
    },
    cloneDeep(opts)
  )

/**
 * 获取 label
 * @param {*} opts
 */
export const getLabel = (opts?: LabelOption): LabelOption => {
  const label = {
    show: true,
    position: 'top',
    color: '#333333',
    fontSize: px(14)
  }

  return merge(label, cloneDeep(opts || {}))
}

// 坐标轴名称与轴线之间的距离
export const nameGap = px(20)

/**
 * px 单位转换 number 10px -> 10
 * @param {string} originalString
 * @returns {number}
 */
export const pxToNumber = (originalString: string): number => {
  // 使用正则表达式匹配数字部分
  const numberPattern = /\d+/
  const match = (originalString || '').match(numberPattern)

  // 如果匹配到数字部分，则将其转换为整数
  const result = match ? parseInt(match[0]) : 0

  return result
}

/**
 * 生成 ECharts dataZoom 配置
 * @param showCount 显示的数据量
 * @param totalCount 总数据量
 * @param opts 可选：额外覆盖的 dataZoom 配置
 */
export const getDataZoom = (
  showCount: number,
  totalCount: number,
  opts?: DataZoomComponentOption[]
): DataZoomComponentOption[] => {
  const endPercent = (showCount / totalCount) * 100

  const base: DataZoomComponentOption[] = [
    {
      bottom: px(11),
      moveHandleIcon: 'none',
      start: 0,
      end: endPercent,
      type: 'slider',
      xAxisIndex: [0],
      zoomLock: true,
      height: px(10),
      moveHandleStyle: {
        color: 'rgba(219, 237, 242, 0)',
        borderRadius: 0
      },
      handleStyle: {
        borderWidth: 1,
        color: 'rgba(0, 0, 0, 0)'
      },
      showDataShadow: false,
      showDetail: false,
      realtime: false,
      filterMode: 'filter',
      borderColor: '#515557',
      fillerColor: 'rgba(219, 237, 242, 1)',
      borderRadius: 0,
      textStyle: {
        color: 'rgba(219, 237, 242, 0)'
      }
    },
    {
      type: 'inside',
      xAxisIndex: 0,
      start: 0,
      end: endPercent,
      zoomLock: true
    }
  ]

  return merge(cloneDeep(base), opts || [])
}
