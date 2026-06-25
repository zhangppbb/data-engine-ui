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
              <div class='aurora-blur bg-aurora-cyan w-[500px] h-[500px] top-[-100px] left-[-100px] animate-pulse-slow'></div>
              <div class='aurora-blur bg-aurora-purple w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-30'></div>
              <div class='aurora-blur bg-aurora-purple w-[600px] h-[600px] top-[40%] left-[30%] opacity-20 blur-[120px]'></div>
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
                  <nav class="hidden md:flex gap-8 text-sm font-medium flex-1 justify-center text-white">
                      <router-link to="/pages/index" class="hover:text-aurora-cyan transition-colors">首页</router-link>
                      <router-link to="/pages/apps/list" class="hover:text-aurora-cyan transition-colors">应用馆</router-link>
                      <router-link to="/pages/resources/list" class="text-aurora-cyan font-semibold">资源馆</router-link>
                      <router-link to="/pages/cases/list" class="hover:text-aurora-cyan transition-colors">案例馆</router-link>
                  </nav>
                  <div class="flex items-center gap-4">
                      <router-link to="/pages/workspace" class="text-sm font-medium hover:text-aurora-cyan transition-colors hidden md:block">工作空间</router-link>
                      
                      <button class="md:hidden text-white focus:outline-none" ref="mobile-menu-button">
                          <i class="fa-solid fa-bars text-xl"></i>
                      </button>
                      
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
                                      <span class="text-slate-400 text-sm">客户类型：</span>
                                      <span class="text-white font-medium" ref="current-client-type">投资类客户</span>
                                  </div>
                                  <div class="grid grid-cols-2 gap-2 mt-2">
                                      <button class="py-2 px-3 rounded-lg text-sm bg-white/5 border border-white/10 hover:border-aurora-cyan/50 hover:bg-aurora-cyan/10 transition client-type-option" data-type="investment">投资类客户</button>
                                      <button class="py-2 px-3 rounded-lg text-sm bg-white/5 border border-white/10 hover:border-aurora-cyan/50 hover:bg-aurora-cyan/10 transition client-type-option" data-type="market">市场类客户</button>
                                      <button class="py-2 px-3 rounded-lg text-sm bg-white/5 border border-white/10 hover:border-aurora-cyan/50 hover:bg-aurora-cyan/10 transition client-type-option" data-type="enterprise">企业类客户</button>
                                      <button class="py-2 px-3 rounded-lg text-sm bg-white/5 border border-white/10 hover:border-aurora-cyan/50 hover:bg-aurora-cyan/10 transition client-type-option" data-type="government">政府类客户</button>
                                  </div>
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
                  
                  <div class="absolute top-full left-0 w-full glass-panel-base border-t border-white/10 py-4 px-6 hidden" ref="mobile-menu">
                      <nav class="flex flex-col gap-4">
                          <router-link to="/pages/index" class="py-2 hover:text-aurora-cyan transition-colors">首页</router-link>
                          <router-link to="/pages/apps/list" class="py-2 hover:text-aurora-cyan transition-colors">应用馆</router-link>
                          <router-link to="/pages/resources/list" class="py-2 text-aurora-cyan font-semibold">资源馆</router-link>
                          <router-link to="/pages/cases/list" class="py-2 hover:text-aurora-cyan transition-colors">案例馆</router-link>
                          <router-link to="/pages/workspace" class="py-2 hover:text-aurora-cyan transition-colors">工作空间</router-link>
                      </nav>
                  </div>
              </div>
          </header>
          <main class='relative z-10 max-w-7xl mx-auto px-6 py-8'>
              
              <div class='py-2 border-b border-white/10 mb-6'>
                  <nav class='flex' aria-label='Breadcrumb'>
                      <ol class='inline-flex items-center space-x-1 md:space-x-3'>
                          <li class='inline-flex items-center'>
                              <router-link to="/pages/index" class='text-sm text-slate-400 hover:text-aurora-cyan transition-colors'>
                                  <i class='fa-solid fa-home mr-2'></i>首页
                              </router-link>
                          </li>
                          <li>
                              <div class='flex items-center'>
                                  <i class='fa-solid fa-chevron-right text-slate-500 text-xs mx-2'></i>
                                  <router-link to="/pages/resources/list" class='text-sm text-slate-400 hover:text-aurora-cyan transition-colors'>
                                      资源馆
                                  </router-link>
                              </div>
                          </li>
                          <li>
                              <div class='flex items-center'>
                                  <i class='fa-solid fa-chevron-right text-slate-500 text-xs mx-2'></i>
                                  <span class='text-sm font-medium text-aurora-cyan'>SKILL广场</span>
                              </div>
                          </li>
                      </ol>
                  </nav>
              </div>
              
              
              <section class='space-y-4 mb-8 text-center'>
                  <div>
                      <h1 class='text-4xl md:text-5xl font-bold text-white leading-tight mb-4'>
                          SKILL广场
                      </h1>
                      <h2 class='text-3xl md:text-4xl font-bold text-white leading-tight mb-4'>
                          开箱即用的行业SKILL
                      </h2>
                      <p class='text-xl text-slate-400 max-w-3xl mx-auto mb-8'>
                          让AI真正读懂中国企业
                      </p>
                      <p class='text-sm text-slate-400 max-w-3xl mx-auto mb-8'>
                          30+ 经过真实场景验证的SKILL，来自 6 个开源仓库，配套 MCP，30秒搭建一个成型报告。
                      </p>
                      <div class='flex flex-col md:flex-row gap-4 justify-center items-center mb-8'>
                          <button class='btn-primary'>
                              浏览全部SKILL
                          </button>
                          <button class='btn-secondary'>
                              查看接入指南
                          </button>
                      </div>
                      <div class='flex flex-wrap gap-3 justify-center mb-8'>
                          <span class='text-xs bg-white/10 px-3 py-1 rounded-full'>提示词 | Claude / Cursor / Windows / 百度 / Coze / CherryStudio 等平台可用</span>
                      </div>
                      <div class='flex flex-wrap gap-4 justify-center mb-8'>
                          <span class='text-xs bg-white/10 px-3 py-1 rounded-full flex items-center'><i class='fa-solid fa-fire text-aurora-red mr-1'></i> KYC 企业核验</span>
                          <span class='text-xs bg-white/10 px-3 py-1 rounded-full flex items-center'><i class='fa-solid fa-fire text-aurora-red mr-1'></i> IC Memo</span>
                          <span class='text-xs bg-white/10 px-3 py-1 rounded-full flex items-center'><i class='fa-solid fa-fire text-aurora-red mr-1'></i> AML 尽调报告</span>
                          <span class='text-xs bg-white/10 px-3 py-1 rounded-full flex items-center'><i class='fa-solid fa-fire text-aurora-red mr-1'></i> 合同审查</span>
                          <span class='text-xs bg-white/10 px-3 py-1 rounded-full flex items-center'><i class='fa-solid fa-fire text-aurora-red mr-1'></i> 供应商准入</span>
                          <span class='text-xs bg-white/10 px-3 py-1 rounded-full flex items-center'><i class='fa-solid fa-fire text-aurora-red mr-1'></i> 深度尽调报告</span>
                          <span class='text-xs bg-white/10 px-3 py-1 rounded-full flex items-center'><i class='fa-solid fa-fire text-aurora-red mr-1'></i> 企业画像速览</span>
                      </div>
                  </div>
                  <div class='grid grid-cols-2 md:grid-cols-4 gap-4'>
                      <div class='glass-panel-base rounded-xl p-6 text-center'>
                          <p class='text-2xl font-bold text-aurora-green mb-2'>30+</p>
                          <p class='text-sm text-slate-400'>可用 SKILL 总数</p>
                      </div>
                      <div class='glass-panel-base rounded-xl p-6 text-center'>
                          <p class='text-2xl font-bold text-aurora-cyan mb-2'>6</p>
                          <p class='text-sm text-slate-400'>开源 GitHub 仓</p>
                      </div>
                      <div class='glass-panel-base rounded-xl p-6 text-center'>
                          <p class='text-2xl font-bold text-aurora-purple mb-2'>34个</p>
                          <p class='text-sm text-slate-400'>风控 AI 工具变量</p>
                      </div>
                      <div class='glass-panel-base rounded-xl p-6 text-center'>
                          <p class='text-2xl font-bold text-aurora-red mb-2'>~30s</p>
                          <p class='text-sm text-slate-400'>生成一份定型报告</p>
                      </div>
                  </div>
              </section>
              
              
              <section class='mb-12'>
                  <div class='glass-panel-base rounded-xl p-8'>
                      <h3 class='text-xl font-bold text-white mb-6 flex items-center'>
                          <i class='fa-solid fa-lightbulb text-aurora-yellow mr-3'></i>
                          怎么使用 SKILL?
                      </h3>
                      <p class='text-sm text-slate-400 mb-6'>
                          三步完成，在 AI 对话中直接使用，不需要写代码
                      </p>
                      <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
                          <div class='relative'>
                              <div class='absolute -top-3 -left-3 w-8 h-8 rounded-full bg-aurora-cyan flex items-center justify-center text-void-900 font-bold'>1</div>
                              <div class='glass-panel-base rounded-xl p-6 ml-4'>
                                  <h4 class='text-lg font-bold text-white mb-3'>完成 MCP 接入</h4>
                                  <p class='text-sm text-slate-400 mb-4'>
                                      注册账号、获取 API Key，配置到你的 AI 工具。只需要把一次，所有 SKILL 共用。
                                  </p>
                                  <router-link to='/pages/resources/guide' class='text-sm text-aurora-cyan hover:text-aurora-green transition'>查看接入指南 →</router-link>
                              </div>
                          </div>
                          <div class='relative'>
                              <div class='absolute -top-3 -left-3 w-8 h-8 rounded-full bg-aurora-cyan flex items-center justify-center text-void-900 font-bold'>2</div>
                              <div class='glass-panel-base rounded-xl p-6 ml-4'>
                                  <h4 class='text-lg font-bold text-white mb-3'>在 AI 对话框挂载 SKILL</h4>
                                  <p class='text-sm text-slate-400 mb-4'>
                                      把下面这段代码发给你的 AI，它会自动加载这个 SKILL：
                                  </p>
                                  <div class='bg-void-900/80 rounded-lg p-3 mb-4 font-mono text-xs text-slate-300'>
                                      我需要打开并使用这个 skill：<br/>
                                      https://github.com/doubao<br/>
                                      /enterprise-skill
                                  </div>
                                  <p class='text-xs text-slate-500'>
                                      支持 OpenAI ChatGPT、Claude、Bard、Code 等
                                  </p>
                              </div>
                          </div>
                          <div class='relative'>
                              <div class='absolute -top-3 -left-3 w-8 h-8 rounded-full bg-aurora-cyan flex items-center justify-center text-void-900 font-bold'>3</div>
                              <div class='glass-panel-base rounded-xl p-6 ml-4'>
                                  <h4 class='text-lg font-bold text-white mb-3'>直接告诉要做什么</h4>
                                  <p class='text-sm text-slate-400 mb-4'>
                                      AI 确认加载后，像平时聊天一样说出你的需求：
                                  </p>
                                  <div class='space-y-2'>
                                      <div class='bg-void-900/80 rounded-lg p-3 font-mono text-xs text-slate-300'>
                                          帮我分析【长城汽车】的 KYC 企业核验
                                      </div>
                                      <div class='bg-void-900/80 rounded-lg p-3 font-mono text-xs text-slate-300'>
                                          拉取【腾讯公司】的工商信息和 IC Memo 深度速览
                                      </div>
                                      <div class='bg-void-900/80 rounded-lg p-3 font-mono text-xs text-slate-300'>
                                          分析【阿里巴巴】的合同风险，重点是对方主体资质和违约责任条款
                                      </div>
                                      <div class='bg-void-900/80 rounded-lg p-3 font-mono text-xs text-slate-300'>
                                          帮我研究【新能源汽车】产业链的主要供应商
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              
              
              <section class='space-y-4 mb-8'>
                  <div class='flex flex-col md:flex-row gap-4 items-center justify-between'>
                      <div class='relative w-full md:w-2/3'>
                          <div class='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
                              <i class='fa-solid fa-search text-slate-500'></i>
                          </div>
                          <input type='text' id='search-input' class='input-glass pl-12' placeholder='搜索技能名称、应用场景、功能描述...'/>
                      </div>
                      <div class='flex items-center gap-3 w-full md:w-auto'>
                          <span class='text-sm text-slate-400 whitespace-nowrap'>排序:</span>
                          <select class='glass-panel-base rounded-lg px-3 py-2 text-sm text-white bg-void-900/50 border-white/10 focus:border-aurora-purple/50 outline-none w-full md:w-auto'>
                              <option>更新时间 ↓</option>
                              <option>热度 ↓</option>
                              <option>名称 A-Z</option>
                          </select>
                      </div>
                  </div>
              </section>
              
              
              <div class='space-y-8'>
                  
                  <section class='mb-8'>
                      <div class='glass-panel-base rounded-xl p-6'>
                          <h3 class='text-lg font-bold text-white mb-6'>你是哪类用户？快速找到适合的 SKILL</h3>
                          <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                              <div class='glass-panel-base rounded-xl p-5 border-l-4 border-aurora-green hover:shadow-glow-sm transition-all duration-300'>
                                  <div class='flex items-start justify-between mb-4'>
                                      <div class='flex items-center gap-3'>
                                          <div class='w-12 h-12 rounded-lg bg-aurora-green/20 flex items-center justify-center'>
                                              <i class='fa-solid fa-landmark text-aurora-green text-xl'></i>
                                          </div>
                                          <div>
                                              <h4 class='text-lg font-bold text-white'>银行·合规风控</h4>
                                          </div>
                                      </div>
                                      <span class='bg-aurora-green/20 text-aurora-green text-sm px-3 py-1 rounded-full'>8 个 SKILL</span>
                                  </div>
                                  <p class='text-sm text-slate-400 mb-4'>
                                      开户 KYC、AML 反洗钱、授信尽调等人工重灾区，调整后指标 2 小时以下，作业成本率下降。
                                  </p>
                              </div>
                              <div class='glass-panel-base rounded-xl p-5 border-l-4 border-aurora-cyan hover:shadow-glow-sm transition-all duration-300'>
                                  <div class='flex items-start justify-between mb-4'>
                                      <div class='flex items-center gap-3'>
                                          <div class='w-12 h-12 rounded-lg bg-aurora-cyan/20 flex items-center justify-center'>
                                              <i class='fa-solid fa-chart-line text-aurora-cyan text-xl'></i>
                                          </div>
                                          <div>
                                              <h4 class='text-lg font-bold text-white'>投资人 / FA</h4>
                                          </div>
                                      </div>
                                      <span class='bg-aurora-cyan/20 text-aurora-cyan text-sm px-3 py-1 rounded-full'>8 个 SKILL</span>
                                  </div>
                                  <p class='text-sm text-slate-400 mb-4'>
                                      IC Memo 效率王、工商、司法、财产分散在不同平台，缺乏 AI 自动融合，项目资料根本来不及细看。
                                  </p>
                              </div>
                              <div class='glass-panel-base rounded-xl p-5 border-l-4 border-aurora-purple hover:shadow-glow-sm transition-all duration-300'>
                                  <div class='flex items-start justify-between mb-4'>
                                      <div class='flex items-center gap-3'>
                                          <div class='w-12 h-12 rounded-lg bg-aurora-purple/20 flex items-center justify-center'>
                                              <i class='fa-solid fa-balance-scale text-aurora-purple text-xl'></i>
                                          </div>
                                          <div>
                                              <h4 class='text-lg font-bold text-white'>律师·法务</h4>
                                          </div>
                                      </div>
                                      <span class='bg-aurora-purple/20 text-aurora-purple text-sm px-3 py-1 rounded-full'>9 个 SKILL</span>
                                  </div>
                                  <p class='text-sm text-slate-400 mb-4'>
                                      合同主体线索靠人工搜索系统不全，AI 合同存在幻觉风险，对方法人状态在裁判中另有佐证。
                                  </p>
                              </div>
                              <div class='glass-panel-base rounded-xl p-5 border-l-4 border-aurora-red hover:shadow-glow-sm transition-all duration-300'>
                                  <div class='flex items-start justify-between mb-4'>
                                      <div class='flex items-center gap-3'>
                                          <div class='w-12 h-12 rounded-lg bg-aurora-red/20 flex items-center justify-center'>
                                              <i class='fa-solid fa-truck text-aurora-red text-xl'></i>
                                          </div>
                                          <div>
                                              <h4 class='text-lg font-bold text-white'>采购·供应链</h4>
                                          </div>
                                      </div>
                                      <span class='bg-aurora-red/20 text-aurora-red text-sm px-3 py-1 rounded-full'>4 个 SKILL</span>
                                  </div>
                                  <p class='text-sm text-slate-400 mb-4'>
                                      供应商准入、资质审核、中国企业财务透明度低，风险暴露严重滞后，供应链断链时往往已追悔莫及。
                                  </p>
                              </div>
                          </div>
                      </div>
                  </section>
                  
                  
                  <section class='mb-8'>
                      <div class='flex flex-wrap gap-3'>
                          <button class='filter-tag active' data-category='all'>全部</button>
                          <button class='filter-tag' data-category='bank'>银行合规</button>
                          <button class='filter-tag' data-category='investment'>投资尽调</button>
                          <button class='filter-tag' data-category='legal'>法律服务</button>
                          <button class='filter-tag' data-category='supply'>供应链</button>
                      </div>
                  </section>
                  
                  
                  <div class='grid grid-cols-1 md:grid-cols-3 gap-4' id='skill-list'>
                      
                      <div class='card-skill' data-category='bank'>
                          <div class='flex items-start justify-between mb-3'>
                              <h4 class='text-lg font-bold text-white'>KYC 企业核验</h4>
                              <span class='badge-skill'>示例报告</span>
                          </div>
                          <p class='text-sm text-slate-400 mb-4'>
                              银行开户和授信审批的核心合规工具，输入企业名称，AI 自动完成在库真实核验、股权穿透核查、34 类司法经营风险扫描，30 秒输出符合 FATF / PBOC / CBIRC 标准的合规报告，替代传统客户经理 2-3 小时人工尽调流程。
                          </p>
                      </div>
                      
                      <div class='card-skill' data-category='bank'>
                          <div class='flex items-start justify-between mb-3'>
                              <h4 class='text-lg font-bold text-white'>AML 客户尽职调查</h4>
                              <span class='badge-skill'>示例报告</span>
                          </div>
                          <p class='text-sm text-slate-400 mb-4'>
                              客户开户与增强型尽职调查（EDD）的全流程工具，自动识别政治公众人物（PEP）、穿透间接最终受益人（UBO）及持股比例，六维度风险与市场风险扫描，输出符合 FATF Recommendation 10/12 的标准化风险报告，适用于银行公开户自动审批率。
                          </p>
                      </div>
                      
                      <div class='card-skill' data-category='bank'>
                          <div class='flex items-start justify-between mb-3'>
                              <h4 class='text-lg font-bold text-white'>授信支持报告</h4>
                              <span class='badge-skill'>示例报告</span>
                          </div>
                          <p class='text-sm text-slate-400 mb-4'>
                              信贷审批流程中的企业全貌尽调工具。授信前自动完成目标企业工商登记、实际控制人、经营异常记录与司法涉诉状况，输出标准体检报告式调查稿，帮助审批人在放款前全面掌握企业风险画像，支撑有风控的授信决策。
                          </p>
                      </div>
                      
                      <div class='card-skill' data-category='bank'>
                          <div class='flex items-start justify-between mb-3'>
                              <h4 class='text-lg font-bold text-white'>交易对手风险评估</h4>
                              <span class='badge-skill'>示例报告</span>
                          </div>
                          <p class='text-sm text-slate-400 mb-4'>
                              贸易融资业务中对交易对手的多维度评估工具。整合企业进出口信用评级、行政处罚记录、失信被执行情况等经营资信信息，生成在途风险、带融资资金到账以及订单完成率风险评估，降低交易欺诈与履约风险。
                          </p>
                      </div>
                      
                      <div class='card-skill' data-category='legal'>
                          <div class='flex items-start justify-between mb-3'>
                              <h4 class='text-lg font-bold text-white'>受益所有人识别</h4>
                              <span class='badge-skill'>示例报告</span>
                          </div>
                          <p class='text-sm text-slate-400 mb-4'>
                              反洗钱合规场景下的股权穿透工具。自动对标的多层股权结构，查明最终受益人（UBO）及实际控制比例，识别隐藏的控制关系，满足监管合规要求，适用于：需求采购企业“带污点”与高风险客户识别。
                          </p>
                      </div>
                      
                      <div class='card-skill' data-category='legal'>
                          <div class='flex items-start justify-between mb-3'>
                              <h4 class='text-lg font-bold text-white'>贸易融合合规核查</h4>
                              <span class='badge-skill'>示例报告</span>
                          </div>
                          <p class='text-sm text-slate-400 mb-4'>
                              跨境贸易与国际结算场景下的合规准入工具。对进出口企业进行全面核查，整合关信评价等级、行业经营资质、进出口资信与与国际制裁名单筛查，帮助贸易企业避免因合规问题导致的业务中断与损失。
                          </p>
                      </div>
                      
                      <div class='card-skill' data-category='bank'>
                          <div class='flex items-start justify-between mb-3'>
                              <h4 class='text-lg font-bold text-white'>贷后风险定期监控</h4>
                              <span class='badge-skill'>示例报告</span>
                          </div>
                          <p class='text-sm text-slate-400 mb-4'>
                              贷后管理中对存量信贷客户的持续风险监控工具。对贷款企业进行画像体检、失信被执行、经营异常登记、法定代表人变更等关键风险信号，一旦出现异常即推送预警，帮助及时采取措施。
                          </p>
                      </div>
                      
                      <div class='card-skill' data-category='investment'>
                          <div class='flex items-start justify-between mb-3'>
                              <h4 class='text-lg font-bold text-white'>机构尽调报告</h4>
                              <span class='badge-skill'>示例报告</span>
                          </div>
                          <p class='text-sm text-slate-400 mb-4'>
                              机构投资者尽调前的快速信息工具。全面核查被尽调企业的信用状况、资产规模、股权结构、动产抵押与土地抵押情况，综合评估担保能力与违约风险，为投资决策提供可靠支撑。
                          </p>
                      </div>
                  </div>
                  
                  
                  <div class='flex justify-center pt-8'>
                      <div class='flex items-center gap-2'>
                          <button class='w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-50' disabled>
                              <i class='fa-solid fa-chevron-left'></i>
                          </button>
                          <button class='w-10 h-10 rounded-lg bg-skill-gradient flex items-center justify-center text-white font-bold shadow-glow-purple'>1</button>
                          <button class='w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-white hover:border-aurora-purple/50'>2</button>
                          <button class='w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-white hover:border-aurora-purple/50'>3</button>
                          <span class='text-slate-500'>...</span>
                          <button class='w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-white hover:border-aurora-purple/50'>13</button>
                          <button class='w-10 h-10 rounded-lg glass-panel-base flex items-center justify-center text-slate-400 hover:text-white'>
                              <i class='fa-solid fa-chevron-right'></i>
                          </button>
                      </div>
                  </div>
                  <div class='text-center text-sm text-slate-400'>
                      共 <span class='text-aurora-purple font-semibold'>30+</span> 个Skill技能
                  </div>
                  
                  
                  <section class='mb-8'>
                      <h3 class='text-lg font-bold text-white mb-4'>6 个开源仓库</h3>
                      <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                          <div class='glass-panel-base rounded-xl p-5 hover:shadow-glow-sm transition-all duration-300'>
                              <div class='flex items-center gap-3 mb-3'>
                                  <div class='w-10 h-10 rounded-lg bg-aurora-purple/20 flex items-center justify-center'>
                                      <i class='fa-brands fa-github text-aurora-purple text-xl'></i>
                                  </div>
                                  <h4 class='text-lg font-bold text-white'>enterprise-skill</h4>
                              </div>
                              <p class='text-sm text-slate-400 mb-3'>
                                  企业级技能集合，包含 KYC、尽调、合规等核心功能
                              </p>
                              <router-link to='/pages/resources/skill/repo' class='text-sm text-aurora-cyan hover:text-aurora-green transition'>查看仓库 →</router-link>
                          </div>
                          <div class='glass-panel-base rounded-xl p-5 hover:shadow-glow-sm transition-all duration-300'>
                              <div class='flex items-center gap-3 mb-3'>
                                  <div class='w-10 h-10 rounded-lg bg-aurora-purple/20 flex items-center justify-center'>
                                      <i class='fa-brands fa-github text-aurora-purple text-xl'></i>
                                  </div>
                                  <h4 class='text-lg font-bold text-white'>financial-skill</h4>
                              </div>
                              <p class='text-sm text-slate-400 mb-3'>
                                  金融领域专用技能，涵盖授信、风控、合规等场景
                              </p>
                              <router-link to='/pages/resources/skill/repo' class='text-sm text-aurora-cyan hover:text-aurora-green transition'>查看仓库 →</router-link>
                          </div>
                          <div class='glass-panel-base rounded-xl p-5 hover:shadow-glow-sm transition-all duration-300'>
                              <div class='flex items-center gap-3 mb-3'>
                                  <div class='w-10 h-10 rounded-lg bg-aurora-purple/20 flex items-center justify-center'>
                                      <i class='fa-brands fa-github text-aurora-purple text-xl'></i>
                                  </div>
                                  <h4 class='text-lg font-bold text-white'>legal-skill</h4>
                              </div>
                              <p class='text-sm text-slate-400 mb-3'>
                                  法律服务技能，合同审查、法律风险评估等功能
                              </p>
                              <router-link to='/pages/resources/skill/repo' class='text-sm text-aurora-cyan hover:text-aurora-green transition'>查看仓库 →</router-link>
                          </div>
                      </div>
                  </section>
                  
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
  console.log('技能市场 页面加载完成')
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

            .text-gradient-skill {
                color: transparent;
                background: linear-gradient(to right, #7000ff, #a29bfe);
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

            .bg-grid-white {
                background-image: linear-gradient(to right, rgb(255 255 255 / 5%) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgb(255 255 255 / 5%) 1px, transparent 1px);
                background-size: 40px 40px;
            }

            .tag-badge {
                @apply inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border;
            }

            .filter-sidebar-item.active {
                color: #a29bfe;
                background: rgb(112 0 255 / 15%);
                border-color: rgb(112 0 255 / 60%);
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

            .btn-primary-purple {
                @apply relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-white transition-all duration-300;

                background: linear-gradient(90deg, #7000ff 0%, #a29bfe 100%);
            }

            .btn-primary-purple:hover {
                @apply shadow-glow-purple transform -translate-y-0.5 scale-105;
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

            .card-skill {
                @apply glass-panel-base rounded-xl p-5 transition-all duration-300 hover:bg-white/5 hover:border-aurora-purple/40 hover:shadow-glow-purple cursor-pointer border-l-4 border-l-aurora-purple;
            }

            .badge {
                @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
            }

            .badge-new {
                @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-purple to-aurora-cyan text-white animate-pulse;
            }

            .badge-skill {
                @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-aurora-purple/20 border border-aurora-purple/40 text-aurora-purple;
            }

            .input-glass {
                @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
            }

            .filter-tag {
                @apply px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border border-white/10 bg-white/5 text-slate-300;
            }

            .filter-tag.active {
                @apply bg-skill-gradient text-white border-transparent shadow-glow-purple;
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
