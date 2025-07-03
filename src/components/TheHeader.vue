<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const token = ref('')

watch(
  () => route.path,
  () => {
    token.value = localStorage.getItem('token') || ''
  },
  {
    immediate: true
  }
)

function signOut() {
  localStorage.removeItem('token')
  location.reload()
}
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>token
    <RouterLink to="/movies">Movies</RouterLink>
    <RouterLink
      v-if="!token"
      to="/signin">
      Sign In
    </RouterLink>
    <button
      v-if="token"
      @click="signOut">
      Sign Out
    </button>
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
