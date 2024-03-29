<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
:root {
  --Primary_Color: #3b3a5d;
  --Secondary_Color: #ffbb50;
  --Content_Color: #8f8f8f;
  --Link_Color: #b16642;
  --Border_Color: #b16642;
}
</style>
