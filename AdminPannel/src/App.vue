<template>
  <v-app>
    <v-main>
      <!-- <AppHeader/> -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import AppHeader from "./components/Common/appHeader";
import "./assets/style/font.css"
import "./assets/style/style.css"
export default {
  name: 'App',
  components:{
  //  AppHeader
},
  data: () => ({
    //
  }),
}
</script>
