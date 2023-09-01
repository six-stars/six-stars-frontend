<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="All Intakes"
      :rows="data"
      row-key="name"
      flat
      bordered
      :visible-columns="[
        // 'CreatedAt',
        'collected_on',
        'collection_date',
        'customer',
        'customer_phone',
        'intake_id',
        'staff',
	      'quantity_male_native_2_pcs',
	      'male_native_2_pcs',
	      'quantity_male_native_2_pcs_hanging',
	      'male_native_2_pcs_hanging',
	      'quantity_male_native_3_pcs_notAgbada',
	      'male_native_3_pcs_notAgbada',
	      'quantity_male_native_3_pcs_notAgbada_hanging',
	      'male_native_3_pcs_notAgbada_hanging',
	      'quantity_native_top_only',
	      'native_top_only',
	      'quantity_native_trouser_only',
	      'native_trouser_only',
	      'quantity_complete_male_agbada',
	      'complete_male_agbada',
	      'quantity_male_agbada_alone',
	      'male_agbada_alone',
	      'quantity_blouse',
	      'blouse',
	      'quantity_blouse_hanging',
	      'blouse_hanging',
	      'quantity_female_shirt',
	      'female_shirt',
	      'quantity_female_shirt_hanging',
	      'female_shirt_hanging',
	      'quantity_female_trouser_jeans',
	      'female_trouser_jeans',
	      'quantity_female_trouser_jeans_hanging',
	      'female_trouser_jeans_hanging',
	      'quantity_skirt_and_blouse_english',
	      'skirt_and_blouse_english',
	      'quantity_skirt_and_blouse_english_hanging',
	      'skirt_and_blouse_english_hanging',
	      'quantity_wrapper_buba_gele',
	      'wrapper_buba_gele',
	      'quantity_female_native_buba_trouser',
	      'female_native_buba_trouser',
	      'quantity_gown_english_hanging',
	      'gown_english_hanging',
	      'quantity_gown_native',
	      'gown_native',
	      'quantity_skirt_and_blouse_native',
	      'skirt_and_blouse_native',
	      'quantity_aso_oke_wrapper_buba_gele',
	      'aso_oke_wrapper_buba_gele',
	      'quantity_male_complete_aso_oke',
	      'male_complete_aso_oke',
	      'quantity_male_medium_t_shirt_or_polo',
	      'male_medium_t_shirt_or_polo',
	      'quantity_male_big_t_shirt_or_polo',
	      'male_big_t_shirt_or_polo',
	      'quantity_male_t_shirt_or_polo_hanging',
	      'male_t_shirt_or_polo_hanging',
	      'quantity_shirt_normal',
	      'shirt_normal',
	      'quantity_shirt_normal_hanging',
	      'shirt_normal_hanging',
	      'quantity_shirt_big',
	      'shirt_big',
	      'quantity_shirt_big_hanging',
	      'shirt_big_hanging',
	      'quantity_plain_trouser',
	      'plain_trouser',
	      'quantity_plain_trouser_hanging',
	      'plain_trouser_hanging',
	      'quantity_jeans_chinos_trouser',
	      'jeans_chinos_trouser',
	      'quantity_jeans_chinos_trouser_hanging',
	      'jeans_chinos_trouser_hanging',
	      'quantity_waist_coat_hanging',
	      'waist_coat_hanging',
	      'quantity_tie',
	      'tie',
	      'quantity_shorts',
	      'shorts',
	      'quantity_shorts_hanging',
	      'shorts_hanging',
	      'quantity_singlet',
	      'singlet',
	      'quantity_boxer',
	      'boxer',
	      'quantity_male_two_pcs_suit_hanging',
	      'male_two_pcs_suit_hanging',
	      'quantity_male_three_pcs_suit_hanging',
	      'male_three_pcs_suit_hanging',
	      'quantity_female_two_pcs_suit_hanging',
	      'female_two_pcs_suit_hanging',
	      'quantity_female_three_pcs_suit_hanging',
	      'female_three_pcs_suit_hanging',
	      'quantity_male_jacket_hanging',
	      'male_jacket_hanging',
	      'quantity_female_jacket_hanging',
	      'female_jacket_hanging',
	      'quantity_jalamia',
	      'jalamia',
	      'quantity_camisole',
	      'camisole',
	      'quantity_wrapper_only',
	      'wrapper_only',
	      'quantity_female_inner_wear',
	      'female_inner_wear',
	      'quantity_head_tie_gele',
	      'head_tie_gele',
	      'quantity_small_wedding_gown_hanging',
	      'small_wedding_gown_hanging',
	      'quantity_big_wedding_gown_hanging',
	      'big_wedding_gown_hanging',
	      'quantity_asooke_head_tie',
	      'asooke_head_tie',
	      'quantity_sweater_normal',
	      'sweater_normal',
	      'quantity_sweater_big',
	      'sweater_big',
	      'quantity_towel_normal',
	      'towel_normal',
	      'quantity_towel_big',
	      'towel_big',
	      'quantity_bed_spread_normal',
	      'bed_spread_normal',
	      'quantity_bed_spread_big',
	      'bed_spread_big',
	      'quantity_duvet',
	      'duvet',
	      'quantity_curtain_normal',
	      'curtain_normal',
	      'quantity_curtain_big',
	      'curtain_big',
	      'quantity_curtain_very_big',
	      'curtain_very_big',
	      'quantity_pyjamas_small',
	      'pyjamas_small',
	      'quantity_pyjamas_big',
	      'pyjamas_big',
        'comment_section',
        'final_amount',
        ]"
        :loading="true"
        :filter="filter"
      >
      <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
      <!-- :visible-columns="['created_at', 'updated_at', 'deleted_at']" -->
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { axios, api, base } from 'boot/axios'
import { copyToClipboard, useQuasar } from 'quasar'
import { useUserStore } from '../../stores/user-store'
import { useRouter } from 'vue-router'

  name: 'AllIntakePage'

let filter = ref('')
const $q = useQuasar()
const useStore = useUserStore()
const data = ref([])

const loadData = () => {
  const token = useStore.getToken
  console.log(token, "token");
  api.get(`/intake/all`,
    { headers: { "Authorization": `Bearer ${token}` }, })
    .then((response) => {
      data.value = response.data.data.reverse()
      console.log(data.value, "yello!")
    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'bottom',
        message: 'Please refresh page',
        icon: 'report_problem'
      })
    })
}

onMounted(() => {
  loadData()
})

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
