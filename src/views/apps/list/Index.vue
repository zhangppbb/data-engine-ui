<script setup lang="ts">
import { computed, ref, onMounted, watch, onUnmounted } from 'vue';
import { ArrowRight, Search } from '@element-plus/icons-vue'
import { debounce } from 'lodash-es'
import AppCard from '@/components/AppCard/AppCard.vue'
import router from '@/router';
import { fetchBannerList, AppBanner } from '@/api/banner'
import { fetchAllTagCategory, TagCategory } from '@/api/apps/tagCategory'
import { getAppList, AppInfo, AppListQueryDTO } from '@/api/apps/appInfo'
import { usePagination } from '@/hooks/web/usePagination'
import { ZONE_TYPE } from '@/constants/zone';

/**
 * 骨架屏加载状态
 */
const loading = ref({
  banner: true,
  category: true,
  tagFilter: true,
  appList: true
})


/**
 * 标签筛选值
 * @description 用于筛选特定标签的应用
 */
const val = ref('全部')

/**
 * 排序选项
 * @description 当前选中的排序方式
 */
const value = ref('按热度排序')

/**
 * Banner列表数据
 */
const bannerList = ref<AppBanner[]>([])

/**
 * 标签分类列表数据
 */
const tagCategories = ref<TagCategory[]>([])

/**
 * 应用列表数据
 */
const appList = ref<AppInfo[]>([])

/**
 * 获取Banner列表
 * @description 调用后端接口获取轮播图数据
 */
const loadBannerList = async () => {
  loading.value.banner = true
  try {
    const data = await fetchBannerList(ZONE_TYPE.APP)
    bannerList.value = data || []
  } catch (error) {
    bannerList.value = []
  } finally {
    loading.value.banner = false
  }
}

/**
 * 处理Banner点击事件
 * @description 点击Banner跳转至专区页面，携带bannerId和zoneId参数
 * @param banner Banner数据
 */
const handleBannerClick = (banner: AppBanner) => {
  router.push({
    path: '/apps/zone',
    query: {
      bannerId: banner.id,
      zoneId: banner.jumpZoneId
    }
  })
}

/**
 * 获取标签分类列表
 * @description 调用后端接口获取所有标签分类数据
 */
const loadTagCategories = async () => {
  loading.value.category = true
  loading.value.tagFilter = true
  try {
    const data = await fetchAllTagCategory({
      categoryCode: ZONE_TYPE.APP
    })
    tagCategories.value = data || []
  } catch (error) {
    tagCategories.value = []
  } finally {
    loading.value.category = false
    loading.value.tagFilter = false
  }
}

/**
 * 搜索关键字
 * @description 用户输入的搜索关键词，用于模糊匹配应用名称和描述
 */
const keyword = ref('');

/**
 * 当前选中的分类
 * @description 默认值为 'all'，表示全部分类
 */
const activeCategory = ref('all')

/**
 * 统一查询函数
 * @description 所有筛选条件都通过此函数调用后端接口获取应用分页列表
 * @returns {Promise<void>}
 */
async function loadAppList() {
  loading.value.appList = true
  try {
    const params: AppListQueryDTO = {
      pageNum: pagination.paginationConfig!.currentPage || 1,
      pageSize: pagination.paginationConfig!.pageSize,
    }
    
    // 根据选中的标签获取分类ID
    if (activeCategory.value !== 'all') {
      // for (const category of tagCategories.value) {
      //   const tag = category.tagInfos?.find((t) => t.tagCode === activeCategory.value)
      //   if (tag) {
      params.categoryId = activeCategory.value
      //     break
      //   }
      // }
    }
    
    // 添加关键字搜索条件
    if (keyword.value) {
      params.keyword = keyword.value
    }
    
    // 调用后端接口，获取分页数据
    const result = await getAppList(params)
    appList.value = result.rows || []
    pagination.paginationConfig!.total = result.total || 0
  } catch (error) {
    // 异常处理：清空列表
    appList.value = []
    pagination.paginationConfig!.total = 0
  } finally {
    loading.value.appList = false
  }
}

/**
 * 分页相关状态与方法
 * @description 使用 usePagination hook 管理分页
 */
const { pagination, paginationTotal, currentChange, sizeChange, refreshData } = usePagination(loadAppList, {
  paginationConfig: { pageSize: 6 }
})

/**
 * 防抖刷新的包装函数
 * @description 使用 debounce 包装 refreshData，延迟 300ms 执行
 */
const debouncedRefresh = debounce(() => refreshData(), 300)

/**
 * 监听关键字变化
 * @description 当搜索关键字改变时，重置页码并触发防抖查询
 */
watch(keyword, () => {
  debouncedRefresh()
})

/**
 * 监听分类变化
 * @description 当选中的分类改变时，重置页码并触发防抖查询
 */
watch(activeCategory, () => {
  debouncedRefresh()
})

/**
 * 监听标签变化
 * @description 当标签筛选条件改变时，重置页码并触发防抖查询
 */
watch(val, () => {
  debouncedRefresh()
})

/**
 * 初始化页面
 */
const initPage = () => {
  loadBannerList()
  loadTagCategories()
  loadAppList()
}

initPage()


/**
 * 组件卸载钩子
 * @description 清理防抖函数，防止内存泄漏
 */
onUnmounted(() => {
  debouncedRefresh.cancel()
})

// /**
//  * 应用标签 — 按图片中的应用分类重新定义
//  */
// const CATEGORY_LIST: CategoryItem[] = [
//   { label: '全部场景', value: 'all', icon: 'ep:grid', color: '#3370FF', percent: '61.2' },
//   { label: '企业基座', value: 'enterprise', icon: 'ep:office-building', color: '#27D16A', percent: '18.5' },
//   { label: '风险评价', value: 'risk', icon: 'ep:warning', color: '#23CBC3', percent: '12.3' },
//   { label: '招商雷达', value: 'investment', icon: 'ep:location-information', color: '#E50012', percent: '32.19' },
//   { label: '市场经营', value: 'market', icon: 'ep:data-line', color: '#FF7532', percent: '25.8' },
//   { label: '招投标辅助', value: 'bidding', icon: 'ep:document', color: '#A55FEB', percent: '8.5' },
//   { label: '城市发展', value: 'city', icon: 'ep:map-location', color: '#2DD0E8', percent: '15.2' },
// ];


/**
 * 分类配置
 * 只维护样式配置即可
 */
const CATEGORY_CONFIG = {
  企业基座: {
    value: 'enterprise',
    icon: 'iconfont icon-qiye2',
    color: '#27D16A'
  },

  风险评价: {
    value: 'risk',
    icon: 'iconfont icon-fengxianyujing',
    color: '#23CBC3'
  },

  招商雷达: {
    value: 'investment',
    icon: 'iconfont icon-radar-fill',
    color: '#E50012'
  },

  市场经营: {
    value: 'market',
    icon: 'iconfont icon-shichangjianguanjigou-shi-nongmaoshichanggonggongzhixu',
    color: '#FF7532'
  },

  招投标辅助: {
    value: 'bidding',
    icon: 'iconfont icon-toubiaozongjie',
    color: '#A55FEB'
  },

  城市发展: {
    value: 'city',
    icon: 'iconfont icon-yuangongfazhan',
    color: '#2DD0E8'
  }
}
/**
 * 根据接口数据生成标签列表（从 tagInfos 中读取）
 */
const CATEGORY_LIST = computed(() => {
  // 全部场景
  const allCategory = {
    label: '全部场景',
    value: 'all',
    icon: 'iconfont icon-quanbu',
    color: '#3370FF',
    count: appList.value.length
  }

  // 如果接口数据为空，返回全部场景
  if (!tagCategories.value.length) {
    return [allCategory]
  }

  // 从所有分类的 tagInfos 中提取标签列表
  const tags: typeof allCategory[] = []

  tagCategories.value.forEach((category) => {
    if (category.tagInfos?.length) {
      category.tagInfos.forEach((tag) => {
        const count = appList.value.filter(
          (app) => app.tagInfos?.some((appTag) => appTag.tagCode === tag.tagCode)
        ).length

        tags.push({
          // color: tag.color || '#3370FF',
          label: tag.tagName,
          value: tag.id,
          icon: tag.icon || 'iconfont icon-qiye2',
          color: '#3370FF',
          count
        })
      })
    }
  })

  return [allCategory, ...tags]
})

/**
 * 分类统计选项
 * @description 根据接口返回的应用数据动态生成分类统计列表
 */
const categoryOptions = computed(() => {
  // 所有分类
  const allCategories = appList.value
    .filter((item) => item.appCategoryInfo?.categoryName)
    .map((item) => item.appCategoryInfo.categoryName)

  // 去重
  const uniqueCategories = [...new Set(allCategories)]

  // 动态统计
  const list = uniqueCategories.map((category) => {
    const count = appList.value.filter(
      (item) => item.appCategoryInfo?.categoryName === category
    ).length

    return {
      label: `${category} ${count}`,
      value: category,
      count
    }
  })

  // 全部
  return [
    {
      label: `全部 ${appList.value.length}`,
      value: '全部',
      count: appList.value.length
    },
    ...list
  ]
})

/**
 * Badge类型映射函数
 * @description 根据传入的类型返回对应的Element Plus badge类型
 * @param {string} [type] - badge类型（success/warning/danger）
 * @returns {string} - Element Plus badge类型
 */
const getTagType = (type?: string) => {
  switch (type) {
    case 'success': return 'success';
    case 'warning': return 'warning';
    case 'danger': return 'danger';
    default: return 'primary';
  }
};
</script>

<template>
  <div class="min-h-screen">
    <!-- banner -->
    <div class="bg-white">
      <div class="max-w-1440px mx-auto">
        <el-skeleton :loading="loading.banner" animated :throttle="{ leading: 300 }">
          <template #template>
            <el-skeleton-item variant="p" style="height: 260px;border-radius: 8px;" />
          </template>
          <template #default>
            <el-carousel
              height="260px"
              :autoplay="true"
              :interval="5000"
              indicator-position="outside"
              arrow="hover"
            >
              <el-carousel-item
                v-for="item in bannerList"
                :key="item.id"
              >
                <div
                  class="group relative bg-cover h-full overflow-hidden hover:shadow-[0_8px_30px_rgba(15,35,95,0.08)] transition-all duration-300 cursor-pointer"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                  @click="() => handleBannerClick(item)"
                >
                  <div class="flex h-full flex-col justify-center pl-15%">
                    <div class="flex text-32px font-bold">
                      <div class="bg-gradient-to-r from-#004898 via-#2f74ff to-#05D7F6 bg-clip-text text-transparent">
                        {{ item.bannerName }}
                      </div>
                    </div>
                    <div class="text-#999999 text-20px pt-16px">
                      {{ item.bannerDesc }}
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </template>
        </el-skeleton>
      </div>
    </div>

    <!-- 分类 -->
    <section class="bg-#fff py-32px">
      <el-skeleton :loading="loading.tagFilter" animated :throttle="{ leading: 300 }">
        <template #template>
          <div class="grid gap-12px max-w-1440px mx-auto" style="grid-template-columns: repeat(7, minmax(0, 1fr))">
            <div
              v-for="i in 6"
              :key="i"
              class="h-100px rounded-8px bg-[rgba(0,0,0,0.04)]"
            />
          </div>
        </template>
        <template #default>
          <div
            class="grid gap-12px max-w-1440px mx-auto"
            :style="{
              gridTemplateColumns: `repeat(${CATEGORY_LIST.length}, minmax(0, 1fr))`
            }"
          >
            <div
              v-for="(item) in CATEGORY_LIST"
              :key="item.value"
              class="group relative flex h-100px w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-8px border border-transparent transition-all duration-300"
              :class="[
                activeCategory === item.value
                  ? 'bg-brandColor'
                  : 'hover:-translate-y-1 hover:border-#DBEAFE hover:shadow-[0_12px_32px_rgba(37,99,235,0.12)] bg-[rgba(191,191,191,0.10)]',
              ]"
              @click="activeCategory = item.value"
            >
              <div class="relative mb-8px flex-center h-20px w-20px">
                <div
                  :class="item.icon"
                  class="text-20px!"
                  :style="{
                    color: activeCategory === item.value ? '#fff' : item.color
                  }"
                />
              </div>
              <div
                class="text-14px"
                :class="activeCategory === item.value ? 'text-white' : 'text-#333'"
              >
                {{ item.label }}
              </div>
            </div>
          </div>
        </template>
      </el-skeleton>
    </section>

    <!-- 热门推荐 -->
    <section class="mt-60px max-w-1440px mx-auto mb-20px">
      <div class="flex justify-between items-center">
         <div class="flex items-center">
            <el-input
              placeholder="搜索工具名称或功能描述"
              :prefix-icon="Search"
              style="width: 360px;"
              :style="{
                '--el-input-border-radius': '20px',
                '--el-input-bg-color': '#fff'
              }"
              size="large"
              v-model="keyword"
            />
            <!-- <el-radio-group v-model="val" style="--el-text-color-regular: #666;--el-fill-color-blank:#fff;" size="large" class="ml-20px" fill="var(--brand-color)">
                <el-radio-button
              v-for="item in categoryOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
            </el-radio-group> -->
          </div>

          <div>
             <el-select size="large" v-model="value" placeholder="Select" style="width: 160px">
              <el-option
                label="按热度排序"
                value="按热度排序"
              />
            </el-select>
          </div>
      </div>
      <div
        class="relative mb-32px flex items-center justify-center max-md:flex-col"
      >
        <!-- <div
          class="absolute left-1/2 text-30px font-600 -translate-x-1/2 max-md:relative"
        >
          热门推荐
        </div> -->
       


        <!-- <div class="ml-auto w-280px max-md:w-full" data-aos="fade-left">
          <el-input
            v-model="keyword"
            placeholder="搜索应用名称 / 功能"
            clearable
            class="custom-search"
          >
            <template #append>
              <el-button
                type="primary"
                :style="{
                  backgroundColor: 'var(--brand-color)',
                  color: '#fff'
                }"
              >
                <Icon icon="ep:search" />
              </el-button>
            </template>
          </el-input>
        </div> -->
      </div>

      <!-- 应用卡片骨架屏区域 -->
      <el-skeleton :loading="loading.appList" animated :throttle="{ leading: 300 }">
        <template #template>
          <div class="grid grid-cols-3 gap-20px max-xl:grid-cols-2 max-md:grid-cols-1">
            <div v-for="n in 6" :key="n" class="rounded-8px bg-white p-20px">
              <!-- 标题 + badge -->
              <div class="flex items-center justify-between mb-16px">
                <el-skeleton-item variant="text" style="width: 55%; height: 24px" />
                <el-skeleton-item variant="text" style="width: 56px; height: 20px" />
              </div>
              <!-- 描述 -->
              <el-skeleton-item variant="text" style="width: 95%; margin-bottom: 8px" />
              <el-skeleton-item variant="text" style="width: 55%; margin-bottom: 20px" />
              <!-- 标签 -->
              <div class="flex flex-wrap gap-8px">
                <el-skeleton-item variant="text" style="width: 48px; height: 24px" />
                <el-skeleton-item variant="text" style="width: 56px; height: 24px" />
                <el-skeleton-item variant="text" style="width: 40px; height: 24px" />
              </div>
            </div>
        </div>
        </template>
        <template #default>
          <!-- :class="paginationTotal >= 9 ? 'h-420px max-xl:h-auto max-md:h-auto' : ''" -->
          <div v-if="appList.length" class="w-full" >
            <div class="grid grid-cols-3 gap-20px max-xl:grid-cols-2 max-md:grid-cols-1">
              <AppCard
                  v-for="(item) in appList"
                  :key="item.id"
                  :title="item.appName"
                  :badge="'免费试用'"
                  :badge-type="getTagType('primary')"
                  :desc="item.appDesc"
                  :tags="item.tagInfos?.map(t => ({ name: t.tagName, color: t.color })) || []"
                  @click="() => router.push(`/apps/details/${item.id}`)"
                />
            </div>
          </div>

          <Empty v-else>暂无应用</Empty>
        </template>
      </el-skeleton>

      <!-- 分页（切换页码时保持可见，避免高度突变导致的页面跳动） -->
      <div v-if="appList.length" class="flex justify-center py-32px">
        <el-pagination
          background
          :total="paginationTotal"
          :layout="pagination.paginationConfig!.layout"
          :page-size="pagination.paginationConfig!.pageSize"
          :current-page="pagination.paginationConfig!.currentPage"
          @current-change="currentChange"
          @size-change="sizeChange"
        />
      </div>
    </section>
  </div>
</template>
