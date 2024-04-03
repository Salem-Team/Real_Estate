<template>
  <section class="banner">
    <!-- Start Landding Banner -->
    <div class="parent">
      <v-container>
        <v-row style="margin-top: 300px !important">
          <v-col cols="5">
            <div class="cont d-flex flex-column text-left mt-24">
              <h4 class="flex flex-row justify-center gap-1 p-1">
                <span><img src="@/assets/home_icon.svg" alt="" /></span>Real
                Estate Agency
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
                style="
                  font-weight: bold;
                  text-transform: capitalize;
                  border: none;
                  padding: 24px, 30px;
                "
                >Explore Property
                <img src="@/assets/home_arrow.svg" alt="" />
              </v-btn>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="parent_img relative">
              <img
                class="w-full h-fit absolute top--40 left-56"
                src="@/assets/Image-6.png"
                alt=""
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Landding Banner -->
  </section>

  <section id="about" class="w-full flex m-10">
    <!--Start About Section -->
    <div class="about_subtitle bg-about_background m-10 p-16 w-7/12">
      <!--Start title -->
      <div class="about_title flex flex-row mb-4">
        <img src="@/assets/subtitle_icon.svg" alt="" />
        <h3><span>01</span> PROPERLAND INTRO</h3>
        <img src="@/assets/subtitle_icon.svg" alt="" />
      </div>
      <!--End title -->
      <div class="details">
        <h1 class="mb-4">Buying & Selling Property In An Easy Way</h1>
        <p class="text-link_color mb-4">
          Distinctively re-engineer revolutionary meta-services and premium At
          vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi.
        </p>
      </div>
      <!--Start point part -->
      <div class="points flex flex-row gap-1">
        <img src="@/assets/points.svg" alt="" />
        <span>Only pay when you publish</span>
        <img src="@/assets/points.svg" alt="" />
        <p>Unlimited featured use</p>
        <img src="@/assets/points.svg" alt="" />
        <p>24/7 supports</p>
      </div>
      <!--End point part -->
    </div>
    <!--End About Subtitle-->
    <div class="about_video flex flex-row relative">
      <img src="@/assets/about_img.svg" alt="" />
      <a href="http://youtube.com" target="_blank" rel="noopener noreferrer"
        ><img class="absolute inset-1/3" src="@\assets\video_icon.svg" alt=""
      /></a>
    </div>
    <!--End About Section -->
  </section>
</template>
<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
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
    height: fit-content;
    width: 100%;
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
        color: var(--Primary_Color);
        font-size: 55px;
        line-height: 77px;
      }
      p.hint {
        font-size: 15px;
        color: var(--Border_Color);
      }
    }
  }
}

//End Landding Banner

// Start about section

.about_subtitle {
  height: 449px;
  .about_title {
    h3 {
      font-family: Source Sans 3;
      font-size: 20px;
      font-weight: 400;
      line-height: 38.5px;
      letter-spacing: 0.3em;
      text-align: left;
      span {
        color: var(--Secondary_Color);
      }
    }
  }
  .details {
    color: var(--Primary_Color);
    h1 {
      font-family: Kufam;
      font-size: 45px;
      font-weight: 700;
      line-height: 53.32px;
      text-align: left;
    }
    p {
      font-family: Source Sans 3;
      font-size: 20px;
      font-weight: 400;
      line-height: 23.7px;
      text-align: left;
    }
  }
  .points {
    color: var(--Text_Color);
  }
  .about_video {
    height: 449px;
  }
}
// End about section

#why_choose {
  .properties_title {
    h3 {
      font-family: Source Sans 3;
      font-size: 20px;
      font-weight: 400;
      line-height: 38.5px;
      letter-spacing: 0.3em;
      text-align: left;
      span {
        color: var(--Secondary_Color);
      }
    }
  }
  .property_title {
    max-height: fit-content;
    max-width: 100%;
    h1 {
      font-family: Kufam;
      font-size: 45px;
      font-weight: 700;
      line-height: 53.32px;
      text-align: center;
      width: 650px;
      height: 105px;
    }
  }
}

.properties_cards {
  .row1 .item,
  .row2 .item {
    background: url(/src/assets/why_choose_background_color.svg) no-repeat right
      bottom / cover;
    height: 464px;
    max-height: 600px;
    width: 442px;
    max-width: fit-content; /* This is to make sure the card doesn't go off screen on smaller screens */
  }
  .item_big {
    background: url(/src/assets/why_choose_background.svg) no-repeat right
      bottom / cover;
    width: 921px;
    height: 464px;
    max-height: 700px;
  }
  .item_bg {
    background: url(/src/assets/why_choose_background1.svg) no-repeat right
      bottom / cover;
    height: 464px;
    max-height: 600px;
    width: 442px;
    max-width: fit-content; /* This is to make sure the card doesn't go off screen on smaller screens */
  }
  .content {
    height: 150px;
    h1 {
      font-family: Kufam;
      font-size: 25px;
      font-weight: 600;
      line-height: 29.62px;
      text-align: left;
      color: var(--Primary_Color);
    }
    p {
      font-family: Source Sans 3;
      color: var(--Border_Color);
    }
  }
}
/* Media Queries for Responsiveness */

@media screen and (max-width: 768px) {
  .landing {
    flex-direction: column !important;
    align-items: center !important;
    margin-top: 16rem !important;
    margin-left: 0 !important;
  }
  .text {
    width: 80%;
    margin-top: 0;
    text-align: center !important;
  }
  .image {
    width: 90%;
    left: auto !important;
    margin-left: 0;
  }
  .about_subtitle {
    height: auto;
    margin-top: 32px !important;
  }

  #why_choose {
    .property_title {
      h1 {
        width: auto !important;
        height: auto !important;
        font-size: 35px !important; /* Adjust font size for smaller screens */
      }
    }
  }
  .properties_cards .row1 .item,
  .properties_cards .row2 .item,
  .properties_cards .item_bg,
  .properties_cards .item_big {
    width: 100% !important;
  }
  .properties_cards .item_big {
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    img {
      height: 50% !important;
    }
    .content {
      padding-top: 0px !important;
    }
  }
  .properties_cards #row1,
  .properties_cards #row2 {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: space-around !important;
  }
  .content {
    h1 {
      font-size: 20px !important; /* Adjust font size for smaller screens */
    }
  }
}

@media screen and (max-width: 480px) {
  .text {
    h1 {
      font-size: 40px !important;
      line-height: 1.2 !important;
    }
    p {
      font-size: 16px !important;
      line-height: 1.5 !important;
    }
    button {
      font-size: 16px !important;
      padding: 16px 20px !important;
    }
  }
  .about {
    margin: 90px !important;
    width: 30% !important;
    padding: 60px !important;
  }
  .about_subtitle {
    gap: 90px;
    margin-right: 120px !important;
    margin-left: 30px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    .about_title h3 {
      font-size: 18px !important;
      line-height: 1.5 !important;
    }
    .details {
      h1 {
        font-size: 32px !important;
        line-height: 1.2 !important;
      }
      p {
        font-size: 16px !important;
        line-height: 1.5 !important;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  #about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .about_subtitle {
      margin: 0;
      width: 100%;
    }
  }
  .details {
    max-width: 100%;
  }
}
</style>
