import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => {
    return {
      count: 0,
      min: 0,
      max: 100
    }
  },
  getters: {
    double: state => state.count * 2
    // double(): number {
    //   return this.count * 2
    // }
  },
  actions: {
    increase() {
      this.count += 1
    }
  }
})
