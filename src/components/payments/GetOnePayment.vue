<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="row q-pt-sm">
        <q-form @submit="onSubmit" @reset="onReset" class="">
          <div class="col-12 col-md-12 q-pl-md">
            <q-input
              label="Intake ID"
              class=""
              outlined
              v-model="intake_id"
              hint=""
            />
          </div>
          <div class="col-12 q-pl-md">
            <q-btn class="bg-primary text-white" type="submit">Search</q-btn>
          </div>
        </q-form>
      </div>
      <div class="q-pa-md row items-start q-gutter-md" v-if="fixed0">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{ data.customer }}</div>
            <!-- <div class="text-subtitle1">₦{{ data.final_amount }}</div> -->
            <div class="text-subtitle2">
              Collection Date:
              {{ data.collected_on }}
              <!-- {{ formatDate(data.collected_on) }} -->
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat @click="popup1(data)">See Details</q-btn>
            <!-- <q-btn flat>Action 2</q-btn> -->
          </q-card-actions>
        </q-card>
      </div>

      <div class="q-pa-md row items-start q-gutter-md" v-if="fixed1">
        <q-card class="my-card-2 bg-white text-primary">
          <q-card-section>
            <div class="row q-pt-sm">
              <!-- <div class="col-12 col-md-6 q-pl-md">
                      <div class="text-subtitle2 bg-grey">Created At</div>
                      <div class="text-h6">{{ formatDate(data.CreatedAt) }}</div>
                    </div> -->
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer Phone</div>
                <div class="text-h6">{{ data.customer_phone }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Collected On</div>
                <div class="text-h6">{{ data.collected_on }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Collection Date</div>
                <div class="text-h6">{{ data.collection_date }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer</div>
                <div class="text-h6">{{ data.customer }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Intake ID</div>
                <div class="text-h6">{{ data.intake_id }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Quantity</div>
                <div class="text-h6">{{ data.quantity }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Staff</div>
                <div class="text-h6">{{ data.staff_name }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Deposit</div>
                <div class="text-h6">₦{{ data.deposit }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Balance</div>
                <div class="text-h6">₦{{ data.balance }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Total Amount</div>
                <div class="text-h6">₦{{ data.total_amount }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Paid?</div>
                <div class="text-h6">{{ data.paid }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer Collected</div>
                <div class="text-h6">{{ data.customer_collected }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions class="q-pa-md" v-show="show4">
            <!-- <q-btn @click="onUpdate(data.intake_id)" flat
              >Complete Payment</q-btn
            > -->
            <div class="row">
              <div class="col-12 col-md-7 q-pl-md">
                <q-input
                  outlined
                  v-model="customer_collected"
                  label="Collected by?"
                  style="width: 520px"
                />
              </div>
              <div align="right" class="col-12 col-md-5 q-mt-sm">
                <q-btn
                  :disable="!customer_collected"
                  color="primary"
                  flat
                  @click="onUpdate(data.intake_id)"
                  >Complete Payment</q-btn
                >
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";
import { useRouter } from "vue-router";

const name = "GetOneUserPage";

const fixed0 = ref(false);
const fixed1 = ref(false);
const $q = useQuasar();
const data = ref([]);
const intake_id = ref("");
const show4 = ref(false);
const customer_collected = ref("");

const $router = useRouter();
const useStore = useUserStore();
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
        message: "Intake ID copied to Clipboard",
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

function popup1(selectedCustomer) {
  fixed1.value = true;
  // console.log(selectedCustomer, 'selectedCustomer')
  selectedCustomerPopup1.value = selectedCustomer;
  // console.log(selectedCustomerPopup1.value, 'selectedCustomerpopup1 value')
}

const onSubmit = () => {
  const token = useStore.getToken;

  axios
    .get(`${base}/payment/${intake_id.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      console.log(data.value);
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Payment Found",
      });
      fixed0.value = true;
      if (data.value.paid == "") {
        show4.value = true;
      }
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Payment not found",
        icon: "report_problem",
      });
    });
};

const onUpdate = (intakeID) => {
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  const token = useStore.getToken;
  const firstName = useStore.getFirst_name;
  const lastName = useStore.getLast_name;

  const now = new Date(Date.now());
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  const formData = {
    customer_collected:
      "Collected by " + customer_collected.value + " on " + timeDate,
    paid:
      intakeID +
      " Payment Completed and logged in by " +
      firstName +
      " " +
      lastName +
      " on " +
      timeDate,
  };
  // paid: firstName + " " + lastName + " (" + intakeID + ") Done " + timeDate,

  axios
    .patch(`${base}/payment/${intakeID}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      // data.value = response.data.data
      // console.log(data.value)
      $q.loading.hide();
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "User paid in full and saved",
      });
      fixed0.value = true;
      window.location.reload();
    })
    .catch(() => {
      $q.loading.hide();
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Something went wrong",
        icon: "report_problem",
      });
    });
};

const onReset = () => {
  intake_id.value = null;
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
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
