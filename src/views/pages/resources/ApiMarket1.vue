<template>
  <PageLayout>
    <!-- 主内容区 -->
    <div class="max-w-7xl mx-auto px-6 py-8">
              
              <div ref="api-market-page" class="space-y-6">
                  
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
      
                  
                  <div class="space-y-3 py-4">
                      <h1 class="text-3xl md:text-4xl font-bold text-white">
                          <span class="text-gradient">API集市</span>
                      </h1>
                      <p class="text-lg text-slate-400 max-w-3xl">
                          全品类企业结构化数据API接口中心，支撑业务系统快速开发与数据对接
                      </p>
                  </div>
      
                  
                  <div class="flex flex-col md:flex-row gap-4 items-center">
                      <div class="w-full md:flex-1 relative">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                              <Icon icon="fa-solid:search" :size="16" class="text-slate-500" />
                          </div>
                          <input type="text" ref="search-input" class="input-glass pl-12" placeholder="搜索API名称、接口标识、业务领域" />
                      </div>
                      <div class="w-full md:w-auto">
                          <select ref="sort-select" class="glass-panel-base rounded-xl px-4 py-3 text-white bg-void-900/50 border-white/10 focus:border-aurora-cyan/50 outline-none w-full md:w-auto min-w-[180px]">
                              <option value="update">按更新时间排序</option>
                              <option value="calls">按调用量排序</option>
                              <option value="price">按价格排序</option>
                              <option value="rating">按评分排序</option>
                          </select>
                      </div>
                  </div>
      
                  
                  <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
                      
                      <div class="lg:col-span-1">
                          <div class="glass-panel-base rounded-xl p-5 sticky top-24">
                              <h3 class="text-lg font-bold text-white mb-4">应用领域筛选</h3>
                              <div class="space-y-2 mb-6" ref="domain-filters">
                                  <div class="filter-checkbox active" data-domain="all">
                                      <i class="fa-solid fa-check-square text-aurora-green"></i>
                                      <span>
                                          全部领域
                                          <span class="text-aurora-green ml-auto">1,286</span>
                                      </span>
                                  </div>
                                  <div class="filter-checkbox" data-domain="competition">
                                      <i class="fa-regular fa-square"></i>
                                      <span>
                                          市场竞争分析
                                          <span class="text-slate-400 ml-auto">215</span>
                                      </span>
                                  </div>
                                  <div class="filter-checkbox" data-domain="investment">
                                      <i class="fa-regular fa-square"></i>
                                      <span>
                                          产业招商分析
                                          <span class="text-slate-400 ml-auto">189</span>
                                      </span>
                                  </div>
                                  <div class="filter-checkbox" data-domain="city">
                                      <i class="fa-regular fa-square"></i>
                                      <span>
                                          城市画像研究
                                          <span class="text-slate-400 ml-auto">156</span>
                                      </span>
                                  </div>
                                  <div class="filter-checkbox" data-domain="industry">
                                      <i class="fa-regular fa-square"></i>
                                      <span>
                                          产业链研究
                                          <span class="text-slate-400 ml-auto">203</span>
                                      </span>
                                  </div>
                                  <div class="filter-checkbox" data-domain="bidding">
                                      <i class="fa-regular fa-square"></i>
                                      <span>
                                          投标辅助工具
                                          <span class="text-slate-400 ml-auto">178</span>
                                      </span>
                                  </div>
                                  <div class="filter-checkbox" data-domain="compliance">
                                      <i class="fa-regular fa-square"></i>
                                      <span>
                                          企业合规分析
                                          <span class="text-slate-400 ml-auto">198</span>
                                      </span>
                                  </div>
                                  <div class="filter-checkbox" data-domain="general">
                                      <i class="fa-regular fa-square"></i>
                                      <span>
                                          通用办公工具
                                          <span class="text-slate-400 ml-auto">147</span>
                                      </span>
                                  </div>
                              </div>
                              <div class="border-t border-white/10 pt-4">
                                  <h4 class="text-md font-semibold text-white mb-3">工商接口筛选</h4>
                                  <div class="space-y-2" ref="category-filters">
                                      <div class="filter-checkbox active" data-category="all">
                                          <i class="fa-solid fa-check-square text-aurora-green"></i>
                                          <span>
                                              全部工商接口
                                              <span class="text-aurora-green ml-auto">342</span>
                                          </span>
                                      </div>
                                      <div class="filter-checkbox" data-category="工商登记">
                                          <i class="fa-regular fa-square"></i>
                                          <span>
                                              工商登记
                                              <span class="text-slate-400 ml-auto">128</span>
                                          </span>
                                      </div>
                                      <div class="filter-checkbox" data-category="股东信息">
                                          <i class="fa-regular fa-square"></i>
                                          <span>
                                              股东信息
                                              <span class="text-slate-400 ml-auto">85</span>
                                          </span>
                                      </div>
                                      <div class="filter-checkbox" data-category="变更记录">
                                          <i class="fa-regular fa-square"></i>
                                          <span>
                                              变更记录
                                              <span class="text-slate-400 ml-auto">64</span>
                                          </span>
                                      </div>
                                      <div class="filter-checkbox" data-category="股权结构">
                                          <i class="fa-regular fa-square"></i>
                                          <span>
                                              股权结构
                                              <span class="text-slate-400 ml-auto">65</span>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
      
                      
                      <div class="lg:col-span-3 space-y-6">
                          <div class="flex justify-between items-center">
                              <span class="text-slate-400">
                                  共<span ref="total-count" class="text-aurora-green font-semibold text-lg">1,286</span> 个API
                              </span>
                          </div>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4" ref="api-list">
                              
                              <div class="api-card" data-category="工商登记">
                                  <div class="flex items-start justify-between mb-2">
                                      <h4 class="text-lg font-bold text-white">企业工商基本信息查询</h4>
                                      <div class="flex gap-1">
                                          <span class="badge-new">新增</span>
                                          <span class="badge-realtime">T+0</span>
                                      </div>
                                  </div>
                                  <p class="text-xs font-mono text-slate-500 mb-3">get_company_basic_info</p>
                                  <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                                      根据企业名称/统一社会信用代码查询企业工商注册基本信息，包含法人、注册资本、注册地址、成立日期等核心工商数据
                                  </p>
                                  <div class="flex flex-wrap gap-2">
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-aurora-green/30 bg-aurora-green/10 text-aurora-green">
                                          工商登记
                                      </span>
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-white/10 bg-white/5 text-slate-300">
                                          基础数据
                                      </span>
                                  </div>
                              </div>
      
                              
                              <div class="api-card" data-category="股东信息">
                                  <div class="flex items-start justify-between mb-2">
                                      <h4 class="text-lg font-bold text-white">企业股东信息查询</h4>
                                      <span class="badge-realtime">实时</span>
                                  </div>
                                  <p class="text-xs font-mono text-slate-500 mb-3">get_company_shareholders</p>
                                  <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                                      查询企业所有股东信息，包括持股比例、认缴出资额、实缴出资额、股东性质等数据，支持逐层穿透查询
                                  </p>
                                  <div class="flex flex-wrap gap-2">
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-aurora-green/30 bg-aurora-green/10 text-aurora-green">
                                          股东信息
                                      </span>
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-white/10 bg-white/5 text-slate-300">
                                          股权结构
                                      </span>
                                  </div>
                              </div>
      
                              
                              <div class="api-card" data-category="变更记录">
                                  <div class="flex items-start justify-between mb-2">
                                      <h4 class="text-lg font-bold text-white">企业变更记录查询</h4>
                                      <span class="badge-realtime">T+0</span>
                                  </div>
                                  <p class="text-xs font-mono text-slate-500 mb-3">get_company_change_history</p>
                                  <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                                      查询企业历史工商变更记录，包括变更项目、变更前内容、变更后内容、变更日期等详细信息
                                  </p>
                                  <div class="flex flex-wrap gap-2">
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-aurora-green/30 bg-aurora-green/10 text-aurora-green">
                                          变更记录
                                      </span>
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-white/10 bg-white/5 text-slate-300">
                                          历史数据
                                      </span>
                                  </div>
                              </div>
      
                              
                              <div class="api-card" data-category="股权结构">
                                  <div class="flex items-start justify-between mb-2">
                                      <h4 class="text-lg font-bold text-white">股权结构层级查询</h4>
                                      <span class="badge-new">新增</span>
                                  </div>
                                  <p class="text-xs font-mono text-slate-500 mb-3">get_company_hierarchy</p>
                                  <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                                      逐层穿透查询企业最终控制人，输出完整股权结构图谱，识别实际控股关系与关联企业
                                  </p>
                                  <div class="flex flex-wrap gap-2">
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-aurora-green/30 bg-aurora-green/10 text-aurora-green">
                                          股权结构
                                      </span>
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-white/10 bg-white/5 text-slate-300">
                                          控制关系
                                      </span>
                                  </div>
                              </div>
      
                              
                              <div class="api-card" data-category="招投标">
                                  <div class="flex items-start justify-between mb-2">
                                      <h4 class="text-lg font-bold text-white">企业招投标项目查询</h4>
                                      <span class="badge-realtime">实时更新</span>
                                  </div>
                                  <p class="text-xs font-mono text-slate-500 mb-3">get_company_bidding</p>
                                  <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                                      查询企业参与的公开招投标项目信息，包含中标项目、投标项目、项目金额、项目阶段等详细数据
                                  </p>
                                  <div class="flex flex-wrap gap-2">
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-aurora-green/30 bg-aurora-green/10 text-aurora-green">
                                          招投标
                                      </span>
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-white/10 bg-white/5 text-slate-300">
                                          项目信息
                                      </span>
                                  </div>
                              </div>
      
                              
                              <div class="api-card" data-category="资质证书">
                                  <div class="flex items-start justify-between mb-2">
                                      <h4 class="text-lg font-bold text-white">企业资质证书查询</h4>
                                      <span class="badge-realtime">实时</span>
                                  </div>
                                  <p class="text-xs font-mono text-slate-500 mb-3">get_company_certificates</p>
                                  <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                                      查询企业拥有的各类资质证书信息，包含资质等级、发证机关、有效期、证书编号等详细内容
                                  </p>
                                  <div class="flex flex-wrap gap-2">
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-aurora-green/30 bg-aurora-green/10 text-aurora-green">
                                          资质证书
                                      </span>
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-white/10 bg-white/5 text-slate-300">
                                          资格认证
                                      </span>
                                  </div>
                              </div>
      
                              
                              <div class="api-card" data-category="行政许可">
                                  <div class="flex items-start justify-between mb-2">
                                      <h4 class="text-lg font-bold text-white">行政许可信息查询</h4>
                                      <span class="badge-new">新增</span>
                                  </div>
                                  <p class="text-xs font-mono text-slate-500 mb-3">get_company_licenses</p>
                                  <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                                      查询企业获得的各项行政许可信息，包含许可名称、许可文号、许可范围、有效期等内容
                                  </p>
                                  <div class="flex flex-wrap gap-2">
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-aurora-green/30 bg-aurora-green/10 text-aurora-green">
                                          行政许可
                                      </span>
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-white/10 bg-white/5 text-slate-300">
                                          许可信息
                                      </span>
                                  </div>
                              </div>
      
                              
                              <div class="api-card" data-category="经营异常">
                                  <div class="flex items-start justify-between mb-2">
                                      <h4 class="text-lg font-bold text-white">经营异常名录查询</h4>
                                      <span class="badge-realtime">实时</span>
                                  </div>
                                  <p class="text-xs font-mono text-slate-500 mb-3">get_company_abnormal</p>
                                  <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                                      查询企业是否列入经营异常名录，包含列入原因、列入日期、移出情况等详细信息
                                  </p>
                                  <div class="flex flex-wrap gap-2">
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-aurora-green/30 bg-aurora-green/10 text-aurora-green">
                                          经营异常
                                      </span>
                                      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-white/10 bg-white/5 text-slate-300">
                                          风险信息
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
                          
                          <div class="flex justify-between items-center pt-8">
                              <div class="text-sm text-slate-400">
                                  显示 <span class="text-white">1-8</span> 项，共<span class="text-aurora-green font-semibold">1,286</span> 个API
                              </div>
                              <div class="flex items-center gap-2">
                                  <button class="w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-50" disabled>
                                      <i class="fa-solid fa-chevron-left"></i>
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
                                      <i class="fa-solid fa-chevron-right"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/Icon/src/Icon.vue'
import PageLayout from '@/layout/data-engine/PageLayout.vue'

const router = useRouter()

// 页面状态
const loading = ref(false)

// 导航方法
const navigateTo = (path: string) => {
  const routeMap: Record<string, string> = {
    'index.html': '/pages/index',
    'dashboard.html': '/pages/dashboard',
    'workspace.html': '/pages/workspace',
    'profile.html': '/pages/profile',
    'search-results.html': '/pages/search-results',
    'apps/apps.html': '/pages/apps/list',
    'cases/cases.html': '/pages/cases/list',
    'resources/resources.html': '/pages/resources/list'
  }
  const route = routeMap[path] || path.replace('.html', '')
  router.push(route)
}

onMounted(() => {
  // 页面初始化
  console.log('API市场 页面加载完成')
})
</script>

<style scoped lang="scss">


@layer utilities {
            .bg-stars {
                background-color: #02040a;
                background-image: 
                    radial-gradient(white, rgb(255 255 255 / 20%) 2px, transparent 3px),
                    radial-gradient(white, rgb(255 255 255 / 15%) 1px, transparent 2px),
                    radial-gradient(white, rgb(255 255 255 / 10%) 2px, transparent 3px);
                background-position: 0 0, 40px 60px, 130px 270px;
                background-size: 550px 550px, 350px 350px, 250px 250px;
            }

            .text-gradient {
                color: transparent;
                background: linear-gradient(to right, #00d2ff, #00ffa3);
                background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
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

            .filter-checkbox.active {
                color: #00ffa3;
                background-color: rgb(0 255 163 / 10%);
                border-color: rgb(0 255 163 / 50%);
            }
        }

        @layer components {
            .btn-primary {
                @apply relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-void-900 transition-all duration-300;

                background: linear-gradient(90deg, #00d2ff 0%, #00ffa3 100%);
            }

            .btn-primary:hover {
                @apply shadow-glow-md transform -translate-y-0.5 scale-105;
            }

            .btn-secondary {
                @apply inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-white transition-all duration-300 border border-white/20 hover:border-aurora-cyan/50 hover:bg-white/5;
            }

            .btn-link {
                @apply inline-flex items-center text-aurora-cyan hover:text-aurora-green transition-colors font-medium text-sm;
            }

            .card-glass {
                @apply glass-panel-base rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-aurora-cyan/30 hover:shadow-glow-sm;
            }

            .api-card {
                @apply glass-panel-base rounded-xl p-5 border border-aurora-green/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm cursor-pointer;
            }

            .badge {
                @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
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

            .filter-checkbox {
                @apply flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 cursor-pointer transition-all hover:bg-white/10;
            }
        }

        body {
            @apply selection:bg-aurora-cyan/30 selection:text-white font-body;
        }

        .hidden {
            display: none !important;
        }

// 页面特定样式
.pages-container {
  min-height: calc(100vh - 84px);
}


</style>
