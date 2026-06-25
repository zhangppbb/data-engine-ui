<template>
  <PageLayout>
    <!-- 主内容 -->
    <main class='relative z-10 max-w-7xl mx-auto px-6 py-12'>
      <!-- [MODULE] 23b_面包屑导航 -->
      <div class='mb-8'>
        <nav class='flex' aria-label='Breadcrumb'>
          <ol class='inline-flex items-center space-x-1 md:space-x-3'>
            <li class='inline-flex items-center'>
              <router-link to='/pages/index' class='inline-flex items-center text-sm font-medium text-slate-400 hover:text-aurora-red'>
                <Icon icon='fa-solid:house' :size='14' class='mr-2' />
                首页
              </router-link>
            </li>
            <li>
              <div class='flex items-center'>
                <Icon icon='fa-solid:chevron-right' :size='12' class='text-slate-500 mx-2' />
                <router-link to='/pages/resources/list' class='text-sm text-slate-400 hover:text-aurora-red'>
                  资源馆
                </router-link>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                <Icon icon='fa-solid:chevron-right' :size='12' class='text-slate-500 mx-2' />
                <span class='text-sm font-medium text-aurora-red'>MCP集市</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <!-- [/MODULE] 23b_面包屑导航 -->
      
      <!-- [MODULE] 84c_页面标题区 -->
      <section class='space-y-4 mb-10'>
        <div>
          <h1 class='text-4xl md:text-5xl font-bold text-white leading-tight'>
            数擎 MCP · {{ totalTools }} 个原子工具
          </h1>
          <p class='text-xl text-slate-400 mt-3 max-w-3xl'>
            4大Server，覆盖中国企业全维度数据，统一searchKey接入，企业名称或统一社会信用代码一键调用
          </p>
        </div>
        <div class='flex flex-wrap gap-3 pt-2'>
          <div class='glass-panel-base px-4 py-2 rounded-full flex items-center gap-2'>
            <span class='text-xs text-slate-500'>数据版本:</span>
            <span class='text-sm font-semibold text-white'>2026-04-10</span>
          </div>
          <div class='glass-panel-base px-4 py-2 rounded-full flex items-center gap-2'>
            <span class='text-xs text-slate-500'>本次新增:</span>
            <span class='text-sm font-semibold text-aurora-red'>{{ newToolsCount }} 个工具</span>
          </div>
          <div class='glass-panel-base px-4 py-2 rounded-full flex items-center gap-2'>
            <span class='text-xs text-slate-500'>T+0:</span>
            <span class='text-sm font-semibold text-white'>实时数据</span>
          </div>
          <div class='glass-panel-base px-4 py-2 rounded-full flex items-center gap-2'>
            <Icon icon='fa-solid:key' :size='14' class='text-aurora-cyan' />
            <span class='text-sm font-semibold text-aurora-cyan'>API Key</span>
          </div>
        </div>
      </section>
      <!-- [/MODULE] 84c_页面标题区 -->
      
      <!-- [MODULE] 67f_搜索与排序区 -->
      <section class='mb-8'>
        <div class='flex flex-col gap-4'>
          <div class='relative'>
            <div class='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
              <Icon icon='fa-solid:search' :size='16' class='text-slate-500' />
            </div>
            <input 
              type='text' 
              class='input-glass-mcp pl-12 text-lg' 
              placeholder='搜索工具名称或功能描述...'
              v-model='searchQuery'
              @input='handleSearch'
            />
          </div>
          <div class='flex flex-wrap items-center gap-3'>
            <span class='text-sm text-slate-400 whitespace-nowrap'>全部 {{ totalTools }}</span>
            <button 
              v-for='filter in serverFilters' 
              :key='filter.id'
              :class='[
                "filter-tag-mcp",
                activeServerFilter === filter.id ? "active" : ""
              ]'
              @click='setServerFilter(filter.id)'
            >
              {{ filter.name }} {{ filter.count }}
            </button>
            <div class='ml-auto flex items-center gap-3'>
              <span class='text-sm text-slate-400 whitespace-nowrap'>2026-04-10 新增 {{ newToolsCount }} 个工具</span>
            </div>
          </div>
        </div>
      </section>
      <!-- [/MODULE] 67f_搜索与排序区 -->
      
      <!-- MCP服务展示区 -->
      <section class='mb-10'>
        <div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <!-- 企业基座Server -->
          <div class='glass-panel-base rounded-xl p-6 border-l-4 border-aurora-green hover:shadow-glow-sm transition-all duration-300'>
            <div class='flex items-start justify-between mb-4'>
              <div class='flex items-center gap-3'>
                <div class='w-12 h-12 rounded-lg bg-aurora-green/20 flex items-center justify-center'>
                  <Icon icon='fa-solid:building' :size='20' class='text-aurora-green' />
                </div>
                <div>
                  <h3 class='text-xl font-bold text-white'>企业基座Server</h3>
                  <p class='text-xs text-slate-500'>qcc-company</p>
                </div>
              </div>
              <span class='bg-aurora-green/20 text-aurora-green text-sm px-3 py-1 rounded-full'>14 个工具</span>
            </div>
            <p class='text-sm text-slate-400 mb-4'>
              提供工商维度的结构化数据，以事实记录为基准，从源头压制 AI 幻觉风险。
            </p>
            <div class='flex flex-wrap gap-2'>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>工商信息</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>股东信息</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>实际控制人</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>变更记录</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>企业年报</span>
            </div>
          </div>
          <!-- 风控大脑Server -->
          <div class='glass-panel-base rounded-xl p-6 border-l-4 border-aurora-red hover:shadow-glow-red-sm transition-all duration-300'>
            <div class='flex items-start justify-between mb-4'>
              <div class='flex items-center gap-3'>
                <div class='w-12 h-12 rounded-lg bg-aurora-red/20 flex items-center justify-center'>
                  <Icon icon='fa-solid:shield-halved' :size='20' class='text-aurora-red' />
                </div>
                <div>
                  <h3 class='text-xl font-bold text-white'>风控大脑Server</h3>
                  <p class='text-xs text-slate-500'>qcc-risk</p>
                </div>
              </div>
              <span class='bg-aurora-red/20 text-aurora-red text-sm px-3 py-1 rounded-full'>34 个工具</span>
            </div>
            <p class='text-sm text-slate-400 mb-4'>
              覆盖失信、被执行人、严重违法等核心红线，触发阻断，同步输出穿透关联分析，帮助 Agent 在风险点自动切换。
            </p>
            <div class='flex flex-wrap gap-2'>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>失信名单</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>被执行人</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>限消令</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>司法冻结</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>经营异常</span>
            </div>
          </div>
          <!-- 知产引擎Server -->
          <div class='glass-panel-base rounded-xl p-6 border-l-4 border-aurora-purple hover:shadow-lg transition-all duration-300'>
            <div class='flex items-start justify-between mb-4'>
              <div class='flex items-center gap-3'>
                <div class='w-12 h-12 rounded-lg bg-aurora-purple/20 flex items-center justify-center'>
                  <Icon icon='fa-solid:lightbulb' :size='20' class='text-aurora-purple' />
                </div>
                <div>
                  <h3 class='text-xl font-bold text-white'>知产引擎Server</h3>
                  <p class='text-xs text-slate-500'>qcc-ipr</p>
                </div>
              </div>
              <span class='bg-aurora-purple/20 text-aurora-purple text-sm px-3 py-1 rounded-full'>6 个工具</span>
            </div>
            <p class='text-sm text-slate-400 mb-4'>
              精译评估企业专利、软著与资质含量，为科技认证、招投标、资产评估提供数据支撑。
            </p>
            <div class='flex flex-wrap gap-2'>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>专利</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>商标</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>软件著作权</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>ICP备案</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>资质证书</span>
            </div>
          </div>
          <!-- 经营罗盘Server -->
          <div class='glass-panel-base rounded-xl p-6 border-l-4 border-aurora-cyan hover:shadow-glow-md transition-all duration-300'>
            <div class='flex items-start justify-between mb-4'>
              <div class='flex items-center gap-3'>
                <div class='w-12 h-12 rounded-lg bg-aurora-cyan/20 flex items-center justify-center'>
                  <Icon icon='fa-solid:chart-line' :size='20' class='text-aurora-cyan' />
                </div>
                <div>
                  <h3 class='text-xl font-bold text-white'>经营罗盘Server</h3>
                  <p class='text-xs text-slate-500'>qcc-operation</p>
                </div>
              </div>
              <span class='bg-aurora-cyan/20 text-aurora-cyan text-sm px-3 py-1 rounded-full'>13 个工具</span>
            </div>
            <p class='text-sm text-slate-400 mb-4'>
              通过招投标标、新闻舆情脱水处理，有助于优化 Token 消耗，快速了解企业经营动态。
            </p>
            <div class='flex flex-wrap gap-2'>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>招投标</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>资质证书</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>信用评级</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>新闻舆情</span>
              <span class='text-xs bg-white/10 px-2 py-1 rounded-full'>招聘信息</span>
            </div>
          </div>
        </div>
      </section>
      
      <!-- [MODULE] 92s_内容主体区 -->
      <div class='flex flex-col lg:flex-row gap-6'>
        <!-- [MODULE] 51e_左侧应用领域筛选栏 -->
        <aside class='w-full lg:w-64 flex-shrink-0'>
          <div class='glass-panel-base rounded-xl p-5 sticky top-24'>
            <h3 class='text-lg font-bold text-white mb-4 flex items-center gap-2'>
              <Icon icon='fa-solid:filter-list' :size='16' class='text-aurora-red' />
              应用领域筛选
            </h3>
            <div class='space-y-2'>
              <button 
                v-for='filter in categoryFilters' 
                :key='filter.id'
                :class='[
                  "filter-tag-mcp active w-full text-left justify-between flex",
                  activeCategoryFilter === filter.id ? "active" : ""
                ]'
                @click='setCategoryFilter(filter.id)'
              >
                <span>{{ filter.name }}</span>
                <span class='bg-white/10 px-2 rounded-full text-xs'>{{ filter.count }}</span>
              </button>
            </div>
          </div>
        </aside>
        <!-- [/MODULE] 51e_左侧应用领域筛选栏 -->
        
        <!-- [MODULE] 44d_右侧MCP工具卡片列表 -->
        <div class='flex-1'>
          <div class='flex items-center justify-between mb-4'>
            <h3 class='text-lg font-semibold text-white'>
              <span>{{ filteredTools.length }}</span>个MCP工具可调用
            </h3>
          </div>
          <div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <!-- MCP工具卡片 -->
            <div 
              v-for='tool in filteredTools' 
              :key='tool.id'
              class='card-mcp'
              @click='navigateToTool(tool.id)'
            >
              <div class='flex items-start justify-between mb-2'>
                <h4 class='text-lg font-bold text-white'>{{ tool.name }}</h4>
                <div class='flex flex-col gap-1 items-end'>
                  <button class='text-xs bg-aurora-cyan/20 text-aurora-cyan px-3 py-1 rounded-full' @click.stop='showExample(tool)'>示例输出</button>
                </div>
              </div>
              <p class='text-xs font-mono text-slate-500 mb-3'>{{ tool.code }}</p>
              <p class='text-sm text-slate-400 mb-4 line-clamp-2'>
                {{ tool.description }}
              </p>
              <div class='flex flex-wrap gap-2'>
                <span class='tag-badge bg-aurora-green/10 border-aurora-green/30 text-aurora-green text-[10px]'>{{ tool.category }}</span>
                <span class='badge-realtime text-[10px]' v-if='tool.realtime'>{{ tool.updateType }}</span>
              </div>
            </div>
          </div>
          
          <!-- [MODULE] 77p_底部分页 -->
          <div class='flex justify-center pt-8'>
            <div class='flex items-center gap-2'>
              <button 
                class='w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-50'
                :disabled='currentPage === 1'
                @click='prevPage'
              >
                <Icon icon='fa-solid:chevron-left' :size='14' />
              </button>
              <button 
                v-for='page in visiblePages' 
                :key='page'
                :class='[
                  "w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all",
                  page === currentPage 
                    ? "bg-mcp-gradient text-void-900 shadow-glow-red-sm" 
                    : "glass-panel-base text-white hover:border-aurora-red/50"
                ]'
                @click='goToPage(page)'
              >
                {{ page }}
              </button>
              <span class='text-slate-500' v-if='totalPages > 7'>...</span>
              <button 
                v-if='totalPages > 7'
                class='w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-white hover:border-aurora-red/50'
                @click='goToPage(totalPages)'
              >
                {{ totalPages }}
              </button>
              <button 
                class='w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-slate-400 hover:text-white'
                :disabled='currentPage === totalPages'
                @click='nextPage'
              >
                <Icon icon='fa-solid:chevron-right' :size='14' />
              </button>
            </div>
          </div>
          <!-- [/MODULE] 77p_底部分页 -->
        </div>
        <!-- [/MODULE] 44d_右侧MCP工具卡片列表 -->
      </div>
      <!-- [/MODULE] 92s_内容主体区 -->
    </main>
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
const activeServerFilter = ref('all')
const activeCategoryFilter = ref('all')
const currentPage = ref(1)
const pageSize = ref(9)

// 常量
const totalTools = ref(67)
const newToolsCount = ref(2)

// 筛选器数据
const serverFilters = ref([
  { id: 'all', name: '企业基座', count: 14 },
  { id: 'risk', name: '风控大脑', count: 34 },
  { id: 'ipr', name: '知产引擎', count: 6 },
  { id: 'operation', name: '经营罗盘', count: 13 }
])

const categoryFilters = ref([
  { id: 'all', name: '全部工具', count: 67 },
  { id: 'competition', name: '市场竞争分析', count: 14 },
  { id: 'investment', name: '产业招商分析', count: 34 },
  { id: 'city', name: '城市画像研究', count: 6 },
  { id: 'industry', name: '产业链研究', count: 13 }
])

// MCP工具数据
const allTools = ref([
  {
    id: 'actual-controller',
    name: '实际控制人',
    code: 'get_actual_controller',
    description: '查询企业的实际控制人详情，适用于企业风险评估、关联交易识别及商业竞争对手分析场景。',
    category: '企业基座',
    realtime: true,
    updateType: '实时',
    serverType: 'all',
    applicationArea: 'competition'
  },
  {
    id: 'beneficial-owners',
    name: '受益所有人',
    code: 'get_beneficial_owners',
    description: '查询企业的受益所有人（UBO）信息，适用于反洗钱合规（AML）、尽职调查及穿透式监管分析场景。',
    category: '企业基座',
    realtime: true,
    updateType: '实时',
    serverType: 'all',
    applicationArea: 'competition'
  },
  {
    id: 'company-registration',
    name: '企业工商信息',
    code: 'get_company_registration_info',
    description: '查询企业核心登记信息：法定代表人、注册资本、成立日期、登记状态、注册地址等，支持企业名称或统一社会信用代码精确查询。',
    category: '企业基座',
    realtime: true,
    updateType: '实时',
    serverType: 'all',
    applicationArea: 'competition'
  },
  {
    id: 'shareholder-info',
    name: '股东信息',
    code: 'get_shareholder_info',
    description: '查询企业股权构成，包括投资人姓名、持股比例、认缴出资额、出资时间等股权结构数据，适用于股权结构分析、实控人识别。',
    category: '企业基座',
    realtime: true,
    updateType: '实时',
    serverType: 'all',
    applicationArea: 'competition'
  },
  {
    id: 'key-personnel',
    name: '主要人员',
    code: 'get_key_personnel',
    description: '查询企业主要管理人员，包括姓名、职务等高管构成情况，适用于企业管理团队了解、核心人员识别、公司架构分析。',
    category: '企业基座',
    realtime: true,
    updateType: '实时',
    serverType: 'all',
    applicationArea: 'competition'
  },
  {
    id: 'change-records',
    name: '变更记录',
    code: 'get_change_records',
    description: '查询企业历史变更记录，包括变更事项、变更前后内容、变更日期，适用于股权变更跟踪、经营范围调整了解、重要事项变更历史查询。',
    category: '企业基座',
    realtime: true,
    updateType: '实时',
    serverType: 'all',
    applicationArea: 'competition'
  },
  {
    id: 'external-investments',
    name: '对外投资',
    code: 'get_external_investments',
    description: '查询企业对外投资信息，包括被投资企业名称、状态、成立日期、持股比例、认缴出资额，适用于分析企业投资布局。',
    category: '企业基座',
    realtime: true,
    updateType: '实时',
    serverType: 'all',
    applicationArea: 'competition'
  },
  {
    id: 'branches',
    name: '分支机构',
    code: 'get_branches',
    description: '查询企业的分支机构信息，包括名称、负责人、地区、成立日期、登记状态，适用于了解企业组织架构。',
    category: '企业基座',
    realtime: true,
    updateType: '实时',
    serverType: 'all',
    applicationArea: 'competition'
  },
  {
    id: 'company-annual-reports',
    name: '企业年报',
    code: 'get_company_annual_reports',
    description: '查询企业年度报告，包括股东年度、经营状态、从业人数、股东权益、投资总额等，数据每年公示同步（通常6月后）。',
    category: '企业基座',
    realtime: true,
    updateType: '年度更新',
    serverType: 'all',
    applicationArea: 'competition'
  }
])

// 计算属性
const filteredTools = computed(() => {
  let tools = allTools.value

  // 按服务器类型筛选
  if (activeServerFilter.value !== 'all') {
    tools = tools.filter(tool => tool.serverType === activeServerFilter.value)
  }

  // 按应用领域筛选
  if (activeCategoryFilter.value !== 'all') {
    tools = tools.filter(tool => tool.applicationArea === activeCategoryFilter.value)
  }

  // 搜索筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    tools = tools.filter(tool => 
      tool.name.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query)
    )
  }

  return tools
})

const totalPages = computed(() => Math.ceil(filteredTools.value.length / pageSize.value))

const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, start + 4)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// 方法
const setServerFilter = (filterId: string) => {
  activeServerFilter.value = filterId
  currentPage.value = 1
}

const setCategoryFilter = (filterId: string) => {
  activeCategoryFilter.value = filterId
  currentPage.value = 1
}

const handleSearch = () => {
  currentPage.value = 1
}

const navigateToTool = (toolId: string) => {
  router.push(`/pages/resources/mcp-detail/${toolId}`)
}

const showExample = (tool: any) => {
  // 显示示例输出
  console.log('显示示例输出:', tool.name)
}

const goToPage = (page: number) => {
  currentPage.value = page
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

// 组件挂载
onMounted(() => {
  // 初始化逻辑
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

.text-gradient-mcp {
  color: transparent;
  background: linear-gradient(to right, #ff4757, #ffa502);
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

.btn-primary-mcp {
  @apply relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-white transition-all duration-300;

  background: linear-gradient(90deg, #ff4757 0%, #ffa502 100%);
}

.btn-primary-mcp:hover {
  @apply shadow-glow-red-md transform -translate-y-0.5 scale-105;
}

.btn-secondary {
  @apply inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-white transition-all duration-300 border border-white/20 hover:border-aurora-cyan/50 hover:bg-white/5;
}

.btn-link {
  @apply inline-flex items-center text-aurora-cyan hover:text-aurora-green transition-colors font-medium text-sm;
}

.badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
}

.badge-mcp {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-aurora-red/10 border border-aurora-red/30 text-aurora-red;
}

.badge-risk {
  @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-red to-aurora-orange text-white;
}

.badge-realtime {
  @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-purple to-aurora-cyan text-white;
}

.badge-agent {
  @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-red to-aurora-orange text-white;
}

.input-glass {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
}

.input-glass-mcp {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-red/50 focus:ring-1 focus:ring-aurora-red/50 transition-all;
}

.aurora-blur {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(80px);
}

.glass-panel-base {
  background: rgb(11 16 33 / 95%);
  border: 1px solid rgb(255 255 255 / 8%);
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
  backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}

.bg-stars {
  background-color: #02040a;
  background-image: 
    radial-gradient(white, rgb(255 255 255 / 20%) 2px, transparent 3px),
    radial-gradient(white, rgb(255 255 255 / 15%) 1px, transparent 2px),
    radial-gradient(white, rgb(255 255 255 / 10%) 2px, transparent 3px);
  background-position: 0 0, 40px 60px, 130px 270px;
  background-size: 550px 550px, 350px 350px, 250px 250px;
}

.bg-grid-white {
  background-image: linear-gradient(to right, rgb(255 255 255 / 5%) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(255 255 255 / 5%) 1px, transparent 1px);
  background-size: 40px 40px;
}

.card-mcp {
  @apply glass-panel-base rounded-xl p-5 transition-all duration-300 hover:bg-white/5 hover:border-aurora-red/30 hover:shadow-glow-red-sm cursor-pointer;
}

.filter-tag-mcp {
  @apply px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border border-aurora-red/10 bg-white/5 text-slate-300;
}

.filter-tag-mcp.active {
  @apply bg-mcp-gradient text-void-900 border-transparent shadow-glow-red-sm;
}

.tag-badge {
  @apply inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border;
}

.line-clamp-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
