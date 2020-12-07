<template>
  <div id="app">
    <Movie v-bind:movie="movie" />
  </div>
</template>

<script>
import Movie from "./components/Movie";

export default {
  name: "App",
  components: {
    Movie,
  },
  data() {
    return {
      movie: {
        id: 1,
        title: "The Invisible Man",
        picture:
          "https://see-mag.fr/wp-content/uploads/2020/06/THE_INVISIBLE_MAN_POSTER_SEE.jpg",
        release: "2020-02-28",
      },
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
