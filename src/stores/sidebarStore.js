import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
  const isCollapsed = ref(false);
  const sidebarWidth = ref(345);

  function toggleSidebar() {
    isCollapsed.value = !isCollapsed.value;
    sidebarWidth.value = isCollapsed.value ? 80 : 345;
  }

  return { isCollapsed, sidebarWidth, toggleSidebar };
});
