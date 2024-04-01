<template>
  <div class="menu_drawer">
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :width="windowWidth <= 767 ? windowWidth / 2 : 370"
      class="px-5 pt-0"
      location="right"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="pl-0 pr-2 d-flex justify-space-between align-center w-100"
          style="font-size: 17px; font-weight: bold"
          >Menu
          <v-icon @click="drawer = false">mdi-close</v-icon>
        </v-card-title>
        <v-list>
          <v-list-item class="px-0">
            <v-list-item-title class="nav-link"
              ><a href="#">home</a></v-list-item-title
            > </v-list-item
          ><v-list-item class="px-0">
            <v-list-item-title class="nav-link"
              ><a href="#">about</a></v-list-item-title
            > </v-list-item
          ><v-list-item class="px-0">
            <v-list-item-title class="nav-link"
              ><a href="#">Properties</a></v-list-item-title
            >
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-title class="nav-link"
              ><a href="#">Blog</a></v-list-item-title
            > </v-list-item
          ><v-list-item class="px-0">
            <v-list-item-title class="nav-link"
              ><a href="#">Contact</a></v-list-item-title
            >
          </v-list-item>
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="px-0">
                <v-list-item-title class="nav-link">Pages</v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item>
              <v-list-item-title
                class="d-flex align-center nav-link"
                style="gap: 7px"
              >
                Click Me</v-list-item-title
              > </v-list-item
            ><v-list-item>
              <v-list-item-title
                class="d-flex align-center nav-link"
                style="gap: 7px"
              >
                Click Me</v-list-item-title
              > </v-list-item
            ><v-list-item>
              <v-list-item-title
                class="d-flex align-center nav-link"
                style="gap: 7px"
              >
                Click Me</v-list-item-title
              > </v-list-item
            ><v-list-item>
              <v-list-item-title
                class="d-flex align-center nav-link"
                style="gap: 7px"
              >
                Click Me</v-list-item-title
              >
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card></v-navigation-drawer
    >
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data() {
    return {
      drawer: false,
    };
  },
  props: {
    windowWidth: {
      type: Number,
    },
  },
  mounted() {
    this.Emitter.on("openMenu", () => {
      this.drawer = true;
    });
  },
};
</script>
<style lang="css">
@media (max-width: 580px) {
  .nav-link {
    font-size: 12px;
  }
}
.nav-link {
  /* height: 50px; */
  padding: 140px;
  height: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.nav-link a {
  text-decoration: none;
}
.nav-link:hover {
  background: #cbcbcb;
}
</style>
