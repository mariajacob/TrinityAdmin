<template>
  <div>
    <!-- Desktop Navigation -->
    <v-app-bar app class="hidden-sm-and-down" height="100%">
      <v-container>
        <v-row justify="start">
          <v-col cols="12" class="text-left" lg="2" md="1">
            <v-img
              src="../../assets/images/logo.png"
              height="100%"
              contain
            ></v-img>
          </v-col>
          <v-col
            cols="12"
            lg="10"
            align-self="center"
            md="11"
            class="text-right"
          >
            <v-btn
              v-for="(item, index) in navItems"
              :key="index"
              @click="scroll()"
              :to="item.route"
              :class="setActiveButton(item.route)"
              variant="text"
              elevation="0"
              class="hdr"
              style="background-color: white;color: black;"
            >
              {{ item.label }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation -->
    <div class="hidden-md-and-up">
      <v-app-bar app class="hidden-md-and-up">
        <v-row justify="space-between">
          <v-col cols="5" class="pl-8" sm="3">
            <v-img src="../../assets/images/logo.png" height="40px"></v-img>
          </v-col>
        </v-row>
        <v-app-bar-nav-icon @click="mobileMenu = !mobileMenu">
          <v-icon color="black">mdi-menu</v-icon>
        </v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        class="custom-navigation-drawer"
        location="right"
        app
        temporary
        v-model="mobileMenu"
        style="position: fixed"
      >
        <v-list>
          <v-row class="px-8 py-5 pt-16">
            <v-col
              cols="12"
              v-for="(item, index) in navItems"
              :key="index"
              :to="item.route"
              :class="setActiveButton(item.route)"
            >
              <router-link :to="item.route" class="router-link">
                <v-list-item-title class="hdr">{{ item.label }}</v-list-item-title>
              </router-link>
            </v-col>
          </v-row>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { label: "Home", route: "/" },
        { label: "About Us", route: "/aboutus"  },
        { label: "Our Team",route: "/ourteam"  },
        { label: "Courses",route: "/ourcourses"  },
        { label: "Gallery",route: "/gallerypage"  },
        { label: "Contact Us", route: "/contactus"  },
      ],
      mobileMenu: false,
    };
  },
  computed: {
    activeRoute() {
      return this.$route.path;
    },
  },
  // methods: {
  //   setActiveButton(route) {
  //     return route === this.activeRoute ? "active-button" : "";
  //   },
  //   scroll(){
  //     window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  //   },
  // },
  methods: {
setActiveButton(route) {
  return route === this.activeRoute ? "active-button active-text" : "active-button";
},
scrollToRoute(route) {
  this.activeRoute = route;
  this.scroll();
},
scroll() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
},
}
};
</script>
<style scoped>
.custom-navigation-drawer {
  margin-top: 0;
  padding-top: 0;
}
.router-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.hdr {
  font-family: archireg;
  font-size: 16px;
  font-weight: 500;
}
.active-button {
background-color: yellow;
color: black;
}

.active-text {
color: red; /* Text color for the active button */
}
</style>
