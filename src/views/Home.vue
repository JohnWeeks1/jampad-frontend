<template>
  <div>
    <top-navigation></top-navigation>
    <hero></hero>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Hero from "@/components/partials/Hero";
import TopNavigation from "@/components/structure/TopNavigation";
import FooterComponent from "@/components/structure/Footer";

export default {
  name: "Home",
  components: {
    TopNavigation,
    FooterComponent,
    Hero
  }
};
</script>
