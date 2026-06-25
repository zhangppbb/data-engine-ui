
declare namespace Table {
  type VNodeChild = import('vue').VNodeChild;
  type Type = 'selection' | 'index' | 'expand' | 'image' | 'date';
  type Command = string | number;
  type DateFormat = 'YYYY-MM-DD' | 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD HH:mm' | 'YYYY-MM';
  type Order = 'ascending' | 'descending';

  interface Sort {
    prop: string;
    order: Order;
    init?: unknown;
    silent?: unknown;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Column<T = any> = Partial<import('element-plus').TableColumnCtx<T>> & {
    // 对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮
    type?: Type;
    slot?: string;
    dateFormat?: DateFormat; // 显示在页面中的日期格式，简单列举了几种格式， 可自行配置
    render?: (row?: T, index?: number) => VNodeChild; // 渲染函数，渲染这一列的每一行的单元格
    sortable?: boolean | 'custom'; // 对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件
    headerRender?: ({ column, index }) => VNodeChild; // 渲染函数，渲染列表头
    headerSlot?: string; // 自定义表头插槽名字
    children?: Column<T>[]; // 配置多级表头的数据集合, 具体用法可参考多级表头使用示例。
  };
  type Options = {
    showPagination?: boolean; // 是否展示分页器
    searchNumber?: number | string; // 实际总数据量
    paginationConfig?: Partial<Mutable<import('element-plus').PaginationProps>>; // 分页器配置项，详情见下方 paginationConfig 属性,
  };
}
