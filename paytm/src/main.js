import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
Vue.config.productionTip = false;
import { store } from "./store";
import router from "./router";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
