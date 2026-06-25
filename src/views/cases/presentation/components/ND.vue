
<script setup lang="ts">
import { CircleCheck, ArrowRight } from '@element-plus/icons-vue'
import img1 from './assets/images/img4.png'
import img2 from './assets/images/img5.png'
import img3 from './assets/images/img6.png'

/**
 * 面包屑数据
 */
/**
 * 业务痛点
 */
const painList = [
  {
    title: '重大战略落地亟需支持',
    icon: 'iconfont icon-jinggao',
    desc:
      '对标乡村振兴、科技创新及双一流建设部署，紧扣农业强国建设发展要求，急需搭建成果转化专业化服务载体。'
  },
  {
    title: '科研成果转化存在堵点',
    icon: 'iconfont icon-cuohaoxuanzhong',
    desc:
      '科研成果落地转化渠道不畅，校地、校企供需对接壁垒突出，资源分散难以高效联动孵化应用。'
  },
  {
    title: '缺乏智能精准撮合工具',
    icon: 'iconfont icon-pintu',
    desc:
      '缺少专业撮合推荐引擎与数据资源库，成果与需求难以精准匹配对接，合作质量、合规性缺少体系化保障。'
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
    title: '数据与资源体系构建',
    desc:
      '聚焦农业科技成果转化不畅、产学研信息不对称痛点，搭建平台数据底座；整合校内科研数据与外部产业资源，建成教师库、成果库、需求库三大资源池，通过数据清洗、标签体系及安全机制，全面保障平台数据规范与质量。',
    tags: ['校内外科研产业资源整合汇聚', '标准化数据治理与安全管控'],
    icon: gIcon1
  },
  {
    title: '全流程管理',
    desc:
      '采用卡片式展示、分角色可视化界面设计，大幅提升平台操作易用性；面向政企端、教师端提供精准检索、多维度筛选、成果管理、需求发布、邀约互动等能力，覆盖成果对接全业务流程。',
    tags: ['多角色全流程业务闭环服务', '可视化界面与便捷化操作体验'],
    icon: gIcon2
  },
  {
    title: 'AI 智能匹配',
    desc:
      '依托 NLP 语义分析、智能推荐算法及 AI 大模型，实现科研成果与产业需求智能精准匹配；联动社会服务处实施全流程审批管控，提升成果对接效率与转化成功率，为校地校企合作、乡村振兴建设提供数字化支撑。',
    tags: ['大模型赋能供需智能精准匹配', '全流程审批提效成果转化落地'],
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
    title: '产学研信息壁垒破解',
    desc:
      '有效解决高校成果与企业需求信息不对称、对接效率低的痛点，实现成果转化全流程数字化、智能化升级。'
  },
  {
    icon: kIcon2,
    title: '供需对接周期大幅缩短',
    desc:
      '依托NLP智能分析与AI大模型推荐算法，实现科研人员、成果意向与企业需求的精准匹配，显著减少无效对接环节。'
  },
  {
    icon: kIcon3,
    title: '协同沟通成本显著降低',
    desc:
      '以智能撮合替代传统低效对接模式，减少人工沟通成本，提升产学研协同效率。'
  },
  {
    icon: kIcon4,
    title: '成果转化与服务效能升级',
    desc:
      '大幅提升科技成果转化效率与产学研协同水平，强化学校社会服务能力，为农业科技成果产业化提供核心支撑。'
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
                中国农业大学科研成果撮合平台
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
                  中国农业大学
                </div>
              </div>

              <div
                class="min-w-160px rounded-8px bg-[rgba(191,191,191,0.1)] p-20px"
              >
                <div class="text-16px text-#999">
                  所属行业
                </div>

                <div class="mt-24px text-18px font-600 text-#333">
                  教育行业
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
                项目必要性：传统高校科研成果管理模式普遍存在成果转化渠道闭塞、校地校企供需对接割裂、缺少智能撮合匹配工具、社会服务效能不足等痛点，已无法适配乡村振兴、科技创新及双一流建设背景下高校科研赋能与高质量发展需求。
              </div>
            </div>
          </div>
        </div>

        <!-- 方案 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            农业科技成果供需撮合平台
          </div>

          <div class="mt-20px grid grid-cols-3 gap-20px">
            <div
              v-for="item in solutionList"
              :key="item.title"
              class="rounded-8px border border-solid border-[rgba(0,0,0,0.1)] p-20px bg-[rgba(191,191,191,0.1)] transition-all hover:border-brandColor hover:shadow-[0_4px_14px_rgba(21,101,216,0.08)] flex flex-col justify-between"
            >
              <div>

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

          <div class="flex items-center gap-8px bg-[rgba(255,171,34,0.1)] rounded-8px p-20px">
            <div class="text-20px">
              💡
            </div>

            <div class="text-16px leading-24px text-#222">
            实现农业科技成果供需撮合的数字化支撑与上线推广。已汇聚科研人员 3000 余人、成果意向 2000 余项、企业需求 700 余项，建成校地校企供需资源库；依托 NLP 技术、智能算法与 AI 大模型实现供需智能匹配，打通产学研信息壁垒，提升成果对接转化效率，为乡村振兴与农业科技成果落地提供有力支撑。
            </div>
          </div>
        </div>

        <!-- 价值 -->
        <div class="mt-20px card">
          <div class="text-18px font-500 pb-20px border-b border-b-solid border-b-[rgba(0,0,0,0.06)]">
            客户价值与行业意义
          </div>

          <div class="mt-24px grid gap-12px">
            <div
              v-for="(item, index) in valueList"
              :key="item.title"
              class=" bg-[rgba(191,191,191,0.1)] p-20px flex items-center"
            >
              <div class="flex items-center gap-12px">
                <div class="w-28px h-28px flex-center rounded-8px bg-[rgba(0,72,152,0.1)] border border-solid border-brandColor">
                  {{ index + 1 }}
                </div>

                <div class="text-18px font-500 text-brandColor">
                  {{ item.title }}
                </div>
              </div>

              <div class="text-16px leading-26px text-#666 ml-20px">
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
                <div class="text-16px mt-8px leading-24px text-#666">本项目为高校科技成果转化提供了可复制的数字化撮合解决方案，成功实现了从传统人工对接向 AI 智能匹配的转型，其核心资源库建设、智能推荐与全流程管理模式，可推广应用至农林类高校产学研协同场景，为乡村振兴与农业科技产业化发展提供示范支撑。</div>
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