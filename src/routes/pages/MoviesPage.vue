<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TextField from '@/components/TextField.vue'
import TheButton from '@/components/TheButton.vue'
import { useMovieStore } from '@/stores/movie'
import type { Movie } from '@/stores/movie'
import { useQuery, useQueryClient } from '@tanstack/vue-query'

const movieStore = useMovieStore()
const queryClient = useQueryClient()
const searchTextRef = ref<{ inputEl: HTMLInputElement } | null>(null)
const movies = ref<Movie[]>([])
// 쿼리 옵션을 반응형으로 만들어서 검색 키워드가 변경될 때마다 새로운 쿼리를 실행!
const queryOptions = computed(() => ({
  queryKey: ['movies', movieStore.searchText],
  queryFn: async () => {
    await movieStore.fetchMovies()
    return movieStore.movies
  },
  staleTime: 1000 * 60 * 60, // 1시간
  enabled: !!movieStore.searchText
}))

// 쿼리 실행 및 등록!
useQuery<Movie[]>(queryOptions.value)

onMounted(() => {
  searchTextRef.value?.inputEl.focus()
})

async function fetchMovies() {
  if (!movieStore.searchText.trim()) return
  // 캐시된 데이터가 있으면 그 데이터를 사용하고, 없으면 새로 데이터를 가져옴!
  movies.value = await queryClient.fetchQuery(queryOptions.value)
}
</script>

<template>
  <div class="search">
    <TextField
      ref="searchTextRef"
      v-model="movieStore.searchText"
      @keydown.enter="fetchMovies" />
    <TheButton
      :loading="movieStore.isLoading"
      @click="fetchMovies">
      검색
    </TheButton>
  </div>
  <ul v-if="movies.length">
    <li
      v-for="movie in movies"
      :key="movie.imdbID">
      <RouterLink :to="`/movies/${movie.imdbID}`">
        <div class="title">{{ movie.Title }}</div>
        <img
          :src="movie.Poster"
          :alt="movie.Title" />
      </RouterLink>
    </li>
  </ul>
  <RouterView />
</template>

<style scoped>
.search {
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 10px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
li {
  width: 200px;
  height: 300px;
  position: relative;
}
li .title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  font-weight: bold;
}
li img {
  width: 200px;
  height: 300px;
}
</style>
