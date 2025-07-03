import { defineStore } from 'pinia'

export interface Movie {
  imdbID: string
  Title: string
  Poster: string
}

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movie[],
    isLoading: false,
    searchText: ''
  }),
  getters: {},
  actions: {
    async fetchMovies() {
      if (this.isLoading) return
      this.isLoading = true
      const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${this.searchText}`)
      const data = await res.json()
      console.log(data.Search)
      this.movies = data.Search
      this.isLoading = false
    }
  }
})
