<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
import TheNavigation from "./components/nav/TheNavigation.vue";
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Noto Sans", sans-serif;
}

body {
  margin: 0;
}
</style>
