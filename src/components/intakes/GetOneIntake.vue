<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="row q-pt-sm">
        <q-form @submit="onSubmit" @reset="onReset" class="">
          <div class="col-12 col-md-12 q-pl-md">
            <q-input label="Intake ID" class="" outlined v-model="intake_id" hint="" />
          </div>
          <div class="col-12 q-pl-md">
            <q-btn class="bg-primary text-white" type="submit">Search</q-btn>
          </div>
        </q-form>
      </div>
      <div class="q-pa-md row items-start q-gutter-md" v-if="fixed1">
        <q-card class="my-card"  >
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{ data.customer }}</div>
            <div class="text-subtitle1">Amount: ₦{{ data.final_amount }}</div>
            <div class="text-subtitle1">Deposit: ₦{{ data.deposit }}</div>
            <div class="text-subtitle2">Collection Date:
              {{ data.collection_date }}
            </div>
            <div class="text-subtitle2">Data:
              {{ data }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat @click="popup1(data)">See Details</q-btn>
            <!-- <q-btn flat>Action 2</q-btn> -->
          </q-card-actions>
        </q-card>
      </div>


        <div class="q-pa-md row items-start q-gutter-md" v-if="fixed0">
              <q-card class="my-card-2 bg-primary text-white">
                <q-card-section>
                    <div class="row q-pt-sm" v-for="(value, key) in data" :key="key">
                      <div class="col-12 col-md-6 q-pl-md">
                        <div class="text-subtitle2 bg-grey">{{ key }}</div>
                      </div>
                      <div class="col-12 col-md-6 q-pl-md">
                        <div class="text-h6">{{ value }}</div>
                      </div>
                    </div>
                </q-card-section>

                <q-separator dark />

                <q-card-actions align="right" v-show="show4">
                  <q-btn @click="onUpdate(data.intake_id)" flat>Complete Payment</q-btn>
                </q-card-actions>
              </q-card>
            </div>

    </div>
  </q-page>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { axios, api, base } from 'boot/axios'
import { copyToClipboard, useQuasar } from 'quasar'
import { useUserStore } from '../../stores/user-store'
import { useRouter } from 'vue-router'

const name= 'GetOneUserPage'

const fixed0 = ref(false)
const fixed1 = ref(false)
const $q = useQuasar()
const data = ref([])
const da = ref([])
const intake_id = ref("")
const useStore = useUserStore()
const selectedCustomer = reactive([])
const selectedCustomerPopup1 = ref({})
const selectedCustomerPopup2 = ref({})

function copyTo(ID){
  copyToClipboard(ID)
  .then(() => {
    // success!
    $q.notify({
      color: 'green-4',
      position: 'bottom',
      message: 'Intake ID copied to Clipboard',
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

function formatDate(date) {
  const now = new Date(date);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


function popup1(selectedCustomer) {
  fixed1.value = true
  // console.log(selectedCustomer, 'selectedCustomer')
  selectedCustomerPopup1.value = selectedCustomer
  // console.log(selectedCustomerPopup1.value, 'selectedCustomerpopup1 value')
}


const onSubmit = () => {
  // const formData = {
  //   intake_id: intake_id.value,
  // }
  const token = useStore.getToken

  axios.get(`${base}/intake/${intake_id.value}`,
  { headers: { "Authorization": `Bearer ${token}` }, })
  .then((response) => {
    // data.value = response.data.data
    da.value = response.data.data
    // console.log(da.value)
      for (let key in da.value) {
        if (da.value[key] === 0 || da.value[key] === null) {
          delete da.value[key];
        }
      }

      data.value = da.value
      console.log(data.value)
      console.log("data.value")
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'thumb_up',
        message: 'Intake Found'
      })
      fixed0.value = true;
    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'bottom',
        message: 'Intake not found',
        icon: 'report_problem'
      })
    })
}

const onReset = () => {
  intake_id.value = null
}


</script>

<style lang="sass" scoped>
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
