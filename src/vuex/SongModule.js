import axios from "axios";

const getDefaultState = () => {
    return {
        userId: null,
        title: null,
        url: null,
    }
};

export default {
    namespaced: true,
    state: getDefaultState(),
    mutations: {
        resetState(state) {
            Object.assign(state, getDefaultState());
        },
        updateUserId(state, payload) {
            state.userId = payload
        },
        updateTitle(state, payload) {
            state.title = payload
        },
        updateUrl(state, payload) {
            state.url = payload
        },
    },
    actions: {
        login({commit, dispatch}, data){
            return new Promise((resolve, reject) => {
                axios.post('auth/song', {
                    email: data.email,
                })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        localStorage.removeItem('token');
                        reject(error);
                    })
            })
        },
    },
    getters: {
        getUserId: state => state.userId,

        getTitle: state => state.title,

        getUrl: state => state.url,
    }
}
