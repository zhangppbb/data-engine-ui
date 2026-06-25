<template>
  <PageLayout>
    <!-- 主内容 -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
      <!-- 页面标题 -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">个人中心</h1>
        <p class="text-slate-400">管理您的账户、点数、API密钥和使用记录</p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- 左侧：账户概览 -->
        <div class="lg:col-span-1">
          <div class="card-glass sticky top-24">
            <!-- 用户信息 -->
            <div class="text-center mb-6">
              <div class="w-24 h-24 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-green mx-auto mb-4 flex items-center justify-center">
                <span class="text-void-900 text-3xl font-bold">黄</span>
              </div>
              <h2 class="text-xl font-bold text-white mb-1">黄经理</h2>
              <p class="text-slate-400 text-sm mb-3">风险控制部负责人</p>
              <span class="badge-vip">VIP会员</span>
            </div>

            <!-- 账户状态 -->
            <div class="space-y-4 mb-6">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-slate-400">账户状态</span>
                  <span class="text-aurora-green font-medium">正常</span>
                </div>
                <div class="w-full bg-void-800/50 rounded-full h-2">
                  <div class="bg-aurora-green h-2 rounded-full" style="width: 100%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-slate-400">信用等级</span>
                  <span class="text-aurora-cyan font-medium">AAA</span>
                </div>
                <div class="w-full bg-void-800/50 rounded-full h-2">
                  <div class="bg-aurora-cyan h-2 rounded-full" style="width: 95%"></div>
                </div>
              </div>
            </div>

            <!-- 快速统计 -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="text-center p-3 rounded-lg bg-white/5">
                <p class="text-2xl font-bold text-aurora-cyan">1,234</p>
                <p class="text-xs text-slate-400">剩余点数</p>
              </div>
              <div class="text-center p-3 rounded-lg bg-white/5">
                <p class="text-2xl font-bold text-aurora-green">56</p>
                <p class="text-xs text-slate-400">API密钥</p>
              </div>
              <div class="text-center p-3 rounded-lg bg-white/5">
                <p class="text-2xl font-bold text-aurora-purple">128</p>
                <p class="text-xs text-slate-400">调用次数</p>
              </div>
              <div class="text-center p-3 rounded-lg bg-white/5">
                <p class="text-2xl font-bold text-aurora-red">3</p>
                <p class="text-xs text-slate-400">应用中</p>
              </div>
            </div>

            <!-- 会员到期 -->
            <div class="p-4 rounded-lg bg-gradient-to-r from-aurora-purple/20 to-aurora-cyan/20 border border-aurora-purple/30">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-slate-300">VIP会员到期时间</span>
                <span class="badge-success">续费中</span>
              </div>
              <p class="text-xl font-bold text-white">2025-12-31</p>
            </div>
          </div>
        </div>

        <!-- 右侧：详细信息 -->
        <div class="lg:col-span-2 space-y-6">
          <!-- 标签页导航 -->
          <div class="glass-panel-base rounded-xl">
            <div class="flex flex-wrap border-b border-white/10">
              <button 
                v-for="tab in tabs" 
                :key="tab.id"
                :class="[
                  'tab-btn px-6 py-4 font-medium',
                  activeTab === tab.id 
                    ? 'text-aurora-cyan border-b-2 border-aurora-cyan' 
                    : 'text-slate-400 hover:text-white transition-colors'
                ]" 
                @click="setActiveTab(tab.id)"
              >
                {{ tab.label }}
              </button>
            </div>
          </div>

          <!-- 标签页内容 -->
          <div class="glass-panel-base rounded-xl p-6">
            <!-- 账户信息 -->
            <div v-show="activeTab === 'account'">
              <h3 class="text-xl font-bold text-white mb-6">账户信息</h3>
              <div class="space-y-4">
                <div v-for="info in accountInfo" :key="info.label" class="flex items-center justify-between py-3" :class="{ 'border-b border-white/10': info.border }">
                  <span class="text-slate-400">{{ info.label }}</span>
                  <span class="text-white font-medium">{{ info.value }}</span>
                </div>
              </div>
              <div class="mt-6 flex gap-4">
                <button class="btn-primary py-2 px-6" @click="handleEditProfile">编辑资料</button>
                <button class="px-6 py-2 rounded-full font-medium text-white transition-all duration-300 border border-white/20 hover:border-aurora-cyan/50 hover:bg-white/5" @click="handleChangePassword">修改密码</button>
              </div>
            </div>

            <!-- API密钥 -->
            <div v-show="activeTab === 'api'">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-xl font-bold text-white">API密钥管理</h3>
                <button class="btn-primary py-2 px-6" @click="handleCreateKey">
                  <Icon icon="fa-solid:plus" :size="14" class="mr-2" />创建密钥
                </button>
              </div>
              <div class="space-y-4">
                <div v-for="key in apiKeys" :key="key.id" class="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div class="flex items-center justify-between mb-3">
                    <div>
                      <h4 class="text-white font-medium mb-1">{{ key.name }}</h4>
                      <p class="text-sm text-slate-400">{{ key.key }}</p>
                    </div>
                    <div class="flex items-center gap-2">
                      <span :class="key.status === '活跃' ? 'badge-success' : 'badge'">{{ key.status }}</span>
                      <button class="text-slate-400 hover:text-white transition" @click="handleKeyMenu(key)">
                        <Icon icon="fa-solid:ellipsis-v" :size="14" />
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span class="text-slate-400">今日调用</span>
                      <p :class="key.status === '活跃' ? 'text-aurora-cyan' : 'text-aurora-purple'" class="font-bold">{{ key.todayCalls }}</p>
                    </div>
                    <div>
                      <span class="text-slate-400">本月调用</span>
                      <p :class="key.status === '活跃' ? 'text-aurora-cyan' : 'text-aurora-purple'" class="font-bold">{{ key.monthlyCalls }}</p>
                    </div>
                    <div>
                      <span class="text-slate-400">额度限制</span>
                      <p class="text-white font-bold">{{ key.limit }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 使用记录 -->
            <div v-show="activeTab === 'usage'">
              <h3 class="text-xl font-bold text-white mb-6">使用记录</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left">
                  <thead>
                    <tr class="border-b border-white/10">
                      <th class="py-3 px-4 font-semibold text-white">时间</th>
                      <th class="py-3 px-4 font-semibold text-white">服务</th>
                      <th class="py-3 px-4 font-semibold text-white">调用内容</th>
                      <th class="py-3 px-4 font-semibold text-white">消耗点数</th>
                      <th class="py-3 px-4 font-semibold text-white">状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="record in usageRecords" :key="record.id" class="border-b border-white/5 hover:bg-white/5">
                      <td class="py-3 px-4 text-sm">{{ record.time }}</td>
                      <td class="py-3 px-4 text-sm">{{ record.service }}</td>
                      <td class="py-3 px-4 text-sm truncate max-w-xs">{{ record.content }}</td>
                      <td class="py-3 px-4 text-sm" :class="record.status === '成功' ? 'text-aurora-cyan' : 'text-aurora-red'">{{ record.points }}</td>
                      <td class="py-3 px-4">
                        <span :class="record.status === '成功' ? 'badge-success' : 'badge'">{{ record.status }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-6 flex items-center justify-between">
                <p class="text-sm text-slate-400">显示 1-4 条，共 128 条记录</p>
                <div class="flex gap-2">
                  <button class="px-3 py-1 rounded bg-white/5 text-slate-400 hover:bg-white/10 transition" @click="handlePrevPage">上一页</button>
                  <button class="px-3 py-1 rounded bg-aurora-cyan/20 text-aurora-cyan">1</button>
                  <button class="px-3 py-1 rounded bg-white/5 text-slate-400 hover:bg-white/10 transition" @click="handlePageChange(2)">2</button>
                  <button class="px-3 py-1 rounded bg-white/5 text-slate-400 hover:bg-white/10 transition" @click="handlePageChange(3)">3</button>
                  <button class="px-3 py-1 rounded bg-white/5 text-slate-400 hover:bg-white/10 transition" @click="handleNextPage">下一页</button>
                </div>
              </div>
            </div>

            <!-- 设置 -->
            <div v-show="activeTab === 'settings'">
              <h3 class="text-xl font-bold text-white mb-6">设置</h3>
              <div class="space-y-6">
                <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 class="text-white font-medium mb-4">通知设置</h4>
                  <div class="space-y-3">
                    <label v-for="setting in notificationSettings" :key="setting.id" class="flex items-center justify-between cursor-pointer">
                      <span class="text-slate-300">{{ setting.label }}</span>
                      <input 
                        type="checkbox" 
                        class="w-5 h-5 rounded bg-void-800 border-white/20 text-aurora-cyan focus:ring-aurora-cyan"
                        v-model="setting.enabled"
                      />
                    </label>
                  </div>
                </div>
                <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 class="text-white font-medium mb-4">安全设置</h4>
                  <div class="space-y-3">
                    <button 
                      v-for="security in securitySettings" 
                      :key="security.id"
                      class="w-full flex items-center justify-between py-2 text-slate-300 hover:text-white transition"
                      @click="handleSecurityAction(security)"
                    >
                      <span>{{ security.label }}</span>
                      <Icon icon="fa-solid:chevron-right" :size="14" />
                    </button>
                  </div>
                </div>
                <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 class="text-white font-medium mb-4">其他设置</h4>
                  <div class="space-y-3">
                    <button 
                      v-for="other in otherSettings" 
                      :key="other.id"
                      class="w-full flex items-center justify-between py-2 text-slate-300 hover:text-white transition"
                      @click="handleOtherAction(other)"
                    >
                      <span>{{ other.label }}</span>
                      <Icon icon="fa-solid:chevron-right" :size="14" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
const activeTab = ref('account')

// 标签页配置
const tabs = ref([
  { id: 'account', label: '账户信息' },
  { id: 'api', label: 'API密钥' },
  { id: 'usage', label: '使用记录' },
  { id: 'settings', label: '设置' }
])

// 账户信息
const accountInfo = ref([
  { label: '用户名', value: '黄经理', border: true },
  { label: '邮箱', value: 'zhangming@example.com', border: true },
  { label: '手机号', value: '138****8888', border: true },
  { label: '公司', value: '科技有限公司', border: true },
  { label: '部门', value: '风险控制部', border: true },
  { label: '注册时间', value: '2024-01-15', border: false }
])

// API密钥
const apiKeys = ref([
  {
    id: 1,
    name: '生产环境密钥',
    key: 'sk-prod-****8f3d2e1c',
    status: '活跃',
    todayCalls: '1,234',
    monthlyCalls: '45,678',
    limit: '100,000'
  },
  {
    id: 2,
    name: '测试环境密钥',
    key: 'sk-test-****7a9b8c6',
    status: '受限',
    todayCalls: '89',
    monthlyCalls: '2,345',
    limit: '10,000'
  }
])

// 使用记录
const usageRecords = ref([
  {
    id: 1,
    time: '2024-04-17 14:32:15',
    service: '企业风险分析',
    content: '查询某科技有限公司风险信息',
    points: '-5',
    status: '成功'
  },
  {
    id: 2,
    time: '2024-04-17 14:28:03',
    service: '工商信息查询',
    content: '获取企业工商基本信息',
    points: '-2',
    status: '成功'
  },
  {
    id: 3,
    time: '2024-04-17 13:55:42',
    service: '市场竞争分析',
    content: '分析行业竞争格局',
    points: '-10',
    status: '失败'
  },
  {
    id: 4,
    time: '2024-04-17 11:20:18',
    service: '舆情监控',
    content: '监控企业舆情动态',
    points: '-3',
    status: '成功'
  }
])

// 通知设置
const notificationSettings = ref([
  { id: 1, label: '接收服务更新通知', enabled: true },
  { id: 2, label: '接收使用提醒', enabled: true },
  { id: 3, label: '接收营销活动', enabled: false }
])

// 安全设置
const securitySettings = ref([
  { id: 1, label: '修改登录密码' },
  { id: 2, label: '绑定二次验证' },
  { id: 3, label: '查看登录日志' }
])

// 其他设置
const otherSettings = ref([
  { id: 1, label: 'API使用限制' },
  { id: 2, label: '导出账户数据' }
])

// 方法
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}

const handleEditProfile = () => {
  alert('编辑资料功能需要后端接口支持。\n\n在实际项目中，这里会跳转到资料编辑页面。')
}

const handleChangePassword = () => {
  alert('修改密码功能需要后端接口支持。\n\n在实际项目中，这里会跳转到密码修改页面。')
}

const handleCreateKey = () => {
  alert('创建API密钥功能需要后端接口支持。\n\n在实际项目中，这里会打开密钥创建对话框。')
}

const handleKeyMenu = (key: any) => {
  alert(`密钥操作菜单：${key.name}\n\n在实际项目中，这里会显示密钥操作选项（编辑、删除、查看详情等）。`)
}

const handlePrevPage = () => {
  alert('上一页功能需要后端接口支持。')
}

const handleNextPage = () => {
  alert('下一页功能需要后端接口支持。')
}

const handlePageChange = (page: number) => {
  alert(`跳转到第${page}页功能需要后端接口支持。`)
}

const handleSecurityAction = (security: any) => {
  alert(`${security.label}功能需要后端接口支持。\n\n在实际项目中，这里会跳转到相应的安全设置页面。`)
}

const handleOtherAction = (other: any) => {
  alert(`${other.label}功能需要后端接口支持。\n\n在实际项目中，这里会跳转到相应的设置页面。`)
}

// 组件挂载时加载保存的客户类型
onMounted(() => {
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

.badge-vip {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-void-900;
}

.badge-success {
  @apply inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-green to-emerald-500 text-void-900;
}

.tab-btn {
  @apply transition-all;
}

.max-w-xs {
  max-width: 20rem;
}
</style>
