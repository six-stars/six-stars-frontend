<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="All Processes"
      :rows="data"
      row-key="name"
      flat
      bordered
      :columns="columns"
      :loading="true"
      :filter="filter"
    >
      <template v-slot:body="props">
        <q-tr :props="props" @click="onRowClick(props.row)">
          <q-td key="collected_on" :props="props">
            {{ props.row.collected_on }}
          </q-td>
          <q-td key="intake_id" :props="props">
            <q-badge color="green">
              {{ props.row.intake_id }}
            </q-badge>
          </q-td>
          <q-td key="collection_date" :props="props">
            {{ props.row.collection_date }}
          </q-td>
          <q-td key="customer" :props="props">
            {{ props.row.customer }}
          </q-td>
          <q-td key="staff_name" :props="props">
            {{ props.row.staff_name }}
          </q-td>
          <q-td key="quantity" :props="props">
            {{ props.row.quantity }}
          </q-td>
          <q-td key="washing_stage" :props="props">
            {{ props.row.washing_stage }}
          </q-td>
          <q-td key="ironing_stage" :props="props">
            {{ props.row.ironing_stage }}
          </q-td>
          <q-td key="packing_stage" :props="props">
            {{ props.row.packing_stage }}
          </q-td>
          <q-td key="ready" :props="props">
            {{ props.row.ready }}
          </q-td>
        </q-tr>
      </template>
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
    <!-- :visible-columns="['created_at', 'updated_at', 'deleted_at']" -->

    <q-dialog v-model="moreDetails">
      <div class="my-card-2">
        <q-card>
          <q-card-section>
            <!-- <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Created At</div>
                <div class="text-h6">{{ formatDate(dataMore.CreatedAt) }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer Phone</div>
                <div class="text-h6">{{ dataMore.customer_phone }}</div>
              </div>
            </div> -->
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Collected On</div>
                <div class="text-h6">
                  {{ formatDate(dataMore.collected_on) }}
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Collection Date</div>
                <div class="text-h6">{{ dataMore.collection_date }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer</div>
                <div class="text-h6">{{ dataMore.customer }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Intake ID</div>
                <div class="text-h6">{{ dataMore.intake_id }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Quantity</div>
                <div class="text-h6">{{ dataMore.quantity }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Staff</div>
                <div class="text-h6">{{ dataMore.staff_name }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Washing Stage</div>
                <div class="text-h6">{{ dataMore.washing_stage }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Ironing Stage</div>
                <div class="text-h6">{{ dataMore.ironing_stage }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Packing Stage</div>
                <div class="text-h6">{{ dataMore.packing_stage }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Ready?</div>
                <div class="text-h6">{{ dataMore.ready }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions align="right">
            <q-btn
              color="primary"
              v-show="show1"
              @click="onUpdate(dataMore.intake_id, 'washing')"
              flat
              >Washing Stage</q-btn
            >
            <q-btn
              color="primary"
              v-show="show2"
              @click="onUpdate(dataMore.intake_id, 'ironing')"
              flat
              >Ironing Stage</q-btn
            >
            <q-btn
              color="primary"
              v-show="show3"
              @click="onUpdate(dataMore.intake_id, 'packing')"
              flat
              >Packing Stage</q-btn
            >
            <q-btn
              color="red"
              v-show="show4"
              @click="onUpdate(dataMore.intake_id, 'ready')"
              flat
              >Ready</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </q-dialog>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";
import { useRouter } from "vue-router";

name: "AllProcessPage";

let filter = ref("");
const $q = useQuasar();
const useStore = useUserStore();
const data = ref([]);
const dataMore = ref([]);
const moreDetails = ref(false);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);

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

const columns = [
  { name: "collected_on", label: "Collected On", field: "collected_on" },
  { name: "intake_id", label: "Intake ID", field: "intake_id" },
  {
    name: "collection_date",
    label: "Collection Date",
    field: "collection_date",
  },
  { name: "customer", label: "Customer", field: "customer" },
  { name: "staff_name", label: "Staff Name", field: "staff_name" },
  { name: "quantity", label: "Quantity", field: "quantity" },
  { name: "washing_stage", label: "Washing Stage", field: "washing_stage" },
  { name: "ironing_stage", label: "Ironing Stage", field: "ironing_stage" },
  { name: "packing_stage", label: "Packing Stage", field: "packing_stage" },
  { name: "ready", label: "Ready", field: "ready" },
];

const onRowClick = (row) => {
  show1.value = false;
  show2.value = false;
  show3.value = false;
  show4.value = false;

  moreDetails.value = true;
  dataMore.value = row;
  if (dataMore.value.washing_stage == "") {
    show1.value = true;
  }
  if (dataMore.value.ironing_stage == "") {
    show2.value = true;
  }
  if (dataMore.value.packing_stage == "") {
    show3.value = true;
  }
  if (dataMore.value.ready == "") {
    show4.value = true;
  }
};

const loadData = () => {
  const token = useStore.getToken;
  console.log(token, "token");
  api
    .get(`/process/all`, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      data.value = response.data.data.reverse();
      console.log(data.value, "yello!");
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Please refresh page",
        icon: "report_problem",
      });
    });
};

const onUpdate = (process, stage) => {
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
      ironing_stage:
        firstName + " " + lastName + " (" + process + ") Done " + dateTime,
    };
    axios
      .patch(`${base}/process/${process}`, formData4, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // data.value = response.data.data
        // console.log(data.value)
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "thumb_up",
          message: "Ironing Saved",
        });
        window.location.reload();
      })
      .catch(() => {
        $q.notify({
          color: "negative",
          position: "bottom",
          message: "Something went wrong",
          icon: "report_problem",
        });
      });
  } else if (stage == "packing") {
    const formData3 = {
      packing_stage:
        firstName + " " + lastName + " (" + process + ") Done " + dateTime,
    };

    axios
      .patch(`${base}/process/${process}`, formData3, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // data.value = response.data.data
        // console.log(data.value)
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "thumb_up",
          message: "Packing Saved",
        });
        window.location.reload();
      })
      .catch(() => {
        $q.notify({
          color: "negative",
          position: "bottom",
          message: "Something went wrong",
          icon: "report_problem",
        });
      });
  } else if (stage == "ready") {
    const formData2 = {
      ready: firstName + " " + lastName + " (" + process + ") Done " + dateTime,
    };

    axios
      .patch(`${base}/process/${process}`, formData2, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // data.value = response.data.data
        // console.log(data.value)
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "thumb_up",
          message: "Ready Saved",
        });
        window.location.reload();
      })
      .catch(() => {
        $q.notify({
          color: "negative",
          position: "bottom",
          message: "Something went wrong",
          icon: "report_problem",
        });
      });
  } else {
    const formData1 = {
      washing_stage:
        firstName + " " + lastName + " (" + process + ") Done " + dateTime,
    };
    axios
      .patch(`${base}/process/${process}`, formData1, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // data.value = response.data.data
        // console.log(data.value)
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "thumb_up",
          message: "Washing Saved",
        });
        window.location.reload();
      })
      .catch(() => {
        $q.notify({
          color: "negative",
          position: "bottom",
          message: "Something went wrong",
          icon: "report_problem",
        });
      });
  }
};

onMounted(() => {
  loadData();
});
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 510px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: $primary
    color: $white
    /* background-color: #c1f4cd */

  thead
    color: $white

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
