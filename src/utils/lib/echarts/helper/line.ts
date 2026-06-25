import { merge, cloneDeep } from 'lodash-es'
import {
  getAxisLabel,
  getDataZoom,
  getGrid,
  getLabel,
  getLineStyle,
  getSplitLineStyle,
} from './util'
import { EChartsOption } from 'echarts'
import { px } from '@/utils/theme'
import { ChartDataType } from '..'

/**
 * 获取折线图
 * @param {ChartDataType[]} data
 * @param {EChartsOption} mergeOptions
 * @returns {EChartsOption}
 */
export const getLinesOption = (data: ChartDataType[], mergeOptions?: EChartsOption) => {
  const option = {
    tooltip: {
      show: false
    },
    legend: {
      top: '0', // 顶部对齐
      right: '0', // 右侧对齐
      icon: 'rect', // 图例形状改成矩形
      itemWidth: px(16), // 矩形宽度
      itemHeight: 2, // 矩形高度
      textStyle: {
        // color: '#fff' // 图例文字改成白色
        ...getLabel()
      }
    },
    grid: getGrid({}),
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
    yAxis: {
      axisLabel: {
        ...getAxisLabel(),
        formatter: '{value}'
      },
      type: 'value',
      name: '(kwh)',
      nameTextStyle: getLabel(),
      nameGap: [px(10)],
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
    series: [
      // {
      //   // color: colors.bar,
      //   type: 'bar',
      //   // label: getLabel({
      //   //   formatter(params) {
      //   //     return thousandth(params.value || 0)
      //   //   }
      //   // }),
      //   ...BAR_STYLE,
      //   data: []
      // },
      // {
      //   smooth: true,
      //   type: 'line',
      //   yAxisIndex: 1,
      //   lineStyle: {
      //     width: 2, // 折线的宽度，默认是 2
      //     color: LINE_COLOR
      //   },
      //   // itemStyle: {
      //   //   color: 'red',     // 拐点颜色
      //   //   borderColor: 'red',
      //   //   shadowBlur: 20,       // 发光范围
      //   //   shadowColor: LINE_COLOR, // 发光颜色
      //   //   shadowOffsetX: 0,
      //   //   shadowOffsetY: 0
      //   // },
      //   showSymbol: true, //是否默认展示圆点
      //   symbol: 'circle', //设定为实心点
      //   symbolSize: px(10), //设定实心点的大小
      //   itemStyle: {
      //     normal: {
      //       color: LINE_COLOR, //改变折线点的颜色
      //       shadowBlur: 20, // 发光范围
      //       shadowColor: LINE_COLOR, // 发光颜色
      //       shadowOffsetX: 0,
      //       shadowOffsetY: 0,
      //       lineStyle: {
      //         color: LINE_COLOR //改变折线颜色,
      //       }
      //     }
      //   },
      //   // label: getLabel({
      //   //   color: '#0F83C3',
      //   //   formatter(params) {
      //   //     return `${params.value || 0}%`
      //   //   }
      //   // }),
      //   // tooltip: {
      //   //   valueFormatter: function(value) {
      //   //     return value + '%'
      //   //   }
      //   // },
      //   data: []
      // }
    ],
    dataZoom: getDataZoom(6, 24)
  }

  return merge(option, cloneDeep(mergeOptions)) as EChartsOption
}
