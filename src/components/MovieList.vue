<template>
  <div>
    <movie v-bind:movie="movie" v-bind:key="movie.id" v-for="movie in movies" />
  </div>
</template>

<script>
import Movie from './Movie'

export default {
  name: 'MovieList',
  components: {
    Movie
  },
  props: {
    movies: Array
  }
}
</script>