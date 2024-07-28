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
        row-key="CreatedAt"
        flat
        bordered
        :visible-columns="[
          'price_id',
          'male_native_2pcs_folding_colored',
          'male_native_2pcs_hanging_colored',
          'male_native_2pcs_folding_white',
          'male_native_2pcs_hanging_white',
          'male_native_3pcs_notAgbada_folding_colored',
          'male_native_3pcs_notAgbada_hanging_colored',
          'male_native_3pcs_notAgbada_folding_white',
          'male_native_3pcs_notAgbada_hanging_white',
          'native_top_only_folding_colored',
          'native_top_only_hanging_colored',
          'native_top_only_folding_white',
          'native_top_only_hanging_white',
          'native_trouser_only_folding_colored',
          'native_trouser_only_hanging_colored',
          'native_trouser_only_folding_white',
          'native_trouser_only_hanging_white',
          'male_agbada_only_folding_colored',
          'male_agbada_only_hanging_colored',
          'male_agbada_only_folding_white',
          'male_agbada_only_hanging_white',
          'complete_male_agbada_3pcs_Folding_colored',
          'complete_male_agbada_3pcs_Hanging_colored',
          'complete_male_agbada_3pcs_Folding_white',
          'complete_male_agbada_3pcs_Hanging_white',
          'normal_shirt_folding_colored',
          'normal_shirt_hanging_colored',
          'normal_shirt_folding_white',
          'normal_shirt_hanging_white',
          'blouse_folding_colored',
          'blouse_hanging_colored',
          'blouse_folding_white',
          'blouse_hanging_white',
          'blouse_x_large_folding_colored',
          'blouse_x_large_hanging_colored',
          'blouse_x_large_folding_white',
          'blouse_x_large_hanging_white',
          'female_shirt_folding_colored',
          'female_shirt_hanging_colored',
          'female_shirt_folding_white',
          'female_shirt_hanging_white',
          'tshirt_polo_small_folding_colored',
          'tshirt_polo_small_hanging_colored',
          'tshirt_polo_small_folding_white',
          'tshirt_polo_small_hanging_white',
          'tshirt_polo_medium_folding_colored',
          'tshirt_polo_medium_hanging_colored',
          'tshirt_polo_medium_folding_white',
          'tshirt_polo_medium_hanging_white',
          'tshirt_polo_big_folding_colored',
          'tshirt_polo_big_hanging_colored',
          'tshirt_polo_big_folding_white',
          'tshirt_polo_big_hanging_white',
          'shirt_x_large_folding_colored',
          'shirt_x_large_hanging_colored',
          'shirt_x_large_folding_white',
          'shirt_x_large_hanging_white',
          'shirt_big_folding_colored',
          'shirt_big_hanging_colored',
          'shirt_big_folding_white',
          'shirt_big_hanging_white',
          'shirt_children_folding_colored',
          'shirt_children_hanging_colored',
          'shirt_children_folding_white',
          'shirt_children_hanging_white',
          'plain_trouser_folding_colored',
          'plain_trouser_hanging_colored',
          'plain_trouser_folding_white',
          'plain_trouser_hanging_white',
          'jeans_chinos_trouser_folding_colored',
          'jeans_chinos_trouser_hanging_colored',
          'jeans_chinos_trouser_folding_white',
          'jeans_chinos_trouser_hanging_white',
          'waist_coat_hanging_colored',
          'waist_coat_hanging_white',
          'tie_colored',
          'tie_white',
          'shorts_folding_colored',
          'shorts_hanging_colored',
          'shorts_folding_white',
          'shorts_hanging_white',
          'singlet_colored',
          'singlet_white',
          'boxer_colored',
          'boxer_white',
          'male_2pcs_suit_hanging_colored',
          'male_2pcs_suit_hanging_white',
          'male_3pcs_suit_hanging_colored',
          'male_3pcs_suit_hanging_white',
          'female_2pcs_suit_hanging_colored',
          'female_2pcs_suit_hanging_white',
          'female_3pcs_suit_hanging_colored',
          'female_3pcs_suit_hanging_white',
          'male_jacket_only_colored',
          'male_jacket_only_white',
          'female_jacket_only_colored',
          'female_jacket_only_white',
          'wedding_gown_small_and_little_accessories_white',
          'wedding_gown_big_and_plenty_accessories_white',
          'Kids_blouse_folding_colored',
          'Kids_blouse_hanging_colored',
          'Kids_blouse_folding_white',
          'Kids_blouse_hanging_white',
          'jalamia_colored',
          'jalamia_white',
          'camisole_colored',
          'camisole_white',
          'wrapper_buba_scarf_colored',
          'wrapper_buba_scarf_white',
          'wrapper_buba_no_scarf_colored',
          'wrapper_buba_no_scarf_white',
          'wrapper_only_colored',
          'wrapper_only_white',
          'two_wrapper_scarf_or_no_scarf_colored',
          'two_wrapper_scarf_or_no_scarf_white',
          'aso_oke_agbada_and_cap_colored',
          'male_aso_oke_and_cap_3pcs_colored',
          'aso_oke_wrapper_buba_gele_colored',
          'aso_oke_wrapper_gele_colored',
          'aso_oke_wrapper_gele_ipele_colored',
          'aso_oke_wrapper_gele_ipele_white',
          'aso_oke_headtie_ipele_colored',
          'male_complete_aso_oke_white',
          'female_complete_aso_oke_white',
          'female_inner_wear_colored',
          'female_inner_wear_white',
          'head_tie_gele_colored',
          'head_tie_gele_white',
          'gown_children_colored',
          'gown_children_white',
          'gown_english_adult_folding_colored',
          'gown_english_adult_folding_white',
          'gown_english_adult_hanging_colored',
          'gown_english_adult_hanging_white',
          'gown_native_folding_colored',
          'gown_native_folding_white',
          'adult_white_garment_folding_with_cap',
          'adult_white_garment_folding_without_cap',
          'adult_white_garment_hanging_with_cap',
          'adult_white_garment_hanging_without_cap',
          'children_white_garment_folding_with_cap',
          'children_white_garment_folding_without_cap',
          'children_white_garment_hanging_with_cap',
          'children_white_garment_hanging_without_cap',
          'skirt_and_blouse_english_hanging_colored',
          'skirt_and_blouse_english_hanging_white',
          'skirt_and_blouse_native_folding_colored',
          'skirt_and_blouse_native_folding_white',
          'female_native_buba_and_trouser_colored',
          'female_native_buba_and_trouser_white',
          'male_cap_colored',
          'male_cap_white',
          'female_cap_colored',
          'female_cap_white',
          'turban_colored',
          'turban_white',
          'sweater_small_colored',
          'sweater_small_white',
          'sweater_normal_colored',
          'sweater_normal_white',
          'sweater_big_colored',
          'sweater_big_white',
          'towel_small_colored',
          'towel_small_white',
          'towel_normal_colored',
          'towel_normal_white',
          'towel_big_colored',
          'towel_big_white',
          'bed_spread_normal_colored',
          'bed_spread_normal_white',
          'bed_spread_big_colored',
          'bed_spread_big_white',
          'bed_spread_double_colored',
          'bed_spread_double_white',
          'duvet_normal_colored',
          'duvet_normal_white',
          'duvet_big_colored',
          'duvet_big_white',
          'curtain_normal_colored',
          'curtain_big_colored',
          'curtain_very_big_colored',
          'pyjamas_small_colored',
          'pyjamas_small_white',
          'pyjamas_big_colored',
          'pyjamas_big_white',
          'blanket_colored',
          'pillow_cases_colored',
          'pillow_cases_white',
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
  sortBy: "CreatedAt", // Set default sort field
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
      data.value = response.data.data;
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
