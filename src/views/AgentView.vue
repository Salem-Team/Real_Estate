<template>
  <div class="Agent_view">
    <div class="content">
      <div class="bacground_img">
        <v-container>
          <v-col cols="12" class="posituon-relative">
            <div class="agent">
              <div
                class="d-flex flex-column"
                style="position: absolute; top: 300px"
              >
                <h3 class="parent flex gap-2">
                  <span
                    ><svg
                      width="20"
                      height="17"
                      viewBox="0 0 27 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      x
                    >
                      <path
                        d="M21.9375 7.64679V0.857143H17.7188V3.98839L13.5 0L0 12.8571H3.375V24H10.9688V15.4286H16.0312V24H23.625V12.8571H27L21.9375 7.64679Z"
                        fill="#B16642"
                      />
                    </svg> </span
                  ><span
                    style="
                      font-family: Kufam;
                      font-size: 18px;
                      font-weight: 700;
                      line-height: 23.7px;
                      letter-spacing: 0.275em;
                      text-align: left;
                    "
                    >PROPERTY EXPERTS</span
                  >
                </h3>
                <div
                  class="last_title"
                  style="
                    font-family: Kufam;
                    font-size: 50px;
                    font-weight: 700;
                    line-height: 77.02px;
                    text-align: left;
                    color: #3b3a5d;
                  "
                >
                  Meet Our Agents
                </div>
              </div>
            </div>
          </v-col>
        </v-container>
      </div>
    </div>
    <!-- Contain Two Row 
     - The First Agent
     -Seconed About US
    -->
    <v-container>
      <!-- The First
       - It Contain Seven Cols For Agent 
       - it Used flex grid  system To Make It Responsive 
       - it Used V-Hovering To Make Animation for Color Change When Mouse Over On Image     
      -->
      <v-row>
        <v-col cols="12" md="4" sm="6" lg="3">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                class="Agent_Card mx-auto mb-16"
                max-width="333px"
                v-bind="props"
                :color="isHovering ? '#FFBB50' : '#F6F6F6'"
              >
                <img
                  class="align-end text-white"
                  height="404"
                  src="../assets/agent_view/Image.png"
                  cover
                />

                <v-card-title class="pb-1 mt-2 font-weight-bold">
                  Peter Parker
                </v-card-title>
                <v-card
                  class="d-flex"
                  v-bind="props"
                  :color="isHovering ? '#FFBB50' : '#F6F6F6'"
                  style="width: 100% !important; align-items: center; gap: 50px"
                >
                  <v-card-subtitle
                    :style="`color: ${isHovering ? '#fff' : '#FFBB50'}`"
                    >Land Seller</v-card-subtitle
                  >
                  <v-card-actions class="d-flex justify-center gap-2">
                    <v-icon>mdi-instagram</v-icon>
                    <v-icon>mdi-twitter</v-icon>
                    <v-icon>mdi-facebook</v-icon>
                  </v-card-actions>
                </v-card>
              </v-card>
            </template>
          </v-hover></v-col
        >
        <v-col cols="12" md="4" sm="6" lg="3">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                class="Agent_Card mx-auto mb-16"
                max-width="333px"
                v-bind="props"
                :color="isHovering ? '#FFBB50' : '#F6F6F6'"
              >
                <img
                  class="align-end text-white"
                  height="404"
                  src="../assets/agent_view/Agent2.svg"
                  cover
                />
                <v-card-title class="pb-1 mt-2 font-weight-bold">
                  Elena Gilberts
                </v-card-title>
                <v-card
                  class="d-flex"
                  v-bind="props"
                  :color="isHovering ? '#FFBB50' : '#F6F6F6'"
                  style="width: 100% !important; align-items: center; gap: 50px"
                >
                  <v-card-subtitle
                    :style="`color: ${isHovering ? '#fff' : '#FFBB50'}`"
                    >Land Seller</v-card-subtitle
                  >
                  <v-card-actions class="d-flex justify-center gap-2">
                    <v-icon>mdi-instagram</v-icon>
                    <v-icon>mdi-twitter</v-icon>
                    <v-icon>mdi-facebook</v-icon>
                  </v-card-actions>
                </v-card>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" sm="6" lg="3"
          ><v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                class="Agent_Card mx-auto mb-16"
                max-width="333px"
                v-bind="props"
                :color="isHovering ? '#FFBB50' : '#F6F6F6'"
              >
                <img
                  class="align-end text-white"
                  height="404"
                  src="../assets/agent_view/Agent3.svg"
                  cover
                />

                <v-card-title class="pb-1 mt-2 font-weight-bold">
                  Peter Parker
                </v-card-title>
                <v-card
                  class="d-flex"
                  v-bind="props"
                  :color="isHovering ? '#FFBB50' : '#F6F6F6'"
                  style="width: 100% !important; align-items: center; gap: 50px"
                >
                  <v-card-subtitle
                    :style="`color: ${isHovering ? '#fff' : '#FFBB50'}`"
                    >Land Seller</v-card-subtitle
                  >
                  <v-card-actions class="d-flex justify-center gap-2">
                    <v-icon>mdi-instagram</v-icon>
                    <v-icon>mdi-twitter</v-icon>
                    <v-icon>mdi-facebook</v-icon>
                  </v-card-actions>
                </v-card>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" sm="6" lg="3">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                class="Agent_Card mx-auto mb-16"
                max-width="333px"
                v-bind="props"
                :color="isHovering ? '#FFBB50' : '#F6F6F6'"
              >
                <img
                  class="align-end text-white"
                  height="404"
                  src="../assets/agent_view/Agent4.svg"
                  cover
                />

                <v-card-title class="pb-1 mt-2 font-weight-bold">
                  Rosalina William
                </v-card-title>
                <v-card
                  class="d-flex"
                  :color="isHovering ? '#FFBB50' : '#F6F6F6'"
                  style="width: 100% !important; align-items: center; gap: 50px"
                >
                  <v-card-subtitle
                    :style="`color: ${isHovering ? '#fff' : '#FFBB50'}`"
                    >Land Seller</v-card-subtitle
                  >
                  <v-card-actions class="d-flex justify-center gap-2">
                    <v-icon>mdi-instagram</v-icon>
                    <v-icon>mdi-twitter</v-icon>
                    <v-icon>mdi-facebook</v-icon>
                  </v-card-actions>
                </v-card>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" sm="6" lg="3"
          ><v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                class="Agent_Card mx-auto mb-16"
                max-width="333px"
                v-bind="props"
                :color="isHovering ? '#FFBB50' : '#F6F6F6'"
              >
                <img
                  class="align-end text-white"
                  height="404"
                  src="../assets/agent_view/Agent5.svg"
                  cover
                />
                <v-card-title class="pb-1 mt-2 font-weight-bold">
                  Peter Parker
                </v-card-title>
                <v-card
                  class="d-flex"
                  :color="isHovering ? '#FFBB50' : '#F6F6F6'"
                  style="width: 100% !important; align-items: center; gap: 50px"
                >
                  <v-card-subtitle
                    :style="`color: ${isHovering ? '#fff' : '#FFBB50'}`"
                    >Land Seller</v-card-subtitle
                  >
                  <v-card-actions class="d-flex justify-center gap-2">
                    <v-icon>mdi-instagram</v-icon>
                    <v-icon>mdi-twitter</v-icon>
                    <v-icon>mdi-facebook</v-icon>
                  </v-card-actions>
                </v-card>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" sm="6" lg="3"
          ><v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                class="Agent_Card mx-auto mb-16"
                max-width="333px"
                v-bind="props"
                :color="isHovering ? '#FFBB50' : '#F6F6F6'"
              >
                <img
                  class="align-end text-white"
                  height="404"
                  src="../assets/agent_view/Agent6.svg"
                  cover
                />

                <v-card-title class="pb-1 mt-2 font-weight-bold">
                  Kelian Anderson
                </v-card-title>
                <v-card
                  class="d-flex"
                  :color="isHovering ? '#FFBB50' : '#F6F6F6'"
                  style="width: 100% !important; align-items: center; gap: 50px"
                >
                  <v-card-subtitle
                    :style="`color: ${isHovering ? '#fff' : '#FFBB50'}`"
                    >Land Seller</v-card-subtitle
                  >
                  <v-card-actions class="d-flex justify-center gap-2">
                    <v-icon>mdi-instagram</v-icon>
                    <v-icon>mdi-twitter</v-icon>
                    <v-icon>mdi-facebook</v-icon>
                  </v-card-actions>
                </v-card>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" sm="6" lg="3">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                class="Agent_Card mx-auto mb-16"
                max-width="333px"
                v-bind="props"
                :color="isHovering ? '#FFBB50' : '#F6F6F6'"
              >
                <img
                  class="align-end text-white"
                  height="404"
                  src="../assets/agent_view/Agent7.svg"
                  cover
                />

                <v-card-title class="pb-1 mt-2 font-weight-bold">
                  Peter Parker
                </v-card-title>
                <v-card
                  class="d-flex"
                  v-bind="props"
                  :color="isHovering ? '#FFBB50' : '#F6F6F6'"
                  style="width: 100% !important; align-items: center; gap: 50px"
                >
                  <v-card-subtitle
                    :style="`color: ${isHovering ? '#fff' : '#FFBB50'}`"
                    >Land Seller</v-card-subtitle
                  >
                  <v-card-actions class="d-flex justify-center gap-2">
                    <v-icon>mdi-instagram</v-icon>
                    <v-icon>mdi-twitter</v-icon>
                    <v-icon>mdi-facebook</v-icon>
                  </v-card-actions>
                </v-card>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
      <!-- 2- The Seconed Row Contain info About Us -->
    </v-container>

    <div class="cover">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="9" sm="12" lg="9">
            <v-card
              class="cont"
              variant="flat"
              style="background-color: transparent"
            >
              <v-card-title
                class="title"
                style="
                  letter-spacing: 5px;
                  font-size: 14px;
                  position: relative;
                  left: 32px;
                  margin-top: 110px;
                "
              >
                <p
                  style="
                    font-family: source-sans-3 !important;
                    font-weight: bold;
                    text-transform: uppercase;
                  "
                >
                  <span style="color: #ffbb50">04</span>
                  <span> about us</span>
                </p>
              </v-card-title>
              <!-- Title -->
              <v-card-text
                class="agent_name font-weight-bold py-12 pt-10"
                style="font-size: 30px; color: #3b3a5d !important"
              >
                <v-card-title style="font-size: 35px; font-weight: bold">
                  42+ years of helping
                </v-card-title>
                <v-card-title style="font-size: 35px; font-weight: bold">
                  you find the right Propertys
                </v-card-title>
              </v-card-text>
              <!-- First pragraph -->
              <v-card variant="flat" style="background-color: transparent">
                <v-card-text
                  class="parent_text px-1 pt-0"
                  style="
                    color: #b16642;
                    font-size: 18px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  "
                  >Distinctively re-engineer revolutionary meta-services and
                  premium At vero eos et accusamus et iusto
                </v-card-text>
                <!-- seconed pragraph -->
                <v-card-text
                  class="px-1 py-4"
                  style="
                    color: #b16642;
                    font-size: 17px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  "
                >
                  Dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.</v-card-text
                >
                <div class="overlay">
                  <div class="over_btn mt-10">
                    <v-btn color="#3B3A5D" size="large"
                      >Learn More
                      <span>
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style="margin-left: 2px"
                        >
                          <path
                            d="M17 8C17 3.58192 13.1942 0 8.5 0C3.80579 0 0 3.58192 0 8C0 12.4181 3.80579 16 8.5 16C13.1942 16 17 12.4181 17 8ZM8.30998 11.5138C8.249 11.4569 8.20054 11.3893 8.16736 11.3147C8.13417 11.2402 8.11692 11.1602 8.11658 11.0794C8.11623 10.9985 8.13281 10.9184 8.16537 10.8437C8.19792 10.7689 8.24581 10.7008 8.3063 10.6435L10.4444 8.61539H4.98558C4.81217 8.61539 4.64586 8.55055 4.52324 8.43514C4.40062 8.31974 4.33173 8.16321 4.33173 8C4.33173 7.83679 4.40062 7.68026 4.52324 7.56486C4.64586 7.44945 4.81217 7.38462 4.98558 7.38462H10.4444L8.3063 5.35654C8.24582 5.29911 8.19795 5.23103 8.16542 5.15619C8.13289 5.08135 8.11635 5.00122 8.11673 4.92036C8.11711 4.8395 8.1344 4.7595 8.16763 4.68494C8.20086 4.61037 8.24937 4.54269 8.31038 4.48577C8.3714 4.42885 8.44374 4.38379 8.52325 4.35318C8.60277 4.32257 8.68791 4.30699 8.77383 4.30735C8.94733 4.30807 9.11343 4.37363 9.23558 4.48962L12.4799 7.56654C12.6014 7.68181 12.6696 7.83761 12.6696 8C12.6696 8.16239 12.6014 8.31819 12.4799 8.43346L9.23558 11.5104C9.17509 11.5679 9.10314 11.6136 9.02386 11.6449C8.94458 11.6762 8.85951 11.6925 8.77354 11.6928C8.68756 11.6931 8.60237 11.6775 8.52282 11.6468C8.44328 11.6161 8.37095 11.5709 8.30998 11.5138Z"
                            fill="#FFBB50"
                          />
                        </svg>
                      </span>
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-card>
          </v-col>
          <v-col cols="3" class="d-flex d-md-none d-sm-none"></v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "agent_view",
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
// Agent Banner
.bacground_img {
  width: 100%;
  height: 721px;
  background: url("../assets//agent_view/banner.svg") no-repeat left top / cover;
}
.content {
  padding-bottom: 90px !important;
}
// Agent Card Style
.Agent_Card .v-icon {
  color: #3b3a5d !important;
  &:hover {
    cursor: pointer;
  }
}
.cover {
  width: 100%;
  height: 783px;
  background-image: url("../assets/agent_view/bgagent.svg");
  background-size: contain;
  .cont {
    margin-top: -38px;
  }
}
.v-card-text.agent_name.font-weight-bold.py-12.px-10 {
  font-size: 23px !important;
  line-height: 1;
}
.title::after,
.title::before {
  position: absolute;
  content: "";
  width: 2px;
  height: 15px;
  font-weight: bold;
  background-color: #3b3a5d;
}
.title::after {
  top: 9px;
  left: 90px;
}
.title::before {
  top: 9px;
  left: 246px;
}
.v-card-text.px-1.pt-0 {
  font-size: 18px !important;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-flat.cont,
.v-card.v-theme--light.v-card--density-default.v-card--variant-flat,
.v-card-title.title,
.v-card-text.agent_name.font-weight-bold.py-12.pt-10 {
  padding: 0 100px;
}
// Starting Media Screen
@media (max-width: 1430px) {
  .v-card-title {
    font-size: 20px !important;
  }
  .v-card-text.agent_name.font-weight-bold.py-12.pt-10 {
    margin-top: -30px !important;
    font-size: 18px !important;
  }
  .v-card.v-theme--light.v-card--density-default.v-card--variant-flat {
    margin-top: -35px !important;
  }
  .v-card-text.px-1.py-4 {
    margin-top: -30px !important;
  }
  .over_btn.mt-10 {
    margin-top: 5px !important;
  }
  .v-card-title span {
    font-size: 13px !important;
  }
}
@media (max-width: 1140px) {
  .v-card-title.title {
    font-size: 20px !important;
    margin-top: 20px !important;
  }
  .v-card-text.agent_name.font-weight-bold.py-12.pt-10 {
    margin-top: -40px;
    font-size: 14px;
  }
  .v-card.v-theme--light.v-card--density-default.v-card--variant-flat {
    margin-top: -35px;
  }
  .v-card-text.px-1.py-4 {
    font-size: 14px !important;
  }
  .v-card-text.parent_text.px-1.pt-0 {
    font-size: 14px !important;
  }
  .over_btn.mt-10 {
    margin-top: 5px !important;
  }
  .v-card-title span {
    font-size: 13px;
  }
  .v-card.v-theme--light.v-card--density-default.v-card--variant-flat.cont {
    padding: 0 !important;
  }
}
@media (max-width: 820px) {
  .v-card-title.title {
    font-size: 14px !important;
    margin-top: 18px !important;
    margin-left: -18px !important;
  }
  .v-card-text.px-1.py-4 {
    font-size: 14px !important;
  }
  .v-card-text.parent_text.px-1.pt-0 {
    font-size: 14px !important;
  }
  .v-card-title span {
    font-size: 10px;
  }
  .v-card-title {
    font-size: 14px !important;
    margin-top: -5px;
    padding: 0 !important;
    span {
      position: relative !important;
      left: 100px !important;
    }
  }
  .v-card-text.agent_name.font-weight-bold.py-12.pt-10 {
    margin-top: -40px !important;
    font-size: 18px !important;
  }
  .title::after {
    top: 9px;
    left: 90px;
  }
  .title::before {
    top: 9px;
    left: 246px;
  }
}
// Small Screen
@media (max-width: 683px) {
  .v-card-text.parent_text.px-1.pt-0 {
    font-size: 12px !important;
  }
  .v-card-text.px-1.py-4 {
    font-size: 12px !important;
  }
  .v-card.v-theme--light.v-card--density-default.v-card--variant-flat {
    padding: 0 !important;
  }
  .over_btn.mt-10,
  button.v-btn.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-large.v-btn--variant-elevated {
    display: block !important;
    width: 100% !important;
  }
}
</style>
