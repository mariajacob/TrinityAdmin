<template>
  <v-app>
    <Header/>
    <v-main class="pt-lg-16">
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
  <div>
    <!-- <v-row justify="end" v-if="$route.name=='homepage'">
      <v-col cols="2" lg="1" md="1" sm="1" class="stick">
        <v-col><v-img src="./assets/images/stk1.png"></v-img></v-col>
        <v-col><v-img src="./assets/images/stk2.png"></v-img></v-col>
        <v-col><v-img src="./assets/images/stk3.png"></v-img></v-col>
        <v-col><v-img src="./assets/images/stk4.png"></v-img></v-col>
        <v-col><v-img src="./assets/images/stk5.png"></v-img></v-col>
      </v-col>
    </v-row> -->
    <v-row justify="end" v-if="$route.name == 'homepage'">
    <v-col cols="3" lg="1" md="1" sm="2" class="stick pt-lg-0 pt-sm-0 pt-md-5 pr-lg-5 pr-md-4">
      <v-col class="pa-sm-6 py-sm-2 py-md-2 pa-md-1 pa-lg-3">
        <router-link to="/blogpage">
          <v-img src="./assets/images/stk1.png" class="hoverable-img"></v-img>
        </router-link>
      </v-col>
      <v-col class="pa-sm-6 py-sm-2 py-md-2 pa-md-1 pa-lg-3">
        <a href="https://mail.google.com" target="_blank">
          <v-img src="./assets/images/stk2.png" class="hoverable-img"></v-img>
        </a>
      </v-col>
      <v-col class="pa-sm-6 py-sm-2 py-md-2 pa-md-1 pa-lg-3">
        <a href="https://wa.me/7025106727" target="_blank">
          <v-img src="./assets/images/stk3.png" class="hoverable-img"></v-img>
        </a>
      </v-col>
      <v-col class="pa-sm-6 py-sm-2 py-md-2 pa-md-1 pa-lg-3">
        <a href="https://instagram.com/trinityprofessionalacademy?igshid=YTQwZjQ0NmI0OA== " target="_blank">
          <v-img src="./assets/images/stk4.png" class="hoverable-img"></v-img>
        </a>
      </v-col>
      <v-col class="pa-sm-6 py-sm-2 py-md-2 pa-md-1 pa-lg-3">
        <a href="https://m.facebook.com/TrinityProfessionalAcademy" target="_blank">
          <v-img src="./assets/images/stk5.png" class="hoverable-img"></v-img>
        </a>
      </v-col>
      <v-col class="pa-sm-6 py-sm-2 pa-md-1 pa-lg-3">
        <v-dialog v-model="registrationFormVisible" max-width="500">
          <template v-slot:activator>
            <v-img
              src="./assets/images/n3.png"
              class="hoverable-img"
              @click="showRegistrationForm"
            ></v-img>
          </template>
          <RegistrationForm />
        </v-dialog>
      </v-col>
    </v-col>
  </v-row>  
</div>
</template>

<style>
.hoverable-img {
  transition: transform 0.2s; /* Smooth transition effect */
}

.hoverable-img:hover {
  transform: scale(1.1); /* Scale up the image on hover (adjust as needed) */
}
.stick{
  position: fixed;
  top: 15%;
}
.image-container {
  margin: 10px;
  text-align: center;
}

.tooltip-button {
  cursor: pointer;
  background: transparent;
  border: none;
  color: #333;
  padding: 0;
  font-size: 16px;
}
</style>



<script>
import  "../src/assets/style/font.css";
import  "../src/assets/style/style.css";
import Header from "../src/components/Homepage/HeaderPage.vue"
import Footer from "../src/components/Homepage/FooterPage.vue"
import RegistrationForm from "../src/components/Homepage/RegfForm.vue"





export default {
  name: 'App',

  components:{
    Header,
    Footer,
    RegistrationForm,
  },

  data() {
    return {
      registrationFormVisible: false,
    };
  },
  methods: {
    showRegistrationForm() {
      this.registrationFormVisible = true;
    },
  },
}
</script>
