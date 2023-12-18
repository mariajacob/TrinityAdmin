<template>
  <div class="pt-16">
    <v-row justify="center">
      <v-col cols="12" class="text-center head">
        <span style="color: rgb(0, 0, 0)"
          >Course <span style="color: rgba(246, 162, 9, 1)">Details</span></span
        >
      </v-col>
    </v-row>
    <v-row justify="start" class="px-lg-8">
      <v-col cols="8" class="sub"
        ><span style="color: rgb(0, 0, 0)"
          >Certified Indian and Foreign Accountant ( multi levels)</span
        ></v-col
      >
      <v-col cols="4" class="text-right" align-self="center"
        ><span class="subbb"
          >Course Duration : <span class="subb">4 months</span></span
        ></v-col
      >
    </v-row>
    <v-row justify="center" class="px-lg-8">
      <v-col cols="12">
        <v-img src="../../assets/images/img1.png"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center" class="px-lg-8">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="8">
            <v-row>
              <v-col cols="7" class="ovr"><span>Overview</span> </v-col>
              <v-col cols="9" class="subbb" style="text-align: justify"
                ><span
                  >Lorem ipsum dolor sit amet. Sit cupiditate alias a quisquam
                  ipsa ut eveniet asperiores ea rerum sunt aut harum dicta nam
                  magnam cupiditate et beatae provident? Qui dicta fuga qui
                  quaerat doloremque aut autem praesentium aut consequatur
                  commodi. Ad aliquam reiciendis non sapiente fugiat aut veniam
                  dolor qui aliquid esse! In officia nemo ut molestiae ducimus
                  et eligendi laudantium et tempora eveniet aut obcaecati nemo
                  est excepturi perferendis aut voluptates nesciunt.</span
                ></v-col
              >
              <v-col cols="7" class="ovr"
                ><span>What You will Learn ? </span></v-col
              >
              <v-col cols="6" align-self="center" class="pl-3">
                <ul class="round-bullet-list">
                    <li class="subbb">Lorem ipsum dolor sit amet.</li>
                    <li class="subbb">Lorem ipsum dolor sit amet.</li>
                    <li class="subbb">Lorem ipsum dolor sit amet.</li>
                    <li class="subbb">Lorem ipsum dolor sit amet.</li>
                    <li class="subbb">Lorem ipsum dolor sit amet.</li>
                    </ul>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row>
              <v-col class="othr"><span>Other Courses</span></v-col>
            </v-row>
            <v-row justify="center">
                
              <v-col cols="5">
                <v-img src="../../assets/images/img2.png"></v-img>
              </v-col>
              <v-col cols="7">
                  <v-row justify="center">
                    <v-col cols="12">
                      <span>Lorem ipsum dolor</span>
                    </v-col>
                    <v-col cols="12">
                      <span>voluptatem sunt est laudantium fugit est fuga Quis! Qui galisum quasi ex obcaecat</span>
                    </v-col>
                  </v-row>
                </v-col>
            </v-row>
            <v-row justify="center">
                
                <v-col cols="5">
                  <v-img src="../../assets/images/img2.png"></v-img>
                </v-col>
                <v-col cols="7">
                    <v-row justify="center">
                      <v-col cols="12">
                        <span>Lorem ipsum dolor</span>
                      </v-col>
                      <v-col cols="12">
                        <span>voluptatem sunt est laudantium fugit est fuga Quis! Qui galisum quasi ex obcaecat</span>
                      </v-col>
                    </v-row>
                  </v-col>
              </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" class="px-lg-8 pt   -10">
        <v-col cols="12" class="pro"><span>Professional certificate provided</span></v-col>
    </v-row>
    <v-row justify="center" class="pb-10">
        <v-col cols="3" v-for="(item, index) in icons"
            :key="index">
        <v-row>
            <v-col><v-img :src="item.icon"></v-img></v-col>
            <v-col align-self="center">{{ item.desc }}</v-col>
        </v-row>
        </v-col>
    </v-row>
    <div style="background-color: rgba(246, 249, 255, 1);" class="pt-10 pb-10">
    <v-row justify="start">
      <v-col cols="12" class="px-lg-8 ovr">
        <span>Related Courses You may Like ?</span>
      </v-col>
    </v-row>
      <v-row justify="center">
      <v-col cols="3" v-for="card in cards"  :key="card.id" align-self="center">
        <v-card elevation="10" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="sone">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="stwo">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
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
        <v-img src="../../assets/images/end.png"></v-img>
      </v-col>
    </v-row>
  </div>
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
        icons: [
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Lorem ipsum dolor sit amet.",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Lorem ipsum dolor sit amet.",
        },
        {
          icon: require("@/assets/images/img3.png"),
          desc: "Lorem ipsum dolor sit amet.",
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
};
</script>