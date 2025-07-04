<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(true)
</script>

<template>
  <h1>Home Page!</h1>
  <button @click="isShow = !isShow">토글!</button>
  <Transition name="fade">
    <div
      v-if="isShow"
      class="box"></div>
  </Transition>
</template>

<style scoped>
.box {
  width: 200px;
  height: 150px;
  background-color: royalblue;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 4s;
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
