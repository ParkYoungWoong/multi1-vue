<script setup lang="ts">
import { ref } from 'vue'
import TextField from '@/components/TextField.vue'
import TheButton from '@/components/TheButton.vue'
import { delay } from '@/utils'

const id = ref('')
const pw = ref('')
const isLoading = ref(false)

async function signIn() {
  if (isLoading.value) return
  isLoading.value = true
  await delay(3000)
  console.log(id.value, pw.value, '로그인 완료!')
  isLoading.value = false
}
</script>

<template>
  <form @submit.prevent>
    <TextField
      v-model="id"
      label="아이디" />
    <TextField
      v-model="pw"
      label="비밀번호"
      type="password" />
    <TheButton
      color="primary"
      :loading="isLoading"
      @click="signIn">
      로그인
    </TheButton>
  </form>
</template>

<style scoped>
form {
  max-width: 300px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
}
</style>
