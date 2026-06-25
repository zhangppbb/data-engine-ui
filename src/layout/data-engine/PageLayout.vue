<template>
  <div class="bg-[#F7F8FA] min-h-screen relative">
    <!-- 顶部导航栏 -->
    <PageNavbar />

    <!-- 主内容区 -->
    <main class="relative z-10 pt-76px">
      <PageBreadcrumb />
      <router-view />
    </main>

    <!-- 底部 -->
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import PageNavbar from './PageNavbar.vue'
import PageFooter from './PageFooter.vue'
import PageBreadcrumb from './PageBreadcrumb.vue'
</script>

<style scoped lang="scss">
// @use '@/views/pages/styles/shared.scss' as *;

// .page-layout {
//   min-height: 100vh;
// }
</style>
