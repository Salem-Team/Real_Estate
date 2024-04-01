<template>
  <div class="Agent_view">
    <div class="content">
      <div class="bacground_img"></div>
      <v-container>
        <v-row> </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "agent_view",
};
</script>
<style lang="scss">
// Agent Banner
.bacground_img {
  width: 100%;
  height: 721px;
  background: url("../assets//agent_view/banner.svg") no-repeat left top /
    contain;
}
</style>
