<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TextField from '@/components/TextField.vue'
import TheButton from '@/components/TheButton.vue'
import { useMovieStore } from '@/stores/movie'

const movieStore = useMovieStore()
</script>

<template>
  <div class="search">
    <TextField
      v-model="movieStore.searchText"
      @keydown.enter="movieStore.fetchMovies" />
    <TheButton
      :loading="movieStore.isLoading"
      @click="movieStore.fetchMovies">
      검색
    </TheButton>
  </div>
  <ul>
    <li
      v-for="movie in movieStore.movies"
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
