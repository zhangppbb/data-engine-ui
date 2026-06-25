<script lang="ts" setup>
import { computed, ref, watch, nextTick, useSlots, useAttrs } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { isNumber } from '@/utils/is'

defineOptions({ name: 'Dialog' })

const slots = useSlots()
const attrs = useAttrs()

const props = defineProps({
  modelValue: propTypes.bool.def(false),
  title: propTypes.string.def('Dialog'),
  fullscreen: propTypes.bool.def(true),
  width: propTypes.oneOfType([String, Number]).def('40%'),
  scroll: propTypes.bool.def(false),
  maxHeight: propTypes.oneOfType([String, Number]).def('500px'),
  lockScroll: propTypes.bool.def(false)
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

// ---- 透传 attrs（排除内部处理的 prop） ----
const EXCLUDE_KEYS = new Set(['fullscreen', 'title', 'maxHeight', 'appendToBody', 'lockScroll'])

const bindAttrs = computed(() => {
  const merged = { ...attrs, ...props }
  for (const key of EXCLUDE_KEYS) {
    delete merged[key]
  }
  return merged
})

// ---- 全屏切换 ----
const isFullscreen = ref(false)

const toggleFull = () => {
  isFullscreen.value = !isFullscreen.value
}

// ---- 滚动区域高度 ----
// 全屏时：窗口高度 - header(54px) - body-padding(60px) - footer(63px, 可选)
function formatHeight(val: string | number): string {
  return isNumber(val) ? `${val}px` : String(val)
}

const headerH = 54
const bodyPad = 60
const footerH = 63

const dialogHeight = ref(formatHeight(props.maxHeight))

watch(isFullscreen, async (full) => {
  await nextTick()
  if (full) {
    dialogHeight.value = `${document.documentElement.offsetHeight - headerH - bodyPad - (slots.footer ? footerH : 0)}px`
  } else {
    dialogHeight.value = formatHeight(props.maxHeight)
  }
})

const dialogStyle = computed(() => ({ height: dialogHeight.value }))
</script>

<template>
  <ElDialog
    v-bind="bindAttrs"
    :close-on-click-modal="false"
    :fullscreen="isFullscreen"
    :width="width"
    destroy-on-close
    :lock-scroll="lockScroll"
    align-center
    draggable
    class="com-dialog"
    :show-close="false"
    append-to-body
    @close="$emit('update:modelValue', false)"
  >
    <template #header="{ close }">
      <div class="relative h-54px flex items-center justify-between pl-15px pr-15px">
        <slot name="title">
          {{ title }}
        </slot>
        <div
          class="absolute right-15px top-[50%] h-54px flex translate-y-[-50%] items-center justify-between"
        >
          <Icon
            v-if="fullscreen"
            class="is-hover mr-10px cursor-pointer"
            :icon="isFullscreen ? 'radix-icons:exit-full-screen' : 'radix-icons:enter-full-screen'"
            color="var(--el-color-info)"
            hover-color="var(--el-color-primary)"
            @click="toggleFull"
          />
          <Icon
            class="is-hover cursor-pointer"
            icon="ep:close"
            hover-color="var(--el-color-primary)"
            color="var(--el-color-info)"
            @click.stop="close"
          />
        </div>
      </div>
    </template>

    <ElScrollbar v-if="scroll" :style="dialogStyle">
      <slot></slot>
    </ElScrollbar>
    <slot v-else></slot>
    <template v-if="slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </ElDialog>
</template>

<style lang="scss">
.com-dialog {
  .#{$elNamespace}-overlay-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .#{$elNamespace}-dialog {
    margin: 0 !important;

    &__header {
      height: 54px;
      padding: 0;
      margin-right: 0 !important;
      border-bottom: 1px solid var(--el-border-color);
    }

    &__body {
      padding: 15px !important;
    }

    &__footer {
      border-top: 1px solid var(--el-border-color);
    }

    &__headerbtn {
      top: 0;
    }
  }
}
</style>
