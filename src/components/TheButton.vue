<script setup lang="ts">
import TheLoader from '@/components/TheLoader.vue'

withDefaults(
  defineProps<{
    color?: 'primary' | 'secondary' | 'danger'
    loading?: boolean
  }>(),
  {
    color: 'primary',
    loading: false
  }
)
</script>

<template>
  <button :class="color">
    <TheLoader
      v-if="loading"
      :size="20"
      color="#fff" />
    <slot v-else></slot>
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  line-height: 1;
  cursor: pointer;
}
button:hover {
  filter: brightness(1.15);
}
button.primary {
  background-color: royalblue;
}
button.secondary {
  background-color: lightgray;
  color: #333;
}
button.danger {
  background-color: red;
}
</style>
