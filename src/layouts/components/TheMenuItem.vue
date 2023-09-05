<script setup lang="ts">
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

defineOptions({
  name: 'TheMenuItem',
})

const props = defineProps<{ menu: RouteRecordNormalized }>()

const menus = useRouter().getRoutes()
function getNormalizedMenu(route: RouteRecordRaw) {
  return menus.find((r) => r.path === `${props.menu.path}/${route.path}`)!
}
</script>

<template>
  <ElSubMenu
    v-if="menu.children.length"
    :index="menu.path"
  >
    <template #title>
      {{ menu.meta.title }}
    </template>

    <template v-for="item in menu.children">
      <TheMenuItem
        v-if="item.path"
        :key="`${menu.path}/${item.path}`"
        :menu="getNormalizedMenu(item)"
      />
    </template>
  </ElSubMenu>
  <ElMenuItem
    v-else
    class="the-menu-item"
    :index="menu.path"
  >
    <template #title>
      {{ menu.meta.title }}
    </template>
  </ElMenuItem>
</template>

<style lang="scss" scoped>
.the-menu-item {
  .container {
    width: 100%;
    overflow: hidden;

    .text {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
