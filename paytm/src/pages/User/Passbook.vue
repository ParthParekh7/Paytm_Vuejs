<template>
  <div>
    <button @click="$router.back()">
      <i class="fas fa-arrow-left text-xl xs:w-12 sm:w-32"></i>
    </button>
    <div
      class="
        sm:p-3
        flex
        justify-center
        items-center
        mx-0
        md:mx-10
        lg:mx-10
        xl:mx-60
      "
    >
      <div>
        <h1 class="text-center">
          <span
            class="
              p-2
              border-b-2
              font-semibold
              border-green-400
              text-xl
              shadow-xl
              sm:text-3xl
            "
            >Paytm Balance : {{ balance }}
            <i class="fas fa-rupee-sign align-middle"></i>
          </span>
        </h1>
        <!-- Transactions  -->
        <div class="mt-5 grid sm:p-3">
          <h1 class="text-2xl text-center text-blue-600">
            Transactions Details
          </h1>
          <div v-if="transactions.length === 0">
            <h1 class="text-center mt-4 text-monospace font-semibold">
              No Transaction Yet
            </h1>
          </div>
          <table v-else class="table-fixed border mt-4 p-2 w-full shadow-xl">
            <thead class="bg-gray-800 text-white">
              <tr class="">
                <th class="w-5 p-3">#</th>
                <th class="">Transactions</th>
                <th class="">Amount</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr
                v-for="(item, index) in transactions"
                :key="index"
                class="
                  border-b
                  my-2
                  border-gray-300
                  h-16
                  bg-gray-200
                  hover:bg-gray-300
                "
              >
                <td class="inline-block border-bl border">{{ index + 1 }}</td>
                <td class="">
                  <h5
                    v-if="item.paymentType === 'Money Added'"
                    class="sm:text-lg font-semibold space-x-1 sm:space-x-4"
                  >
                    <i
                      class="fas fa-plus text-xl sm:text-3xl text-blue-600"
                    ></i>
                    <span>Money Added</span>
                  </h5>
                  <template v-else-if="item.paymentType === 'Send'">
                    <h5 class="sm:text-lg font-semibold space-x-1 sm:space-x-4">
                      <i
                        class="
                          fas
                          fa-paper-plane
                          text-xl
                          sm:text-3xl
                          text-blue-600
                        "
                      ></i>
                      <span>
                        Money Send to
                        {{ item.receiverName }}</span
                      >
                    </h5>
                    <h6 class="m-2 text-sm">
                      Mobile no : {{ item.receiverMobileNo }}
                    </h6>
                  </template>
                  <template v-else>
                    <h5 class="sm:text-lg font-semibold space-x-4">
                      <i
                        class="
                          fas
                          fa-hand-holding-usd
                          text-xl
                          sm:text-3xl
                          text-blue-600
                        "
                      ></i>
                      <span> Recevied From {{ item.senderName }}</span>
                    </h5>
                    <h6 class="m-2 text-sm">
                      Mobile no : {{ item.senderMobileNo }}
                    </h6>
                  </template>
                </td>
                <td class="">
                  <h5 class="flex justify-center items-center space-x-3">
                    <i
                      class="fas fa-minus text-xl text-blue-600"
                      v-if="item.paymentType === 'Send'"
                    ></i>
                    <i class="fas fa-plus text-xl text-blue-600" v-else></i>
                    <div class="font-semibold">
                      {{ item.amount }}
                    </div>
                    <div class="my-auto">
                      <i class="fas fa-rupee-sign text-xl text-blue-600"></i>
                    </div>
                  </h5>
                  <div
                    class="
                      flex-col
                      lg:flex-row
                      mt-2
                      justify-around
                      text-gray-600
                    "
                  >
                    <span class="text-xs">
                      Date : {{ date(item.transactionDate) + " " }}
                    </span>
                    <span class="text-xs">
                      {{ "   Time :" + time(item.transactionDate) }}
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Orders  -->
        <div class="mt-5 grid sm:p-3">
          <h1 class="text-2xl text-center text-blue-600">Purchased Products</h1>
          <div v-if="orders.length === 0">
            <h1 class="text-center mt-4 text-monospace font-semibold">
              You haven't purchased a product yet
            </h1>
          </div>
          <table v-else class="table-fixed border mt-4 p-2 w-full">
            <thead class="bg-gray-800 text-white">
              <tr class="">
                <th class="w-5 p-3">#</th>
                <th class="">Orders</th>
                <th class="">Amount</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr
                v-for="(item, index) in orders"
                :key="index"
                class="
                  p-2
                  border-b
                  my-2
                  border-gray-300
                  h-16
                  bg-gray-200
                  hover:bg-gray-300
                "
              >
                <td class="">{{ index + 1 }}</td>
                <td>
                  <h5>{{ item.ProductName }}</h5>
                  <h5>
                    Shipping Address :
                    {{ item.Shipping_Address }}
                  </h5>
                  <h5>
                    Estimated Delivery In :
                    {{ item.DeliveredOn }}
                  </h5>
                </td>
                <td class="">
                  <h5 class="flex justify-center items-center space-x-3">
                    <i
                      class="fas fa-plus text-xl text-blue-600"
                      v-if="item.paymentType === 'Money Added'"
                    ></i>
                    <i class="fas fa-minus text-xl text-blue-600" v-else></i>
                    <div class="font-semibold">
                      {{ item.amount }}
                    </div>
                    <div class="my-auto">
                      <i class="fas fa-rupee-sign text-xl text-blue-600"></i>
                    </div>
                  </h5>
                  <div className="text-muted flex mt-2 justify-content-center">
                    <small class="text-xs text-gray-600">
                      Date : {{ date(item.OrderDate) + " " }} , Time :
                      {{ time(item.OrderDate) }}
                    </small>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paytmServices from "../../Services/paytmServices";

export default {
  data() {
    return {
      balance: 0,
      transactions: [],
      orders: [],
    };
  },
  computed: {},
  created() {
    paytmServices
      .getTransactionDetailsOFUser(
        this.$store.getters.getUserID,
        this.$store.getters.getToken
      )
      .then((res) => {
        //console.log(res.data);

        this.balance = res.data.balance;

        const array = res.data.transactions;
        this.transactions = array.reverse();
        const array1 = res.data.orders;
        this.orders = array1.reverse();
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.$store.commit("isLoggedIn", false);
          this.$store.commit("setToken", "");
          this.$store.commit("setUserID", "");
          this.$router.push("/signin");
        }
      });
  },
  methods: {
    date: function (item) {
      const d = new Date(item);
      const date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
      return date.toString();
    },
    time: function (item) {
      const d = new Date(item);
      const time = d.toString().split(" ")[4];
      return time;
    },
  },
};
</script>
<style scoped>
.active {
  color: black !important;
}
</style>
