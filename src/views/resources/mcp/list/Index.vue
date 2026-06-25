<template>
  <div class="min-h-screen bg-#f5f7fa">
  <el-dialog
    v-model="dialogVisible"
    title="终本案件"
    width="1200px"
    append-to-body
  >
   
  <div class="pb-32px">
    <div class="text-[rgba(0,0,0,0.40)] text-16px mb-20px">get_terminated_cases</div>
      <div class="text-16px p-20px rounded-8px border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(191,191,191,0.1)]">
         <div>{</div>

        <div class="pl-20px">
          <div>
            <span class="text-#37C532">"企业名称"</span>
            <span class="mx-8px text-white">:</span>
            <span class="text-brandColor">"企查查科技股份有限公司"</span>,
          </div>

          <div class="mt-8px">
            <span class="text-#37C532">"搜索结果"</span>
            <span class="mx-8px text-white">:</span>
            <span class="text-brandColor">
              "经企查查底层数据库全量核查实体企查查科技股份有限公司..."
            </span>
          </div>
        </div>

        <div>}</div>
      </div>
      <div class="flex bg-[rgba(55,197,50,0.05)] text-#8F99B text-16px mt-20px items-center p-20px py-16px border border-solid border-[rgba(55,197,50,0.5)] rounded-8px">
        <div class="w-18px h-18px bg-#fff border border-solid border-#FF7532 rounded-50% flex-center rounded-50% mr-6px text-#FF7532">?</div><div class="text-#FF7532">数据说明：</div><div class="ml-6px text-[rgba(0,0,0,0.4)]">以上示例数据仅用于展示 MCP 工具返回字段结构，实际调用 MCP 将返回最新数据，以 MCP 实际返回为准。</div>
      </div>
  </div>
  </el-dialog>

    <!-- 页面主体 -->
    <div class="mx-auto mt-20px max-w-1440px">
      <!-- 标题 -->
      <div class="mb-20px rounded-8px flex-center flex-col bg-#fff py-20px">
        <div class="bg-gradient-to-r from-#004898 via-#2f74ff to-#05D7F6 bg-clip-text text-transparent text-30px font-600">
          数擎 MCP · 67 个原子工具
        </div>
        <div class="mt-12px text-16px text-#8F99B7">
          大Server，覆盖中国企业全维度数据，
        </div>


         <!-- 信息栏 -->
        <div class="flex flex-wrap items-center gap-12px text-14px text-#666 font-500 mt-32px">
            <div class="flex items-center h-30px bg-[rgba(191,191,191,0.15)] rounded-15px px-20px">
            <span class="text-#999">数据版本：</span>
            <span class="text-#222">2026-04-10</span>
            </div>
            <div class="flex items-center h-30px bg-[rgba(191,191,191,0.15)] rounded-15px px-20px">
            <span class="text-#999">本次新增：</span>
            <span class="text-#FF7532">2个工具</span>
            </div>
            <div class="flex items-center h-30px bg-[rgba(191,191,191,0.15)] rounded-15px px-20px">
            <span class="text-#999">T+0：</span>
            <span class="text-#222">实时数据</span>
            </div>
            <div class="flex items-center h-30px bg-[rgba(191,191,191,0.15)] rounded-15px px-20px">
            <el-icon color="var(--brand-color)"><Key /></el-icon>
            <span class="text-brandColor ml-8px">YOUR_API_KEY</span>
        </div>
      </div>

      </div>

      <!-- 工具分类卡片列表 -->
      <div class="mb-20px grid grid-cols-2 gap-20px lg:grid-cols-2">
        <div
          v-for="category in toolCategories"
          :key="category.serverName"
          class="rounded-8px bg-white p-20px shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02),_0px_1px_6px_-1px_rgba(0,0,0,0.02),_0px_1px_2px_0px_rgba(0,0,0,0.03)]"
        >
          <!-- 分类标题 -->
          <div class="flex items-center justify-between">
            <div class="text-14px font-400" :class="category.color">
              {{ category.title }}
            </div>
            <div :class="category.tagClass" class="text-12px border border-solid px-12px h-24px leading-24px rounded-14px">{{ category.toolCount }}</div>
          </div>

          <div class="text-18px font-600 mb-16px">
            {{ category.serverName }}
          </div>

          <!-- 名称 -->
          <div class="text-#BFBFBF text-12px mb-12px ">{{ category.name }}</div>

          <!-- 描述 -->
          <div class="text-#444 text-16px mb-20px min-h-36px">{{ category.description }}</div>

          <!-- 标签 -->
          <div class="flex flex-wrap gap-8px">
            <span
              v-for="tag in category.tags"
              :key="tag"
              class="rounded-4px bg-[rgba(143,153,183,.1)] px-8px text-12px text-#8F99B7 h-24px leading-24px"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div class="mb-20px rounded-8px bg-#fff p-20px">
        <div class="flex items-center mb-20px">
          <el-input
            placeholder="搜索工具名称或功能描述"
            :prefix-icon="Search"
            style="width: 360px;"
            :style="{
              '--el-input-border-radius': '20px',
              '--el-input-bg-color': '#fff'
            }"
            size="large"
          />
          <el-radio-group style="--el-text-color-regular: #666;--el-fill-color-blank: #fff;"
            v-model="activeCategory"
            size="large"
            class="ml-20px"
            fill="var(--brand-color)"
          >
            <el-radio-button
              v-for="item in categories"
              :key="item.name"
              :label="`${item.name} ${item.count}`"
              :value="item.name"
            />
          </el-radio-group>
        </div>


        <div class="grid grid-cols-2 gap-20px lg:grid-cols-3">
          <div
            v-for="(category, index) in filterTools"
            :key="category.name + index"
            class="relative
          overflow-hidden
          rounded-32px cursor-pointer
          bg-white
          shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02),_0px_1px_6px_-1px_rgba(0,0,0,0.02),_0px_1px_2px_0px_rgba(0,0,0,0.03)]
          border border-solid border-l-4px border-[rgba(143,153,183,0.1)] p-20px
          " :class="category.style"
          @click="() => dialogVisible = true">

            <!-- 输出 -->
            <div class="mb-20px flex justify-between">
              <!-- 名称 -->
              <div class="text-18px font-600">{{ category.name }}</div>

              <div :class="category.tagClass" class="text-16px justify-center cursor-pointer font-500 flex items-center w-128px h-40px rounded-32px border border-solid">
                <el-icon class="mr-8px" size="16px"><CaretRight /></el-icon>
                <div>示例输出</div>
              </div>
            </div>

            <!-- ID -->
            <div class="text-#BFBFBF text-12px mb-12px ">{{ category.id }}</div>
            
            <!-- 分类描述 -->
            <div class="text-#444 text-16px min-h-36px">{{ category.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CaretRight, Key, Search } from '@element-plus/icons-vue'

const dialogVisible = ref(false)

/**
 * 面包屑数据
 */
/**
 * MCP 原始数据
 */
import mcpJson from '../mockData'

/**
 * 当前选中的分类
 */
const activeCategory = ref('全部')

/**
 * 分类中文映射
 */
const categoryMap: Record<string, string> = {
  '企业基座 Server': '企业基座',
  '风控大脑 Server': '风控大脑',
  '知产引擎 Server': '知产引擎',
  '经营罗盘 Server': '经营罗盘',
  '历史存档 Server': '历史存档',
  '董监高画像 Server': '董监高画像'
}

/**
 * 分类颜色配置
 */
const categoryStyleMap: Record<string, any> = {
  企业基座: {
    color: 'text-#37C532',
    border: 'border-l-#37C532',
    tagClass: 'bg-[rgba(55,197,50,0.1)] border-[#37C532] text-#37C532'
  },
  风控大脑: {
    color: 'text-#FF4332',
    border: 'border-l-#FF4332',
    tagClass: 'bg-[rgba(255,67,50,0.1)] border-[#FF4332] text-#FF4332'
  },
  知产引擎: {
    color: 'text-#006BFD',
    border: 'border-l-#006BFD',
    tagClass: 'bg-[rgba(0,107,253,0.1)] border-[#006BFD] text-#006BFD'
  },
  经营罗盘: {
    color: 'text-#FF7532',
    border: 'border-l-#FF7532',
    tagClass: 'bg-[rgba(255,117,50,0.1)] border-[#FF7532] text-#FF7532'
  },
  历史存档: {
    color: 'text-#A55FEB',
    border: 'border-l-#A55FEB',
    tagClass: 'bg-[rgba(165,95,235,0.1)] border-[#A55FEB] text-#A55FEB'
  },
  董监高画像: {
     color: 'text-#006BFD',
    border: 'border-l-#006BFD',
    tagClass: 'bg-[rgba(0,107,253,0.1)] border-[#006BFD] text-#006BFD'
  }
}

/**
 * 分类统计
 */
const categories = computed(() => {
  const result = [
    {
      name: '全部',
      count: mcpJson.length
    }
  ]

  Object.keys(categoryMap).forEach((key) => {
    result.push({
      name: categoryMap[key],
      count: mcpJson.filter((item) => item.mcpServer === key).length
    })
  })

  return result
})

/**
 * 当前选择
 */
const val = ref(`全部 ${mcpJson.length}`)

/**
 * 工具分类数据
 */
const toolCategories = computed(() => {
  const map = new Map()

  mcpJson.forEach((item) => {
    if (!map.has(item.mcpServer)) {
      const categoryName = categoryMap[item.mcpServer]
      const style = categoryStyleMap[categoryName]

      map.set(item.mcpServer, {
        title: categoryName,
        serverName: item.mcpServer,
        serverCode: item.mcpName,
        toolCount: '0个工具',
        description: item.mcpDescription,
        tags: item.tags || [],
        color: style.color,
        tagClass: style.tagClass,
        count: 0
      })
    }

    map.get(item.mcpServer).count++
  })

  return Array.from(map.values()).map((item) => ({
    ...item,
    toolCount: `${item.count}个工具`
  }))
})

/**
 * 工具列表
 */
const tools = computed(() => {
  return mcpJson.map((item) => {
    const category = categoryMap[item.mcpServer]
    const style = categoryStyleMap[category]

    return {
      category,
      name: item.toolName,
      id: item.toolNameEn,
      description: item.toolDescription,
      api: item.apiInterface,
      table: item.tableName,
      style: style.border,
      tagClass: style.tagClass
    }
  })
})

/**
 * 当前分类工具
 */
const filterTools = computed(() => {
  if (activeCategory.value === '全部') {
    return tools.value
  }

  return tools.value.filter(
    (item) => item.category === activeCategory.value
  )
})

/**
 * 分类切换
 */
const handleCategory = (name: string) => {
  activeCategory.value = name

  const current = categories.value.find((v) => v.name === name)

  val.value = `${name} ${current?.count || 0}`
}
</script>
