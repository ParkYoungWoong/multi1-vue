<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Default from './DefaultLayout.vue'
import Empty from './EmptyLayout.vue'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: keyof typeof layouts
  }
}

const layouts = {
  Default,
  Empty
} as const
const route = useRoute()
</script>

<template>
  <Component :is="layouts[route.meta.layout || 'Default']">
    <Transition
      name="fade"
      mode="out-in">
      <RouterView />
    </Transition>
  </Component>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  position: absolute;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
