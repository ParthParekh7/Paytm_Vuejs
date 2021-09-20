import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
const vuexPersist = new VuexPersist({
  key: "vue-router-course",
  storage: window.localStorage,
});
Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    isLoggedIn: false,
    token: "",
    userId: "",
  },
  getters: {
    getUserID(state) {
      return state.userId;
    },
    getToken(state) {
      return state.token;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    getAllItems(state) {
      return state.items;
    },
  },
  mutations: {
    isLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setUserID(state, value) {
      state.userId = value;
    },
  },
});
