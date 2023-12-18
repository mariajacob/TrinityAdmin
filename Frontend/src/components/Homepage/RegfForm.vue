<template>
    <div>
      <v-row justify="center">
        <v-col cols="12" lg="12" class="text-center">
          <v-card>
            <v-card-title class="reg">Registration <span style="color: rgba(248, 141, 47, 1) ;">Form</span></v-card-title>
            <v-card-text>
              <form @submit="submitForm">
                <v-text-field
                  :counter="10"
                  label="Name"
                  outlined
                  required
                  v-model="name"
                ></v-text-field>
  
                <v-text-field
                  :counter="7"
                  label="Phone Number"
                  outlined
                  required
                  v-model="phoneNumber"
                  :rules="phoneRules"
                ></v-text-field>
  
                <v-text-field
                  label="E-mail"
                  outlined
                  required
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>
  
                <v-select label="Select Your Course" :items="courses"></v-select>
  
  
                <v-btn type="submit" color="blue">Submit</v-btn>&nbsp;&nbsp;&nbsp;
                <v-btn @click="clearForm" color="green">Clear</v-btn>
              </form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        phoneNumber: "",
        email: "",
        option: false,
        courses: ["CIFA", "CGA", "ERP", "TALLY"],
        phoneRules: [
          (v) => !!v || "Phone Number is required",
          (v) =>
            /^[0-9]{10}$/.test(v) || "Phone Number must be a 10-digit number",
        ],
        emailRules: [
          (v) => !!v || "E-mail is required",
          (v) =>
            /.+@.+\..+/.test(v) || "E-mail must be a valid email address",
        ],
      };
    },
    methods: {
      submitForm() {
        // Add form submission logic here
      },
      clearForm() {
        this.name = "";
        this.phoneNumber = "";
        this.email = "";
        this.option = false;
      },
    },
  };
  </script>
<style>
.reg{
    font-family: archireg;
    font-size: 20px;
}
.button{
    font-family: archireg;

}
</style>
  