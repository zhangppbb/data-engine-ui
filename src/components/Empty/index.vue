<script setup lang="ts">
import { computed } from 'vue';
import NetworkIcon from './assets/network-icon.svg';
import EmptyIcon from './assets/empty-icon.svg';
import ErrorIcon from './assets/error-icon.svg';
import NoRoleIcon from './assets/no-role-icon.svg';

defineOptions({
  name: 'Empty'
});

type Empty = 'notwork' | 'empty' | 'error' | 'no-role';

interface Props {
  text?: string;
  type?: Empty;
  width?: string;
  height?: string;
}

type EmptyMap = {
  text: string;
  icon: string;
};

const props = withDefaults(defineProps<Props>(), {
  type: 'empty'
});

// 数据映射
const EMPTY_MAP: Record<string, EmptyMap> = {
  notwork: {
    text: '网络异常，请重新加载',
    icon: NetworkIcon
  },
  empty: {
    text: '暂无内容～',
    icon: EmptyIcon
  },
  error: {
    text: '抱歉，数据加载失败！',
    icon: ErrorIcon
  },
  'no-role': {
    text: '抱歉，您没有访问权限！',
    icon: NoRoleIcon
  }
};

const empty = computed(() => {
  const type = props.type;
  return EMPTY_MAP[type];
});
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center text-center">
    <img
:style="{
      width: props.width,
      height: props.height
    }" class="max-h-188 max-w-290px h-60%" :src="empty.icon" />
    <div class="mt-xs fw-bold">{{ empty.text }}</div>
  </div>
</template>
