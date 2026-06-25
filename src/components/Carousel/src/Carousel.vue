<template>
  <div class="relative overflow-hidden" :class="containerClass">
    <!-- 走马灯容器 -->
    <div 
      ref="carouselTrack" 
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <slot></slot>
    </div>
    
    <!-- 左右切换按钮 -->
    <button 
      v-if="showArrows"
      @click="prev"
      class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-panel-base flex items-center justify-center text-white hover:bg-white/10 hover:text-aurora-cyan transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentIndex === 0"
    >
      <Icon icon="fa-solid:chevron-left" :size="16" />
    </button>
    
    <button 
      v-if="showArrows"
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-panel-base flex items-center justify-center text-white hover:bg-white/10 hover:text-aurora-cyan transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentIndex === totalItems - 1"
    >
      <Icon icon="fa-solid:chevron-right" :size="16" />
    </button>
    
    <!-- 指示器 -->
    <div v-if="showIndicators" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(_, index) in totalItems"
        :key="index"
        @click="goTo(index)"
        :class="[
          'w-2.5 h-2.5 rounded-full transition-all',
          currentIndex === index 
            ? 'bg-aurora-cyan w-8' 
            : 'bg-white/30 hover:bg-white/50'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { Icon } from '@/components/Icon'

interface Props {
  // 是否显示箭头
  showArrows?: boolean
  // 是否显示指示器
  showIndicators?: boolean
  // 自动播放间隔(ms)
  autoplay?: number
  // 容器类名
  containerClass?: string
  // 循环播放
  loop?: boolean
}

interface Emits {
  (e: 'change', index: number): void
}

const props = withDefaults(defineProps<Props>(), {
  showArrows: true,
  showIndicators: true,
  autoplay: 0,
  containerClass: '',
  loop: false
})

const emit = defineEmits<Emits>()

// 响应式数据
const currentIndex = ref(0)
const totalItems = ref(0)
const autoplayTimer = ref<NodeJS.Timeout | null>(null)

// DOM引用
const carouselTrack = ref<HTMLElement>()

// 计算属性
const slideElements = computed(() => {
  if (!carouselTrack.value) return []
  return Array.from(carouselTrack.value.children) as HTMLElement[]
})

// 方法
const updateTotalItems = () => {
  totalItems.value = slideElements.value.length
}

const goTo = (index: number) => {
  if (index < 0 || index >= totalItems.value) return
  
  currentIndex.value = index
  emit('change', index)
}

const next = () => {
  if (props.loop && currentIndex.value === totalItems.value - 1) {
    goTo(0)
  } else {
    goTo(currentIndex.value + 1)
  }
}

const prev = () => {
  if (props.loop && currentIndex.value === 0) {
    goTo(totalItems.value - 1)
  } else {
    goTo(currentIndex.value - 1)
  }
}

const startAutoplay = () => {
  if (props.autoplay > 0) {
    autoplayTimer.value = setInterval(() => {
      next()
    }, props.autoplay)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer.value) {
    clearInterval(autoplayTimer.value)
    autoplayTimer.value = null
  }
}

// 键盘事件处理
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

// 生命周期
onMounted(() => {
  updateTotalItems()
  startAutoplay()
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  stopAutoplay()
  document.removeEventListener('keydown', handleKeydown)
})

// 监听子元素变化
watch(slideElements, () => {
  updateTotalItems()
}, { immediate: true })

// 暴露方法给父组件
defineExpose({
  next,
  prev,
  goTo,
  currentIndex: readonly(currentIndex)
})
</script>

<style scoped>
.glass-panel-base {
  background: rgb(255 255 255 / 5%);
  backdrop-filter: blur(10px);
  border: 1px solid rgb(255 255 255 / 10%);
}

/* 走马灯动画效果 */
.transition-transform {
  transition: transform 0.5s ease-in-out;
}

/* 指示器动画 */
.w-8 {
  width: 2rem;
}
</style>
