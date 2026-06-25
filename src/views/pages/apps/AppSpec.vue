<template>
  <div class="pages-container bg-stars text-slate-300 min-h-screen relative overflow-x-hidden">
    <!-- 全局背景光晕 -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div class="aurora-blur bg-aurora-cyan w-[500px] h-[500px] top-[-100px] left-[-100px] animate-pulse-slow"></div>
      <div class="aurora-blur bg-aurora-red w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-20 animate-pulse-slow animation-delay-1000"></div>
      <div class="aurora-blur bg-aurora-purple w-[600px] h-[600px] top-[40%] left-[30%] opacity-10 blur-[120px] animate-pulse-slow animation-delay-2000"></div>
    </div>

    <!-- 主内容 -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
      <div class='fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0'>
              <div class='aurora-blur bg-aurora-cyan w-[500px] h-[500px] top-[-100px] left-[-100px] animate-pulse-slow'>
              </div>
      <div class='aurora-blur bg-aurora-green w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-20'>
              </div>
      <div class='aurora-blur bg-aurora-purple w-[600px] h-[600px] top-[40%] left-[30%] opacity-10 blur-[120px]'>
              </div>
          </div>
      
          
          <header class="relative z-20 glass-panel-base border-x-0 border-t-0 sticky top-0 bg-void-900/80">
              <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                  <div class="flex items-center gap-3">
                      <router-link to="/pages/index" class="flex items-center gap-3">
                          <div class="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center shadow-glow-sm">
                              <i class="fa-solid fa-dog text-void-900 text-lg"></i>
                          </div>
                          <div class="flex flex-col">
                              <span class="text-xl font-bold text-white tracking-wide">数擎平台</span>
                              <span class="opacity-50 text-[10px] tracking-wide">企业级数据服务平台</span>
                          </div>
                      </router-link>
                  </div>
                  <nav class="hidden md:flex gap-8 text-sm font-medium flex-1 justify-center">
                      <router-link to="/pages/index" class="hover:text-aurora-cyan transition-colors">首页</router-link>
                      <router-link to="/pages/apps/list" class="text-aurora-cyan font-semibold">应用馆</router-link>
                      <router-link to="/pages/resources/list" class="hover:text-aurora-cyan transition-colors">资源馆</router-link>
                      <router-link to="/pages/cases/list" class="hover:text-aurora-cyan transition-colors">案例馆</router-link>
                  </nav>
                  <div class="flex items-center gap-4">
                      <router-link to="/pages/workspace" class="text-sm font-medium hover:text-aurora-cyan transition-colors hidden md:block">工作空间</router-link>
                      
                      <div class="relative">
                          <button class="flex items-center gap-2 focus:outline-none" ref="user-menu-button">
                              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-green flex items-center justify-center">
                                  <span class="text-void-900 font-bold">黄</span>
                              </div>
                          </button>
                          
                          <div class="absolute right-0 mt-2 w-80 glass-panel-base rounded-xl p-4 border border-white/10 shadow-lg z-99999 hidden" ref="user-menu">
                              <div class="flex items-center gap-3 mb-4">
                                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-green flex items-center justify-center">
                                      <span class="text-void-900 text-xl font-bold">黄</span>
                                  </div>
                                  <div>
                                      <p class="text-white font-medium">18****48</p>
                                      <div class="flex items-center gap-1 mt-1">
                                          <span class="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded-full">VIP试用</span>
                                      </div>
                                  </div>
                                  <router-link to="/pages/profile" class="ml-auto text-sm text-aurora-cyan hover:text-aurora-green transition">进入个人中心 &gt;</router-link>
                              </div>
                              <div class="border-t border-white/10 py-3 mb-3">
                                  <div class="flex items-center justify-between mb-2">
                                      <span class="text-slate-400 text-sm">剩余点数</span>
                                      <span class="text-aurora-green font-bold">1,234</span>
                                  </div>
                                  <button class="w-full py-2 rounded-lg bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30 hover:bg-aurora-cyan/30 transition text-sm">充值</button>
                              </div>
                              <div class="grid grid-cols-3 gap-2 mb-4">
                                  <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                                      <i class="fa-solid fa-download text-aurora-cyan mb-1"></i>
                                      <span class="text-xs text-slate-300">下载记录</span>
                                  </a>
                                  <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                                      <i class="fa-solid fa-history text-aurora-cyan mb-1"></i>
                                      <span class="text-xs text-slate-300">浏览历史</span>
                                  </a>
                                  <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                                      <i class="fa-solid fa-heart text-aurora-cyan mb-1"></i>
                                      <span class="text-xs text-slate-300">我的关注</span>
                                  </a>
                              </div>
                              <div class="grid grid-cols-3 gap-2">
                                  <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                                      <i class="fa-solid fa-building text-aurora-cyan mb-1"></i>
                                      <span class="text-xs text-slate-300">我的企业</span>
                                  </a>
                                  <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                                      <i class="fa-solid fa-shopping-cart text-aurora-cyan mb-1"></i>
                                      <span class="text-xs text-slate-300">我的订单</span>
                                  </a>
                                  <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                                      <i class="fa-solid fa-file-invoice text-aurora-cyan mb-1"></i>
                                      <span class="text-xs text-slate-300">我的发票</span>
                                  </a>
                              </div>
                              <div class="border-t border-white/10 mt-4 pt-4 flex justify-between">
                                  <a href="#" class="text-sm text-slate-400 hover:text-white transition">客服中心</a>
                                  <a href="#" class="text-sm text-slate-400 hover:text-white transition">我的反馈</a>
                                  <a href="#" class="text-sm text-slate-400 hover:text-white transition">退出登录</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
      
      
      <main class='relative z-10 pt-80 pb-16'>
              <div class='max-w-1440 mx-auto px-0'>
              
      <section class='mt-10 mb-12'>
              <div class='flex justify-between items-center w-1440 mx-auto'>
              
      <div class='flex flex-col'>
              <h2 class='text-[32px] font-bold text-white leading-[56px] w-800 h-[56px]'>
              产业招商全流程专区
          </h2>
      <p class='text-lg text-slate-400 leading-[32px] w-800 h-[32px]'>
              从潜客挖掘到区域分析，一站式助力产业招商落地全流程
          </p>
          </div>
      
      <button class='w-[100px] h-[36px] rounded-lg border border-white/20 bg-white/5 text-white text-sm font-medium hover:bg-white/10 hover:border-aurora-cyan/50 transition-all flex items-center justify-center'>
              <i class='fa-solid fa-share-nodes mr-2'>
              </i>
      分享
          </button>
          </div>
          </section>
      
      
      <section class='mb-14'>
              <div class='w-1440 h-480 glass-panel-base rounded-2xl mx-auto px-8 py-10'>
              <div class='flex h-full'>
              
      <div class='w-800 h-400 rounded-xl overflow-hidden border border-white/10'>
              <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/579ed967495657fddc2badf4f65733fc.png' class='w-full h-full object-cover' alt='潜客扫描 - 策略筛选预览'/>
          </div>
      
      <div class='w-540 h-400 ml-8 flex flex-col'>
              <h3 class='text-2xl font-bold text-white leading-10 w-540 h-[40px] mb-3'>
              潜客扫描 - 策略筛选
          </h3>
      <p class='text-base text-slate-300 leading-relaxed text-ellipsis-4 w-540 h-[120px] mb-4'>
              根据产业、区域、资质、业绩等多维度条件，精准筛选潜在招商目标企业，自动生成企业画像与招商价值评估，助力政府、园区、企业实现精准招商、高效拓客，降低招商获客成本，提升招商转化率
          </p>
      <div class='flex gap-3 mb-auto'>
              <span class='badge'>
              招商筛选
          </span>
      <span class='badge'>
              精准招商
          </span>
      <span class='badge'>
              企业拓客
          </span>
          </div>
      
      <div class='flex gap-4 mt-20'>
              <button class='w-[160px] h-[48px] btn-primary rounded-xl'>
              立即体验
          </button>
      <button class='w-[160px] h-[48px] btn-secondary rounded-xl'>
              复制应用
          </button>
          </div>
          </div>
          </div>
          </div>
          </section>
      
      
      <section >
              <div class='w-1440 mx-auto'>
              
      <div class='flex items-center mb-8'>
              <h3 class='text-2xl font-bold text-white leading-10 w-[240px] h-[40px]'>
              全部应用
          </h3>
      <div class='relative ml-6'>
              <i class='fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-500'>
              </i>
      <input type='text' placeholder='搜索应用名称 / 功能' class='w-[360px] h-[36px] input-glass rounded-lg pl-10 text-sm'/>
          </div>
          </div>
      
      <div class='grid grid-cols-3 gap-6 gap-y-8'>
              
      <div class='w-464 h-210 card-glass cursor-pointer p-0 px-6 py-6'>
              <div class='flex justify-between items-center mb-3'>
              <div class='flex items-center'>
              <div class='w-6 h-6 rounded bg-accent-gradient flex items-center justify-center text-void-900 mr-2'>
              <i class='fa-solid fa-magnifying-glass text-xs'>
              </i>
          </div>
      <h4 class='text-lg font-bold text-white'>
              潜客扫描 - 策略筛选
          </h4>
          </div>
      <div class='flex gap-2'>
              <span class='badge text-aurora-green'>
              免费
          </span>
          </div>
          </div>
      <p class='text-sm text-slate-400 text-ellipsis-2 w-416 h-[48px] mb-3'>
              根据产业、区域、资质等条件筛选潜在招商企业，助力精准获客与产业招商
          </p>
      <div class='flex gap-3'>
              <span class='badge text-xs'>
              招商筛选
          </span>
      <span class='badge text-xs'>
              精准招商
          </span>
      <span class='badge text-xs'>
              企业拓客
          </span>
          </div>
          </div>
      
      <div class='w-464 h-210 card-glass cursor-pointer p-0 px-6 py-6'>
              <div class='flex justify-between items-center mb-3'>
              <div class='flex items-center'>
              <div class='w-6 h-6 rounded bg-accent-gradient flex items-center justify-center text-void-900 mr-2'>
              <i class='fa-solid fa-map-location-dot text-xs'>
              </i>
          </div>
      <h4 class='text-lg font-bold text-white'>
              潜客扫描 - 地图查企
          </h4>
          </div>
      <div class='flex gap-2'>
              <span class='badge text-aurora-green'>
              免费
          </span>
          </div>
          </div>
      <p class='text-sm text-slate-400 text-ellipsis-2 w-416 h-[48px] mb-3'>
              地图圈选目标区域，一键查询区域内企业名单与核心工商、资质信息
          </p>
      <div class='flex gap-3'>
              <span class='badge text-xs'>
              地图查企
          </span>
      <span class='badge text-xs'>
              区域圈选
          </span>
      <span class='badge text-xs'>
              招商辅助
          </span>
          </div>
          </div>
      
      <div class='w-464 h-210 card-glass cursor-pointer p-0 px-6 py-6'>
              <div class='flex justify-between items-center mb-3'>
              <div class='flex items-center'>
              <div class='w-6 h-6 rounded bg-accent-gradient flex items-center justify-center text-void-900 mr-2'>
              <i class='fa-solid fa-chart-pie text-xs'>
              </i>
          </div>
      <h4 class='text-lg font-bold text-white'>
              区域信息分析
          </h4>
          </div>
      <div class='flex gap-2'>
              <span class='badge text-aurora-purple'>
              订阅制
          </span>
          </div>
          </div>
      <p class='text-sm text-slate-400 text-ellipsis-2 w-416 h-[48px] mb-3'>
              图表分析区域企业布局与产业分布，输出产业发展趋势与招商方向建议
          </p>
      <div class='flex gap-3'>
              <span class='badge text-xs'>
              产业布局
          </span>
      <span class='badge text-xs'>
              企业画像
          </span>
      <span class='badge text-xs'>
              区域研究
          </span>
          </div>
          </div>
      
      <div class='w-464 h-210 card-glass cursor-pointer p-0 px-6 py-6'>
              <div class='flex justify-between items-center mb-3'>
              <div class='flex items-center'>
              <div class='w-6 h-6 rounded bg-accent-gradient flex items-center justify-center text-void-900 mr-2'>
              <i class='fa-solid fa-cloud text-xs'>
              </i>
          </div>
      <h4 class='text-lg font-bold text-white'>
              迁入迁出云图
          </h4>
          </div>
      <div class='flex gap-2'>
              <span class='badge text-aurora-purple'>
              订阅制
          </span>
          </div>
          </div>
      <p class='text-sm text-slate-400 text-ellipsis-2 w-416 h-[48px] mb-3'>
              统计指定区域企业迁入迁出数据，支持大屏可视化展示，辅助招商方向研判
          </p>
      <div class='flex gap-3'>
              <span class='badge text-xs'>
              企业迁移
          </span>
      <span class='badge text-xs'>
              产业流动
          </span>
      <span class='badge text-xs'>
              招商洞察
          </span>
          </div>
          </div>
      
      <div class='w-464 h-210 card-glass cursor-pointer p-0 px-6 py-6'>
              <div class='flex justify-between items-center mb-3'>
              <div class='flex items-center'>
              <div class='w-6 h-6 rounded bg-accent-gradient flex items-center justify-center text-void-900 mr-2'>
              <i class='fa-solid fa-coins text-xs'>
              </i>
          </div>
      <h4 class='text-lg font-bold text-white'>
              宏观经济数据查询
          </h4>
          </div>
      <div class='flex gap-2'>
              <span class='badge text-yellow-400'>
              按次收费
          </span>
          </div>
          </div>
      <p class='text-sm text-slate-400 text-ellipsis-2 w-416 h-[48px] mb-3'>
              查询省市区 GDP、人口、地方负债、产业结构等宏观经济指标
          </p>
      <div class='flex gap-3'>
              <span class='badge text-xs'>
              宏观经济
          </span>
      <span class='badge text-xs'>
              城市数据
          </span>
      <span class='badge text-xs'>
              投资门槛
          </span>
          </div>
          </div>
      
      <div class='w-464 h-210 card-glass cursor-pointer p-0 px-6 py-6'>
              <div class='flex justify-between items-center mb-3'>
              <div class='flex items-center'>
              <div class='w-6 h-6 rounded bg-accent-gradient flex items-center justify-center text-void-900 mr-2'>
              <i class='fa-solid fa-sitemap text-xs'>
              </i>
          </div>
      <h4 class='text-lg font-bold text-white'>
              数擎2.0
          </h4>
          </div>
      <div class='flex gap-2'>
              <span class='badge text-aurora-purple'>
              订阅制
          </span>
          </div>
          </div>
      <p class='text-sm text-slate-400 text-ellipsis-2 w-416 h-[48px] mb-3'>
              从图谱、企业、项目、技术等多维度分析产业链，挖掘强链补链招商机会
          </p>
      <div class='flex gap-3'>
              <span class='badge text-xs'>
              产业链图谱
          </span>
      <span class='badge text-xs'>
              强链补链
          </span>
      <span class='badge text-xs'>
              产业规划
          </span>
          </div>
          </div>
      
      <div class='w-464 h-210 card-glass cursor-pointer p-0 px-6 py-6'>
              <div class='flex justify-between items-center mb-3'>
              <div class='flex items-center'>
              <div class='w-6 h-6 rounded bg-accent-gradient flex items-center justify-center text-void-900 mr-2'>
              <i class='fa-solid fa-file-contract text-xs'>
              </i>
          </div>
      <h4 class='text-lg font-bold text-white'>
              招商政策匹配
          </h4>
          </div>
      <div class='flex gap-2'>
              <span class='badge text-orange-400'>
              限时免费
          </span>
          </div>
          </div>
      <p class='text-sm text-slate-400 text-ellipsis-2 w-416 h-[48px] mb-3'>
              根据企业属性自动匹配对应区域招商政策，输出政策申报指引
          </p>
      <div class='flex gap-3'>
              <span class='badge text-xs'>
              政策匹配
          </span>
      <span class='badge text-xs'>
              申报指引
          </span>
      <span class='badge text-xs'>
              招商服务
          </span>
          </div>
          </div>
      
      <div class='w-464 h-210 card-glass cursor-pointer p-0 px-6 py-6'>
              <div class='flex justify-between items-center mb-3'>
              <div class='flex items-center'>
              <div class='w-6 h-6 rounded bg-accent-gradient flex items-center justify-center text-void-900 mr-2'>
              <i class='fa-solid fa-building text-xs'>
              </i>
          </div>
      <h4 class='text-lg font-bold text-white'>
              园区企业画像分析
          </h4>
          </div>
      <div class='flex gap-2'>
              <span class='badge text-aurora-purple'>
              订阅制
          </span>
          </div>
          </div>
      <p class='text-sm text-slate-400 text-ellipsis-2 w-416 h-[48px] mb-3'>
              构建园区入驻企业全维度画像，分析产业集聚度与发展潜力
          </p>
      <div class='flex gap-3'>
              <span class='badge text-xs'>
              园区分析
          </span>
      <span class='badge text-xs'>
              企业画像
          </span>
      <span class='badge text-xs'>
              产业集聚
          </span>
          </div>
          </div>
      
      <div class='w-464 h-210 card-glass cursor-pointer p-0 px-6 py-6'>
              <div class='flex justify-between items-center mb-3'>
              <div class='flex items-center'>
              <div class='w-6 h-6 rounded bg-accent-gradient flex items-center justify-center text-void-900 mr-2'>
              <i class='fa-solid fa-tasks text-xs'>
              </i>
          </div>
      <h4 class='text-lg font-bold text-white'>
              招商项目管理
          </h4>
          </div>
      <div class='flex gap-2'>
              <span class='badge text-aurora-purple'>
              订阅制
          </span>
          </div>
          </div>
      <p class='text-sm text-slate-400 text-ellipsis-2 w-416 h-[48px] mb-3'>
              全流程管理招商项目线索、跟进、签约、落地全周期，提升招商效率
          </p>
      <div class='flex gap-3'>
              <span class='badge text-xs'>
              项目管理
          </span>
      <span class='badge text-xs'>
              招商跟进
          </span>
      <span class='badge text-xs'>
              流程管理
          </span>
          </div>
          </div>
          </div>
          </div>
          </section>
      
          </div>
          </main>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/Icon/src/Icon.vue'

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
  console.log('应用规格 页面加载完成')
})
</script>

<style scoped lang="scss">


@layer utilities {
            /* 星空粒子背景模拟 */
            .bg-stars {
                background-color: #02040a;
                background-image: 
                    radial-gradient(white, rgb(255 255 255 / 20%) 2px, transparent 3px),
                    radial-gradient(white, rgb(255 255 255 / 15%) 1px, transparent 2px),
                    radial-gradient(white, rgb(255 255 255 / 10%) 2px, transparent 3px);
                background-position: 0 0, 40px 60px, 130px 270px;
                background-size: 550px 550px, 350px 350px, 250px 250px;
            }

            /* 文本渐变 */
            .text-gradient {
                color: transparent;
                background: linear-gradient(to right, #00d2ff, #00ffa3);
                background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            /* 极光背景光晕 */
            .aurora-blur {
                position: absolute;
                z-index: 0;
                pointer-events: none;
                border-radius: 50%;
                opacity: 0.4;
                filter: blur(80px);
            }

            /* 磨砂玻璃面板工具类 */
            .glass-panel-base {
                background: rgb(255 255 255 / 3%);
                border: 1px solid rgb(255 255 255 / 8%);
                box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
                backdrop-filter: blur(12px);
                backdrop-filter: blur(12px);
            }
            
            /* 细微的网格背景 */
            .bg-grid-white {
                background-image: linear-gradient(to right, rgb(255 255 255 / 5%) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgb(255 255 255 / 5%) 1px, transparent 1px);
                background-size: 40px 40px;
            }

            .text-ellipsis-2 {
                display: -webkit-box;  
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

            .text-ellipsis-4 {
                display: -webkit-box;  
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
            }
        }

        @layer components {
            /* 按钮组件 */
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

            /* 卡片组件 */
            .card-glass {
                @apply glass-panel-base rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-aurora-cyan/30 hover:shadow-glow-sm;
            }

            /* 标签徽章 */
            .badge {
                @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
            }

            /* 输入框 */
            .input-glass {
                @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
            }
        }
        
        body {
            @apply selection:bg-aurora-cyan/30 selection:text-white font-body;
        }

        .dropdown-menu.hidden {
            display: none !important;
        }

// 页面特定样式
.pages-container {
  min-height: calc(100vh - 84px);
}


</style>
