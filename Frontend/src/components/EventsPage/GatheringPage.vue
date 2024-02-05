<template>
  <div class="pt-16">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12" lg="12" class="text-center head pt-md-8">
        <span style="color: rgb(0, 0, 0)"
          >Events and
          <span style="color: rgba(255, 182, 49, 1)">Gathering</span></span
        >
      </v-col>
      <v-col cols="12" sm="12" lg="6" class=" sub1 px-8" style="text-align: justify;">
        <span
          >In the tapestry of our institution's history, events and achievements
          are the vibrant threads that weave together a story of growth,
          resilience, and excellence. Join us on this visual journey through the
          chapters of our success.</span
        >
      </v-col>
    </v-row>
    <v-row justify="center" class="py-16 px-lg-16">
      <v-col cols="12" align-self="center" class="pa-0">
        <v-row justify="center" class="pa-0">
          <v-col
            cols="12"
            lg="4"
            sm="4"
            md="4"
            v-for="card in images"
            :key="card.id"
          >
            <v-img :src="card.image" @click="selectImage(card.image)">
              <v-row justify="center" class="pa-0 fill-height">
                <v-col
                  align-self="end"
                  class="bottom-content"
                  style="background-color: rgba(35, 33, 33, 0.5)"
                  cols="12"
                >
                  <v-row style="color: white">
                    <v-col cols="12" class="">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12">
                      {{ card.subtitle }}
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" class="text-center head">
        <span style="color: rgba(64, 60, 60, 1)">Our</span>
        <span style="color: rgba(248, 141, 47, 1)"> Placements</span>
      </v-col>
      <v-col cols="12" lg="6" class="text-center sub1">
        Congrats to our talented graduates who have embarked on a new journey as
        they step into the corporate world. Your success is our pride.
      </v-col>
    </v-row>
    <v-row justify="center" class="px-16">
      <v-col
        v-for="cardGroup in cardGroups"
        :key="cardGroup.title"
        lg="3"
        sm="4"
        class="text-center"
      >
        <v-card elevation="0" class="px-10 py-10">
          <v-avatar size="150">
            <v-img :src="cardGroup.image" height="auto" width="100vh"></v-img>
          </v-avatar>
          <v-card-title class="name">{{ cardGroup.title }}</v-card-title>
          <v-card-subtitle class="pos">{{
            cardGroup.subtitle
          }}</v-card-subtitle>
          <v-card-text class="desc">{{ cardGroup.description }}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-pagination
          v-model="page"
          :length="4"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="800">
      <v-img
        :src="selectedImage"
        cover
        height="100%"
        @click="dialog = false"
      ></v-img>
    </v-dialog>
  </div>
</template>
<style>
.head {
  font-family: archireg;
  font-size: 39px;
  font-weight: 700;
}
.sub {
  font-family: opensans;
  font-size: 16px;
  font-weight: 550;
}
.bottom-content {
  position: absolute;
  bottom: 0px;
}
.name {
  font-family: opensans;
  font-size: 18px;
  font-weight: 700;
}
.pos {
  font-family: opensans;
  font-size: 12px;
  font-weight: 600;
  color: rgba(58, 129, 230, 1);
}
.sub1{
  font-family: opensans;
  font-size: 16px;
  font-weight: 700;
}
.desc {
  font-family: opensans;
  font-size: 14px;
  font-weight: 700;
}
</style>
<script>
export default {
  data() {
    return {
      page: 1,
      selectedImage: "", // To store the selected image URL
      dialog: false, // To control the visibility of the dialog
      images: [
        {
          id: 1,
          image: require("@/assets/images/one.png"),
          title: "dd/mm/yyyy",
          subtitle:
            "Lorem ipsum dolor sit esw amet, consectetur adonsectetur ad",
        },
        {
          id: 2,
          image: require("@/assets/images/two.png"),
          title: "dd/mm/yyyy",
          subtitle:
            "Lorem ipsum dolor sit esw amet, consectetur adonsectetur ad",
        },
        {
          id: 3,
          image: require("@/assets/images/three.png"),
          title: "dd/mm/yyyy",
          subtitle:
            "Lorem ipsum dolor sit esw amet, consectetur adonsectetur ad",
        },
        {
          id: 4,
          image: require("@/assets/images/four.png"),
          title: "dd/mm/yyyy",
          subtitle:
            "Lorem ipsum dolor sit esw amet, consectetur adonsectetur ad",
        },
        {
          id: 5,
          image: require("@/assets/images/five.png"),
          title: "dd/mm/yyyy",
          subtitle:
            "Lorem ipsum dolor sit esw amet, consectetur adonsectetur ad",
        },
        {
          id: 6,
          image: require("@/assets/images/one.png"),
          title: "dd/mm/yyyy",
          subtitle:
            "Lorem ipsum dolor sit esw amet, consectetur adonsectetur ad",
        },
        {
          id: 7,
          image: require("@/assets/images/two.png"),
          title: "dd/mm/yyyy",
          subtitle:
            "Lorem ipsum dolor sit esw amet, consectetur adonsectetur ad",
        },
        {
          id: 8,
          image: require("@/assets/images/three.png"),
          title: "dd/mm/yyyy",
          subtitle:
            "Lorem ipsum dolor sit esw amet, consectetur adonsectetur ad",
        },
        {
          id: 9,
          image: require("@/assets/images/four.png"),
          title: "dd/mm/yyyy",

          subtitle:
            "Lorem ipsum dolor sit esw amet, consectetur adonsectetur ad",
        },
      ],
      cardGroups: [
        {
          image: require("@/assets/images/place2.png"),
          title: "Alex George",
          subtitle: "placed at ",
          description: "Goldmansacks",
        },
        {
          image: require("@/assets/images/place2.png"),
          title: "Alex George",
          subtitle: "placed at ",
          description: "Goldmansacks",
        },
        {
          image: require("@/assets/images/place1.png"),
          title: "Alex George",
          subtitle: "placed at ",
          description: "Goldmansacks",
        },
        {
          image: require("@/assets/images/place2.png"),
          title: "Alex George",
          subtitle: "placed at ",
          description: "Goldmansacks",
        },
        {
          image: require("@/assets/images/place2.png"),
          title: "Alex George",
          subtitle: "placed at ",
          description: "Goldmansacks",
        },
        {
          image: require("@/assets/images/place2.png"),
          title: "Alex George",
          subtitle: "placed at ",
          description: "Goldmansacks",
        },
        {
          image: require("@/assets/images/place1.png"),
          title: "Alex George",
          subtitle: "placed at ",
          description: "Goldmansacks",
        },
        {
          image: require("@/assets/images/place2.png"),
          title: "Alex George",
          subtitle: "placed at ",
          description: "Goldmansacks",
        },
      ],
    };
  },
  methods: {
    // Function to set the selected image and open the dialog
    selectImage(imageSrc) {
      this.selectedImage = imageSrc;
      this.dialog = true;
    },
  },
};
</script>