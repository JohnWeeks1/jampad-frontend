<template>
    <div>
        <top-navigation></top-navigation>
        <div class="container mx-auto w-full max-w-lg pt-20 pb-20">
            <h2 class="text-gray-100 text-xl">Add YouTube video</h2>
            <div class="bg-green-500 w-full h-1 mb-4"></div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                           for="title">
                        Title
                    </label>
                    <input
                        class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded
                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text" v-model="title" id="title" name="title" ref="file">
                        <br>
                        <span v-if="errors.title" class="text-sm text-red-500">
                            {{ errors.title[0] }}
                        </span>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                        Video URL
                    </label>
                    <input placeholder="2VnYXKwneUQ"
                            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded
                            py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text" v-model="videoCode">
                    <br>
                    <span v-if="errors.url" class="text-sm text-red-500">
                            {{ errors.url[0] }}
                    </span>
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
        name: "AddYoutubeVideoLink",
        data() {
            return {
                errors: [],
                title: '',
                videoCode: '',
            }
        },
        methods: {
            addYoutubeVideoLink() {
                this.$http.post("auth/youtube/", {
                    user_id: this.$store.state.user.userId,
                    title: this.title,
                    url: this.isVideoCodeNull()
                })
                    .then(response => {
                        this.$router.push({ name: 'Profile'})
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                        console.log(error);
                    })
            },
            isVideoCodeNull() {
                if(this.videoCode) {
                    return this.videoCode;
                }

                return null;
            }
        },

        components: {
            TopNavigation,
            FooterComponent
        },
    };
</script>
