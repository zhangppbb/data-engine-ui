<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import type { ReportInfo } from '@/api/apps/reportInfo'

interface Props {
  reportItem: ReportInfo
}

const props = defineProps<Props>()

const emit = defineEmits<{
  click: []
}>()

/** 格式化发布时间到月（YYYY-MM） */
const publishTimeFormatted = computed(() => {
  if (!props.reportItem.publishTime) return ''
  return dayjs(props.reportItem.publishTime).format('YYYY-MM')
})
</script>

<template>
  <div
    class="group cursor-pointer overflow-hidden rounded-8px bg-white transition-all duration-300 hover:translate-y--2px hover:shadow-xl border-solid border-1px border-[rgba(0,0,0,0.1)]"
    @click="emit('click')"
  >
    <!-- 封面图片 -->
    <div v-if="reportItem.coverImage" class="overflow-hidden aspect-[453/230]">
      <img
        :src="reportItem.coverImage"
        class="h-full w-full transition-all duration-500 group-hover:scale-105"
      />
    </div>

    <!-- 无图卡片 -->
    <div
      v-else
      class="aspect-[453/230] px-20px flex flex-col items-center text-#fff justify-center bg-[var(--brand-color)]/5 transition-all duration-300 group-hover:bg-[var(--brand-color)]/10"
    >
      <div class="text-22px font-600 line-clamp-2 text-center">
        {{ reportItem.reportTitle }}
      </div>
      <div class="text-14px text-#fff mt-8px">
        发布时间：{{ publishTimeFormatted }}
      </div>
    </div>

    <!-- 内容 -->
    <div class="p-20px">
      <!-- 标题行 -->
      <div class="flex items-center gap-12px">
        <div class="flex-1 truncate text-18px font-600 text-#333">
          {{ reportItem.reportTitle }}
        </div>
      </div>

      <!-- 描述 -->
      <div class="mt-20px line-clamp-2 text-14px leading-20px text-#757575">
        {{ reportItem.description }}
      </div>

      <!-- 底部信息 -->
      <div class="mt-20px flex items-center justify-between text-14px text-#999">
        <span>发布时间：{{ publishTimeFormatted }}</span>
        <span>浏览量：{{ reportItem.visitCount }}</span>
      </div>
    </div>
  </div>
</template>
