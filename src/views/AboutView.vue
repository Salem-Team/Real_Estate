<template>
  <section class="banner mb-1">
  
  </section>
  <section>
    <prop-coun />
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
export default {
  name: "about-view",
  components: { PropCoun },
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
