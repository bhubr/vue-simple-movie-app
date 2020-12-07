<template>
  <div id="app">
    <movie-list :movies="movies" />
  </div>
</template>

<script>
import MovieList from "./components/MovieList"
import { getMoviesFromApi } from "./helpers/api"

export default {
  name: "App",
  components: {
    MovieList,
  },
  data() {
    return {
      movies: []
    };
  },
  mounted() {
    this.fetchMovies()
  },
  methods: {
    fetchMovies() {
      getMoviesFromApi()
        .then(movies => {
          this.movies = movies;
        })
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 30em;
  margin: 0 auto;
}
</style>
