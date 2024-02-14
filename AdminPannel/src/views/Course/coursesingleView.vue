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
                >Course Category
              </span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" text-align="center">
      <v-col cols="12" sm="8" md="6" class="mt-4">
        <!-- Adjust the margin-top as needed -->
        <v-card class="elevation-5"   >
          <v-img
            src="../../assets/images/course_cat.png"
            alt="Profile"
           
            
          ></v-img>
          <v-card-title class="text-h5 white--text text-center">
            {{ catView.catName }}
          </v-card-title>

          <v-card-subtitle class="white--text text-center">
            {{ catView.desc }}
          </v-card-subtitle>
          <v-card-text>
            <!-- Display other details of the course category -->
            <!-- Example: {{ category.someOtherDetail }} -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
      catView: {},
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
        url: "/category/singleview",
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
            this.catView = response.data.data;
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
