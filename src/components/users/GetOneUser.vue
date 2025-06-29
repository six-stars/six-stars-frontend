<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="q-pt-sm">
        <q-form @submit="onSubmit" @reset="onReset" class="">
          <div class="col-8 q-pl-md">
            <q-input
              label="User Phone Number"
              class=""
              outlined
              v-model="phone_number"
              hint=""
            />
          </div>
          <div class="col-4 q-pl-md">
            <q-btn class="bg-primary text-white" type="submit">Search</q-btn>
          </div>
        </q-form>
      </div>

      <div class="q-pa-md row items-start q-gutter-md" v-if="fixed0">
        <q-card class="my-card-2 text-primary">
          <q-card-section>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Created At
                </div>
                <div class="text-h6">{{ formatDate(data.CreatedAt) }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">User ID</div>
                <div class="text-h6">{{ data.user_id }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  First Name
                </div>
                <div class="text-h6">{{ data.first_name }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Last Name</div>
                <div class="text-h6">{{ data.last_name }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Email</div>
                <div class="text-h6">{{ data.email }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Username</div>
                <div class="text-h6">{{ data.username }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">User Type</div>
                <div class="text-h6">{{ data.user_type }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Phone Number
                </div>
                <div class="text-h6">{{ data.phone_number }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Gender</div>
                <div class="text-h6">{{ data.gender }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Date of Birth
                </div>
                <div class="text-h6">{{ data.dob }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Address</div>
                <div class="text-h6">{{ data.address }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">State</div>
                <div class="text-h6">{{ data.state }}</div>
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">Country</div>
                <div class="text-h6">{{ data.country }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">
                  Verified Email?
                </div>
                <div class="text-h6">{{ data.verified_email }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions align="right">
            <q-btn @click="onDelete()" flat>Delete User</q-btn>
            <q-btn @click="copyTo(data.phone_number)" flat
              >Copy Phone Number</q-btn
            >
          </q-card-actions>
        </q-card>
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

const name = "GetOneUserPage";

const fixed0 = ref(false);
const fixed1 = ref(false);
const $q = useQuasar();
const data = ref([]);
const phone_number = ref("");
const useStore = useUserStore();
const selectedCustomer = reactive([]);
const selectedCustomerPopup1 = ref({});
const selectedCustomerPopup2 = ref({});

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
        message: "User ID copied to Clipboard",
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

const onSubmit = () => {
  const token = useStore.getToken;

  axios
    .get(`${base}/user/one/${phone_number.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      console.log(data.value);
      if (data.value.ID != null) {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "thumb_up",
          message: "User Found",
        });
        fixed0.value = true;
      } else {
        fixed0.value = false;
      }
    })
    .catch((e) => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: e.response.data.message,
        icon: "report_problem",
      });
    });
};

const onDelete = () => {
  // const formData = {
  //   user_id: user_id.value,
  // }
  const token = useStore.getToken;
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  axios
    .delete(`${base}/user/${phone_number.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data;
      console.log(data.value);
      $q.loading.hide();
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "User Deleted",
      });
      // fixed0.value = true;
    })
    .catch(() => {
      $q.loading.hide();
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "User not found",
        icon: "report_problem",
      });
    });
};

const onReset = () => {
  phone_number.value = null;
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
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
