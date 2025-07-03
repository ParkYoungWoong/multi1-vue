<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutProvider from '@/routes/layouts/LayoutProvider.vue'
</script>

<template>
  <LayoutProvider>
    <RouterView />
  </LayoutProvider>
</template>

<style scoped></style>
