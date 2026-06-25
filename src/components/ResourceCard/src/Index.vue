<template>
  <div
    class="group rounded-8px cursor-pointer bg-white p-20px transition-all duration-300 hover:-translate-y-2px hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)]"
  >
    <div class="flex items-start justify-between">
      <div class="flex flex-1 items-center gap-8px overflow-hidden">
        <div
          class="flex-shrink-0 rounded-4px px-8px text-12px h-22px leading-22px  font-600"
          :class="typeClass"
        >
          {{ type }}
        </div>

        <div
          class="truncate text-16px font-700 md:text-18px"
        >
          {{ title }}
        </div>
      </div>

      <div
        class="flex-shrink-0 rounded-4px rgb(114 129 150) px-8px h-22px leading-22px text-12px   border
  border-solid
  border-[rgba(0,72,152,0.2)] bg-[rgba(0,72,152,0.05)] text-[var(--brand-color)]" 
      > 
        免费试用
      </div>
    </div>

    <div
      class="mt-16px min-h-52px text-14px leading-20px text-#757575"
    >
      {{ desc }}
    </div>

    <div class="mt-24px flex items-center justify-between gap-12px">
      <div
        class="w-72px
                h-24px leading-24px
                rounded-14px
                border
                border-solid
                border-[rgba(0,0,0,0.15)]
                text-[rgba(0,0,0,0.40)]
                text-12px cursor-pointer text-center
                transition-all duration-300 hover:bg-[var(--brand-color)] hover:text-white"
      >
        {{ action }}
      </div>

      <div class="text-13px text-#9ca3af">
        本月使用{{ count }}次
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: string
  typeClass: string
  title: string
  desc: string
  action: string
  count: string
}

defineProps<Props>()
</script>
