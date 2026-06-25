<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import { ArrowRight, Search } from '@element-plus/icons-vue'
import { debounce } from 'lodash-es'
import AppCard from '@/components/AppCard/AppCard.vue'
import router from '@/router';
import { fetchBanner, AppBanner } from '@/api/banner'
import { fetchAllTagCategory, TagCategory } from '@/api/apps/tagCategory'
import { getZoneRelAppList, AppZone, AppInfo } from '@/api/apps/zone'
import type { WebapiFaceInfo } from '@/api/resources/faceInfo'
import type { CaseInfoItem } from '@/api/cases/caseInfo'
import { useRoute } from 'vue-router'
import { usePageBreadcrumb } from '@/layout/data-engine/usePageBreadcrumb'
import { ZONE_TYPE, ZONE_TYPE_META } from '@/constants/zone'

const route = useRoute()
const val = ref('全部')
const value = ref('按热度排序')

// Banner ID
const bannerId = ref(route.query.bannerId)

// 专区编码
const zoneCode = ref(route.query.zoneCode)

// 专区 ID
const zoneId = ref(route.query.zoneId)

// 面包屑
const { setBreadcrumbTail } = usePageBreadcrumb()

/**
 * 分类类型
 */
interface CategoryItem {
  label: string;
  value: string;
  icon: string;
  color: string;
  percent?: string
}

/**
 * 卡片类型
 */
interface AppCardItem {
  id: number;
  title: string;
  badge?: string;
  badgeType?: 'primary' | 'success' | 'warning' | 'danger';
  desc: string;
  href?: string;
  path?: string;
  tags: string[];
}

/**
 * 模块类型
 */
interface SectionItem {
  title: string;
  list: AppCardItem[];
}


/**
 * 搜索关键字
 */
const keyword = ref('');

/**
 * 当前选中的分类
 */
const activeCategory = ref('all')

/**
 * 单个Banner数据
 */
const currentBanner = ref<AppBanner | null>(null)

/**
 * 标签分类列表数据
 */
const tagCategories = ref<TagCategory[]>([])

/**
 * 应用列表数据（应用或资源）
 */
const appList = ref<(AppInfo | WebapiFaceInfo | CaseInfoItem)[]>([])

/**
 * 专区列表数据
 */
const zoneList = ref<AppZone[]>([])

/**
 * 当前选中的应用馆类型
 */
const activeAppType = ref(ZONE_TYPE.APP)

/**
 * 骨架屏加载状态（分模块）
 */
const loading = ref({
  banner: true,
  category: true,
  tagFilter: true,
  appList: true
})


/**
 * 获取Banner详情
 * @description 根据URL参数中的bannerId和zoneCode调用后端接口获取单个Banner数据
 */
const loadBanner = async () => {
  loading.value.banner = true
  try {
    const data = await fetchBanner({ 
      bannerId: String(bannerId.value || ''), 
      zoneCode: String(zoneCode.value || '') 
    })
    currentBanner.value = data || null
  } catch (error) {
    currentBanner.value = null
  } finally {
    loading.value.banner = false
  }
}

/**
 * 获取标签分类列表
 * @description 调用后端接口获取所有标签分类数据
 */
const loadTagCategories = async () => {
  loading.value.category = true
  loading.value.tagFilter = true
  try {
    const data = await fetchAllTagCategory()
    tagCategories.value = data || []
  } catch (error) {
    tagCategories.value = []
  } finally {
    loading.value.category = false
    loading.value.tagFilter = false
  }
}

/**
 * 获取专区关联的应用列表
 * @description 根据专区ID或专区编码获取专区关联的应用
 * @param params 查询参数
 */
const loadZoneAppList = async (params: { id?: string; keyword?: string; zoneCode?: string; appType?: string } = {}) => {
  loading.value.appList = true
  try {
    const data = await getZoneRelAppList(params)
    zoneList.value = data || []
    
    // 从专区数据中提取列表（按 appType 选择数据源）
    if (zoneList.value.length > 0) {
      const allItems: (AppInfo | WebapiFaceInfo | CaseInfoItem)[] = []
      zoneList.value.forEach((zone) => {
        // 资源馆走 webapiFaceInfos
        if (activeAppType.value === ZONE_TYPE.FACE) {
          if (zone.webapiFaceInfos) {
            allItems.push(...zone.webapiFaceInfos)
          }
        } else if (activeAppType.value === ZONE_TYPE.CASE) {
          // 案例馆走 caseInfos
          if (zone.caseInfos) {
            allItems.push(...zone.caseInfos)
          }
        } else {
          // 应用馆走 appInfos
          if (zone.appInfos) {
            allItems.push(...zone.appInfos)
          }
        }
      })
      appList.value = allItems
    } else {
      appList.value = []
    }
  } catch (error) {
    appList.value = []
  } finally {
    loading.value.appList = false
  }
}

/**
 * 统一查询函数
 * @description 统一调用专区接口获取应用列表，传入专区编码参数
 */
const loadApplicationList = async () => {
  // 根据专区ID或专区编码获取应用列表
  await loadZoneAppList({
    id: zoneId.value as string || undefined,
    keyword: keyword.value || undefined,
    zoneCode: zoneCode.value as string || undefined,
    appType: activeAppType.value || undefined
  })
}

/**
 * 防抖后的应用列表查询函数
 * @description 使用 lodash-es 的 debounce 实现防抖，延迟 300ms 执行
 */
const debouncedLoadApplicationList = debounce(loadApplicationList, 300)

/**
 * 监听关键字变化
 * @description 当搜索关键字改变时，触发防抖查询
 */
watch(keyword, () => {
  debouncedLoadApplicationList()
})

/**
 * 监听应用馆类型变化
 * @description 当切换应用馆/资源馆/案例馆时，重新加载数据
 */
watch(activeAppType, () => {
  loadApplicationList()
})

/**
 * 监听分类变化
 * @description 当选中的分类改变时，触发防抖查询
 */
watch(activeCategory, () => {
  debouncedLoadApplicationList()
})

/**
 * 监听标签变化
 * @description 当标签筛选条件改变时，触发防抖查询
 */
watch(val, () => {
  debouncedLoadApplicationList()
})

/**
 * 初始化页面
 * @description 初始化时加载所有必要数据
 */
const initPage = () => {
  loadBanner()
  // loadTagCategories()
  loadApplicationList()
}

/**
 * 监听Banner数据变化，设置面包屑
 * @description 当Banner数据加载完成后，设置面包屑的末级项
 */
watch(
  () => currentBanner.value?.bannerName,
  (name) => {
    setBreadcrumbTail(
      name ? { label: name, path: '/apps/zone' } : null
    )
  },
  { immediate: true }
)

initPage()

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
 * 根据接口数据生成分类列表
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

  // 从接口数据生成分类
  const categories = tagCategories.value.map((category) => {
    // 获取样式配置
    const config = CATEGORY_CONFIG[category.categoryName] || {}
    
    // 统计该分类下的应用数量
    const count = appList.value.filter(
      (app) => (app as AppInfo).categoryId === category.id ||
        (app as AppInfo).tagInfos?.some((tag) => tag.categoryId?.toString() === category.id)
    ).length

    return {
      label: category.categoryName,
      value: category.categoryCode,
      icon: category.icon || config.icon || 'iconfont icon-24gf-thumbsUp2',
      color: config.color || '#3370FF',
      count
    }
  })

  return [allCategory, ...categories]
})

/**
 * 当前选中
 */

/**
 * 分类统计
 * 根据接口数据统计
 */
const categoryOptions = computed(() => {
  // 所有分类
  const allCategories = appList.value
    .filter((item) => (item as AppInfo).appCategoryInfo?.categoryName)
    .map((item) => (item as AppInfo).appCategoryInfo!.categoryName)

  // 去重
  const uniqueCategories = [...new Set(allCategories)]

  // 动态统计
  const list = uniqueCategories.map((category) => {
    const count = appList.value.filter(
      (item) => (item as AppInfo).appCategoryInfo?.categoryName === category
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
 * badge 类型映射
 */
const getTagType = (type?: string) => {
  switch (type) {
    case 'success': return 'success';
    case 'warning': return 'warning';
    case 'danger': return 'danger';
    default: return 'primary';
  }
};

/**
 * 从列表项获取名称（兼容 AppInfo / WebapiFaceInfo）
 */
const getItemName = (item: AppInfo | WebapiFaceInfo | CaseInfoItem): string => {
  return (item as AppInfo).appName || (item as WebapiFaceInfo).faceName || (item as CaseInfoItem).title || ''
}

/**
 * 从列表项获取描述（兼容 AppInfo / WebapiFaceInfo）
 */
const getItemDesc = (item: AppInfo | WebapiFaceInfo | CaseInfoItem): string => {
  return (item as AppInfo).appDesc || (item as WebapiFaceInfo).description || (item as CaseInfoItem).description || ''
}

/**
 * 从列表项获取唯一标识
 */
const getItemId = (item: AppInfo | WebapiFaceInfo | CaseInfoItem): string => {
  return (item as AppInfo).id || (item as WebapiFaceInfo).faceId || (item as CaseInfoItem).id || ''
}

/**
 * 判断是否为资源（FACE）类型
 */
const isFaceItem = (item: AppInfo | WebapiFaceInfo | CaseInfoItem): item is WebapiFaceInfo => {
  return !!(item as WebapiFaceInfo).faceId
}

const isCaseItem = (item: AppInfo | WebapiFaceInfo | CaseInfoItem): item is CaseInfoItem => {
  return activeAppType.value === ZONE_TYPE.CASE && !!(item as CaseInfoItem).caseBusinesses !== undefined
}

/**
 * 从列表项获取详情跳转路径
 */
const getItemDetailPath = (item: AppInfo | WebapiFaceInfo | CaseInfoItem): string => {
  if (isFaceItem(item)) {
    return `/resources/api/details/${item.faceId}`
  }
  if (isCaseItem(item)) {
    return `/cases/details/${item.id}`
  }
  return `/apps/details/${(item as AppInfo).id}`
}

/**
 * 从列表项获取标签列表
 */
const getItemTags = (item: AppInfo | WebapiFaceInfo | CaseInfoItem) => {
  const tagInfos = (item as AppInfo).tagInfos || (item as WebapiFaceInfo).tagInfos || (item as CaseInfoItem).tagInfos
  return tagInfos || []
}

/**
 * 根据 activeAppType 映射 type 标签文本
 */
const appTypeLabel = computed(() => ZONE_TYPE_META[activeAppType.value]?.label || '')

/**
 * 根据 activeAppType 映射 type 标签颜色
 */
const appTypeColor = computed(() => ZONE_TYPE_META[activeAppType.value]?.color || 'primary')

/**
 * 应用过滤
 * 使用接口数据 appList
 */
const filterSections = computed(() => {
  return appList.value.filter((item) => {
    const appItem = item as AppInfo
    const name = getItemName(item)
    const desc = getItemDesc(item)

    /**
     * 分类筛选
     */
    const categoryMatch =
      activeCategory.value === 'all'
        ? true
        : appItem.categoryId === activeCategory.value ||
          getItemTags(item).some(
            (tag) => tag.categoryId?.toString() === activeCategory.value
          )

    /**
     * 标签筛选
     */
    const typeMatch =
      val.value === '全部'
        ? true
        : appItem.appCategoryInfo?.categoryName === val.value

    /**
     * 关键字筛选
     */
    const keywordMatch = keyword.value
      ? name.includes(keyword.value) ||
        desc.includes(keyword.value)
      : true

    return categoryMatch && typeMatch && keywordMatch
  })
})
</script>

<template>
  <div class="min-h-screen">
    <!-- banner -->
    <div class="bg-white">
      <div class="max-w-1440px mx-auto pb-32px">
        <el-skeleton :loading="loading.banner" animated :throttle="{ leading: 300 }">
          <template #template>
            <el-skeleton-item variant="p" style="height: 260px;border-radius: 8px;" />
          </template>
          <template #default>
            <div v-if="currentBanner"
              class="group relative bg-cover h-260px overflow-hidden hover:shadow-[0_8px_30px_rgba(15,35,95,0.08)] transition-all duration-300 hover:-translate-y-1.5"
              data-aos="fade-up"
              :style="{ backgroundImage: `url(${currentBanner.imageUrl})` }"
            >
              <div class="flex h-full flex-col justify-center pl-15%">
                <div class="flex text-32px font-bold">
                  <div class="bg-gradient-to-r from-#004898 via-#2f74ff to-#05D7F6 bg-clip-text text-transparent">
                    {{ currentBanner.bannerName }}
                  </div>
                </div>
                <div class="text-#999999 text-20px pt-16px">
                  {{ currentBanner.bannerDesc }}
                </div>
              </div>
            </div>
          </template>
        </el-skeleton>
      </div>
    </div>

    <!-- 分类 -->
    <!-- <section class="bg-#fff py-32px">
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
    </section> -->

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
            <el-radio-group v-model="activeAppType" style="--el-text-color-regular: #666;--el-fill-color-blank:#fff;" size="large" class="ml-20px" fill="var(--brand-color)">
                <el-radio-button
                label="应用馆"
                :value="ZONE_TYPE.APP"
              />
                <el-radio-button
                label="资源馆"
                :value="ZONE_TYPE.FACE"
              />
                <el-radio-button
                label="案例馆"
                :value="ZONE_TYPE.CASE"
              />
            </el-radio-group>
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
          <div v-if="appList.length" class="grid grid-cols-3 gap-20px max-xl:grid-cols-2 max-md:grid-cols-1">
            <AppCard
              v-for="(item) in appList"
              :key="getItemId(item)"
              :title="getItemName(item)"
              :type="appTypeLabel"
              :type-type="appTypeColor"
              :badge="'免费试用'"
              :badge-type="getTagType('primary')"
              :desc="getItemDesc(item)"
              :tags="getItemTags(item).map(t => ({ name: t.tagName, color: t.color }))"
              @click="() => router.push(getItemDetailPath(item))"
            />
          </div>

          <Empty v-else>暂无应用</Empty>
        </template>
      </el-skeleton>
    </section>
  </div>
</template>
