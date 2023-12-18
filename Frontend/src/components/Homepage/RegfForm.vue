<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" lg="12" class="text-center">
        <v-card>
          <v-card-title class="reg">Registration <span style="color: rgba(248, 141, 47, 1) ;">Form</span></v-card-title>
          <v-card-text>
            <form @submit="submitForm">
              <v-text-field
                label="Name"
                variant="outlined"
                required
                v-model="name"
              ></v-text-field>

              <v-text-field
                :counter="10"
                label="Phone Number"
                variant="outlined"
                required
                v-model="phoneNumber"
                :rules="phoneRules"
              ></v-text-field>

              <v-text-field
                label="E-mail"
                variant="outlined"
                required
                v-model="email"
                :rules="emailRules"
              ></v-text-field>

              <v-select label="Select Your Course" :items="courses" v-model="selectedCourse" :rules="courseRules" required></v-select>

              <!-- Update the template to use the new computed property name -->
<v-select v-if="selectedCourse" label="Select Sub-Course" :items="filteredSubCourses" :rules="courseRules" required></v-select>


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
      selectedCourse: null,
      courses: ["CIFA", "CGA","SAP HANA","ADVANCE EXCEL","GST COURSE","TALLY","CMA","CA","AI","LanguageCourses","ComputerCourses"],
      subCourses: [],
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
      courseRules: [
      (v) => !!v || "Course is required",
      ]
    };
  },
  computed: {
    // Rename one of the computed properties
    filteredSubCourses() {
      // Define the sub-courses for each main course
      const subCoursesMap = {
        CIFA: ["CIFA Basic", "CIFA Basic Plus","CIFA Pro"],
        CGA: ["CGA Basic", "CGA Basic Plus","CGA Pro","CGA Basic Plus"],
        SAPHANA: ["FICO", "SD","MM","PP"],
        ADVANCEEXCEL: ["ADVANCED Basic", "ADVANCED Basic Plus","ADVANCED Pro","ADVANCED Basic"],
        GSTCOURSE: ["GST Basic", "GST Basic Plus","GST Pro"],
        TALLY: ["TALLY Basic", "TALLY Basic Plus","TALLY Pro","TALLY Basic Plus"],
        CMA: ["CMA-USA"],
        CA: ["CA-FOUNDATION COACHING", "CGA Sub2"],
        AI: ["ROBOTICS", "MACHINE LEARNING","CODING"],
        LanguageCourses: ["IELTS", "OET","SPOKEN ENGLISH","GERMAN","FRENCH"],
        ComputerCourses: ["MSOFFICE Suite", "PYTHON","Django using Python","HTML","CSS","C++","JAVA","PHOTOSHOP","Diploma in Computer Application (DCA)","Diploma in Office Automation Course (DOA)","Digital Marketing"],
      };

      // Return sub-courses for the selected main course
      return this.selectedCourse ? subCoursesMap[this.selectedCourse] || [] : [];
    },
  },
  methods: {
    submitForm() {
      // Add form submission logic here
    },
    clearForm() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.selectedCourse = null;
    },
  },
};
</script>

<style>
.reg {
  font-family: archireg;
  font-size: 20px;
}

.button {
  font-family: archireg;
}
</style>
