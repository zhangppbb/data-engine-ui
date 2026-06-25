
<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
import icon from './assets/images/icon.png'
import codeIcon from './assets/images/code-icon.jpg'
</script>

<template>
  <!-- footer -->
    <!-- 页脚 -->
<footer class="relative bg-void-900 text-#8F99B7 pt-80px">
  <div class="mx-auto">
    <!-- 主体 -->
    <div
      class="flex flex-wrap justify-between gap-y-40px pb-50px px-20px md:px-40px xl:px-80px"
    >
      <!-- Logo -->
      <div class="w-full md:w-[48%] xl:w-auto">
        <div class="flex items-center mb-24px">
          <img src="~@/assets/imgs/logo.png" class="h-30px" alt="">

          <div class="ml-8px">
            <span class="text-24px md:text-32px font-bold text-white mr-8px">
              数擎
            </span>
            <span class="text-#05D7F6 font-bold">DataEngine</span>
          </div>
        </div>

        <div class="text-#8F99B7 text-16px md:text-22px mb-24px">
          数据致胜，洞见未来。一站式数据智能服务平台
        </div>

        <div class="flex">
          <a
            href="#"
            class="text-#FFFFFF hover:text-#05D7F6 transition text-14px"
          >
            <Icon icon="fa-brands:weixin" />
          </a>
        </div>
      </div>

      <!-- 快速连接 -->
      <div class="w-[48%] md:w-auto">
        <div class="text-white mb-24px md:mb-32px font-500 text-20px md:text-24px">
          快速连接
        </div>

        <ul class="space-y-12px md:space-y-20px">
          <li>
            <a
              href="/"
              class="hover:text-#05D7F6 transition text-16px md:text-20px text-#8F99B7"
            >
              首页
            </a>
          </li>

          
          <li>
            <a
              href="/apps/list"
              class="hover:text-#05D7F6 transition text-16px md:text-20px text-#8F99B7"
            >
              应用馆
            </a>
          </li>

          
          <li>
            <a
              href="/resources/list"
              class="hover:text-#05D7F6 transition text-16px md:text-20px text-#8F99B7"
            >
              资源馆
            </a>
          </li>

          <li>
            <a
              href="/cases/list"
              class="hover:text-#05D7F6 transition text-16px md:text-20px text-#8F99B7"
            >
              案例馆
            </a>
          </li>


          <li>
            <a
              href="/screen"
              class="hover:text-#05D7F6 transition text-16px md:text-20px text-#8F99B7"
            >
              数据大屏
            </a>
          </li>
        </ul>
      </div>

      <!-- 联系我们 -->
      <div class="w-full md:w-[48%] xl:w-auto">
        <div class="text-white mb-24px md:mb-32px font-500 text-20px md:text-24px">
          联系我们
        </div>

        <ul class="space-y-12px md:space-y-20px">
          <li class="flex items-start gap-12px">
            <Icon icon="fa-solid:map-marker-alt" class="mt-4px shrink-0" />
            <span class="text-16px md:text-20px">
              陕西省西安市高新区科技四路2号西安软件园
            </span>
          </li>

          <li class="flex items-center gap-12px">
            <Icon icon="fa-solid:phone" />
            <span class="text-16px md:text-20px">029-81321536</span>
          </li>

          <li class="flex items-center gap-12px">
            <Icon icon="fa-solid:envelope" />
            <span class="text-16px md:text-20px">
              contact@dataengine.com
            </span>
          </li>

          <li class="flex items-center gap-12px">
            <Icon icon="fa-solid:clock" />
            <span class="text-16px md:text-20px">
              周一至周五 8:30-17:30
            </span>
          </li>
        </ul>
      </div>

      <!-- 订阅 -->
      <div class="w-full xl:w-auto">
        <div class="text-white mb-24px md:mb-32px font-500 text-20px md:text-24px">
          订阅我们
        </div>

        <div>
          <div class="text-16px md:text-base">
            订阅我们的通讯，获取最新的数据集和产业动态。
          </div>

          <div class="w-full max-w-200px mt-20px">
            <img class="w-full" :src="codeIcon" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div
      class="border-t border-t-solid border-t-#8F99B7 flex flex-col gap-y-16px md:flex-row justify-between items-center py-24px md:py-40px px-20px md:px-40px xl:px-80px"
    >
      <div class="text-#8F99B7 text-14px md:text-16px text-center md:text-left">
        © 2026 数擎 DataEngine · 企业级数据服务平台
      </div>

      <div class="flex flex-wrap justify-center gap-24px gap-y-8px">
        <a
          href="#"
          class="text-14px md:text-16px text-#8F99B7 hover:text-white transition"
        >
          隐私政策
        </a>

        <a
          href="#"
          class="text-14px md:text-16px text-#8F99B7 hover:text-white transition"
        >
          服务条款
        </a>

        <a
          href="#"
          class="text-14px md:text-16px text-#8F99B7 hover:text-white transition"
        >
          法律声明
        </a>
      </div>
    </div>
  </div>
</footer>
</template>
