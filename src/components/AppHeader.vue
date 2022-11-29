<script>
import {store} from "../data/store";

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
    <div class="cerca">
        <div class="logo">
            LOGO
        </div>
        <div>
            <input type="text">
            <select class="form-select" aria-label="Default select example">
            <option selected>Film & Serie</option>
            <option value="1">Film</option>
            <option value="2">Serie</option>
            </select>
        </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
    .cerca{
        display: flex;
        justify-content: space-between;
    }
</style>

