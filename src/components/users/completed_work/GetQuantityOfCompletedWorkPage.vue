<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="q-pa-sm">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="row">
              <p class="col-2 text-center text-primary">From :</p>
              <q-date
                class="col-9 q-ma-sm"
                v-model="startDate"
                mask="YYYY-MM-DD"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="row">
              <p class="col-2 text-center text-primary">To :</p>
              <q-date
                class="col-9 q-ma-sm"
                v-model="endDate"
                mask="YYYY-MM-DD"
              />
            </div>
          </div>
        </div>
        <div class="q-gutter-y-md q-ma-sm">
          <q-btn-toggle
            v-model="stage"
            :disable="startDate && endDate"
            spread
            class="my-custom-toggle"
            no-caps
            rounded
            unelevated
            toggle-color="primary"
            color="white"
            text-color="primary"
            :options="[
              { label: 'Washing', value: 'washing' },
              { label: 'Ironing', value: 'ironing' },
              { label: 'Packing', value: 'packing' },
              { label: 'Ready', value: 'ready' },
            ]"
          />
        </div>
        <div class="q-gutter-y-md q-ma-sm">
          <q-btn
            class="bg-primary full-width text-white"
            @click="onSubmit()"
            :disable="stage"
            fullwidth
            >Get</q-btn
          >
        </div>
      </div>
      <!-- <div class="q-pa-md row items-start q-gutter-md" v-if="fixed0">
        <q-card class="my-card"  >
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{ data.name }}</div>
            <div class="text-subtitle2">
              {{ formatDate(data.CreatedAt) }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat @click="popup1(data)" class="text-white" color="blue">See Details</q-btn>
          </q-card-actions>
        </q-card>
      </div> -->

      <div class="q-pa-md row items-start q-gutter-md" v-if="fixed0">
        <q-card class="my-card-2 text-primary">
          <!-- <q-card-section>
            <div class="row q-pt-sm" v-for="(value, key) in data" :key="key">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2  bg-teal-9 text-white">{{ key }}</div>
                <div class="text-h6">{{ value }}</div>
              </div>
            </div>
          </q-card-section> -->
          <q-card-section>
            <div class="row text-center" v-if="quantity">
              <q-chip
                class="col-4 text-center text-capitalize"
                square
                color="primary"
                text-color="white"
              >
                {{ stage }}
              </q-chip>
              <q-chip
                class="col-1 offset-1 text-center text-capitalize q-pa-sm"
                square
                color="teal"
                text-color="white" >Quantity - </q-chip>
              <q-chip
                class="col-4 offset-1 text-center text-capitalize"
                square
                color="red"
                text-color="white"
              >
                {{ quantity }}
              </q-chip>
            </div>
            <!-- <div
              class="row my-custom-toggle q-pa-md q-mb-sm"
              v-for="(obj, index) in da"
              :key="'obj-' + index"
            >
              <div
                class="col-12 col-md-12"
                v-for="(value, key) in obj"
                :key="key"
              >
                <div class="text-subtitle2 bg-teal-9 text-white">{{ key }}</div>
                <div class="text-h6">{{ value }}</div>
              </div>
            </div> -->
          </q-card-section>

          <q-separator dark />

          <!-- <q-card-actions align="right">
              <q-btn @click="onDelete()" flat>Delete User</q-btn>
              <q-btn @click="copyTo(data.phone_number)" flat>Copy Phone Number</q-btn>
            </q-card-actions> -->
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../../stores/user-store";
import { useRouter } from "vue-router";

const name = "GetQuantityOfCompletedWorkPage";

const fixed0 = ref(false);
const fixed1 = ref(false);
const $q = useQuasar();
const data = ref([]);
const da = ref([]);
const startDate = ref("");
const endDate = ref("");
const stage = ref("");
const quantity = ref(0);
const intake_id = ref("");
const useStore = useUserStore();
const selectedCompletedWork = reactive([]);
const selectedCompletedWorkPopup1 = ref({});
const selectedCompletedWorkPopup2 = ref({});

const columns = [
  { name: "intake_id", label: "Intake ID", field: "intake_id" },
  {
    name: "collection_date",
    label: "Collection Date",
    field: "collection_date",
  },
  {
    name: "customer",
    label: "Customer",
    field: "customer",
  },
  {
    name: "customer_phone",
    label: "Customer Phone",
    field: "customer_phone",
  },
  {
    name: "staff_name",
    label: "Staff Name",
    field: "staff_name",
  },
  {
    name: "quantity",
    label: "Quantity",
    field: "quantity",
  },
  {
    name: "stage",
    label: "Stage",
    field: "stage",
  },
  {
    name: "created_at",
    label: "Created At",
    field: "created_at",
  },
];

const onSubmit = () => {
  const token = useStore.getToken;

  api
    .get(`/completed_work/${startDate.value}/${endDate.value}/${stage.value}`, {
      // axios
      //   .get(`${base}/completed_work/${intake_id.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response.data, "gotten it");
      da.value = response.data.data;
      quantity.value = response.data.total_quantity;
      console.log(quantity.value, "quantity 1");

      // for (let da of da.value) {
      //   for (let key in da) {
      //     // 1. Check for removal first:
      //     if (key === "ID" || key === "CreatedAt" || key === "UpdatedAt") {
      //       delete da[key];
      //       continue; // Move to the next iteration to avoid unnecessary checks
      //     }

      //     // 2. Handle null or 0 values:
      //     if (da[key] === 0 || da[key] === null) {
      //       delete da[key];
      //       continue; // Move to the next iteration
      //     }

      //     // 3. Replace key with label if found in columns:
      //     const matchingColumn = columns.find((column) => column.field === key);
      //     if (matchingColumn) {
      //       da[matchingColumn.label] = da[key];
      //       delete da[key];
      //     }
      //   }
      // }

      // data.value = da.value;
      // console.log(data.value, "data 2");
      // console.log(quantity.value, "quantity 2");
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Quntity Found",
      });
      fixed0.value = true;
      startDate.value = "";
      endDate.value = "";
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Not found",
        icon: "report_problem",
      });
    });
};

const onReset = () => {
  intake_id.value = null;
};
</script>

<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
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
