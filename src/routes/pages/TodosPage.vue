<script setup lang="ts">
import TextField from '@/components/TextField.vue'
import TheButton from '@/components/TheButton.vue'
import TheLoader from '@/components/TheLoader.vue'
import TodoItem from '@/components/todos/TodoItem.vue'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()

todoStore.fetchTodos()
</script>

<template>
  <div class="todo-creator">
    <TextField
      v-model="todoStore.inputTitle"
      :disabled="todoStore.isLoadingForCreate"
      @keydown.enter="todoStore.createTodo" />
    <TheButton
      :loading="todoStore.isLoadingForCreate"
      @click="todoStore.createTodo">
      추가
    </TheButton>
  </div>

  <TheLoader v-if="todoStore.isLoadingForFetch" />
  <div
    v-else
    class="todo-list">
    <!-- <div
      v-for="todo in todoStore.todos"
      :key="todo.id">
      {{ todo.title }}({{ todo.done }})
    </div> -->
    <TodoItem
      v-for="todo in todoStore.todos"
      :key="todo.id"
      :todo="todo" />
  </div>
</template>

<style scoped>
.todo-creator {
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 10px;
}
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
</style>
