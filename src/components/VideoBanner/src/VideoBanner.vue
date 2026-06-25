<template>
  <div class="video-banner-container relative overflow-hidden">
    <!-- 视频背景层 -->
    <div class="video-background absolute inset-0 z-0">
      <video
        ref="videoRef"
        class="w-full h-full object-cover"
        :src="videoSrc"
        autoplay
        muted
        loop
        playsinline
        @load="onVideoLoad"
        @error="onVideoError"
      >
      </video>
      <!-- 视频遮罩层 -->
      <div class="video-overlay absolute inset-0 bg-gradient-to-r from-void-900/80 via-void-900/60 to-void-900/80"></div>
    </div>

    <!-- 内容层 -->
    <div class="relative z-10 flex items-center justify-center min-h-[400px] px-6">
      <div class="text-center max-w-4xl mx-auto space-y-6">
        <!-- 主标题 -->
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
          <span class="text-gradient">{{ title }}</span>
        </h1>
        
        <!-- 副标题 -->
        <p class="text-lg md:text-xl text-slate-300 mb-8 animate-fade-in-up animation-delay-200">
          {{ subtitle }}
        </p>

        <!-- 按钮组 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <button 
            class="btn-primary btn-lg"
            @click="handlePrimaryAction"
          >
            <Icon icon="fa-solid:play" :size="16" class="mr-2" />
            {{ primaryButtonText }}
          </button>
          
          <button 
            class="btn-secondary btn-lg"
            @click="handleSecondaryAction"
          >
            <Icon icon="fa-solid:info-circle" :size="16" class="mr-2" />
            {{ secondaryButtonText }}
          </button>
        </div>

        <!-- 统计数据占位 -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up animation-delay-600">
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-aurora-cyan mb-1">
              {{ stats[0].value }}
            </div>
            <div class="text-sm text-slate-400">{{ stats[0].label }}</div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-aurora-green mb-1">
              {{ stats[1].value }}
            </div>
            <div class="text-sm text-slate-400">{{ stats[1].label }}</div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-aurora-purple mb-1">
              {{ stats[2].value }}
            </div>
            <div class="text-sm text-slate-400">{{ stats[2].label }}</div>
          </div> 
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-aurora-pink mb-1">
              {{ stats[3].value }}
            </div>
            <div class="text-sm text-slate-400">{{ stats[3].label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 装饰元素 -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-aurora-cyan/20 rounded-full blur-xl animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-32 h-32 bg-aurora-green/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
    <div class="absolute top-1/2 right-20 w-16 h-16 bg-aurora-purple/20 rounded-full blur-lg animate-pulse animation-delay-2000"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Icon from '@/components/Icon/src/Icon.vue'

// Props
interface Props {
  videoSrc?: string
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  stats?: Array<{ value: string; label: string }>
}

const props = withDefaults(defineProps<Props>(), {
  videoSrc: '/videos/banner-video.mp4',
  title: '探索数据驱动的未来',
  subtitle: '智能化企业数据解决方案，助力业务数字化转型',
  primaryButtonText: '开始探索',
  secondaryButtonText: '了解更多',
  stats: () => [
    { value: '10K+', label: '企业用户' },
    { value: '50M+', label: '数据条目' },
    { value: '99.9%', label: '服务可用性' },
    { value: '24/7', label: '技术支持' }
  ]
})

// Refs
const videoRef = ref<HTMLVideoElement>()
const isVideoLoaded = ref(false)

// Emits
const emit = defineEmits<{
  primaryAction: []
  secondaryAction: []
  videoLoaded: []
  videoError: [error: Event]
}>()

// Methods
const handlePrimaryAction = () => {
  emit('primaryAction')
}

const handleSecondaryAction = () => {
  emit('secondaryAction')
}

const onVideoLoad = () => {
  isVideoLoaded.value = true
  emit('videoLoaded')
}

const onVideoError = (error: Event) => {
  console.error('Video banner error:', error)
  emit('videoError', error)
}

// Lifecycle
onMounted(() => {
  // 确保视频可以播放
  if (videoRef.value) {
    videoRef.value.play().catch(error => {
      console.warn('Auto-play prevented:', error)
    })
  }
})
</script>

<style scoped lang="scss">


// 动画类
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 响应式设计
@media (width <= 768px) {
  .video-banner-container {
    min-height: 500px;
  }
  
  .text-gradient {
    font-size: 2.5rem;
    line-height: 1.2;
  }
}

@media (width <= 640px) {
  .video-banner-container {
    min-height: 600px;
  }
  
  .text-gradient {
    font-size: 2rem;
    line-height: 1.3;
  }
}

.video-banner-container {
  @apply relative w-full bg-void-900;

  min-height: 400px;
}

.video-background {
  @apply absolute inset-0;
}

.video-background video {
  @apply w-full h-full object-cover;
}

.video-overlay {
  background: linear-gradient(135deg, 
    rgb(2 6 23 / 80%) 0%, 
    rgb(2 6 23 / 60%) 50%, 
    rgb(2 6 23 / 80%) 100%
  );
}

.text-gradient {
  color: transparent;
  background: linear-gradient(135deg, #00d2ff 0%, #00ffa3 50%, #a855f7 100%);
  background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-primary {
  @apply relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-void-900 transition-all duration-300 transform hover:scale-105 hover:shadow-glow-lg;

  background: linear-gradient(135deg, #00d2ff 0%, #00ffa3 100%);
  backdrop-filter: blur(12px);
}

.btn-secondary {
  @apply inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white transition-all duration-300 border border-white/20 hover:border-aurora-cyan/50 hover:bg-white/10 backdrop-filter backdrop-blur-lg;
}

.btn-lg {
  @apply text-base md:text-lg px-8 md:px-12 py-4 md:py-5;
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
