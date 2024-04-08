<template>
  <section class="banner mb-1">
    <!-- Start Landding Banner -->
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="5" class="mt-64 mb-4">
            <div class="cont d-flex flex-column text-left mt-24">
              <h4 class="flex flex-row gap-1 p-1">
                <span><img src="@/assets/home_icon.svg" alt="" /></span>ABOUT
                PROPERLAND
              </h4>
              <h1 class="title">About Our Real Estate</h1>
            </div>
          </v-col>
          <v-col cols="7">
            <div class="parent_img relative">
              <img
                class="w-full h-fit absolute top-44"
                src="@/assets/about_properland.svg"
                alt=""
                style="left: 118px"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Landding Banner -->
  </section>

  <section id="video">
    <div class="video">
      <div
        class="video_details flex flex-row-reverse mb-4 justify-left mx-auto p-24 gap-9 items-center"
      >
        <div class="container">
          <div class="video_title flex flex-row items-center justify-left">
            <img src="@/assets/subtitle_icon.svg" alt="" />
            <h3 class="uppercase"><span>01</span> VIntro Video</h3>
            <img src="@/assets/subtitle_icon.svg" alt="" />
          </div>
          <div class="details pl-3">
            <h1>Buying & Selling Property In An Easy Way</h1>
            <p id="par">
              Distinctively re-engineer revolutionary meta-services and premium
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi.
            </p>
            <div class="view flex flex-col justify-left p-5 gap-5 bg-white">
              <div class="first flex flex-row justify-left">
                <img src="@\assets\Video_home_Icon.svg" alt="" />
                <div class="col flex flex-col justify-center w-9/12 gap-2">
                  <h3>Our Vision</h3>
                  <p>
                    Distinctively re-engineer revolutionary meta-services and
                    premium At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis
                  </p>
                </div>
              </div>
              <div class="second first flex flex-row justify-left">
                <img src="@\assets\Video_mission_Icon.svg" alt="" />
                <div class="col flex flex-col justify-center w-9/12 gap-2">
                  <h3>Our Mission</h3>
                  <p>
                    Distinctively re-engineer revolutionary meta-services and
                    premium At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img class="w-9/12" src="@\assets\Video_Image.svg" alt="" />
      </div>
      <hr class="mx-auto w-4/5" />
    </div>
  </section>

  <section id="focus">
    <div class="focus_title flex flex-row items-center justify-center mt-10">
      <img src="@/assets/subtitle_icon.svg" alt="" />
      <h3 class="uppercase"><span>02</span> PROCESS</h3>
      <img src="@/assets/subtitle_icon.svg" alt="" />
    </div>
    <FocusView />
  </section>

  <section>
    <LearnMore />
  </section>

  <section>
    <prop-coun />
  </section>
  <section id="AgentsCard">
    <div
      class="AgentsCard_title flex flex-row items-center justify-center mt-10"
    >
      <img src="@/assets/subtitle_icon.svg" alt="" />
      <h3 class="uppercase"><span>06</span> Experts</h3>
      <img src="@/assets/subtitle_icon.svg" alt="" />
    </div>
    <h1 class="mx-auto text-center">Our Property Team</h1>
    <AgentsCard />
  </section>
  <section id="client">
    <div class="container m-10">
      <div class="client_detailes text-center p-10">
        <h1 class="mb-10">More than 50+ Brands Trusted World Wide</h1>
        <img src="@\assets\Content-icons.svg" alt="" />
        <button
          type="submit"
          class="flex flex-row gap-1 mt-10 justify-center mx-auto bg-white"
        >
          Explore Property
          <span
            ><img class="relative top-1" src="@/assets/home_arrow.svg" alt=""
          /></span>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import PropCoun from "@/components/PropCoun.vue";
import FocusView from "@/components/FocusView.vue";
import LearnMore from "@/components/LearnMore.vue";
import AgentsCard from "@/components/AgentsCards.vue";
export default {
  name: "about-view",
  components: {
    PropCoun,
    FocusView,
    LearnMore,
    AgentsCard,
  },
};
</script>
<style lang="scss" scoped>
body {
  padding: 0;
  margin: 0;
}
//Start Landding Banner
.banner {
  .parent {
    background-image: url("../assets/Background-1.jpg");
    background-size: cover;
    overflow: hidden;
    .cont {
      h4 {
        background-color: var(--Background_color);
        width: fit-content;
        color: var(--Border_Color);
        line-height: 23.7px;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 17px;
        font-weight: lighter;
        margin-bottom: 30px;
        font-family: kufam;
      }
      h1 {
        width: 512px;
        color: var(--Primary_Color);
        font-family: Kufam;
        font-size: 65px;
        font-weight: 700;
        line-height: 77.02px;
        text-align: left;
      }
    }
  }
}

//End Landding Banner

#video {
  .video {
    background: url(/src/assets/video_Pattern.svg) no-repeat right top / cover;
    .video_title {
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
    .details {
      h1 {
        font-family: Kufam;
        font-size: 45px;
        font-weight: 700;
        line-height: 53.32px;
        text-align: left;
        color: var(--Primary_Color);
      }
      #par {
        font-family: Source Sans 3;
        font-size: 20px;
        font-weight: 400;
        line-height: 23.7px;
        text-align: left;
        color: var(--Border_Color);
      }
      .view {
        h3 {
          font-family: Kufam;
          font-size: 25px;
          font-weight: 600;
          line-height: 29.62px;
          text-align: left;
          color: var(--Primary_Color);
        }
        p {
          font-family: Source Sans 3;
          font-size: 20px;
          font-weight: 400;
          line-height: 23.7px;
          text-align: left;
          color: #7d7d7d;
        }
      }
    }
    hr {
      color: #dac5bb !important;
    }
  }
}

#focus .focus_title {
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
#AgentsCard {
  .AgentsCard_title {
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
  h1 {
    font-family: Kufam;
    font-size: 45px;
    font-weight: 700;
    line-height: 53.32px;
    text-align: center;
    color: var(--Primary_Color);
  }
}
#client {
  .client_detailes {
    width: 1199px;
    background: #f5f1ef;
    h1 {
      font-family: Kufam;
      font-size: 25px;
      font-weight: 600;
      line-height: 29.62px;
      text-align: center;
    }
    button {
      padding: 24px 30px;
      border-radius: 5px;
      font-family: "Kufam";
      font-size: 20px;
      font-weight: 500;
      line-height: 23.7px;
      text-align: center;
      border: none;
      color: var(--Primary_Color);
    }
  }
}

@media screen and (max-width: 900px) {
  #client {
    width: 100% !important;
    .container {
      .client_detailes {
        width: 100% !important;
        h1 {
          margin-left: 0 !important;
        }
        img {
          width: 90% !important;
        }
      }
    }
  }
}
</style>
