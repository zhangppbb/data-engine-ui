<template>
  <div> </div>
</template>
<script lang="ts" setup>
import router from '@/router'
import { ElMessage, ElLoading } from 'element-plus'
import * as LoginApi from '@/api/login/index'
import * as authUtil from '@/utils/auth'
const { currentRoute, push } = useRouter()
import type { RouteLocationNormalizedLoaded } from 'vue-router'
defineOptions({ name: 'Jjtsso' })

const init = async () => {
  // 显示加载中提示
  const loading = ElLoading.service({
    lock: true,
    text: '正在加载系统中...',
    background: 'rgba(255, 255, 255, 0.7)'
  })

  const code = new URLSearchParams(window.location.search).get('code');
  if (!code) {
    await push({ path: "/"})
    ElMessage.error('无效的授权码,登录失败')
     loading.close()
    return
  }
  await LoginApi.jjtssoLogin(code).then(async(res) => {
    console.log("res",res)
     if (!res) {
      await push({ path: "/"})
      loading.close()
      return
    }
    // 设置租户id
    authUtil.setTenantId(res.tenantId)
    // 设置用户拥有的租户
    authUtil.setUserTenants(res.userTenants)
    // 设置当前租户管理的租户
    authUtil.setManagedTenantId(res.managedTenantIds)
    // 设置token
    authUtil.setToken(res)
    await push({ path: "/"})
    ElMessage.success('登录成功')
    // 登录成功后，跳转到首页
    router.push({ name: 'Home' })
    // 关闭加载中提示
    loading.close()
  }).catch(() => {
    // ElMessage.error('登录失败')
    // 关闭加载中提示
    loading.close()
  })
 
}

/** 监听当前路由为 SSOLogin 时，进行数据的初始化 */
watch(
  () => currentRoute.value,
  (route: RouteLocationNormalizedLoaded) => {
    console.log("route",route)
    if (route.name == 'Jjtsso') {
      init()
    }
  },
  { immediate: true }
)

</script>
