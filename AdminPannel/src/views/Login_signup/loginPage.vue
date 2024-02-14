<template>
  <div class="background-container">
    <v-snackbar
      v-model="snackbar"
      multi-line
      color="blue"
    >
      {{ msg }}

      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-row justify="center" class="pa-10">
      <v-col cols="10">
        <v-card
          class="pa-4 mx-auto"
          width="450"
          color="rgba(252, 250, 247, 0.9)"
          style="
            margin-top: 60px;
            border: 4px solid #118aee;
            border-radius: 25px;
          "
        >
          <!-- <v-col cols="12">
                        <div class="text-center">
                        <v-avatar size="100" color="indigo lighten-4">
                        <v-icon size="40" color="indigo">mdi-account</v-icon>
                        </v-avatar>
                        </div>
                    </v-col> -->

          <v-col cols="12" class="text-center">
            <v-avatar size="100" color="#f2e8df">
              <v-icon size="40" color="#118aee">mdi-account</v-icon>
            </v-avatar>
          </v-col>

          <v-card-title class="text-center">
            <span class="headline" style="color: #118aee">Login Here</span>
          </v-card-title>
          <v-card-item> </v-card-item>

          <v-form ref="form">
            <v-card-text>
              <v-text-field
                v-model="email"
                type="email"
                label="Email"
                placeholder="Email"
                :style="{ color: '#118aee' }"
                variant="outlined"
                prepend-inner-icon="mdi-account"
                required
              />

              <v-text-field
                v-model="password"
                :type="passwordShow ? 'text' : 'password'"
                label="Password"
                placeholder="Password"
                :style="{ color: '#118aee' }"
                prepend-inner-icon="mdi-key"
                :append-inner-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
                variant="outlined"
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
              @click="validateInput"
                type="submit"
                style="
                  background-color: #118aee;
                  color: #ffffff;
                  width: 385px;
                  height: 45px;
                "
              >
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import axios from "axios";
import store from "./../../store";

export default {
  data() {
    return {
      ServerError:false,
      password: null,
      email: null,
      snackbar: false,
      msg: "",
      timeoutDuration: 1000,
      passwordShow:false,
    };
  },
  methods: {
    validateInput() {
      var emailFormat=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.email) {
        this.msg = "Please Provide email";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return;
      }
      else if (!this.email.match(emailFormat)) {
        this.msg = "Please Provide a valid email";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
        return;
      } else if (!this.password) {
        this.msg = "Please Provide password";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.timeoutDuration);
      } else {
        this.login();
      }
    },
    login() {
      axios({
        method: "post",
        url: "/user/login",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then((response) => {
          if (response.data.status) {
            console.log("data=", response.data.data);
            console.log("role=", response.data.data.role);
            localStorage.setItem("role", response.data.data.role);
            store.commit("loginUser", response.data.token);
            this.msg="login successful";
            this.snackbar=true;
            // store.commit("role", response.data.data.role);
            this.$router.push({
              path: "/dashboardPage",
            });
          } else {
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
.background-container {
  background-image: linear-gradient(
    to right,
    #f4c38b 0%,
    #97c9f4 100%
  ); /* Update the path to your image */
  background-size: cover;
  background-position: center;
  height: 100vh; /* Adjust the height as needed */
}
</style>
