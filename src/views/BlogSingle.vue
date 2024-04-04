<template>
  <div class="single_blog">
    <v-container fluid class="ma-0 pa-0">
      <!-- Image Cover -->
      <div class="bg_blog pa-0 ma-0">
        <!-- Container -->
        <v-row class="d-flex justify-center pa-0 ma-0">
          <v-col cols="6">
            <div class="title position-relative mt-10" style="top: 250px">
              <v-col>
                <v-card
                  variant="flat"
                  class="d-flex flex-column align-center pb-2"
                  style="
                    margin-top: -18px;
                    background-color: #f3d1c1;
                    width: fit-content;
                  "
                >
                  <div class="hints d-flex">
                    <span
                      ><svg
                        width="27"
                        height="24"
                        viewBox="0 0 27 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style="margin-top: 10px; margin-left: 5px"
                      >
                        <path
                          d="M21.9375 7.64679V0.857143H17.7188V3.98839L13.5 0L0 12.8571H3.375V24H10.9688V15.4286H16.0312V24H23.625V12.8571H27L21.9375 7.64679Z"
                          fill="#B16642"
                        />
                      </svg>
                    </span>
                    <v-card-subtitle
                      class="Date pt-4"
                      style="color: #b16642; font-size: 18px"
                    >
                      November 05, 2021
                    </v-card-subtitle>
                    <v-card-subtitle
                      class="pt-4"
                      style="
                        color: #b16642;
                        font-size: 18px;
                        font-family: sans-serif;
                      "
                    >
                      Architecture
                    </v-card-subtitle>
                  </div>
                </v-card>
              </v-col>
              <v-col>
                <v-card-title
                  class="head_title"
                  style="
                    text-wrap: wrap;
                    color: #3b3a5d;
                    font-weight: bold;
                    font-size: 57px;
                    line-height: 1.1;
                    margin-top: 30px;
                    padding-left: 0px;
                  "
                  >Here’s how to decorate your new home from scratch
                </v-card-title>
              </v-col>
              <v-col class="d-flex flex-row align-center">
                <div class="Pic">
                  <img
                    src="../assets/Single_blog/Image.svg"
                    alt=""
                    style="width: 87px"
                  />
                </div>
                <div class="info ml-3">
                  <h6
                    style="
                      color: #3b3a5d;
                      font-family: kufam;
                      font-weight: bold;
                    "
                  >
                    Deborah Roderick
                  </h6>
                  <span
                    style="
                      display: block;
                      font-size: 14px;
                      color: #c17d5b;
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana,
                        sans-serif !important;
                    "
                    >Vloger</span
                  >
                </div>
              </v-col>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container>
      <v-row style="margin-top: -250px">
        <img src="../assets/Single_blog/Image (2).svg" />
      </v-row>
    </v-container>
    <!-- Start Section Text lorem -->
    <v-container style="max-width: 880px">
      <!-- First Row -->
      <v-row class="first_art">
        <v-col>
          <p
            class="mt-10 mb-5"
            style="
              font-family: Source Sans 3;
              font-size: 18px;
              font-weight: 400;
              line-height: 23.7px;
              text-align: left;
              color: #7d7d7d;
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h1
            class="mb-5"
            style="
              font-family: Kufam;
              font-size: 35px;
              font-weight: 600;
              line-height: 41.47px;
              text-align: left;
              color: #3b3a5d;
            "
          >
            Perfect Property For Building
          </h1>
          <p
            class="mb-5"
            style="
              font-family: Source Sans 3;
              font-size: 18px;
              font-weight: 400;
              line-height: 23.7px;
              text-align: left;
              color: #7d7d7d;
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul
            style="
              line-height: 2;
              font-family: sans-serif;
              font-weight: 500;
              margin-left: 28px;
            "
          >
            <li style="list-style: disc; color: #7d7d7d">
              Neque sodales ut etiam sit amet nisl purus non tellus orci ac
              auctor
            </li>
            <li style="list-style: disc; color: #7d7d7d">
              Adipiscing elit ut aliquam purus sit amet viverra suspendisse
              potenti
            </li>
            <li style="list-style: disc; color: #7d7d7d">
              Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
            </li>
            <li style="list-style: disc; color: #7d7d7d">
              Adipiscing elit ut aliquam purus sit amet viverra suspendisse
              potenti
            </li>
          </ul>
        </v-col>
      </v-row>
      <!-- Seconed Row -->
      <v-row class="second_art mb-8">
        <v-col
          class="position-relative"
          style="background-color: #3b3a5d; height: 355px; border-radius: 5px"
        >
          <p
            style="
              width: 76%;
              font-family: Source Sans 3;
              font-size: 25px;
              font-style: italic;
              font-weight: 400;
              line-height: 35.55px;
              text-align: center;
              color: #fff;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            "
          >
            “Democracy must be built through open societies that share
            information. When there is information, there is enlightenment. When
            there is no sharing of power, no rule of law, no accountability,
            there is abuse, corruption and indignation.”
          </p>
        </v-col>
      </v-row>
      <!-- Third Row -->
      <v-row class="third_art">
        <h4
          class="mb-5"
          style="
            font-family: Kufam;
            font-size: 25px;
            font-weight: 600;
            line-height: 41.47px;
            text-align: left;
            color: #3b3a5d;
          "
        >
          Setting the mood with incense
        </h4>
        <p
          class="mb-5"
          style="
            font-family: Source Sans 3;
            font-size: 17px;
            font-weight: 400;
            line-height: 23.7px;
            text-align: left;
            color: #7d7d7d;
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ol
          style="
            line-height: 2;
            font-family: sans-serif;
            font-weight: 500;
            margin-left: 28px;
          "
        >
          <li style="list-style: decimal; font-size: 14px; color: #7d7d7d">
            Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
          </li>
          <li style="list-style: decimal; font-size: 14px; color: #7d7d7d">
            Adipiscing elit ut aliquam purus sit amet viverra suspendisse
            potenti
          </li>
          <li style="list-style: decimal; font-size: 14px; color: #7d7d7d">
            Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
          </li>
          <li style="list-style: decimal; font-size: 14px; color: #7d7d7d">
            Adipiscing elit ut aliquam purus sit amet viverra suspendisse
            potenti
          </li>
        </ol>
      </v-row>
    </v-container>
    <!-- End Section Text lorem -->
    <v-container
      fluid
      style="background-color: #ffbb50; min-height: 360px; margin-top: 45px"
    >
      <v-row class="content_art d-felx mt-16" style="max-height: 360px">
        <v-col cols="4" class="d-flex justify-end">
          <img src="../assets/Single_blog/Image.svg" />
        </v-col>
        <v-col cols="6">
          <!-- Starting This Row Contain Tow Column -->
          <v-row>
            <v-col>
              <h6
                style="
                  font-family: Kufam;
                  font-size: 25px;
                  font-weight: 900;
                  line-height: 29.62px;
                  text-align: left;
                  color: #3b3a5d;
                "
              >
                Deborah Roderick
              </h6>
              <p
                style="
                  font-family: sans-serif;
                  font-size: 20px;
                  font-weight: 300;
                  line-height: 23.7px;
                  text-align: left;
                  color: #fff;
                "
              >
                Vloger
              </p>
            </v-col>
            <v-col class="d-flex gap-3 align-center">
              <v-icon color="#3B3A5D">mdi-instagram</v-icon>
              <v-icon color="#3B3A5D">mdi-facebook</v-icon>
              <v-icon color="#3B3A5D">mdi-twitter</v-icon>
              <v-icon color="#3B3A5D">mdi-linkedin</v-icon>
              <v-icon color="#3B3A5D">mdi-youtube</v-icon>
            </v-col>
          </v-row>
          <!-- Ending This Row Contain Tow Column -->

          <v-row>
            <v-col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <!-- First Image -->
      <div
        class="lat_art d-flex flex-column align-center"
        style="margin-top: 60px"
      >
        <v-row> </v-row>
        <v-row>
          <v-col
            ><p
              style="
                color: #3b3a5d;
                font-family: kufam;
                font-size: 40px;
                font-weight: 900;
                margin-top: -30px;
                margin-bottom: 15px;
              "
            >
              Latest Articles
            </p></v-col
          >
        </v-row>
        <v-row>
          <v-col cols="12">
            <img
              src="../assets/Blog_view/Image.svg"
              style="border-radius: 5px; width: 898px"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card
              variant="flat"
              class="d-flex flex-column align-center"
              style="margin-top: -18px"
            >
              <div class="hints d-flex">
                <v-card-subtitle
                  class="Date pt-4"
                  style="color: #b16642; font-size: 18px"
                >
                  November 05, 2021
                </v-card-subtitle>
                <v-card-subtitle
                  class="pt-4"
                  style="color: #b16642; font-size: 18px"
                >
                  Sale
                </v-card-subtitle>
              </div>
              <v-card-title
                class="head_title mt-3"
                style="
                  text-align: center;
                  text-wrap: wrap;
                  width: 80%;
                  color: #3b3a5d;
                  font-weight: bold;
                  font-size: 30px;
                  line-height: 1.4;
                "
                >Here’s how to decorate your new home from scratch
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <!-- Seconed Image -->
      <div
        class="lat_art d-flex flex-column align-center mb-16"
        style="margin-top: 60px"
      >
        <v-row>
          <v-col cols="12">
            <img
              src="../assets/Blog_view/Image (1).svg"
              style="border-radius: 5px; width: 898px"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card
              variant="flat"
              class="d-flex flex-column align-center"
              style="margin-top: -18px"
            >
              <div class="hints d-flex">
                <v-card-subtitle
                  class="Date pt-4"
                  style="color: #b16642; font-size: 18px"
                >
                  November 05, 2021
                </v-card-subtitle>
                <v-card-subtitle
                  class="pt-4"
                  style="color: #b16642; font-size: 18px"
                >
                  Sale
                </v-card-subtitle>
              </div>
              <v-card-title
                class="head_title mt-3"
                style="
                  text-align: center;
                  text-wrap: wrap;
                  width: 80%;
                  color: #3b3a5d;
                  font-weight: bold;
                  font-size: 30px;
                  line-height: 1.4;
                "
                >Here’s how to decorate your new home from scratch
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "blog_single",
};
</script>
<style lang="scss">
// Starting bg Cover & Header
.single_blog .bg_blog {
  width: 100%;
  height: 1000px;
  background: url("../assets/Single_blog/single_blog.svg") left top/cover
    no-repeat;
}
// before
.v-card-subtitle.Date.pt-4 {
  position: relative !important;
}
.v-card-subtitle.Date.pt-4::after {
  position: absolute;
  content: "";
  width: 2px;
  height: 15px;
  background-color: #b16642;
  top: 17px;
  left: 207px;
}

// Media
@media (max-width: 1205px) {
  .v-card-title.head_title {
    font-size: 35px !important;
    margin-bottom: 20px;
  }
}
@media (max-width: 1100px) {
  .v-card-title.head_title {
    font-size: 25px !important;
  }
}
@media (max-width: 676px) {
  .v-card-title.head_title {
    font-size: 18px !important;
  }
  .v-card.v-theme--light.v-card--density-default.v-card--variant-flat.d-flex.flex-column.align-center.pb-2 {
    margin-left: -65px !important;
  }
  .third_art h4,
  .first_art h1 {
    font-size: 20px !important;
    text-align: center !important;
  }
  .third_art h4 {
    margin-left: 105px !important;
  }
  .v-row.second_art p {
    font-size: 18px !important;
  }
  .v-row.content_art.d-felx.mt-16 {
    align-items: flex-start;
  }
  .v-row.content_art.d-felx.mt-16 p {
    font-size: 15px !important;
  }
}
</style>
