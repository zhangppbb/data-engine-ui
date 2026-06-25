<template>
  <div class="min-h-screen bg-#f5f7fa">
    <!-- 页面主体 -->
    <div class="mx-auto mt-20px max-w-1440px">
      <!-- 标题 -->
      <div class="mb-20px rounded-8px flex-center flex-col bg-#fff py-20px">
        <div class="bg-gradient-to-r from-#004898 via-#2f74ff to-#05D7F6 bg-clip-text text-transparent text-30px font-600">
          2步跑通, 5分钟接入AI工具
        </div>
        <div class="mt-12px text-16px text-#8F99B7">
          MCP 协议, 共用一套 API Key
        </div>
      </div>

      <!-- 第一步 -->
      <div class="mb-20px rounded-8px bg-white p-20px">
        <div class="flex-center flex-col mb-20px py-20px">
          <div class="text-22px font-600 text-center">
            第一步: 获取 API Key 并复制通用配置
          </div>
          <div class="mt-12px text-16px text-center text-[rgba(0,0,0,0.4)]">
            免费注册开通, 6个 Server, 覆盖 179 个企业数据工具
          </div>
        </div>

        <!-- MCP 通用配置 -->
        <div class="mb-20px rounded-8px border-1px border-solid border-[rgba(0,0,0,0.1)]">
          <div class="flex h-60px items-center justify-between px-20px bg-[rgba(191,191,191,0.1)]">
            <div class="flex items-center">
              <div class="text-22px font-600">
              MCP 通用配置 · 6 个 Serve
              </div>
              <div class="px-8px h-22px bg-[rgba(255,117,50,0.05)] rounded-4px border border-[#FF7532] ml-8px text-#FF7532 text-12px">
              未登录
              </div>
            </div>

            <div>
              <el-button
                type="primary"
                class="group!"
              >
                登录领API Key

                <el-icon class="ml-4px">
                  <Right />
                </el-icon>
              </el-button>

              <!-- 复制按钮 -->
              <el-button
                plain
                class="!border-brandColor !text-brandColor hover:!border-#66B1FF hover:!text-#66B1FF"
              >
                复制占位符
              </el-button>
            </div>
          </div>

          <!-- JSON 代码块 -->
          <div class="p-20px">
            <pre class="text-14px text-#222222 leading-16px overflow-x-auto"><code>{
              "mcpServers": {
                "qcc-company": {
                  "command": "npx",
                  "args": ["-y", "@qichacha/mcp-server-company"],
                  "env": {
                    "QCC_API_KEY": "YOUR_API_KEY"
                  }
                },
                "qcc-risk": {
                  "command": "npx",
                  "args": ["-y", "@qichacha/mcp-server-risk"],
                  "env": {
                    "QCC_API_KEY": "YOUR_API_KEY"
                  }
                },
                "qcc-history": {
                  "command": "npx",
                  "args": ["-y", "@qichacha/mcp-server-history"],
                  "env": {
                    "QCC_API_KEY": "YOUR_API_KEY"
                  }
                },
                "qcc-judicial": {
                  "command": "npx",
                  "args": ["-y", "@qichacha/mcp-server-judicial"],
                  "env": {
                    "QCC_API_KEY": "YOUR_API_KEY"
                  }
                },
                "qcc-patent": {
                  "command": "npx",
                  "args": ["-y", "@qichacha/mcp-server-patent"],
                  "env": {
                    "QCC_API_KEY": "YOUR_API_KEY"
                  }
                },
                "qcc-tender": {
                  "command": "npx",
                  "args": ["-y", "@qichacha/mcp-server-tender"],
                  "env": {
                    "QCC_API_KEY": "YOUR_API_KEY"
                  }
                }
              }
            }</code></pre>
          </div>

          <div class="flex h-60px items-center px-20px bg-[rgba(191,191,191,0.1)] text-16px">
            当前显示的是占位符 <span class="text-#FF7532 ml-8px">YOUR_API_K</span>，登录后此处将自动替换为你的真实 API Key，无需手动修改。
          </div>
        </div>

        <!-- 认证 -->
        <div class="mt-20px text-16px p-20px bg-[rgba(143,153,183,0.1)] rounded-8px border border-[#8F99B7]">
          <div class="text-brandColor">历史存档 Server 需企业认证后方可</div>
          <div class="mt-12px"><span class="text-brandColor">qcc-history</span> 完成企业认证后方可正常调用，您可通过微信或电话与我们联系，完成企业认证。</div>
        </div>
      </div>

      <!-- 第二步 -->
      <div class="rounded-8px bg-white p-20px shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02),_0px_1px_6px_-1px_rgba(0,0,0,0.02),_0px_1px_2px_0px_rgba(0,0,0,0.03)]">
        <div class="flex-center flex-col mb-32px py-20px">
          <div class="text-22px font-600 text-center">
            第二步：MCP接入 · 选择你的AI工具
          </div>
          <div class="mt-12px text-16px text-center text-[rgba(0,0,0,0.4)]">
            AI 对话中自然语言调用企查查数据，10+ 主流平台原生支持
          </div>
        </div>


        <!-- AI 工具列表 -->
        <div class="mb-8px flex gap-20px">
          <div
            v-for="(tool, index) in aiTools"
            :key="tool.name"
            class="cursor-pointer h-28px text-12px flex items-center border-b-2px border-b-transparent border-b-solid"
            :class="selectedTool === index ? 'border-b-brandColor!' : 'bg-white'"
            @click="selectedTool = index"
          >
            <div class="text-12px font-500">
              {{ tool.name }}
            </div>
            <img v-if="tool.recommended" :src="recommendIcon" alt="" class="w-14px h-14px ml-4px" />
          </div>
        </div>

        <!-- Claude Code 详情 -->
        <div class="mb-20px rounded-8px border-1px border-solid border-[rgba(0,0,0,0.1)]">
          <div class="flex items-center justify-between p-20px bg-[rgba(191,191,191,0.1)]">
            <div class="text-16px">
              <div class="font-600 mb-12px">
              Claude Code
              </div>
              <div class="text-[rgba(0,0,0,0.40)]">
                Anthropic 官方命令行 Agent · 原生 MCP 支持
              </div>
            </div>

            <div class="border border-solid border-#37C532 text-#37C532 flex items-center h-40px px-20px text-16px rounded-20px">
              <img :src="recommendIcon" alt="" class="w-12px h-12px mr-8px" />
              推荐
            </div>
          </div>
        

          <div class="flex gap-32px  p-20px">
            <!-- 左侧接入步骤 -->
            <div class="flex-1">
              <div class="mb-12px text-14px font-600 text-#BFBFBF">
                接入步骤
              </div>
              <div class="space-y-14px">
                <div class="flex items-center">
                  <div class="w-20px h-20px rounded-50% flex-center bg-[rgba(0,72,152,0.1)] text-brandColor mr-12px text-12px">
                    1
                  </div>
                  
                  <div class="flex items-center font-500">
                    <div class="text-14px">安装：</div>
                    <div class="rounded-4px bg-[rgba(191,191,191,0.15)] px-8px leading-20px  mx-8px text-brandColor font-normal">
                      npm install -g @anthropic-ai/claude-code
                    </div>
                  </div>
                </div>

                <div class="flex items-center">
                  <div class="w-20px h-20px rounded-50% flex-center bg-[rgba(0,72,152,0.1)] text-brandColor mr-12px text-12px">
                   2
                  </div>
                  <div class="flex items-center  font-500">
                    <div class="text-14px">创建：</div>
                    <div class="rounded-4px bg-[rgba(191,191,191,0.15)] px-8px leading-20px text-brandColor  mx-8px font-normal">
                      mkdir -p ~/.claude/mcp.json
                    </div>
                    <div class="text-14px">，粘贴上方通用配置并替换 API Key</div>
                  </div>
                </div>

              
                <div class="flex items-center">
                  <div class="w-20px h-20px rounded-50% flex-center bg-[rgba(0,72,152,0.1)] text-brandColor mr-12px text-12px">
                   3
                  </div>
                  <div class="flex items-center  font-500">
                    <div class="text-14px">终端执行</div>
                    <div class="rounded-4px bg-[rgba(191,191,191,0.15)] px-8px leading-20px mx-8px font-normal text-brandColor">
                      claude
                    </div>
                    <div class="text-14px">进入对话，按右侧示例验证是否跑通</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧配置和验证 -->
            <div class="flex-1">
              <div>
                <div class="mb-12px text-14px font-600 text-#BFBFBF">
                  [ 配置 ]
                </div>
                <div class="p-20px rounded-8px bg-#F7F8FA text-14px">
                  npm install -g @anthropic-ai/claude-code<br/>
                  mkdir -p ~/.claude<br/>
                  # 将上方通用配置保存到 ~/.claude/.mcp.json<br/>
                  claude  # 启动对话
                </div>

              </div>

              <div>
                <div class="mb-12px text-14px font-600 text-brandColor mt-20px">
                 [ 验证 ]
                </div>
                <div class="p-20px rounded-8px bg-#F7F8FA text-14px">
                 > 查询宁德时代新能源科技股份有限公司的裁判文书<br/>
                # → 返回裁判文书列表，含案号、案由、裁判结果等字段 = 接入成功
                </div>

              </div>
            </div>
          </div>
        </div>


        <!-- 配置 -->
        <div class="p-20px bg-[rgba(55,197,50,0.05)] rounded-8px border border-solid border-[rgba(55,197,50,0.5)]">
          <div>
            <div class="text-16px font-500">配置完成 · 立即试一次真实调用</div>
            <div class="text-[rgba(0,0,0,0.4)] mt-12px text-16px">复制下方测试指令到你的 AI 对话框（Claude / Cursor / 百炼 任一），30 秒即可验证 MCP 是否跑通。首次成功调用即完成激活。</div>
            <div class="mt-24px flex items-center relative h-56px bg-[rgba(55,197,50,0.1)] rounded-16px border border-[rgba(55,197,50,0.1)] text-16px px-20px">
              <div>用企查查 MCP 查一下小米科技有限责任公司的基本工商信息</div>
              <div class="flex text-center flex-center absolute right-0 top-0 z-10 bg-#37C532 px-20px text-#fff h-full rounded-16px cursor-pointer">复制Prompt</div>
            </div>
          </div>

          <div class="flex text-[rgba(0,0,0,0.4)] text-16px mt-24px items-center">
            <div class="w-18px h-18px bg-#fff border border-solid border-[rgba(0,0,0,0.4)] rounded-50% flex-center rounded-50% mr-6px">?</div><div>没反应？</div><div class="text-#FF7532 mx-12px">查看常见问题</div><div class="w-18px h-18px bg-#fff border border-solid border-[rgba(0,0,0,0.4)] rounded-50% flex-center rounded-50%"><el-icon size="14px"><PhoneFilled /></el-icon></div><div class="ml-6px text-[rgba(0,0,0,0.4)]">400-088-8275</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhoneFilled, Right } from '@element-plus/icons-vue'
import recommendIcon from './assets/images/recommend-icon.svg'

/**
 * 面包屑数据
 */
/**
 * 当前选中的工具
 */
const selectedTool = ref(8) // 默认选中 Claude Code

/**
 * AI 工具列表
 */
const aiTools = [
  { name: 'WorkRubble', recommended: false },
  { name: 'Taro', recommended: false },
  { name: 'Cursor', recommended: false },
  { name: 'OpenClaw', recommended: false },
  { name: '阿里灵犀', recommended: false },
  { name: '句子写', recommended: false },
  { name: 'CherryStudio', recommended: false },
  { name: 'Claude Code', recommended: true },
  { name: 'Claude.ai', recommended: false },
  { name: 'Windsurf', recommended: false }
]
</script>
