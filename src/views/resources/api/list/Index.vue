
<script setup lang="ts">
import { ref, computed } from 'vue'
import router from '@/router'
import mockData from '../mockData'

/**
 * API分类类型
 */
interface CategoryItem {
  name: string
  count: number
}

/**
 * API列表项类型
 */
interface ApiItem {
  id: number
  title: string
  apiCode: string
  source: string
  desc: string
  tags: string[]
  category: string
}

/**
 * 当前分类
 */
const activeCategory = ref('全部领域')


/**
 * 分类统计
 */
const categoryList = computed<CategoryItem[]>(() => {
  // 分类Map
  const map = new Map<string, number>()

  // 全部数量
  map.set('全部领域', apiList.value.length)

  // 分类统计
  apiList.value.forEach((item) => {
    const category = item.apiCategory || '未分类'

    map.set(category, (map.get(category) || 0) + 1)
  })

  // 转数组
  return Array.from(map.entries()).map(([name, count]) => ({
    name,
    count
  }))
})

/**
 * 分类筛选后的数据
 */
const filterList = computed(() => {
  if (activeCategory.value === '全部领域') {
    return apiList.value
  }

  return apiList.value.filter(
    (item) => item.apiCategory === activeCategory.value
  )
})

/**
 * 切换分类
 */
const handleCategory = (name: string) => {
  activeCategory.value = name
}
/**
 * API列表
 */
const apiList = ref(mockData)

/**
 * 搜索关键字
 */
const keyword = ref('')

/**
 * 当前页码
 */
const currentPage = ref(1)
const pageSize = ref(10)

/**
 * 按分类+关键字筛选
 */
const filteredApiList = computed(() => {
  let list = apiList.value

  // 分类筛选
  if (activeCategory.value !== '全部领域') {
    list = list.filter(item => item.apiCategory === activeCategory.value)
  }

  // 关键字筛选
  if (keyword.value) {
    const kw = keyword.value.toLowerCase()
    list = list.filter(item =>
      item.apiName1.toLowerCase().includes(kw) ||
      item.description.toLowerCase().includes(kw) ||
      item.tags.some(tag => tag.toLowerCase().includes(kw)) ||
      item.provider.toLowerCase().includes(kw) ||
      item.apiCode.toLowerCase().includes(kw)
    )
  }

  return list
})

/**
 * 分页后的列表
 */
const pagedApiList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return filteredApiList.value.slice(start, start + pageSize.value)
})
</script>

<template>
  <div class="min-h-screen bg-#f5f7fa">
    <div class="mx-auto max-w-1440px pt-20px flex items-center">
      <div class="flex items-center gap-12px">
        <div class="text-20px font-600">
          API集市
        </div>
        <div class="text-14px text-#999">
            全品类企业结构化数据API接口中心，支撑业务系统快速开发与数据对接
        </div>
       </div>
    </div>

    <!-- 页面主体 -->
    <div class="mx-auto mt-20px max-w-1440px flex gap-20px pb-30px">
      <!-- 左侧分类 -->
      <div
        class="w-220px shrink-0 rounded-8px bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02),_0px_1px_6px_-1px_rgba(0,0,0,0.02),_0px_1px_2px_0px_rgba(0,0,0,0.03)]"
      >
        <div class="p-20px text-16px font-400 text-#999">
          应用领域筛选
        </div>

        <div
          v-for="item in categoryList"
          :key="item.name"
          :class="[
            'flex cursor-pointer items-center pl-20px text-14px transition-all h-40px leading-40px text-14px',
            activeCategory === item.name
              ? 'bg-[rgba(0,72,152,0.1)] text-[var(--brand-color)] border-r-4 border-r-solid border-r-[var(--brand-color)] font-600'
              : 'hover:bg-#f7f8fa'
          ]"
          @click="activeCategory = item.name"
        >
          <span>{{ item.name }}</span>
          <span class="ml-20px">{{ item.count }}</span>
        </div>
      </div>

      <!-- 右侧内容 -->
      <div
        class="flex-1 p-20px bg-white rounded-8px shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02),_0px_1px_6px_-1px_rgba(0,0,0,0.02),_0px_1px_2px_0px_rgba(0,0,0,0.03)]"
        
      >
        <!-- 标题 -->
        <div class="pb-20px flex items-center gap-8px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            <span class="text-16px font-500">
            所有API
            </span>

            <span class="text-12px text-#2b65ff px-8px bg-[rgba(0,0,0,0.04)] text-[var(--brand-color)] font-600 leading-20px">
            167
            </span>
        </div>

        <!-- API列表 -->
        <div>
          <div
            v-for="item in filterList"
            :key="item.apiCode"
            class="py-20px cursor-pointer border-b border-b-solid border-b-[rgba(0,0,0,0.06)] transition-all hover:shadow-[0_4px_14px_rgba(43,101,255,0.08)]"
            @click="() => {
              router.push(`/resources/api/details/${item.apiCode}`)
            }"
            >
            <div class="flex items-center gap-20px">
              <!-- 左侧图标 -->
              <div
                class="flex-center h-68px w-68px shrink-0  rounded-8px bg-[rgba(0,107,253,0.1)]"
              >
                <div class="iconfont icon-jurassic_folder text-#006BFD text-40px"></div>
              </div>

              <!-- 右侧内容 -->
              <div class="min-w-0 flex-1">
                <!-- 标题 -->
                <div class="text-20px font-600">
                  {{ item.apiName2 }}
                </div>

                <!-- 基础信息 -->
                <div class="mt-16px flex flex-wrap items-center gap-x-40px text-16px text-#757575">
                  <div>
                    ApiCode：
                    <span>{{ item.apiCode }}</span>
                  </div>

                  <div>
                    数据来源：
                    <span>{{ item.provider }}</span>
                  </div>
                </div>

                <!-- 描述 -->
                <div class="mt-16px text-16px text-#757575">
                  描述：{{ item.description }}
                </div>

                <!-- 标签 -->
                <div class="mt-16px flex bg-[rgba(191,191,191,0.1)] items-center text-16px text-#757575">
                    <div
                    v-for="(tag) in item.tags"
                    :key="tag"
                    class="
                        relative
                    
                    h-40px
                    leading-40px
                    px-12px
                    text-16px
                    text-#757575

                    not-last:after:content-['']
                    not-last:after:absolute
                    not-last:after:right-0
                    not-last:after:top-50%
                    not-last:after:translate-y-[-50%]
                    not-last:after:w-1px
                    not-last:after:h-20px
                    not-last:after:bg-[rgba(191,191,191,.3)]
                    "
                    >
                    {{ tag }}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 分页 -->
        <!-- <div class="mt-30px flex justify-center">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100"
          />
        </div> -->
      </div>
      </div>
    </div>
</template>

<style scoped>
:deep(.el-pagination.is-background .el-pager li.is-active) {
  background-color: #2b65ff;
}
</style>