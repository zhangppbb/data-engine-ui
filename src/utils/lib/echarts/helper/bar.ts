import { merge, cloneDeep, maxBy } from 'lodash-es'
import {
  getAxisLabel,
  getDataZoom,
  getGrid,
  getLabel,
  getLineStyle,
  getSplitLineStyle,
  nameGap
} from './util'
import type { BarSeriesOption } from 'echarts/charts'
import { BARS_COLORS, LINE_COLOR } from './theme'
import { EChartsOption } from 'echarts'
import echarts from '@/plugins/echarts'
import { px } from '@/utils/theme'
import { ChartDataType } from '..'

// 单柱状图
export const BAR_WIDTH = px(20)
export const BAR_STYLE: Partial<BarSeriesOption> = {
  barWidth: BAR_WIDTH,
  color: BARS_COLORS[0],
  itemStyle: {
    borderRadius: [px(10), px(10), 0, 0],
    color: (params: any) => {
      return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#0077FE' },
        { offset: 1, color: '#5DB1FF' }
      ])
    }
  }
}

/**
 * 柱状图
 * @param {ChartDataType[]} data
 * @param {EChartsOption} mergeOptions
 * @returns {EChartsOption}
 */
export const getBarOption = (data: ChartDataType[], mergeOptions?: EChartsOption) => {
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: data.map((o) => String(o.name)),
      axisLabel: {
        ...getAxisLabel(),
        rotate: 45,
        width: 50
      },
      axisLine: {
        show: true,
        lineStyle: getLineStyle()
      },
      splitLine: {
        show: false
        // 不显示网格线
      },
      axisTick: {
        show: true
      }
    },

    tooltip: {
      show: true
    },

    grid: getGrid({
    }),

    yAxis: [
      {
        nameLocation: 'end',
        nameTextStyle: getLabel(),
        type: 'value',
        axisLabel: getAxisLabel(),
        axisLine: {
          show: true,
          lineStyle: getLineStyle()
        },
        splitLine: {
          show: true,
          lineStyle: getSplitLineStyle()
          // 不显示网格线
        },
        axisTick: {
          show: true
        }
      }
    ],
    series: [{
      // color: colors.bar,
      type: 'bar',
      barWidth: BAR_WIDTH,
      // barGap: 20,
      itemStyle: {
        borderRadius: [px(30), px(30), 0, 0],
        color: (params: any) => {
          return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#0077FE' },
            { offset: 1, color: `#5DB1FF` }
          ])
        }
      },
      data: data as BarSeriesOption['data']
    }]
  }

  return merge(option, cloneDeep(mergeOptions))
}

/**
 * 多维柱状图
 * @param {ChartDataType[]} data
 * @param {EChartsOption} mergeOptions
 * @returns {EChartsOption}
 */
export const getBarsOption = (data: ChartDataType[], mergeOptions?: EChartsOption) => {
  const option = {
    tooltip: {
      show: true
    },
    legend: {
      top: '0', // 顶部对齐
      x: 'center', // 右侧对齐
      icon: 'rect', // 图例形状改成矩形
      itemWidth: px(10), // 矩形宽度
      itemHeight: px(6), // 矩形高度
      textStyle: {
        // color: '#fff' // 图例文字改成白色
        ...getLabel()
      }
    },
    grid: getGrid({
      right: 0,
      bottom: px(10),
    }),
    xAxis: {
      type: 'category',
      data: data.map((o) => o.name),
      axisLabel: getAxisLabel(),
      axisLine: {
        show: true,
        lineStyle: getLineStyle()
      },
      splitLine: {
        show: false
        // 不显示网格线
      },
      axisTick: {
        show: false
      }
    },
    color: BARS_COLORS,
    yAxis: [
      {
        type: 'value',
        name: '操作量(次)',
        nameGap: nameGap,
        nameTextStyle: getLabel(),
        axisLabel: getAxisLabel(),
        axisLine: {
          show: true,
          lineStyle: getLineStyle()
        },
        splitLine: {
          show: true,
          lineStyle: getSplitLineStyle()
          // 不显示网格线
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: []
  }

  return merge(option, cloneDeep(mergeOptions))
}

/**
 * 获取横向柱状图
 * @param {ChartDataType[]} data
 * @param {EChartsOption} mergeOptions
 * @returns {EChartsOption}
 */
export const getCrossBarOption = (data: ChartDataType[], mergeOptions?: EChartsOption) => {
  const option = {
    tooltip: {},
    grid: getGrid({
      right: '10%'
    }),
    xAxis: {
      type: 'value',
      axisLabel: getAxisLabel(),
      axisLine: {
        show: true
      },
      splitLine: {
        show: false // 不显示网格线
      }
    },
    yAxis: {
      type: 'category',
      data: data.map((o) => o.name),
      axisLabel: getAxisLabel(),
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false // 不显示网格线
      }
    },
    series: [
      {
        label: getAxisLabel({
          position: 'right',
          color: '#0F83C3'
          // formatter(params) {
          //   return thousandth(params.value || 0)
          // }
        }),
        barWidth: 10,
        itemStyle: {
          borderRadius: 10
        },
        // color: colors.crossBar,
        type: 'bar',
        // data: chartData.values[0]
        data: data.map((o) => o.value)
      }
    ]
  }

  return merge(option, cloneDeep(mergeOptions))
}

/**
 * 获取混合柱状图和折线图
 * @param {ChartDataType[]} data
 * @param {EChartsOption} mergeOptions
 * @returns {EChartsOption}
 */
export const getBarAndLineOption = (data: ChartDataType[], mergeOptions?: EChartsOption) => {
  const option = {
    tooltip: {
      // show: true,
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      // 4. Tooltip优化：同时显示数量和增长率
      formatter: (params: any) => {
        if (params.length === 0) return ''
        // 显示X轴分类名称
        let tooltipHtml = `<div>${params[0].name}</div>`
        // 遍历两个系列（数量+增长率）
        params.forEach((item) => {
          const value =
            item.seriesType === 'bar'
              ? `${item.value}` // 柱状图：显示数量+单位
              : `${item.value || 0}%` // 折线图：显示增长率百分比
          tooltipHtml += `<div style="margin-top:4px">
            <span style="display:inline-block;width:8px;height:8px;border-radius:4px;background:${item.color};margin-right:4px;"></span>
            ${item.seriesName}: ${value}
          </div>`
        })
        return tooltipHtml
      }
    },
    legend: {
      show: true, // 显示图例，区分两个系列
      top: '0', // 图例位置（标题下方）
      left: 'center',
      // data: [yAxisName, growthRateAxisName], // 图例名称（与系列name对应）
      textStyle: getLabel()
    },
    grid: getGrid({}),
    xAxis: {
      type: 'category',
      // data: data.map((o) => o.name),
      axisLabel: getAxisLabel(),
      axisLine: {
        show: true,
        lineStyle: getLineStyle()
      },
      splitLine: {
        show: false
        // 不显示网格线
      },
      axisTick: {
        show: false
      }
    },

    yAxis: [
      {
        axisLabel: {
          ...getAxisLabel()
        },
        type: 'value',
        nameTextStyle: getLabel(),
        nameGap: nameGap,
        axisLine: {
          show: true,
          lineStyle: getLineStyle()
        },
        splitLine: {
          show: true,
          lineStyle: getSplitLineStyle()
          // 不显示网格线
        },
        axisTick: {
          show: false
        }
      },
      {
        type: 'value',
        name: '增长率(%)',
        nameGap: nameGap,
        nameTextStyle: getLabel(),
        axisLabel: getAxisLabel(),
        axisLine: {
          show: true,
          lineStyle: getLineStyle()
        },
        splitLine: {
          show: false // 不显示网格线
        }
      }
    ],
    series: [
      {
        // color: colors.bar,
        type: 'bar',
        // label: getLabel({
        //   formatter(params) {
        //     return thousandth(params.value || 0)
        //   }
        // }),
        ...BAR_STYLE,
        data: []
      },
      {
        type: 'line',
        legendIcon: 'path://M0 0',
        // 1. 数据点样式：空心圈（关键配置）
        itemStyle: {
          color: 'transparent', // 点的填充色设为透明（实现“空心”）
          borderColor: '#FFA100', // 点的边框色（与折线颜色一致）
          borderWidth: 1 // 点的边框宽度（确保空心圈清晰）
        },
        // 2. 折线样式：虚线（关键配置）
        lineStyle: {
          width: 1,
          color: '#FFA100',
          type: 'dashed' // 折线设为虚线（支持 'dashed' 虚线 / 'dotted' 点线）
        },
        symbol: 'circle', // 数据点形状：圆形（支持 'circle' 圆 / 'square' 方 / 'triangle' 三角）
        symbolSize: 6, // 正常状态下空心圈大小
        // 3. 鼠标hover时：空心圈放大且保持样式
        emphasis: {
          symbolSize: 8, // hover时空心圈放大
          itemStyle: {
            color: 'transparent', // 保持空心
            borderColor: '#FFA100', // 保持边框色
            borderWidth: 2 // 保持边框宽度
          }
        },
        yAxisIndex: 1, // 绑定右侧Y轴（索引1）
        // tooltip: {
        //   formatter: (params: any) => `${params.seriesName}: ${params.value}%`
        // },
        data: []
      }
    ]
    // dataZoom: getDataZoom(6, 24)
  }

  return merge(option, cloneDeep(mergeOptions)) as EChartsOption
}
