import { EChartsOption } from "echarts";

export interface ChartDataType extends Record<string, any> {
  /**
   * 坐标名称
   */
  label?: string;

  /**
   * 坐标名称 - 图表
   */
  name?: string;

  /**
   * 编码用于映射 label
   */
  code?: string | number;

  /**
   * 比例
   */
  proportion?: string | number;

  /**
   * 数值
   */
  value?: string | number;

  /**
   * 其它数据
   */
  items?: ChartDataType[];
}

export interface ChartProps {
  ref?: string;
  key?: string;
  title: string;
  type?: string;
  width?: string;
  height?: string;

  /**
   * 饼图默认选中第一个
   */
  highlight?: boolean;
  hasData?: boolean;

  /**
   * 下钻层级
   */
  drillDownLevel?: number;
  drillDown?: boolean;
  loading?: boolean;
  isDrillDown?: boolean;
  option: EChartsOption;
  opts?: EChartsOption;

  /**
   * 映射 keys
   */
  mapKeys?: string[];

  /**
   * 裁剪数据
   */
  split?: {
    index: [number, number];
  };

  /**
   * 表格数据
   */
  tableData?: ChartTable;

  /**
   * 总数
   */
  totalCount?: boolean;

  /**
   * 无图表Keys
   */
  notContainKeys?: string[];

  /**
   * 子图表
   */
  subChart?: Partial<ChartProps>;
}

