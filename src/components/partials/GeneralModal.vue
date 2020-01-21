<template>
  <div class="fixed w-full h-full top-0 left-0 flex justify-center">
    <div class="bg-black absolute w-full h-full opacity-75"></div>
    <!--Modal-->
    <div class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div class="bg-black absolute w-full h-full opacity-75"></div>

      <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Simple Modal!</p>
          </div>

          <!--Body-->
          <p>Modal content can go here</p>

          <!--Footer-->
          <div class="flex justify-end pt-2">
            <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
            <button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralModal"
};
</script>
