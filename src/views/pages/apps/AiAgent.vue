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
      <div class="fixed inset-0 bg-particles pointer-events-none z-0">
        </div>
        <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div class="aurora-blur bg-accent-blue w-[400px] h-[400px] top-[-100px] left-[-100px] animate-pulse-slow">
         </div>
         <div class="aurora-blur bg-accent-purple w-[500px] h-[500px] bottom-[-200px] right-[-100px] opacity-20">
         </div>
        </div>
        
        <header class="fixed top-0 left-0 right-0 z-50 bg-neutral-50 border-b border-neutral-200 h-16 flex items-center">
         <div class="container mx-auto px-6 flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
           <button class="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-accent-purple hover:border-accent-purple/30 transition-all">
            <i class="fa-solid fa-arrow-left">
            </i>
           </button>
           <h1 class="text-xl font-bold text-neutral-800">
            供应商智能信用与风险管控Agent
           </h1>
          </div>
          <div class="flex items-center gap-5">
           <button class="w-8 h-8 rounded-full flex items-center justify-center text-neutral-600 hover:text-accent-purple hover:bg-accent-purple/10 transition-all" title="使用指南">
            <i class="fa-regular fa-circle-question text-lg">
            </i>
           </button>
           <button class="w-8 h-8 rounded-full flex items-center justify-center text-neutral-600 hover:text-accent-purple hover:bg-accent-purple/10 transition-all" title="消息通知">
            <i class="fa-regular fa-bell text-lg">
            </i>
           </button>
           <button class="w-8 h-8 rounded-full flex items-center justify-center text-neutral-600 hover:text-accent-purple hover:bg-accent-purple/10 transition-all" title="全屏">
            <i class="fa-solid fa-expand text-lg">
            </i>
           </button>
           <div class="w-8 h-8 rounded-full overflow-hidden border border-neutral-200 ml-2 cursor-pointer hover:border-accent-purple/30 transition-all">
            <img alt="User" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
           </div>
          </div>
         </div>
        </header>
        
        
        <main class="relative z-10 container mx-auto px-6 pr-[320px] pt-24 pb-40 flex gap-6">
         <div class="flex-1">
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
           
           <div class="bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 p-[1px] rounded-xl shadow-card hover:shadow-glow transition-all duration-300">
            <div class="card-base card-hover h-full p-6 bg-white rounded-xl">
             <h3 class="text-lg font-bold text-neutral-800 mb-2">
              立即对话测试
             </h3>
             <p class="text-sm text-neutral-500 mb-4">
              直接对话输入，体验供应商全维度信用评估与风险管控的Agent能力
             </p>
             <div class="border border-neutral-200 rounded-lg bg-neutral-50 h-[320px] overflow-y-auto p-3 space-y-3 relative">
              <div class="absolute top-2 right-2 flex gap-1">
               <button class="w-6 h-6 rounded bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-accent-purple transition">
                <i class="fa-solid fa-rotate-right text-xs">
                </i>
               </button>
               <button class="w-6 h-6 rounded bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-accent-purple transition">
                <i class="fa-solid fa-copy text-xs">
                </i>
               </button>
              </div>
              
              <div class="flex justify-end">
               <div class="bg-accent-gradient text-white px-4 py-2 rounded-2xl max-w-[80%]">
                <p class="text-sm">
                 请评估一下这家供应商的整体信用风险等级。
                </p>
               </div>
              </div>
              
              <div class="flex gap-2">
               <div class="w-6 h-6 rounded-full bg-accent-gradient flex items-center justify-center text-white flex-shrink-0">
                <i class="fa-solid fa-robot text-xs">
                </i>
               </div>
               <div class="bg-white border border-neutral-200 px-4 py-2 rounded-2xl max-w-[80%]">
                <p class="text-sm text-neutral-700">
                 根据供应商工商信息、司法数据和经营数据综合分析，该供应商当前信用风险等级为A级：低风险，可以继续推进合作流程。
                </p>
               </div>
              </div>
              
              <div class="flex justify-end">
               <div class="bg-accent-gradient text-white px-4 py-2 rounded-2xl max-w-[80%]">
                <p class="text-sm">
                 查询该供应商近一年是否有经营异常、法律诉讼或行政处罚。
                </p>
               </div>
              </div>
              
              <div class="flex gap-2">
               <div class="w-6 h-6 rounded-full bg-accent-gradient flex items-center justify-center text-white flex-shrink-0">
                <i class="fa-solid fa-robot text-xs">
                </i>
               </div>
               <div class="bg-white border border-neutral-200 px-4 py-2 rounded-2xl max-w-[80%]">
                <p class="text-sm text-neutral-700">
                 已查询到，该供应商近12个月内无经营异常记录，无行政处罚，涉及1起已结案标的金额低于50万元的买卖合同诉讼，不影响整体合作风险。
                </p>
               </div>
              </div>
             </div>
            </div>
           </div>
           
           
           <div class="bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 p-[1px] rounded-xl shadow-card hover:shadow-glow transition-all duration-300">
            <div class="card-base card-hover h-full p-6 bg-white rounded-xl">
             <h3 class="text-lg font-bold text-neutral-800 mb-2">
              快速调用API
             </h3>
             <p class="text-sm text-neutral-500 mb-4">
              获取现成Agent接口，开通即用，快速集成到企业供应商全生命周期管理业务中
             </p>
             <div class="bg-neutral-800 rounded-lg p-4 text-green-400 text-xs font-mono leading-relaxed h-[270px] overflow-y-auto mb-4">
              <div class="mb-2 text-blue-300">
               // 供应商信用评估API调用示例
              </div>
              <div>
               POST https://api.yourdomain.com/v1/agent/credit-risk
              </div>
              <div class="mt-2 text-neutral-400">
               Authorization: Bearer YOUR_TOKEN
              </div>
              <div class="mt-2 text-neutral-400">
               Content-Type: application/json
              </div>
              <div class="mt-2">
               {
              </div>
              <div class="pl-4">
               "supplier_id": "SUP-2023-1289",
              </div>
              <div class="pl-4">
               "evaluation_type": "full",
              </div>
              <div class="pl-4">
               "include_history": true,
              </div>
              <div class="pl-4">
               "requested_by": "procurement_manager"
              </div>
              <div>
               }
              </div>
              <div class="mt-3 mb-2 text-yellow-300">
               // 响应示例
              </div>
              <div>
               {
              </div>
              <div class="pl-4">
               "code": 200,
              </div>
              <div class="pl-4">
               "data": {
              </div>
              <div class="pl-8">
               "risk_level": "LOW",
              </div>
              <div class="pl-8">
               "score": 86,
              </div>
              <div class="pl-8">
               "suggestion": "Approved",
              </div>
              <div class="pl-8">
               "details": [...]
              </div>
              <div class="pl-4">
               }
              </div>
              <div>
               }
              </div>
             </div>
             <div class="text-center">
              <button class="btn-primary w-full">
               <i class="fa-solid fa-copy mr-2">
               </i>
               快速复制API文档
              </button>
             </div>
            </div>
           </div>
           
           
           <div class="bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 p-[1px] rounded-xl shadow-card hover:shadow-glow transition-all duration-300">
            <div class="card-base card-hover h-full p-6 bg-white rounded-xl">
             <h3 class="text-lg font-bold text-neutral-800 mb-2">
              Agent能力可视化
             </h3>
             <p class="text-sm text-neutral-500 mb-4">
              直观查看Agent核心能力、执行流程与风险管控逻辑
             </p>
             <div class="space-y-4 h-[320px] overflow-y-auto pr-1">
              
              <div class="flex items-start gap-3">
               <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                <i class="fa-solid fa-file-import">
                </i>
               </div>
               <div>
                <h4 class="font-semibold text-neutral-700 text-sm">
                 数据聚合
                </h4>
                <p class="text-xs text-neutral-500">
                 整合工商、司法、征信、舆情全维度数据源，T+0实时更新
                </p>
               </div>
              </div>
              <div class="w-[80%] h-[1px] bg-gradient-to-r from-accent-blue to-accent-purple ml-4">
              </div>
              
              <div class="flex items-start gap-3">
               <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                <i class="fa-solid fa-brain">
                </i>
               </div>
               <div>
                <h4 class="font-semibold text-neutral-700 text-sm">
                 智能分析
                </h4>
                <p class="text-xs text-neutral-500">
                 大模型驱动深度分析，识别隐性风险，输出分级评估结果
                </p>
               </div>
              </div>
              <div class="w-[80%] h-[1px] bg-gradient-to-r from-accent-blue to-accent-purple ml-4">
              </div>
              
              <div class="flex items-start gap-3">
               <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                <i class="fa-solid fa-flag">
                </i>
               </div>
               <div>
                <h4 class="font-semibold text-neutral-700 text-sm">
                 风险预警
                </h4>
                <p class="text-xs text-neutral-500">
                 自动标记高风险项，支持自定义风险规则与阈值配置
                </p>
               </div>
              </div>
              <div class="w-[80%] h-[1px] bg-gradient-to-r from-accent-blue to-accent-purple ml-4">
              </div>
              
              <div class="flex items-start gap-3">
               <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                <i class="fa-solid fa-check-to-slot">
                </i>
               </div>
               <div>
                <h4 class="font-semibold text-neutral-700 text-sm">
                 决策输出
                </h4>
                <p class="text-xs text-neutral-500">
                 生成标准化尽调报告与管控建议，支持一键导出与审批流程对接
                </p>
               </div>
              </div>
              
              <div class="mt-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-neutral-200 rounded-lg p-3">
               <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-neutral-700">
                 平均信用评分
                </span>
                <span class="text-lg font-bold text-gradient">
                 86.5
                </span>
               </div>
               <div class="w-full bg-white rounded-full h-2 overflow-hidden">
                <div class="bg-accent-gradient h-2 rounded-full w-[86%]">
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>
           
          </div>
          
          
          <div class="mb-6 mt-8">
           <p class="text-sm text-neutral-500 mb-3">
            热门问题：
           </p>
           <div class="flex flex-wrap gap-2">
            <button class="prompt-question px-3 py-1.5 bg-neutral-100 hover:bg-accent-purple/10 hover:text-accent-purple rounded-full text-sm transition-all">
             如何评估供应商信用等级？
            </button>
            <button class="prompt-question px-3 py-1.5 bg-neutral-100 hover:bg-accent-purple/10 hover:text-accent-purple rounded-full text-sm transition-all">
             供应商风险预警有哪些指标？
            </button>
            <button class="prompt-question px-3 py-1.5 bg-neutral-100 hover:bg-accent-purple/10 hover:text-accent-purple rounded-full text-sm transition-all">
             如何进行供应商合规审核？
            </button>
            <button class="prompt-question px-3 py-1.5 bg-neutral-100 hover:bg-accent-purple/10 hover:text-accent-purple rounded-full text-sm transition-all">
             供应商违约风险如何防范？
            </button>
           </div>
          </div>
          
          <div class="w-full mb-8 space-y-4 max-h-[500px] overflow-y-auto pr-2" ref="chat-container">
          </div>
         </div>
         
         <aside class="w-[280px] flex-shrink-0 bg-neutral-50 border-l border-neutral-200 h-[calc(100vh-4rem)] overflow-y-auto fixed right-0 top-16 p-6 z-40">
          
          <div class="text-center mb-6">
           <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white text-3xl mb-3 shadow-glow">
            <i class="fa-solid fa-shield-halved">
            </i>
           </div>
           <h3 class="text-base font-bold text-neutral-800 mb-2">
            供应商智能信用与风险管控Agent
           </h3>
           <p class="text-sm text-neutral-500 leading-relaxed text-left">
            专为企业采购场景打造的AI智能体，基于全维度企业数据，提供供应商信用评估、风险预警、合规审核、投标准入管控等一站式智能服务，支撑采购全流程决策。
           </p>
          </div>
          
          <div class="h-px bg-neutral-200 my-6">
          </div>
          
          <div class="mb-6">
           <h4 class="text-sm font-semibold text-neutral-700 mb-3">
            使用统计
           </h4>
           <div class="grid grid-cols-2 gap-3">
            <div class="card-base p-3 text-center card-hover">
             <p class="text-xs text-neutral-500 mb-1">
              互动次数
             </p>
             <p class="text-xl font-bold text-neutral-800">
              1,284
             </p>
            </div>
            <div class="card-base p-3 text-center card-hover">
             <p class="text-xs text-neutral-500 mb-1">
              API调用
             </p>
             <p class="text-xl font-bold text-neutral-800">
              5.6k
             </p>
            </div>
           </div>
          </div>
          
          
          <div class="mb-6">
           <h4 class="text-sm font-semibold text-neutral-700 mb-3">
            核心能力
           </h4>
           <div class="flex flex-wrap gap-2">
            <span class="tag-badge">
             信用评估
            </span>
            <span class="tag-badge">
             风险预警
            </span>
            <span class="tag-badge">
             合规审核
            </span>
            <span class="tag-badge">
             远程调用
            </span>
            <span class="tag-badge">
             可编排
            </span>
            <span class="tag-badge">
             T+0实时数据
            </span>
           </div>
          </div>
          
          
          <div class="mb-6">
           <h4 class="text-sm font-semibold text-neutral-700 mb-3">
            开通套餐
           </h4>
           <div class="space-y-3">
            <div class="bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-xl p-4 card-hover">
             <div class="flex justify-between items-center">
              <span class="text-sm font-semibold text-neutral-800">基础版</span>
              <span class="text-lg font-bold text-gradient">¥99<span class="text-xs text-neutral-500">/月</span></span>
             </div>
             <p class="text-xs text-neutral-500 mt-2">包含基础查询和评估功能，月调用100次</p>
             <button class="btn-primary w-full mt-3 text-xs">立即开通</button>
            </div>
            <div class="bg-gradient-to-r from-accent-blue/30 to-accent-purple/30 rounded-xl p-4 card-hover">
             <div class="flex justify-between items-center">
              <span class="text-sm font-semibold text-neutral-800">专业版</span>
              <span class="text-lg font-bold text-gradient">¥249<span class="text-xs text-neutral-500">/月</span></span>
             </div>
             <p class="text-xs text-neutral-500 mt-2">包含全部功能，无限次调用，专属技术支持</p>
             <button class="btn-primary w-full mt-3 text-xs">立即开通</button>
            </div>
           </div>
          </div>
          
         </aside>
         
        </main>
        
        
        <div class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 pb-6 pt-4">
         <div class="container mx-auto px-6">
          <div class="w-[calc(100%-280px)] mx-auto pr-0">
           <div class="bg-white border border-neutral-200 rounded-2xl p-2 shadow-input flex items-center gap-2">
            <button class="w-10 h-10 rounded-full flex items-center justify-center text-neutral-500 hover:text-accent-purple hover:bg-accent-purple/10 transition-all">
             <i class="fa-solid fa-paperclip">
             </i>
            </button>
            <input class="flex-1 px-4 py-3 text-neutral-700 placeholder-neutral-400 focus:outline-none bg-transparent" ref="chat-input" placeholder="输入您的问题，如供应商信用评估、风险预警、合规审核等" type="text"/>
            <button class="btn-primary w-10 h-10 p-0 rounded-full" ref="send-btn">
             <i class="fa-solid fa-paper-plane">
             </i>
            </button>
           </div>
           <p class="text-center text-xs text-neutral-400 mt-3">
            内容由AI生成，仅供参考
           </p>
          </div>
         </div>
        </div>
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
  console.log('AI智能体 页面加载完成')
})
</script>

<style scoped lang="scss">


@layer utilities {
            .bg-particles {
                background-color: #fff;
                background-image: 
                    radial-gradient(#a78bfa 1px, transparent 1px),
                    radial-gradient(#60a5fa 0.5px, transparent 0.5px);
                background-position: 0 0, 15px 15px;
                background-size: 60px 60px, 30px 30px;
                opacity: 0.05;
            }

            .text-gradient {
                color: transparent;
                background: linear-gradient(to right, #60a5fa, #a78bfa);
                background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .aurora-blur {
                position: absolute;
                z-index: 0;
                pointer-events: none;
                border-radius: 50%;
                opacity: 0.3;
                filter: blur(80px);
            }
        }

        @layer components {
            .btn-primary {
                @apply relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-white transition-all duration-300;

                background: linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%);
            }

            .btn-primary:hover {
                @apply shadow-glow transform -translate-y-0.5 scale-105;
            }

            .card-base {
                @apply bg-white rounded-xl border border-neutral-200 transition-all duration-300;
            }
            
            .card-hover {
                @apply hover:shadow-card hover:-translate-y-1 hover:border-accent-purple/30;
            }

            .tag-badge {
                @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20;
            }
        }

        body {
            @apply bg-white font-body text-neutral-800 overflow-x-hidden;
        }

// 页面特定样式
.pages-container {
  min-height: calc(100vh - 84px);
}


</style>
