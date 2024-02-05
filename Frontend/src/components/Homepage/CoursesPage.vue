<template>
  <div style="background-color: rgba(58, 129, 230, 1)" class="pb-10 pt-10 px-lg-12 px-md-10">
    <v-row justify="center">
      <v-col cols="12" class="text-center head px-lg-0 px-9 " style="text-align: justify;">
        <span>
          Courses we
          <span style="color: rgba(255, 182, 49, 1)"> Offer</span></span
        >
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12" class="sub px-lg-0 px-8" style="text-align: justify;">
        <span>
          Explore our comprehensive catalog showcasing diverse courses offered by 
our institution, tailored to ignite learning passions and drive academic
 success.
        </span>
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="12" lg="2" md="3" sm="6" class="px-0 py-0 px-sm-8">
        <v-row justify="center" class="pt-10">
          <v-col cols="12" sm="12" lg="12" md="12" >
            <v-row justify="center" class="equal-size-buttons">
              <v-col cols="7" sm="11" lg="12" md="12" class="pr-lg-0">
                <v-btn
                  @click="selectedTab = 'CIFA'"
                  :class="{ active: selectedTab === 'CIFA' }"
                  >CIFA</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="12" md="12" class="pr-lg-0">
                <v-btn
                  @click="selectedTab = 'CGA'"
                  :class="{ active: selectedTab === 'CGA' }"
                  >CGA</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="12" md="12" class="pr-lg-0">
                <v-btn
                  @click="selectedTab = 'SAP'"
                  :class="{ active: selectedTab === 'SAP' }"
                  >SAP HANA</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="12" md="12" class="pr-lg-0">
                <v-btn
                  @click="selectedTab = 'Advanced Excel'"
                  :class="{ active: selectedTab === 'Advanced Excel' }"
                  >Advanced Excel</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="12" md="12" class="pr-lg-0">
                <v-btn
                  @click="selectedTab = 'GST Course'"
                  :class="{ active: selectedTab === 'GST Course' }"
                  >GST Course</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="12" md="12" class="pr-lg-0">
                <v-btn
                  @click="selectedTab = 'Tally'"
                  :class="{ active: selectedTab === 'Tally' }"
                  >Tally</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="2" md="3" sm="6" class="px-0 py-0 pl-md-0  px-sm-8">
        <v-row justify="center" class="pt-10">
          <v-col cols="12" sm="12" lg="12" md="12">
            <v-row justify="center" class="equal-size-buttons">
              <v-col cols="7" sm="11" lg="12" md="11" class="pl-lg-8 pr-lg-0">
                <v-btn
                  @click="selectedTab = 'CMA'"
                  :class="{ active: selectedTab === 'CMA' }"
                  >CMA</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="12" md="11" class="pl-lg-8 pr-lg-0">
                <v-btn
                  @click="selectedTab = 'CA'"
                  :class="{ active: selectedTab === 'CA' }"
                  >CA</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="12" md="11" class="pl-lg-8 pr-lg-0">
                <v-btn
                  @click="selectedTab = 'AI'"
                  :class="{ active: selectedTab === 'AI' }"
                  >AI</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="12" md="11" class="pl-lg-8 pr-lg-0">
                <v-btn
                  @click="selectedTab = 'Language Courses'"
                  :class="{ active: selectedTab === 'Language Courses' }"
                  >Language Courses</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="12" md="11" class="pl-lg-8 pr-lg-0">
                <v-btn
                  @click="selectedTab = 'Computer Courses'"
                  :class="{ active: selectedTab === 'Computer Courses' }"
                  >Computer Courses</v-btn
                >
              </v-col>
              <!-- <v-col cols="7" sm="11" lg="7" md="8">
                <v-btn
                  @click="selectedTab = 'ERP Courses'"
                  :class="{ active: selectedTab === 'ERP Courses' }"
                  >ERP Courses2</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="7" md="8">
                <v-btn
                  @click="selectedTab = 'Advanced Excel'"
                  :class="{ active: selectedTab === 'Advanced Excel' }"
                  >Advanced Excel</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="7" md="8">
                <v-btn
                  @click="selectedTab = 'GST Course'"
                  :class="{ active: selectedTab === 'GST Course' }"
                  >GST Course</v-btn
                >
              </v-col>
              <v-col cols="7" sm="11" lg="7" md="8">
                <v-btn
                  @click="selectedTab = 'Tally'"
                  :class="{ active: selectedTab === 'Tally' }"
                  >Tally</v-btn
                >
              </v-col> -->
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10" lg="6" md="6" sm="12" class="pl-lg-16 pl-md-0 pl-16 pr-lg-0 pr-0 pt-lg-0 pt-7">
        <v-row>
          <v-col v-if="selectedTab === 'CIFA'" cols="12">
            <v-row class="horizontall">
              <v-col
                cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in cifaCards"
                :key="card.id"
                align-self="center"
                class="pl-0"
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="selectedTab === 'CGA'" lg="12" cols="12">
            <v-row class="horizontall">
              <v-col
              cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in cgaCards"
                :key="card.id"
                align-self="center"
                
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="selectedTab === 'SAP'" cols="12">
            <v-row class="horizontall">
              <v-col
              cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in erpCards"
                :key="card.id"
                align-self="center"
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="selectedTab === 'Advanced Excel'" cols="12">
            <v-row class="horizontall">
              <v-col
              cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in advCards"
                :key="card.id"
                align-self="center"
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row></v-col
          >
          <v-col v-if="selectedTab === 'GST Course'" cols="12"
            ><v-row class="horizontall">
              <v-col
              cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in gstCards"
                :key="card.id"
                align-self="center"
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row></v-col
          >
          <v-col v-if="selectedTab === 'Tally'" cols="12"
            ><v-row class="horizontall">
              <v-col
              cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in tallyCards"
                :key="card.id"
                align-self="center"
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="selectedTab === 'CMA'" cols="12"
            ><v-row class="horizontall">
              <v-col
              cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in cmaCards"
                :key="card.id"
                align-self="center"
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="selectedTab === 'CA'" cols="12"
            ><v-row class="horizontall">
              <v-col
              cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in caCards"
                :key="card.id"
                align-self="center"
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="selectedTab === 'Computer Courses'" cols="12"
            ><v-row class="horizontall">
              <v-col
              cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in cmpcrsCards"
                :key="card.id"
                align-self="center"
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="selectedTab === 'AI'" cols="12"
            ><v-row class="horizontall">
              <v-col
              cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in aiCards"
                :key="card.id"
                align-self="center"
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="selectedTab === 'Language Courses'" cols="12"
            ><v-row class="horizontall">
              <v-col
              cols="12"
                lg="6"
                md="6"
                sm="6"
                v-for="card in langCards"
                :key="card.id"
                align-self="center"
              >
                <v-card elevation="0" style="border-radius: 20px">
                  <div class="image">
                    <v-img :src="card.image" height="auto" cover></v-img>
                  </div>
                  <v-col cols="12">
                    <v-col cols="12" class="title">
                      {{ card.title }}
                    </v-col>
                    <v-col cols="12" class="subtitle">
                      {{ card.subtitle }}
                    </v-col>
                    <v-col cols="12">
                      <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="detail()">
                          Learn More
                          <v-icon right style="color: black"
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                    </v-col>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" align-self="center" class="text-center">
        <v-btn
          style="background-color: rgba(248, 141, 47, 1)"
          @click="navigateToExplorePage"
          class="button"
        >
          Explore Courses
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedTab: "CIFA",
      showAdditionalButtons: false,
      cifaCards: [
        {
          id: 1,
          image: require("@/assets/images/card1.png"),
          title: "CIFA Basic",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card2.png"),
          title: "CIFA Basic Plus",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card3.png"),
          title: "CIFA Pro",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card3.png"),
          title: "CIFA Advanced",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      cgaCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "CGA Basic",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card3.png"),
          title: "CGA Basic Plus",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card1.png"),
          title: "CGA Pro",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card3.png"),
          title: "CGA Basic Plus",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      erpCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "FICO",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card3.png"),
          title: "SD",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card1.png"),
          title: "MM",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card1.png"),
          title: "PP",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      advCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "ADVANCED Basic",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card3.png"),
          title: "ADVANCED Basic Plus",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card1.png"),
          title: "ADVANCED Pro",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card2.png"),
          title: "ADVANCED Basic",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      gstCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "GST Basic",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card3.png"),
          title: "GST Basic Plus",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card1.png"),
          title: "GST Pro",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      tallyCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "TALLY Basic",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card3.png"),
          title: "TALLY Basic Plus",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card1.png"),
          title: "TALLY Pro",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card3.png"),
          title: "TALLY Basic Plus",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      cmaCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "CMA-USA",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      caCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "CA-FOUNDATION COACHING",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      langCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "IELTS",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card2.png"),
          title: "OET",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card2.png"),
          title: "SPOKEN ENGLISH",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card2.png"),
          title: "GERMAN",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 5,
          image: require("@/assets/images/card2.png"),
          title: "FRENCH",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      aiCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "ROBOTICS",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card2.png"),
          title: "MACHINE LEARNING",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card2.png"),
          title: "CODING",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      cmpcrsCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "MSOFFICE Suite",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card2.png"),
          title: "PYTHON",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card2.png"),
          title: "Django using Python",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card2.png"),
          title: "HTML",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 5,
          image: require("@/assets/images/card2.png"),
          title: "CSS",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 6,
          image: require("@/assets/images/card2.png"),
          title: "C++",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 7,
          image: require("@/assets/images/card2.png"),
          title: "JAVA",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 8,
          image: require("@/assets/images/card2.png"),
          title: "Photoshop",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 9,
          image: require("@/assets/images/card2.png"),
          title: "Diploma in Computer Application (DCA)",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 10,
          image: require("@/assets/images/card2.png"),
          title: "Diploma in Office Automation Course (DOA)",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 11,
          image: require("@/assets/images/card2.png"),
          title: "Digital Marketing",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
    };
  },
  methods: {
    navigateToExplorePage() {
      this.$router.push("/ourcourses");
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    detail(){
      this.$router.push("/coursedetails");
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style>
.head {
  font-family: archibld;
  font-size: 39px;
  font-weight: 700;
  color: white;
}
.button{
  color: white;
  font-family: opensans;
  font-size: 16px;
  font-weight: 700;
}
.sub {
  font-family: opensans;
  color: white;
  font-size: 16px;
  font-weight: 400;
}
.title {
  font-family: archireg;
  font-size: 20px;
  font-weight: 600;
}
.subtitle {
  font-family: opensans;
  font-size: 13px;
  font-weight: 600;
}
.learn {
  font-family: opensans;
  font-size: 15px;
  font-weight: 700;
}
.horizontall {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  overflow-x: auto;
  
}
.horizontall::-webkit-scrollbar {
  height: 5px;
}

.horizontall::-webkit-scrollbar-track {
  background-color:rgba(223, 223, 223, 0.47);
}

.horizontall::-webkit-scrollbar-thumb {
  background-color:rgb(255, 255, 255);
}
.equal-size-buttons .v-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(
    255,
    255,
    255,
    0.13
  ); /* Set the default background color to white */
  color: white; /* Set the default text color to red */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition effect */
}

.equal-size-buttons .v-btn.active {
  background-color: rgb(
    255,
    255,
    255
  ); /* Set the active button's background color to red */
  color: rgb(0, 0, 0);
}
</style>