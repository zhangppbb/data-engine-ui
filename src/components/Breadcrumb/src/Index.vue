<template>
  <div
    class="flex items-center text-#666666 text-14px"
  >
    <template v-for="(item, index) in items" :key="index">
      <router-link
        v-if="item.path && index !== items.length - 1"
        :to="item.path"
        class="text-#666666 hover:text-brandColor"
      >
        {{ item.label }}
      </router-link>
      <span v-else class="text-brandColor font-bold">
        {{ item.label }}
      </span>
      <span v-if="index !== items.length - 1" class="mx-6px">/</span>
    </template>
  </div>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  path?: string
}

interface Props {
  items: BreadcrumbItem[]
}

defineProps<Props>()
</script>
