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
            <div class="text-h6">{{ data4.customer }}</div>
            <div class="text-subtitle1">Quantity: {{ data4.quantity }}</div>
            <div class="text-subtitle2">
              Collection Date:
              {{ data4.collection_date }}
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
        <q-card class="my-card-2 bg-primary text-white">
          <q-card-section>
            <!-- <div class="row q-pt-sm">
                      <div class="col-12 col-md-6 q-pl-md">
                        <div class="text-subtitle2 bg-grey">Created At</div>
                        <div class="text-h6">{{ formatDate(data4.CreatedAt) }}</div>
                      </div>
                      <div class="col-12 col-md-6 q-pl-md">
                        <div class="text-subtitle2 bg-grey">Customer Phone</div>
                        <div class="text-h6">{{ data4.customer_phone }}</div>
                      </div>
                    </div> -->
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Collected On</div>
                <div class="text-h6">{{ formatDate(data4.collected_on) }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Collection Date</div>
                <div class="text-h6">{{ data4.collection_date }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer</div>
                <div class="text-h6">{{ data4.customer }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Intake ID</div>
                <div class="text-h6">{{ data4.intake_id }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Quantity</div>
                <div class="text-h6">{{ data4.quantity }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Staff</div>
                <div class="text-h6">{{ data4.staff_name }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Washing Stage</div>
                <div class="text-h6">{{ data4.washing_stage }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Ironing Stage</div>
                <div class="text-h6">{{ data4.ironing_stage }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Packing Stage</div>
                <div class="text-h6">{{ data4.packing_stage }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Ready?</div>
                <div class="text-h6">{{ data4.ready }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer Collected</div>
                <div class="text-h6">{{ data4.customer_collected }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions align="right">
            <q-btn v-show="show1" @click="onUpdate(data4, 'washing')" flat
              >Washing Stage</q-btn
            >
            <q-btn v-show="show2" @click="onUpdate(data4, 'ironing')" flat
              >Ironing Stage</q-btn
            >
            <q-btn v-show="show3" @click="onUpdate(data4, 'packing')" flat
              >Packing Stage</q-btn
            >
            <q-btn v-show="show4" @click="onUpdate(data4, 'ready')" flat
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

const name = "GetOneUserPage";

const fixed0 = ref(false);
const fixed1 = ref(false);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const $q = useQuasar();
const data4 = ref([]);

const $router = useRouter();
const intake_id = ref("");
// const dateTime = ref("")
const useStore = useUserStore();
const selectedCustomer = reactive([]);
const selectedCustomerPopup1 = ref({});
const selectedCustomerPopup2 = ref({});

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
  fixed1.value = true;
  // console.log(selectedCustomer, 'selectedCustomer')
  selectedCustomerPopup1.value = selectedCustomer;
  // console.log(selectedCustomerPopup1.value, 'selectedCustomerpopup1 value')
}

const onSubmit = () => {
  // const formData = {
  //   intake_id: intake_id.value,
  // }
  const token = useStore.getToken;

  axios
    .get(`${base}/process/${intake_id.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data4.value = response.data.data;
      console.log(data4.value);
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Process Found",
      });
      fixed0.value = true;
      if (data4.value.washing_stage_status == false) {
        show1.value = true;
      }
      if (data4.value.ironing_stage_status == false) {
        show2.value = true;
      }
      if (data4.value.packing_stage_status == false) {
        show3.value = true;
      }
      if (
        (dataMore.value.ready_status == false && user_type == "Manager") ||
        (dataMore.value.ready_status == false && user_type == "Super_Admin")
      ) {
        show4.value = true;
      }
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Process not found",
        icon: "report_problem",
      });
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
    };
    axios
      .patch(`${base}/process/${intake_id.value}`, formData4, {
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
        // fixed0.value = true;
        // window.location.reload();
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

    const formData4Work = {
      intake_id: intake_id.value,
      collection_date: process.collection_date,
      customer: process.customer,
      customer_phone: process.customer_phone,
      staff_name: process.collection_date,
      quantity: process.collection_date,
      stage: stage,
    };
    axios
      .post(`${base}/completed_work/`, formData4Work, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // data.value = response.data.data
        // console.log(data.value)
        fixed0.value = true;
        window.location.reload();
      })
      .catch((e) => {
        console.log(e, "completed_work error");
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
    };

    axios
      .patch(`${base}/process/${intake_id.value}`, formData3, {
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
        // fixed0.value = true;
        // window.location.reload();
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

    const formData3Work = {
      intake_id: intake_id.value,
      collection_date: process.collection_date,
      customer: process.customer,
      customer_phone: process.customer_phone,
      staff_name: process.collection_date,
      quantity: process.collection_date,
      stage: stage,
    };
    axios
      .post(`${base}/completed_work/`, formData3Work, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // data.value = response.data.data
        // console.log(data.value)
        fixed0.value = true;
        window.location.reload();
      })
      .catch((e) => {
        console.log(e, "completed_work error");
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
    };

    axios
      .patch(`${base}/process/${intake_id.value}`, formData2, {
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
        // fixed0.value = true;
        // window.location.reload();
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

    const formData2Work = {
      intake_id: intake_id.value,
      collection_date: process.collection_date,
      customer: process.customer,
      customer_phone: process.customer_phone,
      staff_name: process.collection_date,
      quantity: process.collection_date,
      stage: stage,
    };
    axios
      .post(`${base}/completed_work/`, formData2Work, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // data.value = response.data.data
        // console.log(data.value)
        fixed0.value = true;
        window.location.reload();
      })
      .catch((e) => {
        console.log(e, "completed_work error");
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
    };
    axios
      .patch(`${base}/process/${intake_id.value}`, formData1, {
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
        // fixed0.value = true;
        // window.location.reload();
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

    const formData1Work = {
      intake_id: intake_id.value,
      collection_date: process.collection_date,
      customer: process.customer,
      customer_phone: process.customer_phone,
      staff_name: process.collection_date,
      quantity: process.collection_date,
      stage: stage,
    };
    axios
      .post(`${base}/completed_work/`, formData1Work, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // data.value = response.data.data
        // console.log(data.value)
        fixed0.value = true;
        window.location.reload();
      })
      .catch((e) => {
        console.log(e, "completed_work error");
      });
  }
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
