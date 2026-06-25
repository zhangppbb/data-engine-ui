<script setup lang="ts">
defineOptions({
  name: 'PageTitle'
});
</script>

<template>
  <div class="flex items-center">
    <span
      class="bg-brandColor overflow-hidden pos-relative icon w-[4px] h-[16px] mr-xs"
    ></span>

     <span class="text-black text-md font-700"><slot></slot></span>
  </div>
</template>
