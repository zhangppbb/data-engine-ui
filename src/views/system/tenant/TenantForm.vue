<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" width="50%">
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="130px"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="租户名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入租户名" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="租户套餐" prop="packageId">
            <el-select
              v-model="formData.packageId"
              clearable
              placeholder="请选择租户套餐"
              :disabled="formType === 'update'"
            >
              <el-option
                v-for="item in packageList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item v-if="formType === 'create'" label="管理员账号" prop="username">
            <el-input v-model="formData.username" placeholder="请输入管理员账号" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item v-if="formType === 'create'" label="管理员名称" prop="nickname">
            <el-input v-model="formData.nickname" placeholder="请输入管理员名称" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="账号额度" prop="accountCount">
            <el-input-number
              v-model="formData.accountCount"
              :min="0"
              controls-position="right"
              placeholder="请输入账号额度"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="过期时间" prop="expireTime">
            <el-date-picker
              v-model="formData.expireTime"
              clearable
              placeholder="请选择过期时间"
              type="date"
              value-format="x"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="绑定域名" prop="websites">
            <el-input-tag
              v-model="formData.websites"
              placeholder="请输入绑定域名，按回车添加"
              class="w-full"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="租户状态" prop="status">
            <el-radio-group style="--el-text-color-regular: #666;--el-fill-color-blank: #fff;" v-model="formData.status">
              <el-radio
                v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
                :key="dict.value"
                :value="dict.value"
              >
                {{ dict.label }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="租户类型" prop="tenantType">
            <el-select v-model="formData.tenantType" placeholder="请选择租户类型">
              <el-option
                v-for="dict in getIntDictOptions(DICT_TYPE.SYSTEM_TENANT_TYPE)"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            v-if="formData.tenantType === SystemTenantTypeEnum.MULTIPLE"
            label="管理租户"
            prop="managedTenant"
          >
            <el-select v-model="formData.managedTenant" placeholder="请选择管理租户" multiple>
              <el-option
                v-for="tenant in tenantList"
                :key="tenant.id"
                :label="tenant.name"
                :value="tenant.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item
            v-if="formType === 'create'"
            label="该租户是否已创建"
            prop="otherAlreadyTenant"
          >
            <el-switch
              v-model="formData.otherAlreadyTenant"
              :active-value="true"
              :inactive-value="false"
              @change="changeIsAlready"
            />
            <div class="noteClass"
              >*注：是否在其它环境创建该租户，如果没有创建，请关闭此按钮，如果已经创建，请打开此按钮</div
            >
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="租户ID" prop="id" v-if="isSHowTenantId">
            <el-input-number
              v-model="formData.id"
              :min="0"
              controls-position="right"
              placeholder="请输入租户ID"
            />
            <div class="noteClass">*注：请保持两边租户id一致</div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import * as TenantApi from '@/api/system/tenant'
import { CommonStatusEnum, SystemTenantTypeEnum } from '@/utils/constants'
import * as TenantPackageApi from '@/api/system/tenantPackage'

defineOptions({ name: 'SystemTenantForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  name: undefined,
  packageId: undefined,
  username: undefined,
  accountCount: undefined,
  expireTime: undefined,
  websites: [],
  status: CommonStatusEnum.ENABLE,
  // 新增专属
  nickname: undefined,
  otherAlreadyTenant: false,
  tenantType: SystemTenantTypeEnum.SINGLE,
  managedTenant: []
})
const formRules = reactive({
  name: [{ required: true, message: '租户名不能为空', trigger: 'blur' }],
  packageId: [{ required: true, message: '租户套餐不能为空', trigger: 'blur' }],
  username: [{ required: true, message: '管理员账号不能为空', trigger: 'blur' }],
  status: [{ required: true, message: '租户状态不能为空', trigger: 'blur' }],
  accountCount: [{ required: true, message: '账号额度不能为空', trigger: 'blur' }],
  expireTime: [{ required: true, message: '过期时间不能为空', trigger: 'blur' }],
  nickname: [{ required: true, message: '管理员名称不能为空', trigger: 'blur' }],
  tenantType: [{ required: true, message: '租户类型不能为空', trigger: 'blur' }],
  managedTenant: [{ required: true, message: '管理租户不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref
const packageList = ref([] as TenantPackageApi.TenantPackageVO[]) // 租户套餐
const tenantList = ref([] as TenantApi.TenantVO[]) // 租户列表

const isSHowTenantId = ref(false) // 表单是否显示租户ID
/** 根据租户是否存在选择隐藏和显示租户ID */
const changeIsAlready = (val: boolean) => {
  if (val) {
    isSHowTenantId.value = true
  } else {
    isSHowTenantId.value = false
  }
}

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  isSHowTenantId.value = false
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await TenantApi.getTenant(id)
    } finally {
      formLoading.value = false
    }
  }
  // 加载套餐列表
  packageList.value = await TenantPackageApi.getTenantPackageList()
  // 加载租户列表
  tenantList.value = await TenantApi.getTenantSimpleList(id)
  // 因为数据库没有存储系统租户，在编辑时默认将系统租户加上，避免select下拉框回显异常，新增时不需要，因为系统租户只能有一个且已存在
  if (id) {
    packageList.value.push({
      id: 0,
      name: '系统租户',
      status: 0,
      remark: '',
      creator: '',
      updater: '',
      updateTime: '',
      menuIds: [],
      createTime: new Date()
    })
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as TenantApi.TenantVO
    if (formType.value === 'create') {
      await TenantApi.createTenant(data)
      message.success(t('common.createSuccess'))
    } else {
      await TenantApi.updateTenant(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    name: undefined,
    packageId: undefined,
    username: undefined,
    accountCount: undefined,
    expireTime: undefined,
    websites: [],
    status: CommonStatusEnum.ENABLE,
    nickname: undefined,
    otherAlreadyTenant: false,
    tenantType: SystemTenantTypeEnum.SINGLE,
    managedTenant: []
  }
  formRef.value?.resetFields()
}
</script>

<style scoped lang="scss">
.noteClass {
  padding-left: 20px;
  color: red;
}
</style>
