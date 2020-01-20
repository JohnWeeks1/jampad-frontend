import axios from "axios";

const getDefaultState = () => {
    return {
        firstName: null,
        lastName: null,
        description: null,
        image: null,
        userId: null,
        email: null,
        isLoggedIn: null,
    }
};

export default {
    namespaced: true,
    state: getDefaultState(),
    mutations: {
        resetState(state) {
            Object.assign(state, getDefaultState());
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
        login({commit, dispatch}, data){
            return new Promise((resolve, reject) => {
                axios.post('auth/login', {
                    email: data.email,
                    password: data.password,
                })
                    .then(response => {

                            localStorage.setItem('token', response.data.access_token);
                            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

                        dispatch('fetchUser');
                        resolve(response);
                    })
                    .catch(error => {
                        localStorage.removeItem('token');
                        reject(error);
                    })
            })
        },
        register({commit, dispatch}, data){
            return new Promise((resolve, reject) => {
                axios.post('auth/register', {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation
                })
                    .then(response => {

                        localStorage.setItem('token', response.data.access_token);
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

                        resolve(response);
                    })
                    .catch(error => {
                        localStorage.removeItem('token');
                        reject(error);
                    })
            })
        },
        fetchUser({commit}){
            return new Promise((resolve, reject) => {
                axios.post('auth/user')
                    .then(response => {
                        console.log(response.data);
                        commit('updateFirstName', response.data.first_name);
                        commit('updateLastName', response.data.last_name);
                        commit('updateDescription', response.data.description);
                        commit('updateEmail', response.data.email);
                        commit('updateImage', response.data.image);
                        commit('updateUserId', response.data.id);
                        commit('updateIsLoggedIn', true);

                        resolve(response);
                    })
                    .catch(error => {
                        localStorage.removeItem('token');
                        reject(error);
                    })
            })
        },
        logout({commit}){
            return new Promise((resolve) => {
                commit('resetState');
                localStorage.removeItem('token');
                delete axios.defaults.headers.common['Authorization'];
                resolve();
            })
        },
    },
    getters: {
        getFirstName: state => state.firstName,

        getLastName: state => state.lastName,

        getDescription: state => state.description,

        getEmail: state => state.email,

        getImage: state => state.image,

        getUserId: state => state.id,

        getIsLoggedIn: state => state.isLoggedIn,

        getToken: state => state.token,
    }
}
