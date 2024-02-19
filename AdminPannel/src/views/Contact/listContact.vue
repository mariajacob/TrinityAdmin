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
                >Contact Us
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
                @click="dialogAddContact = true"
                class="ma-2"
                variant="outlined"
                color="white"
                >Add Contact
                <v-icon end icon="mdi-plus"></v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-dialog v-model="dialogAddContact" width="600px" persistent>
          <v-card class="pa-4" style="margin-top: 40px">
            <v-row>
              <v-col cols="11">
                <v-card-title class="text-h5 text-center" style="color: #0b5de1"
                  >ADD CONTACT</v-card-title
                >
              </v-col>
              <v-col cols="1">
                <v-icon @click="dialogAddContact = false">mdi-close</v-icon>
              </v-col>
            </v-row>

            <v-card-text>
              <v-form ref="form">
                <!-- Course Name -->
                <v-text-field
                  v-model="news"
                  label="news"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>
                <v-text-field
                  v-model="linkname"
                  label="news"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>
                <v-text-field
                  v-model="subheading"
                  label="subheading"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>

                <!-- Submit Button -->
                <v-btn
                  @click="validateTail"
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
      <v-col cols="7">
        <v-row justify="start" class="pa-2">
          <v-col
            cols="6"
            sm="8"
            lg="8"
            class="text-left pa-2"
            v-for="(item, i) in taillist"
            :key="i"
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
                <router-link
                  :to="'/tailsingleView?id=' + item._id"
                  style="text-decoration: none"
                >
                  <v-col cols="12" class="text-center pa-5">
                    <span
                      class="analyticsValue"
                      style="
                        font-weight: bold;
                        font-size: 17px;
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
                        font-size: 17px;
                        color: rgb(64, 8, 247);
                        font-family: 'poppinsRegular';
                      "
                    >
                      {{ item.subheading }}
                    </span>
                  </v-col>
                </router-link>
                <v-col cols="12" class="text-center pa-5">
                  <v-btn
                    @click="(openEditDialog = true), (editItem = item)"
                    style="
                      background-color: #2196f3;
                      color: #ffffff;
                      width: 20%;
                      margin-right: 3%;
                    "
                  >
                    <!-- <v-icon small class="ml-1">mdi-pencil</v-icon> -->
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

    <!-- Edit tail section -->

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

          <!-- Submit Button -->
          <v-btn
            type="submit"
            @click="editTail(editItem)"
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
          Are you sure you want to delete this Details?
        </v-card-text>
        <v-card-actions>
          <v-btn @click="deleteTail(delItem)" color="red">Delete</v-btn>
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
      heading: null,
      subheading: null,

      snackbar: false,
      msg: "",
      timeoutDuration: 1000,
      loading: false,
      taillist: [],
      dialogAddTail: false,
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
        url: "/tailsection/list",
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
            this.taillist = response.data.reviews;
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
    validateTail() {
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
      } else {
        this.addTail();
      }
    },
    editTail(id) {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/tailsection/update",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          heading: this.editItem.heading,
          subheading: this.editItem.subheading,
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
    deleteTail(id) {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/tailsection/delete",
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
    addTail() {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/tailsection/add",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          heading: this.heading,
          subheading: this.subheading,
        },
      })
        .then((response) => {
          if (response.data.status) {
            this.appLoading = false;
            this.msg = response.data.msg;
            this.snackbar = true;
            this.dialogAddTail = false;
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
    