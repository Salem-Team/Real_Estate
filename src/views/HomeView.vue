<template>
  <!-- Start Landding Banner -->
  <section class="home overflow-hidden w-full">
    <div class="landing flex flex-column mt-64 ml-10">
      <div class="text text-left w-5/12 mt-10">
        <div id="title" class="flex flex-row gap-1 w-7/12 mb-4 p-1">
          <span><img src="@/assets/home_icon.svg" alt="" /></span>
          Real Estate Agency
        </div>
        <h1 class="mb-4">Find the perfect place to Live with your family</h1>
        <p class="mb-4">
          Distinctively re-engineer revolutionary meta-services and premium
          architectures. Intrinsically incubate.
        </p>
        <button type="submit" class="flex flex-row gap-1 mb-20">
          Explore Property
          <span
            ><img class="relative top-1" src="@/assets/home_arrow.svg" alt=""
          /></span>
        </button>
      </div>
      <div class="image relative w-6/12 ml-60">
        <img
          class="absolute left-96 bottom-0.5 mr-1 max-w-full"
          src="@/assets/Image-6.png"
          alt=""
        />
      </div>
    </div>
    <!-- End Landding Banner -->
  </section>

  <section id="about" class="w-full flex mx-10 my-20">
    <!--Start About Section -->
    <div class="about_subtitle bg-about_background p-10 w-7/12">
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
    <div class="about_video flex flex-row relative ml-10">
      <img src="@/assets/about_img.svg" alt="" />
      <a href="http://youtube.com" target="_blank" rel="noopener noreferrer"
        ><img class="absolute inset-1/3" src="@\assets\video_icon.svg" alt=""
      /></a>
    </div>
    <!--End About Section -->
  </section>

  <section id="why_choose" class="w-full">
    <div class="properties m-10">
      <!--Start title -->
      <div
        class="properties_title flex flex-row mb-4 items-center justify-center"
      >
        <img src="@/assets/subtitle_icon.svg" alt="" />
        <h3><span>03</span> Why Choose</h3>
        <img src="@/assets/subtitle_icon.svg" alt="" />
      </div>
      <div class="property_title mb-4 flex flex-row justify-center">
        <h1 class="text-center mb-4">
          Why Choose Our Properties Of Real Estate Industries
        </h1>
      </div>
      <!--End title -->
      <div class="properties_cards">
        <div id="row1" class="row1 flex flex-row mb-4 justify-around gap-9">
          <div class="item p-5">
            <img class="mb-4" src="@/assets/why_choose_Icon.svg" alt="" />
            <div class="content">
              <h1 class="mb-4">Budget Friendly</h1>
              <p>
                Distinctively re-engineer revolutionary meta-services and
                premium At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis
              </p>
            </div>
          </div>
          <div class="item_big flex flex-row justify-center p-5">
            <img src="@/assets/why_choose_icon1.svg" alt="" />
            <div class="content flex flex-col pt-32">
              <h1 class="mb-4">Property Insurance</h1>
              <p>
                Distinctively re-engineer revolutionary meta-services and
                premium At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis
                <br />
                <br />
                Distinctively re-engineer revolutionary meta-services and
                premium
              </p>
            </div>
          </div>
        </div>
        <div id="row2" class="row2 flex flex-row mb-4 jusitfy-around gap-9">
          <div class="item_bg p-5">
            <img class="mb-4" src="@/assets/why_choose_icon2.svg" alt="" />
            <div class="content">
              <h1 class="mb-4">Trusted By Thousands</h1>
              <p class="mb-4">
                Distinctively re-engineer revolutionary meta-services and
                premium At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis
              </p>
            </div>
          </div>
          <div class="item p-5">
            <img
              class="mb-4 mt-10"
              src="@/assets/why_choose_icon3.svg"
              alt=""
            />
            <div class="content mt-10">
              <h1 class="mb-4">Prime Location</h1>
              <p>
                Distinctively re-engineer revolutionary meta-services and
                premium At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis
              </p>
            </div>
          </div>
          <div class="item p-5">
            <img class="mb-4" src="@/assets/why_choose_icon4.svg" alt="" />
            <div class="content">
              <h1 class="mb-4">Lowest Commission</h1>
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
  </section>
  <section></section>
</template>
<script>
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

// Start about section

.about_subtitle {
  height: 449px;
  max-height: fit-content;
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
    height: 464px !important;
    width: 442px !important;
  }
  .item_big {
    background: url(/src/assets/why_choose_background.svg) no-repeat right
      bottom / cover;
    width: 921px !important;
    height: 464px !important;
  }
  .item_bg {
    background: url(/src/assets/why_choose_background1.svg) no-repeat right
      bottom / cover;
    height: 464px !important;
    max-height: 600px !important;
    width: 445px !important;
  }
  .content {
    height: 150px !important;
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
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }
  .properties_cards .item_big {
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    padding-bottom: 150px !important;
    img {
      margin-top: 0 !important;
      height: 50% !important;
    }
    .content {
      padding-top: 0 !important;
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
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: space-around !important;
    .about_subtitle {
      margin: 0;
      width: 100% !important;
    }
  }
  .details {
    max-width: 100% !important;
  }
}
</style>
