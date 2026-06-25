
<script setup lang="ts">
import router from '@/router'
import icon1 from './assets/images/icon1.png'
import icon2 from './assets/images/icon2.png'
import icon3 from './assets/images/icon3.png'
import icon4 from './assets/images/icon4.png'
import icon5 from './assets/images/icon5.png'
import AIAssistant from '@/components/AIAssistant/src/AIAssistant.vue'
import { Search } from '@element-plus/icons-vue'

/**
 * 热门搜索
 */
const hotKeywords = [
  {
    name: '市场分析报告',
    id: 1
  },
  {
    name: '区域信息分析',
    id: 4
  },
  {
    name: '迁入迁出云图',
    id: 5
  },
  {
    name: '企业综合信用评价',
    id: 8
  }
];

/**
 * 身份卡片
 */
const roleList = [
  {
    title: '投资类客户',
    desc: '企业征信·风险分析',
    icon: '📈',
    active: true
  },
  {
    title: '市场类客户',
    desc: '市场洞察·竞争分析',
    icon: '🏪',
    active: false
  },
  {
    title: '企业类客户',
    desc: '工商信息·合规审查',
    icon: '🏢',
    active: false
  },
  {
    title: '政府类客户',
    desc: '产业招商·区域经济',
    icon: '🏢',
    active: false
  }
];

/**
 * 合作伙伴
 */
const partnerList = [
  {
    name: '企查查',
    icon: icon1
  },
  {
    name: '天眼查',
    icon: icon2
  },
  {
    name: '大司空',
    icon: icon3
  },
  {
    name: '中指云',
    icon: icon4
  },
  {
    name: 'Win.d',
    icon: icon5
  }
];

const keyword = ref('')
</script>

<template>
  <div class="">
    <!-- banner -->
    <section class="relative h-520px md:h-640px overflow-hidden bg-#EDF7FE">
      <!-- 视频背景 -->
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="absolute w-1920px h-full inset-0 left-50% translate-x-[-50%] top-60px md:top-120px object-cover"
      >
        <source :src="`/static/videos/banner-video.mp4?t=${Date.now()}`" type="video/mp4" />
      </video>

      <!-- 内容 -->
      <div
        class="relative z-10 mx-auto max-w-1240px px-16px md:px-40px pt-60px md:pt-80px text-center"
      >
        <!-- 搜索 -->
        <!-- <div
          class="mx-auto flex h-50px md:h-60px w-full max-w-980px rounded-full border border-solid border-brandColor bg-white"
          data-aos="fade-down"
        >
          <input
            placeholder='输入自然语言需求，如“查询公司风险并生成报告”'
            class="flex-1 px-16px md:px-30px text-14px md:text-16px outline-none rounded-full"
            style="border: none;"
          />

          <div
            class="w-120px md:w-260px font-600 shrink-0 cursor-pointer flex-center bg-brandColor text-16px md:text-20px text-white rounded-full transition-all duration-300 hover:opacity-90"
          >
            <Icon icon="ep:search" class="mr-8px md:mr-14px" />
            智能搜索
          </div>
        </div> -->
       <div   class="mx-auto flex h-50px md:h-60px w-full max-w-980px" data-aos="fade-down">
        <el-input
          placeholder='输入自然语言需求，如“查询公司风险并生成报告”'
          class="search-input text-18px"
          :style="{ height: '100%', '--el-input-border-radius': '60px', '--el-fill-color-light': '#fff', '--el-input-border-color': 'var(--brand-color)', padding: '0 32px!important' }"
          v-model="keyword"
        >
          <template #append>
            <div
              class="w-120px md:w-260px font-600 shrink-0 cursor-pointer flex-center bg-brandColor text-16px md:text-20px text-white rounded-full transition-all duration-300 hover:opacity-90 h-full"
            >
              <Icon icon="ep:search" class="mr-8px md:mr-14px" />
              智能搜索
            </div>
            </template>
        </el-input>
      </div>

        <!-- 热门搜索 -->
        <div
          class="mt-20px flex flex-col md:flex-row items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span class="text-grey4 text-14px md:text-18px mb-12px md:mb-0">
            热门搜索：
          </span>

          <div class="flex flex-wrap justify-center gap-8px">
            <div
              v-for="item in hotKeywords"
              :key="item.id"
              class="cursor-pointer rounded-full border border-solid border-[rgba(0,72,152,0.20)] bg-white px-16px md:px-24px py-8px md:py-12px text-12px md:text-base text-brandColor transition-all duration-300 hover:border-brandColor"
              @click="() => {
                router.push(`/apps/details/${item.id}`)
              }"
              >
              {{ item.name }}
            </div>
          </div>
        </div>

        <!-- 标题 -->
        <div class="mt-60px md:mt-80px" data-aos="zoom-in">
          <div class="text-30px md:text-46px font-600 leading-tight">
            用自然语言
            <span
              class="bg-clip-text text-transparent"
              :style="{
                backgroundImage: `linear-gradient(134deg, #004898 0%, #05D7F6 100%)`,
              }"
            >
              获取完整的数据解决方案
            </span>
          </div>

          <div class="mt-12px px-10px text-14px md:text-16px text-[#8F99B7]">
            输入您的业务需求，智能推荐跨馆（应用、资源、案例）的完整解决方案，实现一步直达
          </div>
        </div>
      </div>
    </section>

    <!-- 底部蓝条 -->
    <div
      class="h-48px md:h-56px leading-48px md:leading-56px w-full text-center bg-brandColor text-white text-14px md:text-16px px-10px"
      data-aos="fade-in"
    >
      支持搜索应用、API、MCP 工具、案例
    </div>

    <!-- 选择身份 -->
    <div
      class="mx-auto max-w-1440px px-16px pb-60px md:pb-100px"
      data-aos="fade-up"
    >
      <div
        class="text-center pb-40px md:pb-60px pt-60px md:pt-100px text-28px md:text-36px font-600"
      >
        请选择您的身份，获取精准推荐
      </div>

      <!-- 卡片 -->
      <div class="flex flex-wrap justify-center gap-20px md:gap-40px">
        <div
          v-for="(item, index) in roleList"
          :key="item.title"
          class="group flex-center flex-col relative w-full max-w-300px md:w-300px cursor-pointer rounded-12px border-2px border-solid border-transparent bg-white p-24px md:p-40px transition-all duration-300 hover:border-brandColor"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- icon -->
          <div
            class="mb-20px md:mb-24px h-72px w-72px md:h-88px md:w-88px rounded-24px bg-[#f4f8ff] flex items-center justify-center text-32px md:text-42px"
          >
            {{ item.icon }}
          </div>

          <div class="text-20px md:text-22px font-700 text-[#333]">
            {{ item.title }}
          </div>

          <div class="mt-8px text-14px md:text-16px text-[#999999]">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>

    <!-- AI 助手组件 -->
    <AIAssistant />

    <!-- 合作伙伴 -->
    <section
      class="py-60px md:py-100px"
      data-aos="fade-up"
      :style="{
        background: `radial-gradient(120% 120% at 85% 86%, #edefff 0%, rgba(255,255,255,0.5) 100%),
                     radial-gradient(120% 120% at 3% 55%, #c8e2ff 0%, rgba(255,255,255,0) 100%),
                     linear-gradient(180deg, #ffffff 0%, #c9d6ff 100%)`,
      }"
    >
      <div class="mx-auto max-w-1440px px-16px">
        <div class="text-center text-28px md:text-36px font-600">
          众擎易举，共建生态
        </div>

        <div
          class="mt-50px md:mt-80px flex flex-wrap justify-center gap-16px md:gap-30px"
        >
          <div
            v-for="(item, index) in partnerList"
            :key="item.name"
            class="h-90px w-[calc(50%-8px)] sm:w-180px md:h-120px md:w-220px rounded-8px bg-white flex-center transition-all duration-300 hover:-translate-y-4px cursor-pointer hover:shadow-xl"
            data-aos="zoom-in"
            :data-aos-delay="index * 80"
          >
            <img class="h-36px md:h-50px" :src="item.icon" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
video {
  pointer-events: none;
}
:deep(.el-input-group__append, .el-input-group__prepend) {
  box-shadow: none;
  padding: 0;
  border: 1px solid var(--brand-color);
  border-left: none;
}

:deep(.search-input .el-input__wrapper) {
  box-shadow: none;
  border: 1px solid var(--brand-color);
  border-right: none;
  border-radius: 60px 0 0 60px;
  padding: 0 32px!important;
  font-size: 18px;
}

</style>
