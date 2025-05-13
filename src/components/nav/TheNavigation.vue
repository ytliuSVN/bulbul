<template>
  <header>
    <div class="mobile-header">
      <button v-if="!isMenuOpen" @click="toggleMenu" class="hamburger-icon">
        <img src="@/assets/icons/hamburger-icon.svg" alt="Open Menu" />
      </button>
      <button v-else @click="toggleMenu" class="close-icon">
        <img src="@/assets/icons/close-icon.svg" alt="Close Menu" />
      </button>
      <h1>{{ TEXT_CONSTANTS.SITE.TITLE }}</h1>
      <div class="logo-wrapper">
        <div class="logo"></div>
      </div>
    </div>

    <nav v-show="isMenuOpen" class="mobile-menu">
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="route.path">{{ route.text }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { routes } from "@/utility/routes";
import { TEXT_CONSTANTS } from "@/utility/textConstants";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
header {
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 4px 0px #00000040;

  .mobile-header {
    h1 {
      font-weight: 700;
      font-size: 20px;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 5rem;

    .hamburger-icon,
    .close-icon {
      font-size: 24px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  nav.mobile-menu {
    background-color: white;

    ul {
      list-style: none;
      margin: 0;
      padding: 15px 0 30px 0;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      align-items: center;

      li {
        a {
          color: #000000;
          size: 18px;
          text-decoration: none;
          border: 1px solid transparent;
          font-weight: 400;
          display: inline-block;

          &:active,
          &.active {
            font-weight: 700;
            color: #aa6666;
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 6px 0px #00000040;
  width: 48px;
  height: 48px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;

  .logo {
    background-image: url("@/assets/icons/bird.svg");
    width: 37px;
    height: 33px;
    background-size: cover;
  }
}
</style>
