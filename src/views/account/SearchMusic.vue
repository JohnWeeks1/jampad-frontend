<template>
    <div>
        <top-navigation></top-navigation>
            <div class="container max-w-4xl mx-auto pb-20">
                <div>
                    <carousel-3d :controls-visible="true" :clickable="true" :height="330" :width="330" :border="1">
                        <slide v-for="(slide, i) in slides" :index="i">
                            <figure @click="putSongInPlayer(slide)">
                                <img src="@/assets/images/site/metal-cover.png">
                                <figcaption class="text-center">
                                    {{slide.title}}
                                </figcaption>
                            </figure>
                        </slide>
                    </carousel-3d>
                    <div v-if="song.length > 0">
                        <aplayer
                            :music="{
                                title: song[0].title,
                                artist: 'Test',
                                src: process.env.VUE_APP_API_URL + 'auth/song/' + song[0].id,
                                pic: ''
                            }"
                        />
                    </div>
                </div>
            </div>
        <footer-component></footer-component>
    </div>
</template>

<style scoped>
    .carousel-3d-container figure {
        margin:0;
    }

    .carousel-3d-container figcaption {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        bottom: 0;
        padding: 15px;
        font-size: 12px;
        min-width: 100%;
        box-sizing: border-box;
    }
</style>

<script>
    import FooterComponent from "@/components/structure/Footer";
    import TopNavigation from "@/components/structure/TopNavigation";
    import { Carousel3d, Slide } from 'vue-carousel-3d';
    import Aplayer from 'vue-aplayer';

    export default {
        name: "SearchMusic",
        data() {
            return {
                slides: [],
                song: [],
                path: process.env.VUE_APP_API_URL + 'auth/song/4'
            }
        },
        beforeMount() {
            this.getSongs();
        },
        methods: {
            getSongs() {
                this.$http.get("auth/songs/")
                    .then(response => {
                        this.mapSongs(response.data)
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
            mapSongs(songs) {
                let newSongs = songs.map(function(e) {
                    return {
                        title: e.title,
                        src: process.env.VUE_APP_API_URL + 'auth/song/' +e.id,
                    }
                });

                for (let i = 0; i < newSongs.length; i++) {
                    this.slides.push(newSongs[i])
                }
            },
            putSongInPlayer(slide) {
                this.song.push(slide)
            }
        },

        components: {
            TopNavigation,
            FooterComponent,
            Carousel3d,
            Slide,
            Aplayer
        },
    };
</script>
