<script lang="ts" setup generic="T">
import { ref, type CSSProperties } from 'vue'
import { ElTable, ElTableColumn, type CellStyle } from 'element-plus'
// import { Empty } from '@/components'
import { get, isNil } from 'lodash-es'
import TableColumn from './column.vue'
import Pagination, { type Emits as PaginationEmits } from './pagination.vue'

defineOptions({
  name: 'AppTable'
})

interface Emits extends PaginationEmits {
  (event: 'command', command: Table.Command, row: unknown, index: number): void
}

interface Props {
  data: T[]
  loading?: boolean
  columns: Table.Column<T>[] // 每列的配置项
  options?: Table.Options // 分页
}

defineSlots<{
  default(props: { row: T; index: number }): { row: T; index: number }
  [key: string]: (props: { row: T; index: number }) => { row: T; index: number }
}>()

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  data: () => []
})

const emits = defineEmits<Emits>()

const tableRef = ref<InstanceType<typeof ElTable>>()



// 设置option默认值，如果传入自定义的配置则合并option配置项

// 合并分页配置
// const _paginationConfig = computed(() => {
//   const config = {
//     total: 0,
//     currentPage: 1,
//     pageSize: 10,
//     pageSizes: [10, 20, 30, 40, 50, 100],
//     layout: 'total, sizes, prev, pager, next, jumper'
//   };
//   return Object.assign(config, _options.value.paginationConfig);
// });

// 自定义索引
const indexMethod = (index: number) => {
  return index + 1
}

// 按钮组事件
const handleAction = (command: Table.Command, row: unknown, index: number) => {
  emits('command', command, row, index)
}

// 表格行
const tableRowClassName = ({ rowIndex }: { rowIndex: number }) => {
  // 偶数
  if (rowIndex % 2 === 0) {
    return 'even-row'
  }

  return 'odd-row'
}

// 单元格样式
const cellStyle: CellStyle<{ [key: string]: unknown }> = (cell): CSSProperties => {
  const data = get(cell.row, cell.column.property)
  if (isNil(data) || data === '') {
    cell.row[cell.column.property] = '——'
  }

  return {}
}

/**
 * 布局
 */
const doLayout = () => {
  tableRef.value?.doLayout()
}

defineExpose({ doLayout, element: tableRef })
</script>

<template>
  <div class="flex flex-col flex-1 overflow-hidden h-100%">
    <el-table
      ref="tableRef"
      height="100%"
      v-bind="$attrs"
      :data="data"
      :cell-style="cellStyle"
      stripe
      border
      :row-class-name="tableRowClassName"
    >
      <template v-for="(col, index) in columns" :key="index">
        <!---复选框, 序号 (START)-->
        <el-table-column
          v-if="col.type === 'index' || col.type === 'selection' || col.type === 'expand'"
          :index="indexMethod"
          v-bind="col"
        >
          <!-- 当type等于expand时， 配置通过h函数渲染、txs语法或者插槽自定义内容 -->
          <template #default="{ row, $index }">
            <!-- render函数 (START) : 使用内置的component组件可以支持h函数渲染和txs语法 -->
            <component v-if="col.render" :is="col.render()" :row="row" :index="$index" />
            <!-- render函数 (END) -->
            <!-- 自定义slot (START) -->
            <slot v-if="col.slot" name="expand" :row="row" :index="$index"></slot>
            <!-- 自定义slot (END) -->
          </template>
        </el-table-column>

        <!-- 格式化 -->
        <el-table-column v-else-if="col.formatter" v-bind="col" />

        <!---复选框, 序号 (END)-->
        <!-- 渲染插槽 START -->
        <TableColumn :col="col" v-else @command="handleAction">
          <template v-for="slot in Object.keys($slots)" #[slot]="scope">
            <slot :name="slot" v-bind="scope"></slot>
          </template>
        </TableColumn>
        <!-- 渲染插槽 END -->
      </template>

      <template #empty>
        <Empty>没有信息</Empty>
      </template>
    </el-table>

    <!-- 分页器 -->
    <Pagination
      v-if="props.options?.showPagination"
      :options="props.options"
      @size-change="(data) => emits('size-change', data)"
      @pagination-change="(data, pageSize) => emits('pagination-change', data, pageSize)"
      @current-change="(data) => emits('current-change', data)"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep() {
  .el-table__body-wrapper .el-table-column--selection > .cell {
    justify-content: center;
  }
}
</style>
