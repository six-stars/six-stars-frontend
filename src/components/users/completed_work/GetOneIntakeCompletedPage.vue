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
        <q-card class="my-card-2 bg-primary text-white">
          <!-- <q-card-section>
            <div class="row q-pt-sm" v-for="(value, key) in data" :key="key">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-grey">{{ key }}</div>
                <div class="text-h6">{{ value }}</div>
              </div>
            </div>
          </q-card-section> -->
          <q-card-section>
            <div
              class="row q-pt-sm"
              v-for="(obj, index) in data"
              :key="'obj-' + index"
            >
              <div
                class="col-12 col-md-12 q-pl-md"
                v-for="(value, key) in obj"
                :key="key"
              >
                <div class="text-subtitle2 bg-grey">{{ key }}</div>
                <div class="text-h6">{{ value }}</div>
              </div>
            </div>
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

const name = "GetOneIntakeCompletedPage";

const fixed0 = ref(false);
const fixed1 = ref(false);
const $q = useQuasar();
const data = ref([]);
const da = ref([]);
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

function popup1(selectedCompletedWork) {
  fixed1.value = true;
  console.log(selectedCompletedWork, "selectedCompletedWork");
  selectedCompletedWorkPopup1.value = selectedCompletedWork;
  console.log(
    selectedCompletedWorkPopup1.value,
    "selectedCompletedWorkpopup1 value"
  );
}

const onSubmit = () => {
  const token = useStore.getToken;

  axios
    .get(`${base}/completed_work/${intake_id.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      da.value = response.data.data;

      for (let da of da.value) {
        for (let key in da) {
          // 1. Check for removal first:
          if (key === "ID" || key === "CreatedAt" || key === "UpdatedAt") {
            delete da[key];
            continue; // Move to the next iteration to avoid unnecessary checks
          }

          // 2. Handle null or 0 values:
          if (da[key] === 0 || da[key] === null) {
            delete da[key];
            continue; // Move to the next iteration
          }

          // 3. Replace key with label if found in columns:
          const matchingColumn = columns.find((column) => column.field === key);
          if (matchingColumn) {
            da[matchingColumn.label] = da[key];
            delete da[key];
          }
        }
      }

      data.value = da.value;
      console.log(data.value);
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Work Found Found",
      });
      fixed0.value = true;
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
