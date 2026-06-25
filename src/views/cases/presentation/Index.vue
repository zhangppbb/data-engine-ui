
<script setup lang="ts">
import { CircleCheck, ArrowRight } from '@element-plus/icons-vue'
import img1 from './assets/images/img4.png'
import img2 from './assets/images/img5.png'
import img3 from './assets/images/img6.png'
import gIcon1 from './assets/images/gys/1@2x.png'
import gIcon2 from './assets/images/gys/2@2x.png'
import gIcon3 from './assets/images/gys/3@2x.png'
import { useRouter, useRoute } from 'vue-router'
import { usePageBreadcrumb } from '@/layout/data-engine/usePageBreadcrumb'
import mockData from '../mockData'

const router = useRouter()
const route = useRoute()
const { setBreadcrumbTail } = usePageBreadcrumb()


const casesModel = ref({
  title: ''
})

const initPage = () => {
  const id = route.params.id
  const index = mockData.findIndex(o => String(o.id) === String(id))
  casesModel.value = mockData[index]
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
      title ? { label: title, path: '/cases/presentation' } : null
    )
  },
  { immediate: true }
)

/**
 * 业务痛点
 */
const businessListIcon = ['iconfont icon-jinggao', 'iconfont icon-cuohaoxuanzhong', 'iconfont icon-pintu']


/**
 * 解决方案
 */
const solutionListIcon = [gIcon1, gIcon2, gIcon3]

/**
 * 相关应用
 */
const appList = [
  {
    title: '企业信息分析',
    desc: '一键生成专业的企业能力评估报告'
  },
  {
    title: '企业信用评价报告',
    desc: '一键生成专业的企业能力评估报告'
  },
  {
    title: '企业风险评价报告',
    desc: '一键生成专业的企业能力评估报告'
  }
]
</script>


<template>
  <div class="min-h-screen">
    <!-- 页面主体 -->
    <div class="mx-auto max-w-1440px flex gap-20px py-20px">
      <!-- 左侧内容 -->
      <div class="min-w-0 flex-1">
        <!-- 顶部信息 -->
        <div class="card">
          <div class="flex items-start justify-between gap-20px">
            <!-- 左侧 -->
            <div class="flex-1">
              <div
                class="inline-flex flex-center rounded-14px bg-[rgba(0,72,152,0.05)] border-solid border-1px border-[rgba(0,72,152,0.2)] px-12px text-12px text-brandColor h-28px"
              >
                {{ casesModel.badge }}
              </div>

              <div class="mt-20px text-20px font-600">
                {{ casesModel.title }}
              </div>

              <div class="mt-8px text-18px leading-30px text-#666">
                {{ casesModel.description }}
              </div>
            </div>

            <!-- 右侧信息 -->
            <div class="flex gap-20px">
              <div
                class="min-w-160px rounded-8px bg-[rgba(191,191,191,0.1)] p-20px"
              >
                <div class="text-16px text-#999">
                  客户名称
                </div>

                <div class="mt-24px text-18px font-600 text-#333">
                  {{ casesModel.customerName }}
                </div>
              </div>

              <div
                class="min-w-160px rounded-8px bg-[rgba(191,191,191,0.1)] p-20px"
              >
                <div class="text-16px text-#999">
                  所属行业
                </div>

                <div class="mt-24px text-18px font-600 text-#333">
                  {{ casesModel.industry }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 业务背景 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
              {{ casesModel.businessTitle }}
          </div>

          <div class="mt-24px grid grid-cols-3 gap-20px">
            <div
              v-for="(item, index) in casesModel.businessList"
              :key="item.title"
              class="rounded-10px border border-solid border-#edf0f3 p-18px"
            >
              <div class="flex items-center gap-10px">
                <div :class="businessListIcon[index]" class="text-20px! text-brandColor"></div>

                <div class="text-16px font-500 text-brand">
                  {{ item.title }}
                </div>
              </div>

              <div class="mt-12px text-16px leading-24px text-#444">
                {{ item.description }}
              </div>
            </div>
          </div>

          <!-- 提示 -->
          <div
            class="mt-20px rounded-8px border border-solid border-brandColor bg-[rgba(143,153,183,0.1)] p-20px"
          >
            <div class="flex items-center gap-8px">
              <div class="text-20px">
                💡
              </div>

              <div class="text-16px leading-24px text-brandColor">
                {{ casesModel.businessSummary }}
              </div>
            </div>
          </div>
        </div>

        <!-- 方案 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            {{ casesModel.solutionTitle }}
          </div>

          <div class="mt-20px grid grid-cols-3 gap-20px">
            <div
              v-for="(item, index) in casesModel.solutionList"
              :key="item.title"
              class="rounded-8px border border-solid border-[rgba(0,0,0,0.1)] p-20px bg-[rgba(191,191,191,0.1)] transition-all hover:border-brandColor hover:shadow-[0_4px_14px_rgba(21,101,216,0.08)] flex flex-col justify-between"
            >
              <div>

                  <!-- 图标 -->
              <img :src="solutionListIcon[index]" class="w-40px h-40px" alt="">

              <!-- 标题 -->
              <div class="mt-24px text-18px font-500 text-[rgba(0,0,0,0.88)]">
                {{ item.title }}
              </div>

              <!-- 描述 -->
              <div class="mt-12px text-16px text-#666 leading-26px">
                {{ item.description }}
              </div>
              </div>

              <!-- 核心能力 -->
              <div class="mt-40px">
                <div class="text-16px font-500 text-[rgba(0,0,0,0.88)]">
                  核心能力
                </div>

                <div class="mt-16px">
                  <div
                    v-for="tag in item.features"
                    :key="tag"
                    class="flex items-start gap-4px text-16px"
                  >
                    <div
                      class="text-18px text-#37C532"
                    >
                      <el-icon><CircleCheck /></el-icon>
                    </div>

                    <span>{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 功能界面 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            {{ casesModel.systemTitle }}
          </div>

          <div class="mt-20px grid grid-cols-3 gap-20px">
            <div
              v-for="item in casesModel.systemImages"
              :key="item.title"
              class="overflow-hidden"
            >
              <div
                class="h-103px overflow-hidden flex items-center justify-center bg-#fff rounded-8px border border-solid border-[rgba(0,0,0,0.1)]"
              >
                <img class="h-full" :src="item.image" alt="">
              </div>

              <div class="mt-12px text-center text-16px">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>

        <!-- 项目成果 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
              {{ casesModel.resultTitle }}
          </div>

          <div class="flex items-center gap-8px bg-[rgba(255,171,34,0.1)] rounded-8px p-20px">
            <div class="text-20px">
              💡
            </div>

            <div class="text-16px leading-24px text-#222">
                {{ casesModel.resultContent }}
            </div>
          </div>
        </div>

        <!-- 价值 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
              {{ casesModel.valueTitle }}
          </div>

          <div class="mt-24px grid gap-12px">
            <div
              v-for="(item, index) in casesModel.valueList"
              :key="item.title"
              class=" bg-[rgba(191,191,191,0.1)] p-20px flex items-center"
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
                {{ item.description }}
              </div>
            </div>
          </div>

          <!-- 底部说明 -->
           <div
            class="mt-20px rounded-8px border border-solid border-brandColor bg-[rgba(143,153,183,0.1)] p-20px"
          >
            <div class="flex items-center gap-8px">
              <div class="text-20px">
                💡
              </div>

              <div>
                <div class="text-16px font-500 text-brandColor">{{ casesModel.industryValueTitle }}</div>
                <div class="text-16px mt-8px leading-24px text-#666">{{ casesModel.industryValueContent }}</div>
              </div>
              <!-- <div class="text-16px leading-24px text-brandColor">
                项目必要性：传统合作商管理普遍存在人工核验效率偏低、信用评价模式静态固化、合规风控措施滞后、资源匹配方式相仿、跨部门数据壁垒突出等痛点，已无法适配企业数字化转型及规模化招采业务发展需求。
              </div> -->
            </div>
          </div>
          <!-- <div
            class="mt-24px rounded-8px border border-solid border-#d9e7ff bg-#f7fbff p-20px"
          >
            <div class="text-16px font-700 text-brandColor">
              行业示范价值
            </div>

            <div class="mt-14px text-14px leading-28px text-#5f6b7a">
              本项目为大型基建企业搭建行业级供应链管理提供了可复制的智能化解决方案，
              成功实现了从传统人工评估向数据驱动智能评估的转型。
            </div>
          </div> -->
        </div>
      </div>

      <!-- 右侧 -->
      <div class="w-286px shrink-0">
        <div class="text-18px font-500 text-[rgba(0,0,0,0.88)] mb-20px">
          相关应用
        </div>

        <!-- 相关应用 -->
        <div class="">
          <div class="space-y-20px">
            <div
              v-for="item in casesModel.relatedList"
              :key="item.title"
              class="rounded-8px border border-solid bg-#fff border-#fff p-20px transition-all hover:border-brandColor"
            >
              <div class="text-18px font-500">
                {{ item.title }}
              </div>

              <div class="mt-12px text-16px leading-24px text-#666">
                {{ item.description }}
              </div>

              <div
                class="mt-30px flex cursor-pointer items-center justify-end gap-6px text-16px text-brandColor"
              >
                去体验
                <el-icon><ArrowRight /></el-icon>
                <!-- <span>›</span> -->
              </div>
            </div>
          </div>
        </div>

        <!-- 获取方案 -->
        <div class="mt-20px">
          <div class="text-18px font-500 text-[rgba(0,0,0,0.88)] mb-20px">
            获取定制方案
          </div>

          <div class="bg-#fff p-20px rounded-6px">
            <div class="text-16px leading-24px text-#666">
              我们的团队可以根据您的实际业务需求，为您定制专属的智能分析解决方案。
            </div>

            <div class="mt-20px space-y-14px">
              <el-button
                type="primary"
                class="!h-38px !w-full !rounded-full"
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
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>