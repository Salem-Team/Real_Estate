<template>
<<<<<<< HEAD
  <section class="banner mb-1"></section>
=======
  <section class="home overflow-hidden w-full">
    <div class="landing flex flex-column mt-64 ml-10">
      <div class="text text-left w-5/12 mt-10">
        <div id="title" class="flex flex-row gap-1 w-7/12 mb-4 p-1">
          <span><img src="@/assets/home_icon.svg" alt="" /></span>
          ABOUT PROPERLAND
        </div>
        <h1 class="mb-4">About Our Real Estate</h1>
      </div>
      <div class="image relative w-6/12 ml-60">
        <img
          class="absolute left-96 bottom-0.5 mr-1 max-w-full"
          src="@/assets/about_properland.svg"
          alt=""
        />
      </div>
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
              <div class="second flex flex-row justify-left">
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

>>>>>>> f86238978c7f5083806b16f4edc93839d786d286
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
    <div class="container p-12">
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
.home {
  background: url(/src/assets/Background-1.jpg) no-repeat center;
  background-size: cover;
  height: fit-content;
  #title {
    background: linear-gradient(
      270deg,
      #f3d1c1 -3.75%,
      rgba(255, 178, 141, 0) 108.58%
    );
    line-height: 23.7px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 17px;
    font-family: kufam;
    color: var(--Border_Color);
  }
  .text {
    h1 {
      width: 512px !important;
      font-family: Kufam;
      font-size: 55px;
      font-weight: 700;
      line-height: 77.02px;
      text-align: left;
      color: var(--Primary_Color);
    }
    p {
      font-family: Source Sans 3;
      font-size: 16px;
      font-weight: 400;
      line-height: 23.7px;
      text-align: left;
      color: var(--Border_Color);
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
      background-color: white;
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
@media screen and (max-width: 768px) {
  .landing {
    flex-direction: column !important;
    align-items: center !important;
    margin-top: 16rem !important;
    margin-left: 0 !important;
    .image {
      width: 90%;
      left: auto !important;
      margin-left: 0;
    }
    .text {
      width: 80%;
      margin-top: 0;
      text-align: center !important;
    }
  }
}

@media screen and (max-width: 650px) {
  #video {
    .video_details {
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      width: 100% !important;
      h1 {
        font-size: x-large !important;
        width: 100% !important;
      }
      .view {
        padding-left: 0 !important;
        width: 100% !important;
        .first,
        .second {
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          .col {
            width: 100% !important;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  #video {
    .video_details {
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      width: 100% !important;
    }
  }
  #client {
    width: 100% !important;
    .container {
      margin: auto !important;
      padding: 0 !important;
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
