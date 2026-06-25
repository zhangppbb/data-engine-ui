<template>
  <!-- 顶部导航栏 -->
  <LoginModal />
  
  <header class="fixed left-0 top-0 z-100 h-76px w-full border-solid border-1px border-[rgba(0,0,0,0.06)] bg-#F7F8FA">
    <div class="max-w-1440px mx-auto flex justify-between items-center h-full">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/index" class="flex items-center">
          <!-- <div class="w-24px h-24px bg-accent-gradient flex items-center justify-center shadow-glow-sm rounded-4px">
            <Icon icon="fa-solid:dog" class="text-void-900 text-lg" />
          </div> -->
          <img src="~@/assets/imgs/logo.png" class="h-30px" alt="">
          <div class="flex ml-8px">
            <span class="text-16px text-#000 font-bold">数擎</span>
            <span class="w-1px h-24px bg-[rgba(0,0,0,0.06)] mx-8px"></span>
            <span class="text-[rgba(0,0,0,0.85)]">聚数成擎，洞见未来</span>
          </div>
        </router-link>
      </div>

      <!-- 主导航 -->
      <nav class="hidden md:flex font-medium flex-1 justify-center text-18px gap-60px">
        <router-link
          to="/index"
          :class="[
            'relative group transition-colors text-#222',
            route.path === '/index' ? 'text-brandColor! font-semibold' : 'hover:text-brandColor'
          ]"
        >
          首页
        </router-link>
        <router-link
          to="/apps/list"
          :class="[
            'relative group transition-colors   text-#222',
            route.path.startsWith('/apps') ? 'text-brandColor! font-semibold' : 'hover:text-brandColor'
          ]"
        >
          应用馆
        </router-link>
        <router-link
          to="/resources/list"
          :class="[
            'relative group transition-colors   text-#222',
            route.path.startsWith('/resources') ? 'text-brandColor! font-semibold' : 'hover:text-brandColor'
          ]"
        >
          资源馆
        </router-link>
        <router-link
          to="/cases/list"
          :class="[
            'relative group transition-colors   text-#222',
            route.path.startsWith('/case') ? 'text-brandColor! font-semibold' : 'hover:text-brandColor'
          ]"
        >
          案例馆
        </router-link>
      </nav>

      <!-- 右侧功能区 -->
      <div class="flex items-center">
        <div
          v-if="isLoggedIn"
          class="hover:text-brandColor text-18px hover:font-600 mr-20px cursor-pointer"
          :class="route.path.startsWith('/workspace') ? 'text-brandColor font-600' : 'text-[#222]'"
          @click="() => { router.push('/workspace') }"
        >工作空间</div>

        <!-- 未登录状态：显示登录/注册按钮 -->
        <div v-if="!isLoggedIn" class="flex items-center  cursor-pointer">
          <el-button
            class="text-sm font-medium text-[rgba(0,0,0,0.65)] hover:text-brandColor transition-colors"
            @click="openLogin"
            plain
            style="--el-button-text-color: var(--brand-color);--el-button-border-color: var(--brand-color);"
          >
            登录
          </el-button>
        </div>

        <!-- 已登录状态：显示用户头像下拉菜单 -->
        <div v-else class="relative" ref="userMenuRef">
          <button
            class="flex items-center gap-2 focus:outline-none"
            @click.stop="toggleUserMenu"
          >
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-green flex items-center justify-center">
              <span class="text-void-900 font-bold">{{ getUserInitial() }}</span>
            </div>
          </button>

          <!-- 下拉菜单 -->
          <div
            v-show="showUserMenu"
            class="absolute right-0 mt-2 w-80 glass-panel-base rounded-xl p-4 border border-white/10 shadow-lg z-[99999]"
          >
            <!-- 用户信息 -->
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-green flex items-center justify-center">
                <span class="text-void-900 text-xl font-bold">{{ getUserInitial() }}</span>
              </div>
              <div>
                <div class="text-white font-medium">{{ clientUserInfo?.name || userInfo.nickname }}</div>
                <!-- <div class="flex items-center gap-1 mt-1">
                  <span class="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded-full">{{ clientUserInfo?.userType || 'VIP试用' }}</span>
                </div> -->
              </div>
              <router-link
                to="/profile"
                class="ml-auto text-sm text-aurora-cyan hover:text-aurora-green transition"
                @click="showUserMenu = false"
              >
                进入个人中心 >
              </router-link>
            </div>

            <!-- 客户类型 -->
            <!-- <div class="border-t border-white/10 py-3 mb-3">
              <div class="flex items-center justify-between mb-2">
                <span class="text-slate-400 text-sm">客户类型：</span>
                <span class="text-white font-medium">{{ clientTypeLabel }}</span>
              </div>
              <div class="grid grid-cols-2 gap-2 mt-2">
                <button
                  v-for="type in clientTypes"
                  :key="type.value"
                  :class="[
                    'py-2 px-3 rounded-lg text-sm border transition',
                    clientType === type.value
                      ? 'bg-aurora-cyan/20 border-aurora-cyan/50 text-aurora-cyan'
                      : 'bg-white/5 border-white/10 hover:border-aurora-cyan/50 hover:bg-aurora-cyan/10 text-white'
                  ]"
                  @click="clientType = type.value"
                >
                  {{ type.label }}
                </button>
              </div>
            </div> -->

            <!-- 点数 -->
            <div class="border-t border-white/10 py-3 mb-3">
              <div class="flex items-center justify-between mb-2">
                <span class="text-slate-400 text-sm">剩余点数：</span>
                <span class="text-aurora-green font-bold">{{ formatNumber(clientUserInfo?.remainAmount) }}</span>
              </div>
              <!-- <button class="w-full py-2 rounded-lg bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30 hover:bg-aurora-cyan/30 transition text-sm">
                充值
              </button> -->
            </div>

            <!-- 快捷入口 -->
            <!-- <div class="grid grid-cols-3 gap-2 mb-4">
              <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                <Icon icon="ep:download" class="text-aurora-cyan mb-1" />
                <span class="text-xs text-slate-300">下载记录</span>
              </a>
              <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                <Icon icon="ep:clock" class="text-aurora-cyan mb-1" />
                <span class="text-xs text-slate-300">浏览历史</span>
              </a>
              <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                <Icon icon="ep:heart" class="text-aurora-cyan mb-1" />
                <span class="text-xs text-slate-300">我的关注</span>
              </a>
            </div> -->
            <!-- <div class="grid grid-cols-3 gap-2">
              <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                <Icon icon="ep:office-building" class="text-aurora-cyan mb-1" />
                <span class="text-xs text-slate-300">我的企业</span>
              </a>
              <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                <Icon icon="ep:shopping-cart" class="text-aurora-cyan mb-1" />
                <span class="text-xs text-slate-300">我的订单</span>
              </a>
              <a href="#" class="flex flex-col items-center p-2 rounded-lg hover:bg-white/5 transition">
                <Icon icon="ep:document" class="text-aurora-cyan mb-1" />
                <span class="text-xs text-slate-300">我的发票</span>
              </a>
            </div> -->

            <!-- 底部链接 -->
            <div class="border-t border-white/10 mt-4 pt-4 flex justify-between">
              <div></div>
              <!-- <a href="#" class="text-sm text-slate-400 hover:text-white transition">客服中心</a>
              <a href="#" class="text-sm text-slate-400 hover:text-white transition">我的反馈</a> -->
              <a href="#" class="text-sm text-slate-400 hover:text-white transition" @click.prevent="handleLogout">退出登录</a>
            </div>
          </div>
        </div>

        <router-link
          v-if="isLoggedIn"
          to="/workspace"
          class="text-14px ml-8px font-medium hover:text-brandColor transition-colors hidden md:block text-[rgba(0,0,0,0.65)]"
        >
          {{ clientUserInfo?.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ElMessageBox } from 'element-plus'
import Icon from '@/components/Icon/src/Icon.vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import LoginModal from '@/components/LoginModal/LoginModal.vue'

const route = useRoute()
const userStore = useUserStore()

// 用户菜单显示状态
const showUserMenu = ref(false)
const userMenuRef = ref<HTMLElement | null>(null)

// 登录状态
const isLoggedIn = computed(() => userStore.getIsLoggedIn)
const userInfo = computed(() => userStore.getUser)
const clientUserInfo = computed(() => userStore.getClientUserInfo)

// 切换用户菜单
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

// 点击外部关闭菜单
const handleClickOutside = (event: MouseEvent) => {
  if (userMenuRef.value && !userMenuRef.value.contains(event.target as Node)) {
    showUserMenu.value = false
  }
}

// 打开登录弹窗
const openLogin = () => {
  userStore.openLoginDialog()
}

// 打开注册弹窗
const openRegister = () => {
  userStore.openRegisterDialog()
}

// 退出登录
const handleLogout = () => {
  ElMessageBox.confirm('确定要退出登录吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    userStore.loginOut()
    showUserMenu.value = false
    window.location.href = '/'
  }).catch(() => {})
}

// 获取用户头像首字母
const getUserInitial = () => {
  return userInfo.value.nickname?.charAt(0)?.toUpperCase() || 'U'
}

/**
 * 数字格式化：千分位
 */
const formatNumber = (num: number | undefined | null): string => {
  if (num === undefined || num === null) return '0'
  return num.toLocaleString('zh-CN')
}

// 客户类型
const clientType = ref('investment')
const clientTypes = [
  { value: 'investment', label: '投资类客户' },
  { value: 'market', label: '市场类客户' },
  { value: 'enterprise', label: '企业类客户' },
  { value: 'government', label: '政府类客户' }
]

const clientTypeLabel = computed(() => {
  const type = clientTypes.find(t => t.value === clientType.value)
  return type?.label || '投资类客户'
})

// 生命周期
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped lang="scss">

.bg-void-900\/80 {
  background-color: rgb(2 4 10 / 80%);
}
</style>
