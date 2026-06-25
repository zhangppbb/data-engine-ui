export interface FilterState {
  [key: string]: any // 支持扩展字段
}

export interface filterProps {
  mindTreeOptions?: import('element-plus').CascaderOption[],
  mindTreeValue?: import('element-plus').CascaderNodeValue[],
  filterState: FilterState
  /**
   * 节点ID
   */
  chainId: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 是否展示标题筛选
   */
  showTitleSearch: boolean;
}

export interface FilterEmits {
  (e: 'filter-change', key: string, value: any): void
  (e: 'anchor', elementId: string): void
}
