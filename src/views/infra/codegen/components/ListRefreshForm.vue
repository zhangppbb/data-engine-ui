<template>
  <el-form
    ref="formRef"
    :model="formData"
    :rules="formRules"
    v-loading="formLoading"
    label-width="0px"
    :inline-message="true"
  >
    <el-table :data="formData" class="-mt-10px">
      <el-table-column label="序号" type="index" width="100" />
      <el-table-column label="模块" min-width="150">
        <template #default="{ row, $index }">
          <el-form-item
            :prop="`${$index}.otherModuleCode`"
            :rules="formRules.otherModuleCode"
            class="mb-0px!"
          >
            <el-select
              v-model="row.otherModuleCode"
              placeholder="请选择需要刷新列表的模块"
              filterable
            >
              <el-option
                v-for="module in modules"
                :key="module.id"
                :label="module.tableComment"
                :value="module.tableName"
              />
            </el-select>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column align="center" fixed="right" label="操作" width="60">
        <template #default="{ $index }">
          <el-button @click="handleDelete($index)" link>—</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
  <el-row justify="center" class="mt-3">
    <el-button @click="handleAdd" round>+ 添加模块</el-button>
  </el-row>
</template>
<script setup lang="ts">
import * as CodegenApi from '@/api/infra/codegen'

const props = defineProps<{
  tableId: number | undefined // 表单id（主表的关联字段）
}>()
const formLoading = ref(false) // 表单的加载中
const formData = ref<CodegenApi.CodegenListRefreshVO[]>([])
const formRules = reactive({
  otherModuleCode: [{ required: true, message: '模块不能为空', trigger: 'blur' }]
})
const modules = ref<CodegenApi.CodegenDictVO[]>([]) // 模块列表
const formRef = ref() // 表单 Ref

/** 监听主表的关联字段的变化，加载对应的子表数据 */
watch(
  () => props.tableId,
  async (val) => {
    modules.value = await CodegenApi.getCodegenSimpleList()
    // 1. 重置表单
    formData.value = []
    // 2. val 非空，则加载数据
    if (!val) {
      return
    }
    try {
      formLoading.value = true
      formData.value = await CodegenApi.getCodegenListRefreshListByTableId(val)
    } finally {
      formLoading.value = false
    }
  },
  { immediate: true }
)

/** 新增按钮操作 */
const handleAdd = () => {
  const row: CodegenApi.CodegenListRefreshVO = {
    id: undefined,
    tableId: undefined,
    otherModuleCode: undefined
  }
  row.tableId = props.tableId
  formData.value.push(row)
}

/** 删除按钮操作 */
const handleDelete = (index) => {
  formData.value.splice(index, 1)
}

/** 表单校验 */
const validate = () => {
  return formRef.value.validate()
}

/** 表单值 */
const getData = () => {
  return formData.value
}

defineExpose({ validate, getData })
</script>
