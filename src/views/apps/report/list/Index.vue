<template>
  <div>
    <!-- 搜索区域 -->
    <section
      class="card mx-auto w-1440px"
    >
      <!-- 标题 -->

      <div class="text-30px text-center font-600 leading-tight">
        <span
            class="bg-clip-text text-transparent"
            :style="{
            backgroundImage: `linear-gradient(134deg, var(--brand-color) 0%, #05D7F6 100%)`,
            }"
        >
            研究报告
        </span>
        </div>

      <!-- 搜索 -->
      <div class="mx-auto mt-40px w-920px">
        <!-- 搜索 -->
        <div
          class="mx-auto flex h-50px md:h-60px w-full max-w-980px rounded-full border border-solid border-brandColor bg-white"
        >
          <input
            placeholder='请输入关键字'
            class="flex-1 px-16px md:px-30px text-14px md:text-16px outline-none rounded-full"
            style="border: none;"
          />

          <div
            class="w-180px shrink-0 font-600 cursor-pointer flex-center bg-brandColor text-16px md:text-20px text-white rounded-full transition-all duration-300 hover:opacity-90"
          >
            <Icon icon="ep:search" class="mr-8px md:mr-14px" />
            查询
          </div>
        </div>
      </div>
      
<!-- 内容区域 -->
<div class="mx-auto w-920px">
  <!-- 报告类型 -->
  <div class="mt-40px flex items-center">
    <div class="mr-20px shrink-0 text-14px font-500 text-#222">
      报告类型：
    </div>

    <el-radio-group
      v-model="activeType"
      class="report-type-group"
      size="large"
      style="

        --el-text-color-regular: #666;
        --el-fill-color-blank: rgb(143 153 183 / 20%);
      "
    >
      <el-radio-button
        v-for="item in reportTypes"
        :key="item"
        :label="item"
        :value="item"
      >
        {{ item }}
      </el-radio-button>
    </el-radio-group>
  </div>

  <!-- 筛选 -->
  <div class="mt-20px flex whitespace-nowrap items-center gap-y-20px">
    <!-- 地区 -->
    <div class="mr-40px flex items-center">
      <span class="mr-12px shrink-0 text-14px font-500 text-#222">
        选择地区：
      </span>

      <el-select
        v-model="searchForm.province"
        placeholder="选择省"
        class="!w-160px"
        size="large"
      >
        <el-option
          v-for="item in provinceOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>

      <el-select
        v-model="searchForm.city"
        placeholder="选择市"
        class="!ml-12px !w-160px"
        size="large"
      >
        <el-option
          v-for="item in cityOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>

    <!-- 年度 -->
    <div class="mr-40px flex items-center">
      <span class="mr-12px shrink-0 text-14px font-500 text-#222">
        报告年度：
      </span>

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
      <span class="mr-12px shrink-0 text-14px font-500 text-#222">
        报告标签：
      </span>

      <el-select
        v-model="searchForm.tag"
        placeholder="全部"
        class="!w-160px"
        size="large"
      >
        <el-option
          v-for="item in tagOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
  </div>
</div>
    </section>

    <!-- 报告列表 -->
    <section
      class="mx-auto mt-20px w-1440px card mb-20px"
    >
      <div class="w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20px">
        <div
          v-for="item in reportList"
          :key="item.id"
          class="group cursor-pointer overflow-hidden rounded-8px bg-white transition-all duration-300 hover:translate-y--2px hover:shadow-xl border-solid border-1px border-[rgba(0,0,0,0.1)]"
          @click="() => {
            router.push(`/apps/report/details/${item.id}`)
          }"
        >
          <!-- 图片 -->
          <div v-if="item.cover" class="overflow-hidden aspect-[453/230]">
            <img
                :src="item.cover"
                class="h-full w-full transition-all duration-500 group-hover:scale-105"
            />
          </div>

          <!-- 卡片 -->
          <div
            v-else
            class="aspect-[453/230] px-20px flex flex-col items-center text-#fff justify-center bg-[var(--brand-color)]/5 transition-all duration-300 group-hover:bg-[var(--brand-color)]/10"
          >
            <!-- 标题 -->
            <div class="text-22px font-600 line-clamp-2 text-center">
              {{ item.title }}
            </div>

            <!-- 发布时间 -->
            <div class="text-14px text-#fff mt-8px">
              发布时间：{{ item.publishTime }}
            </div>
          </div>

          <!-- 内容 -->
          <div
            class="p-20px"
          >
            <!-- 标题 -->
            <div class="flex items-center gap-12px">
              <div
                v-if="item.auth"
                class="shrink-0 rounded-4px border border-#FF753233 bg-#FF75320D px-8px py-2px text-12px text-#FF7532 border-solid"
              >
                权威认证
              </div>

              <div
                class="flex-1 truncate text-18px font-600 text-#333"
              >
                {{ item.title }}
              </div>
            </div>

            <!-- 描述 -->
            <div
              class="mt-20px line-clamp-2 text-14px leading-20px text-#757575"
            >
              {{ item.summary }}
            </div>

            <!-- 底部 -->
            <div
              class="mt-20px flex items-center justify-between text-14px text-#999"
            >
              <span>
                发布时间：{{ item.publishTime }}
              </span>

              <span>
                浏览量：{{ item.views }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <!-- <div class="mt-40px flex justify-center">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100"
          :page-size="9"
        />
      </div> -->
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import mockData from '../mockData'
import {
  ArrowRight,
  Search
} from '@element-plus/icons-vue'
import router from '@/router'

interface ReportItem {
  id: number
  title: string
  desc: string
  date: string
  views: number
  auth: boolean
  cover: string
}


/**
 * 面包屑数据
 */
const searchForm = ref({
  keyword: '',
  province: '',
  city: '',
  year: '',
  tag: ''
})

const activeType = ref('不限')

const reportTypes = [
  '不限',
  '白皮书',
  '市场分析报告',
  '领域报告',
  '招投标规则'
]

const provinceOptions = [
  '北京市',
  '上海市',
  '广东省',
  '福建省',
  '陕西省',
  '重庆市'
]

const cityOptions = [
  '北京市',
  '广州市',
  '深圳市',
  '福州市',
  '西安市',
  '重庆市'
]

const yearOptions = [
  '全部',
  '2026',
  '2025',
  '2024',
  '2023',
  '2022'
]

const tagOptions = [
  '全部',
  '建筑市场',
  '专项债',
  '基础设施',
  '房建工程',
  '招投标'
]

const reportList = ref<ReportItem[]>(mockData)
</script>
