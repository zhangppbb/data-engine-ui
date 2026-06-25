
<script setup lang="ts">
import { CircleCheck, ArrowRight } from '@element-plus/icons-vue'
import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.png'
import img3 from './assets/images/img3.png'

/**
 * 面包屑数据
 */
/**
 * 业务痛点
 */
const painList = [
  {
    title: '传统采购模式风险',
    icon: 'iconfont icon-jinggao',
    desc:
      '缺乏对供应商全方位风险监控，围标串标行为难以识别，企业需承担巨大运营损失。'
  },
  {
    title: '企业实力评估不精准',
    icon: 'iconfont icon-cuohaoxuanzhong',
    desc:
      '缺乏对供应商多维风险指标、围标串标行为难以识别，企业需要定点动态评估。'
  },
  {
    title: '企业信息碎片化',
    icon: 'iconfont icon-pintu',
    desc:
      '缺乏从供应商全方位风险监控，围标串标行为难以识别，企业需承担巨大运营损失。'
  }
]


import gIcon1 from './assets/images/gys/1@2x.png'
import gIcon2 from './assets/images/gys/2@2x.png'
import gIcon3 from './assets/images/gys/3@2x.png'
/**
 * 解决方案
 */
const solutionList = [
  {
    title: '企业风险评价',
    desc:
      '基于大数据关联分析，在招标场景自动识别企业关联关系、异常经营指标与风险，帮助采购方提前识别异常供应商。',
    tags: ['关联关系穿透识别', '异常投标行为预警'],
    icon: gIcon1
  },
  {
    title: '自动准入审批',
    desc:
      '基于大数据关联分析，在招标场景自动识别企业关联关系、智能经营异常与风险，帮助采购方提前识别异常供应商。',
    tags: ['关联关系穿透识别', '异常投标行为预警'],
    icon: gIcon2
  },
  {
    title: '动态化信用评价',
    desc:
      '基于大数据关联分析，在招标场景自动识别企业关联关系、智能经营异常与风险，帮助采购方提前识别异常供应商。',
    tags: ['关联关系穿透识别', '异常投标行为预警'],
    icon: gIcon3
  }
]

/**
 * 系统预览
 */
const previewList = [
  {
    title: '企业信用评价',
    image: img1
  },
  {
    title: '企业风险评价',
    image: img2
  },
  {
    title: '评价指标',
    image: img3
  }
]

/**
 * 客户价值
 */

import kIcon1 from './assets/images/kh/1.png'
import kIcon2 from './assets/images/kh/2.png'
import kIcon3 from './assets/images/kh/3.png'
import kIcon4 from './assets/images/kh/4.png'
const valueList = [
  {
    icon: kIcon1,
    title: '招投标风险防控',
    desc:
      '有效识别围串标行为，每年帮助客户避免因千万级潜在损失。'
  },
  {
    icon: kIcon2,
    title: '企业实力精准评估',
    desc:
      '五大维度科学评价体系，多维反映企业真实能力，大大降低不合格供应商进入概率。'
  },
  {
    icon: kIcon3,
    title: '决策效率大幅提升',
    desc:
      '从人工一周的评估工作量缩短到系统自动完成，决策效率提升 90% 以上。'
  },
  {
    icon: kIcon4,
    title: '供应商评价体系',
    desc:
      '建立动态评估机制，持续监控供应商风险变化，保障项目全周期质量稳定。'
  }
]

/**
 * 相关应用
 */
const appList = [
  {
    title: '企业信息分析',
    desc: '一键生成专业的企业能力评估报告'
  },
  {
    title: '企业信用评价报告',
    desc: '一键生成专业的企业能力评估报告'
  },
  {
    title: '企业风险评价报告',
    desc: '一键生成专业的企业能力评估报告'
  }
]
</script>


<template>
  <div class="min-h-screen">
    <!-- 页面主体 -->
    <div class="mx-auto max-w-1440px flex gap-20px py-20px">
      <!-- 左侧内容 -->
      <div class="min-w-0 flex-1">
        <!-- 顶部信息 -->
        <div class="card">
          <div class="flex items-start justify-between gap-20px">
            <!-- 左侧 -->
            <div class="flex-1">
              <div
                class="inline-flex flex-center rounded-14px bg-[rgba(0,72,152,0.05)] border-solid border-1px border-[rgba(0,72,152,0.2)] px-12px text-12px text-brandColor h-28px"
              >
                案例展示
              </div>

              <div class="mt-20px text-20px font-600">
                中交集团供应商准入分析系统
              </div>

              <div class="mt-8px text-18px leading-30px text-#666">
                帮助中交集团构建全维度供应商评估能力，降低采购风险
              </div>
            </div>

            <!-- 右侧信息 -->
            <div class="flex gap-20px">
              <div
                class="min-w-160px rounded-8px bg-[rgba(191,191,191,0.1)] p-20px"
              >
                <div class="text-16px text-#999">
                  客户名称
                </div>

                <div class="mt-24px text-18px font-600 text-#333">
                  中交集团
                </div>
              </div>

              <div
                class="min-w-160px rounded-8px bg-[rgba(191,191,191,0.1)] p-20px"
              >
                <div class="text-16px text-#999">
                  所属行业
                </div>

                <div class="mt-24px text-18px font-600 text-#333">
                  基建行业
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 业务背景 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            业务背景与痛点
          </div>

          <div class="mt-24px grid grid-cols-3 gap-20px">
            <div
              v-for="item in painList"
              :key="item.title"
              class="rounded-10px border border-solid border-#edf0f3 p-18px"
            >
              <div class="flex items-center gap-10px">
                <div :class="item.icon" class="text-20px! text-brandColor"></div>

                <div class="text-16px font-500 text-brand">
                  {{ item.title }}
                </div>
              </div>

              <div class="mt-12px text-16px leading-24px text-#444">
                {{ item.desc }}
              </div>
            </div>
          </div>

          <!-- 提示 -->
          <div
            class="mt-20px rounded-8px border border-solid border-brandColor bg-[rgba(143,153,183,0.1)] p-20px"
          >
            <div class="flex items-center gap-8px">
              <div class="text-20px">
                💡
              </div>

              <div class="text-16px leading-24px text-brandColor">
                项目必要性：传统合作商管理普遍存在人工核验效率偏低、信用评价模式静态固化、合规风控措施滞后、资源匹配方式相仿、跨部门数据壁垒突出等痛点，已无法适配企业数字化转型及规模化招采业务发展需求。
              </div>
            </div>
          </div>
        </div>

        <!-- 方案 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            供应商风险智能分析解决方案
          </div>

          <div class="mt-20px grid grid-cols-3 gap-20px">
            <div
              v-for="item in solutionList"
              :key="item.title"
              class="rounded-8px border border-solid border-[rgba(0,0,0,0.1)] p-20px bg-[rgba(191,191,191,0.1)] transition-all hover:border-brandColor hover:shadow-[0_4px_14px_rgba(21,101,216,0.08)]"
            >
              <!-- 图标 -->
              <img :src="item.icon" class="w-40px h-40px" alt="">

              <!-- 标题 -->
              <div class="mt-24px text-18px font-500 text-[rgba(0,0,0,0.88)]">
                {{ item.title }}
              </div>

              <!-- 描述 -->
              <div class="mt-12px text-16px text-#666 leading-26px">
                {{ item.desc }}
              </div>

              <!-- 核心能力 -->
              <div class="mt-40px">
                <div class="text-16px font-500 text-[rgba(0,0,0,0.88)]">
                  核心能力
                </div>

                <div class="mt-16px">
                  <div
                    v-for="tag in item.tags"
                    :key="tag"
                    class="flex items-start gap-4px text-16px"
                  >
                    <div
                      class="text-18px text-#37C532"
                    >
                      <el-icon><CircleCheck /></el-icon>
                    </div>

                    <span>{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 功能界面 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            核心系统功能界面
          </div>

          <div class="mt-20px grid grid-cols-3 gap-20px">
            <div
              v-for="item in previewList"
              :key="item.title"
              class="overflow-hidden"
            >
              <div
                class="h-103px overflow-hidden flex items-center justify-center bg-#fff rounded-8px border border-solid border-[rgba(0,0,0,0.1)]"
              >
                <img class="h-full" :src="item.image" alt="">
              </div>

              <div class="mt-12px text-center text-16px">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>

        <!-- 项目成果 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            项目落地成果
          </div>

          <div class="mt-20px text-16px leading-24px text-#222">
            实现合作商的精准管理与数据赋能。支持按行业、企业规模、风险等级、资质类型、红黑名单等多条件组合检索，快速筛选出符合需求的合作商，提升检索效率。基于标签体系与全景画像，为采购、分包等业务环节智能推送适配的合作商，优化资源匹配效率，降低合作成本。
          </div>
        </div>

        <!-- 价值 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            客户价值与行业意义
          </div>

          <div class="mt-24px grid grid-cols-2 gap-20px">
            <div
              v-for="item in valueList"
              :key="item.title"
              class=" bg-[rgba(191,191,191,0.1)] p-20px"
            >
              <div class="flex items-center gap-8px">
                <img :src="item.icon" class="h-32px" alt="">

                <div class="text-18px font-500 text-[rgba(0,0,0,0.88)]">
                  {{ item.title }}
                </div>
              </div>

              <div class="mt-12px text-16px leading-26px text-#666">
                {{ item.desc }}
              </div>
            </div>
          </div>

          <!-- 底部说明 -->
           <div
            class="mt-20px rounded-8px border border-solid border-brandColor bg-[rgba(143,153,183,0.1)] p-20px"
          >
            <div class="flex items-center gap-8px">
              <div class="text-20px">
                💡
              </div>

              <div>
                <div class="text-16px font-500 text-brandColor">行业示范价值</div>
                <div class="text-16px mt-8px leading-24px text-#666">本项目为大型基础设施建设行业供应商管理提供了可复制的智能化解决方案，成功实现了从传统人工评估向数据驱动智能评估的转型，其核心分析方法和系统架构可推广应用至政府采购、国企采购、金融信贷准入等多个行业场景，具备极高推广价值。</div>
              </div>
              <!-- <div class="text-16px leading-24px text-brandColor">
                项目必要性：传统合作商管理普遍存在人工核验效率偏低、信用评价模式静态固化、合规风控措施滞后、资源匹配方式相仿、跨部门数据壁垒突出等痛点，已无法适配企业数字化转型及规模化招采业务发展需求。
              </div> -->
            </div>
          </div>
          <!-- <div
            class="mt-24px rounded-8px border border-solid border-#d9e7ff bg-#f7fbff p-20px"
          >
            <div class="text-16px font-700 text-brandColor">
              行业示范价值
            </div>

            <div class="mt-14px text-14px leading-28px text-#5f6b7a">
              本项目为大型基建企业搭建行业级供应链管理提供了可复制的智能化解决方案，
              成功实现了从传统人工评估向数据驱动智能评估的转型。
            </div>
          </div> -->
        </div>
      </div>

      <!-- 右侧 -->
      <div class="w-286px shrink-0">
        <div class="text-18px font-500 text-[rgba(0,0,0,0.88)] mb-20px">
          相关应用
        </div>

        <!-- 相关应用 -->
        <div class="">
          <div class="space-y-20px">
            <div
              v-for="item in appList"
              :key="item.title"
              class="rounded-8px border border-solid bg-#fff border-#fff p-20px transition-all hover:border-brandColor"
            >
              <div class="text-18px font-500">
                {{ item.title }}
              </div>

              <div class="mt-12px text-16px leading-24px text-#666">
                {{ item.desc }}
              </div>

              <div
                class="mt-30px flex cursor-pointer items-center justify-end gap-6px text-16px text-brandColor"
              >
                去体验
                <el-icon><ArrowRight /></el-icon>
                <!-- <span>›</span> -->
              </div>
            </div>
          </div>
        </div>

        <!-- 获取方案 -->
        <div class="mt-20px">
          <div class="text-18px font-500 text-[rgba(0,0,0,0.88)] mb-20px">
            获取定制方案
          </div>

          <div class="bg-#fff p-20px rounded-6px">
            <div class="text-16px leading-24px text-#666">
              我们的团队可以根据您的实际业务需求，为您定制专属的智能分析解决方案。
            </div>

            <div class="mt-20px space-y-14px">
              <el-button
                type="primary"
                class="!h-38px !w-full !rounded-full"
              >
                立即咨询
              </el-button>

              <el-button
                class="!ml-0 !h-38px !w-full !rounded-full"
              >
                继续查看其他案例
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>