<script setup lang="ts">
import { nextTick, ref } from 'vue'
import Icon from '@/components/Icon/src/Icon.vue'
import icon from './assets/images/icon.svg'

// 是否打开
const isOpen = ref(false)

// 输入内容
const inputText = ref('')
const generating = ref(false)

// 消息列表
const messages = ref([
  {
    id: 1,
    type: 'assistant',
    content: '你好！我是数擎平台的智能助手，有什么可以帮助你的吗？',
    time: '刚刚'
  }
])

// 快捷问题
const quickQuestions = ref([
  '如何生成企业风险报告？',
  '资源馆有哪些数据？',
  '如何使用 API？',
  '如何导出数据？'
])

// 滚动容器
const messageRef = ref<HTMLElement>()

/**
 * 切换助手
 */
const toggleAssistant = () => {
  isOpen.value = !isOpen.value
}

/**
 * 滚动到底部
 */
const scrollBottom = async () => {
  await nextTick()

  if (messageRef.value) {
    messageRef.value.scrollTop = messageRef.value.scrollHeight
  }
}

/**
 * 发送消息
 */
const sendMessage = async () => {
  // 正在生成中
  if (generating.value) return

  const VALUE = inputText.value.trim()

  if (!VALUE) return

  generating.value = true

  // 用户消息
  messages.value.push({
    id: Date.now(),
    type: 'user',
    content: VALUE,
    time: '刚刚'
  })

  inputText.value = ''

  await scrollBottom()

  try {
    await fetchAIReply(VALUE)
  } catch (err) {
    console.error(err)

    messages.value.push({
      id: Date.now(),
      type: 'assistant',
      content: 'AI 服务异常，请稍后重试',
      time: '刚刚'
    })
  } finally {
    generating.value = false
  }
}


const API_KEY = 'sk-rLQ1cEHNpK5ght3iKGQPYciMUQFszrE9';

/**
 * AI 请求
 */
const fetchAIReply = async (content: string) => {
  const response = await fetch(
    'https://api.deepseek.com',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'jiaorong-deepseek-v4-flash',
        stream: true,
        messages: [
          {
            role: 'user',
            content
          }
        ]
      })
    }
  )

  if (!response.body) return

  const assistantMessage = {
    id: Date.now(),
    type: 'assistant',
    content: '',
    time: '刚刚'
  }

  messages.value.push(assistantMessage)

  const messageIndex = messages.value.length - 1

  const reader = response.body.getReader()

  const decoder = new TextDecoder()

  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()

    if (done) break

    buffer += decoder.decode(value, { stream: true })

    const lines = buffer.split('\n')

    buffer = lines.pop() || ''

    for (const line of lines) {
      const trimmed = line.replace(/^data:\s*/, '').trim()

      if (!trimmed) continue

      if (trimmed === '[DONE]') {
        return
      }

      try {
        const json = JSON.parse(trimmed)

        const delta =
          json.choices?.[0]?.delta?.content ||
          json.choices?.[0]?.delta?.reasoning_content ||
          ''

        if (delta) {
          messages.value[messageIndex].content += delta

          // 强制刷新
          messages.value = [...messages.value]

          await scrollBottom()
        }
      } catch (err) {
        console.error(err)
      }
    }
  }
}

/**
 * 快捷提问
 */
const selectQuestion = (question: string) => {
  if (generating.value) return
  inputText.value = question
}

/**
 * 回车发送
 */
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}
</script>

<template>
  <div>
    <!-- 悬浮按钮 -->
    <Transition name="assistant-float">
      <div
        class="fixed right-32px top-50% z-9999 translate-y-[-50%]"
      >
        <div
          class="group relative h-50px w-50px cursor-pointer"
          @click="toggleAssistant"
        >
          <!-- 波纹 -->
          <div
            class="absolute inset-0 rounded-full bg-#1677ff/20 animate-ping"
          ></div>

          <div
            class="relative h-full w-full rounded-full shadow-[0_10px_30px_rgba(22,119,255,0.35)] transition-all duration-300 group-hover:scale-110"
          >
            <img
              :src="icon"
              class="h-full w-full rounded-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </Transition>

    <!-- 聊天窗口 -->
    <Transition name="assistant-dialog">
      <div
        v-if="isOpen"
        class="fixed right-110px top-50% z-9999 h-80vh w-420px translate-y-[-50%] overflow-hidden rounded-28px border border-white/40 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl"
      >
        <!-- 背景 -->
        <div
          class="absolute left-0 top-0 h-180px w-full bg-[linear-gradient(180deg,#1677ff_0%,#4da3ff_100%)]"
        ></div>

        <!-- Header -->
        <div class="relative z-10 px-26px pb-18px pt-24px text-white">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-14px">
              <div
                class="h-54px w-54px rounded-full border border-white/20 bg-white/15 backdrop-blur-md flex-center"
              >
                <img
                  :src="icon"
                  class="h-38px w-38px object-contain rounded-full overflow-hidden"
                  alt=""
                />
              </div>

              <div>
                <div class="text-22px font-700 tracking-[0.5px]">
                  智能助手
                </div>

                <div class="mt-6px flex items-center gap-6px text-13px">
                  <div
                    class="h-8px w-8px rounded-full bg-#4ade80 shadow-[0_0_12px_#4ade80]"
                  ></div>

                  <span class="text-white/90">在线服务中</span>
                </div>
              </div>
            </div>

            <div
              class="h-36px w-36px cursor-pointer rounded-full bg-white/10 text-22px transition-all duration-300 flex-center hover:bg-white/20"
              @click="toggleAssistant"
            >
              ×
            </div>
          </div>
        </div>

        <!-- 内容 -->
        <div
          class="relative z-10 flex h-[calc(100%-110px)] flex-col rounded-t-28px bg-white"
        >
          <!-- 消息区域 -->
          <div
            ref="messageRef"
            class="flex-1 overflow-y-auto px-20px py-20px"
          >
            <div
              v-for="item in messages"
              :key="item.id"
              class="mb-18px flex"
              :class="item.type === 'user' ? 'justify-end' : 'justify-start'"
            >
              <!-- AI -->
              <template v-if="item.type === 'assistant'">
                <div class="flex max-w-full gap-10px">
                  <!-- <div
                    class="h-38px w-38px flex-shrink-0 rounded-full bg-[linear-gradient(135deg,#36cfff_0%,#1677ff_100%)] shadow-md flex-center"
                  > -->
                    <img
                      :src="icon"
                      class="h-38px w-38px object-contain  rounded-full overflow-hidden"
                      alt=""
                    />
                  <!-- </div> -->

                  <div>
                    <div
                      class="max-w-280px rounded-18px rounded-tl-none bg-#f3f7ff px-16px py-14px text-14px leading-24px text-#334155"
                    >
                      <!-- {{ item.content }} -->
                      <MarkdownView :content="item.content" />
                    </div>

                    <div class="mt-6px text-12px text-#94a3b8">
                      {{ item.time }}
                    </div>
                  </div>
                </div>
              </template>

              <!-- 用户 -->
              <template v-else>
                <div>
                  <div
                    class="max-w-280px rounded-18px rounded-tr-none bg-[linear-gradient(135deg,#1677ff_0%,#4096ff_100%)] px-16px py-14px text-14px leading-24px text-white shadow-md"
                  >
                    {{ item.content }}
                  </div>

                  <div class="mt-6px text-right text-12px text-#94a3b8">
                    {{ item.time }}
                  </div>
                </div>
              </template>
            </div>
          </div>

          <!-- 快捷问题 -->
          <div class="px-20px">
            <div class="mb-14px flex flex-wrap gap-10px">
              <div
                v-for="item in quickQuestions"
                :key="item"
                class="cursor-pointer rounded-full border border-#dbeafe bg-#f8fbff px-14px py-7px text-12px text-#3b82f6 transition-all duration-300 hover:border-#1677ff hover:bg-#1677ff hover:text-white"
                @click="selectQuestion(item)"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <!-- 输入框 -->
          <div class="border-t border-#eef2ff p-18px">
            <div
              class="overflow-hidden rounded-22px border border-#dbe7ff bg-#f8fbff transition-all duration-300 focus-within:border-#1677ff focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(22,119,255,0.08)]"
            >
              <textarea
                v-model="inputText"
                placeholder="请输入你的问题..."
                class="max-h-140px min-h-10px w-full resize-none border-none bg-transparent px-18px py-16px text-14px leading-24px text-#334155 outline-none"
                @keydown="handleKeydown"
              >
              </textarea>

              <div
                class="flex items-center justify-between border-t border-#edf2ff px-14px py-12px"
              >
                <div class="text-12px text-#94a3b8">
                  Enter 发送 · Shift + Enter 换行
                </div>

                <button
                  class="group h-46px w-46px rounded-16px bg-[linear-gradient(135deg,#1677ff_0%,#4096ff_100%)] text-white shadow-[0_10px_20px_rgba(22,119,255,0.25)] transition-all duration-300 flex-center hover:scale-105 hover:shadow-[0_16px_30px_rgba(22,119,255,0.35)] active:scale-95"
                  @click="sendMessage"
                  :class="[
              generating
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer'
            ]"
                >
                  <Icon
                    icon="mingcute:send-fill"
                    class="text-20px transition-transform duration-300 group-hover:translate-x-1px"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.assistant-float-enter-active,
.assistant-float-leave-active,
.assistant-dialog-enter-active,
.assistant-dialog-leave-active {
  transition: all 0.3s ease;
}

.assistant-float-enter-from,
.assistant-float-leave-to {
  opacity: 0;
  transform: translateY(-50%) scale(0.8);
}

.assistant-dialog-enter-from,
.assistant-dialog-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(20px);
}

/* 滚动条 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background: rgb(148 163 184 / 40%);
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}
</style>