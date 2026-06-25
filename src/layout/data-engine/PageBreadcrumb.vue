<template>
  <div v-if="visible" class=" bg-#fff">
    <div class="mx-auto max-w-1440px py-20px">
      <Breadcrumb :items="items" />
    </div>
  </div>
</template><script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Breadcrumb } from '@/components/Breadcrumb'
import type { BreadcrumbItem } from './breadcrumb'
import { useBreadcrumbTail } from './usePageBreadcrumb'

const route = useRoute()
const breadcrumbTail = useBreadcrumbTail()

const items = computed<BreadcrumbItem[]>(() => {
  const matched = route.matched

  const items: BreadcrumbItem[] = []

  for (const record of matched) {
    if (record.meta.hidden || record.meta.hideBreadcrumb || record.meta.breadcrumb === false) {
      continue
    }
    if (!record.meta.title) {
      continue
    }

    items.push({
      label: record.meta.title as string,
      path: record.path
    })
  }

  const tail = breadcrumbTail.value
  if (tail && items.length > 0) {
    items[items.length - 1] = tail
  }

  return items
})

const visible = computed(
  () => items.value.length > 0 && route.meta.hideBreadcrumb !== true
)

watch(
  () => route.fullPath,
  () => {
    breadcrumbTail.value = null
  }
)
</script>
