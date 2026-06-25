import type { CascaderOption } from 'element-plus'

// 登记状态
export const REGISTER: CascaderOption[] = [
  {
    label: '不限',
    value: '',
    clear: true
  },
  {
    label: '存续',
    value: '20'
  },
  {
    label: '在业',
    value: '10'
  },
  {
    label: '迁入',
    value: '50'
  },
  {
    label: '迁出',
    value: '60'
  },
  {
    label: '设立',
    value: '117'
  },
  {
    label: '设立失败',
    value: '142'
  },
  {
    label: '撤销',
    value: '80'
  },
  {
    label: '吊销',
    value: '90'
  },
  {
    label: '破产',
    value: '124'
  },
  {
    label: '重整',
    value: '129'
  },
  {
    label: '清算',
    value: '40'
  },
  {
    label: '清理',
    value: '122'
  },
  {
    label: '废止',
    value: '100'
  },
  {
    label: '撤回',
    value: '143'
  },
  {
    label: '停业',
    value: '70'
  },
  {
    label: '歇业',
    value: '75'
  },
  {
    label: '责令关闭',
    value: '85'
  },
  {
    label: '注销',
    value: '99'
  }
]

// 资本类型
export const CAPITAL_TYPE: CascaderOption[] = [
  {
    label: '不限',
    value: '',
    clear: true
  },
  {
    label: '人民币',
    value: 'CNY'
  },
  {
    label: '美元',
    value: 'USD'
  },
  {
    label: '其他',
    value: 'N_CNY,N_USD'
  }
]

// 企业类型
export const COMPANY_TYPE: CascaderOption[] = [
  {
    label: '不限',
    value: '',
    clear: true
  },
  {
    label: '有限责任公司',
    value: '10'
  },
  {
    label: '股份有限公司',
    value: '20'
  },
  {
    label: '股份合作公司',
    value: '120'
  },
  {
    label: '国有企业',
    value: '30'
  },
  {
    label: '集体所有制',
    value: '90'
  },
  {
    label: '个体工商户',
    value: '70'
  },
  {
    label: '独资企业',
    value: '50'
  },
  {
    label: '有限合伙',
    value: '100'
  },
  {
    label: '普通合伙',
    value: '110'
  },
  {
    label: '外商投资企业',
    value: '40'
  },
  {
    label: '港、澳、台商投资企业',
    value: '130'
  },
  {
    label: '联营企业',
    value: '80'
  },
  {
    label: '私营企业',
    value: '140'
  }
]

// 融资阶段
export const FINANCE: CascaderOption[] = [
  {
    label: '不限',
    value: '',
    clear: true
  },
  {
    label: '种子轮/天使轮',
    value: '1'
  },
  {
    label: 'A轮',
    value: '2'
  },
  {
    label: 'B轮',
    value: '3'
  },
  {
    label: 'C轮',
    value: '4'
  },
  {
    label: 'D轮',
    value: '5'
  },
  {
    label: 'E轮及以上',
    value: '6'
  },
  {
    label: 'IPO',
    value: '7'
  },
  {
    label: '定向增发',
    value: '8'
  },
  {
    label: '战略投资',
    value: '9'
  },
  {
    label: '并购',
    value: '10'
  },
  {
    label: '其他',
    value: '11'
  }
]

// 上市状态
export const LIST: CascaderOption[] = [
  {
    label: '不限',
    value: '',
    clear: true
  },
  {
    label: 'A股',
    value: 'S_1',
    data: [],
    count: 0,
    default: [],
    children: [
      {
        label: '沪主板',
        value: 'S_101',
        children: [
          {
            label: '已上市',
            itemShowName: '沪主板已上市',
            value: 'S_10101'
          },
          {
            label: '待上市',
            itemShowName: '沪主板待上市',
            value: 'S_10102'
          },
          {
            label: 'IPO申报',
            itemShowName: '沪主板IPO申报',
            value: 'S_10103'
          }
        ]
      },
      {
        label: '深主板',
        value: 'S_102',
        children: [
          {
            label: '已上市',
            itemShowName: '深主板已上市',
            value: 'S_10201'
          },
          {
            label: '待上市',
            itemShowName: '深主板待上市',
            value: 'S_10202'
          },
          {
            label: 'IPO申报',
            itemShowName: '深主板IPO申报',
            value: 'S_10203'
          }
        ]
      },
      {
        label: '创业板',
        value: 'S_103',
        itemShowName: 'A股创业板',
        children: [
          {
            label: '已上市',
            itemShowName: '创业板已上市',
            value: 'S_10301'
          },
          {
            label: '待上市',
            itemShowName: '创业板待上市',
            value: 'S_10302'
          },
          {
            label: 'IPO申报',
            itemShowName: '创业板IPO申报',
            value: 'S_10303'
          }
        ]
      },
      {
        label: '科创板',
        value: 'S_104',
        children: [
          {
            label: '已上市',
            itemShowName: '科创板已上市',
            value: 'S_10401'
          },
          {
            label: '待上市',
            itemShowName: '科创板待上市',
            value: 'S_10402'
          },
          {
            label: 'IPO申报',
            itemShowName: '科创板IPO申报',
            value: 'S_10403'
          }
        ]
      },
      {
        label: '北交所',
        value: 'S_105',
        children: [
          {
            label: '已上市',
            itemShowName: '北交所已上市',
            value: 'S_10501'
          },
          {
            label: '待上市',
            itemShowName: '北交所待上市',
            value: 'S_10502'
          },
          {
            label: 'IPO申报',
            itemShowName: '北交所IPO申报',
            value: 'S_10503'
          }
        ]
      },
      {
        label: '上市辅导',
        value: 'S_106'
      }
    ]
  },
  {
    label: '新三板',
    value: 'S_3',
    count: 0,
    data: [],
    default: [],
    children: [
      {
        label: '基础层',
        value: 'S_301'
      },
      {
        label: '创新层',
        value: 'S_302'
      },
      {
        label: '两网及退市',
        value: 'S_304'
      }
    ]
  },
  {
    label: '港股',
    value: 'S_8',
    data: [],
    count: 0,
    default: [],
    children: [
      {
        label: '主板',
        value: 'S_802'
      },
      {
        label: '创业板',
        value: 'S_803'
      },
      {
        label: '中概股（港股）',
        value: 'S_801',

        children: [
          {
            label: '大陆运营实体',
            itemShowName: '中概股（港股）大陆运营实体',
            value: 'S_80101'
          },
          {
            label: '香港上市企业',
            value: 'S_80102'
          }
        ]
      }
    ]
  },
  {
    label: '美股',
    value: 'S_7',
    count: 0,
    data: [],
    default: [],
    children: [
      {
        label: '中概股（美股）',
        value: 'S_701',
        children: [
          {
            label: '大陆运营实体',
            itemShowName: '中概股（美股）大陆运营实体',
            value: 'S_70101'
          },
          {
            label: '美国上市企业',
            value: 'S_70102'
          }
        ]
      },
      {
        label: '纳斯达克',
        value: 'S_702'
      },
      {
        label: '纽交所',
        value: 'S_703'
      },
      {
        label: 'AMEX',
        value: 'S_704'
      }
    ]
  },
  {
    label: '新四板',
    value: 'S_10'
  },
  {
    label: '未上市',
    value: '999'
  }
]

// 规上企业
export const REGULATED: CascaderOption[] = [
  {
    label: '不限',
    value: '',
    // 清空
    clear: true
  },
  {
    label: '规模以上服务业',
    value: 'GUI_S4'
  },
  {
    label: '限额以上批发和零售业',
    value: 'GUI_S2'
  },
  {
    label: '规模以上工业',
    value: 'GUI_S1'
  },
  {
    label: '限额以上住宿和餐饮业',
    value: 'GUI_S3'
  }
]

// 规上企业
export const REGULATED1: CascaderOption[] = [
  {
    label: '不限',
    value: '',
    // 清空
    clear: true
  },
  {
    label: '规模以上服务业',
    value: '1004'
  },
  {
    label: '限额以上批发和零售业',
    value: '1002'
  },
  {
    label: '规模以上工业',
    value: '1001'
  },
  {
    label: '限额以上住宿和餐饮业',
    value: '1003'
  }
]

// 科技型企业
export const TECH: CascaderOption[] = [
  {
    label: '高新技术企业',
    value: 'HT001'
  },
  {
    label: '科技型中小企业',
    value: 'T_TSMES'
  },
  {
    label: '专精特新中小企业',
    value: 'SSE'
  },
  {
    label: '创新型中小企业',
    value: 'T_INNMS'
  },
  {
    label: '企业技术中心',
    value: 'T_TC'
  },
  {
    label: '科技小巨人企业',
    value: 'STE'
  },
  {
    label: '瞪羚企业',
    value: 'GE'
  },
  {
    label: '专精特新小巨人企业',
    value: 'T_SSTE'
  },
  {
    label: '工程技术研究中心',
    value: 'T_NDSC'
  },
  {
    label: '民营科技企业',
    value: 'T_PT'
  },
  {
    label: '技术创新示范企业',
    value: 'T_TD'
  },
  {
    label: '雏鹰企业',
    value: 'YEE'
  },
  {
    label: '独角兽企业',
    value: 'UE'
  },
  {
    label: '众创空间',
    value: 'T_MS'
  },
  {
    label: '科技企业孵化器',
    value: 'T_CI'
  },
  {
    label: '隐形冠军企业',
    value: 'T_IC'
  },
  {
    label: '技术先进型服务企业',
    value: 'T_ATS'
  }
]

// 注册资本
export const REGISTERED_CAPITAL: CascaderOption[] = [
  {
    label: '不限',
    value: '',
    clear: true
  },
  {
    label: '100万内',
    value: '0-100'
  },
  {
    label: '100万 - 300万',
    value: '100-300'
  },
  {
    label: '300万 - 500万',
    value: '300-500'
  },
  {
    label: '500万 - 1000万',
    value: '500-1000'
  },
  {
    label: '1000万以上',
    value: '1000-'
  }
]
