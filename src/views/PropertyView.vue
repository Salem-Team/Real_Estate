<template>
  <section class="home overflow-hidden w-full">
    <div class="landing flex flex-column mt-64 ml-10">
      <div class="text text-left w-5/12 mt-10">
        <div id="title" class="flex flex-row gap-1 w-7/12 mb-4 p-1">
          <span><img src="@/assets/home_icon.svg" alt="" /></span>
          properties
        </div>
        <h1 class="mb-4">Browse properties</h1>
      </div>
      <div class="image relative w-6/12 ml-60">
        <img
          class="absolute left-96 bottom-0.5 mr-1 max-w-full"
          src="@/assets/property_img.svg"
          alt=""
        />
      </div>
    </div>
    <!-- End Landding Banner -->
  </section>
  <section>
    <PropertiesCoun />
  </section>

  <section>
    <DiscoverCoun />
  </section>
</template>
<script>
import DiscoverCoun from "@/components/DiscoverCoun.vue";
import PropertiesCoun from "@/components/PropertiesCoun.vue";
export default {
  name: "property_view",
  components: { PropertiesCoun, DiscoverCoun },
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
      color: var(--Primary_Color);
      font-family: Kufam;
      font-size: 65px;
      font-weight: 700;
      line-height: 77.02px;
      text-align: left;
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
</style>
