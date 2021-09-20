<template>
  <div>
    <Links />
    <!-- <Slider /> -->

    <FeaturedProductList
      :item="featuredmobiles"
      :path="'/product/mobiles'"
      :title="'Mobile Bestsellers'"
      :imagePath="'https://assetscdn1.paytm.com/images/catalog/view/301625/1594810506111.png'"
    />
    <FeaturedProductList
      :item="featuredElectronics"
      :path="'/product/fashion'"
      :title="'Fashion Bestsellers'"
      :imagePath="'https://assetscdn1.paytm.com/images/catalog/view/301030/1592307842242.png'"
    />
    <FeaturedProductList
      :item="featuredFashion"
      :path="'/product/electronics'"
      :title="'Electronics Bestsellers'"
      :imagePath="'https://assetscdn1.paytm.com/images/catalog/view/300930/1591791420896.jpg'"
    />
  </div>
</template>

<script>
import PaytmServices from "../Services/paytmServices";
// import Slider from "../components/Slider.vue";
import Links from "../components/dummy/Links.vue";
import FeaturedProductList from "../components/Products/FeaturedProductList.vue";
export default {
  data() {
    return {
      featuredmobiles: [],
      featuredElectronics: [],
      featuredFashion: [],
    };
  },
  created() {
    PaytmServices.getHome().then((res) => console.log(res.data));
    PaytmServices.getProduct()
      .then((res) => {
        const data = res.data;
        const tempData = data.map((item) => {
          let ProductCategory = item.ProductCategory.CategoryName;
          let {
            _id,
            ProductName,
            ProductPrice,
            ProductType,
            featured,
            Rating,
            moreInfo,
            Qty,
            image,
            Spec,
          } = item;
          let productData = {
            ProductName,
            ProductPrice,
            ProductType,
            featured,
            Rating,
            moreInfo,
            Qty,
            image,
            Spec,
            _id,
            ProductCategory,
          };
          return productData;
        });
        this.featuredmobiles = tempData.filter((item) => {
          return item.featured === true && item.ProductCategory === "mobiles";
        });
        this.featuredFashion = tempData.filter((item) => {
          return item.featured === true && item.ProductCategory === "fashion";
        });
        this.featuredElectronics = tempData.filter((item) => {
          return (
            item.featured === true && item.ProductCategory === "electronics"
          );
        });
      })
      .catch((error) => console.log(error));
  },
  components: {
    // Slider,
    Links,
    FeaturedProductList,
  },
};
</script>

<style>
</style>