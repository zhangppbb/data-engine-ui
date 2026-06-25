<template>
  <PageLayout>
    <!-- 主内容区 -->
    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- 返回按钮 -->
      <div class="mb-6">
        <router-link to="/pages/resources/list" class="inline-flex items-center text-slate-400 hover:text-white transition">
          <Icon icon="fa-solid:arrow-left" :size="14" class="mr-2" /> 返回资源馆
        </router-link>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- 左侧：资源概览 -->
        <div class="lg:col-span-1">
          <div class="card-glass sticky top-24">
            <div class="text-center mb-6">
              <div class="w-20 h-20 rounded-xl bg-api-gradient mx-auto mb-4 flex items-center justify-center shadow-glow-sm">
                <Icon icon="fa-solid:code" :size="24" class="text-void-900" />
              </div>
              <h1 class="text-2xl font-bold text-white mb-2">企业模糊搜索API</h1>
              <span class="badge-api">API</span>
            </div>
            
            <div class="space-y-4 mb-6">
              <p class="text-slate-400 text-sm">
                通过企业名称关键词模糊搜索企业列表，返回基础工商信息，支持分页和排序。
              </p>
              <div class="flex items-center gap-2">
                <Icon icon="fa-solid:bolt" :size="14" class="text-slate-500" />
                <span class="text-slate-400 text-sm">响应时间: &lt; 500ms</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon icon="fa-solid:chart-line" :size="14" class="text-slate-500" />
                <span class="text-slate-400 text-sm">本月调用: 12,543次</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon icon="fa-solid:check-circle" :size="14" class="text-slate-500" />
                <span class="text-slate-400 text-sm">成功率: 99.8%</span>
              </div>
            </div>

            <div class="border-t border-white/10 pt-6">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <div class="text-xl font-bold text-white mb-1">5点/次</div>
                  <p class="text-slate-500 text-xs">基础调用价格</p>
                </div>
                <div class="text-right">
                  <div class="text-aurora-green text-sm font-bold mb-1">免费测试 3次/日</div>
                  <p class="text-slate-500 text-xs">剩余: 3次</p>
                </div>
              </div>
              <button class="btn-primary w-full py-3 mb-3" @click="handleTestClick">
                <Icon icon="fa-solid:play" :size="14" class="mr-2" />发送测试请求
              </button>
              <button class="w-full py-3 rounded-full text-sm bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30 hover:bg-aurora-cyan/30 transition" @click="handleApplyKey">
                申请API Key
              </button>
            </div>
          </div>
        </div>

        <!-- 右侧：Tab内容区 -->
        <div class="lg:col-span-2">
          <!-- Tab栏 -->
          <div class="flex border-b border-white/10 mb-6">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              :class="['tab-button', { active: activeTab === tab.id }]" 
              @click="setActiveTab(tab.id)"
            >
              {{ tab.label }}
            </button>
          </div>

          <!-- 文档面板 -->
          <div v-show="activeTab === 'docs'" class="space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white mb-4">API文档</h2>
              <p class="text-slate-400 mb-4">
                企业模糊搜索API允许您通过企业名称关键词搜索匹配的企业列表，返回企业基础工商信息，包括企业名称、统一社会信用代码、法定代表人、注册资本、成立日期等。
              </p>
            </div>

            <div>
              <h3 class="text-lg font-bold text-white mb-3">请求参数</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="border-b border-white/10">
                      <th class="py-3 text-left text-slate-400 font-medium">参数名</th>
                      <th class="py-3 text-left text-slate-400 font-medium">类型</th>
                      <th class="py-3 text-left text-slate-400 font-medium">必填</th>
                      <th class="py-3 text-left text-slate-400 font-medium">示例</th>
                      <th class="py-3 text-left text-slate-400 font-medium">说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="param in requestParams" :key="param.name" class="border-b border-white/10">
                      <td class="py-3 text-white">{{ param.name }}</td>
                      <td class="py-3 text-slate-400">{{ param.type }}</td>
                      <td class="py-3 text-slate-400">{{ param.required }}</td>
                      <td class="py-3 text-slate-400">{{ param.example }}</td>
                      <td class="py-3 text-slate-400">{{ param.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-bold text-white mb-3">响应示例</h3>
              <div class="bg-void-800/50 border border-white/10 rounded-xl p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-slate-400 text-sm">成功响应 (HTTP 200)</span>
                  <button class="text-xs text-aurora-cyan hover:text-aurora-green transition" @click="copyCode('response')">
                    {{ copyButtonText.response }}
                  </button>
                </div>
                <pre class="text-slate-300 text-sm overflow-x-auto">{{ responseExample }}</pre>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-bold text-white mb-3">错误码</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="error in errorCodes" :key="error.code" class="bg-void-800/30 rounded-lg p-4">
                  <div class="text-aurora-red font-bold mb-1">{{ error.code }}</div>
                  <p class="text-slate-400 text-sm">{{ error.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 在线测试面板 -->
          <div v-show="activeTab === 'test'" class="space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white mb-4">在线测试</h2>
              <p class="text-slate-400 mb-6">
                填写测试参数，发送请求查看实时响应结果。每日提供3次免费测试机会。
              </p>
            </div>

            <div class="card-glass">
              <h3 class="font-bold text-white mb-4">测试参数</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm text-slate-400 mb-2">关键词 (keyword)</label>
                  <input 
                    type="text" 
                    class="input-glass" 
                    placeholder="输入企业名称关键词，如'腾讯'"
                    v-model="testForm.keyword"
                  />
                </div>
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm text-slate-400 mb-2">页码 (page)</label>
                    <input 
                      type="number" 
                      class="input-glass" 
                      v-model="testForm.page"
                      min="1"
                    />
                  </div>
                  <div>
                    <label class="block text-sm text-slate-400 mb-2">每页数量 (page_size)</label>
                    <input 
                      type="number" 
                      class="input-glass" 
                      v-model="testForm.pageSize"
                      min="1" 
                      max="50"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm text-slate-400 mb-2">排序字段 (order_by)</label>
                  <select class="input-glass" v-model="testForm.orderBy">
                    <option value="relevance">相关度</option>
                    <option value="capital">注册资本</option>
                    <option value="date">成立日期</option>
                  </select>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-white/10">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <p class="text-slate-400 text-sm">本次测试将消耗</p>
                    <p class="text-aurora-green font-bold">0点数 (免费测试)</p>
                  </div>
                  <button class="btn-primary px-8" @click="sendTestRequest">
                    <Icon icon="fa-solid:paper-plane" :size="14" class="mr-2" />发送测试请求
                  </button>
                </div>
                <p class="text-slate-500 text-xs">
                  今日剩余免费测试次数: <span class="text-aurora-green font-bold">3次</span>
                </p>
              </div>
            </div>

            <div class="card-glass">
              <h3 class="font-bold text-white mb-4">测试结果</h3>
              <div class="bg-void-900/50 border border-white/10 rounded-xl p-4 min-h-[200px]">
                <div v-if="!testResult" class="text-center py-8 text-slate-500">
                  <Icon icon="fa-solid:code" :size="48" class="mb-3 opacity-50" />
                  <p>填写参数后点击"发送测试请求"查看结果</p>
                </div>
                <pre v-else class="text-slate-300 text-sm overflow-x-auto">{{ testResult }}</pre>
              </div>
            </div>
          </div>

          <!-- 定价套餐面板 -->
          <div v-show="activeTab === 'pricing'" class="space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white mb-4">定价套餐</h2>
              <p class="text-slate-400 mb-6">
                根据您的使用需求选择合适的套餐，VIP用户享受特定套餐免费权益。
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
              <div v-for="plan in pricingPlans" :key="plan.id" :class="['card-glass', { 'relative': plan.vip }]">
                <div v-if="plan.vip" class="absolute top-0 right-0">
                  <span class="badge-vip">VIP免费</span>
                </div>
                <div class="text-center mb-6">
                  <div class="text-2xl font-bold text-white mb-2">{{ plan.name }}</div>
                  <div class="text-3xl font-bold mb-1" :class="plan.colorClass">
                    {{ plan.points }}<span class="text-lg text-slate-400">{{ plan.unit }}</span>
                  </div>
                  <p class="text-slate-500 text-sm">{{ plan.description }}</p>
                </div>
                <ul class="space-y-3 mb-6">
                  <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2">
                    <Icon icon="fa-solid:check" :size="12" class="text-aurora-green mt-1" />
                    <span class="text-slate-400 text-sm">{{ feature }}</span>
                  </li>
                </ul>
                <button 
                  :class="[
                    'w-full py-3 rounded-full text-sm transition',
                    plan.buttonClass
                  ]" 
                  @click="selectPlan(plan)"
                >
                  选择此套餐
                </button>
              </div>
            </div>
          </div>

          <!-- 接入指南面板 -->
          <div v-show="activeTab === 'guide'" class="space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white mb-4">接入指南</h2>
              <p class="text-slate-400 mb-6">
                快速将API集成到您的应用中，支持多种编程语言和框架。
              </p>
            </div>

            <div>
              <h3 class="text-lg font-bold text-white mb-3">1. 获取API Key</h3>
              <div class="card-glass">
                <p class="text-slate-400 text-sm mb-4">
                  在个人中心 → API密钥管理页面，点击"新建API密钥"生成专属密钥。
                </p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="px-3 py-1 rounded-lg bg-void-900/50 border border-white/10">
                      <code class="text-slate-300 text-sm">sk_live_1234567890abcdef</code>
                    </div>
                    <button class="text-xs text-aurora-cyan hover:text-aurora-green transition" @click="copyCode('apikey')">
                      {{ copyButtonText.apikey }}
                    </button>
                  </div>
                  <router-link to="/pages/profile" class="text-sm text-aurora-cyan hover:text-aurora-green transition">
                    前往个人中心 <Icon icon="fa-solid:external-link" :size="12" class="ml-1" />
                  </router-link>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-bold text-white mb-3">2. 代码示例</h3>
              <div class="space-y-4">
                <div v-for="example in codeExamples" :key="example.language">
                  <div class="flex items-center gap-2 mb-2">
                    <Icon :icon="example.icon" :size="16" :class="example.iconClass" />
                    <span class="text-white font-medium">{{ example.title }}</span>
                  </div>
                  <div class="bg-void-900/50 border border-white/10 rounded-xl p-4">
                    <pre class="text-slate-300 text-sm overflow-x-auto">{{ example.code }}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-glass">
              <h3 class="font-bold text-white mb-3">技术支持</h3>
              <p class="text-slate-400 text-sm mb-4">
                如果在接入过程中遇到问题，可以通过以下方式获取帮助：
              </p>
              <div class="grid md:grid-cols-3 gap-4">
                <a 
                  v-for="support in supportOptions" 
                  :key="support.title"
                  href="#" 
                  class="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                >
                  <Icon :icon="support.icon" :size="16" :class="support.iconClass" />
                  <span class="text-white text-sm">{{ support.title }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/Icon/src/Icon.vue'
import PageLayout from '@/layout/data-engine/PageLayout.vue'

const router = useRouter()

// 响应式数据
const activeTab = ref('docs')
const testResult = ref('')
const copyButtonText = ref({
  response: '复制代码',
  apikey: '复制'
})

// 标签页配置
const tabs = ref([
  { id: 'docs', label: '文档' },
  { id: 'test', label: '在线测试' },
  { id: 'pricing', label: '定价套餐' },
  { id: 'guide', label: '接入指南' }
])

// 请求参数
const requestParams = ref([
  {
    name: 'keyword',
    type: 'string',
    required: '是',
    example: '"腾讯"',
    description: '企业名称关键词，支持模糊匹配'
  },
  {
    name: 'page',
    type: 'integer',
    required: '否',
    example: '1',
    description: '页码，默认1'
  },
  {
    name: 'page_size',
    type: 'integer',
    required: '否',
    example: '10',
    description: '每页数量，默认10，最大50'
  },
  {
    name: 'order_by',
    type: 'string',
    required: '否',
    example: '"relevance"',
    description: '排序字段：relevance(相关度)、capital(注册资本)、date(成立日期)'
  }
])

// 错误码
const errorCodes = ref([
  { code: '4001', description: '参数错误，keyword不能为空' },
  { code: '4002', description: '参数错误，page_size超出范围(1-50)' },
  { code: '5001', description: '系统内部错误，请稍后重试' },
  { code: '6001', description: '点数不足，请充值' }
])

// 响应示例
const responseExample = `{
  "code": 0,
  "message": "success",
  "data": {
    "total": 245,
    "page": 1,
    "page_size": 10,
    "items": [
      {
        "company_name": "腾讯科技（深圳）有限公司",
        "credit_code": "91440300708461136T",
        "legal_person": "马化腾",
        "registered_capital": "6500万美元",
        "establish_date": "2000-02-24",
        "status": "在营",
        "province": "广东省",
        "city": "深圳市"
      },
      {
        "company_name": "深圳市腾讯计算机系统有限公司",
        "credit_code": "91440300749543358N",
        "legal_person": "马化腾",
        "registered_capital": "6500万元",
        "establish_date": "1998-11-11",
        "status": "在营",
        "province": "广东省",
        "city": "深圳市"
      }
    ]
  }
}`

// 测试表单
const testForm = ref({
  keyword: '科技',
  page: 1,
  pageSize: 10,
  orderBy: 'relevance'
})

// 定价套餐
const pricingPlans = ref([
  {
    id: 'pay-per-use',
    name: '按次计费',
    points: '5',
    unit: '点/次',
    description: '适合低频使用场景',
    colorClass: 'text-aurora-cyan',
    vip: false,
    buttonClass: 'bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30 hover:bg-aurora-cyan/30',
    features: [
      '无最低消费',
      '按实际调用次数扣点',
      '每日3次免费测试'
    ]
  },
  {
    id: 'monthly',
    name: '包月套餐',
    points: '2,000',
    unit: '点/月',
    description: '适合中等使用频率',
    colorClass: 'text-aurora-green',
    vip: true,
    buttonClass: 'bg-accent-gradient text-void-900 font-bold hover:shadow-glow-sm',
    features: [
      '每月最多2,000次调用',
      '超出部分按5点/次',
      'VIP用户免费'
    ]
  },
  {
    id: 'yearly',
    name: '包年套餐',
    points: '20,000',
    unit: '点/年',
    description: '适合高频稳定使用',
    colorClass: 'text-aurora-purple',
    vip: false,
    buttonClass: 'bg-aurora-purple/20 text-aurora-purple border border-aurora-purple/30 hover:bg-aurora-purple/30',
    features: [
      '每年最多20,000次调用',
      '平均低至1点/次',
      '优先技术支持'
    ]
  }
])

// 代码示例
const codeExamples = ref([
  {
    language: 'javascript',
    title: 'JavaScript (Fetch)',
    icon: 'fa-brands:js',
    iconClass: 'text-yellow-500',
    code: `const response = await fetch('https://api.shueq.com/v1/search/company', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk_live_1234567890abcdef'
    },
    body: JSON.stringify({
        keyword: '腾讯',
        page: 1,
        page_size: 10
    })
});
const data = await response.json();`
  },
  {
    language: 'python',
    title: 'Python (Requests)',
    icon: 'fa-brands:python',
    iconClass: 'text-blue-500',
    code: `import requests

headers = {
    'Authorization': 'Bearer sk_live_1234567890abcdef',
    'Content-Type': 'application/json'
}

data = {
    'keyword': '腾讯',
    'page': 1,
    'page_size': 10
}

response = requests.post(
    'https://api.shueq.com/v1/search/company',
    headers=headers,
    json=data
)
result = response.json()`
  }
])

// 技术支持选项
const supportOptions = ref([
  {
    title: 'API文档中心',
    icon: 'fa-solid:book',
    iconClass: 'text-aurora-cyan'
  },
  {
    title: '技术社区',
    icon: 'fa-solid:comments',
    iconClass: 'text-aurora-green'
  },
  {
    title: '在线客服',
    icon: 'fa-solid:headset',
    iconClass: 'text-aurora-purple'
  }
])

// 方法
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}

const handleTestClick = () => {
  setActiveTab('test')
}

const handleApplyKey = () => {
  router.push('/pages/profile')
}

const copyCode = (type: string) => {
  const text = type === 'response' ? responseExample : 'sk_live_1234567890abcdef'
  
  navigator.clipboard.writeText(text).then(() => {
    const originalText = copyButtonText.value[type]
    copyButtonText.value[type] = '已复制'
    
    setTimeout(() => {
      copyButtonText.value[type] = originalText
    }, 2000)
  })
}

const sendTestRequest = () => {
  // 模拟测试响应
  testResult.value = `{
  "code": 0,
  "message": "success",
  "data": {
    "total": 156,
    "page": 1,
    "page_size": 10,
    "items": [
      {
        "company_name": "北京科技有限公司",
        "credit_code": "91110108551312345A",
        "legal_person": "黄三",
        "registered_capital": "1000万元",
        "establish_date": "2015-03-15",
        "status": "在营",
        "province": "北京市",
        "city": "北京市"
      },
      {
        "company_name": "上海科技发展有限公司",
        "credit_code": "91310115567890123B",
        "legal_person": "李四",
        "registered_capital": "500万元",
        "establish_date": "2018-07-20",
        "status": "在营",
        "province": "上海市",
        "city": "上海市"
      }
    ]
  }
}`
}

const selectPlan = (plan: any) => {
  alert(`您选择了${plan.name}。\n\n在实际项目中，这里会跳转到支付页面或联系销售流程。`)
}
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

.badge-api {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-cyan to-aurora-green text-void-900;
}

.badge-vip {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-void-900;
}

.tab-button {
  @apply px-4 py-2 text-sm font-medium transition-all cursor-pointer border-b-2 border-transparent text-slate-400;
}

.tab-button.active {
  @apply text-aurora-cyan border-aurora-cyan;
}

.input-glass {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
}

.bg-api-gradient {
  background: linear-gradient(90deg, #00d2ff 0%, #00ffa3 100%);
}
</style>
