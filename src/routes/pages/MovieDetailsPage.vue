<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { delay } from '@/utils'
import TheModal from '@/components/TheModal.vue'
import TheLoader from '@/components/TheLoader.vue'

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

const route = useRoute() // 정보
const router = useRouter() // 제어
const { movieId } = route.params
const movie = ref<MovieDetails | null>(null)
const isLoading = ref(true)

async function fetchMovieDetails() {
  await delay(3000)
  const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${movieId}`)
  movie.value = await res.json()
  isLoading.value = false
}
fetchMovieDetails()
</script>

<template>
  <TheModal
    :maxWidth="1100"
    @close="router.replace('/movies')">
    <TheLoader
      v-if="isLoading"
      :size="100"
      color="royalblue" />
    <section v-else-if="movie">
      <img
        :src="movie.Poster.replace('SX300', 'SX1000')"
        :alt="movie.Title" />
      <div>
        <h1>{{ movie.Title }}</h1>
        <p>{{ movie.Plot }}</p>
        <div>
          <h3>Ratings</h3>
          <p
            v-for="rating in movie.Ratings"
            :key="rating.Source">
            {{ rating.Source }} - {{ rating.Value }}
          </p>
        </div>
        <div>
          <h3>Actors</h3>
          <p>{{ movie.Actors }}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>{{ movie.Director }}</p>
        </div>
      </div>
    </section>
  </TheModal>
</template>

<style scoped>
section {
  width: 100%;
  max-width: 1100px;
  margin: 20px auto;
  display: flex;
  gap: 40px;
}
img {
  flex-shrink: 0; /* 감소 너비 비율 */
  width: 500px;
  display: block;
}
h1 {
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  font-size: 60px;
}
h3 {
  margin: 0;
  padding: 0;
  margin-top: 20px;
}
p {
  margin: 0;
  padding: 0;
}
</style>
