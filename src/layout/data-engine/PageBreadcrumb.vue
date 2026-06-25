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
import {
  ROUTE_BREADCRUMBS,
  ROUTE_BREADCRUMB_BASE,
  type BreadcrumbItem
} from './breadcrumb'
import { useBreadcrumbTail } from './usePageBreadcrumb'

const route = useRoute()
const breadcrumbTail = useBreadcrumbTail()

const items = computed<BreadcrumbItem[]>(() => {
  const name = route.name as string | undefined
  if (!name) return []

  const staticItems = ROUTE_BREADCRUMBS[name]
  if (staticItems) return staticItems

  const base = ROUTE_BREADCRUMB_BASE[name]
  if (!base) return []

  const tail = breadcrumbTail.value
  return tail ? [...base, tail] : base
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
