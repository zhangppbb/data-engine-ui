import { merge, cloneDeep } from 'lodash-es'
import { PIE_COLORS } from './theme'
import type { PieSeriesOption } from 'echarts/charts'
// import echarts from '@/plugins/echarts'
import BigNumber from 'bignumber.js';
import { EChartsOption } from 'echarts'
import { ChartDataType } from '..'

/**
 * 饼图
 * @param {ChartDataType[]} data
 * @param {EChartsOption} mergeOptions
 * @returns {EChartsOption}
 */
export const getPieOption = (data: ChartDataType[], mergeOptions?: EChartsOption) => {
  const rich: Record<string, any> = {};
  PIE_COLORS.forEach((c, i) => {
    rich[`percent${i}`] = { color: c, fontSize: 14, align: 'center',  fontWeight: 'bold', };
  });

  const option: EChartsOption = {
    color: PIE_COLORS,
    legend: {
      data: data.map((o) => String(o.name)),
      width: 200,
      selectedMode: false,
       type: 'scroll',       // 设置为可滚动模式
      orient: 'vertical',   // 垂直排列
      icon: 'circle',
      right: '0',
      top: 'center',
      itemGap: 5,
      textStyle: {
        width: 150,
        backgroundColor: 'rgba(0,0,0,0)',
        overflow: 'truncate'
      }
    },
    grid: {
      bottom: 0,
      top: 0,
      left: 0,
      right: 0
    },
    series: {
      type: 'pie',
      // padAngle: 2,
      radius: ['55%', '80%'],
      center: ['30%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        // 图形样式
        borderColor: '#ffffff',
        borderWidth: 2
      },
      label: {
        normal: {
          show: false,
          position: 'center',
            // formatter: '{text|{b}}\n{value|{c} 个} \n ({d}%)',
            formatter(params: any) {
              let name = params.name || '';
              const MAX_PER_LINE = 8;

              if (name.length > MAX_PER_LINE) {
                const lines: string[] = [];
                for (let i = 0; i < name.length; i += MAX_PER_LINE) {
                  lines.push(name.slice(i, i + MAX_PER_LINE));
                }
                name = lines.join('\n');
              }


            // 使用 BigNumber 避免精度丢失
            const valueBN = new BigNumber(params.value ?? 0);
            // 转千分位
            const valueStr = valueBN.toString();

            return `{text|${name}}\n{value|${valueStr}(家)} \n {percent${params.dataIndex%PIE_COLORS.length}|${params.percent}%}`;
          },
          rich: {
            ...rich,
            text: {
              color: '#333',
              fontSize: 14,
              align: 'center',
              // sortable: false, tooltip: true,
              // verticalAlign: 'middle',
              // padding: 8,
              // formatter(name: string) {
              //   return name.length > 8 ? name.substr(0,8) + '...' : name;
              // }
            },
            total: {
              color: '#000',
              fontSize: 14,
              align: 'center',
               fontWeight: 'bold',
            },
            value: {
              color: '#000',
              fontSize: 16,
              fontWeight: 'bold',
              align: 'center', sortable: false, tooltip: true,
              verticalAlign: 'middle',
              padding: [10, 0, 10, 0]
            },
            percent: {
              fontSize: 16,
              fontWeight: 'bold',
              align: 'center'
            },
          }
        },
        emphasis: {
          show: true
          // textStyle: {
          //   color: '#8C81FE',
          //   fontWeight: 'bold',
          //   fontSize: 16,
          // }
        }
      },
      data: data as PieSeriesOption['data']
    }
  }

  return merge(option, cloneDeep(mergeOptions))
}
