<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="q-pt-sm">
        <q-form @submit="onSubmit" @reset="onReset" class="">
          <div class="col-8 q-pl-md">
            <q-input
              label="Customer Phone Number"
              class=""
              outlined
              v-model="customer_phone"
              hint="example 2349084293029"
            />
          </div>
          <div class="col-4 q-pl-md q-mt-md">
            <q-btn class="bg-primary text-white" type="submit">Search</q-btn>
          </div>
        </q-form>
      </div>
      <div class="q-pa-md row items-start q-gutter-md" v-if="fixed0">
        <q-chip
          clickable
          v-for="(theData, i) in _data"
          :key="i"
          @click="popup1(theData)"
          color="primary"
          text-color="white"
        >
          {{ theData.intake_id }}&nbsp;
          <q-badge color="blue"> Quantity: {{ theData.quantity }} </q-badge>
        </q-chip>
        <!-- <q-card class="my-card" v-for="(theData, i) in _data" :key="i">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{ theData.intake_id }}</div>
            <div class="text-subtitle1">Quantity: {{ theData.quantity }}</div>
            <div class="text-subtitle2">
              Collection Date:
              {{ theData.collection_date }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat @click="popup1(theData)">See Details</q-btn>
          </q-card-actions>
        </q-card> -->
      </div>

      <div class="q-pa-md row items-start q-gutter-md" v-if="fixed1">
        <q-card class="my-card-2 text-primary">
          <q-card-section>
            <!-- <div class="row q-pt-sm">
                      <div class="col-12 col-md-6 q-pl-md">
                        <div class="text-subtitle2  bg-teal-9 text-white">Created At</div>
                        <div class="text-h6">{{ formatDate(selectedCustomerPopup.CreatedAt) }}</div>
                      </div>
                      <div class="col-12 col-md-6 q-pl-md">
                        <div class="text-subtitle2  bg-teal-9 text-white">Customer Phone</div>
                        <div class="text-h6">{{ selectedCustomerPopup.customer_phone }}</div>
                      </div>
                    </div> -->
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Collected On
                </div>
                <div class="text-h6">
                  {{ formatDate(selectedCustomerPopup.collected_on) }}
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Collection Date
                </div>
                <div class="text-h6">
                  {{ selectedCustomerPopup.collection_date }}
                </div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Customer</div>
                <div class="text-h6">{{ selectedCustomerPopup.customer }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Intake ID</div>
                <div class="text-h6">{{ selectedCustomerPopup.intake_id }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Quantity</div>
                <div class="text-h6">{{ selectedCustomerPopup.quantity }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Staff</div>
                <div class="text-h6">
                  {{ selectedCustomerPopup.staff_name }}
                </div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Washing Stage
                </div>
                <div class="text-h6">
                  {{ selectedCustomerPopup.washing_stage }}
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Ironing Stage
                </div>
                <div class="text-h6">
                  {{ selectedCustomerPopup.ironing_stage }}
                </div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Packing Stage
                </div>
                <div class="text-h6">
                  {{ selectedCustomerPopup.packing_stage }}
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Ready?</div>
                <div class="text-h6">{{ selectedCustomerPopup.ready }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Stored At</div>
                <div class="text-h6">{{ selectedCustomerPopup.stored_at }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Customer Collected
                </div>
                <div class="text-h6">
                  {{ selectedCustomerPopup.customer_collected }}
                </div>
              </div>
            </div>
          </q-card-section>

          <q-separator />
          <q-card-section>
            <q-select
              v-if="
                selectedCustomerPopup.washing_stage_status == true &&
                selectedCustomerPopup.ironing_stage_status == true &&
                selectedCustomerPopup.packing_stage_status == false
              "
              outlined
              v-model="storedAt"
              :options="storedOptions"
              label="Select where the clothes are stored"
              hint="It is compulsory at Packing Stage"
            />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn
              v-show="show1"
              @click="onUpdate(selectedCustomerPopup, 'washing')"
              class="bg-teal-9 text-white"
              >Washing Stage</q-btn
            >
            <q-btn
              v-show="show2"
              @click="onUpdate(selectedCustomerPopup, 'ironing')"
              class="bg-teal-9 text-white"
              >Ironing Stage</q-btn
            >
            <q-btn
              :disable="!storedAt"
              v-show="show3"
              @click="onUpdate(selectedCustomerPopup, 'packing')"
              class="bg-teal-9 text-white"
              >Packing Stage</q-btn
            >
            <q-btn
              :disable="show3 == true"
              v-show="show4"
              @click="onUpdate(selectedCustomerPopup, 'ready')"
              class="bg-teal-9 text-white"
              >Ready</q-btn
            >
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

const name = "GetOneCustomerAllProcess";

const fixed0 = ref(false);
const fixed1 = ref(false);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const $q = useQuasar();
const _data = ref([]);
const data4 = ref([]);
const storedAt = ref("");
const storedOptions = ref([
  "Shelf (room 1)",
  "Blue iron bord (room 1)",
  "Blue iron bord under (room 1)",
  "White iron bord (room 1)",
  "White iron bord  under(room 1)",
  "High hanger (room 1)",
  "Low hanger  (room 1)",
  "Cupboard  top (room  2)",
  "Curbord inside(room  2)",
  "Machine (room 2)",
  "Mat    (room 2)",
  "Hanger (room  2)",
]);

const $router = useRouter();
const customer_phone = ref("");
// const dateTime = ref("")
const useStore = useUserStore();
const selectedCustomer = reactive([]);
const selectedCustomerPopup = ref({});

function formatDate(date) {
  const now = new Date(date);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function popup1(selectedCustomer) {
  const user_type = useStore.getUser_type;
  fixed1.value = true;
  // console.log(selectedCustomer, 'selectedCustomer')
  selectedCustomerPopup.value = selectedCustomer;
  // console.log(selectedCustomerPopup.value, 'selectedCustomerPopup value')
  if (selectedCustomerPopup.value.washing_stage_status == false) {
    show1.value = true;
  }
  if (selectedCustomerPopup.value.ironing_stage_status == false) {
    show2.value = true;
  }
  if (selectedCustomerPopup.value.packing_stage_status == false) {
    show3.value = true;
  }
  if (
    (selectedCustomerPopup.value.ready_status == false &&
      user_type == "Manager") ||
    (selectedCustomerPopup.value.ready_status == false &&
      user_type == "Super_Admin")
  ) {
    show4.value = true;
  }
}

const onSubmit = () => {
  const token = useStore.getToken;
  $q.loading.show({
    message: "Some important process  is in progress. Hang on...",
  });

  axios
    .get(`${base}/process/search/${customer_phone.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      _data.value = response.data.data.reverse();
      console.log(_data.value);
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Process Found",
      });
      fixed0.value = true;
      $q.loading.hide();
    })
    .catch((e) => {
      console.log(e, "e");
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Process not found",
        icon: "report_problem",
      });
      $q.loading.hide();
    });
};

const onUpdate = (process, stage) => {
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
  const dateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  // const formData = {};
  if (stage == "ironing") {
    const formData4 = {
      ironing_stage_status: true,
      ironing_stage:
        firstName +
        " " +
        lastName +
        " (" +
        process.intake_id +
        ") Done " +
        dateTime,
      current_status: "ironing",
    };
    axios
      .patch(`${base}/process/${process.intake_id}`, formData4, {
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
          message: "Ironing Saved",
        });
        fixed0.value = true;
        window.location.reload();
      })
      .catch(() => {
        $q.loading.hide();
        // $q.notify({
        //   color: "negative",
        //   position: "bottom",
        //   message: "Something went wrong",
        //   icon: "report_problem",
        // });
        window.location.reload();
      });
  } else if (stage == "packing") {
    const formData3 = {
      packing_stage_status: true,
      packing_stage:
        firstName +
        " " +
        lastName +
        " (" +
        process.intake_id +
        ") Done " +
        dateTime,
      current_status: "packing",
      stored_at: storedAt.value,
    };

    axios
      .patch(`${base}/process/${process.intake_id}`, formData3, {
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
          message: "Packing Saved",
        });
        fixed0.value = true;
        window.location.reload();
      })
      .catch(() => {
        $q.loading.hide();
        // $q.notify({
        //   color: "negative",
        //   position: "bottom",
        //   message: "Something went wrong",
        //   icon: "report_problem",
        // });
        window.location.reload();
      });
  } else if (stage == "ready") {
    const formData2 = {
      ready_status: true,
      ready:
        firstName +
        " " +
        lastName +
        " (" +
        process.intake_id +
        ") Done " +
        dateTime,
      current_status: "ready",
    };

    axios
      .patch(`${base}/process/${process.intake_id}`, formData2, {
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
          message: "Ready Saved",
        });
        fixed0.value = true;
        window.location.reload();
      })
      .catch(() => {
        $q.loading.hide();
        // $q.notify({
        //   color: "negative",
        //   position: "bottom",
        //   message: "Something went wrong",
        //   icon: "report_problem",
        // });
        window.location.reload();
      });
  } else {
    const formData1 = {
      washing_stage_status: true,
      washing_stage:
        firstName +
        " " +
        lastName +
        " (" +
        process.intake_id +
        ") Done " +
        dateTime,
      current_status: "washing",
    };
    axios
      .patch(`${base}/process/${process.intake_id}`, formData1, {
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
          message: "Washing Saved",
        });
        fixed0.value = true;
        window.location.reload();
      })
      .catch(() => {
        $q.loading.hide();
        // $q.notify({
        //   color: "negative",
        //   position: "bottom",
        //   message: "Something went wrong",
        //   icon: "report_problem",
        // });
        window.location.reload();
      });
  }
};

const onReset = () => {
  customer_phone.value = null;
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
