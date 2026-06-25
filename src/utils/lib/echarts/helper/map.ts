import type { EChartsOption, MapSeriesOption } from 'echarts'
import { merge, cloneDeep } from 'lodash-es'
import { PROVINCE_NAMES } from '@/constants'
import { ChartDataType } from '..'

/**
 * 获取地图城市名称
 * @param {string} name
 */
export const getMapName = (name: string) => {
  if (PROVINCE_NAMES.includes(name)) {
    if (name.indexOf('黑龙江') > -1 || name.indexOf('内蒙古') > -1) {
      name = name.substring(0, 3)
    } else {
      name = name.substring(0, 2)
    }
  }

  return name
}

/**
 * 地图-色差图
 * @param {string} name
 * @param {ChartDataType[]} data
 * @param {EChartsOption} mergeOptions
 * @param {string} unit
 * @returns {EChartsOption}
 */
export const getMapOption = (name: string, data: ChartDataType[], mergeOptions?: Partial<EChartsOption>, unit?: string) => {
  const option: EChartsOption = {
    backgroundColor: "#fff",
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        return `${params.name}：${params.value ? params.value : 0}${unit || ''}`;
      },
    },
    visualMap: {
      left: "left",
      top: "bottom",
      text: ["高", "低"],
      calculable: true,
      inRange: {
        color: ["#C5DEFC", "#1F83FF"],
      },
    },
    geo: {
      type: "map",
      map: name,
      roam: true,
      geoIndex: 1,
      zoom: 1.1,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000000",
          },
        },
        emphasis: {
          textStyle: {
            color: "#000000",
          },
        },
      },
      itemStyle: {
        normal: {
          areaColor: "#C5DEFC",
          borderColor: "#eee",
        },
        emphasis: {
          areaColor: "#eaaf28",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      }
    },
    series: [
      {
        type: "map",
        geoIndex: 0,
        data: data as MapSeriesOption['data'],
      },
    ],
  }

  return merge(option, cloneDeep(mergeOptions))
}
