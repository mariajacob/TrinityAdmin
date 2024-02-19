<template>
  <div>
    <v-snackbar v-model="snackbar" multi-line color="blue">
      {{ msg }}

      <template v-slot:actions>
        <v-btn color="red" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-row>
      <v-col>
        <!-- Toolbar with "Add About Us" button -->
        <v-card color="#81bec9" height="60px">
          <v-row justify="censtter">
            <v-col
              cols="12"
              sm="6"
              md="8"
              align-self="center"
              class="pt-6 pl-15"
            >
              <span style="color: white; font-size: 25px; font-weight: bold"
                >Discover Details
              </span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="start" >
      <v-col cols="4" class="pt-10">
        
          <div class="image-container" style="max-height: 500px">
            <v-img
              src="../../assets/images/dis_details.png"
              alt="Profile"
              width="100%"
            ></v-img>
          </div>
        
      </v-col>
      <v-col cols="8" class="pt-10">
        <v-row>
          <v-col cols="12" class="pt-10">
            <span
              class="analyticsValue"
              style="
                font-weight: bold;
                font-size: 35px;
                color: black;
                font-family: 'poppinsBold';
              "
            >
              {{ detailsView.heading }}
            </span>
          </v-col>
          <v-col cols="12" class="pt-3">
            <span
              class="analyticsValue"
              style="
                font-weight: bold;
                font-size: 24px;
                color: rgb(1, 43, 255);
                font-family: 'poppinsRegular';
              "
            >
              {{ detailsView.subheading }}
            </span>
          </v-col>
          <v-col cols="6">
            <v-icon color="blue">mdi-information</v-icon>
            <span
              class="analyticsValue pa-3"
              style="
                font-weight: bold;
                font-size: 20px;
                color: rgb(1, 43, 255);
                font-family: 'poppinsRegular';
              "
            >
              {{ detailsView.point1 }}
            </span>
          </v-col>

          <v-col cols="6">
            <v-icon color="blue">mdi-information</v-icon>
            <span
              class="analyticsValue pa-3"
              style="
                font-weight: bold;
                color: rgb(1, 43, 255);
                font-size: 20px;
                font-family: 'poppinsRegular';
              "
            >
              {{ detailsView.point2 }}
            </span>
          </v-col>
          <v-col cols="6">
            <v-icon color="blue">mdi-information</v-icon>
            <span
              class="analyticsValue pa-3"
              style="
                font-weight: bold;
                color: rgb(1, 43, 255);
                font-size: 20px;
                font-family: 'poppinsRegular';
              "
            >
              {{ detailsView.point3 }}
            </span>
          </v-col>
          <v-col cols="6">
            <v-icon color="blue">mdi-information</v-icon>
            <span
              class="analyticsValue pa-3"
              style="
                font-weight: bold;
                color: rgb(1, 43, 255);
                font-size: 20px;
                font-family: 'poppinsRegular';
              "
            >
              {{ detailsView.point4 }}
            </span>
          </v-col>
          
        </v-row>
      </v-col>
    </v-row>
    <!-- <v-row justify="center" text-align="center">
        <v-col cols="12" sm="8" md="6" class="mt-4">
          
          <v-card class="elevation-5"   >
            <v-col cols="12" class="text-center">
                      <v-avatar size="100" color="#f2e8df">
                        <v-img
                      src="../../assets/images/review_logo.png"
                      alt="Profile"
                      width="100%"
                    ></v-img>
                      </v-avatar>
                    </v-col>
            <v-card-title class="text-h5 white--text text-center">
              {{ reviewView.name }}
            </v-card-title>
            <v-card-subtitle class="white--text text-center">
              {{ reviewView.designation }}
            </v-card-subtitle>
            <v-card-subtitle class="white--text text-center">
              {{ reviewView.desc }}
            </v-card-subtitle>
            <v-card-text>
              
            </v-card-text>
          </v-card>
        </v-col>
      </v-row> -->
  </div>
</template>
  
  
  <script>
import axios from "axios";
// import store from "../../store";

export default {
  data() {
    return {
      ServerError: false,
      snackbar: false,
      msg: "",
      timeoutDuration: 1000,
      loading: false,
      detailsView: {},
      
    };
  },
  beforeMount() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      this.appLoading = true;
      axios({
        method: "post",
        url: "/discoversection/singleview",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          id: this.$route.query.id,
        },
      })
        .then((response) => {
          if (response.data.status == true) {
            this.appLoading = false;
            this.msg = response.data.msg;
            console.log(response.data);
            // this.loading = false;
            this.detailsView = response.data.review;
          } else {
            this.appLoading = false;
            this.msg = response.data.msg;
            this.snackbar = true;
          }
        })
        .catch((err) => {
          // store.commit("appLoading", false);
          this.ServerError = true;
          console.log(err);
        });
    },
  },
};
</script>
  
  <style scoped>
.custom-input {
  margin-bottom: 20px;
}

.custom-button {
  width: 100%;
}
</style>
  