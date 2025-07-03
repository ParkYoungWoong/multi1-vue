<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: boolean
    maxWidth?: number
  }>(),
  {
    modelValue: true,
    maxWidth: 600
  }
)

const emit = defineEmits(['update:modelValue', 'close'])

function closeModal() {
  emit('update:modelValue', false)
  emit('close')
}
</script>

<template>
  <div
    class="modal"
    v-if="modelValue">
    <div
      class="overlay"
      @click="closeModal"></div>
    <div
      :style="{ maxWidth: `${maxWidth}px` }"
      class="content">
      <div
        class="close-btn"
        @click="closeModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed">
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.content {
  position: relative;
  min-width: 200px;
  max-width: 600px;
  max-height: calc(100% - 100px);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 4px;
}
.close-btn svg {
  fill: #333;
  width: 16px;
  height: 16px;
}
</style>
