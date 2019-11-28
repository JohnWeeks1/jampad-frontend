<template>
    <div>
        <top-navigation></top-navigation>
        <div class="w-full py-24 px-6 bg-blue-100 relative z-10">
            <div class="container max-w-4xl mx-auto text-left flex items-center flex-wrap">
                <div class="hidden md:block w-1/3">
                    <img
                        :src="image"
                        alt="Base64 encoded image"
                        class="w-full h-auto shadow-lg"/>
                </div>
                <div class="w-full pl-4 md:w-2/3 md:pr-6">
                    <h1 class="text-2xl md:text-4xl text-gray-900 mb-3">
                        {{ fullName }}
                    </h1>
                    <p class="text-md md:text-lg text-gray-600 leading-normal">
                        {{ description }}
                    </p>
                    <router-link
                        class="mt-6 inline-block bg-white text-black no-underline px-4 py-3 shadow-lg"
                        :to="{ name: 'EditProfile' }">
                        Edit Profile
                    </router-link>
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
        name: "Profile",
        data() {
            return {
                fullName: null,
                description: null,
                image: ''
            }
        },
        mounted() {
            this.fullName = this.getFullName();
            this.description = this.getDescription();
            this.getImage();
        },
        methods: {
            getFullName() {
                return this.$store.getters['user/getFirstName'] + ' ' + this.$store.getters['user/getLastName'];
            },
            getDescription() {
                return this.$store.getters['user/getDescription'];
            },
            getImage() {
                this.$http.get("auth/image")
                    .then(() => {
                        this.image = process.env.VUE_APP_API_URL + 'auth/image';
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        },
        components: {
            TopNavigation,
            FooterComponent
        },
    };
</script>
