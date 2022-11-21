<script>
import {store} from "../store"
export default {
    name: "AppHeader",
    props: {
        film: Object
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  <div v-for="film in store.results">
    <h2>{{film.title}}</h2>
    <h3>{{film.original_title}}</h3>
    <p>{{film.original_language}}</p>
    <p>{{film.vote_average}}</p>
  </div>
</template>

<style lang="scss" scoped>

</style>