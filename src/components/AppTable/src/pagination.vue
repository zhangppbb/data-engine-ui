<script setup lang="ts">
import { computed } from 'vue';
import { ElPagination } from 'element-plus';

interface Props {
  options: Table.Options;
}

export interface Emits {
  (event: 'size-change', data: number): void;
  (event: 'pagination-change', data: number, pageSize: number): void;
  (event: 'current-change', data: number): void;
}

const props = withDefaults(defineProps<Props>(), {});
const emits = defineEmits<Emits>();

const showTotal = computed(() => {
  const total = props.options?.paginationConfig?.total || 0;
  const searchNumber = parseInt(props.options?.searchNumber as string) || 0;

  if (!searchNumber) return false;

  return total < searchNumber;
});

const searchNumber = computed(() => {
  const total = props.options?.paginationConfig?.total || 0;
  const searchNumber = props.options?.searchNumber || 0;

  if (!searchNumber) return total;

  return searchNumber;
});

// 切换pageSize
const pageSizeChange = (pageSize: number) => {
  emits('size-change', pageSize);
  emits('pagination-change', 1, pageSize);
};
// 切换currentPage
const currentPageChange = (currentPage: number) => {
  emits('current-change', currentPage);
};
</script>

<template>
  <!-- 分页器 -->
  <div
    v-if="props.options && props.options.showPagination"
    class="pt-[16px] flex justify-between items-center"
  >
    <div class="flex">
      <template v-if="props.options.showTotal !== false">
        <div v-if="showTotal" class="mr-[16px]">
          当前只显示
          <span class="text-warning1">{{ props.options.paginationConfig?.total }}</span> 条数据
        </div>
        <div>
          共计
          <span class="text-warning1">{{ searchNumber }}</span> 条
        </div>

        <div class="ml-[16px]">
          每页显示
          <span class="text-warning1">{{ props.options.paginationConfig?.pageSize }}</span> 条
        </div>
      </template>
    </div>

    <el-pagination
      class="custom-pagination"
      layout="prev, pager, next, sizes, jumper"
      :page-sizes="[20, 30, 40, 50, 100]"
      v-bind="props.options.paginationConfig"
      @size-change="pageSizeChange"
      @current-change="currentPageChange"
      background
    />
  </div>
</template>
