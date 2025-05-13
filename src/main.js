// import './assets/main.css'

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

const app = createApp(App);

const routes = [
  { path: "/", redirect: "/traits" }, // redirect root to /traits
  {
    name: "traits",
    path: "/traits",
    components: {
      default: () => import("./components/traits/TraitsList.vue"),
    },
  },
  {
    name: "stories",
    path: "/stories",
    components: {
      default: () => import("./components/stories/StoriesList.vue"),
    },
  },
  {
    name: "photos",
    path: "/photos",
    components: {
      default: () => import("./components/photos/PhotosList.vue"),
    },
  },
  {
    name: "threats",
    path: "/threats",
    components: {
      default: () => import("./components/threats/ThreatsList.vue"),
    },
  },
  {
    path: "/:notFound(.*)", // catch-all route for 404
    name: "ErrorView",
    redirect: "/traits",
  },
];

const router = createRouter({
  history: createWebHistory(),
  // routes: routes,
  routes,
  linkActiveClass: "active", // class applied to active links
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   return { left: 0, top: 0 }; // scroll to top on navigation
  // },
});

app.use(router);

app.mount("#app");
