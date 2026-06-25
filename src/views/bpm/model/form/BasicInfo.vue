<template>
  <el-form ref="formRef" :model="modelData" :rules="rules" label-width="120px" class="mt-20px">
    <el-form-item label="流程标识" prop="key" class="mb-20px">
      <div class="flex items-center">
        <el-input
          class="!w-440px"
          v-model="modelData.key"
          :disabled="!!modelData.id"
          placeholder="请输入流程标识，以字母或下划线开头"
        />
        <el-tooltip
          class="item"
          :content="modelData.id ? '流程标识不可修改！' : '新建后，流程标识不可修改！'"
          effect="light"
          placement="top"
        >
          <Icon icon="ep:question-filled" class="ml-5px" />
        </el-tooltip>
      </div>
    </el-form-item>
    <el-form-item label="流程名称" prop="name" class="mb-20px">
      <el-input
        v-model="modelData.name"
        :disabled="!!modelData.id"
        clearable
        placeholder="请输入流程名称"
      />
    </el-form-item>
    <el-form-item label="流程分类" prop="category" class="mb-20px">
      <el-select
        class="!w-full"
        v-model="modelData.category"
        clearable
        placeholder="请选择流程分类"
      >
        <el-option
          v-for="category in categoryList"
          :key="category.code"
          :label="category.name"
          :value="category.code"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="流程图标" class="mb-20px">
      <UploadFile v-model="modelData.icon" :limit="1" height="64px" width="64px" />
    </el-form-item>
    <el-form-item label="流程描述" prop="description" class="mb-20px">
      <el-input v-model="modelData.description" clearable type="textarea" />
    </el-form-item>
    <el-form-item label="流程类型" prop="type" class="mb-20px">
      <el-radio-group style="--el-text-color-regular: #666;--el-fill-color-blank: #fff;" v-model="modelData.type">
        <el-radio
          v-for="dict in getIntDictOptions(DICT_TYPE.BPM_MODEL_TYPE)"
          :key="dict.value"
          :value="dict.value"
        >
          {{ dict.label }}
        </el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否可见" prop="visible" class="mb-20px">
      <el-radio-group style="--el-text-color-regular: #666;--el-fill-color-blank: #fff;" v-model="modelData.visible">
        <el-radio
          v-for="dict in getBoolDictOptions(DICT_TYPE.INFRA_BOOLEAN_STRING)"
          :key="dict.value as string"
          :value="dict.value"
        >
          {{ dict.label }}
        </el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="谁可以发起" prop="startUserType" class="mb-20px">
      <el-select
        v-model="modelData.startUserType"
        placeholder="请选择谁可以发起"
        @change="handleStartUserTypeChange"
      >
        <el-option label="全员" :value="0" />
        <el-option label="指定人员" :value="1" />
        <el-option label="指定部门" :value="2" />
      </el-select>
      <div v-if="modelData.startUserType === 1" class="mt-2 flex flex-wrap gap-2">
        <UserSelect v-model="modelData.startUserIds" :multiple="true" />
      </div>
      <div v-if="modelData.startUserType === 2" class="mt-2 flex flex-wrap gap-2">
        <DeptSelect v-model="modelData.startDeptIds" :multiple="true" />
      </div>
    </el-form-item>
    <el-form-item label="流程管理员" prop="managerUserIds" class="mb-20px">
      <UserSelect v-model="modelData.managerUserIds" :multiple="true" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { DICT_TYPE, getBoolDictOptions, getIntDictOptions } from '@/utils/dict'
import { CategoryApi, CategoryVO } from '@/api/bpm/category'

// 获取分类列表
const categoryList = ref<CategoryVO[]>([])

const formRef = ref()

const rules = {
  name: [{ required: true, message: '流程名称不能为空', trigger: 'blur' }],
  key: [
    { required: true, message: '流程标识不能为空', trigger: 'blur' },
    {
      validator: (_rule: any, value: string, callback: any) => {
        if (!value) {
          callback()
          return
        }
        if (!/^[a-zA-Z_][\-_.0-9_a-zA-Z$]*$/.test(value)) {
          callback(new Error('只能包含字母、数字、下划线、连字符和点号，且必须以字母或下划线开头'))
          return
        }
        callback()
      },
      trigger: 'blur'
    }
  ],
  category: [{ required: true, message: '流程分类不能为空', trigger: 'blur' }],
  type: [{ required: true, message: '是否可见不能为空', trigger: 'blur' }],
  visible: [{ required: true, message: '是否可见不能为空', trigger: 'blur' }],
  managerUserIds: [{ required: true, message: '流程管理员不能为空', trigger: 'blur' }]
}

// 创建本地数据副本
const modelData = defineModel<any>()

/** 处理发起人类型变化 */
const handleStartUserTypeChange = (value: number) => {
  if (value === 0) {
    modelData.value = {
      ...modelData.value,
      startUserIds: [],
      startDeptIds: []
    }
  } else if (value === 1) {
    modelData.value = {
      ...modelData.value,
      startDeptIds: []
    }
  } else if (value === 2) {
    modelData.value = {
      ...modelData.value,
      startUserIds: []
    }
  }
}

/** 表单校验 */
const validate = async () => {
  await formRef.value?.validate()
}

const initData = async () => {
  categoryList.value = await CategoryApi.getCategorySimpleList()
}

/** 初始化 */
onMounted(async () => {
  await initData()
})

defineExpose({
  validate
})
</script>

<style lang="scss" scoped>
.bg-gray-100 {
  background-color: #f5f7fa;
  transition: all 0.3s;

  &:hover {
    background-color: #e6e8eb;
  }

  .ep-close {
    font-size: 14px;
    color: #909399;
    transition: color 0.3s;

    &:hover {
      color: #f56c6c;
    }
  }
}
</style>
