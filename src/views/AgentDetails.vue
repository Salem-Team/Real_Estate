<template>
  <div class="parent">
    <div class="agent-bannner">
      <!-- Navbar component her -->
      <div class="navbar" style="width: 100%; height: 200px"></div>
      <v-container class="mt-14">
        <v-row class="mt-16">
          <!-- Start left column contain  agent information and contact buttons -->
          <!-- 
            1- this column contain Two Row, the first Row  for Agent Information and
            The Second one For details Card
           -->
          <v-col cols="6" class="position-realtive d-flex flex-wrap">
            <!-- Start The First Row -->
            <v-row>
              <v-card variant="flat" style="background-color: transparent">
                <!-- Contain home svg and title -->
                <v-card-title
                  class="pa-0"
                  style="
                    background-color: #f3d1c1;
                    width: fit-content;
                    height: 35px;
                  "
                >
                  <!-- home Svg -->
                  <v-icon
                    ><svg
                      width="18"
                      height="18"
                      viewBox="0 0 27 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9375 7.64679V0.857143H17.7188V3.98839L13.5 0L0 12.8571H3.375V24H10.9688V15.4286H16.0312V24H23.625V12.8571H27L21.9375 7.64679Z"
                        fill="#B16642"
                      />
                    </svg>
                  </v-icon>
                  <!-- Title -->
                  <span
                    class="text-subtitle-1 font-weight-light text-uppercase mt-2"
                    style="
                      color: #b16642;
                      letter-spacing: 6px !important;
                      font-family: kufam;
                    "
                    >SELLING AGENT</span
                  >
                </v-card-title>
                <!-- agent name -->
                <v-card-text
                  class="agent_name font-weight-bold py-12 px-0"
                  style="font-size: 60px; color: #3b3a5d !important"
                >
                  Elena Gilberts
                </v-card-text>
                <!-- First pragraph -->
                <v-card-text
                  class="px-1 pt-0"
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
                <!-- Contact info  -->
                <v-card-text class="pl-0">
                  <div class="contact" style="color: #b16642; font-size: 18px">
                    <p class="d-flex py-0 pl-0">
                      <span
                        ><svg
                          width="30"
                          height="20"
                          viewBox="0 0 37 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32.375 0H4.625C3.39878 0.00126336 2.22315 0.470986 1.35608 1.3061C0.489008 2.14122 0.0013117 3.27351 0 4.45455V23.5455C0.0013117 24.7265 0.489008 25.8588 1.35608 26.6939C2.22315 27.529 3.39878 27.9987 4.625 28H32.375C33.6012 27.9987 34.7768 27.529 35.6439 26.6939C36.511 25.8588 36.9987 24.7265 37 23.5455V4.45455C36.9987 3.27351 36.511 2.14122 35.6439 1.3061C34.7768 0.470986 33.6012 0.00126336 32.375 0ZM31.2039 7.3683L19.311 16.2774C19.0791 16.451 18.7937 16.5453 18.5 16.5453C18.2063 16.5453 17.9209 16.451 17.689 16.2774L5.79612 7.3683C5.65639 7.26666 5.53902 7.1393 5.45084 6.9936C5.36266 6.84791 5.30542 6.68678 5.28245 6.51959C5.25948 6.35241 5.27124 6.18249 5.31704 6.01972C5.36285 5.85695 5.44178 5.70457 5.54926 5.57143C5.65673 5.43829 5.79061 5.32706 5.94311 5.24418C6.09561 5.16131 6.26368 5.10846 6.43757 5.08869C6.61146 5.06892 6.7877 5.08264 6.95604 5.12904C7.12438 5.17544 7.28146 5.2536 7.41817 5.35898L18.5 13.6603L29.5818 5.35898C29.8589 5.15743 30.2073 5.06903 30.5515 5.1129C30.8958 5.15677 31.2082 5.32939 31.4214 5.59342C31.6345 5.85745 31.7312 6.19167 31.6905 6.52381C31.6498 6.85595 31.475 7.15931 31.2039 7.3683Z"
                            fill="#BE7E5E"
                          />
                        </svg>
                      </span>
                      <span class="px-3 font-weight-regular"
                        >dwilliam@mail.com</span
                      >
                    </p>
                    <p class="d-flex py-5">
                      <span>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2372 28.9998C21.9734 28.9998 20.1981 28.5427 17.5396 27.0578C14.3069 25.2452 11.8064 23.5719 8.59118 20.3657C5.49117 17.2682 3.9826 15.2628 1.87126 11.4215C-0.513962 7.08442 -0.107361 4.811 0.347152 3.83936C0.888423 2.67805 1.68738 1.98346 2.72007 1.29406C3.30663 0.909826 3.92736 0.580453 4.57438 0.310117C4.63912 0.282282 4.69934 0.255742 4.75308 0.231791C5.07357 0.0874362 5.55915 -0.130714 6.17424 0.102325C6.58472 0.256389 6.95118 0.571639 7.52483 1.13805C8.70125 2.29807 10.3089 4.88156 10.9019 6.15032C11.3001 7.00544 11.5636 7.56991 11.5643 8.203C11.5643 8.94419 11.1914 9.51579 10.7388 10.1327C10.654 10.2486 10.5698 10.3593 10.4882 10.4667C9.99551 11.114 9.88738 11.3011 9.9586 11.6351C10.103 12.3064 11.1797 14.3047 12.9492 16.07C14.7187 17.8353 16.6597 18.8438 17.3337 18.9875C17.6821 19.062 17.8731 18.9493 18.5413 18.4392C18.6371 18.3661 18.7355 18.2903 18.8384 18.2146C19.5286 17.7013 20.0738 17.3381 20.7976 17.3381H20.8015C21.4315 17.3381 21.9708 17.6113 22.8643 18.0618C24.0297 18.6496 26.6914 20.2362 27.8588 21.4137C28.4266 21.9859 28.7432 22.351 28.8979 22.7608C29.131 23.3777 28.9115 23.8612 28.7684 24.1849C28.7445 24.2386 28.7179 24.2976 28.6901 24.3629C28.4176 25.0087 28.0862 25.628 27.7001 26.213C27.0119 27.2423 26.3146 28.0391 25.1505 28.5809C24.5527 28.8636 23.8985 29.0068 23.2372 28.9998Z"
                            fill="#BE7E5E"
                          />
                        </svg>
                      </span>
                      <span class="py-1 px-3 font-weight-regular"
                        >+ 716 - 560 - 1920</span
                      >
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-row>
            <!-- The Seconed  Row-->
            <v-row class="justify-end">
              <v-col class="mt-16">
                <v-card
                  variant="flat"
                  class="details pt-1 text-center d-flex justify-end position-absolute"
                >
                  <v-card variant="flat">
                    <v-card-title
                      class="font-weight-bold"
                      style="font-size: 25px; color: #3b3a5d"
                    >
                      6,180
                    </v-card-title>
                    <v-card-text style="color: #c78a6c">
                      In property sales</v-card-text
                    >
                  </v-card>
                  <v-card variant="flat">
                    <v-card-title
                      class="font-weight-bold"
                      style="font-size: 25px; color: #3b3a5d"
                    >
                      99%
                    </v-card-title>
                    <v-card-text style="color: #c78a6c">
                      Customer satisfaction</v-card-text
                    >
                  </v-card>
                  <v-card variant="flat">
                    <v-card-title
                      class="font-weight-bold"
                      style="font-size: 25px; color: #3b3a5d"
                    >
                      25K+
                    </v-card-title>
                    <v-card-text style="color: #c78a6c">
                      Property Transaction</v-card-text
                    >
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <!-- End left column -->
          <!-- Start Column contain img -->
          <v-col cols="6">
            <div class="agent_img" style="display: inline-block">
              <img
                src="../assets/agent_details/agaent.png"
                alt=""
                style="width: 100%; height: 100%"
              />
            </div>
          </v-col>
        </v-row>
        <!-- Start Property Row -->
      </v-container>
      <ProperiesCoun4 />
    </div>
  </div>
</template>
<script>
import ProperiesCoun4 from "@/components/ProperiesCoun4.vue";

export default {
  components: { ProperiesCoun4 },
};
</script>
<style lang="scss" scoped>
.parent {
  height: 3000px;
}
.agent-bannner {
  background-image: url("../assets/agent_details/Background.svg");
  background-size: cover;
  background-position: left top;
  height: 930px;
}
.title p {
  position: relative;
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
  top: 15px;
  left: 195px;
}
.title::before {
  top: 15px;
  left: 345px;
}
.parent_chips {
  position: relative;
  margin-top: 10px;
  .chip {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 25%;
    border: 1px solid #d7d7d7;
    margin: 5px;
    padding: 3px;
    position: relative;
    font-size: 14px;
    .svg {
      margin-right: 1px;
      width: 30% !important;
    }
    .name {
      padding: 4px;
      padding-left: 0;
      font-size: 14px !important;
      // margin-left: px;
    }
    .svg::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 12px;
      color: red;
      background: #3b3a5d;
      top: 12px;
      left: 39px;
    }
  }
}
// Overlay Div
.overlay {
  position: relative;
  &::after {
    position: absolute;
    content: " ";
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #fae2d6;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -9999;
  }
}

// Start Media Queries
@media (max-width: 870px) {
  .v-card-text.agent_name.font-weight-bold.py-12.px-0 {
    font-size: 35px !important;
  }
}
// Screen 590px
@media (max-width: 590px) {
  .v-card-text.agent_name.font-weight-bold.py-12.px-0 {
    font-size: 25px !important;
  }
  .v-card-text.sale_text {
    font-size: 30px !important;
  }
  .v-card-text.px-1.pt-0 {
    font-size: 16px !important;
  }
  .v-card-text.px-1.py-4 {
    font-size: 16px !important;
  }
}
@media (max-width: 960px) {
  .v-card-text.agent_name.font-weight-bold.py-12.px-0 {
    font-size: 30px !important;
  }
  .v-col-sm-12.v-col-md-12.v-col-12.property.d-flex.justify-center.mt-md-16 {
    margin-top: 100px !important;
  }
  .title::after,
  .title::before {
    width: 0;
    height: 0;
  }
}
@media (max-width: 720px) {
  .v-col-sm-12.v-col-md-12.v-col-12.property.d-flex.justify-center.mt-md-16[data-v-68f2b237] {
    width: fit-content;
  }
  .title::after,
  .title::before {
    width: 0;
    height: 0;
  }
}
@media (max-width: 1279px) {
  .svg::after {
    top: 9px !important;
    left: 26px !important;
  }
  .chip {
    padding: 0 !important;
    margin: 0 !important;
  }
}
@media (max-width: 959px) {
  .v-card.v-theme--light.v-card--density-default.v-card--variant-flat {
    width: 80% !important;
    min-width: 0 !important;
  }
  .svg::after {
    top: 9px !important;
    left: 38px !important;
  }
}

@media (max-width: 660px) {
  .v-card.v-theme--light.v-card--density-default.v-card--variant-flat {
    width: 100% !important;
  }
  .sale.d-flex.justify-between.py-5 {
    margin: 0 15px;
  }
  .overlay::after {
    width: 400px !important;
    height: 400px !important;
  }
}
@media (max-width: 1280px) {
  .Pro_cont .v-card {
    height: 600px !important;
  }
  img {
    margin-top: 30px !important;
  }
}
</style>
