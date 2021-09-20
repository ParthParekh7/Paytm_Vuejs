<template>
  <div class="container mx-auto my-5">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto space-x-4"
    >
      <div
        v-for="item in data"
        :key="item.title"
        class="border text-center hover:shadow-xl"
      >
        <i :class="item.icon" class="text-3xl text-gray-400 my-2"></i>
        <h6 class="font-bold">{{ item.title }}</h6>
        <h6 class="font-normal">{{ item.info }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
const serviceData = [
  {
    title: "24x7 Help",
    icon: "fas fa-heart",
    info: "Have a query and need help? Click here.",
  },
  {
    title: "Paytm Trust",
    icon: "fa fa-check-square",
    info: "Your money is yours! All refunds come with no question asked guarantee.",
  },
  {
    title: "100% Assurance",
    icon: "fa fa-star",
    info: "At Paytm, we provide 100% assurance. If you have any issue, your money is immediately refunded. Sit back and enjoy your shopping.",
  },
  {
    title: "Our Promise",
    icon: "fas fa-star-of-david",
    info: "Happiness is guaranteed at Paytm. If we fall short of your expectations, give us a shout.",
  },
];
export default {
  data() {
    return {
      data: serviceData,
    };
  },
};
</script>

<style>
</style>

