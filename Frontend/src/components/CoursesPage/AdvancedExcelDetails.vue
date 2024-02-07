<template>
  <div class="pt-16">

    <v-row justify="center" v-if="cardId == 1">
      <v-col>

        <v-row justify="center">
      <v-col cols="12" sm="12" md="12" lg="12" class="text-center head pt-md-8">
        <span style="color: rgb(0, 0, 0)"
          >Course <span style="color: rgba(246, 162, 9, 1)">Details CGA</span></span
        >
      </v-col>
    </v-row>
    <v-row justify="center" class="px-lg-16 px-md-10">
      <v-col cols="12" sm="8" md="12" lg="8" class="px-8 sub"
        ><span style="color: rgb(0, 0, 0)">
          Advanced Excel </span
        ></v-col
      >
      <v-col cols="12" sm="12" md="12" lg="4" class="text-right px-8 px-lg-8" align-self="center"
        ><span class="subbb"
          >Course Duration : <span class="subb">3 months</span></span
        ></v-col>

    </v-row>
    <v-row justify="center" class="px-lg-16 px-md-10">
      <v-col cols="12" sm="12" md="12" lg="12" class="px-lg-8 px-8">
        <v-img src="../../../src/assets/images/img1.png"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center" class="px-lg-16 px-md-10">
      <v-col cols="12" class="px-8">
        <v-row justify="center">
          <v-col cols="12" sm="12" md="8" lg="8">
            <v-row justify="center">
              <!-- <v-col cols="12" lg="12" class="ovr"><span>Overview</span> </v-col> -->
              <!-- <v-col cols="12" lg="12" class="subbb" style="text-align: justify"
                ><span>
                  Our Trainers are industry experts and practical professionals. While undergoing the training one will gain a comprehensive 
understanding of key concepts of corporate finance and accounting thru various methodologies like the use of real-life 
scenarios, assignments quizzes, case studies , exposure to ERP systems and other contemporary tools (SAP, Tally, 
Microsoft Advanced Excel and other data visualization and reporting tools like Power BI or Tableau).

This program will provide you with a strong foundation in Accounting with an emphasis on developing your analytical 
skills. 
                  </span
                ></v-col> -->
              <v-col cols="12" lg="12" class="ovr"
                ><span>Eligibility Criteria</span></v-col
              >
              <v-col cols="12" lg="12" align-self="center" class="pl-3">
                <span>Excel is an important skill in countless roles. These skills are often necessary for success in many industries, and employers are likely to request advanced Excel skills when hiring for a data analytics profession. The data analytics industry is on the rise, so if you are wondering how to become a data analyst, Excel skills are one key way to achieve your goal</span>
              </v-col>

              <v-col cols="12" lg="12" class="ovr"
                ><span>Course Content</span></v-col
              >
              <v-col cols="12" lg="12" align-self="center" class="pl-3">
                <ul class="round-bullet-list">
                    <li class="subbb">Statistical Modelling</li>
                    <li class="subbb">Forecasting and Prediction</li>
                    <li class="subbb">Pivot Tables</li>
                    <li class="subbb">VBA and Macros</li>
                    <li class="subbb">Model Historic Stock Trends</li>
                    </ul>
              </v-col>


              <!-- <v-col cols="12" lg="12" class="ovr"
                ><span>Career Options</span></v-col
              >
              <v-col cols="12" lg="12" align-self="center" class="pl-3">
                <ul class="round-bullet-list">
                    <li class="subbb">Financial Analyst</li>
                    <li class="subbb">Management Accountant</li>
                    <li class="subbb">Senior Accountant</li>
                    <li class="subbb">Cost Accountant</li>
                    <li class="subbb">Financial Risk Manager</li>
                    <li class="subbb">Corporate Controller</li>
                    <li class="subbb">Chief Financial Officer (CFO) </li>
                    </ul>
              </v-col> -->

            </v-row>
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4">
            <v-row justify="center">
              <v-col cols="12" sm="12" md="12" lg="12" class="othr"><span>Other Courses</span></v-col>
            </v-row>
            <v-row justify="center">
                
              <v-col cols="6" lg="5">
                <v-img src="../../../src/assets/images/img2.png"></v-img>
              </v-col>
              <v-col cols="6" lg="7">
                  <v-row justify="center">
                    <v-col cols="12" lg="12" class="pb-0 pb-lg-4">
                      <span>Lorem ipsum dolor</span>
                    </v-col>
                    <v-col cols="12" lg="12" class="pt-2 pt-lg-4">
                      <span>voluptatem sunt est laudantium fugit est fuga Quis! Qui galisum quasi ex obcaecat</span>
                    </v-col>
                  </v-row>
                </v-col>
            </v-row>
            <v-row justify="center">
                
                <v-col cols="6" sm="6" md="5" lg="5">
                  <v-img src="../../../src/assets/images/img2.png"></v-img>
                </v-col>
                <v-col cols="6" lg="7">
                    <v-row justify="center">
                      <v-col cols="12" lg="12" class="pb-0 pb-lg-4">
                        <span>Lorem ipsum dolor</span>
                      </v-col>
                      <v-col cols="12" lg="12" class="pt-2 pt-lg-4">
                        <span>voluptatem sunt est laudantium fugit est fuga Quis! Qui galisum quasi ex obcaecat</span>
                      </v-col>
                    </v-row>
                  </v-col>
              </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" class="px-lg-16 px-md-10 pt-10">
        <v-col cols="12" sm="12" md="12" lg="12" class="pro px-8"><span>Professional certificate provided</span></v-col>
    </v-row>
    <v-row justify="center" class="pb-10">
        <v-col cols="12" sm="8" md="3" lg="3" class="px-8" v-for="(item, index) in card1icons"
            :key="index">
        <v-row>
            <v-col><v-img :src="item.icon"></v-img></v-col>
            <v-col align-self="center">{{ item.desc }}</v-col>
        </v-row>
        </v-col>
    </v-row>
    <div style="background-color: rgba(246, 249, 255, 1);" class="pt-10 pb-10">
    <v-row justify="start" class="px-lg-16 px-md-10">
      <v-col cols="12" sm="12" md="12" lg="12" class="pb-lg-6 px-8 px-lg-8 ovr">
        <span>Related Courses You may Like ?</span>
      </v-col>
    </v-row>
      <v-row justify="center">
      <v-col cols="12" sm="10" lg="3" md="3" class="px-8 px-md-5" v-for="card in cards"  :key="card.id" align-self="center">
        <v-card elevation="10" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12" lg="12">
                    <v-col cols="12" class="sone">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" lg="12" class="stwo">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12" lg="12">
                      <span style="color: rgba(255, 182, 49, 1)" class="learn"
                        >Learn More
                        <v-icon right style="color: black"
                          >mdi-arrow-right</v-icon
                        ></span
                      >
                    </v-col>
                  </v-col>
                </v-card>
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="1" lg="1" sm="1" md="1">
        <v-img src="../../../src/assets/images/end.png"></v-img>

      </v-col>
    </v-row>
  </div>


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
.sub {
  font-family: archireg;
  font-size: 35px;
  font-weight: 600;
}
.subb {
  font-family: opensans;
  font-size: 16px;
  font-weight: 700;
  color: rgba(246, 162, 9, 1);
}
.subbb {
  font-family: opensans;
  font-size: 16px;
  font-weight: 400;
}
.ovr {
  font-family: opensans;
  font-size: 25px;
  font-weight: 700;
}
.othr {
  font-family: opensans;
  font-size: 25px;
  font-weight: 900;
}
.pro{
    font-family: opensans;
  font-size: 22px;
  font-weight: 700;
}
.round-bullet-list {
  list-style: none; /* Remove the default list style */
  padding: 0; /* Remove padding for consistent spacing */
}

.round-bullet-list li::before {
  content: "\2022"; /* Use the Unicode character for a round bullet */
  color: #000; /* Bullet color */
  font-size: 16px; /* Adjust the bullet size as needed */
  margin-right: 8px; /* Adjust the spacing between the bullet and text */
}
.sone{
  font-family: archireg;
  font-size: 18px;
  font-weight: 600;
}
.stwo{
  font-family: opensans;
  font-size: 12px;
  font-weight: 700;
}
</style>
<script>
export default {
  data() {
    return {
      cardId:"",
        card1icons: [
        {
          icon: require("@/assets/images/img3.png"),
          desc: "TALLY",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Internship with experience Certificate",
        },
      ],

      card2icons: [
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Tally  with KASE (Govt.of Kerala)",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "CIFA Course Completion Certificate",
        },
      ],

      card3icons: [
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Tally  with KASE (Govt.of Kerala)",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "CIFA Course Completion Certificate",
        },
      ],

      card4icons: [
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Tally  with KASE (Govt.of Kerala)",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "CIFA Course Certificate",
        },
      ],

      card5icons: [
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Tally  with KASE (Govt.of Kerala)",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "CIFA Course Certificate",
        },
      ],

      card6icons: [
        {
          icon: require("@/assets/images/img3.png"),
          desc: "SAP",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "TALLY",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Internship with experience Certificate",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Soft skills Training Certificate",
        },
      
      ],

      card7icons: [
        {
          icon: require("@/assets/images/img3.png"),
          desc: "SAP",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "TALLY",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "GST",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Internship with experience Certificate",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Soft skills Training Certificate",
        },
      
      ],
      cards:[
        {
          id:1,
          image: require("@/assets/images/card1.png"),
          title: "SAP  Power User Program ",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id:1,
          image: require("@/assets/images/card2.png"),
          title: "Tally Accounting  Software ",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id:1,
          image: require("@/assets/images/card3.png"),
          title: "Other Accounting Courses",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ]
    };
  },

mounted() {
  
  this.cardId = this.$route.query.cardId;

  
  console.log('Received cardId:', this.cardId);
},
};
</script>