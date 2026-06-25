<template>
  <div>
    <el-select v-if="userTenants?.length > 1" v-model="tenantId" @change="changeTenant">
      <el-option
        v-for="tenant in userTenants"
        :key="tenant.tenantId"
        :label="tenant.tenantName"
        :value="tenant.tenantId"
      />
    </el-select>
  </div>
</template>
<script lang="ts" setup>
import {
  setTenantId,
  getTenantId,
  getUserTenants,
  setToken,
  setUserTenants,
  setManagedTenantId
} from '@/utils/auth'
import { changeTenantToken } from '@/api/login/index'
import { useUserStore } from '@/store/modules/user'
import { useDictStoreWithOut } from '@/store/modules/dict'
import { useModuleStoreWithOut } from '@/store/modules/module'
const { replace } = useRouter()

defineOptions({ name: 'MultiTenant' })

const tenantId = ref(getTenantId())
const userTenants = getUserTenants()

const userStoreWithOut = useUserStore() // 用户信息缓存
const dictStoreWithOut = useDictStoreWithOut() // 字典信息缓存
const moduleStoreWithOut = useModuleStoreWithOut() // 模块信息缓存

async function changeTenant(tenantId) {
  let selectTenant = userTenants.find((m) => m.tenantId == tenantId)
  if (selectTenant) {
    // 获取新生成的用户在新租户下token
    const newTokenRes = await changeTenantToken(selectTenant.tenantId)
    // 设置新token和新租户信息
    setToken(newTokenRes)
    setTenantId(newTokenRes.tenantId)
    setUserTenants(newTokenRes.userTenants)
    setManagedTenantId(newTokenRes.managedTenantIds)
    await userStoreWithOut.resetUserInfoAction()
    await dictStoreWithOut.resetDict()
    await moduleStoreWithOut.resetModule()
    // 刷新页面
    replace({ path: '/' })
    location.reload()
  }
}
</script>
