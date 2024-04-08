<template>
  <div class="cover">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="9" sm="12" lg="9">
          <v-card
            class="cont"
            variant="flat"
            style="background-color: transparent"
          >
            <div
              class="cover_title flex flex-row items-center justify-left mt-24 pl-5"
            >
              <img src="@/assets/subtitle_icon.svg" alt="" />
              <h3 class="uppercase"><span>04</span> About Us</h3>
              <img src="@/assets/subtitle_icon.svg" alt="" />
            </div>
            <!-- Title -->
            <v-card-text
              class="agent_name font-weight-bold pl-2 pt-1"
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
            <v-card
              variant="flat"
              style="background-color: transparent"
              class="pl-5"
            >
              <v-card-text
                class="parent_text px-1 pt-0 w-8/12"
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
                class="px-1 py-1 w-8/12"
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
                <div class="over_btn mt-4 mb-4">
                  <v-btn color="#FFBB50" size="large"
                    >Learn More
                    <span>
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 8C17.5 3.58192 13.6942 0 9 0C4.30579 0 0.5 3.58192 0.5 8C0.5 12.4181 4.30579 16 9 16C13.6942 16 17.5 12.4181 17.5 8ZM8.80998 11.5138C8.749 11.4569 8.70054 11.3893 8.66736 11.3147C8.63417 11.2402 8.61692 11.1602 8.61658 11.0794C8.61623 10.9985 8.63281 10.9184 8.66537 10.8437C8.69792 10.7689 8.74581 10.7008 8.8063 10.6435L10.9444 8.61539H5.48558C5.31217 8.61539 5.14586 8.55055 5.02324 8.43514C4.90062 8.31974 4.83173 8.16321 4.83173 8C4.83173 7.83679 4.90062 7.68026 5.02324 7.56486C5.14586 7.44945 5.31217 7.38462 5.48558 7.38462H10.9444L8.8063 5.35654C8.74582 5.29911 8.69795 5.23103 8.66542 5.15619C8.63289 5.08135 8.61635 5.00122 8.61673 4.92036C8.61711 4.8395 8.6344 4.7595 8.66763 4.68494C8.70086 4.61037 8.74937 4.54269 8.81038 4.48577C8.8714 4.42885 8.94374 4.38379 9.02325 4.35318C9.10277 4.32257 9.18791 4.30699 9.27383 4.30735C9.44733 4.30807 9.61343 4.37363 9.73558 4.48962L12.9799 7.56654C13.1014 7.68181 13.1696 7.83761 13.1696 8C13.1696 8.16239 13.1014 8.31819 12.9799 8.43346L9.73558 11.5104C9.67509 11.5679 9.60314 11.6136 9.52386 11.6449C9.44458 11.6762 9.35951 11.6925 9.27354 11.6928C9.18756 11.6931 9.10237 11.6775 9.02282 11.6468C8.94328 11.6161 8.87095 11.5709 8.80998 11.5138Z"
                          fill="#3B3A5D"
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
</template>
<style lang="scss">
.cover {
  width: 100%;
  background-image: url("../assets/bg_agent.svg");
  background-size: cover;
  .cont {
    margin-top: -38px;
  }
}
.cover_title {
  h3 {
    font-family: Source Sans 3;
    font-size: 20px;
    font-weight: 400;
    line-height: 38.5px;
    letter-spacing: 0.3em;
    color: var(--Primary_Color);
    span {
      color: var(--Secondary_Color);
    }
  }
}
</style>
