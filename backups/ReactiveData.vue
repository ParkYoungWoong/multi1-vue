<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const message = ref(`<span style="color: red;">HTML SPAN!</span>`)

function increase() {
  count.value += 1
  console.log(count.value)
}
</script>

<template>
  <h1>Hello Vue!</h1>
  <button @click="increase">증가</button>
  <h2>count: {{ count }}</h2>
  <h2 v-html="message"></h2>
</template>

<style scoped></style>
