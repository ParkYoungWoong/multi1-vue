<script setup lang="ts">
defineProps<{
  label?: string
  modelValue?: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <label>
    <span v-if="label">{{ label }}</span>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
  </label>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
label span {
  font-size: 13px;
}
label input {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
