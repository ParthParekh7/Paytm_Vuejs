//Import Pages

import { store } from "./store";
import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes/routes";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});
router.beforeEach((to, from, next) => {
  if (
    to.meta.requiresAuth &&
    !store.getters.isLoggedIn &&
    store.getters.getToken != ""
  ) {
    next({ name: "signin" });
  } else {
    next();
  }
});
router.afterEach((to) => {
  document.title = to.meta.title;
});
export default router;
