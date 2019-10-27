<template>
  <div>
    <top-navigation></top-navigation>
    <content-section></content-section>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ContentSection from "@/components/partials/ContentSection";
import TopNavigation from "@/components/sturucture/TopNavigation";
import FooterComponent from "@/components/sturucture/Footer";

export default {
  name: "Home",
  components: {
    TopNavigation,
    FooterComponent,
    ContentSection
  }
};
</script>
