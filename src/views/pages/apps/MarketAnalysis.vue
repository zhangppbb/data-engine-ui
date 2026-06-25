<template>
  <div class="bg-slate-canvas text-slate-body font-sans antialiased selection:bg-primary-light selection:text-white pb-20">
    <!-- Header / Branding -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div class="layout-container h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">
            <Icon icon="fa-solid:database" :size="16" />
          </div>
          <div>
            <h1 class="font-bold text-slate-900 text-lg leading-tight">
              数擎
              <span class="text-slate-400 font-light text-sm">
                市场情报平台
              </span>
            </h1>
          </div>
        </div>
        <div class="text-xs text-slate-400 font-mono hidden sm:block">
          数据驱动 · 洞察未来
        </div>
      </div>
    </header>
    
    <main class="layout-container py-10 space-y-8">
      <!-- [MODULE] a1x_主内容区域 -->
      <!-- [MODULE] b2c_市场分析报告页面 -->
      <!-- [MODULE] 3d4_页面标题和搜索 -->
      <section class="space-y-6">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <h2 class="heading-display mb-2">
              市场分析主题报告
            </h2>
            <p class="text-lg text-slate-500">
              全国·领域·省份·城市，深度洞察建筑市场
            </p>
          </div>
          <div class="w-full lg:w-80 relative">
            <input 
              v-model="searchQuery"
              class="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary text-sm" 
              placeholder="搜索报告名称、关键词..." 
              type="text"
            />
            <Icon icon="fa-solid:magnifying-glass" :size="14" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
      </section>
      <!-- [/MODULE] 3d4_页面标题和搜索 -->
      
      <!-- [MODULE] f5g_分类筛选栏 -->
      <section>
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectCategory(category)"
            :class="[
              'filter-btn px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-150',
              selectedCategory === category 
                ? 'bg-primary text-white' 
                : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:bg-primary-50'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </section>
      <!-- [/MODULE] f5g_分类筛选栏 -->
      
      <!-- [MODULE] 7h8_报告卡片网格 -->
      <section>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="report in filteredReports" 
            :key="report.id"
            class="card overflow-hidden hover:shadow-float transition-shadow duration-200"
          >
            <div class="h-44 bg-gradient-to-br from-primary to-primary-dark relative flex items-center justify-center text-white">
              <div class="text-xl font-bold relative z-10">
                {{ report.title }}
              </div>
              <div class="absolute bottom-4 right-4">
                <span class="badge bg-white/20 text-white backdrop-blur-sm">
                  {{ report.category }}
                </span>
              </div>
            </div>
            <div class="p-5 space-y-3">
              <h3 class="font-semibold text-slate-900 line-clamp-2 text-balance">
                {{ report.fullName }}
              </h3>
              <p class="text-sm text-slate-500 line-clamp-1">
                {{ report.description }}
              </p>
              <div class="flex items-center justify-between text-xs text-slate-400">
                <span>
                  <Icon icon="fa-solid:file-lines" :size="12" class="mr-1" />
                  {{ report.pages }}页 | {{ report.date }}
                </span>
              </div>
              <div class="pt-2 text-right">
                <button @click="openPreview(report)" class="btn btn-sm btn-secondary">
                  预览报告
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- [/MODULE] 7h8_报告卡片网格 -->
      <!-- [/MODULE] b2c_市场分析报告页面 -->
      <!-- [/MODULE] a1x_主内容区域 -->
    </main>
    
    <!-- 试看模态框 -->
    <div v-show="showPreviewModal" class="modal-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" @click="closePreviewModal">
      <div class="modal-content bg-white rounded-xl shadow-float w-full max-w-3xl max-h-[80vh] overflow-hidden" @click.stop>
        <div class="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h3 class="font-bold text-lg text-slate-900">
            报告试看
          </h3>
          <button @click="closePreviewModal" class="text-slate-400 hover:text-slate-600 text-xl">
            <Icon icon="fa-solid:xmark" :size="20" />
          </button>
        </div>
        <div class="p-6 overflow-y-auto custom-scrollbar">
          <div class="text-center py-12 space-y-6">
            <div class="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto text-primary text-4xl">
              <Icon icon="fa-solid:file-pdf" :size="32" />
            </div>
            <div>
              <h4 class="font-semibold text-slate-900 mb-2">
                {{ selectedReport?.fullName }}
              </h4>
              <p class="text-slate-500 text-sm">
                您当前可以免费预览报告前5页内容
              </p>
            </div>
            <div class="bg-slate-50 rounded-lg p-4 max-w-sm mx-auto text-left">
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-center gap-2">
                  <Icon icon="fa-solid:check" :size="12" class="text-status-success" />
                  报告目录一览
                </li>
                <li class="flex items-center gap-2">
                  <Icon icon="fa-solid:check" :size="12" class="text-status-success" />
                  研究方法说明
                </li>
                <li class="flex items-center gap-2">
                  <Icon icon="fa-solid:check" :size="12" class="text-status-success" />
                  核心数据摘要
                </li>
                <li class="flex items-center gap-2 text-slate-400">
                  <Icon icon="fa-solid:lock" :size="12" />
                  完整数据分析（需付费解锁）
                </li>
                <li class="flex items-center gap-2 text-slate-400">
                  <Icon icon="fa-solid:lock" :size="12" />
                  下载导出权限（需付费解锁）
                </li>
              </ul>
            </div>
            <div class="flex gap-4 justify-center pt-4">
              <button @click="closePreviewModal" class="btn btn-secondary">
                关闭预览
              </button>
              <button @click="openBuyModal" class="btn btn-cta">
                立即购买完整版 ¥299
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 购买模态框 -->
    <div v-show="showBuyModal" class="modal-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" @click="closeBuyModal">
      <div class="modal-content bg-white rounded-xl shadow-float w-full max-w-lg" @click.stop>
        <div class="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h3 class="font-bold text-lg text-slate-900">
            确认购买
          </h3>
          <button @click="closeBuyModal" class="text-slate-400 hover:text-slate-600 text-xl">
            <Icon icon="fa-solid:xmark" :size="20" />
          </button>
        </div>
        <div class="p-6 space-y-4">
          <div class="space-y-1">
            <p class="text-sm text-slate-500">
              报告名称
            </p>
            <p class="font-medium text-slate-900">
              {{ selectedReport?.fullName }}
            </p>
          </div>
          <div class="flex items-center justify-between py-3 border-y border-slate-100">
            <span class="text-slate-600">
              价格
            </span>
            <span class="text-2xl font-bold text-primary tabular-nums">
              ¥299
            </span>
          </div>
          <div class="bg-slate-50 p-3 rounded-md text-xs text-slate-500">
            <Icon icon="fa-solid:info-circle" :size="12" class="mr-1 text-primary" />
            购买成功后将永久获得本报告的阅读和下载权限
          </div>
          <button @click="goToCheckout" class="btn btn-cta w-full text-base py-3">
            立即支付
          </button>
        </div>
      </div>
    </div>
    
    <!-- 底部信息栏 -->
    <footer class="bg-white border-t border-slate-200 mt-10">
      <div class="layout-container py-8">
        <div class="flex flex-col md:flex-row justify-between items-start gap-6">
          <div class="space-y-3 max-w-xl">
            <p class="text-sm text-slate-500">
              <strong class="text-slate-700">
                数据来源：
              </strong>
              基建通、各省市公共资源交易中心公开信息、企业招投标公示数据
            </p>
            <p class="text-sm text-slate-400">
              © 2025 数擎市场情报平台. All rights reserved.
            </p>
          </div>
          <div class="flex gap-6 text-sm text-slate-500 font-medium">
            <a class="hover:text-primary transition-colors" href="javascript:void(0);">
              <Icon icon="fa-solid:envelope" :size="12" class="mr-1" />
              contact@shuhai.com
            </a>
            <a class="hover:text-primary transition-colors" href="javascript:void(0);">
              <Icon icon="fa-solid:phone" :size="12" class="mr-1" />
              400-888-9999
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Icon from '@/components/Icon/src/Icon.vue'

// 响应式数据
const searchQuery = ref('')
const selectedCategory = ref('全部')
const showPreviewModal = ref(false)
const showBuyModal = ref(false)
const selectedReport = ref(null)

// 分类选项
const categories = ref(['全部', '全国报告', '领域报告', '省份报告', '城市报告'])

// 报告数据
const reports = ref([
  {
    id: 1,
    title: '建筑业分析报告',
    fullName: '建筑业公开招标市场研究简报（2025年12月）',
    category: '全国报告',
    description: '聚焦全国公招市场总量、八大央企对标、行业区域分布',
    pages: 32,
    date: '2025年12月'
  },
  {
    id: 2,
    title: '新疆建筑分析报告',
    fullName: '新疆地区2025年建筑市场分析报告',
    category: '省份报告',
    description: '西部基建市场容量分析，政策规划，未来五年预测',
    pages: 48,
    date: '2025年11月'
  },
  {
    id: 3,
    title: '路桥行业分析报告',
    fullName: '路桥行业投资类项目中标分析报告',
    category: '领域报告',
    description: '中标企业分析、利润率、投标报价策略参考',
    pages: 28,
    date: '2025年10月'
  },
  {
    id: 4,
    title: '武汉建筑市场分析',
    fullName: '武汉市建筑市场年度洞察报告',
    category: '城市报告',
    description: '城市更新项目分析、本地企业市场份额占比',
    pages: 36,
    date: '2025年01月'
  },
  {
    id: 5,
    title: '八大央企分析报告',
    fullName: '八大建筑央企市场竞争力对标报告',
    category: '全国报告',
    description: '营收规模、中标增长率、利润率多维度对比',
    pages: 56,
    date: '2025年09月'
  },
  {
    id: 6,
    title: '湖北建筑分析报告',
    fullName: '湖北省建筑市场公招数据分析报告',
    category: '省份报告',
    description: '近一年中标数据全景透视，月度趋势分析',
    pages: 41,
    date: '2025年12月'
  }
])

// 计算属性：过滤后的报告
const filteredReports = computed(() => {
  let filtered = reports.value

  // 按分类筛选
  if (selectedCategory.value !== '全部') {
    filtered = filtered.filter(report => report.category === selectedCategory.value)
  }

  // 按搜索关键词筛选
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(report => 
      report.title.toLowerCase().includes(query) ||
      report.fullName.toLowerCase().includes(query) ||
      report.description.toLowerCase().includes(query)
    )
  }

  return filtered
})

// 方法
const selectCategory = (category: string) => {
  selectedCategory.value = category
}

const openPreview = (report: any) => {
  selectedReport.value = report
  showPreviewModal.value = true
  document.body.style.overflow = 'hidden'
}

const closePreviewModal = () => {
  showPreviewModal.value = false
  document.body.style.overflow = ''
}

const openBuyModal = () => {
  showPreviewModal.value = false
  showBuyModal.value = true
}

const closeBuyModal = () => {
  showBuyModal.value = false
  document.body.style.overflow = ''
}

const goToCheckout = () => {
  alert('原型演示：跳转支付页面')
  // 关闭所有模态框
  showPreviewModal.value = false
  showBuyModal.value = false
  document.body.style.overflow = ''
}

// 组件挂载
onMounted(() => {
  // ESC键关闭模态框
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (showBuyModal.value) {
        closeBuyModal()
      } else if (showPreviewModal.value) {
        closePreviewModal()
      }
    }
  })
})
</script>

<style lang="scss" scoped>
.tabular-nums {
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}

.text-balance {
  text-wrap: balance;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Custom thin scrollbar for dashboard tables */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-slate-300 rounded;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-400;
}

.layout-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Buttons */
.btn {
  @apply inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary;
}

.btn-sm {
  @apply px-3 text-xs;
}

.btn-primary {
  @apply bg-primary text-white hover:bg-primary-dark shadow-sm border border-transparent;
}

.btn-secondary {
  @apply bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 shadow-sm;
}

.btn-cta {
  @apply bg-cta text-white hover:bg-cta-hover shadow-sm border border-transparent;
}

.btn-ghost {
  @apply text-slate-600 hover:text-slate-900 hover:bg-slate-100;
}

/* Cards */
.card {
  @apply bg-white border border-slate-200 rounded-lg shadow-card;
}

.card-header {
  @apply px-5 py-4 border-b border-slate-100 flex justify-between items-center;
}

.card-body {
  @apply p-5;
}

/* Data Tables */
.data-table-container {
  @apply overflow-x-auto rounded-lg border border-slate-200;
}

.data-table {
  @apply divide-y divide-slate-200;
}

.dt-th {
  @apply px-4 py-3 bg-slate-50 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap;
}

.dt-td {
  @apply px-4 py-3 whitespace-nowrap text-sm text-slate-700 border-b border-slate-100 last:border-0;
}

.dt-row {
  @apply hover:bg-slate-50 transition-colors duration-75;
}

/* Typography */
.heading-display {
  @apply text-3xl font-bold text-slate-heading tracking-tight;
}

.heading-section {
  @apply text-xl font-semibold text-slate-heading;
}

.heading-label {
  @apply text-sm font-medium text-slate-500 uppercase tracking-wide;
}

.text-body {
  @apply text-slate-600 text-sm leading-relaxed;
}

/* Badges */
.badge {
  @apply inline-flex items-center px-2 rounded text-xs font-medium;
}

.badge-success {
  @apply bg-status-successBg text-status-success;
}

.badge-warning {
  @apply bg-status-warningBg text-status-warning;
}

.badge-danger {
  @apply bg-status-dangerBg text-status-danger;
}

.badge-neutral {
  @apply bg-slate-100 text-slate-600;
}

.modal-overlay {
  background-color: rgb(0 0 0 / 50%);
}

.modal-content {
  background-color: white;
}

.line-clamp-1 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.line-clamp-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

// 自定义颜色变量
:root {
  --primary: #3B82F6;
  --primary-dark: #2563EB;
  --primary-light: #60A5FA;
  --primary-50: #EFF6FF;
  --cta: #F97316;
  --cta-hover: #EA580C;
  --slate-canvas: #F8FAFC;
  --slate-surface: #FFF;
  --slate-border: #E2E8F0;
  --slate-subtle: #94A3B8;
  --slate-body: #1E293B;
  --slate-heading: #0F172A;
  --status-success: #10B981;
  --status-successBg: #ECFDF5;
  --status-warning: #F59E0B;
  --status-warningBg: #FFFBEB;
  --status-danger: #EF4444;
  --status-dangerBg: #FEF2F2;
}

.bg-primary {
  background-color: var(--primary);
}

.bg-primary-dark {
  background-color: var(--primary-dark);
}

.bg-primary-light {
  background-color: var(--primary-light);
}

.bg-primary-50 {
  background-color: var(--primary-50);
}

.bg-cta {
  background-color: var(--cta);
}

.bg-cta-hover {
  background-color: var(--cta-hover);
}

.bg-slate-canvas {
  background-color: var(--slate-canvas);
}

.bg-slate-surface {
  background-color: var(--slate-surface);
}

.bg-slate-50 {
  background-color: var(--slate-canvas);
}

.bg-slate-100 {
  background-color: #F1F5F9;
}

.bg-slate-200 {
  background-color: #E2E8F0;
}

.bg-slate-300 {
  background-color: #CBD5E1;
}

.bg-slate-400 {
  background-color: #94A3B8;
}

.bg-slate-500 {
  background-color: #64748B;
}

.bg-slate-600 {
  background-color: #475569;
}

.bg-slate-700 {
  background-color: #334155;
}

.bg-slate-800 {
  background-color: #1E293B;
}

.bg-slate-900 {
  background-color: #0F172A;
}

.bg-status-success {
  background-color: var(--status-success);
}

.bg-status-successBg {
  background-color: var(--status-successBg);
}

.bg-status-warning {
  background-color: var(--status-warning);
}

.bg-status-warningBg {
  background-color: var(--status-warningBg);
}

.bg-status-danger {
  background-color: var(--status-danger);
}

.bg-status-dangerBg {
  background-color: var(--status-dangerBg);
}

.text-primary {
  color: var(--primary);
}

.text-cta {
  color: var(--cta);
}

.text-slate-canvas {
  color: var(--slate-canvas);
}

.text-slate-surface {
  color: var(--slate-surface);
}

.text-slate-border {
  color: var(--slate-border);
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

.text-slate-400 {
  color: #94A3B8;
}

.text-slate-500 {
  color: #64748B;
}

.text-slate-600 {
  color: #475569;
}

.text-slate-700 {
  color: #334155;
}

.text-slate-800 {
  color: #1E293B;
}

.text-slate-900 {
  color: #0F172A;
}

.text-status-success {
  color: var(--status-success);
}

.text-status-warning {
  color: var(--status-warning);
}

.text-status-danger {
  color: var(--status-danger);
}

.border-slate-200 {
  border-color: #E2E8F0;
}

.border-slate-300 {
  border-color: #CBD5E1;
}

.border-slate-100 {
  border-color: #F1F5F9;
}

.border-primary {
  border-color: var(--primary);
}

.border-transparent {
  border-color: transparent;
}

.shadow-card {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}

.shadow-float {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}

.ring-primary {
  --tw-ring-color: rgb(59 130 246 / 40%);
}

.focus\:ring-primary:focus {
  --tw-ring-color: rgb(59 130 246 / 40%);
}

.hover\:bg-primary-dark:hover {
  background-color: var(--primary-dark);
}

.hover\:bg-primary-50:hover {
  background-color: var(--primary-50);
}

.hover\:bg-cta-hover:hover {
  background-color: var(--cta-hover);
}

.hover\:bg-slate-50:hover {
  background-color: var(--slate-canvas);
}

.hover\:bg-slate-100:hover {
  background-color: #F1F5F9;
}

.hover\:text-primary:hover {
  color: var(--primary);
}

.hover\:text-slate-900:hover {
  color: #0F172A;
}

.hover\:text-slate-600:hover {
  color: #475569;
}

.hover\:border-primary:hover {
  border-color: var(--primary);
}

.hover\:shadow-float:hover {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
