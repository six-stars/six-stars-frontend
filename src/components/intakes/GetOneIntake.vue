<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="row q-pt-sm">
        <q-form @submit="onSubmit" @reset="onReset" class="">
          <div class="col-12 col-md-12 q-pl-md">
            <q-input
              label="Intake ID"
              class=""
              outlined
              v-model="intake_id"
              hint=""
            />
          </div>
          <div class="col-12 q-pl-md">
            <q-btn class="bg-primary text-white" type="submit">Search</q-btn>
          </div>
        </q-form>
      </div>
      <div class="q-pa-md row items-start q-gutter-md" v-if="fixed1">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{ data.customer }}</div>
            <div class="text-subtitle1">Amount: ₦{{ data.final_amount }}</div>
            <div class="text-subtitle1">Deposit: ₦{{ data.deposit }}</div>
            <div class="text-subtitle2">
              Collection Date:
              {{ data.collection_date }}
            </div>
            <div class="text-subtitle2">
              Data:
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

          <!-- <q-card-actions align="right" v-show="show4">
            <q-btn @click="onUpdate(data.intake_id)" flat
              >Complete Payment</q-btn
            >
          </q-card-actions> -->
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
const da = ref([]);
const intake_id = ref("");
const useStore = useUserStore();
const selectedCustomer = reactive([]);
const selectedCustomerPopup1 = ref({});
const selectedCustomerPopup2 = ref({});

function copyTo(ID) {
  copyToClipboard(ID)
    .then(() => {
      // success!
      $q.notify({
        color: "green-4",
        position: "bottom",
        message: "Intake ID copied to Clipboard",
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
  fixed1.value = true;
  // console.log(selectedCustomer, 'selectedCustomer')
  selectedCustomerPopup1.value = selectedCustomer;
  // console.log(selectedCustomerPopup1.value, 'selectedCustomerpopup1 value')
}

const columns = [
  { name: "collected_on", label: "Collected On", field: "collected_on" },
  {
    name: "collection_date",
    label: "Collection Date",
    field: "collection_date",
  },
  { name: "customer", label: "Customer", field: "customer" },
  { name: "customer_phone", label: "Customer Phone", field: "customer_phone" },
  { name: "intake_id", label: "Intake ID", field: "intake_id" },
  { name: "staff", label: "Staff", field: "staff" },
  {
    name: "quantity_male_native_2_pcs",
    label: "Quantity Male Native 2pcs",
    field: "quantity_male_native_2_pcs",
  },
  {
    name: "male_native_2_pcs",
    label: "Male Native 2pcs",
    field: "male_native_2_pcs",
  },
  {
    name: "quantity_male_native_2_pcs_hanging",
    label: "Quantity Male Native 2pcs[Hanging]",
    field: "quantity_male_native_2_pcs_hanging",
  },
  {
    name: "male_native_2_pcs_hanging",
    label: "Male Native 2pcs[Hanging]",
    field: "male_native_2_pcs_hanging",
  },
  {
    name: "quantity_male_native_3_pcs_notAgbada",
    label: "Quantity Male Native 3pcs Not-Agbada",
    field: "quantity_male_native_3_pcs_notAgbada",
  },
  {
    name: "male_native_3_pcs_notAgbada",
    label: "Male Native 3pcs Not-Agbada",
    field: "male_native_3_pcs_notAgbada",
  },
  {
    name: "quantity_male_native_3_pcs_notAgbada_hanging",
    label: "Quantity Male Native 3pcs Not-Agbada[Hanging]",
    field: "quantity_male_native_3_pcs_notAgbada_hanging",
  },
  {
    name: "male_native_3_pcs_notAgbada_hanging",
    label: "Male Native 3pcs Not-Agbada[Hanging]",
    field: "male_native_3_pcs_notAgbada_hanging",
  },
  {
    name: "quantity_native_top_only",
    label: "Quantity Native Top Only",
    field: "quantity_native_top_only",
  },
  {
    name: "native_top_only",
    label: "Native Top Only",
    field: "native_top_only",
  },
  {
    name: "quantity_native_trouser_only",
    label: "Quantity Native Trouser Only",
    field: "quantity_native_trouser_only",
  },
  {
    name: "native_trouser_only",
    label: "Native Trouser Only",
    field: "native_trouser_only",
  },
  {
    name: "quantity_complete_male_agbada",
    label: "Quantity Complete Male Agbada",
    field: "quantity_complete_male_agbada",
  },
  {
    name: "complete_male_agbada",
    label: "Complete Male Agbada",
    field: "complete_male_agbada",
  },
  {
    name: "quantity_male_agbada_alone",
    label: "Quantity Male Agbada Alone",
    field: "quantity_male_agbada_alone",
  },
  {
    name: "male_agbada_alone",
    label: "Male Agbada Alone",
    field: "male_agbada_alone",
  },
  {
    name: "quantity_blouse",
    label: "Quantity Blouse",
    field: "quantity_blouse",
  },
  {
    name: "blouse",
    label: "Blouse",
    field: "blouse",
  },
  {
    name: "quantity_blouse_hanging",
    label: "Quantity Blouse[Hanging]",
    field: "quantity_blouse_hanging",
  },
  {
    name: "blouse_hanging",
    label: "Blouse[Hanging]",
    field: "blouse_hanging",
  },
  {
    name: "quantity_female_shirt",
    label: "Quantity Female Shirt",
    field: "quantity_female_shirt",
  },
  {
    name: "female_shirt",
    label: "Female Shirt",
    field: "female_shirt",
  },
  {
    name: "quantity_female_shirt_hanging",
    label: "Quantity Female Shirt[Hanging]",
    field: "quantity_female_shirt_hanging",
  },
  {
    name: "female_shirt_hanging",
    label: "Female Shirt[Hanging]",
    field: "female_shirt_hanging",
  },
  {
    name: "quantity_female_trouser_jeans",
    label: "Quantity Female Trouser Jeans",
    field: "quantity_female_trouser_jeans",
  },
  {
    name: "female_trouser_jeans",
    label: "Female Trouser Jeans",
    field: "female_trouser_jeans",
  },
  {
    name: "quantity_female_trouser_jeans_hanging",
    label: "Quantity Female Trouser Jeans[Hanging]",
    field: "quantity_female_trouser_jeans_hanging",
  },
  {
    name: "female_trouser_jeans_hanging",
    label: "Female Trouser Jeans[Hanging]",
    field: "female_trouser_jeans_hanging",
  },
  {
    name: "quantity_skirt_and_blouse_english",
    label: "Quantity Skirt-and-Blouse English",
    field: "quantity_skirt_and_blouse_english",
  },
  {
    name: "skirt_and_blouse_english",
    label: "Skirt-and-Blouse English",
    field: "skirt_and_blouse_english",
  },
  {
    name: "quantity_skirt_and_blouse_english_hanging",
    label: "Quantity Skirt-and-Blouse English[Hanging]",
    field: "quantity_skirt_and_blouse_english_hanging",
  },
  {
    name: "skirt_and_blouse_english_hanging",
    label: "Skirt-and-Blouse English[Hanging]",
    field: "skirt_and_blouse_english_hanging",
  },
  {
    name: "quantity_wrapper_buba_gele",
    label: "Quantity Wrapper Buba Gele",
    field: "quantity_wrapper_buba_gele",
  },
  {
    name: "wrapper_buba_gele",
    label: "Wrapper Buba Gele",
    field: "wrapper_buba_gele",
  },
  {
    name: "quantity_female_native_buba_trouser",
    label: "Quantity Female Native Buba Trouser",
    field: "quantity_female_native_buba_trouser",
  },
  {
    name: "female_native_buba_trouser",
    label: "Female Native Buba Trouser",
    field: "female_native_buba_trouser",
  },
  {
    name: "quantity_gown_english_hanging",
    label: "Quantity Gown English[Hanging]",
    field: "quantity_gown_english_hanging",
  },
  {
    name: "gown_english_hanging",
    label: "Gown English[Hanging]",
    field: "gown_english_hanging",
  },
  {
    name: "quantity_gown_native",
    label: "Quantity Gown Native",
    field: "quantity_gown_native",
  },
  {
    name: "gown_native",
    label: "Gown Native",
    field: "gown_native",
  },
  {
    name: "quantity_skirt_and_blouse_native",
    label: "Quantity Skirt-and-Blouse Native",
    field: "quantity_skirt_and_blouse_native",
  },
  {
    name: "skirt_and_blouse_native",
    label: "Skirt-and-Blouse Native",
    field: "skirt_and_blouse_native",
  },
  {
    name: "quantity_aso_oke_wrapper_buba_gele",
    label: "Quantity Aso-Oke Wrapper Buba Gele",
    field: "quantity_aso_oke_wrapper_buba_gele",
  },
  {
    name: "aso_oke_wrapper_buba_gele",
    label: "Aso-Oke Wrapper Buba Gele",
    field: "aso_oke_wrapper_buba_gele",
  },
  {
    name: "quantity_male_complete_aso_oke",
    label: "Quantity Male Complete Aso-Oke",
    field: "quantity_male_complete_aso_oke",
  },
  {
    name: "male_complete_aso_oke",
    label: "Male Complete Aso-Oke",
    field: "male_complete_aso_oke",
  },
  {
    name: "quantity_male_medium_t_shirt_or_polo",
    label: "Quantity Male Medium T-Shirt/Polo",
    field: "quantity_male_medium_t_shirt_or_polo",
  },
  {
    name: "male_medium_t_shirt_or_polo",
    label: "Male Medium T-Shirt/Polo",
    field: "male_medium_t_shirt_or_polo",
  },
  {
    name: "quantity_male_big_t_shirt_or_polo",
    label: "Quantity Male Big T-Shirt/Polo",
    field: "quantity_male_big_t_shirt_or_polo",
  },
  {
    name: "male_big_t_shirt_or_polo",
    label: "Male Big T-Shirt/Polo",
    field: "male_big_t_shirt_or_polo",
  },
  {
    name: "quantity_male_t_shirt_or_polo_hanging",
    label: "Quantity Male T-Shirt/Polo[Hanging]",
    field: "quantity_male_t_shirt_or_polo_hanging",
  },
  {
    name: "male_t_shirt_or_polo_hanging",
    label: "Male T-Shirt/Polo[Hanging]",
    field: "male_t_shirt_or_polo_hanging",
  },
  {
    name: "quantity_shirt_normal",
    label: "Quantity Shirt Normal",
    field: "quantity_shirt_normal",
  },
  {
    name: "shirt_normal",
    label: "Shirt Normal",
    field: "shirt_normal",
  },
  {
    name: "quantity_shirt_normal_hanging",
    label: "Quantity Shirt Normal[Hanging]",
    field: "quantity_shirt_normal_hanging",
  },
  {
    name: "shirt_normal_hanging",
    label: "Shirt Normal[Hanging]",
    field: "shirt_normal_hanging",
  },
  {
    name: "quantity_shirt_big",
    label: "Quantity Shirt Big",
    field: "quantity_shirt_big",
  },
  {
    name: "shirt_big",
    label: "Shirt Big",
    field: "shirt_big",
  },
  {
    name: "quantity_shirt_big_hanging",
    label: "Quantity Shirt Big[Hanging]",
    field: "quantity_shirt_big_hanging",
  },
  {
    name: "shirt_big_hanging",
    label: "Shirt Big[Hanging]",
    field: "shirt_big_hanging",
  },
  {
    name: "quantity_plain_trouser",
    label: "Quantity Plain Trouser",
    field: "quantity_plain_trouser",
  },
  {
    name: "plain_trouser",
    label: "Plain Trouser",
    field: "plain_trouser",
  },
  {
    name: "quantity_plain_trouser_hanging",
    label: "Quantity Plain Trouser[Hanging]",
    field: "quantity_plain_trouser_hanging",
  },
  {
    name: "plain_trouser_hanging",
    label: "Plain Trouser[Hanging]",
    field: "plain_trouser_hanging",
  },
  {
    name: "quantity_jeans_chinos_trouser",
    label: "Quantity Jeans Chinos Trouser",
    field: "quantity_jeans_chinos_trouser",
  },
  {
    name: "jeans_chinos_trouser",
    label: "Jeans Chinos Trouser",
    field: "jeans_chinos_trouser",
  },
  {
    name: "quantity_jeans_chinos_trouser_hanging",
    label: "Quantity Jeans Chinos Trouser[Hanging]",
    field: "quantity_jeans_chinos_trouser_hanging",
  },
  {
    name: "jeans_chinos_trouser_hanging",
    label: "Jeans Chinos Trouser[Hanging]",
    field: "jeans_chinos_trouser_hanging",
  },
  {
    name: "quantity_waist_coat_hanging",
    label: "Quantity Waist Coat[Hanging]",
    field: "quantity_waist_coat_hanging",
  },
  {
    name: "waist_coat_hanging",
    label: "Waist Coat[Hanging]",
    field: "waist_coat_hanging",
  },
  { name: "quantity_tie", label: "Quantity Tie", field: "quantity_tie" },
  { name: "tie", label: "Tie", field: "tie" },
  {
    name: "quantity_shorts",
    label: "Quantity Shorts",
    field: "quantity_shorts",
  },
  {
    name: "shorts",
    label: "Shorts",
    field: "shorts",
  },
  {
    name: "quantity_shorts_hanging",
    label: "Quantity Shorts[Hanging]",
    field: "quantity_shorts_hanging",
  },
  {
    name: "shorts_hanging",
    label: "Shorts[Hanging]",
    field: "shorts_hanging",
  },
  {
    name: "quantity_singlet",
    label: "Quantity Singlet",
    field: "quantity_singlet",
  },
  {
    name: "singlet",
    label: "Singlet",
    field: "singlet",
  },
  { name: "quantity_boxer", label: "Quantity Boxer", field: "quantity_boxer" },
  { name: "boxer", label: "Boxer", field: "boxer" },
  {
    name: "quantity_male_two_pcs_suit_hanging",
    label: "Quantity Male 2pcs Suit[Hanging]",
    field: "quantity_male_two_pcs_suit_hanging",
  },
  {
    name: "male_two_pcs_suit_hanging",
    label: "Male 2pcs Suit[Hanging]",
    field: "male_two_pcs_suit_hanging",
  },
  {
    name: "quantity_male_three_pcs_suit_hanging",
    label: "Quantity Male 3pcs Suit[Hanging]",
    field: "quantity_male_three_pcs_suit_hanging",
  },
  {
    name: "male_three_pcs_suit_hanging",
    label: "Male 3pcs Suit[Hanging]",
    field: "male_three_pcs_suit_hanging",
  },
  {
    name: "quantity_female_two_pcs_suit_hanging",
    label: "Quantity Female 2pcs Suit[Hanging]",
    field: "quantity_female_two_pcs_suit_hanging",
  },
  {
    name: "female_two_pcs_suit_hanging",
    label: "Female 2pcs Suit[Hanging]",
    field: "female_two_pcs_suit_hanging",
  },
  {
    name: "quantity_female_three_pcs_suit_hanging",
    label: "Quantity Female 3pcs Suit[Hanging]",
    field: "quantity_female_three_pcs_suit_hanging",
  },
  {
    name: "female_three_pcs_suit_hanging",
    label: "Female 3pcs Suit[Hanging]",
    field: "female_three_pcs_suit_hanging",
  },
  {
    name: "quantity_male_jacket_hanging",
    label: "Quantity Male Jacket[Hanging]",
    field: "quantity_male_jacket_hanging",
  },
  {
    name: "male_jacket_hanging",
    label: "Male Jacket[Hanging]",
    field: "male_jacket_hanging",
  },
  {
    name: "quantity_female_jacket_hanging",
    label: "Quantity Female Jacket[Hanging]",
    field: "quantity_female_jacket_hanging",
  },
  {
    name: "female_jacket_hanging",
    label: "Female Jacket[Hanging]",
    field: "female_jacket_hanging",
  },
  {
    name: "quantity_jalamia",
    label: "Quantity Jalamia",
    field: "quantity_jalamia",
  },
  {
    name: "jalamia",
    label: "Jalamia",
    field: "jalamia",
  },
  {
    name: "quantity_camisole",
    label: "Quantity Camisole",
    field: "quantity_camisole",
  },
  { name: "camisole", label: "Camisole", field: "camisole" },
  {
    name: "quantity_wrapper_only",
    label: "Quantity Wrapper Only",
    field: "quantity_wrapper_only",
  },
  { name: "wrapper_only", label: "Wrapper Only", field: "wrapper_only" },
  {
    name: "quantity_female_inner_wear",
    label: "Quantity Female Inner-Wear",
    field: "quantity_female_inner_wear",
  },
  {
    name: "female_inner_wear",
    label: "Female Inner-Wear",
    field: "female_inner_wear",
  },
  {
    name: "quantity_head_tie_gele",
    label: "Quantity Head Tie Gele",
    field: "quantity_head_tie_gele",
  },
  { name: "head_tie_gele", label: "Head Tie Gele", field: "head_tie_gele" },
  {
    name: "quantity_small_wedding_gown_hanging",
    label: "Quantity Small Wedding Gown[Hanging]",
    field: "quantity_small_wedding_gown_hanging",
  },
  {
    name: "small_wedding_gown_hanging",
    label: "Small Wedding Gown[Hanging]",
    field: "small_wedding_gown_hanging",
  },
  {
    name: "quantity_big_wedding_gown_hanging",
    label: "Quantity Big Wedding Gown[Hanging]",
    field: "quantity_big_wedding_gown_hanging",
  },
  {
    name: "big_wedding_gown_hanging",
    label: "Big Wedding Gown[Hanging]",
    field: "big_wedding_gown_hanging",
  },
  {
    name: "quantity_asooke_head_tie",
    label: "Quantity Aso-Oke Head Tie",
    field: "quantity_asooke_head_tie",
  },
  {
    name: "asooke_head_tie",
    label: "Aso-Oke Head Tie",
    field: "asooke_head_tie",
  },
  {
    name: "quantity_sweater_normal",
    label: "Quantity Sweater Normal",
    field: "quantity_sweater_normal",
  },
  { name: "sweater_normal", label: "Sweater Normal", field: "sweater_normal" },
  {
    name: "quantity_sweater_big",
    label: "Quantity Sweater Big",
    field: "quantity_sweater_big",
  },
  { name: "sweater_big", label: "Sweater Big", field: "sweater_big" },
  {
    name: "quantity_towel_normal",
    label: "Quantity Towel Normal",
    field: "quantity_towel_normal",
  },
  { name: "towel_normal", label: "Towel Normal", field: "towel_normal" },
  {
    name: "quantity_towel_big",
    label: "Quantity Towel Big",
    field: "quantity_towel_big",
  },
  { name: "towel_big", label: "Towel Big", field: "towel_big" },
  {
    name: "quantity_bed_spread_normal",
    label: "Quantity Bed Spread Normal",
    field: "quantity_bed_spread_normal",
  },
  {
    name: "bed_spread_normal",
    label: "Bed Spread Normal",
    field: "bed_spread_normal",
  },
  {
    name: "quantity_bed_spread_big",
    label: "Quantity Bed Spread Big",
    field: "quantity_bed_spread_big",
  },
  { name: "bed_spread_big", label: "Bed Spread Big", field: "bed_spread_big" },
  { name: "quantity_duvet", label: "Quantity Duvet", field: "quantity_duvet" },
  { name: "duvet", label: "Duvet", field: "duvet" },
  {
    name: "quantity_curtain_normal",
    label: "Quantity Curtain Normal",
    field: "quantity_curtain_normal",
  },
  { name: "curtain_normal", label: "Curtain Normal", field: "curtain_normal" },
  {
    name: "quantity_curtain_big",
    label: "Quantity Curtain Big",
    field: "quantity_curtain_big",
  },
  { name: "curtain_big", label: "Curtain Big", field: "curtain_big" },
  {
    name: "quantity_curtain_very_big",
    label: "Quantity Curtain Very Big",
    field: "quantity_curtain_very_big",
  },
  {
    name: "curtain_very_big",
    label: "Curtain Very Big",
    field: "curtain_very_big",
  },
  {
    name: "quantity_pyjamas_small",
    label: "Quantity Pyjamas Small",
    field: "quantity_pyjamas_small",
  },
  { name: "pyjamas_small", label: "Pyjamas Small", field: "pyjamas_small" },
  {
    name: "quantity_pyjamas_big",
    label: "Quantity Pyjamas Big",
    field: "quantity_pyjamas_big",
  },
  { name: "pyjamas_big", label: "Pyjamas Big", field: "quantity_pyjamas_big" },
  { name: "comment_section", label: "Comment", field: "comment_section" },
  { name: "discount", label: "Discount", field: "discount" },
  { name: "deposit", label: "Deposit", field: "deposit" },
  { name: "deposit_type", label: "Deposit Type", field: "deposit_type" },
  { name: "balance", label: "Balance", field: "balance" },
  { name: "final_amount", label: "Final Amount", field: "final_amount" },
];

const onSubmit = () => {
  // const formData = {
  //   intake_id: intake_id.value,
  // }
  const token = useStore.getToken;

  axios
    .get(`${base}/intake/${intake_id.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      // data.value = response.data.data
      da.value = response.data.data;
      // console.log(da.value)
      // for (let key in da.value) {
      //   if (da.value[key] === 0 || da.value[key] === null) {
      //     delete da.value[key];
      //   }
      // }
      for (let key in da.value) {
        // 1. Check for removal first:
        if (key === "ID" || key === "CreatedAt" || key === "UpdatedAt") {
          delete da.value[key];
          continue; // Move to the next iteration to avoid unnecessary checks
        }

        // 2. Handle null or 0 values:
        if (da.value[key] === 0 || da.value[key] === null) {
          delete da.value[key];
          continue; // Move to the next iteration
        }

        // 3. Replace key with label if found in columns:
        const matchingColumn = columns.find((column) => column.field === key);
        if (matchingColumn) {
          da.value[matchingColumn.label] = da.value[key];
          delete da.value[key];
        }
      }

      data.value = da.value;
      console.log(data.value);
      console.log("data.value");
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Intake Found",
      });
      fixed0.value = true;
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Intake not found",
        icon: "report_problem",
      });
    });
};

const onReset = () => {
  intake_id.value = null;
};
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
