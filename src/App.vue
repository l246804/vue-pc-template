<script setup lang="ts">
import { getFullURL } from '@rhao/web-utils'
import { Modal } from './plugins/modal'

useHead({
  title: __ENV__.VITE_APP_TITLE,
  link: [{ rel: 'icon', href: getFullURL(__ENV__.VITE_APP_ICON), type: 'image/svg+xml' }],
  meta: [{ name: 'description', content: __ENV__.VITE_APP_DESC }],
})

Modal.msgSuccess('欢迎回来！')

const { toggleDark } = useSetting()
toggleDark(false)
</script>

<template>
  <div class="app-container">
    <ElConfigProvider
      :button="{ autoInsertSpace: true }"
      size="small"
    >
      <RouterView v-slot="{ Component: routerComp, route }">
        <Component
          :is="routerComp"
          :key="route.fullPath"
        />
      </RouterView>
    </ElConfigProvider>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
