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
    <div class="max-w-xl w-full space-y-2">
      <div class="p-5 border shadow-xl">
        <div>
          <img
            class="h-16 mx-auto w-auto"
            src="@/assets/logo.png"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-xl font-bold text-gray-900">
            Sign Up
          </h2>

          <p
            v-if="message.length > 0"
            class="mt-3 text-center text-xl font-normal text-red-600"
          >
            {{ message }}
          </p>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="my-2">
            <label for="username" class="font-semibold">Name</label>
            <input
              type="text"
              v-model="user.username"
              id="username"
              @focus="setMessage"
              name="username"
              class="
                focus:outline-none
                border border-gray-300
                w-full
                my-1
                p-2
                rounded-md
              "
              :class="{
                'border-red-600 ': submitted && $v.user.username.$error,
                'border-red-600': !$v.user.username.minLength,
              }"
            />
            <div
              v-if="submitted && !$v.user.username.required"
              class="text-red-600"
            >
              Name is required
            </div>
            <span v-if="!$v.user.username.minLength" class="text-red-600">
              Name must be at least 3 characters long
            </span>
          </div>

          <div class="my-2">
            <label for="email" class="font-semibold">Email</label>
            <input
              type="email"
              v-model="user.email"
              @focus="setMessage"
              id="email"
              name="email"
              class="
                focus:outline-none
                border border-gray-300
                w-full
                p-2
                rounded-md
                my-1
              "
              :class="{
                'border-red-600 ': submitted && $v.user.email.$error,
                'border-red-600': !$v.user.email.email,
              }"
            />
            <div v-if="submitted && $v.user.email.$error" class="text-red-600">
              <span v-if="!$v.user.email.required">Email is required</span>
            </div>
            <span v-if="!$v.user.email.email" class="text-red-600"
              >Email is invalid</span
            >
          </div>
          <div class="my-2">
            <label for="phn" class="font-semibold">Phone number</label>
            <input
              type="text"
              v-model="user.mobileno"
              @focus="setMessage"
              id="mobileno"
              name="mobileno"
              class="
                focus:outline-none
                border border-gray-300
                w-full
                p-2
                rounded-md
                my-1
              "
              :class="{
                'border-red-600 ': submitted && $v.user.mobileno.$error,
                'border-red-600': !$v.user.mobileno.minLength,
              }"
            />

            <div
              v-if="submitted && $v.user.mobileno.$error"
              class="text-red-600"
            >
              <span v-if="!$v.user.mobileno.required">
                Phone numbers is required
              </span>
            </div>
            <span
              v-if="
                $v.user.mobileno.required &&
                $v.user.mobileno.minLength &&
                $v.user.mobileno.$error &&
                $v.user.mobileno.maxLength
              "
              class="text-red-600"
              >Enter valid phone number</span
            >
            <span
              v-if="!$v.user.mobileno.minLength || !$v.user.mobileno.maxLength"
              class="text-red-600"
            >
              Phone number required 10 digit
            </span>
          </div>
          <div class="my-2">
            <label for="password" class="font-semibold">Password</label>
            <input
              type="password"
              v-model="user.password"
              id="password"
              name="password"
              autocomplete=""
              @focus="setMessage"
              class="
                focus:outline-none
                border border-gray-300
                w-full
                rounded-md
                p-2
                my-1
              "
              :class="{
                'border-red-600 ring-0 font-semibold':
                  submitted && $v.user.password.$error,
                'border-red-600': !$v.user.password.minLength,
              }"
            />
            <div
              v-if="submitted && $v.user.password.$error"
              class="text-red-600"
            >
              <span v-if="!$v.user.password.required"
                >Password is required</span
              >
            </div>
            <span v-if="!$v.user.password.minLength" class="text-red-600"
              >Password must be at least 6 characters</span
            >
          </div>
          <div class="my-2">
            <label for="confirmPassword" class="font-semibold"
              >Confirm Password</label
            >
            <input
              type="password"
              v-model="user.confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              @focus="setMessage"
              class="
                focus:outline-none
                border border-gray-300
                rounded-md
                w-full
                p-2
                my-1
              "
              autocomplete=""
              :class="{
                'border-red-500': submitted && $v.user.confirmPassword.$error,
              }"
            />
            <div
              v-if="submitted && $v.user.confirmPassword.$error"
              class="text-red-600"
            >
              <span v-if="!$v.user.confirmPassword.required"
                >Confirm Password is required</span
              >
              <span v-else-if="!$v.user.confirmPassword.sameAsPassword"
                >Password must match</span
              >
            </div>
          </div>
          <div
            class="flex-col md:flex-row md:flex justify-between items-center"
          >
            <button
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
              Sign up
            </button>
            <h1>
              <router-link
                to="/signin"
                class="font-medium text-sm hover:text-blue-800"
              >
                Already have a account . Get Sign in
              </router-link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  numeric,
  sameAs,
} from "vuelidate/lib/validators";
import paytmServices from "../../Services/paytmServices";

export default {
  name: "app",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        mobileno: "",
        confirmPassword: "",
      },
      submitted: false,
      message: "",
    };
  },
  validations: {
    user: {
      username: { required, minLength: minLength(3) },
      email: { required, email },
      mobileno: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const userData = {
        name: this.user.username,
        email: this.user.email,
        password: this.user.password,
        mobileno: parseInt(this.user.mobileno),
      };
      //   console.log(userData);
      paytmServices.signup(userData).then((res) => {
        if (res.status == 200) {
          if (res.data == "Email id already exists") {
            this.message = "Email id already exists";
          }
          if (res.data == "Register Successfully Done") {
            console.log("yes");

            paytmServices
              .login({ email: userData.email, password: userData.password })
              .then((res) => {
                console.log(res.data);
                this.$store.commit("isLoggedIn", true);
                this.$store.commit("setToken", res.data.jwttoken);
                this.$store.commit("setUserID", res.data.userId);
                this.$router.push("/");
              });
          }
        } else {
          console.log("error");
        }
      });
    },
    setMessage() {
      this.message = "";
    },
  },
};
</script>