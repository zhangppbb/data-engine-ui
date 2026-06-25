
<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { CircleCheck, ArrowRight } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { usePageBreadcrumb } from '@/layout/data-engine/usePageBreadcrumb'
import { fetchCaseDetail, CaseInfoItem } from '@/api/cases/caseInfo'
import { ConsultDialog } from '@/components/ConsultDialog'
import gIcon1 from './assets/images/gys/1@2x.png'
import gIcon2 from './assets/images/gys/2@2x.png'
import gIcon3 from './assets/images/gys/3@2x.png'

const router = useRouter()
const route = useRoute()
const { setBreadcrumbTail } = usePageBreadcrumb()

/**
 * 加载状态
 */
const loading = ref(false)

/**
 * 案例数据
 */
const casesModel = ref<CaseInfoItem>({} as CaseInfoItem)

/**
 * 业务痛点
 */
const businessList = computed(() => casesModel.value.caseBusinesses || [])

/**
 * 解决方案
 */
const solutionList = computed(() => casesModel.value.caseSolution || [])

/**
 * 核心系统功能界面
 */
const systemImages = computed(() => casesModel.value.caseCoreImage || [])

/**
 * 客户价值与行业意义
 */
const valueList = computed(() => casesModel.value.caseCustomerIndustry || [])

/**
 * 业务痛点图标
 */
const businessListIcon = ['iconfont icon-jinggao', 'iconfont icon-cuohaoxuanzhong', 'iconfont icon-pintu']

/**
 * 相关应用
 */
const appList = [
  { title: '企业信息分析', desc: '一键生成专业的企业能力评估报告' },
  { title: '企业信用评价报告', desc: '一键生成专业的企业能力评估报告' },
  { title: '企业风险评价报告', desc: '一键生成专业的企业能力评估报告' }
]

const initPage = async () => {
  const id = route.params.id as string
  if (!id) return

  loading.value = true
  try {
    const data = await fetchCaseDetail(id)
    casesModel.value = data
  } catch (error) {
    console.error('获取案例详情失败:', error)
    casesModel.value = {} as CaseInfoItem
  } finally {
    loading.value = false
  }
}
initPage()

watch(
  () => route.params.id,
  () => {
    initPage()
  }
)

watch(
  () => casesModel.value.title,
  (title) => {
    setBreadcrumbTail(
      title ? { label: title, path: '/cases/details' } : null
    )
  },
  { immediate: true }
)

/**
 * 解决方案
 */
const solutionListIcon = [gIcon1, gIcon2, gIcon3]

/**
 * 咨询弹窗组件 ref
 */
const consultDialogRef = ref<InstanceType<typeof ConsultDialog>>()
</script>


<template>
  <div class="min-h-screen">
    <!-- 页面主体 -->
    <div class="mx-auto max-w-1440px flex gap-20px py-20px">
      <!-- 左侧内容 -->
      <div class="min-w-0 flex-1">
        <!-- 顶部信息 -->
        <div class="card">
          <el-skeleton :loading="loading" animated :throttle="{ leading: 300 }">
            <template #template>
              <div class="flex items-start justify-between gap-20px">
                <div class="flex-1">
                  <el-skeleton-item variant="text" class="!w-80px !h-28px !rounded-14px" />
                  <el-skeleton-item variant="h3" class="mt-20px !w-3/5" />
                  <el-skeleton-item variant="p" class="mt-8px" />
                  <el-skeleton-item variant="p" class="mt-4px !w-4/5" />
                </div>
                <div class="flex gap-20px">
                  <div class="min-w-160px rounded-8px bg-[rgba(191,191,191,0.1)] p-20px">
                    <el-skeleton-item variant="text" class="!w-60px !h-16px" />
                    <el-skeleton-item variant="text" class="mt-24px !w-100px !h-18px" />
                  </div>
                  <div class="min-w-160px rounded-8px bg-[rgba(191,191,191,0.1)] p-20px">
                    <el-skeleton-item variant="text" class="!w-60px !h-16px" />
                    <el-skeleton-item variant="text" class="mt-24px !w-100px !h-18px" />
                  </div>
                </div>
              </div>
            </template>
            <template #default>
              <div class="flex items-start justify-between gap-20px">
                <div class="flex-1">
                  <div
                    class="inline-flex flex-center rounded-14px bg-[rgba(0,72,152,0.05)] border-solid border-1px border-[rgba(0,72,152,0.2)] px-12px text-12px text-brandColor h-28px"
                  >
                    {{ casesModel.caseSceneInfo?.sceneName }}
                  </div>
                  <div class="mt-20px text-20px font-600">
                    {{ casesModel.title }}
                  </div>
                  <div class="mt-8px text-18px leading-30px text-#666">
                    {{ casesModel.description }}
                  </div>
                </div>
                <div class="flex gap-20px">
                  <div class="min-w-160px rounded-8px bg-[rgba(191,191,191,0.1)] p-20px">
                    <div class="text-16px text-#999">客户名称</div>
                    <div class="mt-24px text-18px font-600 text-#333">
                      {{ casesModel.customerName }}
                    </div>
                  </div>
                  <div class="min-w-160px rounded-8px bg-[rgba(191,191,191,0.1)] p-20px">
                    <div class="text-16px text-#999">所属行业</div>
                    <div class="mt-24px text-18px font-600 text-#333">
                      {{ casesModel.industry }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </el-skeleton>
        </div>

        <!-- 业务背景 -->
        <div class="mt-20px card">
          <el-skeleton :loading="loading" animated :throttle="{ leading: 300 }">
            <template #template>
              <el-skeleton-item variant="h3" class="!w-180px pb-20px" />
              <div class="mt-24px grid grid-cols-3 gap-20px">
                <div v-for="i in 3" :key="i" class="rounded-10px border border-solid border-#edf0f3 p-18px">
                  <div class="flex items-center gap-10px">
                    <el-skeleton-item variant="circle" class="!w-20px !h-20px" />
                    <el-skeleton-item variant="text" class="!w-2/3 !h-16px" />
                  </div>
                  <el-skeleton-item variant="p" class="mt-12px" />
                  <el-skeleton-item variant="p" class="mt-4px !w-3/4" />
                </div>
              </div>
              <div class="mt-20px rounded-8px border border-solid border-brandColor bg-[rgba(143,153,183,0.1)] p-20px">
                <div class="flex items-center gap-8px">
                  <el-skeleton-item variant="circle" class="!w-20px !h-20px" />
                  <el-skeleton-item variant="text" class="!w-5/6 !h-16px" />
                </div>
              </div>
            </template>
            <template #default>
              <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                {{ casesModel.caseBusinessTitle || '业务背景与痛点' }}
              </div>
              <div class="mt-24px grid grid-cols-3 gap-20px">
                <div
                  v-for="(item, index) in businessList"
                  :key="item.title || index"
                  class="rounded-10px border border-solid border-#edf0f3 p-18px"
                >
                  <div class="flex items-center gap-10px">
                    <div :class="businessListIcon[index]" class="text-20px! text-brandColor"></div>
                    <div class="text-16px font-500 text-brand">
                      {{ item.title }}
                    </div>
                  </div>
                  <div class="mt-12px text-16px leading-24px text-#444">
                    {{ item.description || '暂无' }}
                  </div>
                </div>
              </div>
              <div class="mt-20px rounded-8px border border-solid border-brandColor bg-[rgba(143,153,183,0.1)] p-20px">
                <div class="flex items-center gap-8px">
                  <div class="text-20px">💡</div>
                  <div class="text-16px leading-24px text-brandColor">
                    {{ casesModel.businessSummary }}
                  </div>
                </div>
              </div>
            </template>
          </el-skeleton>
        </div>

        <!-- 方案 -->
        <div class="mt-20px card">
          <el-skeleton :loading="loading" animated :throttle="{ leading: 300 }">
            <template #template>
              <el-skeleton-item variant="h3" class="!w-300px pb-20px" />
              <div class="mt-20px grid grid-cols-3 gap-20px">
                <div v-for="i in 3" :key="i" class="rounded-8px border border-solid border-[rgba(0,0,0,0.1)] p-20px bg-[rgba(191,191,191,0.1)]">
                  <el-skeleton-item variant="rect" class="!w-40px !h-40px !rounded-8px" />
                  <el-skeleton-item variant="text" class="mt-24px !w-3/4 !h-18px" />
                  <el-skeleton-item variant="p" class="mt-12px" />
                  <el-skeleton-item variant="p" class="mt-4px !w-4/5" />
                  <el-skeleton-item variant="text" class="mt-40px !w-80px !h-16px" />
                  <div class="mt-16px flex flex-col gap-4px">
                    <el-skeleton-item variant="text" class="!w-2/3 !h-16px" />
                    <el-skeleton-item variant="text" class="!w-1/2 !h-16px" />
                  </div>
                </div>
              </div>
            </template>
            <template #default>
              <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                {{ casesModel.caseSolutionTitle || '解决方案' }}
              </div>
              <div class="mt-20px grid grid-cols-3 gap-20px">
                <div
                  v-for="(item, index) in solutionList"
                  :key="item.title"
                  class="rounded-8px border border-solid border-[rgba(0,0,0,0.1)] p-20px bg-[rgba(191,191,191,0.1)] transition-all hover:border-brandColor hover:shadow-[0_4px_14px_rgba(21,101,216,0.08)] flex flex-col justify-between"
                >
                  <div>
                    <img :src="solutionListIcon[index]" class="w-40px h-40px" alt="">
                    <div class="mt-24px text-18px font-500 text-[rgba(0,0,0,0.88)]">
                      {{ item.title }}
                    </div>
                    <div class="mt-12px text-16px text-#666 leading-26px">
                      {{ item.description || '暂无' }}
                    </div>
                  </div>
                  <div class="mt-40px">
                    <div class="text-16px font-500 text-[rgba(0,0,0,0.88)]">核心能力</div>
                    <div class="mt-16px">
                      <div
                        v-for="tag in item.characteristic"
                        :key="tag"
                        class="flex items-start gap-4px text-16px"
                      >
                        <div class="text-18px text-#37C532">
                          <el-icon><CircleCheck /></el-icon>
                        </div>
                        <span>{{ tag }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </el-skeleton>
        </div>

        <!-- 功能界面 -->
        <div class="mt-20px card">
          <el-skeleton :loading="loading" animated :throttle="{ leading: 300 }">
            <template #template>
              <el-skeleton-item variant="h3" class="!w-200px pb-20px" />
              <div class="mt-20px grid grid-cols-3 gap-20px">
                <div v-for="i in 3" :key="i" class="overflow-hidden">
                  <el-skeleton-item variant="rect" class="!h-103px !w-full !rounded-8px" />
                  <el-skeleton-item variant="text" class="mx-auto mt-12px !w-2/3 !h-16px" />
                </div>
              </div>
            </template>
            <template #default>
              <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                {{ casesModel.caseCoreImageTitle || '核心系统功能界面' }}
              </div>
              <div class="mt-20px grid grid-cols-3 gap-20px">
                <div
                  v-for="item in systemImages"
                  :key="item.title"
                  class="overflow-hidden"
                >
                  <div class="h-103px overflow-hidden flex items-center justify-center bg-#fff rounded-8px border border-solid border-[rgba(0,0,0,0.1)]">
                    <img class="h-full" :src="item.description" alt="">
                  </div>
                  <div class="mt-12px text-center text-16px">
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </template>
          </el-skeleton>
        </div>

        <!-- 项目成果 -->
        <div class="mt-20px card">
          <el-skeleton :loading="loading" animated :throttle="{ leading: 300 }">
            <template #template>
              <el-skeleton-item variant="h3" class="!w-160px pb-20px" />
              <div class="flex items-center gap-8px bg-[rgba(255,171,34,0.1)] rounded-8px p-20px">
                <el-skeleton-item variant="circle" class="!w-20px !h-20px" />
                <div class="flex-1">
                  <el-skeleton-item variant="p" class="!w-full" />
                  <el-skeleton-item variant="p" class="mt-4px !w-4/5" />
                </div>
              </div>
            </template>
            <template #default>
              <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                项目落地成果
              </div>
              <div class="flex items-center gap-8px bg-[rgba(255,171,34,0.1)] rounded-8px p-20px">
                <div class="text-20px">💡</div>
                <div class="text-16px leading-24px text-#222">
                  {{ casesModel.resultContent }}
                </div>
              </div>
            </template>
          </el-skeleton>
        </div>

        <!-- 价值 -->
        <div class="mt-20px card">
          <el-skeleton :loading="loading" animated :throttle="{ leading: 300 }">
            <template #template>
              <el-skeleton-item variant="h3" class="!w-200px pb-20px" />
              <div class="mt-24px grid gap-12px">
                <div v-for="i in 3" :key="i" class="bg-[rgba(191,191,191,0.1)] p-20px flex items-center gap-12px">
                  <el-skeleton-item variant="rect" class="!w-28px !h-28px !rounded-8px" />
                  <el-skeleton-item variant="text" class="!w-1/3 !h-18px" />
                  <el-skeleton-item variant="text" class="ml-20px !w-2/5 !h-16px" />
                </div>
              </div>
              <div class="mt-20px rounded-8px border border-solid border-brandColor bg-[rgba(143,153,183,0.1)] p-20px">
                <div class="flex items-center gap-8px">
                  <el-skeleton-item variant="circle" class="!w-20px !h-20px" />
                  <div class="flex-1">
                    <el-skeleton-item variant="text" class="!w-1/3 !h-16px" />
                    <el-skeleton-item variant="p" class="mt-8px !w-5/6" />
                  </div>
                </div>
              </div>
            </template>
            <template #default>
              <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                {{ casesModel.caseCustomerIndustryTitle || '客户价值与行业意义' }}
              </div>
              <div class="mt-24px grid gap-12px">
                <div
                  v-for="(item, index) in valueList"
                  :key="item.title || index"
                  class="bg-[rgba(191,191,191,0.1)] p-20px flex items-center"
                >
                  <div class="flex items-center gap-12px">
                    <div class="w-28px h-28px flex-center rounded-8px bg-[rgba(0,72,152,0.1)] border border-solid border-brandColor flex-shrink-0">
                      {{ index + 1 }}
                    </div>
                    <div class="text-18px font-500 text-brandColor">
                      {{ item.title }}
                    </div>
                  </div>
                  <div class="text-16px leading-26px text-#666 ml-20px">
                    {{ item.description || '暂无' }}
                  </div>
                </div>
              </div>
              <div class="mt-20px rounded-8px border border-solid border-brandColor bg-[rgba(143,153,183,0.1)] p-20px">
                <div class="flex items-center gap-8px">
                  <div class="text-20px">💡</div>
                  <div>
                    <div class="text-16px font-500 text-brandColor">{{ casesModel.industryValueTitle || '行业示范价值' }}</div>
                    <div class="text-16px mt-8px leading-24px text-#666">{{ casesModel.industryValueContent }}</div>
                  </div>
                </div>
              </div>
            </template>
          </el-skeleton>
        </div>
    </div>

      <!-- 右侧 -->
      <div class="w-286px shrink-0">
        <el-skeleton :loading="loading" animated :throttle="{ leading: 300 }">
          <template #template>
            <el-skeleton-item variant="h3" class="!w-120px mb-20px" />
            <div class="flex flex-col gap-20px">
              <div v-for="i in 3" :key="i" class="rounded-8px border border-solid border-#fff p-20px bg-#fff">
                <el-skeleton-item variant="text" class="!w-2/3 !h-18px" />
                <el-skeleton-item variant="p" class="mt-12px" />
                <el-skeleton-item variant="text" class="mt-30px ml-auto !w-80px !h-16px" />
              </div>
            </div>
            <el-skeleton-item variant="h3" class="!w-140px mt-20px mb-20px" />
            <div class="bg-#fff p-20px rounded-6px">
              <el-skeleton-item variant="p" />
              <el-skeleton-item variant="p" class="mt-4px !w-4/5" />
              <el-skeleton-item variant="button" class="mt-20px !w-full !h-38px !rounded-full" />
              <el-skeleton-item variant="button" class="mt-14px !w-full !h-38px !rounded-full" />
            </div>
          </template>
          <template #default>
            <div class="text-18px font-500 text-[rgba(0,0,0,0.88)] mb-20px">
              相关应用
            </div>
            <div class="flex flex-col gap-20px">
              <div
                v-for="item in appList"
                :key="item.title"
                class="rounded-8px border border-solid bg-#fff border-#fff p-20px transition-all hover:border-brandColor"
              >
                <div class="text-18px font-500">
                  {{ item.title }}
                </div>
                <div class="mt-12px text-16px leading-24px text-#666">
                  {{ item.desc || item.description }}
                </div>
                <div
                  class="mt-30px flex cursor-pointer items-center justify-end gap-6px text-16px text-brandColor"
                >
                  去体验
                  <el-icon><ArrowRight /></el-icon>
                </div>
              </div>
            </div>
            <div class="mt-20px">
              <div class="text-18px font-500 text-[rgba(0,0,0,0.88)] mb-20px">
                获取定制方案
              </div>
              <div class="bg-#fff p-20px rounded-6px">
                <div class="text-16px leading-24px text-#666">
                  我们的团队可以根据您的实际业务需求，为您定制专属的智能分析解决方案。
                </div>
                <div class="mt-20px flex flex-col gap-14px">
                  <el-button
                    type="primary"
                    class="!h-38px !w-full !rounded-full"
                    @click="consultDialogRef?.open()"
                  >
                    立即咨询
                  </el-button>
                  <el-button
                    class="!ml-0 !h-38px !w-full !rounded-full"
                  >
                    继续查看其他案例
                  </el-button>
                </div>
              </div>
            </div>
          </template>
        </el-skeleton>
      </div>
  </div>
  </div>

  <!-- 咨询弹窗 -->
  <ConsultDialog ref="consultDialogRef" />
</template>

<style scoped>
</style>
