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
                >Course Category
              </span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

<v-row justify="center">
    <v-col cols="12" class="text-center">
        
        <span style="font-family: 'poppinsBold'; font-size: 25px">{{ courseView.courseName }}</span>
    </v-col>
    <v-col cols="12" class="text-right">
        
        <span style="font-family: 'poppinsBold'; font-size: 18px; color: rgb(252, 216, 10);">Course Duration : </span><span style="font-family: 'poppinsBold'; font-size: 18px; " > {{ courseView.duration }}</span>
    </v-col>
    <v-col cols="12">
          <v-card>
            <v-img
            src="../../assets/images/course_logo.png"
              max-height="325"
              cover
              class="bg-grey-lighten-2"
            ></v-img>
           
          </v-card>
        </v-col>
  <v-col cols="12">
    <span style="font-family: 'poppinsBold'; font-size: 25px">Course Overview</span><br><br>
    <span style="font-family: 'poppinsRegular'; font-size: 18px">{{ courseView.overview }}</span>
  </v-col>
  <v-col cols="12">
    <span style="font-family: 'poppinsBold'; font-size: 25px">Course Information</span><br><br>
    <span style="font-family: 'poppinsRegular'; font-size: 18px">{{ courseView.course_info }}</span>
  </v-col>
  <v-col cols="12">
    <span style="font-family: 'poppinsBold'; font-size: 25px">Certificate Names</span><br><br>
            <v-icon color="rgb(252, 216, 10)">mdi-information</v-icon>
            <span
              class="analyticsValue pa-3"
              style="
                font-weight: bold;
                font-size: 20px;
                color: rgb(252, 216, 10);
                font-family: 'poppinsRegular';
              "
            >
              {{ courseView.certi_name1 }}
            </span>
          </v-col>

          <v-col cols="12">
            <v-icon color="rgb(252, 216, 10)">mdi-information</v-icon>
            <span
              class="analyticsValue pa-3"
              style="
                font-weight: bold;
                color: rgb(252, 216, 10);
                font-size: 20px;
                font-family: 'poppinsRegular';
              "
            >
              {{ courseView.certi_name2 }}
            </span>
          </v-col>
          <v-col cols="12">
            <v-icon color="rgb(252, 216, 10)">mdi-information</v-icon>
            <span
              class="analyticsValue pa-3"
              style="
                font-weight: bold;
                color: rgb(252, 216, 10);
                font-size: 20px;
                font-family: 'poppinsRegular';
              "
            >
              {{ courseView.certi_name3 }}
            </span>
          </v-col>
          <v-col cols="12">
    <span style="font-family: 'poppinsBold'; font-size: 25px">Category</span><br><br>
    <span style="font-family: 'poppinsRegular'; font-size: 18px">{{ courseView.category }}</span>
  </v-col>
</v-row>


    <!-- <v-row justify="center" text-align="center">
      <v-col cols="12" sm="8" md="6" class="mt-4">
        
        <v-card class="elevation-5">
          <v-img src="../../assets/images/course_cat.png" alt="Profile"></v-img>
          <v-card-title class="text-h5 white--text text-center">
            {{ catView.catName }}
          </v-card-title>

          <v-card-subtitle class="white--text text-center">
            {{ catView.desc }}
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
      courseView: {},
      // courseNameRules: [
      //   (v) => !!v || "Course Name is required",
      // ],
      // Add more rules as needed for validation
    };
  },
  beforeMount() {
    this.getCourse();
  },
  methods: {
    getCourse() {
      this.appLoading = true;
      axios({
        method: "post",
        url: "/courses/singleview",
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
            this.courseView = response.data.data;
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
  