<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="row q-pt-sm">
        <q-form @submit="onSubmit" @reset="onReset" class="">
          <div class="col-12 col-md-12 q-pl-md">
            <q-input
              label="Price ID"
              class=""
              outlined
              v-model="price_id"
              hint=""
            />
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
            <div class="row q-pt-sm" v-for="(value, key) in data" :key="key">
              <div class="col-12 col-md-12 q-pl-md">
                <div class="text-subtitle2 bg-grey">{{ key }}</div>
                <div class="text-h6">₦{{ value }}</div>
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
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../../stores/user-store";
import { useRouter } from "vue-router";

const name = "GetOnePricePage";

const fixed0 = ref(false);
const fixed1 = ref(false);
const $q = useQuasar();
const data = ref([]);
const da = ref([]);
const price_id = ref("");
const useStore = useUserStore();
const selectedCustomer = reactive([]);
const selectedCustomerPopup1 = ref({});
const selectedCustomerPopup2 = ref({});

const columns = [
  { name: "price_id", label: "Price ID", field: "price_id" },
  { name: "staff", label: "Staff", field: "staff" },
  {
    name: "male_native_2pcs_folding_colored",
    label: "Male Native 2 Pcs Folding-Colored",
    field: "male_native_2pcs_folding_colored",
  },
  {
    name: "male_native_2pcs_hanging_colored",
    label: "Male Native 2 Pcs Hanging-Colored",
    field: "male_native_2pcs_hanging_colored",
  },
  {
    name: "male_native_2pcs_folding_white",
    label: "Male Native 2 Pcs Folding-White",
    field: "male_native_2pcs_folding_white",
  },
  {
    name: "male_native_2pcs_hanging_white",
    label: "Male Native 2 Pcs Hanging-White",
    field: "male_native_2pcs_hanging_white",
  },
  {
    name: "male_native_3pcs_notAgbada_folding_colored",
    label: "Male Native 3 Pcs Not-Agbada Folding-Colored",
    field: "male_native_3pcs_notAgbada_folding_colored",
  },
  {
    name: "male_native_3pcs_notAgbada_hanging_colored",
    label: "Male Native 3 Pcs Not-Agbada Hanging-Colored",
    field: "male_native_3pcs_notAgbada_hanging_colored",
  },
  {
    name: "male_native_3pcs_notAgbada_folding_white",
    label: "Male Native 3 Pcs Not-Agbada Folding-White",
    field: "male_native_3pcs_notAgbada_folding_white",
  },
  {
    name: "male_native_3pcs_notAgbada_hanging_white",
    label: "Male Native 3 Pcs Not-Agbada Hanging-White",
    field: "male_native_3pcs_notAgbada_hanging_white",
  },
  {
    name: "native_top_only_folding_colored",
    label: "Native Top Only Folding-Colored",
    field: "native_top_only_folding_colored",
  },
  {
    name: "native_top_only_hanging_colored",
    label: "Native Top Only Hanging-Colored",
    field: "native_top_only_hanging_colored",
  },
  {
    name: "native_top_only_folding_white",
    label: "Native Top Only Folding-White",
    field: "native_top_only_folding_white",
  },
  {
    name: "native_top_only_hanging_white",
    label: "Native Top Only Hanging-White",
    field: "native_top_only_hanging_white",
  },
  {
    name: "native_trouser_only_folding_colored",
    label: "Native Trouser Only Folding-Colored",
    field: "native_trouser_only_folding_colored",
  },
  {
    name: "native_trouser_only_hanging_colored",
    label: "Native Trouser Only Hanging-Colored",
    field: "native_trouser_only_hanging_colored",
  },
  {
    name: "native_trouser_only_folding_white",
    label: "Native Trouser Only Folding-White",
    field: "native_trouser_only_folding_white",
  },
  {
    name: "native_trouser_only_hanging_white",
    label: "Native Trouser Only Hanging-White",
    field: "native_trouser_only_hanging_white",
  },
  {
    name: "male_agbada_only_folding_colored",
    label: "Agbada Only Folding-Colored",
    field: "male_agbada_only_folding_colored",
  },
  {
    name: "male_agbada_only_hanging_colored",
    label: "Agbada Only Hanging-Colored",
    field: "male_agbada_only_hanging_colored",
  },
  {
    name: "male_agbada_only_folding_white",
    label: "Agbada Only Folding-White",
    field: "male_agbada_only_folding_white",
  },
  {
    name: "male_agbada_only_hanging_white",
    label: "Agbada Only Hanging-White",
    field: "male_agbada_only_hanging_white",
  },
  {
    name: "complete_male_agbada_3pcs_Folding_colored",
    label: "Complete Male Agbada 3 Pcs Hanging-Colored",
    field: "complete_male_agbada_3pcs_Folding_colored",
  },
  {
    name: "complete_male_agbada_3pcs_Hanging_colored",
    label: "Complete Male Agbada 3 Pcs Hanging-Colored",
    field: "complete_male_agbada_3pcs_Hanging_colored",
  },
  {
    name: "complete_male_agbada_3pcs_Folding_white",
    label: "Complete Male Agbada 3 Pcs Hanging-White",
    field: "complete_male_agbada_3pcs_Folding_white",
  },
  {
    name: "complete_male_agbada_3pcs_Hanging_white",
    label: "Complete Male Agbada 3 Pcs Hanging-White",
    field: "complete_male_agbada_3pcs_Hanging_white",
  },
  {
    name: "normal_shirt_folding_colored",
    label: "Shirt Folding-Colored",
    field: "normal_shirt_folding_colored",
  },
  {
    name: "normal_shirt_hanging_colored",
    label: "Shirt Hanging-Colored",
    field: "normal_shirt_hanging_colored",
  },
  {
    name: "normal_shirt_folding_white",
    label: "Shirt Folding-White",
    field: "normal_shirt_folding_white",
  },
  {
    name: "normal_shirt_hanging_white",
    label: "Shirt Hanging-White",
    field: "normal_shirt_hanging_white",
  },
  {
    name: "shirt_big_folding_colored",
    label: "Shirt Big Folding-Colored",
    field: "shirt_big_folding_colored",
  },
  {
    name: "shirt_big_hanging_colored",
    label: "Shirt Big Hanging-Colored",
    field: "shirt_big_hanging_colored",
  },
  {
    name: "shirt_big_folding_white",
    label: "Shirt Big Folding-White",
    field: "shirt_big_folding_white",
  },
  {
    name: "shirt_big_hanging_white",
    label: "Shirt Big Hanging-White",
    field: "shirt_big_hanging_white",
  },
  {
    name: "shirt_x_large_folding_colored",
    label: "Shirt XLarge Folding-Colored",
    field: "shirt_x_large_folding_colored",
  },
  {
    name: "shirt_x_large_hanging_colored",
    label: "Shirt XLarge Hanging-Colored",
    field: "shirt_x_large_hanging_colored",
  },
  {
    name: "shirt_x_large_folding_white",
    label: "Shirt XLarge Folding-White",
    field: "shirt_x_large_folding_white",
  },
  {
    name: "shirt_x_large_hanging_white",
    label: "Shirt XLarge Hanging-White",
    field: "shirt_x_large_hanging_white",
  },
  {
    name: "shirt_children_folding_colored",
    label: "Shirt Children Folding-Colored",
    field: "shirt_children_folding_colored",
  },
  {
    name: "shirt_children_hanging_colored",
    label: "Shirt Children Hanging-Colored",
    field: "shirt_children_hanging_colored",
  },
  {
    name: "shirt_children_folding_white",
    label: "Shirt Children Folding-White",
    field: "shirt_children_folding_white",
  },
  {
    name: "shirt_children_hanging_white",
    label: "Shirt Children Hanging-White",
    field: "shirt_children_hanging_white",
  },
  {
    name: "blouse_folding_colored",
    label: "Blouse Folding-Colored",
    field: "blouse_folding_colored",
  },
  {
    name: "blouse_hanging_colored",
    label: "Blouse Hanging-Colored",
    field: "blouse_hanging_colored",
  },
  {
    name: "blouse_folding_white",
    label: "Blouse Folding-White",
    field: "blouse_folding_white",
  },
  {
    name: "blouse_hanging_white",
    label: "Blouse Hanging-White",
    field: "blouse_hanging_white",
  },
  {
    name: "blouse_x_large_folding_colored",
    label: "Blouse XLarge Folding-Colored",
    field: "blouse_x_large_folding_colored",
  },
  {
    name: "blouse_x_large_hanging_colored",
    label: "Blouse XLarge Hanging-Colored",
    field: "blouse_x_large_hanging_colored",
  },
  {
    name: "blouse_x_large_folding_white",
    label: "Blouse XLarge Folding-White",
    field: "blouse_x_large_folding_white",
  },
  {
    name: "blouse_x_large_hanging_white",
    label: "Blouse XLarge Hanging-White",
    field: "blouse_x_large_hanging_white",
  },
  {
    name: "female_shirt_folding_colored",
    label: "Female Shirt Folding-Colored",
    field: "female_shirt_folding_colored",
  },
  {
    name: "female_shirt_hanging_colored",
    label: "Female Shirt Hanging-Colored",
    field: "female_shirt_hanging_colored",
  },
  {
    name: "female_shirt_folding_white",
    label: "Female Shirt Folding-White",
    field: "female_shirt_folding_white",
  },
  {
    name: "female_shirt_hanging_white",
    label: "Female Shirt Hanging-White",
    field: "female_shirt_hanging_white",
  },
  {
    name: "tshirt_polo_small_folding_colored",
    label: "TShirt/Polo Small Folding-Colored",
    field: "tshirt_polo_small_folding_colored",
  },
  {
    name: "tshirt_polo_small_hanging_colored",
    label: "TShirt/Polo Small Hanging-Colored",
    field: "tshirt_polo_small_hanging_colored",
  },
  {
    name: "tshirt_polo_small_folding_white",
    label: "TShirt/Polo Small Folding-White",
    field: "tshirt_polo_small_folding_white",
  },
  {
    name: "tshirt_polo_small_hanging_white",
    label: "TShirt/Polo Small Hanging-White",
    field: "tshirt_polo_small_hanging_white",
  },
  {
    name: "tshirt_polo_medium_folding_colored",
    label: "TShirt/Polo Medium Folding-Colored",
    field: "tshirt_polo_medium_folding_colored",
  },
  {
    name: "tshirt_polo_medium_hanging_colored",
    label: "TShirt/Polo Medium Hanging-Colored",
    field: "tshirt_polo_medium_hanging_colored",
  },
  {
    name: "tshirt_polo_medium_folding_white",
    label: "TShirt/Polo Medium Folding-White",
    field: "tshirt_polo_medium_folding_white",
  },
  {
    name: "tshirt_polo_medium_hanging_white",
    label: "TShirt/Polo Medium Hanging-White",
    field: "tshirt_polo_medium_hanging_white",
  },
  {
    name: "tshirt_polo_big_folding_colored",
    label: "TShirt/Polo Big Folding-Colored",
    field: "tshirt_polo_big_folding_colored",
  },
  {
    name: "tshirt_polo_big_hanging_colored",
    label: "TShirt/Polo Big Hanging-Colored",
    field: "tshirt_polo_big_hanging_colored",
  },
  {
    name: "tshirt_polo_big_folding_white",
    label: "TShirt/Polo Big Folding-White",
    field: "tshirt_polo_big_folding_white",
  },
  {
    name: "tshirt_polo_big_hanging_white",
    label: "TShirt/Polo Big Hanging-White",
    field: "tshirt_polo_big_hanging_white",
  },
  {
    name: "plain_trouser_folding_colored",
    label: "Trouser Folding-Colored",
    field: "plain_trouser_folding_colored",
  },
  {
    name: "plain_trouser_hanging_colored",
    label: "Trouser Hanging-Colored",
    field: "plain_trouser_hanging_colored",
  },
  {
    name: "plain_trouser_folding_white",
    label: "Trouser Folding-White",
    field: "plain_trouser_folding_white",
  },
  {
    name: "plain_trouser_hanging_white",
    label: "Trouser Hanging-White",
    field: "plain_trouser_hanging_white",
  },
  {
    name: "jeans_chinos_trouser_folding_colored",
    label: "Jeans/Chinos Trouser Folding-Colored",
    field: "jeans_chinos_trouser_folding_colored",
  },
  {
    name: "jeans_chinos_trouser_hanging_colored",
    label: "Jeans/Chinos Trouser Hanging-Colored",
    field: "jeans_chinos_trouser_hanging_colored",
  },
  {
    name: "jeans_chinos_trouser_folding_white",
    label: "Jeans/Chinos Trouser Folding-White",
    field: "jeans_chinos_trouser_folding_white",
  },
  {
    name: "jeans_chinos_trouser_hanging_white",
    label: "Jeans/Chinos Trouser Hanging-White",
    field: "jeans_chinos_trouser_hanging_white",
  },
  {
    name: "waist_coat_hanging_colored",
    label: "Waist Coat Hanging-Colored",
    field: "waist_coat_hanging_colored",
  },
  {
    name: "waist_coat_hanging_white",
    label: "Waist Coat Hanging-White",
    field: "waist_coat_hanging_white",
  },
  {
    name: "tie_colored",
    label: "Tie Colored",
    field: "tie_colored",
  },
  {
    name: "tie_white",
    label: "Tie White",
    field: "tie_white",
  },
  {
    name: "shorts_folding_colored",
    label: "Shorts Folding-Colored",
    field: "shorts_folding_colored",
  },
  {
    name: "shorts_hanging_colored",
    label: "Shorts Hanging-Colored",
    field: "shorts_hanging_colored",
  },
  {
    name: "shorts_folding_white",
    label: "Shorts Folding-White",
    field: "shorts_folding_white",
  },
  {
    name: "shorts_hanging_white",
    label: "Shorts Hanging-White",
    field: "shorts_hanging_white",
  },
  {
    name: "singlet_colored",
    label: "Singlet Colored",
    field: "singlet_colored",
  },
  {
    name: "singlet_white",
    label: "Singlet White",
    field: "singlet_white",
  },
  {
    name: "boxer_colored",
    label: "Boxer Colored",
    field: "boxer_colored",
  },
  {
    name: "boxer_white",
    label: "Boxer White",
    field: "boxer_white",
  },
  {
    name: "male_2pcs_suit_hanging_colored",
    label: "Male 2 Pcs Suit Hanging-Colored",
    field: "male_2pcs_suit_hanging_colored",
  },
  {
    name: "male_2pcs_suit_hanging_white",
    label: "Male 2 Pcs Suit Hanging-White",
    field: "male_2pcs_suit_hanging_white",
  },
  {
    name: "male_3pcs_suit_hanging_colored",
    label: "Male 3 Pcs Suit Hanging-Colored",
    field: "male_3pcs_suit_hanging_colored",
  },
  {
    name: "male_3pcs_suit_hanging_white",
    label: "Male 3 Pcs Suit Hanging-White",
    field: "male_3pcs_suit_hanging_white",
  },
  {
    name: "female_2pcs_suit_hanging_colored",
    label: "Female 2 Pcs Suit Hanging-Colored",
    field: "female_2pcs_suit_hanging_colored",
  },
  {
    name: "female_2pcs_suit_hanging_white",
    label: "Female 2 Pcs Suit Hanging-White",
    field: "female_2pcs_suit_hanging_white",
  },
  {
    name: "female_3pcs_suit_hanging_colored",
    label: "Female 3 Pcs Suit Hanging-Colored",
    field: "female_3pcs_suit_hanging_colored",
  },
  {
    name: "female_3pcs_suit_hanging_white",
    label: "Female 3 Pcs Suit Hanging-White",
    field: "female_3pcs_suit_hanging_white",
  },
  {
    name: "male_jacket_only_colored",
    label: "Male Jacket Only Colored",
    field: "male_jacket_only_colored",
  },
  {
    name: "male_jacket_only_white",
    label: "Male Jacket Only White",
    field: "male_jacket_only_white",
  },
  {
    name: "female_jacket_only_colored",
    label: "Female Jacket Only Colored",
    field: "female_jacket_only_colored",
  },
  {
    name: "female_jacket_only_white",
    label: "Female Jacket Only White",
    field: "female_jacket_only_white",
  },
  {
    name: "wedding_gown_small_and_little_accessories_white",
    label: "Wedding Gown Small With Little Accessories White",
    field: "wedding_gown_small_and_little_accessories_white",
  },
  {
    name: "wedding_gown_big_and_plenty_accessories_white",
    label: "Wedding Gown Big With Plenty Accessories White",
    field: "wedding_gown_big_and_plenty_accessories_white",
  },
  {
    name: "Kids_blouse_folding_colored",
    label: "Kids Blouse Folding-Colored",
    field: "Kids_blouse_folding_colored",
  },
  {
    name: "Kids_blouse_hanging_colored",
    label: "Kids Blouse Hanging-Colored",
    field: "Kids_blouse_hanging_colored",
  },
  {
    name: "Kids_blouse_folding_white",
    label: "Kids Blouse Folding-White",
    field: "Kids_blouse_folding_white",
  },
  {
    name: "Kids_blouse_hanging_white",
    label: "Kids Blouse Hanging-White",
    field: "Kids_blouse_hanging_white",
  },
  {
    name: "jalamia_colored",
    label: "Jalamia Colored",
    field: "jalamia_colored",
  },
  {
    name: "jalamia_white",
    label: "Jalamia White",
    field: "jalamia_white",
  },
  {
    name: "camisole_colored",
    label: "Camisole Colored",
    field: "camisole_colored",
  },
  {
    name: "camisole_white",
    label: "Camisole White",
    field: "camisole_white",
  },
  {
    name: "wrapper_buba_scarf_colored",
    label: "Wrapper, Buba And Scarf Colored",
    field: "wrapper_buba_scarf_colored",
  },
  {
    name: "wrapper_buba_scarf_white",
    label: "Wrapper, Buba And Scarf White",
    field: "wrapper_buba_scarf_white",
  },
  {
    name: "wrapper_buba_no_scarf_colored",
    label: "Wrapper, Buba And No-Scarf Colored",
    field: "wrapper_buba_no_scarf_colored",
  },
  {
    name: "wrapper_buba_no_scarf_white",
    label: "Wrapper, Buba And No-Scarf White",
    field: "wrapper_buba_no_scarf_white",
  },
  {
    name: "wrapper_only_colored",
    label: "Wrapper Only Colored",
    field: "wrapper_only_colored",
  },
  {
    name: "wrapper_only_white",
    label: "Wrapper Only White",
    field: "wrapper_only_white",
  },
  {
    name: "two_wrapper_scarf_or_no_scarf_colored",
    label: "Two Wrapper Scarf/No-Scarf Only Colored",
    field: "two_wrapper_scarf_or_no_scarf_colored",
  },
  {
    name: "two_wrapper_scarf_or_no_scarf_white",
    label: "Two Wrapper Scarf/No-Scarf Only White",
    field: "two_wrapper_scarf_or_no_scarf_white",
  },
  {
    name: "aso_oke_agbada_and_cap_colored",
    label: "Aso-Oke Agbada and Cap 2pcs Colored",
    field: "aso_oke_agbada_and_cap_colored",
  },
  {
    name: "male_aso_oke_and_cap_3pcs_colored",
    label: "Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored",
    field: "male_aso_oke_and_cap_3pcs_colored",
  },
  {
    name: "aso_oke_wrapper_buba_gele_colored",
    label: "Aso-Oke Wrapper, Buba and Gele 3pcs Colored",
    field: "aso_oke_wrapper_buba_gele_colored",
  },
  {
    name: "aso_oke_wrapper_gele_colored",
    label: "Aso-Oke Wrapper and Gele 2pcs Colored",
    field: "aso_oke_wrapper_gele_colored",
  },
  {
    name: "aso_oke_wrapper_gele_ipele_colored",
    label: "Aso-Oke Wrapper, Gele and Ipele 3pcs Colored",
    field: "aso_oke_wrapper_gele_ipele_colored",
  },
  {
    name: "aso_oke_wrapper_gele_ipele_white",
    label: "Aso-Oke Wrapper, Gele and Ipele 3pcs White",
    field: "aso_oke_wrapper_gele_ipele_white",
  },
  {
    name: "aso_oke_headtie_ipele_colored",
    label: "Aso-Oke Head-Tie Ipele 2pcs White",
    field: "aso_oke_headtie_ipele_colored",
  },
  {
    name: "male_complete_aso_oke_white",
    label: "Complete Male Aso-Oke White",
    field: "male_complete_aso_oke_white",
  },
  {
    name: "female_complete_aso_oke_white",
    label: "Complete Female Aso-Oke White",
    field: "female_complete_aso_oke_white",
  },
  {
    name: "female_inner_wear_colored",
    label: "Female Inner-Wear Colored",
    field: "female_inner_wear_colored",
  },
  {
    name: "female_inner_wear_white",
    label: "Female Inner-Wear White",
    field: "female_inner_wear_white",
  },
  {
    name: "head_tie_gele_colored",
    label: "Head-Tie/Gele Colored",
    field: "head_tie_gele_colored",
  },
  {
    name: "head_tie_gele_white",
    label: "Head-Tie/Gele White",
    field: "head_tie_gele_white",
  },
  {
    name: "gown_children_colored",
    label: "Gown Children Colored",
    field: "gown_children_colored",
  },
  {
    name: "gown_children_white",
    label: "Gown Children White",
    field: "gown_children_white",
  },
  {
    name: "gown_english_adult_folding_colored",
    label: "Gown English Adult Folding Colored",
    field: "gown_english_adult_folding_colored",
  },
  {
    name: "gown_english_adult_folding_white",
    label: "Gown English Adult Folding White",
    field: "gown_english_adult_folding_white",
  },
  {
    name: "gown_english_adult_hanging_colored",
    label: "Gown English Adult Hanging Colored",
    field: "gown_english_adult_hanging_colored",
  },
  {
    name: "gown_english_adult_hanging_white",
    label: "Gown English Adult Hanging White",
    field: "gown_english_adult_hanging_white",
  },
  {
    name: "gown_native_folding_colored",
    label: "Gown Native Folding Colored",
    field: "gown_native_folding_colored",
  },
  {
    name: "gown_native_folding_white",
    label: "Gown Native Folding White",
    field: "gown_native_folding_white",
  },
  {
    name: "skirt_and_blouse_english_hanging_colored",
    label: "Skirt and Blouse English 2pcs Hanging Colored",
    field: "skirt_and_blouse_english_hanging_colored",
  },
  {
    name: "skirt_and_blouse_english_hanging_white",
    label: "Skirt and Blouse English 2pcs Hanging White",
    field: "skirt_and_blouse_english_hanging_white",
  },
  {
    name: "skirt_and_blouse_native_folding_colored",
    label: "Skirt and Blouse Native 2pcs Folding Colored",
    field: "skirt_and_blouse_native_folding_colored",
  },
  {
    name: "skirt_and_blouse_native_folding_white",
    label: "Skirt and Blouse Native 2pcs Folding White",
    field: "skirt_and_blouse_native_folding_white",
  },
  {
    name: "female_native_buba_and_trouser_colored",
    label: "Female Native Buba and Trouser 2pcs Colored",
    field: "female_native_buba_and_trouser_colored",
  },
  {
    name: "female_native_buba_and_trouser_white",
    label: "Female Native Buba and Trouser 2pcs White",
    field: "female_native_buba_and_trouser_white",
  },
  {
    name: "male_cap_colored",
    label: "Male Cap Colored",
    field: "male_cap_colored",
  },
  {
    name: "male_cap_white",
    label: "Male Cap White",
    field: "male_cap_white",
  },
  {
    name: "female_cap_colored",
    label: "Female Cap Colored",
    field: "female_cap_colored",
  },
  {
    name: "female_cap_white",
    label: "Female Cap White",
    field: "female_cap_white",
  },
  {
    name: "turban_colored",
    label: "Turban Colored",
    field: "turban_colored",
  },
  {
    name: "turban_white",
    label: "Turban White",
    field: "turban_white",
  },
  {
    name: "sweater_small_colored",
    label: "Sweater Small Colored",
    field: "sweater_small_colored",
  },
  {
    name: "sweater_small_white",
    label: "Sweater Small White",
    field: "sweater_small_white",
  },
  {
    name: "sweater_normal_colored",
    label: "Sweater Normal Colored",
    field: "sweater_normal_colored",
  },
  {
    name: "sweater_normal_white",
    label: "Sweater Normal White",
    field: "sweater_normal_white",
  },
  {
    name: "sweater_big_colored",
    label: "Sweater Big Colored",
    field: "sweater_big_colored",
  },
  {
    name: "sweater_big_white",
    label: "Sweater Big White",
    field: "sweater_big_white",
  },
  {
    name: "towel_small_colored",
    label: "Towel Small Colored",
    field: "towel_small_colored",
  },
  {
    name: "towel_small_white",
    label: "Towel Small White",
    field: "towel_small_white",
  },
  {
    name: "towel_normal_colored",
    label: "Towel Normal Colored",
    field: "towel_normal_colored",
  },
  {
    name: "towel_normal_white",
    label: "Towel Normal White",
    field: "towel_normal_white",
  },
  {
    name: "towel_big_colored",
    label: "Towel Big Colored",
    field: "towel_big_colored",
  },
  {
    name: "towel_big_white",
    label: "Towel Big White",
    field: "towel_big_white",
  },
  {
    name: "bed_spread_normal_colored",
    label: "Bed-Spread Normal Colored",
    field: "bed_spread_normal_colored",
  },
  {
    name: "bed_spread_normal_white",
    label: "Bed-Spread Normal White",
    field: "bed_spread_normal_white",
  },
  {
    name: "bed_spread_big_colored",
    label: "Bed-Spread Big Colored",
    field: "bed_spread_big_colored",
  },
  {
    name: "bed_spread_big_white",
    label: "Bed-Spread Big White",
    field: "bed_spread_big_white",
  },
  {
    name: "bed_spread_double_colored",
    label: "Bed-Spread Double Colored",
    field: "bed_spread_double_colored",
  },
  {
    name: "bed_spread_double_white",
    label: "Bed-Spread Double White",
    field: "bed_spread_double_white",
  },
  {
    name: "duvet_normal_colored",
    label: "Duvet Normal Colored",
    field: "duvet_normal_colored",
  },
  {
    name: "duvet_normal_white",
    label: "Duvet Normal White",
    field: "duvet_normal_white",
  },
  {
    name: "duvet_big_colored",
    label: "Duvet Big Colored",
    field: "duvet_big_colored",
  },
  {
    name: "duvet_big_white",
    label: "Duvet Big White",
    field: "duvet_big_white",
  },
  {
    name: "curtain_normal_colored",
    label: "Curtain Normal Colored",
    field: "curtain_normal_colored",
  },
  {
    name: "curtain_big_colored",
    label: "Curtain Big Colored",
    field: "curtain_big_colored",
  },
  {
    name: "curtain_very_big_colored",
    label: "Curtain Very Big Colored",
    field: "curtain_very_big_colored",
  },
  {
    name: "blanket_colored",
    label: "Blanket Colored",
    field: "blanket_colored",
  },
  {
    name: "pyjamas_small_colored",
    label: "Pyjamas Small Colored",
    field: "pyjamas_small_colored",
  },
  {
    name: "pyjamas_small_white",
    label: "Pyjamas Small White",
    field: "pyjamas_small_white",
  },
  {
    name: "pyjamas_big_colored",
    label: "Pyjamas Big Colored",
    field: "pyjamas_big_colored",
  },
  {
    name: "pyjamas_big_white",
    label: "Pyjamas Big White",
    field: "pyjamas_big_white",
  },
  {
    name: "pillow_cases_colored",
    label: "Pillow Cases Colored",
    field: "pillow_cases_colored",
  },
  {
    name: "pillow_cases_white",
    label: "Pillow Cases White",
    field: "pillow_cases_white",
  },
  {
    name: "comment",
    label: "Comment",
    field: "comment",
  },
];
function copyTo(ID) {
  copyToClipboard(ID)
    .then(() => {
      // success!
      $q.notify({
        color: "green-4",
        position: "bottom",
        message: "Price ID copied to Clipboard",
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
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  return `${day}/${month}/${year} ${hours}:${minutes}`;
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
    .get(`${base}/price/${price_id.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      da.value = response.data.data;

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
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Price Found",
      });
      fixed0.value = true;
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Please Refresh",
        icon: "report_problem",
      });
    });
};

const onReset = () => {
  price_id.value = null;
};

const onDelete = () => {
  const token = useStore.getToken;
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  axios
    .delete(`${base}/price/${price_id.value}`, {
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
        message: "Price Deleted",
      });
      window.location.reload();
    })
    .catch(() => {
      $q.loading.hide();
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Price not found",
        icon: "report_problem",
      });
    });
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
