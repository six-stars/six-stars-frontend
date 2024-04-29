<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Create Users</div>
    <q-separator /> -->
    <div class="q-pt-lg">
      <q-form @submit="onSubmit" @reset="onReset">
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              outlined
              v-model="first_name"
              hint="First Name"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              outlined
              v-model="last_name"
              hint="Last Name"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="email"
              outlined
              type="email"
              hint="Email"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="username"
              outlined
              type="text"
              hint="Username"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="password"
              outlined
              type="password"
              hint="Password"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-select
              required
              outlined
              v-model="user_type"
              :options="optionsUserType"
              hint="User Type"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="dob"
              outlined
              type="date"
              hint="Date of Birth"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-select
              required
              outlined
              v-model="gender"
              :options="optionsGender"
              hint="Gender"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <div class="column">
              <div class="col">
                <q-input
                  required
                  class=""
                  v-model="phone_number"
                  type="tel"
                  outlined
                  hint="Phone number"
                  label="234814585375"
                />
              </div>
              <div class="col">
                <q-select
                  required
                  class=""
                  outlined
                  :options="optionsState"
                  v-model="state"
                  hint="State"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="address"
              outlined
              type="textarea"
              hint="Home Address"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-select
              required
              outlined
              v-model="country"
              :options="optionsCountry"
              hint="Country"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-select
              required
              outlined
              v-model="active"
              :options="optionsActive"
              hint="Active"
            />
          </div>
        </div>

        <!-- <div class="text-center q-pa-md text-subtitle2 grey-4">Next of Kin</div>

        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input class="" outlined v-model="formData.kin_first_name" hint="Next of Kin First Name" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input class="" outlined v-model="formData.kin_last_name" hint="Next of Kin Last Name" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input class="" v-model="formData.kin_email" outlined type="email" hint="Next of Kin Email" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input class="" v-model="formData.kin_phone_number" outlined type="tel" hint="Next of Kin phone number" />
          </div>
        </div> -->

        <div class="row q-pt-lg">
          <div class="text-center full-width q-pl-md">
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              style="width: 260px"
            />
          </div>
          <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
        </div>
      </q-form>

      <!-- <div class="row items-start">
        <q-form @submit="onSubmit" @reset="onReset">
          <div class="col items-start q-mt-md">
            <div class="row q-col-gutter-lg">
              <q-input class="sizzz" outlined v-model="name" label="First name" hint="Your First Name" lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type something']" />

              <q-input class="sizzz" outlined v-model="name" label="Last name" hint="Your Last Name" lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type something']" />
            </div>
          </div>
          <div class="col items-start q-mt-md">
            <div class="row q-col-gutter-lg">
              <q-input class="sizzz" v-model="email" outlined type="email" hint="Your Email" label="Email" />

              <q-input class="sizzz" v-model="tel" outlined type="tel" hint="Your phone number" label="Phone Number" />
            </div>
          </div>
          <div class="col items-start q-pt-md q-pb-md">
            <div class="row q-col-gutter-lg">
              <div class="column">
                <q-input class="sizz1 q-mb-sm" v-model="name" label="johnDoe123" lazy-rules outlined
                  :rules="[val => val && val.length > 0 || 'Please type something']" hint="Your Username" />

                <q-input class="sizz1 q-pt-sm" v-model="date" outlined type="date" hint="Date of Birth" />
              </div>

              <q-input class="sizzz" v-model="text" outlined type="textarea" label="Address" hint="Home Address" />
            </div>
          </div>

          <div style="max-width: 570px">
            <q-select outlined v-model="country" :options="optionsCountry" label="e.g Nigeria" hint="Select Country" />

            <q-select class="q-pt-md" outlined v-model="state" :options="optionsState" label="e.g Lagos"
              hint="Select State" />
          </div>

          <div class="text-center q-pa-md text-subtitle2 grey-4">Next of Kin</div>
          <div class="col items-start q-mt-md">
            <div class="row q-col-gutter-lg">
              <q-input class="sizzz" outlined v-model="name" label="first name" hint="Next of Kin First Name" lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type something']" />

              <q-input class="sizzz" outlined v-model="name" label="last name" hint="Next of Kin Last Name" lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type something']" />
            </div>
          </div>
          <div class="col items-start q-mt-md">
            <div class="row q-col-gutter-lg">
              <q-input class="sizzz" v-model="email" outlined type="email" hint="Next of Kin Email" label="email" />

              <q-input class="sizzz" v-model="tel" outlined type="tel" hint="Next of Kin phone number"
                label="Phone Number" />
            </div>
          </div>
          <div class="q-mt-md">
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div> -->
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { axios, api, base } from "boot/axios";
import { useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";

name: "CreateUsersPage";
const optionsCountry = ["Nigeria"];
const optionsGender = ["Male", "Female"];
const optionsActive = ["False", "True"];
const optionsUserType = [
  "Super_Admin",
  "Manager",
  "Front_Desk",
  "Presser",
  "Washer",
  "Maketer",
  "Driver",
];
const optionsState = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Federal Capital Territory",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const first_name = ref("");
const last_name = ref("");
const email = ref("");
const username = ref("");
const password = ref("");
const user_type = ref("");
const dob = ref("");
const gender = ref("");
const phone_number = ref("");
const address = ref("");
const state = ref("");
const country = ref("");
const active = ref("");
const created_by = ref("");

const $q = useQuasar();
const data = ref([]);
const formData = ref({});
const useStore = useUserStore();

const onSubmit = () => {
  const token = useStore.getToken;
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });

  const firstName = useStore.getFirst_name;
  const lastName = useStore.getLast_name;
  const _code = useStore.getCode;

  const formData = {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    username: username.value,
    password: password.value,
    user_type: user_type.value,
    dob: dob.value,
    gender: gender.value,
    phone_number: phone_number.value,
    address: address.value,
    state: state.value,
    country: country.value,
    active: active.value,
    created_by: firstName + " " + lastName + " with code = " + _code,
  };

  // formData.value.append("code", _code);
  // formData.append("email", profile.email);
  // console.log(formData, "formData");
  axios
    .post(`${base}/users/signup/`, formData)
    .then((response) => {
      data.value = response.data;
      console.log(data.value, "user");
      // onReset()
      $q.loading.hide();
      $q.notify({
        color: "green",
        position: "bottom",
        message: "Saved",
        icon: "check",
      });
      window.location.reload();
    })
    .catch(() => {
      $q.loading.hide();
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Loading failed",
        icon: "report_problem",
      });
    });
};

const onReset = () => {
  formData.value = {};
};
</script>

<style lang="sass" scoped>
.sizzz
  min-width: 300px
  max-width: 500px
.sizz1
  min-width: 275px
  max-width: 475px
</style>
