<template>
    <div>
        <top-navigation></top-navigation>
        <div class="min-h-screen w-full p-6 bg-gray-300 flex justify-center items-center">
            <div class="w-full max-w-xs">
                <div class="bg-white border p-8 shadow rounded w-full mb-6">
                    <h1 class="mb-6 text-lg text-gray-900 font-thin">
                        Login to your account
                    </h1>
                    <fieldset class="mb-4">
                        <label class="block text-sm text-gray-900 mb-2">Email address</label>
                        <input
                            id="email"
                            type="email"
                            v-model="email"
                            class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                            name="email"
                            required
                            autofocus
                        />
                        <span v-if="errors.email" class="text-sm text-red-500">
                            {{ errors.email[0] }}
                        </span>
                    </fieldset>
                    <fieldset class="mb-4">
                        <div class="w-full flex justify-between items-center">
                            <label for="password" class="block text-sm text-gray-900 mb-2"
                            >Password</label
                            >
                            <a
                                class="text-xs font-thin text-blue no-underline hover:underline"
                                href="#"
                            >
                                Forgotten password?
                            </a>
                        </div>
                        <input
                            id="password"
                            type="password"
                            v-model="password"
                            class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                            name="password"
                            required
                        />
                        <span v-if="errors.password" class="text-sm text-red-500">
                                {{ errors.password[0] }}
                            </span>
                    </fieldset>
                    <div class="pt-1 pb-5 text-sm text-gray-darker font-thin">
                        <label
                        ><input
                            class="mr-1"
                            type="checkbox"
                            name="remember"
                            id="remember"
                        />
                            Remember me</label
                        >
                    </div>
                    <button
                        type="submit"
                        @click="login"
                        class="block w-full bg-black text-white rounded-sm py-3 text-sm tracking-wide"
                    >
                        Sign in
                    </button>
                </div>
                <p class="text-center text-sm text-gray-600 font-thin">
                    Don't have an account yet?
                    <router-link
                        class="text-blue-500 no-underline hover:underline"
                        :to="{ name: 'Register' }">
                        Register
                    </router-link>
                </p>
            </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import TopNavigation from "@/components/structure/TopNavigation";
    import FooterComponent from "@/components/structure/Footer";

    export default {
        name: "Login",
        data() {
            return {
                errors: [],
                email: null,
                password: null
            }
        },
        methods: {
            login() {
                this.$store.dispatch('user/login', {
                    email: this.email,
                    password: this.password
                })
                    .then(() => {
                        this.$router.push({ name: 'Profile'})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        components: {
            TopNavigation,
            FooterComponent
        }
    };
</script>
