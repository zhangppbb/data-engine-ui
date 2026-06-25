<template>
  <div class="bg-slate-canvas text-slate-body font-sans antialiased selection:bg-primary-light selection:text-white">
    <!-- [MODULE] c45_整体布局 -->
    <div class="flex flex-col min-h-screen">
      <!-- [MODULE] a21_顶部标题栏 -->
      <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div class="h-16 flex items-center justify-between px-6">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-cta flex items-center justify-center text-white">
              <Icon icon="fa-solid:building" :size="16" />
            </div>
            <div>
              <h1 class="font-bold text-slate-900 text-lg leading-tight">
                建筑业公招市场洞察
              </h1>
              <span class="text-[10px] text-slate-400 tracking-wide">
                数据看板原型&middot;示例数据
              </span>
            </div>
          </div>
          <div class="hidden md:flex items-center gap-3">
            <span class="badge badge-neutral">
              <Icon icon="fa-regular:calendar" :size="12" class="mr-1" />
              数据截至 2024-09
            </span>
            <button class="btn btn-primary btn-sm">
              <Icon icon="fa-solid:download" :size="12" class="mr-1" />
              导出报告
            </button>
          </div>
        </div>
      </header>
      <!-- [/MODULE] a21_顶部标题栏 -->
      
      <div class="flex flex-1 overflow-hidden">
        <!-- [MODULE] b87_左侧分类导航 -->
        <aside class="w-64 bg-white border-r border-slate-200 flex-shrink-0 h-[calc(100vh-4rem)] overflow-y-auto pt-6">
          <nav class="space-y-1 px-3">
            <div class="mb-4 px-4">
              <h5 class="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                分析维度
              </h5>
            </div>
            <div 
              v-for="navItem in navItems" 
              :key="navItem.id"
              @click="selectNavItem(navItem.id)"
              :class="[
                'nav-item',
                activeNav === navItem.id ? 'nav-item-active' : 'nav-item-inactive'
              ]"
            >
              <Icon :icon="navItem.icon" :size="16" class="w-5 text-center" />
              <span>{{ navItem.label }}</span>
            </div>
          </nav>
          <div class="mt-8 px-4">
            <div class="p-4 bg-primary-50 rounded-lg border border-primary-100">
              <p class="text-xs text-primary-800 font-medium mb-1">
                <Icon icon="fa-solid:info-circle" :size="12" class="mr-1" />
                提示
              </p>
              <p class="text-[11px] text-primary-600">
                点击左侧导航切换不同分析模块，图表支持悬停查看详细数值。
              </p>
            </div>
          </div>
        </aside>
        <!-- [/MODULE] b87_左侧分类导航 -->
        
        <!-- [MODULE] d73_右侧内容区域 -->
        <main class="flex-1 overflow-y-auto p-6 bg-slate-50 h-[calc(100vh-4rem)]">
          <!-- [MODULE] e12_市场总量模块 -->
          <section v-show="activeNav === 'market-overview'" class="space-y-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="heading-section">
                  市场总量&middot;核心指标
                </h2>
                <p class="text-xs text-slate-400">
                  全国建筑业公开招标市场整体概况（示例数据）
                </p>
              </div>
              <span class="badge badge-neutral">
                单位:亿元
              </span>
            </div>
            <!-- 顶部指标卡 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <!-- [MODULE] f98_指标卡:全国中标总额 -->
              <div class="card p-6 hover:border-primary/40 transition-colors">
                <div class="flex justify-between items-start mb-3">
                  <div class="text-xs font-semibold text-slate-500 uppercase">
                    全国中标总额
                  </div>
                  <div class="p-2 bg-blue-50 rounded text-primary">
                    <Icon icon="fa-solid:globe" :size="14" />
                  </div>
                </div>
                <div class="text-3xl font-bold text-slate-900 tabular-nums mb-2">
                  12,458
                </div>
                <div class="flex items-center text-xs">
                  <span class="text-status-success font-medium flex items-center">
                    <Icon icon="fa-solid:arrow-trend-up" :size="12" class="mr-1" />
                    +8.2%
                  </span>
                  <span class="text-slate-400 ml-2">
                    同比去年
                  </span>
                </div>
              </div>
              <!-- [/MODULE] f98_指标卡:全国中标总额 -->
              
              <!-- [MODULE] g34_指标卡:同比变化 -->
              <div class="card p-6 hover:border-primary/40 transition-colors">
                <div class="flex justify-between items-start mb-3">
                  <div class="text-xs font-semibold text-slate-500 uppercase">
                    平均增长率
                  </div>
                  <div class="p-2 bg-green-50 rounded text-green-600">
                    <Icon icon="fa-solid:percent" :size="14" />
                  </div>
                </div>
                <div class="text-3xl font-bold text-slate-900 tabular-nums mb-2">
                  7.6%
                </div>
                <div class="flex items-center text-xs">
                  <span class="text-status-success font-medium flex items-center">
                    <Icon icon="fa-solid:arrow-trend-up" :size="12" class="mr-1" />
                    +1.3pct
                  </span>
                  <span class="text-slate-400 ml-2">
                    较上季度
                  </span>
                </div>
              </div>
              <!-- [/MODULE] g34_指标卡:同比变化 -->
              
              <!-- [MODULE] h21_指标卡:八大央企份额 -->
              <div class="card p-6 hover:border-primary/40 transition-colors">
                <div class="flex justify-between items-start mb-3">
                  <div class="text-xs font-semibold text-slate-500 uppercase">
                    八大央企份额
                  </div>
                  <div class="p-2 bg-indigo-50 rounded text-indigo-600">
                    <Icon icon="fa-solid:flag" :size="14" />
                  </div>
                </div>
                <div class="text-3xl font-bold text-slate-900 tabular-nums mb-2">
                  32.8%
                </div>
                <div class="flex items-center text-xs">
                  <span class="text-status-danger font-medium flex items-center">
                    <Icon icon="fa-solid:arrow-trend-down" :size="12" class="mr-1" />
                    -1.2%
                  </span>
                  <span class="text-slate-400 ml-2">
                    同比去年
                  </span>
                </div>
              </div>
              <!-- [/MODULE] h21_指标卡:八大央企份额 -->
              
              <!-- [MODULE] i56_指标卡:民营企业份额 -->
              <div class="card p-6 hover:border-primary/40 transition-colors">
                <div class="flex justify-between items-start mb-3">
                  <div class="text-xs font-semibold text-slate-500 uppercase">
                    民营企业份额
                  </div>
                  <div class="p-2 bg-orange-50 rounded text-orange-600">
                    <Icon icon="fa-solid:people-group" :size="14" />
                  </div>
                </div>
                <div class="text-3xl font-bold text-slate-900 tabular-nums mb-2">
                  41.5%
                </div>
                <div class="flex items-center text-xs">
                  <span class="text-status-success font-medium flex items-center">
                    <Icon icon="fa-solid:arrow-trend-up" :size="12" class="mr-1" />
                    +2.4%
                  </span>
                  <span class="text-slate-400 ml-2">
                    同比去年
                  </span>
                </div>
              </div>
              <!-- [/MODULE] i56_指标卡:民营企业份额 -->
            </div>
            
            <!-- 企业类型份额饼图 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    企业性质中标份额分布
                  </h3>
                  <span class="text-xs text-slate-400">
                    单位: %
                  </span>
                </div>
                <div class="card-body">
                  <div ref="enterpriseTypePie" class="w-full h-[320px]"></div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    近六个月中标总额趋势
                  </h3>
                  <span class="text-xs text-slate-400">
                    移动累计
                  </span>
                </div>
                <div class="card-body">
                  <div ref="totalTrendLine" class="w-full h-[320px]"></div>
                </div>
              </div>
            </div>
            
            <!-- 新增图表 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    项目规模结构分布
                  </h3>
                  <span class="text-xs text-slate-400">
                    单位: %
                  </span>
                </div>
                <div class="card-body">
                  <div ref="projectSizeStack" class="w-full h-[320px]"></div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    现汇 vs 投资类项目对比
                  </h3>
                  <span class="text-xs text-slate-400">
                    单位: 千亿元
                  </span>
                </div>
                <div class="card-body">
                  <div ref="cashVsInvestBar" class="w-full h-[320px]"></div>
                </div>
              </div>
            </div>
          </section>
          <!-- [/MODULE] e12_市场总量模块 -->
          
          <!-- [MODULE] f45_企业竞争格局模块 -->
          <section v-show="activeNav === 'competition'" class="space-y-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="heading-section">
                  企业竞争格局
                </h2>
                <p class="text-xs text-slate-400">
                  头部企业中标金额排名分析（示例数据）
                </p>
              </div>
            </div>
            <!-- 顶部指标卡 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="card p-5 hover:border-primary/40 transition-colors">
                <div class="text-xs text-slate-500 mb-1">
                  八大央企中标总额
                </div>
                <div class="text-2xl font-bold tabular-nums text-slate-900 mb-1">
                  13,760 亿
                </div>
                <div class="text-xs text-status-danger">
                  <Icon icon="fa-solid:arrow-down" :size="12" />
                  -1.2% YoY
                </div>
              </div>
              <div class="card p-5 hover:border-primary/40 transition-colors">
                <div class="text-xs text-slate-500 mb-1">
                  其他央国企总额
                </div>
                <div class="text-2xl font-bold tabular-nums text-slate-900 mb-1">
                  9,850 亿
                </div>
                <div class="text-xs text-status-success">
                  <Icon icon="fa-solid:arrow-up" :size="12" />
                  +8.5% YoY
                </div>
              </div>
            </div>
            
            <!-- 八大央企排名与同比变化 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    八大央企中标额排名 (2024)
                  </h3>
                  <span class="text-xs text-slate-400">
                    单位: 亿元
                  </span>
                </div>
                <div class="card-body">
                  <div ref="top8HorizontalBar" class="w-full h-[400px]"></div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    八大央企同比变化 (%)
                  </h3>
                </div>
                <div class="card-body">
                  <div ref="top8GrowthBar" class="w-full h-[400px]"></div>
                </div>
              </div>
            </div>
            
            <!-- 企业类型份额与对比 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    企业类型份额分布
                  </h3>
                </div>
                <div class="card-body">
                  <div ref="enterpriseTypeRing" class="w-full h-[400px]"></div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    企业类型市场份额对比 (2024 vs 2025)
                  </h3>
                </div>
                <div class="card-body">
                  <div ref="enterpriseShareComparison" class="w-full h-[400px]"></div>
                </div>
              </div>
            </div>
          </section>
          <!-- [/MODULE] f45_企业竞争格局模块 -->
          
          <!-- [MODULE] g78_行业分布模块 -->
          <section v-show="activeNav === 'industry'" class="space-y-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="heading-section">
                  行业分布分析
                </h2>
                <p class="text-xs text-slate-400">
                  不同细分行业中标规模与增长率分析（V10版本数据）
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    各行业中标额占比
                  </h3>
                  <span class="text-xs text-slate-400">
                    按中标金额排序
                  </span>
                </div>
                <div class="card-body">
                  <div ref="industryPieChart" class="w-full h-[400px]"></div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    行业同比增长率
                  </h3>
                  <span class="text-xs text-slate-400">
                    正负增长区分显示
                  </span>
                </div>
                <div class="card-body">
                  <div ref="industryGrowthBar" class="w-full h-[400px]"></div>
                </div>
              </div>
            </div>
          </section>
          <!-- [/MODULE] g78_行业分布模块 -->
          
          <!-- [MODULE] h89_区域分析模块 -->
          <section v-show="activeNav === 'region'" class="space-y-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="heading-section">
                  区域市场分布
                </h2>
                <p class="text-xs text-slate-400">
                  按省份和经济区域划分的中标情况分析（V10版本数据）
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div class="card lg:col-span-2">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    全国区域中标额分布图
                  </h3>
                  <span class="text-xs text-slate-400">
                    点击省份查看详细数据
                  </span>
                </div>
                <div class="card-body">
                  <div ref="chinaRegionMap" class="w-full h-[450px]"></div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    区域中标额TOP5
                  </h3>
                  <span class="text-xs text-slate-400">
                    单位: 亿元
                  </span>
                </div>
                <div class="card-body">
                  <div ref="topRegionBar" class="w-full h-[220px]"></div>
                </div>
                <div class="px-5 pb-5 border-t border-slate-100 pt-4">
                  <h4 class="text-xs font-semibold text-slate-600 mb-3">
                    区域增长率对比
                  </h4>
                  <div ref="regionGrowthBar" class="w-full h-[200px]"></div>
                </div>
              </div>
            </div>
          </section>
          <!-- [/MODULE] h89_区域分析模块 -->
          
          <!-- [MODULE] i34_八大央企对标模块 -->
          <section v-show="activeNav === 'comparison'" class="space-y-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="heading-section">
                  八大央企对标分析
                </h2>
                <p class="text-xs text-slate-400">
                  头部央企在不同维度的竞争对比（V10版本数据）
                </p>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    央企中标总额对比
                  </h3>
                  <span class="text-xs text-slate-400">
                    单位: 亿元
                  </span>
                </div>
                <div class="card-body">
                  <div ref="centralEnterpriseBar" class="w-full h-[350px]"></div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    央企行业分布对比
                  </h3>
                  <span class="text-xs text-slate-400">
                    按行业占比排序
                  </span>
                </div>
                <div class="card-body">
                  <div ref="enterpriseIndustryRadar" class="w-full h-[350px]"></div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3 class="text-sm font-semibold text-slate-800">
                  央企同比增长率对比
                </h3>
                <span class="text-xs text-slate-400">
                  正负增长区分显示
                </span>
              </div>
              <div class="card-body">
                <div ref="enterpriseGrowthBar" class="w-full h-[300px]"></div>
              </div>
            </div>
          </section>
          <!-- [/MODULE] i34_八大央企对标模块 -->
          
          <!-- [MODULE] j56_中交集团深度模块 -->
          <section v-show="activeNav === 'cccg'" class="space-y-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="heading-section">
                  中交集团深度分析
                </h2>
                <p class="text-xs text-slate-400">
                  中交集团细分维度洞察（示例数据）
                </p>
              </div>
            </div>
            <!-- 核心指标卡 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div class="card p-5 hover:border-primary/40 transition-colors">
                <div class="text-xs text-slate-500 mb-1">
                  中标总额
                </div>
                <div class="text-2xl font-bold tabular-nums text-slate-900 mb-1">
                  2,450 亿
                </div>
                <div class="text-xs text-status-success">
                  <Icon icon="fa-solid:arrow-up" :size="12" />
                  +8.5% YoY
                </div>
              </div>
              <div class="card p-5 hover:border-primary/40 transition-colors">
                <div class="text-xs text-slate-500 mb-1">
                  市场份额
                </div>
                <div class="text-2xl font-bold tabular-nums text-slate-900 mb-1">
                  17.8%
                </div>
                <div class="text-xs text-status-success">
                  <Icon icon="fa-solid:arrow-up" :size="12" />
                  +0.3pct YoY
                </div>
              </div>
              <div class="card p-5 hover:border-primary/40 transition-colors">
                <div class="text-xs text-slate-500 mb-1">
                  项目数量
                </div>
                <div class="text-2xl font-bold tabular-nums text-slate-900 mb-1">
                  862 个
                </div>
                <div class="text-xs text-status-danger">
                  <Icon icon="fa-solid:arrow-down" :size="12" />
                  -5.2% YoY
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    二级单位中标额排名
                  </h3>
                  <span class="text-xs text-slate-400">
                    单位:亿元
                  </span>
                </div>
                <div class="card-body">
                  <div ref="cccgSubsidiaryBar" class="w-full h-[380px]"></div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    各区域中标额分布
                  </h3>
                  <span class="text-xs text-slate-400">
                    单位: 亿元
                  </span>
                </div>
                <div class="card-body">
                  <div ref="cccgRegionBar" class="w-full h-[380px]"></div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="text-sm font-semibold text-slate-800">
                    各行业中标额气泡图
                  </h3>
                  <span class="text-xs text-slate-400">
                    气泡大小代表中标额
                  </span>
                </div>
                <div class="card-body">
                  <div ref="cccgIndustryBubble" class="w-full h-[380px]"></div>
                </div>
              </div>
            </div>
          </section>
          <!-- [/MODULE] j56_中交集团深度模块 -->
        </main>
        <!-- [/MODULE] d73_右侧内容区域 -->
      </div>
    </div>
    <!-- [/MODULE] c45_整体布局 -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import Icon from '@/components/Icon/src/Icon.vue'

// 响应式数据
const activeNav = ref('market-overview')

// 导航项配置
const navItems = ref([
  { id: 'market-overview', label: '市场总量', icon: 'fa-solid:chart-line' },
  { id: 'competition', label: '企业竞争格局', icon: 'fa-solid:balance-scale' },
  { id: 'industry', label: '行业分布', icon: 'fa-solid:sitemap' },
  { id: 'region', label: '区域分析', icon: 'fa-solid:map-location-dot' },
  { id: 'comparison', label: '八大央企对标', icon: 'fa-solid:people-group' },
  { id: 'cccg', label: '中交集团深度', icon: 'fa-solid:search' }
])

// 图表引用
const enterpriseTypePie = ref()
const totalTrendLine = ref()
const projectSizeStack = ref()
const cashVsInvestBar = ref()
const top8HorizontalBar = ref()
const top8GrowthBar = ref()
const enterpriseTypeRing = ref()
const enterpriseShareComparison = ref()
const industryPieChart = ref()
const industryGrowthBar = ref()
const chinaRegionMap = ref()
const topRegionBar = ref()
const regionGrowthBar = ref()
const centralEnterpriseBar = ref()
const enterpriseIndustryRadar = ref()
const enterpriseGrowthBar = ref()
const cccgSubsidiaryBar = ref()
const cccgRegionBar = ref()
const cccgIndustryBubble = ref()

// 方法
const selectNavItem = (navId: string) => {
  activeNav.value = navId
  // 延迟触发resize，让图表渲染正确
  nextTick(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
  })
}

// 初始化市场总量模块图表
const initMarketOverviewCharts = () => {
  // 1. 企业类型饼图
  if (enterpriseTypePie.value) {
    const pieChart = echarts.init(enterpriseTypePie.value)
    const pieOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [{
        name: '中标份额',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: '{b}: {d}%'
        },
        data: [
          { value: 32.8, name: '八大央企', itemStyle: { color: '#1E40AF' } },
          { value: 25.7, name: '其他央国企', itemStyle: { color: '#3B82F6' } },
          { value: 41.5, name: '民营企业', itemStyle: { color: '#F97316' } }
        ]
      }]
    }
    pieChart.setOption(pieOption)
    window.addEventListener('resize', () => pieChart.resize())
  }

  // 2. 趋势线图
  if (totalTrendLine.value) {
    const trendChart = echarts.init(totalTrendLine.value)
    const trendOption = {
      tooltip: { trigger: 'axis' },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['4月', '5月', '6月', '7月', '8月', '9月']
      },
      yAxis: {
        type: 'value',
        name: '千亿元'
      },
      series: [{
        name: '累计中标总额',
        type: 'line',
        smooth: true,
        data: [10.2, 10.8, 11.1, 11.5, 11.9, 12.5],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(30, 64, 175, 0.3)' },
            { offset: 1, color: 'rgba(30, 64, 175, 0.05)' }
          ])
        },
        lineStyle: { color: '#1E40AF', width: 2 }
      }]
    }
    trendChart.setOption(trendOption)
    window.addEventListener('resize', () => trendChart.resize())
  }

  // 3. 项目规模结构分布
  if (projectSizeStack.value) {
    const projectSizeChart = echarts.init(projectSizeStack.value)
    const projectSizeOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      legend: {
        data: ['1-10亿', '10-50亿', '50-100亿', '100亿以上']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        name: '占比 (%)'
      },
      yAxis: {
        type: 'category',
        data: ['项目规模分布']
      },
      series: [
        { name: '1-10亿', type: 'bar', stack: 'total', data: [25.3], itemStyle: { color: '#1E40AF' } },
        { name: '10-50亿', type: 'bar', stack: 'total', data: [38.7], itemStyle: { color: '#3B82F6' } },
        { name: '50-100亿', type: 'bar', stack: 'total', data: [22.5], itemStyle: { color: '#60A5FA' } },
        { name: '100亿以上', type: 'bar', stack: 'total', data: [13.5], itemStyle: { color: '#93C5FD' } }
      ]
    }
    projectSizeChart.setOption(projectSizeOption)
    window.addEventListener('resize', () => projectSizeChart.resize())
  }

  // 4. 现汇VS投资类项目对比
  if (cashVsInvestBar.value) {
    const cashVsInvestChart = echarts.init(cashVsInvestBar.value)
    const cashVsInvestOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      legend: {
        data: ['现汇项目', '投资类项目']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['2024年', '2023年']
      },
      yAxis: {
        type: 'value',
        name: '千亿元'
      },
      series: [
        { name: '现汇项目', type: 'bar', data: [7.8, 6.2], itemStyle: { color: '#1E40AF' } },
        { name: '投资类项目', type: 'bar', data: [4.6, 3.1], itemStyle: { color: '#0EA5E9' } }
      ]
    }
    cashVsInvestChart.setOption(cashVsInvestOption)
    window.addEventListener('resize', () => cashVsInvestChart.resize())
  }
}

// 初始化企业竞争格局模块图表
const initCompetitionCharts = () => {
  // 1. 八大央企中标额排名横向柱状图
  if (top8HorizontalBar.value) {
    const top8Chart = echarts.init(top8HorizontalBar.value)
    const top8Option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      grid: {
        left: '20%',
        right: '15%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        name: '亿元',
        max: 3800,
        axisLabel: { formatter: '{value}' }
      },
      yAxis: {
        type: 'category',
        data: ['中国化学', '中国中冶', '中国能建', '中国电建', '中国交建', '中国中铁', '中国铁建', '中国建筑']
      },
      series: [{
        name: '中标额',
        type: 'bar',
        data: [310, 570, 680, 1120, 1950, 2410, 2860, 3420],
        itemStyle: { color: '#1E3A8A' },
        label: {
          show: true,
          position: 'right',
          formatter: '{c}亿'
        }
      }]
    }
    top8Chart.setOption(top8Option)
    window.addEventListener('resize', () => top8Chart.resize())
  }

  // 2. 八大央企同比变化柱状图
  if (top8GrowthBar.value) {
    const growthChart = echarts.init(top8GrowthBar.value)
    const growthOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['中国建筑', '中国铁建', '中国中铁', '中国交建', '中国电建', '中国能建', '中国中冶', '中国化学']
      },
      yAxis: {
        type: 'value',
        name: '同比变化 (%)'
      },
      series: [{
        name: '同比变化',
        type: 'bar',
        data: [-2.1, -3.2, -1.8, -4.5, -6.0, -5.2, -8.0, 2.5],
        itemStyle: {
          color: (params) => params.value >= 0 ? '#10B981' : '#EF4444'
        },
        label: {
          show: true,
          position: 'top',
          formatter: '{value}%'
        }
      }]
    }
    growthChart.setOption(growthOption)
    window.addEventListener('resize', () => growthChart.resize())
  }

  // 3. 企业类型份额环形图
  if (enterpriseTypeRing.value) {
    const ringChart = echarts.init(enterpriseTypeRing.value)
    const ringOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}% ({d}%)'
      },
      legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center'
      },
      series: [{
        name: '市场份额',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: '{b}: {d}%'
        },
        data: [
          { value: 32.8, name: '八大央企', itemStyle: { color: '#1E3A8A' } },
          { value: 25.7, name: '其他央国企', itemStyle: { color: '#3B82F6' } },
          { value: 41.5, name: '民营企业', itemStyle: { color: '#F97316' } }
        ]
      }]
    }
    ringChart.setOption(ringOption)
    window.addEventListener('resize', () => ringChart.resize())
  }

  // 4. 企业类型市场份额对比分组柱状图
  if (enterpriseShareComparison.value) {
    const comparisonChart = echarts.init(enterpriseShareComparison.value)
    const comparisonOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      legend: {
        data: ['2024年', '2025年'],
        top: '0%'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['八大央企', '其他央国企', '民营企业']
      },
      yAxis: {
        type: 'value',
        name: '市场份额 (%)',
        max: 50
      },
      series: [
        {
          name: '2024年',
          type: 'bar',
          barWidth: '40%',
          data: [34.0, 24.5, 41.5],
          itemStyle: { color: '#1E40AF' },
          label: { show: true, position: 'top', formatter: '{value}%' }
        },
        {
          name: '2025年',
          type: 'bar',
          barWidth: '40%',
          data: [32.8, 25.7, 41.5],
          itemStyle: { color: '#3B82F6' },
          label: { show: true, position: 'top', formatter: '{value}%' }
        }
      ]
    }
    comparisonChart.setOption(comparisonOption)
    window.addEventListener('resize', () => comparisonChart.resize())
  }
}

// 初始化行业分布模块图表
const initIndustryCharts = () => {
  // 1. 各行业中标额占比饼图
  if (industryPieChart.value) {
    const pieChart = echarts.init(industryPieChart.value)
    const option = {
      tooltip: { trigger: 'item' },
      legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: { fontSize: 12 }
      },
      series: [{
        name: '中标额占比',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: { borderRadius: 10 },
        label: { show: false, position: 'center' },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold'
          }
        },
        data: [
          { value: 35, name: '房屋建筑' },
          { value: 25, name: '交通运输' },
          { value: 15, name: '水利水电' },
          { value: 10, name: '能源电力' },
          { value: 8, name: '市政工程' },
          { value: 7, name: '其他' }
        ]
      }]
    }
    pieChart.setOption(option)
    window.addEventListener('resize', () => pieChart.resize())
  }

  // 2. 行业同比增长率柱状图
  if (industryGrowthBar.value) {
    const growthBar = echarts.init(industryGrowthBar.value)
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['房屋建筑', '交通运输', '水利水电', '能源电力', '市政工程', '其他']
      },
      yAxis: {
        type: 'value',
        axisLabel: { formatter: '{value}%' }
      },
      series: [{
        name: '同比增长率',
        type: 'bar',
        data: [2.1, -3.2, 1.8, -4.5, 6.0, -2.5],
        itemStyle: {
          color: (params) => params.value >= 0 ? '#10B981' : '#EF4444'
        },
        label: {
          show: true,
          position: 'top',
          formatter: '{value}%'
        }
      }]
    }
    growthBar.setOption(option)
    window.addEventListener('resize', () => growthBar.resize())
  }
}

// 组件挂载
onMounted(() => {
  // 初始化所有图表
  nextTick(() => {
    initMarketOverviewCharts()
    initCompetitionCharts()
    initIndustryCharts()
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

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-slate-300 rounded-full;
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
  @apply px-3 py-1.5 text-xs;
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
  @apply min-w-full divide-y divide-slate-200;
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
  @apply inline-flex items-center px-2 py-0.5 rounded text-xs font-medium;
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

/* Nav Item */
.nav-item {
  @apply flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors duration-150 cursor-pointer;
}

.nav-item-active {
  @apply bg-primary-50 text-primary-dark font-medium;
}

.nav-item-inactive {
  @apply text-slate-600 hover:bg-slate-50 hover:text-slate-900;
}

// 自定义颜色变量
:root {
  --primary: #1E40AF;
  --primary-dark: #1E3A8A;
  --primary-light: #3B82F6;
  --primary-50: #EFF6FF;
  --cta: #0EA5E9;
  --cta-hover: #0284C7;
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

.text-primary-dark {
  color: var(--primary-dark);
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

.border-primary-100 {
  border-color: #DBEAFE;
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

.hover\:text-slate-900:hover {
  color: #0F172A;
}

.hover\:border-primary\/40:hover {
  border-color: rgb(30 64 175 / 40%);
}
</style>
