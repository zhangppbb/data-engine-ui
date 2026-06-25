
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash-es'
import router from '@/router'
import icon1 from './assets/images/icon1.png'
import icon2 from './assets/images/icon2.png'
import icon3 from './assets/images/icon3.png'
import icon4 from './assets/images/icon4.png'
import icon5 from './assets/images/icon5.png'
import AIAssistant from '@/components/AIAssistant/src/AIAssistant.vue'
import { Search, Loading } from '@element-plus/icons-vue'
import { ZONE_CODE } from '@/constants/zone'
import { fetchSmartSearch, getConversationId, SearchResponse, SearchResultItem } from '@/api/ai/search'

/**
 * 热门搜索
 */
const hotKeywords = [
  {
    name: '市场分析报告',
    id: 1
  },
  {
    name: '区域信息分析',
    id: 4
  },
  {
    name: '迁入迁出云图',
    id: 5
  },
  {
    name: '企业综合信用评价',
    id: 8
  }
];

/**
 * 身份卡片 // 系统内置专区
 */
const roleList = [
  {
    title: '投资类客户',
    desc: '企业征信·风险分析',
    icon: '📈',
    zoneCode: ZONE_CODE.INVESTMENT_ZONE,
    active: true
  },
  {
    title: '市场类客户',
    desc: '市场洞察·竞争分析',
    icon: '🏪',
    zoneCode: ZONE_CODE.INVESTMENT_ZONE,
    active: false
  },
  {
    title: '企业类客户',
    desc: '工商信息·合规审查',
    icon: '🏢',
    zoneCode: ZONE_CODE.INVESTMENT_ZONE,
    active: false
  },
  {
    title: '政府类客户',
    desc: '产业招商·区域经济',
    icon: '🏛️',
    zoneCode: ZONE_CODE.INVESTMENT_ZONE,
    active: false
  }
];

/**
 * 合作伙伴
 */
const partnerList = [
  {
    name: '企查查',
    icon: icon1
  },
  {
    name: '天眼查',
    icon: icon2
  },
  {
    name: '大司空',
    icon: icon3
  },
  {
    name: '中指云',
    icon: icon4
  },
  {
    name: 'Win.d',
    icon: icon5
  }
];

const keyword = ref('')
const searchResults = ref<SearchResponse | null>(null)
const searchLoading = ref(false)
const showSearchPanel = ref(false)
const searchInputRef = ref<HTMLElement | null>(null)
const searchPanelRef = ref<HTMLElement | null>(null)

const appId = 'ae6e55b4-4cbf-4f39-8dc0-92ef15e1b3b4'
const departmentId = 'ea48cafaeb9245c7a10e87c7c0be9555'

const parseSearchContent = (content: string): Partial<SearchResultItem> => {
  const result: Partial<SearchResultItem> = {}
  
  const nameMatch = content.match(/【名称】([^【]+)/)
  if (nameMatch) result.name = nameMatch[1].trim()
  
  const shortDescMatch = content.match(/【短描述】([^【]+)/)
  if (shortDescMatch) result.short_desc = shortDescMatch[1].trim()
  
  const longDescMatch = content.match(/【长描述】([^【]+)/)
  if (longDescMatch) result.long_desc = longDescMatch[1].trim()
  
  const tagsMatch = content.match(/【标签】([^【]+)/)
  if (tagsMatch) result.tags = tagsMatch[1].split('、').map(t => t.trim()).filter(Boolean)
  
  const categoryMatch = content.match(/【分类】([^【]+)/)
  if (categoryMatch) result.category = categoryMatch[1].trim()
  
  const scenariosMatch = content.match(/【适用场景】([^【]+)/)
  if (scenariosMatch) result.scenarios = scenariosMatch[1].split(/\d+\./).map(s => s.trim()).filter(Boolean)
  
  const linkMatch = content.match(/【链接】([^【]+)/)
  if (linkMatch) result.link = linkMatch[1].trim()
  
  return result
}

const handleSearch = async () => {
  if (!keyword.value.trim()) {
    showSearchPanel.value = false
    return
  }
  
  searchLoading.value = true
  showSearchPanel.value = true
  
  try {
    const conversationId = await getConversationId({
      app_id: appId,
      department_id: departmentId
    })

    const result = await fetchSmartSearch({
      app_id: appId,
      department_id: departmentId,
      query: keyword.value,
      stream: false,
      conversation_id: conversationId
    })

    if (result.answer) {
      const answer = JSON.parse(result.answer)
      const items =  answer?.items || []
      items.forEach(item => {
        const parsed = parseSearchContent(item.content)
        Object.assign(item, parsed)
      })

      searchResults.value = answer
      showSearchPanel.value = true
    }
   
  } catch (error) {
    console.error('搜索失败:', error)
    searchResults.value = null
    showSearchPanel.value = false
  } finally {
    searchLoading.value = false
  }
}

const handleItemClick = (item: SearchResultItem) => {
  if (item.link) {
    window.open(item.link, '_blank')
  }
  showSearchPanel.value = false
}

const debouncedSearch = debounce(() => {
  handleSearch()
}, 500)

const handleScroll = () => {
  showSearchPanel.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  
  if (searchPanelRef.value && !searchPanelRef.value.contains(target) && 
      searchInputRef.value && !searchInputRef.value.contains(target)) {
    showSearchPanel.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})

const getTypeIcon = (type: string): string => {
  const iconMap: Record<string, string> = {
    app: 'ep:monitor',
    case: 'ep:document',
    api: 'ep:connection'
  }
  return iconMap[type] || 'ep:document'
}

const getTypeLabel = (type: string): string => {
  const labelMap: Record<string, string> = {
    app: '应用',
    case: '案例',
    api: 'API'
  }
  return labelMap[type] || type
}

const getTypeBgClass = (type: string): string => {
  const classMap: Record<string, string> = {
    app: 'bg-[#004898]/10',
    case: 'bg-[#67c23a]/10',
    api: 'bg-[#e6a23c]/10'
  }
  return classMap[type] || 'bg-[#f0f0f0]'
}

const getTypeColorClass = (type: string): string => {
  const classMap: Record<string, string> = {
    app: 'text-[#004898]',
    case: 'text-[#67c23a]',
    api: 'text-[#e6a23c]'
  }
  return classMap[type] || 'text-[#666]'
}

const getTypeTagClass = (type: string): string => {
  const classMap: Record<string, string> = {
    app: 'bg-[#004898]/10 text-[#004898]',
    case: 'bg-[#67c23a]/10 text-[#67c23a]',
    api: 'bg-[#e6a23c]/10 text-[#b8860b]'
  }
  return classMap[type] || 'bg-[#f0f0f0] text-[#666]'
}

const formatContent = (content: string): string => {
  return content
    .replace(/【名称】/g, '<span class="font-600 text-[#333]">名称：</span>')
    .replace(/【短描述】/g, '<span class="font-600 text-[#333]">描述：</span>')
    .replace(/【长描述】/g, '<span class="font-600 text-[#333]">详情：</span>')
    .replace(/【标签】/g, '<span class="font-600 text-[#333]">标签：</span>')
    .replace(/【分类】/g, '<span class="font-600 text-[#333]">分类：</span>')
    .replace(/【适用场景】/g, '<span class="font-600 text-[#333]">适用场景：</span>')
    .replace(/【链接】/g, '<span class="font-600 text-[#333]">链接：</span>')
    .replace(/\n/g, '<br>')
}
</script>

<template>
  <div class="">
    <!-- banner -->
    <section class="relative h-520px md:h-640px overflow-hidden bg-#EDF7FE">
      <!-- 视频背景 -->
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="absolute w-1920px h-full inset-0 left-50% translate-x-[-50%] top-60px md:top-120px object-cover"
      >
        <source :src="`/static/videos/banner-video.mp4?t=${Date.now()}`" type="video/mp4" />
      </video>

      <!-- 内容 -->
      <div
        class="relative z-10 mx-auto max-w-1240px px-16px md:px-40px pt-60px md:pt-80px text-center"
      >
        <!-- 搜索 -->
        <!-- <div
          class="mx-auto flex h-50px md:h-60px w-full max-w-980px rounded-full border border-solid border-brandColor bg-white"
          data-aos="fade-down"
        >
          <input
            placeholder='输入自然语言需求，如“查询公司风险并生成报告”'
            class="flex-1 px-16px md:px-30px text-14px md:text-16px outline-none rounded-full"
            style="border: none;"
          />

          <div
            class="w-120px md:w-260px font-600 shrink-0 cursor-pointer flex-center bg-brandColor text-16px md:text-20px text-white rounded-full transition-all duration-300 hover:opacity-90"
          >
            <Icon icon="ep:search" class="mr-8px md:mr-14px" />
            智能搜索
          </div>
        </div> -->
       <div class="relative mx-auto flex h-50px md:h-60px w-full max-w-980px" data-aos="fade-down" ref="searchInputRef">
        <el-input
          placeholder='输入自然语言需求，如“查询公司风险并生成报告”'
          class="search-input text-18px"
          :style="{ height: '100%', '--el-input-border-radius': '60px', '--el-fill-color-light': '#fff', '--el-input-border-color': 'var(--brand-color)', padding: '0 32px!important' }"
          v-model="keyword"
          @keyup.enter="handleSearch"
          @input="debouncedSearch"
        >
          <template #append>
            <div
              class="w-120px md:w-260px font-600 shrink-0 cursor-pointer flex-center bg-brandColor text-16px md:text-20px text-white rounded-full transition-all duration-300 hover:opacity-90 h-full"
              :class="{ 'opacity-70 cursor-not-allowed': searchLoading }"
              @click="handleSearch"
            >
              <el-icon v-if="searchLoading" class="mr-8px md:mr-14px animate-spin">
                <Loading />
              </el-icon>
              <Icon v-else icon="ep:search" class="mr-8px md:mr-14px" />
              {{ searchLoading ? '搜索中...' : '智能搜索' }}
            </div>
            </template>
        </el-input>

        <!-- 搜索结果面板 -->
        <Teleport to="body">
          <div
            v-if="showSearchPanel"
            class="search-panel-container fixed left-1/2 top-[220px] -translate-x-1/2 w-full max-w-980px bg-white rounded-20px shadow-[0_8px_40px_rgba(0,72,152,0.15)] z-[9999] overflow-hidden border border-[#e8f0ff]"
            ref="searchPanelRef"
          > 
          <!-- 头部 -->
          <div class="px-24px py-20px bg-gradient-to-r from-[#f8fbff] to-[#fff] border-b border-[#e8f0ff] relative">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-12px">
                <div class="w-36px h-36px rounded-full bg-brandColor flex items-center justify-center">
                  <Icon icon="ep:search" class="w-18px h-18px text-white" />
                </div>
                <div>
                  <div class="text-16px font-600 text-[#333]">
                    智能搜索结果
                    <span class="text-[#999] font-400 ml-8px">({{ searchResults?.items?.length || 0 }}条匹配)</span>
                  </div>
                </div>
              </div>
              <el-icon class="w-24px h-24px text-[#999] cursor-pointer hover:text-[#333] transition-colors" @click="showSearchPanel = false">
                <Close />
              </el-icon>
            </div>

            <!-- AI 回答 -->
            <div v-if="searchResults?.answer" class="mt-16px pl-48px">
              <div class="bg-white rounded-12px border border-[#e8f0ff] p-16px">
                <div class="flex items-center gap-8px mb-8px">
                  <Icon icon="ep:chat-dot-round" class="w-14px h-14px text-brandColor" />
                  <span class="text-12px text-brandColor font-500">AI 智能回答</span>
                </div>
                <div class="text-14px text-[#555] leading-24px">
                  {{ searchResults.answer }}
                </div>
              </div>
            </div>
          </div>
          
          <!-- Loading 状态 -->
          <div v-if="searchLoading" class="py-60px text-center">
            <div class="inline-flex items-center gap-12px px-24px py-12px bg-[#f8fbff] rounded-full">
              <el-icon class="w-20px h-20px text-brandColor is-loading"><Loading /></el-icon>
              <span class="text-14px text-[#666]">正在分析您的需求...</span>
            </div>
          </div>
          
          <!-- 搜索结果列表 -->
          <div v-else-if="searchResults?.items?.length" class="max-h-[600px] overflow-y-auto">
            <div
              v-for="(item, index) in searchResults.items"
              :key="index"
              class="px-24px py-20px border-b border-[#f5f5f5] cursor-pointer hover:bg-gradient-to-r hover:from-[#f8fbff] hover:to-[#fff] transition-all duration-300 group"
              :class="{ 'border-b-0': index === searchResults.items.length - 1 }"
              @click="handleItemClick(item)"
            >
              <div class="flex items-start gap-20px">
                <!-- 类型图标 -->
                <div
                  class="w-52px h-52px rounded-14px flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  :class="getTypeBgClass(item.type)">
                  <Icon
                    :icon="getTypeIcon(item.type)"
                    class="w-26px h-26px"
                    :class="getTypeColorClass(item.type)" />
                </div>
                
                <!-- 内容 -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center flex-wrap gap-10px">
                    <span class="text-17px font-600 text-[#222]">{{ item.name || '未知' }}</span>
                    <span
                      class="px-10px py-4px rounded-full text-12px font-500"
                      :class="getTypeTagClass(item.type)">
                      {{ getTypeLabel(item.type) }}
                    </span>
                    <span v-if="item.category" class="px-10px py-4px rounded-full bg-[#f0f0f0] text-[#666] text-12px">
                      {{ item.category }}
                    </span>
                  </div>
                  
                  <div v-if="item.short_desc" class="mt-10px text-14px text-[#666] leading-22px line-clamp-2">
                    {{ item.short_desc }}
                  </div>
                  
                  <div v-if="item.content" class="mt-10px text-14px text-[#666] leading-22px">
                    <div v-html="formatContent(item.content)"></div>
                  </div>
                  
                  <!-- 标签 -->
                  <div v-if="item.tags?.length" class="mt-12px flex flex-wrap gap-8px">
                    <span
                      v-for="tag in item.tags.slice(0, 4)"
                      :key="tag"
                      class="px-12px py-4px rounded-full bg-[#f5f7fa] text-[#666] text-12px hover:bg-[#e8f0ff] hover:text-brandColor transition-colors"
                    >
                      {{ tag }}
                    </span>
                    <span v-if="item.tags.length > 4" class="px-12px py-4px rounded-full bg-[#f5f7fa] text-[#999] text-12px">
                      +{{ item.tags.length - 4 }}
                    </span>
                  </div>
                  
                  <!-- 适用场景 -->
                  <div v-if="item.scenarios?.length" class="mt-12px flex items-center gap-8px">
                    <span class="text-12px text-[#999]">适用场景：</span>
                    <span class="text-12px text-[#666]">{{ item.scenarios.slice(0, 2).join('、') }}{{ item.scenarios.length > 2 ? '...' : '' }}</span>
                  </div>
                </div>
                
                <!-- 跳转图标 -->
                <div class="w-32px h-32px rounded-full bg-[#f5f5f5] flex items-center justify-center flex-shrink-0 group-hover:bg-brandColor transition-colors">
                  <Icon icon="ep:right" class="w-14px h-14px text-[#999] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          <!-- 空状态 -->
          <div v-else class="py-60px text-center">
            <Icon icon="ep:search" class="w-48px h-48px text-[#dcdfe6] mx-auto mb-16px" />
            <div class="text-14px text-[#999]">暂无匹配结果</div>
            <div class="text-12px text-[#bbb] mt-8px">试试其他关键词</div>
          </div>
          </div>
        </Teleport>
      </div>

        <!-- 热门搜索 -->
        <div
          class="mt-20px flex flex-col md:flex-row items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span class="text-grey4 text-14px md:text-18px mb-12px md:mb-0">
            热门搜索：
          </span>

          <div class="flex flex-wrap justify-center gap-8px">
            <div
              v-for="item in hotKeywords"
              :key="item.id"
              class="cursor-pointer rounded-full border border-solid border-[rgba(0,72,152,0.20)] bg-white px-16px md:px-24px py-8px md:py-12px text-12px md:text-base text-brandColor transition-all duration-300 hover:border-brandColor"
              @click="() => {
                router.push(`/apps/details/${item.id}`)
              }"
              >
              {{ item.name }}
            </div>
          </div>
        </div>

        <!-- 标题 -->
        <div class="mt-60px md:mt-80px" data-aos="zoom-in">
          <div class="text-30px md:text-46px font-600 leading-tight">
            用自然语言
            <span
              class="bg-clip-text text-transparent"
              :style="{
                backgroundImage: `linear-gradient(134deg, #004898 0%, #05D7F6 100%)`,
              }"
            >
              获取完整的数据解决方案
            </span>
          </div>

          <div class="mt-12px px-10px text-14px md:text-16px text-[#8F99B7]">
            输入您的业务需求，智能推荐跨馆（应用、资源、案例）的完整解决方案，实现一步直达
          </div>
        </div>
      </div>
    </section>

    <!-- 底部蓝条 -->
    <div
      class="h-48px md:h-56px leading-48px md:leading-56px w-full text-center bg-brandColor text-white text-14px md:text-16px px-10px"
      data-aos="fade-in"
    >
      支持搜索应用、API、MCP 工具、案例
    </div>

    <!-- 选择身份 -->
    <div
      class="mx-auto max-w-1440px px-16px pb-60px md:pb-100px"
      data-aos="fade-up"
    >
      <div
        class="text-center pb-40px md:pb-60px pt-60px md:pt-100px text-28px md:text-36px font-600"
      >
        请选择您的身份，获取精准推荐
      </div>

      <!-- 卡片 -->
      <div class="flex flex-wrap justify-center gap-20px md:gap-40px">
        <div
          v-for="(item, index) in roleList"
          :key="item.title"
          class="group flex-center flex-col relative w-full max-w-300px md:w-300px cursor-pointer rounded-12px border-2px border-solid border-transparent bg-white p-24px md:p-40px transition-all duration-300 hover:border-brandColor"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          @click="() => {
            router.push(`/apps/zone?zoneCode=${item.zoneCode}`)
          }"
        >
          <!-- icon -->
          <div
            class="mb-20px md:mb-24px h-72px w-72px md:h-88px md:w-88px rounded-24px bg-[#f4f8ff] flex items-center justify-center text-32px md:text-42px"
          >
            {{ item.icon }}
          </div>

          <div class="text-20px md:text-22px font-700 text-[#333]">
            {{ item.title }}
          </div>

          <div class="mt-8px text-14px md:text-16px text-[#999999]">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>

    <!-- AI 助手组件 -->
    <AIAssistant />

    <!-- 合作伙伴 -->
    <section
      class="py-60px md:py-100px"
      data-aos="fade-up"
      :style="{
        background: `radial-gradient(120% 120% at 85% 86%, #edefff 0%, rgba(255,255,255,0.5) 100%),
                     radial-gradient(120% 120% at 3% 55%, #c8e2ff 0%, rgba(255,255,255,0) 100%),
                     linear-gradient(180deg, #ffffff 0%, #c9d6ff 100%)`,
      }"
    >
      <div class="mx-auto max-w-1440px px-16px">
        <div class="text-center text-28px md:text-36px font-600">
          众擎易举，共建生态
        </div>

        <div
          class="mt-50px md:mt-80px flex flex-wrap justify-center gap-16px md:gap-30px"
        >
          <div
            v-for="(item, index) in partnerList"
            :key="item.name"
            class="h-90px w-[calc(50%-8px)] sm:w-180px md:h-120px md:w-220px rounded-8px bg-white flex-center transition-all duration-300 hover:-translate-y-4px cursor-pointer hover:shadow-xl"
            data-aos="zoom-in"
            :data-aos-delay="index * 80"
          >
            <img class="h-36px md:h-50px" :src="item.icon" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
video {
  pointer-events: none;
}
:deep(.el-input-group__append, .el-input-group__prepend) {
  box-shadow: none;
  padding: 0;
  border: 1px solid var(--brand-color);
  border-left: none;
}

:deep(.search-input .el-input__wrapper) {
  box-shadow: none;
  border: 1px solid var(--brand-color);
  border-right: none;
  border-radius: 60px 0 0 60px;
  padding: 0 32px!important;
  font-size: 18px;
}

</style>
