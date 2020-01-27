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
        updateTitle(state, payload) {
            state.title = payload
        },
        updateUrl(state, payload) {
            state.url = payload
        },
    },
    actions: {
        fetchSongsByUserId({commit}, data){
            return new Promise((resolve, reject) => {
                this.$http.get("auth/songs/" + this.$store.state.user.userId)
                    .then(response => {
                        console.log(response.data);
                        commit('updateTitle', response.data.title);
                        commit('updateTitle', response.data.url);
                        resolve(response);
                    })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    });
            })
        },
    },
    getters: {
        getTitle: state => state.title,

        getUrl: state => state.url,
    }
}
