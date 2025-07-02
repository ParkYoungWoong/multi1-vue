<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)

function showMenu() {
  isShow.value = true
  window.addEventListener('click', hideMenu)
}
function hideMenu() {
  isShow.value = false
  window.removeEventListener('click', hideMenu)
}
function toggleMenu(event: Event) {
  event.stopPropagation()
  return isShow.value ? hideMenu() : showMenu()
}
</script>

<template>
  <div>
    <slot
      name="activator"
      :toggleMenu="toggleMenu"></slot>
    <div
      v-if="isShow"
      @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
