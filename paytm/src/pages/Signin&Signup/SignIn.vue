<template>
  <div
    class="
      flex
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div class="p-5 border shadow-xl">
        <div>
          <img
            class="h-16 mx-auto w-auto"
            src="@/assets/logo.png"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-xl font-bold text-gray-900">
            Sign in to your account
          </h2>

          <p
            v-if="message.length > 0"
            class="mt-3 text-center text-xl font-normal text-red-600"
          >
            {{ message }}
          </p>
        </div>
        <form class="mt-8 space-y-3">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="my-3">
              <label for="email-address" class="font-semibold">Email </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                v-model.lazy="email"
                required
                class="
                  focus:outline-none
                  border
                  w-full
                  p-2
                  my-3
                  ring-1
                  focus:ring-green-400
                "
                @focus="setMessage"
                placeholder="Email Address"
              />
            </div>
            <div class="">
              <label for="password" class="font-semibold">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                v-model.lazy="password"
                autocomplete="current-password"
                required
                class="
                  mt-3
                  focus:outline-none
                  border
                  w-full
                  p-2
                  my-3
                  ring-1
                  focus:ring-green-400
                "
                @focus="setMessage"
                placeholder="Password"
              />
            </div>
          </div>

          <!-- <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="
                  h-4
                  w-4
                  text-blue-600
                  focus:ring-blue-500
                  border-gray-300
                  rounded
                "
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-blue-400 hover:text-blue-900">
                Forgot your password?
              </a>
            </div>
          </div> -->

          <div
            class="flex-col md:flex-row md:flex justify-between items-center"
          >
            <button
              @click.prevent="login"
              class="
                outline-none
                w-24
                p-2
                rounded
                text-center
                font-semibold
                bg-blue-500
                text-white
                focus:ring-2 focus:ring-offset-1
              "
            >
              Sign in
            </button>
            <h1>
              <router-link
                to="/signup"
                class="font-medium text-sm hover:text-blue-800"
              >
                Dont't have a account ? Sign up first
              </router-link>
            </h1>
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
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    login: function () {
      if (this.email.length > 3 && this.password.length > 5) {
        paytmServices
          .login({ email: this.email, password: this.password })
          .then((res) => {
            console.log(res.data);
            this.$store.commit("isLoggedIn", true);
            this.$store.commit("setToken", res.data.jwttoken);
            this.$store.commit("setUserID", res.data.userId);
            this.$router.push("/");
          })
          .catch(() => {
            this.message = "Invalid email and password";
          });
      } else {
        this.message = "Invalid email and password";
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