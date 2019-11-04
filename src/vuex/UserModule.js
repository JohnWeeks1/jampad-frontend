import axios from "axios";

export default {
    namespaced : true,
    state      : {
        token: null,
        firstName: null,
        lastName: null,
        userId: null,
        email: null,
    },
    mutations: {
        loginSuccess(state, payload) {
            state.token = payload
        },
        updateFirstName(state, payload) {
            state.firstName = payload
        },
        updateLastName(state, payload) {
            state.lastName = payload
        },
        updateUserId(state, payload) {
            state.userId = payload
        },
        updateEmail(state, payload) {
            state.email = payload
        },
    },
    actions: {
        fetchUser({ commit }) {
            axios.get("http://jampad.localhost:8089/api/auth/user")
                .then(response => {
                    console.log(response);
                    commit('updateFirstName', response.data.data.first_name);
                    commit('updateLastName', response.data.data.last_name);
                    commit('updateEmail', response.data.data.email);
                    commit('updateUserId', response.data.data.id);
                });
        }
    },
    getters: {
        getFirstName: state => state.firstName,

        getLastName: state => state.lastName,

        getEmail: state => state.email,

        getUserId: state => state.id,
    }
}
