<template>
  <div class="flex justify-center items-center">
    <div class="p-10 xs:w-full lg:w-2/5">
      <VueSlickCarousel :arrows="true" :dots="true">
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view_item/723817/1620730189617.jpg?imwidth=758&impolicy=hq_80"
          alt=""
        />
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view_item/731438/1617101551687.png?imwidth=758&impolicy=hq_80"
          alt=""
        />
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view_item/741754/1613724842057.jpg?imwidth=758&impolicy=hq_80"
          alt=""
        />
        <img
          src="https://assetscdn1.paytm.com/images/catalog/view_item/822802/1622451986651.jpg?imwidth=758&impolicy=hq_80"
          alt=""
        />
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
};
</script>

<style>
button.slick-prev:before,
button.slick-next:before {
  color: black;
  font-size: 1.5rem;
}
</style>