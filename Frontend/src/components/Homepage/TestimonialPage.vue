<template>
  <div style="background-color: rgba(250, 123, 68, 1)" class="pt-lg-16 pb-lg-16">
    <v-row justify="center">
      <v-col cols="12" align-self="center" class="text-center head px-lg-0 px-6">
        <span style="color: rgb(255, 255, 255)"
          >What Student <span style="color: rgb(0, 0, 0)">says</span></span
        >
      </v-col>
      <v-col cols="12" class="sub5 px-lg-0 px-8" lg="6" style="text-align: justify;">
        <span
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt
          ut labore</span
        >
      </v-col>
    </v-row>
    <v-row justify="center">
    <v-col cols="12" class="px-lg-0 px-5 pb-lg-0 pb-9 px-sm-8">
      <v-carousel
        cycle
        hide-delimiter-background
        show-arrows="hover"
        hide-delimiters
        height="100%"
      >
        <v-carousel-item
          v-for="(cardGroup, index) in cardGroups"
          :key="index"
        >
          <v-row justify="center" align="center">
            <v-col
              v-for="(card, i) in cardGroup"
              :key="i"
              cols="11"
              lg="3"
              sm="4"
              class="text-center"
            >
              <v-card elevation="0" class="px-10 py-10">
                <v-avatar size="100"><v-img :src="card.image" height="auto" width="100vh"></v-img></v-avatar>
                <v-card-title class="name">{{ card.title }}</v-card-title>
                <v-card-subtitle class="pos">{{ card.subtitle }}</v-card-subtitle>
                <v-card-text class="desc">{{ card.description }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
  </div>
</template>
<style>
.head {
  font-family: archireg;
  font-size: 39px;
  font-weight: 700;
}
.sub5{
    font-family: opensans;
    font-size: 16px;
    font-weight: 400;
    color: white;
}
.name{
    font-family: opensans;
    font-size: 24px;
    font-weight: 600;

}
.pos{
    font-family: opensans;
    font-size: 15px;
    font-weight: 600;
    color: rgba(58, 129, 230, 1);
}
.desc{
    font-family: opensans;
    font-size: 14px;
    font-weight: 400;
}
</style>
<script>
export default {
  data() {
    return {
      cardGroups: [
        [
          {
            image: require("@/assets/images/test1.png"),
            title: "Alex Benny",
            subtitle: "Manger at Cognizant ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
          },
          {
            image: require("@/assets/images/test2.png"),
            title: "Alex Benny",
            subtitle: "Manger at Cognizant ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
          },
          {
            image: require("@/assets/images/test3.png"),
            title: "Alex Benny",
            subtitle: "Manger at Cognizant ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
          },
        ],
        [
          {
            image: require("@/assets/images/test3.png"),
            title: "Alex Benny",
            subtitle: "Manger at Cognizant ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
          },
          {
            image: require("@/assets/images/test2.png"),
            title: "Alex Benny",
            subtitle: "Manger at Cognizant ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
          },
          {
            image: require("@/assets/images/test1.png"),
            title: "Alex Benny",
            subtitle: "Manger at Cognizant ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore.",
          },
        ],
      ],
    };
  },
};
</script>
