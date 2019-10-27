<template>
  <div>
    <top-navigation></top-navigation>
    <div class="w-full py-24 px-6 bg-blue-100 relative z-10">
      <div
        class="container max-w-4xl mx-auto text-left flex items-center flex-wrap"
      >
        <div class="hidden md:block w-1/3">
          <img
            src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800"
            class="w-full h-auto shadow-lg"
          />
        </div>
        <div class="w-full pl-4 md:w-2/3 md:pr-6">
          <h1 class="text-2xl md:text-4xl text-gray-900 mb-3">Profile name</h1>
          <p class="text-md md:text-lg text-gray-600 leading-normal">
            This is a description section
          </p>
          <a
            href="/register"
            class="mt-6 inline-block bg-white text-black no-underline px-4 py-3 shadow-lg"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import TopNavigation from "@/components/sturucture/TopNavigation";
import FooterComponent from "@/components/sturucture/Footer";

export default {
  name: "Profile",
  components: {
    TopNavigation,
    FooterComponent
  }
};
</script>
