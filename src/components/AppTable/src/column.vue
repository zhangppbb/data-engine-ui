<script lang="ts" setup generic="T">
import dayjs from 'dayjs'
import { ElTableColumn } from 'element-plus'

defineProps<{ col: Table.Column<T> }>()
defineEmits(['command'])
defineOptions({
  name: 'TableColumn' // 给组件命名
})
// 按钮组事件
// const handleAction = (command: Table.Command, { row, $index }: { row: any; $index: number }) => {
//   emit('command', command, row, $index);
// };
</script>

<template>
  <!-- 如果有配置多级表头的数据，则递归该组件 -->
  <template v-if="col.children?.length">
    <el-table-column :label="col.label" :width="col.width" :align="col.align">
      <TableColumn v-for="item in col.children" :col="item" :key="item.prop">
        <template v-for="slot in Object.keys($slots)" #[slot]="scope: Record<string, any>">
          <slot :name="slot" v-bind="scope"></slot>
        </template>
      </TableColumn>
      <template #header="{ column, $index }">
        <component
          v-if="col.headerRender"
          :is="col.headerRender"
          :column="column"
          :index="$index"
        />
        <slot
          v-else-if="col.headerSlot"
          :name="col.headerSlot"
          :column="column"
          :index="$index"
        ></slot>
        <span v-else>{{ column.label }}</span>
      </template>
    </el-table-column>
  </template>
  <!-- 其他正常列 -->
  <el-table-column v-else v-bind="col">
    <!-- 自定义表头 -->
    <template #header="{ column, $index }">
      <component v-if="col.headerRender" :is="col.headerRender" :column="column" :index="$index" />
      <slot
        v-else-if="col.headerSlot"
        :name="col.headerSlot"
        :column="column"
        :index="$index"
      ></slot>
      <span v-else>{{ column.label }}</span>
    </template>
    <template #default="{ row, $index, column }">
      <!--- 格式化日期-->
      <template v-if="col.type === 'date'">
        <!---十位数时间戳-->
        <span v-if="String(row[col.prop!])?.length <= 10">
          {{ dayjs.unix(row[col.prop!]).format(col.dateFormat ?? 'YYYY-MM-DD') }}
        </span>
        <!---十三位数时间戳-->
        <span v-else>{{ dayjs(row[col.prop!]).format(col.dateFormat ?? 'YYYY-MM-DD') }}</span>
      </template>

      <!-- 如果传递按钮数组，就展示按钮组 END-->
      <!-- render函数 (START) 使用内置的component组件可以支持h函数渲染和txs语法-->
      <component v-else-if="col.render" :is="col.render()" :row="row" :index="$index" />

      <!-- 自定义slot (START) -->
      <slot v-else-if="col.slot" :name="col.slot" :row="row" :index="$index" :column="column"></slot>
      <!-- 自定义slot (END) -->
      <!-- 默认渲染 (START) -->
      <span v-else>{{ row[col.prop!] }}</span>
      <!-- 默认渲染 (END) -->
    </template>
  </el-table-column>
</template>
