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
      <el-table-column label="模版类型" min-width="150">
        <template #default="{ row, $index }">
          <el-form-item :prop="`${$index}.type`" :rules="formRules.type" class="mb-0px!">
            <el-select v-model="row.type" placeholder="请选择模版类型">
              <el-option
                v-for="dict in getStrDictOptions(DICT_TYPE.INFRA_TEMPLATE_TYPE)"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="模板名称" min-width="150">
        <template #default="{ row, $index }">
          <el-form-item :prop="`${$index}.name`" :rules="formRules.name" class="mb-0px!">
            <el-input v-model="row.name" placeholder="请输入模板名称" />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="模板编码" min-width="150">
        <template #default="{ row, $index }">
          <el-form-item :prop="`${$index}.code`" :rules="formRules.code" class="mb-0px!">
            <el-input v-model="row.code" placeholder="请输入模板编码" />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="附件" min-width="200">
        <template #default="{ row, $index }">
          <el-form-item
            :prop="`${$index}.attachment`"
            :rules="formRules.attachment"
            class="mb-0px!"
          >
            <UploadFile v-model="row.attachment" module="infra_codegen_template" :limit="1" />
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
    <el-button @click="handleAdd" round>+ 添加模板附件</el-button>
  </el-row>
</template>
<script setup lang="ts">
import { getStrDictOptions, DICT_TYPE } from '@/utils/dict'
import * as CodegenApi from '@/api/infra/codegen'

const props = defineProps<{
  tableId: number | undefined // 表单id（主表的关联字段）
}>()
const formLoading = ref(false) // 表单的加载中
const formData = ref<CodegenApi.CodegenTemplateVO[]>([])
const formRules = reactive({
  type: [{ required: true, message: '模版类型不能为空', trigger: 'blur' }],
  code: [{ required: true, message: '模板编码不能为空', trigger: 'blur' }],
  name: [{ required: true, message: '模板名称不能为空', trigger: 'blur' }],
  attachment: [{ required: true, message: '附件不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref

/** 监听主表的关联字段的变化，加载对应的子表数据 */
watch(
  () => props.tableId,
  async (val) => {
    // 1. 重置表单
    formData.value = []
    // 2. val 非空，则加载数据
    if (!val) {
      return
    }
    try {
      formLoading.value = true
      formData.value = await CodegenApi.getModuleTemplateListByTableId(val)
    } finally {
      formLoading.value = false
    }
  },
  { immediate: true }
)

/** 新增按钮操作 */
const handleAdd = () => {
  const row: CodegenApi.CodegenTemplateVO = {
    id: undefined,
    tableId: undefined,
    type: undefined,
    name: undefined,
    code: undefined,
    attachment: undefined
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
