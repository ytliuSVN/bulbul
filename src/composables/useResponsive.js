import { ref, onMounted, onUnmounted } from "vue";

export function useResponsive() {
  const isDesktop = ref(window.innerWidth >= 1024);

  const checkScreen = () => {
    isDesktop.value = window.innerWidth >= 1024;
  };

  onMounted(() => {
    window.addEventListener("resize", checkScreen);
    checkScreen();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkScreen);
  });

  return {
    isDesktop,
  };
}
