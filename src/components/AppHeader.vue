<script>
import {store} from "../data/store"
export default {
    name: "AppHeader",
    data(){
        return{
        }
    }
}
</script>

<template>
  <header>
    <div class="logo">
        LOGO
    </div>
    <div class="cerca">
        <input type="text">
        <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
</select>
    </div>

  </header>
</template>

<style lang="scss" scoped>

</style>

