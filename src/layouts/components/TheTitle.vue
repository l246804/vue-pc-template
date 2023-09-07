<script setup lang="ts">
import { getFullURL } from '@rhao/web-utils'

defineOptions({
  name: 'LayoutHeaderTitle',
})

const logoSrc = getFullURL(__ENV__.VITE_APP_ICON)
const title = __ENV__.VITE_APP_TITLE
</script>

<template>
  <ElLink
    href="/"
    class="the-title"
    :title="title"
    :underline="false"
  >
    <ElAvatar
      class="logo"
      :size="20"
      :src="logoSrc"
    />
    <span class="title">{{ title }}</span>
  </ElLink>
</template>

<style lang="scss" scoped>
.the-title {
  height: 50px;

  .logo {
    background-color: transparent;
  }

  .title {
    color: #fff;
  }

  .logo + .title {
    margin-left: 10px;
  }
}
</style>
