<script setup lang="ts">
import { getFullURL } from '@rhao/web-utils'

defineOptions({
  name: 'LayoutTitle',
})

const logoSrc = getFullURL(__ENV__.VITE_APP_ICON)
const text = __ENV__.VITE_APP_TITLE
</script>

<template>
  <ElLink
    href="/"
    class="the-title"
    :title="text"
    :underline="false"
  >
    <img
      class="logo"
      :src="logoSrc"
      alt="logo"
    >
    <span class="text">{{ text }}</span>
  </ElLink>
</template>

<style lang="scss" scoped>
.the-title {
  height: 50px;

  .logo {
    $size: 30px;

    width: $size;
    height: $size;
  }

  .text {
    color: #fff;
  }

  .logo + .text {
    margin-left: 10px;
  }
}
</style>
