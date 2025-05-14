<template>
  <div class="app">
    <!-- Mobile only content -->
    <div class="is-mobile">
      <the-navigation class="nav-section"></the-navigation>
    </div>

    <!-- Desktop only content -->
    <!-- <div class="is-desktop">side bar</div> -->

    <!-- Content that appears in both views -->
    <main>
      <the-banner>
        <template #title>{{ TEXT_CONSTANTS.BANNER.TITLE }}</template>
        <template #subtitle>{{ TEXT_CONSTANTS.BANNER.SUBTITLE }}</template>
      </the-banner>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import TheNavigation from "./components/nav/TheNavigation.vue";
import TheBanner from "./components/banner/TheBanner.vue";
import { TEXT_CONSTANTS } from "@/utility/textConstants";
</script>

<style scoped lang="scss"></style>
