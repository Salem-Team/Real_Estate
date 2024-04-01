<template>
  <div class="layout">
    <v-layout class="position-relative">
      <MenuDrrawer :windowWidth="windowWidth" />
      <v-main>
        <slot></slot>
      </v-main>
      <AppNav v-if="windowWidth > 1200" />
      <FixedNav v-if="windowWidth <= 1200" />
      <AppFooter />
    </v-layout>
  </div>
</template>
<script>
import AppNav from "./NavBar.vue";
import FixedNav from "./FixedNav.vue";
import MenuDrrawer from "./MenuDrrawer.vue";
import AppFooter from "@/components/global/AppFooter";
export default {
  data: () => ({
    drawer: false,
    windowWidth: 0,
  }),
  components: {
    AppNav,
    AppFooter,
    FixedNav,
    MenuDrrawer,
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>
