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
          
          <header class="relative z-10 glass-panel-base border-x-0 border-t-0 sticky top-0 bg-void-900/80">
              <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                  <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center shadow-glow-sm">
                          <i class="fa-solid fa-cube text-void-900 text-lg"></i>
                      </div>
                      <div class="flex flex-col">
                          <span class="text-xl font-bold text-white tracking-wide">数擎平台</span>
                          <span class="opacity-50 text-[10px] tracking-wide">企业级数据服务平台</span>
                      </div>
                  </div>
                  <nav class="hidden md:flex gap-6 text-sm font-medium">
                      <router-link to="/pages/index" class="hover:text-aurora-cyan transition-colors">首页</router-link>
                      <router-link to="/pages/apps/list" class="hover:text-aurora-cyan transition-colors">应用馆</router-link>
                      <router-link to="/pages/resources/list" class="text-aurora-green font-semibold">资源馆</router-link>
                      <router-link to="/pages/cases/list" class="hover:text-aurora-cyan transition-colors">案例馆</router-link>
                      <router-link to="/pages/workspace" class="hover:text-aurora-cyan transition-colors">工作空间</router-link>
                      <router-link to="/pages/profile" class="hover:text-aurora-cyan transition-colors">个人中心</router-link>
                  </nav>
                  <div class="flex items-center gap-4">
                      <div class="hidden md:flex items-center gap-2 text-sm">
                          <span class="text-slate-400">剩余点数：</span>
                          <span class="text-aurora-green font-bold">1,234</span>
                          <button class="ml-2 px-3 py-1 rounded-full text-xs bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30 hover:bg-aurora-cyan/30 transition">充值</button>
                      </div>
                      <button class="btn-primary py-2 px-6">免费试用</button>
                  </div>
              </div>
          </header>
          <main class='relative z-10 max-w-7xl mx-auto px-6 py-12'>
              
              <div class="mb-8">
                  <nav class="flex" aria-label="Breadcrumb">
                      <ol class="inline-flex items-center space-x-1 md:space-x-3">
                          <li class="inline-flex items-center">
                              <router-link to="/pages/index" class="text-sm text-slate-400 hover:text-aurora-purple transition-colors">
                                  <i class="fa-solid fa-home mr-2"></i>首页
                              </router-link>
                          </li>
                          <li>
                              <div class="flex items-center">
                                  <i class="fa-solid fa-chevron-right text-slate-500 text-xs mx-2"></i>
                                  <router-link to="/pages/resources/list" class="text-sm text-slate-400 hover:text-aurora-purple transition-colors">资源馆</router-link>
                              </div>
                          </li>
                          <li>
                              <div class="flex items-center">
                                  <i class="fa-solid fa-chevron-right text-slate-500 text-xs mx-2"></i>
                                  <router-link to="/pages/resources/skill-market" class="text-sm text-slate-400 hover:text-aurora-purple transition-colors">Skill广场</router-link>
                              </div>
                          </li>
                          <li>
                              <div class="flex items-center">
                                  <i class="fa-solid fa-chevron-right text-slate-500 text-xs mx-2"></i>
                                  <span class="text-sm font-medium text-aurora-purple">企业竞品综合分析Skill</span>
                              </div>
                          </li>
                      </ol>
                  </nav>
              </div>
              
              <section class="mb-10">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div class="flex-1">
                          <h1 class="text-3xl md:text-4xl font-bold text-white leading-tight">
                              企业竞品综合分析Skill
                          </h1>
                          <p class="text-xs font-mono text-slate-500 mt-2">competitor_comprehensive_analysis</p>
                          <p class="text-lg text-slate-400 mt-4 max-w-3xl">
                              针对目标企业与行业竞品进行多维度对比分析，自动生成完整分析报告，包含市场占有率、核心竞争力对比、优劣势分析等内容
                          </p>
                      </div>
                      <div class="flex flex-col gap-4 w-full md:w-auto">
                          <div class="flex flex-wrap gap-2">
                              <span class="badge-new">新增</span>
                              <span class="badge-skill">AI技能</span>
                              <span class="badge-skill">可复用</span>
                          </div>
                          <button class="btn-primary-purple w-full md:w-auto">立即调用</button>
                      </div>
                  </div>
              </section>
              
              <div class="glass-panel-base rounded-xl mb-6">
                  <div class="flex flex-wrap border-b border-white/10">
                      <button class="tab-btn px-6 py-4 font-medium text-aurora-purple border-b-2 border-aurora-purple" data-tab="parameters">参数说明</button>
                      <button class="tab-btn px-6 py-4 font-medium text-slate-400 hover:text-white transition-colors" data-tab="usage">使用方式</button>
                      <button class="tab-btn px-6 py-4 font-medium text-slate-400 hover:text-white transition-colors" data-tab="response">响应示例</button>
                      <button class="tab-btn px-6 py-4 font-medium text-slate-400 hover:text-white transition-colors" data-tab="errors">错误码</button>
                      <button class="tab-btn px-6 py-4 font-medium text-slate-400 hover:text-white transition-colors" data-tab="pricing">价格方案</button>
                      <button class="tab-btn px-6 py-4 font-medium text-slate-400 hover:text-white transition-colors" data-tab="test">测试调用</button>
                  </div>
              </div>
              
              <div class="glass-panel-base rounded-xl p-6 mb-10">
                  
                  <div class="tab-content active" ref="parameters">
                      <h3 class="text-xl font-bold text-white mb-4">请求参数</h3>
                      <div class="overflow-x-auto">
                          <table class="w-full text-left">
                              <thead>
                                  <tr class="border-b border-white/10">
                                      <th class="py-3 px-4 font-semibold text-white">参数名</th>
                                      <th class="py-3 px-4 font-semibold text-white">类型</th>
                                      <th class="py-3 px-4 font-semibold text-white">必填</th>
                                      <th class="py-3 px-4 font-semibold text-white">描述</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr class="border-b border-white/5 hover:bg-white/5">
                                      <td class="py-3 px-4 font-mono text-sm">company_name</td>
                                      <td class="py-3 px-4">string</td>
                                      <td class="py-3 px-4 text-aurora-purple">是</td>
                                      <td class="py-3 px-4">目标企业名称</td>
                                  </tr>
                                  <tr class="border-b border-white/5 hover:bg-white/5">
                                      <td class="py-3 px-4 font-mono text-sm">industry</td>
                                      <td class="py-3 px-4">string</td>
                                      <td class="py-3 px-4 text-slate-400">否</td>
                                      <td class="py-3 px-4">行业分类</td>
                                  </tr>
                                  <tr class="border-b border-white/5 hover:bg-white/5">
                                      <td class="py-3 px-4 font-mono text-sm">competitors</td>
                                      <td class="py-3 px-4">array</td>
                                      <td class="py-3 px-4 text-slate-400">否</td>
                                      <td class="py-3 px-4">竞品企业名称列表</td>
                                  </tr>
                                  <tr class="border-b border-white/5 hover:bg-white/5">
                                      <td class="py-3 px-4 font-mono text-sm">analysis_dimensions</td>
                                      <td class="py-3 px-4">array</td>
                                      <td class="py-3 px-4 text-slate-400">否</td>
                                      <td class="py-3 px-4">分析维度，默认包含市场、产品、技术、财务</td>
                                  </tr>
                                  <tr class="hover:bg-white/5">
                                      <td class="py-3 px-4 font-mono text-sm">output_format</td>
                                      <td class="py-3 px-4">string</td>
                                      <td class="py-3 px-4 text-slate-400">否</td>
                                      <td class="py-3 px-4">输出格式，可选值：json、markdown、html</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <h3 class="text-xl font-bold text-white mt-8 mb-4">技能能力</h3>
                      <div class="space-y-4">
                          <div class="glass-panel-base rounded-lg p-4 border border-aurora-purple/20">
                              <h4 class="font-semibold text-aurora-purple mb-2">分析维度</h4>
                              <ul class="list-disc list-inside space-y-2 text-sm text-slate-300">
                                  <li>市场占有率分析</li>
                                  <li>核心竞争力对比</li>
                                  <li>产品功能对比</li>
                                  <li>技术实力评估</li>
                                  <li>财务状况分析</li>
                                  <li>发展趋势预测</li>
                              </ul>
                          </div>
                          <div class="glass-panel-base rounded-lg p-4 border border-aurora-purple/20">
                              <h4 class="font-semibold text-aurora-purple mb-2">输出内容</h4>
                              <ul class="list-disc list-inside space-y-2 text-sm text-slate-300">
                                  <li>完整分析报告</li>
                                  <li>竞争优劣势分析</li>
                                  <li>市场定位建议</li>
                                  <li>战略发展建议</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  
                  <div class="tab-content" ref="usage">
                      <h3 class="text-xl font-bold text-white mb-6">使用方式</h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                          
                          <div class="glass-panel-base rounded-xl p-6 border border-aurora-cyan/20 hover:border-aurora-cyan/40 transition-all">
                              <div class="flex items-center gap-4 mb-4">
                                  <div class="w-12 h-12 rounded-full bg-aurora-cyan/20 flex items-center justify-center">
                                      <i class="fa-solid fa-download text-aurora-cyan text-xl"></i>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">静态文件下载</h4>
                              </div>
                              <p class="text-sm text-slate-300 mb-4">
                                  下载技能代码包，部署到本地或代码托管平台（如GitHub、GitLab），自主管理和运行。
                              </p>
                              <div class="space-y-3 mb-6">
                                  <div class="flex items-center justify-between">
                                      <span class="text-sm text-slate-400">文件格式</span>
                                      <span class="text-sm font-mono">.zip</span>
                                  </div>
                                  <div class="flex items-center justify-between">
                                      <span class="text-sm text-slate-400">文件大小</span>
                                      <span class="text-sm font-mono">2.5 MB</span>
                                  </div>
                                  <div class="flex items-center justify-between">
                                      <span class="text-sm text-slate-400">最后更新</span>
                                      <span class="text-sm font-mono">2024-04-01</span>
                                  </div>
                              </div>
                              <div class="flex gap-3">
                                  <button class="btn-primary-purple flex-1 py-2">
                                      <i class="fa-solid fa-download mr-2"></i> 下载代码包
                                  </button>
                                  <a href="#" class="btn-secondary py-2 px-4">
                                      <i class="fa-brands fa-github mr-2"></i> 查看源码
                                  </a>
                              </div>
                          </div>
                          
                          <div class="glass-panel-base rounded-xl p-6 border border-aurora-green/20 hover:border-aurora-green/40 transition-all">
                              <div class="flex items-center gap-4 mb-4">
                                  <div class="w-12 h-12 rounded-full bg-aurora-green/20 flex items-center justify-center">
                                      <i class="fa-solid fa-cloud text-aurora-green text-xl"></i>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">远程MCP调用</h4>
                              </div>
                              <p class="text-sm text-slate-300 mb-4">
                                  通过MCP（微服务编排平台）远程调用技能，无需本地部署，直接使用平台提供的API接口。
                              </p>
                              <div class="space-y-3 mb-6">
                                  <div class="flex items-center justify-between">
                                      <span class="text-sm text-slate-400">接口类型</span>
                                      <span class="text-sm font-mono">RESTful API</span>
                                  </div>
                                  <div class="flex items-center justify-between">
                                      <span class="text-sm text-slate-400">响应时间</span>
                                      <span class="text-sm font-mono">2-5s</span>
                                  </div>
                                  <div class="flex items-center justify-between">
                                      <span class="text-sm text-slate-400">可用性</span>
                                      <span class="text-sm font-mono">99.9%</span>
                                  </div>
                              </div>
                              <div class="flex gap-3">
                                  <button class="btn-primary flex-1 py-2">
                                      <i class="fa-solid fa-play mr-2"></i> 立即调用
                                  </button>
                                  <router-link to="/pages/resources/mcp-market" class="btn-secondary py-2 px-4">
                                      <i class="fa-solid fa-link mr-2"></i> 查看MCP
                                  </router-link>
                              </div>
                          </div>
                      </div>
                      <div class="mt-6 glass-panel-base rounded-lg p-4 border border-white/10">
                          <h4 class="font-semibold text-white mb-3">使用建议</h4>
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                              <div>
                                  <h5 class="font-medium text-aurora-cyan mb-2">静态文件下载</h5>
                                  <ul class="list-disc list-inside space-y-1">
                                      <li>适合需要自定义和二次开发的场景</li>
                                      <li>可以完全控制部署环境和资源</li>
                                      <li>需要自行维护和更新代码</li>
                                  </ul>
                              </div>
                              <div>
                                  <h5 class="font-medium text-aurora-green mb-2">远程MCP调用</h5>
                                  <ul class="list-disc list-inside space-y-1">
                                      <li>适合快速集成和使用的场景</li>
                                      <li>无需关心底层实现和维护</li>
                                      <li>按使用量计费，成本可控</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="tab-content" ref="response">
                      <h3 class="text-xl font-bold text-white mb-4">成功响应</h3>
                      <div class="glass-panel-base rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6">
      <pre class="text-slate-300">{
        "code": 200,
        "message": "success",
        "data": {
          "skill_name": "企业竞品综合分析Skill",
          "company_name": "某科技有限公司",
          "industry": "人工智能",
          "competitors": ["竞品公司A", "竞品公司B"],
          "analysis_result": {
            "market_share": {
              "某科技有限公司": 35,
              "竞品公司A": 28,
              "竞品公司B": 22
            },
            "strengths": ["技术创新能力强", "市场拓展速度快"],
            "weaknesses": ["品牌知名度有待提升", "海外市场份额较小"],
            "recommendations": ["加强品牌建设", "拓展海外市场"]
          },
          "report_url": "https://api.shuqing.com/reports/12345",
          "timestamp": 1712735400000
        }
      }</pre>
                      </div>
                      <h3 class="text-xl font-bold text-white mb-4">详细报告示例</h3>
                      <div class="glass-panel-base rounded-lg p-4 mb-6">
                          <h4 class="font-semibold text-aurora-purple mb-3">企业竞品综合分析报告</h4>
                          <p class="text-sm text-slate-300 mb-4">
                              <strong>1. 市场占有率分析</strong><br />
                              某科技有限公司在人工智能领域的市场占有率为35%，位居行业第一。竞品公司A和B分别为28%和22%。
                          </p>
                          <p class="text-sm text-slate-300 mb-4">
                              <strong>2. 核心竞争力对比</strong><br />
                              某科技有限公司在技术创新和市场拓展方面具有明显优势，但在品牌知名度和海外市场方面仍有提升空间。
                          </p>
                          <p class="text-sm text-slate-300">
                              <strong>3. 战略建议</strong><br />
                              建议加强品牌建设，提升品牌知名度；同时积极拓展海外市场，特别是东南亚和欧洲市场。
                          </p>
                      </div>
                  </div>
                  
                  <div class="tab-content" ref="errors">
                      <h3 class="text-xl font-bold text-white mb-4">错误码说明</h3>
                      <div class="overflow-x-auto">
                          <table class="w-full text-left">
                              <thead>
                                  <tr class="border-b border-white/10">
                                      <th class="py-3 px-4 font-semibold text-white">错误码</th>
                                      <th class="py-3 px-4 font-semibold text-white">描述</th>
                                      <th class="py-3 px-4 font-semibold text-white">解决方案</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr class="border-b border-white/5 hover:bg-white/5">
                                      <td class="py-3 px-4 font-mono text-sm">400</td>
                                      <td class="py-3 px-4">参数错误</td>
                                      <td class="py-3 px-4">检查必填参数是否正确</td>
                                  </tr>
                                  <tr class="border-b border-white/5 hover:bg-white/5">
                                      <td class="py-3 px-4 font-mono text-sm">404</td>
                                      <td class="py-3 px-4">企业信息不存在</td>
                                      <td class="py-3 px-4">检查企业名称是否正确</td>
                                  </tr>
                                  <tr class="border-b border-white/5 hover:bg-white/5">
                                      <td class="py-3 px-4 font-mono text-sm">429</td>
                                      <td class="py-3 px-4">请求频率过高</td>
                                      <td class="py-3 px-4">降低请求频率，遵守API调用限制</td>
                                  </tr>
                                  <tr class="border-b border-white/5 hover:bg-white/5">
                                      <td class="py-3 px-4 font-mono text-sm">500</td>
                                      <td class="py-3 px-4">服务器内部错误</td>
                                      <td class="py-3 px-4">稍后重试或联系技术支持</td>
                                  </tr>
                                  <tr class="hover:bg-white/5">
                                      <td class="py-3 px-4 font-mono text-sm">503</td>
                                      <td class="py-3 px-4">服务暂不可用</td>
                                      <td class="py-3 px-4">稍后重试或查看服务状态</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  
                  <div class="tab-content" ref="pricing">
                      <h3 class="text-xl font-bold text-white mb-6">价格方案</h3>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div class="glass-panel-base rounded-xl p-6 border border-white/10 hover:border-aurora-purple/30 transition-all">
                              <div class="text-center mb-6">
                                  <h4 class="text-lg font-bold text-white mb-2">基础版</h4>
                                  <p class="text-3xl font-bold text-aurora-purple">¥0</p>
                                  <p class="text-sm text-slate-400">/ 每月</p>
                              </div>
                              <ul class="space-y-3 mb-6">
                                  <li class="flex items-center gap-2">
                                      <i class="fa-solid fa-check text-aurora-purple"></i>
                                      <span>每月10次调用</span>
                                  </li>
                                  <li class="flex items-center gap-2">
                                      <i class="fa-solid fa-check text-aurora-purple"></i>
                                      <span>基础分析维度</span>
                                  </li>
                                  <li class="flex items-center gap-2 text-slate-500">
                                      <i class="fa-solid fa-times"></i>
                                      <span>详细报告</span>
                                  </li>
                                  <li class="flex items-center gap-2 text-slate-500">
                                      <i class="fa-solid fa-times"></i>
                                      <span>API支持</span>
                                  </li>
                              </ul>
                              <button class="btn-secondary w-full">免费使用</button>
                          </div>
                          <div class="glass-panel-base rounded-xl p-6 border-2 border-aurora-purple/50 shadow-glow-purple relative">
                              <div class="absolute top-0 right-0 bg-aurora-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                  推荐
                              </div>
                              <div class="text-center mb-6">
                                  <h4 class="text-lg font-bold text-white mb-2">专业版</h4>
                                  <p class="text-3xl font-bold text-aurora-purple">¥1999</p>
                                  <p class="text-sm text-slate-400">/ 每月</p>
                              </div>
                              <ul class="space-y-3 mb-6">
                                  <li class="flex items-center gap-2">
                                      <i class="fa-solid fa-check text-aurora-purple"></i>
                                      <span>每月100次调用</span>
                                  </li>
                                  <li class="flex items-center gap-2">
                                      <i class="fa-solid fa-check text-aurora-purple"></i>
                                      <span>完整分析维度</span>
                                  </li>
                                  <li class="flex items-center gap-2">
                                      <i class="fa-solid fa-check text-aurora-purple"></i>
                                      <span>详细报告生成</span>
                                  </li>
                                  <li class="flex items-center gap-2">
                                      <i class="fa-solid fa-check text-aurora-purple"></i>
                                      <span>优先API支持</span>
                                  </li>
                              </ul>
                              <button class="btn-primary-purple w-full">立即购买</button>
                          </div>
                          <div class="glass-panel-base rounded-xl p-6 border border-white/10 hover:border-aurora-purple/30 transition-all">
                              <div class="text-center mb-6">
                                  <h4 class="text-lg font-bold text-white mb-2">企业版</h4>
                                  <p class="text-3xl font-bold text-aurora-purple">¥9999</p>
                                  <p class="text-sm text-slate-400">/ 每月</p>
                              </div>
                              <ul class="space-y-3 mb-6">
                                  <li class="flex items-center gap-2">
                                      <i class="fa-solid fa-check text-aurora-purple"></i>
                                      <span>无限次调用</span>
                                  </li>
                                  <li class="flex items-center gap-2">
                                      <i class="fa-solid fa-check text-aurora-purple"></i>
                                      <span>高级分析维度</span>
                                  </li>
                                  <li class="flex items-center gap-2">
                                      <i class="fa-solid fa-check text-aurora-purple"></i>
                                      <span>定制化报告</span>
                                  </li>
                                  <li class="flex items-center gap-2">
                                      <i class="fa-solid fa-check text-aurora-purple"></i>
                                      <span>专属技术支持</span>
                                  </li>
                              </ul>
                              <button class="btn-secondary w-full">联系销售</button>
                          </div>
                      </div>
                  </div>
                  
                  <div class="tab-content" ref="test">
                      <h3 class="text-xl font-bold text-white mb-4">测试调用</h3>
                      <div class="space-y-4">
                          <div>
                              <label class="block text-sm font-medium text-white mb-2">目标企业名称</label>
                              <input type="text" class="input-glass w-full" placeholder="请输入目标企业名称" value="某科技有限公司" />
                          </div>
                          <div>
                              <label class="block text-sm font-medium text-white mb-2">行业分类（选填）</label>
                              <input type="text" class="input-glass w-full" placeholder="请输入行业分类" value="人工智能" />
                          </div>
                          <div>
                              <label class="block text-sm font-medium text-white mb-2">竞品企业（选填）</label>
                              <input type="text" class="input-glass w-full" placeholder="请输入竞品企业名称，多个以逗号分隔" value="竞品公司A, 竞品公司B" />
                          </div>
                          <div>
                              <label class="block text-sm font-medium text-white mb-2">分析维度</label>
                              <select class="glass-panel-base rounded-lg px-3 py-3 text-sm text-white bg-void-900/50 border-white/10 focus:border-aurora-purple/50 outline-none w-full">
                                  <option>全部维度</option>
                                  <option>市场分析</option>
                                  <option>产品分析</option>
                                  <option>技术分析</option>
                                  <option>财务分析</option>
                              </select>
                          </div>
                          <button class="btn-primary-purple w-full">发起测试调用</button>
                          <div class="mt-6 glass-panel-base rounded-lg p-4 font-mono text-sm overflow-x-auto">
      <pre class="text-slate-300">// 测试调用结果将显示在这里
      // 示例响应：
      {
        "code": 200,
        "message": "success",
        "data": {
          "skill_name": "企业竞品综合分析Skill",
          "company_name": "某科技有限公司",
          "analysis_result": {
            "market_share": {
              "某科技有限公司": 35,
              "竞品公司A": 28,
              "竞品公司B": 22
            },
            "strengths": ["技术创新能力强", "市场拓展速度快"],
            "weaknesses": ["品牌知名度有待提升", "海外市场份额较小"]
          }
        }
      }</pre>
                          </div>
                      </div>
                  </div>
              </div>
              
              <section class="mb-10">
                  <h2 class="text-2xl font-bold text-white mb-6">相关Skill技能</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div class="card-glass cursor-pointer hover:border-aurora-purple/30">
                          <h4 class="text-lg font-bold text-white mb-2">行业市场规模预测Skill</h4>
                          <p class="text-xs font-mono text-slate-500 mb-3">industry_market_size_forecast</p>
                          <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                              根据历史数据和行业趋势，预测未来5年市场规模增长率，给出专业分析结论
                          </p>
                          <div class="flex flex-wrap gap-2">
                              <span class="badge-skill">AI技能</span>
                              <span class="badge-skill">可复用</span>
                              <span class="badge-skill">市场分析</span>
                          </div>
                      </div>
                      <div class="card-glass cursor-pointer hover:border-aurora-purple/30">
                          <h4 class="text-lg font-bold text-white mb-2">产业链上下游图谱构建Skill</h4>
                          <p class="text-xs font-mono text-slate-500 mb-3">industrial_chain_graph_builder</p>
                          <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                              根据核心企业构建完整产业链上下游图谱，识别关键节点企业和依赖关系
                          </p>
                          <div class="flex flex-wrap gap-2">
                              <span class="badge-skill">AI技能</span>
                              <span class="badge-skill">可复用</span>
                              <span class="badge-skill">产业链</span>
                          </div>
                      </div>
                      <div class="card-glass cursor-pointer hover:border-aurora-purple/30">
                          <h4 class="text-lg font-bold text-white mb-2">城市产业画像智能生成Skill</h4>
                          <p class="text-xs font-mono text-slate-500 mb-3">city_industry_portrait_generator</p>
                          <p class="text-sm text-slate-400 mb-4 line-clamp-2">
                              基于城市统计数据自动生成完整产业画像，包含产业结构、龙头企业、发展趋势
                          </p>
                          <div class="flex flex-wrap gap-2">
                              <span class="badge-skill">AI技能</span>
                              <span class="badge-skill">可复用</span>
                              <span class="badge-skill">城市画像</span>
                          </div>
                      </div>
                  </div>
              </section>
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
  console.log('技能详情 页面加载完成')
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
                background: rgb(255 255 255 / 3%);
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
        }

        body {
            @apply selection:bg-aurora-cyan/30 selection:text-white font-body;
        }

        .hidden {
            display: none !important;
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

// 页面特定样式
.pages-container {
  min-height: calc(100vh - 84px);
}


</style>
