<template>
    <div>
        <top-navigation></top-navigation>
            <div class="container max-w-4xl mx-auto pb-20">
                <div>
                    <carousel-3d :controls-visible="true" :clickable="true" :height="330" :width="330" :border="1">
                        <slide v-for="(slide, i) in slides" :index="i">
                            <figure>
                                <router-link :to="{ name: 'Profile'}">
                                    <img src="@/assets/images/site/metal-cover.png">
                                </router-link>
                                <figcaption class="text-center">
                                    The sky is the limit only for those who aren't afraid to fly!
                                </figcaption>
                            </figure>
                        </slide>
                    </carousel-3d>
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

    export default {
        name: "SearchMusic",
        data() {
            return {
                slides: [1,2,3,4,5,6,7,8,9],
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
                this.$http.get('auth/songs')
                    .then(response => {
                        if (response.data !== null) {
                            this.songs = process.env.VUE_APP_API_URL + 'auth/songs';
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        },

        components: {
            TopNavigation,
            FooterComponent,
            Carousel3d,
            Slide
        },
    };
</script>
