<template>
  <div class="max-w-1440px mx-auto pb-20px">
    <!-- 标题 -->
    <div class="card text-center mt-20px">
      <div class="flex flex-col items-center justify-center gap-8px text-24px font-600 leading-tight md:flex-row md:text-30px">
        <span class="bg-gradient-to-r from-#004898 via-#2f74ff to-#05D7F6 bg-clip-text text-transparent">
          个人中心
        </span>
      </div>
      <div class="mx-auto mt-18px max-w-960px px-12px text-12px text-#8F99B7 md:text-16px">
        管理您的账户、点数、API密钥和使用记录
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-[386px_1fr] gap-[20px] mt-20px">
      <!-- 左侧栏 -->
      <aside class="space-y-[20px]">
        <!-- 用户信息 -->
        <div class="card p-[20px] bg-white rounded-[8px]">
          <!-- 骨架屏 -->
          <div v-if="loading.profile" class="flex flex-col items-center space-y-[12px]">
            <!-- 头像骨架 -->
            <el-skeleton-item variant="circle" style="width: 80px; height: 80px" />
            <!-- 名称骨架 -->
            <el-skeleton-item variant="text" style="width: 80px; height: 20px" />
            <!-- 统计卡片骨架 -->
            <div class="w-full grid grid-cols-2 mt-[20px] gap-x-20px">
              <div class="py-16px flex flex-col w-full flex-center border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)]">
                <el-skeleton-item variant="text" style="width: 60px; height: 24px" />
                <el-skeleton-item variant="text" style="width: 60px; height: 16px" class="mt-8px" />
              </div>
              <div class="py-16px flex flex-col w-full flex-center border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)]">
                <el-skeleton-item variant="text" style="width: 60px; height: 24px" />
                <el-skeleton-item variant="text" style="width: 60px; height: 16px" class="mt-8px" />
              </div>
            </div>
          </div>
          <!-- 真实内容 -->
          <div v-else class="flex flex-col items-center space-y-[12px]">
            <!-- 头像 -->
            <div
              v-if="profile.avatar"
              class="w-[80px] h-[80px] rounded-full overflow-hidden"
            >
              <img :src="profile.avatar" class="w-full h-full object-cover" />
            </div>
            <div
              v-else
              class="w-[80px] h-[80px] rounded-full bg-brandColor text-white flex items-center justify-center font-medium text-[32px] leading-[32px]"
            >
              {{ profile.nickname?.charAt(0) || '用' }}
            </div>
            <!-- 用户名 -->
            <div class="font-normal text-[20px] text-[#222222] leading-[20px]">{{ profile.nickname || '用户' }}</div>
            <!-- 点数 & 调用次数 -->
            <div class="w-full grid grid-cols-2 mt-[20px] gap-x-20px">
              <div class="py-16px flex flex-col w-full flex-center font-semibold text-[24px] text-[#FF7532] border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)]">
                {{ formatNumber(profile.remainingPoints) }}
                <span class="font-normal text-[16px] text-[#666666] not-italic">剩余点数</span>
              </div>
              <div class="py-16px flex flex-col w-full flex-center font-semibold text-[24px] text-[#006BFD] border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)]">
                {{ formatNumber(profile.totalCallCount) }}
                <span class="font-normal text-[16px] text-[#666666] not-italic">调用次数</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 设置 -->
        <div class="card p-0!">
          <div class="font-medium text-[18px] text-[rgba(0,0,0,0.88)] leading-[18px] text-left not-italic p-20px border-b-1px border-b-solid border-b-[rgba(0,0,0,0.06)]">设置</div>
          <div class="font-normal text-[16px] leading-16px text-[#666666] not-italic p-20px">
            <div class="space-y-20px" style="--el-checkbox-height: auto;">
              <div class="font-medium text-[16px] leading-16px text-[#222222] leading-[16px] text-left not-italic">通知设置</div>
              <div class="flex justify-between items-center">
                <div>接收服务更新通知</div>
                <el-checkbox checked></el-checkbox>
              </div>
              <div class="flex justify-between items-center">
                <div>接收使用提醒</div>
                <el-checkbox checked></el-checkbox>
              </div>
              <div class="flex justify-between items-center">
                <div>接收营销活动</div>
                <el-checkbox></el-checkbox>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- 右侧主内容 -->
      <main class="space-y-[20px]">
        <!-- 账户信息 -->
        <div class="card p-0!">
          <div class="font-medium text-[18px] text-[rgba(0,0,0,0.88)] leading-[18px] text-left not-italic p-20px border-b-1px border-b-solid border-b-[rgba(0,0,0,0.06)]">账户信息</div>
          <div class="px-20px pb-20px font-normal text-[16px] text-[#666666] leading-[16px] not-italic">
            <!-- 骨架屏 -->
            <div v-if="loading.profile">
              <div v-for="i in 4" :key="i" class="py-20px flex border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <el-skeleton-item variant="text" style="width: 220px; height: 16px" />
              </div>
            </div>
            <!-- 真实内容 -->
            <div v-else>
              <div class="py-20px flex border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <div class="w-5em mr-24px">用户名</div>
                <div class="text-#222222">{{ profile.nickname || '-' }}</div>
              </div>
              <div class="py-20px flex border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <div class="w-5em mr-24px">邮箱</div>
                <div class="text-#222222">{{ profile.email || '-' }}</div>
              </div>
              <div class="py-20px flex border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <div class="w-5em mr-24px">手机号</div>
                <div class="text-#222222">{{ maskPhone(profile.phone) || '-' }}</div>
              </div>
              <div class="py-20px flex border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <div class="w-5em mr-24px">注册时间</div>
                <div class="text-#222222">{{ profile.registeredAt || '-' }}</div>
              </div>
            </div>

            <div class="mt-[20px]">
              <el-button type="primary" @click="openEditDialog">编辑资料</el-button>
            </div>
          </div>
        </div>

        <!-- API密钥管理 -->
        <div class="card p-0!" v-if="false">
          <div class="font-medium text-[18px] text-[rgba(0,0,0,0.88)] leading-[18px] text-left not-italic p-20px border-b-1px border-b-solid border-b-[rgba(0,0,0,0.06)]">
            API密钥管理
          </div>
          <!-- 骨架屏 -->
          <div v-if="loading.apiKey" class="p-20px">
            <div class="border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)] p-20px">
              <el-skeleton-item variant="text" style="width: 120px; height: 16px" />
              <el-skeleton-item variant="text" style="width: 280px; height: 14px" class="mt-8px" />
              <div class="flex mt-[20px] gap-20px">
                <el-skeleton-item variant="text" style="width: 90px; height: 40px" />
                <el-skeleton-item variant="text" style="width: 90px; height: 40px" />
              </div>
            </div>
          </div>
          <!-- 真实内容 -->
          <div v-else>
            <!-- 密钥已查看提示 -->
            <div v-if="!apiKeyInfo.apiKey && apiKeyLoaded" class="p-20px text-center">
              <div class="text-48px text-[#ddd] mb-12px">
                <el-icon size="48px"><Lock /></el-icon>
              </div>
              <div class="text-16px text-[#999] mb-12px">密钥已查看，无法再次显示完整密钥</div>
              <div class="flex justify-center gap-20px font-normal text-[16px] text-[#666666]">
                <div class="bg-#fff rounded-[4px] py-10px px-20px">
                  <div>今日调用</div>
                  <div class="font-500 text-brandColor mt-8px">{{ formatNumber(apiKeyInfo.todayCallCount) }}</div>
                </div>
                <div class="bg-#fff rounded-[4px] py-10px px-20px">
                  <div>额度限制</div>
                  <div class="font-500 text-brandColor mt-8px">{{ formatNumber(apiKeyInfo.quotaLimit) }}</div>
                </div>
              </div>
            </div>
            <!-- 密钥信息展示 -->
            <div v-else class="p-20px">
              <div class="border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)] p-20px">
                <div class="flex items-center">
                  <div class="font-medium text-[16px] text-[#222222] leading-[16px]">生产环境</div>
                  <div class="flex items-center ml-8px">
                    <div class="flex px-12px h-24px leading-24px rounded-4px text-12px text-#37C532 bg-[rgba(55,197,50,.1)]">
                      活跃
                    </div>
                  </div>
                </div>
                <div class="font-normal text-[14px] text-[#999999] leading-[14px] mt-8px">
                  {{ apiKeyInfo.apiKey || 'sk-prod-****' }}
                  <el-button
                    v-if="apiKeyInfo.apiKey"
                    type="primary"
                    link
                    size="small"
                    class="ml-8px"
                    @click="copyApiKey(apiKeyInfo.apiKey)"
                  >
                    复制
                  </el-button>
                </div>
                <div class="flex mt-[20px] gap-20px font-normal text-[16px] text-[#666666] leading-[16px]">
                  <div class="bg-#fff rounded-[4px] py-10px px-20px">
                    <div>今日调用</div>
                    <div class="font-500 text-brandColor mt-8px">{{ formatNumber(apiKeyInfo.todayCallCount) }}</div>
                  </div>
                  <div class="bg-#fff rounded-[4px] py-10px px-20px">
                    <div>额度限制</div>
                    <div class="font-500 text-#222222 mt-8px">{{ formatNumber(apiKeyInfo.quotaLimit) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 使用记录 -->
        <div class="card p-0!">
          <div class="font-medium text-[18px] text-[rgba(0,0,0,0.88)] leading-[18px] text-left not-italic p-20px border-b-1px border-b-solid border-b-[rgba(0,0,0,0.06)]">
            使用记录
          </div>
          <div class="p-20px">
            <!-- 骨架屏：模拟表格结构 -->
            <div v-if="loading.records" class="space-y-8px">
              <!-- 表头骨架 -->
              <div class="flex gap-16px pb-12px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <el-skeleton-item v-for="w in [80, 100, 160, 60, 60]" :key="w" variant="text" :style="{ width: w + 'px', height: '16px' }" />
              </div>
              <!-- 行骨架 -->
              <div v-for="i in 5" :key="i" class="flex gap-16px py-14px border-b border-b-solid border-b-[rgba(0,0,0,0.04)]">
                <el-skeleton-item variant="text" style="width: 80px; height: 14px" />
                <el-skeleton-item variant="text" style="width: 100px; height: 14px" />
                <el-skeleton-item variant="text" style="flex: 1; height: 14px" />
                <el-skeleton-item variant="text" style="width: 60px; height: 14px" />
                <el-skeleton-item variant="text" style="width: 60px; height: 14px" />
              </div>
            </div>
            <!-- 真实表格 -->
            <div v-else>
              <AppTable
                :data="usageRecords"
                :columns="usageColumns"
                :options="pagination"
                border
                style="width: 100%"
                @current-change="currentChange"
                @size-change="sizeChange"
              >
                <template #status="{ row }">
                  <el-tag :type="row.status === '成功' ? 'success' : 'danger'">
                    {{ row.status }}
                  </el-tag>
                </template>
              </AppTable>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- 编辑资料弹窗 -->
    <Dialog
      v-model="editDialogVisible"
      title="编辑个人信息"
      :width="480"
      :fullscreen="false"
    >
      <el-form
        ref="editFormRef"
        :model="editForm"
        :rules="editFormRules"
        label-width="80px"
        label-position="left"
      >
        <el-form-item label="用户名称" prop="nickname">
          <el-input v-model="editForm.nickname" placeholder="请输入用户名称" maxlength="30" show-word-limit />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email" placeholder="请输入邮箱地址" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" :loading="loading.saving" @click="handleSaveProfile">保存</el-button>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { Lock } from '@element-plus/icons-vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { AppTable } from '@/components/AppTable'
import { Dialog } from '@/components/Dialog'
import { usePagination } from '@/hooks/web/usePagination'
import { useUserStore } from '@/store/modules/user'
import {
  getUsageRecords,
  type UsageRecordVO
} from '@/api/personal-center'
import {
  getApiKeyInfo,
  type ApiKeyInfoVO
} from '@/api/workspace'
import { maskPhone } from '@/utils'
// ==================== user store ====================
const userStore = useUserStore()

// ==================== 页面加载状态 ====================
/**
 * 各模块加载状态控制骨架屏显隐
 * - profile: 个人信息模块
 * - apiKey: 密钥管理模块
 * - records: 使用记录表格模块
 * - saving: 编辑资料保存中
 */
const loading = reactive({
  profile: true,
  apiKey: true,
  records: true,
  saving: false
})

// ==================== 个人信息模块 ====================
/**
 * 用户个人信息，从 store 中 clientUserInfo 计算得到
 */
const profile = computed(() => {
  const info = userStore.clientUserInfo
  if (!info) {
    return {
      nickname: '',
      avatar: '',
      email: '',
      phone: '',
      remainingPoints: 0,
      totalCallCount: 0,
      registeredAt: ''
    }
  }
  return {
    nickname: info.name || info.loginName || '',
    avatar: info.photo || '',
    email: info.email || '',
    phone: info.phone || '',
    remainingPoints: Number(info.remainAmount) || 0,
    totalCallCount: Number(info.madeCalls) || 0,
    registeredAt: info.createTime || ''
  }
})

/**
 * 加载用户个人信息
 * 调用 store.fetchClientUserInfoAction() 获取并存入 store
 */
const loadProfile = async () => {
  loading.profile = true
  try {
    await userStore.fetchClientUserInfoAction()
  } catch (error) {
    // 接口异常时 store 中保持 null，页面显示空状态
  } finally {
    loading.profile = false
  }
}

// ==================== 密钥信息模块 ====================
/**
 * API 密钥信息
 * 密钥采用加密展示（如 sk-prod-****83gdjw2qx）
 * 首次请求返回完整密钥，后续请求返回 null（需求 4.4）
 */
const apiKeyInfo = ref<ApiKeyInfoVO>({
  apiKey: '',
  todayCallCount: 0,
  quotaLimit: 0
})

/**
 * 是否已完成密钥接口调用
 * 用于区分"接口未返回"与"接口返回 null（密钥已查看过）"两种状态
 */
const apiKeyLoaded = ref(false)

/**
 * 加载 API 密钥信息
 * 调用 GET /engineclient/workspace/api-key-info 接口
 * 对应需求 4.3（密钥加密显示、今日调用次数、额度限制次数）
 * 对应需求 4.4（密钥只返回一次，后续返回 null）
 */
const loadApiKeyInfo = async () => {
  loading.apiKey = true
  try {
    const data = await getApiKeyInfo()
    apiKeyLoaded.value = true
    if (data) {
      // 首次查看，返回完整密钥及调用统计信息
      apiKeyInfo.value = data
    } else {
      // 返回 null，说明密钥已查看过，仅展示调用统计
      apiKeyInfo.value = { apiKey: '', todayCallCount: 0, quotaLimit: 0 }
    }
  } catch (error) {
    apiKeyLoaded.value = true
    apiKeyInfo.value = { apiKey: '', todayCallCount: 0, quotaLimit: 0 }
  } finally {
    loading.apiKey = false
  }
}

/**
 * 复制密钥到剪贴板
 * @param key - 待复制的完整密钥字符串
 */
const copyApiKey = async (key: string) => {
  try {
    await navigator.clipboard.writeText(key)
    ElMessage.success('密钥已复制到剪贴板')
  } catch {
    ElMessage.warning('复制失败，请手动复制')
  }
}

// ==================== 使用记录模块 ====================
/**
 * 使用记录表格数据
 * 对应需求 4.5：字段包含【时间、服务、调用内容、消耗点数、状态（成功/失败）】
 */
const usageRecords = ref<UsageRecordVO[]>([])

/**
 * 使用记录表格列配置
 * status 列使用 slot 插槽自定义渲染为 el-tag
 */
const usageColumns = [
  { prop: 'createTime', label: '时间', width: '180' },
  { prop: 'businessName', label: '服务', width: '180' },
  { prop: 'moduleName', label: '调用内容' },
  { prop: 'consumptionPoints', label: '消耗点数', width: '100' },
  // { prop: 'status', label: '状态', width: '100', slot: 'status' }
]

/**
 * 加载使用记录列表（分页）
 * 调用 POST /engineclient/workspace/usage-records 接口
 * 每次翻页/切换页大小时由 usePagination hook 自动触发
 */
const loadUsageRecords = async () => {
  loading.records = true
  try {
    const params = {
      pageNo: pagination.paginationConfig!.currentPage || 1,
      pageSize: pagination.paginationConfig!.pageSize || 10
    }
    const result = await getUsageRecords(params)
    usageRecords.value = (result?.rows as unknown as UsageRecordVO[]) || []
    pagination.paginationConfig!.total = result?.total || 0
  } catch (error) {
    usageRecords.value = []
    pagination.paginationConfig!.total = 0
  } finally {
    loading.records = false
  }
}

/**
 * 分页相关状态与方法
 * 使用封装的 usePagination hook，传入 loadUsageRecords 作为数据请求回调
 * - pagination: 分页配置对象（包含 currentPage、pageSize、total 等），传给 AppTable 的 :options
 * - currentChange: 切换页码回调，绑定到 AppTable 的 @current-change 事件
 * - sizeChange: 切换页大小回调，绑定到 AppTable 的 @size-change 事件
 */
const { pagination, currentChange, sizeChange } = usePagination(loadUsageRecords, {
  showPagination: false,
  paginationConfig: { pageSize: 10, }
})

// ==================== 编辑个人信息模块 ====================
/**
 * 编辑资料弹窗显隐控制
 */
const editDialogVisible = ref(false)

/**
 * 编辑表单 ref，用于表单校验
 */
const editFormRef = ref<FormInstance>()

/**
 * 编辑表单数据模型
 * 对应需求 4.6：字段为【用户名称、邮箱】
 */
const editForm = reactive({
  nickname: '',
  email: ''
})

/**
 * 编辑表单校验规则
 * - 用户名称：必填，1-30 字符
 * - 邮箱：必填，需符合邮箱格式
 */
const editFormRules: FormRules = {
  nickname: [
    { required: true, message: '请输入用户名称', trigger: 'blur' },
    { min: 1, max: 30, message: '用户名称长度在1-30个字符之间', trigger: 'blur' }
  ],
  email: [
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ]
}

/**
 * 打开编辑资料弹窗
 * 将当前个人信息回填到表单中
 */
const openEditDialog = () => {
  editForm.nickname = profile.value.nickname
  editForm.email = profile.value.email
  editDialogVisible.value = true
}

/**
 * 提交编辑资料表单
 * 通过 store.updateClientUserInfoAction() 调用接口
 * 成功后关闭弹窗并重新加载个人信息
 */
const handleSaveProfile = async () => {
  if (!editFormRef.value) return
  const valid = await editFormRef.value.validate()
  if (!valid) return

  loading.saving = true
  try {
    await userStore.updateClientUserInfoAction({
      id: userStore.clientUserInfo?.id,
      name: editForm.nickname,
      email: editForm.email
    })
    ElMessage.success('个人信息修改成功')
    editDialogVisible.value = false
    await loadProfile()
  } catch (error) {
    ElMessage.error('修改失败，请稍后重试')
  } finally {
    loading.saving = false
  }
}

// ==================== 工具函数 ====================
/**
 * 格式化数字为千分位显示（中文格式）
 * @param num - 待格式化的数字
 * @returns 格式化后的字符串，如 "1,234"；undefined/null 时返回 "0"
 */
const formatNumber = (num: number | undefined): string => {
  if (num === undefined || num === null) return '0'
  return num.toLocaleString('zh-CN')
}

// ==================== 页面初始化 ====================
/**
 * 页面挂载时并行加载所有模块数据：
 * 1. 个人信息（4.2）
 * 2. 密钥信息（4.3/4.4）
 * 3. 使用记录（4.5）
 */
const initPage = () => {
  loadProfile()
  // loadApiKeyInfo()
  loadUsageRecords()
}
initPage()
</script>

<style scoped>
</style>
