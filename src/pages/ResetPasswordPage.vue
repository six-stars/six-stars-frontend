<template>
  <div class="">
    <div class="row window-height window-width">
      <div class="col">
        <div class="column full-height">
          <div class="col-2 q-pb-xl q-pt-xl q-pl-md"></div>
          <div class="col-10">
            <div class="login">
              <q-card class="my-card text-white" style="max-width: 400px">
                <q-card-section>
                  <div class="text-h4 text-weight-bold q-pa-md text-primary">
                    Reset Password
                  </div>
                  <div
                    class="text-6 q-pl-md q-pr-md q-pt-sm q-pb-sm text-primary"
                  >
                    Input your OTP and new Password.
                  </div>
                </q-card-section>
                <q-card-section>
                  <div class="q-pa-md">
                    <q-form @submit="resetPassword_" @reset="onReset" class="">
                      <q-input
                        type="number"
                        bottom-slots
                        v-model="otp"
                        label="OTP"
                        hint="Your otp"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please type something',
                        ]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="123" />
                        </template>
                      </q-input>

                      <q-input
                        type="password"
                        bottom-slots
                        v-model="password"
                        label="New Password"
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
                      </q-input>

                      <q-input
                        type="password"
                        bottom-slots
                        v-model="confirm_password"
                        label="Confirm Password"
                        hint="Confirm your new password"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please type something',
                        ]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="lock" />
                        </template>
                      </q-input>

                      <div class="q-pt-md">
                        <q-btn
                          :loading="loadingLogin"
                          :disable="password != confirm_password"
                          class="full-width"
                          label="Submit"
                          type="submit"
                          color="primary"
                        />
                      </div>
                    </q-form>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, computed, onMounted } from "vue";
import { axios, api, base } from "boot/axios";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "../stores/user-store";
import jwtDecode from "jwt-decode";
// import { useStore } from 'vuex'
// import store from '../store/index.js'
// import { createLogger, mapMutations } from "pinia";
// import { useAuthStore } from '../stores/AuthStore'
// import { mapActions, mapState } from 'pinia'

name: "ResetPasswordPage";
const $q = useQuasar();
const useStore = useUserStore();

const phone = ref("");
const otp = ref("");
const password = ref("");
const confirm_password = ref("");
const loadingLogin = ref(false);
const resetPassword = ref(false);

const $router = useRouter();
const $route = useRoute();
const resetResponds = ref(null);

const resetPassword_ = () => {
  $q.loading.show({
    message: "Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  const formData = {
    otp: otp.value,
    password: password.value,
  };
  api
    .patch(`${base}/users/resetpassword/${phone.value}`, formData)
    .then((response) => {
      resetResponds.value = response.data;
      console.log(resetResponds.value, "reset password Responds");
      $router.replace("/");
      $q.loading.hide();
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Password changed successfully.",
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
  otp.value = null;
  password.value = null;
  confirm_password.value = null;
};
const ll = () => {
  phone.value = $route.params.phone;
};

onMounted(() => {
  ll();
});
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
