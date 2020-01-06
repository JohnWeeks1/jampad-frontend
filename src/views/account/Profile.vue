<template>
    <div>
        <top-navigation></top-navigation>
        <div class="w-full py-24 px-6 relative z-10 border-black border-2">
<!--            <audio v-if="song" controls>-->
<!--                <source :src="song" type="audio/mpeg">-->
<!--                Your browser does not support the audio element.-->
<!--            </audio>-->
            <div class="container max-w-4xl mx-auto flex border-black border-2">
                <div class=" md:w-1/3">
                    <img v-if="image"
                        :src="image"
                        class="w-full rounded-lg h-auto shadow-lg"/>
                    <router-link v-else :to="{ name: 'UploadProfilePic' }">
                        <img class="z-0" src="@/assets/images/site/DefaultUserAvatar.png">
                    </router-link>
                </div>
                <div class="w-full pl-4 md:w-2/3">
                    <div class="flex">
                        <div class="w-3/4">
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
                                    <span class="inline-block w-full">1</span>
                                    <span class="inline-block w-full">Connected</span>
                                </div>
                            </router-link>
                        </div>
                        <div class="w-1/3 p-2">
                            <div class="rounded-full text-center bg-gray-400 p-2
                                border-gray-100 border-2 py-4 bg-green-500 hover:bg-green-600">
                                <span class="inline-block w-full">2</span>
                                <span class="inline-block w-full">Rated</span>
                            </div>
                        </div>
                        <div class="w-1/3 p-2">
                            <div class="rounded-full text-center bg-gray-400 p-2
                                border-gray-100 border-2 py-4 bg-green-500 hover:bg-green-600">
                                <span class="inline-block w-full">3</span>
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

        <div class="max-w-4xl mx-auto pb-20">
            <div class="w-full">
                <div class="flex flex-wrap font-bold text-gray-100">
                    <div class="w-1/3 p-2">
                        <div class="max-w-sm overflow-hidden bg-gray-900">
                            <img class="w-full" src="@/assets/images/site/metal-cover.png" >
                            <div class="px-4 py-2">
                                <div class="text-lg">The Coldest Sunset</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/3 p-2">
                        <div class="max-w-sm overflow-hidden bg-gray-900">
                            <img class="w-full" src="@/assets/images/site/metal-cover.png" >
                            <div class="px-4 py-2">
                                <div class="text-lg">The Coldest Sunset</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/3 p-2">
                        <div class="max-w-sm overflow-hidden bg-gray-900">
                            <img class="w-full" src="@/assets/images/site/metal-cover.png" >
                            <div class="px-4 py-2">
                                <div class="text-lg">The Coldest Sunset</div>
                            </div>
                        </div>
                    </div>
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
                image: null,
                song: null
            }
        },
        mounted() {
            this.fullName = this.getFullName();
            this.description = this.getDescription();
            this.getImage();
            this.getSong();
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
                        console.error(error);
                    });
            },
            getSong() {
                this.$http.get('auth/song/1')
                    .then(response => {
                        if (response.data !== null) {
                            this.song = process.env.VUE_APP_API_URL + 'auth/song/1';
                        }
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
