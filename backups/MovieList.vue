<script setup lang="ts">
import { ref } from 'vue'
import TheLoader from '@/components/TheLoader.vue'

interface Movie {
  imdbID: string
  Title: string
  Poster: string
}

const movies = ref<Movie[]>([])
const isLoading = ref(true)

async function fetchMovies() {
  // 시간 지연 코드!
  await new Promise(resolve => setTimeout(resolve, 4000))
  const res = await fetch('https://omdbapi.com?apikey=7035c60c&s=batman')
  const data = await res.json()
  console.log(data.Search)
  movies.value = data.Search
  isLoading.value = false
}
fetchMovies()
</script>

<template>
  <TheLoader v-if="isLoading" />
  <ul v-else>
    <li
      v-for="(movie, index) in movies"
      :key="movie.imdbID">
      <div>{{ index + 1 }}) {{ movie.Title }}</div>
      <img
        :src="movie.Poster"
        :alt="movie.Title"
        width="100" />
    </li>
  </ul>
</template>

<style scoped></style>
