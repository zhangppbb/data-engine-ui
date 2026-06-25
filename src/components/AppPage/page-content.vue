<script setup lang="ts">
import PageTitle from './page-title.vue';

defineOptions({
  name: 'PageContent'
});

interface Props {
  title?: string; // 标题
}

const props = defineProps<Props>();
</script>

<template>
  <div class="page-content-container bg-white shrink-0 relative rd-sm">
    <div
      v-if="props.title"
      class="border-b-1px border-b-solid border-b-grey6 flex justify-between pl-sm py-xs"
    >
      <!-- 标题 -->
      <slot name="title">
        <PageTitle>{{ props.title }}</PageTitle>
      </slot>

      <slot name="header" ></slot>
    </div>
    <slot ></slot>
  </div>
</template>

<style lang="scss" scoped>
.page-content-container {
  box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 5%);
}
</style>
