<template>
  <div class="Movie">
    <img v-bind:src="movie.picture" v-bind:alt="movie.title" />
    <h3>{{ movie.title }}</h3>
    <span>&#9733;</span>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    movie: Object
  }
}
</script>

<style scoped>
.Movie {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 1em;
}

img {
  max-width: 80px;
  margin-right: 2em;
}

h3 {
  flex-grow: 1;
}
</style>