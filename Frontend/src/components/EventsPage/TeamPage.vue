<template>
  <div class="pt-16">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12" lg="12" class="text-center head pt-md-8">
        <span style="color: rgb(0, 0, 0)"
          >OUR <span style="color: rgba(255, 182, 49, 1)">TEAM</span></span
        >
      </v-col>
      <v-col cols="12" sm="10" md="10" lg="8" class="text-center sub11 px-sm-0 px-8" style="text-align: justify;">
        <span
          >Our institution is not just made of bricks and mortar; it's built by
          the dedication and passion of our exceptional team.</span
        >
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="12"
        md="12"
        lg="12"
        class="text-center headone"
        style="color: rgba(58, 129, 230, 1)"
      >
        <span>OUR ADVISORY BOARD</span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="10" align-self="center">
        <v-row justify="center">
          <v-col
            cols="12"
            lg="4"
            md="4"
            sm="6"
            v-for="cardGroup in cardGroups"
            :key="cardGroup.title"
            align-self="center"
            class="text-center px-md-10"
          >
            <v-card elevation="0" class="px-10 py-10">
              <v-row justify="center">
                <v-col cols="12">
                  <v-avatar size="200" color="#F7F9F9">
                    <v-img
                      :src="cardGroup.image"
                      height="auto"
                      width="100vh"
                    ></v-img>
                  </v-avatar>
                </v-col>

                <v-col cols="12">
                  <span class="name">{{ cardGroup.title }}</span>
                </v-col>
                <v-col cols="12" class="py-0">
                  <span class="desc">{{ cardGroup.description }}</span>
                </v-col>
              </v-row>
              <!-- <v-card-title class="name">{{ cardGroup.title }}</v-card-title>
          <v-card-text class="desc">{{ cardGroup.description }}</v-card-text> -->
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center headone"
        style="color: rgba(58, 129, 230, 1)"
      >
        <span>MANAGEMENT MEMBERS</span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="10" align-self="center">
        <v-row justify="center">
          <v-col
            cols="12"
            lg="3"
            md="3"
            sm="6"
            v-for="cardGroup in hod"
            :key="cardGroup.title"
            align-self="center"
            class="text-center"
          >
            <v-card elevation="0" class="px-10 py-10">
              <v-row>
                <v-col cols="12">
                  <v-avatar size="200" color="#F7F9F9">
                    <v-img
                      :src="cardGroup.image"
                      height="auto"
                      width="100vh"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="12" >
                  <v-card-title class="name pb-0">{{
                    cardGroup.title
                  }}</v-card-title>
                </v-col>
                <v-col cols="12" class="pt-0">
                  <v-card-text class="desc pt-0">{{
                    cardGroup.description
                  }}</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        class="text-center headone"
        style="color: rgba(58, 129, 230, 1)"
      >
        <span>HODS AND FACULTIES</span><!--ADMINISTRATIVE TEAM -->
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="9" align-self="center">
        <v-row justify="center">
          <v-col
            cols="12"
            lg="4"
            md="4"
            sm="6"
            v-for="cardGroup in hods"
            :key="cardGroup.title"
            align-self="center"
            class="text-center"
          >
            <v-card elevation="0" class="px-10 py-10">
              <v-row justify="center">
                <v-col cols="12">
                  <v-avatar size="200" color="#F7F9F9">
                    <v-img
                      :src="cardGroup.image"
                      height="auto"
                      width="100vh"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="12">
                  <v-card-title class="name pb-0">{{
                    cardGroup.title
                  }}</v-card-title>
                </v-col>
                <!-- <v-card-subtitle class="pos">{{ cardGroup.subtitle }}</v-card-subtitle> -->
                <v-col cols="12" class="pt-0">
                  <v-card-text class="desc pt-0">{{
                    cardGroup.description
                  }}</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      cardGroups: [
        {
          image: require("@/assets/images/ad1.png"),
          title: "Dr P.C Aniyankunju",
          description: "NAAC-Assessor UGC Bangalore & Former Principal St.Aloysius College Edathuva",
        },
        {
          image: require("@/assets/images/ad2.png"),
          title: "Dr. Ruble Raj",
          description: "Former Principal Marian College,Kuttikkanam Eminent Educationist,Acclaimed Orator Professor English ",
        },
        {
          image: require("@/assets/images/ad5.png"),
          title: "Dr. Siby John",
          description: "Deputy Director Punjab Eng.College Chandigarh ",
        },
        {
          image: require("@/assets/images/ad3.png"),
          title: "Prof.Tommichen Joseph",
          description: "Former HOD Commerce DEPT KE College Mannam,Former Member of Syndicate Academic Counsel MG University",
        },
        {
          image: require("@/assets/images/ad4.png"),
          title: "Mr. Joy Joseph",
          description: "Former H.M St.Peter’s H.S Kurumbhanadam",
        },
        
        {
          image: require("@/assets/images/ad6.png"),
          title: "Dr. Sreejesh S",
          description: "Assistant Professor IIM-Kozhikode ",
        },
      ],
      hod: [
        {
          image: require("@/assets/images/m4.png"),
          title: "Prof.Mathew Korah Msc LLM",
          description: "Executive Director Academics",
        },
        
        {
          image: require("@/assets/images/m5.png"),
          title: "Mr.Gopakumar B.E",
          description: "Executive Director SAP Training",
        },
        {
          image: require("@/assets/images/m3.png"),
          title: "Mr.Thomas Chacko",
          description: "Executive Director Corporate Training",
        },
        {
          image: require("@/assets/images/m7.png"),
          title: "Mr.Sebastian Panakkal",
          description: "Microsoft & Wikipedia Global Facilitataor",
        },
        {
          image: require("@/assets/images/m1.png"),
          title: "Mr.Raju Joseph MA",
          description: "Director Academics Training",
        },
        {
          image: require("@/assets/images/m8.png"),
          title: "Mr.Johny Sebastian",
          description: "Director IT & Software Training ",
        },
        {
          image: require("@/assets/images/h1.png"),
          title: "Dr.Johnson Alex",
          description: "Sr.Clinical Physcologist",
        },
        {
          image: require("@/assets/images/m2.png"),
          title: "Mrs.Mini Joseph Thayyil MA",
          description: "Director -Administration",
        },
        
        
        
        {
          image: require("@/assets/images/m6.png"),
          title: "Dr.Joan John",
          description: "Clinical Counsellor",
        },
        
        
      ],
      hods: [
        {
          image: require("@/assets/images/h2.png"),
          title: "Mr.Jacob T.Joseph Mcom",
          description: "HOD-ERP Training",
        },
        {
          image: require("@/assets/images/James.png"),
          title: "JAMES Joseph CA",
          description: "HOD Professional Course",
        },
        {
          image: require("@/assets/images/Sabu-removebg.png"),
          title: "Mr.SABU M.S MCom",
          description: "Senoir Faculty Commerce ",
        },
        
        {
          image: require("@/assets/images/h6.png"),
          title: "Mr.Thomas Antony MA Bed",
          description: "HOD English Section",
        },
        {
          image: require("@/assets/images/h3.png"),
          title: "Mr.Kuriakose T.D MBA",
          description: "SAP Consultant &Team Lead Campus based training",
        },
        {
          image: require("@/assets/images/h10.png"),
          title: "Mrs.Anu Samson Mcom",
          description: "SAP In- house Training ",
        },
        {
          image: require("@/assets/images/h5.png"),
          title: "Mr.Varghese Thomas MA ",
          description: "Manager-Student Relations",
        },
        {
          image: require("@/assets/images/h4.png"),
          title: "Mr.Philp Kuriakose Mcom",
          description: "Finance & Admin",
        },
        
        {
          image: require("@/assets/images/h7.png"),
          title: "Ms.Devu MS",
          description: "Certified Tally Trainer cum CIFA Trainer",
        },
        {
          image: require("@/assets/images/h8.png"),
          title: "Ms.Aparna Appukutten",
          description: "Certified Tally Trainer/CIFA Trainer",
        },
        {
          image: require("@/assets/images/h11.png"),
          title: "Mrs.CINI James",
          description: "Faculty- OET",
        },
        {
          image: require("@/assets/images/Reeethamma-removebg.png"),
          title: "Reeethamma",
          description: "Senior Student Counselor",
        },
        {
          image: require("@/assets/images/h9.png"),
          title: "Ms.Princy Pradeep BSc",
          description: "Student Counselor ",
        },
        
        
      ],
    };
  },
};
</script>
<style>
.head {
  font-family: archireg;
  font-size: 39px;
  font-weight: 700;
}
.sub11 {
  font-family: opensans;
  font-size: 16px;
  font-weight: 700;
}
.sub {
  font-family: opensans;
  font-size: 16px;
  font-weight: 400;
}
.headone {
  font-family: archireg;
  font-size: 20px;
  font-weight: 800;
}
.name {
  font-family: archireg;
  font-size: 22px;
  font-weight: 500;
}
</style>