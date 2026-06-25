<template>
  <PageLayout>
    <!-- 主内容 -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
      <!-- 搜索框区域 -->
      <div class="mb-8">
        <div class="flex items-center gap-4 mb-6">
          <router-link to="/pages/index" class="text-slate-400 hover:text-white transition">
            <Icon icon="fa-solid:arrow-left" :size="14" /> 返回首页
          </router-link>
          <div class="flex-1">
            <div class="relative">
              <input 
                type="text" 
                v-model="searchQuery"
                class="input-glass h-12 text-lg pl-6 pr-12" 
                placeholder="输入搜索关键词..."
                @keypress.enter="handleSearch"
              />
              <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-aurora-cyan">
                <Icon icon="fa-solid:pencil" :size="14" />
              </button>
            </div>
            <p class="text-sm text-slate-500 mt-2">
              搜索结果：<span class="text-white font-medium">"{{ searchQuery || '公司风险报告' }}"</span>
            </p>
          </div>
        </div>

        <!-- 分类Tab -->
        <div class="flex gap-4 mb-8">
          <button 
            v-for="tab in searchTabs" 
            :key="tab.id"
            :class="[
              'filter-tag px-6 py-3 rounded-full font-medium transition-all',
              activeTab === tab.id 
                ? 'active bg-accent-gradient text-void-900 shadow-glow-sm' 
                : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-aurora-cyan/10 hover:border-aurora-cyan/30'
            ]"
            @click="setActiveTab(tab.id)"
          >
            {{ tab.name }} ({{ tab.count }})
          </button>
        </div>
      </div>

      <!-- 搜索结果列表 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <router-link 
          v-for="item in filteredResults" 
          :key="item.id"
          :to="item.link" 
          class="card-glass block"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center" :class="item.gradient">
              <Icon :icon="item.icon" :size="20" :class="item.iconColor" />
            </div>
            <span class="badge">{{ item.category }}</span>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">{{ item.name }}</h3>
          <p class="text-slate-400 text-sm mb-4">{{ item.description }}</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span :class="['text-sm font-bold', item.priceColor]">{{ item.price }}</span>
              <span v-if="item.originalPrice" class="text-slate-500 text-xs">{{ item.originalPrice }}</span>
            </div>
            <button class="px-4 py-2 rounded-full text-sm bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30 hover:bg-aurora-cyan/30 transition">
              立即使用
            </button>
          </div>
        </router-link>
      </div>

      <!-- 分页 -->
      <div class="flex justify-center mt-12">
        <div class="flex gap-2">
          <button 
            class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition"
            @click="prevPage"
            :disabled="currentPage === 1"
          >
            上一页
          </button>
          <button 
            v-for="page in visiblePages" 
            :key="page"
            :class="[
              'px-4 py-2 rounded-lg font-bold transition-all',
              currentPage === page 
                ? 'bg-accent-gradient text-void-900 border-transparent' 
                : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'
            ]"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <button 
            class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            下一页
          </button>
        </div>
      </div>
    </main>

    <!-- AI 对话框 -->
    <div class="fixed bottom-6 right-6 z-50 w-80 md:w-96">
      <!-- 对话框头部 -->
      <div 
        class="glass-panel-base rounded-t-2xl p-4 flex items-center justify-between cursor-pointer" 
        @click="toggleChat"
      >
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center shadow-glow-sm">
            <Icon icon="fa-solid:robot" :size="16" class="text-void-900" />
          </div>
          <div>
            <h3 class="text-white font-medium">智能助手</h3>
            <p class="text-xs text-slate-400">随时为您提供帮助</p>
          </div>
        </div>
        <button class="text-slate-400 hover:text-white transition">
          <Icon :icon="chatExpanded ? 'fa-solid:chevron-down' : 'fa-solid:chevron-up'" :size="16" />
        </button>
      </div>
      
      <!-- 对话框内容 -->
      <div 
        class="glass-panel-base rounded-b-2xl border-t-0 p-4 max-h-96 overflow-y-auto" 
        :class="{ 'hidden': !chatExpanded }"
        ref="chatMessages"
      >
        <!-- 欢迎消息 -->
        <div class="flex gap-3 mb-4">
          <div class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center flex-shrink-0">
            <Icon icon="fa-solid:robot" :size="14" class="text-void-900" />
          </div>
          <div class="bg-white/5 rounded-2xl p-3 max-w-[80%]">
            <p class="text-sm">您好！我是数擎平台的智能助手，有什么可以帮助您的吗？</p>
          </div>
        </div>
        
        <!-- 聊天消息 -->
        <div v-for="message in chatMessages" :key="message.id" class="flex gap-3 mb-4" :class="message.sender === 'user' ? 'justify-end' : ''">
          <div v-if="message.sender === 'ai'" class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center flex-shrink-0">
            <Icon icon="fa-solid:robot" :size="14" class="text-void-900" />
          </div>
          <div 
            :class="[
              'rounded-2xl p-3 max-w-[80%]',
              message.sender === 'user' ? 'bg-aurora-cyan/20' : 'bg-white/5'
            ]"
          >
            <p class="text-sm">{{ message.content }}</p>
          </div>
          <div v-if="message.sender === 'user'" class="w-8 h-8 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-green flex items-center justify-center flex-shrink-0">
            <span class="text-void-900 font-bold text-sm">黄</span>
          </div>
        </div>
        
        <!-- 示例问题 -->
        <div class="flex flex-wrap gap-2 mb-4" v-if="chatMessages.length === 1">
          <button 
            v-for="question in exampleQuestions" 
            :key="question"
            class="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300 hover:bg-aurora-cyan/10 hover:border-aurora-cyan/30 transition"
            @click="sendQuestion(question)"
          >
            {{ question }}
          </button>
        </div>
      </div>
      
      <!-- 输入区域 -->
      <div 
        class="glass-panel-base border-t-0 p-3 rounded-b-2xl" 
        :class="{ 'hidden': !chatExpanded }"
      >
        <div class="relative">
          <input 
            type="text" 
            v-model="chatInput"
            class="input-glass pr-10 text-sm" 
            placeholder="输入您的问题..."
            @keypress.enter="sendMessage"
          />
          <button 
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-aurora-cyan hover:text-aurora-green transition" 
            @click="sendMessage"
          >
            <Icon icon="fa-solid:paper-plane" :size="14" />
          </button>
        </div>
      </div>
    </div>

    <!-- 智能助手按钮 -->
    <button 
      class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent-gradient rounded-full shadow-glow-sm flex items-center justify-center text-void-900 text-xl hover:scale-110 transition-all duration-300"
      @click="showAIAgent"
    >
      <Icon icon="fa-solid:robot" :size="16" />
    </button>
    
    <!-- 智能助手对话框 -->
    <div 
      class="fixed bottom-20 right-6 z-50 w-80 h-96 glass-panel-base rounded-xl border border-white/10 shadow-lg flex flex-col" 
      :class="{ 'hidden': !aiAgentVisible }"
    >
      <div class="p-4 border-b border-white/10 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center">
            <Icon icon="fa-solid:robot" :size="14" class="text-void-900" />
          </div>
          <h3 class="font-medium text-white">智能助手</h3>
          <span class="text-xs bg-aurora-green/20 text-aurora-green px-2 py-0.5 rounded-full">在线</span>
        </div>
        <button class="text-slate-400 hover:text-white transition" @click="hideAIAgent">
          <Icon icon="fa-solid:times" :size="16" />
        </button>
      </div>
      <div class="flex-1 p-4 overflow-y-auto space-y-4" ref="aiAgentMessages">
        <div class="flex gap-3">
          <div class="w-8 h-8 rounded-full bg-accent-gradient flex-shrink-0 flex items-center justify-center">
            <Icon icon="fa-solid:robot" :size="12" class="text-void-900" />
          </div>
          <div class="bg-white/5 rounded-2xl p-3 max-w-[80%]">
            <p class="text-sm">你好！我是数擎平台的智能助手，有什么可以帮助你的吗？</p>
          </div>
        </div>
        
        <!-- AI Agent 消息 -->
        <div v-for="message in aiAgentMessages" :key="message.id" class="flex gap-3" :class="message.sender === 'user' ? 'justify-end' : ''">
          <div v-if="message.sender === 'ai'" class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center flex-shrink-0">
            <Icon icon="fa-solid:robot" :size="12" class="text-void-900" />
          </div>
          <div 
            :class="[
              'rounded-2xl p-3 max-w-[80%]',
              message.sender === 'user' ? 'bg-aurora-cyan/20' : 'bg-white/5'
            ]"
          >
            <p class="text-sm">{{ message.content }}</p>
          </div>
          <div v-if="message.sender === 'user'" class="w-8 h-8 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-green flex items-center justify-center flex-shrink-0">
            <span class="text-void-900 font-bold text-sm">黄</span>
          </div>
        </div>
        
        <!-- 思考中状态 -->
        <div v-if="aiAgentThinking" class="flex gap-3">
          <div class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center flex-shrink-0">
            <Icon icon="fa-solid:robot" :size="12" class="text-void-900" />
          </div>
          <div class="bg-white/5 rounded-2xl p-3 max-w-[80%]">
            <p class="text-sm">正在思考...</p>
          </div>
        </div>
      </div>
      <div class="p-4 border-t border-white/10">
        <div class="flex gap-2">
          <input 
            type="text" 
            v-model="aiAgentInput"
            placeholder="输入你的问题..." 
            class="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-aurora-cyan"
            @keypress.enter="sendAIMessage"
          />
          <button 
            class="bg-accent-gradient rounded-lg p-2 text-void-900" 
            @click="sendAIMessage"
          >
            <Icon icon="fa-solid:paper-plane" :size="14" class="text-void-900" />
          </button>
        </div>
        <div class="flex flex-wrap gap-2 mt-3" v-if="aiAgentMessages.length === 1">
          <button 
            v-for="question in exampleQuestions" 
            :key="question"
            class="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300 hover:bg-aurora-cyan/10 hover:border-aurora-cyan/30 transition"
            @click="sendAIQuestion(question)"
          >
            {{ question }}
          </button>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Icon from '@/components/Icon/src/Icon.vue'
import PageLayout from '@/layout/data-engine/PageLayout.vue'

const router = useRouter()
const route = useRoute()

// 响应式数据
const searchQuery = ref('公司风险报告')
const activeTab = ref('apps')
const currentPage = ref(1)
const itemsPerPage = 8

// 聊天相关
const chatExpanded = ref(false)
const chatInput = ref('')
const chatMessages = ref([
  { id: 1, sender: 'ai', content: '您好！我是数擎平台的智能助手，有什么可以帮助您的吗？' }
])

// AI助手相关
const aiAgentVisible = ref(false)
const aiAgentInput = ref('')
const aiAgentMessages = ref([
  { id: 1, sender: 'ai', content: '你好！我是数擎平台的智能助手，有什么可以帮助你的吗？' }
])
const aiAgentThinking = ref(false)

// 搜索标签
const searchTabs = ref([
  { id: 'apps', name: '应用馆', count: 12 },
  { id: 'resources', name: '资源馆', count: 8 },
  { id: 'cases', name: '案例馆', count: 3 }
])

// 搜索结果数据
const allResults = ref([
  {
    id: 1,
    name: '企业风险报告生成',
    icon: 'fa-solid:shield-alt',
    iconColor: 'text-void-900',
    gradient: 'from-aurora-cyan to-aurora-green',
    category: '市场竞争',
    price: 'VIP免费',
    originalPrice: '普通用户: 10点/次',
    priceColor: 'text-aurora-green',
    description: '基于多维数据源生成企业风险分析报告，包含工商、司法、舆情等风险维度',
    type: 'apps',
    link: '/pages/apps/detail/demo'
  },
  {
    id: 2,
    name: '风险监控预警',
    icon: 'fa-solid:chart-line',
    iconColor: 'text-white',
    gradient: 'from-aurora-purple to-aurora-cyan',
    category: '风控审核',
    price: '15点/次',
    priceColor: 'text-slate-400',
    description: '实时监控企业风险变化，设置阈值自动预警，支持多维度风险评分',
    type: 'apps',
    link: '/pages/apps/detail/demo'
  },
  {
    id: 3,
    name: '招商目标分析',
    icon: 'fa-solid:building',
    iconColor: 'text-white',
    gradient: 'from-aurora-red to-orange-500',
    category: '产业招商',
    price: 'VIP免费',
    originalPrice: '普通用户: 20点/次',
    priceColor: 'text-aurora-green',
    description: '分析潜在招商目标企业的实力、发展潜力、产业匹配度，生成招商建议',
    type: 'apps',
    link: '/pages/apps/detail/demo'
  },
  {
    id: 4,
    name: 'AI标书审查',
    icon: 'fa-solid:file-contract',
    iconColor: 'text-white',
    gradient: 'from-aurora-blue to-purple-500',
    category: '效率工具',
    price: '25点/次',
    priceColor: 'text-slate-400',
    description: '自动审查招标文件合规性、完整性，识别潜在风险点，生成审查报告',
    type: 'apps',
    link: '/pages/apps/detail/demo'
  },
  {
    id: 5,
    name: '竞争对手分析',
    icon: 'fa-solid:search-dollar',
    iconColor: 'text-void-900',
    gradient: 'from-aurora-green to-cyan-500',
    category: '市场竞争',
    price: '18点/次',
    priceColor: 'text-slate-400',
    description: '分析竞争对手的产品、市场、财务、专利等维度，生成竞争策略建议',
    type: 'apps',
    link: '/pages/apps/detail/demo'
  },
  {
    id: 6,
    name: '高管背景调查',
    icon: 'fa-solid:user-tie',
    iconColor: 'text-white',
    gradient: 'from-purple-500 to-pink-500',
    category: '效率工具',
    price: 'VIP免费',
    originalPrice: '普通用户: 12点/次',
    priceColor: 'text-aurora-green',
    description: '查询企业高管的教育背景、职业经历、关联企业等信息，辅助人才评估',
    type: 'apps',
    link: '/pages/apps/detail/demo'
  },
  {
    id: 7,
    name: '舆情风险监测',
    icon: 'fa-solid:fire',
    iconColor: 'text-white',
    gradient: 'from-yellow-500 to-red-500',
    category: '风控审核',
    price: '30点/次',
    priceColor: 'text-slate-400',
    description: '监控企业在社交媒体的负面舆情，识别风险事件，提供预警和应对建议',
    type: 'apps',
    link: '/pages/apps/detail/demo'
  },
  {
    id: 8,
    name: '产业链分析',
    icon: 'fa-solid:industry',
    iconColor: 'text-white',
    gradient: 'from-blue-500 to-cyan-500',
    category: '产业招商',
    price: '22点/次',
    priceColor: 'text-slate-400',
    description: '分析产业链上下游企业关系，识别关键节点企业，为招商提供目标清单',
    type: 'apps',
    link: '/pages/apps/detail/demo'
  }
])

// 示例问题
const exampleQuestions = ref([
  '如何生成企业风险报告？',
  '资源馆有哪些数据？',
  '如何使用API？'
])

// AI回复数据
const aiResponses: Record<string, string> = {
  '如何生成企业风险报告？': '生成企业风险报告需要以下步骤：1. 收集企业基本信息和经营数据 2. 分析企业的财务状况、法律风险、经营风险等多个维度 3. 生成综合风险评估报告。您可以在应用馆中使用"企业风险报告生成"应用来完成这个任务。',
  '资源馆有哪些数据？': '资源馆包含多种类型的数据资源，主要分为：1. API接口：提供各种数据查询和分析接口 2. MCP工具：提供专业的数据处理和分析工具 3. 数据集：提供结构化的行业和企业数据。您可以根据具体需求在资源馆中浏览和使用这些资源。',
  '如何使用API？': '使用API的基本步骤：1. 在资源馆中选择适合的API 2. 查看API文档，了解接口参数和使用方法 3. 获取API密钥 4. 按照文档调用API获取数据。您可以在API详情页查看详细的使用指南和示例代码。'
}

// 计算属性
const filteredResults = computed(() => {
  const filtered = allResults.value.filter(item => item.type === activeTab.value)
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filtered.slice(start, end)
})

const totalPages = computed(() => {
  const filtered = allResults.value.filter(item => item.type === activeTab.value)
  return Math.ceil(filtered.length / itemsPerPage)
})

const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// 方法
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
  currentPage.value = 1
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // 这里可以添加实际的搜索逻辑
    console.log('搜索:', searchQuery.value)
  }
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

const goToPage = (page: number) => {
  currentPage.value = page
}

// 聊天功能
const toggleChat = () => {
  chatExpanded.value = !chatExpanded.value
}

const sendMessage = async () => {
  const message = chatInput.value.trim()
  if (!message) return
  
  // 添加用户消息
  chatMessages.value.push({
    id: Date.now(),
    sender: 'user',
    content: message
  })
  
  chatInput.value = ''
  
  // 滚动到底部
  await nextTick()
  scrollToBottom()
  
  // 模拟AI回复
  setTimeout(() => {
    chatMessages.value.push({
      id: Date.now(),
      sender: 'ai',
      content: '感谢您的提问！我正在处理您的请求，请稍候...'
    })
    scrollToBottom()
  }, 1000)
}

const sendQuestion = (question: string) => {
  chatInput.value = question
  sendMessage()
}

const scrollToBottom = () => {
  const chatContainer = document.querySelector('[ref="chatMessages"]')
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight
  }
}

// AI助手功能
const showAIAgent = () => {
  aiAgentVisible.value = true
}

const hideAIAgent = () => {
  aiAgentVisible.value = false
}

const sendAIMessage = async () => {
  const message = aiAgentInput.value.trim()
  if (!message) return
  
  // 添加用户消息
  aiAgentMessages.value.push({
    id: Date.now(),
    sender: 'user',
    content: message
  })
  
  aiAgentInput.value = ''
  
  // 滚动到底部
  await nextTick()
  scrollToAIAgentBottom()
  
  // 显示思考状态
  aiAgentThinking.value = true
  
  // 模拟AI回复
  setTimeout(() => {
    aiAgentThinking.value = false
    
    let aiResponse = '感谢您的提问！我正在处理您的请求，请稍候...'
    
    // 基于关键词匹配回复
    for (const [key, response] of Object.entries(aiResponses)) {
      if (message.includes(key.split('？')[0])) {
        aiResponse = response
        break
      }
    }
    
    aiAgentMessages.value.push({
      id: Date.now(),
      sender: 'ai',
      content: aiResponse
    })
    
    scrollToAIAgentBottom()
  }, 1500)
}

const sendAIQuestion = (question: string) => {
  aiAgentInput.value = question
  sendAIMessage()
}

const scrollToAIAgentBottom = () => {
  const aiAgentContainer = document.querySelector('[ref="aiAgentMessages"]')
  if (aiAgentContainer) {
    aiAgentContainer.scrollTop = aiAgentContainer.scrollHeight
  }
}

// 组件挂载
onMounted(() => {
  // 从路由参数获取搜索关键词
  if (route.query.q) {
    searchQuery.value = route.query.q as string
  }
  
  // 加载保存的客户类型
  const savedClientType = localStorage.getItem('clientType') || 'investment'
  console.log('当前客户类型:', savedClientType)
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

.badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
}

.filter-tag {
  @apply px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border border-white/10 bg-white/5 text-slate-300;
}

.filter-tag.active {
  @apply bg-accent-gradient text-void-900 border-transparent shadow-glow-sm;
}

.input-glass {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
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
</style>
