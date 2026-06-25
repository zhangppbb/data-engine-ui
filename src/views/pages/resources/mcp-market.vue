<template>
  <PageLayout>
    <!-- 主内容 -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
      <!-- 面包屑导航 -->
      <div class="mb-8">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <router-link to="/pages/index" class="inline-flex items-center text-sm font-medium text-slate-400 hover:text-aurora-red">
                <Icon icon="fa-solid:house" :size="14" class="mr-2" />
                首页
              </router-link>
            </li>
            <li>
              <div class="flex items-center">
                <Icon icon="fa-solid:chevron-right" :size="12" class="text-slate-500 mx-2" />
                <router-link to="/pages/resources/list" class="text-sm text-slate-400 hover:text-aurora-red">
                  资源馆
                </router-link>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <Icon icon="fa-solid:chevron-right" :size="12" class="text-slate-500 mx-2" />
                <span class="text-sm font-medium text-aurora-red">MCP集市</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- 页面标题区 -->
      <section class="space-y-4 mb-10">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
            数擎 MCP · 67 个原子工具
          </h1>
          <p class="text-xl text-slate-400 mt-3 max-w-3xl">
            4大Server，覆盖中国企业全维度数据，统一searchKey接入，企业名称或统一社会信用代码一键调用
          </p>
        </div>
        <div class="flex flex-wrap gap-3 pt-2">
          <div class="glass-panel-base px-4 py-2 rounded-full flex items-center gap-2">
            <span class="text-xs text-slate-500">数据版本:</span>
            <span class="text-sm font-semibold text-white">2026-04-10</span>
          </div>
          <div class="glass-panel-base px-4 py-2 rounded-full flex items-center gap-2">
            <span class="text-xs text-slate-500">本次新增:</span>
            <span class="text-sm font-semibold text-aurora-red">2 个工具</span>
          </div>
          <div class="glass-panel-base px-4 py-2 rounded-full flex items-center gap-2">
            <span class="text-xs text-slate-500">T+0:</span>
            <span class="text-sm font-semibold text-white">实时数据</span>
          </div>
          <div class="glass-panel-base px-4 py-2 rounded-full flex items-center gap-2">
            <Icon icon="fa-solid:key" :size="14" class="text-aurora-cyan" />
            <span class="text-sm font-semibold text-aurora-cyan">API Key</span>
          </div>
        </div>
      </section>

      <!-- 搜索与排序区 -->
      <section class="mb-8">
        <div class="flex flex-col gap-4">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Icon icon="fa-solid:search" :size="16" class="text-slate-500" />
            </div>
            <input 
              type="text" 
              v-model="searchQuery"
              class="input-glass-mcp pl-12 text-lg" 
              placeholder="搜索工具名称或功能描述..."
              @keypress.enter="handleSearch"
            />
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-sm text-slate-400 whitespace-nowrap">全部 67</span>
            <button 
              v-for="tag in filterTags"
              :key="tag.key"
              :class="[
                'filter-tag-mcp',
                activeFilter === tag.key ? 'active' : ''
              ]"
              @click="setActiveFilter(tag.key)"
            >
              {{ tag.label }} {{ tag.count }}
            </button>
            <div class="ml-auto flex items-center gap-3">
              <span class="text-sm text-slate-400 whitespace-nowrap">2026-04-10 新增 2 个工具</span>
            </div>
          </div>
        </div>
      </section>

      <!-- MCP服务展示区 -->
      <section class="mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 企业基座Server -->
          <div class="glass-panel-base rounded-xl p-6 border-l-4 border-aurora-green hover:shadow-glow-sm transition-all duration-300">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-aurora-green/20 flex items-center justify-center">
                  <Icon icon="fa-solid:building" :size="20" class="text-aurora-green" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">企业基座Server</h3>
                  <p class="text-xs text-slate-500">qcc-company</p>
                </div>
              </div>
              <span class="bg-aurora-green/20 text-aurora-green text-sm px-3 py-1 rounded-full">14 个工具</span>
            </div>
            <p class="text-sm text-slate-400 mb-4">
              提供工商维度的结构化数据，以事实记录为基准，从源头压制 AI 幻觉风险。
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">工商信息</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">股东信息</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">实际控制人</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">变更记录</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">企业年报</span>
            </div>
          </div>

          <!-- 风控大脑Server -->
          <div class="glass-panel-base rounded-xl p-6 border-l-4 border-aurora-red hover:shadow-glow-red-sm transition-all duration-300">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-aurora-red/20 flex items-center justify-center">
                  <Icon icon="fa-solid:shield-halved" :size="20" class="text-aurora-red" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">风控大脑Server</h3>
                  <p class="text-xs text-slate-500">qcc-risk</p>
                </div>
              </div>
              <span class="bg-aurora-red/20 text-aurora-red text-sm px-3 py-1 rounded-full">34 个工具</span>
            </div>
            <p class="text-sm text-slate-400 mb-4">
              覆盖失信、被执行人、严重违法等核心红线，触发阻断，同步输出穿透关联分析，帮助 Agent 在风险点自动切换。
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">失信名单</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">被执行人</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">限消令</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">司法冻结</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">经营异常</span>
            </div>
          </div>

          <!-- 知产引擎Server -->
          <div class="glass-panel-base rounded-xl p-6 border-l-4 border-aurora-purple hover:shadow-lg transition-all duration-300">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-aurora-purple/20 flex items-center justify-center">
                  <Icon icon="fa-solid:lightbulb" :size="20" class="text-aurora-purple" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">知产引擎Server</h3>
                  <p class="text-xs text-slate-500">qcc-ipr</p>
                </div>
              </div>
              <span class="bg-aurora-purple/20 text-aurora-purple text-sm px-3 py-1 rounded-full">6 个工具</span>
            </div>
            <p class="text-sm text-slate-400 mb-4">
              精译评估企业专利、软著与资质含量，为科技认证、招投标、资产评估提供数据支撑。
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">专利</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">商标</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">软件著作权</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">ICP备案</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">资质证书</span>
            </div>
          </div>

          <!-- 经营罗盘Server -->
          <div class="glass-panel-base rounded-xl p-6 border-l-4 border-aurora-cyan hover:shadow-glow-md transition-all duration-300">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-aurora-cyan/20 flex items-center justify-center">
                  <Icon icon="fa-solid:chart-line" :size="20" class="text-aurora-cyan" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">经营罗盘Server</h3>
                  <p class="text-xs text-slate-500">qcc-operation</p>
                </div>
              </div>
              <span class="bg-aurora-cyan/20 text-aurora-cyan text-sm px-3 py-1 rounded-full">13 个工具</span>
            </div>
            <p class="text-sm text-slate-400 mb-4">
              通过招投标标、新闻舆情脱水处理，有助于优化 Token 消耗，快速了解企业经营动态。
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">招投标</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">资质证书</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">信用评级</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">新闻舆情</span>
              <span class="text-xs bg-white/10 px-2 py-1 rounded-full">招聘信息</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 内容主体区 -->
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- 左侧应用领域筛选栏 -->
        <aside class="w-full lg:w-64 flex-shrink-0">
          <div class="glass-panel-base rounded-xl p-5 sticky top-24">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Icon icon="fa-solid:filter-list" :size="16" class="text-aurora-red" />
              应用领域筛选
            </h3>
            <div class="space-y-2">
              <button 
                v-for="category in categories"
                :key="category.key"
                :class="[
                  'filter-tag-mcp w-full text-left justify-between flex',
                  activeCategory === category.key ? 'active' : ''
                ]"
                @click="setActiveCategory(category.key)"
              >
                <span>{{ category.label }}</span>
                <span class="bg-white/10 px-2 rounded-full text-xs">{{ category.count }}</span>
              </button>
            </div>
          </div>
        </aside>

        <!-- 右侧MCP工具卡片列表 -->
        <div class="flex-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-white">
              <span>{{ filteredTools.length }}</span>个MCP工具可调用
            </h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div 
              v-for="tool in filteredTools"
              :key="tool.id"
              class="card-mcp"
              :class="{ 'hidden': activeCategory && activeCategory !== 'all' && tool.category !== activeCategory }"
            >
              <div class="flex items-start justify-between mb-2">
                <h4 class="text-lg font-bold text-white">{{ tool.name }}</h4>
                <div class="flex flex-col gap-1 items-end">
                  <button class="text-xs bg-aurora-cyan/20 text-aurora-cyan px-3 py-1 rounded-full">示例输出</button>
                </div>
              </div>
              <p class="text-xs font-mono text-slate-500 mb-3">{{ tool.api }}</p>
              <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                {{ tool.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in tool.tags"
                  :key="tag"
                  class="tag-badge"
                  :class="getTagClass(tag)"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@/components/Icon'
import PageLayout from '@/layout/data-engine/PageLayout.vue'

const router = useRouter()

// 响应式数据
const searchQuery = ref('')
const activeFilter = ref('all')
const activeCategory = ref('all')

// 筛选标签
const filterTags = [
  { key: 'all', label: '全部', count: 67 },
  { key: 'enterprise', label: '企业基座', count: 14 },
  { key: 'risk', label: '风控大脑', count: 34 },
  { key: 'ipr', label: '知产引擎', count: 6 },
  { key: 'operation', label: '经营罗盘', count: 13 }
]

// 分类筛选
const categories = [
  { key: 'all', label: '全部工具', count: 67 },
  { key: 'competition', label: '市场竞争分析', count: 14 },
  { key: 'investment', label: '产业招商分析', count: 34 },
  { key: 'city', label: '城市画像研究', count: 6 },
  { key: 'industry', label: '产业链研究', count: 13 }
]

// MCP工具数据
const mcpTools = ref([
  {
    id: 1,
    name: '实际控制人',
    api: 'get_actual_controller',
    description: '查询企业的实际控制人详情，适用于企业风险评估、关联交易识别及商业竞争对手分析场景。',
    category: 'competition',
    tags: ['企业基座', '实时']
  },
  {
    id: 2,
    name: '受益所有人',
    api: 'get_beneficial_owners',
    description: '查询企业的受益所有人（UBO）信息，适用于反洗钱合规（AML）、尽职调查及穿透式监管分析场景。',
    category: 'competition',
    tags: ['企业基座', '实时']
  },
  {
    id: 3,
    name: '企业工商信息',
    api: 'get_company_registration_info',
    description: '查询企业核心登记信息：法定代表人、注册资本、成立日期、登记状态、注册地址等，支持企业名称或统一社会信用代码精确查询。',
    category: 'competition',
    tags: ['企业基座', '实时']
  },
  {
    id: 4,
    name: '股东信息',
    api: 'get_shareholder_info',
    description: '查询企业股权构成，包括投资人姓名、持股比例、认缴出资额、出资时间等股权结构数据，适用于股权结构分析、实控人识别。',
    category: 'competition',
    tags: ['企业基座', '实时']
  }
])

// 计算属性
const filteredTools = computed(() => {
  let filtered = mcpTools.value

  // 按分类筛选
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(tool => tool.category === activeCategory.value)
  }

  // 按标签筛选
  if (activeFilter.value !== 'all') {
    filtered = filtered.filter(tool => {
      if (activeFilter.value === 'enterprise') {
        return tool.tags.includes('企业基座')
      } else if (activeFilter.value === 'risk') {
        return tool.tags.includes('风控大脑')
      } else if (activeFilter.value === 'ipr') {
        return tool.tags.includes('知产引擎')
      } else if (activeFilter.value === 'operation') {
        return tool.tags.includes('经营罗盘')
      }
      return true
    })
  }

  // 按搜索关键词筛选
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(tool => 
      tool.name.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query) ||
      tool.api.toLowerCase().includes(query)
    )
  }

  return filtered
})

// 方法
const setActiveFilter = (filter: string) => {
  activeFilter.value = filter
}

const setActiveCategory = (category: string) => {
  activeCategory.value = category
}

const handleSearch = () => {
  console.log('搜索:', searchQuery.value)
}

const getTagClass = (tag: string) => {
  switch (tag) {
    case '企业基座':
      return 'bg-aurora-green/10 border-aurora-green/30 text-aurora-green'
    case '实时':
      return 'bg-gradient-to-r from-aurora-purple to-aurora-cyan text-white'
    case '风控大脑':
      return 'bg-gradient-to-r from-aurora-red to-aurora-orange text-white'
    default:
      return 'bg-white/10 px-2 py-1 rounded-full'
  }
}

// 生命周期
onMounted(() => {
  console.log('MCP Market page loaded')
})
</script>

<style scoped>
.glass-panel-base {
  background: rgb(11 16 33 / 95%);
  backdrop-filter: blur(12px);
  border: 1px solid rgb(255 255 255 / 8%);
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
}

.input-glass-mcp {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-red/50 focus:ring-1 focus:ring-aurora-red/50 transition-all;
}

.filter-tag-mcp {
  @apply px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border border-aurora-red/10 bg-white/5 text-slate-300;
}

.filter-tag-mcp.active {
  @apply bg-gradient-to-r from-aurora-red to-aurora-orange text-void-900 border-transparent shadow-glow-red-sm;
}

.card-mcp {
  @apply glass-panel-base rounded-xl p-5 transition-all duration-300 hover:bg-white/5 hover:border-aurora-red/30 hover:shadow-glow-red-sm cursor-pointer;
}

.tag-badge {
  @apply text-xs;
}

.btn-primary-mcp {
  @apply relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-white transition-all duration-300;

  background: linear-gradient(90deg, #ff4757 0%, #ffa502 100%);
}

.btn-primary-mcp:hover {
  @apply shadow-glow-red-md transform -translate-y-0.5 scale-105;
}

.shadow-glow-red-sm {
  box-shadow: 0 0 10px rgb(255 71 87 / 30%);
}

.shadow-glow-red-md {
  box-shadow: 0 0 20px rgb(255 71 87 / 40%);
}

.shadow-glow-md {
  box-shadow: 0 0 20px rgb(0 210 255 / 30%);
}

.shadow-lg {
  box-shadow: 0 8px 32px 0 rgb(0 0 0 / 36%);
}

.line-clamp-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
