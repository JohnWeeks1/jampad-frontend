<template>
    <div>
        <top-navigation></top-navigation>
        <div class="container mx-auto w-full max-w-lg pt-20 pb-20">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Profile Picture
                    </label>
                    <cropper
                            classname="cropper"
                            :src="img"
                            :stencilProps="{
                              aspectRatio: 10/8
                            }"
                            @change="change"
                    ></cropper>
                </div>
            </div>
            <div class="flex flex-wrap mt-8 -mx-3 mb-6">
                <div class="w-full px-3">
                    <button class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="updateProfilePic">
                        Update
                    </button>
                </div>
            </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import TopNavigation from "@/components/structure/TopNavigation";
    import FooterComponent from "@/components/structure/Footer";
    import { Cropper } from 'vue-advanced-cropper'

    export default {
        name: "UploadProfilePic",
        data() {
            return {
                img: 'https://images.pexels.com/photos/226746/pexels-photo-226746.jpeg',
            }
        },
        methods: {
            change({coordinates, canvas}) {
                console.log(coordinates, canvas)
            },
            updateProfilePic() {
                let token = this.$store.state.user.token;

                if (token) {
                    this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                }
                this.$http.post(process.env.VUE_APP_API_URL+'auth/user/'+this.$store.state.user.userId, {
                        image: this.imgDataUrl,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        console.log(response);
                        this.$store.dispatch('user/fetchUser');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
        },
        components: {
            Cropper,
            TopNavigation,
            FooterComponent
        },
    };
</script>
