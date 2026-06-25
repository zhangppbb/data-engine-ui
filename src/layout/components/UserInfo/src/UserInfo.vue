<script lang="ts" setup>
import { ElMessageBox,ElNotification } from 'element-plus'

import avatarImg from '@/assets/imgs/avatar.gif'
import { useDesign } from '@/hooks/web/useDesign'
import { useTagsViewStore } from '@/store/modules/tagsView'
import { useUserStore } from '@/store/modules/user'
import LockDialog from './components/LockDialog.vue'
import LockPage from './components/LockPage.vue'
import { useLockStore } from '@/store/modules/lock'

defineOptions({ name: 'UserInfo' })

const { t } = useI18n()

const { push, replace } = useRouter()

const userStore = useUserStore()

const tagsViewStore = useTagsViewStore()

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('user-info')

const avatar = computed(() => userStore.user.avatar || avatarImg)
const userName = computed(() => userStore.user.nickname ?? 'Admin')

// 锁定屏幕
const lockStore = useLockStore()
const getIsLock = computed(() => lockStore.getLockInfo?.isLock ?? false)
const dialogVisible = ref<boolean>(false)
const lockScreen = () => {
  dialogVisible.value = true
}

const loginOut = async () => {
  try {
    await ElMessageBox.confirm(t('common.loginOutMessage'), t('common.reminder'), {
      confirmButtonText: t('common.ok'),
      cancelButtonText: t('common.cancel'),
      type: 'warning'
    })
  } catch {
    return // 用户取消
  }
  // 退出登录接口不管成功失败，都清空数据并强制跳转首页
  try { await userStore.loginOut() } catch {}
  tagsViewStore.delAllViews()
  window.location.href = window.location.origin + '/welcome'
}
const toProfile = async () => {
  push('/user/profile')
}

// 角色列表
const roles = computed(() => {
  const list = userStore.getRoles
  return Array.isArray(list) ? list : []
})

// 目标角色
const TARGET = new Set(['super_admin', 'manager_company', 'manager'])

// 关键：组件内部封装权限判断
const hasManagePermission = computed(() =>
  roles.value.some((r: any) => TARGET.has(r.code))
)

const toMange =()=>{
  if (hasManagePermission.value) {
    // window.open(window.location.origin +'/lzweb/portal/index.html#/login')
    window.location.href = `${window.location.origin}/lzweb/portal/index.html#/sub/industryChain/homePage/list?suitKey=industryChain&appTitle=%E9%A6%96%E9%A1%B5`
    return
  }else{
     ElNotification.error('您没有权限访问产业链管理')
     return
  }
}
</script>

<template>
  <ElDropdown class="custom-hover" :class="prefixCls" trigger="click">
    <div class="flex items-center">
      <ElAvatar :src="avatar" alt="" :size="30" />
      <span class="pl-[5px] text-14px text-[var(--top-header-text-color)] <lg:hidden">
        {{ userName }}
      </span>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem>
          <Icon icon="ep:tools" />
          <div @click="toProfile">{{ t('common.profile') }}</div>
        </ElDropdownItem>
        <!-- <ElDropdownItem divided>
          <Icon icon="ep:lock" />
          <div @click="lockScreen">{{ t('lock.lockScreen') }}</div>
        </ElDropdownItem> -->
        <ElDropdownItem v-if="hasManagePermission">
          <Icon icon="ep:menu" />
          <div @click="toMange">产业链管理</div>
        </ElDropdownItem>
        <ElDropdownItem divided @click="loginOut">
          <Icon icon="ep:switch-button" />
          <div>{{ t('common.loginOut') }}</div>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>

  <LockDialog v-if="dialogVisible" v-model="dialogVisible" />

  <teleport to="body">
    <transition name="fade-bottom" mode="out-in">
      <LockPage v-if="getIsLock" />
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.fade-bottom-enter-active,
.fade-bottom-leave-active {
  transition:
    opacity 0.25s,
    transform 0.3s;
}

.fade-bottom-enter-from {
  opacity: 0;
  transform: translateY(-10%);
}

.fade-bottom-leave-to {
  opacity: 0;
  transform: translateY(10%);
}
</style>
