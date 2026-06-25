
<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElCarousel, ElCarouselItem, ElButton } from 'element-plus'
import img1 from './assets/image/banner.png'
import { ArrowRight, ArrowLeft, ChatDotRound } from '@element-plus/icons-vue'
import router from '@/router'
import mockData from '../mockData'

/**
 * 当前筛选场景
 */
const activeScene = ref('全部场景')

/**
 * 场景列表
 */
const scenes = ref([
  '全部场景',
  '市场竞争分析',
  '企业数字化运营',
  '产业链协同',
  '交通能源融合',
  '交通数字孪生',
  '产业招商服务',
  '产学研对接',
  '供应链金融服务',
  '投资决策分析'
])

/**
 * 轮播案例
 */
const carouselItems = ref([
  {
    industry: '政府交通管理行业',
    title: '交通厅',
    subtitle: '交通数字底座项目',
    desc: '为省级交通管理部门搭建全城交通数字孪生底座，实现交通路网、客流、设施全要素数字化管控与智能监测',
    image: img1
  },
  // {
  //   industry: '能源制造行业',
  //   title: '能源公司',
  //   subtitle: '新能源项目',
  //   desc: '提供新能源行业数据分析与市场调研解决方案',
  //   image: '/mnt/data/image(10).png'
  // }
])

/**
 * 案例列表
 */
const caseList = ref(mockData)

/**
 * 根据筛选场景返回案例
 */
const filteredCases = computed(() => {
   if (activeScene.value === '全部场景') {
    return caseList.value
  }

  return caseList.value.filter(item =>
    item.scene?.includes(activeScene.value)
  )
})
</script>

<template>
  <div class="min-h-screen pb-40px">
    <!-- 顶部标题 -->
    <div class="mx-auto mt-20px max-w-1440px text-center">
      <div class="text-46px font-600">
        专业团队 · <span 
              class="bg-gradient-to-r from-#004898 via-#2f74ff to-#05D7F6 bg-clip-text text-transparent"
        >具备多行业解决方案</span>
      </div>
    </div>

    <!-- 主轮播 -->
    <div class="mx-auto mt-32px max-w-1440px relative card flex items-center">
      <div class="w-40px h-40px rounded-full cursor-pointer border-1px border-solid border-[rgba(0,0,0,0.2)] flex-center">
        <el-icon color="#BFBFBF" size="18px"><ArrowLeft /></el-icon>
      </div>
      <div class="flex flex-1">
        <div v-for="(item, index) in carouselItems" :key="index">
          <div class="flex items-center justify-between px-90px">
            <div class="flex flex-col pr-30px">
              <div class="flex">
                <div class="mb-20px rounded-2px bg-[rgba(255,117,50,0.1)] px-12px py-4px text-14px text-#FF7532">
                  {{ item.industry }}
                </div>
              </div>
              <div class="flex items-end">
                <div class="text-28px font-600">{{ item.title }}</div>
                <div class="ml-12px text-20px text-brandColor">{{ item.subtitle }}</div>
              </div>
              <div class="mt-20px text-16px text-#666 leading-24px">{{ item.desc }}</div>
            </div>
            <div class="w-489px">
              <img :src="item.image" alt="" class="rounded-8px object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div class="w-40px h-40px rounded-full  cursor-pointer border-1px border-solid border-[rgba(0,0,0,0.2)] flex-center">
        <el-icon color="#BFBFBF" size="18px"><ArrowRight /></el-icon>
      </div>
    </div>

     <!-- dot -->
      <div class="mt-20px flex items-center justify-center gap-8px">
        <div
          v-for="(_, index) in [0 ,1]"
          :key="index"
          class="h-8px w-8px cursor-pointer rounded-full bg-#D8D8D8 transition-all duration-300"
          :class="{ 'bg-brandColor!': 0 === index }"
        ></div>
      </div>

    <!-- 场景筛选 -->
    <div class="mx-auto mt-20px max-w-1440px flex gap-24px">
       <!-- 左侧分类 -->
      <div
        class="w-220px shrink-0 rounded-8px bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02),_0px_1px_6px_-1px_rgba(0,0,0,0.02),_0px_1px_2px_0px_rgba(0,0,0,0.03)]"
      >
        <div class="p-20px text-16px font-400 text-#999">
          场景筛选
        </div>

        <div
          v-for="scene in scenes"
          :key="scene"
          :class="[
            'flex cursor-pointer items-center pl-20px text-14px transition-all h-40px leading-40px text-14px',
            activeScene === scene
              ? 'bg-[rgba(0,72,152,0.1)] text-[var(--brand-color)] border-r-4 border-r-solid border-r-[var(--brand-color)] font-600'
              : 'hover:bg-#f7f8fa'
          ]"
          @click="activeScene = scene"
        >
          <span>{{ scene }}</span>
          <!-- <span class="ml-20px">{{ item.count }}</span> -->
        </div>
      </div>


      <!-- 右侧案例列表 -->
       <div class="flex-1 ">
         <div class="grid grid-cols-3 gap-20px">
           <div
             v-for="(caseItem, index) in filteredCases"
             :key="index"
             class="rounded-8px bg-white p-20px transition-all hover:shadow-md cursor-pointer"
             @click="() => {
              router.push({
                path: `/cases/presentation/${caseItem.id}`
              })
             }"
           >
             <div class="text-18px font-600">{{ caseItem.title }}</div>
             <div class="mt-12px text-14px text-#666 leading-22px">{{ caseItem.description }}</div>
             <!-- <div class="mt-12px text-16px text-#666">{{ caseItem.desc }}</div> -->
             <div class="mt-32px flex flex-wrap gap-8px">
               <div
                 v-for="tag in caseItem.solutionList"
                 :key="tag.title"
                 class="rounded-4px bg-[rgba(0,72,152,0.05)] px-8px h-20px leading-20px text-12px text-brandColor"
               >
                 {{ tag.title }}
               </div>
             </div>
             <div class="w-full h-1px bg-[rgba(0,0,0,0.06)] mt-20px"></div>
             <div class="mt-20px flex items-center justify-between">
               <div class="text-14px text-#999 ">更新于 {{ caseItem.update }}</div>
               <el-icon class="text-14px text-#999!"><ArrowRight /></el-icon>
             </div>
           </div>
         </div>
         <!-- 底部按钮 -->
       <div class="flex items-center justify-between mt-40px">
         <div>
           <div class="text-20px font-500">筛选对应行业，查看各领域落地项目</div>
           <div class="text-16px mt-12px">了解多场景解决方案实操效果，我们在多个行业拥有丰富的项目经验，可根据您的具体需求提供定制化服务。</div>
         </div>
         <!-- <el-button type="primary" icon="ChatDotRound" class="!rounded-full !px-24px !py-14px">
           咨询需求
         </el-button> -->
          <el-button
            round
            size="large"
            class="!h-58px min-w-168px !text-22px"
            style="

--el-border-radius-round: 58px; --el-button-bg-color: transparent; --el-button-border-color: var(--brand-color); --el-button-hover-bg-color: #e5efff; --el-button-hover-border-color: var(--brand-color); --el-button-hover-text-color: var(--brand-color); --el-button-text-color: var(--brand-color);"
          >

            咨询需求

            <el-icon class="ml-8px"><ChatDotRound /></el-icon>
          </el-button>
       </div>
       </div>
    </div>

   
  </div>
</template>


<style scoped>
</style>
