<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Create Customer</div>
    <q-separator /> -->
    <div class="q-pt-sm" v-show="visible">
      <q-form @submit="beforeSubmitting">
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              class=""
              outlined
              v-model="formData.first_name"
              hint="First Name"
              required
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              class=""
              outlined
              v-model="formData.last_name"
              hint="Last Name"
              required
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-12 q-pl-md">
            <q-input
              class=""
              v-model="formData.email"
              outlined
              type="email"
              hint="Email"
              required
            />
          </div>
          <!-- <div class="col-12 col-md-6 q-pl-md">
            <q-input class="" v-model="formData.username" outlined type="text" hint="Username" required/>
          </div> -->
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              class=""
              v-model="formData.dob"
              outlined
              type="date"
              hint="Date of Birth"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-select
              outlined
              v-model="formData.gender"
              :options="optionsGender"
              hint="Gender"
              required
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <div class="column">
              <div class="col">
                <q-input
                  class=""
                  v-model="formData.phone1"
                  type="tel"
                  outlined
                  hint="Phone number"
                  label="23481573763"
                  required
                />
              </div>
              <div class="col q-pt-xs">
                <q-input
                  class=""
                  v-model="formData.phone2"
                  type="tel"
                  outlined
                  hint="Other Phone number"
                  label="23481573763"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              class=""
              v-model="formData.address"
              outlined
              type="textarea"
              hint="Home Address"
              required
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-select
              class=""
              outlined
              :options="optionsState"
              v-model="formData.state"
              hint="State"
              required
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-select
              outlined
              v-model="formData.country"
              :options="optionsCountry"
              hint="Country"
              required
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
              label="Continue"
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
    <div class="q-pt-sm" v-show="not_visible">
      <div class="row q-pt-lg q-pb-lg">
        <div class="text-left full-width q-pl-md">
          <q-btn @click="onBack" label="Back" type="reset" color="red" />
        </div>
      </div>
      <div class="row q-pt-sm">
        <div class="col-12 col-md-6 q-pl-md">
          <q-chip color="primary" text-color="white"> First Name </q-chip>
          {{ formData2.first_name }}
          <!-- <q-input class="" outlined v-model="formData.first_name" hint="First Name" required/> -->
        </div>
        <div class="col-12 col-md-6 q-pl-md">
          <q-chip color="primary" text-color="white"> Last Name </q-chip>
          {{ formData2.last_name }}
          <!-- <q-input class="" outlined v-model="formData.last_name" hint="Last Name" required/> -->
        </div>
      </div>
      <div class="row q-pt-sm">
        <div class="col-12 col-md-12 q-pl-md">
          <q-chip color="primary" text-color="white"> Email </q-chip>
          {{ formData2.email }}
          <!-- <q-input class="" v-model="formData.email" outlined type="email" hint="Email" required/> -->
        </div>
      </div>
      <div class="row q-pt-sm">
        <div class="col-12 col-md-6 q-pl-md">
          <q-chip color="primary" text-color="white"> Date of Birth </q-chip>
          {{ formData2.dob }}
          <!-- <q-input class="" v-model="formData.dob" outlined type="date" hint="Date of Birth" /> -->
        </div>
        <div class="col-12 col-md-6 q-pl-md">
          <q-chip color="primary" text-color="white"> Gender </q-chip>
          {{ formData2.gender }}
          <!-- <q-select outlined v-model="formData.gender" :options="optionsGender" hint="Gender" required/> -->
        </div>
      </div>
      <div class="row q-pt-sm">
        <div class="col-12 col-md-6 q-pl-md">
          <div class="column">
            <div class="col">
              <q-chip color="primary" text-color="white"> Phone 1 </q-chip>
              {{ formData2.phone1 }}
              <!-- <q-input class="" v-model="formData.phone1" type="tel" outlined hint="Phone number" label="23481573763" required/> -->
            </div>
            <div class="col q-pt-xs">
              <q-chip color="primary" text-color="white"> Phone 2 </q-chip>
              {{ formData2.phone2 }}
              <!-- <q-input class="" v-model="formData.phone2" type="tel" outlined hint="Other Phone number" label="23481573763"/> -->
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 q-pl-md">
          <q-chip color="primary" text-color="white"> Address </q-chip>
          {{ formData2.address }}
          <!-- <q-input class="" v-model="formData.address" outlined type="textarea" hint="Home Address" required/> -->
        </div>
      </div>
      <div class="row q-pt-sm">
        <div class="col-12 col-md-6 q-pl-md">
          <q-chip color="primary" text-color="white"> State </q-chip>
          {{ formData2.state }}
          <!-- <q-select class="" outlined :options="optionsState" v-model="formData.state" hint="State" required/> -->
        </div>
        <div class="col-12 col-md-6 q-pl-md">
          <q-chip color="primary" text-color="white"> Country </q-chip>
          {{ formData2.country }}
          <!-- <q-select outlined v-model="formData.country" :options="optionsCountry" hint="Country" required/> -->
        </div>
      </div>

      <div class="row q-pt-lg">
        <div class="text-center full-width q-pl-md">
          <q-btn
            :loading="isloading"
            @click="onSubmit"
            label="Submit"
            type="submit"
            color="primary"
            style="width: 260px"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { axios, api, base } from "boot/axios";
import { useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";

name: "CreateCustomersPage";
const optionsCountry = ["Nigeria"];
const optionsGender = ["Male", "Female"];
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

const $q = useQuasar();
const data = ref([]);
const formData = ref({});
const formData2 = ref({});
const useStore = useUserStore();
const visible = ref(true);
const not_visible = ref(false);
const isloading = ref(false);

const beforeSubmitting = () => {
  formData2.value = formData.value;
  visible.value = false;
  not_visible.value = true;
};

const onBack = () => {
  // formData2.value = formData.value;
  visible.value = true;
  not_visible.value = false;
};

const onSubmit = () => {
  isloading.value = true;
  // const id = useStore.getEmail
  // console.log(id, 'id')
  // let value = $q.localStorage.getItem('profile')
  // let profile = JSON.parse(value)
  // console.log(profile, 'profile')
  // console.log(profile.first_name, 'first_name')
  // const formData = new FormData();
  // formData.append("first_name", profile.first_name);
  // formData.append("last_name", profile.last_name);
  // formData.append("email", profile.email);
  const token = useStore.getToken;
  console.log(formData2.value, "formData");
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });

  axios
    .post(`${base}/customer/`, formData2.value, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data;
      console.log(data.value, "customer yello!");
      // onReset()
      $q.loading.hide();
      $q.notify({
        color: "green",
        position: "bottom",
        message: "Saved",
        icon: "check",
      });
      onReset();
      isloading.value = false;
      window.location.reload();
      // visible.value = true;
      // not_visible.value = false;
    })
    .catch(() => {
      $q.loading.hide();
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Loading failed",
        icon: "report_problem",
      });
      onReset();
      isloading.value = false;
    });
};

const onReset = () => {
  formData.value = null;
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
