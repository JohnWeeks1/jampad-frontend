<template>
    <div>
        <div class="bg-gray-900 rounded-lg p-5">
            <p class="text-gray-100">
                About the artist
            </p>
            <p class="text-md md:text-lg text-gray-600 leading-normal">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileAboutSection",
        data() {
            return {
                description: null
            }
        },
        mounted() {
            this.description = this.getDescription();
        },
        methods: {
            getDescription() {
                return this.$store.getters['user/getDescription'];
            },
        },
    }
</script>
