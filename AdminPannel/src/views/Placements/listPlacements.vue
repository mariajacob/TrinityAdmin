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
                >Placements
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
                @click="dialogAddPlacement = true"
                class="ma-2"
                variant="outlined"
                color="white"
                >Add Placement
                <v-icon end icon="mdi-plus"></v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-dialog v-model="dialogAddPlacement" width="600px" persistent>
          <v-card class="pa-4" style="margin-top: 40px">
            <v-row>
              <v-col cols="11">
                <v-card-title class="text-h5 text-center" style="color: #0b5de1"
                  >ADD PLACEMENTS</v-card-title
                >
              </v-col>
              <v-col cols="1">
                <v-icon @click="dialogAddPlacement = false">mdi-close</v-icon>
              </v-col>
            </v-row>

            <v-card-text>
              <v-form ref="form">
                <!-- Course Name -->
                <v-text-field
                  v-model="name"
                  label=" Name"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>
                <v-text-field
                  v-model="position"
                  label=" Position"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>
                <v-text-field
                  v-model="placedAt"
                  label=" Placed At"
                  color="black"
                  variant="outlined"
                  required
                  outlined
                  class="custom-input"
                ></v-text-field>
                <v-date-picker
                  v-model="placedDate"
                  label="Placed Date"
                  color="black"
                ></v-date-picker>

                <!-- Submit Button -->
                <v-btn
                  @click="validatePlacement"
                  type="submit"
                  style="
                    background-color: #0b5de1;
                    color: #ffffff;
                    width: 600px;
                    height: 50px;
                  "
                >
                  <span class="white--text px-8">Add Placement</span>
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
            v-for="(item, i) in placementlist"
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
                    :to="'/placementsingleView?id=' + item._id"
                    style="text-decoration: none"
                  >
                    <v-img
                      src="../../assets/images/placement_logo2.png"
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
                    {{ item.name }}
                  </span>
                </v-col>
                <v-col cols="12" class="text-center pa-0">
                  <span
                    class="analyticsValue"
                    style="
                      font-weight: bold;
                      font-size: 20 px;
                      color: rgb(64, 8, 247);
                      font-family: 'poppinsRegular';
                    "
                  >
                    {{ item.position }}
                  </span>
                </v-col>
                <v-col cols="12" class="text-center pa-0">
                  <span
                    class="analyticsValue"
                    style="
                      font-weight: bold;
                      font-size: 20px;
                      color: rgb(64, 8, 247);
                      font-family: 'poppinsRegular';
                    "
                  >
                    Placed at : {{ item.placedAt }}
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
                    {{ item.placedDate.slice(0, 10) }}
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
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Edit placement -->

    <v-dialog v-model="openEditDialog" width="600px" persistent>
      <v-card class="pa-4" style="margin-top: 40px">
        <v-row>
          <v-col cols="11">
            <v-card-title class="text-h5 text-center" style="color: #0b5de1"
              >EDIT PLACEMENT</v-card-title
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
            v-model="editItem.position"
            label=" position"
            color="black"
            variant="outlined"
            required
            outlined
            class="custom-input"
          ></v-text-field>
          <v-text-field
            v-model="editItem.placedAt"
            label=" placed at"
            color="black"
            variant="outlined"
            required
            outlined
            class="custom-input"
          ></v-text-field>

          <!-- Course Description -->
          <v-textarea
            v-model="editItem.placedDate"
            label="placed date"
            color="black"
            variant="outlined"
            required
            outlined
            class="custom-input"
          ></v-textarea>

          <!-- Submit Button -->
          <v-btn
            type="submit"
            @click="editPlacement(editItem)"
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
          Are you sure you want to delete this placement?
        </v-card-text>
        <v-card-actions>
          <v-btn @click="deletePlacement(delItem)" color="red">Delete</v-btn>
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
      position: null,
      placedAt: null,
      placedDate: null,
      snackbar: false,
      msg: "",
      timeoutDuration: 1000,
      loading: false,
      placementlist: [],
      dialogAddPlacement: false,
      openEditDialog: false,
      editItem: "",
      deleteDialog: false,
      delItem: "",
      appLoading: false,
      Pagelength: "",
      page: 1,
      limit: 20,
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
        url: "/placement/list",
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
            this.placementlist = response.data.data;
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
    validatePlacement() {
      if (!this.name) {
        this.msg = "Please provide a name";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else if (!this.position) {
        this.msg = "Please provide a course position";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else if (!this.placedAt) {
        this.msg = "Please provide a course company name";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else if (!this.placedDate) {
        this.msg = "Please provide a date";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return false;
      } else {
        this.addPlacement();
      }
    },
    editPlacement(id) {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/placement/update",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          name: this.editItem.name,
          position: this.editItem.position,
          placedAt: this.editItem.placedAt,
          placedDate: this.editItem.placedDate,
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
    deletePlacement(id) {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/placement/delete",
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
    addPlacement() {
      this.appLoading = true;
      axios({
        method: "POST",
        url: "/placement/add",
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          name: this.name,
          position: this.position,
          placedAt: this.placedAt,
          placedDate: this.placedDate,
        },
      })
        .then((response) => {
          if (response.data.status) {
            this.appLoading = false;
            this.msg = response.data.msg;
            this.snackbar = true;
            this.dialogAddPlacement = false;
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
  