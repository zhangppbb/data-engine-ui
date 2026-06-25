<template>
  <el-table ref="dragTable" :data="formData" :max-height="tableHeight" row-key="columnId">
    <el-table-column
      width="100"
      :show-overflow-tooltip="true"
      label="字段列名"
      prop="columnName"
      fixed="left"
    />
    <el-table-column label="字段描述" prop="columnComment" fixed="left" width="100" />
    <el-table-column :show-overflow-tooltip="true" label="物理类型" prop="dataType" fixed="left" />
    <el-table-column
      :show-overflow-tooltip="true"
      label="长度"
      prop="length"
      fixed="left"
      width="50"
    />
    <el-table-column
      :show-overflow-tooltip="true"
      label="精度"
      prop="scale"
      fixed="left"
      width="50"
    />
    <el-table-column label="Java类型" fixed="left" width="130">
      <template #default="scope">
        <el-select v-model="scope.row.javaType" disabled>
          <el-option label="Long" value="Long" />
          <el-option label="String" value="String" />
          <el-option label="Integer" value="Integer" />
          <el-option label="Double" value="Double" />
          <el-option label="BigDecimal" value="BigDecimal" />
          <el-option label="LocalDateTime" value="LocalDateTime" />
          <el-option label="Boolean" value="Boolean" />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="java属性" prop="javaField" fixed="left" width="130" />
    <el-table-column width="50">
      <template #header>
        <span>
          日志
          <el-tooltip content="记录属性的操作日志，例如 ‘姓名’从‘张三’修改为‘李四’" placement="top">
            <Icon icon="ep:question-filled" />
          </el-tooltip>
        </span>
      </template>
      <template #default="scope">
        <el-checkbox
          v-model="scope.row.recordOperationLogs"
          false-value="false"
          true-value="true"
        />
      </template>
    </el-table-column>
    <el-table-column label="允许空" width="50">
      <template #default="scope">
        <el-checkbox v-model="scope.row.nullable" false-value="false" true-value="true" />
      </template>
    </el-table-column>
    <el-table-column width="50">
      <template #header>
        <span>
          插入
          <el-tooltip content="插入时是否显示" placement="top">
            <Icon icon="ep:question-filled" />
          </el-tooltip>
        </span>
      </template>
      <template #default="scope">
        <el-checkbox v-model="scope.row.createOperation" false-value="false" true-value="true" />
      </template>
    </el-table-column>
    <el-table-column width="50">
      <template #header>
        <span>
          编辑
          <el-tooltip content="编辑时是否显示" placement="top">
            <Icon icon="ep:question-filled" />
          </el-tooltip>
        </span>
      </template>
      <template #default="scope">
        <el-checkbox v-model="scope.row.updateOperation" false-value="false" true-value="true" />
      </template>
    </el-table-column>
    <el-table-column width="50">
      <template #header>
        <span>
          详情
          <el-tooltip content="详情页是否显示" placement="top">
            <Icon icon="ep:question-filled" />
          </el-tooltip>
        </span>
      </template>
      <template #default="scope">
        <el-checkbox
          v-model="scope.row.detailOperationResult"
          false-value="false"
          true-value="true"
        />
      </template>
    </el-table-column>
    <el-table-column width="50">
      <template #header>
        <span>
          列表
          <el-tooltip content="列表页是否显示" placement="top">
            <Icon icon="ep:question-filled" />
          </el-tooltip>
        </span>
      </template>
      <template #default="scope">
        <el-checkbox
          v-model="scope.row.listOperationResult"
          false-value="false"
          true-value="true"
        />
      </template>
    </el-table-column>
    <el-table-column width="50">
      <template #header>
        <span>
          查询
          <el-tooltip content="是否作为列表查询条件" placement="top">
            <Icon icon="ep:question-filled" />
          </el-tooltip>
        </span>
      </template>
      <template #default="scope">
        <el-checkbox v-model="scope.row.listOperation" false-value="false" true-value="true" />
      </template>
    </el-table-column>
    <el-table-column label="查询方式" width="100">
      <template #default="scope">
        <el-select v-model="scope.row.listOperationCondition">
          <el-option label="=" value="=" />
          <el-option label="!=" value="!=" />
          <el-option label=">" value=">" />
          <el-option label=">=" value=">=" />
          <el-option label="<" value="<>" />
          <el-option label="<=" value="<=" />
          <el-option label="LIKE" value="LIKE" />
          <el-option label="BETWEEN" value="BETWEEN" />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="关联表" width="150">
      <template #default="scope">
        <el-select
          clearable
          v-model="scope.row.relatedTableId"
          placeholder="请选择"
          @change="changeTable($event, scope.row)"
        >
          <el-option
            v-for="(table0, index) in tables"
            :key="index"
            :label="table0.tableName + '：' + table0.tableComment"
            :value="table0.id"
          />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="关联字段" width="150">
      <template #default="scope">
        <el-select v-model="scope.row.relatedColumnId" placeholder="请选择" clearable>
          <el-option
            v-for="(table0, index) in columnMap.get(scope.row.relatedTableId)"
            :key="index"
            :label="table0.columnName + '：' + table0.columnComment"
            :value="table0.id"
          />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="显示字段" width="150">
      <template #default="scope">
        <el-select v-model="scope.row.showColumnId" placeholder="请选择" clearable>
          <el-option
            v-for="(table0, index) in columnMap.get(scope.row.relatedTableId)"
            :key="index"
            :label="table0.columnName + '：' + table0.columnComment"
            :value="table0.id"
          />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="显示类型" width="150">
      <template #default="scope">
        <el-select v-model="scope.row.htmlType">
          <el-option label="文本框" value="input" />
          <el-option label="文本域" value="textarea" />
          <el-option label="下拉框" value="select" />
          <el-option label="单选框" value="radio" />
          <el-option label="复选框" value="checkbox" />
          <el-option label="日期控件" value="date" />
          <el-option label="日期时间控件" value="datetime" />
          <el-option label="图片上传" value="imageUpload" />
          <el-option label="文件上传" value="fileUpload" />
          <el-option label="富文本控件" value="editor" />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="字典类型" width="150">
      <template #default="scope">
        <el-select
          v-model="scope.row.dictType"
          :value-on-clear="''"
          clearable
          filterable
          placeholder="请选择"
        >
          <template #header>
            <div class="flex justify-end">
              <el-popover class="box-item" content="加载最新字典" placement="top-start">
                <template #reference>
                  <el-button :icon="Refresh" size="small" circle @click="getDictOptions" class="" />
                </template>
              </el-popover>
            </div>
          </template>
          <el-option
            v-for="dict in dictOptions"
            :key="dict.id"
            :label="dict.name"
            :value="dict.type"
          />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column label="示例">
      <template #default="scope">
        <el-input v-model="scope.row.example" />
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import * as CodegenApi from '@/api/infra/codegen'
import * as DictDataApi from '@/api/system/dict/dict.type'

defineOptions({ name: 'InfraCodegenColumInfoForm' })

const props = defineProps({
  dataSourceConfigCode: {
    type: String,
    required: true
  },
  columns: {
    type: Array as unknown as PropType<CodegenApi.CodegenColumnVO[]>,
    default: () => null
  }
})

const formData = ref<CodegenApi.CodegenColumnVO[]>([])
const tableHeight = document.documentElement.scrollHeight - 300 + 'px'
const tables = ref<CodegenApi.CodegenDictVO[]>([]) // 表单列表
const columnMap = reactive(new Map())

/** 查询字典下拉列表 */
const dictOptions = ref<DictDataApi.DictTypeVO[]>()
const getDictOptions = async () => {
  dictOptions.value = await DictDataApi.getSimpleDictTypeList()
}

watch(
  () => props.columns,
  async (columns) => {
    if (!columns) return
    formData.value = columns
    if (tables.value.length === 0 && props.dataSourceConfigCode) {
      tables.value = await CodegenApi.getCodegenTableList(props.dataSourceConfigCode)
      columns.forEach((column) => {
        if (column.relatedTableId && (column.relatedColumnId || column.relatedColumnId)) {
          getColumnList(column.relatedTableId)
        }
      })
    }
  },
  {
    deep: true,
    immediate: true
  }
)

const getColumnList = async (relatedTableId) => {
  if (relatedTableId && !columnMap.get(relatedTableId)) {
    const columnSimpleList = await CodegenApi.getCodegenColumnSimpleListByTableId(relatedTableId)
    columnMap.set(relatedTableId, columnSimpleList)
  }
}

const changeTable = (event, row) => {
  row.relatedColumnId = null
  row.showColumnId = null
  getColumnList(event)
}

onMounted(async () => {
  await getDictOptions()
})
</script>
