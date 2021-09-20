//Import Pages
const Error = () => import("./pages/404.vue");
const Home = () => import("./pages/Home.vue");
const AddMoney = () => import("./pages/AddMoney.vue");
const Signin = () => import("./pages/Signin&Signup/SignIn.vue");
const SignUp = () => import("./pages/Signin&Signup/SignUp.vue");
const AllProducts = () => import("./pages/Products/AllCateProducts.vue");
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { title: "Paytm.com" },
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin,
      meta: { title: "Sign in" },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
      meta: { title: "Sign Up" },
    },
    {
      path: "/addmoney",
      name: "Add Money",
      component: AddMoney,
      meta: { title: "Add Money" },
    },
    {
      path: "/products",
      name: "Products",
      component: AllProducts,
      meta: { title: "Shopping" },
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: Error,
      meta: { title: "404 Page" },
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

router.afterEach((to) => {
  document.title = to.meta.title;
});
export default router;
