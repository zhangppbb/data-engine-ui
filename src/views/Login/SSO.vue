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
defineOptions({ name: 'Ssocode' })

const init = async () => {
  // 显示加载中提示
  const loading = ElLoading.service({
    lock: true,
    text: '正在加载系统中...',
    background: 'rgba(255, 255, 255, 0.7)'
  })
  let params = ref({
    id: '',
    name: '',
    chainId:''
  })
  const code = new URLSearchParams(window.location.search).get('code');
  const redirectParam = decodeHtml(new URLSearchParams(window.location.search).get('redirectParam'));
  if (redirectParam) {
    params.value = JSON.parse(decodeHtml(redirectParam))
  }
  if (!code) {
     ElMessage.error('无效的授权码,登录失败')
    return
  }
  await LoginApi.ssoLogin(code).then(async(res) => {
     if (!res) {
      ElMessage.error('未授权用户或者登录失败')
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
    if (params.value.id) {
      router.push({
        path: '/industrial-chain/details',
        query: { id: params.value.id, name: encodeURIComponent(params.value.name), chainId:params.value?.chainId}
      });
    } else {
      await push({ path: "/"})
    }
    // ElMessage.success('成功')
    // 关闭加载中提示
    loading.close()
  }).catch(() => {
    // ElMessage.error('登录失败')
    // 关闭加载中提示
    loading.close()
  })
 
}

const decodeHtml = (html) => {
  if (!html) return '';
  const parser = new DOMParser();
  return parser.parseFromString(html, 'text/html').body.textContent || '';
}

/** 监听当前路由为 SSOLogin 时，进行数据的初始化 */
watch(
  () => currentRoute.value,
  (route: RouteLocationNormalizedLoaded) => {
    console.log("route",route)
    if (route.name == 'Ssocode') {
      init()
    }
  },
  { immediate: true }
)

</script>
