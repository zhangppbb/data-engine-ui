import { ref, onUnmounted } from 'vue'
import type { BreadcrumbItem } from './breadcrumb'

const breadcrumbTail = ref<BreadcrumbItem | null>(null)

/**
 * 详情页设置动态面包屑末级（离开页面时自动清除）
 */
export function usePageBreadcrumb() {
  const setBreadcrumbTail = (item: BreadcrumbItem | null) => {
    breadcrumbTail.value = item
  }

  onUnmounted(() => {
    breadcrumbTail.value = null
  })

  return { setBreadcrumbTail }
}

export function useBreadcrumbTail() {
  return breadcrumbTail
}
