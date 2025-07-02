<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)

function showMenu() {
  isShow.value = true
}
function hideMenu() {
  isShow.value = false
}
function toggleMenu() {
  return isShow.value ? hideMenu() : showMenu()
}
</script>

<template>
  <div>
    <slot
      name="activator"
      :abc="{ toggleMenu }"></slot>
    <div v-if="isShow">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
