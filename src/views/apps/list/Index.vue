<script setup lang="ts">
import { computed, ref } from 'vue';
import banner1 from './assets/images/banner.png'
import banner2 from './assets/images/banner2.png'
import { ArrowRight, Search } from '@element-plus/icons-vue'
import AppCard from './components/AppCard.vue'
import router from '@/router';
import mockData from '../mockData'


const val = ref('全部')
const value = ref('按热度排序')
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
 * banner 数据
 */
const BANNER_LIST = [
  { id: 1, title: '企业招商全流程专区', desc: '从潜客挖掘到区域分析，一站式助力产业招商', image: banner1 },
  // { id: 2, title: 'AI 智能投标专区', desc: '基于大语言模型的智能数据分析师，自动完成', image: banner2 }
];

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


const activeCategory = ref('all')
/**
 * 自动根据 appList 生成分类
 */
const CATEGORY_LIST = computed(() => {
    // 获取所有 tags
  const allTags = mockData.flatMap((item) => item.tags || [])

  // 去重
  const uniqueTags = [...new Set(allTags)]

  // 动态生成分类
  const categories = uniqueTags.map((tag) => {
    const count = mockData.filter((item) =>
      item.tags?.includes(tag)
    ).length

    // 获取配置
    const config = CATEGORY_CONFIG[tag] || {}

    return {
      label: tag,
      value: config.value || tag,
      icon: config.icon || 'iconfont icon-24gf-thumbsUp2',
      color: config.color || '#3370FF',
      count
    }
  })

  // 全部
  return [
    {
      label: '全部场景',
      value: 'all',
      icon: 'iconfont icon-quanbu',
      color: '#3370FF',
      count: mockData.length
    },

    ...categories
  ]
})

function openUrl(url: string) {
  if (typeof window !== 'undefined') {
    window.open(url);
  }
}

const SECTION_LIST = mockData

/**
 * 当前 banner
 */
const currentBanner = ref(0);

/**
 * 当前选中
 */

/**
 * 分类统计
 * 根据 categories 字段统计
 */
const categoryOptions = computed(() => {
  // 所有分类
  const allCategories = mockData.flatMap(
    (item) => item.categories || []
  )

  // 去重
  const uniqueCategories = [...new Set(allCategories)]

  // 动态统计
  const list = uniqueCategories.map((category) => {
    const count = mockData.filter((item) =>
      item.categories?.includes(category)
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
      label: `全部 ${mockData.length}`,
      value: '全部',
      count: mockData.length
    },
    ...list
  ]
})

/**
 * 搜索关键字
 */
const keyword = ref('');

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
 * 应用过滤
 * SECTION_LIST 实际就是应用数组
 */
const filterSections = computed(() => {
  return SECTION_LIST.filter((item) => {
    /**
     * 分类筛选
     * tags
     */
    const categoryMatch =
      activeCategory.value === 'all'
        ? true
        : item.tags?.includes(
            CATEGORY_LIST.value.find(
              (c) => c.value === activeCategory.value
            )?.label
          )

    /**
     * 标签筛选
     * categories
     */
    const typeMatch =
      val.value === '全部'
        ? true
        : item.categories?.includes(val.value)

    /**
     * 关键字筛选
     */
    const keywordMatch = keyword.value
      ? item.name?.includes(keyword.value) ||
        item.shortDescription?.includes(keyword.value) ||
        item.longDescription?.includes(keyword.value)
      : true

    /**
     * 同时满足
     */
    return categoryMatch && typeMatch && keywordMatch
  })
})
</script>

<template>
  <div class="min-h-screen">
    <!-- banner -->
    <div class="bg-white">
      <div class="max-w-1440px mx-auto">

        <!-- banner list -->
        <div class="grid grid-cols-1 max-lg:grid-cols-1">
          <div
            v-for="(item, index) in BANNER_LIST"
            :key="item.id"
            class="group relative bg-cover h-260px overflow-hidden hover:shadow-[0_8px_30px_rgba(15,35,95,0.08)] transition-all duration-300 hover:-translate-y-1.5"
            data-aos="fade-up"
            :data-aos-delay="index * 150"
            :style="{
              backgroundImage: `url(${item.image})`
            }"
          >
            <!-- <div class="h-210px w-full">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div> -->
            <div class="flex h-full flex-col justify-center pl-15%">
              <div class="flex text-32px font-bold">
                <div class="bg-gradient-to-r from-#004898 via-#2f74ff to-#05D7F6 bg-clip-text text-transparent">
                  {{ item.title }}
                </div>
              </div>

              <div class="text-#999999 text-20px pt-16px">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- dot -->
      <div class="mt-20px flex items-center justify-center gap-8px">
        <div
          v-for="(_, index) in [1,2]"
          :key="index"
          class="h-8px w-8px cursor-pointer rounded-full bg-#D8D8D8 transition-all duration-300"
          :class="{ 'bg-brandColor!': currentBanner === index }"
          @click="currentBanner = index"
        ></div>
      </div>
    </div>

    <!-- 分类 -->
    <section class="bg-#fff py-32px">
      <!-- <div
        class="py-32px text-center text-30px font-600"
        data-aos="zoom-in"
      >
        应用标签
      </div> -->

      <!-- <div class="flex flex-wrap items-center justify-center gap-12px"> -->
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
            />
            <el-radio-group v-model="val" style="--el-text-color-regular: #666;--el-fill-color-blank:#fff;" size="large" class="ml-20px" fill="var(--brand-color)">
                <el-radio-button
              v-for="item in categoryOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
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

      <div class="grid grid-cols-3 gap-20px max-xl:grid-cols-2 max-md:grid-cols-1">
        <AppCard
            v-for="(item, index) in filterSections"
            :key="item.id"
            :title="item.name"
            :badge="'免费试用'"
            :badge-type="getTagType('primary')"
            :desc="item.shortDescription"
            :tags="item.tags"
            :data-aos="index >= 3 ? 'fade-up' : null"
            :data-aos-delay="index >= 3 ? (index - 3) * 80 : 0"
            @click="() => router.push(`/apps/details/${item.id}`)"
          />
      </div>

      <!-- <div class="flex justify-center py-32px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="50"
        />
      </div> -->
    </section>
  </div>
</template>
