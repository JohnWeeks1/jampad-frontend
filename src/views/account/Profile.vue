<template>
    <div>
        <top-navigation></top-navigation>
        <div class="w-full py-24 px-6 relative z-10 border-black border-2">
            <div class="container max-w-4xl mx-auto flex border-black border-2">
                <div class=" md:w-1/2 border-black border-2">
                    <img v-if="image"
                        :src="image"
                        class="w-full h-auto shadow-lg"/>
                    <router-link v-else :to="{ name: 'UploadProfilePic' }">
                        <img class="z-0" src="@/assets/images/site/DefaultUserAvatar.png">
                    </router-link>
                </div>
                <div class="w-full pl-4 md:w-1/2 border-black border-2">
                    <div class="p-2 border-black border-2">
                        <h1 class="text-2xl md:text-4xl text-left text-gray-900">
                            {{ fullName }}
                        </h1>
                        <span class="text-md text-gray-700"> <i>London, Uk</i> </span>
                    </div>

                    <div class="flex flex-wrap border-black border-2">
                        <div class="w-1/3 p-2">
                            <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
                            <div class="text-gray-700 text-center bg-gray-400 p-2">Connected</div>
                        </div>
                        <div class="w-1/3 p-2">
                            <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
                            <div class="text-gray-700 text-center bg-gray-400 p-2">Rated</div>
                        </div>
                        <div class="w-1/3 p-2">
                            <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
                            <div class="text-gray-700 text-center bg-gray-400 p-2">Songs</div>
                        </div>
                    </div>
                    <div class="bg-gray-200 border-black border-2 rounded-lg p-5">
                        <p class="text-gray-900">
                            About the artist
                        </p>
                        <p class="text-md md:text-lg text-gray-600 leading-normal">
                            {{ description }}
                        </p>
                    </div>
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
    import FooterComponent from "@/components/structure/Footer";
    import TopNavigation from "@/components/structure/TopNavigation";

    export default {
        name: "Profile",
        data() {
            return {
                fullName: null,
                description: null,
                image: null
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
                    .then(response => {
                        if (response.data.image !== null) {
                            this.image = process.env.VUE_APP_API_URL + 'auth/image';
                        }
                    })
                    .catch(error => {
                        console.error('No image');
                    });
            },
        },

        components: {
            TopNavigation,
            FooterComponent
        },
    };
</script>
