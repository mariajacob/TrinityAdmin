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
        <v-card color="#87b2f8" height="60px">
          <v-row justify="censtter">
            <v-col
              cols="12"
              sm="6"
              md="8"
              align-self="center"
              class="pt-6 pl-15"
            >
              <span style="color: white; font-size: 25px; font-weight: bold"
                >Tail Section Details
              </span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
<!-- single view -->
    <v-row justify="start" class="pa-8">
        <v-col cols="12">
          <v-row justify="start" class="pa-2">
            <v-col
              cols="12"
              sm="12"
              lg="12"
              class="text-left pa-2"
              
            >
              <v-card
                rounded="lg"
                elevation="12"
                style="height: 250px; margin-top: 10px"
              >
                <v-row justify="center" class="pa-4">
                  <!-- <v-col cols="12">
                    <router-link
                      :to="'/tailsingleView?id=' + item._id"
                      style="text-decoration: none"
                    >
                      
                    </router-link>
                  </v-col> -->
                 
                  <v-col cols="10" class="text-center pa-8">
                    <span
                      class="analyticsValue"
                      style="
                        font-weight: bold;
                        font-size: 25px;
                        color: black;
                        font-family: 'poppinsRegular';
                      "
                    >
                      {{ tailView.heading  }}
                    </span>
                  </v-col>
                  <v-col cols="12" class="text-center pa-0">
                    <span
                      class="analyticsValue"
                      style="
                        font-weight: bold;
                        font-size: 21px;
                        color: rgb(64, 8, 247);
                        font-family: 'poppinsRegular';
                      "
                    >
                      {{ tailView.subheading  }}
                    </span>
                  </v-col>
               
                 
                  
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    <!-- <v-row justify="center" text-align="center">
      <v-col cols="12" sm="12" md="12" class="mt-12">
        
        <v-card class="elevation-15">
          <v-card-title class="text-h5 white--text text-center">
            {{ tailView.heading }}
          </v-card-title>
          <v-card-subtitle class="white--text text-center">
            {{ tailView.subheading }}
          </v-card-subtitle>
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
      tailView: {},
      // courseNameRules: [
      //   (v) => !!v || "Course Name is required",
      // ],
      // Add more rules as needed for validation
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
        url: "/tailsection/singleview",
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
            this.tailView = response.data.review;
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
  