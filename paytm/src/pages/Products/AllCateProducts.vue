<template>
  <div class="mt-24">
    <div>
      <button @click="$router.back()">
        <i class="fas fa-arrow-left text-xl xs:w-12 sm:w-32"></i>
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="md:mx-auto md:space-x-3 p-2">
        <label for="" class="text-xl font-semibold" style="color: #00baf2"
          >Search by name</label
        >
        <input
          type="text"
          name="search"
          v-model="search"
          placeholder="Search"
          @input="filter"
          class="
            border
            outline-none
            border-gray-300
            xs:w-full
            md:w-96
            focus:border-blue-300
            p-2
          "
        />
      </div>
      <div class="md:space-x-3 p-2">
        <label for="" class="text-xl font-semibold" style="color: #00baf2"
          >Category</label
        >
        <select
          name="selectedCategory"
          id=""
          v-model="selectedCategory"
          @input="filter"
          class="
            border
            p-2
            border-gray-300
            w-96
            focus:border-blue-300
            outline-none
            xs:w-full
            md:w-96
          "
        >
          <option
            v-for="(item, index) in allCategories"
            :key="index"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
    </div>

    <div class="sm:mx-10">
      <div
        v-if="filterItems.length === 0"
        class="xs:text-lg sm:text-2xl text-center text-red-500 mt-3"
      >
        Product Not Found
      </div>
      <template v-else>
        <div
          class="text-center text-2xl p-3 border"
          style="background-color: #17a2b8"
        >
          <span
            class="uppercase text-white font-semibold"
            style="border-bottom: 1px solid white"
          >
            {{ selectedCategory }}</span
          >
        </div>
        <div
          class="
            grid
            xs:grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-4
          "
        >
          <div
            v-for="(item, index) in filterItems"
            :key="index"
            class="border hover:shadow-2xl p-3 relative mt-2"
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
      </template>
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
      selectedCategory: "All Products",
      allCategories: [],
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
        this.items = tempData;
        this.filterItems = tempData;
        let cat = new Set();
        cat.add("All Products");
        for (let product in tempData) {
          cat.add(tempData[product]["ProductCategory"]);
        }
        cat = [...cat];
        this.allCategories = cat;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    filter: function (event) {
      const name = event.target.name;
      const value = event.target.value;

      let tempData = [...this.items];
      if (name == "search") {
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
        this.selectedCategory = "All Products";
      }
      if (name == "selectedCategory") {
        this.selectedCategory = value;
        this.search = "";
        if (value !== "All Products") {
          tempData = tempData.filter((item) => item.ProductCategory === value);
        }
      }

      this.filterItems = tempData;
    },
  },
};
</script>

<style>
</style>