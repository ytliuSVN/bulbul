<template>
  <div class="app">
    <div v-if="isDesktop">
      <the-sidebar-menu />
    </div>

    <main :style="{ marginLeft: mainMargin }">
      <div v-if="!isDesktop">
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
import { computed } from "vue";
import { useResponsive } from "@/composables/useResponsive";
import { useSidebarStore } from "@/stores/sidebarStore";

import TheNavigation from "./components/nav/TheNavigation.vue";
import TheSidebarMenu from "./components/nav/TheSidebarMenu.vue";
import TheBanner from "./components/banner/TheBanner.vue";

import { TEXT_CONSTANTS } from "@/utility/textConstants";

const sidebarStore = useSidebarStore();
const { isDesktop } = useResponsive();

console.log(sidebarStore.isCollapsed, sidebarStore.sidebarWidth);

// Update main margin based on viewport and sidebar state
const mainMargin = computed(() => {
  if (!isDesktop.value) return 0;
  return `${sidebarStore.sidebarWidth}px`;
});
</script>

<style scoped lang="scss">
.app {
  display: flex;

  main {
    flex: 1 1 0;
    width: 100%;
    overflow-x: hidden;
    transition: margin-left 0.3s ease;

    @media (max-width: 1024px) {
      margin-left: 0;
      padding-left: 0;
      min-width: 0;
    }
  }
}
</style>
