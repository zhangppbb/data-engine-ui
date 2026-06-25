<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <el-form
        ref="formRef"
        v-loading="formLoading"
        :model="formData"
        :rules="formRules"
        label-width="80px"
    >
      <el-row>
        <el-col :span="24">
          <el-form-item label="归属部门" prop="deptId">
            <el-tree-select
                v-model="formData.deptId"
                :data="deptList"
                :props="defaultProps"
                check-strictly
                node-key="id"
                placeholder="请选择归属部门"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="用户名称" prop="username">
            <el-input v-model="formData.username" placeholder="请输入用户名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户昵称" prop="nickname">
            <el-input v-model="formData.nickname" placeholder="请输入用户昵称" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="手机号码" prop="mobile">
            <el-input v-model="formData.mobile" maxlength="11" placeholder="请输入手机号码" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="formData.email" maxlength="50" placeholder="请输入邮箱" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="用户性别">
            <el-select v-model="formData.sex" placeholder="请选择">
              <el-option
                  v-for="dict in getIntDictOptions(DICT_TYPE.SYSTEM_USER_SEX)"
                  :key="dict.value"
                  :label="dict.label"
                  :value="dict.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="备注">
            <el-input v-model="formData.remark" placeholder="请输入内容" type="textarea" />
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
import { CommonStatusEnum } from '@/utils/constants'
import { defaultProps, handleTree } from '@/utils/tree'
import * as DeptApi from '@/api/system/dept'
import * as UserApi from '@/api/system/user'
import { FormRules } from 'element-plus'

defineOptions({ name: 'SystemUserForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  nickname: '',
  deptId: -1,
  mobile: '',
  email: '',
  id: undefined,
  username: '',
  sex: undefined,
  remark: '',
  status: CommonStatusEnum.ENABLE
})

const validUserName = (_rule, value, callback) => {
  if (!value) {
    //callback 是提示的信息
    return callback(new Error('用户账号不能为空'))
  } else {
    // 新增时校验，修改时不处理（因为用户账号保存后不可编辑）
    if (formData.value.id === undefined) {
      //调用封装了的异步效验方法，
      UserApi.verifyUserName(value).then(async (response) => {
        /*
          data {
            flag    // 校验结果： 1-不存在，即新用户 2-已存在，但不存在于当前租户 3-当前租户已存在
            userId  // 用户id
          }
        */
        if (response.flag === 1) {
          // 用户不存在，正常录入
          callback()
        } else if (response.flag === 3) {
          message.alertWarning('当前项目下已存在用户账号是' + value + '的用户！')
          return
        } else if (response.flag === 2) {
          await message.confirm('用户账号是' + value + '的用户已存在，是否要将该用户加入到此部门中')
          const data = {
            userId: response.userId,
            deptId: formData.value.deptId,
          }
          UserApi.createUserDept(data).then(() => {
            message.success(t('common.createSuccess'))
            dialogVisible.value = false
            // 发送操作成功的事件
            emit('success')
          })
        }
      })
    } else {
      return callback()
    }
  }
}

const formRules = reactive<FormRules>({
  username: [{ required: true, validator: validUserName, trigger: 'blur' }],
  nickname: [{ required: true, message: '用户昵称不能为空', trigger: 'blur' }],
  email: [
    {
      required: true,
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: ['blur', 'change']
    }
  ],
  mobile: [
    {
      required: true,
      pattern: /^(?:(?:\+|00)86)?1(?:3[\d]|4[5-79]|5[0-35-9]|6[5-7]|7[0-8]|8[\d]|9[189])\d{8}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ]
})
const formRef = ref() // 表单 Ref
const deptList = ref<Tree[]>([]) // 树形结构

/** 打开弹窗 */
const open = async (type: string, userDeptId?: number, deptId: number = -1) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 加载部门树
  deptList.value = handleTree(await DeptApi.getSimpleDeptList())
  // 修改时，设置数据
  if (userDeptId) {
    formLoading.value = true
    try {
      formData.value = await UserApi.getUser(userDeptId)
    } finally {
      formLoading.value = false
    }
  } else {
    formData.value.deptId = deptId
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
    const data = formData.value as unknown as UserApi.UserVO
    if (formType.value === 'create') {
      await UserApi.createUser(data)
      message.success(t('common.createSuccess'))
    } else {
      await UserApi.updateUser(data)
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
    nickname: '',
    deptId: -1,
    mobile: '',
    email: '',
    id: undefined,
    username: '',
    sex: undefined,
    remark: '',
    status: CommonStatusEnum.ENABLE
  }
  formRef.value?.resetFields()
}
</script>
