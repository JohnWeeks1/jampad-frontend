<template>
    <div>
        <top-navigation></top-navigation>
        <div class="min-h-screen w-full p-6 bg-gray-300 flex justify-center items-center">
            <div class="w-full max-w-xs">
                <div class="bg-white border p-8 shadow rounded w-full mb-6">
                    <h1 class="mb-6 text-lg text-gray-900 font-thin">Let's get rocking!</h1>
                    <fieldset class="mb-4">
                        <label class="block text-sm text-gray-900 mb-2">First name</label>
                        <input id="first_name" type="text" v-model="firstName"
                               class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                       name="first_name"
                               required autofocus>
                    </fieldset>
                    <fieldset class="mb-4">
                        <label class="block text-sm text-gray-900 mb-2">Last name</label>
                        <input id="last_name" type="text" v-model="lastName"
                               class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                               name="last_name"
                               required>
                    </fieldset>
                    <fieldset class="mb-4">
                        <label class="block text-sm text-gray-900 mb-2">Email address</label>
                        <input id="email" type="email" v-model="email"
                               class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                               name="email"
                               required>
                    </fieldset>
                    <fieldset class="mb-4">
                        <label class="block text-sm text-gray-900 mb-2">Password</label>
                        <input id="password" type="password" v-model="password"
                               class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                               name="password"
                               required>
                    </fieldset>
                    <fieldset class="mb-4">
                        <label class="block text-sm text-gray-900 mb-2">Confirm password</label>
                        <input id="confirm_password" type="password" v-model="confirmPassword"
                               class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                               name="confirm_password"
                               required>
                    </fieldset>
                    <button type="submit" @click="register"
                            class="block w-full bg-black text-white rounded-sm py-3 text-sm tracking-wide">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import TopNavigation from "@/components/structure/TopNavigation";
    import FooterComponent from "@/components/structure/Footer";

    export default {
        name: 'Register',
        data() {
            return {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                confirmPassword: null,
            }
        },
        methods: {
            register() {
                this.$http.post(process.env.VUE_APP_API_URL + 'auth/register', {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.confirmPassword,
                })
                    .then(() => {
                        setTimeout(() => {
                            this.login();
                        }, 1000);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            },
            login() {
                this.$http
                    .post(process.env.VUE_APP_API_URL + "auth/login", {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        this.$store.commit('user/loginSuccess', response.data.access_token);
                        let token = this.$store.state.user.token;

                        if (token) {
                            this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                        }
                        this.$store.dispatch('user/fetchUser');
                        setTimeout(() => {
                            this.$router.push('/account/profile');
                        }, 500);
                    })
                    .catch((error) => {
                        console.error(error);
                    });

            },
        },
        components: {
            TopNavigation,
            FooterComponent
        },
    };
</script>
