<template>
  <div class="mt-24 grid grid-cols-1 md:grid-cols-2">
    <div class="flex justify-between mx-20">
      <div class="border">
        <div
          v-for="(item, index) in product.moreInfo"
          :key="index"
          class="
            cursor-pointer
            p-3
            border-b-2
            hover:shadow-xl
            hover:border-blue-300
          "
          @mouseover="imagePath = item"
        >
          <img :src="path + '/' + item" alt="" class="h-36 mx-auto" />
        </div>
      </div>
      <div class="mx-auto">
        <img :src="path + '/' + imagePath" alt="" class="max-h-96" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import paytmServices from "../../Services/paytmServices";
import { hostServer } from "../../Services/paytmServices";
export default {
  data() {
    return {
      imagePath: "",
      path: hostServer,
      Spec: [],
      product: {
        moreInfo: [],
      },
    };
  },
  created() {
    // console.log(this.$route.params.pid);
    paytmServices
      .getProductDetailsFromId(this.$route.params.pid)
      .then((res) => {
        console.log(res.data);

        this.product = res.data;
        this.Spec = res.data.Spec.split(",");
        this.imagePath = res.data.moreInfo[0];
      });
  },
};
</script>

<style>
</style>