<script setup lang="ts">
import { ref } from 'vue'

const name = ref('disabled')
const isActive = ref(true)
const attrs = ref({
  class: 'btn',
  disabled: true,
  readonly: true,
  style: 'color: red;',
  title: '클릭해 주세요!'
})

function handler() {
  name.value = ''
  isActive.value = !isActive.value
}
</script>

<template>
  <h1
    :class="name"
    :style="`color: ${isActive ? 'red' : 'blue'}`">
    Hello Vue!
  </h1>
  <button
    v-bind="attrs"
    @click="handler">
    클릭!
  </button>
</template>

<style scoped>
.disabled {
  color: gray;
}
</style>
