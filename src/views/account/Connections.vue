<template>
    <div>
        <top-navigation></top-navigation>
            <div class="container max-w-4xl mx-auto pb-20">
                <div class="w-full">
                    <div class="flex flex-wrap font-bold text-gray-100">
                        <div class="w-1/5 p-2">

                            <div class="max-w-sm overflow-hidden bg-gray-900">
                                <img class="w-full" src="@/assets/images/site/metal-cover.png" >
                                <div class="px-4 py-2">
                                    <div class="text-md text-center">Name</div>
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
        name: "Connections",
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
