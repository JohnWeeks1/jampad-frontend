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
        fetchUser({commit}) {
            this.$http
                .get("http://jampad.test/api/auth/user")
                .then(response => {
                    this.$store.commit('user/updateFirstName', response.data.first_name);
                    this.$store.commit('user/updateLastName', response.data.last_name);
                    this.$store.commit('user/updateEmail', response.data.email);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    getters: {
        getUser: (state) => {
            return {
                firstName : state.firstName,
                lastName  : state.lastName,
                email     : state.email,
                id        : state.userId,
            }
        },
    }
}
