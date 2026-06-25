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
  <div class="flex items-center h-[27dh]" :style="{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '7vw 100%'
  }">
    <!-- 标题 -->
    <div class="font-[normal] pl-[14dp] relative bottom-[5dp] text-[16dp] text-[#D5F2FF] italic font-bold relative top--1.em" style="text-shadow: 13px 13px 29px rgb(10 137 109 / 18%);
">
      {{ title }}
    </div>
  </div>
</template>