<template>
  <div>
    <v-row justify="center">
      <v-col cols="12">
        <v-img src="../../assets/images/intro.png" height="100%" cover>
          <v-row justify="center" class="pt-16">
            <v-col cols="12">
              <Vue3Marquee>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="marq"
                  >Admissions open! Secure your place at Trinity for the upcoming academic year. Don't wait <span style="color: rgba(255, 182, 49, 1)"> apply now!</span></span
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="marq"
                  >Admissions open! Secure your place at Trinity for the upcoming academic year. Don't wait <span style="color: rgba(255, 182, 49, 1)"> apply now!</span></span
                >
              </Vue3Marquee>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
              cols="11"
              lg="9"
              sm="10"
              md="8"
              align-self="center"
              class="text-center head responsive-text pt-16"
            >
              <span style="color: white"
                >Empower yourself with education to reach the pinnacle of
                <span style="color: rgba(255, 182, 49, 1)">success</span></span
              >
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
                      cols="2"
                      lg="2"
                      sm="2"
                      md="2"
                    >
                      <v-card elevation="0">
                        <v-img
                          :src="card.image"
                          height="auto"
                          width="100%"
                        ></v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
    <v-row justify="center" class="image-button">
            <v-col cols="12">
              <v-col cols="12">
              <span>
                <v-btn color="blue"
                  ><v-icon left>mdi-information-outline</v-icon>
                  Learn More
                </v-btn>
              </span>
            </v-col>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
  </div>

<!-- <div>
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
                cols="3"
                lg="2"
                sm="2"
                md="2"
              >
                <v-card elevation="0">
                    <v-img :src="card.image" height="auto" width="100%"></v-img>
                  
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div> -->
</template>
<style scoped>
.head {
  font-size: 50px;
  font-family: opensans;
  font-weight: 700;
}
.marq {
  color: white;
  font-size: 20px;
  font-family: archireg;
  text-transform: capitalize;
}
.sub3 {
  font-family: opensans;
  font-size: 25px;
  font-weight: 500;
}
.responsive-text {
  font-size: 50px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
}
.responsive-texttt {
  font-size: 24px;

  @media (max-width: 576px) {
    font-size: 10px;
  }
}
.image-button {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* padding: 10px; */
  text-align: center;
}
</style>
<script>
export default {
  data() {
    return {
      cardGroups: [
        [
          // { image: require("@/assets/images/intro1.png") },
          { image: require("@/assets/images/Frame 3540.png") },
          { image: require("@/assets/images/Frame 3541.png") },
          { image: require("@/assets/images/Frame 3542.png") },
        ],
        [
          { image: require("@/assets/images/Frame 3543.png") },
          { image: require("@/assets/images/Frame 3538.png") },
          { image: require("@/assets/images/Frame 3539.png") },
          // { image: require("@/assets/images/intro1.png") },
        ],
      ],
    };
  },
};
</script>