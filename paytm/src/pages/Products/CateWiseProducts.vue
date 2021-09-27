<template>
  <div>
    <button @click="$router.back()">
      <i class="fas fa-arrow-left text-xl xs:w-12 sm:w-32"></i>
    </button>
    <div class="grid grid-col-1 md:grid-cols-4">
      <div class="p-5 md:col-span-1">
        <h1 class="xs:text-3xl sm:text-5xl text-gray-600">Sort By</h1>
        <div class="flex-col my-2">
          <label for="search" class="xs:text-xl sm:text-2xl text-gray-500"
            >Search by name</label
          >
          <input
            type="text"
            name="search"
            v-model="search"
            @input="filter"
            class="
              border
              my-2
              border-gray-300
              w-full
              outline-none
              p-2
              rounded-lg
            "
            placeholder="search"
          />
        </div>
        <div class="flex-col my-2">
          <div class="flex justify-between">
            <label for="search" class="xs:text-xl sm:text-2xl text-gray-500"
              >Price</label
            >
            <label for="">{{ price }}</label>
          </div>
          <input
            type="range"
            name="price"
            value="0"
            :min="min"
            :max="max"
            v-model="price"
            @input="filter"
            class="
              border
              my-2
              border-gray-300
              w-full
              outline-none
              p-2
              rounded-lg
            "
          />
        </div>
      </div>
      <div class="md:col-span-3">
        <div
          class="
            grid
            xs:grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            sm:p-3
            sm:gap-4
          "
        >
          <div
            class="mx-auto text-2xl text-red-500"
            v-if="filterItems.length === 0"
          >
            Not available
          </div>
          <div
            class="border hover:shadow-2xl p-3 relative"
            v-for="item in filterItems"
            :key="item.ProductName"
          >
            <ProductItem
              :item="item"
              class="cursor-pointer"
              @click.native="
                $router.push(
                  '/product/' + item.ProductCategory + '/' + item._id
                )
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "../../components/Products/ProductItem.vue";
import paytmServices from "../../Services/paytmServices";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      items: [],
      filterItems: [],
      search: "",
      min: "",
      max: "",
      price: "",
    };
  },
  created() {
    paytmServices
      .getProduct()
      .then((res) => {
        const tempData = res.data.map((item) => {
          item.ProductCategory = item.ProductCategory.CategoryName;
          return item;
        });
        this.items = tempData.filter((item) => {
          return item.ProductCategory == this.$route.params.id;
        });
        this.filterItems = this.items;
        let maxPrice = Math.max(...this.items.map((item) => item.ProductPrice));

        let minPrice = Math.min(...this.items.map((item) => item.ProductPrice));
        this.max = maxPrice;
        this.min = minPrice;
        this.price = maxPrice;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    filter: function (event) {
      const name = event.target.name;
      const value = event.target.value;
      let tempData = [...this.items];
      if (name === "search") {
        if (value.length > 0) {
          tempData = tempData.filter((item) => {
            let tempSearch = value.toLowerCase();
            let tempName = item.ProductName.toLowerCase().slice(
              0,
              value.length
            );

            if (tempSearch === tempName) {
              return item;
            }
          });
        }
        this.search = value;
        this.price = this.max;
      }
      if (name === "price") {
        //filter price
        this.search = "";
        tempData = tempData.filter((item) => item.ProductPrice <= value);
        // setValues({ ...values, price: value, category: "" });
      }
      this.filterItems = tempData;
    },
  },
};
</script>

<style>
</style>