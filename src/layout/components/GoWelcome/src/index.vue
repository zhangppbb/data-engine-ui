<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
const router = useRouter()
const route = useRoute()

const userStore = useUserStore()
const isExternal = computed(() => userStore.user.isExternal)
const openRouter = ['/welcome']
const isOpenRouter = computed(()=>{
  return openRouter.includes(route.path)
})
const Ident = computed(()=>{
  // 是否 是开放路由并且是内部人员
  return !isExternal.value && isOpenRouter.value
}) 
function handleClick() {
  router.push({ path: Ident.value ? '/industrial-chain/list' : '/' })
}
</script>

<template>
  <div
    class="cursor-pointer text-white flex items-center line-height-loose mr-30px"
    @click="handleClick"
  >
    <!-- <Icon icon="ep:home-filled" class="mr-4px" /> -->
    {{ Ident?'产业链分析':'首页' }}
  </div>
</template>

<style scoped lang="scss">
</style>
