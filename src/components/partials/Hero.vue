<template>
    <div class="heroImage py-48 px-6 bg-cover bg-no-repeat bg-center">
        <div class="container max-w-4xl mx-auto text-center">
            <h1 class="text-xl leading-tight md:text-3xl text-center text-gray-100 mb-3">
                JamPad for the modern musician
            </h1>
            <p class="text-md md:text-lg text-center text-white">
                Login or register now and join other like minded people
            </p>
            <div class="mt-6">
                <router-link class="text-center bg-green-500 text-white border border-green-500 font-bold py-3 px-5 rounded w-full"
                             :to="{ name: 'Register' }">
                    Register
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hero"
    };
</script>

<style scoped>
    .heroImage {
        background-image: url("../../assets/images/site/HeroImg.jpg");
    }
</style>
