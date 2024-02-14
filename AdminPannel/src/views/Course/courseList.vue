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
        <!-- Toolbar with "Add About Us" button -->
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
                >Course Category
              </span>
            </v-col>
            <!-- </v-row>
          <v-row justify="end"> -->

            <!-- ADD COURSE CATEGORY -->
            <v-col
              cols="12"
              sm="6"
              md="4"
              align-self="center"
              class="text-right pt-4"
            >
              <v-btn
                @click="dialogAdd = true"
                class="ma-2"
                variant="outlined"
                color="white"
                >Add Category
                <v-icon end icon="mdi-plus"></v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-dialog v-model="dialogAdd" width="600px" persistent>
          <v-card class="pa-4" style="margin-top: 40px">
            <v-row>
              <v-col cols="11">
                <v-card-title class="text-h5 text-center" style="color: #0b5de1"
                  >ADD COURSE DETAILS</v-card-title
                >
              </v-col>
              <v-col cols="1">
                <v-icon @click="dialogAdd = false">mdi-close</v-icon>
              </v-col>
            </v-row>

            <v-card-text>
              <v-form ref="form">
                <!-- Course Name -->
                <v-text-field
                  v-model="catName"
                  label="Course Name"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>

                <!-- Course Description -->
                <v-textarea
                  v-model="desc"
                  label="Course Description"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-textarea>

                <!-- Submit Button -->
                <v-btn
                  @click="validateCourseInput"
                  type="submit"
                  style="
                    background-color: #0b5de1;
                    color: #ffffff;
                    width: 600px;
                    height: 50px;
                  "
                >
                  <span class="white--text px-8">Add Course</span>
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card></v-dialog
        >
      </v-col>
    </v-row>

    <!--               -->

    <!-- List Courses -->

    <v-row justify="start" class="pa-5">
      <v-col cols="12">
        <v-row justify="start" class="pa-1">
          <v-col
            cols="5"
            sm="6"
            lg="4"
            class="text-left pa-2"
            v-for="(item, i) in catlist"
            :key="i"
          >
            <v-card
              rounded="lg"
              elevation="6"
              class="bg1"
              style="height: 480px; margin-top: 50px"
            >
              <!-- <router-link :to="'/singleView'" style="text-decoration: none"> -->
              <v-row justify="center" class="pa-4">
                <v-col cols="12">
                  <router-link
                    :to="'/coursesingleView?id=' + item._id"
                    style="text-decoration: none"
                  >
                    <v-img
                      src="../../assets/images/course_cat.png"
                      alt="Profile"
                      width="100%"
                    ></v-img>
                  </router-link>
                </v-col>
                <v-col cols="12" lg="12" xl="12">
                  <v-row justify="center">
                    <v-col cols="12" class="text-center">
                      <span
                        class="analyticsValue"
                        style="
                          font-weight: bold;
                          font-size: 25px;
                          color: black;
                          font-family: 'notoSansBalck';
                        "
                      >
                        {{ item.catName }}</span
                      >
                    </v-col>
                    <v-col cols="12" class="text-left">
                      <span
                        class="analyticsValue"
                        style="
                          font-size: 15px;
                          text-align: center;
                          color: black;
                          font-family: 'notoSansLight';
                          white-space: pre-line; /* Preserve newline characters */
                          vertical-align: middle; /* Vertical alignment */
                          overflow: hidden; /* Optional: Handle overflow */
                          text-overflow: ellipsis;
                        "
                      >
                        {{ item.desc.slice(0, 50) }}
                      </span>
                      <span v-if="item.desc.length > 50"> .... </span>
                    </v-col>

                    <v-col cols="12" class="text-left">
                      <v-btn
                        @click="(openEditDialog = true), (editItem = item)"
                        style="
                          background-color: #2196f3; /* Blue color */
                          color: #ffffff;
                          width: 48%;
                          margin-right: 3%;
                        "
                      >
                        <!-- <v-icon>mdi-pencil</v-icon> -->
                        <span class="white--text px-2">Edit </span>
                      </v-btn>

                      <v-btn
                        @click="(deleteDialog = true), (delItem = item)"
                        style="
                          background-color: #ff5252; /* Red color */
                          color: #ffffff;
                          width: 48%;
                        "
                      >
                        <!-- <v-icon>mdi-delete</v-icon>  -->
                        <span class="white--text px-2">Delete </span>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <!-- </router-link> -->
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- <v-row justify="center" v-if="catlist">
              <v-col cols="12" v-if="catlist.length > 0">
                <v-pagination
                  size="small"
                  color="#1c5078"
                  style="color: #1c5078 !important"
                  v-model="page"
                  :length="Pagelength"
                >
                </v-pagination>
              </v-col>
            </v-row> -->

    <!-- Edit course -->

    <v-dialog v-model="openEditDialog" width="600px" persistent>
      <v-card class="pa-4" style="margin-top: 40px">
        <v-row>
          <v-col cols="11">
            <v-card-title class="text-h5 text-center" style="color: #0b5de1"
              >EDIT COURSE DETAILS</v-card-title
            >
          </v-col>
          <v-col cols="1">
            <v-icon @click="openEditDialog = false">mdi-close</v-icon>
          </v-col>
        </v-row>

        <v-card-text>
          <v-form ref="form">
            <!-- Course Name -->
            <v-text-field
              v-model="editItem.catName"
              label="Course Name"
              color="black"
              variant="outlined"
              required
              outlined
              class="custom-input"
            ></v-text-field>

            <!-- Course Description -->
            <v-textarea
              v-model="editItem.desc"
              label="Course Description"
              color="black"
              variant="outlined"
              required
              outlined
              class="custom-input"
            ></v-textarea>

            <!-- Submit Button -->
            <v-btn
              type="submit"
              @click="editCourse(editItem)"
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
          Are you sure you want to delete this course?
        </v-card-text>
        <v-card-actions>
          <v-btn @click="deleteCourse(delItem)" color="red">Delete</v-btn>
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
      catName: null,
      desc: null,
      snackbar: false,
      msg: "",
      timeoutDuration: 1000,
      loading: false,
      catlist: [],
      dialogAdd: false,
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
        url: "/category/list",
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
            this.catlist = response.data.reviews;
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
    validateCourseInput() {
      if (!this.catName) {
        this.msg = "Please provide a course name";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else if (!this.desc) {
        this.msg = "Please provide a course description";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else {
        this.addCourse();
      }
    },
    editCourse(id) {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/category/update",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          catName: this.editItem.catName,
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
    deleteCourse(id) {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/category/delete",
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
    addCourse() {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/category/addcoursecategory",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          catName: this.catName,
          desc: this.desc,
        },
      })
        .then((response) => {
          if (response.data.status) {
            this.appLoading = false;
            this.msg = response.data.msg;
            this.snackbar = true;
            this.dialogAdd = false;
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
  