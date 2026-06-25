<template>
  <div class="bg-white font-sans text-text-dark min-h-screen">
    <!-- [MODULE] 1a2_起始页模块 -->
    <div v-show="currentPage === 'start'" class="min-h-screen bg-white bg-grid">
      <!-- [MODULE] 4f5_起始页:顶部品牌区 -->
      <div class="container mx-auto px-4 pt-6">
        <div class="flex items-center">
          <Icon icon="fa-solid:shield-alt" :size="24" class="text-primary mr-3" />
          <div>
            <h1 class="text-xl font-bold text-text-dark">
              企业合规风险审查
            </h1>
            <p class="text-text-gray text-sm">
              精准核查·合规风控·风险预警
            </p>
          </div>
        </div>
      </div>
      <!-- [/MODULE] 4f5_起始页:顶部品牌区 -->
      
      <!-- [MODULE] 8c9_起始页:核心查询区 -->
      <div class="container mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-100px)]">
        <div class="w-full max-w-3xl text-center">
          <h2 class="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-text-dark mb-3">
            企业合规风险审查
          </h2>
          <p class="text-text-gray text-lg mb-8">
            获取专业企业合规风险评分与审查报告
          </p>
          <div class="flex flex-col sm:flex-row gap-3 mb-4">
            <input 
              type="text" 
              v-model="companyInput"
              placeholder="请输入企业名称或统一社会信用代码" 
              class="flex-1 px-5 py-3 rounded-lg border border-border-light bg-white/80 backdrop-blur-sm focus:outline-none focus:border-primary focus:bg-primary/5 transition-all"
              @keyup.enter="startSearch"
            />
            <button @click="startSearch" class="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 active:scale-95 transition-all shadow-card flex items-center justify-center">
              <Icon icon="fa-solid:search" :size="16" class="mr-2" />
              <span>查询</span>
            </button>
          </div>
          <div class="text-text-gray text-sm flex items-center justify-center">
            <Icon icon="fa-solid:info-circle" :size="14" class="mr-2" />
            <span>支持企业全称、关键字、统一社会信用代码精准匹配</span>
          </div>
        </div>
      </div>
      <!-- [/MODULE] 8c9_起始页:核心查询区 -->
    </div>
    <!-- [/MODULE] 1a2_起始页模块 -->
    
    <!-- [MODULE] 3b7_加载页模块 -->
    <div v-show="currentPage === 'loading'" class="min-h-screen bg-bg-gray flex items-center justify-center">
      <div class="text-center max-w-md mx-auto px-4">
        <p class="text-text-dark text-lg mb-6">
          正在分析企业合规风险数据，请稍候
        </p>
        <div class="relative w-32 h-32 mx-auto mb-6">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E6EB" stroke-width="8" />
            <circle 
              ref="progressRing"
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#1677FF" 
              stroke-width="8" 
              stroke-linecap="round" 
              class="progress-ring-circle" 
              stroke-dasharray="283 283" 
              stroke-dashoffset="283"
            />
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-xl font-semibold text-primary">{{ progressPercent }}%</span>
          </div>
        </div>
        <div class="text-left mb-6">
          <div 
            v-for="(step, index) in loadingSteps" 
            :key="index"
            class="flex items-center mb-2"
          >
            <span 
              :class="[
                'w-5 h-5 rounded-full bg-bg-gray border border-border-light flex items-center justify-center mr-3 text-xs',
                step.completed ? 'bg-success border-success' : 'text-text-gray'
              ]"
            >
              <Icon v-show="step.completed" icon="fa-solid:check" :size="10" />
            </span>
            <span class="text-text-gray">{{ step.text }}</span>
          </div>
        </div>
        <p class="text-text-gray text-sm">
          正在整合多维度数据生成合规风险分析报告...
        </p>
      </div>
    </div>
    <!-- [/MODULE] 3b7_加载页模块 -->
    
    <!-- [MODULE] 9d2_结果页模块 -->
    <div v-show="currentPage === 'result'" class="min-h-screen bg-bg-gray">
      <!-- [MODULE] 2e4_结果页:顶部导航栏 -->
      <header class="bg-white/80 backdrop-blur-md border-b border-border-light sticky top-0 z-10">
        <div class="container mx-auto px-4 py-4">
          <div class="flex items-center">
            <Icon icon="fa-solid:shield-alt" :size="20" class="text-primary mr-3" />
            <h1 class="text-lg font-bold text-text-dark">
              企业合规风险审查
            </h1>
          </div>
        </div>
      </header>
      <!-- [/MODULE] 2e4_结果页:顶部导航栏 -->
      
      <!-- [MODULE] 5f1_结果页:主体内容 -->
      <main class="container mx-auto px-4 py-6">
        <div class="flex flex-col lg:flex-row gap-6">
          <!-- [MODULE] 6a3_结果页:左侧企业信息 -->
          <div class="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
            <div class="bg-white rounded-xl shadow-card p-5">
              <h3 class="text-lg font-bold mb-4 pb-3 border-b border-border-light">
                企业基础信息
              </h3>
              <div class="space-y-4">
                <div v-for="(info, key) in companyInfo" :key="key" class="flex">
                  <span class="w-28 text-text-gray flex-shrink-0">{{ info.label }}</span>
                  <span v-if="info.type === 'badge'" :class="info.class">
                    {{ info.value }}
                  </span>
                  <span v-else-if="info.type === 'text'" :class="info.class">
                    {{ info.value }}
                  </span>
                  <span v-else>{{ info.value }}</span>
                </div>
              </div>
              <div class="pt-3 border-t border-border-light">
                <div class="flex items-center">
                  <span class="text-text-gray mr-2">合规结论：</span>
                  <span class="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                    合规通过
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- [/MODULE] 6a3_结果页:左侧企业信息 -->
          
          <!-- [MODULE] 4d5_结果页:右侧风险分析 -->
          <div class="lg:w-2/3">
            <!-- [MODULE] 7g8_风险综合评分卡片 -->
            <div class="bg-white rounded-xl shadow-card p-6 mb-6">
              <div class="flex flex-col md:flex-row gap-6">
                <!-- 左侧得分区域 -->
                <div class="md:w-1/2 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border-light pb-4 md:pb-0 md:pr-6">
                  <h4 class="text-lg font-semibold mb-4 w-full text-left">
                    企业综合风险得分
                  </h4>
                  <div ref="scoreChart" class="w-48 h-48 mb-4"></div>
                  <div class="text-center">
                    <div class="flex items-center justify-center gap-3 mb-1">
                      <span class="text-4xl font-bold">{{ riskScore.total }}</span>
                      <span class="px-3 py-1 rounded-full text-sm font-medium" :class="riskScore.levelClass">
                        {{ riskScore.level }}
                      </span>
                    </div>
                    <p class="text-text-gray text-sm">
                      评估日期：<span>{{ riskScore.evaluationDate }}</span>
                    </p>
                  </div>
                </div>
                
                <!-- 右侧风险解读 -->
                <div class="md:w-1/2">
                  <div class="flex items-center justify-between mb-4">
                    <h4 class="text-lg font-semibold">
                      风险等级解读
                    </h4>
                    <button @click="showRuleModal" class="px-3 py-1 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors text-sm flex items-center">
                      <Icon icon="fa-solid:info-circle" :size="12" class="mr-1" />
                      规则说明
                    </button>
                  </div>
                  <p class="mb-4 text-text-gray leading-relaxed">
                    根据大数据多维度综合分析，该企业当前综合风险等级为
                    <span class="font-semibold" :class="riskScore.levelClass">
                      {{ riskScore.level }}
                    </span>
                    ，暂无
                    <span class="font-semibold text-danger">
                      重大违规风险
                    </span>
                    记录，符合合规准入基本要求。
                  </p>
                  <!-- 金字塔风险图示 -->
                  <div class="w-full max-w-[240px] mx-auto mt-6">
                    <div class="overflow-hidden">
                      <!-- 高风险 -->
                      <div class="bg-danger h-10 flex items-center pl-4 text-white font-medium clip-triangle-top">
                        <span>高风险</span>
                      </div>
                      <!-- 较高风险 -->
                      <div class="bg-warning h-10 flex items-center pl-8 text-white font-medium clip-triangle-middle">
                        <span>较高风险</span>
                      </div>
                      <!-- 中风险 -->
                      <div class="bg-caution h-10 flex items-center pl-12 text-text-dark font-medium clip-triangle-middle">
                        <span>中风险</span>
                      </div>
                      <!-- 较低风险 -->
                      <div class="bg-info h-10 flex items-center pl-16 text-white font-medium clip-triangle-middle">
                        <span>较低风险</span>
                      </div>
                      <!-- 低风险 -->
                      <div class="bg-success h-10 flex items-center pl-20 text-white font-medium clip-triangle-bottom">
                        <span>低风险</span>
                        <Icon icon="fa-solid:check" :size="14" class="ml-auto mr-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- [/MODULE] 7g8_风险综合评分卡片 -->
            
            <!-- [MODULE] 8h2_风险详情表格 -->
            <div class="bg-white rounded-xl shadow-card p-6 mb-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-bold">
                  合规风险指标详情
                </h3>
                <div class="relative" ref="exportDropdownContainer">
                  <button @click="toggleExportDropdown" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center">
                    <Icon icon="fa-solid:download" :size="14" class="mr-2" />
                    报告导出
                    <Icon icon="fa-solid:chevron-down" :size="12" class="ml-2" />
                  </button>
                  <div v-show="showDropdown" class="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-card border border-border-light z-20 py-2">
                    <a 
                      v-for="option in exportOptions" 
                      :key="option.type"
                      @click="handleExport(option.type)"
                      class="export-option block px-4 py-2 hover:bg-bg-gray transition-colors cursor-pointer"
                    >
                      <Icon :icon="option.icon" :size="14" :class="option.iconClass + ' mr-2'" />
                      {{ option.label }}
                    </a>
                  </div>
                </div>
              </div>
              <div class="risk-table-container">
                <table class="w-full border-collapse">
                  <thead>
                    <tr class="bg-bg-gray">
                      <th class="px-4 py-3 text-left border border-border-light font-semibold text-sm">风险类型</th>
                      <th class="px-4 py-3 text-left border border-border-light font-semibold text-sm">风险标签</th>
                      <th class="px-4 py-3 text-left border border-border-light font-semibold text-sm">指标等级</th>
                      <th class="px-4 py-3 text-left border border-border-light font-semibold text-sm">指标得分</th>
                      <th class="px-4 py-3 text-left border border-border-light font-semibold text-sm">指标说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="(category, categoryIndex) in riskCategories" :key="categoryIndex">
                      <tr 
                        v-for="(item, itemIndex) in category.items" 
                        :key="itemIndex"
                        :class="[
                          'hover:bg-bg-gray/50',
                          categoryIndex % 2 === 1 ? 'bg-bg-gray/20' : ''
                        ]"
                      >
                        <td 
                          v-if="itemIndex === 0" 
                          class="px-4 py-3 border border-border-light text-sm" 
                          :rowspan="category.items.length"
                        >
                          {{ category.name }}
                        </td>
                        <td class="px-4 py-3 border border-border-light text-sm">{{ item.label }}</td>
                        <td class="px-4 py-3 border border-border-light text-sm">
                          <span class="px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                            无风险
                          </span>
                        </td>
                        <td class="px-4 py-3 border border-border-light text-sm font-medium text-success">0</td>
                        <td class="px-4 py-3 border border-border-light text-sm text-text-gray">{{ item.description }}</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- [/MODULE] 8h2_风险详情表格 -->
          </div>
          <!-- [/MODULE] 4d5_结果页:右侧风险分析 -->
        </div>
      </main>
      <!-- [/MODULE] 5f1_结果页:主体内容 -->
    </div>
    <!-- [/MODULE] 9d2_结果页模块 -->
    
    <!-- 规则说明弹窗 -->
    <div v-show="showRuleModalVisible" class="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4" @click="closeRuleModal">
      <div class="bg-white rounded-xl shadow-card max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative" @click.stop>
        <button @click="closeRuleModal" class="absolute top-4 right-4 text-text-gray hover:text-text-dark">
          <Icon icon="fa-solid:times" :size="20" />
        </button>
        <h3 class="text-xl font-bold mb-4">
          风险评级规则说明
        </h3>
        <p class="text-text-gray mb-4 leading-relaxed">
          企业合规风险得分依据多维度合规、经营、司法、失信处罚数据综合计算，满分100分，分值越高合规风险越高，分值越低合规风险越低。
        </p>
        <div class="space-y-3">
          <div v-for="level in riskLevels" :key="level.level" class="p-3 rounded-lg" :class="level.class">
            <div class="font-semibold mb-1" :class="level.textColor">
              {{ level.level }} 【{{ level.range }}】
            </div>
            <p class="text-sm text-text-dark">{{ level.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 导出弹窗 -->
    <div v-show="showExportModal" class="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4" @click="closeExportModal">
      <div class="bg-white rounded-xl shadow-card max-w-md w-full p-6 relative" @click.stop>
        <button @click="closeExportModal" class="absolute top-4 right-4 text-text-gray hover:text-text-dark">
          <Icon icon="fa-solid:times" :size="20" />
        </button>
        <h3 class="text-xl font-bold mb-4">
          导出报告
        </h3>
        <div class="space-y-4">
          <div>
            <label class="block text-text-gray mb-2 text-sm">文件名称</label>
            <input 
              type="text" 
              v-model="exportFilename"
              class="w-full px-4 py-2 rounded-lg border border-border-light focus:outline-none focus:border-primary"
            />
          </div>
          <div class="space-y-2">
            <label class="flex items-center">
              <input type="checkbox" v-model="exportWatermark" class="form-checkbox rounded text-primary" />
              <span class="ml-2 text-sm">添加防篡改水印</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" v-model="exportQrcode" class="form-checkbox rounded text-primary" />
              <span class="ml-2 text-sm">添加核验二维码</span>
            </label>
          </div>
          <div class="pt-2">
            <button @click="confirmExport" class="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors" :disabled="exportStatus === 'loading'">
              <span v-if="exportStatus === 'loading'">
                <Icon icon="fa-solid:spinner" :size="14" class="fa-spin mr-2" />
                正在生成文件...
              </span>
              <span v-else>开始生成导出</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 导出成功提示 -->
    <div v-show="showToast" class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-success text-white px-6 py-3 rounded-lg shadow-card z-50 flex items-center">
      <Icon icon="fa-solid:check-circle" :size="14" class="mr-2" />
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import Icon from '@/components/Icon/src/Icon.vue'

// 响应式数据
const currentPage = ref('start')
const companyInput = ref('')
const progressPercent = ref(0)
const progressRing = ref()
const scoreChart = ref()
const showDropdown = ref(false)
const showRuleModalVisible = ref(false)
const showExportModal = ref(false)
const exportFilename = ref('企业合规风险审查报告')
const exportWatermark = ref(true)
const exportQrcode = ref(true)
const exportStatus = ref('idle')
const showToast = ref(false)
const toastMessage = ref('')

// 加载步骤
const loadingSteps = ref([
  { text: '核验企业基本信息', completed: false },
  { text: '查询风险违规记录', completed: false },
  { text: '分析经营异常数据', completed: false },
  { text: '筛查司法诉讼风险', completed: false },
  { text: '统计失信处罚信息', completed: false }
])

// 企业信息
const companyInfo = ref({
  name: { label: '企业名称', value: '北京字节跳动网络技术有限公司' },
  unifiedCode: { label: '统一社会信用代码', value: '91110108MA0080GM5F' },
  legalRepresentative: { label: '法定代表人', value: '张一鸣' },
  registrationStatus: { 
    label: '登记状态', 
    value: '存续',
    type: 'badge',
    class: 'px-2 py-0.5 bg-success/10 text-success rounded text-sm'
  },
  establishmentDate: { label: '成立日期', value: '2012-03-12' },
  registeredCapital: { label: '注册资本', value: '200000 万元人民币' },
  industry: { label: '所属行业', value: '互联网和相关服务' },
  registeredAddress: { label: '注册地址', value: '北京市海淀区知春路甲48号B座3层301室' },
  businessScope: { 
    label: '经营范围', 
    value: '互联网技术推广、技术开发、技术转让、技术咨询、技术服务；设计、制作、代理、发布广告；从事互联网文化活动；广播电视节目制作等',
    type: 'text',
    class: 'text-sm leading-relaxed'
  }
})

// 风险评分
const riskScore = ref({
  total: 12,
  level: '低风险',
  levelClass: 'bg-success/10 text-success',
  evaluationDate: '2024年5月20日'
})

// 风险等级
const riskLevels = ref([
  {
    level: '高风险',
    range: '80-100分',
    description: '该企业处于高风险等级，建议谨慎与之建立业务关系',
    class: 'bg-danger/5 border border-danger/20',
    textColor: 'text-danger'
  },
  {
    level: '较高风险',
    range: '60-80分)',
    description: '该企业风险等级处于较高水平，建议采取进一步的强化尽职调查',
    class: 'bg-warning/5 border border-warning/20',
    textColor: 'text-warning'
  },
  {
    level: '中风险',
    range: '40-60分)',
    description: '该企业当前风险等级处于中等水平',
    class: 'bg-caution/5 border border-caution/20',
    textColor: 'text-text-dark'
  },
  {
    level: '较低风险',
    range: '20-40分)',
    description: '该企业当前时间点，存在个别风险特征项目',
    class: 'bg-info/5 border border-info/20',
    textColor: 'text-info'
  },
  {
    level: '低风险',
    range: '0-20分)',
    description: '该企业当前时间点，暂无明显风险特征项目',
    class: 'bg-success/5 border border-success/20',
    textColor: 'text-success'
  }
])

// 风险类别
const riskCategories = ref([
  {
    name: '涉及采购不良行为',
    items: [
      { label: '假冒中央企业', description: '未检测到相关不良记录' },
      { label: '中央企业不良行为', description: '未检测到相关不良记录' },
      { label: '政府采购严重违法失信行为', description: '未检测到相关不良记录' },
      { label: '重大税收违法失信案件', description: '未检测到相关不良记录' },
      { label: '军队采购失信', description: '未检测到相关不良记录' },
      { label: '军队采购暂停', description: '未检测到相关不良记录' }
    ]
  },
  {
    name: '涉及违法行为',
    items: [
      { label: '失信被执行人', description: '未检测到相关记录' },
      { label: '限制高消费', description: '未检测到相关记录' },
      { label: '被执行人', description: '未检测到相关记录' },
      { label: '终本案件', description: '未检测到相关记录' }
    ]
  },
  {
    name: '涉及经营风险',
    items: [
      { label: '经营状态非存续', description: '企业当前经营状态为存续' },
      { label: '经营异常', description: '未列入经营异常名录' },
      { label: '股权冻结/破产重整', description: '未检测到相关记录' }
    ]
  },
  {
    name: '涉及内部黑名单',
    items: [
      { label: '被列入集团级黑名单', description: '不在内部黑名单中' },
      { label: '被列入二级单位重点关注', description: '不在重点关注名单中' },
      { label: '被列入三级单位重点关注', description: '不在重点关注名单中' }
    ]
  },
  {
    name: '涉及供应商马甲',
    items: [
      { label: '董监高关联黑名单', description: '未检测到关联匹配' },
      { label: '联系电话关联黑名单', description: '未检测到关联匹配' },
      { label: '注册地址关联黑名单', description: '未检测到关联匹配' },
      { label: '邮箱关联黑名单', description: '未检测到关联匹配' }
    ]
  },
  {
    name: '涉及历史违法不良行为',
    items: [
      { label: '历史失信被执行人（近3年）', description: '未检测到历史记录' },
      { label: '历史限制高消费（近3年）', description: '未检测到历史记录' },
      { label: '历史被执行人（近3年）', description: '未检测到历史记录' },
      { label: '历史终本案件（近3年）', description: '未检测到历史记录' },
      { label: '历史中央企业不良行为', description: '未检测到历史记录' },
      { label: '历史围串标记录', description: '未检测到历史记录' }
    ]
  }
])

// 导出选项
const exportOptions = ref([
  {
    type: 'pdf',
    label: 'PDF完整版合规风险报告',
    icon: 'fa-solid:file-pdf',
    iconClass: 'text-danger'
  },
  {
    type: 'excel',
    label: 'Excel指标明细报表',
    icon: 'fa-solid:file-excel',
    iconClass: 'text-success'
  }
])

// 方法
const startSearch = () => {
  if (!companyInput.value.trim()) {
    alert('请输入企业名称或统一社会信用代码')
    return
  }
  
  // 更新企业名称
  companyInfo.value.name.value = companyInput.value
  
  // 切换到加载页
  currentPage.value = 'loading'
  startLoading()
}

const startLoading = () => {
  progressPercent.value = 0
  loadingSteps.value.forEach(step => step.completed = false)
  
  const checkPoints = [20, 40, 60, 80, 100]
  let checkIndex = 0
  
  const interval = setInterval(() => {
    progressPercent.value += 1
    
    if (checkIndex < checkPoints.length && progressPercent.value >= checkPoints[checkIndex]) {
      loadingSteps.value[checkIndex].completed = true
      checkIndex++
    }
    
    if (progressPercent.value >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        currentPage.value = 'result'
        nextTick(() => {
          initScoreChart()
        })
      }, 800)
    }
  }, 30)
}

const initScoreChart = () => {
  if (scoreChart.value) {
    const myChart = echarts.init(scoreChart.value)
    const option = {
      series: [{
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: getRiskColor(riskScore.value.total)
          }
        },
        axisLine: {
          lineStyle: {
            width: 18,
            color: [[1, '#E5E6EB']]
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}',
          fontSize: 28,
          fontWeight: 'bold',
          offsetCenter: [0, 0]
        },
        data: [{
          value: riskScore.value.total
        }]
      }]
    }
    myChart.setOption(option)
    
    // 响应式resize
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  }
}

const getRiskColor = (score: number) => {
  if (score >= 80) return '#F5222D'
  if (score >= 60) return '#FA8C16'
  if (score >= 40) return '#FADB14'
  if (score >= 20) return '#40A9FF'
  return '#52C41A'
}

const toggleExportDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const showRuleModal = () => {
  showRuleModalVisible.value = true
}

const closeRuleModal = () => {
  showRuleModalVisible.value = false
}

const handleExport = (type: string) => {
  showDropdown.value = false
  showExportModal.value = true
}

const closeExportModal = () => {
  showExportModal.value = false
  exportStatus.value = 'idle'
}

const confirmExport = () => {
  exportStatus.value = 'loading'
  
  setTimeout(() => {
    exportStatus.value = 'success'
    showExportModal.value = false
    showToast.value = true
    toastMessage.value = '报告导出成功！'
    
    setTimeout(() => {
      showToast.value = false
      exportStatus.value = 'idle'
    }, 3000)
  }, 1500)
}

// 组件挂载
onMounted(() => {
  // 点击外部关闭下拉菜单
  document.addEventListener('click', (e) => {
    if (showDropdown.value && !(e.target as Element).closest('.relative')) {
      showDropdown.value = false
    }
  })
  
  // ESC关闭弹窗
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      showRuleModalVisible.value = false
      showExportModal.value = false
    }
  })
})
</script>

<style lang="scss" scoped>


@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.content-auto {
  content-visibility: auto;
}

.bg-grid {
  background-image: 
    linear-gradient(rgb(0 0 0 / 3%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(0 0 0 / 3%) 1px, transparent 1px);
  background-size: 24px 24px;
}

.progress-ring-circle {
  transform: rotate(-90deg);
  transition: stroke-dashoffset 0.35s;
  transform-origin: 50% 50%;
}

.modal-overlay {
  background-color: rgb(0 0 0 / 45%);
}

.risk-table-container {
  overflow-x: auto;
}

.clip-triangle-top {
  clip-path: polygon(0 0, 100% 0, 96% 100%, 0 100%);
}

.clip-triangle-middle {
  clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
}

.clip-triangle-bottom {
  clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);
}

// 自定义颜色变量
:root {
  --primary: #1677FF;
  --danger: #F5222D;
  --warning: #FA8C16;
  --caution: #FADB14;
  --info: #40A9FF;
  --success: #52C41A;
  --text-dark: #1D2129;
  --text-gray: #86909C;
  --border-light: #E5E6EB;
  --bg-gray: #F5F7FA;
}

.text-primary {
  color: var(--primary);
}

.text-danger {
  color: var(--danger);
}

.text-warning {
  color: var(--warning);
}

.text-caution {
  color: var(--caution);
}

.text-info {
  color: var(--info);
}

.text-success {
  color: var(--success);
}

.text-text-dark {
  color: var(--text-dark);
}

.text-text-gray {
  color: var(--text-gray);
}

.bg-primary {
  background-color: var(--primary);
}

.bg-danger {
  background-color: var(--danger);
}

.bg-warning {
  background-color: var(--warning);
}

.bg-caution {
  background-color: var(--caution);
}

.bg-info {
  background-color: var(--info);
}

.bg-success {
  background-color: var(--success);
}

.bg-bg-gray {
  background-color: var(--bg-gray);
}

.border-border-light {
  border-color: var(--border-light);
}

.border-primary {
  border-color: var(--primary);
}

.border-danger {
  border-color: var(--danger);
}

.border-warning {
  border-color: var(--warning);
}

.border-caution {
  border-color: var(--caution);
}

.border-info {
  border-color: var(--info);
}

.border-success {
  border-color: var(--success);
}

.shadow-card {
  box-shadow: 0 2px 14px 0 rgb(0 0 0 / 6%);
}

// 动画类
.fa-spin {
  animation: spin 1s linear infinite;
}
</style>
