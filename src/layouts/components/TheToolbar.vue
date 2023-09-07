<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'

defineOptions({
  name: 'LayoutHeaderToolbar',
})

const { isDark } = useSetting()
const MoonIcon = resolveComponent('MoonIcon')
const SunIcon = resolveComponent('SunIcon')
</script>

<template>
  <div class="the-toolbar">
    <ElSwitch
      v-model="isDark"
      :active-action-icon="MoonIcon"
      :inactive-action-icon="SunIcon"
    />

    <ElDropdown>
      <ElAvatar
        class="avatar"
        size="small"
        :icon="UserFilled"
      />

      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem>工具123123123</ElDropdownItem>
          <ElDropdownItem>工具123123123</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>

    <ElText class="username">
      用户123123
    </ElText>
  </div>
</template>

<style lang="scss" scoped>
.the-toolbar {
  display: flex;
  align-items: center;

  > :not(:first-child) {
    margin-left: 10px;
  }

  .username {
    color: #fff;
  }
}
</style>
