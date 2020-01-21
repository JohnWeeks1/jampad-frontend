<template>
    <div>
        <top-navigation></top-navigation>

        <div class="w-full py-24 px-6 relative z-10">
            <div class="container max-w-4xl mx-auto flex">
                <div class=" md:w-1/3">
                    <img v-if="image" :src="image"
                        class="w-full rounded-lg h-auto shadow-lg"/>
                    <router-link v-else :to="{ name: 'UploadProfilePic' }">
                        <img class="z-0" src="@/assets/images/site/DefaultUserAvatar.png">
                    </router-link>
                </div>
                <div class="w-full pl-4 md:w-2/3">
                    <div class="flex">
                        <div class="w-3/4">s
                            <h1 class="text-2xl md:text-4xl text-left text-gray-100">
                                {{ fullName }}
                            </h1>
                            <span class="text-md text-gray-700"> <i>London, Uk</i> </span>
                        </div>
                        <div class="w-1/4 mt-4">
                            <router-link
                                    class="bg-transparent hover:bg-green-500 text-gray-100 font-semibold hover:text-white
                                        py-2 px-4 border border-green-500 hover:border-transparent rounded"
                                    :to="{ name: 'EditProfile' }">
                                Edit Profile
                            </router-link>
                        </div>
                    </div>
                    <div class="flex flex-wrap font-bold text-gray-100">
                        <div class="w-1/3 p-2">
                            <router-link :to="{ name: 'Connections' }">
                                <div class="rounded-full text-center font-white bg-gray-400 p-2
                                    border-gray-100 border-2 py-4 bg-green-500 hover:bg-green-600">
                                    <span class="inline-block w-full">0</span>
                                    <span class="inline-block w-full">Connected</span>
                                </div>
                            </router-link>
                        </div>
                        <div class="w-1/3 p-2">
                            <div class="rounded-full text-center bg-gray-400 p-2
                                border-gray-100 border-2 py-4 bg-green-500 hover:bg-green-600">
                                <span class="inline-block w-full">0</span>
                                <span class="inline-block w-full">Rated</span>
                            </div>
                        </div>
                        <div class="w-1/3 p-2">
                            <div class="rounded-full text-center bg-gray-400 p-2
                                border-gray-100 border-2 py-4 bg-green-500 hover:bg-green-600">
                                <span class="inline-block w-full">9</span>
                                <span class="inline-block w-full">Songs</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-900 rounded-lg p-5">
                        <p class="text-gray-100">
                            About the artist
                        </p>
                        <p class="text-md md:text-lg text-gray-600 leading-normal">
                            {{ description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <songs-section></songs-section>
        <youtube-videos-section></youtube-videos-section>

        <footer-component></footer-component>
    </div>
</template>

<script>
    import FooterComponent from "@/components/structure/Footer";
    import SongsSection from "@/components/partials/SongsSection";
    import TopNavigation from "@/components/structure/TopNavigation";
    import YoutubeVideosSection from "@/components/partials/YoutubeVideosSection";

    export default {
        name: "Profile",
        data() {
            return {
                fullName: null,
                description: null,
                image: null,
            }
        },
        mounted() {
            this.fullName = this.getFullName();
            this.description = this.getDescription();
            this.image = process.env.VUE_APP_API_URL + `auth/user/${this.$store.state.user.userId}/image`;
        },
        methods: {
            getFullName() {
                return this.$store.getters['user/getFirstName'] + ' ' + this.$store.getters['user/getLastName'];
            },
            getDescription() {
                return this.$store.getters['user/getDescription'];
            },
        },

        components: {
            YoutubeVideosSection,
            FooterComponent,
            TopNavigation,
            SongsSection,
        },
    };
</script>
