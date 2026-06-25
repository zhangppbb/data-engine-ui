<template>
  <el-form ref="formRef" :model="formData" :rules="rules" label-width="120px">
    <el-row>
      <el-col :span="12">
        <el-form-item label="表名称" prop="tableName">
          <el-input v-model="formData.tableName" placeholder="请输入仓库名称" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="表描述" prop="tableComment">
          <el-input v-model="formData.tableComment" placeholder="请输入" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="className">
          <template #label>
            <span>
              实体类名称
              <el-tooltip
                content="默认去除表名的前缀。如果存在重复，则需要手动添加前缀，避免 MyBatis 报 Alias 重复的问题。"
                placement="top"
              >
                <Icon class="" icon="ep:question-filled" />
              </el-tooltip>
            </span>
          </template>
          <el-input v-model="formData.className" placeholder="请输入" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="作者" prop="author">
          <el-input v-model="formData.author" placeholder="请输入" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="文件客户端" prop="fileConfigId">
          <el-select v-model="formData.fileConfigId" placeholder="请选择文件客户端">
            <el-option
                v-for="fileConfig in fileConfigs"
                :key="fileConfig.id"
                :label="fileConfig.name"
                :value="fileConfig.id"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="附件目录" prop="attachmentCatalogueId">
          <el-tree-select
              v-model="formData.attachmentCatalogueId"
              :data="fileCatalogueTree"
              :props="defaultProps"
              check-strictly
              default-expand-all
              placeholder="请选择附件目录"
          />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="listName">
          <template #label>
            <span>
              列表页名称
              <el-tooltip
                  content="用于刷新列表页面缓存，如A模块新增数据后需要刷新B模块列表，通过此配置匹配列表名称，进而刷新路由缓存"
                  placement="top"
              >
                <Icon class="" icon="ep:question-filled" />
              </el-tooltip>
            </span>
          </template>
          <el-input v-model="formData.listName" />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="备注" prop="remark">
          <el-input v-model="formData.remark" :rows="3" type="textarea" />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script lang="ts" setup>
import * as CodegenApi from '@/api/infra/codegen'
import { FileCatalogueApi } from '@/api/infra/filecatalogue'
import * as FileConfigApi from '@/api/infra/fileConfig'
import { defaultProps, handleTree } from '@/utils/tree'

import { PropType } from 'vue'

defineOptions({ name: 'InfraCodegenBasicInfoForm' })

const props = defineProps({
  table: {
    type: Object as PropType<Nullable<CodegenApi.CodegenTableVO>>,
    default: () => null
  }
})

const fileConfigs = ref<FileConfigApi.FileConfigVO[]>([]) // 文件客户端列表
const fileCatalogueTree = ref() // 树形结构

const formRef = ref()
const formData = ref({
  tableName: '',
  tableComment: '',
  className: '',
  author: '',
  listName: '',
  fileConfigId: undefined,
  attachmentCatalogueId: undefined,
  remark: ''
})
const rules = reactive({
  tableName: [required],
  tableComment: [required],
  className: [required],
  listName: [required],
  author: [required]
})

/** 监听 table 属性，复制给 formData 属性 */
watch(
  () => props.table,
  (table) => {
    if (!table) return
    formData.value = table
  },
  {
    deep: true,
    immediate: true
  }
)

/** 获得文件目录树 */
const getFileCatalogueTree = async () => {
  fileCatalogueTree.value = []
  const data = await FileCatalogueApi.getFileCatalogueList(null)
  fileCatalogueTree.value = handleTree(data)
}

/**
 * 加载表单列表
 */
const getFileConfigs = async () => {
  fileConfigs.value = await FileConfigApi.getFileCatalogueList()
}

onMounted(() => {
  getFileCatalogueTree()
  getFileConfigs()
})

defineExpose({
  validate: async () => unref(formRef)?.validate()
})
</script>
