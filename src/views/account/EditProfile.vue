<template>
    <div>
        <top-navigation></top-navigation>
        {{imgDataUrl}}
        <div class="container mx-auto w-full max-w-lg pt-20 pb-20">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           for="grid-first-name">
                        First Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3
                        leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        v-model="firstName">
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           for="grid-last-name">
                        Last Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        v-model="lastName">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           for="description">
                        Profile Picture
                    </label>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="toggleShow">Upload Profile Picture</button>
                    <my-upload field="img"
                               @crop-success="cropSuccess"
                               @crop-upload-success="cropUploadSuccess"
                               @crop-upload-fail="cropUploadFail"
                               v-model="show"
                               :width="300"
                               :height="300"
                               lang-type="en"
                               img-format="png"></my-upload>
                    <div v-if="imgDataUrl !== ''">
                        <img class="rounded py-4" :src="imgDataUrl">
                    </div>

                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           for="description">
                        Description
                    </label>
                    <textarea
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="" id="description" cols="30" rows="10" v-model="description" v-text="description">
                    </textarea>
                </div>
            </div>
            <div class="flex flex-wrap mt-8 -mx-3 mb-6">
                <div class="w-full px-3">
                    <button class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="updateProfile">
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
    // import {HTTP} from "@/http-common";
    import myUpload from 'vue-image-crop-upload/upload-2.vue';

    export default {
        name: "EditProfile",
        data() {
            return {
                firstName: null,
                lastName: null,
                description: null,
                show: false,
                imgDataUrl: '' // the datebase64 url of created image
            }
        },
        mounted() {
            this.firstName = this.getFirstName();
            this.lastName = this.getLastName();
            this.description = this.getDescription();
        },
        methods: {
            toggleShow() {
                this.show = !this.show;
            },
            getFirstName() {
                return this.$store.getters['user/getFirstName']
            },
            getLastName() {
                return this.$store.getters['user/getLastName']
            },
            getDescription() {
                return this.$store.getters['user/getDescription']
            },
            updateProfile() {
                let token = this.$store.state.user.token;

                if (token) {
                    this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                }
                this.$http.patch(process.env.VUE_APP_API_URL+'auth/user/'+this.$store.state.user.userId, {
                        first_name: this.firstName,
                        last_name: this.lastName,
                        description: this.description,
                        image: this.imgDataUrl
                    })
                    .then(response => {
                        console.log(response);
                        this.$store.dispatch('user/fetchUser');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
            /**
             * crop success
             *
             * [param] imgDataUrl
             * [param] field
             */
            cropSuccess(imgDataUrl){
                console.log('-------- crop success --------');
                this.imgDataUrl = imgDataUrl;
            },
            /**
             * upload success
             *
             * [param] jsonData   server api return data, already json encode
             * [param] field
             */
            cropUploadSuccess(jsonData, field){
                console.log('-------- upload success --------');
                console.log(jsonData);
                console.log('field: ' + field);
            },
            /**
             * upload fail
             *
             * [param] status    server api return error status, like 500
             * [param] field
             */
            cropUploadFail(status, field){
                console.log('-------- upload fail --------');
                console.log(status);
                console.log('field: ' + field);
            },
        },
        components: {
            TopNavigation,
            FooterComponent,
            myUpload
        },
    };
</script>
