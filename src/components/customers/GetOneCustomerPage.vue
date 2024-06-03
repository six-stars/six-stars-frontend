<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="q-pt-sm">
        <q-form @submit="onSubmit" @reset="onReset" class="row">
          <div class="col-8 q-pl-md">
            <q-input
              label="Last Name Or Customer Phone Number Or Customer ID"
              class=""
              outlined
              v-model="phone1_customerid_lastname"
              hint=""
            />
          </div>
          <div class="col-4 q-pl-md">
            <q-btn class="bg-primary text-white" type="submit">Search</q-btn>
          </div>
        </q-form>
      </div>
      <!-- <div class="q-pt-sm">
        <q-form @submit="onSubmitID" @reset="onReset" class="row">
          <div class="col-8 q-pl-md">
            <q-input
              label="Customer ID"
              class=""
              outlined
              v-model="customer_id"
              hint=""
            />
          </div>
          <div class="col-4 q-pl-md">
            <q-btn class="bg-primary text-white" type="submit">Search</q-btn>
          </div>
        </q-form>
      </div> -->

      <div class="q-pa-md row items-start q-gutter-md" v-if="fixed0">
        <q-card
          v-for="(da, index) in data"
          :key="index"
          class="my-card-2 text-primary q-mt-md"
        >
          <q-card-section>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Created At
                </div>
                <div class="text-h6">{{ formatDate(da.CreatedAt) }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Customer ID
                </div>
                <div class="text-h6">{{ da.customer_id }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  First Name
                </div>
                <div class="text-h6">{{ da.first_name }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Last Name</div>
                <div class="text-h6">{{ da.last_name }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Email</div>
                <div class="text-h6">{{ da.email }}</div>
              </div>
              <!-- <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-h6">{{ da.username }}</div>
                    <div class="text-subtitle2">Username</div>
                  </div> -->
              <!-- <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-teal-9 text-white">Customer Type</div>
                    <div class="text-h6">{{ da.user_type }}</div>
                  </div> -->
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Phone Number
                </div>
                <div class="text-h6">{{ da.phone1 }}</div>
              </div>
              <!-- <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Phone Number 2</div>
                <div class="text-h6">{{ da.phone2 }}</div>
              </div> -->
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Gender</div>
                <div class="text-h6">{{ da.gender }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Date of Birth
                </div>
                <div class="text-h6">{{ da.dob }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">State</div>
                <div class="text-h6">{{ da.state }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Country</div>
                <div class="text-h6">{{ da.country }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Address</div>
                <div class="text-h6">{{ da.address }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions align="right">
            <q-btn
              class="bg-teal-9 text-white"
              @click="goToCreateIntake(da.first_name, da.last_name, da.phone1)"
              >Create Intake</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";
import { useRouter } from "vue-router";

const name = "GetOneUserPage";

const fixed0 = ref(false);
const fixed1 = ref(false);
const $q = useQuasar();
const data = ref([]);
const phone1_customerid_lastname = ref("");
const phone1 = ref("");
const customer_id = ref("");
const useStore = useUserStore();
const $router = useRouter();
const selectedCustomer = reactive([]);
const selectedCustomerPopup1 = ref({});
const selectedCustomerPopup2 = ref({});

function copyTo(ID) {
  copyToClipboard(ID)
    .then(() => {
      // success!
      $q.notify({
        color: "green-4",
        position: "bottom",
        message: "Customer ID copied to Clipboard",
        icon: "thumb_up",
      });
    })
    .catch(() => {
      // fail
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Please refresh page",
        icon: "report_problem",
      });
    });
}

function formatDate(date) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

const goToCreateIntake = (first_name, last_name, phone) => {
  $router.push({
    name: "CreateIntakesPage",
    params: { first: first_name, last: last_name, phone: phone },
  });
};

const onSubmit = () => {
  const token = useStore.getToken;

  axios
    .get(`${base}/customer/${phone1_customerid_lastname.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      console.log(data.value);
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Customer Found",
      });
      fixed0.value = true;
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Customer not found",
        icon: "report_problem",
      });
    });
};

// const onSubmitID = () => {
//   // const formData = {
//   //   customer_id: customer_id.value,
//   // }
//   const token = useStore.getToken;

//   axios
//     .get(`${base}/customer/${customer_id.value}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .then((response) => {
//       data.value = response.data.data;
//       console.log(data.value);
//       $q.notify({
//         color: "green-4",
//         textColor: "white",
//         icon: "thumb_up",
//         message: "Customer Found",
//       });
//       fixed0.value = true;
//     })
//     .catch(() => {
//       $q.notify({
//         color: "negative",
//         position: "bottom",
//         message: "Customer not found",
//         icon: "report_problem",
//       });
//     });
// };

const onReset = () => {
  phone1.value = "";
  customer_id.value = "";
  phone1_customerid_lastname.value = "";
};
</script>

<style lang="sass" scoped>
.my-card-2
  width: 100%
.siz
  width: 100%
  max-width: 250px
  height: 100%
.siz1
  width: 250px
  max-width: 250px
  height: 150px
  margin-top: -8px
.bgPropfunds
  background-color: $propfunds
select
  margin-top: 10px
  margin-right: 10px
  padding: 15px 10px
  background: rgba(196, 196, 196, 0.1)
  border: 2px solid grey
  border-radius: 4px
  outline: none
  width: 540px
.btn2
  border: none
  border-radius: 3px
  font-weight: 500
  font-size: 18px
  height: 40px
  margin-right: 10px
  background-color: #001951
  color: white
  cursor: pointer
.is-s
  background-color: #001951
  color: white
</style>
