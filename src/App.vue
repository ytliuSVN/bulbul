<template>
  <div class="container">
    <!-- Mobile only content -->
    <div class="is-mobile">
      <the-navigation class="nav-section"></the-navigation>
    </div>

    <!-- Desktop only content -->
    <div class="is-desktop">side bar</div>

    <!-- Content that appears in both views -->
    <main>
      <the-banner>
        <template #title>{{ TEXT_CONSTANTS.BANNER.TITLE }}</template>
        <template #subtitle>{{ TEXT_CONSTANTS.BANNER.SUBTITLE }}</template>
      </the-banner>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import TheNavigation from "./components/nav/TheNavigation.vue";
import TheBanner from "./components/banner/TheBanner.vue";
import { TEXT_CONSTANTS } from "@/utility/textConstants";
</script>

<style>
/* Layout Styles */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-section {
  flex: 1;
  width: 100%;
}

/* Desktop Layout (min-width: 768px) */
/* @media (min-width: 768px) {
  .layout {
    flex-direction: row;
  }

  .nav-section {
    width: 280px;

    background-color: #ac1111;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
  }

  .content-section {
    flex: 1;
    margin-left: 280px;
  }

  .banner {
    height: 200px;
  }

  .banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
} */
</style>
