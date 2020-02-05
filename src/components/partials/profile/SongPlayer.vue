<template>
    <div>
        <div v-if="!songs">
            <div class="text-white text-center">
                You have no songs! Why not add some.
            </div>
        </div>
        <div v-else>
            <aplayer
                :music="{
                    title: list[0].title,
                    artist: list[0].artist,
                    src: list[0].path,
                    pic: list[0].pic
                }"
                :list="list"
            />
        </div>
    </div>
</template>

<script>
    import Aplayer from 'vue-aplayer';

    export default {
        name: "SongPlayer",
        data() {
            return {
                list: [],
                songs: null,
                path: process.env.VUE_APP_API_URL + 'auth/songs/4'
            }
        },
        mounted() {
            this.songs = this.getSongsByUserId();
        },
        methods: {
            getSongsByUserId() {
                this.$http.get("auth/user/" + this.$store.state.user.userId + '/songs')
                    .then(response => {
                        this.songs = response.data;
                        this.mapSongs(this.songs)
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
            mapSongs(songs) {
                let newSongs = songs.map(function(e) {
                    return {
                        title: e.title,
                        artist: 'Silent Siren',
                        src: process.env.VUE_APP_API_URL + 'auth/songs/' +e.id,
                        pic: 'http://placekitten.com/200/200'
                    }
                });

                for (let i = 0; i < newSongs.length; i++) {
                    this.list.push(newSongs[i])
                }
            },
        },
        components: {
            Aplayer
        }
    };
</script>
