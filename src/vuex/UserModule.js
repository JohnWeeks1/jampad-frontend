import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

const getDefaultState = () => {
    return {
        token: null,
        isLoggedIn: false,
        firstName: null,
        lastName: null,
        description: null,
        image: null,
        userId: null,
        email: null,
    };
};


export default {
    namespaced: true,
    state: getDefaultState(),
    mutations: {
        resetState (state) {
            Object.assign(state, getDefaultState());
        },
        loginSuccess(state, payload) {
            state.token = payload
        },
        updateFirstName(state, payload) {
            state.firstName = payload
        },
        updateLastName(state, payload) {
            state.lastName = payload
        },
        updateDescription(state, payload) {
            state.description = payload
        },
        updateImage(state, payload) {
            state.image = payload
        },
        updateUserId(state, payload) {
            state.userId = payload
        },
        updateEmail(state, payload) {
            state.email = payload
        },
        updateIsLoggedIn(state, payload) {
            state.isLoggedIn = payload
        },
    },
    actions: {
        fetchUser({commit}) {
            Vue.axios.get("user")
                .then(response => {
                    commit('updateFirstName', response.data.data.first_name);
                    commit('updateLastName', response.data.data.last_name);
                    commit('updateDescription', response.data.data.description);
                    commit('updateEmail', response.data.data.email);
                    commit('updateImage', response.data.data.image);
                    commit('updateUserId', response.data.data.id);
                    commit('updateIsLoggedIn', true);
                })
                .catch(error => {
                    // shit fuck man
                    console.log(error);
                });
        },
        resetState ({ commit }) {
            commit('resetState');
        }
    },
    getters: {
        getToken: state => state.token,

        getFirstName: state => state.firstName,

        getLastName: state => state.lastName,

        getDescription: state => state.description,

        getEmail: state => state.email,

        getImage: state => state.image,

        getUserId: state => state.id,

        getIsLoggedIn: state => state.isLoggedIn,
    }
}
