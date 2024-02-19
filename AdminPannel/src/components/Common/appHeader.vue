<template>
  <div>
    <v-app-bar :elevation="2" color="#81bec9">
      <!-- <v-app-bar-nav-icon ></v-app-bar-nav-icon> -->
      <v-row justify="center">
        <v-col cols="11">
          <v-img
            :max-width="150"
            :max-height="80"
            src="../../assets/images/logo_1.png"
            alt="Profile"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="#81bec9" >
      <v-list flat color="white" >
        <v-list-item style="font-family: 'poppinsRegular'; color: rgb(255, 255, 255); "
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-row>
            <v-col cols="2">
              <v-icon>{{ link.icon }}</v-icon>
            </v-col>

            <v-col cols="8">
              <v-list-item-title color="white"  style="font-family: 'poppinsRegular'; font-size: 16px; ">{{ link.text }}</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
      <v-row justify="center">
        <v-col cols="10">
          <v-btn
           
            class="ma-2"
            variant="outlined"
            color="white"
            text="LOGOUT"
            style="background-color: #87b2f8"
            >LOGOUT
            <v-icon end icon="mdi-logout"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
    <v-app style="padding: 30px" colo>
      <v-main>
        <router-view> </router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      {
        icon: "mdi-view-dashboard",
        text: "Dashboard",
        route: "/dashboardPage",
      },
      { icon: "mdi-account-group", text: "About Us", route: "/listAbout" },
      { icon: "mdi-star", text: "Review", route: "/listReview" },
      {
        icon: "mdi-briefcase-account",
        text: "Placements",
        route: "/listPlacements",
      },
      {
        icon: "mdi-map-search",
        text: "Discover Details",
        route: "/listDiscoverdetails",
      },
      { icon: "mdi-newspaper", text: "Latest News", route: "/listNews" },
      { icon: "mdi-phone", text: "Contact Us", route: "/listContact" },
      { icon: "mdi-account-group", text: "Our Team", route: "/listTeam" },
      {
        icon: "mdi-navigation",
        text: "Footer",
        route: "/listTailsection",
      },
      // {icon :'mdi-image',text:'Gallery',route:'/galleryPage'},
      { icon: "mdi-book", text: "Course Category", route: "/catList" },
      { icon: "mdi-book", text: "Course", route: "/listCourse" },
    ],
  }),
  methods: {
    // appLogout() {
    //   this.$store.commit("logoutUser", true);
    //   this.$router.push({ name: 'loginPage' });
    // },
  },
};
</script>

