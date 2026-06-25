<template>
  <section class="relative pl-40px">
    <!-- 步骤圆点 -->
    <div
      class="absolute left-0 top-0 z-1 h-32px w-32px flex items-center justify-center rounded-full bg-brandColor text-14px text-white"
    >
      {{ step }}
    </div>

    <!-- 内容 -->
    <div class="min-h-30px">
      <div class="flex items-center justify-between leading-32px">
        <div class="m-0 text-18px text-#333 font-500">
          {{ title }}
        </div>

        <span
          v-if="time"
          class="text-14px text-#BFBFBF"
        >
          {{ time }}
        </span>
      </div>

      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * StepBlock Props
 */
interface Props {
  /**
   * 步骤序号
   */
  step: number

  /**
   * 标题
   */
  title: string

  /**
   * 时间描述
   */
  time?: string
}

defineProps<Props>()
</script>