import { ChooseDept } from '@/components/ChooseDept'

export function useChooseDept() {
  const container = ref<HTMLElement | null>(null)
  const deptId = ref<Number>()
  const isResolved = ref(false)
  // 增加一个标志位跟踪是否已经销毁
  const isDestroyed = ref(false)

  const showDeptModal = (permissions: string[]): Promise<any> => {
    return new Promise((resolve) => {
      // 重置状态
      isDestroyed.value = false

      // 创建容器元素
      container.value = document.createElement('div')
      document.body.appendChild(container.value)

      // 声明app变量
      let app: ReturnType<typeof createApp> | null = null

      // 销毁函数 - 增加安全检查
      const destroyModal = () => {
        // 已经销毁过则直接返回
        if (isDestroyed.value) return

        if (container.value && app && document.body.contains(container.value)) {
          try {
            app.unmount()
          } catch (e) {
            console.error('Unmount error:', e)
          }

          try {
            // 确保容器仍然是body的子元素再移除
            if (document.body.contains(container.value)) {
              document.body.removeChild(container.value)
            }
          } catch (e) {
            console.error('Remove child error:', e)
          }

          container.value = null
          app = null
          isDestroyed.value = true
        }
      }

      // 创建组件实例
      const modalComponent = defineComponent({
        setup() {
          const handleConfirm = (value: number) => {
            deptId.value = value
            isResolved.value = true
            resolve(value)
            destroyModal()
          }

          const handleCancel = () => {
            deptId.value = undefined
            isResolved.value = true
            resolve(null)
            destroyModal()
          }

          onUnmounted(() => {
            destroyModal()
          })

          return () => {
            return h(ChooseDept, {
              permissions,
              onConfirm: handleConfirm,
              onCancel: handleCancel
            })
          }
        }
      })

      // 挂载组件
      app = createApp(modalComponent)
      app.mount(container.value)
    })
  }

  return {
    showDeptModal
  }
}
