<script lang="ts" setup>
import TheTitle from './TheTitle.vue'

defineOptions({
  name: 'LayoutHeader',
})
</script>

<template>
  <ElHeader class="the-header">
    <div class="header-container">
      <TheTitle
        class="title"
        :large="true"
      />
    </div>
  </ElHeader>
</template>

<style lang="scss" scoped>
.the-header {
  background-color: var(--el-color-primary);

  .header-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    .title {
      flex: none;
    }
  }
}
</style>
