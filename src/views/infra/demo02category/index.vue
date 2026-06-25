<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form
      class="-mb-15px"
      :model="queryParams"
      ref="queryFormRef"
      :inline="true"
      label-width="68px"
      @submit.prevent
    >
      <el-form-item label="名字" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入名字"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
        <el-date-picker
          v-model="queryParams.createTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
        <el-button
          type="primary"
          plain
          @click="openForm('create')"
          v-hasPermi="['infra:demo02-category:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <Import
          v-hasPermi="['infra:demo02-category:create']"
          moduleCode="infra_demo02_category"
          url="/infra/demo02-category/import"
          :param="{}"
          @success="getList"
        />
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['infra:demo02-category:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
        <el-button type="danger" plain @click="toggleExpandAll">
          <Icon icon="ep:sort" class="mr-5px" /> 展开/折叠
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table
      v-loading="loading"
      :data="list"
      :stripe="true"
      :show-overflow-tooltip="true"
      row-key="id"
      :default-expand-all="isExpandAll"
      v-if="refreshTable"
      highlight-current-row
    >
      <el-table-column label="名字" align="left" header-align="center" prop="name" />
      <el-table-column label="创建人" align="center" prop="creatorName" />
      <el-table-column label="创建部门" align="center" prop="createDeptName" />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        :formatter="datetimeFormatter"
        width="180px"
      />
      <el-table-column label="操作" align="center" fixed="right" min-width="150px">
        <template #default="scope">
          <el-button
            link
            type="info"
            @click="openDetail(scope.row.id)"
            v-hasPermi="['infra:demo02-category:query']"
          >
            查看
          </el-button>
          <el-button
            link
            type="primary"
            @click="openForm('update', scope.row.id)"
            v-hasPermi="['infra:demo02-category:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['infra:demo02-category:delete']"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <Demo02CategoryForm ref="formRef" @success="getList" />
  <!-- 表单弹窗：查看 -->
  <Demo02CategoryDetail ref="detailRef" />
</template>

<script setup lang="ts">
import { datetimeFormatter } from '@/utils/formatTime'
import { handleTree } from '@/utils/tree'
import download from '@/utils/download'
import { Demo02CategoryApi, Demo02CategoryVO } from '@/api/infra/demo02category'
import Demo02CategoryForm from './Demo02CategoryForm.vue'
import Demo02CategoryDetail from './Demo02CategoryDetail.vue'
import { useChooseDept } from '@/hooks/web/useChooseDept'

/** 示例分类 列表 */
defineOptions({ name: 'Demo02Category' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<Demo02CategoryVO[]>([]) // 列表的数据
const queryParams = reactive({
  name: undefined,
  createTime: []
})
const queryFormRef = ref() // 搜索的表单

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await Demo02CategoryApi.getDemo02CategoryList(queryParams)
    list.value = handleTree(data, 'id', 'parentId')
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}

const { showDeptModal } = useChooseDept()

/** 添加/修改操作 */
const formRef = ref()
const openForm = async (type: string, id?: number) => {
  if (id) {
    formRef.value.open(type, id)
  } else {
    // 调用模态框并等待结果
    const selectedDept = await showDeptModal(['infra:demo02-category:create'])
    if (selectedDept === null) {
      // 用户取消选择，可提示或中断流程
      return
    }
    formRef.value.open(type, id, selectedDept)
  }
}

/** 查看操作 */
const detailRef = ref()
const openDetail = (id: number) => {
  detailRef.value.open(id)
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await Demo02CategoryApi.deleteDemo02Category(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

const exportLoading = ref(false) // 导出的加载中
/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await Demo02CategoryApi.exportDemo02Category(queryParams)
    download.excel(data, '示例分类.xls')
  } catch {
  } finally {
    exportLoading.value = false
  }
}

/** 展开/折叠操作 */
const isExpandAll = ref(true) // 是否展开，默认全部展开
const refreshTable = ref(true) // 重新渲染表格状态
const toggleExpandAll = async () => {
  refreshTable.value = false
  isExpandAll.value = !isExpandAll.value
  await nextTick()
  refreshTable.value = true
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
