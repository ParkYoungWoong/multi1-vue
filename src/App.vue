<script setup lang="ts">
import TheMenu from '@/components/TheMenu.vue'
</script>

<template>
  <TheMenu>
    <template #activator="{ abc }">
      <button @click="abc.toggleMenu">메뉴 열기!</button>
    </template>
    <template #default>
      <ul>
        <li>사과</li>
        <li>바나나</li>
        <li>체리</li>
      </ul>
    </template>
  </TheMenu>
</template>

<style scoped></style>
