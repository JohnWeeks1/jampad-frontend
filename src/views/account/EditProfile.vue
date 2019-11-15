<template>
    <div>
        <top-navigation></top-navigation>
        {{this.$store.state.user.userId}}
        <div class="container mx-auto w-full max-w-lg pt-20 pb-20">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           for="grid-first-name">
                        First Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3
                        leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        v-model="firstName">
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           for="grid-last-name">
                        Last Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        v-model="lastName">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           for="description">
                        Description
                    </label>
                    <textarea
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="" id="description" cols="30" rows="10" v-model="description" v-text="description">
                    </textarea>
                </div>
            </div>
<!--            <div class="flex flex-wrap -mx-3 mb-6">-->
<!--                <div class="w-full px-3">-->
<!--                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"-->
<!--                           for="grid-password">-->
<!--                        Password-->
<!--                    </label>-->
<!--                    <input-->
<!--                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded -->
<!--                        py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"-->
<!--                        id="grid-password" -->
<!--                        type="password" -->
<!--                        placeholder="******************">-->
<!--                    <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="flex flex-wrap -mx-3 mb-2">-->
<!--                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">-->
<!--                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">-->
<!--                        City-->
<!--                    </label>-->
<!--                    <input-->
<!--                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-->
<!--                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"-->
<!--                        id="grid-city"-->
<!--                        type="text"-->
<!--                        placeholder="Albuquerque">-->
<!--                </div>-->
<!--                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">-->
<!--                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">-->
<!--                        State-->
<!--                    </label>-->
<!--                    <div class="relative">-->
<!--                        <select-->
<!--                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3-->
<!--                            px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"-->
<!--                            id="grid-state">-->
<!--                            <option>New Mexico</option>-->
<!--                            <option>Missouri</option>-->
<!--                            <option>Texas</option>-->
<!--                        </select>-->
<!--                        <div-->
<!--                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">-->
<!--                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">-->
<!--                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">-->
<!--                        Zip-->
<!--                    </label>-->
<!--                    <input-->
<!--                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-->
<!--                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"-->
<!--                        id="grid-zip"-->
<!--                        type="text"-->
<!--                        placeholder="90210">-->
<!--                </div>-->
<!--            </div>-->
            <div class="flex flex-wrap mt-8 -mx-3 mb-6">
                <div class="w-full px-3">
                    <button class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="updateProfile">
                        Update
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
    import {HTTP} from "@/http-common";

    export default {
        name: "EditProfile",
        data() {
            return {
                firstName: null,
                lastName: null,
                description: null,
            }
        },
        mounted() {
            this.firstName = this.getFirstName();
            this.lastName = this.getLastName();
        },
        methods: {
            getFirstName() {
                return this.$store.getters['user/getFirstName']
            },
            getLastName() {
                return this.$store.getters['user/getLastName']
            },
            updateProfile() {
                let token = this.$store.state.user.token;

                if (token) {
                    this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                }
                this.$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
                HTTP.patch(process.env.VUE_APP_API_URL+'auth/user/'+this.$store.state.user.userId, {
                        first_name: this.firstName,
                        last_name: this.lastName,
                        description: this.description
                    })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
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
