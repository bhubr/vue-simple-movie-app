<template>
  <div class="Movie">
    <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg" alt="" />
    <h3>Inception</h3>
    <span>&#9733;</span>
  </div>
</template>

<script>
export default {
  name: 'Movie'
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