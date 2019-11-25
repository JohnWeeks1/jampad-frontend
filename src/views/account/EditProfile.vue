<template>
    <div>
        <top-navigation></top-navigation>
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

    export default {
        name: "EditProfile",
        data() {
            return {
                firstName: null,
                lastName: null,
                description: null
            }
        },
        mounted() {
            this.firstName = this.getFirstName();
            this.lastName = this.getLastName();
            this.description = this.getDescription();
        },
        methods: {
            getFirstName() {
                return this.$store.getters['user/getFirstName']
            },
            getLastName() {
                return this.$store.getters['user/getLastName']
            },
            getDescription() {
                return this.$store.getters['user/getDescription']
            },
            updateProfile() {
                let token = this.$store.state.user.token;

                if (token) {
                    this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                }
                this.$http.patch(process.env.VUE_APP_API_URL+'auth/user/'+this.$store.state.user.userId, {
                        first_name: this.firstName,
                        last_name: this.lastName,
                        description: this.description,
                    })
                    .then(response => {
                        this.$store.dispatch('user/fetchUser');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
        },
        components: {
            TopNavigation,
            FooterComponent,
        },
    };
</script>
