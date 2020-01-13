<template>
    <div>
        <audio v-if="song" controls>
            <source :src="song" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>
    export default {
        name: "SongPlayer",
        data() {
            return {
                song: process.env.VUE_APP_API_URL + 'auth/song/' + this.data.id
            }
        },
        props: ['data'],
        // `mounted() {
        //     this.getSong();
        // },
        // methods: {
        //     getSong() {
        //         this.$http.get('auth/song/' + this.data.id)
        //             .then(() => {
        //                 this.song = process.env.VUE_APP_API_URL + 'auth/song/' + this.data.id;
        //             })
        //             .catch(error => {
        //                 console.error(error);
        //             });
        //     },
        // },`
    };
</script>
