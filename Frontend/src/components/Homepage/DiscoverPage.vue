<template>
  <div class="pt-10">
    <v-row justify="center">
      <v-col cols="11" lg="5" md="5" sm="6">
        <v-img src="../../assets/images/discover.png"></v-img>
      </v-col>
      <v-col cols="12" lg="6" md="7" sm="6" align-self="center" class="pb-lg-0 pb-16">
        <v-row>
          <v-col cols="12" lg="12" md="12" sm="11" class="disc px-lg-0 px-8">
            <span
              >Discover the Path to Excellence: Embrace Education with <span style="color: rgba(255, 182, 49, 1)">Us!</span></span
            >
          </v-col>
          <v-col cols="12" lg="12" md="9" sm="12" class="subbbbbbb px-lg-0 px-8" style="text-align: justify;">
            <span style="color: black;"
              >Welcome to our educational website, where we are committed to
              providing the best learning experience for students of all ages
              and backgrounds. Here's why we stand out from the rest:</span
            >
          </v-col>
          <v-col
            cols="12"
            lg="6"
            md="6"
            sm="6"
            v-for="(item, index) in icons"
            :key="index"
            class="pt-lg-11 pb-lg-10 pl-lg-16 pa-8 px-md-0 pl-md-7"
          >
            <v-row justify="start">
              <v-col cols="12">
                <v-row justify="start">
                  <v-col cols="1" md="1" lg="1" class="pa-0 pt-1 pt-lg-0 pl-2">
                    <v-avatar>
                      <v-img :src="item.icon"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="11" md="11" lg="11" sm="6" class="text-left px-9 txt pt-sm-2 pl-sm-10">
                        <span>{{ item.desc }}</span>
                  </v-col>
                </v-row>
              </v-col>
              
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        icons: [
        {
          icon: require("@/assets/images/disc.png"),
          desc: "Expert Faculty",
        },
        {
          icon: require("@/assets/images/disc.png"),
          desc: "Supportive Community",
        },
        {
          icon: require("@/assets/images/disc.png"),
          desc: "Affordable Education",
        },
        {
          icon: require("@/assets/images/disc.png"),
          desc: "Supportive Community",
        },
      ],
    };
  },
};
</script>
<style>
.disc{
    font-family: archibld;
    font-size: 39px;
}
.subbbbbbb{
    font-family: archireg;
    font-size: 22px;
    font-weight: 300;
    color: black;
}
.txt{
    font-family: archibld;

}
</style>