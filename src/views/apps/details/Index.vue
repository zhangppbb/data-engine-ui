
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import {
  Lightning,
  Timer,
  Histogram,
  Check,
  Tools,
  ScaleToOriginal,
  Location,
  Box
} from '@element-plus/icons-vue'
import icon from './assets/images/icon.svg'
import { usePageBreadcrumb } from '@/layout/data-engine/usePageBreadcrumb'
import StepBlock from '@/views/resources/skill/kyb/list/components/StepBlock.vue'
import { useRouter, useRoute } from 'vue-router'
import mockData from '../mockData'
import { useUserStoreWithOut } from '@/store/modules/user'

const userStore = useUserStoreWithOut()
const isLoggedIn = computed(() => userStore.getIsLoggedIn)


const router = useRouter()
const route = useRoute()
const { setBreadcrumbTail } = usePageBreadcrumb()

const apiModel = ref({
  name: ''
})

const initPage = () => {
  const id = route.params.id
  const index = mockData.findIndex(o => String(o.id) === String(id))
  apiModel.value = mockData[index]
  console.log(apiModel.value)
}
initPage()

watch(
  () => route.params.id,
  () => {
    initPage()
  }
)

watch(
  () => apiModel.value?.name,
  (name) => {
    setBreadcrumbTail(name ? { label: name, path: '/apps/details' } : null)
  },
  { immediate: true }
)

/**
 * 功能列表
 */
const featureList = [
  {
    title: '工商信息分析',
    desc:
      '全面分析企业工商登记信息，包括注册资本、股东结构、经营范围等',
    icon: 'iconfont icon-gongju',
    hot: '4.26%'
  },
  {
    title: '司法诉讼核查',
    desc:
      '查询企业涉及的司法诉讼案件，分析案件类型、判决结果、执行情况',
    icon: 'iconfont icon-falv2'
  },
  {
    title: '舆情监控',
    desc:
      '监控企业在各大媒体平台的舆情信息，识别负面报道和风险事件',
    icon: 'iconfont icon-jiankong'
  },
  {
    title: '风险评分模型',
    desc:
      '基于多维度数据构建风险评分模型，输出0-100的风险评分和等级',
    icon: 'iconfont icon-moxingliebiao'
  }
]

/**
 * 当前 tab
 */
const activeName = ref('intro')

/**
 * 标签页列表
 */
const tabList = [
  { name: 'intro', label: '介绍' },
  // { name: 'function', label: '功能' },
  // { name: 'guide', label: '使用说明' }
]

/**
 * 场景列表
 */
const SCENE_LIST = [
  '金融机构对贷款企业的风险评估',
  '投资机构对目标公司的尽职调查',
  '企业对潜在合作伙伴的信用评估',
  '政府监管部门对企业的合规检查'
]

const openApplication = () => {
  // if (!isLoggedIn.value) {
  //   userStore.openLoginDialog()
  //   return
  // }
  
  const { href, path: routePath } = apiModel.value
  if (href) {
    window.open(href);
    return
  }

  if (routePath) {
    router.push(routePath)
    return
  }

  ElMessage.warning('暂未开放！')
}
</script>

<template>
  <div class="">
    <div class="flex gap-20px mx-auto max-w-1440px">
      <div class="w-320px shrink-0">
      <!-- 左侧卡片 -->
      <div
        class="card"
      >
        <!-- 图标 -->
        <div class="flex justify-center">
          <div
            class="h-74px w-74px flex items-center justify-center rounded-8px border border-solid border-brandColor bg-#F7F8FA"
          >
            <img
              :src="icon"
              class="h-34px"
            >
            </div>
          </div>

        <!-- 标题 -->
        <div class="mt-20px text-center text-22px font-600 text-#222">
          {{ apiModel.name }}
        </div>

        <!-- 标签 -->
        <div class="mt-8px flex flex-wrap gap-8px justify-center">
          <span
            v-for="item in apiModel.tags"
            :key="item"
            class="flex items-center justify-center rounded-4px h-20px bg-[rgba(0,72,152,0.05)] px-8px text-12px text-brandColor"
          >
            {{ item }}
          </span>
        </div>

        <!-- 描述 -->
        <div class="mt-20px leading-34px text-16px text-#222">
          {{ apiModel.shortDescription }}
        </div>

        <!-- 信息 -->
        <div class="mt-20px flex flex-col gap-12px">
          <!-- <div class="flex items-center text-14px text-#666">
            <el-icon class="mr-8px">
              <Timer />
            </el-icon>
            平均响应时间：5-10秒
          </div> -->

          <div class="flex items-center text-14px text-#666">
            <el-icon class="mr-8px">
              <Histogram />
            </el-icon>
            本月使用：1,245次
          </div>
        </div>

        <!-- 分割线 -->
        <div class="my-20px h-1px bg-[rgba(0,0,0,0.06)]"></div>

        <!-- 使用次数 -->
        <div class="mb-20px flex items-center justify-between">
          <div
            class="inline-flex rounded-4px h-20px leading-20px bg-[rgba(0,72,152,0.05)] px-8px text-12px text-brandColor"
          >
            免费试用
          </div>

          <!-- <div class="text-16px text-#666">
            剩余试用次数
            <span class="ml-4px text-16px font-600 text-#37C532">3次</span>
          </div> -->
        </div>

        <!-- 按钮 -->
        <el-button
          type="primary"
          class="!h-44px !w-full !rounded-999px !text-16px"
          @click="openApplication"
        >
          立即使用（免费）
        </el-button>
      </div>
    </div>
       <!-- 右侧内容 -->
      <div
        class="flex-1 mb-20px"
      >
        <!-- tabs -->
        <div class="card p-0!">
          <div class="border-b-2px border-b-solid border-b-#E5E5E5">
            <div class="flex items-center gap-34px">
              <button
                v-for="tab in tabList"
                :key="tab.name"
                class="relative h-48px border-none bg-transparent px-0 text-15px font-700 px-20px transition-colors cursor-pointer"
                :class="activeName === tab.name ? 'text-brandColor' : 'text-#666 hover:text-brandColor'"
                type="button"
                @click="activeName = tab.name"
              >
                {{ tab.label }}
                <span v-if="activeName === tab.name" class="absolute bottom--1px left-0 h-2px w-full bg-brandColor"></span>
              </button>
            </div>
          </div>
        </div>
         
        <!-- 应用介绍 -->
        <div v-if="activeName === 'intro'" class="card mt-20px  min-h-70vh">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            应用介绍
          </div>
          <section>
              <div class="mt-20px text-16px leading-24px text-#222">
                {{ apiModel.longDescription }}
              </div>

            </section>

            <!-- 适用场景 -->
            <section class="mt-40px">
              
            <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                适用场景
            </div>

              <div class="mt-20px flex flex-col gap-12px">
                <div
                  v-for="item in apiModel.scenes"
                  :key="item.id"
                  class="flex items-center text-16px text-#222"
                >
                  <div
                    class="mr-4px h-18px w-18px flex items-center justify-center rounded-full border border-solid border-#37C532 text-#37C532"
                  >
                    <Check />
                  </div>

                  {{ item.name }}
                </div>
              </div>
            </section>

            <!-- 成果示例 -->
            <section class="mt-40px " v-if="false">
              <div class="text-18px font-500 pb-20px ">
                成果示例
              </div>

              <div
              class="mt-20px overflow-hidden rounded-8px border border-solid border-[rgba(0,0,0,0.1)]"
              >
                <!-- header -->
                <div
                  class="flex items-center justify-between bg-[rgba(191,191,191,0.1)] p-20px"
                >
                  <div class="text-16px text-[rgba(0,0,0,0.4)]">
                    企业风险报告示例摘要
                  </div>

                  <div
                    class="cursor-pointer text-16px font-500 text-brandColor"
                  >
                    查看完整报告
                  </div>
                </div>

                <!-- body -->
                <div class="bg-white p-20px">
                  <pre
                    class="overflow-x-auto whitespace-pre-wrap text-16px leading-24px text-[rgba(34,34,34,0.88)] font-[inherit]"
                  >
{
  "企业名称": "XX科技有限公司",
  "统一社会信用代码": "91310101MA1XXXXXXX",
  "风险评分": 68,
  "风险等级": "中等风险",
  "主要风险点": [
    "工商异常：经营异常名录（2023年）",
    "司法诉讼：3起买卖合同纠纷",
    "舆情风险：近期有2条负面报道"
  ],
  "建议": "建议进一步核实经营异常原因，关注诉讼进展，加强舆情监控"
}
                  </pre>
                </div>
              </div>
            </section>
        </div>

        <!-- 功能 -->
        <div v-if="activeName === 'function'" class="card mt-20px">
           <div>
            <!-- 标题 -->
            <div class="text-18px font-500 pb-20px">
              核心功能
            </div>

            <!-- 功能列表 -->
            <div class="grid grid-cols-2 border border-solid border-[rgba(0,0,0,0.1)]">
              <div
                v-for="(item, index) in featureList"
                :key="item.title"
                :class="[
                  'relative min-h-194px p-20px transition-all',
                  index % 2 === 0 ? 'border-r border-r-solid border-r-[rgba(0,0,0,0.1)]' : '',
                  index < 2 ? 'border-b border-b-solid border-b-[rgba(0,0,0,0.1)]' : '',
                  'hover:bg-#f8fbff'
                ]"
              >
                <!-- 热度 -->
                <!-- <div
                  v-if="item.hot"
                  class="absolute left-96px top-44px rounded-full bg-#ff4d73 px-12px py-4px text-14px font-700 text-white"
                >
                  {{ item.hot }}
                </div> -->

                <!-- 图标 -->
                <div
                  class="text-20px text-brandColor"
                  :class="item.icon"
                >
                </div>

                <!-- 标题 -->
                <div class="mt-20px text-18px font-600 text-[rgba(34,34,34,0.88)] ">
                  {{ item.title }}
                </div>

                <!-- 描述 -->
                <div class="mt-20px max-w-560px text-16px leading-24px text-[rgba(102,102,102,0.88)]">
                  {{ item.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 使用说明 -->
        <div v-if="activeName === 'guide'" class="card mt-20px min-h-60vh">
          <div>
            
             <!-- 标题 -->
            <div class="text-18px font-500 pb-20px">
              使用说明
            </div>

            <div class="relative">
              <div class="absolute bottom-0 left-16px top-30px border-l border-l-dashed border-l-brandColor h-[calc(100%-100px)]"></div>
              <StepBlock
                :step="1"
                title="输入企业信息"
              >
                <div class="m-0 mt-14px text-16px text-#444 pb-40px">
                  输入企业名称或统一社会信用代码，支持模糊搜索
                </div>
              </StepBlock>
              <StepBlock
                :step="2"
                title="确认消耗点数"
              >
                <div class="m-0 mt-14px text-16px text-#444 pb-40px">
                  VIP用户免费，普通用户确认消耗10点数
                </div>
              </StepBlock>
               <StepBlock
                :step="3"
                title="生成报告"
              >
                <div class="m-0 mt-14px text-16px text-#444 pb-40px">
                 系统自动收集分析数据，5-10秒内生成完整风险报告
                </div>
              </StepBlock>
               <StepBlock
                :step="4"
                title="查看与导出"
              >
                <div class="m-0 mt-14px text-16px text-#444">
                 在线查看报告，支持PDF、Word格式导出
                </div>
              </StepBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

