import axios from "axios";

export default {
    namespaced : true,
    state      : {
        token: null,
        isLoggedIn: false,
        firstName: null,
        lastName: null,
        description: null,
        image: null,
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
        fetchUser({ commit }) {
            axios.get(process.env.VUE_APP_API_URL + "auth/user")
                .then(response => {
                    // console.log(response.data.image);
                    commit('updateFirstName', response.data.first_name);
                    commit('updateLastName', response.data.last_name);
                    commit('updateDescription', response.data.description);
                    commit('updateEmail', response.data.email);
                    commit('updateImage', response.data.image);
                    commit('updateUserId', response.data.id);
                    commit('updateIsLoggedIn', true);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    getters: {
        getFirstName: state => state.firstName,

        getLastName: state => state.lastName,

        getDescription: state => state.description,

        getEmail: state => state.email,

        getImage: state => state.image,

        getUserId: state => state.id,

        getIsLoggedIn: state => state.isLoggedIn,
    }
}
