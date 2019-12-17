import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueAxios, axios);

const baseURL = process.env.VUE_APP_API_URL;

if (typeof baseURL !== 'undefined') {
    Vue.axios.defaults.baseURL = baseURL;
}


if (store.getters['user/getToken'] !== null) {
    Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters['user/getToken'];
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
