<script lang="tsx">
import { defineComponent } from 'vue'
import { UserInfo } from '@/layout/components/UserInfo'
import { useDesign } from '@/hooks/web/useDesign'
import { GoWelcome } from '@/layout/components/GoWelcome'
const { getPrefixCls, variables } = useDesign()
// const prefixCls = getPrefixCls('tool-header')


export default defineComponent({
  name: 'ToolHeader',
  setup() {
    return () => (
      <div
        id={`${variables.namespace}-tool-header`}
        class="h-[var(--top-tool-height)] w-100% flex items-center justify-between"
      >
          <GoWelcome></GoWelcome>
          <UserInfo></UserInfo>
      </div>
    )
  }
})
</script>

<style lang="scss" scoped>
$prefix-cls: #{$namespace}-tool-header;

.#{$prefix-cls} {
  transition: left var(--transition-time-02);
}
</style>
