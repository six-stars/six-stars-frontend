<template>
  <q-page class="q-pa-md">
    <div class="text-black text-h4">
      My Information

      <!-- <q-btn flat dense class="float-right" label="Edit Profile" to="/edit-profile" color="primary" /> -->
    </div>
    <q-separator />
    <div class="q-pt-md">
      <!-- <q-form @submit="onSubmit" @reset="onReset"> -->
      <div class="row q-pt-sm">
        <div class="col-12 col-md-6 q-pl-md">
          <q-input
            readonly
            hint="First Name"
            class=""
            outlined
            :label="data.first_name"
          />
        </div>
        <div class="col-12 col-md-6 q-pl-md">
          <q-input
            readonly
            hint="Last Name"
            class=""
            outlined
            :label="data.last_name"
          />
        </div>
      </div>
      <div class="row q-pt-sm">
        <div class="col-12 col-md-6 q-pl-md">
          <q-input
            readonly
            hint="Email"
            class=""
            outlined
            :label="data.email"
          />
        </div>
        <div class="col-12 col-md-6 q-pl-md">
          <q-input
            readonly
            hint="Phone Number"
            class=""
            outlined
            :label="data.phone_number"
          />
        </div>
      </div>
      <div class="row q-pt-sm">
        <div class="col-12 col-md-6 q-pl-md">
          <q-input
            readonly
            hint="User Type"
            class=""
            outlined
            :label="data.user_type"
          />
        </div>
        <div class="col-12 col-md-6 q-pl-md">
          <q-input
            readonly
            hint="Gender"
            class=""
            outlined
            :label="data.gender"
          />
        </div>
      </div>
      <div class="row q-pt-sm">
        <div class="col-12 col-md-6 q-pl-md">
          <div class="column">
            <div class="col">
              <q-input
                readonly
                hint="Username"
                class=""
                outlined
                :label="data.username"
              />
            </div>
            <div class="col q-pt-xs">
              <q-input
                readonly
                hint="Date Of Birth"
                class=""
                outlined
                :label="data.dob"
              />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 q-pl-md">
          <div class="column">
            <div class="col">
              <q-input
                readonly
                hint="Address"
                class=""
                outlined
                :label="data.address"
              />
            </div>
            <div class="col q-pt-xs">
              <q-input
                readonly
                hint="Active"
                class=""
                outlined
                :label="data.active"
              />
            </div>
          </div>
        </div>
        <!-- <div class="col-12 col-md-6 q-pl-md">
            <q-input readonly hint="Address" class="" outlined :label="data.address" />
          </div> -->
      </div>
      <div class="row q-pt-sm">
        <div class="col-12 col-md-6 q-pl-md">
          <q-input
            readonly
            hint="state"
            class=""
            outlined
            :label="data.state"
          />
        </div>
        <div class="col-12 col-md-6 q-pl-md">
          <q-input readonly hint="country" outlined :label="data.country" />
        </div>
      </div>

      <!-- <div class="q-mt-md">
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div> -->

      <!-- </q-form> -->
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { axios, api, base } from "boot/axios";
import { useQuasar } from "quasar";
import { QTabs, QTab, QTabPanels, QTabPanel } from "quasar";
import { useUserStore } from "../stores/user-store";
import { useRouter } from "vue-router";

const useStore = useUserStore();

const $router = useRouter();

var token = useStore.getToken;
var _phone_number = useStore.getPhoneNumber;

watch(() => {
  var decoded = useStore.checkToken(token);
  console.log(decoded);
  console.log("decoded");
  if (decoded == true) {
    useStore.clearUser();
    // useStore.logout();
    $router.replace("/");
  }
});

const name = "ProfilePage";

const $q = useQuasar();
const data = ref([]);

// const first_name = $store.getters['auth/getLoggedUser'].first_name
// const last_name = $store.getters['auth/getLoggedUser'].last_name
// const email = $store.getters['auth/getLoggedUser'].email
// const username = $store.getters['auth/getLoggedUser'].username
// const user_type = $store.getters['auth/getLoggedUser'].user_type
// const dob = $store.getters['auth/getLoggedUser'].dob
// const phone = $store.getters['auth/getLoggedUser'].phone
// const gender = $store.getters['auth/getLoggedUser'].gender
// const address = $store.getters['auth/getLoggedUser'].address
// const state = $store.getters['auth/getLoggedUser'].state
// const country = $store.getters['auth/getLoggedUser'].country
// const email = $store.getters['auth/getLoggedUser'].email

const loadData = () => {
  // const _email = $store.getters['auth/getLoggedUser'].email
  // console.log(_phone_number, "_phone_number");
  // _email = email
  api
    .get(`/user/one/${_phone_number}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      console.log(response.data, "response.data yello!");
      console.log(data.value, "portfolio yello!");
      $q.notify({
        message: data.value.message,
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
      });
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Loading failed",
        icon: "report_problem",
      });
    });
};

onMounted(() => {
  loadData();
});
</script>

<style lang="sass" scoped></style>
