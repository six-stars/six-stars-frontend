<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="All Payments"
      :rows="data"
      row-key="resend_id"
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
          <q-td key="resend_id" :props="props">
            <q-badge color="green">
              {{ props.row.resend_id }}
            </q-badge>
          </q-td>
          <q-td key="customer_phone" :props="props">
            {{ props.row.customer_phone }}
          </q-td>
          <q-td key="customer_other_phone" :props="props">
            {{ props.row.customer_other_phone }}
          </q-td>
          <q-td key="message" :props="props">
            {{ props.row.message }}
          </q-td>
          <q-td key="sent" :props="props">
            {{ props.row.sent }}
          </q-td>
          <q-td key="resent" :props="props">
            {{ props.row.resent }}
          </q-td>
          <q-td key="resent_date" :props="props">
            {{ props.row.resent_date }}
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
      <div class="my-card-2">
        <q-card>
          <q-card-section>
            <div class="row q-pt-sm">
              <!-- <div class="col-12 col-md-6 q-pl-md">
                      <div class="text-subtitle2 bg-grey">Created At</div>
                      <div class="text-h6">{{ formatDate(dataMore.CreatedAt) }}</div>
                    </div> -->
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-grey">Resend ID</div>
                <div class="text-h6">{{ dataMore.resend_id }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer Phone</div>
                <div class="text-h6">{{ dataMore.customer_phone }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer Other Phone</div>
                <div class="text-h6">{{ dataMore.customer_other_phone }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-grey">Message</div>
                <div class="text-h6">{{ dataMore.message }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Sent</div>
                <div class="text-h6">{{ dataMore.sent }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Resent</div>
                <div class="text-h6">{{ dataMore.resent }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-grey">Resent Date</div>
                <div class="text-h6">{{ dataMore.resent_date }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions align="right">
            <q-btn color="primary" @click="onResend(dataMore.resend_id)" flat
              >Resend</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </q-dialog>
    <!-- :visible-columns="['created_at', 'updated_at', 'deleted_at']" -->
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";
import { useRouter } from "vue-router";

name: "AllResendMessagePage";

let filter = ref("");
const $q = useQuasar();
const useStore = useUserStore();
const data = ref([]);
const dataMore = ref([]);
const moreDetails = ref(false);
const pageEnd = ref(false);

const columns = [
  { name: "resend_id", label: "Resend ID", field: "resend_id" },
  {
    name: "customer_phone",
    label: "Customer Phone",
    field: "customer_phone",
  },
  {
    name: "customer_other_phone",
    label: "Customer Other Phone",
    field: "customer_other_phone",
  },
  { name: "message", label: "Message", field: "message" },
  { name: "sent", label: "Sent", field: "sent" },
  { name: "resent", label: "Resent", field: "resent" },
  { name: "resent_date", label: "Resent Date", field: "resent_date" },
];

const onRowClick = (row) => {
  moreDetails.value = true;
  dataMore.value = row;
};

const pagination = ref({
  sortBy: "resend_id", // Set default sort field
  descending: false,
  page: 1,
  rowsPerPage: 10,
});

const loadData = (pageNumber) => {
  const token = useStore.getToken;
  console.log(token, "token");
  api
    .get(`/resend/message/all/${pageNumber}`, {
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
  if (pagination.value.page > 1) {
    pagination.value.page--;
    loadData(pagination.value.page);
  }
};

const handleNextPage = () => {
  if (pageEnd.value == true) {
    pagination.value.page++;
    loadData(pagination.value.page);
  }
};

const onResend = (resendID) => {
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
    resent: true,
    resent_date: timeDate,
  };

  axios
    .patch(`${base}/resend/message/${resendID}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      console.log(data.value);
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Message Resent",
      });
      // fixed0.value = true;
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
