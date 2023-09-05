import type { LoadingOptionsResolved } from 'element-plus'

let instance: ReturnType<typeof ElLoading.service> | null = null

export const LoadingService = {
  getInstance: () => instance,
  show: (options?: Partial<LoadingOptionsResolved>) => {
    instance = ElLoading.service({
      ...options,
      lock: true,
    })
  },
  close: () => {
    instance?.close()
    instance = null
  },
}
