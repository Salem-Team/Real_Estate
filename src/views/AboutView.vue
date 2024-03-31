<template>
  <section class="banner">
    <!-- Start Landding Banner -->
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="5">
            <div class="cont d-flex flex-column text-left mt-24">
              <h4 class="flex flex-row gap-1 p-1">
                <span 
                  ><img src="@/assets/home_icon.svg" alt="" /></span
                >ABOUT PROPERLAND
              </h4>
              <h1 class="title ">
                About Our Real Estate
              </h1>
            </div>
          </v-col>
          <v-col cols="7">
            <div
              class="parent_img relative "
            >
              <img
              class=" w-full h-fit absolute"
                src="@/assets/about_properland.svg"
                alt=""
                style="
                  left: 118px;
                "
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Landding Banner -->
  </section>
</template>
<script>
export default {
  name: "about-view",
  components: {},
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
//Start Landding Banner
.banner {
  .parent {
    background-image: url("../assets/Background-1.jpg");
    background-size: cover;
    height: 73vh;
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
</style>
