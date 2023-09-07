<script lang="ts" setup>
import TheTitle from './TheTitle.vue'
import TheToolbar from './TheToolbar.vue'

defineOptions({
  name: 'LayoutHeader',
})
</script>

<template>
  <ElHeader class="the-header">
    <div class="header-container">
      <TheTitle class="title" />
      <TheToolbar class="toolbar" />
    </div>
  </ElHeader>
</template>

<style lang="scss" scoped>
.the-header {
  background-color: rgb(0 98 255);

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    .title {
      flex: none;
    }

    .toolbar {
      flex: none;
    }
  }
}

:root.dark {
  .the-header {
    background-color: rgb(0 98 200);
  }
}
</style>
