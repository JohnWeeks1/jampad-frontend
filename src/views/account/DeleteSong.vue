<template>
    <div>
        <div class="container mx-auto w-full max-w-4xl pt-20 pb-20">
            <h2 class="text-gray-100 text-xl">Delete songs</h2>
            <div class="bg-red-500 w-full h-1 mb-4"></div>
            <div class="bg-gray-900 text-white shadow-md rounded px-8 pt-6 pb-8">
                <div class="flex flex-wrap" v-for="(song, index) in songs">
                    <div class="w-3/4 mr-auto mt-2 text-lg p-1">
                        {{ ++index }}. {{song.title}}
                    </div>
                    <div class="w-1/4 ml-auto p-1">
                        <button @click="deleteSong(song)" class="float-right bg-transparent hover:bg-red-500 text-gray-100 font-semibold hover:text-white
                            py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "DeleteSong",
        data() {
            return {
                songs: null,
            }
        },
        mounted() {
            this.getSongsByUserId();
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
            deleteSong(song) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                        this.$http.delete("auth/song/" + song.id)
                            .then(() => {
                                this.$router.push({name: 'Profile'});
                            })
                            .catch(error => {
                                console.error(error);
                            })
                    }
                })
            }
        },
    };
</script>
