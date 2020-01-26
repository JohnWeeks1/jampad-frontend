<template>
    <div>
        <top-navigation></top-navigation>
        <div class="container mx-auto w-full max-w-4xl pt-20 pb-20">
            <h2 class="text-gray-100 text-xl">Delete Youtube Videos</h2>
            <div class="bg-red-500 w-full h-1 mb-4"></div>
            <div class="bg-gray-900 text-white shadow-md rounded px-8 pt-6 pb-8">
                <div v-for="(video, index) in videos" class="flex flex-wrap items-center">
                    <div class="w-1/4 mr-auto mt-2 text-lg p-1">
                        {{ ++index }}. {{video.title}} <br>
                        <iframe class="w-full h-20"
                                :src="video.url">
                        </iframe>
                    </div>
                    <div class="w-1/4 ml-auto p-1">
                        <button @click="deleteYoutubeLink(video)" class="float-right bg-transparent hover:bg-red-500 text-gray-100 font-semibold hover:text-white
                            py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            Delete
                        </button>
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
        name: "DeleteYoutubeLink",
        data() {
            return {
                videos: null,
            }
        },
        mounted() {
            this.getSongsByUserId();
        },
        methods: {
            getSongsByUserId() {
                this.$http.get("auth/youtube/" + this.$store.state.user.userId)
                    .then(response => {
                        this.videos = response.data;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
            deleteYoutubeLink(video) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(() => {
                    this.$http.delete("auth/youtube/" + video.id)
                        .then(() => {
                            this.$router.push({ name: 'Profile'});
                        })
                        .catch(error => {
                            console.error(error);
                        })
                })
            }
        },

        components: {
            TopNavigation,
            FooterComponent,
        },
    };
</script>
