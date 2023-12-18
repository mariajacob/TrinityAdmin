<template>
  <div class="pt-16 pb-16">
    <v-row justify="center">
      <v-col cols="12" class="text-center head">
        <span>Blog<span style="color: rgba(248, 141, 47, 1)">s</span></span>
      </v-col>
      <v-col cols="11" lg="6" md="7" sm="7" class="text-center sub">
        <span
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt
          ut labore</span
        >
      </v-col>
    </v-row>
    <v-row justify="center" class="pt-10">
        <v-col align-self="center" cols="12" lg="4" sm="4" md="4">
            <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        </v-col>
      <v-col cols="11">
        <v-row justify="center">
          <v-col v-for="(item, index) in items" :key="index" cols="12" lg="4">
            <v-card elevation="0">
              <v-img :src="item.image"></v-img>
              <div class="pt-5">
                <v-row>
                    <v-col cols="12" lg="3" class="text-center" style="background-color: rgba(114, 162, 255, 0.17) ;"><span style="color: rgba(41, 99, 183, 1);">Education</span></v-col>
                  <v-col cols="12">
                <span class="subb">{{ item.title }}</span></v-col>
                <v-row justify="start" class="px-3">
                  <v-col cols="1" lg="1" md="1" sm="1">
                    <v-avatar><v-img :src="item.avatar"></v-img></v-avatar>
                  </v-col>
                  <v-col cols="5" lg="4" md="4" sm="4" align-self="center" class="name"><span>&nbsp;&nbsp;&nbsp;{{ item.name }}</span></v-col>
                  <v-col cols="1" lg="1" md="1" sm="1" align-self="center"><span>|</span></v-col>
                  <v-col cols="1" lg="1" md="1" sm="1" class="pa-0" align-self="center"><v-icon>mdi-calendar-range</v-icon></v-col>
                  <v-col cols="4" lg="3" md="3" sm="3" class="pa-0 name" align-self="center"><span>{{ item.date }}</span></v-col>
                </v-row>
                <v-col cols="12" lg="10">
                  <span class="desc">{{ item.description }}</span></v-col>
                </v-row>  
              </div>
            </v-card>
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
        search: '',
      items: [
        {
          image: require("../../assets/images/image1.png"),
          title: "Set video playback speed with JavaScript",
          avatar: require("@/assets/images/place1.png"),
          name: "John Foster",
          date: "30/01/2000",
          description: "Did you come here for something in particular or just general Riker-bashing",
        },
        {
          image: require("../../assets/images/image2.png"),
          title: "Set video playback speed with JavaScript",
          avatar: require("@/assets/images/place1.png"),
          name: "John Foster",
          date: "30/01/2000",
          description: "Did you come here for something in particular or just general Riker-bashing",
        },
        {
          image: require("../../assets/images/image3.png"),
          title: "Set video playback speed with JavaScript",
          avatar: require("@/assets/images/place1.png"),
          name: "John Foster",
          date: "30/01/2000",
          description: "Did you come here for something in particular or just general Riker-bashing",
        },
        {
          image: require("../../assets/images/image4.png"),
          title: "Set video playback speed with JavaScript",
          avatar: require("@/assets/images/place1.png"),
          name: "John Foster",
          date: "30/01/2000",
          description: "Did you come here for something in particular or just general Riker-bashing",
        },
        {
          image: require("../../assets/images/image5.png"),
          title: "Set video playback speed with JavaScript",
          avatar: require("@/assets/images/place1.png"),
          name: "John Foster",
          date: "30/01/2000",
          description: "Did you come here for something in particular or just general Riker-bashing",
        },
        {
          image: require("../../assets/images/image4.png"),
          title: "Set video playback speed with JavaScript",
          avatar: require("@/assets/images/place1.png"),
          name: "John Foster",
          date: "30/01/2000",
          description: "Did you come here for something in particular or just general Riker-bashing",
        },
      ],
    };
  },
};
</script>
<style>
.head {
  font-family: archireg;
  font-size: 39px;
  font-weight: 700;
}
.sub{
    font-family: opensans;
  font-size: 16px;
  font-weight: 400;
}
.subb{
  font-size: 27px;
  font-weight:600 ;
}
.name{
  font-weight: 400;
  font-size: 17px;
  color: rgba(119, 119, 119, 1);
}
.desc{
  font-weight: 400;
  font-size: 19px;
  color:rgba(85, 85, 85, 1);
}
</style>