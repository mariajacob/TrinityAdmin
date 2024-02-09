<template>
  <div style="background-color: rgba(29, 41, 46, 1)">
    <v-row justify="center">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" lg="4" sm="4" md="4">
            <v-row class="add">
              <v-col cols="12" class="px-0 py-0 pb-lg-5">
                <v-img src="../../assets/images/logo2.png"></v-img
              ></v-col>
              <v-row class="py-lg-5 pt-lg-0 pt-8">
              <v-col cols="1" md="1" sm="1"  lg="1" class="px-0 py-0"><v-icon>mdi-map-marker</v-icon></v-col>
              <v-col cols="11" md="11" sm="11" lg="11"  class="px-0 py-0 pl-sm-3 pl-md-2 pl-2 pl-lg-0"
                ><span>
                  First Floor ,Lilly Book House, Opp. Assumption College,<br>SB
                  College P.O, Changanacherry-686101
                </span></v-col
              >
              <v-col cols="1" md="1" sm="1"  lg="1" class="px-0 py-0"><v-icon>mdi-map-marker</v-icon></v-col>
              <v-col cols="11" md="11" sm="11" lg="11"  class="px-0 py-0 pl-sm-3 pl-md-2 pl-2 pl-lg-0"><span>
                          6,Vellapally Builings,Vellapally Lane,
                          Opp.BCM College,KK Road, Kottayam-686101</span></v-col>
                </v-row>
            </v-row>  
          </v-col>
          <v-col cols="12" lg="4" sm="4" md="4" class="pt-0">
            <v-row justify="center" >
              <v-col cols="12" lg="6" md="12" sm="12" class="text-left">
                <v-col class="subbbbb"
                  ><v-btn variant="text">Navigation</v-btn></v-col
                >
                <v-col class="subtwo py-0"
                  ><v-btn variant="text" @click="home()">Home</v-btn></v-col
                >
                <v-col class="subtwo py-0"
                  ><v-btn variant="text" @click="gallery()"
                    >Gallery</v-btn
                  ></v-col
                >
                <v-col class="subtwo py-0"
                  ><v-btn variant="text" @click="courses()"
                    >Courses</v-btn
                  ></v-col
                >
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="4" sm="4" md="4">
            <v-row justify="center">
              <v-col cols="12" lg="7" md="12" sm="12" class="text-left pt-0">
                <v-col class="subbbbb"
                  ><v-btn variant="text" @click="about()">About</v-btn></v-col
                >
                <v-col class="subtwo py-0"
                  ><v-btn variant="text" @click="contactus()"
                    >Contact Us</v-btn
                  ></v-col
                >
                <v-col class="subtwo py-0"
                  ><v-btn variant="text" @click="blogs()">Blogs</v-btn></v-col
                >
                <v-col class="subtwo py-0"
                  ><v-btn variant="text">Privacy Policy </v-btn></v-col
                >
                <v-col class="subtwo py-0"
                  ><v-btn variant="text">Terms & Conditions </v-btn></v-col
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
  <v-col cols="12" class="text-center">
    <a href="https://instagram.com/trinityprofessionalacademy?igshid=YTQwZjQ0NmI0OA== " target="_blank" rel="noopener noreferrer">
      <v-icon size="25" class="mr-3" style="color: white">mdi-instagram</v-icon>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <v-icon size="25" class="mr-3" style="color: white">mdi-twitter</v-icon>
    </a>
    <a href="https://m.facebook.com/TrinityProfessionalAcademy" target="_blank" rel="noopener noreferrer">
      <v-icon size="25" class="mr-3" style="color: white">mdi-facebook</v-icon>
    </a>
    <a href="https://www.linkedin.com/in/trinity-academy-041b97185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
      <v-icon size="25" style="color: white">mdi-linkedin</v-icon>
    </a>
  </v-col>
</v-row>
    <v-row
      justify="center"
      class="ftr"
      style="background-color: rgb(47, 64, 71)"
    >
      <v-col class="text-center ftr" cols="12" lg="7" align-self="center">
        <span style="color: white"
          >© Trinity Professional Academy 2023 - All rights reserved
          <span>|</span> Designed & Developed by
          <span style="color: #f4c671">Leopard Tech Labs Pvt Ltd</span></span
        >
      </v-col>
    </v-row>
  </div>
</template>
    <style scoped>
.subbbbb {
  font-family: archireg;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  text-transform: lowercase;
}

.subtwo {
  color: #cfc7c7;
  font-size: 16px;
  font-family: opensans;
  font-weight: 400;
}
.ftr {
  font-size: 15px;
  font-weight: 400;
  font-family: opensans;
}
.v-row {
  margin: 0px;
}
.add{
  color: #cfc7c7;
  font-family: archireg;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    gallery() {
      this.$router.push("/gallerypage");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    courses() {
      this.$router.push("/ourcourses");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    blogs() {
      this.$router.push("/blogpage");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    contactus() {
      this.$router.push("/contactus");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    about() {
      this.$router.push("/aboutus");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>