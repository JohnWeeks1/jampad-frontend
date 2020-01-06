<template>
    <div>
        <top-navigation></top-navigation>
        <div class="min-h-screen w-full p-6 bg-black flex justify-center items-center">
            <div class="w-full max-w-xs">
                <div class="bg-gray-900 p-8 shadow rounded w-full mb-6">
                    <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking!</h1>
                        <fieldset class="mb-4">
                            <label class="block text-sm text-gray-100 mb-2">First name</label>
                            <input id="first_name" type="text" v-model="firstName"
                                   class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                   name="first_name"
                                   required autofocus>
                            <span v-if="errors.first_name" class="text-sm text-red-500">
                                {{ errors.first_name[0] }}
                            </span>
                        </fieldset>
                        <fieldset class="mb-4">
                            <label class="block text-sm text-gray-100 mb-2">Last name</label>
                            <input id="last_name" type="text" v-model="lastName"
                                   class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                   name="last_name"
                                   required>
                            <span v-if="errors.last_name" class="text-sm text-red-500">
                                {{ errors.last_name[0] }}
                            </span>
                        </fieldset>
                        <fieldset class="mb-4">
                            <label class="block text-sm text-gray-100 mb-2">Email address</label>
                            <input id="email" type="email" v-model="email"
                                   class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                   name="email"
                                   required>
                            <span v-if="errors.email" class="text-sm text-red-500">
                                {{ errors.email[0] }}
                            </span>
                        </fieldset>
                        <fieldset class="mb-4">
                            <label class="block text-sm text-gray-100 mb-2">Password</label>
                            <input id="password" type="password" v-model="password"
                                   class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                   name="password"
                                   required>
                            <span v-if="errors.password" class="text-sm text-red-500">
                                {{ errors.password[0] }}
                            </span>
                        </fieldset>
                        <fieldset class="mb-4">
                            <label class="block text-sm text-gray-100 mb-2">Confirm password</label>
                            <input id="confirm_password" type="password" v-model="confirmPassword"
                                   class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                   name="confirm_password"
                                   required>
                        </fieldset>
                    <button type="submit" @click="register"
                            class="block w-full bg-green-500 text-white rounded-sm py-3 text-sm tracking-wide">
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
                errors: [],
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                confirmPassword: null,
                is_admin : null,
            }
        },
        methods: {
            register() {
                this.$store.dispatch('user/register', {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.confirmPassword,
                })
                .then(() => {
                        setTimeout(() => {
                            this.login();
                        }, 500);
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                        console.log(error)
                    })
            },
            login() {
                this.$store.dispatch('user/login', {
                    email: this.email,
                    password: this.password
                })
                    .then(() => {
                        this.$router.push({ name: 'Account'});
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },

        components: {
            TopNavigation,
            FooterComponent
        },
    };
</script>
