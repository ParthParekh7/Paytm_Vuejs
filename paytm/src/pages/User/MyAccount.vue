<template>
  <div
    class="
      flex
      items-center
      justify-center
      bg-gray-50
      xs:py-4
      sm:py-12
      xs:px-1
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-xl w-full">
      <div class="bg-black p-2">
        <h2 class="text-center text-xl font-bold text-white">My Account</h2>
      </div>
      <div class="xs:p-2 sm:p-5 border shadow-xl">
        <div>
          <img
            class="xs:h-16 sm:h-32 mx-auto my-2 w-auto rounded-full bg-white"
            src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
            alt="user"
            v-if="user.image == 'logo'"
          />
          <img
            v-else
            class="xs:h-16 sm:h-32 mx-auto my-2 w-auto rounded-full bg-white"
            :src="path + '/uploads/' + user.image"
          />
        </div>

        <h1 class="text-center">
          <button
            class="
              border-b border-opacity-0
              hover:border-opacity-100 hover:border-blue-700
              text-gray-700
              font-medium
              cursor-pointer
              hover:text-blue-700
            "
          >
            Edit Photo
          </button>
        </h1>

        <div class="text-center">
          <input type="file" @change="setImagePath" name="file" />
        </div>
        <p
          v-if="message.length > 0"
          class="
            mt-3
            text-center
            xs:text-sm
            md:text-xl
            font-normal
            text-red-600
          "
        >
          {{ message }}
        </p>
        <!-- </div> -->

        <form @submit.prevent="handleSubmit">
          <div class="my-2">
            <label for="name" class="font-semibold">Name</label>
            <input
              type="text"
              v-model="user.name"
              id="name"
              @focus="setMessage"
              name="name"
              class="
                focus:outline-none
                border border-gray-300
                w-full
                my-1
                p-2
                rounded-md
              "
              :class="[
                submitted && $v.user.name.$error ? 'border-red-600 ' : '',
                !$v.user.name.minLength
                  ? 'border-red-600'
                  : 'focus:border-green-400',
              ]"
            />
            <div
              v-if="submitted && !$v.user.name.required"
              class="text-red-600"
            >
              Name is required
            </div>
            <span v-if="!$v.user.name.minLength" class="text-red-600">
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
              :class="[
                submitted && $v.user.email.$error ? 'border-red-600 ' : '',
                !$v.user.email.email
                  ? 'border-red-600'
                  : 'focus:border-green-400',
              ]"
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
              :class="[
                submitted && $v.user.mobileno.$error ? 'border-red-600' : '',
                !$v.user.mobileno.minLength || !$v.user.mobileno.maxLength
                  ? 'border-red-600'
                  : 'focus:border-green-400',
              ]"
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
              :class="[
                submitted && $v.user.password.$error
                  ? 'border-red-600 ring-0 font-semibold'
                  : '',
                !$v.user.password.minLength
                  ? 'border-red-600'
                  : 'focus:border-green-400',
              ]"
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

          <div class="flex-col md:flex-row md:flex space-x-6 items-center">
            <button
              class="
                outline-none
                w-24
                p-2
                rounded
                text-center
                font-semibold
                text-white
                focus:ring-2 focus:ring-offset-1
                bg-green-700
              "
            >
              Save
            </button>
            <button
              type="button"
              @click="$router.back()"
              class="
                bg-gray-900
                outline-none
                w-24
                p-2
                rounded
                text-center
                font-semibold
                text-white
              "
            >
              Back
            </button>
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
} from "vuelidate/lib/validators";
import paytmServices from "../../Services/paytmServices";
import { hostServer } from "../../Services/paytmServices";
export default {
  name: "My_account",
  data() {
    return {
      userData: {},
      path: hostServer,
      user: {
        name: "",
        email: "",
        password: "",
        mobileno: "",
        image: "",
      },
      submitted: false,
      message: "",
    };
  },
  validations: {
    user: {
      name: { required, minLength: minLength(3) },
      email: { required, email },
      mobileno: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      password: { required, minLength: minLength(6) },
    },
  },
  beforeCreate() {
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
        this.userData = res.data;
        this.user.name = res.data.name;
        this.user.password = res.data.password;
        this.user.email = res.data.email;
        this.user.mobileno = res.data.mobileno;
        this.user.image = res.data.image;
      })
      .catch(() => {
        this.$store.commit("isLoggedIn", false);
        this.$store.commit("setToken", "");
        this.$store.commit("setUserID", "");
        this.$router.push("/signin");
      });
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const formData = new FormData();
      formData.append("name", this.user.name);
      formData.append("email", this.user.email); 
      formData.append("mobileno", this.user.mobileno);
      formData.append("image", this.user.image);
      formData.append("password", this.user.password);

      if (this.user.password === this.userData.password) {
        paytmServices
          .updateUser(
            this.$store.getters.getUserID,
            this.$store.getters.getToken,
            1,
            // this.user
            formData
          )
          .then(() => {
            this.message = "Profile Updated Successfully !!";
          })
          .catch((error) => {
            console.log(error);
            this.$store.commit("isLoggedIn", false);
            this.$store.commit("setToken", "");
            this.$store.commit("setUserID", "");
            this.$router.push("/signin");
          });
      } else {
        paytmServices
          .updateUser(
            this.$store.getters.getUserID,
            this.$store.getters.getToken,
            2,
            formData
            // this.user
          )
          .then(() => {
            this.message = "Profile Updated Successfully !!";
          })
          .catch(() => {
            this.$store.commit("isLoggedIn", false);
            this.$store.commit("setToken", "");
            this.$store.commit("setUserID", "");
            this.$router.push("/signin");
          });
      }
    },
    setMessage() {
      this.message = "";
    },
    setImagePath(e) {
      this.user.image = e.target.files[0];
    },
  },
};
</script>