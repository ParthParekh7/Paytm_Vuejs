<template>
  <div class="hidden md:flex justify-center space-x-10">
    <div class="my-4 max-w-7xl">
      <VueSlickCarousel :arrows="true" :dots="true">
        <div class="max-w-full h-96">
          <img
            src="https://media.istockphoto.com/photos/satisfied-with-her-shopping-picture-id532392166?b=1&k=20&m=532392166&s=170667a&w=0&h=OqvOBgAIQsR3CCFRwldQIDl96Eywx7cfCfpVSmwcaV4="
            alt="images 1"
          />
        </div>
        <div class="max-w-md h-96">
          <img
            src="https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?b=1&k=20&m=1254508881&s=170667a&w=0&h=e8irxc-knpSghyK9ZI19uOOHv0QDEWscs2O4BwGRcLA="
            alt="images 1"
          />
        </div>
        <div class="max-w-md h-96">
          <img
            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>

        <!-- <div><img src="../assets/s4.webp" alt="images 1" /></div> -->
        <!-- <div> <img :src="require(`~/assets/s1.png`)" /></div> -->
      </VueSlickCarousel>
    </div>
    <div class="my-4">
      <!-- <img
        className="img-fluid"
        alt="Brand Voucher"
        role="presentation"
        src="https://assetscdn1.paytm.com/images/catalog/view_item/713640/1610957016967.jpg"
      />
      <img
        alt="Brand Voucher"
        role="presentation"
        className="img-fluid"
        src="https://assetscdn1.paytm.com/images/catalog/view_item/713641/1610956907248.jpg"
      /> -->
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
</style>