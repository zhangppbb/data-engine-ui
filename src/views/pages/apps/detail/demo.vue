<template>
  <PageLayout>
    <!-- 主内容 -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
      <!-- 返回按钮和标题 -->
      <div class="mb-6">
        <router-link to="/pages/apps/list" class="inline-flex items-center text-slate-400 hover:text-white transition mb-4">
          <Icon icon="fa-solid:arrow-left" :size="16" class="mr-2" />
          返回应用馆
        </router-link>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- 左侧：应用概览卡片 -->
        <div class="lg:col-span-1">
          <div class="card-glass sticky top-24">
            <div class="text-center mb-6">
              <div class="w-20 h-20 rounded-xl bg-gradient-to-br from-aurora-cyan to-aurora-green mx-auto mb-4 flex items-center justify-center shadow-glow-sm">
                <Icon icon="fa-solid:shield-alt" :size="32" class="text-void-900" />
              </div>
              <h1 class="text-2xl font-bold text-white mb-2">企业风险报告生成</h1>
              <span class="badge">市场竞争</span>
            </div>
            
            <div class="space-y-4 mb-6">
              <p class="text-slate-400 text-sm">
                基于多维数据源生成企业风险分析报告，包含工商、司法、舆情等风险维度，为企业决策提供数据支持。
              </p>
              <div class="flex items-center gap-2">
                <Icon icon="fa-solid:clock" :size="14" class="text-slate-500" />
                <span class="text-slate-400 text-sm">平均响应时间: 5-10秒</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon icon="fa-solid:chart-line" :size="14" class="text-slate-500" />
                <span class="text-slate-400 text-sm">本月使用: 1,245次</span>
              </div>
            </div>

            <div class="border-t border-white/10 pt-6">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span class="badge-vip">
                    <Icon icon="fa-solid:crown" :size="12" class="mr-1" />
                    VIP免费
                  </span>
                  <p class="text-slate-500 text-xs mt-1">普通用户: 10点/次</p>
                </div>
                <div class="text-right">
                  <p class="text-slate-400 text-sm">剩余试用次数</p>
                  <p class="text-aurora-green font-bold">3次</p>
                </div>
              </div>
              <button class="btn-primary w-full py-3" @click="handleUseApp">
                <Icon icon="fa-solid:play" :size="16" class="mr-2" />
                立即使用（免费）
              </button>
              <p class="text-slate-500 text-xs text-center mt-3">
                本次操作将消耗0点数（VIP免费权益）
              </p>
            </div>
          </div>
        </div>

        <!-- 右侧：Tab内容区 -->
        <div class="lg:col-span-2">
          <!-- Tab栏 -->
          <div class="flex border-b border-white/10 mb-6">
            <button 
              v-for="tab in tabs"
              :key="tab.key"
              :class="[
                'px-6 py-3 text-sm font-medium transition-all cursor-pointer border-b-2',
                activeTab === tab.key 
                  ? 'text-aurora-cyan border-aurora-cyan' 
                  : 'text-slate-400 border-transparent hover:text-white'
              ]"
              @click="setActiveTab(tab.key)"
            >
              {{ tab.label }}
            </button>
          </div>

          <!-- 介绍面板 -->
          <div v-show="activeTab === 'intro'" class="space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white mb-4">应用介绍</h2>
              <p class="text-slate-400 mb-4">
                企业风险报告生成应用是一款基于人工智能和大数据分析的智能工具，能够全面评估企业的风险状况。通过整合工商信息、司法诉讼、舆情监控、财务数据等多维度信息，自动生成专业的企业风险分析报告。
              </p>
              <p class="text-slate-400">
                本应用特别适用于金融机构的风控部门、投资机构的尽职调查、企业合作伙伴评估等场景，帮助用户快速了解目标企业的风险状况，做出更明智的决策。
              </p>
            </div>

            <div>
              <h3 class="text-lg font-bold text-white mb-3">适用场景</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <Icon icon="fa-solid:check" :size="14" class="text-aurora-green mt-1" />
                  <span class="text-slate-400">金融机构对贷款企业的风险评估</span>
                </li>
                <li class="flex items-start gap-2">
                  <Icon icon="fa-solid:check" :size="14" class="text-aurora-green mt-1" />
                  <span class="text-slate-400">投资机构对目标公司的尽职调查</span>
                </li>
                <li class="flex items-start gap-2">
                  <Icon icon="fa-solid:check" :size="14" class="text-aurora-green mt-1" />
                  <span class="text-slate-400">企业对潜在合作伙伴的信用评估</span>
                </li>
                <li class="flex items-start gap-2">
                  <Icon icon="fa-solid:check" :size="14" class="text-aurora-green mt-1" />
                  <span class="text-slate-400">政府监管部门对企业的合规检查</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-bold text-white mb-3">成果示例</h3>
              <div class="bg-void-800/50 border border-white/10 rounded-xl p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-slate-400 text-sm">企业风险报告示例摘要</span>
                  <button class="text-xs text-aurora-cyan hover:text-aurora-green transition">查看完整报告</button>
                </div>
                <pre class="text-slate-300 text-sm overflow-x-auto">
{
  "企业名称": "XX科技有限公司",
  "统一社会信用代码": "91310101MA1XXXXXXX",
  "风险评分": 68,
  "风险等级": "中等风险",
  "主要风险点": [
    "工商异常：经营异常名录（2023年）",
    "司法诉讼：3起买卖合同纠纷",
    "舆情风险：近期有2条负面报道"
  ],
  "建议": "建议进一步核实经营异常原因，关注诉讼进展，加强舆情监控"
}</pre>
              </div>
            </div>
          </div>

          <!-- 功能面板 -->
          <div v-show="activeTab === 'features'" class="space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white mb-4">核心功能</h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="card-glass">
                  <div class="w-10 h-10 rounded-lg bg-aurora-cyan/20 text-aurora-cyan flex items-center justify-center mb-3">
                    <Icon icon="fa-solid:building" />
                  </div>
                  <h3 class="font-bold text-white mb-2">工商信息分析</h3>
                  <p class="text-slate-400 text-sm">全面分析企业工商登记信息，包括注册资本、股东结构、经营范围等</p>
                </div>
                <div class="card-glass">
                  <div class="w-10 h-10 rounded-lg bg-aurora-purple/20 text-aurora-purple flex items-center justify-center mb-3">
                    <Icon icon="fa-solid:gavel" />
                  </div>
                  <h3 class="font-bold text-white mb-2">司法诉讼核查</h3>
                  <p class="text-slate-400 text-sm">查询企业涉及的司法诉讼案件，分析案件类型、判决结果、执行情况</p>
                </div>
                <div class="card-glass">
                  <div class="w-10 h-10 rounded-lg bg-aurora-red/20 text-aurora-red flex items-center justify-center mb-3">
                    <Icon icon="fa-solid:newspaper" />
                  </div>
                  <h3 class="font-bold text-white mb-2">舆情监控</h3>
                  <p class="text-slate-400 text-sm">监控企业在各大媒体平台的舆情信息，识别负面报道和风险事件</p>
                </div>
                <div class="card-glass">
                  <div class="w-10 h-10 rounded-lg bg-aurora-green/20 text-aurora-green flex items-center justify-center mb-3">
                    <Icon icon="fa-solid:chart-pie" />
                  </div>
                  <h3 class="font-bold text-white mb-2">风险评分模型</h3>
                  <p class="text-slate-400 text-sm">基于多维度数据构建风险评分模型，输出0-100的风险评分和等级</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 使用说明面板 -->
          <div v-show="activeTab === 'usage'" class="space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white mb-4">使用说明</h2>
              <div class="space-y-4">
                <div class="flex gap-4">
                  <div class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center text-void-900 font-bold">1</div>
                  <div>
                    <h3 class="font-bold text-white mb-1">输入企业信息</h3>
                    <p class="text-slate-400 text-sm">输入企业名称或统一社会信用代码，支持模糊搜索</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center text-void-900 font-bold">2</div>
                  <div>
                    <h3 class="font-bold text-white mb-1">确认消耗点数</h3>
                    <p class="text-slate-400 text-sm">VIP用户免费，普通用户确认消耗10点数</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center text-void-900 font-bold">3</div>
                  <div>
                    <h3 class="font-bold text-white mb-1">生成报告</h3>
                    <p class="text-slate-400 text-sm">系统自动收集分析数据，5-10秒内生成完整风险报告</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center text-void-900 font-bold">4</div>
                  <div>
                    <h3 class="font-bold text-white mb-1">查看与导出</h3>
                    <p class="text-slate-400 text-sm">在线查看报告，支持PDF、Word格式导出</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 分析过程面板 -->
          <div v-show="activeTab === 'analysis'" class="space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white mb-4">分析过程说明</h2>
              
              <div class="space-y-6">
                <!-- 数据来源 -->
                <div class="card-glass">
                  <h3 class="font-bold text-white mb-3">数据来源</h3>
                  <ul class="space-y-2 text-slate-400 text-sm">
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:database" :size="14" class="text-aurora-cyan mt-1" />
                      <span>国家企业信用信息公示系统</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:database" :size="14" class="text-aurora-cyan mt-1" />
                      <span>中国裁判文书网</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:database" :size="14" class="text-aurora-cyan mt-1" />
                      <span>信用中国</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:database" :size="14" class="text-aurora-cyan mt-1" />
                      <span>企查查、天眼查等第三方数据平台</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:database" :size="14" class="text-aurora-cyan mt-1" />
                      <span>主流媒体舆情数据</span>
                    </li>
                  </ul>
                </div>

                <!-- API使用 -->
                <div class="card-glass">
                  <h3 class="font-bold text-white mb-3">API使用</h3>
                  <ul class="space-y-2 text-slate-400 text-sm">
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:code" :size="14" class="text-aurora-purple mt-1" />
                      <span>企业工商信息API</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:code" :size="14" class="text-aurora-purple mt-1" />
                      <span>司法诉讼查询API</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:code" :size="14" class="text-aurora-purple mt-1" />
                      <span>失信被执行人查询API</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:code" :size="14" class="text-aurora-purple mt-1" />
                      <span>舆情监控API</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:code" :size="14" class="text-aurora-purple mt-1" />
                      <span>企业关联关系分析API</span>
                    </li>
                  </ul>
                </div>

                <!-- 分析方法 -->
                <div class="card-glass">
                  <h3 class="font-bold text-white mb-3">分析方法</h3>
                  <ul class="space-y-2 text-slate-400 text-sm">
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:chart-line" :size="14" class="text-aurora-green mt-1" />
                      <span>多维度风险指标体系构建</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:chart-line" :size="14" class="text-aurora-green mt-1" />
                      <span>层次分析法(AHP)确定指标权重</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:chart-line" :size="14" class="text-aurora-green mt-1" />
                      <span>行业基准对比分析</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:chart-line" :size="14" class="text-aurora-green mt-1" />
                      <span>历史趋势分析</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Icon icon="fa-solid:chart-line" :size="14" class="text-aurora-green mt-1" />
                      <span>关联企业风险传导分析</span>
                    </li>
                  </ul>
                </div>

                <!-- 模型说明 -->
                <div class="card-glass">
                  <h3 class="font-bold text-white mb-3">模型说明</h3>
                  <div class="text-slate-400 text-sm space-y-3">
                    <p>本应用采用机器学习模型进行风险评估，主要包括：</p>
                    <ul class="space-y-2 ml-4">
                      <li class="flex items-start gap-2">
                        <Icon icon="fa-solid:brain" :size="14" class="text-aurora-red mt-1" />
                        <span>基于随机森林的风险分类模型</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <Icon icon="fa-solid:brain" :size="14" class="text-aurora-red mt-1" />
                        <span>基于梯度提升树的风险评分模型</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <Icon icon="fa-solid:brain" :size="14" class="text-aurora-red mt-1" />
                        <span>自然语言处理模型用于舆情分析</span>
                      </li>
                    </ul>
                    <p class="mt-3">模型训练数据覆盖了2018-2025年的企业风险案例，准确率达到85%以上。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 用户评价面板 -->
          <div v-show="activeTab === 'reviews'" class="space-y-6">
            <div>
              <h2 class="text-xl font-bold text-white mb-4">用户评价</h2>
              <div class="flex items-center gap-4 mb-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-white mb-1">4.8</div>
                  <div class="flex">
                    <Icon icon="fa-solid:star" :size="16" class="text-yellow-500" />
                    <Icon icon="fa-solid:star" :size="16" class="text-yellow-500" />
                    <Icon icon="fa-solid:star" :size="16" class="text-yellow-500" />
                    <Icon icon="fa-solid:star" :size="16" class="text-yellow-500" />
                    <Icon icon="fa-solid:star-half-alt" :size="16" class="text-yellow-500" />
                  </div>
                </div>
                <p class="text-slate-500 text-xs mt-1">基于1245条评价</p>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="card-glass">
                <div class="flex items-start justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-green flex items-center justify-center">
                      <span class="text-void-900 font-bold">黄</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-white">张经理</h4>
                      <div class="flex items-center gap-1 mt-1">
                        <Icon icon="fa-solid:star" :size="12" class="text-yellow-500 text-xs" />
                        <Icon icon="fa-solid:star" :size="12" class="text-yellow-500 text-xs" />
                      </div>
                    </div>
                  </div>
                  <p class="text-slate-400 text-sm">
                    这个应用帮助我们快速评估合作伙伴的风险状况，生成的报告专业且全面，大大提高了我们的尽职调查效率。特别是VIP免费政策，为我们节省了大量成本。
                  </p>
                </div>
              </div>
                </div>
              <div class="card-glass">
                <div class="flex items-start justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-green flex items-center justify-center">
                      <span class="text-void-900 font-bold">李</span>
                    </div>
                    <div>
                      <h4 class="font-bold text-white">李总监</h4>
                      <div class="flex items-center gap-1 mt-1">
                        <Icon icon="fa-solid:star" :size="12" class="text-yellow-500 text-xs" />
                        <Icon icon="fa-solid:star" :size="12" class="text-yellow-500 text-xs" />
                        <Icon icon="fa-solid:star" :size="12" class="text-yellow-500 text-xs" />
                      </div>
                    </div>
                  </div>
                  <p class="text-slate-400 text-sm">
                    作为投资机构的分析师，这个工具是我们的必备利器。风险评估准确度高，数据分析维度全面，API接口稳定可靠。强烈推荐给所有需要做企业尽调的同行。
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@/components/Icon'
import PageLayout from '@/layout/data-engine/PageLayout.vue'

const router = useRouter()

// 响应式数据
const activeTab = ref('intro')

// Tab配置
const tabs = [
  { key: 'intro', label: '介绍' },
  { key: 'features', label: '功能' },
  { key: 'usage', label: '使用说明' },
  { key: 'analysis', label: '分析过程' },
  { key: 'reviews', label: '用户评价' }
]

// 方法
const setActiveTab = (tab: string) => {
  activeTab.value = tab
}

const handleUseApp = () => {
  console.log('使用应用')
  // 这里可以添加实际的应用使用逻辑
}
</script>

<style scoped>
.card-glass {
  @apply glass-panel-base rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-aurora-cyan/30 hover:shadow-glow-sm;
}

.badge {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-aurora-cyan;
}

.badge-vip {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-void-900;
}

.btn-primary {
  @apply relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-void-900 transition-all duration-300;

  background: linear-gradient(90deg, #00d2ff 0%, #00ffa3 100%);
}

.btn-primary:hover {
  @apply shadow-glow-md transform -translate-y-0.5 scale-105;
}
</style>
