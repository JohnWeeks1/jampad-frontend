<template>
    <section>
        <button
            @click="open = !open"
            class="bg-transparent hover:bg-green-500 text-white font-semibold hover:text-white py-1 px-2
                hover:border-transparent rounded">
            Menu
        </button>

        <!--Modal-->
        <div v-show="open"
             class="animated slideInDown faster fixed w-full h-full top-0 left-0 flex justify-center">
            <div class="bg-black absolute w-full h-full opacity-75"></div>
            <div class="my-auto fixed border-white w-48 pt-16">
                <!--Title-->
                <p class="text-2xl text-center text-white font-bold">Menu</p>
                <div class="flex pt-2" v-if="!isLoggedIn">
                    <router-link
                        class="text-center bg-transparent hover:bg-green-500 text-white py-2 px-4 border
                        border-green-500 hover:border-transparent font-bold py-2 px-4 rounded w-full"
                        :to="{ name: 'Login' }">
                        Login
                    </router-link>
                </div>
                <div class="flex pt-2" v-if="!isLoggedIn">
                    <router-link
                        class="text-center bg-transparent hover:bg-green-500 text-white py-2 px-4 border
                        border-green-500 hover:border-transparent font-bold py-2 px-4 rounded w-full"
                        :to="{ name: 'Register' }">
                        Register
                    </router-link>
                </div>
                <div class="flex pt-2" v-if="isLoggedIn">
                    <router-link
                        class="text-center bg-transparent hover:bg-green-500 text-white py-2 px-4 border
                        border-green-500 hover:border-transparent font-bold py-2 px-4 rounded w-full"
                        :to="{ name: 'Profile' }">
                        Profile
                    </router-link>
                </div>
                <div class="flex pt-2" v-if="isLoggedIn">
                    <button
                        @click="logout"
                        class="text-center bg-transparent hover:bg-green-500 text-white py-2 px-4 border
                        border-green-500 hover:border-transparent font-bold py-2 px-4 rounded w-full">
                        Logout
                    </button>
                </div>
                <!--Footer-->
                <div class="flex pt-2">
                    <button
                        class="text-center bg-transparent hover:bg-red-500 text-white py-2 px-4 border
                        border-red-500 hover:border-transparent font-bold py-2 px-4 rounded w-full"
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
            logout: function () {
                this.$store.dispatch('user/logout')
                    .then(() => {
                        this.$router.push({ name: 'Home'})
                    })
            }
        }

    };
</script>
