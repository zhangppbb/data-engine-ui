import type { App } from 'vue'
import { useUserStore, PermissionDeptVO } from '@/store/modules/user'

const { t } = useI18n() // 国际化

/** 判断权限的指令 directive */
export function hasPermi(app: App<Element>) {
  app.directive('hasPermi', (el, binding) => {
    const { value } = binding

    if (value && value instanceof Array && value.length > 0) {
      const hasPermissions = hasPermission(value)

      if (!hasPermissions) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(t('permission.hasPermission'))
    }
  })
}

/** 判断权限的方法 function */
const userStore = useUserStore()
const all_permission = '*:*:*'
export const hasPermission = (permission: string[]) => {
    const permissions = userStore.getPermissions
    return permissions.some((temp:PermissionDeptVO) => {
      return all_permission === temp.code || permission.includes(temp.code)
    })
}
