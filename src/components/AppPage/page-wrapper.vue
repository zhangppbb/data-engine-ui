<script setup lang="ts">
import PageContent from './page-content.vue';

defineOptions({
  name: 'PageWrapper'
});
</script>

<template>
  <div
    class="box-border bg-grey7 p-model h-[100%] flex flex-col overflow-y-auto w-[100%] pos-relative flex-1"
  >
    <slot name="content">
      <PageContent
        class="content-container min-h-[100%] flex flex-col shrink-0 text-xs border-xs"
        v-bind="$attrs"
      >
        <slot ></slot>
      </PageContent>
    </slot>
  </div>
</template>
