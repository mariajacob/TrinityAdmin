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
                <span style="color: white; font-size: 25px; font-weight: bold"
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
  
      <!--               -->
  
      <!-- List Review -->
  
      <v-row justify="start" class="pa-8">
        <v-col cols="12">
          <v-row justify="start" class="pa-2">
            <v-col
              cols="5"
              sm="6"
              lg="4"
              class="text-left pa-2"
              v-for="(item, i) in detailslist"
              :key="i"
            >
              <v-card
                rounded="lg"
                elevation="6"
                style="height: 350px; margin-top: 10px"
              >
                <v-row justify="center" class="pa-4">
                  <v-col cols="12">
                    <router-link
                      :to="'/discoversingleView?id=' + item._id"
                      style="text-decoration: none"
                    >
                      <v-img
                        src="../../assets/images/review_logo.png"
                        alt="Profile"
                        width="100px"
                        height="100px"
                        class="mx-auto"
                      ></v-img>
                    </router-link>
                  </v-col>
                  <v-col cols="12" class="text-center pa-0">
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
                  <v-col cols="6" class="text-center pa-0">
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
                  <v-col cols="6" class="text-center pa-0">
                    <span
                      class="analyticsValue"
                      style="
                        font-weight: bold;
                        font-size: 15px;
                        color: rgb(64, 8, 247);
                        font-family: 'poppinsRegular';
                      "
                    >
                      {{ item.point1 }}
                    </span>
                  </v-col>
                  <v-col cols="6" class="text-center pa-0">
                    <span
                      class="analyticsValue"
                      style="
                        font-weight: bold;
                        font-size: 15px;
                        color: rgb(64, 8, 247);
                        font-family: 'poppinsRegular';
                      "
                    >
                      {{ item.point2 }}
                    </span>
                  </v-col>
                  <v-col cols="6" class="text-center pa-0">
                    <span
                      class="analyticsValue"
                      style="
                        font-weight: bold;
                        font-size: 15px;
                        color: rgb(64, 8, 247);
                        font-family: 'poppinsRegular';
                      "
                    >
                      {{ item.point3 }}
                    </span>
                  </v-col>
                  <v-col cols="6" class="text-center pa-0">
                    <span
                      class="analyticsValue"
                      style="
                        font-weight: bold;
                        font-size: 15px;
                        color: rgb(64, 8, 247);
                        font-family: 'poppinsRegular';
                      "
                    >
                      {{ item.point4 }}
                    </span>
                  </v-col>
                  <!-- <v-col cols="12" class="text-left">
                    
                    <span
                      class="analyticsValue pa-0"
                      style="
                        font-size: 15px;
                        color: black;
                        font-family: 'poppinsRegular';
                        white-space: pre-line;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      "
                    >
                      {{ item.desc.slice(0, 50) }}
                    </span>
                    <span v-if="item.desc.length > 50"> .... </span>
                  </v-col> -->
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
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  
      <!-- Edit review -->
  
      <v-dialog v-model="openEditDialog" width="600px" persistent>
        <v-card class="pa-4" style="margin-top: 40px">
          <v-row>
            <v-col cols="11">
              <v-card-title class="text-h5 text-center" style="color: #0b5de1"
                >EDIT REVIEW</v-card-title
              >
            </v-col>
            <v-col cols="1">
              <v-icon @click="openEditDialog = false">mdi-close</v-icon>
            </v-col>
          </v-row>
  
          <v-card-text>
            <v-text-field
              v-model="editItem.name"
              label=" Name"
              color="black"
              variant="outlined"
              required
              outlined
              class="custom-input"
            ></v-text-field>
            <v-text-field
              v-model="editItem.designation"
              label=" Designation"
              color="black"
              variant="outlined"
              required
              outlined
              class="custom-input"
            ></v-text-field>
  
            <!-- Course Description -->
            <v-textarea
              v-model="editItem.desc"
              label="Description"
              color="black"
              variant="outlined"
              required
              outlined
              class="custom-input"
            ></v-textarea>
  
            <!-- Submit Button -->
            <v-btn
              type="submit"
              @click="editReview(editItem)"
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
            Are you sure you want to delete this review?
          </v-card-text>
          <v-card-actions>
            <v-btn @click="deleteReview(delItem)" color="red">Delete</v-btn>
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
        name: null,
        designation: null,
        desc: null,
        snackbar: false,
        msg: "",
        timeoutDuration: 1000,
        loading: false,
        reviewlist: [],
        dialogAddReview: false,
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
          url: "/reviews/list",
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
              this.reviewlist = response.data.reviews;
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
      validateReview() {
        if (!this.name) {
          this.msg = "Please provide a name";
          this.snackbar = true;
          setTimeout(() => {
            this.snackbar = false;
          }, this.timeoutDuration);
          return false;
        } else if (!this.designation) {
          this.msg = "Please provide a designation";
          this.snackbar = true;
          setTimeout(() => {
            this.snackbar = false;
          }, this.timeoutDuration);
          return false;
        } else if (!this.desc) {
          this.msg = "Please provide a description";
          this.snackbar = true;
          setTimeout(() => {
            this.snackbar = false;
          }, this.timeoutDuration);
          return false;
        } else {
          this.addReview();
        }
      },
      editReview(id) {
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/reviews/update",
          headers: {
            token: localStorage.getItem("token"),
          },
          data: {
            name: this.editItem.name,
            designation: this.editItem.designation,
            desc: this.editItem.desc,
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
      deleteReview(id) {
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/reviews/delete",
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
      addReview() {
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/reviews/form",
          headers: {
            token: localStorage.getItem("token"),
          },
          data: {
            name: this.name,
            designation: this.designation,
            desc: this.desc,
          },
        })
          .then((response) => {
            if (response.data.status) {
              this.appLoading = false;
              this.msg = response.data.msg;
              this.snackbar = true;
              this.dialogAddReview = false;
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
    margin: 10px auto 0;
    margin-left: 20px;
    border-radius: 5px;
    height: 70px;
  }
  </style>
    