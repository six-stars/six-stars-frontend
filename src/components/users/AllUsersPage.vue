<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">All Users</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" v-for="user in data" :key="user.id">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6 text-center">
              {{ user.first_name }} {{ user.last_name }}
            </div>
            <div>
              <div class="text-subtitle2">
                <q-icon
                  name="fa-solid fa-person"
                  class="q-pl-sm"
                  color="white"
                />
                User ID:
                {{ user.user_id }}
              </div>
            </div>
            <div>
              <div class="text-subtitle2">
                <q-icon name="fa-solid fa-user" class="q-pl-sm" color="white" />
                Username:
                {{ user.username }}
              </div>
            </div>
            <div>
              <div class="text-subtitle2">
                <q-icon
                  name="fa-solid fa-phone"
                  class="q-pl-sm"
                  color="white"
                />
                Phone:
                {{ user.phone_number }}
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat @click="popup1(user)">See Details</q-btn>
          </q-card-actions>
        </q-card>
      </div>

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

      <div>
        <q-dialog v-model="fixed1">
          <!-- <q-card class="column full-height" style="width: 700px; max-width: 80vw;"> -->
          <q-card style="width: 700px; max-width: 80vw">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">User Details</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-separator />

            <div class="q-pa-md row justify-center">
              <div style="width: 100%; max-width: 400px">
                <q-chat-message
                  name="Created At"
                  :text="[formatDate(selectedCustomerPopup1.CreatedAt)]"
                  text-color="white"
                  bg-color="primary"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar1.jpg" -->
                <q-chat-message
                  name="ID"
                  :text="[selectedCustomerPopup1.ID]"
                  sent
                  bg-color="amber-7"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar1.jpg" -->
                <!-- <q-chat-message
                    name="Updated At"
                    :text="[ selectedCustomerPopup1.UpdatedAt ]"
                    sent
                    bg-color="amber-7"
                    /> -->
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="First Name"
                  :text="[selectedCustomerPopup1.first_name]"
                  text-color="white"
                  bg-color="primary"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Last Name"
                  :text="[selectedCustomerPopup1.last_name]"
                  sent
                  bg-color="amber-7"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Email"
                  :text="[selectedCustomerPopup1.email]"
                  text-color="white"
                  bg-color="primary"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Username"
                  :text="[selectedCustomerPopup1.username]"
                  sent
                  bg-color="amber-7"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="User Type"
                  :text="[selectedCustomerPopup1.user_type]"
                  text-color="white"
                  bg-color="primary"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Address"
                  :text="[selectedCustomerPopup1.address]"
                  sent
                  bg-color="amber-7"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Phone"
                  :text="[selectedCustomerPopup1.phone_number]"
                  text-color="white"
                  bg-color="primary"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Gender"
                  :text="[selectedCustomerPopup1.gender]"
                  sent
                  bg-color="amber-7"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Date of birth"
                  :text="[selectedCustomerPopup1.dob]"
                  text-color="white"
                  bg-color="primary"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="State"
                  :text="[selectedCustomerPopup1.state]"
                  sent
                  bg-color="amber-7"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Country"
                  :text="[selectedCustomerPopup1.country]"
                  text-color="white"
                  bg-color="primary"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Created By"
                  :text="[selectedCustomerPopup1.created_by]"
                  sent
                  bg-color="amber-7"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Code"
                  :text="[selectedCustomerPopup1.code]"
                  text-color="white"
                  bg-color="primary"
                />
                <!-- avatar="https://cdn.quasar.dev/img/avatar5.jpg" -->
                <q-chat-message
                  name="Active"
                  :text="[selectedCustomerPopup1.active]"
                  sent
                  bg-color="amber-7"
                />
              </div>
            </div>

            <q-separator />

            <q-card-actions align="right">
              <div class="q-mr-sm">
                <q-btn flat label="Cancel" color="red" v-close-popup />
                <q-btn
                  flat
                  label="Copy Phone Number"
                  @click="copyTo(selectedCustomerPopup1.phone_number)"
                  class="text-white"
                  color="blue"
                  v-close-popup
                />
              </div>
            </q-card-actions>
          </q-card>
        </q-dialog>
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

const name = "AllUsersPage";

const fixed1 = ref(false);
const $q = useQuasar();
const data = ref(null);
const useStore = useUserStore();
const selectedCustomer = reactive([]);
const selectedCustomerPopup1 = ref({});
const selectedCustomerPopup2 = ref({});
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

function copyTo(ID) {
  copyToClipboard(ID)
    .then(() => {
      // success!
      $q.notify({
        color: "green-4",
        position: "bottom",
        message: "Username copied to Clipboard",
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

function popup1(selectedCustomer) {
  fixed1.value = true;
  console.log(selectedCustomer, "selectedCustomer");
  selectedCustomerPopup1.value = selectedCustomer;
  console.log(selectedCustomerPopup1.value, "selectedCustomerpopup1 value");
}

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
    .get(`/user/${pageNumber}`, {
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
        message: "Users not found",
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

onMounted(() => {
  loadData(pagination.value.page);
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
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
