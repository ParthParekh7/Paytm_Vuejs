/*****************     Layouts       ***************/
const Home = () => import("../pages/Home.vue");
const Error = () => import("../pages/404.vue");
const AllProducts = () => import("../pages/Products/AllCateProducts.vue");

/*****************     SIGNUP SIGNIN PAGE       ***************/
const Signin = () => import("../pages/Signin&Signup/SignIn.vue");
const SignUp = () => import("../pages/Signin&Signup/SignUp.vue");

/*****************     USER PAGES       ***************/
const AddMoney = () => import("../pages/User/AddMoney.vue");
const MoneyTransfer = () => import("../pages/User/MoneyTransfer.vue");
const Passbook = () => import("../pages/User/Passbook.vue");

export const routes = [
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
    meta: { title: "Add Money", requiresAuth: true },
  },
  {
    path: "/passbook",
    name: "Passbook",
    component: Passbook,
    meta: { title: "Passbook", requiresAuth: true },
  },
  {
    path: "/moneytransfer",
    name: "Money Transfer",
    component: MoneyTransfer,
    meta: { title: "Money Transfer", requiresAuth: true },
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
];
