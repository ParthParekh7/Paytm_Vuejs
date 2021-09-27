<template>
  <div>
    <button @click="$router.back()">
      <i class="fas fa-arrow-left text-xl xs:w-12"></i>
    </button>
    <div class="mt-4 xs:mx-1 sm:mx-10" style="border: 1px solid #17a2b8">
      <h1
        class="p-4 text-4xl text-white font-extralight text-center"
        style="background-color: #17a2b8"
      >
        Payment
      </h1>
      <div v-if="message.length > 0">
        <h1 class="text-center xs:text-sm sm:text-xl md:text-2xl text-red-500">
          {{ message }}
        </h1>
      </div>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2">
        <div class="mx-auto relative">
          <div class="">
            <img :src="path + '/' + imagePath" alt="" class="max-h-64 m-auto" />
          </div>
          <div class="">
            <h1 class="text-gray-600 font-bold text-xl sm:text-4xl text-center">
              {{ product.ProductName }}
            </h1>
            <div
              class="
                text-center
                space-x-5
                xs:text-lg
                sm:text-3xl
                xs:my-1
                sm:my-3
              "
            >
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
              <h5 class="text-center">
                <span
                  style="background-color: #00baf2"
                  class="p-1 rounded-full text-white font-semibold"
                >
                  {{ product.Rating }} /5 <i class="far fa-star"></i
                ></span>
              </h5>
            </div>
            <div class="xs:my-1 sm:my-3 text-center">
              <h5
                class="xs:text-lg sm:text-2xl xs:my-1 sm:my-3"
                v-if="
                  product.ProductCategory.CategoryName == 'mobiles' ||
                  product.ProductCategory.CategoryName == 'electronics'
                "
              >
                Product HightLights
              </h5>

              <ul
                class=""
                v-if="product.ProductCategory.CategoryName != 'fashion'"
              >
                <li v-for="item in Spec" :key="item">
                  {{ item }}
                </li>
              </ul>
            </div>
            <p
              v-if="product.Qty < 10 && product.Qty > 0"
              class="
                absolute
                top-0
                left-0
                font-semibold
                text-red-500
                animate-pulse
              "
            >
              Only {{ product.Qty }} left
            </p>
          </div>
        </div>

        <div class="p-2">
          <h1
            class="
              xs:text-lg
              sm:text-3xl
              xs:my-1
              sm:my-3
              space-x-2
              font-semibold
            "
          >
            Amount : {{ discount }}
            <i class="fas fa-rupee-sign align-middle"> </i>
          </h1>
          <form @submit.prevent="handleSubmit">
            <div
              class="my-3"
              v-if="product.ProductCategory.CategoryName == 'fashion'"
            >
              <h1 class="xs:text-base sm:text-lg font-medium">Select Size :</h1>
              <div v-if="submitted && size.length == ''" class="text-red-600">
                Size is required
              </div>
              <div class="flex space-x-4 my-2">
                <div v-for="item in Spec" :key="item">
                  <input
                    type="radio"
                    class="mx-2 w-5 h-5"
                    style=""
                    v-model="size"
                    :value="item"
                    required
                  />
                  <span class="text-xl">{{ item }}</span>
                </div>
              </div>
            </div>
            <div class="my-3">
              <h1 class="xs:text-base sm:text-lg font-medium">House no :</h1>
              <input
                type="text"
                class="
                  outline-none
                  my-2
                  p-2
                  focus:border-blue-400
                  border border-gray-300
                  w-3/4
                  rounded
                "
                :class="{
                  'border-red-600 ': submitted && $v.houseno.$error,
                }"
                v-model="houseno"
              />
              <div
                v-if="submitted && !$v.houseno.required"
                class="text-red-600 text-sm"
              >
                House no is required
              </div>
            </div>
            <div class="my-3">
              <h1 class="xs:text-base sm:text-lg font-medium">Street name :</h1>
              <input
                type="text"
                class="
                  outline-none
                  my-2
                  p-2
                  w-3/4
                  focus:border-blue-400
                  border border-gray-300
                  rounded
                "
                :class="{
                  'border-red-600 ': submitted && $v.street.$error,
                }"
                v-model="street"
              />
              <div
                v-if="submitted && !$v.street.required"
                class="text-red-600 text-sm"
              >
                Street is required
              </div>
            </div>

            <div class="my-3 flex">
              <div class="w-1/3">
                <h1 class="xs:text-base sm:text-lg font-medium">State</h1>
                <div
                  v-if="submitted && !$v.state.required"
                  class="text-red-600 text-sm"
                >
                  State is required
                </div>
                <select
                  name=""
                  v-model="state"
                  @change="getCity"
                  id=""
                  class="
                    outline-none
                    w-3/4
                    border border-gray-300
                    p-2
                    my-2
                    focus:border-blue-400
                    rounded
                  "
                  :class="{
                    'border-red-600 ': submitted && $v.state.$error,
                  }"
                >
                  <option value="">Select State</option>
                  <option
                    v-for="item in array"
                    :key="item.name"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="w-1/3">
                <h1 class="xs:text-base sm:text-lg font-medium">City</h1>
                <div
                  v-if="submitted && !$v.city.required"
                  class="text-red-600 text-sm"
                >
                  City is required
                </div>
                <select
                  name=""
                  v-model="city"
                  @change="getPincode"
                  id=""
                  class="
                    outline-none
                    w-3/4
                    border border-gray-300
                    p-2
                    my-2
                    focus:border-blue-400
                    rounded
                  "
                  :class="{ 'border-red-600 ': submitted && $v.state.$error }"
                >
                  <option value="">Select city</option>
                  <template v-if="cityArray.length > 0">
                    <option v-for="item in cityArray" :key="item" :value="item">
                      {{ item }}
                    </option>
                  </template>
                </select>
              </div>
              <div class="w-1/3">
                <h1 class="xs:text-base sm:text-lg font-medium">Pincode</h1>
                <div
                  v-if="submitted && !$v.pincode.required"
                  class="text-red-600"
                >
                  Pincode is required
                </div>
                <select
                  name=""
                  v-model="pincode"
                  id=""
                  class="
                    outline-none
                    w-3/4
                    border border-gray-300
                    p-2
                    my-2
                    focus:border-blue-400
                    rounded
                  "
                  :class="{ 'border-red-600 ': submitted && $v.pincode.$error }"
                >
                  <option value="">Select Pincode</option>
                  <template v-if="pincodeArray.length > 0">
                    <option
                      v-for="item in pincodeArray"
                      :key="item"
                      :value="item"
                    >
                      {{ item }}
                    </option>
                  </template>
                </select>
              </div>
            </div>
            <button
              class="
                p-2
                focus:ring-2 focus:ring-blue-400
                w-24
                rounded
                font-medium
                text-white
              "
              style="background-color: #17a2b8"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import paytmServices from "../../Services/paytmServices";
import { hostServer } from "../../Services/paytmServices";
export default {
  data() {
    return {
      message: "",
      imagePath: "",
      path: hostServer,
      Spec: [],
      cityArray: [],
      pincodeArray: [],
      product: {
        ProductCategory: {
          CategoryName: "",
        },
      },
      sizeMessage: "",
      city: "",
      state: "",
      pincode: "",
      houseno: "",
      street: "",
      size: "",
      submitted: false,
      array: [
        {
          name: "Gujarat",
          city: [
            {
              name: "Ahmedabd",
              pincode: ["380001", "380002", "380003", "382210", "380014"],
            },
            {
              name: "Rajkot",
              pincode: ["360001", "360002", "360003", "360004", "360005"],
            },
            {
              name: "Surat",
              pincode: ["394101", "394104", "394105", "394107"],
            },
          ],
        },
        {
          name: "Delhi",
          city: [
            {
              name: "New Delhi",
              pincode: ["110001", "110002", "110003", "110004"],
            },
            {
              name: "Firozabad",
              pincode: [" 283203", "283205"],
            },
          ],
        },
        {
          name: "Maharashtra",
          city: [
            {
              name: "Mumbai",
              pincode: ["400001", "400002", "400003", "400004", "400005"],
            },
            {
              name: "Pune",
              pincode: ["411000", "411001", "411002", "411003", "411004"],
            },
            {
              name: "Nagpur",
              pincode: ["440001", "440002", "440003", "440004", "440005"],
            },
          ],
        },
      ],
    };
  },
  validations: {
    street: { required },
    // size: {},
    houseno: { required },
    state: { required },
    pincode: { required },
    city: { required },
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
    paytmServices.getProductDetailsFromId(this.$route.params.id).then((res) => {
      this.product = res.data;
      this.Spec = res.data.Spec.split(",");
      this.imagePath = res.data.image;
    });
  },
  methods: {
    getCity: function () {
      let cityarray = [];
      this.array.map((item) => {
        if (item.name == this.state) {
          item.city.map((i) => {
            cityarray.push(i.name);
          });
        }
      });
      this.cityArray = cityarray;
      //   for (let i = 0; i < this.array.length; i++) {
      //     if (this.state == this.array[i].name) {
      //       for (let y = 0; y < this.array[i].city.length; y++) {
      //         g.push(this.array[i].city[y].name);
      //       }
      //     }
      //   }
    },
    getPincode: function () {
      let pincodearray = [];
      this.array.map((item) => {
        if (item.name == this.state) {
          item.city.map((i) => {
            if (i.name == this.city) {
              i.pincode.map((y) => {
                pincodearray.push(y);
              });
            }
          });
        }
      });
      this.pincodeArray = pincodearray;
    },
    handleSubmit() {
      this.submitted = true;
      this.message = "";

      this.$v.$touch();
      let data = {
        userId: this.$store.getters.getUserID,
        Product: this.product._id,
        ProductName: this.product.ProductName,
        amount: this.discount,
        Shipping_Address:
          this.houseno +
          "," +
          this.street +
          "," +
          this.city +
          "," +
          this.state +
          "," +
          this.pincode,
        size: this.size,
      };

      if (this.product.ProductCategory.CategoryName == "fashion") {
        if (this.$v.$invalid) {
          return;
        }
        if (this.size == "") {
          this.sizeMessage = "Size is required";
        } else {
          paytmServices
            .orderPayment(
              this.$store.getters.getUserID,
              this.$store.getters.getToken,
              data
            )
            .then((res) => {
              // console.log(res.data);
              if (res.data == "Insufficient Balance !!") {
                this.message = res.data;
              }
              if (res.data == "Payment SuccessFully Done") {
                this.$router.push("/passbook");
              }
            })
            .catch((error) => {
              if (error.response.status === 401) {
                this.$store.commit("isLoggedIn", false);
                this.$store.commit("setToken", "");
                this.$store.commit("setUserID", "");
                this.$router.push("/signin");
              }
            });
        }
      } else {
        if (this.$v.$invalid) {
          return;
        }
        paytmServices
          .orderPayment(
            this.$store.getters.getUserID,
            this.$store.getters.getToken,
            data
          )
          .then((res) => {
            if (res.data == "Insufficient Balance !!") {
              this.message = res.data;
            }
            if (res.data == "Payment SuccessFully Done") {
              this.$router.push("/passbook");
            }
          })
          .catch((error) => {
            if (error.response.status === 401) {
              this.$store.commit("isLoggedIn", false);
              this.$store.commit("setToken", "");
              this.$store.commit("setUserID", "");
              this.$router.push("/signin");
            }
          });
      }
    },
  },
  watch: {
    state: function () {
      this.city = "";
    },
    city: function () {
      this.pincode = "";
    },
  },
};
</script>

<style>
</style>