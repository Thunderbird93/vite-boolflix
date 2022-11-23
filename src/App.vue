<script>
import {store} from "./data/store"
import axios from "axios"
import AppMain from "./components/AppMain.vue"
import AppHeader from "./components/AppHeader.vue"
import { onMounted } from '@vue/runtime-core'

export default {
  name: "App",
  components:{
    AppMain,
    AppHeader,
  },
  data(){
    return{
    }
  },
  mounted(){
    axios.get(store.apiUrl)
    .then(result => {
      console.log(result.data)
    })
    .catch(error => {
      console.log(error)
    })
  },

}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped>
  @use "./styles/general.scss";
  @use "./styles/vars.scss" as *;
</style>