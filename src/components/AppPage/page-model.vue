<script setup lang="ts">
defineOptions({
  name: 'PageModel'
});

interface Props {
  /**
   * 标题
   */
  title: string;

  /**
   * Icon
   */
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div>
    <div class="flex items-center mb-xs">
      <slot name="icon">
        <div :class="[icon, 'color-brandColor']"></div>
      </slot>
      <slot name="title">
        <div class="ml-xs color-brandColor font-bold">
          {{ props.title }}
        </div>
      </slot>
    </div>

    <slot></slot>
  </div>
</template>
