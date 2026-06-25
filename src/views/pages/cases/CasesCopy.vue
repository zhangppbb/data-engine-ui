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
      <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <div class="aurora-blur bg-aurora-cyan w-[500px] h-[500px] top-[-100px] left-[-100px]"></div>
              <div class="aurora-blur bg-aurora-red w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-20"></div>
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
                      <router-link to="/pages/apps/list" class="hover:text-aurora-cyan transition-colors">应用馆</router-link>
                      <router-link to="/pages/resources/list" class="hover:text-aurora-cyan transition-colors">资源馆</router-link>
                      <router-link to="/pages/cases/list" class="text-aurora-cyan font-semibold">案例馆</router-link>
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
                                      <span class="text-slate-400 text-sm">剩余点数：</span>
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
      
          
          <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
              
              <div class="mb-8">
                  <h1 class="text-3xl font-bold text-white mb-2">案例馆</h1>
                  <p class="text-slate-400">真实业务场景成功案例，展示平台能力，教育用户，建立信任</p>
              </div>
      
              <div class="grid lg:grid-cols-3 gap-8">
                  
                  <div class="lg:col-span-2">
                      
                      <div class="mb-8">
                          <h3 class="text-lg font-bold text-white mb-4">按行业筛选</h3>
                          <div class="flex flex-wrap gap-2 mb-6">
                              <button class="filter-tag active">全部</button>
                              <button class="filter-tag">金融</button>
                              <button class="filter-tag">政府</button>
                              <button class="filter-tag">制造</button>
                              <button class="filter-tag">零售</button>
                              <button class="filter-tag">科技</button>
                              <button class="filter-tag">医疗</button>
                              <button class="filter-tag">教育</button>
                          </div>
                          
                          <h3 class="text-lg font-bold text-white mb-4">按场景筛选</h3>
                          <div class="flex flex-wrap gap-2">
                              <button class="filter-tag">风控</button>
                              <button class="filter-tag">招商</button>
                              <button class="filter-tag">营销</button>
                              <button class="filter-tag">运营</button>
                              <button class="filter-tag">投资</button>
                              <button class="filter-tag">合规</button>
                              <button class="filter-tag">供应链</button>
                              <button class="filter-tag">人力资源</button>
                          </div>
                      </div>
      
                      
                      <div class="grid md:grid-cols-2 gap-6">
                          
                          <router-link to="/pages/cases/detail/demo" class="case-card block">
                              <div class="h-48 bg-gradient-to-br from-aurora-cyan/20 to-aurora-green/20 relative overflow-hidden">
                                  <div class="absolute inset-0 flex items-center justify-center">
                                      <i class="fa-solid fa-building-columns text-4xl text-aurora-cyan opacity-50"></i>
                                  </div>
                                  <div class="absolute top-4 right-4">
                                      <span class="badge-industry">金融</span>
                                  </div>
                              </div>
                              <div class="p-6">
                                  <h3 class="text-lg font-bold text-white mb-2">银行信贷风险智能审核</h3>
                                  <p class="text-slate-400 text-sm mb-4 line-clamp-2">
                                      某商业银行应用企业风险报告生成API，将信贷审核时间从3天缩短至30分钟，风险识别准确率提升40%
                                  </p>
                                  <div class="flex items-center justify-between">
                                      <div class="flex items-center gap-2">
                                          <span class="badge-scenario">风控</span>
                                          <span class="text-slate-500 text-xs">某商业银行</span>
                                      </div>
                                      <span class="text-slate-500 text-xs">2024年2月</span>
                                  </div>
                              </div>
                          </router-link>
      
                          
                          <router-link to="/pages/cases/detail/demo" class="case-card block">
                              <div class="h-48 bg-gradient-to-br from-aurora-purple/20 to-aurora-cyan/20 relative overflow-hidden">
                                  <div class="absolute inset-0 flex items-center justify-center">
                                      <i class="fa-solid fa-landmark text-4xl text-aurora-purple opacity-50"></i>
                                  </div>
                                  <div class="absolute top-4 right-4">
                                      <span class="badge-industry">政府</span>
                                  </div>
                              </div>
                              <div class="p-6">
                                  <h3 class="text-lg font-bold text-white mb-2">招商局智能招商目标筛选</h3>
                                  <p class="text-slate-400 text-sm mb-4 line-clamp-2">
                                      某市招商局使用产业链分析MCP，精准定位目标企业，成功引进12家产业链关键企业，投资总额超50亿元
                                  </p>
                                  <div class="flex items-center justify-between">
                                      <div class="flex items-center gap-2">
                                          <span class="badge-scenario">招商</span>
                                          <span class="text-slate-500 text-xs">某市招商局</span>
                                      </div>
                                      <span class="text-slate-500 text-xs">2024年1月</span>
                                  </div>
                              </div>
                          </router-link>
      
                          
                          <router-link to="/pages/cases/detail/demo" class="case-card block">
                              <div class="h-48 bg-gradient-to-br from-aurora-red/20 to-orange-500/20 relative overflow-hidden">
                                  <div class="absolute inset-0 flex items-center justify-center">
                                      <i class="fa-solid fa-industry text-4xl text-aurora-red opacity-50"></i>
                                  </div>
                                  <div class="absolute top-4 right-4">
                                      <span class="badge-industry">制造</span>
                                  </div>
                              </div>
                              <div class="p-6">
                                  <h3 class="text-lg font-bold text-white mb-2">制造企业供应商风险监控</h3>
                                  <p class="text-slate-400 text-sm mb-4 line-clamp-2">
                                      某大型制造企业应用舆情监控Skill，实时监控300+供应商舆情，提前预警风险事件，避免供应链中断
                                  </p>
                                  <div class="flex items-center justify-between">
                                      <div class="flex items-center gap-2">
                                          <span class="badge-scenario">供应链</span>
                                          <span class="text-slate-500 text-xs">某制造集团</span>
                                      </div>
                                      <span class="text-slate-500 text-xs">2023年12月</span>
                                  </div>
                              </div>
                          </router-link>
      
                          
                          <router-link to="/pages/cases/detail/demo" class="case-card block">
                              <div class="h-48 bg-gradient-to-br from-aurora-blue/20 to-purple-500/20 relative overflow-hidden">
                                  <div class="absolute inset-0 flex items-center justify-center">
                                      <i class="fa-solid fa-chart-line text-4xl text-aurora-blue opacity-50"></i>
                                  </div>
                                  <div class="absolute top-4 right-4">
                                      <span class="badge-industry">科技</span>
                                  </div>
                              </div>
                              <div class="p-6">
                                  <h3 class="text-lg font-bold text-white mb-2">投资机构尽职调查自动化</h3>
                                  <p class="text-slate-400 text-sm mb-4 line-clamp-2">
                                      某VC机构使用高管背景调查API和司法诉讼查询API，将尽职调查效率提升5倍，每年节省人力成本200万元
                                  </p>
                                  <div class="flex items-center justify-between">
                                      <div class="flex items-center gap-2">
                                          <span class="badge-scenario">投资</span>
                                          <span class="text-slate-500 text-xs">某投资机构</span>
                                      </div>
                                      <span class="text-slate-500 text-xs">2023年11月</span>
                                  </div>
                              </div>
                          </router-link>
      
                          
                          <router-link to="/pages/cases/detail/demo" class="case-card block">
                              <div class="h-48 bg-gradient-to-br from-aurora-green/20 to-cyan-500/20 relative overflow-hidden">
                                  <div class="absolute inset-0 flex items-center justify-center">
                                      <i class="fa-solid fa-store text-4xl text-aurora-green opacity-50"></i>
                                  </div>
                                  <div class="absolute top-4 right-4">
                                      <span class="badge-industry">零售</span>
                                  </div>
                              </div>
                              <div class="p-6">
                                  <h3 class="text-lg font-bold text-white mb-2">零售企业竞争对手分析</h3>
                                  <p class="text-slate-400 text-sm mb-4 line-clamp-2">
                                      某连锁零售企业使用竞争对手分析应用，实时监控竞品动态，优化市场策略，季度销售额提升18%
                                  </p>
                                  <div class="flex items-center justify-between">
                                      <div class="flex items-center gap-2">
                                          <span class="badge-scenario">营销</span>
                                          <span class="text-slate-500 text-xs">某零售集团</span>
                                      </div>
                                      <span class="text-slate-500 text-xs">2023年10月</span>
                                  </div>
                              </div>
                          </router-link>
      
                          
                          <router-link to="/pages/cases/detail/demo" class="case-card block">
                              <div class="h-48 bg-gradient-to-br from-yellow-500/20 to-red-500/20 relative overflow-hidden">
                                  <div class="absolute inset-0 flex items-center justify-center">
                                      <i class="fa-solid fa-heart-pulse text-4xl text-red-500 opacity-50"></i>
                                  </div>
                                  <div class="absolute top-4 right-4">
                                      <span class="badge-industry">医疗</span>
                                  </div>
                              </div>
                              <div class="p-6">
                                  <h3 class="text-lg font-bold text-white mb-2">医疗设备供应商合规管理</h3>
                                  <p class="text-slate-400 text-sm mb-4 line-clamp-2">
                                      某三甲医院使用AI标书审查应用，自动化审查招标文件，识别风险条款，采购合规率提升至99.5%
                                  </p>
                                  <div class="flex items-center justify-between">
                                      <div class="flex items-center gap-2">
                                          <span class="badge-scenario">合规</span>
                                          <span class="text-slate-500 text-xs">某三甲医院</span>
                                      </div>
                                      <span class="text-slate-500 text-xs">2023年9月</span>
                                  </div>
                              </div>
                          </router-link>
                      </div>
      
                      
                      <div class="flex justify-center mt-12">
                          <div class="flex gap-2">
                              <button class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition">上一页</button>
                              <button class="px-4 py-2 rounded-lg bg-accent-gradient text-void-900 font-bold border-transparent">1</button>
                              <button class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition">2</button>
                              <button class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition">3</button>
                              <button class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition">下一页</button>
                          </div>
                      </div>
                  </div>
      
                  
                  <div class="lg:col-span-1">
                      <div class="card-glass sticky top-24">
                          <h2 class="text-xl font-bold text-white mb-6">热门案例排行榜</h2>
                          <div class="space-y-4">
                              <router-link to="/pages/cases/detail/demo" class="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition group">
                                  <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-aurora-cyan to-aurora-green flex items-center justify-center text-void-900 font-bold">1</div>
                                  <div class="flex-1">
                                      <h4 class="font-bold text-white text-sm mb-1">银行信贷风险智能审核</h4>
                                      <div class="flex items-center gap-2">
                                          <span class="text-slate-500 text-xs">金融 · 风控</span>
                                          <span class="text-slate-500 text-xs">1,245浏览</span>
                                      </div>
                                  </div>
                              </router-link>
      
                              <router-link to="/pages/cases/detail/demo" class="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition group">
                                  <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-aurora-purple to-aurora-cyan flex items-center justify-center text-white font-bold">2</div>
                                  <div class="flex-1">
                                      <h4 class="font-bold text-white text-sm mb-1">招商局智能招商目标筛选</h4>
                                      <div class="flex items-center gap-2">
                                          <span class="text-slate-500 text-xs">政府 · 招商</span>
                                          <span class="text-slate-500 text-xs">987浏览</span>
                                      </div>
                                  </div>
                              </router-link>
      
                              <router-link to="/pages/cases/detail/demo" class="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition group">
                                  <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-aurora-red to-orange-500 flex items-center justify-center text-white font-bold">3</div>
                                  <div class="flex-1">
                                      <h4 class="font-bold text-white text-sm mb-1">制造企业供应商风险监控</h4>
                                      <div class="flex items-center gap-2">
                                          <span class="text-slate-500 text-xs">制造 · 供应链</span>
                                          <span class="text-slate-500 text-xs">856浏览</span>
                                      </div>
                                  </div>
                              </router-link>
      
                              <router-link to="/pages/cases/detail/demo" class="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition group">
                                  <div class="w-8 h-8 rounded-lg bg-void-800 flex items-center justify-center text-slate-400 font-bold">4</div>
                                  <div class="flex-1">
                                      <h4 class="font-bold text-white text-sm mb-1">投资机构尽职调查自动化</h4>
                                      <div class="flex items-center gap-2">
                                          <span class="text-slate-500 text-xs">科技 · 投资</span>
                                          <span class="text-slate-500 text-xs">721浏览</span>
                                      </div>
                                  </div>
                              </router-link>
      
                              <router-link to="/pages/cases/detail/demo" class="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition group">
                                  <div class="w-8 h-8 rounded-lg bg-void-800 flex items-center justify-center text-slate-400 font-bold">5</div>
                                  <div class="flex-1">
                                      <h4 class="font-bold text-white text-sm mb-1">零售企业竞争对手分析</h4>
                                      <div class="flex items-center gap-2">
                                          <span class="text-slate-500 text-xs">零售 · 营销</span>
                                          <span class="text-slate-500 text-xs">689浏览</span>
                                      </div>
                                  </div>
                              </router-link>
                          </div>
      
                          <div class="mt-6 pt-6 border-t border-white/10">
                              <h3 class="font-bold text-white mb-3">案例价值</h3>
                              <ul class="space-y-2">
                                  <li class="flex items-start gap-2">
                                      <i class="fa-solid fa-check text-aurora-green mt-1"></i>
                                      <span class="text-slate-400 text-sm">真实业务场景验证</span>
                                  </li>
                                  <li class="flex items-start gap-2">
                                      <i class="fa-solid fa-check text-aurora-green mt-1"></i>
                                      <span class="text-slate-400 text-sm">量化效果展示</span>
                                  </li>
                                  <li class="flex items-start gap-2">
                                      <i class="fa-solid fa-check text-aurora-green mt-1"></i>
                                      <span class="text-slate-400 text-sm">可复用的解决方案</span>
                                  </li>
                                  <li class="flex items-start gap-2">
                                      <i class="fa-solid fa-check text-aurora-green mt-1"></i>
                                      <span class="text-slate-400 text-sm">关联应用/资源一键跳转</span>
                                  </li>
                              </ul>
                          </div>
      
                          <div class="mt-6 pt-6 border-t border-white/10">
                              <div class="flex items-center gap-3">
                                  <i class="fa-solid fa-lightbulb text-aurora-cyan"></i>
                                  <div>
                                      <h4 class="font-bold text-white text-sm">寻找类似解决方案？</h4>
                                      <p class="text-slate-500 text-xs">根据您的业务场景智能推荐</p>
                                  </div>
                              </div>
                              <router-link to="/pages/index" class="mt-3 inline-block w-full text-center py-2 rounded-full text-sm bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30 hover:bg-aurora-cyan/30 transition">
                                  智能搜索匹配 <i class="fa-solid fa-arrow-right ml-2"></i>
                              </router-link>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      
          <footer class="relative z-10 max-w-7xl mx-auto px-6 py-8 mt-12 border-t border-white/10">
              <div class="flex flex-col md:flex-row justify-between items-center">
                  <div class="text-slate-500 text-sm">
                      © 2025 数擎平台 · 企业级数据服务平台
                  </div>
                  <div class="flex gap-6 mt-4 md:mt-0 text-sm">
                      <a href="#" class="text-slate-400 hover:text-white transition">服务协议</a>
                      <a href="#" class="text-slate-400 hover:text-white transition">隐私政策</a>
                      <a href="#" class="text-slate-400 hover:text-white transition">帮助中心</a>
                      <a href="#" class="text-slate-400 hover:text-white transition">联系我们</a>
                  </div>
              </div>
          </footer>
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
  console.log('案例列表(副本) 页面加载完成')
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
        }

        @layer components {
            .btn-primary {
                @apply relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-void-900 transition-all duration-300;

                background: linear-gradient(90deg, #00d2ff 0%, #00ffa3 100%);
            }

            .btn-primary:hover {
                @apply shadow-glow-md transform -translate-y-0.5 scale-105;
            }

            .card-glass {
                @apply glass-panel-base rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-aurora-cyan/30 hover:shadow-glow-sm;
            }

            .case-card {
                @apply glass-panel-base rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/5 hover:shadow-glow-sm;
            }

            .badge {
                @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
            }

            .badge-industry {
                @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-cyan to-aurora-green text-void-900;
            }

            .badge-scenario {
                @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-purple to-aurora-cyan text-white;
            }

            .filter-tag {
                @apply px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border border-white/10 bg-white/5 text-slate-300;
            }

            .filter-tag.active {
                @apply bg-accent-gradient text-void-900 border-transparent shadow-glow-sm;
            }
        }

        body {
            @apply selection:bg-aurora-cyan/30 selection:text-white font-body;
        }

// 页面特定样式
.pages-container {
  min-height: calc(100vh - 84px);
}


</style>
