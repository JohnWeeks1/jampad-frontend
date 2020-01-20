<template>
    <div>
        <top-navigation></top-navigation>
        <div class="container mx-auto w-full max-w-lg pt-20 pb-20">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                           for="title">
                        Title
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text" v-model="title" id="title" name="title" ref="file">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                           for="video">
                        ViTitledeo
                    </label>
                    <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text" v-model="video" id="video" name="video" ref="file">
                </div>
            </div>
            <div class="flex flex-wrap mt-8 -mx-3 mb-6">
                <div class="w-full px-3">
                    <button class="float-right bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    @click="addYoutubeVideoLink()">
                        Add
                    </button>
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
        name: "AddSong",
        data() {
            return {
                title: null,
                video: null,
            }
        },
        methods: {
            addYoutubeVideoLink() {
                this.$http.post("auth/add-youtube-link/" + this.$store.state.user.userId,{
                    youtube_video: this.video
                })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },

        components: {
            TopNavigation,
            FooterComponent
        },
    };
</script>
