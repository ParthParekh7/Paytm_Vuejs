/*****************     Layouts       ***************/
const Home = () => import("../pages/Home.vue");
const Error = () => import("../pages/404.vue");
const AllProducts = () => import("../pages/Products/AllCateProducts.vue");
const CateWiseProducts = () => import("../pages/Products/CateWiseProducts.vue");
const SingleProduct = () => import("../pages/Products/SingleProduct.vue");

/*****************     SIGNUP SIGNIN PAGE       ***************/
const Signin = () => import("../pages/Signin&Signup/SignIn.vue");
const SignUp = () => import("../pages/Signin&Signup/SignUp.vue");

/*****************     USER PAGES       ***************/
const AddMoney = () => import("../pages/User/AddMoney.vue");
const MoneyTransfer = () => import("../pages/User/MoneyTransfer.vue");
const Passbook = () => import("../pages/User/Passbook.vue");
const Payment = () => import("../pages/User/Payment.vue");
const MyAccount = () => import("../pages/User/MyAccount.vue");

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
    path: "/myaccount",
    name: "My Account",
    component: MyAccount,
    meta: { title: "My Account", requiresAuth: true },
  },
  {
    path: "/payment/:id",
    name: "Payment",
    component: Payment,
    meta: { title: "Payment", requiresAuth: true },
  },
  {
    path: "/products",
    name: "Products",
    component: AllProducts,
    meta: { title: "Shopping" },
  },
  {
    path: "/product/:id",
    name: CateWiseProducts,
    component: CateWiseProducts,
    meta: { title: "Shopping" },
  },
  {
    path: "/product/:id/:pid",
    name: SingleProduct,
    component: SingleProduct,
    meta: { title: "Single Product" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: Error,
    meta: { title: "404 Page" },
  },
];
