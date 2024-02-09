<template>
  <div class="hidden-sm-and-down">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-img src="../../assets/images/intro.png" height="getImageHeight()">
          <v-row justify="center" class="pt-lg-16 pt-16 ">
            <v-col cols="12" sm="12" md="12" lg="12" class="pt-md-10 pt-lg-0">
              <Vue3Marquee>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="marq"
                  >Admissions open! Secure your place at Trinity for the upcoming academic year. Don't wait <span style="color: rgba(255, 182, 49, 1)"> <v-btn @click="contactPage()" variant="text">apply now!</v-btn> </span></span
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="marq"
                  >Admissions open! Secure your place at Trinity for the upcoming academic year. Don't wait <span style="color: rgba(255, 182, 49, 1)"> <v-btn @click="contactPage()" variant="text">apply now!</v-btn></span></span
                >
              </Vue3Marquee>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
              cols="11"
              lg="9"
              sm="10"
              md="12"
              align-self="center"
              class="text-center head responsive-text pt-lg-16 pt-0"
            >
              <span style="color: white"
                >Empower yourself with education to reach the pinnacle of
                <span style="color: rgba(255, 182, 49, 1)">success</span></span
              >
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col md="12" lg="12" class="pt-lg-14">
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
            <v-col md="12" lg="12" class="pt-md-16 pt-lg-2">
              <v-col md="12" lg="12">
              <span>
                <v-btn color="blue" @click="coursePage()"
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



  <div class="hidden-md-and-up">
    <v-row justify="center" class="d-none d-sm-flex d-md-none">
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-img src="../../assets/images/intro.png" height="getImageHeight()">
          <v-row justify="center" class="pt-lg-16 pt-16 ">
            <v-col cols="12" sm="12" md="12" lg="12" class="pt-md-10 pt-lg-0">
              <Vue3Marquee>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="marq"
                  >Admissions open! Secure your place at Trinity for the upcoming academic year. Don't wait <span style="color: rgba(255, 182, 49, 1)"> <v-btn @click="contactPage()" variant="text">apply now!</v-btn> </span></span
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="marq"
                  >Admissions open! Secure your place at Trinity for the upcoming academic year. Don't wait <span style="color: rgba(255, 182, 49, 1)"> <v-btn @click="contactPage()" variant="text">apply now!</v-btn></span></span
                >
              </Vue3Marquee>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
              cols="11"
            
              sm="10"
              
              align-self="center"
              class="text-center head responsive-text2 pt-lg-16 pt-0"
            >
              <span style="color: white"
                >Empower yourself with education to reach the pinnacle of
                <span style="color: rgba(255, 182, 49, 1)">success SM</span></span
              >
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col md="12" lg="12" class="pt-lg-14">
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
            <v-col cols="12" sm="12" class="pt-sm-10">
              <v-col cols="12" sm="11">
              <span>
                <v-btn color="blue" @click="coursePage()"
                  ><v-icon left>mdi-information-outline</v-icon>
                  <span style="font-size: 10px;">Learn More</span>
                </v-btn>
              </span>
            </v-col> 
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
  </div>



  <div class="hidden-sm-and-up">
    <v-row justify="center" class=".d-flex">
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-img src="../../assets/images/introcrop1.jpeg" height="getImageHeight()">
          <v-row justify="center" class="pt-lg-16 pt-16 ">
            <v-col cols="12" sm="12" md="12" lg="12" class="pt-md-10 pt-lg-0">
              <Vue3Marquee>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="marq" style="font-size: 14px;"
                  >Admissions open! Secure your place at Trinity for the upcoming academic year. Don't wait <span style="color: rgba(255, 182, 49, 1) "> <v-btn @click="contactPage()" variant="text">apply now!</v-btn> </span></span
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="marq" style="font-size: 14px;"
                  >Admissions open! Secure your place at Trinity for the upcoming academic year. okokokokDon't wait <span style="color: rgba(255, 182, 49, 1)"> <v-btn @click="contactPage()" variant="text">apply now!</v-btn></span></span
                >
              </Vue3Marquee>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
              cols="10"
            
            
              
              align-self="center"
              class="text-center head responsive-text2 pt-16 pt-lg-16 pt-0"
            >
              <span style="font-size: 20px; color: white"
                >Empower yourself with education to reach the pinnacle of
                <span style="color: rgba(255, 182, 49, 1)">success</span></span
              >
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" class="pt-lg-14">
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
      <center>
            <v-col cols="12" sm="12" class="pt-sm-10 pr-0">
              <center>
              <v-col cols="10" sm="11" class="pr-0 pl-6">
              <span>
                <v-btn  height="25px" color="blue" @click="coursePage()"
                  ><v-icon left>mdi-information-outline</v-icon>
                  <span style="font-size: 8px;">Learn More</span>
                </v-btn>
              </span>
            </v-col>
          </center> 
            </v-col>
          </center>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
  </div>




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
    font-size: 10px;
  }
}
.responsive-text2 {
  font-size: 30px;

  @media (max-width: 576px) {
    font-size: 10px;
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
  methods:{
    contactPage(){
      this.$router.push({path:"/contactus"})
    },
    coursePage(){
      this.$router.push({path:"/ourcourses"})
    }
  },
  getImageHeight() {
      // Adjust the image height based on the screen size
      if (this.$vuetify.breakpoint.smAndDown) {
        return '2300px'; // Adjust the height for small screens
      } else {
        return '100%'; // Default height for larger screens
      }
    },
};
</script>