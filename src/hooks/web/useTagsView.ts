import { useTagsViewStoreWithOut } from '@/store/modules/tagsView'
import { useModuleStoreWithOut } from '@/store/modules/module'
import { RouteLocationNormalizedLoaded, useRouter } from 'vue-router'
import { computed, nextTick, unref } from 'vue'
const message = useMessage() // 消息弹窗

export const useTagsView = () => {
  const tagsViewStore = useTagsViewStoreWithOut()

  const moduleStore = useModuleStoreWithOut()

  const { replace, currentRoute } = useRouter()

  const selectedTag = computed(() => tagsViewStore.getSelectedTag)

  const closeAll = (callback?: Fn) => {
    tagsViewStore.delAllViews()
    callback?.()
  }

  const closeLeft = (callback?: Fn) => {
    tagsViewStore.delLeftViews(unref(selectedTag) as RouteLocationNormalizedLoaded)
    callback?.()
  }

  const closeRight = (callback?: Fn) => {
    tagsViewStore.delRightViews(unref(selectedTag) as RouteLocationNormalizedLoaded)
    callback?.()
  }

  const closeOther = (callback?: Fn) => {
    tagsViewStore.delOthersViews(unref(selectedTag) as RouteLocationNormalizedLoaded)
    callback?.()
  }

  const closeCurrent = (view?: RouteLocationNormalizedLoaded, callback?: Fn) => {
    if (view?.meta?.affix) return
    tagsViewStore.delView(view || unref(currentRoute))

    callback?.()
  }

  const refreshPage = async (view?: RouteLocationNormalizedLoaded, callback?: Fn) => {
    tagsViewStore.delCachedView()
    const { path, query } = view || unref(currentRoute)
    await nextTick()
    replace({
      path: '/redirect' + path,
      query: query
    })
    callback?.()
  }

  const refreshAppointPage = async (moduleCode: string, callback?: Fn) => {
    const moduleCache = moduleStore.getModuleByCode(moduleCode)
    if (!moduleCache) {
      message.error(moduleCode + '模块缓存数据查询出错')
      return
    }
    const otherModuleCode = moduleCache.otherModuleCode
    if (otherModuleCode && otherModuleCode.length > 0) {
      otherModuleCode.forEach((code) => {
        const otherModule = moduleStore.getModuleByCode(code)
        if (otherModule) {
          tagsViewStore.delAppointCachedView(otherModule.listName)
        }
      })
    }
    callback?.()
  }

  const setTitle = (title: string, path?: string) => {
    tagsViewStore.setTitle(title, path)
  }

  return {
    closeAll,
    closeLeft,
    closeRight,
    closeOther,
    closeCurrent,
    refreshPage,
    refreshAppointPage,
    setTitle
  }
}
