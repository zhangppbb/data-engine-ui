<template>
  <PageLayout>
    <!-- 主内容 -->
    <main class='relative z-10 max-w-7xl mx-auto px-6 py-12'>
      <!-- [MODULE] 23b_面包屑导航 -->
      <div class='mb-8'>
        <nav class='flex' aria-label='Breadcrumb'>
          <ol class='inline-flex items-center space-x-1 md:space-x-3'>
            <li class='inline-flex items-center'>
              <router-link to='/pages/index' class='inline-flex items-center text-sm font-medium text-slate-400 hover:text-aurora-green'>
                <Icon icon='fa-solid:house' :size='14' class='mr-2' />
                首页
              </router-link>
            </li>
            <li>
              <div class='flex items-center'>
                <Icon icon='fa-solid:chevron-right' :size='12' class='text-slate-500 mx-2' />
                <router-link to='/pages/resources/list' class='text-sm font-medium text-slate-400 hover:text-aurora-green'>资源馆</router-link>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                <Icon icon='fa-solid:chevron-right' :size='12' class='text-slate-500 mx-2' />
                <router-link to='/pages/resources/mcp-market' class='text-sm font-medium text-slate-400 hover:text-aurora-green'>MCP集市</router-link>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                <Icon icon='fa-solid:chevron-right' :size='12' class='text-slate-500 mx-2' />
                <span class='text-sm font-medium text-aurora-green'>实际控制人</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <!-- [/MODULE] 23b_面包屑导航 -->
      
      <!-- [MODULE] 84c_页面标题区 -->
      <section class='mb-10'>
        <div class='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <div class='flex-1'>
            <h1 class='text-3xl md:text-4xl font-bold text-white leading-tight'>
              实际控制人
            </h1>
            <p class='text-xs font-mono text-slate-500 mt-2'>get_actual_controller</p>
            <p class='text-lg text-slate-400 mt-4 max-w-3xl'>
              查询企业的实际控制人详情，适用于企业风险评估、关联交易识别及商业竞争对手分析场景。
            </p>
          </div>
          <div class='flex flex-col gap-4 w-full md:w-auto'>
            <div class='flex flex-wrap gap-2'>
              <span class='badge bg-aurora-green/20 border-aurora-green/30 text-aurora-green'>企业基座</span>
              <span class='badge-realtime'>实时</span>
            </div>
            <button class='btn-primary w-full md:w-auto' @click='handleCall'>立即调用</button>
          </div>
        </div>
      </section>
      <!-- [/MODULE] 84c_页面标题区 -->
      
      <!-- [MODULE] 55t_标签页导航 -->
      <div class='glass-panel-base rounded-xl mb-6'>
        <div class='flex flex-wrap border-b border-white/10'>
          <button 
            v-for='tab in tabs' 
            :key='tab.id'
            :class='[
              "tab-btn px-6 py-4 font-medium transition-colors",
              activeTab === tab.id 
                ? "text-aurora-green border-b-2 border-aurora-green" 
                : "text-slate-400 hover:text-white"
            ]'
            @click='setActiveTab(tab.id)'
          >
            {{ tab.name }}
          </button>
        </div>
      </div>
      <!-- [/MODULE] 55t_标签页导航 -->
      
      <!-- [MODULE] 66u_标签页内容区 -->
      <div class='glass-panel-base rounded-xl p-6 mb-10'>
        <!-- 参数说明 -->
        <div v-show='activeTab === "parameters"'>
          <h3 class='text-xl font-bold text-white mb-4'>请求参数</h3>
          <div class='overflow-x-auto'>
            <table class='w-full text-left'>
              <thead>
                <tr class='border-b border-white/10'>
                  <th class='py-3 px-4 font-semibold text-white'>参数名</th>
                  <th class='py-3 px-4 font-semibold text-white'>类型</th>
                  <th class='py-3 px-4 font-semibold text-white'>必填</th>
                  <th class='py-3 px-4 font-semibold text-white'>描述</th>
                </tr>
              </thead>
              <tbody>
                <tr class='border-b border-white/5 hover:bg-white/5'>
                  <td class='py-3 px-4 font-mono text-sm'>searchKey</td>
                  <td class='py-3 px-4'>string</td>
                  <td class='py-3 px-4 text-aurora-green'>是</td>
                  <td class='py-3 px-4'>企业名称或统一社会信用代码</td>
                </tr>
                <tr class='border-b border-white/5 hover:bg-white/5'>
                  <td class='py-3 px-4 font-mono text-sm'>timeout</td>
                  <td class='py-3 px-4'>number</td>
                  <td class='py-3 px-4 text-slate-400'>否</td>
                  <td class='py-3 px-4'>超时时间（毫秒），默认3000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 class='text-xl font-bold text-white mt-8 mb-4'>服务说明</h3>
          <div class='glass-panel-base rounded-lg p-4 border border-aurora-green/20'>
            <h4 class='font-semibold text-aurora-green mb-2'>数据来源</h4>
            <ul class='list-disc list-inside space-y-2 text-sm text-slate-300'>
              <li>国家企业信用信息公示系统</li>
              <li>市场监督管理部门官方数据</li>
              <li>权威第三方数据源</li>
            </ul>
          </div>
        </div>
        
        <!-- 响应示例 -->
        <div v-show='activeTab === "response"'>
          <h3 class='text-xl font-bold text-white mb-4'>成功响应</h3>
          <div class='glass-panel-base rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6'>
            <pre class='text-slate-300'>{
  "code": 200,
  "message": "success",
  "data": {
    "company_name": "某科技有限公司",
    "unified_code": "91110000MA12345678",
    "actual_controller": "张三",
    "control_type": "直接控股",
    "control_percentage": "51%",
    "details": {
      "name": "张三",
      "id_type": "身份证",
      "id_number": "110********1234",
      "address": "北京市朝阳区",
      "latest_update": "2026-04-10T10:30:00Z"
    },
    "timestamp": 1712735400000
  }
}</pre>
          </div>
          <h3 class='text-xl font-bold text-white mb-4'>失败响应</h3>
          <div class='glass-panel-base rounded-lg p-4 font-mono text-sm overflow-x-auto border border-aurora-red/30'>
            <pre class='text-slate-300'>{
  "code": 404,
  "message": "企业未找到",
  "data": {
    "searchKey": "某不存在的企业",
    "timestamp": 1712735400000
  }
}</pre>
          </div>
        </div>
        
        <!-- 错误码 -->
        <div v-show='activeTab === "errors"'>
          <h3 class='text-xl font-bold text-white mb-4'>错误码说明</h3>
          <div class='overflow-x-auto'>
            <table class='w-full text-left'>
              <thead>
                <tr class='border-b border-white/10'>
                  <th class='py-3 px-4 font-semibold text-white'>错误码</th>
                  <th class='py-3 px-4 font-semibold text-white'>描述</th>
                  <th class='py-3 px-4 font-semibold text-white'>解决方案</th>
                </tr>
              </thead>
              <tbody>
                <tr class='border-b border-white/5 hover:bg-white/5'>
                  <td class='py-3 px-4 font-mono text-sm'>400</td>
                  <td class='py-3 px-4'>参数错误</td>
                  <td class='py-3 px-4'>检查必填参数是否正确</td>
                </tr>
                <tr class='border-b border-white/5 hover:bg-white/5'>
                  <td class='py-3 px-4 font-mono text-sm'>403</td>
                  <td class='py-3 px-4'>风险熔断</td>
                  <td class='py-3 px-4'>企业存在失信风险，需评估后操作</td>
                </tr>
                <tr class='border-b border-white/5 hover:bg-white/5'>
                  <td class='py-3 px-4 font-mono text-sm'>429</td>
                  <td class='py-3 px-4'>请求频率过高</td>
                  <td class='py-3 px-4'>降低请求频率，遵守API调用限制</td>
                </tr>
                <tr class='border-b border-white/5 hover:bg-white/5'>
                  <td class='py-3 px-4 font-mono text-sm'>500</td>
                  <td class='py-3 px-4'>服务器内部错误</td>
                  <td class='py-3 px-4'>稍后重试或联系技术支持</td>
                </tr>
                <tr class='hover:bg-white/5'>
                  <td class='py-3 px-4 font-mono text-sm'>503</td>
                  <td class='py-3 px-4'>服务暂不可用</td>
                  <td class='py-3 px-4'>稍后重试或查看服务状态</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- 价格方案 -->
        <div v-show='activeTab === "pricing"'>
          <h3 class='text-xl font-bold text-white mb-6'>价格方案</h3>
          <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div class='glass-panel-base rounded-xl p-6 border border-white/10 hover:border-aurora-red/30 transition-all'>
              <div class='text-center mb-6'>
                <h4 class='text-lg font-bold text-white mb-2'>基础版</h4>
                <p class='text-3xl font-bold text-aurora-red'>¥0</p>
                <p class='text-sm text-slate-400'>/ 每月</p>
              </div>
              <ul class='space-y-3 mb-6'>
                <li class='flex items-center gap-2'>
                  <Icon icon='fa-solid:check' :size='14' class='text-aurora-red' />
                  <span>每月50次调用</span>
                </li>
                <li class='flex items-center gap-2'>
                  <Icon icon='fa-solid:check' :size='14' class='text-aurora-red' />
                  <span>基础风险检测</span>
                </li>
                <li class='flex items-center gap-2 text-slate-500'>
                  <Icon icon='fa-solid:times' :size='14' />
                  <span>批量检测</span>
                </li>
                <li class='flex items-center gap-2 text-slate-500'>
                  <Icon icon='fa-solid:times' :size='14' />
                  <span>API支持</span>
                </li>
              </ul>
              <button class='btn-secondary w-full'>免费使用</button>
            </div>
            <div class='glass-panel-base rounded-xl p-6 border-2 border-aurora-red/50 shadow-glow-red-sm relative'>
              <div class='absolute top-0 right-0 bg-aurora-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg'>
                推荐
              </div>
              <div class='text-center mb-6'>
                <h4 class='text-lg font-bold text-white mb-2'>专业版</h4>
                <p class='text-3xl font-bold text-aurora-red'>¥999</p>
                <p class='text-sm text-slate-400'>/ 每月</p>
              </div>
              <ul class='space-y-3 mb-6'>
                <li class='flex items-center gap-2'>
                  <Icon icon='fa-solid:check' :size='14' class='text-aurora-red' />
                  <span>每月5000次调用</span>
                </li>
                <li class='flex items-center gap-2'>
                  <Icon icon='fa-solid:check' :size='14' class='text-aurora-red' />
                  <span>完整风险检测</span>
                </li>
                <li class='flex items-center gap-2'>
                  <Icon icon='fa-solid:check' :size='14' class='text-aurora-red' />
                  <span>批量检测支持</span>
                </li>
                <li class='flex items-center gap-2'>
                  <Icon icon='fa-solid:check' :size='14' class='text-aurora-red' />
                  <span>优先API支持</span>
                </li>
              </ul>
              <button class='btn-primary-mcp w-full'>立即购买</button>
            </div>
            <div class='glass-panel-base rounded-xl p-6 border border-white/10 hover:border-aurora-red/30 transition-all'>
              <div class='text-center mb-6'>
                <h4 class='text-lg font-bold text-white mb-2'>企业版</h4>
                <p class='text-3xl font-bold text-aurora-red'>¥4999</p>
                <p class='text-sm text-slate-400'>/ 每月</p>
              </div>
              <ul class='space-y-3 mb-6'>
                <li class='flex items-center gap-2'>
                  <Icon icon='fa-solid:check' :size='14' class='text-aurora-red' />
                  <span>无限次调用</span>
                </li>
                <li class='flex items-center gap-2'>
                  <Icon icon='fa-solid:check' :size='14' class='text-aurora-red' />
                  <span>高级风险分析</span>
                </li>
                <li class='flex items-center gap-2'>
                  <Icon icon='fa-solid:check' :size='14' class='text-aurora-red' />
                  <span>大规模批量检测</span>
                </li>
                <li class='flex items-center gap-2'>
                  <Icon icon='fa-solid:check' :size='14' class='text-aurora-red' />
                  <span>专属技术支持</span>
                </li>
              </ul>
              <button class='btn-secondary w-full'>联系销售</button>
            </div>
          </div>
        </div>
        
        <!-- 测试调用 -->
        <div v-show='activeTab === "test"'>
          <h3 class='text-xl font-bold text-white mb-4'>测试调用</h3>
          <div class='space-y-4'>
            <div>
              <label class='block text-sm font-medium text-white mb-2'>企业名称或统一社会信用代码</label>
              <input 
                type='text' 
                class='input-glass w-full' 
                placeholder='请输入企业名称或统一社会信用代码' 
                v-model='testParams.searchKey'
              />
            </div>
            <div>
              <label class='block text-sm font-medium text-white mb-2'>超时时间（毫秒）</label>
              <input 
                type='number' 
                class='input-glass w-full' 
                placeholder='默认3000' 
                v-model='testParams.timeout'
              />
            </div>
            <button class='btn-primary w-full' @click='handleTestCall'>发起测试调用</button>
            <div class='mt-6 glass-panel-base rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre class='text-slate-300'>// 测试调用结果将显示在这里
// 示例响应：
{
  "code": 200,
  "message": "success",
  "data": {
    "company_name": "某科技有限公司",
    "unified_code": "91110000MA12345678",
    "actual_controller": "张三",
    "control_type": "直接控股",
    "control_percentage": "51%",
    "details": {
      "name": "张三",
      "id_type": "身份证",
      "id_number": "110********1234",
      "address": "北京市朝阳区",
      "latest_update": "2026-04-10T10:30:00Z"
    },
    "timestamp": 1712735400000
  }
}</pre>
            </div>
          </div>
        </div>
      </div>
      <!-- [/MODULE] 66u_标签页内容区 -->
      
      <!-- [MODULE] 77v_相关MCP工具推荐 -->
      <section class='mb-10'>
        <h2 class='text-2xl font-bold text-white mb-6'>相关MCP工具</h2>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div 
            v-for='tool in relatedTools' 
            :key='tool.id'
            class='card-mcp cursor-pointer hover:border-aurora-green/30'
            @click='navigateToTool(tool.id)'
          >
            <h4 class='text-lg font-bold text-white mb-2'>{{ tool.name }}</h4>
            <p class='text-xs font-mono text-slate-500 mb-3'>{{ tool.code }}</p>
            <p class='text-sm text-slate-400 mb-4 line-clamp-2'>
              {{ tool.description }}
            </p>
            <div class='flex flex-wrap gap-2'>
              <span class='tag-badge bg-aurora-green/10 border-aurora-green/30 text-aurora-green text-[10px]'>{{ tool.category }}</span>
              <span class='badge-realtime text-[10px]' v-if='tool.realtime'>实时</span>
            </div>
          </div>
        </div>
      </section>
      <!-- [/MODULE] 77v_相关MCP工具推荐 -->
    </main>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/Icon/src/Icon.vue'
import PageLayout from '@/layout/data-engine/PageLayout.vue'

const router = useRouter()

// 响应式数据
const activeTab = ref('parameters')
const testParams = ref({
  searchKey: '某科技有限公司',
  timeout: 3000
})

// 标签页数据
const tabs = ref([
  { id: 'parameters', name: '参数说明' },
  { id: 'response', name: '响应示例' },
  { id: 'errors', name: '错误码' },
  { id: 'pricing', name: '价格方案' },
  { id: 'test', name: '测试调用' }
])

// 相关工具数据
const relatedTools = ref([
  {
    id: 'beneficial-owners',
    name: '受益所有人',
    code: 'get_beneficial_owners',
    description: '查询企业的受益所有人（UBO）信息，适用于反洗钱合规（AML）、尽职调查及穿透式监管分析场景。',
    category: '企业基座',
    realtime: true
  },
  {
    id: 'company-registration',
    name: '企业工商信息',
    code: 'get_company_registration_info',
    description: '查询企业核心登记信息：法定代表人、注册资本、成立日期、登记状态、注册地址等，支持企业名称或统一社会信用代码精确查询。',
    category: '企业基座',
    realtime: true
  },
  {
    id: 'shareholder-info',
    name: '股东信息',
    code: 'get_shareholder_info',
    description: '查询企业股权构成，包括投资人姓名、持股比例、认缴出资额、出资时间等股权结构数据，适用于股权结构分析、实控人识别。',
    category: '企业基座',
    realtime: true
  }
])

// 方法
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}

const handleCall = () => {
  // 立即调用逻辑
  console.log('立即调用')
}

const handleTestCall = () => {
  // 测试调用逻辑
  console.log('测试调用', testParams.value)
}

const navigateToTool = (toolId: string) => {
  // 跳转到工具详情页
  router.push(`/pages/resources/mcp-detail/${toolId}`)
}

// 组件挂载
onMounted(() => {
  // 初始化逻辑
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

.text-gradient-mcp {
  color: transparent;
  background: linear-gradient(to right, #ff4757, #ffa502);
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

.btn-primary-mcp {
  @apply relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-white transition-all duration-300;

  background: linear-gradient(90deg, #ff4757 0%, #ffa502 100%);
}

.btn-primary-mcp:hover {
  @apply shadow-glow-red-md transform -translate-y-0.5 scale-105;
}

.btn-secondary {
  @apply inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-white transition-all duration-300 border border-white/20 hover:border-aurora-cyan/50 hover:bg-white/5;
}

.btn-link {
  @apply inline-flex items-center text-aurora-cyan hover:text-aurora-green transition-colors font-medium text-sm;
}

.badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
}

.badge-mcp {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-aurora-red/10 border border-aurora-red/30 text-aurora-red;
}

.badge-risk {
  @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-red to-aurora-orange text-white;
}

.badge-realtime {
  @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-purple to-aurora-cyan text-white;
}

.badge-agent {
  @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-red to-aurora-orange text-white;
}

.input-glass {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
}

.input-glass-mcp {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-red/50 focus:ring-1 focus:ring-aurora-red/50 transition-all;
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

.bg-stars {
  background-color: #02040a;
  background-image: 
    radial-gradient(white, rgb(255 255 255 / 20%) 2px, transparent 3px),
    radial-gradient(white, rgb(255 255 255 / 15%) 1px, transparent 2px),
    radial-gradient(white, rgb(255 255 255 / 10%) 2px, transparent 3px);
  background-position: 0 0, 40px 60px, 130px 270px;
  background-size: 550px 550px, 350px 350px, 250px 250px;
}

.bg-grid-white {
  background-image: linear-gradient(to right, rgb(255 255 255 / 5%) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(255 255 255 / 5%) 1px, transparent 1px);
  background-size: 40px 40px;
}

.card-mcp {
  @apply glass-panel-base rounded-xl p-6 transition-all duration-300 hover:bg-white/5 cursor-pointer;
}

.tag-badge {
  @apply inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border;
}
</style>
