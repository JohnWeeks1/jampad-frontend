import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      token: null
  },
  mutations: {
      loginSuccess(state, payload) {
          state.token = payload
      }
  },
  actions: {},
  modules: {}
});
