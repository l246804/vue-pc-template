<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheMenu from './components/TheMenu.vue'
</script>

<template>
  <TheHeader class="layout-header" />

  <ElContainer
    class="layout-container"
    direction="horizontal"
  >
    <ElAside
      width="200px"
      class="aside"
    >
      <ElScrollbar class="menu-container">
        <TheMenu />
      </ElScrollbar>
    </ElAside>

    <ElMain class="main">
      <RouterView />
    </ElMain>
  </ElContainer>
</template>

<style lang="scss" scoped>
$header-height: 60px;

.layout-header {
  --el-header-height: #{$header-height};

  overflow: hidden;
}

.layout-container {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .aside {
    .menu-container {
      max-height: calc(100% - $header-height);
    }
  }

  .main {
    position: relative;
    overflow: hidden;
    background-color: var(--el-bg-color-page);
  }
}

.layout-header + .layout-container {
  height: calc(100% - $header-height);
}
</style>
