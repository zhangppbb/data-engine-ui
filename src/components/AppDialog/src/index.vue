<script lang="ts" setup>
import { ElButton, ElDialog } from 'element-plus';
import { Select, CloseBold } from '@element-plus/icons-vue';

interface Props {
  title: string;
  footer?: boolean;
  confirmText?: string;
  cancelText?: string;
  showConfirm?: boolean;
  showCancel?: boolean;
  confirmLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  footer: true,
  confirmText: '确认',
  cancelText: '取消',
  showConfirm: true,
  showCancel: true,
  confirmLoading: false
});

const emit = defineEmits(['confirm', 'cancel']);

// 确认回调
const handleConfirm = () => {
  emit('confirm');
};

// 取消回调
const handleCancel = () => {
  emit('cancel');
};
</script>

<template>
  <el-dialog
    modal-class="app-dialog-modal"
    append-to-body
    :close-on-click-modal="false"
    align-center
    v-bind="$attrs"
  >
    <slot></slot>

    <template #header>
      <slot name="header">{{ props.title }}</slot>
    </template>
    <template v-if="props.footer" #footer>
      <slot name="footer">
        <div class="flex justify-center">
          <slot name="confirmBtn">
            <el-button
              v-if="showConfirm"
              type="primary"
              :icon="Select"
              :loading="confirmLoading"
              @click="handleConfirm"
            >
              {{ confirmText }}
            </el-button>
          </slot>
          <slot name="cancelBtn">
            <el-button
              class="ml-sm!"
              v-if="showCancel"
              :icon="CloseBold"
              plain
              @click="handleCancel"
            >
              {{ cancelText }}
            </el-button>
          </slot>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<style lang="scss">
.app-dialog-modal {
  position: absolute;

  & > .el-overlay-dialog {
    position: absolute;
  }
}
</style>
