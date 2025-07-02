<script setup lang="ts">
import { useCountStore } from '@/stores/count'
const countStore = useCountStore()
</script>

<template>
  <h1>Target! ({{ countStore.count }})</h1>
</template>
