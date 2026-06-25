
<script setup lang="ts">
import { computed } from 'vue'

interface Tag {
  name: string
  color: string
}

interface Props {
  title: string
  /** 徽章文字 */
  badge?: string
  badgeType?: string
  /** 类型标签文字 */
  type?: string
  typeType?: string
  desc: string
  tags: Tag[]
  /** 操作按钮文字 */
  action?: string
  /** 使用次数文字（如：12.5k） */
  count?: string
}

const props = defineProps<Props>()

const emit = defineEmits(['actionClick'])

// 预定义颜色映射
const colorMap: Record<string, string> = {
  primary: '#004898',
  success: '#67c23a',
  warning: '#e6a23c',
  danger: '#f56c6c',
  info: '#909399'
}

// 计算 type 标签内联样式（支持预定义/自定义颜色）
const typeStyle = computed(() => {
  const rawType = props.typeType || 'primary'
  const color = colorMap[rawType] || rawType
  return {
    color,
    backgroundColor: `${color}0d`
  }
})

// 计算自定义 badge 样式
const badgeStyle = computed(() => {
  const rawType = props.badgeType || 'primary'
  const color = colorMap[rawType] || rawType
  return {
    borderColor: color,
    color: color,
    backgroundColor: `${color}10` // 0.05 透明度 (5% = 0D in hex)
  }
})
</script>

<template>
  <div
    class="group rounded-8px cursor-pointer bg-white p-20px transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,35,95,0.12)]"
  >
    <div class="mb-12px justify-between flex items-center">
        <div
          class="mr-8px flex-shrink-0 rounded-4px px-8px text-12px h-22px leading-22px  font-600"
          :style="typeStyle"
          v-if="type"
        >
          {{ type }}
        </div>

      <div :title="title" class="text-18px font-600 flex-1 truncate text-#333">
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
        :key="tag.name"
        class="rounded-4px bg-[rgba(255,117,50,0.1)] px-12px h-24px leading-24px text-12px text-#FF7532"
        :style="{
          color: tag.color,
          backgroundColor:  `${tag.color}0d`,
        }"
      >
        {{ tag.name }}
      </div>
    </div>

    <div v-if="action || count" class="mt-24px flex items-center justify-between gap-12px">
      <div
        v-if="action"
        class="h-24px leading-24px rounded-14px border border-solid border-[rgba(0,0,0,0.15)] text-[rgba(0,0,0,0.40)] text-12px cursor-pointer text-center transition-all duration-300 hover:bg-[var(--brand-color)] hover:text-white"
        :style="{ minWidth: '72px', padding: '0 12px' }"
        @click.stop="emit('actionClick')"
      >
        {{ action }}
      </div>

      <div v-if="count" class="text-13px text-#9ca3af">
        本月使用{{ count }}次
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.custom-badge {
  @apply inline-flex items-center px-2 h-5 leading-5 text-xs rounded-4px border border-solid whitespace-nowrap;
}
</style>
