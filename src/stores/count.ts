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
    // changeCount(value: number) {
    //   this.count = value
    //   this.min = value
    //   this.max = value * 99
    //   this.$patch({
    //     count: value,
    //     min: value,
    //     max: value * 99
    //   })
    // }
  }
})
