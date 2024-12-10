<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">All Users</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <q-table
        class="my-sticky-header-table"
        title="Entire Money In"
        :rows="data"
        row-key="CreatedAt"
        flat
        bordered
        :columns="columns"
        :loading="true"
        :filter="filter"
        :rows-per-page="10"
        :total-rows="totalRows"
        :pagination="{
          rowsPerPageOptions: [10, 20, 50, 100],
        }"
        @request="handleTableRequest"
      >
        <!-- :visible-columns="[
          'intake_id',
          'customer',
          'staff_name',
          'total_amount',
          'money_in',
          'money_in_status',
          'money_in_type',
          'discount',
          'collected_on',
          'collection_date',
          'created_at',
        ]" -->
        <template v-slot:top-center>
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
        <template v-slot:top-right>
          <q-btn
            color="primary"
            icon-right="archive"
            label="Export to csv"
            no-caps
            @click="exportTable"
          />
        </template>
      </q-table>

      <!-- <div class="text-right full-width q-pl-md">
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
      </div> -->
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { exportFile, copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../../stores/user-store";
import { useRouter } from "vue-router";

const name = "AllMoneyInPage";

const fixed1 = ref(false);
const $q = useQuasar();
const data = ref([]);
const useStore = useUserStore();
const selectedMoneyIn = reactive([]);
const selectedMoneyInPopup1 = ref({});
const selectedMoneyInPopup2 = ref({});
const pageEnd = ref(false);
const totalRows = ref(100);

const columns = [
  { name: "intake_id", label: "Intake ID", field: "intake_id" },
  { name: "customer", label: "Customer", field: "customer" },
  { name: "staff_name", label: "Staff Name", field: "staff_name" },
  {
    name: "total_amount",
    label: "Total Amount",
    field: "total_amount",
  },
  { name: "money_in", label: "Money In", field: "money_in" },
  {
    name: "money_in_status",
    label: "Money In Status",
    field: "money_in_status",
  },
  { name: "money_in_type", label: "Money In Type", field: "money_in_type" },
  { name: "discount", label: "Discount", field: "discount" },
  { name: "deposit", label: "Deposit", field: "deposit" },
  { name: "Collected_on", label: "Collected On", field: "Collected_on" },
  {
    name: "collection_date",
    label: "Collection Date",
    field: "collection_date",
  },
  {
    name: "created_at",
    label: "Created At",
    field: "created_at",
  },
];

function formatDate(date) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function copyTo(ID) {
  copyToClipboard(ID)
    .then(() => {
      // success!
      $q.notify({
        color: "green-4",
        position: "bottom",
        message: "Intake Id copied to Clipboard",
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

function popup1(selectedMoneyIn) {
  fixed1.value = true;
  selectedMoneyInPopup1.value = selectedMoneyIn;
}

// const pagination = ref({
//   sortBy: "CreatedAt", // Set default sort field
//   descending: false,
//   page: 1,
//   rowsPerPage: 10,
// });

const loadData = () => {
  const token = useStore.getToken;
  console.log(token, "token");
  api
    .get(`/money_in/entire/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data.reverse();
      pageEnd.value = response.data.has_next;
      console.log(data.value, "yello!");
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Money In not found",
        icon: "report_problem",
      });
    });
};

// const handleTableRequest = (params) => {
//   pagination.value = { ...params.pagination, rowsPerPage: 10 }; // Ensure rowsPerPage is 10
//   fetchData(pagination.value.page);
// };

// const handlePreviousPage = () => {
//   $q.loading.show({
//     message: "Loading. Please wait...",
//     boxClass: "bg-grey-2 text-grey-9",
//     spinnerColor: "primary",
//   });
//   if (pagination.value.page > 1) {
//     pagination.value.page--;
//     loadData(pagination.value.page);
//   }
//   $q.loading.hide();
// };

// const handleNextPage = () => {
//   $q.loading.show({
//     message: "Loading. Please wait...",
//     boxClass: "bg-grey-2 text-grey-9",
//     spinnerColor: "primary",
//   });
//   if (pageEnd.value == true) {
//     pagination.value.page++;
//     loadData(pagination.value.page);
//   }
//   $q.loading.hide();
// };

onMounted(() => {
  loadData();
  // loadData(pagination.value.page);
});

const wrapCsvValue = (val, formatFn, row) => {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`;
};

const exportTable = () => {
  // naive encoding to csv format
  const content = [columns.map((col) => wrapCsvValue(col.label))]
    .concat(
      // rows.map((row) =>
      data.value.map((row) =>
        columns
          .map((col) =>
            wrapCsvValue(
              typeof col.field === "function"
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
              col.format,
              row
            )
          )
          .join(",")
      )
    )
    .join("\r\n");

  const status = exportFile("entire-money-in.csv", content, "text/csv");

  if (status !== true) {
    $q.notify({
      message: "Browser denied file download...",
      color: "negative",
      icon: "warning",
    });
  }
};
</script>

<style lang="sass" scoped>
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
