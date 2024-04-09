<template>
  <section>
    <v-container class="">
      <!-- our Focus -->
      <v-row class="d-flex justify-center">
        <v-col
          cols="12"
          style="
            text-align: center;
            font-family: Kufam;
            font-size: 40px;
            font-weight: 700;
            line-height: 53.32px;
            text-align: center;
          "
          >Our Main Focus</v-col
        >
      </v-row>
      <v-row class="focus d-flex flex-wrap justify-around felx-gap-3">
        <v-col cols="12" xs="6" sm="6" md="4">
          <v-card
            class="pic1 mx-auto my-8 py-6 px-5"
            elevation="0"
            style="
              height: 308px;
              gap: 0px;
              border-radius: 5px 0px 0px 0px;
              opacity: 0px;
            "
          >
            <div
              class="square mb-5"
              style="
                width: 90px;
                height: 90px;
                border: 1px solid #ddd;
                position: relative;
                text-align: center;
                border-radius: 50%;
                background: #ffbb50;
              "
            >
              <span
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  font-family: Kufam;
                  font-size: 35px;
                  font-weight: 700;
                  line-height: 53.32px;
                  text-align: left;
                  color: #fff;
                "
                >01</span
              >
            </div>

            <v-card-item>
              <v-card-title
                style="
                  font-family: Kufam;
                  font-size: 23px;
                  font-weight: 600;
                  line-height: 29.62px;
                  text-align: left;
                  color: #3b3a5d;
                "
              >
                Planning stage
              </v-card-title>
            </v-card-item>

            <v-card-text
              style="
                font-family: Source Sans 3;
                font-size: 15px;
                font-weight: 400;
                line-height: 23px;
                text-align: left;
                color: #b16642;
              "
            >
              High level overviews. approaches lverall value proposition.
              Organically grow the holistic world view of disruptive.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="6" sm="6" md="4">
          <v-card
            class="pic2 mx-auto my-8 py-6 px-5"
            elevation="0"
            style="
              height: 308px;
              gap: 0px;
              border-radius: 5px 0px 0px 0px;
              opacity: 0px;
            "
          >
            <div
              class="square mb-5"
              style="
                width: 90px;
                height: 90px;
                border: 1px solid #ddd;
                position: relative;
                text-align: center;
                border-radius: 50%;
                background: #ffbb50;
              "
            >
              <span
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  font-family: Kufam;
                  font-size: 35px;
                  font-weight: 700;
                  line-height: 53.32px;
                  text-align: left;
                  color: #fff;
                "
                >02</span
              >
            </div>

            <v-card-item>
              <v-card-title
                style="
                  font-family: Kufam;
                  font-size: 23px;
                  font-weight: 600;
                  line-height: 29.62px;
                  text-align: left;
                  color: #3b3a5d;
                "
              >
                Development
              </v-card-title>
            </v-card-item>

            <v-card-text
              style="
                font-family: Source Sans 3;
                font-size: 15px;
                font-weight: 400;
                line-height: 23px;
                text-align: left;
                color: #b16642;
              "
            >
              High level overviews. approaches lverall value proposition.
              Organically grow the holistic world view of disruptive.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="6" sm="6" md="4">
          <v-card
            class="pic3 mx-auto my-8 py-6 px-5"
            elevation="0"
            style="
              height: 308px;
              gap: 0px;
              border-radius: 5px 0px 0px 0px;
              opacity: 0px;
            "
          >
            <div
              class="square mb-5"
              style="
                width: 90px;
                height: 90px;
                border: 1px solid #ddd;
                position: relative;
                text-align: center;
                border-radius: 50%;
                background: #ffbb50;
              "
            >
              <span
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  font-family: Kufam;
                  font-size: 35px;
                  font-weight: 700;
                  line-height: 53.32px;
                  text-align: left;
                  color: #fff;
                "
                >03</span
              >
            </div>

            <v-card-item>
              <v-card-title
                style="
                  font-family: Kufam;
                  font-size: 23px;
                  font-weight: 600;
                  line-height: 29.62px;
                  text-align: left;
                  color: #3b3a5d;
                "
              >
                New way of living
              </v-card-title>
            </v-card-item>

            <v-card-text
              style="
                font-family: Source Sans 3;
                font-size: 15px;
                font-weight: 400;
                line-height: 23px;
                text-align: left;
                color: #b16642;
              "
            >
              High level overviews. approaches lverall value proposition.
              Organically grow the holistic world view of disruptive.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- End our Focus -->
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
// Start Progrss Sec
.v-row.progress {
  flex-grow: 0 !important;
}
.progress .v-card-title.title {
  position: relative;
}
.progress .v-card-title.title ::after,
.progress .v-card-title.title ::before {
  position: absolute;
  content: "";
  width: 2px;
  height: 15px;
  font-weight: bold;
  background-color: #3b3a5d;
}
.progress .v-card-title.title ::after {
  top: 20px;
  left: 4px !important;
}
.progress .v-card-title.title ::before {
  top: 20px;
  left: 155px !important;
}
.pic1.mx-auto.my-8.py-6.px-5 {
  background-image: url("../assets/Services_view/Background.svg");
}
.pic2.mx-auto.my-8.py-6.px-5 {
  background-image: url("../assets/Services_view/Background (1).svg");
}
.pic3.mx-auto.my-8.py-6.px-5 {
  background-image: url("../assets/Services_view/Background (2).svg");
}
// Start Progrss Sec
@media (max-width: 760px) {
  .v-row.focus.d-flex.flex-wrap.justify-around.felx-gap-3 {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }
}
</style>
