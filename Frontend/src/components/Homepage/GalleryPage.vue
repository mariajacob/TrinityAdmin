<template>
  <div class="pb-10 pt-10">
    <v-row justify="center">
      <v-col cols="12" class="text-center head">
        <span style="color: rgb(0, 0, 0)"
          >Our <span style="color: rgba(255, 182, 49, 1)">Gallery</span></span
        >
      </v-col>
      <v-col cols="12" lg="6" class="sub2 pa-lg-0 px-8" style="text-align: justify;">
        <span
          >Each photo in our gallery tells a story of determination, teamwork,
          and triumph. They are the milestones on our path to success and the
          snapshots of unforgettable events.</span
        >
      </v-col>
    </v-row>
    <v-row justify="center" class="px-10">
      <v-col cols="12" lg="11" sm="12" class="px-sm-0" v-for="(image, index) in items" :key="index">
        <v-card flat style="padding-top: 10px">
          <v-row justify="center" >
            <v-col cols="12" sm="12" md="5" lg="5" class="pa-3">
              <!-- Add @click event listener to trigger the selectImage function -->
              <v-img
                :src="image.one"
                class="zoom-card"
                style="background-size: cover; cursor: pointer"
                @click="selectImage(image.one)"
              ></v-img>
            </v-col>
            <v-col justify-start cols="12" md="6" sm="12" class="pa-5">
              <v-row >
                <v-col cols="12" md="6" lg="6" sm="12" class="px-sm-0 pt-md-1">
                  <v-img
                    :src="image.two"
                    class="zoom-card"
                    style="
                      background-size: cover;
                      object-fit: contain;
                      cursor: pointer;
                    "
                    @click="selectImage(image.two)"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="px-sm-0 px-md-5 px-lg-5 pt-md-1">
                  <v-img
                    :src="image.three"
                    class="zoom-card"
                    style="
                      background-size: cover;
                      object-fit: contain;
                      cursor: pointer;
                    "
                    @click="selectImage(image.three)"
                  ></v-img>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="6" class="px-sm-0 pt-md-1">
                  <v-img
                    :src="image.four"
                    class="zoom-card"
                    style="
                      background-size: cover;
                      object-fit: contain;
                      cursor: pointer;
                    "
                    @click="selectImage(image.four)"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="px-sm-0 px-md-5 px-lg-5 pt-md-1">
                  <v-img
                    :src="image.five"
                    class="zoom-card"
                    style="
                      background-size: cover;
                      object-fit: contain;
                      cursor: pointer;
                    "
                    @click="selectImage(image.five)"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Add a dialog for image preview -->
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

.sub2 {
  font-family: opensans;
  font-size: 16px;
  font-weight: 700;
}

.zoom-card {
  transition: all 0.2s ease-in-out;
}

.zoom-card:hover {
  cursor: pointer;
  transform: scale(1.021);
  box-shadow: 0px 2px 4px #999;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          one: require("../../assets/images/one.png"),
          two: require("../../assets/images/two.png"),
          three: require("../../assets/images/three.png"),
          four: require("../../assets/images/four.png"),
          five: require("../../assets/images/five.png"),
        },
      ],
      selectedImage: "",
      dialog: false,
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
