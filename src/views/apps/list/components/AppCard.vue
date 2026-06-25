<template>
  <div
    class="group rounded-8px cursor-pointer bg-white p-20px transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,35,95,0.12)]"
  >
    <div class="mb-12px justify-between flex items-center">
      <div class="text-18px font-600 text-#333">
        {{ title }}
      </div>

      <div
        v-if="badge"
        class="custom-badge ml-8px"
        :style="badgeStyle"
      >
        {{ badge }}
      </div>
    </div>

    <div class="mb-20px min-h-2em text-14px leading-20px text-#757575 line-clamp-2">
      {{ desc }}
    </div>

    <div class="flex flex-wrap gap-8px">
      <div
        v-for="tag in tags"
        :key="tag"
        class="rounded-4px bg-[rgba(255,117,50,0.1)] px-12px h-24px leading-24px text-12px text-#FF7532"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  badge?: string
  badgeType?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | string
  desc: string
  tags: string[]
}

const props = withDefaults(defineProps<Props>(), {
  badge: '',
  badgeType: 'primary',
  tags: () => []
})

// 预定义颜色映射
const colorMap: Record<string, string> = {
  primary: '#004898',
  success: '#67c23a',
  warning: '#e6a23c',
  danger: '#f56c6c',
  info: '#909399'
}

// 计算自定义 badge 样式
const badgeStyle = computed(() => {
  const color = colorMap[props.badgeType] || props.badgeType
  return {
    borderColor: color,
    color: color,
    backgroundColor: `${color}10` // 0.05 透明度 (5% = 0D in hex)
  }
})
</script>

<style scoped lang="scss">
.custom-badge {
  @apply inline-flex items-center px-2 h-5 leading-5 text-xs rounded-4px border border-solid whitespace-nowrap;
}
</style>
