<template>
    <div>
        <div class="max-w-4xl mx-auto pb-4">
            <div class="flex flex-wrap font-bold text-gray-100">
                <h2 class="text-gray-100 text-xl">Videos</h2>
                <div class="bg-green-500 w-full h-1"></div>
                <div class="w-full mt-4">
                    <router-link
                            v-if="videos.length > 0"
                            class="float-right bg-transparent hover:bg-red-500 text-gray-100 font-semibold hover:text-white
                                py-2 px-4 border border-red-500 hover:border-transparent rounded"
                            :to="{ name: 'DeleteYoutubeVideoLink' }">
                        Delete Video
                    </router-link>
                    <router-link
                        class="float-right bg-transparent hover:bg-green-500 text-gray-100 font-semibold hover:text-white
                                py-2 px-4 border border-green-500 hover:border-transparent rounded"
                        :to="{ name: 'AddYoutubeVideoLink' }">
                        Add Youtube Video
                    </router-link>
                </div>
            </div>
        </div>
        <div class="max-w-4xl mx-auto pb-20">
                <!-- Two columns -->
                <div class="flex mb-4">
                    <div v-for="video in videos" class="w-1/2 p-2">
                        <h3 class="text-lg text-white">{{ video.title }}</h3>
                        <iframe class="w-full h-48" :src="video.url"></iframe>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'YoutubeVideosSection',
        data() {
            return {
                videos: null
            }
        },
        mounted() {
            this.getVideoByUser();
        },
        methods: {
            getVideoByUser() {
                this.$http.get('auth/youtube/' + this.$store.state.user.userId)
                    .then(response => {
                        this.videos = response.data;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    };
</script>
