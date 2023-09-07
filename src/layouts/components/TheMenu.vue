<script setup lang="ts">
import TheMenuItem from './TheMenuItem.vue'

defineOptions({
  name: 'LayoutMenu',
})

const menus = useRouter()
  .getRoutes()
  .filter((r) => r.meta.layout && r.name)

const route = useRoute()
const defaultActive = route.path
const defaultOpeneds = route.matched.map((m) => m.path)
</script>

<template>
  <ElMenu
    class="the-menu"
    :router="true"
    :unique-opened="true"
    :default-active="defaultActive"
    :default-openeds="defaultOpeneds"
  >
    <TheMenuItem
      v-for="(item, index) in menus"
      :key="`${item.path}-${index}`"
      :menu="item"
    />
  </ElMenu>
</template>

<style lang="scss" scoped>
.the-menu {
  border-right: none;
}
</style>
