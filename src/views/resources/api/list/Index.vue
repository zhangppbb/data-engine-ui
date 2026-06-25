<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { debounce } from 'lodash-es'
import router from '@/router'
import { fetchInterfaceResources, fetchFaceInfoListPage, InterfaceResource, WebapiFaceInfo } from '@/api/resources/faceInfo'
import { CallingPartyLabelMap } from '@/constants/api'
import { usePagination } from '@/hooks/web/usePagination'
import apiIcon from  '../../assets/images/api-icon.png'
/**
 * 骨架屏加载状态（分模块）
 */
const loading = ref({
  category: true,
  apiList: true
})

/**
 * 当前分类
 */
const activeCategory = ref('全部领域')

/**
 * 搜索关键字
 */
const keyword = ref('')

/**
 * 接口资源目录列表
 */
const resourceList = ref<InterfaceResource[]>([])
const resourceTotal = ref<number>(0)

/**
 * API列表数据
 */
const apiList = ref<WebapiFaceInfo[]>([])

/**
 * 获取接口资源目录
 * @description 调用后端接口获取接口资源目录列表，用于左侧分类筛选
 */
const loadResourceList = async () => {
  loading.value.category = true
  try {
    const data = await fetchInterfaceResources()
    resourceList.value = data.data || []
    resourceTotal.value = Number(data.total || 0)
  } catch (error) {
    resourceList.value = []
  } finally {
    loading.value.category = false
  }
}

/**
 * 分类统计列表
 * @description 根据接口数据生成分类列表，包含全部领域和各资源分类
 */
const categoryList = computed(() => {
  const list: { name: string; count: number }[] = []
  
  // 全部领域
  list.push({ name: '全部领域', count: resourceTotal.value })
  
  // 从资源目录生成分类
  resourceList.value.forEach((item) => {
    list.push({ name: item.name, count: Number(item.weight || 0) })
  })
  
  return list
})

/**
 * 统一查询函数
 * @description 调用后端接口获取API分页列表，支持分类和关键字筛选
 */
async function loadApiList() {
  loading.value.apiList = true
  try {
    const params: Partial<WebapiFaceInfo> = {
      pageNum: pagination.paginationConfig!.currentPage || 1,
      pageSize: pagination.paginationConfig!.pageSize,
    }
    
    // 分类筛选
    if (activeCategory.value !== '全部领域') {
      const resource = resourceList.value.find((r) => r.name === activeCategory.value)
      if (resource) {
        params.partId = resource.id
      }
    }
    
    // 关键字搜索
    if (keyword.value) {
      params.description = keyword.value
    }
    
    // 调用后端接口
    const result = await fetchFaceInfoListPage(params as WebapiFaceInfo)
    apiList.value = result.rows || []
    pagination.paginationConfig!.total = result.total || 0
  } catch (error) {
    apiList.value = []
    pagination.paginationConfig!.total = 0
  } finally {
    loading.value.apiList = false
  }
}

/**
 * 分页相关状态与方法
 * @description 使用 usePagination hook 管理分页
 */
const { pagination, paginationTotal, currentChange, sizeChange, refreshData } = usePagination(loadApiList, {
  paginationConfig: { pageSize: 10 }
})

/**
 * 切换页码并滚动到顶部
 * @param page 目标页码
 */
const handleCurrentChange = async (page: number) => {
  await currentChange(page)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/**
 * 切换每页条数并滚动到顶部
 * @param size 每页条数
 */
const handleSizeChange = async (size: number) => {
  await sizeChange(size)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

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
 * 初始化页面
 * @description 初始化时加载资源目录和API列表
 */
const initPage = () => {
  loadResourceList()
  loadApiList()
}

initPage()

/**
 * 格式化数据来源
 * @description 将字符串数组形式的callingParty转换为中文标签
 * @param callingParty 数据来源字符串（可能是数组字符串或单个值）
 * @returns 格式化后的中文标签
 */
const formatCallingParty = (callingParty: string): string => {
  if (!callingParty) {
    return ''
  }
  
  try {
    const parsed = JSON.parse(callingParty)
    if (Array.isArray(parsed)) {
      return parsed
        .map(item => CallingPartyLabelMap[item as keyof typeof CallingPartyLabelMap] || item)
        .join('、')
    }
    return CallingPartyLabelMap[parsed as keyof typeof CallingPartyLabelMap] || parsed
  } catch {
    return CallingPartyLabelMap[callingParty as keyof typeof CallingPartyLabelMap] || callingParty
  }
}

/**
 * 组件卸载钩子
 * @description 清理防抖函数，防止内存泄漏
 */
onUnmounted(() => {
  debouncedRefresh.cancel()
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

        <el-skeleton :loading="loading.category" animated>
          <template #template>
            <div v-for="n in 8" :key="n" class="flex items-center h-40px pl-20px">
              <el-skeleton-item variant="text" style="width: 58%; height: 14px" />
              <el-skeleton-item variant="text" style="width: 20px; height: 14px; margin-left: 20px" />
            </div>
          </template>
          <template #default>
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
          </template>
        </el-skeleton>
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
            {{ paginationTotal }}
            </span>
        </div>

        <!-- API列表骨架屏 -->
        <el-skeleton :loading="loading.apiList" animated :throttle="{ leading: 300 }">
          <template #template>
            <div
              v-for="n in 10"
              :key="n"
              class="py-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]"
            >
              <div class="flex items-center gap-20px">
                <!-- 左侧图标占位 -->
                <el-skeleton-item variant="image" class="!h-68px !w-68px shrink-0 !rounded-8px" />
                <!-- 右侧内容 -->
                <div class="min-w-0 flex-1">
                  <!-- 标题 -->
                  <el-skeleton-item variant="text" style="width: 45%; height: 20px; margin-bottom: 16px" />
                  <!-- ApiCode + 数据来源 -->
                  <div class="flex gap-x-40px mb-16px">
                    <el-skeleton-item variant="text" style="width: 120px" />
                    <el-skeleton-item variant="text" style="width: 140px" />
                  </div>
                  <!-- 描述 -->
                  <el-skeleton-item variant="text" style="width: 70%; margin-bottom: 16px" />
                  <!-- 标签 -->
                  <div class="flex gap-8px">
                    <el-skeleton-item variant="text" style="width: 48px; height: 24px" />
                    <el-skeleton-item variant="text" style="width: 56px; height: 24px" />
                    <el-skeleton-item variant="text" style="width: 40px; height: 24px" />
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template #default>
            <div>
              <div
                v-for="item in apiList"
                :key="item.faceId"
                class="py-20px cursor-pointer border-b border-b-solid border-b-[rgba(0,0,0,0.06)] transition-all hover:shadow-[0_4px_14px_rgba(43,101,255,0.08)]"
                @click="() => {
                  router.push(`/resources/api/details/${item.faceId}`)
                }"
                >
                <div class="flex items-center gap-20px">
                  <!-- 左侧图标 -->
                  <div
                    class="flex-center h-68px w-68px shrink-0 rounded-8px bg-[rgba(0,107,253,0.1)]"
                  >
                    <img class="w-40px" :src="item?.iconFileInfo?.url || apiIcon" alt="">
                    <!-- <div class="iconfont icon-jurassic_folder text-#006BFD text-40px"></div> -->
                  </div>

                  <!-- 右侧内容 -->
                  <div class="min-w-0 flex-1">
                    <!-- 标题 -->
                    <div class="text-20px font-600">
                      {{ item.faceName }}
                    </div>

                    <!-- 基础信息 -->
                    <div class="mt-16px flex flex-wrap items-center gap-x-40px text-16px text-#757575">
                      <div>
                        ApiCode：
                        <span>{{ item.faceCode }}</span>
                      </div>

                      <div>
                        数据来源：
                        <span>{{ formatCallingParty(item.callingParty) }}</span>
                      </div>
                    </div>

                    <!-- 描述 -->
                    <div class="mt-16px text-16px text-#757575">
                      描述：{{ item.description }}
                    </div>

                    <!-- 标签 -->
                    <div class="mt-16px flex bg-[rgba(191,191,191,0.1)] items-center text-16px text-#757575">
                        <div
                        v-for="(tag) in item.tagInfos?.map(t => t.tagName) || []"
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

            <Empty v-if="!apiList.length" type="empty" />
          </template>
        </el-skeleton>

        <!-- 分页 -->
        <div v-if="paginationTotal" class="mt-30px flex justify-center">
          <el-pagination
            background
            :layout="pagination.paginationConfig!.layout"
            :total="paginationTotal"
            :page-size="pagination.paginationConfig!.pageSize"
            :current-page="pagination.paginationConfig!.currentPage"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </div>
      </div>
      </div>
    </div>
</template>
