<template>
    <div>
        <transition name="fade" mode="out-in">
            <div>
                <top-navigation/>
                <router-view/>
                <footer-component/>
            </div>
        </transition>
    </div>
</template>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>

<script>
    import TopNavigation from "@/components/structure/TopNavigation";
    import FooterComponent from "@/components/structure/Footer";

    export default {
        name: "Account",
        components: {
            TopNavigation,
            FooterComponent
        }
    };
</script>

