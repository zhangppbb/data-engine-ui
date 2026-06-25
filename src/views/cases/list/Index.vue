
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElCarousel, ElCarouselItem, ElButton } from 'element-plus'
import type { CarouselInstance } from 'element-plus'
import { ArrowRight, ArrowLeft, ChatDotRound } from '@element-plus/icons-vue'
import router from '@/router'
import { fetchAllCaseSceneList, CaseScene } from '@/api/cases/caseScene'
import { fetchCaseInfoPage, CaseInfoItem, CaseInfoQueryDTO } from '@/api/cases/caseInfo'
import CaseCard from '@/components/CaseCard'
import { ConsultDialog } from '@/components/ConsultDialog'
import { fetchBannerList, AppBanner } from '@/api/banner'
import { usePagination } from '@/hooks/web/usePagination'
import { ZONE_TYPE } from '@/constants/zone'

/**
 * 轮播组件实例 ref
 */
const carouselRef = ref<CarouselInstance>()

/**
 * 加载状态
 */
const loading = ref({
  sceneList: false,
  caseList: false,
  banner: false
})

/**
 * 当前筛选场景（全部场景 或 场景对象）
 */
const activeScene = ref<CaseScene | null>(null)

/**
 * 场景列表
 */
const sceneList = ref<CaseScene[]>([])

/**
 * 案例列表
 */
const caseList = ref<CaseInfoItem[]>([])

/**
 * Banner列表
 */
const bannerList = ref<AppBanner[]>([])

/**
 * 加载场景列表
 */
const loadSceneList = async () => {
  loading.value.sceneList = true
  try {
    const data = await fetchAllCaseSceneList()
    sceneList.value = data || []
  } catch (error) {
    sceneList.value = []
  } finally {
    loading.value.sceneList = false
  }
}

/**
 * 加载案例列表
 */
const loadCaseList = async () => {
  loading.value.caseList = true
  try {
    const params: CaseInfoQueryDTO & PageParam = {
      pageNum: pagination.paginationConfig!.currentPage || 1,
      pageSize: pagination.paginationConfig!.pageSize || 9
    }

    // 场景筛选
    if (activeScene.value && activeScene.value.id) {
      params.sceneId = activeScene.value.id
    }

    const result = await fetchCaseInfoPage(params)
    caseList.value = result.rows || []
    pagination.paginationConfig!.total = result.total || 0
  } catch (error) {
    caseList.value = []
    pagination.paginationConfig!.total = 0
  } finally {
    loading.value.caseList = false
  }
}

/**
 * 加载 Banner 列表
 */
const loadBannerList = async () => {
  loading.value.banner = true
  try {
    const data = await fetchBannerList(ZONE_TYPE.CASE)
    bannerList.value = data || []
  } catch (error) {
    bannerList.value = []
  } finally {
    loading.value.banner = false
  }
}

/**
 * 分页相关
 */
const { pagination, paginationTotal, sizeChange, refreshData } = usePagination(loadCaseList, {
  paginationConfig: { pageSize: 6 }
})

/**
 * 咨询弹窗组件 ref
 */
const consultDialogRef = ref<InstanceType<typeof ConsultDialog>>()

/**
 * 切换场景
 */
const handleSceneChange = async (scene: CaseScene | null) => {
  activeScene.value = scene
  await refreshData()
}

/**
 * 切换分页
 */
const handleCurrentChange = async (page: number) => {
  if (pagination.paginationConfig) {
    pagination.paginationConfig.currentPage = page
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
  await loadCaseList()
}

/**
 * 查看案例
 * @param item 
 */
const showCase = (item: AppBanner) => {
  router.push(`/cases/details/${item.caseInfo.id}`)
}

/**
 * 初始化页面
 */
const initPage = () => {
  loadSceneList()
  loadCaseList()
  loadBannerList()
}
initPage()
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
    <div class="mx-auto mt-32px max-w-1440px relative">
      <el-skeleton :loading="loading.banner" animated>
        <template #template>
          <el-skeleton-item style="height: 220px;border-radius: 12px;" />
        </template>
        <template #default>
          <el-carousel
            ref="carouselRef"
            :autoplay="true"
            :interval="5000"
            :loop="true"
            arrow="never"
            indicator-position="outside"
            height="220px"
          >
            <el-carousel-item
              v-for="(item, index) in bannerList"
              :key="item.id || index"
              >
              <div class="card flex items-center justify-between px-90px h-full py-20px cursor-pointer" @click="showCase(item)">
                <div class="flex flex-col pr-30px">
                  <div class="flex">
                    <div class="mb-20px rounded-2px bg-[rgba(255,117,50,0.1)] px-12px py-4px text-14px text-#FF7532">
                      {{ item.caseInfo?.industry }}
                    </div>
                  </div>
                  <div class="flex items-end">
                    <div class="text-28px font-600">{{ item.caseInfo?.title }}</div>
                  </div>
                  <div class="mt-20px text-16px text-#666 leading-24px overflow-hidden" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">{{ item.caseInfo?.description }}</div>
                </div>
                <div class="h-full w-300px flex-shrink-0">
                  <img :src="item.imageUrl" alt="" class="rounded-8px object-cover w-full h-full" />
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>

          <!-- 左右箭头（覆盖在轮播上） -->
          <div
            class="absolute top-1/2 -translate-y-1/2 left-20px w-40px h-40px rounded-full cursor-pointer border-1px border-solid border-[rgba(0,0,0,0.2)] flex-center bg-white z-10"
            @click="carouselRef?.prev()"
          >
            <el-icon color="#BFBFBF" size="18px"><ArrowLeft /></el-icon>
          </div>
          <div
            class="absolute top-1/2 -translate-y-1/2 right-20px w-40px h-40px rounded-full cursor-pointer border-1px border-solid border-[rgba(0,0,0,0.2)] flex-center bg-white z-10"
            @click="carouselRef?.next()"
          >
            <el-icon color="#BFBFBF" size="18px"><ArrowRight /></el-icon>
          </div>
        </template>
      </el-skeleton>
    </div>

    <!-- 场景筛选 -->
    <div class="mx-auto mt-20px max-w-1440px flex gap-24px">
       <!-- 左侧分类 -->
      <el-skeleton :loading="loading.sceneList" animated style="width: 220px;flex-shrink: 0;">
        <template #template>
          <div class="rounded-8px bg-white p-20px shadow">
            <el-skeleton-item variant="text" style="width: 30%; margin-bottom: 16px" />
            <el-skeleton-item v-for="n in 8" :key="n" variant="text" style="width: 70%; margin-bottom: 12px" />
          </div>
        </template>
        <template #default>
          <div
            class="w-220px shrink-0 rounded-8px bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02),_0px_1px_6px_-1px_rgba(0,0,0,0.02),_0px_1px_2px_0px_rgba(0,0,0,0.03)]"
          >
            <div class="p-20px text-16px font-400 text-#999">
              场景筛选
            </div>

            <!-- 全部场景 -->
            <div
              :class="[
                'flex cursor-pointer items-center pl-20px text-14px transition-all h-40px leading-40px text-14px',
                !activeScene
                  ? 'bg-[rgba(0,72,152,0.1)] text-[var(--brand-color)] border-r-4 border-r-solid border-r-[var(--brand-color)] font-600'
                  : 'hover:bg-#f7f8fa'
              ]"
              @click="handleSceneChange(null)"
            >
              <span>全部场景</span>
            </div>

            <div
              v-for="scene in sceneList"
              :key="scene.id"
              :class="[
                'flex cursor-pointer items-center pl-20px text-14px transition-all h-40px leading-40px text-14px',
                activeScene?.id === scene.id
                  ? 'bg-[rgba(0,72,152,0.1)] text-[var(--brand-color)] border-r-4 border-r-solid border-r-[var(--brand-color)] font-600'
                  : 'hover:bg-#f7f8fa'
              ]"
              @click="handleSceneChange(scene)"
            >
              <span>{{ scene.sceneName }}</span>
            </div>
          </div>
        </template>
      </el-skeleton>


      <!-- 右侧案例列表 -->
      <div class="flex-1">
        <!-- 案例卡片骨架屏区域 -->
        <el-skeleton :loading="loading.caseList" animated>
          <template #template>
            <div class="grid grid-cols-3 gap-20px">
              <div v-for="n in 6" :key="n" class="rounded-8px bg-white p-20px flex flex-col">
                <!-- 标题 -->
                <el-skeleton-item variant="text" style="width: 70%; height: 24px; margin-bottom: 16px" />
                <!-- 描述行 -->
                <el-skeleton-item variant="text" style="width: 95%; margin-bottom: 8px" />
                <el-skeleton-item variant="text" style="width: 60%; margin-bottom: 18px" />
                <!-- 标签 -->
                <div class="flex gap-8px">
                  <el-skeleton-item variant="text" style="width: 48px; height: 24px" />
                  <el-skeleton-item variant="text" style="width: 56px; height: 24px" />
                  <el-skeleton-item variant="text" style="width: 40px; height: 24px" />
                </div>
                <!-- 分割线 -->
                <el-skeleton-item variant="text" style="width: 100%; height: 1px; margin: 20px 0" />
                <!-- 底部：日期 + 箭头 -->
                <div class="flex items-center justify-between">
                  <el-skeleton-item variant="text" style="width: 100px" />
                  <el-skeleton-item variant="text" style="width: 18px; height: 18px" />
                </div>
              </div>
            </div>
          </template>
          <template #default>
            <div class="grid grid-cols-3 gap-20px">
              <CaseCard
                v-for="(caseItem, index) in caseList"
                :key="caseItem.id || index"
                :case-item="caseItem"
                @click="router.push({ path: `/cases/details/${caseItem.id}` })"
              />
            </div>
          </template>
        </el-skeleton>

        <!-- 分页（数据加载完成后才显示） -->
        <div v-if="!loading.caseList && paginationTotal > 0" class="mt-40px flex justify-center">
          <el-pagination
            background
            :current-page="pagination.paginationConfig!.currentPage"
            :page-size="pagination.paginationConfig!.pageSize"
            :layout="pagination.paginationConfig!.layout"
            :total="paginationTotal"
            @current-change="handleCurrentChange"
            @size-change="sizeChange"
          />
        </div>

        <!-- 底部操作区 -->
        <div class="flex items-center justify-between mt-40px">
          <div>
            <div class="text-20px font-500">筛选对应行业，查看各领域落地项目</div>
            <div class="text-16px mt-12px">了解多场景解决方案实操效果，我们在多个行业拥有丰富的项目经验，可根据您的具体需求提供定制化服务。</div>
          </div>
          <el-button
            round
            size="large"
            class="!h-58px min-w-168px !text-22px"
            style="--el-border-radius-round: 58px; --el-button-bg-color: transparent; --el-button-border-color: var(--brand-color); --el-button-hover-bg-color: #e5efff; --el-button-hover-border-color: var(--brand-color); --el-button-hover-text-color: var(--brand-color); --el-button-text-color: var(--brand-color);"
            @click="consultDialogRef?.open()"
          >
            咨询需求
            <el-icon class="ml-8px"><ChatDotRound /></el-icon>
          </el-button>
        </div>
      </div>
    </div>

   
  </div>

  <!-- 咨询弹窗 -->
  <ConsultDialog ref="consultDialogRef" />
</template>


<style scoped>
</style>
