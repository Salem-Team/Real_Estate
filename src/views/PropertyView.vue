<template>
  <section class="banner mb-1">
    <!-- Start Landding Banner -->
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="5" class="mt-64 mb-4">
            <div class="cont d-flex flex-column text-left">
              <h4 class="flex flex-row gap-1 p-1">
                <span><img src="@/assets/home_icon.svg" alt="" /></span
                >properties
              </h4>
              <h1 class="title">Browse properties</h1>
            </div>
          </v-col>
          <v-col cols="7">
            <div class="parent_img relative">
              <img
                class="w-full h-fit absolute top-5"
                src="@/assets/property_img.svg"
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
  <section>
    <PropertiesCoun />
  </section>
  <section id="neighborhoods">
    <div
      class="neighborhoods_title flex flex-row mb-4 text-center items-center justify-center"
    >
      <img src="@/assets/subtitle_icon.svg" alt="" />
      <h3 class="uppercase"><span>06</span> Neighborhoods</h3>
      <img src="@/assets/subtitle_icon.svg" alt="" />
    </div>
    <div class="neighborhoods_detailes text-center">
      <h1 class="mb-10">Discover The Neighborhoods</h1>
      <div class="neighborhoods_card m-10 flex flex-row gap-5">
        <div class="neighborhoods_image relative">
          <span>
            <img src="@/assets/Neighborhoods_Image1.svg" alt="" />
            <img
              class="absolute left-56 top-5"
              src="@/assets/Neighborhoods_arrow.svg"
              alt=""
            />
            <div class="text absolute bottom-10 left-5">
              <h1>New York</h1>
              <p>250 Property</p>
            </div>
          </span>
        </div>
        <div class="neighborhoods_image relative">
          <span>
            <img src="@/assets/Neighborhoods_Image2.svg" alt="" />
            <img
              class="absolute left-56 top-5"
              src="@/assets/Neighborhoods_arrow.svg"
              alt=""
            />
            <div class="text absolute bottom-10 left-5">
              <h1>Atlanta</h1>
              <p>120 Property</p>
            </div>
          </span>
        </div>
        <div class="neighborhoods_image relative">
          <span>
            <img src="@/assets/Neighborhoods_Image3.svg" alt="" />
            <img
              class="absolute left-56 top-5"
              src="@/assets/Neighborhoods_arrow.svg"
              alt=""
            />
            <div class="text absolute bottom-10 left-5">
              <h1>Singapore</h1>
              <p>53Property</p>
            </div>
          </span>
        </div>
        <div class="neighborhoods_image relative">
          <span>
            <img src="@/assets/Neighborhoods_Image4.svg" alt="" />
            <img
              class="absolute left-56 top-5"
              src="@/assets/Neighborhoods_arrow.svg"
              alt=""
            />
            <div class="text absolute bottom-10 left-5">
              <h1>Paris</h1>
              <p>99 Property</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import PropertiesCoun from "@/components/PropertiesCoun.vue";
export default {
  name: "property_view",
  components: { PropertiesCoun },
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
#neighborhoods {
  .neighborhoods_title {
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
  .neighborhoods_detailes {
    max-height: fit-content;
    max-width: 100%;
    h1 {
      font-family: Kufam;
      font-size: 45px;
      font-weight: 700;
      line-height: 53.32px;
      color: var(--Primary_Color);
    }
  }
  .neighborhoods_image {
    span {
      h1 {
        font-family: Kufam;
        font-size: 25px;
        font-weight: 600;
        line-height: 29.62px;
        text-align: left;
        color: white;
      }
      p {
        font-family: Source Sans 3;
        font-size: 20px;
        font-weight: 600;
        line-height: 23.7px;
        text-align: left;
        color: var(--Secondary_Color);
      }
    }
  }
}

@media screen and (max-width: 900px) {
  #neighborhoods {
    .neighborhoods_card {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: space-around !important;
      width: 100% !important;
      margin: 0 !important;
    }
  }
}
</style>
