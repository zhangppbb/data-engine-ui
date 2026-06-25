<template>
  <ContentWrap>
    <el-form
      class="-mb-15px"
      :model="queryParams"
      ref="queryFormRef"
      :inline="true"
      label-width="68px"
    >
      <el-form-item label="字典名称" prop="dictType">
        <el-select
          v-model="queryParams.dictType"
          class="!w-240px"
          filterable
          @change="changeDictType"
        >
          <el-option
            v-for="item in dictTypeList"
            :key="item.type"
            :label="item.name"
            :value="item.type"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="字典标签" prop="label">
        <el-input
          v-model="queryParams.label"
          placeholder="请输入字典标签"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="数据状态" clearable class="!w-240px">
          <el-option
            v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery">
          <Icon icon="ep:search" class="mr-5px" />
          搜索
        </el-button>
        <el-button @click="resetQuery">
          <Icon icon="ep:refresh" class="mr-5px" />
          重置
        </el-button>
        <el-button
          type="primary"
          plain
          @click="openForm('create')"
          v-hasPermi="['system:dict:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" />
          新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['system:dict:export']"
        >
          <Icon icon="ep:download" class="mr-5px" />
          导出
        </el-button>
        <el-button type="danger" plain @click="toggleExpandAll">
          <Icon icon="ep:sort" class="mr-5px" />
          展开/折叠
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table
      v-loading="loading"
      :data="list"
      row-key="id"
      :default-expand-all="isExpandAll"
      v-if="refreshTable"
    >
      <el-table-column label="字典标签" align="left" prop="label" />
      <el-table-column label="字典键值" align="center" prop="value" />
      <el-table-column label="字典排序" align="center" prop="sort" />
      <el-table-column label="状态" key="status" align="center">
        <template #default="scope">
          <el-switch
            v-if="scope.row.tenantId === tenantId && checkPermi(['system:dict:update'])"
            v-model="scope.row.status"
            :active-value="CommonStatusEnum.ENABLE"
            :inactive-value="CommonStatusEnum.DISABLE"
            @change="handleStatusChange(scope.row)"
          />
          <dict-tag v-else :type="DICT_TYPE.COMMON_STATUS" :value="scope.row.status" />
        </template>
      </el-table-column>
      <el-table-column label="颜色类型" align="center" prop="colorType" />
      <el-table-column label="CSS Class" align="center" prop="cssClass" />
      <el-table-column label="备注" align="center" prop="remark" show-overflow-tooltip />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createTime"
        width="180"
        :formatter="datetimeFormatter"
      />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            link
            type="primary"
            @click="openForm('update', scope.row.id)"
            v-hasPermi="['system:dict:update']"
            >
            <!-- v-if="scope.row.tenantId === tenantId" -->
            修改
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['system:dict:delete']"
            v-if="scope.row.tenantId === tenantId"
          >
            删除
          </el-button>
          <el-button
            link
            :type="scope.row.disabled !== CommonStatusEnum.DISABLE ? 'danger' : 'primary'"
            @click="handleIsEnabled(scope.row)"
            v-hasPermi="['system:dict:update']"
            v-if="scope.row.tenantId !== tenantId && CommonStatusEnum.ENABLE === scope.row.status"
          >
            {{ scope.row.disabled !== CommonStatusEnum.DISABLE ? '停用' : '启用' }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <DictDataForm ref="formRef" @success="getList" />
</template>
<script lang="ts" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import { datetimeFormatter } from '@/utils/formatTime'
import { handleTree } from '@/utils/tree'
import download from '@/utils/download'
import * as DictDataApi from '@/api/system/dict/dict.data'
import * as DictTypeApi from '@/api/system/dict/dict.type'
import DictDataForm from './DictDataForm.vue'
import { getTenantId } from '@/utils/auth'
import { CommonStatusEnum } from '@/utils/constants'
import { checkPermi } from '@/utils/permission'

defineOptions({ name: 'SystemDictData' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化
const route = useRoute() // 路由

const loading = ref(true) // 列表的加载中
const list = ref() // 列表的数据
const queryParams = reactive({
  label: '',
  status: undefined,
  dictType: route.params.dictType
})
const category = ref<number>(Number(route.params.dictCategory))
const queryFormRef = ref() // 搜索的表单
const isExpandAll = ref(true) // 是否展开，默认全部展开
const refreshTable = ref(true) // 重新渲染表格状态
const exportLoading = ref(false) // 导出的加载中
const dictTypeList = ref<DictTypeApi.DictTypeVO[]>() // 字典类型的列表
const tenantId = getTenantId()

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await DictDataApi.getDictDataList(queryParams)
    list.value = handleTree(data)
  } finally {
    loading.value = false
  }
}

/** 展开/折叠操作 */
const toggleExpandAll = () => {
  refreshTable.value = false
  isExpandAll.value = !isExpandAll.value
  nextTick(() => {
    refreshTable.value = true
  })
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

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, category.value, queryParams.dictType, id)
}

const changeDictType = () => {
  // 匹配字典类型，获取字典类别，传入编辑页面
  dictTypeList.value?.some((dictTypeVO: DictTypeApi.DictTypeVO) => {
    const result = dictTypeVO.type === queryParams.dictType
    if (result) {
      category.value = dictTypeVO.category
    }
    return result
  })
  handleQuery()
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await DictDataApi.deleteDictData(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await DictDataApi.exportDictData(queryParams)
    download.excel(data, '字典数据.xls')
  } catch {
  } finally {
    exportLoading.value = false
  }
}

/** 修改字典项状态 */
const handleStatusChange = async (row: DictDataApi.DictDataVO) => {
  try {
    // 修改状态的二次确认
    const text = row.status === CommonStatusEnum.ENABLE ? '启用' : '停用'
    // 级联字典且有子项时，提示信息追加提示，将所有后代节点全部停用
    let tips = ''
    const children = (row as any).children
    if (children && children.length > 0 && row.status === CommonStatusEnum.DISABLE) {
      tips = '同时会将此字典项的所有子项停用！'
    }
    await message.confirm('确认要"' + text + '""' + row.label + '"字典项吗? ' + tips)
    // 发起修改状态
    await DictDataApi.updateDictDataStatus(row.id as number, row.status, category.value)
    // 刷新列表
    await getList()
  } catch {
    // 取消后，进行恢复按钮
    row.status =
      row.status === CommonStatusEnum.ENABLE ? CommonStatusEnum.DISABLE : CommonStatusEnum.ENABLE
  }
}

/** 修改本租户是否启用字典项状态 */
const handleIsEnabled = async (row: DictDataApi.DictDataVO) => {
  try {
    // 修改状态的二次确认
    const text = row.disabled === CommonStatusEnum.ENABLE ? '停用' : '启用'
    // 级联字典且有子项时，提示信息追加提示，将所有后代节点全部停用
    let tips = ''
    const children = (row as any).children
    if (children && children.length > 0 && row.disabled === CommonStatusEnum.ENABLE) {
      tips = '同时会将此字典项的所有子项停用！'
    }
    await message.confirm('确认本租户要"' + text + '""' + row.label + '"字典项吗? ' + tips)
    // 发起修改状态
    const disabled =
      row.disabled === CommonStatusEnum.ENABLE ? CommonStatusEnum.DISABLE : CommonStatusEnum.ENABLE
    await DictDataApi.updateDictDataDisabled(row.id as number, disabled, category.value)
    // 刷新列表
    await getList()
  } catch {}
}

/** 初始化 **/
onMounted(async () => {
  await getList()
  // 查询字典（精简)列表
  dictTypeList.value = await DictTypeApi.getSimpleDictTypeList()
})
</script>
