<template>
  <div class="min-h-screen">
    <!-- 视频弹窗 -->
    <el-dialog
      v-model="videoDialogVisible"
      width="800px"
      destroy-on-close
      title="接入指南"
      append-to-body
      :lock-scroll="false"
    >
      <div class="w-full flex justify-center p-20px">
        <video
          class="h-440px w-800px rounded-8px"
          controls
          autoplay
        >
          <source src="/static/videos/mcp-guide.mp4" type="video/mp4" />
          您的浏览器不支持视频播放
        </video>
      </div>
    </el-dialog>

    <section class="mx-auto max-w-1440px card">
      <div class="text-center">
        <div
          class="bg-gradient-to-r from-#004898 via-#2f74ff to-#05D7F6 bg-clip-text text-30px text-transparent font-600"
        >
          SKILL广场 · 开箱即用的行业SKILL
        </div>

        <div class="mt-12px text-16px text-brandColor">让AI真正懂中国企业</div>

        <div class="mx-auto mt-24px text-14px text-#8F99B7">
          30+ 经过真实场景验证的SKILL，来自 6 个开源仓库，配套 MCP，30秒搭建一个成型报告。
        </div>

        <el-space wrap :size="18" class="mt-24px">
          <el-button
            type="primary"
            round
            size="large"
            class="!h-58px min-w-230px !text-22px"
            style="

--el-border-radius-round: 58px; --el-button-bg-color: var(--brand-color); --el-button-border-color: var(--brand-color); --el-button-hover-bg-color: #2852a4; --el-button-hover-border-color: #2852a4;"
          >
            浏览全部SKILL
          </el-button>
          <el-button
            round
            size="large"
            class="!h-58px min-w-230px !text-22px"
            style="

--el-border-radius-round: 58px; --el-button-bg-color: transparent; --el-button-border-color: var(--brand-color); --el-button-hover-bg-color: #e5efff; --el-button-hover-border-color: var(--brand-color); --el-button-hover-text-color: var(--brand-color); --el-button-text-color: var(--brand-color);"
            @click="() => {
              router.push('/resources/skill/access-guide')
            }"
          >
            接入指南
          </el-button>
        </el-space>

        <div class="mt-24px flex justify-center">
          <div
            class="h-30px flex items-center rounded-full bg-[rgba(5,215,246,0.1)] px-20px text-14px text-#00B6D1"
          >
            提示词 | Claude / Cursor / Windows / 百度 / Coze / CherryStudio 等平台可用
          </div>
        </div>

        <div class="mt-16px flex flex-wrap items-center justify-center gap-12px">
          <div
            v-for="tag in topTags"
            :key="tag"
            class="h-30px flex cursor-pointer items-center rounded-full bg-#e7edf9 px-20px text-14px text-#666 transition-all hover:bg-brandColor hover:text-white"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </section>

    <section class="card mx-auto mt-20px max-w-1440px">
      <div class="overflow-hidden border border-solid border-[rgba(0,0,0,0.1)] rounded-8px">
        <div class="flex items-center gap-8px p-20px bg-[rgba(191,191,191,0.1)]">
          <el-avatar :size="32" class="!bg-#fff6d8 !text-#e0a900">
            <el-icon><Sunny /></el-icon>
          </el-avatar>

          <div>
            <div class="text-16px font-600">怎么使用SKILL?</div>
            <div class="mt-12px text-16px text-[rgba(0,0,0,0.4)]">
              三步完成，在AI对话框里直接操作，不需要写代码
            </div>
          </div>
        </div>

        <el-row class="!ml-0 !mr-0">
          <el-col
            :xs="24"
            :lg="8"
            class="min-h-282px border-b border-b-solid border-b-[rgba(0,0,0,0.1)] p-20px lg:border-b-0 lg:border-r lg:border-r-solid lg:border-r-[rgba(0,0,0,0.1)]"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-8px">
                <el-avatar :size="32" class="!bg-brandColor !text-14px !text-white">
                  1
                </el-avatar>
                <div class="m-0 text-18px font-500">完成 MCP 接入</div>
              </div>
              <span class="text-14px text-#BFBFBF">首次约1分钟</span>
            </div>

            <div class="mt-16px text-16px leading-24px text-#444444">
              注册账号、获取 API Key，粘贴配置到你的 AI 工具。只需做一次，所有 SKILL 共用。
            </div>

            <el-button link type="primary" class="mt-16px !p-0 !text-16px">
              查看接入指南
              <el-icon class="ml-8px"><Right /></el-icon>
            </el-button>

              <!-- 视频 -->
            <div class="mt-20px overflow-hidden rounded-8px border border-solid border-[#f0f0f0] cursor-pointer"   @click="videoDialogVisible = true">
              <video
                class="block h-auto w-full"
                autoplay
                muted
                loop
                playsinline
              >
                <source :src="`/static/videos/mcp-guide.mp4?t=${Date.now()}`" type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
            </div>
          </el-col>

          <el-col
            :xs="24"
            :lg="8"
            class="min-h-282px border-b border-b-solid border-b-[rgba(0,0,0,0.1)] p-20px lg:border-b-0 lg:border-r lg:border-r-solid lg:border-r-[rgba(0,0,0,0.1)]"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-8px">
                <el-avatar :size="32" class="!bg-brandColor !text-14px !text-white">
                  2
                </el-avatar>
                <div class="m-0 text-18px font-500">在 AI 对话框加载 SKILL</div>
              </div>
            </div>


            <div class="mt-20px flex flex-wrap items-center gap-8px">
              <span class="text-14px text-#BFBFBF">客群：</span>
              <div
                v-for="(item, index) in skillTabs"
                :key="item.label"
                round
                effect="plain"
                class="!h-28px border border-solid rounded-14px flex-center text-12px px-12px"
                :class="index === 0 ? 'border-[rgba(0,72,152,0.2)] bg-[rgba(0,72,152,0.1)] text-brandColor' : 'border-#F7F8FA bg-#fff text-[rgba(0,0,0,0.4)]'"
              >
                {{ item.icon }}
                <span class="ml-5px" :class="index === 0 ? 'text-brandColor' : 'text-#999'">{{ item.label }} ({{ item.count }})</span>
            </div>
            <div class="w-20px h-20px border-solid border-#8F99B7 border-1px flex-center rounded-full bg-[rgba(143,153,183,0.1)] ml-12px">
              <el-icon class="text-#8F99B7" size="10px"><ArrowRight /></el-icon>
            </div>
              
            </div>

            <div class="mt-12px  text-16px text-#4444">
              把下面这句话直接发给你的AI，AI会自动加载 <span class="text-brandColor">12个银行客群 SKILL:</span>
            </div>
            <div class="mt-8px rounded-8px bg-#F7F8FA p-12px">
              <div class="text-#999999 text-14px">发送给你的 AI：</div>
              <div class="flex items-center gap-12px">
                <div class="m-0 min-w-0 flex-1 break-all text-14px">
                  请加载银行客群的 SKILL 集(共 12 个):
                  <span class="text-brandColor">https://agent.qcc.com/skill/v1/banking/README.md</span>
                </div>
                <div
                  class="w-40px h-40px border-solid border-1px flex-center rounded-full bg-[rgba(0,72,152,0.1)] border-[rgba(0,72,152,0.2)]"
                >
                  <el-icon><CopyDocument /></el-icon>
              </div>
              </div>
            </div>

            <div class="mt-12px text-13px text-#BFBFBF">
              已接入 WorkBuddy · Trae · Cursor · Claude Code 等 14+ AI 应用
            </div>
          </el-col>

          <el-col :xs="24" :lg="8" class="min-h-282px p-20px">
             <div class="flex items-center justify-between">
              <div class="flex items-center gap-8px">
                <el-avatar :size="32" class="!bg-brandColor !text-14px !text-white">
                  3
                </el-avatar>
                <div class="m-0 text-18px font-500">直接说你要做什么</div>
              </div>
            </div>

            <div class="mt-16px text-16px text-#444">
              AI 确认加载后，像平时聊天一样说出你的需求:
            </div>

            <el-space direction="vertical" fill :size="8" class="mt-12px w-full">
              <div
                v-for="item in examples"
                :key="item.title"
                class="rounded-8px bg-#F7F8FA border border-solid border-[rgba(143,153,183,0.1)] px-16px py-12px text-14px  text-#444444"
              >
                <span class="mr-8px text-#999999">{{ item.title }}</span>
                {{ item.content }}
              </div>
            </el-space>
          </el-col>
        </el-row>
      </div>

      <!-- 筛选 -->
      <section class="mt-32px">
        <div class="flex items-center gap-20px">
          <el-input
            placeholder="搜索SKILL"
            :prefix-icon="Search"
            :style="{
              '--el-input-border-radius': '20px',
              '--el-input-bg-color': '#fff'
            }"
            size="large"
            class="max-w-full"
            style="width: 360px;"
          />

          <el-radio-group style="--el-text-color-regular: #666;--el-fill-color-blank: #fff;" v-model="activeTab" class="flex flex-wrap" size="large">
            <el-radio-button
              v-for="item in categoryTabs"
              :key="item.value"
              :label="item.value"
              :style="{
                '--el-radio-button-checked-bg-color': 'var(--brand-color)',
                '--el-radio-button-checked-border-color': 'var(--brand-color)',
                '--el-radio-button-checked-text-color': '#fff'
              }"
            >
              <span class="flex items-center gap-6px px-8px">
                <span v-if="item.icon">{{ item.icon }}</span>
                <span>{{ item.label }}</span>
              </span>
            </el-radio-button>
          </el-radio-group>
        </div>
      </section>

      <!-- 卡片列表 -->
      <main class="mt-20px">
      
        <div class="grid grid-cols-1 gap-20px lg:grid-cols-3">
        <article
          v-for="item in filteredSkillList"
          :key="item.id"
          class="group cursor-pointer min-h-178px rounded-8px border border-solid border-[rgba(0,0,0,0.1)] bg-#fff p-20px text-#757575 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-brandColor hover:bg-white hover:shadow-[0_10px_24px_rgba(47,101,200,0.14)]"
          @click="() => {
            if (item.route) {
              router.push(item.route)
            }
          }"
        >
          <!-- 顶部 -->
          <div class="flex items-start justify-between gap-8px">
            <div class="min-w-0 flex-1">
              <div
                class="m-0 truncate text-18px text-#333 font-600 transition-colors duration-300 group-hover:text-brandColor"
              >
                {{ item.title }}
              </div>
            </div>

            <el-space :size="8" wrap>
              <el-button
                link
                size="small"
                class="!h-auto !text-12px !text-#BFBFBF transition-colors duration-300 hover:!text-brandColor group-hover:!text-brandColor"
              >
                <el-icon>
                  <Key />
                </el-icon>
                <span class="ml-5px">安装方式</span>
              </el-button>

              <el-button
                link
                size="small"
                class="!h-auto !text-12px !text-#BFBFBF transition-colors duration-300 hover:!text-brandColor group-hover:!text-brandColor"
              >
                <el-icon>
                  <Document />
                </el-icon>
                <span class="ml-5px">示例报告</span>
              </el-button>

              <el-icon class="hover:text-brandColor group-hover:text-brandColor">
                <Right />
              </el-icon>
            </el-space>
          </div>

          <!-- 路径 -->
          <div class="mt-8px text-14px text-#8F99B7">
            {{ item.path }}
          </div>

          <!-- 描述 -->
          <div
            class="mt-12px line-clamp-4 text-14px leading-24px text-#6b7280 transition-colors duration-300 group-hover:text-#334155"
          >
            {{ item.desc }}
          </div>
        </article>
      </div>
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  CopyDocument,
  Document,
  Key,
  Link,
  Right,
  Search,
  Sunny,
  ArrowRight
} from '@element-plus/icons-vue'
import router from '@/router'
const videoDialogVisible = ref(false)

const keyword = ref('')
const activeTab = ref('全部 27')

const topTags = ref([
  'KYC 企业核验',
  'IC Memo',
  'AML 尽调报告',
  '合同审查',
  '供应商准入',
  '深度尽调报告',
  '企业画像速览'
])

const skillTabs = ref([
  { label: '银行', count: 12, icon: '🏦 ' },
  { label: '投资', count: 6, icon: '📊' },
  { label: '法务', count: 6, icon: '⚖️' }
])

const examples = ref([
  { title: '银行 KYB', content: '“帮我对[公司名称]做一份 KYB 核验报告”' },
  { title: '授信审批', content: '“帮我对[公司名称]出一份授信尽调底稿”' },
  { title: '反洗钱', content: '“穿透[公司名称]受益所有人，做反洗钱合规核验”' },
  { title: '贷后监控', content: '“监控存量贷款客户[公司名称]的风险变化”' }
])

const categoryTabs = ref([
  { label: '全部 27', value: '全部 27', icon: '' },
  { label: '银行合规 12', value: '银行合规 12', icon: '🏦' },
  { label: '投资尽调 6', value: '投资尽调 6', icon: '📊' },
  { label: '法律法务 6', value: '法律法务 6', icon: '⚖️' },
  { label: '供应链 3', value: '供应链 3', icon: '🔗' }
])

const skillList = ref([
  {
    id: 1,
    featured: true,
    title: 'KYB 企业核验',
    path: '/kyb-verification-qcc',
    category: '银行合规 12',
    route: '/resources/skill/kyb',
    desc:
      '银行开户和授信审批前的核心合规工具。输入企业名称，AI 自动完成主体真实性核验、股权结构穿透、34 类司法与经营风险扫描，3 分钟输出符合 FATF / PBOC / CBIRC 标准的合规报告，替代传统客户经理 2-3 小时人工尽调流程。'
  },
  {
    id: 2,
    title: 'IC Memo 投资备忘录',
    path: '/ic-memo-qcc',
    category: '投资尽调 6',
    desc:
      'PE/VC 投资决策的核心尽调工具。一次对话并行完成目标公司工商登记、多层股权穿透、司法风险、知识产权全维扫描，直接输出符合投委会要求的标准格式备忘录，传统分析师 2-3 小时工作量压缩至约 3 分钟。'
  },
  {
    id: 3,
    title: '企业历史沿革与发展历程',
    path: '/history-evolution-qcc',
    category: '投资尽调 6',
    desc:
      'PE/VC 投前立项与投后调研的主体背调工具。一次对话并行整合目标企业工商登记、股权历史、重组高管、知识产权与荣誉资质，生成涵盖发展里程碑、股权演变、关联方网络与资质荣誉的历史沿革报告。'
  },
  {
    id: 4,
    title: 'KYB 企业核验',
    path: '/kyb-verification-qcc',
    category: '银行合规 12',
    desc:
      '银行开户和授信审批前的核心合规工具。输入企业名称，AI 自动完成主体真实性核验、股权结构穿透、34 类司法与经营风险扫描，3 分钟输出符合 FATF / PBOC / CBIRC 标准的合规报告。'
  },
  {
    id: 5,
    title: 'IC Memo 投资备忘录',
    path: '/ic-memo-qcc',
    category: '投资尽调 6',
    desc:
      'PE/VC 投资决策的核心尽调工具。一次对话并行完成目标公司工商登记、多层股权穿透、司法风险、知识产权全维扫描，直接输出符合投委会要求的标准格式备忘录。'
  },
  {
    id: 6,
    title: '企业历史沿革与发展历程',
    path: '/history-evolution-qcc',
    category: '投资尽调 6',
    desc:
      'PE/VC 投前立项与投后调研的主体背调工具。一次对话并行整合目标企业工商登记、股权历史、重组高管、知识产权与荣誉资质，生成适合立项会和投后跟踪的企业历程报告。'
  },
  {
    id: 7,
    title: 'KYB 企业核验',
    path: '/kyb-verification-qcc',
    category: '银行合规 12',
    desc:
      '面向银行、保理和融资租赁场景的企业合规核验工具，自动整合工商、司法、经营异常和风险关系，形成结构化核验结论。'
  },
  {
    id: 8,
    title: 'IC Memo 投资备忘录',
    path: '/ic-memo-qcc',
    category: '投资尽调 6',
    desc:
      '为投资团队快速生成投前分析底稿，覆盖目标企业基本面、股权穿透、司法风险、融资事件、知识产权与重点关注事项。'
  },
  {
    id: 9,
    title: '企业历史沿革与发展历程',
    path: '/history-evolution-qcc',
    category: '法律法务 6',
    desc:
      '梳理企业成立、变更、股权演进和关键经营节点，辅助法务、投研和风控团队快速理解目标企业发展脉络。'
  }
])

const filteredSkillList = computed(() => {
  const value = keyword.value.trim().toLowerCase()
  return skillList.value.filter((item) => {
    const matchCategory = activeTab.value === '全部 27' || item.category === activeTab.value
    const matchKeyword =
      !value ||
      item.title.toLowerCase().includes(value) ||
      item.path.toLowerCase().includes(value) ||
      item.desc.toLowerCase().includes(value)

    return matchCategory && matchKeyword
  })
})
</script>
