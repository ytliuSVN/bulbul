import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import "/style.scss"

const app = createApp(App);

const routes = [
  { path: "/", redirect: "/traits" }, // redirect root to /traits
  {
    name: "traits",
    path: "/traits",
    components: {
      default: () => import("./views/traits/TraitsList.vue"),
    },
  },
  {
    name: "stories",
    path: "/stories",
    components: {
      default: () => import("./views/stories/StoriesList.vue"),
    },
  },
  {
    name: "photos",
    path: "/photos",
    components: {
      default: () => import("./views/photos/PhotosList.vue"),
    },
  },
  {
    name: "threats",
    path: "/threats",
    components: {
      default: () => import("./views/threats/ThreatsList.vue"),
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
  routes,
  linkActiveClass: "active", // class applied to active links
});

app.use(router);

app.mount("#app");
