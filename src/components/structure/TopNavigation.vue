<template>
    <nav class="w-full px-6 bg-black-200 shadow-lg relative z-20">
        <div class="container mx-auto max-w-4xl h-16 flex justify-between text-xs md:text-sm">
            <div class="h-full flex items-center">
                <router-link class="mr-4"
                             :to="{ name: 'Home' }">
                    <img class="h-24" src="@/assets/images/site/jampad-white.png" alt=""/>
                </router-link>
                <router-link :to="{ name: 'Home' }" class="text-gray-600 hover:text-black no-underline mr-4">
                    Home
                </router-link>
            </div>
<!--            <div class="pt-2">-->
<!--                <a href="#" class="block w-12 h-12 md:w-12 md:h-12 rounded-full border-2 overflow-hidden">-->
<!--                    <img src="https://images.unsplash.com/photo-1522322659370-3c98da30c99c?w=300"-->
<!--                         class="w-full h-full object-cover"/>-->
<!--                </a>-->
<!--            </div>-->
            <div class="h-full flex items-center">
                <full-screen-modal></full-screen-modal>
            </div>
        </div>
    </nav>
</template>

<script>
    import FullScreenModal from './FullScreenModal';

    export default {
        name: "TopNavigation",
        data() {
            return {
                menu: false
            };
        },
        components: {
            FullScreenModal
        }
    };
</script>
