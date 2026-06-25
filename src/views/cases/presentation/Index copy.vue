<script lang="ts" setup>
import ND from './components/ND.vue'
import ZJ from './components/ZJ.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 中交项目
const isZJType = computed(() => {
  return route.query.type === 'zj'
})
</script>

<template>
  <ZJ v-if="isZJType"></ZJ>
  <ND v-else></ND>
</template>