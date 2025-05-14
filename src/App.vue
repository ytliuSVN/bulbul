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
        <template #title> 白頭翁 (Chinese bulbul) </template>
        <template #subtitle>
          又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10
          年。
        </template>
      </the-banner>
      <router-view></router-view>
    </main>
  </div>

  <!-- <div class="layout">
    <the-navigation class="nav-section"></the-navigation>

    <div>side bar</div>

    <div class="content-section">
      <div class="banner">
        <img src="./assets/wallpaper.svg" alt="Banner Image" />
      </div>

      <main>
        <router-view></router-view>
      </main>
    </div>
  </div> -->
</template>

<script setup>
import TheNavigation from "./components/nav/TheNavigation.vue";
import TheBanner from "./components/banner/TheBanner.vue";
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
