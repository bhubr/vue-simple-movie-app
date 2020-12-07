<template>
  <div class="Movie">
    <div class="Movie-new" v-if="isNew">New</div>
    <img :src="movie.picture" :alt="movie.title" />
    <h3 @click="changeTitle">{{ movie.title }}</h3>
    <button type="button" @click="toggleFavorite">
      <span v-if="isFavorite">&#9733;</span>
      <span v-else>&#9734;</span>
    </button>
  </div>
</template>

<script>
import isLessThanOneYear from '../helpers/isLessThanOneYear'

export default {
  name: 'Movie',
  props: {
    movie: Object
  },
  data(){
    return {
      isFavorite: false
    }
  },
  computed: {
    isNew() {
      const { release } = this.movie;
      return isLessThanOneYear(release);
    }
  },
  methods: {
    changeTitle() {
      this.movie.title = 'Changed movie title'
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite
    }
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

.Movie-new {
  background: #e43;
  position: absolute;
  font-size: 11px;
  padding: 0 1.5em;
  top: 5px;
  left: -15px;
  text-align: center;
  color: #f0f0f0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

img {
  max-width: 80px;
  margin-right: 2em;
}

h3 {
  flex-grow: 1;
}

button {
  background: transparent;
  border: none;
}
button:focus {
  outline: 1px solid #ccf;
}
</style>