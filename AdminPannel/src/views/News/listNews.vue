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
                  >Latest News
                </span>
              </v-col>
             
              <v-col
                cols="12"
                sm="6"
                md="4"
                align-self="center"
                class="text-right pt-4"
              >
                <v-btn
                  @click="dialogAddNews = true"
                  class="ma-2"
                  variant="outlined"
                  color="white"
                  >Add News
                  <v-icon end icon="mdi-plus"></v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
  
          <v-dialog v-model="dialogAddNews" width="600px" persistent>
            <v-card class="pa-4" style="margin-top: 40px">
              <v-row>
                <v-col cols="11">
                  <v-card-title class="text-h5 text-center" style="color: #0b5de1"
                    >ADD NEWS</v-card-title
                  >
                </v-col>
                <v-col cols="1">
                  <v-icon @click="dialogAddNews = false">mdi-close</v-icon>
                </v-col>
              </v-row>
  
              <v-card-text>
                <v-form ref="form">
                  <!-- news -->
                  <v-text-field
                    v-model="news"
                 
                    label="news"
                    color="black"
                    variant="outlined"
                    required
                    outlined
                    class="custom-input"
                  ></v-text-field>
                  
  
                  
                  <!-- Submit Button -->
                  <v-btn
                    @click="validateNews"
                    type="submit"
                    style="
                      background-color: #0b5de1;
                      color: #ffffff;
                      width: 600px;
                      height: 50px;
                    "
                  >
                    <span class="white--text px-8">Add News</span>
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
        <v-col cols="7">
          <v-row justify="start" class="pa-2">
            <v-col
              cols="6"
              sm="6"
              lg="6"
              class="text-left pa-2"
              v-for="(item, i) in newslist"
              :key="i"
            >
              <v-card
                rounded="lg"
                elevation="12"
                style="height: 240px; margin-top: 10px"
              >
                <v-row justify="center" class="pa-4">
                  <!-- <v-col cols="12">
                    <router-link
                      :to="'/newssingleView?id=' + item._id"
                      style="text-decoration: none"
                    >
                      
                    </router-link>
                  </v-col> -->
                  <router-link
                      :to="'/newssingleView?id=' + item._id"
                      style="text-decoration: none"
                    >
                  <v-col cols="12" class="text-center pa-8">
                    <span
                      class="analyticsValue"
                      style="
                        font-weight: bold;
                        font-size: 15px;
                        color: black;
                        font-family: 'poppinsRegular';
                      "
                    >
                      {{ item.news }}
                    </span>
                  </v-col>
                  
                </router-link>
                  <v-col cols="12" class="text-center pa-0">
                    <v-btn
                      @click="(openEditDialog = true), (editItem = item)"
                      style="
                        background-color: #2196f3;
                        color: #ffffff;
                        width: 20%;
                        margin-right: 3%;
                      "
                    >
                      <!-- <span class="white--text px-2">Edit</span> -->
                      <v-icon small class="ml-1">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      @click="(deleteDialog = true), (delItem = item)"
                      style="
                        background-color: #ff5252;
                        color: #ffffff;
                        width: 20%;
                      "
                    >
                      <!-- <span class="white--text px-2">Delete</span> -->
                      <v-icon small class="ml-1">mdi-delete</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  
      <!-- Edit news section -->
  
      <v-dialog v-model="openEditDialog" width="600px" persistent>
        <v-card class="pa-4" style="margin-top: 40px">
          <v-row>
            <v-col cols="11">
              <v-card-title class="text-h5 text-center" style="color: #0b5de1"
                >EDIT NEWS</v-card-title
              >
            </v-col>
            <v-col cols="1">
              <v-icon @click="openEditDialog = false">mdi-close</v-icon>
            </v-col>
          </v-row>
  
          <v-card-text>
            <v-text-field
              v-model="editItem.news"
              label=" news"
              color="black"
              variant="outlined"
              required
              outlined
              class="custom-input"
            ></v-text-field>
            
  
            
  
            <!-- Submit Button -->
            <v-btn
              type="submit"
              @click="editNews(editItem)"
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
            Are you sure you want to delete this News?
          </v-card-text>
          <v-card-actions>
            <v-btn @click="deleteNews(delItem)" color="red">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
        news: null,
        
        
        snackbar: false,
        msg: "",
        timeoutDuration: 1000,
        loading: false,
        newslist: [],
        dialogAddNews: false,
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
          url: "/latestnews/list",
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
              this.newslist = response.data.list;
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
      validateNews() {
        if (!this.news) {
          this.msg = "Please provide a News";
          this.snackbar = true;
          setTimeout(() => {
            this.snackbar = false;
          }, this.timeoutDuration);
          return false;
        }  else {
          this.addNews();
        }
      },
      editNews(id) {
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/latestnews/edit ",
          headers: {
            token: localStorage.getItem("token"),
          },
          data: {
            news: this.editItem.news,
            
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
      deleteNews(id) {
        this.appLoading = true;
        axios({
          method: "POST",
          url: "/latestnews/delete",
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
      addNews() {
  this.appLoading = true;
  axios({
    method: "POST",
    url: "/latestnews/add",
    headers: {
      token: localStorage.getItem("token"),
    },
    data: {
      news: this.news,
    },
  })
    .then((response) => {
      if (response.data && response.data.status) {
        this.appLoading = false;
        this.msg = response.data.msg;
        this.snackbar = true;
        this.dialogAddNews = false;
        this.getCategory(); // Refresh the news list after successful addition
      } else {
        this.appLoading = false;
        this.msg = response.data ? response.data.msg : "Failed to add news.";
        this.snackbar = true;
      }
    })
    .catch((err) => {
      this.appLoading = false;
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
    