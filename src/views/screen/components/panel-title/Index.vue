<script setup lang="ts">
import bg from './assets/images/title-bg.png'
/**
 * 标题组件
 */

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex items-center h-[34dh]" :style="{
    backgroundImage: `url(${bg})`,
    backgroundSize: '100% 100%'
  }">
    <!-- 标题 -->
    <div class="font-[normal] pl-[50dp] relative bottom-[2dp] text-[22dp] text-[#D5F2FF] italic font-bold relative top--1.em" style="text-shadow: 13px 13px 29px rgb(10 137 109 / 18%);
">
      {{ title }}
    </div>
  </div>
</template>