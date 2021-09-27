<template>
  <nav class="fixed top-0 w-full z-50">
    <div
      class="
        flex
        items-center
        h-20
        justify-between
        p-3
        border-b
        shadow-lg
        bg-white
      "
    >
      <div class="mx-auto sm:mx-0 sm:w-72 md:w-60 lg:w-72">
        <router-link class="" to="/">
          <img
            src="https://assetscdn1.paytm.com/frontendcommonweb/11272962.svg"
            class="mx-auto"
            alt="logo"
          />
        </router-link>
      </div>
      <div class="hidden md:block">
        <ul class="md:space-x-2 lg:space-x-6 xl:space-x-16">
          <li
            class="
              inline-block
              text-black
              font-semibold
              lg:text-lg
              cursor-pointer
            "
          >
            <router-link
              to="/"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <a
                :href="href"
                @click="navigate"
                :class="[
                  isExactActive
                    ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                    : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                ]"
                >Home</a
              ></router-link
            >
          </li>
          <li
            class="
              inline-block
              text-black
              font-semibold
              lg:text-lg
              cursor-pointer
            "
          >
            <router-link
              to="/addmoney"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <a
                :href="href"
                @click="navigate"
                :class="[
                  isExactActive
                    ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                    : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                ]"
                >Add Money</a
              ></router-link
            >
          </li>
          <li
            class="
              inline-block
              text-black
              font-semibold
              lg:text-lg
              cursor-pointer
            "
          >
            <router-link
              to="/moneytransfer"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <a
                :href="href"
                @click="navigate"
                :class="[
                  isExactActive
                    ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                    : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                ]"
                >Money Transfer</a
              ></router-link
            >
          </li>
          <li
            class="
              inline-block
              text-black
              font-semibold
              lg:text-lg
              cursor-pointer
            "
          >
            <router-link
              to="/passbook"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <a
                :href="href"
                @click="navigate"
                :class="[
                  isExactActive
                    ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                    : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                ]"
                >Passbook</a
              ></router-link
            >
          </li>

          <template v-if="$store.getters.isLoggedIn">
            <li
              class="
                inline-block
                text-black
                font-semibold
                lg:text-lg
                cursor-pointer
              "
              v-if="$store.getters.isLoggedIn"
            >
              <router-link
                to="/myaccount"
                custom
                v-slot="{ href, navigate, isExactActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  :class="[
                    isExactActive
                      ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                      : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                  ]"
                  >My Account</a
                ></router-link
              >
            </li>
            <li
              class="
                inline-block
                text-black
                font-semibold
                lg:text-lg
                cursor-pointer
                transition
                border-b-4 border-opacity-0
                hover:border-opacity-100
                p-2
                border-blue-400
              "
              @click="logout"
            >
              Logout
            </li>
          </template>

          <template v-else>
            <li
              class="
                inline-block
                text-black
                font-semibold
                lg:text-lg
                cursor-pointer
              "
            >
              <router-link
                to="/signin"
                custom
                v-slot="{ href, navigate, isExactActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  :class="[
                    isExactActive
                      ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                      : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                  ]"
                  >Sign In</a
                ></router-link
              >
            </li>
            <li
              class="
                inline-block
                text-black
                font-semibold
                lg:text-lg
                cursor-pointer
              "
            >
              <router-link
                to="/signup"
                custom
                v-slot="{ href, navigate, isExactActive }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  :class="[
                    isExactActive
                      ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                      : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                  ]"
                  >Sign Up
                </a></router-link
              >
            </li>
          </template>
        </ul>
      </div>
      <div class="md:hidden">
        <button
          type="button"
          class="
            inline-flex
            items-center
            justify-center
            p-2
            rounded-md
            text-gray-900
            hover:bg-blue-200
            focus:outline-none
            focus:ring-2 focus:ring-inset
          "
          @click="toggleFunction"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <template v-if="!isActive">
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </template>
          <template v-else>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </template>
        </button>
      </div>
    </div>
    <div
      class="
        shadow-lg
        md:hidden
        transition
        z-50
        duration-700
        ease-in-out
        transform
        bg-white
      "
      :class="{ 'translate-x-full': isActive, '-translate-x-0': !isActive }"
    >
      <div class="" id="mobile-menu">
        <template>
          <ul class="p-4 space-y-4">
            <li class="text-black font-semibold">
              <router-link
                to="/"
                custom
                v-slot="{ href, navigate, isExactActive }"
                class="cursor-pointer"
              >
                <a
                  :href="href"
                  @click="navigate"
                  :class="[
                    isExactActive
                      ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                      : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                  ]"
                  >Home</a
                ></router-link
              >
            </li>
            <li class="text-black font-semibold">
              <router-link
                to="/addmoney"
                custom
                v-slot="{ href, navigate, isExactActive }"
                class="cursor-pointer"
              >
                <a
                  :href="href"
                  @click="navigate"
                  :class="[
                    isExactActive
                      ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                      : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                  ]"
                  >Add Money</a
                ></router-link
              >
            </li>
            <li class="text-black font-semibold">
              <router-link
                to="/moneytransfer"
                custom
                v-slot="{ href, navigate, isExactActive }"
                class="cursor-pointer"
              >
                <a
                  :href="href"
                  @click="navigate"
                  :class="[
                    isExactActive
                      ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                      : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                  ]"
                  >Money Transfer</a
                ></router-link
              >
            </li>
            <li class="text-black font-semibold">
              <router-link
                to="/passbook"
                custom
                v-slot="{ href, navigate, isExactActive }"
                class="cursor-pointer"
              >
                <a
                  :href="href"
                  @click="navigate"
                  :class="[
                    isExactActive
                      ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                      : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                  ]"
                  >Passbook</a
                ></router-link
              >
            </li>
            <template v-if="$store.getters.isLoggedIn">
              <li class="text-black font-semibold">
                <router-link
                  to="/myaccount"
                  custom
                  v-slot="{ href, navigate, isExactActive }"
                  class="cursor-pointer"
                >
                  <a
                    :href="href"
                    @click="navigate"
                    :class="[
                      isExactActive
                        ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                        : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                    ]"
                    >My Account</a
                  ></router-link
                >
              </li>
              <li
                class="
                  text-black
                  inline-block
                  font-semibold
                  transition
                  cursor-pointer
                  border-b-4 border-opacity-0
                  hover:border-opacity-100
                  p-2
                  border-blue-400
                "
                @click="logout"
              >
                Logout
              </li>
            </template>
            <template v-else>
              <li class="text-black font-semibold">
                <router-link
                  to="/signin"
                  custom
                  v-slot="{ href, navigate, isExactActive }"
                  class="cursor-pointer"
                >
                  <a
                    :href="href"
                    @click="navigate"
                    :class="[
                      isExactActive
                        ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                        : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                    ]"
                    >Sign In</a
                  ></router-link
                >
              </li>
              <li class="text-black font-semibold">
                <router-link
                  to="/signup"
                  custom
                  v-slot="{ href, navigate, isExactActive }"
                  class="cursor-pointer"
                >
                  <a
                    :href="href"
                    @click="navigate"
                    :class="[
                      isExactActive
                        ? 'transition  border-b-4 p-2 font-bold border-blue-400'
                        : 'transition border-b-4  border-opacity-0 hover:border-opacity-100 p-2  border-blue-400',
                    ]"
                    >Sign Up</a
                  ></router-link
                >
              </li>
            </template>
          </ul>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleFunction: function () {
      this.isActive = !this.isActive;
    },
    logout() {
      this.$store.commit("isLoggedIn", false);
      this.$store.commit("setToken", "");
      this.$store.commit("setUserID", "");
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>