<template>
  <div>
      <top-navigation></top-navigation>
        <div class="max-w-4xl mx-auto pb-20 pt-20">
          <div class="w-full">
            <div class="flex flex-wrap font-bold">
                <div class="w-1/4 p-2">
                    <router-link :to="{ name: 'Profile' }">
                        <div class="max-w-sm overflow-hidden hover:bg-gray-900 rounded">
                          <img class="w-full p-2 hover:" src="@/assets/images/site/account/ProfileWhite.png">
                          <div class="px-4 py-2">
                            <div class="text-white text-lg text-center">Profile</div>
                          </div>
                        </div>
                    </router-link>
                </div>
                <div class="w-1/4 p-2">
                    <router-link :to="{ name: 'SearchMusic' }">
                        <div class="max-w-sm overflow-hidden hover:bg-gray-900 rounded">
                            <img  class="w-full p-2" src="@/assets/images/site/account/MusicWhite.png">
                            <div class="px-4 py-2">
                                <div class="text-white text-lg text-center">Music</div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
          </div>
        </div>
      <footer-component></footer-component>
  </div>
</template>

<script>
    import FooterComponent from "@/components/structure/Footer";
    import TopNavigation from "@/components/structure/TopNavigation";

export default {
  name: "About",
    components: {
        FooterComponent,
        TopNavigation
    }
};
</script>
