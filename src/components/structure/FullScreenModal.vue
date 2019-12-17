<template>
    <section>
        <button
            @click="open = !open"
            class="inline-block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Menu
        </button>

        <!--Modal-->
        <div v-show="open"
             class="animated slideInDown faster fixed w-full h-full top-0 left-0 flex justify-center">
            <div class="bg-black absolute w-full h-full opacity-75"></div>
            <div class="my-auto fixed border-white w-48 pt-16">
                <!--Title-->
                <p class="text-2xl text-center text-white font-bold">Menu</p>
                <!--Body-->
                <div class="flex pt-2" v-if="!isLoggedIn">
                    <router-link
                        class="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                        :to="{ name: 'Login' }">
                        Login
                    </router-link>
                </div>
                <div class="flex pt-2" v-if="!isLoggedIn">
                    <router-link
                        class="text-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full"
                        :to="{ name: 'Register' }">
                        Register
                    </router-link>
                </div>
                <div class="flex pt-2" v-if="isLoggedIn">
                    <router-link
                        class="text-center bg-green-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full"
                        :to="{ name: 'Profile' }">
                        Profile
                    </router-link>
                </div>
                <div class="flex pt-2" v-if="isLoggedIn">
                    <button
                        @click="logout"
                        class="text-center bg-yellow-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full" >
                        Logout
                    </button>
                </div>
                <!--Footer-->
                <div class="flex pt-2">
                    <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                        @click="open = !open">Close
                    </button>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "FullScreenModal",
        data() {
            return {
                open: false
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters['user/getIsLoggedIn'];
            },
        },
        methods: {
            logout() {
                this.$http
                    .get("logout")
                    .then(() => {
                        this.$store.dispatch('user/resetState');
                        window.location = '/';
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }

    };
</script>
