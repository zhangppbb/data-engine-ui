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
                  <img class="w-40px" :src="apiModel?.iconFileInfo?.url || apiIcon" alt="">
              </div>
              <div class="flex flex-col gap-16px leading-1em">
                  <div class="text-24px font-600 text-#333">
                    {{ apiModel.faceName }}
                  </div>

                  <!-- <div class="text-16px text-#757575">
                    <span class="text-#F04040">20点数</span>/次
                  </div> -->
                </div>
            </div>

            <!-- 内容 -->
            <div class="min-w-0 flex-1">
              <!-- 标题 -->
             

              <!-- 基础信息 -->
              <div class="mt16px flex flex-wrap gap-20px text-15px text-#999">
                <div>
                  ApiCode：
                  <span class="text-#444">{{ apiModel.faceCode }}</span>
                </div>

                <!-- <div
                  class="cursor-pointer text-brandColor hover:text-#0f52c0"
                >
                  申请开通
                </div> -->
              </div>

              <!-- 描述 -->
              <div class="mt-16px text-16px leading-24px text-#444">
                <span class="text-#999999">描述：</span>{{ apiModel.description || apiModel.remark }}
              </div>

              <!-- 价格 -->
              <!-- <div
                class="mt-20px rounded-8px p-20px py-8px bg-[rgba(0,72,152,0.05)]"
              >
                <span class="text-24px text-#F04040">¥</span>

                <span class="ml-8px text-40px font-600 text-#F04040">
                  0.00
                </span>
              </div> -->

              <!-- 套餐 -->
              <div v-if="false" class="mt-20px flex items-center pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
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
              <!-- <div class="mt-20px flex items-center justify-end gap-12px">
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
              </div> -->
            </div>
          </div>
        </div>

        <!-- API在线调试 -->
        <div class="mt-20px card">
          <div
            class="flex cursor-pointer items-center justify-between select-none"
            @click="showDebugPanel = !showDebugPanel"
          >
            <div class="flex items-center gap-8px text-18px font-600 text-#333">
              <el-icon :class="{ 'rotate-90': showDebugPanel }" class="transition-transform duration-300">
                <ArrowRight />
              </el-icon>
              <span>在线调试</span>
            </div>
            <span class="text-14px text-#999">{{ showDebugPanel ? '收起' : '展开' }}</span>
          </div>

          <div v-show="showDebugPanel" class="mt-20px">
            <!-- URL & 请求方式 -->
            <div class="flex items-center gap-12px">
              <el-select
                v-model="debugMethod"
                class="w-120px!"
                disabled
              >
                <el-option
                  v-for="m in ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']"
                  :key="m"
                  :label="m"
                  :value="m"
                />
              </el-select>
              <el-input
                v-model="debugUrl"
                class="flex-1"
                placeholder="API地址"
                disabled
              />
            </div>

            <!-- 请求体 (仅POST/PUT/PATCH) -->
            <div v-if="['POST', 'PUT', 'PATCH'].includes(debugMethod)" class="mt-16px">
              <div class="mb-8px text-14px font-600 text-#666">请求体 (JSON)</div>
              <JsonEditor
                v-model="debugBodyObj"
                :show-main-menu-bar="false"
                :show-navigation-bar="false"
                :show-status-bar="false"
                height="320px"
                mode="code"
              />
            </div>

            <!-- Query参数 (GET/DELETE) -->
            <div v-if="['GET', 'DELETE'].includes(debugMethod)" class="mt-16px">
              <div class="mb-8px text-14px font-600 text-#666">Query参数</div>
              <div
                v-for="(param, index) in debugParams"
                :key="index"
                class="mb-8px flex items-center gap-8px"
              >
                <el-input
                  v-model="param.key"
                  class="flex-1!"
                  placeholder="参数名"
                  size="small"
                />
                <el-input
                  v-model="param.value"
                  class="flex-1!"
                  placeholder="参数值"
                  size="small"
                />
                <el-button
                  size="small"
                  type="danger"
                  :icon="Delete"
                  circle
                  @click="debugParams.splice(index, 1)"
                />
              </div>
              <el-button size="small" type="primary" plain @click="debugParams.push({ key: '', value: '' })">
                + 添加Query参数
              </el-button>
            </div>

            <!-- 发送按钮 & 加载状态 -->
            <div class="mt-20px flex items-center gap-12px">
              <el-button
                :loading="debugLoading"
                type="primary"
                @click="handleDebugSend"
              >
                发送请求
              </el-button>
              <el-button @click="handleDebugReset">
                重置
              </el-button>
              <span v-if="debugDuration" class="text-14px text-#999">
                耗时: {{ debugDuration }}ms
              </span>
              <span
                v-if="debugResponse"
                :class="debugStatus >= 200 && debugStatus < 300 ? 'text-#37c532' : 'text-#f04040'"
                class="text-14px"
              >
                状态: {{ debugStatus }}
              </span>
            </div>

            <!-- 响应 -->
            <div v-if="debugResponse !== null" class="mt-16px">
              <div class="mb-8px text-14px font-600 text-#666">
                响应结果
                <el-button
                  size="small"
                  text
                  type="primary"
                  @click="copyDebugResponse"
                >
                  {{ debugCopySuccess ? '已复制' : '复制' }}
                </el-button>
              </div>
              <div class="overflow-auto rounded-8px bg-#f7f9fc p-16px max-h-400px">
                <pre class="text-13px leading-22px whitespace-pre-wrap" v-html="highlightJson(debugResponse)"></pre>
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
                  {{ apiModel.faceUrl }}
                </span>

                  <span
                  class="ml-20px cursor-pointer text-brandColor"
                  @click="showDebugPanel = true"
                >
                  调试API
                </span>
              </div>

              <div>
                支持格式：
                <span class="text-#333">JSON</span>
              </div>

              <div>
                请求方式：
                <span class="text-#333">{{ apiModel.reqWay }}</span>
              </div>

              <!-- <div class="break-all">
                请求示例：
                <span class="text-#333">
                  https://api.qichacha.com/FuzzySearch/GetList?key=AppKey&searchKey=XXXXXX
                </span>

                <span
                  class="ml-20px cursor-pointer text-brandColor"
                >
                  调试API
                </span>
              </div> -->
            </div>

            <!-- 参数 -->
            <div class="mt-40px">
              <div class="mb-20px text-18px font-600 text-#666">
                请求头信息
              </div>

              <AppTable
                :data="tableData"
                :columns="headerTableColumns"
                :loading="loading"
              />

              <div v-if="apiModel?.faceInfoDetail?.headerDescription" class="text-#f00 text-14px pt-8px">
                {{ apiModel?.faceInfoDetail?.headerDescription }}
              </div>
            </div>

             <!-- 参数 -->
            <div class="mt-40px">
              <div class="mb-20px text-18px font-600 text-#666">
                请求参数示例
              </div>

              <AppTable
                :data="bodyArgumentData"
                :columns="bodyArgumentColumns"
                :loading="loading"
              />
            </div>

            <!-- 返回参数说明 -->
            <div class="mt-40px">
               <div class="mb-20px text-18px font-600 text-#666">
                返回参数说明
              </div>

              <AppTable
                :data="backArgumentData"
                :columns="backArgumentColumns"
                :loading="loading"
              />
            </div>

            <!-- JSON示例 -->
            <div class="mt-40px">
               <div class="mb-20px text-18px font-600 text-#666">
                JSON返回示例
              </div>

              <div
                class="overflow-x-auto rounded-16px bg-#f7f9fc p-20px"
              >
             <pre class="overflow-auto rounded-12px bg-#faf7ff p-16px text-14px leading-26px whitespace-pre-wrap" v-html="highlightJson(transformBackArgument(apiModel.faceInfoDetail?.backArgument))"></pre>
                <div
                  class="mt-20px flex cursor-pointer items-center justify-center gap-8px text-16px text-brandColor"
                  @click="copyJsonExample"
                >
                  <el-icon><DocumentCopy /></el-icon>
                  <span class="ml-8px">{{ copySuccess ? '复制成功' : '复制' }}</span>
                </div>
              </div>
            </div>

            <!-- 请求状态码 -->
            <div class="mt-40px">
              <div class="mb-20px text-18px font-600 text-#666">
                请求状态码
              </div>

              <AppTable
                :data="statusCodeData"
                :columns="statusCodeColumns"
                :loading="loading"
              />
            </div>

            <!-- 请求示例 -->
            <!-- <div class="mt-40px">
               <div class="mb-20px text-18px font-600 text-#666">
                请求示例
              </div>

              <div
                class="mt-20px cursor-pointer text-16px text-brandColor"
              >
                请求示例
              </div>
            </div> -->

            <!-- 相关文档 -->
            <div class="mt-40px">
              <div class="mb-20px text-18px font-600 text-#666">
                相关文档
              </div>

              <div
                class="mt-20px cursor-pointer flex items-center gap-10px text-16px text-brandColor"
                @click="handleDownload"
              >
                <el-icon><Download /></el-icon>
                <span>({{ apiModel.faceCode }}) {{ apiModel.faceName }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { FolderOpened, ArrowDown, Link, DocumentCopy, Download, ArrowRight, Delete } from '@element-plus/icons-vue'
import checkIcon from './assets/images/check-icon.svg'
import { useRouter, useRoute } from 'vue-router'
import { usePageBreadcrumb } from '@/layout/data-engine/usePageBreadcrumb'
import { fetchInterfaceDetail, downloadFaceInfoFile, callFaceInfo, WebapiFaceInfo } from '@/api/resources/faceInfo'
import { AppTable } from '@/components/AppTable'
import { saveAs } from 'file-saver'
import apiIcon from '../../assets/images/api-icon.png'

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

/**
 * API详情数据模型
 */
const apiModel = ref<WebapiFaceInfo>({} as WebapiFaceInfo)

/**
 * 表格数据（请求头参数）
 */
const tableData = ref([
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
])

/**
 * 页面加载状态
 */
const loading = ref(false)

/**
 * 复制成功状态
 */
const copySuccess = ref(false)

// ========== 在线调试面板 ==========

/** 是否显示调试面板 */
const showDebugPanel = ref(false)

/** 调试 - 请求方式 */
const debugMethod = ref('GET')

/** 调试 - 请求URL */
const debugUrl = ref('')

/** 调试 - 请求头 */
const debugHeaders = ref<{ key: string; value: string }[]>([])

/** 调试 - Query参数 */
const debugParams = ref<{ key: string; value: string }[]>([])

/** 调试 - 请求体 */
const debugBody = ref('')

/** 调试 - 请求体对象（JsonEditor双向绑定） */
const debugBodyObj = ref<Record<string, any>>({})

/** 调试 - 加载状态 */
const debugLoading = ref(false)

/** 调试 - 响应结果 */
const debugResponse = ref<string | null>(null)

/** 调试 - 响应状态码 */
const debugStatus = ref(0)

/** 调试 - 请求耗时 */
const debugDuration = ref(0)

/** 调试 - 复制成功 */
const debugCopySuccess = ref(false)

/**
 * 初始化调试面板数据
 */
const initDebugPanel = () => {
  debugMethod.value = apiModel.value.reqWay || 'GET'
  debugUrl.value = apiModel.value.faceUrl || ''

  // 从接口详情中填充请求头
  const headers = apiModel.value.faceInfoDetail?.reqHeader
  if (headers && headers.length > 0) {
    debugHeaders.value = headers.map((h) => ({
      key: h.key || '',
      value: h.exampleVal || h.value || ''
    }))
  } else {
    debugHeaders.value = [{ key: '', value: '' }]
  }

  // 从接口详情中填充请求体
  const bodyArgs = apiModel.value.faceInfoDetail?.bodyArgument
  if (bodyArgs && bodyArgs.length > 0) {
    const bodyObj: Record<string, any> = {}
    const buildBodyObj = (args: any[]) => {
      args.forEach((item) => {
        const val = item.exampleVal || item.value || ''
        bodyObj[item.key] = val
        if (item.paramSub && item.paramSub.length > 0) {
          buildBodyObj(item.paramSub)
        }
      })
    }
    buildBodyObj(bodyArgs)
    debugBodyObj.value = bodyObj
    debugBody.value = JSON.stringify(bodyObj, null, 2)
  } else {
    debugBodyObj.value = {}
    debugBody.value = ''
  }

  // Query参数从请求体参数中获取（GET请求时）
  debugParams.value = [{ key: '', value: '' }]

  debugResponse.value = null
  debugStatus.value = 0
  debugDuration.value = 0
}

/**
 * 发送调试请求
 */
const handleDebugSend = async () => {
  debugLoading.value = true
  debugResponse.value = null
  debugStatus.value = 0
  debugDuration.value = 0

  const startTime = performance.now()

  try {
    // 构建 queryData
    const queryData: Record<string, string> = {}
    debugParams.value
      .filter((p) => p.key.trim())
      .forEach((p) => {
        queryData[p.key.trim()] = p.value
      })

    const res = await callFaceInfo({
      bodyData: debugBodyObj.value,
      faceId: apiModel.value.faceId,
      queryData
    })

    debugStatus.value = 200
    const endTime = performance.now()
    debugDuration.value = Math.round(endTime - startTime)

    if (typeof res === 'object') {
      debugResponse.value = JSON.stringify(res, null, 2)
    } else {
      debugResponse.value = String(res ?? '')
    }
  } catch (error: any) {
    const endTime = performance.now()
    debugDuration.value = Math.round(endTime - startTime)
    debugStatus.value = error?.response?.status || 0
    const errData = error?.response?.data || error?.data
    debugResponse.value = typeof errData === 'object'
      ? JSON.stringify(errData, null, 2)
      : String(errData || error.message || '请求失败')
  } finally {
    debugLoading.value = false
  }
}

/**
 * 复制调试响应
 */
const copyDebugResponse = async () => {
  if (!debugResponse.value) return
  try {
    await navigator.clipboard.writeText(debugResponse.value)
    debugCopySuccess.value = true
    setTimeout(() => {
      debugCopySuccess.value = false
    }, 2000)
  } catch {
    // fallback
  }
}

/**
 * 重置调试面板
 */
const handleDebugReset = () => {
  initDebugPanel()
}

/**
 * 状态码数据
 */
const statusCodeData = ref<any[]>([])

/**
 * 请求头参数表格列配置
 */
const headerTableColumns = ref([
  { label: '名称', prop: 'name', width: 180 },
  { label: '类型', prop: 'type', width: 180 },
  { label: '是否必填', prop: 'required', width: 120 },
  { label: '描述', prop: 'desc' }
])

/**
 * 状态码表格列配置
 */
const statusCodeColumns = ref([
  { label: '状态码', prop: 'key', width: 120 },
  { label: '说明', prop: 'value' }
])

/**
 * 请求体参数数据
 */
const bodyArgumentData = ref<any[]>([])

/**
 * 请求体参数表格列配置
 */
const bodyArgumentColumns = ref([
  { label: '参数名', prop: 'key', width: 180 },
  { label: '类型', prop: 'type', width: 120 },
  { label: '是否必填', prop: 'required', width: 100 },
  { label: '描述', prop: 'value' }
])

/**
 * 返回参数数据
 */
const backArgumentData = ref<any[]>([])

/**
 * 返回参数表格列配置
 */
const backArgumentColumns = ref([
  { label: '参数名', prop: 'key', width: 180 },
  { label: '类型', prop: 'type', width: 120 },
  { label: '描述', prop: 'value' }
])

/**
 * 初始化页面数据
 */
const initPage = async () => {
  const faceId = route.params.id
  if (!faceId) return

  loading.value = true
  try {
    const result = await fetchInterfaceDetail({
      faceId: String(faceId)
    })
    apiModel.value = result
    
    // 映射请求头参数到表格数据
    if (result.faceInfoDetail?.reqHeader) {
      tableData.value = result.faceInfoDetail.reqHeader.map(item => ({
        name: item.key || '',
        type: item.type || '',
        required: item.isRequired ? '是' : '否',
        desc: item.value || item.remark || ''
      }))
    }
    
    // 映射状态码数据
    if (result.faceInfoDetail?.faceCode) {
      statusCodeData.value = result.faceInfoDetail.faceCode.map(item => ({
        key: item.key || '',
        value: item.value || '',
        remark: item.remark || ''
      }))
    }
    
    // 映射请求体参数数据
    if (result.faceInfoDetail?.bodyArgument) {
      bodyArgumentData.value = result.faceInfoDetail.bodyArgument.map(item => ({
        key: item.key || '',
        type: item.type || '',
        required: item.isRequired ? '是' : '否',
        value: item.value || '',
        exampleVal: item.exampleVal || '',
        remark: item.remark || ''
      }))
    }
    
    // 映射返回参数数据（支持深度遍历paramSub）
    if (result.faceInfoDetail?.backArgument) {
      backArgumentData.value = flattenBackArgument(result.faceInfoDetail.backArgument)
    }

    // 初始化调试面板
    initDebugPanel()
  } catch (error) {
    console.error('获取接口详情失败:', error)
  } finally {
    loading.value = false
  }
}
initPage()

watch(
  () => route.params.faceId,
  () => {
    initPage()
  }
)

watch(
  () => apiModel.value.faceName,
  (name) => {
    setBreadcrumbTail(
      name ? { label: name, path: '/resources/api/details' } : null
    )
  },
  { immediate: true }
)

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
 * 扁平化返回参数数组（支持深度遍历paramSub）
 * @description 将backArgument数组及其嵌套的paramSub扁平化为一维数组，便于表格展示
 * @param backArgument 返回参数数组
 * @param parentKey 父级参数名（用于拼接路径）
 * @returns 扁平化后的数组
 */
const flattenBackArgument = (backArgument: any[], parentKey: string = ''): any[] => {
  if (!backArgument || !Array.isArray(backArgument)) {
    return []
  }
  
  return backArgument.reduce((acc, item) => {
    const fullKey = parentKey ? `${parentKey}.${item.key}` : item.key
    
    acc.push({
      key: fullKey || '',
      type: item.type || '',
      value: item.value || '',
      exampleVal: item.exampleVal || '',
      remark: item.remark || ''
    })
    
    if (item.paramSub && Array.isArray(item.paramSub) && item.paramSub.length > 0) {
      acc.push(...flattenBackArgument(item.paramSub, fullKey))
    }
    
    return acc
  }, [] as any[])
}

/**
 * 转换单个参数项为对象格式（递归处理paramSub）
 * @description 将单个参数项转换为 {key: value} 格式，支持嵌套paramSub
 * @param item 参数项
 * @returns 转换后的对象
 */
const transformParamItem = (item: any): any => {
  if (!item || !item.key) {
    return null
  }
  
  const result: { [key: string]: any } = {}
  
  if (item.paramSub && Array.isArray(item.paramSub) && item.paramSub.length > 0) {
    const nested = item.paramSub.reduce((acc: any, subItem: any) => {
      const subResult = transformParamItem(subItem)
      if (subResult) {
        Object.assign(acc, subResult)
      }
      return acc
    }, {})
    result[item.key] = nested
  } else {
    result[item.key] = item.exampleVal !== null && item.exampleVal !== undefined && item.exampleVal !== ''
      ? item.exampleVal 
      : item.value
  }
  
  return result
}

/**
 * 下载相关文档
 * @description 根据接口ID下载接口相关文档文件
 */
const handleDownload = async () => {
  const faceId = apiModel.value.faceId
  if (!faceId) {
    return
  }

  const loadingInstance = ElLoading.service({
    text: '正在下载文档，请稍候...'
  })

  try {
    const blob = await downloadFaceInfoFile(faceId)
    const fileName = `${apiModel.value.faceName || 'document'}.pdf`
    saveAs(blob, fileName)
    ElMessage.success('下载成功')
  } catch (error: any) {
    console.error('下载失败:', error)
    ElMessage.error(error.message || '下载失败')
  } finally {
    loadingInstance.close()
  }
}

/**
 * 复制JSON示例
 * @description 将转换后的返回参数对象复制到剪贴板
 */
const copyJsonExample = async () => {
  const transformed = transformBackArgument(apiModel.value.faceInfoDetail?.backArgument)
  if (!transformed) {
    return
  }
  
  try {
    const jsonStr = JSON.stringify(transformed, null, 2)
    await navigator.clipboard.writeText(jsonStr)
    copySuccess.value = true
    ElMessage.success('复制成功')
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  } catch (error) {
    console.error('复制失败:', error)
  }
}

/**
 * 转换返回参数为对象格式
 * @description 将backArgument数组转换为 {key: value} 格式的对象，支持深度遍历paramSub
 * @param backArgument 返回参数数组
 * @returns 转换后的对象
 */
const transformBackArgument = (backArgument: any[] | undefined): object | undefined => {
  if (!backArgument || !Array.isArray(backArgument)) {
    return undefined
  }
  return backArgument.reduce((acc: any, item: any) => {
    const result = transformParamItem(item)
    if (result) {
      Object.assign(acc, result)
    }
    return acc
  }, {} as { [key: string]: any })
}

/**
 * JSON格式化高亮
 * @description 将JSON字符串或对象序列化并转换为带语法高亮的HTML
 * @param jsonData JSON字符串或对象
 * @returns 高亮后的HTML
 */
const highlightJson = (jsonData: string | object | undefined): string => {
  if (!jsonData) {
    return '<span class="text-#999">暂无返回示例</span>'
  }
  
  try {
    let jsonStr: string
    
    if (typeof jsonData === 'object') {
      jsonStr = JSON.stringify(jsonData, null, 2)
    } else {
      const parsed = JSON.parse(jsonData)
      jsonStr = JSON.stringify(parsed, null, 2)
    }
    
    return jsonStr
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"([^"]+)":/g, '<span class="text-#A55FEB">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="text-#37c532">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="text-#37C532">$1</span>')
      .replace(/: (true|false)/g, ': <span class="text-[#4285F4]">$1</span>')
      .replace(/: null/g, ': <span class="text-[#9E9E9E]">null</span>')
  } catch (e) {
    return typeof jsonData === 'string' 
      ? jsonData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      : JSON.stringify(jsonData, null, 2)
  }
}
</script>
