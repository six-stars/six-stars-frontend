<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="All Payments"
      :rows="data"
      flat
      bordered
      :columns="columns"
      :loading="true"
      :filter="filter"
      row-key="name"
      :pagination="pagination"
      :rows-per-page-options="[5, 10, 15, 20, 50]"
      @request="handleTableRequest"
    >
      <template v-slot:body="props">
        <q-tr :props="props" @click="onRowClick(props.row)">
          <!-- <q-td key="created_at" :props="props">
            <q-badge color="green">
              {{ props.row.created_at }}
            </q-badge>
          </q-td> -->
          <q-td key="name" :props="props">
            <q-badge color="green">
              {{ props.row.name }}
            </q-badge>
          </q-td>
          <!-- <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td> -->
          <q-td key="sent" :props="props">
            {{ props.row.sent }}
          </q-td>
          <q-td key="fails" :props="props">
            {{ props.row.fails }}
          </q-td>
          <q-td text-capitalize key="successes" :props="props">
            {{ props.row.successes }}
          </q-td>
          <q-td key="bounces" :props="props">
            {{ props.row.bounces }}
          </q-td>
          <q-td text-capitalize key="deliveries" :props="props">
            {{ props.row.deliveries }}
          </q-td>
          <q-td key="views" :props="props">
            {{ props.row.views }}
          </q-td>
          <q-td key="clicks" :props="props">
            {{ props.row.clicks }}
          </q-td>
          <!-- <q-td key="body" :props="props">
            {{ props.row.body }}
          </q-td> -->
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
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";
import { useRouter } from "vue-router";

name: "YourNotifyReportPage";

let filter = ref("");
const $q = useQuasar();
const useStore = useUserStore();
const data = ref([]);
// Set pagination
const pagination = ref({
  page: 1,
  rowsPerPage: 15, // Set default rows per page to 15
});
// const dataMore = ref([]);
// const moreDetails = ref(false);
// const pageEnd = ref(false);
// const route = ref("");
// const optionsRouteType = [
//   { name: "GENERIC", id: "generic" },
//   { name: "DND", id: "dnd" },
// ];

const columns = [
  // { name: "created_at", label: "Created At", field: "created_at" },
  { name: "name", label: "Name", field: "name" },
  { name: "sent", label: "Sent", field: "sent" },
  { name: "fails", label: "Fails", field: "fails" },
  {
    name: "successes",
    label: "Successes",
    field: "successes",
  },
  { name: "bounces", label: "Bounces", field: "bounces" },
  { name: "deliveries", label: "Deliveries", field: "deliveries" },
  { name: "views", label: "Views", field: "views" },
  {
    name: "clicks",
    label: "Clicks",
    field: "clicks",
  },
  // {
  //   name: "body",
  //   label: "Body",
  //   field: "body",
  // },
];

// const onRowClick = (row) => {
//   moreDetails.value = true;
//   dataMore.value = row;
//   route.value = "";
// };

// const pagination = ref({
//   sortBy: "CreatedAt", // Set default sort field
//   descending: false,
//   page: 1,
//   rowsPerPage: 10,
// });

const loadData = () => {
  const token = useStore.getToken;
  // console.log(token, "token");
  api
    .get(`/resend/yournotify/report`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      // pageEnd.value = response.data.has_next;
      console.log(data.value, "yournotify report!");
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

// const onResend = (resendID) => {
//   $q.loading.show({
//     message: "Loading. Please wait...",
//     boxClass: "bg-grey-2 text-grey-9",
//     spinnerColor: "primary",
//   });
//   const token = useStore.getToken;
//   const firstName = useStore.getFirst_name;
//   const lastName = useStore.getLast_name;

//   const today = new Date();

//   // Get current date in DD/MM/YYYY format
//   const date = today.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//   });

//   // Get current time in 10:47 AM/PM format
//   const time = today.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   const formData = {
//     resent: true,
//     resent_date: date + " " + time,
//   };

//   axios
//     .patch(`${base}/resend/message/${resendID}/${route.value}`, formData, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .then((response) => {
//       data.value = response.data.data;
//       console.log(data.value);
//       $q.loading.hide();
//       $q.notify({
//         color: "green-4",
//         textColor: "white",
//         icon: "thumb_up",
//         message: "Message Resent",
//       });
//       // fixed0.value = true;
//       window.location.reload();
//     })
//     .catch(() => {
//       $q.loading.hide();
//       $q.notify({
//         color: "negative",
//         position: "bottom",
//         message: "Something went wrong",
//         icon: "report_problem",
//       });
//     });
// };

onMounted(() => {
  loadData();
  // loadData(pagination.value.page);
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
