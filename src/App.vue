<template>
  <div id="app">
    <movie-list :movies="movies" />
  </div>
</template>

<script>
import MovieList from "./components/MovieList";

export default {
  name: "App",
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "The Invisible Man",
          picture:
            "https://see-mag.fr/wp-content/uploads/2020/06/THE_INVISIBLE_MAN_POSTER_SEE.jpg",
          release: "2020-02-28",
        },
        {
          id: 2,
          title: "Inception",
          picture:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
          release: "2010-07-08",
        },
      ],
    };
  },
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
}
</style>
