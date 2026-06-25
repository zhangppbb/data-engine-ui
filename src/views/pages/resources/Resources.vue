<template>
  <PageLayout>
    <!-- 主内容 -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
      
          
          <div class="text-center mb-12">
                  <div class="inline-block mb-4">
                      <span class="badge">
                          <Icon icon="fa-solid:rocket" :size="14" class="mr-1" />全链路数据服务原子工具
                      </span>
                  </div>
                  <h1 class="text-4xl font-bold text-white mb-4">
                      资源馆 ·
                      <span class="text-gradient">数据服务原子工具与资源市场</span>
                  </h1>
                  <p class="text-xl text-slate-400 max-w-3xl mx-auto">
                      4大核心服务模块，覆盖企业全维度数据能力，统一接入标准，企业/Agent一键调用
                  </p>
              </div>
      
              
              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <router-link to="/pages/resources/api-market" class="card-glass group text-center">
                      <div class="w-20 h-20 rounded-xl bg-api-gradient mx-auto mb-6 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
                          <Icon icon="fa-solid:code" :size="24" class="text-void-900" />
                      </div>
                      <h3 class="text-xl font-bold text-white mb-2">
                          <span class="text-gradient-api">API集市</span>
                      </h3>
                      <p class="text-slate-400 text-sm mb-4">RESTful API接口，覆盖工商、司法、舆情等数据服务，开发者直接调用</p>
                      <div class="flex items-center justify-center gap-2">
                          <span class="text-slate-500 text-sm">125个API</span>
                          <span class="text-aurora-green text-sm font-bold">热门</span>
                      </div>
                  </router-link>
      
                  <router-link to="/pages/resources/mcp-market" class="card-glass group text-center">
                      <div class="w-20 h-20 rounded-xl bg-mcp-gradient mx-auto mb-6 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
                          <Icon icon="fa-solid:plug" :size="24" class="text-white" />
                      </div>
                      <h3 class="text-xl font-bold text-white mb-2">
                          <span class="text-gradient-mcp">MCP集市</span>
                      </h3>
                      <p class="text-slate-400 text-sm mb-4">模型上下文协议工具，扩展AI Agent能力，支持复杂任务编排</p>
                      <div class="flex items-center justify-center gap-2">
                          <span class="text-slate-500 text-sm">68个MCP</span>
                          <span class="text-aurora-purple text-sm font-bold">新上线</span>
                      </div>
                  </router-link>
      
                  <router-link to="/pages/resources/skill-market" class="card-glass group text-center">
                      <div class="w-20 h-20 rounded-xl bg-skill-gradient mx-auto mb-6 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
                          <Icon icon="fa-solid:wand-magic-sparkles" :size="24" class="text-white" />
                      </div>
                      <h3 class="text-xl font-bold text-white mb-2">
                          <span class="text-gradient-skill">Skill广场</span>
                      </h3>
                      <p class="text-slate-400 text-sm mb-4">预训练AI技能，开箱即用，支持自然语言交互，无需编码</p>
                      <div class="flex items-center justify-center gap-2">
                          <span class="text-slate-500 text-sm">42个Skill</span>
                          <span class="text-aurora-cyan text-sm font-bold">易用</span>
                      </div>
                  </router-link>
      
                  <router-link to="/pages/resources/list" class="card-glass group text-center">
                      <div class="w-20 h-20 rounded-xl bg-dataset-gradient mx-auto mb-6 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
                          <Icon icon="fa-solid:database" :size="24" class="text-white" />
                      </div>
                      <h3 class="text-xl font-bold text-white mb-2">
                          <span class="text-gradient-dataset">高质量数据集</span>
                      </h3>
                      <p class="text-slate-400 text-sm mb-4">清洗标注的行业数据集，支持批量下载或API订阅，用于模型训练</p>
                      <div class="flex items-center justify-center gap-2">
                          <span class="text-slate-500 text-sm">23个数据集</span>
                          <span class="text-aurora-blue text-sm font-bold">专业</span>
                      </div>
                  </router-link>
              </div>
      
              
              <div class="mb-16">
                  <div class="flex items-center justify-between mb-6">
                      <h2 class="text-2xl font-bold text-white">热门资源推荐</h2>
                      <a href="#" class="text-sm text-aurora-cyan hover:text-aurora-green transition">查看全部 <Icon icon="fa-solid:arrow-right" :size="12" class="ml-1" /></a>
                  </div>
                  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      
                      <router-link to="/pages/resources/demo" class="card-glass">
                          <div class="flex items-start justify-between mb-4">
                              <span class="badge-api">API</span>
                              <span class="text-xs text-slate-500">本月调用 12.5K次</span>
                          </div>
                          <h3 class="text-lg font-bold text-white mb-2">企业模糊搜索API</h3>
                          <p class="text-slate-400 text-sm mb-4">通过企业名称关键词模糊搜索企业列表，返回基础工商信息</p>
                          <div class="flex items-center justify-between">
                              <span class="text-slate-400 text-sm">5点/次</span>
                              <button class="px-3 py-1 rounded-full text-xs bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30 hover:bg-aurora-cyan/30 transition">免费测试</button>
                          </div>
                      </router-link>
      
                      
                      <router-link to="/pages/resources/demo" class="card-glass">
                          <div class="flex items-start justify-between mb-4">
                              <span class="badge-mcp">MCP</span>
                              <span class="text-xs text-slate-500">本月使用 8.2K次</span>
                          </div>
                          <h3 class="text-lg font-bold text-white mb-2">企业风险分析MCP</h3>
                          <p class="text-slate-400 text-sm mb-4">AI Agent插件，支持自然语言查询企业风险信息，生成分析报告</p>
                          <div class="flex items-center justify-between">
                              <span class="text-slate-400 text-sm">10点/次</span>
                              <button class="px-3 py-1 rounded-full text-xs bg-aurora-red/20 text-aurora-red border border-aurora-red/30 hover:bg-aurora-red/30 transition">免费测试</button>
                          </div>
                      </router-link>
      
                      
                      <router-link to="/pages/resources/demo" class="card-glass">
                          <div class="flex items-start justify-between mb-4">
                              <span class="badge-skill">Skill</span>
                              <span class="text-xs text-slate-500">本月使用 15.3K次</span>
                          </div>
                          <h3 class="text-lg font-bold text-white mb-2">舆情监控Skill</h3>
                          <p class="text-slate-400 text-sm mb-4">智能舆情监控技能，自动识别负面舆情，生成监控日报</p>
                          <div class="flex items-center justify-between">
                              <span class="text-aurora-green text-sm font-bold">VIP免费</span>
                              <button class="px-3 py-1 rounded-full text-xs bg-aurora-purple/20 text-aurora-purple border border-aurora-purple/30 hover:bg-aurora-purple/30 transition">立即体验</button>
                          </div>
                      </router-link>
      
                      
                      <router-link to="/pages/resources/demo" class="card-glass">
                          <div class="flex items-start justify-between mb-4">
                              <span class="badge-dataset">数据集</span>
                              <span class="text-xs text-slate-500">本月下载 3.4K次</span>
                          </div>
                          <h3 class="text-lg font-bold text-white mb-2">中国企业工商信息数据集</h3>
                          <p class="text-slate-400 text-sm mb-4">包含全国1亿+企业工商信息，每月更新，支持API订阅或批量下载</p>
                          <div class="flex items-center justify-between">
                              <span class="text-slate-400 text-sm">500点/月</span>
                              <button class="px-3 py-1 rounded-full text-xs bg-aurora-blue/20 text-aurora-blue border border-aurora-blue/30 hover:bg-aurora-blue/30 transition">查看详情</button>
                          </div>
                      </router-link>
      
                      
                      <router-link to="/pages/resources/demo" class="card-glass">
                          <div class="flex items-start justify-between mb-4">
                              <span class="badge-api">API</span>
                              <span class="text-xs text-slate-500">本月调用 9.8K次</span>
                          </div>
                          <h3 class="text-lg font-bold text-white mb-2">司法诉讼查询API</h3>
                          <p class="text-slate-400 text-sm mb-4">查询企业司法诉讼信息，包含案件类型、审理状态、判决结果</p>
                          <div class="flex items-center justify-between">
                              <span class="text-slate-400 text-sm">8点/次</span>
                              <button class="px-3 py-1 rounded-full text-xs bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30 hover:bg-aurora-cyan/30 transition">免费测试</button>
                          </div>
                      </router-link>
      
                      <router-link to="/pages/resources/demo" class="card-glass">
                          <div class="flex items-start justify-between mb-4">
                              <span class="badge-mcp">MCP</span>
                              <span class="text-xs text-slate-500">本月使用 6.7K次</span>
                          </div>
                          <h3 class="text-lg font-bold text-white mb-2">产业链分析MCP</h3>
                          <p class="text-slate-400 text-sm mb-4">分析产业链上下游关系，识别关键节点企业，可视化展示</p>
                          <div class="flex items-center justify-between">
                              <span class="text-slate-400 text-sm">15点/次</span>
                              <button class="px-3 py-1 rounded-full text-xs bg-aurora-red/20 text-aurora-red border border-aurora-red/30 hover:bg-aurora-red/30 transition">免费测试</button>
                          </div>
                      </router-link>
                  </div>
              </div>
      
              
              <div class="card-glass">
                  <h2 class="text-2xl font-bold text-white mb-6">资源使用三步指南</h2>
                  <div class="grid md:grid-cols-3 gap-8">
                      <div class="text-center">
                          <div class="w-16 h-16 rounded-full bg-api-gradient mx-auto mb-4 flex items-center justify-center text-void-900 font-bold text-xl">1</div>
                          <h3 class="font-bold text-white mb-2">选择资源</h3>
                          <p class="text-slate-400 text-sm">浏览四大资源市场，根据需求选择合适的API、MCP、Skill或数据集</p>
                      </div>
                      <div class="text-center">
                          <div class="w-16 h-16 rounded-full bg-mcp-gradient mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">2</div>
                          <h3 class="font-bold text-white mb-2">测试体验</h3>
                          <p class="text-slate-400 text-sm">每个资源提供免费测试次数，确认功能符合预期后再正式调用</p>
                      </div>
                      <div class="text-center">
                          <div class="w-16 h-16 rounded-full bg-skill-gradient mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">3</div>
                          <h3 class="font-bold text-white mb-2">一键接入</h3>
                          <p class="text-slate-400 text-sm">获取API Key、MCP配置或Skill ID，按照接入指南快速集成到您的系统</p>
                      </div>
                  </div>
                  <div class="mt-8 pt-6 border-t border-white/10">
                      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                          <div>
                              <h4 class="font-bold text-white mb-1">开发者支持</h4>
                              <p class="text-slate-400 text-sm">提供详细的API文档、SDK、代码示例和技术支持</p>
                          </div>
                          <a href="#" class="px-6 py-2 rounded-full text-sm bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30 hover:bg-aurora-cyan/30 transition">
                              查看开发者文档 <Icon icon="fa-solid:book-open" :size="14" class="ml-2" />
                          </a>
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
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
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
  console.log('资源列表 页面加载完成')
})
</script>
