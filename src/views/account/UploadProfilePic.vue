<template>
    <div>
        <top-navigation></top-navigation>
        <div class="container mx-auto w-full max-w-lg pt-20 pb-20">
            <div class="flex flex-wrap mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Profile Picture
                    </label>
                    <input class="py-4" type="file" v-on:change="getUploadedImage">
                    <Cropper
                        :src="uploadedImage"
                        ref="cropper"
                        :stencilProps="{
                            minAspectRatio: 8/8,
                            maxAspectRatio: 8/8
                        }"
                    />
                    <div class="py-4" v-if="uploadedImage">
                        <button class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="crop">
                            Crop
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap mb-4" v-if="image">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Cropped Picture
                    </label>
                    <img :src="image" alt="">
                </div>
            </div>
            <div class="flex flex-wrap mb-6" v-if="image">
                <div class="w-full px-3">
                    <button class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="updateProfilePic">
                        Save Cropped Image
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
                coordinates: {
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                },
                uploadedImage: null,
                image: null
            }
        },
        methods: {
            getUploadedImage(e) {
                const file = e.target.files[0];
                this.uploadedImage = URL.createObjectURL(file);
            },
            crop() {
                const {coordinates, canvas} = this.$refs.cropper.getResult();
                this.coordinates = coordinates;
                // You able to do different manipulations at a canvas
                // but there we just get a cropped image
                this.image = canvas.toDataURL();
            },
            updateProfilePic() {
                let token = this.$store.state.user.token;

                this.$http.post(process.env.VUE_APP_API_URL+'auth/user/'+this.$store.state.user.userId, {
                        image: this.image,
                        headers: {
                            'Authorization': 'Bearer ' + token,
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
