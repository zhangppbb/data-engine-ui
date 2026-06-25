<script setup lang="ts">
/**
 * ActionPanel Props
 */
interface Props {
  title: string
  desc: string
  highlighted?: boolean
  recommended?: boolean
  badge?: string
}

defineProps<Props>()
</script>

<template>
  <article
    :class="[
      'rounded-16px px px-20px py-12px bg-#F7F8FA',
      highlighted ? 'border border-solid border-brandColor' : '',
      $attrs.class
    ]"
    v-bind="$attrs"
  >
    <!-- 标题 & badge -->
    <div class="flex flex-wrap items-center gap-8px">
      <div class="m-0 text-16px font-500">{{ title }}</div>
      <span
        v-if="badge"
        class="rounded-4px bg-#F6FFED px-8px h-22px leading-22px text-12px text-#B7EB8F border border-solid border-#B7EB8F flex flex-center"
      >
        <div class="mr-5px h-10px w-10px rotate-45 transform bg-#B7EB8F"></div>
        {{ badge }}
      </span>
      <span
        v-if="recommended"
        class="rounded-4px bg-#F6FFED px-8px h-22px leading-22px text-12px text-#B7EB8F border border-solid border-#B7EB8F"
      >
        推荐
      </span>
    </div>

    <!-- 描述 -->
    <div class="m-0 mt-8px text-16px leading-24px text-#666666">{{ desc }}</div>

    <!-- 默认插槽 -->
    <div class="mt-12px">
      <slot>></slot>
    </div>
  </article>
</template>
