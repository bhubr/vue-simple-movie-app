<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello {{ name }}</h2>
    <button type="button" v-on:click="name = 'Toto'">Change name</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // don't use arrow function here
  data() {
    // declare all dynamic data here
    // otherwise they won't update
    return {
      name: 'John'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
