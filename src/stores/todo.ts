import axios from 'axios'
import { defineStore } from 'pinia'

export interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

const request = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'content-type': 'application/json',
    apikey: 'KDT8_bcAWVpD8',
    username: 'KDT8_ParkYoungWoong'
  }
})

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    inputTitle: '',
    isLoadingForCreate: false,
    isLoadingForFetch: false,
    isLoadingForUpdate: false,
    isLoadingForDelete: false
  }),
  getters: {},
  actions: {
    async createTodo() {
      if (this.isLoadingForCreate) return
      if (!this.inputTitle.trim()) return
      this.isLoadingForCreate = true
      const { data } = await request({
        method: 'POST',
        data: {
          title: this.inputTitle
        }
      })
      this.inputTitle = ''
      this.todos.unshift(data)
      this.isLoadingForCreate = false
    },
    async fetchTodos() {
      this.isLoadingForFetch = true
      const { data } = await request({
        method: 'GET'
      })
      this.todos = data
      this.isLoadingForFetch = false
    },
    async updateTodo(todo: Todo) {
      if (this.isLoadingForUpdate) return
      this.isLoadingForUpdate = true
      await request({
        url: `/${todo.id}`,
        method: 'PUT',
        data: todo
      })
      const index = this.todos.findIndex(t => t.id === todo.id)
      this.todos[index] = todo
      this.isLoadingForUpdate = false
    },
    async deleteTodo(todo: Todo) {
      if (this.isLoadingForDelete) return
      this.isLoadingForDelete = true
      await request({
        url: `/${todo.id}`,
        method: 'DELETE'
      })
      const index = this.todos.findIndex(t => t.id === todo.id)
      this.todos.splice(index, 1)

      // this.todos = this.todos.filter(t => t.id !== todo.id)

      this.isLoadingForDelete = false
    }
  }
})
