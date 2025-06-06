<template>
  <aside class="sidebar" :class="{ 'is-collapsed': sidebarStore.isCollapsed }">
    <div class="sidebar-header">
      <div class="logo" @click="toggleSidebar">
        <div class="logo-icon" role="button"></div>
        <h1 v-show="!sidebarStore.isCollapsed">
          {{ TEXT_CONSTANTS.SITE.TITLE }}
        </h1>
      </div>
    </div>

    <nav class="sidebar-nav">
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link
            :to="route.path"
            :class="{ active: route.path === currentPath }"
          >
            <img
              src="@/assets/logo-circle.svg"
              :alt="route.text"
              class="nav-icon"
            />
            <span v-show="!sidebarStore.isCollapsed">{{ route.text }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { useSidebarStore } from "@/stores/sidebarStore";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { routes } from "@/utility/routes";
import { TEXT_CONSTANTS } from "@/utility/textConstants";

const route = useRoute();
const currentPath = computed(() => route.path);
const sidebarStore = useSidebarStore();

const toggleSidebar = () => {
  sidebarStore.toggleSidebar();
};
</script>

<style scoped lang="scss">
.sidebar {
  width: 345px;
  height: 100vh;
  background: white;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.3s ease;

  display: flex;
  flex-direction: column;

  &.is-collapsed {
    width: 80px;

    .sidebar-nav {
      a {
        justify-content: center;
        padding: 0.75rem;
      }
    }
  }

  &-header {
    padding: 2rem 1.5rem;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;

      &-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;

        background-image: url("@/assets/logo.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
      }

      h1 {
        font-size: 18px;
        font-weight: 700;
        white-space: nowrap;
      }
    }

    .toggle-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  &-nav {
    padding: 1.5rem;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin: 0.5rem 0;
    }

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 1rem;
      color: #333;
      text-decoration: none;
      border-radius: 8px;

      .nav-icon {
        width: 48px;
        height: 48px;
        flex-shrink: 0;
      }

      &:hover,
      &.active {
        font-weight: 700;
        background: #f5f5f5;
        color: #aa6666;
      }
    }
  }
}
</style>
