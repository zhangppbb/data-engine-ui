<template>
  <div
    class="rounded-8px bg-white p-20px transition-all hover:shadow-md cursor-pointer flex flex-col"
    @click="$emit('click')"
  >
    <div class="flex-1 flex flex-col">
      <div class="text-18px font-600">{{ caseItem.title }}</div>
      
      <div
        class="mt-12px text-14px text-#666 leading-22px overflow-hidden flex-1"
        style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"
      >
        {{ caseItem.description }}
      </div>

      <div class="mt-20px flex flex-wrap gap-8px">
        <span
          v-for="item in caseItem.tagInfos"
          :key="item.id"
          class="flex items-center justify-center rounded-4px h-24px px-8px text-12px"
          :style="{ color: item.color, backgroundColor: `${item.color}0d` }"
        >
          {{ item.tagName }}
        </span>
      </div>
    </div>

    <div class="w-full h-1px bg-[rgba(0,0,0,0.06)] mt-20px"></div>
    
    <div class="mt-20px flex items-center justify-between">
      <div class="text-14px text-#999">更新于 {{ formatDate(caseItem.updateTime) }}</div>
      <el-icon class="text-14px text-#999!"><ArrowRight /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import dayjs from 'dayjs'
import type { CaseInfoItem } from '@/api/cases/caseInfo'

interface Props {
  caseItem: CaseInfoItem
}

defineProps<Props>()
defineEmits<{
  click: []
}>()

const formatDate = (date?: string) => {
  return dayjs(date).format('YYYY-MM')
}
</script>
