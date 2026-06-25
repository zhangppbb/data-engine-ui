<template>
  <div class="pages-container bg-stars text-slate-300 min-h-screen relative overflow-x-hidden">
    <!-- 全局背景光晕 -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div class="aurora-blur bg-aurora-cyan w-[500px] h-[500px] top-[-100px] left-[-100px] animate-pulse-slow"></div>
      <div class="aurora-blur bg-aurora-red w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-20 animate-pulse-slow animation-delay-1000"></div>
      <div class="aurora-blur bg-aurora-purple w-[600px] h-[600px] top-[40%] left-[30%] opacity-10 blur-[120px] animate-pulse-slow animation-delay-2000"></div>
    </div>

    <!-- 主内容区 -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
      <!-- 页面标题 -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">数据大屏</h1>
        <p class="text-slate-400">实时监控数据指标和业务趋势</p>
      </div>

      <!-- 统计卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="stat-card"
        >
          <div class="stat-icon">
            <Icon :icon="stat.icon" :size="24" />
          </div>
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="flex items-center text-sm" :class="stat.trend > 0 ? 'text-aurora-green' : 'text-aurora-red'">
            <Icon :icon="stat.trend > 0 ? 'ep:top' : 'ep:bottom'" :size="14" class="mr-1" />
            <span>{{ Math.abs(stat.trend) }}%</span>
            <span class="text-slate-500 ml-2">较上月</span>
          </div>
        </div>
      </div>

      <!-- 图表区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div class="dashboard-card">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-white">数据趋势</h3>
            <div class="flex gap-2">
              <button
                v-for="period in periods"
                :key="period.value"
                class="px-3 py-1 rounded-full text-xs transition"
                :class="selectedPeriod === period.value ? 'bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30' : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'"
                @click="selectedPeriod = period.value"
              >
                {{ period.label }}
              </button>
            </div>
          </div>
          <div ref="trendChartRef" class="chart-container"></div>
        </div>

        <div class="dashboard-card">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-white">分类占比</h3>
          </div>
          <div ref="pieChartRef" class="chart-container"></div>
        </div>
      </div>

      <!-- 数据表格 -->
      <div class="dashboard-card">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-white">最新数据</h3>
          <button class="btn-secondary text-sm py-2 px-4" @click="refreshData">
            <Icon icon="ep:refresh" :size="14" class="mr-2" />
            刷新
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-white/10">
                <th class="text-left py-3 px-4 text-slate-400 font-medium">名称</th>
                <th class="text-left py-3 px-4 text-slate-400 font-medium">类型</th>
                <th class="text-left py-3 px-4 text-slate-400 font-medium">状态</th>
                <th class="text-left py-3 px-4 text-slate-400 font-medium">更新时间</th>
                <th class="text-right py-3 px-4 text-slate-400 font-medium">数值</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in tableData"
                :key="item.id"
                class="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td class="py-3 px-4 text-white">{{ item.name }}</td>
                <td class="py-3 px-4">
                  <span class="badge">{{ item.type }}</span>
                </td>
                <td class="py-3 px-4">
                  <span
                    class="px-2 py-1 rounded-full text-xs"
                    :class="item.status === 'active' ? 'bg-aurora-green/20 text-aurora-green' : 'bg-aurora-red/20 text-aurora-red'"
                  >
                    {{ item.status === 'active' ? '正常' : '异常' }}
                  </span>
                </td>
                <td class="py-3 px-4 text-slate-400">{{ item.updateTime }}</td>
                <td class="py-3 px-4 text-right text-white font-medium">{{ item.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import Icon from '@/components/Icon/src/Icon.vue'

// 统计数据
const stats = ref([
  { label: '总访问量', value: '128,456', trend: 12.5, icon: 'ep:view' },
  { label: '活跃用户', value: '45,231', trend: 8.3, icon: 'ep:user' },
  { label: '数据总量', value: '2.5TB', trend: -2.1, icon: 'ep:folder' },
  { label: 'API 调用', value: '892,134', trend: 15.7, icon: 'ep:connection' }
])

// 时间周期
const periods = [
  { label: '近7天', value: '7d' },
  { label: '近30天', value: '30d' },
  { label: '近90天', value: '90d' }
]
const selectedPeriod = ref('7d')

// 表格数据
const tableData = ref([
  { id: 1, name: '企业风险分析模型', type: '应用', status: 'active', updateTime: '2025-01-15 10:30', value: '98.5%' },
  { id: 2, name: '市场调研数据集', type: '资源', status: 'active', updateTime: '2025-01-15 09:15', value: '12.3GB' },
  { id: 3, name: '信用评估API', type: 'API', status: 'active', updateTime: '2025-01-14 16:45', value: '99.9%' },
  { id: 4, name: '舆情监控系统', type: '应用', status: 'inactive', updateTime: '2025-01-14 14:20', value: '维护中' },
  { id: 5, name: '工商信息查询', type: 'API', status: 'active', updateTime: '2025-01-14 11:00', value: '95.2%' }
])

// 刷新数据
const refreshData = () => {
  // 模拟刷新
  console.log('刷新数据...')
}

// 图表引用
const trendChartRef = ref<HTMLDivElement>()
const pieChartRef = ref<HTMLDivElement>()
let trendChart: echarts.ECharts | null = null
let pieChart: echarts.ECharts | null = null

// 初始化趋势图
const initTrendChart = () => {
  if (!trendChartRef.value) return

  trendChart = echarts.init(trendChartRef.value)

  const option: echarts.EChartsOption = {
    backgroundColor: 'transparent',
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
      axisLabel: { color: '#94a3b8' }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
      axisLabel: { color: '#94a3b8' },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } }
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: {
        color: '#00d2ff',
        width: 3
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0, 210, 255, 0.3)' },
          { offset: 1, color: 'rgba(0, 210, 255, 0)' }
        ])
      }
    }]
  }

  trendChart.setOption(option)
}

// 初始化饼图
const initPieChart = () => {
  if (!pieChartRef.value) return

  pieChart = echarts.init(pieChartRef.value)

  const option: echarts.EChartsOption = {
    backgroundColor: 'transparent',
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#0a0a0f',
        borderWidth: 2
      },
      label: {
        show: true,
        color: '#94a3b8'
      },
      data: [
        { value: 1048, name: '应用', itemStyle: { color: '#00d2ff' } },
        { value: 735, name: 'API', itemStyle: { color: '#00ffa3' } },
        { value: 580, name: '数据', itemStyle: { color: '#7000ff' } },
        { value: 484, name: '案例', itemStyle: { color: '#ff4757' } }
      ]
    }]
  }

  pieChart.setOption(option)
}

// 监听周期变化
watch(selectedPeriod, () => {
  // 更新图表数据
  if (trendChart) {
    trendChart.setOption({
      series: [{
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000) + 500)
      }]
    })
  }
})

onMounted(() => {
  nextTick(() => {
    initTrendChart()
    initPieChart()

    // 响应式调整
    window.addEventListener('resize', () => {
      trendChart?.resize()
      pieChart?.resize()
    })
  })
})
</script>

<style scoped lang="scss">
@use './styles/shared.scss';

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

// Dashboard 特定样式
.bg-void-900 {
  background-color: #0a0a0f;
}

.bg-aurora-cyan {
  background-color: #36f9f6;
}

.bg-aurora-green {
  background-color: #05ffa1;
}

.bg-aurora-red {
  background-color: #ff5964;
}

.bg-aurora-purple {
  background-color: #b967ff;
}

.text-aurora-cyan {
  color: #36f9f6;
}

.text-aurora-green {
  color: #05ffa1;
}

.text-aurora-red {
  color: #ff5964;
}

.text-void-900 {
  color: #0a0a0f;
}

.bg-stars {
  background-color: #0a0a0f;
  background-image: radial-gradient(circle at 25px 25px, rgb(255 255 255 / 5%) 2%, transparent 0%),
                    radial-gradient(circle at 75px 75px, rgb(255 255 255 / 5%) 2%, transparent 0%);
  background-size: 100px 100px;
}

.dashboard-card {
  @extend .glass-panel-base;

  padding: 1.5rem;
  border-radius: 1rem;
  transition: all 0.3s;

  &:hover {
    background: rgb(255 255 255 / 5%);
    border-color: rgb(0 210 255 / 30%);
    box-shadow: 0 0 20px rgb(54 249 246 / 30%);
  }
}

.stat-card {
  @extend .dashboard-card;

  display: flex;
  flex-direction: column;
  height: 100%;
}

.stat-value {
  margin-bottom: 0.5rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
}

.stat-label {
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #94a3b8;
}

.stat-icon {
  display: flex;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  color: #36f9f6;
  background: rgb(54 249 246 / 20%);
  border-radius: 0.75rem;
  align-items: center;
  justify-content: center;
}

.chart-container {
  width: 100%;
  height: 16rem;
}

// 动画
.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
