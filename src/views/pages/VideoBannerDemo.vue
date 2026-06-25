<template>
  <PageLayout>
    <!-- 视频Banner演示页面 -->
    <div class="video-banner-demo">
      <!-- 使用VideoBanner组件 -->
      <VideoBanner
        :video-src="videoSrc"
        :title="bannerTitle"
        :subtitle="bannerSubtitle"
        :primary-button-text="primaryText"
        :secondary-button-text="secondaryText"
        :stats="bannerStats"
        @primary-action="handlePrimaryAction"
        @secondary-action="handleSecondaryAction"
        @video-loaded="onVideoLoaded"
        @video-error="onVideoError"
      />

      <!-- 其他占位内容 -->
      <div class="max-w-7xl mx-auto px-6 py-12">
        <!-- 功能介绍区域 -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-white text-center mb-8">
            <span class="text-gradient">核心功能特性</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card-glass p-6">
              <div class="w-12 h-12 bg-aurora-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Icon icon="fa-solid:rocket" :size="24" class="text-aurora-cyan" />
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">高性能</h3>
              <p class="text-slate-400">基于最新技术栈构建，提供卓越的性能表现和用户体验</p>
            </div>
            <div class="card-glass p-6">
              <div class="w-12 h-12 bg-aurora-green/20 rounded-lg flex items-center justify-center mb-4">
                <Icon icon="fa-solid:shield-alt" :size="24" class="text-aurora-green" />
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">安全可靠</h3>
              <p class="text-slate-400">企业级安全保障，确保数据安全和系统稳定性</p>
            </div>
            <div class="card-glass p-6">
              <div class="w-12 h-12 bg-aurora-purple/20 rounded-lg flex items-center justify-center mb-4">
                <Icon icon="fa-solid:cogs" :size="24" class="text-aurora-purple" />
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">灵活配置</h3>
              <p class="text-slate-400">支持多种配置选项，满足不同场景的使用需求</p>
            </div>
          </div>
        </section>

        <!-- 数据展示区域 -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-white text-center mb-8">
            <span class="text-gradient">数据洞察</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="glass-panel-base rounded-xl p-6 text-center">
              <div class="text-3xl font-bold text-aurora-cyan mb-2">2.5M+</div>
              <div class="text-sm text-slate-400">数据处理量</div>
            </div>
            <div class="glass-panel-base rounded-xl p-6 text-center">
              <div class="text-3xl font-bold text-aurora-green mb-2">99.9%</div>
              <div class="text-sm text-slate-400">系统稳定性</div>
            </div>
            <div class="glass-panel-base rounded-xl p-6 text-center">
              <div class="text-3xl font-bold text-aurora-purple mb-2">150ms</div>
              <div class="text-sm text-slate-400">平均响应时间</div>
            </div>
            <div class="glass-panel-base rounded-xl p-6 text-center">
              <div class="text-3xl font-bold text-aurora-pink mb-2">24/7</div>
              <div class="text-sm text-slate-400">技术支持</div>
            </div>
          </div>
        </section>

        <!-- 操作演示区域 -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-white text-center mb-8">
            <span class="text-gradient">快速开始</span>
          </h2>
          <div class="glass-panel-base rounded-xl p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-semibold text-white mb-4">基础配置</h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-slate-300 mb-2">视频源</label>
                    <input 
                      v-model="videoSrc" 
                      type="text" 
                      class="input-glass w-full" 
                      placeholder="输入视频URL"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-300 mb-2">标题</label>
                    <input 
                      v-model="bannerTitle" 
                      type="text" 
                      class="input-glass w-full" 
                      placeholder="输入Banner标题"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-4">文案设置</h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-slate-300 mb-2">副标题</label>
                    <textarea 
                      v-model="bannerSubtitle" 
                      class="input-glass w-full h-24 resize-none" 
                      placeholder="输入副标题文案"
                    ></textarea>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-300 mb-2">主按钮文本</label>
                    <input 
                      v-model="primaryText" 
                      type="text" 
                      class="input-glass w-full" 
                      placeholder="输入主按钮文本"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageLayout from '@/layout/data-engine/PageLayout.vue'
import VideoBanner from '@/components/VideoBanner/src/VideoBanner.vue'
import Icon from '@/components/Icon/src/Icon.vue'

const router = useRouter()

// 响应式数据
const videoSrc = ref('/videos/banner-video.mp4')
const bannerTitle = ref('探索数据驱动的未来')
const bannerSubtitle = ref('智能化企业数据解决方案，助力业务数字化转型')
const primaryText = ref('开始探索')
const secondaryText = ref('了解更多')

// Banner统计数据
const bannerStats = ref([
  { value: '10K+', label: '企业用户' },
  { value: '50M+', label: '数据条目' },
  { value: '99.9%', label: '服务可用性' },
  { value: '24/7', label: '技术支持' }
])

// 事件处理
const handlePrimaryAction = () => {
  console.log('Primary action clicked')
  router.push('/pages/resources/list')
}

const handleSecondaryAction = () => {
  console.log('Secondary action clicked')
  router.push('/pages/about')
}

const onVideoLoaded = () => {
  console.log('Video loaded successfully')
}

const onVideoError = (error: Event) => {
  console.error('Video load error:', error)
}
</script>

<style scoped lang="scss">


// 响应式设计
@media (width <= 768px) {
  .video-banner-demo {
    @apply px-4;
  }
}

.video-banner-demo {
  @apply min-h-screen bg-void-900;
}

.text-gradient {
  color: transparent;
  background: linear-gradient(135deg, #00d2ff 0%, #00ffa3 50%, #a855f7 100%);
  background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-glass {
  @apply glass-panel-base rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-aurora-cyan/30 hover:shadow-glow-sm;
}

.glass-panel-base {
  background: rgb(11 16 33 / 95%);
  border: 1px solid rgb(255 255 255 / 8%);
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
  backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}

.input-glass {
  @apply w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all;
}
</style>
