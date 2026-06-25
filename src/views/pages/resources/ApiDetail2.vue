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
              <div class="aurora-blur bg-aurora-cyan w-[500px] h-[500px] top-[-100px] left-[-100px] animate-pulse-slow"></div>
              <div class="aurora-blur bg-aurora-green w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-20"></div>
              <div class="aurora-blur bg-aurora-purple w-[600px] h-[600px] top-[40%] left-[30%] opacity-10 blur-[120px]"></div>
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
      
          <main class="relative z-10 max-w-7xl mx-auto px-6 py-12">
              
              <div class="space-y-8">
                  
                  <div class="py-3">
                      <nav class="flex" aria-label="Breadcrumb">
                          <ol class="inline-flex items-center space-x-1 md:space-x-3">
                              <li class="inline-flex items-center">
                                  <router-link to="/pages/index" class="text-sm text-slate-400 hover:text-aurora-cyan transition-colors">
                                      <i class="fa-solid fa-house mr-1"></i>
                                      首页
                                  </router-link>
                              </li>
                              <li>
                                  <div class="flex items-center">
                                      <i class="fa-solid fa-chevron-right text-slate-500 text-xs mx-1"></i>
                                      <router-link to="/pages/resources/list" class="text-sm text-slate-400 hover:text-aurora-cyan transition-colors">
                                          资源馆
                                      </router-link>
                                  </div>
                              </li>
                              <li>
                                  <div class="flex items-center">
                                      <i class="fa-solid fa-chevron-right text-slate-500 text-xs mx-1"></i>
                                      <router-link to="/pages/resources/api-market" class="text-sm text-slate-400 hover:text-aurora-cyan transition-colors">
                                          API集市
                                      </router-link>
                                  </div>
                              </li>
                              <li>
                                  <div class="flex items-center">
                                      <i class="fa-solid fa-chevron-right text-slate-500 text-xs mx-1"></i>
                                      <span class="text-sm font-medium text-white">
                                          企业工商基本信息查询
                                      </span>
                                  </div>
                              </li>
                          </ol>
                      </nav>
                  </div>
      
                  
                  <div class="card-glass">
                      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div class="flex-1">
                              <div class="flex items-start gap-3">
                                  <div class="w-12 h-12 rounded-xl bg-aurora-green/20 flex items-center justify-center">
                                      <i class="fa-solid fa-database text-aurora-green text-xl"></i>
                                  </div>
                                  <div class="flex-1">
                                      <div class="flex items-center gap-2">
                                          <h1 class="text-2xl md:text-3xl font-bold text-white">企业工商基本信息查询</h1>
                                          <span class="badge-new">新增</span>
                                      </div>
                                      <p class="text-xs font-mono text-slate-500 mt-2">接口标识: get_company_basic_info</p>
                                      <p class="text-sm text-slate-400 mt-3 max-w-3xl">
                                          根据企业名称/统一社会信用代码查询企业工商注册基本信息，包含法人、注册资本、注册地址、成立日期等核心工商数据
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div class="flex flex-col items-end gap-4">
                              <div class="flex gap-2">
                                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-aurora-green/30 bg-aurora-green/10 text-aurora-green">
                                      工商登记
                                  </span>
                                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-slate-300">
                                      基础数据
                                  </span>
                                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-aurora-cyan/30 bg-aurora-cyan/10 text-aurora-cyan">
                                      实时
                                  </span>
                              </div>
                              <div class="flex items-center gap-4">
                                  <button class="btn-primary">
                                      <i class="fa-solid fa-play mr-2"></i>
                                      测试调用
                                  </button>
                                  <button class="btn-secondary">
                                      <i class="fa-solid fa-code mr-2"></i>
                                      查看文档
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  
                  <div class="glass-panel-base rounded-2xl overflow-hidden">
                      <div class="border-b border-white/10">
                          <div class="flex">
                              <button class="tab-btn active px-8 py-4 font-medium text-aurora-green border-b-2 border-aurora-green" data-tab="params">请求参数</button>
                              <button class="tab-btn px-8 py-4 font-medium text-slate-400 hover:text-white transition-colors" data-tab="response">响应示例</button>
                              <button class="tab-btn px-8 py-4 font-medium text-slate-400 hover:text-white transition-colors" data-tab="error">错误码</button>
                              <button class="tab-btn px-8 py-4 font-medium text-slate-400 hover:text-white transition-colors" data-tab="price">价格</button>
                          </div>
                      </div>
                      <div class="p-6">
                          
                          <div ref="params" class="tab-content active">
                              <h3 class="text-lg font-bold text-white mb-4">请求参数</h3>
                              <div class="overflow-x-auto">
                                  <table class="w-full border-collapse">
                                      <thead>
                                          <tr class="border-b border-white/10">
                                              <th class="text-left py-3 px-4 text-sm font-semibold text-slate-300">参数名</th>
                                              <th class="text-left py-3 px-4 text-sm font-semibold text-slate-300">类型</th>
                                              <th class="text-left py-3 px-4 text-sm font-semibold text-slate-300">必填</th>
                                              <th class="text-left py-3 px-4 text-sm font-semibold text-slate-300">描述</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr class="border-b border-white/5">
                                              <td class="py-3 px-4 text-sm font-mono text-aurora-cyan">company_name</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">string</td>
                                              <td class="py-3 px-4 text-sm text-aurora-green">✓</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">企业名称</td>
                                          </tr>
                                          <tr class="border-b border-white/5">
                                              <td class="py-3 px-4 text-sm font-mono text-aurora-cyan">credit_code</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">string</td>
                                              <td class="py-3 px-4 text-sm text-slate-500">✗</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">统一社会信用代码</td>
                                          </tr>
                                          <tr class="border-b border-white/5">
                                              <td class="py-3 px-4 text-sm font-mono text-aurora-cyan">detail</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">boolean</td>
                                              <td class="py-3 px-4 text-sm text-slate-500">✗</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">是否返回详细信息</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                              
                              <h3 class="text-lg font-bold text-white mt-8 mb-4">请求示例</h3>
                              <div class="code-block">
                                  <pre class="text-slate-300">POST /api/v1/company/basic
      Content-Type: application/json
      
      {
        "company_name": "阿里巴巴集团",
        "credit_code": "91330100716157688L",
        "detail": true
      }</pre>
                              </div>
                          </div>
      
                          
                          <div ref="response" class="tab-content hidden">
                              <h3 class="text-lg font-bold text-white mb-4">成功响应</h3>
                              <div class="code-block">
                                  <pre class="text-slate-300">{
        "code": 200,
        "message": "success",
        "data": {
          "company_name": "阿里巴巴集团控股有限公司",
          "credit_code": "91330100716157688L",
          "legal_person": "黄勇",
          "registered_capital": "5000000000",
          "registered_address": "浙江省杭州市余杭区文一西路969号",
          "established_date": "1999-09-09",
          "business_scope": "技术开发、技术服务、技术咨询、技术转让",
          "status": "存续",
          "industry": "互联网和相关服务",
          "employees": 120000
        }
      }</pre>
                              </div>
      
                              <h3 class="text-lg font-bold text-white mt-8 mb-4">失败响应</h3>
                              <div class="code-block">
                                  <pre class="text-slate-300">{
        "code": 404,
        "message": "企业信息未找到",
        "data": null
      }</pre>
                              </div>
                          </div>
      
                          
                          <div ref="error" class="tab-content hidden">
                              <h3 class="text-lg font-bold text-white mb-4">错误码说明</h3>
                              <div class="overflow-x-auto">
                                  <table class="w-full border-collapse">
                                      <thead>
                                          <tr class="border-b border-white/10">
                                              <th class="text-left py-3 px-4 text-sm font-semibold text-slate-300">错误码</th>
                                              <th class="text-left py-3 px-4 text-sm font-semibold text-slate-300">描述</th>
                                              <th class="text-left py-3 px-4 text-sm font-semibold text-slate-300">解决方案</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr class="border-b border-white/5">
                                              <td class="py-3 px-4 text-sm font-mono text-aurora-red">400</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">参数错误</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">检查请求参数格式</td>
                                          </tr>
                                          <tr class="border-b border-white/5">
                                              <td class="py-3 px-4 text-sm font-mono text-aurora-red">404</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">企业信息未找到</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">检查企业名称或信用代码是否正确</td>
                                          </tr>
                                          <tr class="border-b border-white/5">
                                              <td class="py-3 px-4 text-sm font-mono text-aurora-red">403</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">权限不足</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">检查API密钥和权限</td>
                                          </tr>
                                          <tr class="border-b border-white/5">
                                              <td class="py-3 px-4 text-sm font-mono text-aurora-red">500</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">服务器内部错误</td>
                                              <td class="py-3 px-4 text-sm text-slate-400">稍后重试或联系技术支持</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
      
                          
                          <div ref="price" class="tab-content hidden">
                              <h3 class="text-lg font-bold text-white mb-4">价格方案</h3>
                              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  <div class="glass-panel-base rounded-2xl p-6 border border-white/10">
                                      <div class="text-center mb-4">
                                          <h4 class="text-lg font-bold text-white">基础版</h4>
                                          <p class="text-slate-400 text-sm">适合个人开发者</p>
                                      </div>
                                      <div class="text-center mb-6">
                                          <span class="text-3xl font-bold text-aurora-green">¥0.10</span>
                                          <span class="text-slate-400">/ 次</span>
                                      </div>
                                      <ul class="space-y-3 text-sm">
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>基础工商信息</span>
                                          </li>
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>100次/天限制</span>
                                          </li>
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>标准响应速度</span>
                                          </li>
                                          <li class="flex items-center gap-2 text-slate-500">
                                              <i class="fa-solid fa-times"></i>
                                              <span>详细数据</span>
                                          </li>
                                      </ul>
                                      <button class="w-full btn-primary mt-6">选择方案</button>
                                  </div>
      
                                  <div class="glass-panel-base rounded-2xl p-6 border border-aurora-cyan/30 relative">
                                      <div class="absolute top-0 right-0 bg-aurora-cyan text-void-900 text-xs font-bold px-3 py-1 rounded-bl-xl">
                                          推荐
                                      </div>
                                      <div class="text-center mb-4">
                                          <h4 class="text-lg font-bold text-white">专业版</h4>
                                          <p class="text-slate-400 text-sm">适合企业应用</p>
                                      </div>
                                      <div class="text-center mb-6">
                                          <span class="text-3xl font-bold text-aurora-green">¥0.05</span>
                                          <span class="text-slate-400">/ 次</span>
                                      </div>
                                      <ul class="space-y-3 text-sm">
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>完整工商信息</span>
                                          </li>
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>1000次/天限制</span>
                                          </li>
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>快速响应速度</span>
                                          </li>
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>详细数据</span>
                                          </li>
                                      </ul>
                                      <button class="w-full btn-primary mt-6">选择方案</button>
                                  </div>
      
                                  <div class="glass-panel-base rounded-2xl p-6 border border-white/10">
                                      <div class="text-center mb-4">
                                          <h4 class="text-lg font-bold text-white">企业版</h4>
                                          <p class="text-slate-400 text-sm">适合大型企业</p>
                                      </div>
                                      <div class="text-center mb-6">
                                          <span class="text-3xl font-bold text-aurora-green">¥0.02</span>
                                          <span class="text-slate-400">/ 次</span>
                                      </div>
                                      <ul class="space-y-3 text-sm">
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>完整工商信息</span>
                                          </li>
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>无限次调用</span>
                                          </li>
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>高速响应速度</span>
                                          </li>
                                          <li class="flex items-center gap-2">
                                              <i class="fa-solid fa-check text-aurora-green"></i>
                                              <span>详细数据 + 历史数据</span>
                                          </li>
                                      </ul>
                                      <button class="w-full btn-secondary mt-6">联系销售</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  
                  <div class="card-glass">
                      <h3 class="text-lg font-bold text-white mb-6">测试调用</h3>
                      <div class="space-y-4">
                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                  <label class="block text-sm font-medium text-slate-300 mb-2">企业名称</label>
                                  <input type="text" class="input-glass" placeholder="请输入企业名称" />
                              </div>
                              <div>
                                  <label class="block text-sm font-medium text-slate-300 mb-2">统一社会信用代码（可选）</label>
                                  <input type="text" class="input-glass" placeholder="请输入统一社会信用代码" />
                              </div>
                          </div>
                          <div>
                              <label class="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                                  <input type="checkbox" class="w-4 h-4 rounded border-white/20 bg-void-900/50 text-aurora-cyan focus:ring-aurora-cyan" />
                                  返回详细信息
                              </label>
                          </div>
                          <div class="flex justify-end">
                              <button class="btn-primary">
                                  <i class="fa-solid fa-play mr-2"></i>
                                  发送请求
                              </button>
                          </div>
                      </div>
                  </div>
      
                  
                  <div class="space-y-4">
                      <h3 class="text-lg font-bold text-white">相关API推荐</h3>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div class="glass-panel-base rounded-xl p-4 border border-aurora-green/20 hover:border-aurora-cyan/30 transition-all cursor-pointer">
                              <h4 class="text-white font-medium mb-2">企业股东信息查询</h4>
                              <p class="text-xs font-mono text-slate-500 mb-2">get_company_shareholders</p>
                              <p class="text-sm text-slate-400 line-clamp-2">
                                  查询企业所有股东信息，包括持股比例、认缴出资额、实缴出资额等数据
                              </p>
                          </div>
                          <div class="glass-panel-base rounded-xl p-4 border border-aurora-green/20 hover:border-aurora-cyan/30 transition-all cursor-pointer">
                              <h4 class="text-white font-medium mb-2">企业变更记录查询</h4>
                              <p class="text-xs font-mono text-slate-500 mb-2">get_company_change_history</p>
                              <p class="text-sm text-slate-400 line-clamp-2">
                                  查询企业历史工商变更记录，包括变更项目、变更前内容、变更后内容等
                              </p>
                          </div>
                          <div class="glass-panel-base rounded-xl p-4 border border-aurora-green/20 hover:border-aurora-cyan/30 transition-all cursor-pointer">
                              <h4 class="text-white font-medium mb-2">企业招投标项目查询</h4>
                              <p class="text-xs font-mono text-slate-500 mb-2">get_company_bidding</p>
                              <p class="text-sm text-slate-400 line-clamp-2">
                                  查询企业参与的公开招投标项目信息，包含中标项目、项目金额等
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      
          
          <footer class="border-t border-white/10 mt-20 bg-void-900/80 z-10 relative">
              <div class="max-w-7xl mx-auto px-6 py-12">
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                      <div>
                          <h4 class="text-white font-bold mb-4">产品</h4>
                          <ul class="space-y-2 text-sm text-slate-400">
                              <li><router-link to="/pages/apps/list" class="hover:text-aurora-cyan transition">应用馆</router-link></li>
                              <li><router-link to="/pages/resources/list" class="hover:text-aurora-cyan transition">资源馆</router-link></li>
                              <li><router-link to="/pages/cases/list" class="hover:text-aurora-cyan transition">案例馆</router-link></li>
                              <li><router-link to="/pages/workspace" class="hover:text-aurora-cyan transition">工作空间</router-link></li>
                          </ul>
                      </div>
                      <div>
                          <h4 class="text-white font-bold mb-4">资源馆</h4>
                          <ul class="space-y-2 text-sm text-slate-400">
                              <li><router-link to="/pages/resources/api-market" class="hover:text-aurora-cyan transition">API集市</router-link></li>
                              <li><router-link to="/pages/resources/mcp-market" class="hover:text-aurora-cyan transition">MCP集市</router-link></li>
                              <li><router-link to="/pages/resources/skill-market" class="hover:text-aurora-cyan transition">Skill广场</router-link></li>
                              <li><router-link to="/pages/resources/list" class="hover:text-aurora-cyan transition">数据集</router-link></li>
                          </ul>
                      </div>
                      <div>
                          <h4 class="text-white font-bold mb-4">开发者</h4>
                          <ul class="space-y-2 text-sm text-slate-400">
                              <li><a href="#" class="hover:text-aurora-cyan transition">接入指南</a></li>
                              <li><a href="#" class="hover:text-aurora-cyan transition">API文档</a></li>
                              <li><a href="#" class="hover:text-aurora-cyan transition">SDK下载</a></li>
                              <li><a href="#" class="hover:text-aurora-cyan transition">状态监测</a></li>
                          </ul>
                      </div>
                      <div>
                          <h4 class="text-white font-bold mb-4">支持</h4>
                          <ul class="space-y-2 text-sm text-slate-400">
                              <li><a href="#" class="hover:text-aurora-cyan transition">帮助中心</a></li>
                              <li><a href="#" class="hover:text-aurora-cyan transition">常见问题</a></li>
                              <li><a href="#" class="hover:text-aurora-cyan transition">联系我们</a></li>
                              <li><a href="#" class="hover:text-aurora-cyan transition">开发者社区</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                      <div class="flex items-center gap-2 mb-4 md:mb-0">
                          <div class="w-6 h-6 rounded bg-gradient-to-tr from-aurora-cyan to-aurora-green"></div>
                          <span class="font-bold text-white text-lg">数擎平台</span>
                          <span class="text-slate-500 text-sm">· 企业级数据服务平台</span>
                      </div>
                      <div class="flex gap-4">
                          <a href="#" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-aurora-cyan hover:text-void-900 transition">
                              <i class="fa-brands fa-github"></i>
                          </a>
                          <a href="#" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-aurora-cyan hover:text-void-900 transition">
                              <i class="fa-brands fa-twitter"></i>
                          </a>
                          <a href="#" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-aurora-cyan hover:text-void-900 transition">
                              <i class="fa-brands fa-weixin"></i>
                          </a>
                      </div>
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
  console.log('API详情 页面加载完成')
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
                @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-cyan to-aurora-green text-void-900 animate-pulse;
            }

            .badge-realtime {
                @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-cyan to-aurora-green text-void-900;
            }

            .input-glass {
                @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
            }

            .code-block {
                @apply bg-void-900/80 border border-white/10 rounded-xl p-4 font-mono text-sm overflow-x-auto;
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
