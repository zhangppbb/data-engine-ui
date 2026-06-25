
<script setup lang="ts">
import { defineComponent, h, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import bg from './assets/images/bg.png'
import titleBg from './assets/images/title-bg.png'
import * as echarts from 'echarts';
import chinaJson from './100000.json';
import ChartView from '@/components/Chart/src/ChartView.vue';
import { px } from '@/utils/theme';
import { Top, Bottom } from '@element-plus/icons-vue';
import yfBg from './assets/images/3-1.png'
import marker from './assets/images/marker.png'
import zlBg from './assets/images/zl-bg.png'
import centerIcon from './assets/images/center-icon.png'
import PanelTitle from './components/panel-title/Index.vue'
import SubTitle from './components/sub-title/Index.vue'

// /**
//  * 标题组件
//  */
// const PanelTitle = defineComponent({
//   props: {
//     title: {
//       type: String,
//       required: true,
//     },
//   },

//   setup(props) {
//     return () =>
//       h('div', { class: 'flex items-center' }, [
//         h('div', {
//           class: 'h-20dp w-4dp bg-#46a2ff',
//         }),

//         h(
//           'div',
//           {
//             class: 'ml-10dp text-24dp font-700 text-#dcecff',
//           },
//           props.title,
//         ),
//       ]);
//   },
// });
/**
 * 经营总览
 */
const overviewList = [
  {
    label: '新签合同额',
    value: '1280',
    unit: '万元',
    icon: new URL('./assets/images/1-1.png', import.meta.url).href
  },
  {
    label: '累计中标额',
    value: '980',
    unit: '万元',
    icon: new URL('./assets/images/1-2.png', import.meta.url).href
  },
  {
    label: '中标数量',
    value: '18',
    unit: '个',
    icon: new URL('./assets/images/1-3.png', import.meta.url).href
  },
  {
    label: '发展项目',
    value: '24',
    unit: '个',
    icon: new URL('./assets/images/1-4.png', import.meta.url).href
  }
]

const option = {
   legend: {
    orient: 'horizontal',
    bottom: 0,
    left: 'center',

    data: ['全交', '全城', '全水'],

    itemWidth: px(5),
    itemHeight: px(5),
    // itemGap: 30,

    textStyle: {
      color: '#BDEFFF',
      fontSize: px(12)
    }
  },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
        name: '半径模式',
        type: 'pie',
        radius: ['50%', '80%'],
        center: ['50%', '40%'],
        roseType: 'radius',
        label: {
            show: false,
        },
        labelLine: {
          show: false
        },
        data: [
          {
                value: 2,
                name: '全城',
                itemStyle: {
                    color: "#EAFF00"
                }
            },
             {
                value: 3,
                name: '全交',
                itemStyle: {
                    color: "#0066FF"
                }
            },
            {
                value: 1,
                name: '全水',
                itemStyle: {
                    color: "#00BFEF"
                }
            },
           
            
        ]
    }]
};

/**
 * 数据资源
 */
const resourceList = [
  {
    title: '工商企业数据',
    value: '3.4亿',
  },
  {
    title: '公招市场数据',
    value: '3.4亿',
  },
  {
    title: '土地数据',
    value: '3.4亿',
  },
  {
    title: '政策数据',
    value: '3.4亿',
  },
];

/**
 * 使用率
 */
const usageList = [
  {
    label: '计算总使用率',
    value: '76.2%',
  },
  {
    label: '存储总使用率',
    value: '62.5%',
  },
  {
    label: '剩余可用容量',
    value: '1.2TB',
  },
  {
    label: '待审批申请',
    value: '12项',
  },
];

/**
 * 排行数据
 */
const list = [
  {
    name: '企业性质分析',
    value: '8609796',
    percent: 82,
    rankClass: 'text-#FF5D5D',
    gradient:
      'linear-gradient(90deg, #79D0FB 0%, #E16B31 100%)'
  },
  {
    name: '工商基本信息',
    value: '7415637',
    percent: 66,
    rankClass: 'text-#FFB93E',
    gradient:
      'linear-gradient(90deg, #7DD5FF 0%, #FBC532 100%)'
  },
  {
    name: '企业基本信息',
    value: '5987221',
    percent: 52,
    rankClass: 'text-#4CFF7F',
    gradient:
      'linear-gradient(90deg, #7DD5FF 0%, #32FBB6 100%)'
  },
  {
    name: '企业名称模糊',
    value: '3026754',
    percent: 38,
    rankClass: 'text-#6C99FF',
    gradient:
      'linear-gradient(90deg, #7DD5FF 0%, rgba(47,161,241,0.63) 68%, #3275FB 100%)'
  },
  {
    name: '搜索',
    value: '2390882',
    percent: 22,
    rankClass: 'text-#6C99FF',
    gradient:
      'linear-gradient(90deg, #7DD5FF 0%, rgba(47,161,241,0.63) 68%, #3275FB 100%)'
  }
]

/**
 * 研发能力
 */
const abilityList = [
  {
    label: '新研发产品数',
    value: 17,
    tag: '+5'
  },
  {
    label: '新增专利数',
    value: 1,
    tag: '+6'
  },
  {
    label: '新增软著数',
    value: 15,
    tag: '+7'
  },
];

/**
 * 客户分析
 */
const customerList = [
  {
    label: '大客户累计合同额',
    value: '8650万',
  },
  {
    label: '合作客户数量',
    value: '36家',
  },
  {
    label: '平均单客合同额',
    value: '240万',
  },
  {
    label: '大客户整体回款率',
    value: '86%',
  },
];

/**
 * 底部统计
 */
const stats = [
  {
    label: '经营网点',
    value: 9,
    add: '新增 3'
  },
  {
    label: '新签合同额',
    value: '1800万',
    add: '新增 300万'
  },
  {
    label: '数据资产',
    value: '4.5亿',
    add: '新增 500万'
  },
  {
    label: '产品研发',
    value: 4,
    add: '新增 1'
  },
  {
    label: '客户数量',
    value: 20,
    add: '新增 3'
  },
];

/**
 * refs
 */
const barRef = ref<HTMLDivElement>();
const lineRef = ref<HTMLDivElement>();
const mapRef = ref<HTMLDivElement>();
const ringRef = ref<HTMLDivElement>();
const horizontalBarRef = ref<HTMLDivElement>();
const trendRef = ref<HTMLDivElement>();

/**
 * 饼图 refs
 */
const pieRefs = ref<HTMLDivElement[]>([]);

/**
 * 图表实例
 */
const chartList: echarts.ECharts[] = [];

/**
 * 设置 pie ref
 */
const setPieRef = (index: number) => {
  return (el: HTMLDivElement | null) => {
    if (!el) return;

    pieRefs.value[index] = el;
  };
};

/**
 * resize
 */
const resizeCharts = () => {
  chartList.forEach((chart) => {
    chart.resize();
  });
};

/**
 * 初始化所有图表
 */
const initCharts = async () => {
  await nextTick();

  initLineChart();
  initMapChart();
  initRingChart();
  initTrendChart();
  initPieCharts();

  window.addEventListener('resize', resizeCharts);
};

const barOptions = {
        animation: true,
        grid: {
          top: px(30),
          right: px(30),
          bottom: "15%",
        },
        xAxis: {
          data: ['数转服务','企业合规','市场分析','公路管理','数据推送'],
          axisLine: {
            show: false //隐藏X轴轴线
          },
          axisTick: {
            show: false //隐藏X轴轴线
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            fontSize: px(12),
            textStyle: {
              color: '#9C9C9C' //X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: "value",
            gridIndex: 0,
            min: 0,
            max: 250,
            // splitNumber: 4,
            name: '(万元)',
            nameTextStyle: {
              color: '#9C9C9C',
              fontSize: px(12)
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#2F2F2F",
                width: 1
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(77, 128, 254, 0.2)"
              }
            },
            axisLabel: {
              show: true,
              margin: 14,
              fontSize: px(12),
              textStyle: {
                color: "#9C9C9C"
              }
            }
          }
        ],
        series: [
          {
            name: "设备在线率",
            type: "bar",
            barWidth: px(28),
            // 开启背景
            showBackground: true,

            // 背景色
            backgroundStyle: {
              color: "rgba(6,35,65,.4)",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00D7ED"
                  },
                  {
                    offset: 1,
                    color: "#00D7ED"
                  }
                ])
              }
            },
            data: [156,{
              value: 245,
               itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#6CD6AB"
                  },
                  {
                    offset: 1,
                    color: "#6CD6AB"
                  }
                ])
              }
            },
            },140,70,180],
            z: 10,
            zlevel: 0
          },
          {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#09122A"
              }
            },
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [px(30), 2],
            symbolPosition: "start",
            symbolOffset: [1,1],
            data:  [156,245,140,70,180],
            width: 2,
            z: 0,
            zlevel: 1
          },
          // {
          //   name: "外框",
          //   type: "bar",
          //   barGap: "-110%", // 设置外框粗细
          //   data: [100, 100, 100, 100, 100, 100, 100],
          //   barWidth: 16,
          //   itemStyle: {
          //     normal: {
          //       color: "transparent", // 填充色
          //       // barBorderRadius: 0, //圆角半径
          //       label: {
          //         // 标签显示位置
          //         show: false,
          //         position: "top" // insideTop 或者横向的 insideLeft
          //       }
          //     }
          //   },
          //   z: 0
          // },
          // {
          //   name: "背影",
          //   type: "line",
          //   smooth: true, //平滑曲线显示
          //   showAllSymbol: false, //显示所有图形。
          //   symbolSize: 0,
          //   lineStyle: {
          //     width: 0
          //   },
          //   areaStyle: {
          //     color: "rgba(0, 151, 251, 0.1)"
          //   },
          //   data:  [21,43,56,32,64],
          //   z: 5
          // }
        ],
        dataZoom: [
          {
            type: "slider",
            show: false,
            xAxisIndex: [0],
            endValue: 4,
            startValue: 0
          }
        ]
      }


  const COLOR_LIST = [
  '#0066FF',
  '#EAFF00',
  '#00BFEF',
  '#1CDC84'
]

const DATA = [
  {
    value: 1,
    name: '陕西'
  },
  {
    value: 2,
    name: '温州'
  },
  {
    value: 3,
    name: '乾县'
  },
  {
    value: 4,
    name: '数据四'
  }
]

const pieOptions = {
  tooltip: {
    trigger: 'item'
  },

  legend: {
    orient: 'vertical',
    left: 0,
    top: 'center',
    itemWidth: px(5),
    itemHeight: px(5),
    itemGap: px(8),

    icon: 'rect',

    textStyle: {
      color: '#BDEFFF',
      fontSize: px(11)
    },
    data: DATA.map((o, index) => ({
      name: o.name,
      itemStyle: {
        color: COLOR_LIST[index]
      }
    }))

    // formatter(name) {
    //   const item = DATA.find(v => v.name === name)

    //   return `${name}`
    // }
  },

  series: [
    // 外层发光环
    // {
    //   type: 'pie',
    //   radius: ['58%', '64%'],
    //   center: ['68%', '50%'],
    //   silent: true,
    //   z: 1,

    //   label: {
    //     show: false
    //   },

    //   data: [
    //     {
    //       value: 100,
    //       itemStyle: {
    //         color: 'rgba(80,160,255,0.15)',
    //         shadowBlur: 20,
    //         shadowColor: 'rgba(0,194,255,0.5)'
    //       }
    //     }
    //   ]
    // },

    // 主环
    {
      name: '数据占比',
      type: 'pie',

      radius: ['80%', '45%'],
      center: ['68%', '50%'],

      avoidLabelOverlap: false,
      hoverAnimation: false,

      // itemStyle: {
      //   borderWidth: 6,
      //   borderColor: '#081C4A'
      // },

      label: {
        show: false
      },

      labelLine: {
        show: false
      },

      data: DATA.map((item, index) => {
        return {
          ...item,

          itemStyle: {
            // borderRadius: 10,

            //  normal: {//颜色渐变
            //             color: new echarts.graphic.LinearGradient(
            //                 0, 0, 0, 1,
            //                 [
            //                     {offset: 0, color: '#D95CFF'},
            //                     {offset: 1, color: 'transparent'}
            //                 ]
            //             )
            //         }
          color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [
              { offset: 0, color: COLOR_LIST[index] },
              // { offset: 0.5, color: COLOR_LIST[index] },
              { offset: 1, color: '#0A1126' }
            ]
          ),

            // shadowBlur: 12,
            shadowColor: COLOR_LIST[index]
          }
        }
      })
    },
  ]
}

/**
 * 表头
 */
const HEADER_LIST = [
  '项目名称',
  'CPU消耗',
  '内存消耗',
  '存储使用',
  '占比',
  '趋势'
]

/**
 * 表格数据
 */
const TABLE_DATA = [
  {
    name: '实时数据同步平台',
    cpu: '36核',
    memory: '128GB',
    storage: '432GB',
    percent: '18.5%',
    trend: '12.3%',
    trendClass: 'text-[#FF8C5A]',
    progressClass:
      'bg-[linear-gradient(90deg,#4E6BFF_0%,#4BA3FF_100%)]'
  },
  {
    name: 'AI模型训练集群',
    cpu: '28核',
    memory: '96GB',
    storage: '380GB',
    percent: '15.2%',
    trend: '5.1%',
    trendClass: 'text-[#7BFF92]',
    progressClass:
      'bg-[linear-gradient(90deg,#4E6BFF_0%,#4BA3FF_100%)]'
  },
  {
    name: '大数据分析引擎',
    cpu: '24核',
    memory: '80GB',
    storage: '310GB',
    percent: '13.8%',
    trend: '12.3%',
    trendClass: 'text-[#FFB25A]',
    progressClass:
      'bg-[linear-gradient(90deg,#F8FF72_0%,#D8FF55_100%)]'
  },
  {
    name: '容器化微服务平台',
    cpu: '20核',
    memory: '72GB',
    storage: '260GB',
    percent: '11.4%',
    trend: '2.4%',
    trendClass: 'text-[#7BFF92]',
    progressClass:
      'bg-[linear-gradient(90deg,#F8FF72_0%,#D8FF55_100%)]'
  }
]


// /**
//  * 柱状图
//  */
// const initBarChart = () => {
//   if (!barRef.value) return;

//   const chart = echarts.init(barRef.value);

//   chart.setOption();

//   chartList.push(chart);
// };

/**
 * 折线图
 */
const initLineChart = () => {
  if (!lineRef.value) return;

  const chart = echarts.init(lineRef.value);

  chart.setOption({
    tooltip: {
      trigger: 'axis',
    },

    grid: {
      top: 30,
      left: 20,
      right: 20,
      bottom: 20,
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      data: ['06.01', '06.02', '06.03', '06.04', '06.05'],
      axisLabel: {
        color: '#9fc4ff',
      },
      axisLine: {
        lineStyle: {
          color: '#4f7fcc',
        },
      },
    },

    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.06)',
        },
      },
      axisLabel: {
        color: '#9fc4ff',
      },
    },

    series: [
      {
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [120, 180, 90, 210, 160],
        lineStyle: {
          width: 3,
          color: '#63dbff',
        },
        itemStyle: {
          color: '#63dbff',
        },
        areaStyle: {
          color: 'rgba(99,219,255,.18)',
        },
      },
    ],
  });

  chartList.push(chart);
};

/**
 * 中国地图
 */
const initMapChart = () => {
  if (!mapRef.value) return;

  echarts.registerMap('china', chinaJson as any);

  const chart = echarts.init(mapRef.value);

  // 城市坐标
  const CITY_COORDINATES = {
    陕西: [108.95, 34.27],

    北京: [116.40, 39.90],

    河南: [113.62, 34.75], // 郑州

    江苏: [118.78, 32.04], // 南京

    广东: [113.27, 23.13], // 广州
  };

  // 连线数据（陕西 -> 其他城市）
  const LINE_DATA = [
    {
      fromName: '陕西',
      toName: '北京',
      coords: [CITY_COORDINATES.陕西, CITY_COORDINATES.北京],
    },
    {
      fromName: '陕西',
      toName: '河南',
      coords: [CITY_COORDINATES.陕西, CITY_COORDINATES.河南],
    },
    {
      fromName: '陕西',
      toName: '江苏',
      coords: [CITY_COORDINATES.陕西, CITY_COORDINATES.江苏],
    },
    {
      fromName: '陕西',
      toName: '广东',
      coords: [CITY_COORDINATES.陕西, CITY_COORDINATES.广东],
    },
  ];

  const COLOR_LIST = [
    '#afa3f5',
    '#00d488',
    '#3feed4',
    '#3bafff',
    '#f1bb4c',
    '#aff',
  ];

  // 需要显示名称的地区
  const SHOW_NAME_LIST = ['陕西', '北京', '河南', '江苏', '广东'];

  chart.setOption({
    geo: {
      map: 'china',

      aspectScale: 0.75,
      zoom: 1.1,
      roam: false,

      itemStyle: {
        normal: {
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,

            colorStops: [
              {
                offset: 0,
                color: '#1B2B54',
              },
              {
                offset: 1,
                color: '#1B2B54',
              },
            ],

            globalCoord: true,
          },

          shadowColor: '#77EDBB',
          shadowOffsetX: 10,
          shadowOffsetY: 11,
        },

        emphasis: {
          borderWidth: 0,

          label: {
            show: false,
          },
        },
      },

      // 默认高亮陕西
      regions: [
        {
          name: '陕西',

          itemStyle: {
            areaColor: {
              type: 'linear',

              x: 0,
              y: 0,
              x2: 1,
              y2: 1,

              colorStops: [
                {
                  offset: 0,
                  color: '#00F0FF',
                },
                {
                  offset: 1,
                  color: '#00FFB3',
                },
              ],
            },

            shadowBlur: 20,
            shadowColor: 'rgba(0,255,179,.7)',
          },

          label: {
            color: 'red'
          },
        },

        {
          name: '南海诸岛',

          itemStyle: {
            areaColor: 'rgba(0, 10, 52, 1)',

            borderColor: 'rgba(0, 10, 52, 1)',

            normal: {
              opacity: 0,

              label: {
                show: false,
                color: '#009cc9',
              },
            },
          },
        },
      ],
    },

    series: [
      // 地图
      {
        type: 'map',

        map: 'china',

        roam: false,

        // 默认选中陕西（陕西）
        selectedMode: 'single',

        data: [
          {
            name: '陕西',
            selected: true,
          },
        ],

        label: {
          normal: {
            show: true,

            formatter: ({ name }) => {
              // return SHOW_NAME_LIST.includes(name) ? name : '';
              return ''
            },

            // 地区名称偏移
            offset: [0, px(18)],

            textStyle: {
              color: '#7D9AB3',
              fontSize: px(2),
            },
          },

          emphasis: {
            show: false,

            textStyle: {
              color: 'red',
            },
          },
        },

        itemStyle: {
          normal: {
            borderColor: '#284B72',
            borderWidth: 1,

            areaColor: {
              type: 'radial',

              x: 0.5,
              y: 0.5,
              r: 0.8,

              colorStops: [
                {
                  offset: 0,
                  color: '#1B2B54',
                },
                {
                  offset: 1,
                  color: '#1B2B54',
                },
              ],

              globalCoord: true,
            },
          },

          emphasis: {
            areaColor: {
              type: 'linear',

              x: 0,
              y: 0,
              x2: 0,
              y2: 1,

              colorStops: [
                {
                  offset: 0,
                  color: '#7D9AB3',
                },
                {
                  offset: 1,
                  color: '#00FFB3',
                },
              ],

              globalCoord: false,
            },

            borderWidth: 0.1,
          },
        },

        // 选中态样式
        select: {
          disabled: false,

          label: {
            color: '#fff',
            fontWeight: 'bold',
          },

          itemStyle: {
            areaColor: {
              type: 'linear',

              x: 0,
              y: 0,
              x2: 1,
              y2: 1,

              colorStops: [
                {
                  offset: 0,
                  color: '#00E5FF',
                },
                {
                  offset: 1,
                  color: '#00FFB3',
                },
              ],
            },

            shadowBlur: 25,
            shadowColor: 'rgba(0,255,179,.8)',
          },
        },

        zoom: 1.1,
      },

      // 飞线
      {
        type: 'lines',

        coordinateSystem: 'geo',

        zlevel: 2,

        effect: {
          show: true,

          symbol: 'arrow',

          symbolSize: 6,

          trailLength: 0.2,

          color: '#79BA96',
        },

        lineStyle: {
          color: '#79BA96',

          width: 2,

          opacity: 0.7,

          curveness: 0.3,
        },

        data: LINE_DATA,
      },

      // 图片点位
      {
        type: 'scatter',

        coordinateSystem: 'geo',

        zlevel: 3,

        rippleEffect: {
          brushType: 'stroke',
        },

        symbol:
          'image://data:image/png;base64,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',

        symbolSize: [px(50), px(80)],

        symbolOffset: [0, px(-20)],

        itemStyle: {
          color: '#fff',
        },

        label: {
          show: true,

          position: 'bottom',

          // 名称偏移
          offset: [0, px(-5)],

          formatter: ({ name }) => name,

          color: '#BDEFFF',

          fontSize: px(12),
        },

        data: [
          {
            name: '陕西',
             label: {
              color: '#FFFFFF',
              fontWeight: 700,

               // 名称偏移
              offset: [0, px(15)],

              fontSize: px(14),
            },
            value: [...CITY_COORDINATES.陕西, 100],
          },
          {
            name: '北京',
            value: [...CITY_COORDINATES.北京, 100],
          },
          {
            name: '河南',
            value: [...CITY_COORDINATES.河南, 100],
          },
          {
            name: '江苏',
            value: [...CITY_COORDINATES.江苏, 100],
          },
          {
            name: '广东',
            value: [...CITY_COORDINATES.广东, 100],
          },
        ],
      },
    ],
  });

  chartList.push(chart);
};
/**
 * 大环图
 */
const initRingChart = () => {
  if (!ringRef.value) return;

  const chart = echarts.init(ringRef.value);

  chart.setOption({
    tooltip: {
      trigger: 'item',
    },

    legend: {
      bottom: 0,
      textStyle: {
        color: '#b8d4ff',
      },
    },

    series: [
      {
        type: 'pie',
        radius: ['58%', '78%'],
        center: ['50%', '42%'],
        avoidLabelOverlap: false,

        label: {
          color: '#ffffff',
        },

        data: [
          {
            value: 1800,
            name: '全文',
          },
          {
            value: 900,
            name: '企业',
          },
          {
            value: 500,
            name: '水务',
          },
        ],
      },
    ],
  });

  chartList.push(chart);
};

const option1 = {
  grid: {
    top: 0,
    left: px(50),
    right: px(50),
    bottom: px(30),
  },

  xAxis: {
    type: 'value',

    axisLabel: {
      color: '#9C9C9c',
      fontSize: px(10)
    },

    // 底部线
    axisLine: {
      show: true,
      lineStyle: {
        color: '#4B6598',
        width: 1,
      },
    },

    // 不显示刻度
    axisTick: {
      show: false,
    },

    splitLine: {
      show: false
    },
  },

  yAxis: {

    type: 'category',

    data: ['World', 'China', 'India', 'USA', 'England'],

    axisLabel: {
      color: '#9C9C9c',
      fontSize: px(10)
    },

    // 左边线
    axisLine: {
      show: true,
      lineStyle: {
        color: '#4B6598',
        width: 1,
      },
    },

    // 不显示刻度
    axisTick: {
      show: false,
    },
  },

  series: [
    {
      type: 'bar',

      data: [230, 210, 180, 120, 90].reverse(),

      barWidth: px(7),

      itemStyle: {
        // 边框宽度
        borderWidth: 1,

        // 渐变边框
        borderColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#0090FF',
            },
            {
              offset: 1,
              color: '#001559',
            },
          ],
        },
        color: (params: any) => {
          // 特殊柱子
          if (params.dataIndex === 1) {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: '#00FFD8',
                },
                {
                  offset: 1,
                  color: '#004959',
                },
              ],
            };
          }

          // 默认渐变
          return {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#0090FF',
              },
              {
                offset: 1,
                color: '#001559',
              },
            ],
          };
        },
      },
    },
  ],
};



const option2 = {
  grid: {
    left: '6%',
    right: '6%',
    top: '24%',
    bottom: '6%',
    containLabel: true,
  },

  tooltip: {
    show: false
  },

  // ✅ legend 放顶部横向排列
  legend: {
    left: 'left',

    orient: 'horizontal',

    data: ['签约合同额', '已回款金额'],

    itemWidth: px(5),
    itemHeight: px(5),
    icon: 'rect',

    textStyle: {
      color: '#BDEFFF',
      fontSize: px(11),
    },
  },

  xAxis: {
    type: 'category',

    data: ['06.01', '06.02', '06.03', '06.04'],

    boundaryGap: false,

    axisLine: {
      lineStyle: {
        color: '#9EF7FF',
      },
    },

    axisTick: {
      show: false,
    },

    axisLabel: {
      color: '#A9B4DF',
      fontSize: px(12),
    },
  },

  yAxis: {
    type: 'value',

    min: 0,
    max: 200,
    interval: 50,

    axisLine: {
      show: false,
    },

    axisTick: {
      show: false,
    },

     axisLabel: {
      color: '#A9B4DF',
      fontSize: px(12),
    },

    splitLine: {
      lineStyle: {
        color: 'rgba(30,70,110,0.35)',
        type: 'dashed',
      },
    },
  },

  series: [
    {
      name: '签约合同额',

      type: 'line',
      symbol: 'none',
      smooth: false,

      itemStyle: {
        color: '#1727FF',
      },
      lineStyle: {
        width: 2,
        color: '#2B57FF',
      },

      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,

          colorStops: [
            {
              offset: 0,
              color: 'rgba(43, 87, 255, .5)',
            },
            {
              offset: 1,
              color: 'rgba(42,108,184,0)',
            },
          ],
        },
      },

      data: [90, 140, 95, 145],

      // ✅ markPoint 放到 95 位置
      markPoint: {
        symbol: 'circle',

        symbolSize: 18,

        data: [
          {
            coord: ['06.03', 95],

            itemStyle: {
              // 中间圆渐变
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,

                colorStops: [
                  {
                    offset: 0,
                    color: '#18235D',
                  },
                  {
                    offset: 1,
                    color: '#18235D',
                  },
                ],
              },

              // 渐变边框
              borderWidth: px(3),

              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,

                colorStops: [
                  {
                    offset: 0,
                    color: '#41FF07',
                  },
                  {
                    offset: 1,
                    color: '#2AFF84',
                  },
                ],
              },
            },

            label: {
              show: true,

              position: 'top',

              distance: 10,


              formatter: '{a|92}',

              rich: {
                a: {
                  color: '#88D6A3',

                  fontSize: px(16),

                  fontWeight: 'bold',

                  textShadowBlur: 2,

                  textShadowColor: '#fff'
                }
              }
            },
          },
           {
              coord: ['06.03', 95],

              symbol: 'circle',

              symbolSize: px(5),

              silent: true,

              itemStyle: {
                 // 中间圆渐变
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,

                colorStops: [
                  {
                    offset: 0,
                    color: '#41FF07',
                  },
                  {
                    offset: 1,
                    color: '#00FFC6',
                  },
                ],
              },

              }
            }
        ],
      },
    },

    {
      name: '已回款金额',

      type: 'line',

      smooth: false,

      symbol: 'none',

      symbolSize: 6,

      lineStyle: {
        width: 2,
        color: '#5bc0de',
      },

      itemStyle: {
        color: '#5bc0de',
      },

      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,

          colorStops: [
            {
              offset: 0,
              color: 'rgba(91,192,222,.5)',
            },
            {
              offset: 1,
              color: 'rgba(0,210,255,0)',
            },
          ],
        },
      },

      data: [175, 105, 80, 115],
    },
  ],
};

const option3 = {
  "backgroundColor": {
    "type": "linear",
    "x": 0,
    "y": 0,
    "x2": 0,
    "y2": 1,
    "colorStops": [
      { "offset": 0, "color": "#091526" },
      { "offset": 1, "color": "#0c1f38" }
    ]
  },
  "tooltip": {
    "trigger": "item",
    "backgroundColor": "rgba(10,30,50,0.9)",
    "borderColor": "#1a3a5c",
    "textStyle": { "color": "#8cb5d6" },
    "formatter": "{b}: {d}%"
  },
  "legend": {
    "data": ["国企央企", "政府"],
    "top": "10%",
    "left": "center",
    "textStyle": { "color": "#8cb5d6", "fontSize": 12 },
    "itemWidth": 12,
    "itemHeight": 12,
    "itemGap": 24
  },
  "series": [
    {
      "type": "pie",
      "radius": ["45%", "70%"],
      "center": ["50%", "55%"],
      "avoidLabelOverlap": false,
      "itemStyle": {
        "borderRadius": 0,
        "borderColor": "#091526",
        "borderWidth": 2
      },
      "label": { "show": false },
      "labelLine": { "show": false },
      "data": [
        {
          "value": 85,
          "name": "国企央企",
          "itemStyle": { "color": "#1a4a8a" },
          "label": {
            "show": true,
            "position": "center",
            "formatter": "85%",
            "fontSize": 28,
            "fontWeight": "bold",
            "color": "#fff"
          }
        },
        {
          "value": 15,
          "name": "政府",
          "itemStyle": { "color": "#4ecb73" }
        }
      ]
    }
  ]
}

/**
 * 趋势图
 */
const initTrendChart = () => {
  if (!trendRef.value) return;

  const chart = echarts.init(trendRef.value);

  chart.setOption({
    tooltip: {
      trigger: 'axis',
    },

    legend: {
      right: 0,
      textStyle: {
        color: '#b8d4ff',
      },
    },

    grid: {
      top: 40,
      left: 20,
      right: 20,
      bottom: 20,
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      data: ['06.01', '06.02', '06.03', '06.04'],
      axisLabel: {
        color: '#9fc4ff',
      },
    },

    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#9fc4ff',
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.06)',
        },
      },
    },

    series: [
      {
        name: '签约金额',
        type: 'line',
        smooth: true,
        data: [80, 150, 120, 180],
      },
      {
        name: '回款金额',
        type: 'line',
        smooth: true,
        data: [60, 90, 140, 120],
      },
    ],
  });

  chartList.push(chart);
};

/**
 * 小环图
 */
const initPieCharts = () => {
  pieRefs.value.forEach((el) => {
    const chart = echarts.init(el);

    chart.setOption({
      series: [
        {
          type: 'pie',
          radius: ['65%', '82%'],

          label: {
            show: false,
          },

          data: [
            {
              value: 70,
              itemStyle: {
                color: '#58c9ff',
              },
            },
            {
              value: 30,
              itemStyle: {
                color: 'rgba(255,255,255,.08)',
              },
            },
          ],
        },
      ],
    });

    chartList.push(chart);
  });
};

// 数据
const DATA1 = [
  { value: 85, name: '政府' },
  { value: 15, name: '国央企' }
];
const COLOR_LIST1= [ '#2B57FF','#0BFF44']
const option6 = {
  tooltip: {
    trigger: 'item',
  },

  // ========================
  // legend
  // ========================
  legend: {
    top: 0,
    left: 0,

    orient: 'horizontal',

    itemWidth: px(5),
    itemHeight: px(5),

    icon: 'rect',

    textStyle: {
      color: '#BDEFFF',
      fontSize: px(12),
    },

    data: DATA1.map(item => item.name),
  },

  // ========================
  // 中间文字
  // ========================
  title: {
    text: '85%',

    x: 'center',
    bottom: px(32),

    textStyle: {
      fontWeight: 600,
      fontSize: px(14),
      color: '#FFFFFF',
    },
  },

  series: [
    // ========================
    // 背景环
    // ========================
    {
      type: 'pie',

      radius: ['86%', '38%'],
      center: ['50%', '58%'],

      silent: true,

      z: 1,

      label: {
        show: false,
      },

      labelLine: {
        show: false,
      },

      data: [
        {
          value: 100,

          itemStyle: {
            color: 'rgba(3,18,29,.4)',

            borderColor: 'rgba(32,58,96,1)',
            borderWidth: 2,
            borderJoin: 'round',

            shadowBlur: 20,
            shadowColor: 'rgba(24,35,59,0.6)',
          },
        },
      ],
    },

    // ========================
    // 外层描边环
    // ========================
    {
      type: 'pie',

      radius: ['78%', '60%'],
      center: ['50%', '58%'],

      z: 2,

      label: {
        show: false,
      },

      labelLine: {
        show: false,
      },

      data: DATA1.map((item, index) => ({
        ...item,

        itemStyle: {
          color: COLOR_LIST1[index],
        },
      })),
    },

    // ========================
    // 内层填充饼图
    // ========================
    {
      type: 'pie',

      radius: ['0%', '60%'],
      center: ['50%', '58%'],

      // minAngle: 6,

      // z: 3,

      label: {
        show: false,
      },

      labelLine: {
        show: false,
      },

      data: DATA1.map((item, index) => ({
        ...item,

        itemStyle: {
          borderColor:
            index === 0
              ? COLOR_LIST1[index]
              : 'transparent',

          borderWidth: 2,



          color: {
            type: 'linear',

            x: 0,
            y: 0,
            x2: 1,
            y2: 1,

            colorStops: [
              {
                offset: 0,
                color: 'rgba(255,255,255,0.08)',
              },
              {
                offset: 1,
                color: 'rgba(255,255,255,0.18)',
              },
            ],
          },

          shadowBlur: index === 0 ? 10 : 0,

          shadowColor:
            index === 0
              ? COLOR_LIST1[index]
              : 'transparent',
        },
      })),
    },
  ],
};

onMounted(() => {
  initCharts();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCharts);

  chartList.forEach((chart) => {
    chart.dispose();
  });
});

const popup = reactive({
  visible: false,
  name: '',
  info: '',
  top: 0,
  left: 0,
});

const showPopup = (params) => {
  const { name, value } = params; // value是[lon, lat, val]

  // 获取地图容器位置
  const rect = mapRef.value.getBoundingClientRect();

  // ECharts 内坐标 -> 容器内像素坐标
  // const point = chart.convertToPixel({ geoIndex: 0 }, [value[0], value[1]]);
  
  let top = point[1];
  let left = point[0] + 10; // 弹窗在右边偏移 10px

  // 边界处理
  const popupWidth = 200;  // 假设宽度
  const popupHeight = 120; // 假设高度

  if (left + popupWidth > rect.width) {
    left = point[0] - popupWidth - 10; // 超出右边界改为左边
  }

  if (top + popupHeight > rect.height) {
    top = rect.height - popupHeight; // 超出下边界
  }

  popup.visible = true;
  popup.top = top;
  popup.left = left;
  popup.name = name;
  popup.info = `人口: ${value[2]}`; // 这里可自定义显示内容
};
</script>

<template>
  <div class="overflow-hidden bg-cover h-screen flex flex-col relative" :style="{
    backgroundImage:  `url(${bg})`,
    backgroundRepeat: 'no-repeat'
  }">

  <!-- 弹窗 -->
  <div 
    v-if="popup.visible" 
    :style="{
      top: popup.top + 'px',
      left: popup.left + 'px'
    }"
    class="absolute bg-white text-black p-4 rounded shadow-lg z-50"
  >
    <h3 class="font-bold">{{ popup.name }}</h3>
    <p>一些信息：{{ popup.info }}</p>
  </div>

  <!-- 顶部 -->
  <header
    class="relative h-[60dh] flex items-center justify-center"
     :style="{
      backgroundImage:  `url(${titleBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }"
  >
    <div
      class="text-[26dp] text-[#E1EFFF] font-bold space-block tracking-[1em]"
      style="text-shadow: 0 17px 18px rgb(2 4 8 / 35%);
background: linear-gradient(0deg, #FFF 0%);
background-clip: text;
-webkit-text-fill-color: transparent;"
    >
      中交数擎
    </div>

    <div
      class="absolute bottom-0 left-1/2 h-[2dp] w-[260dp] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#4da3ff,transparent)]"
    />
  </header>

  <!-- 主体 -->
  <main class="box-border flex flex-1 overflow-hidden gap-[20dh] p-[20dh] pt-0!">
    <!-- 左侧 -->
    <section class="w-[480dp] flex flex-col justify-between">
      <!-- 经营总览 -->
      <div
        class="border border-solid border-[#00476E]"
        :style="{
          background: `linear-gradient(0deg, rgba(0,71,110,.2) 0%, rgba(4,41,61,0.1) 90%)`
        }"
      >
        <PanelTitle title="经营总览" />

        <div class="mt-[16dh] flex flex-col gap-[4dp]  pl-[8dp]">
          <div
            class="h-[39dh] flex items-center justify-between pl-[2dp] pr-[50dp]"
            :style="{
              backgroundImage: `url(${zlBg})`,
              backgroundSize: '100% 100%'
            }"
          >
            <div class="flex items-center gap-[4dp]">
              <img class=" w-[35dp] h-[37dp]" :src="overviewList[0].icon" alt="">

              <div class="text-[16dp] text-[#7D9AB3] flex items-center ml-[20dp]">
                <span>新签合同额</span>
                <span class="font-[albb] mx-[8dp] text-[20dp] font-bold bg-[linear-gradient(0deg,#A6FFFE_0%,#A6FFFE_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">1,280</span>
                <span>万元</span>
              </div>
            </div>

            <div class="flex items-center text-[16dp]">
              <el-icon class="text-[22dp]! text-#47FF7B!"><Top /></el-icon>

              <div class="text-[16dp] text-[#C3E1FB] mx-[4dp]">同比</div>

              <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[20dp] text-[#8eb6ff] font-bold">89</div>
              <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[16dp] text-[#8eb6ff] font-bold">%</div>
            </div>
          </div>
           <div
            class="h-[39dh] flex items-center justify-between pl-[2dp] pr-[40dp]"
            :style="{
              backgroundImage: `url(${zlBg})`,
              backgroundSize: '100% 100%'
            }"
          >
            <div class="flex items-center gap-[4dp]">
              <!-- <div
                class="h-[28dp] w-[28dp] border border-solid border-[#5ab0ff] bg-[rgba(90,176,255,.15)]"
              /> -->
              <img class="h-[37dh] w-[35dp]" :src="overviewList[1].icon" alt="">

              <div class="text-[16dp] text-[#7D9AB3] flex items-center ml-[20dp]">
                <span>累计中标额</span>
                <span class="font-[albb] mx-[8dp] text-[20dp] font-bold bg-[linear-gradient(0deg,#FFCCA6_0%,#FFCCA6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">980</span>
                <span>万元</span>
              </div>
            </div>

            <div class="flex items-center text-[16dp]">
              <div class="text-[16dp] text-[#C3E1FB] mx-[4dp]">目标完成率</div>

              <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[20dp] text-[#8eb6ff] font-bold">64</div>
              <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[16dp] text-[#8eb6ff] font-bold">%</div>

            </div>
          </div>

            <div
             class="h-[39dh] flex items-center justify-between pl-[2dp] pr-[40dp]"
            :style="{
              backgroundImage: `url(${zlBg})`,
              backgroundSize: '100% 100%'
            }"
          >
            <div class="flex items-center gap-[4dp]">
              <!-- <div
                class="h-[28dp] w-[28dp] border border-solid border-[#5ab0ff] bg-[rgba(90,176,255,.15)]"
              /> -->
              <img class="h-[37dp] w-[35dp]" :src="overviewList[2].icon" alt="">

              <div class="text-[16dp] text-[#7D9AB3] flex items-center ml-[20dp]">
                <span>中标数量</span>
                <span class="mx-[8dp] text-[20dp] font-bold bg-[linear-gradient(0deg,#A6C8FF_0%,#A6C8FF_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">18</span>
                <span>个</span>
              </div>
            </div>

            <div class="flex items-center text-[16dp]">
              <el-icon class="text-[22dp]! text-#47FF7B!"><Top /></el-icon>

              <div class="text-[16dp] text-[#C3E1FB] mx-[4dp]">同比</div>

              <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[20dp] text-[#8eb6ff] font-bold">50</div>
              <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[16dp] text-[#8eb6ff] font-bold">%</div>
            </div>
          </div>

          
            <div
              class="h-[39dh] flex items-center justify-between pl-[2dp] pr-[40dp]"
            :style="{
              backgroundImage: `url(${zlBg})`,
              backgroundSize: '100% 100%'
            }"
          >
            <div class="flex items-center gap-[4dp]">
              <!-- <div
                class="h-[28dp] w-[28dp] border border-solid border-[#5ab0ff] bg-[rgba(90,176,255,.15)]"
              /> -->
              <img class="h-[37dp] w-[35dp]" :src="overviewList[3].icon" alt="">

              <div class="text-[16dp] text-[#7D9AB3] flex items-center ml-[20dp]">
                <span>发展项目</span>
                <span class="mx-[8dp] text-[20dp] font-bold bg-[linear-gradient(0deg,#FF6C32_0%,#FF6C32_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">24</span>
                <span>个</span>
              </div>
            </div>

            <div class="flex items-center text-[16dp] text-[#7D9AB3]">
              <span class="text-[16dp] text-[#C3E1FB]">同比</span>
              <span class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[20dp] text-[#8eb6ff] font-bold">15</span><span>个</span>
              <span class="text-[16dp] text-[#C3E1FB]">/待启动</span>
              <span class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[20dp] text-[#8eb6ff] font-bold">9</span><span>个</span>
            </div>
          </div>
        </div>

        <!-- 柱状图 -->
         <div  class="mt-[8dp] h-[160dh] w-full">
           <ChartView ref="barRef" :option="barOptions" />
         </div>

        <!-- 环图 -->
        <div class="mt-[8dh] grid grid-cols-3">
            <div
                v-for="(_, index) in 3"
                :key="index"
                class="h-[98dh]"
              >
              <div class="h-[98dh]">
                <ChartView :option="pieOptions" />
              </div>
          </div>
        </div>
      </div>

      <!-- 数据资源 -->
      <div
        class="border border-solid border-[#00476E]"
        :style="{
          background: `linear-gradient(0deg, rgba(0,71,110,.2) 0%, rgba(4,41,61,0.1) 90%)`
        }"
      >
        <PanelTitle title="数据资源" />

        <div class="mt-[8dp] grid grid-cols-2 gap-[8dp] px-[8dp]">
          <!-- <div
            v-for="item in resourceList"
            :key="item.title"
            class="rounded-[12dp] border border-solid border-[rgba(90,156,255,.2)] bg-[rgba(18,51,126,.42)] p-[14dp]"
          >
            <div class="text-[30dp] font-700 text-[#ffd76d]">
              {{ item.value }}
            </div>

            <div class="mt-[8dp] text-[16dp] text-[#b3d3ff]">
              {{ item.title }}
            </div>

            <div class="mt-[4dp] text-[13dp] text-[#82aaf5]">
              使用总量 2634.5 万次
            </div>
          </div> -->

           <div
            class="flex items-center rounded-[26dp]
              bg-[linear-gradient(90deg,rgba(106,36,12,0.9)_12%,rgba(38,32,45,0.2)_100%)]"
          >
            <!-- 左侧 -->
            <div
              class="relative w-[66dp] h-[48dh] flex items-center justify-center rounded-[26dp] bg-#864A2F"
            >
              <div class="text-[16dp] font-600 text-[#FFE7CE]">
                44亿
              </div>

              <!-- 弧形装饰 -->
                <div
                class="absolute top-0 h-[46dp] w-[42dp] right-0
                      rounded-r-[40dp]
                      border-r-1px border-r-solid border-l-[rgba(255,231,206,0.35)]
                      blur-0.5px"
              />
            </div>

            <!-- 右侧 -->
            <div class="ml-[8dp]">
              <div class="text-[14dp] font-500 text-[#d6d9e0]">
                工商企业数据
              </div>
            </div>
          </div>
           <div
            class="flex items-center rounded-[26dp]
              bg-[linear-gradient(90deg,rgba(0,54,96,0.85)_12%,rgba(38,32,45,0.2)_100%)]"
          >
            <!-- 左侧 -->
            <div
              class="relative w-[66dp] h-[48dh] flex items-center justify-center rounded-[26dp] bg-#1B5284"
            >
              <div class="text-[16dp] font-600 text-[#7D9AB3]">
                953万
              </div>

              <!-- 弧形装饰 -->
                <div
                class="absolute top-0 h-[46dp] w-[42dp] right-0
                      rounded-r-[40dp]
                      border-r-1px border-r-solid border-l-[rgba(69,120,202,1)]
                      blur-0.5px"
              />
            </div>

            <!-- 右侧 -->
            <div class="ml-[8dp]">
              <div class="text-[14dp] font-500 text-[#ABD8FF]">
                公招市场数据
              </div>

              <!-- <div class="mt-[2dp] text-[12dp] text-#FFD7C7">
                使用总量
                <span class="font-700 text-[#FE9871] ml-[4dp]">
                  2643.45
                </span>
                万次
              </div> -->
            </div>
          </div>

           <div
            class="flex items-center rounded-[26dp]
              bg-[linear-gradient(90deg,rgba(106,36,12,0.9)_12%,rgba(38,32,45,0.2)_100%)]"
          >
            <!-- 左侧 -->
            <div
              class="relative w-[66dp] h-[48dh] flex items-center justify-center rounded-[26dp] bg-#864A2F"
            >
              <div class="text-[16dp] font-600 text-[#FFE7CE]">
                278万
              </div>

              <!-- 弧形装饰 -->
                <div
                class="absolute top-0 h-[46dp] w-[42dp] right-0
                      rounded-r-[40dp]
                      border-r-1px border-r-solid border-l-[rgba(255,231,206,0.35)]
                      blur-0.5px"
              />
            </div>

            <!-- 右侧 -->
            <div class="ml-[8dp]">
              <div class="text-[14dp] font-500 text-[#d6d9e0]">
                土地数据
              </div>

              <!-- <div class="mt-[2dp] text-[12dp] text-#FFD7C7">
                使用总量
                <span class="font-700 text-[#FE9871] ml-[4dp]">
                  2643.45
                </span>
                万次
              </div> -->
            </div>
          </div>

           <div
            class="flex items-center rounded-[26dp]
              bg-[linear-gradient(90deg,rgba(0,54,96,0.85)_12%,rgba(38,32,45,0.2)_100%)]"
          >
            <!-- 左侧 -->
            <div
              class="relative w-[66dp] h-[48dh] flex items-center justify-center rounded-[26dp] bg-#1B5284"
            >
              <div class="text-[16dp] font-600 text-[#7D9AB3]">
                69万
              </div>

              <!-- 弧形装饰 -->
                <div
                class="absolute top-0 h-[46dp] w-[42dp] right-0
                      rounded-r-[40dp]
                      border-r-1px border-r-solid border-l-[rgba(69,120,202,1)]
                      blur-0.5px"
              />
            </div>

            <!-- 右侧 -->
            <div class="ml-[8dp]">
              <div class="text-[14dp] font-500 text-[#ABD8FF]">
                政策数据
              </div>

              <!-- <div class="mt-[2dp] text-[12dp] text-#FFD7C7">
                使用总量
                <span class="font-700 text-[#FE9871] ml-[4dp]">
                  2643.45
                </span>
                万次
              </div> -->
            </div>
          </div>
        </div>

        <div class="mt-[8dp] grid grid-cols-2 gap-[4dp] px-[8dp]">
          <div class="px-[8dp] py-[4dh] bg-#03121D rounded-[4dp]  border-solid border-1px border-#0D4F9A">
            <div class="flex items-baseline">
              <img class="h-[19dh]" src="./assets/images/sj-icon.png" />
              <div class="text-#C3E1FB text-[16dp] ml-[4dp]">数据采集接口数量</div>
            </div>

            <div class="flex items-end justify-between">
              <!-- <div class="text-#E8F4FF text-[20dp] font-bold">76.2%</div> -->

              <div class="flex items-baseline">
                <div class="text-[14dp] text-#C3E1FB">数量共计</div>
                <div class="flex items-baseline ml-[4dp]">
                <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[20dp] text-[#8eb6ff] font-bold">33</div>
                <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[14dp] text-[#8eb6ff] font-bold">个</div>
                </div>
              </div>
            </div>
          </div>

          <div class="px-[8dp] py-[4dh] bg-#03121D rounded-[4dp]  border-solid border-1px border-#0D4F9A">
            <div class="flex items-baseline">
              <img class="h-[19dp]" src="./assets/images/ff-icon.png" />
              <div class="text-#C3E1FB text-[16dp] ml-[4dp]">数据分发接口数量</div>
            </div>

            <div class="flex items-end justify-between">
              <!-- <div class="text-#E8F4FF text-[20dp] font-bold">76.2%</div> -->

              <div class="flex items-baseline">
                <div class="text-[14dp] text-#C3E1FB">数量共计</div>
                <div class="flex items-baseline ml-[4dp]">
                  
                <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[20dp] text-[#8eb6ff] font-bold">164</div>
                <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[14dp] text-[#8eb6ff] font-bold">个</div>
                </div>
              </div>
            </div>
          </div>

              <div class="px-[8dp] py-[4dh] bg-#03121D rounded-[4dp]  border-solid border-1px border-#0D4F9A">
            <div class="flex items-center">
              <img class="h-[19dp]" src="./assets/images/day-icon.png" />
              <div class="text-#C3E1FB text-[16dp] ml-[4dp]">剩余可用容量</div>
            </div>

            <div class="flex items-end justify-between">

               <div class="flex items-center">
                <div class="flex items-baseline ml-[4dp]">
                  
                <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[20dp] text-[#8eb6ff] font-bold">5.72</div>
                <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[14dp] text-[#8eb6ff] font-bold">万次</div>
                </div>
              </div>
            </div>
          </div>

           <div class="px-[8dp] py-[4dh] bg-#03121D rounded-[4dp]  border-solid border-1px border-#0D4F9A">
            <div class="flex items-center">
              <img class="h-[19dp]" src="./assets/images/moth-icon.png" />

              <div class="text-#C3E1FB text-[16dp] ml-[4dp]">待审批申请</div>
            </div>

            <div class="flex items-end justify-between">
               <div class="flex items-center">
                <div class="flex items-baseline ml-[4dp]">
                  
                <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[20dp] text-[#8eb6ff] font-bold">278.73</div>
                <div class="bg-[linear-gradient(0deg,#BFDAF6_0%,#BFDAF6_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-[14dp] text-[#8eb6ff] font-bold">万次</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- 表格 -->
        <div class="mt-[10dh]">
           <SubTitle title="接口用量排名 TOP5" />
   
             <div class="w-full p-[8dp]">
       <div
             v-for="(item, index) in list"
             :key="index"
             class="mb-[10dh] flex items-center"
           >
             <!-- 排名 -->
             <div
               class="w-4em text-[10dp] font-700"
               :class="item.rankClass"
             >
               TOP{{ index + 1 }}
             </div>
   
             <!-- 名称 -->
             <div
               class="w-6em truncate text-[12dp] font-500 text-#ABCDE8"
             >
               {{ item.name }}
             </div>
   
             <!-- 进度条 -->
             <div class="relative mx-[20dp] h-[6dp] flex-1 rounded-full bg-#112F54 rounded-[4dp] overflow-hidden">
               <div
                 class="h-full rounded-full transition-all duration-300 rounded-[4dp]"
                 :style="{
                   width: `${item.percent}%`,
                   background: item.gradient
                 }"
               />
             </div>
   
             <!-- 数值 -->
             <div
               class="w-5em text-right text-[12dp] font-600 text-#98C5EA"
             >
               {{ item.value }}
             </div>
           </div>
         </div>
         </div>
      </div>
    </section>

    <!-- 中间地图 -->
    <section class="relative flex-1 overflow-hidden">
      <div
        class="relative h-full"
      >
        <div ref="mapRef" class="h-[78%] w-full" />

        <!-- 底部统计 -->
        <div class="absolute bottom-[30dh] left-0 right-0 flex justify-around">
          <div
            v-for="item in stats"
            :key="item.label"
            class="flex flex-col items-center w-full"
          >

            <div class="text-[34dp] font-700 text-[#5994FF] bg-gradient-to-b from-[#5994FF] to-white bg-clip-text text-transparent relative top-[30dp]">
              {{ item.value }}
            </div>

            <div class="w-full h-[137dp] flex flex-col justify-between items-center  pt-[30dp] flex-shrink-0" :style="{
              backgroundImage: `url(${centerIcon})`,
              backgroundSize: '100% 100%'
            }">
              <div class="font-semibold text-[20dp] 0 text-[#22FF75] bg-gradient-to-b from-[#22FF75] to-white bg-clip-text text-transparent">{{ item.add }}</div>
              <div class="text-[20dp] text-[#D3EBFF]">
                {{ item.label }}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 右侧 -->
   <section class="w-[480dp] flex flex-col justify-between">
      <div
        class="border border-solid border-[#00476E]"
        :style="{
          background: `linear-gradient(0deg, rgba(0,71,110,.2) 0%, rgba(4,41,61,0.1) 90%)`
        }"
      >
        <PanelTitle title="研发能力" />

        <div class="mt-[8dh] grid grid-cols-3">
          <div
            v-for="item in abilityList"
            :key="item.label"
            class="flex flex-col items-center justify-center"
          >
            <div class="text-[42dp] font-700 text-[#dce9ff] w-[102dp] h-[75dp] flex flex-col items-center" :style="{
              backgroundImage: `url(${yfBg})`,
              backgroundSize: '100% 100%'
            }">
                <div class="
                text-[24dp]
                leading-[15dp]
                bg-[linear-gradient(0deg,#96FBFF_0%,#ECF2FF_100%)]
                bg-clip-text
                text-transparent
                [-webkit-background-clip:text]
                [-webkit-text-fill-color:transparent]
                              ">{{ item.value }}</div>
                              <div class="w-[40dp] text-12px flex-center
                h-[24dh]
                bg-[rgba(28,223,209,0.2)]
                rounded-[12dp]
                border border-[#13CAB7] text-[16dp] text-[#19FFA0]">{{ item.tag }}</div>
            </div>

            <div class="mt-[4dp] text-[16dp] text-[#82A5C3]">
              {{ item.label }}
            </div>
          </div>
        </div>

        <!-- 核心产品矩阵 -->
        <div class="mt-[8dh]">
           <SubTitle title="核心产品矩阵" />

           <div class="grid grid-cols-3 mt-[10dh]">
             <div class="flex flex-col items-center">
               <div class="flex w-[130dp] items-center justify-center  text-[14dp]
   h-[25dp]
   bg-[linear-gradient(90deg,rgba(40,77,115,0.5)_0%)]
   rounded-[12dp]">
                 <div class="text-[14dp] font-bold bg-gradient-to-b from-[#FFC154] to-white bg-clip-text text-transparent">
  中交云储
</div>
                 <div class="text-[14dp] ml-[10dp] font-bold bg-gradient-to-b from-[#51FF9B] to-[rgba(255,255,255,0.91)] bg-clip-text text-transparent">v2.4</div>
               </div>
   
               <div class="text-#82A5C3 text-[14dp]">
                 供应链协同平台
               </div>
             </div>

             <div class="flex flex-col items-center">
               <div class="flex w-[130dp] items-center justify-center  text-[14dp]
   h-[25dp]
   bg-[linear-gradient(90deg,rgba(40,77,115,0.5)_0%)]
   rounded-[12dp]">
                 <div class="text-[14dp] font-bold bg-gradient-to-b from-[#FFC154] to-white bg-clip-text text-transparent">
  数擎平台
</div>
                 <div class="text-[14dp] ml-[10dp] font-bold bg-gradient-to-b from-[#51FF9B] to-[rgba(255,255,255,0.91)] bg-clip-text text-transparent">v1.8</div>
               </div>
   
               <div class="text-#82A5C3 text-[14dp]">
                 数擎中台引擎
               </div>
             </div>


             <div class="flex flex-col items-center">
               <div class="flex w-[130dp] items-center justify-center  text-[14dp]
   h-[25dp]
   bg-[linear-gradient(90deg,rgba(40,77,115,0.5)_0%)]
   rounded-[12dp]">
                 <div class="text-[14dp] font-bold bg-gradient-to-b from-[#FFC154] to-white bg-clip-text text-transparent">
  招商王
</div>
                 <div class="text-[14dp] ml-[10dp] font-bold bg-gradient-to-b from-[#51FF9B] to-[rgba(255,255,255,0.91)] bg-clip-text text-transparent">v3.1</div>
               </div>
   
               <div class="text-#82A5C3 text-[14dp]">
                 智能招商系统
               </div>
             </div>
           </div>
        </div>

        <!-- 研发赛道分布 -->
        <div class="mt-[8dh]">
           <SubTitle title="研发赛道分布" />
          <div class="flex items-center">
            <div class="w-[200dp] h-[166dh] relative">
              <ChartView :option="option"></ChartView>
              <div
                class="
                  absolute
                  left-1/2
                  top-[50dp]
                  -translate-x-1/2
                  flex
                  flex-col
                  items-center
                "
              >
                <!-- 金额 -->
                <div
                  class="
                    text-[14dp]
                    font-700
                    bg-gradient-to-b
                    from-[#fff]
                    to-#BDEFFF

                    bg-clip-text
                    text-transparent

                    drop-shadow-[0_0_12px_rgba(255,193,84,0.35)]
                  "
                >
                  1,800万元
                </div>

                <!-- 描述 -->
                <div
                  class="
                    text-[12dp]
                    text-[#82A5C3] leading-[15dp]
                  "
                >
                  系统研发经费
                </div>
              </div>
            </div>

            <div class="flex-1 w-full overflow-hidden">
              <div class="flex items-center px-[8dp]">
                <div class="grid items-center flex gap-[4dp] mr-[5dp]">
                  <div class="w-[2dp] h-[16dp] bg-#36FDFF"></div>
                  <div class="w-[2dp] h-[12dp] bg-#295067"></div>
                  <div class="w-[2dp] h-[16dp] bg-#295067"></div>
                </div>
                <div class="text-[16dp] font-bold    bg-gradient-to-t
                    from-[#fff]
                    to-#7CDCFF

                    bg-clip-text
                    text-transparent">全交通·智慧交通数字底座</div>
              </div>

              <div class="grid grid-cols-1 gap-[8dh] mt-[10dh]">
                <div
                  v-for="item in ['陕西市智慧交通数字底座方案设计咨询服务项目', '福建省两岸融合发展交通基础设施数字化转型项目', '福建省两岸融合发展交通基础设施数字化转型项目11']"
                  :key="item"
                  class="
                    flex
                    w-full
                    items-center
                    h-[30dh]
                    px-[8dp]

                    bg-[linear-gradient(90deg,rgba(158,233,255,0.05),rgba(0,255,180,0))]

                    border
                    border-transparent

                    [border-image:linear-gradient(0deg,#1E4F79)_1]
                  "
                >
                  <!-- 左侧装饰 -->
                  <div class="mr-[4dp] flex items-center gap-[4dp]">
                    <div class="h-[16dp] w-[2dp] bg-[#36FDFF]" />

                    <div class="h-[12dp] w-[2dp] bg-[#295067]" />

                    <div class="h-[16dp] w-[2dp] bg-[#295067]" />
                  </div>

                  <!-- 文字 -->
                  <div
                    class="
                      flex-1
                      truncate
                      text-[12dp]
                      text-[#7D9AB3]
                    "
                  >
                    {{ item }}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 客户分析 -->
      <div
      class="border border-solid border-[#00476E]"
        :style="{
          background: `linear-gradient(0deg, rgba(0,71,110,.2) 0%, rgba(4,41,61,0.1) 90%)`
        }"
      >
        <PanelTitle title="客户分析" />

        <div class="mt-[8dh] grid grid-cols-2 gap-[10dh] px-[8dp]">
          <div
            class="
            bg-[#03121D]
              rounded-[4dp]
              border
              border-solid
              border-[#0D4F9A]
              pb-[8dh] pt-[6dh] px-[12dp] bg-[rgba(3,18,29,.5)]"
              
          >
            <div class="text-[15dp] text-[#C3E1FB]">
              大客户累计合同额
            </div>

            <div class="flex justify-between items-baseline">
              <div class="flex items-baseline text-[18dp] text-[#FF7E28] font-bold">
                <div>8,650</div>
                <div class="ml-[4dp] text-[14dp]">万元</div>
              </div>
              <div class="text-[14dp] text-[rgba(195,225,251,.6)]">
                占总合同额<span class="font-bold">72%</span>
              </div>
            </div>
          </div>

             <div
            class="
            bg-[#03121D]
              rounded-[4dp]
              border
              border-solid
              border-[#0D4F9A]
              pb-[8dh] pt-[6dh] px-[12dp] bg-[rgba(3,18,29,.5)]"
              
          >
            <div class="text-[15dp] text-[#C3E1FB]">
              合作大客户数量
            </div>

            <div class="flex justify-between items-baseline">
              <div class="flex items-baseline text-[18dp] text-[#FF7E28] font-bold">
                <div>36</div>
                <div class="ml-[4dp] text-[14dp]">家</div>
              </div>
              <div class="text-[14dp] text-[rgba(195,225,251,.6)]">
                政府<span class="font-bold">21</span>家/国央企<span class="font-bold">15</span>家
              </div>
            </div>
          </div>

             <div
            class="
            bg-[#03121D]
              rounded-[4dp]
              border
              border-solid
              border-[#0D4F9A]
              pb-[8dh] pt-[6dh] px-[12dp] bg-[rgba(3,18,29,.5)]"
              
          >
            <div class="text-[15dp] text-[#C3E1FB]">
              平均单客合同额
            </div>

            <div class="flex justify-between items-baseline">
              <div class="flex items-baseline text-[18dp] text-[#FF7E28] font-bold">
                <div>240</div>
                <div class="ml-[4dp] text-[14dp]">万元</div>
              </div>
              <div class="flex items-baseline  text-[rgba(195,225,251,.6)]">
                <el-icon class="text-[22dp]! text-#47FF7B! relative top-[4dp]"><Top /></el-icon>
                <div class="text-[14dp] text-[rgba(195,225, 251,.6)]">
                  同比增长<span class="font-bold">28%</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="
            bg-[#03121D]
              rounded-[4dp]
              border
              border-solid
              border-[#0D4F9A]
              pb-[8dh] pt-[6dh] px-[12dp] bg-[rgba(3,18,29,.5)]"
              
          >  
            <div class="text-[15dp] text-[#C3E1FB]">
              大客户整体回款率
            </div>

            <div class="flex justify-between items-baseline  text-[rgba(195,225,251,.6)]">
              <div class="flex items-baseline text-[18dp] text-[#FF7E28] font-bold">
                <div>86</div>
                <div class="ml-[4dp] text-[14dp]">%</div>
              </div>
              <div class="text-[14dp] text-[rgba(195,225, 251,.6)]">
                高于行业平均<span class="font-bold">12</span>个百分点
              </div>
            </div>
          </div>
        </div>

        <!-- 横向柱状图 -->
        <div class="mt-[8dh]">
           <SubTitle title="大客户合同额 TOP10" />


          <div class="h-[138dh]  px-[8dp] mt-[4dh]">
          <ChartView :option="option1"/>
          </div>
        </div>

        <!-- 客户 -->
        <div class="flex">
          <div class="w-60%">
            <SubTitle title="大客户签约与回款占比" />


            <div class="h-[160dh]">
            <ChartView :option="option2"/>
            </div>
          </div>

          <div class="w-full flex-1 overflow-hidden">
            <SubTitle title="客户类型结构" />


            <div class="h-[150dh]">
              
            <ChartView :option="option6"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
</template>
