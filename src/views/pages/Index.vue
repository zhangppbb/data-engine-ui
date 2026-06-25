<template>
  <PageLayout>
    <!-- 主内容区 -->
    <div class="max-w-7xl mx-auto px-6 py-20">
      <div class="text-center space-y-8">
        <div class="inline-block mb-2">
          <span class="badge">
            <Icon icon="fa-solid:rocket" :size="14" class="mr-1" />智能数据中枢
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate__animated animate__fadeInUp">
          用自然语言
          <span class="text-gradient">获取完整的数据解决方案</span>
        </h1>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto whitespace-nowrap animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
          输入您的业务需求，智能推荐跨馆（应用、资源、案例）的完整解决方案，实现一步直达
        </p>

        <!-- 大号搜索框 -->
        <div class="max-w-3xl mx-auto pt-8 animate__animated animate__fadeInUp" style="animation-delay: 0.6s">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              class="input-glass h-16 text-lg pl-6 pr-12 placeholder-slate-500"
              placeholder="输入自然语言需求，如'查询公司风险并生成报告'、'分析市场竞争格局'..."
              @keypress.enter="handleSearch"
            />
            <button class="absolute! right-0 top-1/2 transform -translate-y-1/2 btn-primary py-3 px-8" @click="handleSearch">
              <Icon icon="fa-solid:search" :size="16" class="mr-2" />智能搜索
            </button>
          </div>
          <p class="text-slate-400 mb-4">热门搜索：</p>
          <div class="flex flex-wrap justify-center gap-3 ">
            <button
              v-for="tag in hotTags"
              :key="tag"
              class="px-4 py-2 rounded-full  text-white text-sm bg-white/5 border border-white/10 hover:border-aurora-cyan/50 hover:bg-aurora-cyan/10 transition"
              @click="handleTagClick(tag)"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <!-- 热门搜索标签 -->
        <div class="pt-8">
          <p class="text-sm text-slate-500 mt-3 text-center  text-white">
            支持搜索应用、API、MCP工具、案例
          </p>
        </div>

        <!-- 智能助手 -->
        <div class="pt-8 animate__animated animate__fadeInUp" style="animation-delay: 0.9s">
          <button
            class="mx-auto px-6 py-3 rounded-full bg-accent-gradient text-void-900 font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2"
            @click="showAgent"
          >
            <Icon icon="ep:chat-dot-round" :size="16" />
            <span>启动智能助手</span>
          </button>
        </div>

        <!-- 智能助手对话框 -->
        <div
          v-show="agentVisible"
          class="mt-6 max-w-2xl mx-auto glass-panel-base rounded-xl border border-white/10 shadow-lg flex flex-col animate__animated animate__fadeIn"
        >
          <div class="p-4 border-b border-white/10 flex justify-between items-center">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center">
                <Icon icon="ep:chat-dot-round" class="text-void-900" />
              </div>
              <h3 class="font-medium text-white">智能助手</h3>
              <span class="text-xs bg-aurora-green/20 text-aurora-green px-2 py-0.5 rounded-full">在线</span>
            </div>
            <button class="text-slate-400 hover:text-white transition" @click="hideAgent">
              <Icon icon="ep:close" :size="16" />
            </button>
          </div>
          <div ref="messageContainer" class="flex-1 p-4 overflow-y-auto space-y-4 max-h-96">
            <div
              v-for="(msg, index) in messages"
              :key="index"
              class="flex gap-3"
              :class="{ 'justify-end': msg.role === 'user' }"
            >
              <div
                v-if="msg.role === 'assistant'"
                class="w-8 h-8 rounded-full bg-accent-gradient flex-shrink-0 flex items-center justify-center"
              >
                <Icon icon="ep:chat-dot-round" class="text-void-900 text-sm" />
              </div>
              <div
                class="rounded-2xl p-3 max-w-[80%]"
                :class="msg.role === 'user' ? 'bg-aurora-cyan/20' : 'bg-white/5'"
              >
                <p class="text-sm">{{ msg.content }}</p>
              </div>
              <div
                v-if="msg.role === 'user'"
                class="w-8 h-8 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-green flex items-center justify-center flex-shrink-0"
              >
                <span class="text-void-900 font-bold text-sm">黄</span>
              </div>
            </div>
            <div v-if="thinking" class="flex gap-3">
              <div class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center flex-shrink-0">
                <Icon icon="ep:chat-dot-round" class="text-void-900 text-sm" />
              </div>
              <div class="bg-white/5 rounded-2xl p-3 max-w-[80%]">
                <p class="text-sm">正在思考...</p>
              </div>
            </div>
          </div>
          <div class="p-4 border-t border-white/10">
            <div class="flex gap-2">
              <input
                v-model="userInput"
                type="text"
                placeholder="输入你的问题..."
                class="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-aurora-cyan"
                @keypress.enter="sendMessage"
              />
              <button class="bg-accent-gradient rounded-lg p-2 text-void-900" @click="sendMessage">
                <Icon icon="ep:promotion" :size="16" />
              </button>
            </div>
            <div class="flex flex-wrap gap-2 mt-3">
              <button
                v-for="q in exampleQuestions"
                :key="q"
                class="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300 hover:bg-aurora-cyan/10 hover:border-aurora-cyan/30 transition"
                @click="setQuestion(q)"
              >
                {{ q }}
              </button>
            </div>
          </div>
        </div>

        <!-- 生态合作伙伴 -->
        <div ref="ecosystemRef" class="pt-20 ecosystem" :class="{ 'animate__animated': ecosystemVisible }">
          <h2 class="text-2xl font-bold text-center text-white mb-10">众擎易举，共建生态</h2>
          <div class="flex flex-wrap justify-center items-center gap-12">
            <a
              v-for="partner in partners"
              :key="partner.name"
              href="#"
              class="transition hover:scale-105 transform hover:-translate-y-1"
            >
              <div class="w-24 h-10 flex items-center justify-center">
                <img :src="partner.logo" :alt="partner.name" class="max-h-10" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>

  <!-- 页脚 -->
  <footer class="relative z-10 bg-void-800 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center shadow-glow-sm">
              <Icon icon="fa-solid:dog" :size="18" class="text-void-900" />
            </div>
            <div>
              <span class="text-xl font-bold text-white tracking-wide">数擎</span>
              <span class="text-aurora-cyan font-bold">DataEngine</span>
            </div>
          </div>
          <p class="text-slate-400 text-sm mb-4">数据致胜，洞见未来。一站式数据智能服务平台。</p>
          <div class="flex gap-4">
            <a href="#" class="text-slate-400 hover:text-aurora-cyan transition">
              <Icon icon="fa-brands:weixin" :size="20" />
            </a>
            <a href="#" class="text-slate-400 hover:text-aurora-cyan transition">
              <Icon icon="fa-brands:weibo" :size="20" />
            </a>
            <a href="#" class="text-slate-400 hover:text-aurora-cyan transition">
              <Icon icon="fa-brands:qq" :size="20" />
            </a>
            <a href="#" class="text-slate-400 hover:text-aurora-cyan transition">
              <Icon icon="fa-brands:tiktok" :size="20" />
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-white font-bold mb-4">快速连接</h3>
          <ul class="space-y-2">
            <li><router-link to="/pages/index" class="text-slate-400 hover:text-aurora-cyan transition text-sm">首页</router-link></li>
            <li><router-link to="/pages/resources/list" class="text-slate-400 hover:text-aurora-cyan transition text-sm">资源馆</router-link></li>
            <li><router-link to="/pages/cases/list" class="text-slate-400 hover:text-aurora-cyan transition text-sm">案例馆</router-link></li>
            <li><router-link to="/pages/apps/list" class="text-slate-400 hover:text-aurora-cyan transition text-sm">应用馆</router-link></li>
            <li><a href="#" class="text-slate-400 hover:text-aurora-cyan transition text-sm">联系我们</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-white font-bold mb-4">联系我们</h3>
          <ul class="space-y-2 text-sm text-slate-400">
            <li class="flex items-start gap-2">
              <Icon icon="fa-solid:map-marker-alt" :size="16" class="mt-1" />
              <span>陕西省西安市高新区科技四路2号西安软件园一期</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="fa-solid:phone" :size="16" />
              <span>029-81321536</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="fa-solid:envelope" :size="16" />
              <span>dataengine@eccot.cn</span>
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="fa-solid:clock" :size="16" />
              <span>周一至周五 8:30-17:30</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-white font-bold mb-4">订阅我们</h3>
          <p class="text-slate-400 text-sm mb-4">订阅我们的通讯，获取最新的数据集和产业动态。</p>
          <div class="bg-void-900/50 border border-white/10 rounded-xl p-4 text-center">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=QR%20code%20for%20subscription&image_size=square" alt="订阅二维码" class="w-32 h-32 mx-auto" />
          </div>
        </div>
      </div>
      <div class="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div class="text-slate-500 text-sm mb-4 md:mb-0">
          © 2025 数擎 DataEngine · 企业级数据服务平台
        </div>
        <div class="flex gap-6 text-sm">
          <a href="#" class="text-slate-400 hover:text-white transition">隐私政策</a>
          <a href="#" class="text-slate-400 hover:text-white transition">服务条款</a>
          <a href="#" class="text-slate-400 hover:text-white transition">法律声明</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@/components/Icon'
import PageLayout from '@/layout/data-engine/PageLayout.vue'

const router = useRouter()

// 搜索相关
const searchQuery = ref('')
const hotTags = ['企业风险报告', '市场竞争分析', '工商信息查询', '产业招商数据', '舆情监控API']

const handleSearch = () => {
  router.push('/pages/search-results')
}

const handleTagClick = (tag: string) => {
  searchQuery.value = tag
  handleSearch()
}

// 智能助手相关
const agentVisible = ref(false)
const userInput = ref('')
const messages = ref<{ role: 'user' | 'assistant'; content: string }[]>([
  { role: 'assistant', content: '你好！我是数擎平台的智能助手，有什么可以帮助你的吗？' }
])
const thinking = ref(false)
const messageContainer = ref<HTMLDivElement>()

const exampleQuestions = [
  '如何生成企业风险报告？',
  '资源馆有哪些数据？',
  '如何使用API？'
]

const aiResponses: Record<string, string> = {
  '如何生成企业风险报告？': '生成企业风险报告需要以下步骤：1. 收集企业基本信息和经营数据 2. 分析企业的财务状况、法律风险、经营风险等多个维度 3. 生成综合风险评估报告。您可以在应用馆中使用"企业风险报告生成"应用来完成这个任务。',
  '资源馆有哪些数据？': '资源馆包含多种类型的数据资源，主要分为：1. API接口：提供各种数据查询和分析接口 2. MCP工具：提供专业的数据处理和分析工具 3. 数据集：提供结构化的行业和企业数据。您可以根据具体需求在资源馆中浏览和使用这些资源。',
  '如何使用API？': '使用API的基本步骤：1. 在资源馆中选择适合的API 2. 查看API文档，了解接口参数和使用方法 3. 获取API密钥 4. 按照文档调用API获取数据。您可以在API详情页查看详细的使用指南和示例代码。'
}

const showAgent = () => {
  agentVisible.value = true
  nextTick(() => {
    messageContainer.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
}

const hideAgent = () => {
  agentVisible.value = false
}

const setQuestion = (q: string) => {
  userInput.value = q
  sendMessage()
}

const sendMessage = async () => {
  const message = userInput.value.trim()
  if (!message) return

  // 添加用户消息
  messages.value.push({ role: 'user', content: message })
  userInput.value = ''
  scrollToBottom()

  // 显示思考中
  thinking.value = true
  scrollToBottom()

  // 模拟 AI 回复
  setTimeout(() => {
    thinking.value = false

    let response = '感谢您的提问！我正在处理您的请求，请稍候...'
    for (const [key, ans] of Object.entries(aiResponses)) {
      if (message.includes(key.split('？')[0])) {
        response = ans
        break
      }
    }

    messages.value.push({ role: 'assistant', content: response })
    scrollToBottom()
  }, 1500)
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight
    }
  })
}

watch(messages, scrollToBottom, { deep: true })

// 合作伙伴
const partners = [
  { name: '企查查', logo: '/src/views/pages/img/企查查.png' },
  { name: '天眼查', logo: '/src/views/pages/img/天眼查.png' },
  { name: '大司空', logo: '/src/views/pages/img/大司空.png' },
  { name: '中指云', logo: '/src/views/pages/img/中指云.png' },
  { name: '万德', logo: '/src/views/pages/img/万德.png' }
]

// 生态合作伙伴动画
const ecosystemRef = ref<HTMLDivElement>()
const ecosystemVisible = ref(false)

onMounted(() => {
  // 生态合作伙伴区域滚动动画
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ecosystemVisible.value = true
        }
      })
    },
    { threshold: 0.3 }
  )

  if (ecosystemRef.value) {
    observer.observe(ecosystemRef.value)
  }
})
</script>

<style scoped lang="scss">
@use './styles/shared.scss';

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.bg-accent-gradient {
  background: linear-gradient(90deg, #00d2ff 0%, #00ffa3 100%);
}

.bg-aurora-cyan {
  background-color: #00d2ff;
}

.bg-aurora-green {
  background-color: #00ffa3;
}

.bg-aurora-purple {
  background-color: #7000ff;
}

.bg-aurora-red {
  background-color: #ff4757;
}

.bg-void-900 {
  background-color: #02040a;
}

.text-void-900 {
  color: #02040a;
}

.text-aurora-cyan {
  color: #00d2ff;
}

.text-aurora-green {
  color: #00ffa3;
}

.border-aurora-cyan\/50 {
  border-color: rgb(0 210 255 / 50%);
}

.bg-aurora-cyan\/10 {
  background-color: rgb(0 210 255 / 10%);
}

.bg-aurora-cyan\/20 {
  background-color: rgb(0 210 255 / 20%);
}

.bg-aurora-green\/20 {
  background-color: rgb(0 255 163 / 20%);
}

.bg-aurora-green\/10 {
  background-color: rgb(0 255 163 / 10%);
}

.hover\:bg-aurora-cyan\/10:hover {
  background-color: rgb(0 210 255 / 10%);
}

.hover\:border-aurora-cyan\/30:hover {
  border-color: rgb(0 210 255 / 30%);
}

.hover\:border-aurora-cyan\/50:hover {
  border-color: rgb(0 210 255 / 50%);
}

// animate.css 动画
.animate__animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.animate__fadeIn {
  animation-name: fadeIn;
}

.animate__fadeInUp {
  animation-name: fadeInUp;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-900 {
  animation-delay: 0.9s;
}
</style>
