<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kufam:ital@0;1&display=swap");
#app {
  font-family: "Kufam", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
