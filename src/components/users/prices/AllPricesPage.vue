<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">All Users</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <!-- <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" v-for="price in data" :key="price.id">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{ price.name }} </div>
            <div class="text-subtitle2">
              {{ formatDate(price.CreatedAt) }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat @click="popup1(price)">See Details</q-btn>
          </q-card-actions>
        </q-card>
      </div> -->

      <q-table
        class="my-sticky-header-table"
        title="All Price"
        :rows="data"
        row-key="price_id"
        flat
        bordered
        :visible-columns="[
          'price_id',
          'male_native_2_pcs',
          'male_native_2_pcs_hanging',
          'male_native_3_pcs_notAgbada',
          'male_native_3_pcs_notAgbada_hanging',
          'native_top_only',
          'native_trouser_only',
          'complete_male_agbada',
          'male_agbada_alone',
          'blouse',
          'blouse_hanging',
          'female_shirt',
          'female_shirt_hanging',
          'female_trouser_jeans',
          'female_trouser_jeans_hanging',
          'skirt_and_blouse_english',
          'skirt_and_blouse_english_hanging',
          'wrapper_buba_gele',
          'female_native_buba_trouser',
          'gown_english_hanging',
          'gown_native',
          'skirt_and_blouse_native',
          'aso_oke_wrapper_buba_gele',
          'male_complete_aso_oke',
          'male_medium_t_shirt_or_polo',
          'male_big_t_shirt_or_polo',
          'male_t_shirt_or_polo_hanging',
          'shirt_normal',
          'shirt_normal_hanging',
          'shirt_big',
          'shirt_big_hanging',
          'plain_trouser',
          'plain_trouser_hanging',
          'jeans_chinos_trouser',
          'jeans_chinos_trouser_hanging',
          'waist_coat_hanging',
          'tie',
          'shorts',
          'shorts_hanging',
          'singlet',
          'boxer',
          'male_two_pcs_suit_hanging',
          'male_three_pcs_suit_hanging',
          'female_two_pcs_suit_hanging',
          'female_three_pcs_suit_hanging',
          'male_jacket_hanging',
          'female_jacket_hanging',
          'jalamia',
          'camisole',
          'wrapper_only',
          'female_inner_wear',
          'head_tie_gele',
          'small_wedding_gown_hanging',
          'big_wedding_gown_hanging',
          'asooke_head_tie',
          'sweater_normal',
          'sweater_big',
          'towel_normal',
          'towel_big',
          'bed_spread_normal',
          'bed_spread_big',
          'duvet',
          'curtain_normal',
          'curtain_big',
          'curtain_very_big',
          'pyjamas_small',
          'pyjamas_big',
          'staff',
          'comment',
          'created_at',
        ]"
        :loading="true"
        :filter="filter"
        :pagination="pagination"
        @request="handleTableRequest"
      >
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
  </q-page>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../../stores/user-store";
import { useRouter } from "vue-router";

const name = "AllPricesPage";

const fixed1 = ref(false);
const $q = useQuasar();
const data = ref([]);
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
        message: "Price Id copied to Clipboard",
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
  selectedCustomerPopup1.value = selectedCustomer;
}

const pagination = ref({
  sortBy: "userid", // Set default sort field
  descending: false,
  page: 1,
  rowsPerPage: 10,
});

const loadData = (pageNumber) => {
  const token = useStore.getToken;
  console.log(token, "token");
  api
    .get(`/price/all/${pageNumber}`, {
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
        message: "Price not found",
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
