<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { debounce } from 'lodash-es'
import router from '@/router'
import { fetchAllReportType, ReportType } from '@/api/apps/reportType'
import { fetchReportInfoPage, ReportInfo, ReportInfoQueryDTO } from '@/api/apps/reportInfo'
import { fetchAllTagCategory, TagCategory, TagInfo } from '@/api/apps/tagCategory'
import { fetchSysAreaTree, SysAreaNode } from '@/api/apps/sysArea'
import { usePagination } from '@/hooks/web/usePagination'
import ReportCard from '@/components/ReportCard/Index.vue'
import { TAG_TYPE } from '@/constants/tag'

/**
 * 骨架屏加载状态
 */
const loading = ref({
  typeFilter: true,
  reportList: true,
  areaTree: true,
  tagCategory: true
})

/**
 * 报告类型列表
 */
const reportTypes = ref<ReportType[]>([])

/**
 * 当前选中的报告类型
 */
const activeType = ref('')

/**
 * 搜索关键字
 */
const keyword = ref('')

/**
 * 报告列表数据
 */
const reportList = ref<ReportInfo[]>([])

/**
 * 筛选项
 */
const searchForm = ref({
  areaCodes: [] as string[],
  year: '',
  tag: ''
})

/** 省市区树 */
const areaTree = ref<SysAreaNode[]>([])

/** 标签分类（含标签列表） */
const tagCategories = ref<TagCategory[]>([])

/** Cascader 属性映射 */
const cascaderProps = {
  value: 'id',
  label: 'name',
  children: 'children',
  checkStrictly: true
}

/** 年度选项：当前年份往前推十年 */
const yearOptions = computed(() => {
  const years: string[] = ['全部']
  const currentYear = new Date().getFullYear()
  for (let y = currentYear; y > currentYear - 10; y--) {
    years.push(String(y))
  }
  return years
})

/** 标签选项：从分类中提取全部标签 */
const tagOptions = computed(() => {
  const tags: TagInfo[] = []
  for (const cat of tagCategories.value) {
    if (cat.tagInfos) {
      tags.push(...cat.tagInfos)
    }
  }
  return tags
})

/**
 * 获取报告类型列表
 */
const loadReportTypes = async () => {
  loading.value.typeFilter = true
  try {
    const res: any = await fetchAllReportType()
    // 只取启用的（status === 0）
    const list: ReportType[] = res?.data || res || []
    reportTypes.value = list.filter((item) => item.status === 0)
  } catch (error) {
    reportTypes.value = []
  } finally {
    loading.value.typeFilter = false
  }
}

/**
 * 获取省市区树
 */
const loadAreaTree = async () => {
  loading.value.areaTree = true
  try {
    const res: any = await fetchSysAreaTree()
    areaTree.value = res?.data || res || []
  } catch {
    areaTree.value = []
  } finally {
    loading.value.areaTree = false
  }
}

/**
 * 获取标签分类
 */
const loadTagCategories = async () => {
  loading.value.tagCategory = true
  try {
    const res: any = await fetchAllTagCategory({
      categoryCode: TAG_TYPE.REPORT
    })
    const tags = res?.data || res || []
    tagCategories.value = tags
  } catch {
    tagCategories.value = []
  } finally {
    loading.value.tagCategory = false
  }
}

/**
 * 分页查询报告列表
 */
async function loadReportList() {
  loading.value.reportList = true
  try {
    const params: ReportInfoQueryDTO = {
      pageNum: pagination.paginationConfig!.currentPage || 1,
      pageSize: pagination.paginationConfig!.pageSize
    }

    // 报告类型筛选
    if (activeType.value) {
      params.reportId = activeType.value
    }

    // 关键字搜索
    if (keyword.value) {
      params.reportTitle = keyword.value
    }

    // 地区筛选
    if (searchForm.value.areaCodes?.length) {
      params.areaValue = searchForm.value.areaCodes[searchForm.value.areaCodes.length - 1]
    }

    // 年度筛选
    if (searchForm.value.year && searchForm.value.year !== '全部') {
      params.reportYear = searchForm.value.year
    }

    // 标签筛选
    if (searchForm.value.tag) {
      const matchedTag = tagOptions.value.find((t) => t.tagName === searchForm.value.tag)
      if (matchedTag) {
        params.tagInfos = [matchedTag]
      }
    }

    // 调用后端接口
    const result = await fetchReportInfoPage(params)
    reportList.value = result.rows || []
    pagination.paginationConfig!.total = result.total || 0
  } catch (error) {
    reportList.value = []
    pagination.paginationConfig!.total = 0
  } finally {
    loading.value.reportList = false
  }
}

/**
 * 分页
 */
const { pagination, paginationTotal, currentChange, sizeChange, refreshData } = usePagination(loadReportList, {
  paginationConfig: { pageSize: 6 }
})

/**
 * 切换分页（滚动到顶部）
 */
const handleCurrentChange = async (page: number) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  await currentChange(page)
}

/**
 * 防抖刷新
 */
const debouncedRefresh = debounce(() => refreshData(), 300)

/**
 * 监听关键字变化
 */
watch(keyword, () => {
  debouncedRefresh()
})

/**
 * 监听报告类型变化
 */
watch(activeType, () => {
  refreshData()
})

/**
 * 监听筛选条件变化
 */
watch(
  () => searchForm.value.areaCodes,
  () => debouncedRefresh()
)
watch(
  () => searchForm.value.year,
  () => debouncedRefresh()
)
watch(
  () => searchForm.value.tag,
  () => debouncedRefresh()
)

/**
 * 初始化页面
 */
const initPage = () => {
  loadReportTypes()
  loadAreaTree()
  loadTagCategories()
  loadReportList()
}

initPage()

/**
 * 组件卸载时清理防抖
 */
onUnmounted(() => {
  debouncedRefresh.cancel()
})
</script>

<template>
  <div>
    <!-- 搜索区域 -->
    <section class="card mx-auto w-1440px mt-20px">
      <!-- 标题 -->
      <div class="text-30px text-center font-600 leading-tight">
        <span
          class="bg-clip-text text-transparent"
          :style="{
            backgroundImage: `linear-gradient(134deg, var(--brand-color) 0%, #05D7F6 100%)`
          }"
        >
          研究报告
        </span>
      </div>

      <!-- 搜索 -->
      <div class="mx-auto mt-40px w-920px">
        <div
          class="mx-auto flex h-50px md:h-60px w-full max-w-980px rounded-full border border-solid border-brandColor bg-white"
        >
          <input
            v-model="keyword"
            placeholder="请输入关键字"
            class="flex-1 px-16px md:px-30px text-14px md:text-16px outline-none rounded-full"
            style="border: none"
          />
          <div
            class="w-180px shrink-0 font-600 cursor-pointer flex-center bg-brandColor text-16px md:text-20px text-white rounded-full transition-all duration-300 hover:opacity-90"
            @click="debouncedRefresh()"
          >
            <Icon icon="ep:search" class="mr-8px md:mr-14px" />
            查询
          </div>
        </div>
      </div>

      <!-- 内容区域 -->
      <div class="mx-auto w-920px">
        <!-- 报告类型（骨架屏 + 真实数据） -->
        <div class="mt-40px flex items-center">
          <div class="mr-20px shrink-0 text-14px font-500 text-#222">报告类型：</div>

          <el-skeleton :loading="loading.typeFilter" animated :throttle="{ leading: 200 }">
            <template #template>
              <div class="flex gap-8px">
                <el-skeleton-item
                  v-for="i in 5"
                  :key="i"
                  variant="button"
                  style="width: 80px; height: 36px"
                />
              </div>
            </template>
            <template #default>
              <el-radio-group
                v-model="activeType"
                class="report-type-group"
                size="large"
                style="--el-text-color-regular: #666; --el-fill-color-blank: rgb(143 153 183 / 20%)"
              >
                <el-radio-button label="" value="">不限</el-radio-button>
                <el-radio-button
                  v-for="item in reportTypes"
                  :key="item.id"
                  :label="item.id"
                  :value="item.id"
                >
                  {{ item.typeName }}
                </el-radio-button>
              </el-radio-group>
            </template>
          </el-skeleton>
        </div>

        <!-- 筛选 -->
        <div class="mt-20px flex whitespace-nowrap items-center gap-y-20px">
          <!-- 地区 -->
          <div class="mr-40px flex items-center">
            <span class="mr-12px shrink-0 text-14px font-500 text-#222">选择地区：</span>

            <el-cascader
              v-model="searchForm.areaCodes"
              :options="areaTree"
              :props="cascaderProps"
              placeholder="请选择省/市"
              class="!w-200px"
              size="large"
              clearable
            />
          </div>

          <!-- 年度 -->
          <div class="mr-40px flex items-center">
            <span class="mr-12px shrink-0 text-14px font-500 text-#222">报告年度：</span>

            <el-select
              v-model="searchForm.year"
              placeholder="全部"
              class="!w-160px"
              size="large"
            >
              <el-option
                v-for="item in yearOptions"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </div>

          <!-- 标签 -->
          <div class="flex items-center">
            <span class="mr-12px shrink-0 text-14px font-500 text-#222">报告标签：</span>

            <el-select
              v-model="searchForm.tag"
              placeholder="全部"
              class="!w-160px"
              size="large"
              clearable
            >
              <el-option label="全部" value="" />
              <el-option
                v-for="item in tagOptions"
                :key="item.id"
                :label="item.tagName"
                :value="item.tagName"
              />
            </el-select>
          </div>
        </div>
      </div>
    </section>

    <!-- 报告列表（骨架屏 + 真实数据） -->
    <section class="mx-auto mt-20px w-1440px card mb-20px">
      <el-skeleton :loading="loading.reportList" animated :throttle="{ leading: 200 }">
        <template #template>
          <div class="w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20px">
            <div
              v-for="n in 6"
              :key="n"
              class="overflow-hidden rounded-8px border-solid border-1px border-[rgba(0,0,0,0.1)]"
            >
              <!-- 封面图占位 -->
              <el-skeleton-item variant="image" style="width: 100%; height: 160px" />
              <!-- 卡片内容占位 -->
              <div class="p-20px">
                <div class="flex items-center gap-12px mb-16px">
                  <el-skeleton-item variant="text" style="width: 55%; height: 22px" />
                </div>
                <el-skeleton-item variant="text" style="width: 95%; margin-bottom: 8px" />
                <el-skeleton-item variant="text" style="width: 60%; margin-bottom: 20px" />
                <div class="flex items-center justify-between">
                  <el-skeleton-item variant="text" style="width: 35%; height: 16px" />
                  <el-skeleton-item variant="text" style="width: 25%; height: 16px" />
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #default>
          <div
            v-if="reportList.length"
            class="w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20px"
          >
            <ReportCard
              v-for="item in reportList"
              :key="item.id"
              :report-item="item"
              @click="() => router.push(`/apps/report/details/${item.id}`)"
            />
          </div>

          <Empty v-else>暂无报告</Empty>
        </template>
      </el-skeleton>

      <!-- 分页 -->
      <div v-if="reportList.length" class="flex justify-center py-32px">
        <el-pagination
          background
          :total="paginationTotal"
          :layout="pagination.paginationConfig!.layout"
          :page-size="pagination.paginationConfig!.pageSize"
          :current-page="pagination.paginationConfig!.currentPage"
          @current-change="handleCurrentChange"
          @size-change="sizeChange"
        />
      </div>
    </section>
  </div>
</template>
