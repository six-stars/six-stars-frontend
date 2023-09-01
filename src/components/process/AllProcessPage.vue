<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="All Processes"
      :rows="data"
      row-key="name"
      flat
      bordered
      :visible-columns="[
        'collected_on',
        'intake_id',
        'collection_date',
        'customer',
        // 'customer_phone',
        'staff_name',
        'quantity',
        'washing_stage',
        'ironing_stage',
        'packing_stage',
        'ready',
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

  name: 'AllProcessPage'

let filter = ref('')
const $q = useQuasar()
const useStore = useUserStore()
const data = ref([])

const loadData = () => {
  const token = useStore.getToken
  console.log(token, "token");
  api.get(`/process/all`,
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
