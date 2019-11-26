<template>
  <div>
    <footer class="w-full bg-white border-t">
      <div
        class="container mx-auto max-w-4xl h-full
        flex flex-wrap md:flex-no-wrap justify-between
        items-start text-sm p-6 pt-8 pb-4"
      >
        <div class="mb-4">
          <h4 class="mb-4">Quick links</h4>
          <a href="#" class="block text-gray-900 mb-2">Home</a>
          <a href="#" class="block text-gray-900 mb-2">Profile</a>
        </div>
        <div class="mb-4">
          <h4 class="mb-4">Categories</h4>
          <a href="#" class="block text-gray-900 mb-2">Category 1</a>
          <a href="#" class="block text-gray-900 mb-2">Category 2</a>
        </div>
        <div class="mb-4">
          <h4 class="mb-4">About Our Company</h4>

          <p class="mb-4 leading-normal">
            123 Main Street<br />
            London<br />
            SW1 SW1
          </p>

          <p class="text-sm">079 6293 6068</p>
        </div>
      </div>
    </footer>
    <!-- /footer -->

    <!-- footer -->
    <footer class="w-full bg-black text-white px-6 border-t">
      <div
        class="container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm"
      >
        &copy;2019 Your Company. All rights reserved.
        <div class="pt-4 md:p-0 text-center md:text-right text-xs">
          <a href="#" class="no-underline hover:underline">Privacy Policy</a>
          <a href="#" class="no-underline hover:underline ml-4"
            >Terms &amp; Conditions</a
          >
          <a href="#" class="no-underline hover:underline ml-4">Contact Us</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
