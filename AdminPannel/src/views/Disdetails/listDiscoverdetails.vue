<template>
  <div>
    <vue-element-loading
      :active="appLoading"
      :is-full-screen="true"
      background-color="#FFFFFF"
      color="#13736f"
      spinner="bar-fade-scale"
    />
    <v-row>
      <v-col>
        <v-card color="#87b2f8" height="60px">
          <v-row justify="center" class="px-8">
            <v-col
              cols="12"
              sm="6"
              md="8"
              align-self="center"
              class="pt-5 pl-15"
            >
              <span style="color: white; font-size: 25px; font-weight: bold; font-family:poppinsRegular;"
                >Discover Details
              </span>
            </v-col>
            <!-- </v-row>
            <v-row justify="end"> -->

            <!-- Add Discover Details -->
            <v-col
              cols="12"
              sm="6"
              md="4"
              align-self="center"
              class="text-right pt-4"
            >
              <v-btn
                @click="dialogAddDetails = true"
                class="ma-2"
                variant="outlined"
                color="white"
                style="font-family: poppinsRegular;"
                >Discover Details
                <v-icon end icon="mdi-plus"></v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-dialog v-model="dialogAddDetails" width="600px" persistent>
          <v-card class="pa-4" style="margin-top: 40px">
            <v-row>
              <v-col cols="11">
                <v-card-title class="text-h5 text-center" style="color: #0b5de1"
                  >ADD DETAILS</v-card-title
                >
              </v-col>
              <v-col cols="1">
                <v-icon @click="dialogAddDetails = false">mdi-close</v-icon>
              </v-col>
            </v-row>

            <v-card-text>
              <v-form ref="form">
                <!-- Course Name -->
                <v-text-field
                  v-model="heading"
                  label="heading"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>
                <!-- <div id="app">
                  <quill-editor
                    theme="snow"
                    toolbar="full"
                    v-model:content="noticeView.description"
                    contentType="html"
                  ></quill-editor>
                </div> -->
                <v-text-field
                  v-model="subheading"
                  label="subheading"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>

                <v-text-field
                  v-model="point1"
                  label="point 1"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>
                <v-text-field
                  v-model="point2"
                  label="point 2"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>
                <v-text-field
                  v-model="point3"
                  label="point 3"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>
                <v-text-field
                  v-model="point4"
                  label="point 4"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>

                <!-- Submit Button -->
                <v-btn
                  @click="validateDetails"
                  type="submit"
                  style="
                    background-color: #0b5de1;
                    color: #ffffff;
                    width: 600px;
                    height: 50px;
                  "
                >
                  <span class="white--text px-8">Add Details</span>
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card></v-dialog
        >
      </v-col>
    </v-row>

    <!-- list details         -->
    <v-row justify="start" v-for="(item, i) in detailslist" :key="i">
      <v-col cols="4" class="pt-10">
        <router-link
          :to="'/discoversingleView?id=' + item._id"
          style="text-decoration: none"
        >
          <div class="image-container" style="max-height: 500px">
            <v-img
              src="../../assets/images/dis_details.png"
              alt="Profile"
              width="100%"
            ></v-img>
          </div>
        </router-link>
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
              {{ item.heading }}
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
              {{ item.subheading }}
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
              {{ item.point1 }}
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
              {{ item.point2 }}
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
              {{ item.point3 }}
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
              {{ item.point4 }}
            </span>
          </v-col>
          <v-row justify="center">

          </v-row>
          <v-col cols="10" class="text-center pa-10 ">
            <v-btn
              @click="(openEditDialog = true), (editItem = item)"
              style="
                background-color: #2196f3;
                color: #ffffff;
                width: 30%;
                margin-right: 4%;
              "
            >
              <span class="white--text px-2">Edit</span>
            </v-btn>
            <v-btn
              @click="(deleteDialog = true), (delItem = item)"
              style="background-color: #ff5252; color: #ffffff; width: 30%"
            >
              <span class="white--text px-2">Delete</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- <v-row justify="start" class="pa-8">
      <v-col cols="12">
        <v-row justify="start" class="pa-2">
          <v-col
            cols="12"
            md="6"
            lg="4"
            class="text-left pa-2"
            v-for="(item, i) in detailslist"
            :key="i"
          >
            <v-row>
              <v-col cols="6">
                <router-link
                  :to="'/discoversingleView?id=' + item._id"
                  style="text-decoration: none"
                >
                  <v-img
                    src="../../assets/images/course_cat.png"
                    alt="Profile"
                    width="100%"
                  ></v-img>
                </router-link>
              </v-col>

              <v-col cols="6">
                <v-row justify="center" class="pa-4">
                  <v-col cols="12">
                    <span
                      class="analyticsValue"
                      style="
                        font-weight: bold;
                        font-size: 25px;
                        color: black;
                        font-family: 'poppinsRegular';
                      "
                    >
                      {{ item.heading }}
                    </span>
                  </v-col>
                  <v-col cols="12" class="text-center pa-0">
                    <span
                      class="analyticsValue"
                      style="
                        font-weight: bold;
                        font-size: 15px;
                        color: rgb(64, 8, 247);
                        font-family: 'poppinsRegular';
                      "
                    >
                      {{ item.subheading }}
                    </span>
                  </v-col>

                  <v-col cols="12" class="text-center pa-1">
                    <v-btn
                      @click="(openEditDialog = true), (editItem = item)"
                      style="
                        background-color: #2196f3;
                        color: #ffffff;
                        width: 40%;
                        margin-right: 3%;
                      "
                    >
                      <span class="white--text px-2">Edit</span>
                    </v-btn>
                    <v-btn
                      @click="(deleteDialog = true), (delItem = item)"
                      style="
                        background-color: #ff5252;
                        color: #ffffff;
                        width: 40%;
                      "
                    >
                      <span class="white--text px-2">Delete</span>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row> -->

    <!-- Edit details -->

    <v-dialog v-model="openEditDialog" width="600px" persistent>
      <v-card class="pa-4" style="margin-top: 40px">
        <v-row>
          <v-col cols="11">
            <v-card-title class="text-h5 text-center" style="color: #0b5de1"
              >EDIT DETAILS</v-card-title
            >
          </v-col>
          <v-col cols="1">
            <v-icon @click="openEditDialog = false">mdi-close</v-icon>
          </v-col>
        </v-row>

        <v-card-text>
          <v-text-field
            v-model="editItem.heading"
            label=" heading"
            color="black"
            variant="outlined"
            required
            outlined
            class="custom-input"
          ></v-text-field>
          <v-text-field
            v-model="editItem.subheading"
            label=" subheading"
            color="black"
            variant="outlined"
            required
            outlined
            class="custom-input"
          ></v-text-field>

          <v-text-field
            v-model="editItem.point1"
            label=" point1"
            color="black"
            variant="outlined"
            required
            outlined
            class="custom-input"
          ></v-text-field>

          <v-text-field
            v-model="editItem.point2"
            label=" point2"
            color="black"
            variant="outlined"
            required
            outlined
            class="custom-input"
          ></v-text-field>

          <v-text-field
            v-model="editItem.point3"
            label=" point3"
            color="black"
            variant="outlined"
            required
            outlined
            class="custom-input"
          ></v-text-field>
          <v-text-field
            v-model="editItem.point4"
            label=" point4"
            color="black"
            variant="outlined"
            required
            outlined
            class="custom-input"
          ></v-text-field>

          <!-- Submit Button -->
          <v-btn
            type="submit"
            @click="editDetails(editItem)"
            style="
              background-color: #0b5de1;
              color: #ffffff;
              width: 600px;
              height: 50px;
            "
          >
            <span class="white--text px-8">SAVE</span>
          </v-btn>
        </v-card-text>
      </v-card></v-dialog
    >

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" width="600px" persistent>
      <v-card>
        <v-row>
          <v-col cols="11">
            <v-card-title>Delete Confirmation</v-card-title>
          </v-col>
          <v-col cols="1">
            <v-icon @click="deleteDialog = false">mdi-close</v-icon>
          </v-col>
        </v-row>

        <v-card-text>
          Are you sure you want to delete this Discover Details?
        </v-card-text>
        <v-card-actions>
          <v-btn @click="deleteDetails(delItem)" color="red">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
    
  
    <script>
import axios from "axios";
// import store from "./../../store";
import VueElementLoading from "vue-element-loading";
// import "quill/dist/quill.snow.css";
// import { QuillEditor } from "@vueup/vue-quill";

export default {
  components: {
    VueElementLoading,
    // QuillEditor,
  },
  data() {
    return {
      ServerError: false,
      heading: null,
      subheading: null,
      point1: null,
      point2: null,
      point3: null,
      point4: null,
      snackbar: false,
      msg: "",
      timeoutDuration: 1000,
      loading: false,
      detailslist: [],
      dialogAddDetails: false,
      openEditDialog: false,
      editItem: "",
      deleteDialog: false,
      delItem: "",
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
    this.getCategory();
  },
  methods: {
    getCategory() {
      this.appLoading = true;
      axios({
        method: "GET",
        url: "/discoversection/list",
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
            this.detailslist = response.data.reviews;
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
    validateDetails() {
      if (!this.heading) {
        this.msg = "Please provide a heading";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else if (!this.subheading) {
        this.msg = "Please provide a subheading";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else if (!this.point1) {
        this.msg = "Please provide point 1";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else if (!this.point2) {
        this.msg = "Please provide point 2";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else if (!this.point3) {
        this.msg = "Please provide point 3";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else if (!this.point4) {
        this.msg = "Please provide point 4";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else {
        this.addDetails();
      }
    },
    editDetails(id) {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/discoversection/update",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          heading: this.editItem.heading,
          subheading: this.editItem.subheading,
          point1: this.editItem.point1,
          point2: this.editItem.point2,
          point3: this.editItem.point3,
          point4: this.editItem.point4,
          id: id._id,
        },
      })
        .then((response) => {
          if (response.data.status) {
            this.appLoading = false;
            this.msg = response.data.msg;
            this.snackbar = true;
            this.openEditDialog = false;
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
    deleteDetails(id) {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/discoversection/delete",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          id: id._id,
        },
      })
        .then((response) => {
          if (response.data.status) {
            this.appLoading = false;
            this.msg = response.data.msg;
            this.snackbar = true;
            this.deleteDialog = false;
            this.getCategory();
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
    addDetails() {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/discoversection/add",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          heading: this.heading,
          subheading: this.subheading,
          point1: this.point1,
          point2: this.point2,
          point3: this.point3,
          point4: this.point4,
        },
      })
        .then((response) => {
          if (response.data.status) {
            this.appLoading = false;
            this.msg = response.data.msg;
            this.snackbar = true;
            this.dialogAddDetails = false;
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
.image-container {
  max-height: 500px;
  overflow: hidden; /* Ensure the image won't overflow its container */
}
</style>
    