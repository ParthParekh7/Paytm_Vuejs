<template>
  <div>
    <button @click="$router.back()">
      <i class="fas fa-arrow-left text-xl xs:w-12 sm:w-32"></i>
    </button>

    <div
      class="
        flex
        items-center
        justify-center
        bg-gray-50
        xs:py-2
        sm:py-4
        xs:px-1
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
        class="max-w-xl w-full space-y-8 space-x-3 border p-3 shadow-md"
      >
        <div class="space-x-5">
          <img
            src="data:image/png;base64,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"
            alt=""
            class="h-8 sm:h-20 inline-block ml-3"
          />
          <span
            class="sm:text-3xl text-base font-serif text-gray-600 align-middle"
          >
            Money Transfer
          </span>
        </div>

        <form @submit.prevent="moneyTransfer">
          <div class="flex-col my-2 space-y-3">
            <div
              v-if="message.length > 0"
              class="text-center text-red-600 text-sm mb-1"
            >
              {{ message }}
            </div>
            <div class="space-y-2">
              <label for="phone" class="font-medium"
                >Receiver mobile number</label
              >
              <div
                v-if="phoneMessage.length > 0"
                class="text-red-600 text-sm mb-1"
              >
                {{ phoneMessage }}
              </div>
              <input
                type="text"
                v-model.lazy="phone"
                @focus="setMessage"
                placeholder="Enter number"
                name="phone"
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
          </div>
          <div class="flex-col my-2 space-y-3">
            <div class="space-y-2">
              <label for="amount" class="font-medium">Amount</label>
              <div
                v-if="amountMessage.length > 0"
                class="text-red-600 text-sm mb-1"
              >
                {{ amountMessage }}
              </div>
              <input
                type="number"
                v-model.number="amount"
                @focus="setMessage"
                placeholder="0 "
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
                  shadow-md
                  w-44
                  p-2
                  outline-none
                  rounded
                  text-white
                  focus:ring-offset-1 focus:ring-2
                  font-medium
                "
                style="background-color: #012b72"
              >
                Send Money
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
      amountMessage: "",
      message: "",
      phoneMessage: "",
      phone: "",
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
    moneyTransfer() {
      if (/^[0-9]{10}$/.test(this.phone)) {
        if (this.amount > 0 && !isNaN(this.amount)) {
          const data = {
            senderId: this.$store.getters.getUserID,
            amount: this.amount,
            mobileno: this.phone,
          };
          //   console.log(data);
          this.isLoading = true;
          paytmServices
            .moneyTransfer(
              this.$store.getters.getUserID,
              this.$store.getters.getToken,
              data
            )
            .then((res) => {
              if (res.data == "Transaction Successfully Done") {
                this.isLoading = false;
                this.$router.push("/passbook");
              }
              if (res.data == "Insufficient Balance") {
                this.isLoading = false;
                this.message = res.data;
              }
              if (res.data == "You can't transfer money to your account") {
                this.isLoading = false;
                this.message = res.data;
              }
            })
            .catch((error) => {
              console.log(error);
              if (error.response.status === 404) {
                this.isLoading = false;
                this.message = "Receiver mobile number not found ";
              } else if (error.response.status === 401) {
                this.$store.commit("isLoggedIn", false);
                this.$store.commit("setToken", "");
                this.$store.commit("setUserID", "");
                this.$router.push("/signin");
              }
            });
        } else {
          this.amountMessage = "Amount should be greater than 0";
        }
      } else {
        this.phoneMessage = "Enter valid mobile number";
      }
    },

    setMessage() {
      this.phoneMessage = "";
      this.amountMessage = "";
      this.message = "";
    },
  },
};
</script>

<style>
</style>