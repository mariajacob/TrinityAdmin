<template>
  <div class="pt-16">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="12" lg="12" class="text-center head pt-md-8">
        <span>Our</span>
        <span style="color: rgba(255, 182, 49, 1)">&nbsp;Courses</span>
      </v-col>
      <v-col cols="12" lg="6" class="text-center sub10">
        <span
          >Education is the key to unlocking your potential. Discover a world of opportunities through our courses.</span
        >
      </v-col>
    </v-row>
    <div class="text-center">
      <v-row justify="center" >
        <v-col cols="10" align-self="center" class="pt-lg-0">
          <!-- <v-row justify="center" class="pt-10">
            <v-col cols="12">
              <v-row justify="center" class="pt-10">
                <v-col cols="12" class="text-center">
                  <v-chip-group multiple v-model="selectedChips" show-arrows>
                    <v-chip v-if="showChips > 4" @click="showPreviousChips">
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-chip>
                    <template v-for="chip in visibleChips" :key="chip.value">
                      <v-chip
                      class="ma-1"
                      label
                        @click="selectTab(chip.value)"
                        :class="{
                          'highlighted-chip': chip.value === selectedTab,
                        }"
                      >
                        {{ chip.label }}
                      </v-chip>
                    </template>
                    <v-chip
                      v-if="remainingChips.length > 0"
                      @click="showMoreChips"
                    >
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-chip>
                  </v-chip-group>
                </v-col>
              </v-row>
            </v-col>
          </v-row> -->
          <!-- <v-row justify="center" class="pt-10">
            <v-col cols="12"> -->
              <v-row justify="center" class="pt-10">
                <v-col cols="12" lg="10" sm="8" class="text-center px-8 px-lg-3" align-self="center"  >
                  <v-chip-group style="border-radius: 60px;" multiple v-model="selectedChips" class="text-center ">
                    <template v-for="chip in chips" :key="chip.value">
                    
                      <v-chip
                      
                       px-lg-3 class="ma-1 text-center"
                        label
                        style="border-radius: 60px;"
                        @click="selectTab(chip.value)"
                        :class="{
                          'highlighted-chip': chip.value === selectedTab,
                        }"
                      >
                        {{ chip.label }}
                      </v-chip>
                    </template>
                  </v-chip-group>
                </v-col>
              </v-row>
            <!-- </v-col>
          </v-row> -->
          
        </v-col>
        <v-col cols="12" lg="12">
          <v-row class="px-lg-16 pt-lg-3 py-lg-10 pb-lg-16 px-6 py-6 px-sm-8 py-sm-8 px-md-16 py-md-10 pb-md-16">
            <v-col v-if="selectedTab === 'CIFA'" cols="12">
              <v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in cifaCards"
                  :key="card.id"
                  align-self="center"

                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="CIFADetails(card.id)">
                        Learn More
                        <v-icon right style="color: black">mdi-arrow-right</v-icon>
                        </v-btn>
                      </v-col>
                    </v-col>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col v-if="selectedTab === 'CGPA'" cols="12">
              <v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in cgpaCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="CGPADetails(card.id)">
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
            <v-col v-if="selectedTab === 'ACCA'" cols="12">
              <v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in accaCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="ACCADetails(card.id)">
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
              <v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in erpCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="SAPDetails(card.id)">
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
              <v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in advCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="AdvancedExcelDetails(card.id)">
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
              ><v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in gstCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="GSTDetails(card.id)">
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
              ><v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in tallyCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="TallyDetails(card.id)">
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
            <v-col v-if="selectedTab === 'CMA'" cols="12"
              ><v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in cmaCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="CMADetails(card.id)">
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
            <v-col v-if="selectedTab === 'CA'" cols="12"
              ><v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in caCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                      <v-col cols=" 12">
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="CADetails(card.id)">
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
            <v-col v-if="selectedTab === 'Computer Courses'" cols="12"
              ><v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in cmpcrsCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="ComputerDetails(card.id)">
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
            <v-col v-if="selectedTab === 'AI'" cols="12"
              ><v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in aiCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="AIDetails(card.id)">
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
              ><v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in langCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="LanguageDetails(card.id)">
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
            <v-col v-if="selectedTab === 'Visualization software'" cols="12"
              ><v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in vsCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="LanguageDetails(card.id)">
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
            <v-col v-if="selectedTab === 'Life Skill Traning'" cols="12"
              ><v-row class="horizontal">
                <v-col
                  cols="12"
                  lg="4"
                  md="5"
                  sm="6"
                  v-for="card in lifeCards"
                  :key="card.id"
                  align-self="center"
                >
                  <v-card elevation="10" style="border-radius: 20px">
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
                        <v-btn style="color: rgba(255, 182, 49, 1)" class="learn" variant="text" @click="LanguageDetails(card.id)">
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
  font-family: opensans;
  font-size: 16px;
  font-weight: 400;
}
.highlighted-chip {
  background-color: rgba(41, 99, 183, 1);
  color: rgb(255, 255, 255);
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
.centered-chip-group {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.sub10{
  font-family: opensans;
  font-size: 16px;
  font-weight: 700;
}
</style>
<script>
export default {
  data() {
    return {
      selectedTab: "CIFA",
      showAdditionalButtons: false,
      selectedChips: [],
      chips: [
        { label: "CIFA", value: "CIFA" },
        { label: "CGPA", value: "CGPA" },
        { label: "ACCA", value: "ACCA" },
        { label: "SAP HANA", value: "SAP" },
        { label: "Advanced Excel", value: "Advanced Excel" },
        { label: "GST Course", value: "GST Course" },
        { label: "Tally", value: "Tally" },
        { label: "CMA", value: "CMA" },
        { label: "CA", value: "CA" },
        { label: "Computer Courses", value: "Computer Courses" },
        { label: "AI", value: "AI" },
        { label: "Language Courses", value: "Language Courses" },
        { label: "Life Skill Traning", value: "Other Courses" },
        { label: "Visualization software", value: "Visualization software" },
        // { label: "Tally", value: "Tally" },
        // { label: "CIFA", value: "CIFA" },
        // { label: "CGA", value: "CGA" },
        // { label: "ERP Courses", value: "ERP Courses" },
        // { label: "Advanced Excel", value: "Advanced Excel" },
        // { label: "GST Course", value: "GST Course" },
        // { label: "Tally", value: "Tally" },

      ],
      showChips: 4,
      cifaCards: [
        {
          id: 1,
          image: require("@/assets/images/card1.png"),
          title: "CIFA ",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card2.png"),
          title: "CIFA Basic (Fast Track)",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card3.png"),
          title: "CIFA Basic (Normal Track) ",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card3.png"),
          title: "CIFA Basic Plus(Normal Track) ",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 5,
          image: require("@/assets/images/card3.png"),
          title: "CIFA Basic Plus(Fast Track) ",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 6,
          image: require("@/assets/images/card3.png"),
          title: "CIFA (Professional)",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 7,
          image: require("@/assets/images/card3.png"),
          title: "CIFA (Professional)",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 8,
          image: require("@/assets/images/card3.png"),
          title: "CIFA (Advanced)",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      langCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "IELTS/UKVI",
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
      cgpaCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "CGFA-Certified Gulf Financial Accountant",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card3.png"),
          title: "CGFA-Certified Gulf Financial Accountant - ( Normal Track  )",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card3.png"),
          title: "CGPA-Certified Gulf Professional  Accountant - (FAST Track)",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card3.png"),
          title: "CGPA-Certified Gulf Professional  Accountant",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      accaCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "ACCA (Association of Chartered Certified Accountants)",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      erpCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "SAP S4 HANA FINANCE MODULE",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card3.png"),
          title: "S4 HANA SD MODULE",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card1.png"),
          title: "SAP S4 HANA MM Module",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      advCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "ADVANCED EXCEL",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        
      ],
      gstCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "GST Using Tally Prime & GST simulation Software",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card3.png"),
          title: "GST simulation Software",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card1.png"),
          title: "GST Using Tally PRIME",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card1.png"),
          title: "GCC-VAT Using Tally PRIME",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      tallyCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "TALLY Essential -Level 1",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card3.png"),
          title: "TALLY Essential -Level 2",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card1.png"),
          title: "TALLY Essential -Level 3",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card3.png"),
          title: "TALLY Essential Comprehensive",
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
      cmpcrsCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "DCA-Diploma in Computer Applications",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 2,
          image: require("@/assets/images/card2.png"),
          title: "DOA-Diploma in Computer Automation",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 3,
          image: require("@/assets/images/card2.png"),
          title: "EL Office (FRONT OFFICE)",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 4,
          image: require("@/assets/images/card2.png"),
          title: "MS OFFICE ",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 5,
          image: require("@/assets/images/card2.png"),
          title: "C++ (Basic -Level) for beginners",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 6,
          image: require("@/assets/images/card2.png"),
          title: "PHOTOSHOP (Basic -Level) for beginners",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 7,
          image: require("@/assets/images/card2.png"),
          title: "PYTHON (Basic -Level) for beginners",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 8,
          image: require("@/assets/images/card2.png"),
          title: "ISM (Basic -Level) for beginners",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        
      ],
      vsCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "Microsoft Power BI",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "TABLEAU",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
      lifeCards: [
        {
          id: 1,
          image: require("@/assets/images/card2.png"),
          title: "CA-FOUNDATION COACHING",
          subtitle:
            "Global supply chain management, international shipping, and trade compliance.",
        },
      ],
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
    showPreviousChips() {
      this.showChips -= 4; // Show the previous chips
    },
    showMoreChips() {
      this.showChips += 4; // Show more chips
    },
    CMADetails(cardId){
      this.$router.push({ name: 'CMADetails', query: { cardId } });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    CIFADetails(cardId) {
    this.$router.push({ name: 'CIFADetails', query: { cardId } });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
},
    CGPADetails(cardId){
      this.$router.push({ name: 'CGPADetails', query: { cardId } });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    ACCADetails(cardId){
      this.$router.push({ name: 'ACCADetails', query: { cardId } });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }); 
    },
    SAPDetails(cardId){
      this.$router.push({ name: 'SAPDetails', query: { cardId } });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    AdvancedExcelDetails(cardId){
      this.$router.push({ name: 'AdvancedExcelDetails', query: { cardId } });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    GSTDetails(){
      this.$router.push("/GSTDetails");
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    TallyDetails(){
      this.$router.push("/TallyDetails");
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    CADetails(){
      this.$router.push("/CADetails");
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    ComputerDetails(){
      this.$router.push("/ComputerDetails");
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    AIDetails(){
      this.$router.push("/AIDetails");
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    LanguageDetails(){
      this.$router.push("/SAPDetails");
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  computed: {
    visibleChips() {
      return this.chips.slice(0, this.showChips);
    },
    remainingChips() {
      return this.chips.slice(this.showChips);
    },
  },
};
</script>

<style>
.chipboarder{
  border-radius: 50px;
}
</style>