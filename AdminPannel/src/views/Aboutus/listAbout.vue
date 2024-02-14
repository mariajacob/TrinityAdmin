<template>
  <div>
    <vue-element-loading
      :active="appLoading"
      :is-full-screen="true"
      background-color="#FFFFFF"
      color="#13736f"
      spinner="bar-fade-scale"
    />
    <v-row justify="center">
      <v-col cols="12">
        <v-card color="#87b2f8" height="60px">
          <v-row justify="start">
            <v-col
              cols="8"
              sm="5"
              md="3"
              align-self="center"
              class="pt-5 pl-15 HeadingText"
            >
              <!-- Added pl-4 class for padding-left -->
              <span
                
                style="
                  color: white;
                  font-size: 30px;
                  font-weight: bold;
                  
                "
                >{{ about.heading }}</span
              >
            </v-col>
            <v-col
              cols="12"
              sm="9"
              md="9"
              align-self="center"
              class="text-right pt-4 "
            >
              <v-btn
                @click="dialogEditabout = true"
                class="ma-2 "
                variant="outlined"
                color="white"
                style="font-family: 'poppinsRegular';"
              >
                Update
                <v-icon end icon="mdi-pencil"></v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <!-- edit about us -->
          <v-dialog v-model="dialogEditabout" width="600px" persistent>
            <v-card class="pa-4" style="margin-top: 40px; font-family: 'poppinsRegular';" >
              <v-row>
                <v-col cols="11">
                  <v-card-title
                    class="text-h5 text-center"
                    style="color: #0b5de1; font-family: 'poppinsRegular'; "
                    
                    >EDIT ABOUT US</v-card-title
                  >
                </v-col>
                <v-col cols="1">
                  <v-icon @click="dialogEditabout = false">mdi-close</v-icon>
                </v-col>
              </v-row>

              <v-card-text >
                <v-form ref="form">
                  <!-- Course Name -->
                  <v-textarea
                    v-model="about.aboutus"
                    label="About us"
                    color="black"
                    variant="outlined"
                    required
                    outlined
                    class="custom-input"
                  ></v-textarea>
                  <v-text-field
                    v-model="about.vision"
                    label="Vision"
                    color="black"
                    variant="outlined"
                    required
                    outlined
                    class="custom-input"
                  ></v-text-field>
                  <v-text-field
                    v-model="about.mission"
                    label="Mission"
                    color="black"
                    variant="outlined"
                    required
                    outlined
                    class="custom-input"
                  ></v-text-field>
                  <!-- Course Description -->
                  

                  <!-- Submit Button -->
                  <v-btn
                    type="submit"
                    @click="editAbout()"
                    style="
                      background-color: #0b5de1;
                      color: #ffffff;
                      width: 600px;
                      height: 50px;
                    "
                  >
                    <span class="white--text px-8">SAVE</span>
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card></v-dialog>
          </v-card>
      </v-col>

      <!-- list about -->
      <v-row justify="start" class="pt-5">
        <v-col cols="12">
          <v-row justify="start" class="pa-5">
            <v-col cols="12" lg="12" xl="12" class="text-left">
              <v-row justify="center">
                
                <v-col cols="12" class="text-left">
                  <span
                    class="analyticsValue"
                    style="font-family: 'poppinsRegular'; font-size: 18px"
                    >{{ about.aboutus }}</span
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row justify="start" class="px-5 ">
            <v-col cols="6" class="pa-0">
              <v-card color="#5290f2" width="600px" height="150">
                <v-row justify="center" class="pa-5">
                  <v-col cols="12">
                    <span
                      class="analyticsValue"
                      style="
                        font-size: 30px;
                        
                        color: rgb(255, 250, 250);
                        font-family: 'poppinsRegular';
                      "
                      >Our Vision
                    </span>
                    <br />

                    <span
                      class="analyticsValue"
                      style="
                        font-size: 20px;
                        text-align: center;
                        color: rgb(255, 250, 250);
                        font-family: 'poppinsRegular';
                      "
                      >{{ about.vision }}</span
                    >
                  </v-col></v-row
                >
              </v-card>
            </v-col>
            <v-col cols="6" class="pa-0"> </v-col>
          </v-row>

          <v-row justify="end" class="px-5">
            <v-col cols="6" class="pa-0"> </v-col>
            <v-col cols="6" class="pa-0">
              <v-card color="#5290f2" width="600px" height="150">
                <v-row justify="center" class="pa-5">
                  <v-col cols="12">
                    <span
                      class="analyticsValue"
                      style="
                        font-size: 30px;
                        text-align: center;
                        color: rgb(255, 250, 250);
                        font-family: 'poppinsRegular';
                      "
                      >Our Mission
                    </span>

                    <br />
                    <span
                      class="analyticsValue"
                      style="
                        font-size: 20px;
                        text-align: center;
                        color: rgb(255, 250, 250);
                        font-family: 'poppinsRegular';
                      "
                      >{{ about.mission }}</span
                    >
                  </v-col></v-row
                >
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
// import store from "./../../store";
import VueElementLoading from "vue-element-loading";

export default {
  components: {
    VueElementLoading,
  },
  data() {
    return {
      ServerError: false,
      heading: null,
      aboutus: null,
      vision: null,
      mission: null,
      snackbar: false,
      msg: "",
      timeoutDuration: 1000,
      loading: false,
      about: {},
      dialogEditabout:false,
      appLoading: false,
      // Pagelength: "",
      // page: 1,
      // limit: 20,
      // courseNameRules: [
      //   (v) => !!v || "Course Name is required",
      // ],
      // Add more rules as needed for validation
    };
  },
  beforeMount() {
    this.getData();
  },
  methods: {
    getData() {
      this.appLoading = true;
      axios({
        method: "GET",
        url: "/aboutus/singleview",
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.data.status == true) {
            this.appLoading = false;
            this.msg = response.data.msg;
            console.log(response.data);
            // this.loading = false;
            this.about = response.data.review;
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
    editAbout() {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/aboutus/update",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          // heading: this.heading,
          aboutus: this.about.aboutus,
          vision: this.about.vision,
          mission: this.about.mission,
          id: this.about._id,
        },
      })
        .then((response) => {
          if (response.data.status) {
            this.appLoading = false;
            this.msg = response.data.msg;
            this.snackbar = true;
            this.dialogEditabout = false;
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
<style>
.custom-app-bar {
  max-width: 97%;
  margin: 30px auto 0;
  margin-left: 20px;
  border-radius: 5px;
  height: 70px;
}
.analyticsValue {
  font-family: poppinsBoldItalic;
}
</style>
