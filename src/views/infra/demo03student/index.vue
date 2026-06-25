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
      <el-form-item label="性别" prop="sex">
        <el-select v-model="queryParams.sex" placeholder="请选择性别" clearable class="!w-240px">
          <el-option
            v-for="dict in getIntDictOptions(DICT_TYPE.SYSTEM_USER_SEX)"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthday">
        <el-date-picker
          v-model="queryParams.birthday"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
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
          v-hasPermi="['infra:demo03-student:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="danger"
          plain
          @click="handleDelete()"
          v-hasPermi="['infra:demo03-student:delete']"
        >
          <Icon icon="ep:delete" class="mr-5px" /> 删除
        </el-button>
        <Export
          v-hasPermi="['infra:demo03-student:export']"
          :queryParams="queryParams"
          :listRef="listRef"
          fileName="学生.xls"
          :exportFunction="Demo03StudentApi.exportDemo03Student"
        />
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table
      ref="listRef"
      v-loading="loading"
      :data="list"
      :stripe="true"
      :show-overflow-tooltip="true"
      highlight-current-row
      row-key="id"
    >
      <el-table-column type="selection" :reserve-selection="true" width="55" />
      <el-table-column label="序号" type="index" width="60" align="center">
        <template #default="scope">
          <span>{{ (queryParams.pageNo - 1) * queryParams.pageSize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="名字" align="center" prop="name" />
      <el-table-column label="性别" align="center" prop="sex">
        <template #default="scope">
          <dict-tag :type="DICT_TYPE.SYSTEM_USER_SEX" :value="scope.row.sex" />
        </template>
      </el-table-column>
      <el-table-column
        label="出生日期"
        align="center"
        prop="birthday"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="简介" align="center" prop="description" />
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
            v-hasPermi="['infra:demo03-student:query']"
          >
            查看
          </el-button>
          <el-button
            link
            type="primary"
            @click="openForm('update', scope.row.id)"
            v-hasPermi="['infra:demo03-student:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['infra:demo03-student:delete']"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <Demo03StudentForm ref="formRef" @success="getList" />
  <!-- 表单弹窗：查看 -->
  <Demo03StudentDetail ref="detailRef" />
</template>

<script setup lang="ts">
import { getIntDictOptions, DICT_TYPE } from '@/utils/dict'
import { datetimeFormatter, dateFormatter } from '@/utils/formatTime'
import { Demo03StudentApi, Demo03StudentVO } from '@/api/infra/demo03student'
import Demo03StudentForm from './Demo03StudentForm.vue'
import Demo03StudentDetail from './Demo03StudentDetail.vue'
import { useChooseDept } from '@/hooks/web/useChooseDept'

/** 学生 列表 */
defineOptions({ name: 'Demo03Student' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<Demo03StudentVO[]>([]) // 列表的数据
const listRef = ref() // 列表的引用
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  name: undefined,
  sex: undefined,
  birthday: [],
  createTime: [],
  exportIds: [] as number[],
  exportAll: false
})
const queryFormRef = ref() // 搜索的表单

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await Demo03StudentApi.getDemo03StudentPage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
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
    const selectedDept = await showDeptModal(['infra:demo03-student:create'])
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
const handleDelete = async (id?: number) => {
  try {
    const ids = [] as number[]
    if (!id) {
      const selectionRows = listRef.value.getSelectionRows()
      if (!selectionRows || selectionRows.length <= 0) {
        message.info(t('common.delNoData'))
        return
      }
      selectionRows.forEach((row) => {
        ids.push(row.id)
      })
    } else {
      ids.push(id)
    }
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await Demo03StudentApi.deleteDemo03Student(ids)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
    // 清空列表选择项
    listRef.value.clearSelection()
  } catch {}
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
