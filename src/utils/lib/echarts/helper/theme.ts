// 饼图配色
export const PIE_COLORS: string[] = [
  '#8C81FE',
  '#5183F4',
  '#6AD6EE',
  '#FBB93B',
  '#FC9383',
  '#FA6D6D',
  '#87B5F8',
  '#4ED7EA',
  '#80ECBE',
  '#F0E052',
  '#D4462A',
  '#F6A53B',
  '#DDDB24',
  '#2974E2',
];

export const BARS_COLORS: string[] = ['#87B5F8', '#4ED7EA', '#80ECBE', '#F0E052', '#F0E052'];

export  const gradientGroups = [
    [
    { offset: 0, color: '#2974E2' },
    { offset: 1, color: '#5A9CEE' },
  ],
  [
    { offset: 0, color: '#DDDB24' },
    { offset: 1, color: '#EEE967' },
  ],
  [
    { offset: 0, color: '#F6A53B' },
    { offset: 1, color: '#F9C37A' },
  ],
  [
    { offset: 0, color: '#D4462A' },
    { offset: 1, color: '#E87A63' },
  ],
  [
    { offset: 0, color: '#F0E052' },
    { offset: 1, color: '#F6EE8C' },
  ],
  [
    { offset: 0, color: '#80ECBE' },
    { offset: 1, color: '#B4F4D6' },
  ],
  [
    { offset: 0, color: '#4ED7EA' },
    { offset: 1, color: '#8FE8F1' },
  ],
  [
    { offset: 0, color: '#87B5F8' },
    { offset: 1, color: '#B0D0FA' },
  ],
  [
    { offset: 0, color: '#FA6D6D' },
    { offset: 1, color: '#FC9494' },
  ],
  [
    { offset: 0, color: '#FC9383' },
    { offset: 1, color: '#FDB7AF' },
  ],
  [
    { offset: 0, color: '#FBB93B' },
    { offset: 1, color: '#FFD27C' },
  ],
  [
    { offset: 0, color: '#6AD6EE' },
    { offset: 1, color: '#9DE2F3' },
  ],
  [
    { offset: 0, color: '#5183F4' },
    { offset: 1, color: '#81A7F9' },
  ],
  [
    { offset: 0, color: '#8C81FE' },
    { offset: 1, color: '#B2AFFF' },
  ]
];
// export const LINE_COLOR = '#2974E2';

export interface GaugeColorConfig {
  // 最外层进度条渐变（外层大圆环）
  outerRingGradient: [string, string, string]
  // 中层进度条颜色（中间细圆环）
  middleRingColor: string
  // 中层分割线颜色（中间细圆环的刻度线）
  middleSplitLineColor: string
  // 刻度尺底色渐变（内层刻度区域）
  scaleBgGradient: [string, string, string]
  // 刻度尺分割线颜色（刻度线）
  scaleSplitLineColor: string
  // 刻度尺刻度线颜色（细刻度）
  scaleTickColor: string
  // 渐变进度条颜色（进度区域）
  progressGradient: [string, string, string]
  // 内层圆环渐变（指针周围的底色）
  innerRingGradient: [string, string, string, string]
  // 指针颜色
  pointerColor: string
}

export const DEFAULT_GAUGE_COLORS: GaugeColorConfig = {
  outerRingGradient: ['#0DCCFF', '#479EFF', '#0DCCFF'], // 外层大圆环渐变
  middleRingColor: '#408DE8', // 中层细圆环颜色
  middleSplitLineColor: 'rgba(64, 141, 232, 1)', // 中层分割线颜色
  scaleBgGradient: ['#408DE8', '#408DE8', '#408DE8'], // 刻度尺底色渐变
  scaleSplitLineColor: '#408DE8', // 刻度尺分割线颜色
  scaleTickColor: '#fff', // 刻度尺细刻度颜色
  progressGradient: ['rgba(60,207,223,0)', 'rgba(60,207,223,0.5)', 'rgba(60,207,223,0.9)'], // 进度条渐变
  innerRingGradient: ['#032046', '#086989', '#0FAFCB', '#0EA4C1'], // 内层圆环渐变
  pointerColor: '#12E5FF' // 指针颜色
}

export const GREEN_GAUGE_COLORS: GaugeColorConfig = {
  outerRingGradient: ['#0DFFE5', '#47C0FF', '#0DFFE5'], // 外层大圆环渐变
  middleRingColor: '#408DE8', // 中层细圆环颜色
  middleSplitLineColor: 'rgba(64, 141, 232, 1)', // 中层分割线颜色
  scaleBgGradient: ['#0DEBFF', '#0DEBFF', '#0DEBFF'], // 刻度尺底色渐变
  scaleSplitLineColor: '#0DEBFF', // 刻度尺分割线颜色
  scaleTickColor: '#fff', // 刻度尺细刻度颜色
  progressGradient: ['rgba(11, 137, 171, 0)', 'rgba(60,207,223,0.5)', 'rgba(15, 95, 129, 1)'], // 进度条渐变
  innerRingGradient: ['#032046', '#086989', '#0FAFCB', '#0EA4C1'], // 内层圆环渐变
  pointerColor: '#12E5FF' // 指针颜色
}
export const LINE_COLOR = 'rgba(218, 209, 4, 1)';

// 饼图配色
export const LINE_COLORS: string[] = [
  '#00AEFF',
  '#FFDE00',
];
