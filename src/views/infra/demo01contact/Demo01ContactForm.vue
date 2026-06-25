<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="名字" prop="name">
        <el-input v-model="formData.name" placeholder="请输入名字" />
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group style="--el-text-color-regular: #666;--el-fill-color-blank: #fff;" v-model="formData.sex">
          <el-radio
            v-for="dict in getIntDictOptions(DICT_TYPE.SYSTEM_USER_SEX)"
            :key="dict.value"
            :value="dict.value"
          >
            {{ dict.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出生年" prop="birthday">
        <el-date-picker
          v-model="formData.birthday"
          type="date"
          value-format="x"
          placeholder="选择出生年"
        />
      </el-form-item>
      <el-form-item label="简介" prop="description">
        <Editor v-model="formData.description" height="150px" />
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <UploadFile
          v-model="formData.avatar"
          :fileType="['png', 'jpg', 'gif']"
          :limit="1"
          module="infra_demo01_contact"
        />
      </el-form-item>
      <el-form-item label="创建部门" prop="createDept">
        <DeptSelect v-model="formData.createDept" :disabled="true" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { getIntDictOptions, DICT_TYPE } from '@/utils/dict'
import { Demo01ContactApi, Demo01ContactVO } from '@/api/infra/demo01contact'

/** 示例联系人 表单 */
defineOptions({ name: 'Demo01ContactForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗
const { refreshAppointPage } = useTagsView() // 页面刷新

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  name: undefined,
  sex: undefined,
  birthday: undefined,
  description: undefined,
  avatar: [],
  createDept: undefined,
  version: undefined
})
const formRules = reactive({
  name: [{ required: true, message: '名字不能为空', trigger: 'blur' }],
  sex: [{ required: true, message: '性别不能为空', trigger: 'blur' }],
  birthday: [{ required: true, message: '出生年不能为空', trigger: 'blur' }],
  description: [{ required: true, message: '简介不能为空', trigger: 'blur' }],
  createDept: [{ required: true, message: '创建部门不能为空', trigger: 'blur' }],
  version: [{ required: true, message: '乐观锁不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: number, createDept?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await Demo01ContactApi.getDemo01Contact(id)
    } finally {
      formLoading.value = false
    }
  } else {
    formData.value.createDept = createDept
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  await formRef.value.validate()
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as Demo01ContactVO
    if (formType.value === 'create') {
      await Demo01ContactApi.createDemo01Contact(data)
      message.success(t('common.createSuccess'))
    } else {
      await Demo01ContactApi.updateDemo01Contact(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
    // 刷新指定模块列表页
    refreshAppointPage('infra_demo01_contact')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    name: undefined,
    sex: undefined,
    birthday: undefined,
    description: undefined,
    avatar: [],
    createDept: undefined,
    version: undefined
  }
  formRef.value?.resetFields()
}
</script>
