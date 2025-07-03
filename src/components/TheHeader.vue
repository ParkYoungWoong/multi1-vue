<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/movies">Movies</RouterLink>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.router-link-exact-active {
  color: red;
}
</style>
