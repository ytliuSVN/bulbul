import { createRouter, createWebHistory } from "vue-router";
import { TEXT_CONSTANTS } from "@/utility/textConstants";

const routes = [
  { path: "/", redirect: "/traits" }, // redirect root to /traits
  {
    name: "traits",
    path: "/traits",
    components: {
      default: () => import("../views/traits/TraitsList.vue"),
    },
  },
  {
    name: "stories",
    path: "/stories",
    components: {
      default: () => import("../views/stories/StoriesList.vue"),
    },
  },
  {
    name: "photos",
    path: "/photos",
    components: {
      default: () => import("../views/photos/PhotosList.vue"),
    },
  },
  {
    name: "threats",
    path: "/threats",
    components: {
      default: () => import("../views/threats/ThreatsList.vue"),
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

router.beforeEach((to, _, next) => {
  const baseTitle = TEXT_CONSTANTS.SITE.TITLE || "白頭翁不吃小米"; // default title if not defined
  const routeName = to.name?.toUpperCase(); // e.g., 'traits' becomes 'TRAITS'
  const pageTitle = TEXT_CONSTANTS.NAVBAR[routeName] || "";

  document.title = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
  next(); // proceed to the route
});

export default router;
