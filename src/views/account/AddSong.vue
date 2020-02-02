<template>
    <div>
        <top-navigation/>
        <div class="container mx-auto w-full max-w-lg pt-20 pb-20">
            <h2 class="text-gray-100 text-xl">Add new song</h2>
            <div class="bg-green-500 w-full h-1 mb-4"></div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                           for="title">
                        Title
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text" v-model="title" id="title" name="title">
                    <span v-if="errors.title" class="text-sm text-red-500">
                        {{ errors.title[0] }}
                    </span>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                        Song
                    </label>
                    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                    <br>
                    <span v-if="errors.song" class="text-sm text-red-500">
                        {{ errors.song[0] }}
                    </span>
                </div>
            </div>
            <div class="flex flex-wrap mt-8 -mx-3 mb-6">
                <div class="w-full px-3">
                    <button class="float-right bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    @click="addSong()">
                        Add
                    </button>
                </div>
            </div>
        </div>
        <footer-component/>
    </div>
</template>

<script>
    import FooterComponent from "@/components/structure/Footer";
    import TopNavigation from "@/components/structure/TopNavigation";

    export default {
        name: "AddSong",
        data() {
            return {
                errors: [],
                title: '',
                song: null,
            }
        },
        props: ['topNavigation'],
        methods: {
            handleFileUpload(){
                this.song = this.$refs.file.files[0];
            },
            addSong() {
                let form = new FormData();
                form.append('song', this.song);
                form.append('title', this.title);
                this.$http.post("auth/add-song/" + this.$store.state.user.userId, form,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(() => {
                        this.$router.push({ name: 'Profile'});
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                        console.log(error);
                    })
            }
        },
        components: {
            FooterComponent,
            TopNavigation
        }
    };
</script>
