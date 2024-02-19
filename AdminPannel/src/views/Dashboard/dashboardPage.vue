<template>
    <div>
        <v-row justify="center" class="pa-5">
      <v-col cols="12">
        <v-row>

          <v-col cols="12" sm="6" lg="4" class="text-left pa-2">
            <v-card rounded="lg" elevation="6" class="bg1" height="150px">
              <router-link :to="'/listAbout'" style="text-decoration: none">
                <v-row justify="end" class="pa-4">
                  <v-col cols="9" lg="8" xl="7" class="text-left">
                    <v-row justify="center">
                      <v-col cols="12" class="text-left">
                        <!-- <span class="analyticsValue">
                          4</span
                        > -->
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <span class="analyticsKey" style="color: white; "> ABOUT US</span>
                        <!-- <span class="itemArrow"> >> </span> -->
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="3"
                    xl="4"
                    class="pt-16 text-center"
                    align-self="center"
                  >
                    <!-- <v-img
                  src="../../../assets/iconsets/sellers.png"
                  height="6vh"
                  contain
                ></v-img> -->
                    <v-icon color="white">mdi-account-group</v-icon>
                  </v-col>
                </v-row>
              </router-link>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="text-left pa-2">
            <v-card rounded="lg" elevation="6" class="bg2" height="150px">
              <router-link :to="'/listReview'" style="text-decoration: none">
                <v-row justify="end" class="pa-4">
                  <v-col cols="9" lg="8" xl="7" class="text-left">
                    <v-row justify="center">
                      <v-col cols="12" class="text-left">
                        <!-- <span class="analyticsValue">
                          4</span
                        > -->
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <span class="analyticsKey" style="color: white;"> REVIEWS</span>
                        <!-- <span class="itemArrow"> >> </span> -->
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="3"
                    xl="4"
                    class="pt-16 text-center"
                    align-self="center"
                  >
                    <!-- <v-img
                  src="../../../assets/iconsets/sellers.png"
                  height="6vh"
                  contain
                ></v-img> -->
                    <v-icon color="white">mdi-star</v-icon>
                  </v-col>
                </v-row>
              </router-link>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="text-left pa-2">
            <v-card rounded="lg" elevation="6" class="bg3" height="150px">
              <router-link :to="'/listPlacements'" style="text-decoration: none">
                <v-row justify="end" class="pa-4">
                  <v-col cols="9" lg="8" xl="7" class="text-left">
                    <v-row justify="center">
                      <v-col cols="12" class="text-left">
                        <!-- <span class="analyticsValue">
                          4</span
                        > -->
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <span class="analyticsKey" style="color: white;"> PLACEMENTS</span>
                        <!-- <span class="itemArrow"> >> </span> -->
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="3"
                    xl="4"
                    class="pt-16 text-center"
                    align-self="center"
                  >
                    <!-- <v-img
                  src="../../../assets/iconsets/sellers.png"
                  height="6vh"
                  contain
                ></v-img> -->
                    <v-icon color="white">mdi-briefcase-account</v-icon>
                  </v-col>
                </v-row>
              </router-link>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="text-left pa-2">
            <v-card rounded="lg" elevation="6" class="bg4" height="150px">
              <router-link :to="'listDiscoverdetails'" style="text-decoration: none">
                <v-row justify="end" class="pa-4">
                  <v-col cols="9" lg="8" xl="7" class="text-left">
                    <v-row justify="center">
                      <v-col cols="12" class="text-left">
                        <!-- <span class="analyticsValue">
                          4</span
                        > -->
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <span class="analyticsKey" style="color: white;"> DISCOVER DETAILS</span>
                        <!-- <span class="itemArrow"> >> </span> -->
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="3"
                    xl="4"
                    class="pt-16 text-center"
                    align-self="center"
                  >
                    <!-- <v-img
                  src="../../../assets/iconsets/sellers.png"
                  height="6vh"
                  contain
                ></v-img> -->
                    <v-icon color="white">mdi-map-search</v-icon>
                  </v-col>
                </v-row>
              </router-link>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="text-left pa-2">
            <v-card rounded="lg" elevation="6" class="bg5" height="150px">
              <router-link :to="'listNews'" style="text-decoration: none">
                <v-row justify="end" class="pa-4">
                  <v-col cols="9" lg="8" xl="7" class="text-left">
                    <v-row justify="center">
                      <v-col cols="12" class="text-left">
                        <!-- <span class="analyticsValue">
                          4</span
                        > -->
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <span class="analyticsKey" style="color: white;"> LATEST NEWS</span>
                        <!-- <span class="itemArrow"> >> </span> -->
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="3"
                    xl="4"
                    class="pt-16 text-center"
                    align-self="center"
                  >
                    <!-- <v-img
                  src="../../../assets/iconsets/sellers.png"
                  height="6vh"
                  contain
                ></v-img> -->
                    <v-icon color="white">mdi-newspaper</v-icon>
                  </v-col>
                </v-row>
              </router-link>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="text-left pa-2">
            <v-card rounded="lg" elevation="6" class="bg6" height="150px">
              <router-link :to="'/listContact'" style="text-decoration: none">
                <v-row justify="end" class="pa-4">
                  <v-col cols="9" lg="8" xl="7" class="text-left">
                    <v-row justify="center">
                      <v-col cols="12" class="text-left">
                        <!-- <span class="analyticsValue">
                          4</span
                        > -->
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <span class="analyticsKey" style="color: white;"> CONTACT US</span>
                        <!-- <span class="itemArrow"> >> </span> -->
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="3"
                    xl="4"
                    class="pt-16 text-center"
                    align-self="center"
                  >
                    <!-- <v-img
                  src="../../../assets/iconsets/sellers.png"
                  height="6vh"
                  contain
                ></v-img> -->
                    <v-icon color="white">mdi-phone</v-icon>
                  </v-col>
                </v-row>
              </router-link>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="text-left pa-2">
            <v-card rounded="lg" elevation="6" class="bg7" height="150px">
              <router-link :to="'listTailsection'" style="text-decoration: none">
                <v-row justify="end" class="pa-4">
                  <v-col cols="9" lg="8" xl="7" class="text-left">
                    <v-row justify="center">
                      <v-col cols="12" class="text-left">
                        <!-- <span class="analyticsValue">
                          4</span
                        > -->
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <span class="analyticsKey" style="color: white;"> TAIL SECTION</span>
                        <!-- <span class="itemArrow"> >> </span> -->
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="3"
                    xl="4"
                    class="pt-16 text-center"
                    align-self="center"
                  >
                    <!-- <v-img
                  src="../../../assets/iconsets/sellers.png"
                  height="6vh"
                  contain
                ></v-img> -->
                    <v-icon color="white">mdi-navigation </v-icon>
                  </v-col>
                </v-row>
              </router-link>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="text-left pa-2">
            <v-card rounded="lg" elevation="6" class="bg8" height="150px">
              <router-link :to="'/catList'" style="text-decoration: none">
                <v-row justify="end" class="pa-4">
                  <v-col cols="9" lg="8" xl="7" class="text-left">
                    <v-row justify="center">
                      <v-col cols="12" class="text-left">
                        <!-- <span class="analyticsValue">
                          4</span
                        > -->
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <span class="analyticsKey" style="color: white;">COURSE CATEGORY</span>

                        <!-- <span class="itemArrow"> </span> -->
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="3"
                    xl="4"
                    class="pt-16 text-center"
                    align-self="center"
                  >
                    <!-- <v-img
                  src="../../../assets/iconsets/sellers.png"
                  height="6vh"
                  contain
                ></v-img> -->
                    <v-icon color="white">mdi-book</v-icon>
                  </v-col>
                </v-row>
              </router-link>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="4" class="text-left pa-2">
            <v-card rounded="lg" elevation="6" class="bg9" height="150px">
              <router-link :to="'/listCourse'" style="text-decoration: none">
                <v-row justify="end" class="pa-4">
                  <v-col cols="9" lg="8" xl="7" class="text-left">
                    <v-row justify="center">
                      <v-col cols="12" class="text-left">
                        <!-- <span class="analyticsValue">
                          4</span
                        > -->
                      </v-col>
                      <v-col cols="12" class="text-left">
                        <span class="analyticsKey" style="color: white;">COURSE </span>

                        <!-- <span class="itemArrow"> </span> -->
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="3"
                    xl="4"
                    class="pt-16 text-center"
                    align-self="center"
                  >
                    <!-- <v-img
                  src="../../../assets/iconsets/sellers.png"
                  height="6vh"
                  contain
                ></v-img> -->
                    <v-icon color="white">mdi-book</v-icon>
                  </v-col>
                </v-row>
              </router-link>
            </v-card>
          </v-col>
          
          </v-row>
          </v-col>
          </v-row>
    </div>
</template>
<style scoped>
.bg1 {
  background-image: linear-gradient(to right,  #ee1169 0%, #ed92b6 100%);
}
.bg2 {
  background-image: linear-gradient(to right, #7d39ea 0%, #9c77d7 100%);
}
.bg3 {
  background-image: linear-gradient(to right, #d1e30f 0%, #d6df74 100%);
}
.bg4 {
  background-image: linear-gradient(to right, #e66e24 0%, #e5a882  100%);
}
.bg5 {
  background-image: linear-gradient(to right, #dd0bf0 0%, #c387c9 100%);
}
.bg6 {
  background-image: linear-gradient(to right, #df3737 0%, #ee9393 100%);
}
.bg7 {
  background-image: linear-gradient(to right, #069059 0%, #62c09a 100%);
}
.bg8 {
  background-image: linear-gradient(to right,  #44a6a7 0%, #7de7e9 100%);
}
.bg9 {
  background-image: linear-gradient(to right,  #388107 0%, #70bc8b 100%);
}
.analyticsKey{
  font-family: poppinsRegular;
}
</style>