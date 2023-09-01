<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="row q-pt-sm">
        <q-form @submit="onSubmit" @reset="onReset" class="">
          <div class="col-12 col-md-12 q-pl-md">
            <q-input label="Price ID" class="" outlined v-model="price_id" hint="" />
          </div>
          <div class="col-12 q-pl-md">
            <q-btn class="bg-primary text-white" type="submit">Search</q-btn>
          </div>
        </q-form>
      </div>
      <!-- <div class="q-pa-md row items-start q-gutter-md" v-if="fixed0">
        <q-card class="my-card"  >
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{ data.name }}</div>
            <div class="text-subtitle2">
              {{ formatDate(data.CreatedAt) }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat @click="popup1(data)" class="text-white" color="blue">See Details</q-btn>
          </q-card-actions>
        </q-card>
      </div> -->

      <div class="q-pa-md row items-start q-gutter-md" v-if="fixed0">
          <q-card class="my-card-2 bg-primary text-white">
            <q-card-section>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-12 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Created At</div>
                    <div class="text-h6">{{ formatDate(data.CreatedAt) }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Native 2Pcs</div>
                    <div class="text-h6">₦{{ data.male_native_2_pcs }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Native 2Pcs Hanging</div>
                    <div class="text-h6">₦{{ data.male_native_2_pcs_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Native 3Pcs Not-Agbada</div>
                    <div class="text-h6">₦{{ data.male_native_3_pcs_notAgbada }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Native 3Pcs Not-Agbada Hanging</div>
                    <div class="text-h6">₦{{ data.male_native_3_pcs_notAgbada_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Native Top Only</div>
                    <div class="text-h6">₦{{ data.native_top_only }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Native Trouser Only</div>
                    <div class="text-h6">₦{{ data.native_trouser_only }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Complete Male Agbada</div>
                    <div class="text-h6">₦{{ data.complete_male_agbada }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Agbada Alone</div>
                    <div class="text-h6">₦{{ data.male_agbada_alone }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Blouse</div>
                    <div class="text-h6">₦{{ data.blouse }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Blouse Hanging</div>
                    <div class="text-h6">₦{{ data.blouse_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Female Shirt</div>
                    <div class="text-h6">₦{{ data.female_shirt }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Female Shirt Hanging</div>
                    <div class="text-h6">₦{{ data.female_shirt_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Female Trouser Jeans</div>
                    <div class="text-h6">₦{{ data.female_trouser_jeans }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Female Trouser Jeans Hanging</div>
                    <div class="text-h6">₦{{ data.female_trouser_jeans_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Skirt And Blouse English</div>
                    <div class="text-h6">₦{{ data.skirt_and_blouse_english }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Skirt And Blouse English Hanging</div>
                    <div class="text-h6">₦{{ data.skirt_and_blouse_english_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Wrapper Buba Gele</div>
                    <div class="text-h6">₦{{ data.wrapper_buba_gele }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Female Native Buba Trouser</div>
                    <div class="text-h6">₦{{ data.female_native_buba_trouser }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Gown English Hanging</div>
                    <div class="text-h6">₦{{ data.gown_english_hanging }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Gown Native</div>
                    <div class="text-h6">₦{{ data.gown_native }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Skirt And Blouse Native</div>
                    <div class="text-h6">₦{{ data.skirt_and_blouse_native }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Aso-Oke Wrapper Buba Or Gele</div>
                    <div class="text-h6">₦{{ data.aso_oke_wrapper_buba_gele }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Complete Aso-Oke</div>
                    <div class="text-h6">₦{{ data.male_complete_aso_oke }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Medium T-Shirt Or Polo</div>
                    <div class="text-h6">₦{{ data.male_medium_t_shirt_or_polo }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Big T-Shirt Or Polo</div>
                    <div class="text-h6">₦{{ data.male_big_t_shirt_or_polo }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male T-Shirt Or Polo Hanging</div>
                    <div class="text-h6">₦{{ data.male_t_shirt_or_polo_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Shirt Normal</div>
                    <div class="text-h6">₦{{ data.shirt_normal }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Shirt Normal Hanging</div>
                    <div class="text-h6">₦{{ data.shirt_normal_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Shirt Big</div>
                    <div class="text-h6">₦{{ data.shirt_big }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Shirt Big Hanging</div>
                    <div class="text-h6">₦{{ data.shirt_big_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Plain Trouser</div>
                    <div class="text-h6">₦{{ data.plain_trouser }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Plain Trouser Hanging</div>
                    <div class="text-h6">₦{{ data.plain_trouser_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Jeans Chinos Trouser</div>
                    <div class="text-h6">₦{{ data.jeans_chinos_trouser }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Jeans Chinos Trouser Hanging</div>
                    <div class="text-h6">₦{{ data.jeans_chinos_trouser_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Waist Coat Hanging</div>
                    <div class="text-h6">₦{{ data.plain_trouser }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Tie</div>
                    <div class="text-h6">₦{{ data.tie }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Shorts</div>
                    <div class="text-h6">₦{{ data.shorts }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Shorts Hanging</div>
                    <div class="text-h6">₦{{ data.shorts_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Singlet</div>
                    <div class="text-h6">₦{{ data.singlet }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Boxer</div>
                    <div class="text-h6">₦{{ data.boxer }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Two Piece Suit Hanging</div>
                    <div class="text-h6">₦{{ data.male_two_pcs_suit_hanging }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Three Piece Suit Hanging</div>
                    <div class="text-h6">₦{{ data.male_three_pcs_suit_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Female Two Piece Suit Hanging</div>
                    <div class="text-h6">₦{{ data.female_two_pcs_suit_hanging }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Female Three Piece Suit Hanging</div>
                    <div class="text-h6">₦{{ data.female_three_pcs_suit_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Male Jacket Hanging</div>
                    <div class="text-h6">₦{{ data.male_jacket_hanging }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Female Jacket Hanging</div>
                    <div class="text-h6">₦{{ data.female_jacket_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Jalamia</div>
                    <div class="text-h6">₦{{ data.jalamia }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Camisole</div>
                    <div class="text-h6">₦{{ data.camisole }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Wrapper Only</div>
                    <div class="text-h6">₦{{ data.wrapper_only }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Female Inner Wear</div>
                    <div class="text-h6">₦{{ data.female_inner_wear }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Head Tie Gele</div>
                    <div class="text-h6">₦{{ data.head_tie_gele }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Small Weeding Gown Hanging</div>
                    <div class="text-h6">₦{{ data.small_wedding_gown_hanging }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Big Weeding Gown Hanging</div>
                    <div class="text-h6">₦{{ data.big_wedding_gown_hanging }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Aso-Oke Head Tie</div>
                    <div class="text-h6">₦{{ data.asooke_head_tie }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Sweater Big</div>
                    <div class="text-h6">₦{{ data.sweater_big }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Sweater Normal</div>
                    <div class="text-h6">₦{{ data.sweater_normal }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Towel Normal</div>
                    <div class="text-h6">₦{{ data.towel_normal }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Towel Big</div>
                    <div class="text-h6">₦{{ data.towel_big }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Bed Spread Normal</div>
                    <div class="text-h6">₦{{ data.bed_spread_normal }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Bed Spread Big</div>
                    <div class="text-h6">₦{{ data.bed_spread_big }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Duvet</div>
                    <div class="text-h6">₦{{ data.duvet }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Curtain Normal</div>
                    <div class="text-h6">₦{{ data.curtain_normal }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Curtain Big</div>
                    <div class="text-h6">₦{{ data.curtain_big }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Curtain Very Big</div>
                    <div class="text-h6">₦{{ data.bed_spread_big }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Duvet</div>
                    <div class="text-h6">₦{{ data.duvet }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Curtain Normal</div>
                    <div class="text-h6">₦{{ data.curtain_normal }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Curtain Big</div>
                    <div class="text-h6">₦{{ data.curtain_big }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Curtain Very Big</div>
                    <div class="text-h6">₦{{ data.curtain_very_big }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Pyjamas Small</div>
                    <div class="text-h6">₦{{ data.pyjamas_small }}</div>
                  </div>
                  <div class="col-12 col-md-6 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Pyjamas Big</div>
                    <div class="text-h6">₦{{ data.pyjamas_big }}</div>
                  </div>
                </div>
                <div class="row q-pt-sm">
                  <div class="col-12 col-md-12 q-pl-md">
                    <div class="text-subtitle2 bg-grey">Comment</div>
                    <div class="text-h6">{{ data.comment }}</div>
                  </div>
                </div>

            </q-card-section>

            <q-separator dark />

            <!-- <q-card-actions align="right">
              <q-btn @click="onDelete()" flat>Delete User</q-btn>
              <q-btn @click="copyTo(data.phone_number)" flat>Copy Phone Number</q-btn>
            </q-card-actions> -->
          </q-card>
        </div>

    </div>
  </q-page>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { axios, api, base } from 'boot/axios'
import { copyToClipboard, useQuasar } from 'quasar'
import { useUserStore } from '../../../stores/user-store'
import { useRouter } from 'vue-router'

const name= 'GetOnePricePage'

const fixed0 = ref(false)
const fixed1 = ref(false)
const $q = useQuasar()
const data = ref([])
const price_id = ref("")
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
      message: 'Price ID copied to Clipboard',
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
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function popup1(selectedCustomer) {
  fixed1.value = true
  console.log(selectedCustomer, 'selectedCustomer')
  selectedCustomerPopup1.value = selectedCustomer
  console.log(selectedCustomerPopup1.value, 'selectedCustomerpopup1 value')
}


const onSubmit = () => {
  const token = useStore.getToken

  axios.get(`${base}/price/${price_id.value}`,
    { headers: { "Authorization": `Bearer ${token}` }, })
    .then((response) => {
      data.value = response.data.data
      console.log(data.value)
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'thumb_up',
        message: 'Price Found'
      })
      fixed0.value = true;

    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'bottom',
        message: 'Please Refresh',
        icon: 'report_problem'
      })
    })
}

const onReset = () => {
  price_id.value = null
}

const onDelete = () => {
  const token = useStore.getToken

  axios.delete(`${base}/price/${price_id.value}`,
    { headers: { "Authorization": `Bearer ${token}` }, })
    .then((response) => {
      data.value = response.data
      console.log(data.value)
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'thumb_up',
        message: 'Price Deleted'
      })
      window.location.reload();
    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'bottom',
        message: 'Price not found',
        icon: 'report_problem'
      })
    })
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
