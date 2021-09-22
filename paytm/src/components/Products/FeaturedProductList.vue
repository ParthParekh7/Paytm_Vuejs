<template>
  <div class="xs:mx-0 md:mx-10 lg:mx-20 p-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-3 my-2">
        <img :src="imagePath" alt="logo" class="xs:h-8 sm:h-20" />
        <h1
          class="
            tracking-widest
            xs:text-xl
            sm:text-3xl
            font-serif
            text-gray-700
          "
        >
          {{ title }}
        </h1>
      </div>
      <div>
        <button
          class="
            xs:p-1
            xs:w-24
            sm:p-2
            rounded
            text-white
            font-semibold
            shadow
            bg-blue-900
            hover:bg-green-600
          "
          @click="$router.push(path)"
        >
          View All
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(item, index) in item"
        :key="index"
        class="border hover:shadow-2xl p-3 relative"
      >
        <ProductItem
          class="cursor-pointer"
          :item="item"
          @click.native="$router.push(path + '/' + item._id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  props: ["item", "path", "title", "imagePath"],

  components: {
    ProductItem,
  },
};
</script>
<style>
</style>