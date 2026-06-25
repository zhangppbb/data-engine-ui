<template>
  <PageLayout>
    <!-- 主内容 -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
      <div class="relative z-10 pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 走马灯轮播 -->
        <section class="mt-8">
          <Carousel 
            :autoplay="5000"
            :show-arrows="true"
            :show-indicators="true"
            :loop="true"
            container-class="h-[260px] rounded-xl overflow-hidden"
            @change="onCarouselChange"
          >
            <!-- 第一页 -->
            <div class="flex gap-6 w-full">
              <router-link to="/pages/apps/spec/demo" class="flex-1 min-w-[300px] h-[260px] rounded-xl glass-panel-base overflow-hidden group hover:shadow-glow-sm transition-all duration-300 flex flex-col">
                <div class="h-[180px] w-full overflow-hidden">
                  <img src="https://design.gemcoder.com/staticResource/echoAiSystemImages/c93586b7629841175b24923fd73ea8a9.png" alt="产业招商全流程专区" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div class="h-[80px] bg-void-800/80 pl-8 flex flex-col justify-center">
                  <h3 class="text-[18px] font-bold text-white leading-[24px] mt-4">
                    产业招商全流程专区
                  </h3>
                  <p class="text-[14px] text-slate-400 mt-2 mb-4 max-w-[644px] truncate">
                    从潜客挖掘到区域分析，一站式助力产业招商落地
                  </p>
                </div>
              </router-link>
              
              <router-link to="/pages/apps/spec/demo" class="flex-1 min-w-[300px] h-[260px] rounded-xl glass-panel-base overflow-hidden group hover:shadow-glow-sm transition-all duration-300 flex flex-col">
                <div class="h-[180px] w-full overflow-hidden">
                  <img src="https://design.gemcoder.com/staticResource/echoAiSystemImages/f054317332874cfaed6c121c84b16c12.png" alt="AI 智能投标专区" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div class="h-[80px] bg-void-800/80 pl-8 flex flex-col justify-center">
                  <h3 class="text-[18px] font-bold text-white leading-[24px] mt-4">
                    AI 智能投标专区
                  </h3>
                  <p class="text-[14px] text-slate-400 mt-2 mb-4 max-w-[644px] truncate">
                    基于大语言模型的智能数据分析师，自动完成数据挖掘与报告生成
                  </p>
                </div>
              </router-link>
            </div>
            
            <!-- 第二页 -->
            <div class="flex gap-6 w-full">
              <router-link to="/pages/apps/detail/demo" class="flex-1 min-w-[300px] h-[260px] rounded-xl glass-panel-base overflow-hidden group hover:shadow-glow-sm transition-all duration-300 flex flex-col">
                <div class="h-[180px] w-full overflow-hidden">
                  <img src="https://design.gemcoder.com/staticResource/echoAiSystemImages/5c3f608860411021adc1dfc69e1fdbfb.png" alt="企业合规审查专区" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div class="h-[80px] bg-void-800/80 pl-8 flex flex-col justify-center">
                  <h3 class="text-[18px] font-bold text-white leading-[24px] mt-4">
                    企业合规审查专区
                  </h3>
                  <p class="text-[14px] text-slate-400 mt-2 mb-4 max-w-[644px] truncate">
                    企业风控合规全场景工具集，一站式完成企业信息核验、失信排查全流程
                  </p>
                </div>
              </router-link>
              
              <router-link to="/pages/apps/detail/demo" class="flex-1 min-w-[300px] h-[260px] rounded-xl glass-panel-base overflow-hidden group hover:shadow-glow-sm transition-all duration-300 flex flex-col">
                <div class="h-[180px] w-full overflow-hidden">
                  <img src="https://design.gemcoder.com/staticResource/echoAiSystemImages/24d3d53500535077ea94eba34b106638.png" alt="市场竞争分析专区" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div class="h-[80px] bg-void-800/80 pl-8 flex flex-col justify-center">
                  <h3 class="text-[18px] font-bold text-white leading-[24px] mt-4">
                    市场竞争分析专区
                  </h3>
                  <p class="text-[14px] text-slate-400 mt-2 mb-4 max-w-[644px] truncate">
                    市场洞察全链路工具，覆盖竞品分析、行业报告、招投标数据查询全场景
                  </p>
                </div>
              </router-link>
            </div>
          </Carousel>
        </section>

        <!-- 应用分类导航 -->
        <section class="mt-14">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <h2 class="text-[24px] font-bold text-white leading-[40px]">应用分类</h2>
          </div>
          <div class="flex flex-wrap gap-4 mb-8">
            <button 
              v-for="category in categories" 
              :key="category.id"
              :class="[
                'px-6 py-3 rounded-full font-medium transition-all hover:scale-105',
                activeCategory === category.id 
                  ? 'bg-accent-gradient text-void-900 shadow-glow-sm' 
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-aurora-cyan/10 hover:border-aurora-cyan/30'
              ]"
              @click="setActiveCategory(category.id)"
            >
              {{ category.name }}
            </button>
          </div>
        </section>

        <!-- 热门推荐专栏 -->
        <section id="popular" class="mt-14">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <h2 class="text-[24px] font-bold text-white leading-[40px]">
                热门推荐
              </h2>
              <div class="relative w-full sm:w-[320px]">
                <Icon icon="fa-solid:search" :size="16" class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="text" 
                  v-model="searchQuery"
                  placeholder="搜索应用名称 / 功能" 
                  class="w-full h-[36px] rounded-lg pl-10 pr-4 bg-void-900/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all"
                />
              </div>
            </div>
            <router-link to="/pages/apps/detail/demo" class="w-[100px] h-[32px] flex items-center justify-center text-sm text-aurora-cyan hover:text-aurora-green hover:bg-aurora-cyan/10 rounded transition-colors">
              查看更多
              <Icon icon="fa-solid:arrow-right" :size="12" class="ml-1" />
            </router-link>
          </div>
          
          <!-- 应用卡片网格 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <router-link 
              v-for="app in filteredPopularApps" 
              :key="app.id"
              :to="app.link" 
              class="h-[210px] rounded-xl glass-panel-base px-6 py-6 transition-all duration-300 hover:shadow-glow-sm hover:border-aurora-cyan/30 flex flex-col"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-2">
                  <div class="w-[24px] h-[24px] rounded-md bg-accent-gradient flex items-center justify-center">
                    <Icon :icon="app.icon" :size="12" class="text-void-900" />
                  </div>
                  <h3 class="text-[16px] font-bold text-white truncate">
                    {{ app.name }}
                  </h3>
                </div>
                <div class="flex gap-2">
                  <span :class="['badge px-2 py-0.5 text-xs', app.badgeClass]">
                    {{ app.price }}
                  </span>
                </div>
              </div>
              <p class="mt-3 text-[14px] text-slate-400 line-clamp-2 overflow-hidden">
                {{ app.description }}
              </p>
              <div class="mt-3 flex gap-3 items-center flex-wrap">
                <span 
                  v-for="tag in app.tags" 
                  :key="tag"
                  class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300"
                >
                  {{ tag }}
                </span>
              </div>
            </router-link>
          </div>
        </section>

        <!-- 市场竞争分析专栏 -->
        <section id="market" class="mt-14">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-[24px] font-bold text-white leading-[40px]">
              市场竞争分析
            </h2>
            <router-link to="/pages/apps/detail/demo" class="w-[100px] h-[32px] flex items-center justify-center text-sm text-aurora-cyan hover:text-aurora-green hover:bg-aurora-cyan/10 rounded transition-colors">
              查看更多
              <Icon icon="fa-solid:arrow-right" :size="12" class="ml-1" />
            </router-link>
          </div>
          
          <!-- 应用卡片网格 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <router-link 
              v-for="app in marketApps" 
              :key="app.id"
              :to="app.link" 
              class="h-[210px] rounded-xl glass-panel-base px-6 py-6 transition-all duration-300 hover:shadow-glow-sm hover:border-aurora-cyan/30 flex flex-col"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-2">
                  <div class="w-[24px] h-[24px] rounded-md bg-accent-gradient flex items-center justify-center">
                    <Icon :icon="app.icon" :size="12" class="text-void-900" />
                  </div>
                  <h3 class="text-[16px] font-bold text-white truncate">
                    {{ app.name }}
                  </h3>
                </div>
                <div class="flex gap-2">
                  <span :class="['badge px-2 py-0.5 text-xs', app.badgeClass]">
                    {{ app.price }}
                  </span>
                </div>
              </div>
              <p class="mt-3 text-[14px] text-slate-400 line-clamp-2 overflow-hidden">
                {{ app.description }}
              </p>
              <div class="mt-3 flex gap-3 items-center flex-wrap">
                <span 
                  v-for="tag in app.tags" 
                  :key="tag"
                  class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300"
                >
                  {{ tag }}
                </span>
              </div>
            </router-link>
          </div>
        </section>

        <!-- 产业招商分析专栏 -->
        <section id="investment" class="mt-14">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-[24px] font-bold text-white leading-[40px]">
              产业招商分析
            </h2>
            <router-link to="/pages/apps/detail/demo" class="w-[100px] h-[32px] flex items-center justify-center text-sm text-aurora-cyan hover:text-aurora-green hover:bg-aurora-cyan/10 rounded transition-colors">
              查看更多
              <Icon icon="fa-solid:arrow-right" :size="12" class="ml-1" />
            </router-link>
          </div>
          
          <!-- 应用卡片网格 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <router-link 
              v-for="app in investmentApps" 
              :key="app.id"
              :to="app.link" 
              class="h-[210px] rounded-xl glass-panel-base px-6 py-6 transition-all duration-300 hover:shadow-glow-sm hover:border-aurora-cyan/30 flex flex-col"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-2">
                  <div class="w-[24px] h-[24px] rounded-md bg-accent-gradient flex items-center justify-center">
                    <Icon :icon="app.icon" :size="12" class="text-void-900" />
                  </div>
                  <h3 class="text-[16px] font-bold text-white truncate">
                    {{ app.name }}
                  </h3>
                </div>
                <div class="flex gap-2">
                  <span :class="['badge px-2 py-0.5 text-xs', app.badgeClass]">
                    {{ app.price }}
                  </span>
                </div>
              </div>
              <p class="mt-3 text-[14px] text-slate-400 line-clamp-2 overflow-hidden">
                {{ app.description }}
              </p>
              <div class="mt-3 flex gap-3 items-center flex-wrap">
                <span 
                  v-for="tag in app.tags" 
                  :key="tag"
                  class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300"
                >
                  {{ tag }}
                </span>
              </div>
            </router-link>
          </div>
        </section>

        <!-- 企业合规分析专栏 -->
        <section id="compliance" class="mt-[56px] w-[1440px] mx-auto mb-[80px]">
          <div class="flex items-center justify-between mb-[32px]">
            <h2 class="text-[24px] font-bold text-white leading-[40px] w-[280px]">
              企业合规分析
            </h2>
            <router-link to="/pages/apps/detail/demo" class="w-[100px] h-[32px] flex items-center justify-center text-sm text-aurora-cyan hover:text-aurora-green hover:bg-aurora-cyan/10 rounded transition-colors">
              查看更多
              <Icon icon="fa-solid:arrow-right" :size="12" class="ml-1" />
            </router-link>
          </div>
          
          <!-- 应用卡片网格 -->
          <div class="grid grid-cols-3 gap-[24px] gap-y-[32px]">
            <router-link 
              v-for="app in complianceApps" 
              :key="app.id"
              :to="app.link" 
              class="w-[464px] h-[210px] rounded-xl glass-panel-base px-[24px] py-[24px] transition-all duration-300 hover:shadow-glow-sm hover:border-aurora-cyan/30 flex flex-col"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-[8px]">
                  <div class="w-[24px] h-[24px] rounded-md bg-accent-gradient flex items-center justify-center">
                    <Icon :icon="app.icon" :size="12" class="text-void-900" />
                  </div>
                  <h3 class="text-[16px] font-bold text-white truncate">
                    {{ app.name }}
                  </h3>
                </div>
                <div class="flex gap-[8px]">
                  <span :class="['badge px-2 py-0.5 text-xs', app.badgeClass]">
                    {{ app.price }}
                  </span>
                </div>
              </div>
              <p class="mt-[12px] text-[14px] text-slate-400 line-clamp-2 overflow-hidden">
                {{ app.description }}
              </p>
              <div class="mt-[12px] flex gap-[12px] items-center">
                <span 
                  v-for="tag in app.tags" 
                  :key="tag"
                  class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300"
                >
                  {{ tag }}
                </span>
              </div>
            </router-link>
          </div>
        </section>
      </div>
    </main>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/Icon/src/Icon.vue'
import PageLayout from '@/layout/data-engine/PageLayout.vue'
import Carousel from '@/components/Carousel/src/Carousel.vue'

const router = useRouter()

// 响应式数据
const activeCategory = ref('all')
const searchQuery = ref('')

// 分类数据
const categories = ref([
  { id: 'all', name: '全部应用' },
  { id: 'query', name: '查询类' },
  { id: 'analysis', name: '分析类' },
  { id: 'report', name: '报告类' }
])

// 热门推荐应用数据
const popularApps = ref([
  {
    id: 1,
    name: '市场竞争分析',
    icon: 'fa-solid:chart-pie',
    price: '20 点',
    badgeClass: '',
    description: '深入分析公招市场竞争对手中标业绩，多维度评估企业竞争力，挖掘市场机会',
    tags: ['市场分析', '竞争洞察', '业绩对标'],
    link: '/pages/apps/detail/market-analysis',
    category: 'analysis'
  },
  {
    id: 2,
    name: '潜客扫描 - 策略筛选',
    icon: 'fa-solid:search',
    price: '免费',
    badgeClass: 'bg-aurora-green/10 text-aurora-green',
    description: '根据产业、区域、资质等条件筛选潜在招商企业，助力精准获客与产业招商',
    tags: ['招商筛选', '精准招商', '企业拓客'],
    link: '/pages/apps/detail/potential-customer',
    category: 'query'
  },
  {
    id: 3,
    name: '企业风险审核',
    icon: 'fa-solid:shield-halved',
    price: '免费试用',
    badgeClass: '',
    description: '覆盖工商、司法、失信、行政处罚多维度企业风险审查，识别合作准入风险',
    tags: ['风险识别', '准入审核', '尽调工具'],
    link: '/pages/apps/detail/risk-audit',
    category: 'analysis'
  },
  {
    id: 4,
    name: '市场分析报告系列',
    icon: 'fa-solid:file-lines',
    price: 'VIP 免费',
    badgeClass: 'bg-purple-500/20 text-purple-400',
    description: '针对建筑行业 / 省份 / 城市 / 领域自动生成专业分析报告，输出趋势研判结论',
    tags: ['行业报告', '区域分析', '趋势研判'],
    link: '/pages/apps/detail/market-report',
    category: 'report'
  },
  {
    id: 5,
    name: '企业信用评价',
    icon: 'fa-solid:id-card-clip',
    price: 'T+0',
    badgeClass: 'bg-green-500/10 text-green-400',
    description: '查询企业工商注册核心信息，包含法人、注册资本、注册地址、成立日期等内容',
    tags: ['API 集市', '工商登记', '基础信息'],
    link: '/pages/apps/detail/credit-evaluation',
    category: 'query'
  },
  {
    id: 6,
    name: '供应商智能信用与风险管控 AI',
    icon: 'fa-solid:robot',
    price: '按次收费',
    badgeClass: '',
    description: '智能对供应商信用风险进行管理，提供实时风险预警与控制',
    tags: ['标书审查', '合规检查', '投标辅助'],
    link: '/pages/apps/detail/supplier-ai',
    category: 'analysis'
  }
])

// 市场竞争分析应用数据
const marketApps = ref([
  {
    id: 7,
    name: '市场竞争分析',
    icon: 'fa-solid:chart-pie',
    price: '20 点',
    badgeClass: '',
    description: '追踪竞品动态及区域行业数据，自动生成竞争力评估与市场机会分析',
    tags: ['市场分析', '竞争洞察', '业绩对标'],
    link: '/pages/apps/detail/market-analysis'
  },
  {
    id: 8,
    name: '市场分析报告系列',
    icon: 'fa-solid:file-lines',
    price: 'VIP 免费',
    badgeClass: 'bg-purple-500/20 text-purple-400',
    description: '针对建筑行业 / 省份 / 城市 / 领域自动生成专业分析报告，输出趋势研判',
    tags: ['行业报告', '区域分析', '趋势研判'],
    link: '/pages/apps/detail/market-report'
  },
  {
    id: 9,
    name: '土地出让分析',
    icon: 'fa-solid:map-location-dot',
    price: '限时免费',
    badgeClass: 'bg-aurora-green/10 text-aurora-green',
    description: '查询区域供地情况，支持多条件筛选分析，辅助投资准入决策',
    tags: ['土地数据', '供地分析', '投资准入'],
    link: '/pages/apps/detail/land-analysis'
  },
  {
    id: 10,
    name: '市场情报分析 Agent',
    icon: 'fa-solid:brain',
    price: '免费',
    badgeClass: 'bg-aurora-green/10 text-aurora-green',
    description: '自动挖掘市场机会、风险与趋势，输出区域布局与智能决策建议',
    tags: ['市场机会', '区域布局', '智能决策'],
    link: '/pages/apps/detail/market-intelligence'
  },
  {
    id: 11,
    name: '潜客扫描 - 策略筛选',
    icon: 'fa-solid:search',
    price: '免费',
    badgeClass: 'bg-aurora-green/10 text-aurora-green',
    description: '根据产业、区域、资质等条件筛选潜在招商企业，助力精准获客',
    tags: ['招商筛选', '精准招商', '企业拓客'],
    link: '/pages/apps/detail/potential-customer'
  },
  {
    id: 12,
    name: '潜客扫描 - 地图查企',
    icon: 'fa-solid:map',
    price: '免费',
    badgeClass: 'bg-aurora-green/10 text-aurora-green',
    description: '地图圈选区域查询企业名单，一键获取区域内企业核心信息',
    tags: ['地图查企', '区域圈选', '招商辅助'],
    link: '/pages/apps/detail/map-search'
  }
])

// 产业招商分析应用数据
const investmentApps = ref([
  {
    id: 13,
    name: '潜客扫描 - 策略筛选',
    icon: 'fa-solid:search',
    price: '免费',
    badgeClass: 'bg-aurora-green/10 text-aurora-green',
    description: '根据产业、区域、资质等条件筛选潜在招商企业，助力精准招商',
    tags: ['招商筛选', '精准招商', '企业筛选'],
    link: '/pages/apps/detail/potential-customer'
  },
  {
    id: 14,
    name: '潜客扫描 - 地图查企',
    icon: 'fa-solid:map',
    price: '免费',
    badgeClass: 'bg-aurora-green/10 text-aurora-green',
    description: '地图圈选目标区域，一键查询区域内企业名单与核心信息',
    tags: ['地图查企', '区域圈选', '招商辅助'],
    link: '/pages/apps/detail/map-search'
  },
  {
    id: 15,
    name: '区域信息分析',
    icon: 'fa-solid:chart-column',
    price: '订阅制',
    badgeClass: '',
    description: '图表分析区域企业布局与产业分布，输出产业发展趋势与招商建议',
    tags: ['产业布局', '企业画像', '区域研究'],
    link: '/pages/apps/detail/region-analysis'
  },
  {
    id: 16,
    name: '迁入迁出云图',
    icon: 'fa-solid:cloud',
    price: '订阅制',
    badgeClass: '',
    description: '统计指定区域企业迁入迁出数据，支持大屏展示，辅助招商方向研判',
    tags: ['企业迁移', '产业流动', '招商洞察'],
    link: '/pages/apps/detail/migration-cloud'
  },
  {
    id: 17,
    name: '宏观经济数据查询',
    icon: 'fa-solid:coins',
    price: '按次收费',
    badgeClass: '',
    description: '查询省市区 GDP、人口、地方负债、产业结构等宏观经济指标',
    tags: ['宏观经济', '城市数据', '投资门槛'],
    link: '/pages/apps/detail/macro-economic'
  },
  {
    id: 18,
    name: '数擎2.0',
    icon: 'fa-solid:sitemap',
    price: '订阅制',
    badgeClass: '',
    description: '从图谱、企业、项目、技术等多维度分析产业链，挖掘强链补链机会',
    tags: ['产业链图谱', '强链补链', '产业规划'],
    link: '/pages/apps/detail/shuqing-2'
  }
])

// 企业合规分析应用数据
const complianceApps = ref([
  {
    id: 19,
    name: '企业风险审核',
    icon: 'fa-solid:shield-halved',
    price: '免费试用',
    badgeClass: '',
    description: '覆盖工商、司法、失信、行政处罚多维度企业风险审查，识别准入风险',
    tags: ['风险识别', '准入审核', '尽调工具'],
    link: '/pages/apps/detail/risk-audit'
  },
  {
    id: 20,
    name: '企业综合信用评价',
    icon: 'fa-solid:star-half-stroke',
    price: '订阅制',
    badgeClass: '',
    description: '综合评价企业信用等级，输出信用报告，支持授信与招投标合作评估',
    tags: ['信用评分', '合作评级', '红名单'],
    link: '/pages/apps/detail/comprehensive-credit'
  },
  {
    id: 21,
    name: '供应商画像分析',
    icon: 'fa-solid:user-tag',
    price: '订阅制',
    badgeClass: '',
    description: '构建供应商能力标签画像，多维度评估履约能力，辅助分级管理',
    tags: ['供应商画像', '履约能力', '供应风险'],
    link: '/pages/apps/detail/supplier-profile'
  },
  {
    id: 22,
    name: 'AI 标书合规审查',
    icon: 'fa-solid:file-contract',
    price: '按次收费',
    badgeClass: '',
    description: '智能对标书进行合规性审查，识别不符项与废标风险，辅助标书优化',
    tags: ['标书审查', '合规检查', '投标辅助'],
    link: '/pages/apps/detail/bid-compliance'
  },
  {
    id: 23,
    name: '企业失信黑名单检查',
    icon: 'fa-solid:ban',
    price: '实时',
    badgeClass: 'bg-green-500/10 text-green-400',
    description: '检测目标企业是否在失信被执行人黑名单，自动触发风险预警',
    tags: ['失信检查', '风险预警', '合规审核'],
    link: '/pages/apps/detail/dishonesty-check'
  },
  {
    id: 24,
    name: '企业工商基本信息查询',
    icon: 'fa-solid:id-card-clip',
    price: 'T+0',
    badgeClass: 'bg-green-500/10 text-green-400',
    description: '查询企业工商注册基本信息，包含法人、注册资本、注册地址、成立日期等',
    tags: ['API 集市', '工商登记', '基础信息'],
    link: '/pages/apps/detail/business-info'
  }
])

// 计算属性：过滤后的热门应用
const filteredPopularApps = computed(() => {
  let filtered = popularApps.value

  // 按分类筛选
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(app => app.category === activeCategory.value)
  }

  // 按搜索关键词筛选
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(app => 
      app.name.toLowerCase().includes(query) || 
      app.description.toLowerCase().includes(query) ||
      app.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  return filtered
})

// 方法
const setActiveCategory = (categoryId: string) => {
  activeCategory.value = categoryId
}

const onCarouselChange = (index: number) => {
  console.log('Carousel changed to index:', index)
}

// 组件挂载时加载保存的客户类型
onMounted(() => {
  const savedClientType = localStorage.getItem('clientType') || 'investment'
  console.log('当前客户类型:', savedClientType)
})
</script>

<style lang="scss" scoped>
.text-gradient {
  color: transparent;
  background: linear-gradient(to right, #00d2ff, #00ffa3);
  background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-glass {
  @apply glass-panel-base rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-aurora-cyan/30 hover:shadow-glow-sm;
}

.btn-primary {
  @apply relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-void-900 transition-all duration-300;

  background: linear-gradient(90deg, #00d2ff 0%, #00ffa3 100%);
}

.btn-primary:hover {
  @apply shadow-glow-md transform -translate-y-0.5 scale-105;
}

.badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
}

.badge-vip {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-void-900;
}

.line-clamp-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
