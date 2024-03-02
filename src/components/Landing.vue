<template>
  <div class="container">
    <Header />
    <Gallery />
    <About />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Gallery from './Gallery.vue';
import Header from './Header.vue';
import About from './About.vue';
import Footer from './Footer.vue';
</script>

<style lang="scss">
html,
body {
  overflow-x: hidden;
}
</style>