<template>
  <PageLayout>
    <!-- 主内容区 -->212
    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- API详情页面 -->
      <div class="space-y-8">
        <!-- 面包屑导航 -->
        <div class="py-3">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <router-link to="/pages/index" class="text-sm text-slate-400 hover:text-aurora-cyan transition-colors">
                  <Icon icon="fa-solid:house" :size="14" class="mr-1" />
                  首页
                </router-link>
              </li>
              <li>
                <div class="flex items-center">
                  <Icon icon="fa-solid:chevron-right" :size="12" class="text-slate-500 mx-1" />
                  <router-link to="/pages/resources/list" class="text-sm text-slate-400 hover:text-aurora-cyan transition-colors">
                    资源馆
                  </router-link>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <Icon icon="fa-solid:chevron-right" :size="12" class="text-slate-500 mx-1" />
                  <router-link to="/pages/resources/api-market" class="text-sm text-slate-400 hover:text-aurora-cyan transition-colors">
                    API集市
                  </router-link>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <Icon icon="fa-solid:chevron-right" :size="12" class="text-slate-500 mx-1" />
                  <span class="text-sm font-medium text-white">
                    企业工商基本信息查询
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <!-- API基本信息 -->
        <div class="card-glass">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex-1">
              <div class="flex items-start gap-3">
                <div class="w-12 h-12 rounded-xl bg-aurora-green/20 flex items-center justify-center">
                  <Icon icon="fa-solid:database" :size="20" class="text-aurora-green" />
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
                <button class="btn-primary" @click="handleTestCall">
                  <Icon icon="fa-solid:play" :size="14" class="mr-2" />
                  测试调用
                </button>
                <button class="btn-secondary" @click="handleViewDocs">
                  <Icon icon="fa-solid:code" :size="14" class="mr-2" />
                  查看文档
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- API详情标签页 -->
        <div class="glass-panel-base rounded-2xl overflow-hidden">
          <div class="border-b border-white/10">
            <div class="flex">
              <button 
                v-for="tab in tabs" 
                :key="tab.id"
                :class="[
                  'tab-btn px-8 py-4 font-medium transition-colors',
                  activeTab === tab.id 
                    ? 'text-aurora-green border-b-2 border-aurora-green' 
                    : 'text-slate-400 hover:text-white'
                ]" 
                @click="setActiveTab(tab.id)"
              >
                {{ tab.label }}
              </button>
            </div>
          </div>
          <div class="p-6">
            <!-- 请求参数 -->
            <div v-show="activeTab === 'params'" class="tab-content">
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
                    <tr v-for="param in requestParams" :key="param.name" class="border-b border-white/5">
                      <td class="py-3 px-4 text-sm font-mono text-aurora-cyan">{{ param.name }}</td>
                      <td class="py-3 px-4 text-sm text-slate-400">{{ param.type }}</td>
                      <td class="py-3 px-4 text-sm" :class="param.required ? 'text-aurora-green' : 'text-slate-500'">
                        {{ param.required ? '✓' : '✗' }}
                      </td>
                      <td class="py-3 px-4 text-sm text-slate-400">{{ param.description }}</td>
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

            <!-- 响应示例 -->
            <div v-show="activeTab === 'response'" class="tab-content">
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

            <!-- 错误码 -->
            <div v-show="activeTab === 'error'" class="tab-content">
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
                    <tr v-for="error in errorCodes" :key="error.code" class="border-b border-white/5">
                      <td class="py-3 px-4 text-sm font-mono text-aurora-red">{{ error.code }}</td>
                      <td class="py-3 px-4 text-sm text-slate-400">{{ error.description }}</td>
                      <td class="py-3 px-4 text-sm text-slate-400">{{ error.solution }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 价格 -->
            <div v-show="activeTab === 'price'" class="tab-content">
              <h3 class="text-lg font-bold text-white mb-4">价格方案</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="plan in pricePlans" :key="plan.id" :class="['glass-panel-base rounded-2xl p-6 border', plan.recommended ? 'border-aurora-cyan/30 relative' : 'border-white/10']">
                  <div v-if="plan.recommended" class="absolute top-0 right-0 bg-aurora-cyan text-void-900 text-xs font-bold px-3 py-1 rounded-bl-xl">
                    推荐
                  </div>
                  <div class="text-center mb-4">
                    <h4 class="text-lg font-bold text-white">{{ plan.name }}</h4>
                    <p class="text-slate-400 text-sm">{{ plan.description }}</p>
                  </div>
                  <div class="text-center mb-6">
                    <span class="text-3xl font-bold text-aurora-green">¥{{ plan.price }}</span>
                    <span class="text-slate-400">/ 次</span>
                  </div>
                  <ul class="space-y-3 text-sm">
                    <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2">
                      <Icon :icon="feature.included ? 'fa-solid:check' : 'fa-solid:times'" :size="12" :class="feature.included ? 'text-aurora-green' : 'text-slate-500'" />
                      <span>{{ feature.name }}</span>
                    </li>
                  </ul>
                  <button :class="['w-full mt-6', plan.recommended ? 'btn-primary' : 'btn-secondary']" @click="handleSelectPlan(plan)">
                    {{ plan.buttonText }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 测试调用 -->
        <div class="card-glass">
          <h3 class="text-lg font-bold text-white mb-6">测试调用</h3>
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">企业名称</label>
                <input 
                  type="text" 
                  class="input-glass" 
                  placeholder="请输入企业名称"
                  v-model="testForm.companyName"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">统一社会信用代码（可选）</label>
                <input 
                  type="text" 
                  class="input-glass" 
                  placeholder="请输入统一社会信用代码"
                  v-model="testForm.creditCode"
                />
              </div>
            </div>
            <div>
              <label class="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                <input 
                  type="checkbox" 
                  class="w-4 h-4 rounded border-white/20 bg-void-900/50 text-aurora-cyan focus:ring-aurora-cyan"
                  v-model="testForm.detail"
                />
                返回详细信息
              </label>
            </div>
            <div class="flex justify-end">
              <button class="btn-primary" @click="handleSendRequest">
                <Icon icon="fa-solid:play" :size="14" class="mr-2" />
                发送请求
              </button>
            </div>
          </div>
        </div>

        <!-- 相关API推荐 -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-white">相关API推荐</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div 
              v-for="api in relatedApis" 
              :key="api.id"
              class="glass-panel-base rounded-xl p-4 border border-aurora-green/20 hover:border-aurora-cyan/30 transition-all cursor-pointer"
              @click="handleRelatedApiClick(api)"
            >
              <h4 class="text-white font-medium mb-2">{{ api.name }}</h4>
              <p class="text-xs font-mono text-slate-500 mb-2">{{ api.endpoint }}</p>
              <p class="text-sm text-slate-400 line-clamp-2">
                {{ api.description }}
              </p>
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
const activeTab = ref('params')

// 标签页配置
const tabs = ref([
  { id: 'params', label: '请求参数' },
  { id: 'response', label: '响应示例' },
  { id: 'error', label: '错误码' },
  { id: 'price', label: '价格' }
])

// 请求参数
const requestParams = ref([
  {
    name: 'company_name',
    type: 'string',
    required: true,
    description: '企业名称'
  },
  {
    name: 'credit_code',
    type: 'string',
    required: false,
    description: '统一社会信用代码'
  },
  {
    name: 'detail',
    type: 'boolean',
    required: false,
    description: '是否返回详细信息'
  }
])

// 错误码
const errorCodes = ref([
  {
    code: '400',
    description: '参数错误',
    solution: '检查请求参数格式'
  },
  {
    code: '404',
    description: '企业信息未找到',
    solution: '检查企业名称或信用代码是否正确'
  },
  {
    code: '403',
    description: '权限不足',
    solution: '检查API密钥和权限'
  },
  {
    code: '500',
    description: '服务器内部错误',
    solution: '稍后重试或联系技术支持'
  }
])

// 价格方案
const pricePlans = ref([
  {
    id: 'basic',
    name: '基础版',
    description: '适合个人开发者',
    price: '0.10',
    recommended: false,
    buttonText: '选择方案',
    features: [
      { name: '基础工商信息', included: true },
      { name: '100次/天限制', included: true },
      { name: '标准响应速度', included: true },
      { name: '详细数据', included: false }
    ]
  },
  {
    id: 'professional',
    name: '专业版',
    description: '适合企业应用',
    price: '0.05',
    recommended: true,
    buttonText: '选择方案',
    features: [
      { name: '完整工商信息', included: true },
      { name: '1000次/天限制', included: true },
      { name: '快速响应速度', included: true },
      { name: '详细数据', included: true }
    ]
  },
  {
    id: 'enterprise',
    name: '企业版',
    description: '适合大型企业',
    price: '0.02',
    recommended: false,
    buttonText: '联系销售',
    features: [
      { name: '完整工商信息', included: true },
      { name: '无限次调用', included: true },
      { name: '高速响应速度', included: true },
      { name: '详细数据 + 历史数据', included: true }
    ]
  }
])

// 测试表单
const testForm = ref({
  companyName: '',
  creditCode: '',
  detail: false
})

// 相关API推荐
const relatedApis = ref([
  {
    id: 1,
    name: '企业股东信息查询',
    endpoint: 'get_company_shareholders',
    description: '查询企业所有股东信息，包括持股比例、认缴出资额、实缴出资额等数据'
  },
  {
    id: 2,
    name: '企业变更记录查询',
    endpoint: 'get_company_change_history',
    description: '查询企业历史工商变更记录，包括变更项目、变更前内容、变更后内容等'
  },
  {
    id: 3,
    name: '企业招投标项目查询',
    endpoint: 'get_company_bidding',
    description: '查询企业参与的公开招投标项目信息，包含中标项目、项目金额等'
  }
])

// 方法
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}

const handleTestCall = () => {
  alert('API测试调用功能需要后端接口支持。\n\n在实际项目中，点击此按钮会发送API请求并显示响应结果。')
}

const handleViewDocs = () => {
  router.push('/pages/resources/api-docs')
}

const handleSelectPlan = (plan: any) => {
  if (plan.buttonText.includes('选择方案') || plan.buttonText.includes('联系销售')) {
    alert('价格方案选择功能需要后端接口支持。\n\n在实际项目中，点击此按钮会跳转到支付页面或联系销售流程。')
  }
}

const handleSendRequest = () => {
  alert('API测试调用功能需要后端接口支持。\n\n在实际项目中，点击此按钮会发送API请求并显示响应结果。')
}

const handleRelatedApiClick = (api: any) => {
  router.push(`/pages/resources/api-detail/${api.id}`)
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

.btn-secondary {
  @apply inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-white transition-all duration-300 border border-white/20 hover:border-aurora-cyan/50 hover:bg-white/5;
}

.badge-new {
  @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-cyan to-aurora-green text-void-900 animate-pulse;
}

.input-glass {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
}

.code-block {
  @apply bg-void-900/80 border border-white/10 rounded-xl p-4 font-mono text-sm overflow-x-auto;
}

.tab-btn {
  @apply transition-colors;
}

.tab-content {
  @apply transition-all duration-300;
}

.hidden {
  display: none !important;
}

.line-clamp-2 {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
