<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="All Payments"
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
          <q-td key="customer_phone" :props="props">
            {{ props.row.customer_phone }}
          </q-td>
          <q-td key="staff_name" :props="props">
            {{ props.row.staff_name }}
          </q-td>
          <q-td key="quantity" :props="props">
            {{ props.row.quantity }}
          </q-td>
          <q-td key="discount" :props="props">
            {{ props.row.discount }}
          </q-td>
          <q-td key="deposit" :props="props">
            {{ props.row.deposit }}
          </q-td>
          <q-td key="deposit_type" :props="props">
            {{ props.row.deposit_type }}
          </q-td>
          <q-td key="balance" :props="props">
            {{ props.row.balance }}
          </q-td>
          <q-td key="total_amount" :props="props">
            {{ props.row.total_amount }}
          </q-td>
          <q-td key="paid" :props="props">
            {{ props.row.paid }}
          </q-td>
          <q-td key="paid_type" :props="props">
            {{ props.row.paid_type }}
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
            <div class="row q-pt-sm">
              <!-- <div class="col-12 col-md-6 q-pl-md">
                      <div class="text-subtitle2  bg-teal-9 text-white">Created At</div>
                      <div class="text-h6">{{ formatDate(dataMore.CreatedAt) }}</div>
                    </div> -->
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Customer Phone
                </div>
                <div class="text-h6">{{ dataMore.customer_phone }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Collected On
                </div>
                <div class="text-h6">{{ dataMore.collected_on }}</div>
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
              <div class="col-12 col-md-4 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Discount</div>
                <div class="text-h6">{{ dataMore.discount }}</div>
              </div>
              <div class="col-12 col-md-4 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Deposit</div>
                <div class="text-h6">₦{{ dataMore.deposit }}</div>
              </div>
              <div class="col-12 col-md-4 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Deposit Type
                </div>
                <div class="text-h6">{{ dataMore.deposit_type }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Balance</div>
                <div class="text-h6">₦{{ dataMore.balance }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Total Amount
                </div>
                <div class="text-h6">₦{{ dataMore.total_amount }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <!-- <div class="col-12 col-md-6 q-pl-md">
                      <div class="text-subtitle2  bg-teal-9 text-white">Total Amount</div>
                      <div class="text-h6">₦{{ dataMore.total_amount }}</div>
                    </div> -->
              <div class="col-12 col-md-9 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Paid?</div>
                <div class="text-h6">{{ dataMore.paid }}</div>
              </div>
              <div class="col-12 col-md-3 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Paid Type</div>
                <div class="text-h6">{{ dataMore.paid_type }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Customer Collected
                </div>
                <div class="text-h6">{{ dataMore.customer_collected }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions class="q-pa-md" v-show="show4">
            <div class="column">
              <!-- <div class="col q-pl-md"> -->
              <div v-if="dataMore.paid_status == false" class="col q-pl-md">
                <q-select
                  outlined
                  v-model="paid_type"
                  :options="optionsPaidType"
                  hint="POS, Cash etc"
                />
              </div>
              <div class="col q-pl-md q-mt-sm">
                <q-input
                  v-if="dataMore.customer_collected == ''"
                  outlined
                  v-model="customer_collected"
                  label="Collected by?"
                  style="width: 480px"
                />
              </div>
              <div
                v-if="dataMore.customer_collected == ''"
                class="col q-mt-sm text-center"
              >
                <q-btn
                  :disable="!customer_collected"
                  class="bg-teal-9 text-white"
                  flat
                  @click="onUpdate(dataMore.intake_id)"
                  >Complete Payment</q-btn
                >
              </div>
            </div>
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

name: "AllPaymentPage";

let filter = ref("");
const $q = useQuasar();
const useStore = useUserStore();
const data = ref([]);
const dataMore = ref([]);
const moreDetails = ref(false);
const show4 = ref(false);
const pageEnd = ref(false);
const customer_collected = ref("");
const paid_type = ref("");
const optionsPaidType = ["POS", "CASH", "BANK TRANSFER"];

const columns = [
  { name: "collected_on", label: "Collected On", field: "collected_on" },
  { name: "intake_id", label: "Intake ID", field: "intake_id" },
  {
    name: "collection_date",
    label: "Collection Date",
    field: "collection_date",
  },
  { name: "customer", label: "Customer", field: "customer" },
  { name: "customer_phone", label: "Customer Phone", field: "customer_phone" },
  { name: "staff_name", label: "Staff Name", field: "staff_name" },
  { name: "quantity", label: "Quantity", field: "quantity" },
  { name: "discount", label: "Discount", field: "discount" },
  { name: "deposit", label: "Deposit", field: "deposit" },
  { name: "deposit_type", label: "Deposit Type", field: "deposit_type" },
  { name: "balance", label: "Balance", field: "balance" },
  { name: "total_amount", label: "Total Amount", field: "total_amount" },
  { name: "paid", label: "Paid", field: "paid" },
  { name: "paid_type", label: "Paid Type", field: "paid_type" },
  {
    name: "customer_collected",
    label: "Customer Collected",
    field: "customer_collected",
  },
];

const onRowClick = (row) => {
  moreDetails.value = true;
  dataMore.value = row;
  if (dataMore.value.paid == "") {
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
    .get(`/payment/all/${pageNumber}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      pageEnd.value = response.data.has_next;
      console.log(data.value, "payment!");
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
      " Balance Paid," +
      " Payment Completed and logged in by " +
      firstName +
      " " +
      lastName +
      " on " +
      timeDate,
    paid_type: paid_type.value,
    paid_status: true,
  };

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
      // fixed0.value = true;
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
