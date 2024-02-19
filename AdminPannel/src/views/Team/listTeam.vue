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
                >Our Team Members
              </span>
            </v-col>
            <!-- </v-row>
            <v-row justify="end"> -->

            <!-- add team -->
            <v-col
              cols="12"
              sm="6"
              md="4"
              align-self="center"
              class="text-right pt-4"
            >
              <v-btn
                @click="dialogAddTeam = true"
                class="ma-2"
                variant="outlined"
                color="white"
                >Add Team
                <v-icon end icon="mdi-plus"></v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-dialog v-model="dialogAddTeam" width="600px" persistent>
          <v-card class="pa-4" style="margin-top: 40px">
            <v-row>
              <v-col cols="11">
                <v-card-title class="text-h5 text-center" style="color: #0b5de1"
                  >ADD TEAM</v-card-title
                >
              </v-col>
              <v-col cols="1">
                <v-icon @click="dialogAddTeam = false">mdi-close</v-icon>
              </v-col>
            </v-row>

            <v-card-text>
              <v-form ref="form">
                <!-- Course Name -->
                <v-text-field
                  v-model="name"
                  label="Name"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>
                <v-text-field
                  v-model="designation"
                  label="Designation"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>

                <v-select
                  v-model="board_type"
                  label="board type"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                  :items="[
                    'Our Advisory Board',
                    'Management Members',
                    'HODS And Faculties',
                  ]"
                ></v-select>

                <!-- Submit Button -->
                <v-btn
                  @click="validateTeam"
                  type="submit"
                  style="
                    background-color: #0b5de1;
                    color: #ffffff;
                    width: 600px;
                    height: 50px;
                  "
                >
                  <span class="white--text px-8">Add Members</span>
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card></v-dialog
        >
      </v-col>
    </v-row>

    <!-- <v-card>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab :value="1">Advisory Board</v-tab>
        <v-tab :value="2">Management Members</v-tab>
        <v-tab :value="3">HODS And Faculties</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item v-for="n in 3" :key="n" :value="n">
          <v-container fluid>
            <v-row>
                
              <v-col v-for="i in 6" :key="i" cols="12" md="4">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${
                    i * n * 5 + 10
                  }`"
                  aspect-ratio="1"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card> -->

    <!--   buttons            -->

    <!-- <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-btn
          rounded="xl"
          class="rounded-btn"
          outlined
          small
          style="margin-right: 10px; background-color: rgb(234, 166, 48)"
        >
          <span class="black--text px-2">Advisory Board</span>
        </v-btn>

        <v-btn
          rounded="xl"
          class="rounded-btn"
          outlined
          small
          style="margin-right: 10px; background-color: rgb(234, 166, 48)"
        >
          <span class="black--text px-2">Management Members</span>
        </v-btn>

        <v-btn
          rounded="xl"
          class="rounded-btn"
          outlined
          small
          style="margin-right: 20px; background-color: rgb(234, 166, 48)"
        >
          <span class="black--text px-2">HODS And Faculties</span>
        </v-btn>
      </v-col>
    </v-row> -->

    <!-- ------------ -->

    <!-- List Team -->
    <v-row justify="start" class="pa-8">
      <v-col cols="12">
        <v-row justify="start" class="pa-2">
          <v-col
            cols="12"
            sm="12"
            lg="12"
            class="text-left pa-2"
            v-for="(item, i) in teamlist"
            :key="i"
          >
            <v-row>
              <v-col>
                <span style="font-family: 'poppinsBold'; font-size: 25px">{{
                  item._id
                }}</span
                ><br />
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                v-for="(list, l) in item.members"
                :key="l"
              >
                <v-card
                  rounded="lg"
                  elevation="5"
                  style="height: 300px; margin-top: 10px"
                >
                  <v-row justify="center" class="pa-4">
                    <v-col cols="12">
                      <router-link
                        :to="'/teamsingleView?id=' + list._id"
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
                        {{ list.name }}
                      </span>
                    </v-col>
                    <v-col cols="12" class="text-center pa-0">
                      <span
                        class="analyticsValue"
                        style="
                          font-weight: bold;
                          font-size: 18px;
                          color: rgb(64, 8, 247);
                          font-family: 'poppinsRegular';
                        "
                      >
                        {{ list.designation }}
                      </span>
                    </v-col>

                    <v-col cols="12" class="text-center pa-0">
                      <span
                        style="
                          font-weight: bold;
                          font-size: 18px;
                          color: rgb(64, 8, 247);
                          font-family: 'poppinsRegular';
                        "
                        >{{ list.board_type }}</span
                      ><br />
                    </v-col>
                    <v-col cols="12" class="text-center pa-1">
                      <v-btn
                        @click="(openEditDialog = true), (editItem = list)"
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
                        @click="(deleteDialog = true), (delItem = list)"
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
      </v-col>
    </v-row>

    <!-- Edit team -->

    <v-dialog v-model="openEditDialog" width="600px" persistent>
      <v-card class="pa-4" style="margin-top: 40px">
        <v-row>
          <v-col cols="11">
            <v-card-title class="text-h5 text-center" style="color: #0b5de1"
              >EDIT TEAM
            </v-card-title>
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
            v-model="editItem.board_type"
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
            @click="editTeam(editItem)"
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
            <v-card-title>Delete Confirmation {{ delItem }}</v-card-title>
          </v-col>
          <v-col cols="1">
            <v-icon @click="deleteDialog = false">mdi-close</v-icon>
          </v-col>
        </v-row>

        <v-card-text>
          Are you sure you want to delete this member?
        </v-card-text>
        <v-card-actions>
          <v-btn @click="deleteTeam(delItem)" color="red">Delete</v-btn>
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
      name: null,
      designation: null,
      board_type: null,
      snackbar: false,
      msg: "",
      timeoutDuration: 1000,
      loading: false,
      teamlist: [],
      dialogAddTeam: false,
      openEditDialog: false,
      editItem: "",
      deleteDialog: false,
      delItem: "",
      appLoading: false,
    //   tab: null,
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
        url: "/ourteam/list",
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
            this.teamlist = response.data.data;
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
    validateTeam() {
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
      } else if (!this.board_type) {
        this.msg = "Please provide a board type";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else {
        this.addTeam();
      }
    },
    editTeam(id) {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/ourteam/update",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          name: this.editItem.name,
          designation: this.editItem.designation,
          board_type: this.editItem.board_type,
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
    deleteTeam(id) {
      this.appLoading = true;
      //   console.log("iddd",id)

      axios({
        method: "POST",
        url: "/ourteam/delete",
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
    addTeam() {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/ourteam/add",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          name: this.name,
          designation: this.designation,
          board_type: this.board_type,
        },
      })
        .then((response) => {
          if (response.data.status) {
            this.appLoading = false;
            this.msg = response.data.msg;
            this.snackbar = true;
            this.dialogAddTeam = false;
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
    