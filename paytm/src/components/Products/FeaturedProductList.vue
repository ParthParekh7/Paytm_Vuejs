<template>
  <div class="container mx-auto">
    <h1>Featured List of {{ path }}</h1>
  </div>
</template>

<script>
export default {
  props: ["item", "path", "title", "imagePath"],
  data() {
    return {};
  },
};
</script>

<style>
</style>