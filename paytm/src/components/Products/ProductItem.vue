<template>
  <div class="">
    <div className="mx-auto overflow-hidden">
      <img :src="img + '/' + item.image" alt="" class="h-60 mx-auto" />
    </div>
    <h5 class="xs:text-sm sm:text-xl font-normal mx-3">
      {{ item.ProductName }}
    </h5>
    <div class="flex justify-evenly">
      <h5 class="xs:text-sm sm:text-base md:text-xl" v-if="item.discount > 0">
        <del class="xs:text-lg font-semibold">
          {{ item.ProductPrice }}
        </del>
        <i class="fas fa-rupee-sign align-middle"></i>
      </h5>
      <h5 class="text-black xs:text-sm sm:text-base md:text-xl">
        {{ discount }}
        <i class="fas fa-rupee-sign align-middle"></i>
      </h5>
      <h5
        class="text-green-600 xs:text-sm sm:text-base md:text-xl"
        v-if="item.discount > 0"
      >
        {{ item.discount }} % off
      </h5>
    </div>
    <div class="my-2 mx-5">
      <h5
        class="w-24 text-center p-1 rounded-full text-white font-semibold"
        style="background-color: #00baf2"
      >
        <span> {{ item.Rating }} /5 </span><i class="far fa-star"></i>
      </h5>
    </div>
    <p
      v-if="item.Qty < 10 && item.Qty > 0"
      class="
        absolute
        top-0
        left-0
        p-2
        font-semibold
        text-red-500
        rounded-r
        bg-gray-100
        animate-pulse
      "
    >
      Only {{ item.Qty }} left
    </p>
    <p
      class="
        absolute
        top-0
        right-0
        pl-3
        pt-2
        pb-2
        pr-2
        text-white
        font-semibold
        rounded-l-full
      "
      style="background-color: #00baf2"
      v-if="item.discount > 0"
    >
      {{ item.discount }} % off
    </p>
  </div>
</template>

<script>
import { hostServer } from "../../Services/paytmServices";
export default {
  props: ["item"],
  data() {
    return {
      img: hostServer,
    };
  },
  computed: {
    discount: function () {
      let d = parseInt(
        ((100 - this.item.discount) * this.item.ProductPrice) / 100
      );

      return d;
    },
  },
};
</script>

<style>
</style>