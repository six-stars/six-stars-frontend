<template>
  <!-- <div class="text-black text-h4">Login</div> -->
  <div class="">
    <div class="row window-height window-width">
      <div class="col gt-sm">
        <q-img alt="login image" src="~assets/login-img.png" class="fit">
          <div class="absolute-top bg-transparent">
            <q-item-section>
              <q-img
                class=""
                alt="Sixstarsdc.com.ng Logo"
                src="~assets/logo/Six_Star_3.png"
                style="max-width: 200px; max-height: 150px"
              />
            </q-item-section>
          </div>
        </q-img>
      </div>
      <div class="col">
        <div class="column full-height">
          <div class="col-2 q-pb-xl q-pt-xl q-pl-md">
            <q-img
              class="lt-md"
              alt="Sixstarsdc.com.ng Logo"
              src="~assets/logo/Six_Star_3.png"
              style="max-width: 200px"
            />
          </div>
          <div class="col-10">
            <div class="login">
              <q-card class="my-card text-white" style="max-width: 400px">
                <q-card-section>
                  <div class="text-h4 text-weight-bold q-pa-md text-primary">
                    Login
                  </div>
                  <div
                    class="text-6 q-pl-md q-pr-md q-pt-sm q-pb-sm text-primary"
                  >
                    Welcome to Six-Stars. let’s access your account.
                  </div>
                </q-card-section>
                <q-card-section>
                  <div class="q-pa-md">
                    <q-form @submit="onSubmit" @reset="onReset" class="">
                      <q-input
                        type="number"
                        bottom-slots
                        v-model="phone_number"
                        label="Phone Number"
                        hint="Your phone number, using this format 234807538373"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please type something',
                        ]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="call" />
                        </template>
                        <!-- <template v-slot:append>
                        <q-icon name="favorite" />
                      </template> -->

                        <!-- <template v-slot:hint>
                        Field hint
                      </template> -->
                      </q-input>

                      <q-input
                        type="password"
                        bottom-slots
                        v-model="password"
                        label="Password"
                        hint="Your password"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please type something',
                        ]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="lock" />
                        </template>
                        <!-- <template v-slot:append>
                        <q-icon name="favorite" />
                      </template> -->

                        <!-- <template v-slot:hint>
                        Field hint
                      </template> -->
                      </q-input>

                      <!-- <q-toggle class="text-primary" v-model="accept" label="I accept the license and terms" /> -->

                      <div class="q-pt-md">
                        <q-btn
                          class="full-width"
                          label="Submit"
                          type="submit"
                          color="primary"
                        />
                        <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
                      </div>
                    </q-form>
                    <div class="text-right q-pa-sm">
                      <q-btn
                        class="text-primary"
                        @click="resetPassword = true"
                        no-caps
                        flat
                        dense
                      >
                        Reset Password
                      </q-btn>
                    </div>
                    <!-- <div class="text-primary q-pa-sm text-center">
                      Don't have an account yet?
                      <router-link class="text-primary" to="/signup" style="text-decoration: none">
                        Sign up
                      </router-link>

                    </div> -->
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div>
            <q-dialog v-model="resetPassword">
              <q-card>
                <q-card-section class="row items-center q-pb-none">
                  <div class="text-h6">Reset your password</div>
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
                <q-card-section>
                  <q-form @submit.prevent="postReset" @reset="on_Reset">
                    <div class="row text-center">
                      <div class="col-12">
                        <q-input
                          type="number"
                          bottom-slots
                          v-model="phone"
                          label="Phone"
                          hint="Hint: format -  2349182746538, don't add '+'"
                          lazy-rules
                          :rules="[
                            (val) =>
                              (val && val.length > 0) ||
                              'Please type something',
                          ]"
                        >
                          <template v-slot:prepend>
                            <q-icon name="call" />
                          </template>
                        </q-input>
                      </div>
                      <div class="col-12 q-mt-md">
                        <q-btn class="bg-primary text-white" type="submit"
                          >Submit</q-btn
                        >
                      </div>
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
import { axios, api, base } from "boot/axios";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "../stores/user-store";
// import { useStore } from 'vuex'
// import store from '../store/index.js'
// import { createLogger, mapMutations } from "pinia";
// import { useAuthStore } from '../stores/AuthStore'
// import { mapActions, mapState } from 'pinia'

name: "LoginPage";
const $q = useQuasar();
const useStore = useUserStore();

// const email = ref("");
const phone_number = ref("");
const phone = ref("");
const password = ref("");
const confirm_password = ref("");
const isloading = ref(false);
const resetPassword = ref(false);

// mapMutations({
//   setLoggedUser: "auth/setLoggedUser",
// })
const itemsLength = computed(() => {
  return mapState(useAuthStore, ["authUser"]);
});

const $router = useRouter();
const $route = useRoute();
const onSubmit = async () => {
  $q.loading.show({
    message: "Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  isloading.value = true;
  // Get the token/cookie
  // await useStore.getSanctumCookie()
  // login user
  const user = await useStore.login(phone_number.value, password.value);
  console.log(user, "user D");
  // set user data to localstorage()
  useStore.setUser(user.data);
  // routing to the dashboard
  if (useStore.getActive == "True") {
    $router.replace("/main");
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "thumb_up",
      message: "Welcome to your Dashboard",
    });
  } else {
    $q.notify({
      color: "negative",
      textColor: "white",
      icon: "report_problem",
      message: "You don't have access to this platform",
    });
  }
  $q.loading.hide();

  // console.log(useStore.getUser_type);
  // console.log(useStore.getEmail);
  // console.log(useStore.getFirst_name);
  // console.log(useStore.getLast_name);
  // console.log(useStore.getToken);
  // console.log(useStore.getPhoneNumber);
  // axios.post(`${base}/users/login/`, formData)
  // .then((response) => {
  //   // const authStore = useAuthStore()
  //   // authStore.setLoggedUser(response.data)
  //   // $store['auth/setLoggedUser'](response.data)
  //   console.log(response.data, "x");
  //   $store.commit('auth/setLoggedUser', response.data)
  //   // store.setLoggedUser(response.data)
  //   // console.log($store, "store");
  //   // data.value = response.data
  //   // console.log(data.value, "yello!")
  //   $router.replace('/')
  //   $q.notify({
  //     color: 'green-4',
  //     textColor: 'white',
  //     icon: 'thumb_up',
  //     message: 'Welcome to your Dashboard'
  //   })
  // })
  // .catch(() => {
  //   $q.notify({
  //     color: 'negative',
  //     position: 'bottom',
  //     message: 'Please Refresh',
  //     icon: 'report_problem'
  //   })
  // })
  isloading.value = false;
};

const resetEmail = ref("");
const resetResponds = ref(null);

const postReset = () => {
  // console.log(this.resetEmail, "reset Email");
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  // const formData = {
  //   email: resetEmail.value,
  // };
  api
    .patch(`${base}/users/phone/otp/${phone.value}`)
    .then((response) => {
      resetResponds.value = response.data;
      console.log(resetResponds.value, "resetResponds");
      $q.loading.hide();
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Password reset message has been sent.",
      });
      resetPassword.value = false;
      $router.push({
        name: "ResetPasswordPage",
        params: { phone: phone.value },
      });
    })
    .catch((error) => {
      console.log(error, "error");
      $q.loading.hide();
      $q.notify({
        color: "negative",
        textColor: "white",
        icon: "report_problem",
        message: "Please refresh",
      });
    });
};

const onReset = () => {
  phone_number.value = null;
  password.value = null;
};

const on_Reset = () => {
  phone.value = null;
};
</script>

<style lang="sass" scoped>
.login
  display: flex
  align-items: center
  justify-content: center
</style>
<!-- .my-card
  width: 100%
  max-width: 250px -->
