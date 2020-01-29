<template>
    <div>
        <div class="max-w-4xl mx-auto pb-4">
            <div class="flex flex-wrap font-bold text-gray-100">
                <h2 class="text-gray-100 text-xl">Songs</h2>
                <div class="bg-green-500 w-full h-1"></div>
                <div class="w-full mt-4">
                    <router-link
                            v-if="songs.length > 0"
                            class="float-right bg-transparent hover:bg-red-500 text-gray-100 font-semibold hover:text-white
                                py-2 px-4 border border-red-500 hover:border-transparent rounded"
                            :to="{ name: 'DeleteSong' }">
                        Delete Song
                    </router-link>
                    <router-link
                            class="float-right bg-transparent hover:bg-green-500 text-gray-100 font-semibold hover:text-white
                                    py-2 px-4 border border-green-500 hover:border-transparent rounded"
                            :to="{ name: 'AddSong' }">
                        Add Song
                    </router-link>
                </div>
            </div>
        </div>

        <div class="max-w-4xl mx-auto pb-20">
            <div class="flex">
                <song-player class="w-full"></song-player>
            </div>
        </div>
    </div>
</template>

<script>
    import SongPlayer from "@/components/partials/profile/SongPlayer";

    export default {
        name: 'SongsSection',
        data() {
            return {
                songs: null
            }
        },
        mounted() {
            this.songs = this.getSongsByUserId();
        },
        methods: {
            getSongsByUserId() {
                this.$http.get("auth/songs/" + this.$store.state.user.userId)
                    .then(response => {
                        this.songs = response.data;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
        },
        components: {
            SongPlayer
        }
    };
</script>
