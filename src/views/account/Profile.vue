<template>
    <div>
        <top-navigation></top-navigation>
        <div class="w-full py-24 px-6 relative z-10">
            <div class="container max-w-4xl mx-auto flex">
                <div v-if="image" class=" md:w-1/3">
                    <img :src="image" class="w-full rounded-lg h-auto shadow-lg"/>
                </div>
                <div v-else class=" md:w-1/3">
                    <router-link :to="{ name: 'UploadProfilePic' }">
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
                            <follow-user></follow-user>
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
                    <profile-info-section></profile-info-section>
                    <profile-about-section></profile-about-section>
                </div>
            </div>
        </div>
        <songs-section></songs-section>
        <youtube-videos-section></youtube-videos-section>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import FollowUser from "@/components/partials/FollowUser";
    import FooterComponent from "@/components/structure/Footer";
    import SongsSection from "@/components/partials/SongsSection";
    import TopNavigation from "@/components/structure/TopNavigation";
    import ProfileInfoSection from "@/components/partials/ProfileInfoSection";
    import ProfileAboutSection from "@/components/partials/ProfileAboutSection";
    import YoutubeVideosSection from "@/components/partials/YoutubeVideosSection";

    export default {
        name: "Profile",
        data() {
            return {
                fullName: null,
                image: null,
            }
        },
        mounted() {
            this.fullName = this.getFullName();
            this.image = process.env.VUE_APP_API_URL + `auth/image/${this.$store.state.user.userId}`;
        },
        methods: {
            getFullName() {
                return this.$store.getters['user/getFirstName'] + ' ' + this.$store.getters['user/getLastName'];
            },
        },

        components: {
            YoutubeVideosSection,
            ProfileAboutSection,
            ProfileInfoSection,
            FooterComponent,
            TopNavigation,
            SongsSection,
            FollowUser,
        },
    };
</script>
