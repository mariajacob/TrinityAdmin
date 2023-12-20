<template>
  <div class="pt-16">
    <v-row justify="center">
      <v-col cols="12" class="text-center head">
        <span style="color: rgb(0, 0, 0)"
          >Contact <span style="color: rgba(248, 141, 47, 1)">Us</span></span
        >
      </v-col>
      <v-col cols="12" lg="12" class="text-center sub7">
        <span
          >Your convenience is our priority. Contact us in the way that suits you best.</span
        >
      </v-col>
    </v-row>
    <!-- <v-row justify="center">
      <v-col cols="12">
        <v-img src="../../assets/images/contact.png"></v-img>
      </v-col>
    </v-row> -->
  </div>
  <div class="py-8 top-content">
    <!-- <v-row justify="center">
      <v-col cols="12" md="10">
        <v-row>
          <v-col
            cols="12"
            md="5"
            class="px-10 py-10"
            style="background-color: rgba(248, 141, 47, 1)"
          >
            <v-row>
              <v-col cols="12" class="get" lg="8"> Get In Touch with us !</v-col>
              <v-col cols="12" lg="9" class="lor">
                <span
                  >Lorem ipsum dolor sit amet, consectetur adipiscinidunt ut
                  labore</span
                >
              </v-col>
              <v-col cols="12">
                <v-row justify="start">
                  <v-col cols="1">
                    <v-icon style="color: rgb(255, 255, 255)"
                      >mdi-map-marker</v-icon
                    >
                  </v-col>
                  <v-col cols="11" class="text-left ">
                    <span class="add"
                      >First Floor ,Lilly Book House <br />Opp. Assumption
                      College <br />
                      SB College P.O<br />Changanacherry-686101<br /><span
                        class="phn"
                        >091887 21959<br />asdsdudshdsk@gmail.com</span
                      ></span
                    >
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="1">
                    <v-icon style="color: rgb(255, 255, 255)">
                      mdi-map-marker</v-icon
                    >
                  </v-col>
                  <v-col cols="11" class="text-left ">
                    <span class="add"
                      >6,Vellapally Builings,<br />Vellapally Lane<br />
                      Opp.BCM College,KK Road<br />Kottayam -686101<br /><span
                        class="phn"
                        >091887 21959<br />asdsdudshdsk@gmail.com</span
                      ></span
                    >
                  </v-col>
                </v-row>
                <v-row justify="start">
                  <v-col cols="1">
                    <a href="" target="_blank">
                      <v-icon style="color: rgb(255, 255, 255)"
                        >mdi-twitter</v-icon
                      >
                    </a>
                  </v-col>

                  <v-col cols="1">
                    <a href="" target="_blank">
                      <v-icon style="color: rgb(255, 255, 255)"
                        >mdi-facebook</v-icon
                      >
                    </a>
                  </v-col>
                  <v-col cols="1">
                    <a href="" target="_blank">
                      <v-icon style="color: rgb(255, 255, 255)"
                        >mdi-linkedin</v-icon
                      >
                    </a>
                  </v-col>
                </v-row>
                <v-row justify="end">
                  <v-col cols="4" lg="4" sm="4" md="4">
                    <v-img src="../../assets/images/cnct.png"></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" lg="6" class="pb-10">
            <v-card elevation="2">
              <v-row class="pl-4 pr-4 pt-3">
                <v-col cols="12" class="pb-5">
                  <div class="field-label">Name</div>
                  <v-text-field
                    variant="outlined"
                    hide-details
                    style="background-color: white"
                    placeholder="Enter Name"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="pb-5">
                  <div class="field-label">E-Mail Address</div>
                  <v-text-field
                    variant="outlined"
                    hide-details
                    style="background-color: white"
                    placeholder="johndoe@gmail.com"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <div class="field-label">Qualification</div>
                  <v-select
                    label="Select"
                    :items="qualifications"
                    variant="outlined"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <div class="field-label">Intrested Course</div>
                  <v-select
                    label="Select"
                    :items="courses"
                    variant="outlined"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <div class="field-label">Institute</div>
                  <v-select
                    label="Select"
                    :items="institutes"
                    variant="outlined"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row justify="end">
                <v-col cols="12" lg="4">
                  <v-card-actions class="pa-3">
                    <v-btn
                      style="
                        color: #ffffff;
                        background-color: rgba(58, 129, 230, 1);
                      "
                      size="large"
                      type="submit"
                      >&nbsp; SEND &nbsp;</v-btn
                    >
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row> -->
    <v-row justify="center" class="px-6 py-6">
      <v-col cols="12" align-self="center">
        <v-row justify="center">
          <v-col
          cols="12"
          lg="4"
          md="6"
          sm="6"
            align-self="center"
            style="background-color: rgba(248, 141, 47, 1)"
          >
            <v-row justify="center">
              <v-col cols="12" class="get" lg="8">
                Get In Touch with us !</v-col
              >
              <v-col cols="12" lg="9" class="lor">
                <span
                  >"Your thoughts matter. Contact us today to share your ideas, concerns, and inquiries."</span
                >
              </v-col>
              <v-col cols="12" align-self="center" class="text-center">
                <v-row justify="center">
                  <v-col cols="3" class="text-right">
                    <v-icon style="color: rgb(255, 255, 255)"
                      >mdi-map-marker</v-icon
                    >
                  </v-col>
                  <v-col cols="9" class="text-left">
                    <span class="add"
                      >First Floor ,Lilly Book House <br />Opp. Assumption
                      College <br />
                      SB College P.O<br />Changanacherry-686101<br /><span
                        class="phn"
                        >091887 21959<br />asdsdudshdsk@gmail.com</span
                      ></span
                    >
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="3" class="text-right">
                    <v-icon style="color: rgb(255, 255, 255)">
                      mdi-map-marker</v-icon
                    >
                  </v-col>
                  <v-col cols="9" class="text-left">
                    <span class="add"
                      >6,Vellapally Builings,<br />Vellapally Lane<br />
                      Opp.BCM College,KK Road<br />Kottayam -686101<br /><span
                        class="phn"
                        >091887 21959<br />asdsdudshdsk@gmail.com</span
                      ></span
                    >
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="1">
                    <a href="" target="_blank">
                      <v-icon style="color: rgb(255, 255, 255)"
                        >mdi-twitter</v-icon
                      >
                    </a>
                  </v-col>
                  <v-col cols="1">
                    <a href="" target="_blank">
                      <v-icon style="color: rgb(255, 255, 255)"
                        >mdi-facebook</v-icon
                      >
                    </a>
                  </v-col>
                  <v-col cols="1">
                    <a href="" target="_blank">
                      <v-icon style="color: rgb(255, 255, 255)"
                        >mdi-linkedin</v-icon
                      >
                    </a>
                  </v-col>
                </v-row>
                <v-row justify="end">
                  <v-col cols="4" lg="4" sm="4" md="4">
                    <v-img src="../../assets/images/cnct.png"></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="6" align-self="center">
            <v-row>
              <v-col lg="12">
                <v-card elevation="0">
                  <v-row class="pl-4 pr-4 pt-3">
                    <v-col cols="12" class="pb-5">
                      <div class="field-label">Name</div>
                      <v-text-field
                        variant="outlined"
                        hide-details
                        style="background-color: white"
                        placeholder="Enter Name"
                        clearable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="pb-5">
                      <div class="field-label">E-Mail Address</div>
                      <v-text-field
                        variant="outlined"
                        hide-details
                        style="background-color: white"
                        placeholder="johndoe@gmail.com"
                        clearable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <div class="field-label">Qualification</div>
                      <v-select
                        label="Select"
                        :items="qualifications"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <div class="field-label">Intrested Course</div>
                      <v-select label="Select Your Course" :items="courses" v-model="selectedCourse" variant="outlined"></v-select>

              <!-- Update the template to use the new computed property name -->
<v-select v-if="selectedCourse" label="Select Sub-Course" :items="filteredSubCourses" variant="outlined"></v-select>
                    </v-col>
                    <v-col cols="12">
                      <div class="field-label">Institute</div>
                      <v-select
                        label="Select"
                        :items="institutes"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row justify="end">
                    <v-col cols="12" lg="4">
                      <v-card-actions class="pa-3">
                        <v-btn
                          style="
                            color: #ffffff;
                            background-color: rgba(58, 129, 230, 1);
                          "
                          size="large"
                          type="submit"
                          >&nbsp; SEND &nbsp;</v-btn
                        >
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <div>
    <v-row justify="center">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="6" lg="5">
            <v-img src="../../assets/images/map1.png"></v-img>
          </v-col>
          <v-col cols="6" lg="5">
            <v-img src="../../assets/images/map2.png"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.head {
  font-family: archireg;
  font-size: 39px;
  font-weight: 700;
}
.sub7 {
  font-family: opensans;
  font-size: 16px;
  font-weight: 700;
}
/* .top-content{
    position: relative;
    margin-top: -15%;
} */
</style>
<script>
export default {
  data: () => ({
    qualifications: ["BTECH", "CA", "BA", "BCOM", "BBA", "MBA"],
    courses: ["CIFA", "CGA","SAP HANA","ADVANCE EXCEL","GST COURSE","TALLY","CMA","CA","AI","LanguageCourses","ComputerCourses"],
    subCourses: [],
    selectedCourse: null,
    institutes: ["KOTTAYAM", "CHANGANACHERRY"],
    Qualification: null,
    Course: null,
    institute: null,
    errorMessages: "",
    formHasErrors: false,
  }),
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
};
</script>
<style>
.get {
  color: white;
  font-family: archireg;
  font-size: 45px;
  font-weight: 900;
}
.lor {
  color: white;
  font-family: opensans;
  font-size: 16px;
  font-weight: 400;
}
.add {
  color: white;
  font-family: opensans;
  font-size: 16px;
  font-weight: 550;
}
.phn {
  color: white;
  font-family: opensans;
  font-size: 17px;
  font-weight: 600;
}
</style>
