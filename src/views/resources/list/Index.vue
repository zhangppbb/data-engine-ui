<template>
  <div class="min-h-screen overflow-x-hidden">
    <!-- 页面容器 -->
    <div class="bg-white py-20px pb-32px">
      <div class="max-w-1440px mx-auto">
      <!-- <div class="mx-auto max-w-1440px px-16px pb-40px pt-24px md:px-0px md:pt-40px"> -->
        <!-- 标题 -->
        <div class="text-center mt-20px">
          <div
            class="flex flex-col items-center justify-center gap-8px text-24px font-600 leading-tight md:flex-row md:text-46px"
          >
            <span>资源馆 ·</span>
            <span
              class="bg-gradient-to-r from-#004898 via-#2f74ff to-#05D7F6 bg-clip-text text-transparent"
            >
              数据服务原子工具与资源市场
            </span>
          </div>

          <div
            class="mx-auto mt-18px max-w-960px px-12px text-12px text-#8F99B7 md:text-16px"
          >
            4大核心服务模块，覆盖企业全维度数据能力，统一接入标准，企业 / Agent 一键调用
          </div>
        </div>

        <!-- 顶部模块 -->
        <div
          class="mt-32px grid grid-cols-1 gap-20px md:grid-cols-2 xl:grid-cols-4"
        >
          <div
            v-for="item in topModules"
            :key="item.title"
            class="group relative cursor-pointer overflow-hidden rounded-8px border border-solid border-#F7F8FA p-20px transition-all duration-300 hover:-translate-y-2px hover:shadow-[0_18px_40px_rgba(31,41,55,0.12)]"
            :class="item.bg"
            @click="() => {
              if (item.route) {
                router.push(item.route)
              }
            }"
          >
            <div class="relative z-2">
              <div class="text-22px font-600">
                {{ item.title }}
              </div>

              <div
                class="mt-8px min-h-72px text-16px leading-22px text-[rgba(0,0,0,0.4)]"
              >
                {{ item.desc }}
              </div>

              <div
                class="mt-32px inline-flex items-center rounded-full px-12px h-24px leading-24px text-12px border-solid border-1px bg-[rgba(255,255,255,0.5)]"
                :class="item.tagClass"
              >
                {{ item.tag }}
              </div>
            </div>

            <img
              :src="item.icon"
              alt=""
              class="absolute bottom-20px z-1 right-20px h-120px w-120px transition-all duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>

      <!-- 热门资源 -->
      <div class="bg-[#F7F8FA] py-32px">
        <div class="max-w-1440px mx-auto relative">
          <div 
            class="mb-32px text-center text-30px font-600"
            data-aos="zoom-in"
          >
            热门资源推荐
          </div>

          <div
            class="mt-28px grid grid-cols-1 gap-16px md:grid-cols-2 xl:grid-cols-3"
          >
            <ResourceCard
              v-for="item in hotResources"
              :key="item.title"
              :type="item.type"
              :type-class="item.typeClass"
              :title="item.title"
              :desc="item.desc"
              :action="item.action"
              :count="item.count"
              @click="() => {
                if (item.route) {
                  router.push(item.route)
                }
              }"
            />
          </div>

          <!-- 箭头 -->
          <div class="
            w-40px
            h-40px
            bg-[rgba(191,191,191,0.1)]
            border
            border-solid
            border-[rgba(0,0,0,0.2)] rounded-full right--80px absolute flex-center text-#BFBFBF cursor-pointer top-50%
          ">
            <Icon icon="ep:arrow-right" class="text-16px! font-bold" />
          </div>

          <div class="
            w-40px
            h-40px
            bg-[rgba(191,191,191,0.1)]
            border
            border-solid
            border-[rgba(0,0,0,0.2)] rounded-full left--80px absolute flex-center text-#BFBFBF cursor-pointer top-50%
          ">
            <Icon icon="ep:arrow-left" class="text-16px! font-bold" />
          </div>
        </div>
      </div>

      <!-- 使用指南 -->
      <div class="bg-[#fff] py-32px">
          <div class="max-w-1440px mx-auto">
           <div 
              class="mb-32px text-center text-30px font-600"
              data-aos="zoom-in"
            >
              资源使用三步指南
            </div>

          <div
            class="mt-32px flex flex-col gap-28px xl:flex-row xl:items-center xl:justify-between"
          >
            <div
              v-for="(item, index) in guideList"
              :key="item.title"
              class="relative flex flex-1 flex-col items-center text-center"
            >
              <div class="flex-center">
                <div
                  class="flex h-36px w-36px items-center justify-center rounded-full bg-[var(--brand-color)] text-18px font-700 text-white"
                >
                  {{ index + 1 }}
                </div>

                <div class="ml-12px text-14px font-500">
                  {{ item.title }}
                </div>
              </div>

              <div
                class="mt-20px max-w-300px text-14px leading-20px text-#757575"
              >
                {{ item.desc }}
              </div>

              <div
                v-if="index !== guideList.length - 1"
                class="hidden xl:block absolute right-[-25%] top-18px h-2px w-50% bg-[rgba(143,153,183,0.2)]"
              ></div>
            </div>
          </div>

          <!-- 开发支持 -->
          <div
            class="mt-32px flex flex-col md:flex-row md:justify-between bg-[rgba(191,191,191,0.1)] p-20px md:p-20px  rounded-20px"
          >
            <div>
              <div class="text-20px font-700  mb-12px font-500">
                开发者支持
              </div>

              <div class="mt-12px text-16px">
                提供详细 API 文档、SDK、代码示例和技术支持
              </div>
            </div>

            <div
              class="flex cursor-pointer items-center w-168px h-58px justify-center gap-8px self-start rounded-full border border-solid border-[var(--brand-color)] bg-white text-22px font-400 text-[var(--brand-color)] transition-all duration-300 hover:bg-#2348a5 hover:text-white md:self-center"
            >
              接入指南
              <Icon icon="ep:compass" class="text-22px!" />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ResourceCard } from '@/components/ResourceCard'
import icon1 from './assets/images/icon1.png'
import icon2 from './assets/images/icon2.png'
import icon3 from './assets/images/icon3.png'
import icon4 from './assets/images/icon4.png'
import router from '@/router'

/**
 * 顶部功能模块
 */
const topModules = [
  {
    title: 'API集市',
    desc: '提供工商、司法、舆情等标准数据接口，开发者可直接集成至应用或服务中。',
    tag: '热门',
    icon: icon1,
    route: '/resources/api',
    // 卡片背景
    bg: `
      bg-gradient-to-b
      from-#F6FFF8
      to-#DEFDDC
      border border-solid border-[rgba(182,182,182,0.1)]
      rounded-8px
    `,

    // 标签样式
    tagClass: `
      bg-#ECFBE8
      text-#37C532
    `
  },

  {
    title: 'MCP集市',
    desc: '为AI扩展外部工具调用能力，基于真实业务数据响应，避免模型幻觉。',
    tag: '新上线',
    icon: icon2,
    route: '/resources/mcp',
    bg: `
      bg-gradient-to-b
      from-#FFFBF6
      to-#FFE9CE
      border border-solid border-[rgba(182,182,182,0.1)]
      rounded-8px
    `,

    tagClass: `
      bg-#FFF1E5
      text-#FF7532
    `
  },

  {
    title: 'Skill广场',
    desc: '预训练的AI技能，通过自然语言交互即可使用，无需额外开发。',
    tag: '易用',
    icon: icon3,
    route: '/resources/skill',
    bg: `
      bg-gradient-to-t
      from-#BEDAFF
      to-#F6FAFF
      border border-solid border-[rgba(182,182,182,0.1)]
      rounded-8px
    `,

    tagClass: `
      bg-#EAF3FF
      text-#267FEF
    `
  },

  {
    title: '高质量数据集',
    desc: '经过清洗与标注的行业数据，支持批量下载或API订阅，可用于模型训练。',
    tag: '专业',
    icon: icon4,
    bg: `
      bg-gradient-to-t
      from-#FFD8F2
      to-#FFFAFC
      border border-solid border-[rgba(182,182,182,0.1)]
      rounded-8px
    `,

    tagClass: `
      bg-#FFF0FA
      text-#F563C4
    `
  }
]

/**
 * 热门资源
 */
const hotResources = [
  {
    type: 'API',
    typeClass: 'bg-#dcfce7 text-#16a34a',
    title: '企业模糊搜索API',
    desc: '通过企业名称关键词模糊搜索企业列表，返回基础工商信息',
    action: '免费测试',
    count: '12.5k',
    route: '/resources/api'
  },
  {
    type: 'MCP',
    typeClass: 'bg-#ffedd5 text-#ea580c',
    title: '企业风险分析MCP',
    desc: 'AI Agent 插件，支持自然语言查询企业风险信息，生成分析报告',
    action: '免费测试',
    count: '8.2k'
  },
  {
    type: 'Skill',
    typeClass: 'bg-#dbeafe text-#2563eb',
    title: '舆情监控Skill',
    desc: '智能舆情监控技能，自动识别负面舆情，生成监控日报',
    action: '立即体验',
    count: '15.3k'
  },
  {
    type: '数据集',
    typeClass: 'bg-#fce7f3 text-#db2777',
    title: '中国企业工商信息数据集',
    desc: '包含全国亿+企业工商信息，每日更新，支持 API 订阅批量下载',
    action: '查看详情',
    count: '12.5k'
  },
  {
    type: 'API',
    typeClass: 'bg-#dcfce7 text-#16a34a',
    title: '司法诉讼查询API',
    desc: 'AI Agent 插件，支持自然语言查询企业风险信息，生成分析报告',
    action: '免费测试',
    count: '8.2k'
  },
  {
    type: 'MCP',
    typeClass: 'bg-#ffedd5 text-#ea580c',
    title: '产业链分析MCP',
    desc: '分析产业链上下游关系，识别关键节点企业，可视化展示',
    action: '免费测试',
    count: '6.7k'
  }
]

/**
 * 使用指南
 */
const guideList = [
  {
    title: '选择资源',
    desc: '浏览四大资源市场，根据需求选择合适的 API、MCP、Skill 或数据集'
  },
  {
    title: '测试体验',
    desc: '每个资源提供免费测试次数，确认功能符合预期后再正式调用'
  },
  {
    title: '一键接入',
    desc: '获取 API Key、MCP 配置或 Skill ID，按照接入指南快速集成到您的系统'
  }
]
</script>

<style scoped>
body {
  margin: 0;
}
</style>