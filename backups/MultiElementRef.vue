<script setup lang="ts">
import { ref } from 'vue'

const fruits = ['Apple', 'Banana', 'Cherry']
const liEls = ref<HTMLLIElement[]>([])
// document.querySelectorAll('li')

function handler() {
  console.log(liEls.value)
}
</script>

<template>
  <ul>
    <li
      v-for="fruit in fruits"
      :key="fruit"
      ref="liEls">
      {{ fruit }}
    </li>
  </ul>
  <button @click="handler">클릭!</button>
</template>

<style scoped></style>
