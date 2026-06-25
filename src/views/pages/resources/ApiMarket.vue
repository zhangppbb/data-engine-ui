<template>
  <PageLayout>
    <!-- 主内容区 -->
    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- API集市页面 -->
      <div ref="api-market-page" class="space-y-6">
        <!-- 面包屑导航 -->
        <div class="py-3">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <router-link to="/pages/index" class="text-sm text-slate-400 hover:text-aurora-cyan transition-colors">
                  <Icon icon="fa-solid:house" :size="14" class="mr-1" />
                  首页
                </router-link>
              </li>
              <li>
                <div class="flex items-center">
                  <Icon icon="fa-solid:chevron-right" :size="12" class="text-slate-500 mx-1" />
                  <router-link to="/pages/resources/list" class="text-sm text-slate-400 hover:text-aurora-cyan transition-colors">
                    资源馆
                  </router-link>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <Icon icon="fa-solid:chevron-right" :size="12" class="text-slate-500 mx-2" />
                  <span class="text-sm font-medium text-aurora-cyan">
                    API集市
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <!-- 页面标题区域 -->
        <div class="space-y-3 py-4">
          <h1 class="text-3xl md:text-4xl font-bold text-white">
            <span class="text-gradient">API集市</span>
          </h1>
          <p class="text-lg text-slate-400 max-w-3xl">
            全品类企业结构化数据API接口中心，支撑业务系统快速开发与数据对接
          </p>
        </div>

        <!-- 搜索与排序区域 -->
        <div class="flex flex-col md:flex-row gap-4 items-center">
          <div class="w-full md:flex-1 relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Icon icon="fa-solid:search" :size="16" class="text-slate-500" />
            </div>
            <input 
              type="text" 
              ref="search-input" 
              class="input-glass pl-12" 
              placeholder="搜索API名称、接口标识、业务领域"
              v-model="searchQuery"
              @input="filterAndSearch"
            />
          </div>
          <div class="w-full md:w-auto">
            <select 
              ref="sort-select" 
              class="glass-panel-base rounded-xl px-4 py-3 text-white bg-void-900/50 border-white/10 focus:border-aurora-cyan/50 outline-none w-full md:w-auto min-w-[180px]"
              v-model="sortOption"
            >
              <option value="update">按更新时间排序</option>
              <option value="calls">按调用量排序</option>
              <option value="price">按价格排序</option>
              <option value="rating">按评分排序</option>
            </select>
          </div>
        </div>

        <!-- 主内容区域 -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
          <!-- 左侧筛选栏 -->
          <div class="lg:col-span-1">
            <div class="glass-panel-base rounded-xl p-5 sticky top-24">
              <h3 class="text-lg font-bold text-white mb-4">应用领域筛选</h3>
              <div class="space-y-2 mb-6" ref="domain-filters">
                <div 
                  v-for="filter in domainFilters" 
                  :key="filter.domain"
                  :class="['filter-checkbox', { active: filter.active }]" 
                  :data-domain="filter.domain"
                  @click="selectDomainFilter(filter.domain)"
                >
                  <Icon :icon="filter.active ? 'fa-solid:check-square' : 'fa-regular:square'" :size="14" class="text-aurora-green" />
                  <span>
                    {{ filter.label }}
                    <span :class="filter.active ? 'text-aurora-green' : 'text-slate-400'" class="ml-auto">{{ filter.count }}</span>
                  </span>
                </div>
              </div>
              <div class="border-t border-white/10 pt-4">
                <h4 class="text-md font-semibold text-white mb-3">工商接口筛选</h4>
                <div class="space-y-2" ref="category-filters">
                  <div 
                    v-for="filter in categoryFilters" 
                    :key="filter.category"
                    :class="['filter-checkbox', { active: filter.active }]" 
                    :data-category="filter.category"
                    @click="selectCategoryFilter(filter.category)"
                  >
                    <Icon :icon="filter.active ? 'fa-solid:check-square' : 'fa-regular:square'" :size="14" class="text-aurora-green" />
                    <span>
                      {{ filter.label }}
                      <span :class="filter.active ? 'text-aurora-green' : 'text-slate-400'" class="ml-auto">{{ filter.count }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- API卡片列表区 -->
          <div class="lg:col-span-3 space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-slate-400">
                共 <span ref="total-count" class="text-aurora-green font-semibold text-lg">{{ visibleCount }}</span> 个API
              </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4" ref="api-list">
              <!-- API卡片 -->
              <div 
                v-for="api in filteredApis" 
                :key="api.id"
                :class="['api-card', { hidden: !api.visible }]" 
                :data-category="api.category"
                @click="handleApiClick(api)"
              >
                <div class="flex items-start justify-between mb-2">
                  <h4 class="text-lg font-bold text-white">{{ api.name }}</h4>
                  <div class="flex gap-1">
                    <span v-if="api.isNew" class="badge-new">新增</span>
                    <span v-if="api.realtime" class="badge-realtime">{{ api.realtime }}</span>
                  </div>
                </div>
                <p class="text-xs font-mono text-slate-500 mb-3">{{ api.endpoint }}</p>
                <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                  {{ api.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in api.tags" 
                    :key="tag"
                    :class="[
                      'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium',
                      tag.type === 'primary' ? 'border border-aurora-green/30 bg-aurora-green/10 text-aurora-green' : 'border border-white/10 bg-white/5 text-slate-300'
                    ]"
                  >
                    {{ tag.name }}
                  </span>
                </div>
              </div>
            </div>

            <!-- 分页区域 -->
            <div class="flex justify-between items-center pt-8">
              <div class="text-sm text-slate-400">
                显示 <span class="text-white">1-8</span> 项，共 <span class="text-aurora-green font-semibold">{{ visibleCount }}</span> 个API
              </div>
              <div class="flex items-center gap-2">
                <button 
                  class="w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-50" 
                  disabled
                >
                  <Icon icon="fa-solid:chevron-left" :size="16" />
                </button>
                <button class="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center text-void-900 font-bold shadow-glow-sm">
                  1
                </button>
                <button class="w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-white hover:border-aurora-cyan/50">
                  2
                </button>
                <button class="w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-white hover:border-aurora-cyan/50">
                  3
                </button>
                <span class="text-slate-500">...</span>
                <button class="w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-white hover:border-aurora-cyan/50">
                  161
                </button>
                <button class="w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-slate-400 hover:text-white">
                  <Icon icon="fa-solid:chevron-right" :size="16" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/Icon/src/Icon.vue'
import PageLayout from '@/layout/data-engine/PageLayout.vue'

const router = useRouter()

// 响应式数据
const searchQuery = ref('')
const sortOption = ref('update')
const visibleCount = ref(1286)

// 应用领域筛选器
const domainFilters = ref([
  { domain: 'all', label: '全部领域', count: 1286, active: true },
  { domain: 'competition', label: '市场竞争分析', count: 215, active: false },
  { domain: 'investment', label: '产业招商分析', count: 189, active: false },
  { domain: 'city', label: '城市画像研究', count: 156, active: false },
  { domain: 'industry', label: '产业链研究', count: 203, active: false },
  { domain: 'bidding', label: '投标辅助工具', count: 178, active: false },
  { domain: 'compliance', label: '企业合规分析', count: 198, active: false },
  { domain: 'general', label: '通用办公工具', count: 147, active: false }
])

// 工商接口筛选器
const categoryFilters = ref([
  { category: 'all', label: '全部工商接口', count: 342, active: true },
  { category: '工商登记', label: '工商登记', count: 128, active: false },
  { category: '股东信息', label: '股东信息', count: 85, active: false },
  { category: '变更记录', label: '变更记录', count: 64, active: false },
  { category: '股权结构', label: '股权结构', count: 65, active: false }
])

// API数据
const apis = ref([
  {
    id: 1,
    name: '企业工商基本信息查询',
    endpoint: 'get_company_basic_info',
    description: '根据企业名称/统一社会信用代码查询企业工商注册基本信息，包含法人、注册资本、注册地址、成立日期等核心工商数据',
    category: '工商登记',
    isNew: true,
    realtime: 'T+0',
    tags: [
      { name: '工商登记', type: 'primary' },
      { name: '基础数据', type: 'secondary' }
    ],
    visible: true
  },
  {
    id: 2,
    name: '企业股东信息查询',
    endpoint: 'get_company_shareholders',
    description: '查询企业所有股东信息，包括持股比例、认缴出资额、实缴出资额、股东性质等数据，支持逐层穿透查询',
    category: '股东信息',
    isNew: false,
    realtime: '实时',
    tags: [
      { name: '股东信息', type: 'primary' },
      { name: '股权结构', type: 'secondary' }
    ],
    visible: true
  },
  {
    id: 3,
    name: '企业变更记录查询',
    endpoint: 'get_company_change_history',
    description: '查询企业历史工商变更记录，包括变更项目、变更前内容、变更后内容、变更日期等详细信息',
    category: '变更记录',
    isNew: false,
    realtime: 'T+0',
    tags: [
      { name: '变更记录', type: 'primary' },
      { name: '历史数据', type: 'secondary' }
    ],
    visible: true
  },
  {
    id: 4,
    name: '股权结构层级查询',
    endpoint: 'get_company_hierarchy',
    description: '逐层穿透查询企业最终控制人，输出完整股权结构图谱，识别实际控股关系与关联企业',
    category: '股权结构',
    isNew: true,
    realtime: '',
    tags: [
      { name: '股权结构', type: 'primary' },
      { name: '控制关系', type: 'secondary' }
    ],
    visible: true
  },
  {
    id: 5,
    name: '企业招投标项目查询',
    endpoint: 'get_company_bidding',
    description: '查询企业参与的公开招投标项目信息，包含中标项目、投标项目、项目金额、项目阶段等详细数据',
    category: '招投标',
    isNew: false,
    realtime: '实时更新',
    tags: [
      { name: '招投标', type: 'primary' },
      { name: '项目信息', type: 'secondary' }
    ],
    visible: true
  },
  {
    id: 6,
    name: '企业资质证书查询',
    endpoint: 'get_company_certificates',
    description: '查询企业拥有的各类资质证书信息，包含资质等级、发证机关、有效期、证书编号等详细内容',
    category: '资质证书',
    isNew: false,
    realtime: '实时',
    tags: [
      { name: '资质证书', type: 'primary' },
      { name: '资格认证', type: 'secondary' }
    ],
    visible: true
  },
  {
    id: 7,
    name: '行政许可信息查询',
    endpoint: 'get_company_licenses',
    description: '查询企业获得的各项行政许可信息，包含许可名称、许可文号、许可范围、有效期等内容',
    category: '行政许可',
    isNew: true,
    realtime: '',
    tags: [
      { name: '行政许可', type: 'primary' },
      { name: '许可信息', type: 'secondary' }
    ],
    visible: true
  },
  {
    id: 8,
    name: '经营异常名录查询',
    endpoint: 'get_company_abnormal',
    description: '查询企业是否列入经营异常名录，包含列入原因、列入日期、移出情况等详细信息',
    category: '经营异常',
    isNew: false,
    realtime: '实时',
    tags: [
      { name: '经营异常', type: 'primary' },
      { name: '风险信息', type: 'secondary' }
    ],
    visible: true
  }
])

// 计算属性 - 过滤后的API
const filteredApis = computed(() => {
  return apis.value.map(api => {
    const activeDomain = domainFilters.value.find(f => f.active)?.domain || 'all'
    const activeCategory = categoryFilters.value.find(f => f.active)?.category || 'all'
    const searchText = searchQuery.value.toLowerCase()
    
    const matchesDomain = activeDomain === 'all'
    const matchesCategory = activeCategory === 'all' || activeCategory === api.category
    const matchesSearch = searchText.length === 0 || 
                         api.name.toLowerCase().includes(searchText) || 
                         api.description.toLowerCase().includes(searchText)
    
    return {
      ...api,
      visible: matchesDomain && matchesCategory && matchesSearch
    }
  })
})

// 方法
const selectDomainFilter = (domain: string) => {
  // 重置所有筛选器状态
  domainFilters.value.forEach(filter => {
    filter.active = filter.domain === domain
  })
  filterAndSearch()
}

const selectCategoryFilter = (category: string) => {
  // 重置所有筛选器状态
  categoryFilters.value.forEach(filter => {
    filter.active = filter.category === category
  })
  filterAndSearch()
}

const filterAndSearch = () => {
  // 计算可见的API数量
  const visibleApis = filteredApis.value.filter(api => api.visible)
  visibleCount.value = visibleApis.length
}

const handleApiClick = (api: any) => {
  // 跳转到API详情页
  router.push('/pages/resources/api-detail')
}

// 生命周期
onMounted(() => {
  filterAndSearch()
})
</script>

<style lang="scss" scoped>
/* 页面特定样式 */
.pages-container {
  min-height: calc(100vh - 84px);
}

.text-gradient {
  color: transparent;
  background: linear-gradient(to right, #00d2ff, #00ffa3);
  background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.filter-checkbox {
  @apply flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 cursor-pointer transition-all hover:bg-white/10;
}

.filter-checkbox.active {
  color: #00ffa3;
  background-color: rgb(0 255 163 / 10%);
  border-color: rgb(0 255 163 / 50%);
}

.api-card {
  @apply glass-panel-base rounded-xl p-5 border border-aurora-green/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm cursor-pointer;
}

.badge-new {
  @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-cyan to-aurora-green text-void-900 animate-pulse;
}

.badge-realtime {
  @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-cyan to-aurora-green text-void-900;
}

.input-glass {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
}

.hidden {
  display: none !important;
}
</style>
