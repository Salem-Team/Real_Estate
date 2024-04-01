<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>
<script>
// @ is an alias to /src
import AppLayout from "@/components/global/AppLayout.vue";

export default {
  components: {
    AppLayout,
  },
};
</script>
<style lang="scss">
// Add Kufam Fonts
@import url("https://fonts.googleapis.com/css2?family=Kufam:ital@0;1&display=swap");
#app {
  font-family: "Kufam", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

:root {
  --Primary_Color: #3b3a5d;
  --Secondary_Color: #ffbb50;
  --Content_Color: #8f8f8f;
  --Link_Color: #b16642;
  --Border_Color: #b16642;
  --Background_color: #f3d1c1;
  --Text_Color:#757575;

}
li {
  list-style: none;
}
</style>
