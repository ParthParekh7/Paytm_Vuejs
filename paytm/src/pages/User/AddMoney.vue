<template>
  <div>
    <button
      class=""
      @click="
        () => {
          this.$router.back();
        }
      "
    >
      <i class="fas fa-arrow-left text-xl xs:w-12 sm:w-32"></i>
    </button>
    <div
      class="
        flex
        items-center
        justify-center
        bg-gray-50
        py-6
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div v-if="isLoading" class="mt-20">
        <img
          src="https://cdn.lowgif.com/full/d35d94c490e598e3-loading-gif-transparent-loading-gif.gif"
          class="h-16"
          alt=""
        />
      </div>

      <div
        v-else
        class="max-w-xl w-full space-y-8 space-x-3 border p-3 shadow-xl"
      >
        <img
          src="https://static.thenounproject.com/png/936925-200.png"
          alt=""
          class="h-8 sm:h-16 inline-block"
        />
        <span
          class="sm:text-3xl text-base font-serif text-gray-600 align-middle"
          >Add money to your wallet</span
        >

        <form @submit.prevent="addmoney">
          <div class="flex-col my-2 space-y-3">
            <div v-if="message.length > 0" class="text-red-600 text-sm">
              {{ message }}
            </div>
            <div>
              <input
                type="number"
                v-model.number="amount"
                @focus="setMessage"
                placeholder="0"
                name="amount"
                class="
                  outline-none
                  border
                  w-full
                  rounded
                  p-2
                  border-gray-300
                  focus:border-blue-300
                "
              />
            </div>
            <div>
              <button
                class="
                  w-44
                  p-2
                  outline-none
                  rounded
                  text-white
                  focus:ring-offset-2 focus:ring-2
                  font-medium
                "
                style="background-color: #012b72"
              >
                Add Money
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import paytmServices from "../../Services/paytmServices";
export default {
  data() {
    return {
      amount: "",
      message: "",
      isLoading: false,
    };
  },
  created() {
    paytmServices
      .getUserDetailsFromId(
        this.$store.getters.getUserID,
        this.$store.getters.getToken
      )
      .then((res) => {
        if (res.data == "Invalid") {
          this.$store.commit("isLoggedIn", false);
          this.$store.commit("setToken", "");
          this.$store.commit("setUserID", "");
          this.$router.push("/signin");
        }
      })
      .catch(() => {
        this.$store.commit("isLoggedIn", false);
        this.$store.commit("setToken", "");
        this.$store.commit("setUserID", "");
        this.$router.push("/signin");
      });
  },

  methods: {
    addmoney() {
      if (this.amount > 0 && !isNaN(this.amount)) {
        const data = {
          amount: this.amount,
          userId: this.$store.getters.getUserID,
        };
        this.isLoading = true;

        paytmServices
          .addMoney(
            this.$store.getters.getUserID,
            this.$store.getters.getToken,
            data
          )
          .then((res) => {
            console.log(res);
            if (res.data == "Invalid") {
              this.$store.commit("isLoggedIn", false);
              this.$store.commit("setToken", "");
              this.$store.commit("setUserID", "");
              this.$router.push("/signin");
            } else {
              console.log("Money added to your account");
              this.isLoading = false;
              this.$router.push("/passbook");
            }
          })
          .catch((error) => {
            if (error.response.status === 404) {
              this.isLoading = false;
              this.message = "something went wrong please  try again ";
            } else if (error.response.status === 401) {
              this.$store.commit("isLoggedIn", false);
              this.$store.commit("setToken", "");
              this.$store.commit("setUserID", "");
              this.$router.push("/signin");
            }
          });
      } else {
        this.message = "Amount should be greater than 0";
      }
    },

    setMessage() {
      this.message = "";
    },
  },
};
</script>

<style>
</style>