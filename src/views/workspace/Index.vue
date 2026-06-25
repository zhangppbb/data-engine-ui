<template>
  <div class="max-w-1440px mx-auto pb-20px">
    <div class="mt-20px">
      <!-- 左侧 -->
      <div class="grid grid-cols-1 gap-20px md:grid-cols-2 mb-20px">
        <!-- 工作中心 -->
        <div class="card">
          <!-- 标题 -->
          <div class="mb-24px flex items-center justify-between">
            <div class="flex items-center gap-10px">
              <div class="text-24px iconfont icon-diannao text-brandColor">
              </div>

              <div class="font-semibold text-[22px] text-[#222222] leading-[20px] text-left not-italic ml-8px">
                我的工作中心
              </div>
            </div>

             <div
              class="flex cursor-pointer items-center gap-4px text-15px text-brandColor px-8px h-36px rounded-[8px] bg-[rgba(0,72,152,0.05)]"
            >
              <span class="iconfont icon-jiahao"></span>
              <span class="ml-4px">添加更多</span>
            </div>
          </div>

          <!-- 功能 -->
          <div class="grid grid-cols-6 gap-30px">
            <div
              v-for="item in workList"
              :key="item.title"
              class="group cursor-pointer flex flex-col items-center"
            >
              <!-- 图标 -->
              <div class="flex justify-center">
                <img
                 :src="item.icon"
                  class="flex h-24px items-center justify-center rounded-12px bg-#edf3ff text-30px transition-all group-hover:scale-108"
                />
              </div>

              <!-- 标题 -->
              <div
                class="text-[14px] text-center text-[#222222] leading-[18px] not-italic mt-12px line-clamp-2"
              >
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>

        <!-- 用户 -->
        <div class="card w-full relative">
          <div class="flex items-start justify-between w-full">
            <!-- 用户 -->
            <div class="flex items-start gap-12px pt-24px">
              <!-- 头像 -->
              <div
                class="flex h-72px w-72px items-center justify-center rounded-full bg-brandColor font-semibold text-[32px] text-white not-italic"
              >
                黄
              </div>

              <!-- 信息 -->
              <div class="flex-1 overflow-hidden pt-4px">
                <div class="flex items-center gap-12px">
                  <div class="font-semibold text-[24px] text-[#222222] leading-[24px] not-italic">
                    黄明
                  </div>

                  <div class="font-normal text-[18px] text-[#666666] leading-[18px] text-left not-italic">
                    技术总监·高级架构师
                  </div>
                </div>

                <div class="w-full mt-12px font-normal text-[16px] text-[#666666] leading-[16px] text-center not-italic break-words whitespace-normal">
                  数擎科技（杭州）有限公司 ｜ 技术研发中心 ｜ 智慧产业园总部 · 5F
                </div>
              </div>
            </div>

            <!-- 按钮 -->
            <div
              class="flex absolute right-20px top-20px cursor-pointer items-center gap-4px text-15px text-brandColor px-8px h-36px rounded-[8px] bg-[rgba(0,72,152,0.05)]"
            >
              <span class="iconfont icon-xiugai"></span>
              <span class="ml-4px">修改信息</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧 -->
      <div class="grid grid-cols-1  gap-20px md:grid-cols-2 ">
        <div class="card">
          <!-- 标题 -->
          <div class="mb-20px flex items-center justify-between">
            <div class="flex items-center gap-8px">
              <div class="text-24px iconfont icon-24gf-thumbsUp2 text-brandColor">
              </div>

              <div class="font-semibold text-[22px] text-[#222222] leading-[20px] ml-8px">
                产品推荐
              </div>

              <div class="text-[12px] text-[rgba(0,0,0,0.4)] px-8px rounded-[4px] h-22px leading-22px">
                基于部门“智能匹配”
              </div>
            </div>

            <div
              class="flex cursor-pointer items-center gap-4px text-15px text-brandColor px-8px h-36px rounded-[8px] bg-[rgba(0,72,152,0.05)]"
            >
              <span class="iconfont icon-ziyuanxhdpi"></span>
              <span class="ml-4px">换一批</span>
            </div>
          </div>

          <!-- 产品列表 -->
          <div class="space-y-14px">
            <div
              v-for="item in productList"
              :key="item.title"
              class="flex items-center justify-between rounded-4px bg-[rgba(191,191,191,0.1)] px-20px py-10px transition-all hover:bg-#f4f7ff"
            >
              <div class="flex items-center gap-12px">
                <!-- 图标 -->
                <!-- <div
                  class="w-50px h-50px border rounded-[8px] border-solid border-[rgba(0,72,152,0.1)] bg-#FFFFFF"
                > -->
                  <!-- {{ item.icon }} -->
                <img class="w-50px h-50px" :src="item.icon" alt="">
                <!-- </div> -->

                <!-- 信息 -->
                <div>
                  <div class="font-semibold text-[16px] text-[#222222] leading-[16px] text-left not-italic">
                    {{ item.title }}
                  </div>

                  <div class="mt-12px font-normal text-[14px] text-[#999999] leading-[14px] text-left not-italic">
                    {{ item.desc }}
                  </div>
                </div>
              </div>

              <!-- 箭头 -->
              <div class="text-24px! text-#999999!">
                <el-icon><ArrowRight /></el-icon>
              </div>
            </div>
          </div>

          <!-- 底部 -->
          <div class="mt-18px ont-normal text-[16px] text-[#999999] leading-[16px] text-left not-italic">
            根据您所在部门「技术研发中心」定制
          </div>
          
        </div>

        <!-- 工单 -->
        <div class="card">
          <!-- 标题 -->
          <div class="mb-28px flex items-center justify-between">
            <div class="flex items-center gap-8px">
            <div class="text-24px iconfont icon-questionnaire-fill text-brandColor">
              </div>

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

          <!-- 列表 -->
          <div class="space-y-20px">
            <div
              v-for="item in feedbackList"
              :key="item.user"
              class="border rounded-[8px] border-solid border-[rgba(143,153,183,0.1)] bg-[rgba(143,153,183,0.05)] p-20px"
            >
              <!-- 顶部 -->
              <div class="flex items-center gap-10px">
                <div class="font-medium text-[18px] text-[#222222] leading-[18px] not-italic">
                  {{ item.user }}
                </div>

                <div class="font-medium text-[18px] text-[#222222] leading-[18px] not-italic">
                  ·
                </div>

                <div class="font-medium text-[18px] text-[#222222] leading-[18px] not-italic">
                  {{ item.department }}
                </div>

                <!-- 状态 -->
                <div
                  :class="[
                    'rounded-full px-12px text-12px  h-24px leading-24px border rounded-[14px] border-solid ',
                    item.status === '处理中'
                      ? 'text-brandColor border-[rgba(0,72,152,0.2)] bg-[rgba(0,72,152,0.1)]'
                      : 'bg-[rgba(55,197,50,0.1)] border-[rgba(55,197,50,0.2)] text-#37C532'
                  ]"
                >
                  {{ item.status }}
                </div>
              </div>

              <!-- 内容 -->
              <div class="mt-12px text-[16px] text-[#222222] leading-[16px] text-left not-italic">
                {{ item.content }}
              </div>

              <div class="pt-24px pl-20px pb-20px">
                 <!-- 回复 -->
                <div class="font-normal text-[14px] text-[#999999] leading-[14px] text-left not-italic">
                    最新回复：{{ item.replyTime }}
                </div>

                <div class="mt-12px font-normal text-[16px] text-[#222222] leading-[16px] not-italic">
                    {{ item.reply }}
                </div>
              </div>

              <!-- 按钮 -->
              <div class="flex justify-end border-t border-t-solid border-t-[rgba(0,0,0,0.1)]">
                <div
                  v-if="item.status === '处理中'"
                  class="cursor-pointer rounded-full bg-brandColor px-12px py-8px text-12px text-white mt-12px"
                >
                  <span class="iconfont icon-dialog"></span>
                  <span class="ml-6px">回复客户</span>
                </div>

                <div
                  v-else
                  class="font-medium text-[12px] text-[#999999] text-left not-italic  pt-20px"
                >
                  已完结/无需回复
                </div>
              </div>
            </div>
          </div>

          <!-- 底部 -->
          <div class="mt-20px flex items-center justify-between">
            <div class="font-normal text-[16px] text-[#999999] leading-[16px] text-left not-italic">
              本周响应率
              <span class="text-#FF7532">
                94%
              </span>
            </div>

            <div class="cursor-pointer text-16px text-brandColor">
              查看全部反馈
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import icon1 from './assets/images/1-1.png'
import icon2 from './assets/images/1-2.png'
import icon3 from './assets/images/1-3.png'
import icon4 from './assets/images/1-4.png'
import icon5 from './assets/images/1-5.png'
import icon6 from './assets/images/1-6.png'

import icon21 from './assets/images/2-1.png'
import icon22 from './assets/images/2-2.png'
import icon23 from './assets/images/2-3.png'
import icon24 from './assets/images/2-4.png'

/**
 * 工作中心
 */
const workList = [
  {
    icon: icon1,
    title: '市场竞争分析'
  },
  {
    icon: icon2,
    title: '潜客扫描'
  },
  {
    icon: icon3,
    title: '市场分析报告系列'
  },
  {
    icon: icon4,
    title: '企业信用评价'
  },
  {
    icon: icon5,
    title: '企业风险审核'
  },
  {
    icon: icon6,
    title: '供应商智能信用与风险管控AI'
  }
]

/**
 * 产品推荐
 */
const productList = [
  {
    icon: icon21,
    title: '星瀚大数据平台',
    desc: '实时数据湖+批流一体开发'
  },
  {
    icon: icon22,
    title: 'AI模型训练平台',
    desc: 'LLM微调/推理一体化工作站'
  },
  {
    icon: icon23,
    title: '智能代码助手',
    desc: 'Copilot级代码生成与审核'
  },
  {
    icon: icon24,
    title: '云原生架构沙箱',
    desc: 'K8s实验环境·微服务治理'
  }
]

/**
 * 工单
 */
const feedbackList = [
  {
    user: '张敏',
    department: '产品部',
    status: '已回复',
    content:
      '数据大屏导出PDF时图标样式错乱，部分组件丢失',
    replyTime: '2026-04-19 09:23',
    reply:
      '技术团队已复现，今日18:00前发布补丁'
  },
  {
    user: '李远航',
    department: '技术中心',
    status: '已回复',
    content:
      'API接口限流策略过于严格，业务高峰期大量拒绝',
    replyTime: '2026-04-19 09:23',
    reply:
      '已将贵部门API阈值提升50%，下周支持弹性限流'
  }
]
</script>

<style scoped>
</style>