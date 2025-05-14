<template>
  <div class="app">
    <!-- Desktop only content -->
    <div class="is-desktop">
      <the-sidebar-menu />
    </div>

    <!-- Content that appears in both views -->
    <main :style="{ marginLeft: `${sidebarStore.sidebarWidth}px` }">
      <!-- Mobile only content -->
      <div class="is-mobile">
        <the-navigation />
      </div>

      <the-banner>
        <template #title>{{ TEXT_CONSTANTS.BANNER.TITLE }}</template>
        <template #subtitle>{{ TEXT_CONSTANTS.BANNER.SUBTITLE }}</template>
      </the-banner>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useSidebarStore } from "@/stores/sidebarStore";
import TheNavigation from "./components/nav/TheNavigation.vue";
import TheSidebarMenu from "./components/nav/TheSidebarMenu.vue";
import TheBanner from "./components/banner/TheBanner.vue";
import { TEXT_CONSTANTS } from "@/utility/textConstants";

const sidebarStore = useSidebarStore();

console.log(sidebarStore.isCollapsed, sidebarStore.sidebarWidth)

console
</script>

<style scoped lang="scss">
.app {
  display: flex;

  main {
    flex: 1 1 0;
    width: 100%;
    overflow-x: hidden;
    margin-left: 345px;
    transition: margin-left 0.3s ease;

    // &.sidebar-collapsed {
    //   margin-left: 80px;
    // }

    @media (max-width: 1024px) {
      margin-left: 0;
      padding-left: 0;
      min-width: 0;
    }
  }
}
</style>
