<template>
  <div class="q-pa-md">
    <div>
      <div class="row q-pt-sm">
        <div class="col-12 col-md-12 q-pl-md">
          <p class="text-subtitle1 text-center">TItle:</p>
          <q-input class="" v-model="title" outlined hint="" />
        </div>
      </div>
      <q-separator />
      <div class="row q-pt-sm">
        <div class="col-12 col-md-12 q-pl-md">
          <p class="text-subtitle1 text-center">Message:</p>
          <q-input
            required
            class=""
            v-model="message"
            outlined
            type="textarea"
            hint=""
          />
        </div>
      </div>
      <q-separator />
      <div class="row q-pt-md q-pb-md">
        <div class="text-center full-width q-pl-md">
          <q-btn
            :disabled="!message"
            @click="sendData"
            label="Submit"
            type="submit"
            color="primary"
            style="width: 260px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";
import { useRouter } from "vue-router";

name: "SendGeneralMessagePage";

let filter = ref("");
const $q = useQuasar();
const useStore = useUserStore();
const data = ref();
const dataMore = ref([]);
const moreDetails = ref(false);
const pageEnd = ref(false);
const customers_phone = ref([]);
const title = ref("");
const message = ref("");
const date = ref("");
const sent = ref(false);

const sendData = () => {
  const token = useStore.getToken;
  // console.log(token, "token");
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  const today = new Date();

  // Get current date in DD/MM/YYYY format
  const date = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Get current time in 10:47 AM/PM format
  const time = today.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const str = customers_phone.value.toString();
  const cus_ = str.replace(/^"|"$/g, "");

  const formData = {
    customers_phone: cus_,
    title: title.value,
    message: message.value,
    date: date + " " + time,
    sent: true,
  };
  console.log(formData, "formData");
  api
    .post(`/general/`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      console.log(data.value, "message send!");
      onReset();
      $q.loading.hide();
      $q.notify({
        color: "green-4",
        position: "bottom",
        message: "Messages Sent!!!",
        icon: "thumb_up",
      });
    })
    .catch(() => {
      $q.loading.hide();
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Please refresh page",
        icon: "report_problem",
      });
    });
};

const loadData = () => {
  const token = useStore.getToken;
  // console.log(token, "token");
  api
    .get(`/customer/phone/all/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      console.log(response.data, "response.data");
      console.log(data.value, "all customers contacts!");
      customers_phone.value = data.value;
      console.log(customers_phone.value, "customers_phone.value");
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

const onReset = () => {
  customers_phone.value = [];
  title.value = "";
  message.value = "";
  date.value = "";
  sent.value = false;
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
