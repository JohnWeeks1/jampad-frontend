<template>
    <div class="heroImage w-full h-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10">
        <div class="container max-w-4xl mx-auto text-center">
            <h1
                class="text-xl leading-tight md:text-3xl text-center text-gray-100 mb-3"
            >
                JamPad for the modern musician
            </h1>
            <p class="text-md md:text-lg text-center text-white ">
                Login or register now and join other like minded people
            </p>
            <router-link class="mt-6 inline-block bg-white text-black no-underline px-4 py-3 shadow-lg"
                 :to="{ name: 'Register' }">
                Register
            </router-link>
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
