<template>
   <div class="min-h-screen bg-#f5f7fa">
    <!-- 页面主体 -->
    <div class="mx-auto mt-20px max-w-1440px flex gap-20px pb-30px">
      <!-- 左侧分类 -->
      <!-- <div
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
      </div> -->

      <!-- 右侧主体 -->
      <div class="min-w-0 flex-1">
        <!-- API信息 -->
        <div class="card">
          <div class="">
            <!-- 图标 -->
            <div class="flex items-center gap-20px">
              <div
                  class="flex-center h-68px w-68px shrink-0  rounded-8px bg-[rgba(0,107,253,0.1)]"
                  >
                  <div class="iconfont icon-jurassic_folder text-#006BFD text-40px"></div>
              </div>
              <div class="flex flex-col gap-16px leading-1em">
                  <div class="text-24px font-600 text-#333">
                    {{ apiModel.apiName2 }}
                  </div>

                  <div class="text-16px text-#757575">
                    <span class="text-#F04040">20点数</span>/次
                  </div>
                </div>
            </div>

            <!-- 内容 -->
            <div class="min-w-0 flex-1">
              <!-- 标题 -->
             

              <!-- 基础信息 -->
              <div class="mt16px flex flex-wrap gap-20px text-15px text-#999">
                <div>
                  ApiCode：
                  <span class="text-#444">{{ apiModel.apiCode }}</span>
                </div>

                <div
                  class="cursor-pointer text-brandColor hover:text-#0f52c0"
                >
                  申请开通
                </div>
              </div>

              <!-- 描述 -->
              <div class="mt-16px text-16px leading-24px text-#444">
                <span class="text-#999999">描述：</span>{{ apiModel.description }}
              </div>

              <!-- 价格 -->
              <div
                class="mt-20px rounded-8px p-20px py-8px bg-[rgba(0,72,152,0.05)]"
              >
                <span class="text-24px text-#F04040">¥</span>

                <span class="ml-8px text-40px font-600 text-#F04040">
                  0.00
                </span>
              </div>

              <!-- 套餐 -->
              <div class="mt-20px flex items-center pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
                <div class="text-16px text-#999">
                  版本套餐：
                </div>

                <div class="flex flex-wrap gap-12px">
                  <div
                    v-for="item in packageList"
                    :key="item.label"
                    :class="[
                      'relative cursor-pointer rounded-4px border border-solid px-20px py-10px text-14px transition-all overflow-hidden',
                      activePackage === item.label
                        ? 'border-brandColor'
                        : 'border-#BFBFBF hover:border-brandColor'
                    ]"
                    @click="activePackage = item.label"
                  >
                    {{ item.label }}

                    <!-- 选中角标 -->
                    <div
                      v-if="activePackage === item.label"
                      class="absolute bottom-0 right-0 h-16px w-16px overflow-hidden"
                    >
                      <!-- 三角形 -->
                      <div
                        class="absolute bottom-0 right-0 h-0 w-0 border-l-16px border-l-transparent border-b-16px border-solid border-b-brandColor"
                      />

                      <!-- icon -->
                      <img
                        :src="checkIcon"
                        alt=""
                        class="absolute bottom-0px right-1px h-10px w-10px"
                      >
                    </div>
                  </div>

                  <!-- 数量 -->
                  <el-input-number
                    v-model="count"
                    :min="1"
                    controls-position="right"
                    size="large"
                    style="width: 138px;"
                  />
                </div>
              </div>

              <!-- 操作 -->
              <div class="mt-20px flex items-center justify-end gap-12px">
                <div class="flex text-16px">
                  您也可以通过
                  <span class="text-brandColor mx-8px">余额充值</span>
                  进行扣费
                </div>

                <div>
                  <el-button size="large" style="

--el-text-color-regular: #333;">  
                    加入购物车
                  </el-button>

                  <el-button type="primary" size="large">
                    立即购买
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 多层级信息 -->
        <div class="mt-20px card p-0!">
          <!-- Tabs -->
          <!-- <div class="border-b border-b-solid border-b-[rgba(0,0,0,0.1)]">
            <div
              class="relative inline-flex h-64px items-center text-18px font-600 text-#1565d8"
            >
              多层级信息组

              <div
                class="absolute bottom-0 left-0 h-3px w-full rounded-full bg-#1565d8"
              />
            </div>
          </div> -->

          <div class="border-b-2px border-b-solid border-b-#E5E5E5">
            <div class="flex items-center gap-34px">
              <button
                class="relative h-48px border-none bg-transparent px-0 text-15px text-brandColor font-700 px-20px"
                type="button"
              >
                多层级信息组
                <span class="absolute bottom--1px left-0 h-2px w-full bg-brandColor"></span>
              </button>
            </div>
          </div>

          <!-- 内容 -->
          <div class="p-20px">
            <!-- 基础信息 -->
            <div class="space-y-16px text-16px text-#999">
              <div>
                接口地址：
                <span class="text-#333">
                  {{ apiModel.requestUrl }}
                </span>
              </div>

              <div>
                支持格式：
                <span class="text-#333">JSON</span>
              </div>

              <div>
                请求方式：
                <span class="text-#333">{{ apiModel.requestMethod }}</span>
              </div>

              <div class="break-all">
                请求示例：
                <span class="text-#333">
                  https://api.qichacha.com/FuzzySearch/GetList?key=AppKey&searchKey=XXXXXX
                </span>

                <span
                  class="ml-20px cursor-pointer text-brandColor"
                >
                  调试API
                </span>
              </div>
            </div>

            <!-- 参数 -->
            <div class="mt-40px">
              <div class="mb-20px text-18px font-600 text-#666">
                请求参数（http请求头Headers）
              </div>

              <el-table
                :data="tableData"
                border
                style="width: 100%"
              >
                <el-table-column
                  prop="name"
                  label="名称"
                  width="180"
                />

                <el-table-column
                  prop="type"
                  label="类型"
                  width="180"
                />

                <el-table-column
                  prop="required"
                  label="是否必填"
                  width="120"
                />

                <el-table-column
                  prop="desc"
                  label="描述"
                />
              </el-table>
            </div>

            <!-- JSON示例 -->
            <div class="mt-40px">
               <div class="mb-20px text-18px font-600 text-#666">
                JSON返回示例
              </div>

              <div
                class="overflow-x-auto rounded-16px bg-#f7f9fc p-20px"
              >
             <pre class="overflow-auto rounded-12px bg-#faf7ff p-16px text-14px leading-26px">
              <span class="text-#222">{</span>
                <span class="text-#A55FEB">"Paging"</span><span class="text-#222">:</span> <span class="text-#222">{</span>
                  <span class="text-#A55FEB">"PageSize"</span><span class="text-#222">:</span> <span class="text-#37C532">5</span>,
                  <span class="text-#A55FEB">"PageIndex"</span><span class="text-#222">:</span> <span class="text-#37C532">1</span>,
                  <span class="text-#A55FEB">"TotalRecords"</span><span class="text-#222">:</span> <span class="text-#37C532">1</span>
                <span class="text-#222">}</span>,
                <span class="text-#A55FEB">"Result"</span><span class="text-#222">:</span> [
                  <span class="text-#222">{</span>
                    <span class="text-#A55FEB">"KeyNo"</span><span class="text-#222">:</span> <span class="text-#37c532">"xxxxxxxxxx"</span>,
                    <span class="text-#A55FEB">"Name"</span><span class="text-#222">:</span> <span class="text-#37c532">"xxxxxx"</span>,
                    <span class="text-#A55FEB">"CreditCode"</span><span class="text-#222">:</span> <span class="text-#37c532">"xxxxxxxxxx"</span>,
                    <span class="text-#A55FEB">"StartDate"</span><span class="text-#222">:</span> <span class="text-#37c532">"2012-07-10"</span>,
                    <span class="text-#A55FEB">"OperName"</span><span class="text-#222">:</span> <span class="text-#37c532">"xx"</span>,
                    <span class="text-#A55FEB">"Status"</span><span class="text-#222">:</span> <span class="text-#37c532">"存续"</span>,
                    <span class="text-#A55FEB">"No"</span><span class="text-#222">:</span> <span class="text-#37c532">"xxxxxxxxxx"</span>,
                    <span class="text-#A55FEB">"Address"</span><span class="text-#222">:</span> <span class="text-#37c532">"xxxxxxxxxxxxx室"</span>
                  <span class="text-#222">}</span>
                ]
              <span class="text-#222">}</span>
              </pre>
                <div
                  class="mt-20px flex cursor-pointer items-center justify-center gap-8px text-16px text-brandColor"
                >
                  <el-icon><DocumentCopy /></el-icon>
                  <span class="ml-8px">复制</span>
                </div>
              </div>
            </div>

            <!-- 请求状态码 -->
            <div class="mt-40px">
              <div class="mb-20px text-18px font-600 text-#666">
                请求状态码
              </div>

              <div
                class="mt-20px cursor-pointer text-16px text-brandColor"
              >
                请求状态码
              </div>
            </div>

            <!-- 请求示例 -->
            <div class="mt-40px">
               <div class="mb-20px text-18px font-600 text-#666">
                请求示例
              </div>

              <div
                class="mt-20px cursor-pointer text-16px text-brandColor"
              >
                请求示例
              </div>
            </div>

            <!-- 相关文档 -->
            <div class="mt-40px">
                 <div class="mb-20px text-18px font-600 text-#666">
                相关文档
              </div>

              <div
                class="mt-20px flex items-center gap-10px text-16px text-brandColor"
              >
                <el-icon><Link /></el-icon>
                <span>(886) 企业模糊搜索</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FolderOpened, ArrowDown, Link, DocumentCopy } from '@element-plus/icons-vue'
import checkIcon from './assets/images/check-icon.svg'
import { useRouter, useRoute } from 'vue-router'
import { usePageBreadcrumb } from '@/layout/data-engine/usePageBreadcrumb'
import mockData from '../mockData'


const router = useRouter()
const route = useRoute()
const { setBreadcrumbTail } = usePageBreadcrumb()

/**
 * 当前套餐
 */
const activePackage = ref('免费试用20次')

/**
 * 数量
 */
const count = ref(40000)

const apiModel = ref({
  apiName2: ''
})

const initPage = () => {
  const id = route.params.id
  const index = mockData.findIndex(o => o.apiCode === id)
  apiModel.value = mockData[index]
}
initPage()

watch(
  () => route.params.id,
  () => {
    initPage()
  }
)

watch(
  () => apiModel.value.apiName2,
  (name) => {
    setBreadcrumbTail(
      name ? { label: name, path: '/resources/api/details' } : null
    )
  },
  { immediate: true }
)

/**
 * 当前分类
 */
const activeCategory = ref('全部领域')

/**
 * 分类列表
 */
const categoryList = ref([
  { name: '全部领域', count: 67 },
  { name: '工商信息', count: 28 },
  { name: '风险识别', count: 14 },
  { name: '法律诉讼', count: 10 },
  { name: '关联族谱', count: 12 },
  { name: '经营信息', count: 4 },
  { name: '上市信息', count: 3 },
  { name: '知识产权', count: 3 },
  { name: '新闻舆情', count: 1 },
])

/**
 * 套餐列表
 */
const packageList = [
  {
    label: '免费试用20次'
  },
  {
    label: '1,000.00点数/1000次'
  },
  {
    label: '5,000.00点数/50000次'
  }
]

/**
 * 表格数据
 */
const tableData = [
  {
    name: 'Token',
    type: 'String',
    required: '是',
    desc:
      '验证加密值 Md5（key+Timespan+SecretKey）加密的32位大写字符串'
  },
  {
    name: 'Timespan',
    type: 'String',
    required: '是',
    desc: '精确到秒的Unix时间戳'
  }
]
</script>

<style scoped>
:deep(.el-input-number) {
  width: 140px;
}

:deep(.el-table th.el-table__cell) {
  font-weight: 600;
  color: #333;
  background: #f7f9fc;
}
</style>