<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import type { Todo } from '@/stores/todo'
import TheButton from '@/components/TheButton.vue'
import TextField from '@/components/TextField.vue'
import { useTodoStore } from '@/stores/todo'

const props = defineProps<{
  todo: Todo
}>()

const todoStore = useTodoStore()
const isEditing = ref(false)
const inputTitle = ref(props.todo.title)
const textFieldRef = ref<{ inputEl: HTMLInputElement } | null>(null)
const isDone = ref(props.todo.done)

watch(
  () => isDone.value,
  newVal => {
    todoStore.updateTodo({
      ...props.todo,
      done: newVal
    })
  }
)

async function onEditMode() {
  isEditing.value = true
  await nextTick()
  textFieldRef.value?.inputEl.focus()
}
function offEditMode() {
  isEditing.value = false
  inputTitle.value = props.todo.title
}
async function saveTodo() {
  if (inputTitle.value === props.todo.title) {
    offEditMode()
    return
  }
  await todoStore.updateTodo({
    ...props.todo,
    title: inputTitle.value
  })
  offEditMode()
}
async function deleteTodo() {
  await todoStore.deleteTodo(props.todo)
  offEditMode()
}
</script>

<template>
  <div class="todo-item">
    <template v-if="isEditing">
      <TextField
        ref="textFieldRef"
        v-model="inputTitle"
        @keydown.esc="offEditMode" />
      <TheButton
        class="btn"
        color="secondary"
        @click="offEditMode">
        취소
      </TheButton>
      <TheButton
        :loading="todoStore.isLoadingForDelete"
        class="btn"
        color="danger"
        @click="deleteTodo">
        삭제
      </TheButton>
      <TheButton
        :loading="todoStore.isLoadingForUpdate"
        class="btn"
        color="primary"
        @click="saveTodo">
        저장
      </TheButton>
    </template>
    <template v-else>
      <input
        type="checkbox"
        v-model="isDone" />
      <div class="title">{{ todo.title }}</div>
      <TheButton
        class="btn"
        @click="onEditMode">
        수정
      </TheButton>
    </template>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 32px;
}
.title {
  flex-grow: 1;
}
.btn {
  width: 60px;
}
</style>
