import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

let token = store.state.user.token;

if (token) {
  this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
