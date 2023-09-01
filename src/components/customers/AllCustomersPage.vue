<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">All Customers</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>

      <q-table
        class="my-sticky-header-table"
        title="All Customers"
        :rows="data"
        row-key="name"
        flat
        bordered
        :visible-columns="[
          'phone1',
          'customer_id',
          'first_name',
          'last_name',
          'email',
          'user_type',
          'phone2',
          'gender',
          'dob',
          'address',
          'state',
          'country'
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

    </div>
  </q-page>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { axios, api, base } from 'boot/axios'
import { copyToClipboard, useQuasar } from 'quasar'
import { useUserStore } from '../../stores/user-store'
import { useRouter } from 'vue-router'

const name= 'AllCustomersPage'

const fixed1 = ref(false)


const $q = useQuasar()
const data = ref([])
const useStore = useUserStore()
const selectedCustomer = reactive([])
const selectedCustomerPopup1 = ref({})

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
        color: 'green-4',
        position: 'bottom',
        message: 'Phone Number copied to Clipboard',
        icon: 'thumb_up'
      })
    })
    .catch(() => {
      // fail
      $q.notify({
        color: 'negative',
        position: 'bottom',
        message: 'Please refresh page',
        icon: 'report_problem'
      })
    })
}

const loadData = () => {
  // axios.get(`${base}/coearnlist/`)
  const token = useStore.getToken
  // console.log(token, "token");
  api.get(`/customer/all`,
    { headers: { "Authorization": `Bearer ${token}` },})
    .then((response) => {
      data.value = response.data.data.reverse()
      console.log(data.value, "yello!")
      // success!
      $q.notify({
        color: 'green-4',
        position: 'bottom',
        message: 'Success',
        icon: 'thumb_up'
      })
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

function popup1(selectedCustomer) {
  fixed1.value = true
  // console.log(selectedCustomer, 'selectedCustomer')
  selectedCustomerPopup1.value = selectedCustomer
  // console.log(selectedCustomerPopup1.value, 'selectedCustomerpopup1 value')
}

onMounted(() => {
  loadData()
})

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
