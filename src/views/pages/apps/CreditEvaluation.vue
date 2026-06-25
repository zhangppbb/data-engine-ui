<template>
  <div class="bg-slate-canvas text-slate-body font-sans antialiased min-h-screen">
    <!-- Page: 1 - Query Start Screen -->
    <div v-show="currentPage === 'query'" class="min-h-screen grid-bg">
      <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <header class="py-6 px-4 sm:px-8">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
              <Icon icon="fa-solid:shield-halved" :size="16" />
            </div>
            <div>
              <h1 class="font-bold text-slate-heading text-lg leading-tight">
                企业信用评价
              </h1>
              <p class="text-xs text-slate-subtle hidden sm:block">
                精准查询·专业评价·合规管控
              </p>
            </div>
          </div>
        </header>
        
        <!-- [MODULE] a1f_查询首页核心模块 -->
        <main class="flex-1 flex items-center justify-center px-4 py-12">
          <div class="w-full max-w-xl">
            <div class="text-center mb-8">
              <h2 class="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-slate-heading mb-3">
                企业信用评价
              </h2>
              <p class="text-slate-subtle text-lg">
                获取企业信用评分
              </p>
            </div>
            <div class="card p-1 bg-white/80 backdrop-blur-sm">
              <div class="flex items-center rounded-md overflow-hidden">
                <input 
                  type="text" 
                  v-model="queryInput"
                  placeholder="请输入企业名称或统一社会信用代码" 
                  class="flex-1 px-4 py-3 bg-transparent border-none focus:ring-0 text-slate-body placeholder-slate-subtle outline-none"
                  @keyup.enter="startQuery"
                />
                <button @click="startQuery" class="btn btn-primary mr-1 whitespace-nowrap">
                  <Icon icon="fa-solid:magnifying-glass" :size="14" class="mr-2" />
                  查询
                </button>
              </div>
            </div>
            <div class="mt-4 flex items-center justify-center text-xs text-slate-subtle">
              <Icon icon="fa-solid:circle-info" :size="12" class="mr-1.5" />
              支持企业全称、关键字、统一社会信用代码精准匹配
            </div>
          </div>
        </main>
        <!-- [/MODULE] a1f_查询首页核心模块 -->
        
        <!-- Footer -->
        <footer class="py-6 px-8 text-center text-xs text-slate-subtle">
          © 2026数擎平台
          <span style="font-size: 0.75rem;">
            - 企业信用评价
          </span>
        </footer>
      </div>
    </div>
    
    <!-- Page: 2 - Loading Screen -->
    <div v-show="currentPage === 'loading'" class="min-h-screen bg-slate-section">
      <div class="min-h-screen flex flex-col items-center justify-center px-4">
        <!-- [MODULE] b2d_加载页面模块 -->
        <div class="text-center max-w-md">
          <h3 class="text-lg font-semibold text-slate-body mb-8">
            正在分析企业信用数据，请稍候
          </h3>
          <div class="relative w-32 h-32 mx-auto mb-8">
            <svg class="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="#E5E6EB" stroke-width="8" />
              <circle 
                ref="progressRing"
                cx="50" 
                cy="50" 
                r="44" 
                fill="none" 
                stroke="url(#progress-gradient)" 
                stroke-width="8" 
                stroke-linecap="round" 
                class="progress-ring-circle" 
                stroke-dasharray="276.5" 
                stroke-dashoffset="276.5"
              />
              <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#1677FF" />
                  <stop offset="100%" stop-color="#36CFC9" />
                </linearGradient>
              </defs>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-xl font-bold text-primary">{{ progressPercent }}%</span>
            </div>
          </div>
          <div class="space-y-2 text-left text-sm">
            <div v-for="(step, index) in loadingSteps" :key="index" class="flex items-center gap-3 text-slate-subtle">
              <span class="w-5 h-5">
                <Icon v-show="step.completed" icon="fa-solid:check" :size="12" class="text-success" />
              </span>
              <span>{{ step.text }}</span>
            </div>
          </div>
        </div>
        <!-- [/MODULE] b2d_加载页面模块 -->
      </div>
    </div>
    
    <!-- Page: 3 - Result Detail Screen -->
    <div v-show="currentPage === 'result'" class="min-h-screen bg-slate-section">
      <!-- Top Navigation -->
      <!-- [MODULE] c3e_结果页顶部导航 -->
      <header class="bg-white border-b border-slate-border sticky top-0 z-40 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 bg-primary rounded flex items-center justify-center text-white">
              <Icon icon="fa-solid:shield-halved" :size="14" class="text-sm" />
            </div>
            <span class="font-semibold text-slate-heading text-lg">
              企业信用评价
            </span>
          </div>
          <button @click="newQuery" class="btn btn-secondary btn-sm">
            <Icon icon="fa-solid:magnifying-glass" :size="12" class="mr-1.5" />
            新查询
          </button>
        </div>
      </header>
      <!-- [/MODULE] c3e_结果页顶部导航 -->
      
      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col lg:flex-row gap-6">
          <!-- Left: Company Basic Info -->
          <div class="lg:w-80 lg:sticky lg:top-24 lg:self-start">
            <!-- [MODULE] d4f_左侧企业基础信息卡片 -->
            <div class="card overflow-hidden">
              <div class="p-5 border-b border-slate-border">
                <h3 class="text-lg font-bold text-slate-heading">
                  {{ companyInfo.name }}
                </h3>
                <p class="text-xs text-slate-subtle mt-1">
                  统一社会信用代码：{{ companyInfo.unifiedCode }}
                </p>
              </div>
              <div class="p-5 space-y-4 text-sm">
                <div v-for="(info, key) in companyInfo.details" :key="key" class="grid grid-cols-3 gap-2">
                  <div class="text-slate-subtle">{{ info.label }}</div>
                  <div class="col-span-2">
                    <span v-if="info.type === 'badge'" :class="info.class">
                      {{ info.value }}
                    </span>
                    <span v-else-if="info.type === 'text'" :class="info.class">
                      {{ info.value }}
                    </span>
                    <span v-else>{{ info.value }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- [/MODULE] d4f_左侧企业基础信息卡片 -->
          </div>
          
          <!-- Right: Credit Evaluation Dashboard -->
          <div class="flex-1">
            <!-- [MODULE] e5g_右侧信用评价主仪表盘 -->
            <!-- Credit Overall Score Card - 3 Column Layout -->
            <div class="card mb-6 overflow-hidden">
              <div class="grid grid-cols-1 md:grid-cols-3">
                <!-- Left: Score Overview -->
                <div class="p-6 border-b md:border-b-0 md:border-r border-slate-border">
                  <h4 class="text-lg font-bold text-slate-heading mb-4">
                    企业综合信用得分
                  </h4>
                  <div class="flex items-baseline gap-2 mb-3">
                    <span class="text-5xl font-bold text-slate-heading">
                      {{ creditScore.total }}
                    </span>
                    <span class="text-xl text-slate-subtle">
                      /100
                    </span>
                  </div>
                  <div class="mb-6">
                    <span class="badge badge-success text-base px-3 py-1.5">
                      {{ creditScore.level }}
                    </span>
                  </div>
                  <p class="text-xs text-slate-subtle">
                    评估日期：{{ creditScore.evaluationDate }}
                  </p>
                </div>
                
                <!-- Middle: Score Interpretation -->
                <div class="p-6 border-b md:border-b-0 md:border-r border-slate-border">
                  <h4 class="text-lg font-bold text-slate-heading mb-4">
                    分数解读
                  </h4>
                  <p class="text-slate-subtle text-sm leading-relaxed">
                    该企业整体信用表现
                    <span class="font-semibold text-primary">
                      {{ creditScore.interpretation.overall }}
                    </span>
                    ，经营能力与风险管理能力
                    <span class="font-semibold text-primary">
                      {{ creditScore.interpretation.management }}
                    </span>
                    ，存在违约风险
                    <span class="font-semibold text-primary">
                      {{ creditScore.interpretation.risk }}
                    </span>
                    ，可安全开展商务合作。
                  </p>
                </div>
                
                <!-- Right: Radar Chart -->
                <div class="p-6">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="text-lg font-bold text-slate-heading">
                      五维评价
                    </h4>
                    <button @click="showRuleModal" class="btn btn-ghost btn-sm">
                      <Icon icon="fa-solid:circle-question" :size="12" class="mr-1" />
                      规则说明
                    </button>
                  </div>
                  <div ref="radarChart" class="w-full h-48"></div>
                </div>
              </div>
            </div>
            
            <!-- Dimension Detail Fold Panels -->
            <div class="card p-6 mb-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-bold text-slate-heading">
                  多维度评价详情
                </h3>
                <div class="relative">
                  <button @click="toggleExportDropdown" class="btn btn-primary btn-sm">
                    <Icon icon="fa-solid:download" :size="14" class="mr-1.5" />
                    报告导出
                    <Icon icon="fa-solid:chevron-down" :size="12" class="ml-1.5" />
                  </button>
                  <div v-show="showDropdown" class="absolute right-0 mt-1 w-56 bg-white border border-slate-border rounded-lg shadow-float z-30 py-1">
                    <a 
                      v-for="option in exportOptions" 
                      :key="option.type"
                      @click="handleExport(option.type)"
                      class="export-option block px-4 py-2 text-sm text-slate-body hover:bg-slate-section cursor-pointer"
                    >
                      <Icon :icon="option.icon" :size="14" :class="option.iconClass + ' mr-2'" />
                      {{ option.label }}
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="space-y-3">
                <!-- 维度折叠面板 -->
                <div 
                  v-for="(dimension, index) in dimensions" 
                  :key="index"
                  class="border border-slate-border rounded-lg overflow-hidden bg-white"
                >
                  <button 
                    @click="toggleDimension(index)"
                    class="dimension-header w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
                  >
                    <div class="text-left">
                      <div class="text-primary font-bold text-base">
                        {{ index + 1 }}. {{ dimension.name }}
                      </div>
                      <div class="text-xs text-slate-subtle mt-1">
                        满分{{ dimension.maxScore }}分，实际得分 {{ dimension.actualScore }} 分
                      </div>
                    </div>
                    <Icon 
                      icon="fa-solid:chevron-down" 
                      :size="14" 
                      :class="[
                        'collapse-arrow transition-transform duration-300',
                        dimension.expanded ? 'rotate-180' : ''
                      ]"
                    />
                  </button>
                  <div v-show="dimension.expanded" class="dimension-content p-4 border-t border-slate-border">
                    <ul class="space-y-3">
                      <li v-for="(item, itemIndex) in dimension.items" :key="itemIndex" class="space-y-1">
                        <div class="flex justify-between items-center text-sm">
                          <span class="font-medium text-slate-body">
                            {{ item.name }}
                          </span>
                          <span class="text-success font-medium">
                            得分 {{ item.score }}
                          </span>
                        </div>
                        <div class="pl-4 text-sm text-slate-subtle space-y-1">
                          <p v-for="(detail, detailIndex) in item.details" :key="detailIndex">
                            {{ detail }}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- [/MODULE] e5g_右侧信用评价主仪表盘 -->
          </div>
        </div>
      </main>
    </div>
    
    <!-- Rule Modal -->
    <div v-show="showRuleModalVisible" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click="closeRuleModal">
      <div class="bg-white rounded-xl shadow-float max-w-lg w-full max-h-[80vh] overflow-y-auto" @click.stop>
        <div class="p-6 border-b border-slate-border">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-heading">
              信用评价规则说明
            </h3>
            <button @click="closeRuleModal" class="text-slate-subtle hover:text-slate-body text-xl">
              <Icon icon="fa-solid:xmark" :size="16" />
            </button>
          </div>
        </div>
        <div class="p-6 text-sm leading-relaxed">
          <p class="mb-4 text-slate-subtle">
            企业信用评价得分依据多维度合规、经营、实力数据综合计算，满分100分，分值越低风险越高，分值越高信用资质越优良。
          </p>
          <div class="grid grid-cols-1 gap-2">
            <div v-for="level in creditLevels" :key="level.level" class="flex justify-between p-2 bg-slate-50 rounded">
              <span class="font-medium">{{ level.level }}</span>
              <span>{{ level.range }}</span>
              <span :class="level.class">{{ level.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Export Modal -->
    <div v-show="showExportModal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click="closeExportModal">
      <div class="bg-white rounded-xl shadow-float max-w-md w-full" @click.stop>
        <div class="p-6 border-b border-slate-border">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-heading">
              导出报告
            </h3>
            <button @click="closeExportModal" class="text-slate-subtle hover:text-slate-body text-xl">
              <Icon icon="fa-solid:xmark" :size="16" />
            </button>
          </div>
        </div>
        <div class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-body mb-2">
              报告文件名
            </label>
            <input 
              type="text" 
              v-model="exportFilename"
              class="w-full px-3 py-2 border border-slate-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div class="space-y-3">
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="exportWatermark" class="rounded text-primary" />
              <span class="text-sm text-slate-body">添加防篡改水印</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="exportQrcode" class="rounded text-primary" />
              <span class="text-sm text-slate-body">添加核验二维码</span>
            </label>
          </div>
          <div v-show="exportStatus === 'loading'" class="text-center py-2">
            <span class="inline-block animate-spin mr-2">
              <Icon icon="fa-solid:spinner" :size="14" />
            </span>
            <span class="text-sm text-slate-subtle">正在生成报告...</span>
          </div>
          <div v-show="exportStatus === 'success'" class="text-center py-2 bg-success/10 rounded">
            <Icon icon="fa-solid:check-circle" :size="14" class="text-success mr-1" />
            <span class="text-sm text-success">报告导出成功</span>
          </div>
          <div class="pt-2">
            <button @click="confirmExport" class="btn btn-primary w-full" :disabled="exportStatus === 'loading'">
              <Icon icon="fa-solid:download" :size="14" class="mr-1.5" />
              确认导出
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Toast Notification -->
    <div v-show="toastVisible" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-success text-white rounded-lg shadow-float">
      <span>
        <Icon icon="fa-solid:check-circle" :size="14" class="mr-2" />
        {{ toastMessage }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import Icon from '@/components/Icon/src/Icon.vue'

// 响应式数据
const currentPage = ref('query')
const queryInput = ref('')
const progressPercent = ref(0)
const progressRing = ref()
const radarChart = ref()
const showDropdown = ref(false)
const showRuleModalVisible = ref(false)
const showExportModal = ref(false)
const exportFilename = ref('')
const exportWatermark = ref(true)
const exportQrcode = ref(true)
const exportStatus = ref('idle')
const toastVisible = ref(false)
const toastMessage = ref('')

// 公司信息
const companyInfo = ref({
  name: '北京字节跳动网络技术有限公司',
  unifiedCode: '91110108MA009GJ24K',
  details: {
    legalRepresentative: {
      label: '法定代表人',
      value: '张一鸣'
    },
    registrationStatus: {
      label: '登记状态',
      value: '存续（在营）',
      type: 'badge',
      class: 'badge badge-success'
    },
    establishmentDate: {
      label: '成立日期',
      value: '2012-03-12'
    },
    registeredCapital: {
      label: '注册资本',
      value: '100000 万元人民币'
    },
    industry: {
      label: '所属行业',
      value: '互联网和相关服务'
    },
    registeredAddress: {
      label: '注册地址',
      value: '北京市海淀区中关村互联网产业园'
    },
    businessScope: {
      label: '经营范围',
      value: '技术开发、技术推广、技术转让、技术咨询、技术服务；计算机系统服务；数据处理；设计、制作、代理、发布广告；从事互联网文化活动；广播电视节目制作等。',
      type: 'text',
      class: 'text-slate-subtle text-xs leading-relaxed'
    },
    contactInfo: {
      label: '联系方式',
      value: '010-84115566'
    }
  }
})

// 信用评分
const creditScore = ref({
  total: 86,
  level: 'A级 / 信用良好',
  evaluationDate: '2024年01月15日',
  interpretation: {
    overall: '良好',
    management: '相对较好',
    risk: '较低'
  }
})

// 加载步骤
const loadingSteps = ref([
  { text: '核验企业工商基础信息...', completed: false },
  { text: '计算综合信用评分...', completed: false },
  { text: '检索司法风险与经营异常记录...', completed: false },
  { text: '整合经营与财务数据分析...', completed: false }
])

// 维度数据
const dimensions = ref([
  {
    name: '综合实力',
    maxScore: 14,
    actualScore: 12,
    expanded: false,
    items: [
      {
        name: '1.1 企业规模（6分）',
        score: 6,
        details: [
          '· 工商注册年限：经营满11年，满分3分，得3分',
          '· 社保参保人数：参保人数超万人，企业规模大人员稳定，满分通过'
        ]
      },
      {
        name: '1.2 标准信息（2分）',
        score: 2,
        details: [
          '· 参与制定多项国家与行业标准，满分通过'
        ]
      },
      {
        name: '1.3 专利资质（3分）',
        score: 2,
        details: [
          '· 拥有发明专利超过500项，国家高新技术企业认证，得2分'
        ]
      },
      {
        name: '1.4 企业荣誉（3分）',
        score: 2,
        details: [
          '· 多项国家级创新企业荣誉认证，得2分'
        ]
      }
    ]
  },
  {
    name: '合规经营',
    maxScore: 60,
    actualScore: 52,
    expanded: false,
    items: [
      {
        name: '2.1 历史经营风险（20分）',
        score: 18,
        details: [
          '· 行政处罚：0条记录，满分20分，得20分'
        ]
      },
      {
        name: '2.2 司法风险计量（20分）',
        score: 17,
        details: [
          '· 被执行人信息：无记录，满分10分',
          '· 法律诉讼：少量历史合同纠纷已结案，扣3分，得7分'
        ]
      },
      {
        name: '2.3 异常经营（20分）',
        score: 17,
        details: [
          '· 经营异常：无记录，满分通过',
          '· 欠税公告：无记录，满分通过'
        ]
      }
    ]
  },
  {
    name: '发展潜力',
    maxScore: 6,
    actualScore: 5,
    expanded: false,
    items: [
      {
        name: '3.1 纳税人资质（2分）',
        score: 2,
        details: [
          '· 一般纳税人，状态正常，满分通过'
        ]
      },
      {
        name: '3.2 体系认证（2分）',
        score: 2,
        details: [
          '· ISO9001质量体系认证有效，满分通过'
        ]
      },
      {
        name: '3.3 绿色认证（1分）',
        score: 0,
        details: [
          '· 暂未查询到绿色环保认证，不得分'
        ]
      },
      {
        name: '3.4 科技荣誉（1分）',
        score: 1,
        details: [
          '· 国家级高新技术企业，满分通过'
        ]
      }
    ]
  },
  {
    name: '财务能力',
    maxScore: 5,
    actualScore: 4,
    expanded: false,
    items: [
      {
        name: '4.1 资金管理（3分）',
        score: 2,
        details: [
          '· 近三年无不良负债记录，得2分'
        ]
      },
      {
        name: '4.2 交易情况（2分）',
        score: 2,
        details: [
          '· 年度交易流水稳定增长，履约记录良好，满分通过'
        ]
      }
    ]
  },
  {
    name: '合作能力',
    maxScore: 15,
    actualScore: 13,
    expanded: false,
    items: [
      {
        name: '5.1 公开客户信息（2分）',
        score: 2,
        details: [
          '· 公开信息完备，多行业头部企业合作背景，满分通过'
        ]
      },
      {
        name: '5.2 基础服务能力（3分）',
        score: 3,
        details: [
          '· 交付能力满足行业标准，客户满意度调查良好，满分通过'
        ]
      },
      {
        name: '5.3 历史合作评价（4分）',
        score: 3,
        details: [
          '· 历史履约评价优秀，无重大违约投诉记录，得3分'
        ]
      },
      {
        name: '5.4 合作连续性（3分）',
        score: 3,
        details: [
          '· 长期合作伙伴超过5年合作期，合作关系稳定，满分通过'
        ]
      },
      {
        name: '5.5 累计合同金额（3分）',
        score: 2,
        details: [
          '· 年度合作合同金额超千万，合作体量充足，得2分'
        ]
      }
    ]
  }
])

// 信用等级
const creditLevels = ref([
  { level: 'L1', range: '0～10分', description: '信用极差，高违约风险', class: '' },
  { level: 'L2', range: '11～20分', description: '信用较差，较高违约风险', class: '' },
  { level: 'L3', range: '21～30分', description: '信用偏弱，存在明显经营风险', class: '' },
  { level: 'L4', range: '31～40分', description: '信用一般，整体经营稳定性不足', class: '' },
  { level: 'L5', range: '41～50分', description: '信用中等，抗风险能力一般', class: '' },
  { level: 'L6', range: '51～60分', description: '信用合格，整体经营状况平稳', class: '' },
  { level: 'L7', range: '61～70分', description: '信用良好，合规履约表现稳定', class: '' },
  { level: 'L8', range: '71～80分', description: '信用优良，综合实力与风控能力较好', class: '' },
  { level: 'L9', range: '81～90分', description: '信用优秀，企业资质与履约能力强', class: 'text-success font-medium' },
  { level: 'L10', range: '91～100分', description: '信用极佳，综合竞争力强、风险极低', class: 'text-success font-medium' }
])

// 导出选项
const exportOptions = ref([
  {
    type: 'pdf',
    label: 'PDF完整版信用报告',
    icon: 'fa-solid:file-pdf',
    iconClass: 'text-red-500'
  },
  {
    type: 'excel',
    label: 'Excel指标明细报表',
    icon: 'fa-solid:file-excel',
    iconClass: 'text-green-500'
  }
])

// 方法
const startQuery = () => {
  if (!queryInput.value.trim()) {
    showToast('请输入企业名称或统一信用代码')
    return
  }
  currentPage.value = 'loading'
  startLoadingProgress()
}

const newQuery = () => {
  currentPage.value = 'query'
  queryInput.value = ''
  queryInput.value?.focus()
}

const startLoadingProgress = () => {
  progressPercent.value = 0
  loadingSteps.value.forEach(step => step.completed = false)
  
  const checkPoints = [25, 45, 70, 90]
  let checkIndex = 0
  
  const interval = setInterval(() => {
    progressPercent.value += 1
    
    if (checkIndex < checkPoints.length && progressPercent.value >= checkPoints[checkIndex]) {
      loadingSteps.value[checkIndex].completed = true
      checkIndex++
    }
    
    if (progressPercent.value >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        currentPage.value = 'result'
        nextTick(() => {
          initRadarChart()
        })
      }, 800)
    }
  }, 30)
}

const initRadarChart = () => {
  if (radarChart.value) {
    const myChart = echarts.init(radarChart.value)
    const option = {
      radar: {
        indicator: [
          { name: '综合实力', max: 15 },
          { name: '合规经营', max: 60 },
          { name: '发展潜力', max: 6 },
          { name: '财务能力', max: 5 },
          { name: '合作能力', max: 15 }
        ],
        center: ['50%', '50%'],
        radius: '70%',
        axisName: {
          color: '#1D2129',
          fontSize: 12
        },
        splitArea: {
          areaStyle: {
            color: ['#F5F7FA', '#FFFFFF', '#F5F7FA', '#FFFFFF', '#F5F7FA']
          }
        },
        splitLine: {
          lineStyle: {
            color: '#E5E6EB'
          }
        }
      },
      series: [{
        type: 'radar',
        data: [{
          value: [12, 52, 5, 4, 13],
          name: '企业得分',
          areaStyle: {
            color: 'rgba(22, 119, 255, 0.3)'
          },
          lineStyle: {
            color: '#1677FF'
          },
          itemStyle: {
            color: '#1677FF'
          }
        }]
      }],
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          const indicator = option.radar.indicator
          let html = '<div class="font-bold">' + params.name + '</div>'
          params.value.forEach((v: number, i: number) => {
            html += '<div>' + indicator[i].name + ":" + v + '/' + indicator[i].max + '</div>'
          })
          return html
        }
      }
    }
    myChart.setOption(option)
    
    // 响应式调整
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  }
}

const toggleDimension = (index: number) => {
  dimensions.value[index].expanded = !dimensions.value[index].expanded
  
  // 重新调整图表大小
  setTimeout(() => {
    if (radarChart.value) {
      const chart = echarts.getInstanceByDom(radarChart.value)
      if (chart) {
        chart.resize()
      }
    }
  }, 350)
}

const toggleExportDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const showRuleModal = () => {
  showRuleModalVisible.value = true
}

const closeRuleModal = () => {
  showRuleModalVisible.value = false
}

const handleExport = (type: string) => {
  showDropdown.value = false
  exportFilename.value = `${companyInfo.value.name}信用报告`
  showExportModal.value = true
}

const closeExportModal = () => {
  showExportModal.value = false
  exportStatus.value = 'idle'
}

const confirmExport = () => {
  exportStatus.value = 'loading'
  
  setTimeout(() => {
    exportStatus.value = 'success'
    setTimeout(() => {
      closeExportModal()
      showToast('报告导出成功')
    }, 1000)
  }, 1500)
}

const showToast = (message: string) => {
  toastMessage.value = message
  toastVisible.value = true
  
  setTimeout(() => {
    toastVisible.value = false
  }, 2000)
}

// 组件挂载
onMounted(() => {
  // 点击外部关闭下拉菜单
  document.addEventListener('click', (e) => {
    if (showDropdown.value && !(e.target as Element).closest('.relative')) {
      showDropdown.value = false
    }
  })
})
</script>

<style lang="scss" scoped>
.grid-bg {
  background-image: 
    linear-gradient(#F5F7FA 1px, transparent 1px),
    linear-gradient(90deg, #F5F7FA 1px, transparent 1px);
  background-size: 24px 24px;
}

.progress-ring-circle {
  transform: rotate(-90deg);
  transition: stroke-dashoffset 0.35s;
  transform-origin: 50% 50%;
}

.btn {
  @apply inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary;
}

.btn-sm {
  @apply px-3 py-1.5 text-xs;
}

.btn-primary {
  @apply bg-primary text-white hover:bg-primary-dark shadow-card border border-transparent;
}

.btn-secondary {
  @apply bg-white text-slate-body border border-slate-border hover:bg-slate-section shadow-sm;
}

.btn-ghost {
  @apply text-slate-subtle hover:text-slate-body hover:bg-slate-section border border-transparent;
}

.card {
  @apply bg-white border border-slate-border rounded-lg shadow-card;
}

.badge-success {
  @apply bg-success/10 text-success;
}

.badge-neutral {
  @apply bg-slate-section text-slate-subtle;
}

.badge {
  @apply inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium;
}

.collapse-arrow {
  @apply transition-transform duration-300;
}

.collapse-arrow.open {
  @apply rotate-180;
}

// 自定义颜色变量
:root {
  --primary: #1677FF;
  --primary-dark: #0958D9;
  --success: #36CFC9;
  --slate-canvas: #FFF;
  --slate-section: #F5F7FA;
  --slate-border: #E5E6EB;
  --slate-subtle: #86909C;
  --slate-body: #1D2129;
  --slate-heading: #1D2129;
}

.bg-primary {
  background-color: var(--primary);
}

.text-primary {
  color: var(--primary);
}

.bg-success {
  background-color: var(--success);
}

.text-success {
  color: var(--success);
}

.bg-slate-canvas {
  background-color: var(--slate-canvas);
}

.bg-slate-section {
  background-color: var(--slate-section);
}

.border-slate-border {
  border-color: var(--slate-border);
}

.text-slate-subtle {
  color: var(--slate-subtle);
}

.text-slate-body {
  color: var(--slate-body);
}

.text-slate-heading {
  color: var(--slate-heading);
}

.shadow-card {
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 8%);
}

.shadow-float {
  box-shadow: 0 4px 16px 0 rgb(0 0 0 / 12%);
}
</style>
