<script setup lang="ts">
interface Prop {
  name: string;
}
defineProps<Prop>();
</script>

<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${name}`"/>
  </svg>
</template>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentcolor;
}
</style>
