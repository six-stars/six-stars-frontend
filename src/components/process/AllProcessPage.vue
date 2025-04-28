<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="All Processes"
      :rows="data"
      row-key="CreatedAt"
      flat
      bordered
      :columns="columns"
      :loading="true"
      :filter="filter"
      :pagination="pagination"
      @request="handleTableRequest"
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
          <q-td key="stored_at" :props="props">
            {{ props.row.stored_at }}
          </q-td>
          <q-td key="ready" :props="props">
            {{ props.row.ready }}
          </q-td>
          <q-td key="customer_collected" :props="props">
            {{ props.row.customer_collected }}
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

    <div class="text-right full-width q-pl-md">
      <q-btn
        v-if="pagination.page > 1"
        rounded
        color="secondary"
        label="Previous Page"
        @click="handlePreviousPage"
      />
      <q-btn
        v-if="pageEnd == true"
        rounded
        color="primary"
        label="Next Page"
        @click="handleNextPage"
      />
    </div>

    <q-dialog v-model="moreDetails">
      <div class="my-card-2 text-primary">
        <q-card>
          <q-card-section>
            <!-- <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2  bg-teal-9 text-white">Created At</div>
                <div class="text-h6">{{ formatDate(dataMore.CreatedAt) }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2  bg-teal-9 text-white">Customer Phone</div>
                <div class="text-h6">{{ dataMore.customer_phone }}</div>
              </div>
            </div> -->
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Collected On
                </div>
                <div class="text-h6">
                  {{ dataMore.collected_on }}
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Collection Date
                </div>
                <div class="text-h6">{{ dataMore.collection_date }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Customer</div>
                <div class="text-h6">{{ dataMore.customer }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Intake ID</div>
                <div class="text-h6">{{ dataMore.intake_id }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Quantity</div>
                <div class="text-h6">{{ dataMore.quantity }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Staff</div>
                <div class="text-h6">{{ dataMore.staff_name }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Washing Stage
                </div>
                <div class="text-h6">{{ dataMore.washing_stage }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Ironing Stage
                </div>
                <div class="text-h6">{{ dataMore.ironing_stage }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Packing Stage
                </div>
                <div class="text-h6">{{ dataMore.packing_stage }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Ready?</div>
                <div class="text-h6">{{ dataMore.ready }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Stored At</div>
                <div class="text-h6">{{ dataMore.stored_at }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Customer Collected
                </div>
                <div class="text-h6">{{ dataMore.customer_collected }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator />
          <q-card-section>
            <q-select
              v-if="
                dataMore.washing_stage_status == true &&
                dataMore.ironing_stage_status == true &&
                dataMore.packing_stage_status == false
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
              class="bg-teal-9 text-white"
              v-show="show1"
              @click="onUpdate(dataMore, 'washing')"
              flat
              >Washing Stage</q-btn
            >
            <q-btn
              class="bg-teal-9 text-white"
              v-show="show2"
              @click="onUpdate(dataMore, 'ironing')"
              flat
              >Ironing Stage</q-btn
            >
            <q-btn
              :disable="!storedAt"
              class="bg-teal-9 text-white"
              v-show="show3"
              @click="onUpdate(dataMore, 'packing')"
              flat
              >Packing Stage</q-btn
            >
            <q-btn
              :disable="show3 == true"
              color="red"
              v-show="show4"
              @click="onUpdate(dataMore, 'ready')"
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
const pageEnd = ref(false);
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
  { name: "stored_at", label: "Stored At", field: "stored_at" },
  { name: "ready", label: "Ready", field: "ready" },
  {
    name: "customer_collected",
    label: "Customer Collected",
    field: "customer_collected",
  },
];

const onRowClick = (row) => {
  const user_type = useStore.getUser_type;
  show1.value = false;
  show2.value = false;
  show3.value = false;
  show4.value = false;

  moreDetails.value = true;
  dataMore.value = row;
  if (dataMore.value.washing_stage_status == false) {
    show1.value = true;
  }
  if (dataMore.value.ironing_stage_status == false) {
    show2.value = true;
  }
  if (dataMore.value.packing_stage_status == false) {
    show3.value = true;
  }
  if (
    (dataMore.value.ready_status == false && user_type == "Manager") ||
    (dataMore.value.ready_status == false && user_type == "Super_Admin")
  ) {
    show4.value = true;
  }
};

const pagination = ref({
  sortBy: "CreatedAt", // Set default sort field
  descending: false,
  page: 1,
  rowsPerPage: 10,
});

const loadData = (pageNumber) => {
  const token = useStore.getToken;
  console.log(token, "token");
  api
    .get(`/process/all/${pageNumber}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      pageEnd.value = response.data.has_next;
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

const handleTableRequest = (params) => {
  pagination.value = { ...params.pagination, rowsPerPage: 10 }; // Ensure rowsPerPage is 10
  fetchData(pagination.value.page);
};

const handlePreviousPage = () => {
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  if (pagination.value.page > 1) {
    pagination.value.page--;
    loadData(pagination.value.page);
  }
  $q.loading.hide();
};

const handleNextPage = () => {
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  if (pageEnd.value == true) {
    pagination.value.page++;
    loadData(pagination.value.page);
  }
  $q.loading.hide();
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

onMounted(() => {
  loadData(pagination.value.page);
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
