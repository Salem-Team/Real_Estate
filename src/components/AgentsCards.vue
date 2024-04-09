<template>
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
    </v-row>
    <!-- 2- The Seconed Row Contain info About Us -->
  </v-container>
</template>

<style lang="scss" scoped>
// Agent Card Style
.Agent_Card .v-icon {
  color: #3b3a5d !important;
  &:hover {
    cursor: pointer;
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
