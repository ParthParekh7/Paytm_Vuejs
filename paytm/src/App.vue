<template>
  <div>
    <Navbar />
    <div class="mt-20">
      <router-view></router-view>
    </div>
    <Services />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar&Footer/Navbar.vue";
import Footer from "./components/Navbar&Footer/Footer.vue";
import Services from "./components/dummy/Services.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Services,
  },
};
</script>

<style>
</style>
