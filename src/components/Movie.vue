<template>
  <div class="Movie">
    <div class="Movie-new" v-if="isNew">New</div>
    <!-- if we wanted an alternative <div v-else>OLD</div> -->
    <img v-bind:src="movie.picture" v-bind:alt="movie.title" />
    <h3 v-on:click="changeTitle">{{ movie.title }}</h3>
    <span>&#9733;</span>
  </div>
</template>

<script>
import isLessThanOneYear from '../helpers/isLessThanOneYear'

export default {
  name: 'Movie',
  props: {
    movie: Object
  },
  computed: {
    isNew() {
      const { release } = this.movie;
      return isLessThanOneYear(release);
    }
  },
  methods: {
    changeTitle() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.movie.title = 'Changed movie title'
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
</style>