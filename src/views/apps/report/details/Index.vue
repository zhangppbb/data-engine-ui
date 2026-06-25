
<script setup lang="ts">
import { ref } from 'vue'
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
import mockData from '../mockData'
import { saveAs } from 'file-saver'

const router = useRouter()
const route = useRoute()
const { setBreadcrumbTail } = usePageBreadcrumb()

const reportModel = ref({
  previewImages: []
})

const initPage = () => {
  const id = route.params.id
  const index = mockData.findIndex(o => o.id === id)
  reportModel.value = mockData[index]
}
initPage()

watch(
  () => route.params.id,
  () => {
    initPage()
  }
)

watch(
  () => reportModel.value?.title,
  (title) => {
    setBreadcrumbTail(
      title ? { label: title, path: '/apps/report/details' } : null
    )
  },
  { immediate: true }
)

const pageData = reactive({

  report: {
    tags: ['白皮书'],
  },
})

const recommendList = ref(mockData.slice(0, 5))

/**
 * 下载报告
 */
const downloadReport = () => {
  const file = reportModel.value.file
  const name = reportModel.value.title
  if (file) {
    saveAs(file, `${name}-${Date.now()}.pdf`)
  }
}

const previewReport = () => {
  const file = reportModel.value.file
  if (file) {
    window.open(file)
  }
}
</script>

<template>
  <div class="">
    <!-- main -->
    <main class="mx-auto w-1440px">
      <!-- top card -->
      <div
        class="h-260px flex card"
      >
        <!-- cover -->
        <img
          :src="reportModel.cover"
          class="h-220px w-428px rounded-8px"
          v-if="reportModel.cover"
        />

        <!-- 卡片 -->
        <div
          v-else
          class="h-220px rounded-8px w-428px px-20px flex flex-col items-center text-#fff justify-center bg-[var(--brand-color)]/5 transition-all duration-300 group-hover:bg-[var(--brand-color)]/10"
        >
          <!-- 标题 -->
          <div class="text-22px font-600 line-clamp-2 text-center">
            {{ reportModel.title }}
          </div>

          <!-- 发布时间 -->
          <div class="text-14px text-#fff mt-8px">
            发布时间：{{ reportModel.publishTime }}
          </div>
        </div>

        <!-- info -->
        <div class="ml-32px flex-1">
          <div
            class="text-24px leading-24px font-600 text-#222"
          >
            {{ reportModel.title }}
          </div>

          <!-- info -->
          <div class="mt-18px flex items-center">
            <span class="text-16px leading-16px text-#999">
              报告年度：
            </span>

            <span class="text-16px leading-16px text-#444">
              {{ reportModel.year }}年
            </span>

            <span class="ml-60px text-16px leading-16px text-#999">
              发布时间：
            </span>

            <span class="text-16px leading-16px text-#444">
              {{ reportModel.publishTime }}
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
              v-for="tag in pageData.report.tags"
              :key="tag"
              class="mr-12px h-32px flex items-center justify-center rounded-4px border border-solid border-#BFBFBF px-20px text-14px leading-22px text-#222"
            >
              {{ tag }}
            </div>
          </div>

          <!-- stats -->
          <div
            class="mt-16px h-40px flex items-center rounded-4px bg-[rgba(0,72,152,0.05)] px-20px"
          >
            <div
              class="mr-50px text-16px leading-16px font-500 text-#8F99B7"
            >
              浏览量：{{ reportModel.views }}
            </div>
            <div
              class="mr-50px text-16px leading-16px font-500 text-#8F99B7"
            >
              下载量：233
            </div>
            <div
              class="mr-50px text-16px leading-16px font-500 text-#8F99B7"
            >
              文件大小：{{ reportModel.fileSize }}
            </div>
          </div>

          <!-- button -->
          <div class="mt-20px flex items-center">
            <el-button
              type="primary"
              class="!h-40px !w-110px !rounded-4px !border-none !bg-brandColor"
              @click="downloadReport"
            >
              立即下载
            </el-button>

            <el-button
              plain
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
              {{ reportModel.summary }}
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
              v-for="(img, index) in reportModel.previewImages"
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
                :src="item.cover"
                v-if="item.cover"
                class="h-83px w-150px rounded-4px"
              />

               <div
                v-else
                class="h-83px w-150px rounded-4px px-4px flex flex-col items-center text-#fff justify-center bg-[var(--brand-color)]/5 transition-all duration-300 group-hover:bg-[var(--brand-color)]/10"
              >
                <!-- 标题 -->
                <div class="text-12px font-600 line-clamp-2 text-center">
                  {{ item.title }}
                </div>

                <!-- 发布时间 -->
                <div class="text-11px text-#fff mt-8px truncate">
                  发布时间：{{ item.publishTime }}
                </div>
              </div>

              <div
                class="ml-12px h-80px flex flex-1 flex-col justify-between"
              >
                <div
                  class="line-clamp-2 text-17px leading-22px font-500 text-#222"
                >
                  {{ item.title }}
                </div>

                <div
                  class="text-16px leading-20px text-#666"
                >
                  发布时间：{{ item.publishTime }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

