<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number
    color?: string
  }>(),
  {
    size: 80,
    color: 'orange'
  }
)
</script>

<template>
  <div
    :style="{
      '--hloader-color': color,
      '--hloader-size': `${size}px`,
      '--hloader-weight': `${size / 8}px`
    }"
    class="hloader"></div>
</template>

<style scoped>
.hloader {
  --hloader-color: #e96900;
  --hloader-size: 80px;
  --hloader-weight: 8px;
  --hloader-duration: 1s;
  width: var(--hloader-size);
  height: var(--hloader-size);
  color: var(--hloader-color);
  border: var(--hloader-weight) solid;
  border-top-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: hloader var(--hloader-duration) infinite linear;
}
@keyframes hloader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
