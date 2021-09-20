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
  //   console.log("Before Each (Global) each", to, from);
  next();
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
    router.push("/signin");
  }
});
router.afterEach((to) => {
  document.title = to.meta.title;
});
export default router;
