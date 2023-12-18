<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" class="text-center head">
        <span style="color: rgba(64, 60, 60, 1)">Our</span>
        <span style="color: rgba(248, 141, 47, 1)">Placements</span>
      </v-col>
      <v-col cols="12" lg="6" class="text-center sub4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore
      </v-col>
    </v-row>
    <v-row justify="center">
    <v-col cols="12">
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
              cols="6"
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
  font-size: 35px;
  font-weight: 700;
}
.sub4{
  font-family: opensans;
  font-size: 14px;
  font-weight: 400;

}
.name{
    font-family: opensans;
    font-size: 18px;
    font-weight: 700;
}
.pos{
    font-family: opensans;
    font-size: 12px;
    font-weight: 600;
    color: rgba(58, 129, 230, 1);
}
.desc{
    font-family: opensans;
  font-size: 14px;
  font-weight: 700;
}
</style>
<script>
export default {
  data() {
    return {
      cardGroups: [
      [
          {
            image: require("@/assets/images/place2.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place2.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place1.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place2.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place2.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place1.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place2.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place1.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
        ],
        [
          {
            image: require("@/assets/images/place2.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place2.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place1.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place2.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place2.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place1.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place2.png"),
            title: "Alex George",
            subtitle: "placed at ",
            description: "Goldmensacks",
          },
          {
            image: require("@/assets/images/place1.png"),
            title: "Alex George",
            subtitle: "Manger at Cognizant ",
            description: "Goldmensacks",
          },
        ],
      ],
    };
  },
};
</script>
