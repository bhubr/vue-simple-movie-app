<template>
  <div id="app">
    <Header />
    <movie-list :movies="movies" />
  </div>
</template>

<script>
import Header from "./components/Header"
import MovieList from "./components/MovieList"
import { getMoviesFromApi } from "./helpers/api"

export default {
  name: "App",
  components: {
    Header,
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
  max-width: 30em;
  margin: 0 auto;
}
</style>
