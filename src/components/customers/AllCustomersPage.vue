<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">All Customers</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <q-table
        class="my-sticky-header-table"
        title="All Customers"
        :columns="columns"
        :rows="data"
        row-key="CreatedAt"
        flat
        bordered
        :loading="true"
        :filter="filter"
        :pagination="pagination"
        @request="handleTableRequest"
      >
        <template v-slot:body="props">
          <q-tr :props="props" @click="onRowClick(props.row)">
            <q-td key="customer_id" :props="props">
              <q-badge color="green">
                {{ props.row.customer_id }}
              </q-badge>
            </q-td>
            <q-td key="phone1" :props="props">
              {{ props.row.phone1 }}
            </q-td>
            <q-td key="first_name" :props="props">
              {{ props.row.first_name }}
            </q-td>
            <q-td key="last_name" :props="props">
              {{ props.row.last_name }}
            </q-td>
            <q-td key="email" :props="props">
              {{ props.row.email }}
            </q-td>
            <q-td key="user_type" :props="props">
              {{ props.row.user_type }}
            </q-td>
            <q-td key="phone2" :props="props">
              {{ props.row.phone2 }}
            </q-td>
            <q-td key="gender" :props="props">
              {{ props.row.gender }}
            </q-td>
            <q-td key="dob" :props="props">
              {{ props.row.dob }}
            </q-td>
            <q-td key="address" :props="props">
              {{ props.row.address }}
            </q-td>
            <q-td key="state" :props="props">
              {{ props.row.state }}
            </q-td>
            <q-td key="country" :props="props">
              {{ props.row.country }}
            </q-td>
            <q-td key="created_at" :props="props">
              {{ formatDate(props.row.CreatedAt) }}
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
    </div>

    <q-dialog v-model="moreDetails">
      <div class="my-card-2">
        <q-card>
          <q-card-section>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Created At</div>
                <div class="text-h6">{{ formatDate(dataMore.CreatedAt) }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer ID</div>
                <div class="text-h6">{{ dataMore.customer_id }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">First Name</div>
                <div class="text-h6">{{ dataMore.first_name }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Last Name</div>
                <div class="text-h6">{{ dataMore.last_name }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Email</div>
                <div class="text-h6">{{ dataMore.email }}</div>
              </div>
              <!-- <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-h6">{{ dataMore.username }}</div>
                    <div class="text-subtitle2">Username</div>
                  </div> -->
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Customer Type</div>
                <div class="text-h6">{{ dataMore.user_type }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Phone Number 1</div>
                <div class="text-h6">{{ dataMore.phone1 }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Phone Number 2</div>
                <div class="text-h6">{{ dataMore.phone2 }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Gender</div>
                <div class="text-h6">{{ dataMore.gender }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Date of Birth</div>
                <div class="text-h6">{{ dataMore.dob }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">State</div>
                <div class="text-h6">{{ dataMore.state }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">Country</div>
                <div class="text-h6">{{ dataMore.country }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-grey">Address</div>
                <div class="text-h6">{{ dataMore.address }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat v-close-popup>Cancel</q-btn>
            <!-- <q-btn :loading="loadingDeleteAnAdmin" @click="onDelete(dataMore.customer_id)" color="red" flat>Delete Admin</q-btn> -->
            <q-btn
              :loading="isloading"
              color="primary"
              @click="
                goToCreateIntake(
                  dataMore.first_name,
                  dataMore.last_name,
                  dataMore.phone1
                )
              "
              flat
              >Create Intake</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";
import { useRouter } from "vue-router";

const name = "AllCustomersPage";

const fixed1 = ref(false);

const $q = useQuasar();
const $router = useRouter();
const data = ref([]);
const dataMore = ref([]);
const useStore = useUserStore();
const selectedCustomer = reactive([]);
const selectedCustomerPopup1 = ref({});
const moreDetails = ref(false);
const isloading = ref(false);
const pageEnd = ref(false);

function formatDate(date) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

const columns = [
  { name: "customer_id", label: "Customer ID", field: "customer_id" },
  { name: "phone1", label: "Phone 1", field: "phone1" },
  { name: "first_name", label: "First Name", field: "first_name" },
  { name: "last_name", label: "Last Name", field: "last_name" },
  { name: "email", label: "Email", field: "email" },
  { name: "user_type", label: "User Type", field: "user_type" },
  { name: "phone2", label: "Phone 2", field: "phone2" },
  { name: "gender", label: "Gender", field: "gender" },
  { name: "dob", label: "Date of Birth", field: "dob" },
  { name: "address", label: "Address", field: "address" },
  { name: "state", label: "State", field: "state" },
  { name: "country", label: "Country", field: "country" },
  { name: "created_at", label: "Created Time", field: "created_at" },
];

const onRowClick = (row) => {
  moreDetails.value = true;
  dataMore.value = row;
};

const goToCreateIntake = (first_name, last_name, phone) => {
  isloading.value = true;
  $router.push({
    name: "CreateIntakesPage",
    params: { first: first_name, last: last_name, phone: phone },
  });
  isloading.value = false;
};

function copyTo(ID) {
  copyToClipboard(ID)
    .then(() => {
      // success!
      $q.notify({
        color: "green-4",
        position: "bottom",
        message: "Phone Number copied to Clipboard",
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

const pagination = ref({
  sortBy: "CreatedAt", // Set default sort field
  descending: false,
  page: 1,
  rowsPerPage: 10,
});

const loadData = (pageNumber) => {
  // axios.get(`${base}/coearnlist/`)
  const token = useStore.getToken;
  // console.log(token, "token");
  api
    .get(`/customer/all/${pageNumber}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      pageEnd.value = response.data.has_next;
      console.log(data.value, "yello!");
      // success!
      // $q.notify({
      //   color: 'green-4',
      //   position: 'bottom',
      //   message: 'Success',
      //   icon: 'thumb_up'
      // })
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

function popup1(selectedCustomer) {
  fixed1.value = true;
  // console.log(selectedCustomer, 'selectedCustomer')
  selectedCustomerPopup1.value = selectedCustomer;
  // console.log(selectedCustomerPopup1.value, 'selectedCustomerpopup1 value')
}

onMounted(() => {
  loadData(pagination.value.page);
});
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
