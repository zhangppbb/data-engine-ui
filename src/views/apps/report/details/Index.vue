

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import dayjs from 'dayjs'
import {
  ArrowRight,
  Timer,
  Histogram,
  Check,
  Tools,
  ScaleToOriginal,
  Location,
  Box
} from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { usePageBreadcrumb } from '@/layout/data-engine/usePageBreadcrumb'
import { getReportInfoById, ReportInfo, fetchReportInfoPage, downloadReportFile, previewReportFile } from '@/api/apps/reportInfo'
import { saveAs } from 'file-saver'

const router = useRouter()
const route = useRoute()
const { setBreadcrumbTail } = usePageBreadcrumb()

/** 骨架屏加载状态 */
const loading = ref(true)

/** 报告详情数据 */
const reportModel = ref<ReportInfo>({} as ReportInfo)

/** 格式化发布时间（YYYY-MM） */
const publishTimeFormatted = computed(() => {
  if (!reportModel.value.publishTime) return ''
  return dayjs(reportModel.value.publishTime).format('YYYY-MM')
})

/** 格式化报告年度 */
const reportYearFormatted = computed(() => {
  if (!reportModel.value.reportYear) return ''
  return `${reportModel.value.reportYear}年`
})

/** 格式化文件大小（KB → MB） */
const reportSizeFormatted = computed(() => {
  const raw = reportModel.value.reportSize
  if (!raw) return ''
  const kb = Number(raw)
  if (isNaN(kb)) return raw
  if (kb >= 1024) {
    return (kb / 1024).toFixed(2) + ' MB'
  }
  return kb.toFixed(2) + ' KB'
})

const initPage = async () => {
  const id = route.params.id as string
  if (!id) return
  loading.value = true
  try {
    const res: any = await getReportInfoById(id)
    reportModel.value = res?.data || res || {}
    // 加载推荐列表
    loadRecommendList()
  } catch {
    reportModel.value = {} as ReportInfo
  } finally {
    loading.value = false
  }
}
initPage()

watch(
  () => route.params.id,
  () => {
    initPage()
  }
)

watch(
  () => reportModel.value?.reportTitle,
  (title) => {
    setBreadcrumbTail(
      title ? { label: title, path: '/apps/report/details' } : null
    )
  },
  { immediate: true }
)
const recommendList = ref<ReportInfo[]>([])
const recommendLoading = ref(false)

/**
 * 加载推荐报告（按当前报告标签查询）
 */
const loadRecommendList = async () => {
  const tags = reportModel.value?.tagInfos
  recommendLoading.value = true
  try {
    const result = await fetchReportInfoPage({
      pageNum: 1,
      pageSize: 4,
      tagInfos: tags
    })
    // 排除当前报告
    recommendList.value = (result?.rows || []).filter(
      (item) => item.id !== reportModel.value.id
    )
  } catch {
    recommendList.value = []
  } finally {
    recommendLoading.value = false
  }
}

/** 下载/预览按钮 loading */
const downloadLoading = ref(false)
const previewLoading = ref(false)

/**
 * 下载报告（调用后端接口获取文件流）
 */
const downloadReport = async () => {
  downloadLoading.value = true
  try {
    const blob = await downloadReportFile(reportModel.value)
    saveAs(blob, `${reportModel.value.reportTitle || 'report'}.pdf`)
  } catch {
    // ignore
  } finally {
    downloadLoading.value = false
  }
}

/**
 * 预览报告（调用后端接口获取 reportFile 路径后打开）
 */
const previewReport = async () => {
  previewLoading.value = true
  try {
    const res: any = await previewReportFile(reportModel.value)
    const reportFile = res?.data?.reportFile || res?.reportFile
    if (reportFile) {
      window.open(reportFile)
    }
  } catch {
    // ignore
  } finally {
    previewLoading.value = false
  }
}
</script>

<template>
  <div class="mt-20px">
    <!-- main -->
    <main class="mx-auto w-1440px">
      <el-skeleton :loading="loading" animated :throttle="{ leading: 200 }">
        <template #template>
          <!-- top card skeleton -->
          <div class="h-260px flex card">
            <el-skeleton-item variant="image" style="width: 428px; height: 220px; border-radius: 8px" />
            <div class="ml-32px flex-1">
              <el-skeleton-item variant="text" style="width: 60%; height: 24px; margin-bottom: 18px" />
              <div class="flex items-center mb-16px">
                <el-skeleton-item variant="text" style="width: 100px; height: 16px; margin-right: 60px" />
                <el-skeleton-item variant="text" style="width: 120px; height: 16px" />
              </div>
              <div class="flex items-center mb-16px">
                <el-skeleton-item variant="text" style="width: 80px; height: 32px" />
              </div>
              <div class="h-40px flex items-center rounded-4px mb-20px">
                <el-skeleton-item variant="text" style="width: 25%; height: 16px" />
              </div>
              <div class="flex items-center">
                <el-skeleton-item variant="text" style="width: 110px; height: 40px; margin-right: 12px" />
                <el-skeleton-item variant="text" style="width: 110px; height: 40px" />
              </div>
            </div>
          </div>
          <!-- content skeleton -->
          <div class="mt-20px flex justify-between pb-22px">
            <div class="w-1000px card p-0!">
              <div class="px-20px pt-20px">
                <el-skeleton-item variant="text" style="width: 15%; height: 18px; margin-bottom: 20px" />
                <div class="h-1px bg-[rgba(0,0,0,0.06)] mb-20px" />
                <el-skeleton-item variant="text" style="width: 100%; height: 16px; margin-bottom: 8px" />
                <el-skeleton-item variant="text" style="width: 90%; height: 16px; margin-bottom: 8px" />
                <el-skeleton-item variant="text" style="width: 70%; height: 16px; margin-bottom: 40px" />
                <el-skeleton-item variant="text" style="width: 15%; height: 18px; margin-bottom: 20px" />
              </div>
              <div class="px-20px pb-20px">
                <el-skeleton-item variant="image" style="width: 100%; height: 400px" />
              </div>
            </div>
            <div class="w-422px">
              <el-skeleton-item variant="text" style="width: 30%; height: 18px; margin-bottom: 20px" />
              <div v-for="i in 4" :key="i" class="mt-20px rounded-8px bg-white p-20px">
                <div class="flex justify-between">
                  <el-skeleton-item variant="image" style="width: 150px; height: 83px" />
                  <div class="ml-12px h-80px flex flex-1 flex-col justify-between">
                    <el-skeleton-item variant="text" style="width: 90%; height: 17px" />
                    <el-skeleton-item variant="text" style="width: 45%; height: 16px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #default>
      <!-- top card -->
      <div
        class="h-260px flex card"
      >
        <!-- cover -->
        <img
          :src="reportModel.coverImage"
          class="h-220px w-428px rounded-8px"
          v-if="reportModel.coverImage"
        />

        <!-- 卡片 -->
        <div
          v-else
          class="h-220px rounded-8px w-428px px-20px flex flex-col items-center text-#fff justify-center bg-[var(--brand-color)]/5 transition-all duration-300 group-hover:bg-[var(--brand-color)]/10"
        >
          <!-- 标题 -->
          <div class="text-22px font-600 line-clamp-2 text-center">
            {{ reportModel.reportTitle }}
          </div>

          <!-- 发布时间 -->
          <div class="text-14px text-#fff mt-8px">
            发布时间：{{ publishTimeFormatted }}
          </div>
        </div>

        <!-- info -->
        <div class="ml-32px flex-1">
          <div
            class="text-24px leading-24px font-600 text-#222"
          >
            {{ reportModel.reportTitle }}
          </div>

          <!-- info -->
          <div class="mt-18px flex items-center">
            <span class="text-16px leading-16px text-#999">
              报告年度：
            </span>

            <span class="text-16px leading-16px text-#444">
              {{ reportYearFormatted }}
            </span>

            <span class="ml-60px text-16px leading-16px text-#999">
              发布时间：
            </span>

            <span class="text-16px leading-16px text-#444">
              {{ publishTimeFormatted }}
            </span>
          </div>

          <!-- tags -->
          <div class="mt-16px flex items-center">
           
            <div
              v-if="reportModel.region"
              class="mr-12px h-32px flex items-center justify-center rounded-4px border border-solid border-#BFBFBF px-20px text-14px leading-22px text-#222"
            >
              {{ reportModel.region }}
            </div>
             <div
              v-for="tag in reportModel.tagInfos"
              :key="tag.id"
              class="mr-12px h-32px flex items-center justify-center rounded-4px border border-solid px-20px text-14px leading-22px"
              :style="{ borderColor: tag.color, color: tag.color }"
            >
              {{ tag.tagName }}
            </div>
          </div>

          <!-- stats -->
          <div
            class="mt-16px h-40px flex items-center rounded-4px bg-[rgba(0,72,152,0.05)] px-20px"
          >
            <div
              class="mr-50px text-16px leading-16px font-500 text-#8F99B7"
            >
              浏览量：{{ reportModel.visitCount }}
            </div>
            <div
              class="mr-50px text-16px leading-16px font-500 text-#8F99B7"
            >
              下载量：{{ reportModel.downloadCount || 0 }}
            </div>
            <div
              class="mr-50px text-16px leading-16px font-500 text-#8F99B7"
            >
              文件大小：{{ reportSizeFormatted }}
            </div>
          </div>

          <!-- button -->
          <div class="mt-20px flex items-center">
            <el-button
              type="primary"
              :loading="downloadLoading"
              class="!h-40px !w-110px !rounded-4px !border-none !bg-brandColor"
              @click="downloadReport"
            >
              立即下载
            </el-button>

            <el-button
              plain
              :loading="previewLoading"
              @click="previewReport"
              class="!ml-12px !h-40px !w-110px !rounded-4px !border-brandColor !text-brandColor"
            >
              点击预览
            </el-button>
          </div>
        </div>
      </div>

      <!-- content -->
      <div class="mt-20px flex justify-between pb-22px">
        <!-- left -->
        <div
          class="w-1000px card p-0!"
        >
          <!-- title -->
          <div class="px-20px pt-20px">
            <div
              class="text-18px leading-18px font-500 text-[rgba(0,0,0,0.88)]"
            >
              报告简介
            </div>

            <div
              class="mt-20px h-1px bg-[rgba(0,0,0,0.06)]"
            ></div>

            <div
              class="mt-20px text-16px leading-24px text-#222"
            >
              {{ reportModel.description }}
            </div>

            <div
              class="mt-40px text-18px leading-18px font-500 text-[rgba(0,0,0,0.88)]"
            >
              报告概览
            </div>
          </div>

          <!-- preview -->
          <div class="mt-20px px-20px pb-20px">
            <img
              v-for="(img, index) in (reportModel as any).previewImages"
              :key="img"
              :src="img"
              class="w-960px border border-solid border-brandColor"
              :class="index !== 0 ? 'mt-20px' : ''"
            />
          </div>
        </div>

        <!-- right -->
        <div class="w-422px">
          <div
            class="text-18px leading-18px font-500 text-[rgba(0,0,0,0.88)]"
          >
            相关报告推荐
          </div>

          <!-- 推荐列表骨架屏 -->
          <template v-if="recommendLoading">
            <div
              v-for="i in 2"
              :key="'sk-' + i"
              class="mt-20px rounded-8px bg-white p-20px"
            >
              <div class="flex justify-between">
                <el-skeleton animated>
                  <template #template>
                    <div class="h-83px w-150px rounded-4px bg-#f0f0f0" />
                  </template>
                </el-skeleton>
                <div class="ml-12px h-80px flex flex-1 flex-col justify-between">
                  <el-skeleton animated>
                    <template #template>
                      <div class="h-22px w-200px rounded-4px bg-#f0f0f0" />
                    </template>
                  </el-skeleton>
                  <el-skeleton animated>
                    <template #template>
                      <div class="h-20px w-120px rounded-4px bg-#f0f0f0" />
                    </template>
                  </el-skeleton>
                </div>
              </div>
            </div>
          </template>

          <div
            v-for="item in recommendList"
            :key="item.id"
            class="mt-20px rounded-8px bg-white p-20px shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 hover:translate-y--2px hover:shadow-lg cursor-pointer"
            @click="() => {
              router.push(`/apps/report/details/${item.id}`)
            }"
            >
            <div class="flex justify-between">
              <img
                :src="item.coverImage"
                v-if="item.coverImage"
                class="h-83px w-150px rounded-4px"
              />

               <div
                v-else
                class="h-83px w-150px rounded-4px px-4px flex flex-col items-center text-#fff justify-center bg-[var(--brand-color)]/5 transition-all duration-300 group-hover:bg-[var(--brand-color)]/10"
              >
                <!-- 标题 -->
                <div class="text-12px font-600 line-clamp-2 text-center">
                  {{ item.reportTitle }}
                </div>

                <!-- 发布时间 -->
                <div class="text-11px text-#fff mt-8px truncate">
                  发布时间：{{ dayjs(item.publishTime).format('YYYY-MM') }}
                </div>
              </div>

              <div
                class="ml-12px h-80px flex flex-1 flex-col justify-between"
              >
                <div
                  class="line-clamp-2 text-17px leading-22px font-500 text-#222"
                >
                  {{ item.reportTitle }}
                </div>

                <div
                  class="text-16px leading-20px text-#666"
                >
                  发布时间：{{ dayjs(item.publishTime).format('YYYY-MM') }}
                </div>
              </div>
            </div>
          </div>

          <!-- 推荐列表空态 -->
          <Empty
            v-if="!recommendLoading && !recommendList.length"
            class="mt-20px"
            description="暂无相关报告推荐"
          />
        </div>
      </div>
        </template>
      </el-skeleton>
    </main>
  </div>
</template>

