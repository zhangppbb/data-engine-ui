<template>
  <div class="min-h-screen">
    <section class="mx-auto max-w-1440px card">
      <div class="m-0 text-20px font-600">KYB 企业核验</div>
      <div class="mt-8px text-12px text-#999999">/kyb-verification-qcc</div>
      <div class="m-0 mt-12px text-18px leading-30px">
        银行开户和授信审批前的核心合规工具。输入企业名称，AI 自动完成主体真实性核验、股权结构穿透、34 类司法与经营风险扫描，3 分钟输出符合 FATF / PBOC / CBIRC 标准的合规报告，替代传统客户经理 2-3 小时人工尽调流程。
      </div>
    </section>

    <main class="mx-auto mt-20px max-w-1440px card p-0!">
      <div class="border-b-2px border-b-solid border-b-#E5E5E5">
        <div class="flex items-center gap-34px">
          <button
            class="relative h-48px border-none bg-transparent px-0 text-15px text-brandColor font-700 px-20px"
            type="button"
          >
            安装与使用
            <span class="absolute bottom--1px left-0 h-2px w-full bg-brandColor"></span>
          </button>
          <button
            class="h-48px border-none bg-transparent px-0 text-16px text-#666666 px-20px"
            type="button"
          >
            示例报告
          </button>
        </div>
      </div>

      <section class="p-20px">
        <div class="relative">
          <div class="absolute bottom-0 left-13px top-30px border-l border-l-dashed border-l-brandColor"></div>

          <StepBlock
            :step="1"
            title="完成 MCP 接入"
            time="首次约1分钟"
          >
            <div class="m-0 mt-14px text-16px text-#444">
              注册账号、获取 API Key，粘贴配置到你的 AI 工具。只需做一次，所有 SKILL 共用。
            </div>
            <button class="mt-12px inline-flex items-center gap-6px border-none bg-transparent p-0 text-16px text-brandColor font-400" type="button">
              查看接入指南
              <el-icon><ArrowRight /></el-icon>
            </button>

          </StepBlock>

          <StepBlock :step="2" title="加载本 SKILL 到 AI 工具" class="mt-28px">
            <ActionPanel
              class="mt-14px"
              title="方式 A · 复制 AI 加载链接"
              desc="兼容 WorkBuddy / Trae / Cursor / Claude Code 等 14+ 主流 AI 应用。复制后粘贴到 AI 对话框即可。"
              highlighted
              recommended
            >
              <div class="flex items-center justify-between gap-14px rounded-16px bg-#fff px-20px h-56px relative">
                <div class="min-w-0 break-all text-16px text-brandColor">
                  请加载企查查 SKILL(KYB 企业核验)：https://agent.qcc.com/skill/v1/banking/kyb-verification-qcc/SKILL.md
                </div>
                <el-button
                  type="primary"
                  class="!h-56px !rounded-10px !px-18px absolute right-0 top-0"
                  style="

--el-button-bg-color: var(--brand-color); --el-button-border-color: var(--brand-color);"
                >
                  <el-icon><CopyDocument /></el-icon>
                  <span class="ml-8px">复制</span>
                </el-button>
              </div>
            </ActionPanel>

            <ActionPanel
              class="mt-28px"
              title="方式 B · 兜底：复制 SKILL.md 全文"
              desc="适用于不会主动 fetch URL 的 AI 工具（如 CherryStudio）。"
            >
            <div class="flex items-center justify-between gap-14px rounded-16px bg-#fff px-20px h-56px">
                <div class="min-w-0 break-all text-16px text-brandColor">
                   完整 SKILL.md 全文（9 KB · 含业务规则与 MCP 调用清单）
                </div>
                <el-button
                  type="primary"
                  class="!h-56px !rounded-10px !px-18px"
                  style="

--el-button-bg-color: var(--brand-color);"
                >
                  <el-icon><CopyDocument /></el-icon>
                  <span class="ml-8px">复制</span>
                </el-button>
              </div>
            </ActionPanel>
          </StepBlock>

          <StepBlock :step="3" title="使用本 SKILL" class="mt-28px" last>
            <ActionPanel
              class="mt-14px"
              title="方式 A · 自然语言对话"
              desc="AI 加载本 SKILL 后，像平时聊天一样说出你的需求，AI 会自动识别并调用本 SKILL:"
              highlighted
              recommended
              badge="对公开户准入"
            >
            <div class="flex items-center justify-between gap-14px rounded-16px bg-#fff px-20px h-56px">
                <div class="min-w-0 break-all text-16px text-brandColor">

                “请帮我对 [公司名称] 做一份完整 KYB 核验报告，重点看主体真实性、股东结构、最近 3 年的司法风险”
                </div>
              </div>
            </ActionPanel>

            <ActionPanel
              class="mt-28px"
              title="方式 B · 精准命令调用（专业用户）"
              desc="熟悉本 SKILL 后可直接用 slash 命令精准触发，节省 token 与等待时间:"
            >
                   <div class="flex items-center justify-between gap-14px rounded-16px bg-#fff px-20px h-56px">
                <div class="min-w-0 break-all text-16px text-brandColor">

                /kyb-verification-qcc [公司名称]
              </div>
              </div>
            </ActionPanel>
          </StepBlock>
        </div>

        <section class="mt-18px border-t border-t-solid border-t-[rgba(0,0,0,0.1)] pt-20px">
           <!-- 折叠按钮 -->
            <button
            class="flex items-center gap-8px border-none bg-transparent cursor-pointer p-0 text-16px text-#8F99B7 hover:text-brandColor"
            type="button"
            @click="toggleOpen"
            >
             <el-icon :class="['transition-transform duration-300', isOpen ? 'rotate-180' : 'rotate-0']">
                <ArrowDown />
            </el-icon>
            {{ isOpen ? '收起 SKILL 完整业务规则' : '查看 SKILL 完整业务规则' }}
            </button>

               <el-collapse-transition>
                   <pre  v-show="isOpen" class="mt-12px whitespace-pre-wrap rounded-10px bg-[rgba(191,191,191,0.1)] p-20px text-16px leading-22px text-#999999">{{ businessRules }}</pre>
               </el-collapse-transition>
        </section>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { ArrowDown, ArrowRight, CopyDocument } from '@element-plus/icons-vue'
import StepBlock from './components/StepBlock.vue'
import ActionPanel from './components/ActionPanel.vue'


const businessRules = `> KYB 企业核验 SKILL · 企查查 MCP V2.0 增强版
> 金融机构对公客户开户、授信审批、尽调、年检场景的主体自动化核验工具。输入企业名称或统一社会信用代码后，SKILL 自动完成主体真实性核验、工商信息核验、历史治理稳定性回溯、受益所有人穿透、34 类司法风险扫描，输出符合 FATF / 中国央行 3 号令标准的 KYB 合规底稿。
>
> 核心能力:
> - 主体真实性核验：企业名 + USCC + 法代三项交叉匹配
> - 工商信息核验：注册资本、法代、股东结构、登记状态实时比对
> - **V2.0 新能力：历史治理稳定性**（qcc-history）一历史法代更替轨迹、历史股东变迁、历史注册资本变更，识别“频繁变更”的治理不稳定主体
> - 受益所有人穿透：股权穿透 + get_beneficial_owners + UBO 个人画像
> - 34 类司法风险扫描：失信 / 被执行 / 限高 / 股权冻结 / 经营异常 / 税务违法 等全量
> - 关联关系排查：集团客户识别、隐性关联、一致行动人
>
> 适用场景：银行 / 券商 / 信托 / 保险等金融机构的对公开户 KYB、信贷授信前调查、存量客户年检、反洗钱客户尽调。
>
> 使用方式：/kyb-verification-qcc 企业名称 [统一社会信用代码] [--depth standard|full] [--format md|docx|pptx]
>
> **命令**：/kyb-verification-qcc · **MCP 工具集**：qcc-company, qcc-risk, qcc-history, qcc-executive, qcc-operation`


 const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

</script>
