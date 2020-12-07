<template>
  <div>
    <movie :movie="movie" :key="movie.id" v-for="movie in movies" />
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
  },
  computed: {

  }
}
</script>