<template>
  <div class="banner">
    <!-- Start Landding Banner -->
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="5">
            <div class="cont d-flex flex-column text-left mt-16">
              <h4>
                <span class="mr-2"
                  ><svg
                    width="27"
                    height="24"
                    viewBox="0 0 27 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9375 7.64679V0.857143H17.7188V3.98839L13.5 0L0 12.8571H3.375V24H10.9688V15.4286H16.0312V24H23.625V12.8571H27L21.9375 7.64679Z"
                      fill="#B16642"
                    />
                  </svg> </span
                >Real Estate Agency
              </h4>
              <h1 class="title">
                Find the perfect place to Live with your family
              </h1>
              <p class="hint mt-5 mb-5">
                Distinctively re-engineer revolutionary meta-services and
                premium architectures. Intrinsically incubate.
              </p>
              <v-btn
                variant="outlined"
                width="220"
                height="60px"
                class="bg-white"
                style="font-weight: bold; text-transform: capitalize"
                >Explore Property
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 8C17 3.58192 13.1942 0 8.5 0C3.80579 0 0 3.58192 0 8C0 12.4181 3.80579 16 8.5 16C13.1942 16 17 12.4181 17 8ZM8.30998 11.5138C8.249 11.4569 8.20054 11.3893 8.16736 11.3147C8.13417 11.2402 8.11692 11.1602 8.11658 11.0794C8.11623 10.9985 8.13281 10.9184 8.16537 10.8437C8.19792 10.7689 8.24581 10.7008 8.3063 10.6435L10.4444 8.61539H4.98558C4.81217 8.61539 4.64586 8.55055 4.52324 8.43514C4.40062 8.31974 4.33173 8.16321 4.33173 8C4.33173 7.83679 4.40062 7.68026 4.52324 7.56486C4.64586 7.44945 4.81217 7.38462 4.98558 7.38462H10.4444L8.3063 5.35654C8.24582 5.29911 8.19795 5.23103 8.16542 5.15619C8.13289 5.08135 8.11635 5.00122 8.11673 4.92036C8.11711 4.8395 8.1344 4.7595 8.16763 4.68494C8.20086 4.61037 8.24937 4.54269 8.31038 4.48577C8.3714 4.42885 8.44374 4.38379 8.52325 4.35318C8.60277 4.32257 8.68791 4.30699 8.77383 4.30735C8.94733 4.30807 9.11343 4.37363 9.23558 4.48962L12.4799 7.56654C12.6014 7.68181 12.6696 7.83761 12.6696 8C12.6696 8.16239 12.6014 8.31819 12.4799 8.43346L9.23558 11.5104C9.17509 11.5679 9.10314 11.6136 9.02386 11.6449C8.94458 11.6762 8.85951 11.6925 8.77354 11.6928C8.68756 11.6931 8.60237 11.6775 8.52282 11.6468C8.44328 11.6161 8.37095 11.5709 8.30998 11.5138Z"
                    fill="#ffbb50"
                  />
                </svg>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="7">
            <div
              class="parent-img"
              style="width: 700px; height: 700px; position: relative"
            >
              <img
                src="../assets//Image-6.png"
                alt=""
                style="
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  top: -155px;
                  left: 118px;
                "
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Landding Banner -->
  </div>
</template>
<script>
export default {
  name: "home-view",
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.banner {
  .parent {
    height: 1034px;
    background-image: url("../assets/Background-1.jpg");
    background-size: cover;
    .cont {
      h4 {
        background-color: #f3d1c1;
        width: fit-content;
        color: #b16642;
        line-height: 23.7px;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 17px;
        font-family: kufan;
        font-weight: lighter;
        margin-bottom: 30px;
        font-family: kufam;
      }
      h1 {
        color: #3b3a5d;
        font-size: 55px;
        line-height: 77px;
      }
      p.hint {
        font-size: 15px;
        color: #b16642;
      }
    }
  }
}
</style>
