<template>
  <div class="max-w-1440px mx-auto pb-20px">
    <div class="mt-20px">
      <!-- 第一行：最近使用 + 用户信息 -->
      <div class="grid grid-cols-1 gap-20px md:grid-cols-2 mb-20px">
        <!-- 最近使用 -->
        <div class="card">
          <div class="mb-20px flex items-center justify-between">
            <div class="flex items-center gap-10px">
              <div class="text-24px iconfont icon-diannao text-brandColor"></div>
              <div class="font-semibold text-[22px] text-[#222222] leading-[20px] ml-8px">
                最近使用
              </div>
            </div>
          </div>

          <el-skeleton :loading="loading.recentApps" animated :throttle="{ leading: 300 }">
            <template #template>
              <div class="flex gap-14px overflow-x-auto">
                <div
                  v-for="i in 5"
                  :key="i"
                  class="flex-shrink-0 w-180px rounded-8px bg-[rgba(191,191,191,0.1)] p-16px flex flex-col items-center justify-center gap-10px"
                >
                  <el-skeleton-item variant="rect" class="!w-36px !h-36px !rounded-8px" />
                  <el-skeleton-item variant="text" style="width: 80%; height: 16px" />
                </div>
              </div>
            </template>
            <template #default>
              <div v-if="recentApps.length" class="flex gap-14px overflow-x-auto">
                <div
                  v-for="item in recentApps.slice(0, 5)"
                  :key="item.type + '_' + item.id"
                  class="cursor-pointer flex-shrink-0 w-180px rounded-8px bg-[rgba(191,191,191,0.1)] p-16px transition-all hover:bg-#f4f7ff flex flex-col items-center justify-center gap-10px"
                  @click="handleOpenApp(item)"
                >
                  <div
                    v-if="item.type === ZONE_TYPE.FACE"
                    class="w-36px h-36px rounded-8px flex items-center justify-center text-12px font-bold text-white shrink-0"
                    :style="{ background: item.reqWay === 'POST' ? '#49cc90' : '#61affe' }"
                  >
                    {{ item.reqWay }}
                  </div>
                  <div
                    v-else
                    class="w-36px h-36px rounded-8px flex items-center justify-center shrink-0 overflow-hidden bg-#F7F8FA"
                  >
                    <img :src="item.icon || defaultAppIcon" class="w-24px h-24px object-contain" />
                  </div>
                  <div class="text-[14px] text-center text-[#222222] leading-[18px] not-italic line-clamp-1">
                    {{ item.name }}
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-32px text-14px text-#999">
                暂无最近使用记录，去看看接口市场吧
                <el-button type="primary" link @click="router.push('/resources/api/list')">逛一逛</el-button>
              </div>
            </template>
          </el-skeleton>
        </div>

        <!-- 用户信息卡片 -->
        <div class="card w-full relative">
          <el-skeleton :loading="loading.userInfo" animated :throttle="{ leading: 300 }">
            <template #template>
              <div class="flex items-start gap-12px pt-24px">
                <el-skeleton-item variant="circle" class="!w-72px !h-72px" />
                <div class="flex-1 overflow-hidden pt-4px">
                  <div class="flex items-center gap-12px">
                    <el-skeleton-item variant="text" style="width: 80px; height: 24px" />
                    <el-skeleton-item variant="text" style="width: 160px; height: 18px" />
                  </div>
                  <el-skeleton-item variant="text" style="width: 300px; height: 16px" class="mt-12px" />
                </div>
              </div>
            </template>
            <template #default>
              <div class="flex items-start justify-between w-full">
                <div class="flex items-start gap-12px pt-24px">
                  <div
                    v-if="clientUserInfo?.photo"
                    class="w-72px h-72px rounded-full overflow-hidden shrink-0"
                  >
                    <img :src="clientUserInfo.photo" class="w-full h-full object-cover" />
                  </div>
                  <div
                    v-else
                    class="flex h-72px w-72px items-center justify-center rounded-full bg-brandColor font-semibold text-[32px] text-white not-italic shrink-0"
                  >
                    {{ clientUserInfo?.name?.charAt(0) || 'U' }}
                  </div>
                  <div class="flex-1 overflow-hidden pt-4px">
                    <div class="flex items-center gap-12px">
                      <div class="font-semibold text-[24px] text-[#222222] leading-[24px] not-italic">
                        {{ clientUserInfo?.name || '用户' }}
                      </div>
                    </div>
                    <div class="w-full mt-12px font-normal text-[16px] text-[#666666] text-left not-italic break-words whitespace-normal">
                      {{ maskPhone(clientUserInfo?.phone) }}
                    </div>
                  </div>
                </div>
                <div
                  class="flex absolute right-20px top-20px cursor-pointer items-center gap-4px text-15px text-brandColor px-8px h-36px rounded-[8px] bg-[rgba(0,72,152,0.05)]"
                  @click="router.push('/profile')"
                >
                  <span class="iconfont icon-xiugai"></span>
                  <span class="ml-4px">修改信息</span>
                </div>
              </div>
            </template>
          </el-skeleton>
        </div>
      </div>

      <!-- 第二行：产品推荐 -->
      <div class="grid grid-cols-1 gap-20px">
        <!-- 产品推荐 -->
        <div class="card">
          <div class="mb-20px flex items-center justify-between">
            <div class="flex items-center gap-8px">
              <div class="text-24px iconfont icon-24gf-thumbsUp2 text-brandColor"></div>
              <div class="font-semibold text-[22px] text-[#222222] leading-[20px] ml-8px">
                产品推荐
              </div>
              <div class="text-[12px] text-[rgba(0,0,0,0.4)] px-8px rounded-[4px] h-22px leading-22px">
                基于部门"智能匹配"
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center gap-4px text-15px text-brandColor px-8px h-36px rounded-[8px] bg-[rgba(0,72,152,0.05)]"
            >
              <span class="iconfont icon-ziyuanxhdpi"></span>
              <span class="ml-4px">换一批</span>
            </div>
          </div>

          <div class="space-y-14px">
            <div
              v-for="item in productList"
              :key="item.title"
              class="flex items-center justify-between rounded-4px bg-[rgba(191,191,191,0.1)] px-20px py-10px transition-all hover:bg-#f4f7ff"
            >
              <div class="flex items-center gap-12px">
                <img class="w-50px h-50px" :src="item.icon" alt="">
                <div>
                  <div class="font-semibold text-[16px] text-[#222222] leading-[16px] text-left not-italic">
                    {{ item.title }}
                  </div>
                  <div class="mt-12px font-normal text-[14px] text-[#999999] leading-[14px] text-left not-italic">
                    {{ item.desc }}
                  </div>
                </div>
              </div>
              <div class="text-24px! text-#999999!">
                <el-icon><ArrowRight /></el-icon>
              </div>
            </div>
          </div>

          <div class="mt-18px font-normal text-[16px] text-[#999999] leading-[16px] text-left not-italic">
            根据您所在部门「技术研发中心」定制
          </div>
        </div>
      </div>

      <!-- 第三行：工单 -->
      <div class="mt-20px">
        <div class="card">
          <div class="mb-28px flex items-center justify-between">
            <div class="flex items-center gap-8px">
              <div class="text-24px iconfont icon-questionnaire-fill text-brandColor"></div>
              <div class="font-semibold text-[22px] text-[#222222] leading-[20px] ml-8px">
                问题反馈·智能工单
              </div>
            </div>
            <div
              class="flex cursor-pointer items-center gap-4px text-15px text-brandColor px-8px h-36px rounded-[8px] bg-[rgba(0,72,152,0.05)]"
            >
              <span class="iconfont icon-jiahao"></span>
              <span class="ml-4px">新建反馈</span>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-20px lg:grid-cols-2">
            <div
              v-for="item in feedbackList"
              :key="item.user"
              class="border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)] p-20px"
            >
              <div class="flex items-center gap-10px">
                <div class="font-medium text-[18px] text-[#222222] leading-[18px] not-italic">
                  {{ item.user }}
                </div>
                <div class="font-medium text-[18px] text-[#222222] leading-[18px] not-italic">·</div>
                <div class="font-medium text-[18px] text-[#222222] leading-[18px] not-italic">
                  {{ item.department }}
                </div>
                <div
                  :class="[
                    'rounded-full px-12px text-12px h-24px leading-24px border rounded-[14px] border-solid',
                    item.status === '处理中'
                      ? 'text-brandColor border-[rgba(0,72,152,0.2)] bg-[rgba(0,72,152,0.1)]'
                      : 'bg-[rgba(55,197,50,0.1)] border-[rgba(55,197,50,0.2)] text-#37C532'
                  ]"
                >
                  {{ item.status }}
                </div>
              </div>
              <div class="mt-12px text-[16px] text-[#222222] leading-[16px] text-left not-italic">
                {{ item.content }}
              </div>
              <div class="pt-24px pl-20px pb-20px">
                <div class="font-normal text-[14px] text-[#999999] leading-[14px] text-left not-italic">
                  最新回复：{{ item.replyTime }}
                </div>
                <div class="mt-12px font-normal text-[16px] text-[#222222] leading-[16px] not-italic">
                  {{ item.reply }}
                </div>
              </div>
              <div class="flex justify-end border-t border-t-solid border-t-[rgba(0,0,0,0.1)]">
                <div
                  v-if="item.status === '处理中'"
                  class="cursor-pointer rounded-full bg-brandColor px-12px py-8px text-12px text-white mt-12px"
                >
                  <span class="iconfont icon-dialog"></span>
                  <span class="ml-6px">回复客户</span>
                </div>
                <div v-else class="font-medium text-[12px] text-[#999999] text-left not-italic pt-20px">
                  已完结/无需回复
                </div>
              </div>
            </div>
          </div>

          <div class="mt-20px flex items-center justify-between">
            <div class="font-normal text-[16px] text-[#999999] leading-[16px] text-left not-italic">
              本周响应率
              <span class="text-#FF7532">94%</span>
            </div>
            <div class="cursor-pointer text-16px text-brandColor">查看全部反馈</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { getLatestUsageRecords, type LatestUsageItemVO, type LatestFaceInfo, type LatestAppInfo } from '@/api/personal-center'
import { ZONE_TYPE } from '@/constants/zone'
import { maskPhone } from '@/utils'
import icon21 from './assets/images/2-1.png'
import icon22 from './assets/images/2-2.png'
import icon23 from './assets/images/2-3.png'
import icon24 from './assets/images/2-4.png'
import defaultAppIcon from '@/views/apps/details/assets/images/icon.svg'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const userStore = useUserStore()

// ==================== 加载状态 ====================
const loading = reactive({
  userInfo: true,
  recentApps: true
})

// ==================== 用户信息（来自 store clientUserInfo） ====================
const clientUserInfo = computed(() => userStore.getClientUserInfo)

// ==================== 最近使用接口 ====================
const recentApps = ref<LatestUsageItemVO[]>([])

const loadRecentApps = async () => {
  loading.recentApps = true
  try {
    const data = await getLatestUsageRecords()
    const list: LatestUsageItemVO[] = []
    const seen = new Set<string>()
    ;(data?.rows || []).forEach((row) => {
      const faceInfo = row.faceInfo as LatestFaceInfo | null
      const appInfo = row.appInfo as LatestAppInfo | null

      if (faceInfo) {
        const id = faceInfo.faceId
        if (!id || seen.has(`face_${id}`)) return
        seen.add(`face_${id}`)
        list.push({
          type: ZONE_TYPE.FACE,
          name: faceInfo.faceName || '',
          description: faceInfo.description || '',
          id,
          reqWay: faceInfo.reqWay || '',
          points: faceInfo.points || '',
          icon: ''
        })
      } else if (appInfo) {
        const id = appInfo.id
        if (!id || seen.has(`app_${id}`)) return
        seen.add(`app_${id}`)
        list.push({
          type: ZONE_TYPE.APP,
          name: appInfo.appName || '',
          description: appInfo.appDesc || '',
          id,
          reqWay: '',
          points: '',
          icon: appInfo.appIcon || ''
        })
      }
    })
    recentApps.value = list
  } catch (error) {
    recentApps.value = []
  } finally {
    loading.recentApps = false
  }
}

/**
 * 加载用户个人信息
 * 调用 store.fetchClientUserInfoAction() 获取并存入 store
 */
const loadUserInfo = async () => {
  loading.userInfo = true
  try {
    await userStore.fetchClientUserInfoAction()
  } catch (error) {
    // 接口异常时 store 中保持 null，页面显示空状态
  } finally {
    loading.userInfo = false
  }
}

/**
 * 打开详情页
 */
const handleOpenApp = (item: LatestUsageItemVO) => {
  if (!item.id) return
  if (item.type === ZONE_TYPE.APP) {
    router.push(`/apps/details/${item.id}`)
  } else {
    router.push(`/resources/api/details/${item.id}`)
  }
}

// ==================== 产品推荐 ====================
const productList = [
  { icon: icon21, title: '星瀚大数据平台', desc: '实时数据湖+批流一体开发' },
  { icon: icon22, title: 'AI模型训练平台', desc: 'LLM微调/推理一体化工作站' },
  { icon: icon23, title: '智能代码助手', desc: 'Copilot级代码生成与审核' },
  { icon: icon24, title: '云原生架构沙箱', desc: 'K8s实验环境·微服务治理' }
]

// ==================== 工单 ====================
const feedbackList = [
  {
    user: '张敏', department: '产品部', status: '已回复',
    content: '数据大屏导出PDF时图标样式错乱，部分组件丢失',
    replyTime: '2026-04-19 09:23',
    reply: '技术团队已复现，今日18:00前发布补丁'
  },
  {
    user: '李远航', department: '技术中心', status: '已回复',
    content: 'API接口限流策略过于严格，业务高峰期大量拒绝',
    replyTime: '2026-04-19 09:23',
    reply: '已将贵部门API阈值提升50%，下周支持弹性限流'
  }
]


// ==================== 初始化 ====================
onMounted(() => {
  loadUserInfo()
  loadRecentApps()
})
</script>

<style scoped>
</style>
