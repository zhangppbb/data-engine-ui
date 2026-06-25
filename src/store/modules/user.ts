import { store } from '@/store'
import { defineStore } from 'pinia'
import { getAccessToken, removeToken } from '@/utils/auth'
import { CACHE_KEY, useCache, deleteUserCache } from '@/hooks/web/useCache'
import { getInfo, loginOut } from '@/api/login'
import { InfraBooleanStringEnum } from '@/utils/constants'

const { wsCache } = useCache()

interface UserVO {
  id: number
  avatar: string
  nickname: string
  mainDeptId: number
}

interface UserInfoVO {
  // USER 缓存
  permissions: PermissionDeptVO[]
  roles: RoleDeptVO[]
  isSetUser: boolean
  user: UserVO
  depts: UserDeptVO[]
}

interface RoleDeptVO {
  code: string
  depts: number[]
}

export interface UserDeptVO {
  deptId: number
  deptName: string
  mainJob: string
}

export interface PermissionDeptVO {
  code: string
  depts: number[]
}

export const useUserStore = defineStore('admin-user', {
  state: (): UserInfoVO & { isLoggedIn: boolean; showLoginDialog: boolean; showRegisterDialog: boolean } => ({
    permissions: [],
    roles: [],
    depts: [],
    isSetUser: false,
    isLoggedIn: false,
    showLoginDialog: false,
    showRegisterDialog: false,
    user: {
      id: 0,
      avatar: '',
      nickname: '',
      mainDeptId: 0
    }
  }),
  getters: {
    getPermissions(): PermissionDeptVO[] {
      return this.permissions
    },
    getRoles(): RoleDeptVO[] {
      return this.roles
    },
    getDepts(): UserDeptVO[] {
      return this.depts
    },
    getIsSetUser(): boolean {
      return this.isSetUser
    },
    getUser(): UserVO {
      return this.user
    },
    getIsLoggedIn(): boolean {
      return !!getAccessToken()
    },
    getShowLoginDialog(): boolean {
      return this.showLoginDialog
    },
    getShowRegisterDialog(): boolean {
      return this.showRegisterDialog
    }
  },
  actions: {
    // 设置登录弹窗显示状态
    async setShowLoginDialog(val: boolean) {
      this.showLoginDialog = val
    },
    // 设置注册弹窗显示状态 
    async setShowRegisterDialog(val: boolean) {
      this.showRegisterDialog = val
    },

    async setUserInfoAction() {
      if (!getAccessToken()) {
        this.resetState()
        return null
      }
      let userInfo = wsCache.get(CACHE_KEY.USER)
      if (!userInfo) {
        userInfo = await getInfo()
      } else {
        // 特殊：在有缓存的情况下，进行加载。但是即使加载失败，也不影响后续的操作，保证可以进入系统
        try {
          userInfo = await getInfo()
        } catch (error) {}
      }
      this.permissions = userInfo.permissions || []
      this.roles = userInfo.roles
      this.depts = userInfo.depts
      this.user = userInfo.user
      if (this.depts && this.depts.length > 0) {
        this.depts.forEach((dept) => {
          if (dept.mainJob === InfraBooleanStringEnum.TRUE) {
            this.user.mainDeptId = dept.deptId
          }
        })
      }
      this.isSetUser = true
      wsCache.set(CACHE_KEY.USER, userInfo)
      wsCache.set(CACHE_KEY.ROLE_ROUTERS, userInfo.menus)
    },
    async resetUserInfoAction() {
      const userInfo = await getInfo()
      this.permissions = userInfo.permissions || []
      this.roles = userInfo.roles
      this.depts = userInfo.depts
      this.user = userInfo.user
      if (this.depts && this.depts.length > 0) {
        this.depts.forEach((dept) => {
          if (dept.mainJob === InfraBooleanStringEnum.TRUE) {
            this.user.mainDeptId = dept.deptId
          }
        })
      }
      this.isSetUser = true
      wsCache.set(CACHE_KEY.USER, userInfo)
      wsCache.set(CACHE_KEY.ROLE_ROUTERS, userInfo.menus)
    },
    async setUserAvatarAction(avatar: string) {
      const userInfo = wsCache.get(CACHE_KEY.USER)
      // NOTE: 是否需要像`setUserInfoAction`一样判断`userInfo != null`
      this.user.avatar = avatar
      userInfo.user.avatar = avatar
      wsCache.set(CACHE_KEY.USER, userInfo)
    },
    async setUserNicknameAction(nickname: string) {
      const userInfo = wsCache.get(CACHE_KEY.USER)
      // NOTE: 是否需要像`setUserInfoAction`一样判断`userInfo != null`
      this.user.nickname = nickname
      userInfo.user.nickname = nickname
      wsCache.set(CACHE_KEY.USER, userInfo)
    },
    async loginOut() {
      await loginOut()
      removeToken()
      deleteUserCache() // 删除用户缓存
      this.resetState()
    },
    resetState() {
      this.permissions = []
      this.roles = []
      this.depts = []
      this.isSetUser = false
      this.user = {
        id: 0,
        avatar: '',
        nickname: '',
        mainDeptId: 0
      }
    },
    loginAction(userInfo: { nickname: string; avatar?: string }) {
      this.user.nickname = userInfo.nickname
      this.user.avatar = userInfo.avatar || ''
      this.showLoginDialog = false
    },
    logoutAction() {
      this.user = {
        id: 0,
        avatar: '',
        nickname: '',
        mainDeptId: 0
      }
    },
    openLoginDialog() {
      this.showLoginDialog = true
      this.showRegisterDialog = false
    },
    closeLoginDialog() {
      this.showLoginDialog = false
    },
    openRegisterDialog() {
      this.showRegisterDialog = true
      this.showLoginDialog = false
    },
    closeRegisterDialog() {
      this.showRegisterDialog = false
    },
    registerAction(userInfo: { nickname: string; avatar?: string }) {
      this.user.nickname = userInfo.nickname
      this.user.avatar = userInfo.avatar || ''
      this.showRegisterDialog = false
    }
  }
})

export const useUserStoreWithOut = () => {
  return useUserStore(store)
}
