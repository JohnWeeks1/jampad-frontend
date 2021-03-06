import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueAxios, axios);

const baseURL = process.env.VUE_APP_API_URL;

const token = localStorage.getItem('token');

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

if (typeof baseURL !== 'undefined') {
    Vue.axios.defaults.baseURL = baseURL;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
