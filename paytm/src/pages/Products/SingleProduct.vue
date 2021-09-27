<template>
  <div>
    <button @click="$router.back()">
      <i class="fas fa-arrow-left text-xl xs:w-12 sm:w-32"></i>
    </button>
    <div class="mt-4 grid grid-cols-1 md:grid-cols-2">
      <div class="flex justify-between xs:mx-2 sm:mx-20">
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
        <div class="m-auto">
          <img :src="path + '/' + imagePath" alt="" class="max-h-96" />
        </div>
      </div>
      <div class="xs:p-2 sm:p-10">
        <div class="">
          <h1 class="text-gray-600 font-bold text-xl sm:text-4xl">
            {{ product.ProductName }}
          </h1>
          <div class="space-x-5 xs:text-lg sm:text-3xl xs:my-1 sm:my-3">
            <span v-if="product.discount > 0"
              ><del>{{ product.ProductPrice }}</del>
              <i class="fas fa-rupee-sign align-middle"></i>
            </span>
            <span
              >{{ discount }} <i class="fas fa-rupee-sign align-middle"> </i>
            </span>
            <span class="text-green-500" v-if="product.discount > 0"
              >{{ product.discount }} % off</span
            >
          </div>
          <div class="xs:my-1 sm:my-3">
            <h5
              class="w-24 text-center p-1 rounded-full text-white font-semibold"
              style="background-color: #00baf2"
            >
              <span> {{ product.Rating }} /5 </span><i class="far fa-star"></i>
            </h5>
          </div>
          <div class="xs:my-1 sm:my-3">
            <h5
              class="xs:text-lg sm:text-2xl xs:my-1 sm:my-3"
              v-if="
                $route.params.id == 'mobiles' ||
                $route.params.id == 'electronics'
              "
            >
              Product HightLights
            </h5>
            <h5 class="xs:text-lg sm:text-2xl" v-else>Available Size</h5>

            <ul class="list-disc inside ml-4">
              <li v-for="item in Spec" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
          <p
            v-if="product.Qty < 10 && product.Qty > 0"
            class="
              font-semibold
              text-red-500
              rounded-r
              bg-gray-100
              animate-pulse
            "
          >
            Only {{ product.Qty }} left
          </p>
          <div class="xs:my-1 sm:my-3">
            <button
              class="p-3 text-white font-semibold rounded"
              style="background-color: rgb(229, 18, 20)"
              v-if="product.Qty == 0"
              :disabled="true"
            >
              Out of stock
            </button>
            <button
              v-else
              class="
                p-3
                tracking-wider
                rounded
                text-white
                font-semibold
                focus:ring-2 focus:ring-blue-300
              "
              @click="handleBuyNow"
              style="background-color: rgb(239, 78, 40)"
            >
              Buy now
              {{ discount }}<i class="fas fa-rupee-sign align-middle ml-1"> </i>
            </button>
          </div>
        </div>
      </div>
    </div>
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
  computed: {
    discount: function () {
      let d = parseInt(
        ((100 - this.product.discount) * this.product.ProductPrice) / 100
      );
      return d;
    },
  },
  created() {
    // console.log(this.$route.params.pid);
    paytmServices
      .getProductDetailsFromId(this.$route.params.pid)
      .then((res) => {
        this.product = res.data;
        this.Spec = res.data.Spec.split(",");
        this.imagePath = res.data.moreInfo[0];
      });
  },
  methods: {
    handleBuyNow() {
      if (this.$store.getters.getUserID != "") {
        this.$router.push(`/payment/${this.product._id}`);
      } else {
        this.$router.push("/signin");
      }
    },
  },
};
</script>

<style>
</style>