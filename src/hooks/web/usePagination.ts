import { reactive, computed } from 'vue';
import { merge } from 'lodash-es';

export function usePagination(tableHooksRequest?: () => void, pag?: Table.Options) {
  // 结果页数据
  const defaultPagination = merge(
    {
      paginationConfig: {
        total: 0, // 合计条数    -可以为空-
        currentPage: 1,
        pageSize: 20
        // handleCurrentChange: this.getList // 分页变化时回调加载数据的方法
      },
      searchNumber: 0,
      showPagination: true
    },
    pag
  );

  const pagination = reactive<Table.Options>(defaultPagination);

  const hasPaginationData = computed(() => {
    return Number(pagination.paginationConfig?.total) > 0;
  });

  const paginationTotal = computed(() => {
    return Number(pagination.paginationConfig?.total || 0);
  });

  // 改变分页
  const currentChange = async (currentPage: number) => {
    try {
      const pag = pagination?.paginationConfig;
      if (pag) {
        pag.currentPage = currentPage;

        // 网络请求
        const res = await tableHooksRequest?.();
        return res;
      }
    } catch (error) {
      throw error;
    }
  };

  // 改变页数
  const sizeChange = async (pageSize: number) => {
    try {
      const pag = pagination?.paginationConfig;
      if (pag) {
        pag.currentPage = 1;
        pag.pageSize = pageSize;
      }
      const res = await tableHooksRequest?.();

      return res;
    } catch (error) {
      throw error;
    }
  };

  // 更新数据
  const refreshData = async () => {
    try {
      const pag = pagination?.paginationConfig;
      if (pag) {
        pag.currentPage = 1;
      }
      const res = await tableHooksRequest?.();

      return res;
    } catch (error) {
      throw error;
    }
  };

  const resetPagination = () => {
    const pag = pagination?.paginationConfig;
    if (pag) {
      pag.currentPage = 1;
      pag.total = 0;
      pagination.searchNumber = 0;
    }
  };

  return {
    pagination,
    paginationTotal,
    hasPaginationData,
    currentChange,
    resetPagination,
    sizeChange,
    refreshData
  };
}
