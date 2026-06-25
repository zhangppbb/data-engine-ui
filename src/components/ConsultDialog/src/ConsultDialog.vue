<script setup lang="ts">
import { ref } from 'vue'
import { Dialog } from '@/components/Dialog'
import codeIcon from '@/layout/data-engine/assets/images/code-icon.jpg'

defineOptions({ name: 'ConsultDialog' })

const visible = ref(false)

const open = () => {
  visible.value = true
}

defineExpose({ open })
</script>

<template>
  <Dialog
    v-model="visible"
    title="咨询沟通"
    :width="400"
    :fullscreen="false"
  >
    <div class="flex flex-col items-center py-20px">
      <div class="mb-20px text-16px text-#666 text-center">
        请扫码添加咨询顾问，获取专属方案
      </div>
      <img :src="codeIcon" class="w-200px h-200px" alt="咨询二维码" />
      <div class="mt-16px text-14px text-#999">
        长按或扫描二维码添加微信
      </div>
    </div>
  </Dialog>
</template>

