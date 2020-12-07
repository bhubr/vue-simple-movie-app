export function getMoviesFromApi() {
  return fetch('https://my-json-server.typicode.com/bhubr/micro-movie-api/movies')
    .then(res => res.json())
}