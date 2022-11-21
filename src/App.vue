<script>
import AppMain from "./components/AppMain.vue";

export default {
  name: "App",
  components:{
    AppMain,
  },
  data(){
    return{

    }
  }
}
</script>

<template>
  <AppMain />
</template>

<style lang="scss" scoped>
  @use "./styles/general.scss"
</style>