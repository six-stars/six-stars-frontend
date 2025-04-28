<template>
  <!-- <div class="text-black text-h4">Login</div> -->
  <div class="">
    <div class="row window-width">
      <div class="col gt-sm">
        <q-img alt="login image" src="~assets/login-img.png" class="fit">
          <div class="absolute-top bg-transparent">
            <q-item-section>
              <q-img
                class=""
                alt="Sixstarsdc.com.ng Logo"
                src="~assets/logo/Six_Star_3.png"
                style="max-width: 200px; max-height: 150px"
              />
            </q-item-section>
          </div>
        </q-img>
      </div>
      <div class="col">
        <div class="column full-height">
          <div class="col-10">
            <div class="q-ma-lg">
              <q-card class="full-height text-white">
                <div class="col-2 q-pb-sm q-pt-xs q-pl-md">
                  <q-img
                    class="lt-md"
                    alt="Sixstarsdc.com.ng Logo"
                    src="~assets/logo/Six_Star_3.png"
                    style="max-width: 200px"
                  />
                </div>
                <q-card-section>
                  <div class="text-h4 text-weight-bold q-pa-md text-primary">
                    All Account
                  </div>
                  <div class="text-6 q-pl-md q-pr-md q-pb-sm text-primary">
                    See all your previous or current intake with Six-Stars.
                  </div>
                  <!-- </q-card-section>
                <q-card-section> -->
                  <div class="q-pa-md">
                    <!-- <q-form @submit="onSubmit" @reset="onReset" class=""> -->
                    <q-input
                      type="number"
                      bottom-slots
                      v-model="phone_number"
                      label="Phone Number"
                      hint="Your phone number, using this format 234807538373"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="call" />
                      </template>
                      <template v-slot:after>
                        <q-btn round dense flat icon="send" @click="onSubmit" />
                      </template>
                    </q-input>
                    <!-- </q-form> -->
                  </div>
                  <!-- </q-card-section>
                <q-card-section> -->
                  <q-scroll-area :style="{ height: '50vh' }">
                    <div
                      class="row"
                      style="
                        border: 1px;
                        border-color: black;
                        border-radius: 10px;
                      "
                    >
                      <q-chip
                        clickable
                        v-for="(theData, i) in _data"
                        :key="i"
                        @click="onView(theData)"
                        color="primary"
                        text-color="white"
                      >
                        {{ theData.intake_id }}&nbsp;&nbsp;
                        <q-badge color="blue">
                          Quantity: {{ theData.quantity }} </q-badge
                        >&nbsp;&nbsp;
                        <q-badge
                          class="text-capitalize"
                          :color="
                            theData.current_status == 'ready' ? 'blue' : 'red'
                          "
                        >
                          Status: {{ theData.current_status }}
                        </q-badge>
                      </q-chip>
                      <!-- <q-card
                        v-for="(theData, i) in _data"
                        :key="i"
                        class="q-ma-sm text-white"
                        style="width: 150px"
                      >
                        <q-card-section class="bg-primary">
                          <div class="text-h6">
                            {{ theData.intake_id }}
                          </div>
                          <div class="text-subtitle2">
                            Quantity: {{ theData.quantity }}
                          </div>
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn flat class="bg-info">
                            {{ theData.current_status }}
                          </q-btn>
                          <q-btn
                            flat
                            class="bg-primary"
                            @click="
                              popupData = theData;
                              onView();
                              // onView(theData)
                            "
                          >
                            {{ theData.current_status }}
                            View
                          </q-btn>
                        </q-card-actions>
                      </q-card> -->
                    </div>
                  </q-scroll-area>
                  <div
                    class="text-6 text-center q-pt-md q-pl-md q-pr-md q-pb-md text-primary"
                  >
                    If you have any questions, feel free to contact our support
                    team at sixstarslaundryservices@gmail.com.
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div>
            <q-dialog v-model="viewIntake">
              <q-card class="my-card" flat bordered>
                <q-card-section>
                  <div class="text-h6">Intake</div>
                  <div class="text-subtitle2">
                    Customer Name: {{ customer_name }}
                  </div>
                </q-card-section>

                <q-markup-table>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(value, key) in data_" :key="key">
                      <td class="text-capitalize text-left">{{ key }}</td>
                      <td
                        v-if="key === 'Final Amount' || key === 'Balance'"
                        class="text-capitalize text-right"
                      >
                        <q-badge> ₦ {{ value }} </q-badge>
                      </td>
                      <td
                        v-else-if="key === 'Intake ID'"
                        class="text-capitalize text-right"
                      >
                        <q-badge class="bg-orange"> {{ value }} </q-badge>
                      </td>
                      <td
                        v-else-if="key === 'Deposit Type' || key === 'Deposit'"
                        class="text-capitalize text-right"
                      >
                        <q-badge class="bg-green"> {{ value }} </q-badge>
                      </td>
                      <td v-else class="text-capitalize text-right">
                        {{ value }}
                      </td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </q-card>
            </q-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
import { axios, api, base } from "boot/axios";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "../stores/user-store";
// import { useStore } from 'vuex'
// import store from '../store/index.js'
// import { createLogger, mapMutations } from "pinia";
// import { useAuthStore } from '../stores/AuthStore'
// import { mapActions, mapState } from 'pinia'

name: "LoginPage";
const $q = useQuasar();
const useStore = useUserStore();

// const email = ref("");
const phone_number = ref("");
const customer_name = ref("");
const popupData = ref(null);
const confirm_password = ref("");
const isloading = ref(false);
const viewIntake = ref(false);
const _data = ref([]);
const data_ = ref([]);

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
  { name: "current_status", label: "Current Status", field: "current_status" },
  { name: "staff", label: "Staff", field: "staff" },
  { name: "staff_name", label: "Staff", field: "staff_name" },
  {
    name: "quantity_male_native_2pcs_folding_colored",
    label: "Quantity Male Native 2 Pcs Folding-Colored",
    field: "quantity_male_native_2pcs_folding_colored",
  },
  {
    name: "male_native_2pcs_folding_colored",
    label: "Male Native 2 Pcs Folding-Colored",
    field: "male_native_2pcs_folding_colored",
  },
  {
    name: "quantity_male_native_2pcs_hanging_colored",
    label: "Quantity Male Native 2 Pcs Hanging-Colored",
    field: "quantity_male_native_2pcs_hanging_colored",
  },
  {
    name: "male_native_2pcs_hanging_colored",
    label: "Male Native 2 Pcs Hanging-Colored",
    field: "male_native_2pcs_hanging_colored",
  },
  {
    name: "quantity_male_native_2pcs_folding_white",
    label: "Quantity Male Native 2 Pcs Folding-White",
    field: "quantity_male_native_2pcs_folding_white",
  },
  {
    name: "male_native_2pcs_folding_white",
    label: "Male Native 2 Pcs Folding-White",
    field: "male_native_2pcs_folding_white",
  },
  {
    name: "quantity_male_native_2pcs_hanging_white",
    label: "Quantity Male Native 2 Pcs Hanging-White",
    field: "quantity_male_native_2pcs_hanging_white",
  },
  {
    name: "male_native_2pcs_hanging_white",
    label: "Male Native 2 Pcs Hanging-White",
    field: "male_native_2pcs_hanging_white",
  },
  {
    name: "quantity_male_native_3pcs_notAgbada_folding_colored",
    label: "Quantity Male Native 3 Pcs Not-Agbada Folding-Colored",
    field: "quantity_male_native_3pcs_notAgbada_folding_colored",
  },
  {
    name: "male_native_3pcs_notAgbada_folding_colored",
    label: "Male Native 3 Pcs Not-Agbada Folding-Colored",
    field: "male_native_3pcs_notAgbada_folding_colored",
  },
  {
    name: "quantity_male_native_3pcs_notAgbada_hanging_colored",
    label: "Quantity Male Native 3 Pcs Not-Agbada Hanging-Colored",
    field: "quantity_male_native_3pcs_notAgbada_hanging_colored",
  },
  {
    name: "male_native_3pcs_notAgbada_hanging_colored",
    label: "Male Native 3 Pcs Not-Agbada Hanging-Colored",
    field: "male_native_3pcs_notAgbada_hanging_colored",
  },
  {
    name: "quantity_male_native_3pcs_notAgbada_folding_white",
    label: "Quantity Male Native 3 Pcs Not-Agbada Folding-White",
    field: "quantity_male_native_3pcs_notAgbada_folding_white",
  },
  {
    name: "male_native_3pcs_notAgbada_folding_white",
    label: "Male Native 3 Pcs Not-Agbada Folding-White",
    field: "male_native_3pcs_notAgbada_folding_white",
  },
  {
    name: "quantity_male_native_3pcs_notAgbada_hanging_white",
    label: "Quantity Male Native 3 Pcs Not-Agbada Hanging-White",
    field: "quantity_male_native_3pcs_notAgbada_hanging_white",
  },
  {
    name: "male_native_3pcs_notAgbada_hanging_white",
    label: "Male Native 3 Pcs Not-Agbada Hanging-White",
    field: "male_native_3pcs_notAgbada_hanging_white",
  },
  {
    name: "quantity_native_top_only_folding_colored",
    label: "Quantity Native Top Only Folding-Colored",
    field: "quantity_native_top_only_folding_colored",
  },
  {
    name: "native_top_only_folding_colored",
    label: "Native Top Only Folding-Colored",
    field: "native_top_only_folding_colored",
  },
  {
    name: "quantity_native_top_only_hanging_colored",
    label: "Quantity Native Top Only Hanging-Colored",
    field: "quantity_native_top_only_hanging_colored",
  },
  {
    name: "native_top_only_hanging_colored",
    label: "Native Top Only Hanging-Colored",
    field: "native_top_only_hanging_colored",
  },
  {
    name: "quantity_native_top_only_folding_white",
    label: "Quantity Native Top Only Folding-White",
    field: "quantity_native_top_only_folding_white",
  },
  {
    name: "native_top_only_folding_white",
    label: "Native Top Only Folding-White",
    field: "native_top_only_folding_white",
  },
  {
    name: "quantity_native_top_only_hanging_white",
    label: "Quantity Native Top Only Hanging-White",
    field: "quantity_native_top_only_hanging_white",
  },
  {
    name: "native_top_only_hanging_white",
    label: "Native Top Only Hanging-White",
    field: "native_top_only_hanging_white",
  },
  {
    name: "quantity_native_trouser_only_folding_colored",
    label: "Quantity Native Trouser Only Folding-Colored",
    field: "quantity_native_trouser_only_folding_colored",
  },
  {
    name: "native_trouser_only_folding_colored",
    label: "Native Trouser Only Folding-Colored",
    field: "native_trouser_only_folding_colored",
  },
  {
    name: "quantity_native_trouser_only_hanging_colored",
    label: "Quantity Native Trouser Only Hanging-Colored",
    field: "quantity_native_trouser_only_hanging_colored",
  },
  {
    name: "native_trouser_only_hanging_colored",
    label: "Native Trouser Only Hanging-Colored",
    field: "native_trouser_only_hanging_colored",
  },
  {
    name: "quantity_native_trouser_only_folding_white",
    label: "Quantity Native Trouser Only Folding-White",
    field: "quantity_native_trouser_only_folding_white",
  },
  {
    name: "native_trouser_only_folding_white",
    label: "Native Trouser Only Folding-White",
    field: "native_trouser_only_folding_white",
  },
  {
    name: "quantity_native_trouser_only_hanging_white",
    label: "Quantity Native Trouser Only Hanging-White",
    field: "quantity_native_trouser_only_hanging_white",
  },
  {
    name: "native_trouser_only_hanging_white",
    label: "Native Trouser Only Hanging-White",
    field: "native_trouser_only_hanging_white",
  },
  {
    name: "quantity_male_agbada_only_folding_colored",
    label: "Quantity Agbada Only Folding-Colored",
    field: "quantity_male_agbada_only_folding_colored",
  },
  {
    name: "male_agbada_only_folding_colored",
    label: "Agbada Only Folding-Colored",
    field: "male_agbada_only_folding_colored",
  },
  {
    name: "quantity_male_agbada_only_hanging_colored",
    label: "Quantity Agbada Only Hanging-Colored",
    field: "quantity_male_agbada_only_hanging_colored",
  },
  {
    name: "male_agbada_only_hanging_colored",
    label: "Agbada Only Hanging-Colored",
    field: "male_agbada_only_hanging_colored",
  },
  {
    name: "quantity_male_agbada_only_folding_white",
    label: "Quantity Agbada Only Folding-White",
    field: "quantity_male_agbada_only_folding_white",
  },
  {
    name: "male_agbada_only_folding_white",
    label: "Agbada Only Folding-White",
    field: "male_agbada_only_folding_white",
  },
  {
    name: "quantity_male_agbada_only_hanging_white",
    label: "Quantity Agbada Only Hanging-White",
    field: "quantity_male_agbada_only_hanging_white",
  },
  {
    name: "male_agbada_only_hanging_white",
    label: "Agbada Only Hanging-White",
    field: "male_agbada_only_hanging_white",
  },
  {
    name: "quantity_complete_male_agbada_3pcs_Folding_colored",
    label: "Quantity Complete Male Agbada 3 Pcs Hanging-Colored",
    field: "quantity_complete_male_agbada_3pcs_Folding_colored",
  },
  {
    name: "complete_male_agbada_3pcs_Folding_colored",
    label: "Complete Male Agbada 3 Pcs Hanging-Colored",
    field: "complete_male_agbada_3pcs_Folding_colored",
  },
  {
    name: "quantity_complete_male_agbada_3pcs_Hanging_colored",
    label: "Quantity Complete Male Agbada 3 Pcs Hanging-Colored",
    field: "quantity_complete_male_agbada_3pcs_Hanging_colored",
  },
  {
    name: "complete_male_agbada_3pcs_Hanging_colored",
    label: "Complete Male Agbada 3 Pcs Hanging-Colored",
    field: "complete_male_agbada_3pcs_Hanging_colored",
  },
  {
    name: "quantity_complete_male_agbada_3pcs_Folding_white",
    label: "Quantity Complete Male Agbada 3 Pcs Hanging-White",
    field: "quantity_complete_male_agbada_3pcs_Folding_white",
  },
  {
    name: "complete_male_agbada_3pcs_Folding_white",
    label: "Complete Male Agbada 3 Pcs Hanging-White",
    field: "complete_male_agbada_3pcs_Folding_white",
  },
  {
    name: "quantity_complete_male_agbada_3pcs_Hanging_white",
    label: "Quantity Complete Male Agbada 3 Pcs Hanging-White",
    field: "quantity_complete_male_agbada_3pcs_Hanging_white",
  },
  {
    name: "complete_male_agbada_3pcs_Hanging_white",
    label: "Complete Male Agbada 3 Pcs Hanging-White",
    field: "complete_male_agbada_3pcs_Hanging_white",
  },
  {
    name: "quantity_normal_shirt_folding_colored",
    label: "Quantity Shirt Folding-Colored",
    field: "quantity_normal_shirt_folding_colored",
  },
  {
    name: "normal_shirt_folding_colored",
    label: "Shirt Folding-Colored",
    field: "normal_shirt_folding_colored",
  },
  {
    name: "quantity_normal_shirt_hanging_colored",
    label: "Quantity Shirt Hanging-Colored",
    field: "quantity_normal_shirt_hanging_colored",
  },
  {
    name: "normal_shirt_hanging_colored",
    label: "Shirt Hanging-Colored",
    field: "normal_shirt_hanging_colored",
  },
  {
    name: "quantity_normal_shirt_folding_white",
    label: "Quantity Shirt Folding-White",
    field: "quantity_normal_shirt_folding_white",
  },
  {
    name: "normal_shirt_folding_white",
    label: "Shirt Folding-White",
    field: "normal_shirt_folding_white",
  },
  {
    name: "quantity_normal_shirt_hanging_white",
    label: "Quantity Shirt Hanging-White",
    field: "quantity_normal_shirt_hanging_white",
  },
  {
    name: "normal_shirt_hanging_white",
    label: "Shirt Hanging-White",
    field: "normal_shirt_hanging_white",
  },
  {
    name: "quantity_shirt_big_folding_colored",
    label: "Quantity Shirt Big Folding-Colored",
    field: "quantity_shirt_big_folding_colored",
  },
  {
    name: "shirt_big_folding_colored",
    label: "Shirt Big Folding-Colored",
    field: "shirt_big_folding_colored",
  },
  {
    name: "quantity_shirt_big_hanging_colored",
    label: "Quantity Shirt Big Hanging-Colored",
    field: "quantity_shirt_big_hanging_colored",
  },
  {
    name: "shirt_big_hanging_colored",
    label: "Shirt Big Hanging-Colored",
    field: "shirt_big_hanging_colored",
  },
  {
    name: "quantity_shirt_big_folding_white",
    label: "Quantity Shirt Big Folding-White",
    field: "quantity_shirt_big_folding_white",
  },
  {
    name: "shirt_big_folding_white",
    label: "Shirt Big Folding-White",
    field: "shirt_big_folding_white",
  },
  {
    name: "quantity_shirt_big_hanging_white",
    label: "Quantity Shirt Big Hanging-White",
    field: "quantity_shirt_big_hanging_white",
  },
  {
    name: "shirt_big_hanging_white",
    label: "Shirt Big Hanging-White",
    field: "shirt_big_hanging_white",
  },
  {
    name: "quantity_shirt_x_large_folding_colored",
    label: "Quantity Shirt XLarge Folding-Colored",
    field: "quantity_shirt_x_large_folding_colored",
  },
  {
    name: "shirt_x_large_folding_colored",
    label: "Shirt XLarge Folding-Colored",
    field: "shirt_x_large_folding_colored",
  },
  {
    name: "quantity_shirt_x_large_hanging_colored",
    label: "Quantity Shirt XLarge Hanging-Colored",
    field: "quantity_shirt_x_large_hanging_colored",
  },
  {
    name: "shirt_x_large_hanging_colored",
    label: "Shirt XLarge Hanging-Colored",
    field: "shirt_x_large_hanging_colored",
  },
  {
    name: "quantity_shirt_x_large_folding_white",
    label: "Quantity Shirt XLarge Folding-White",
    field: "quantity_shirt_x_large_folding_white",
  },
  {
    name: "shirt_x_large_folding_white",
    label: "Shirt XLarge Folding-White",
    field: "shirt_x_large_folding_white",
  },
  {
    name: "quantity_shirt_x_large_hanging_white",
    label: "Quantity Shirt XLarge Hanging-White",
    field: "quantity_shirt_x_large_hanging_white",
  },
  {
    name: "shirt_x_large_hanging_white",
    label: "Shirt XLarge Hanging-White",
    field: "shirt_x_large_hanging_white",
  },
  {
    name: "quantity_shirt_children_folding_colored",
    label: "Quantity Shirt Children Folding-Colored",
    field: "quantity_shirt_children_folding_colored",
  },
  {
    name: "shirt_children_folding_colored",
    label: "Shirt Children Folding-Colored",
    field: "shirt_children_folding_colored",
  },
  {
    name: "quantity_shirt_children_hanging_colored",
    label: "Quantity Shirt Children Hanging-Colored",
    field: "quantity_shirt_children_hanging_colored",
  },
  {
    name: "shirt_children_hanging_colored",
    label: "Shirt Children Hanging-Colored",
    field: "shirt_children_hanging_colored",
  },
  {
    name: "quantity_shirt_children_folding_white",
    label: "Quantity Shirt Children Folding-White",
    field: "quantity_shirt_children_folding_white",
  },
  {
    name: "shirt_children_folding_white",
    label: "Shirt Children Folding-White",
    field: "shirt_children_folding_white",
  },
  {
    name: "quantity_shirt_children_hanging_white",
    label: "Quantity Shirt Children Hanging-White",
    field: "quantity_shirt_children_hanging_white",
  },
  {
    name: "shirt_children_hanging_white",
    label: "Shirt Children Hanging-White",
    field: "shirt_children_hanging_white",
  },
  {
    name: "quantity_blouse_folding_colored",
    label: "Quantity Blouse Folding-Colored",
    field: "quantity_blouse_folding_colored",
  },
  {
    name: "blouse_folding_colored",
    label: "Blouse Folding-Colored",
    field: "blouse_folding_colored",
  },
  {
    name: "quantity_blouse_hanging_colored",
    label: "Quantity Blouse Hanging-Colored",
    field: "quantity_blouse_hanging_colored",
  },
  {
    name: "blouse_hanging_colored",
    label: "Blouse Hanging-Colored",
    field: "blouse_hanging_colored",
  },
  {
    name: "quantity_blouse_folding_white",
    label: "Quantity Blouse Folding-White",
    field: "quantity_blouse_folding_white",
  },
  {
    name: "blouse_folding_white",
    label: "Blouse Folding-White",
    field: "blouse_folding_white",
  },
  {
    name: "quantity_blouse_hanging_white",
    label: "Quantity Blouse Hanging-White",
    field: "quantity_blouse_hanging_white",
  },
  {
    name: "blouse_hanging_white",
    label: "Blouse Hanging-White",
    field: "blouse_hanging_white",
  },
  {
    name: "quantity_blouse_x_large_folding_colored",
    label: "Quantity Blouse XLarge Folding-Colored",
    field: "quantity_blouse_x_large_folding_colored",
  },
  {
    name: "blouse_x_large_folding_colored",
    label: "Blouse XLarge Folding-Colored",
    field: "blouse_x_large_folding_colored",
  },
  {
    name: "quantity_blouse_x_large_hanging_colored",
    label: "Quantity Blouse XLarge Hanging-Colored",
    field: "quantity_blouse_x_large_hanging_colored",
  },
  {
    name: "blouse_x_large_hanging_colored",
    label: "Blouse XLarge Hanging-Colored",
    field: "blouse_x_large_hanging_colored",
  },
  {
    name: "quantity_blouse_x_large_folding_white",
    label: "Quantity Blouse XLarge Folding-White",
    field: "quantity_blouse_x_large_folding_white",
  },
  {
    name: "blouse_x_large_folding_white",
    label: "Blouse XLarge Folding-White",
    field: "blouse_x_large_folding_white",
  },
  {
    name: "quantity_blouse_x_large_hanging_white",
    label: "Quantity Blouse XLarge Hanging-White",
    field: "quantity_blouse_x_large_hanging_white",
  },
  {
    name: "blouse_x_large_hanging_white",
    label: "Blouse XLarge Hanging-White",
    field: "blouse_x_large_hanging_white",
  },
  {
    name: "quantity_female_shirt_folding_colored",
    label: "Quantity Female Shirt Folding-Colored",
    field: "quantity_female_shirt_folding_colored",
  },
  {
    name: "female_shirt_folding_colored",
    label: "Female Shirt Folding-Colored",
    field: "female_shirt_folding_colored",
  },
  {
    name: "quantity_female_shirt_hanging_colored",
    label: "Quantity Female Shirt Hanging-Colored",
    field: "quantity_female_shirt_hanging_colored",
  },
  {
    name: "female_shirt_hanging_colored",
    label: "Female Shirt Hanging-Colored",
    field: "female_shirt_hanging_colored",
  },
  {
    name: "quantity_female_shirt_folding_white",
    label: "Quantity Female Shirt Folding-White",
    field: "quantity_female_shirt_folding_white",
  },
  {
    name: "female_shirt_folding_white",
    label: "Female Shirt Folding-White",
    field: "female_shirt_folding_white",
  },
  {
    name: "quantity_female_shirt_hanging_white",
    label: "Quantity Female Shirt Hanging-White",
    field: "quantity_female_shirt_hanging_white",
  },
  {
    name: "female_shirt_hanging_white",
    label: "Female Shirt Hanging-White",
    field: "female_shirt_hanging_white",
  },
  {
    name: "quantity_tshirt_polo_small_folding_colored",
    label: "Quantity TShirt/Polo Small Folding-Colored",
    field: "quantity_tshirt_polo_small_folding_colored",
  },
  {
    name: "tshirt_polo_small_folding_colored",
    label: "TShirt/Polo Small Folding-Colored",
    field: "tshirt_polo_small_folding_colored",
  },
  {
    name: "quantity_tshirt_polo_small_hanging_colored",
    label: "Quantity TShirt/Polo Small Hanging-Colored",
    field: "quantity_tshirt_polo_small_hanging_colored",
  },
  {
    name: "tshirt_polo_small_hanging_colored",
    label: "TShirt/Polo Small Hanging-Colored",
    field: "tshirt_polo_small_hanging_colored",
  },
  {
    name: "quantity_tshirt_polo_small_folding_white",
    label: "Quantity TShirt/Polo Small Folding-White",
    field: "quantity_tshirt_polo_small_folding_white",
  },
  {
    name: "tshirt_polo_small_folding_white",
    label: "TShirt/Polo Small Folding-White",
    field: "tshirt_polo_small_folding_white",
  },
  {
    name: "quantity_tshirt_polo_small_hanging_white",
    label: "Quantity TShirt/Polo Small Hanging-White",
    field: "quantity_tshirt_polo_small_hanging_white",
  },
  {
    name: "tshirt_polo_small_hanging_white",
    label: "TShirt/Polo Small Hanging-White",
    field: "tshirt_polo_small_hanging_white",
  },
  {
    name: "quantity_tshirt_polo_medium_folding_colored",
    label: "Quantity TShirt/Polo Medium Folding-Colored",
    field: "quantity_tshirt_polo_medium_folding_colored",
  },
  {
    name: "tshirt_polo_medium_folding_colored",
    label: "TShirt/Polo Medium Folding-Colored",
    field: "tshirt_polo_medium_folding_colored",
  },
  {
    name: "quantity_tshirt_polo_medium_hanging_colored",
    label: "Quantity TShirt/Polo Medium Hanging-Colored",
    field: "quantity_tshirt_polo_medium_hanging_colored",
  },
  {
    name: "tshirt_polo_medium_hanging_colored",
    label: "TShirt/Polo Medium Hanging-Colored",
    field: "tshirt_polo_medium_hanging_colored",
  },
  {
    name: "quantity_tshirt_polo_medium_folding_white",
    label: "Quantity TShirt/Polo Medium Folding-White",
    field: "quantity_tshirt_polo_medium_folding_white",
  },
  {
    name: "tshirt_polo_medium_folding_white",
    label: "TShirt/Polo Medium Folding-White",
    field: "tshirt_polo_medium_folding_white",
  },
  {
    name: "quantity_tshirt_polo_medium_hanging_white",
    label: "Quantity TShirt/Polo Medium Hanging-White",
    field: "quantity_tshirt_polo_medium_hanging_white",
  },
  {
    name: "tshirt_polo_medium_hanging_white",
    label: "TShirt/Polo Medium Hanging-White",
    field: "tshirt_polo_medium_hanging_white",
  },
  {
    name: "quantity_tshirt_polo_big_folding_colored",
    label: "Quantity TShirt/Polo Big Folding-Colored",
    field: "quantity_tshirt_polo_big_folding_colored",
  },
  {
    name: "tshirt_polo_big_folding_colored",
    label: "TShirt/Polo Big Folding-Colored",
    field: "tshirt_polo_big_folding_colored",
  },
  {
    name: "quantity_tshirt_polo_big_hanging_colored",
    label: "Quantity TShirt/Polo Big Hanging-Colored",
    field: "quantity_tshirt_polo_big_hanging_colored",
  },
  {
    name: "tshirt_polo_big_hanging_colored",
    label: "TShirt/Polo Big Hanging-Colored",
    field: "tshirt_polo_big_hanging_colored",
  },
  {
    name: "quantity_tshirt_polo_big_folding_white",
    label: "Quantity TShirt/Polo Big Folding-White",
    field: "quantity_tshirt_polo_big_folding_white",
  },
  {
    name: "tshirt_polo_big_folding_white",
    label: "TShirt/Polo Big Folding-White",
    field: "tshirt_polo_big_folding_white",
  },
  {
    name: "quantity_tshirt_polo_big_hanging_white",
    label: "Quantity TShirt/Polo Big Hanging-White",
    field: "quantity_tshirt_polo_big_hanging_white",
  },
  {
    name: "tshirt_polo_big_hanging_white",
    label: "TShirt/Polo Big Hanging-White",
    field: "tshirt_polo_big_hanging_white",
  },
  {
    name: "quantity_plain_trouser_folding_colored",
    label: "Quantity Trouser Folding-Colored",
    field: "quantity_plain_trouser_folding_colored",
  },
  {
    name: "plain_trouser_folding_colored",
    label: "Trouser Folding-Colored",
    field: "plain_trouser_folding_colored",
  },
  {
    name: "quantity_plain_trouser_hanging_colored",
    label: "Quantity Trouser Hanging-Colored",
    field: "quantity_plain_trouser_hanging_colored",
  },
  {
    name: "plain_trouser_hanging_colored",
    label: "Trouser Hanging-Colored",
    field: "plain_trouser_hanging_colored",
  },
  {
    name: "quantity_plain_trouser_folding_white",
    label: "Quantity Trouser Folding-White",
    field: "quantity_plain_trouser_folding_white",
  },
  {
    name: "plain_trouser_folding_white",
    label: "Trouser Folding-White",
    field: "plain_trouser_folding_white",
  },
  {
    name: "quantity_plain_trouser_hanging_white",
    label: "Quantity Trouser Hanging-White",
    field: "quantity_plain_trouser_hanging_white",
  },
  {
    name: "plain_trouser_hanging_white",
    label: "Trouser Hanging-White",
    field: "plain_trouser_hanging_white",
  },
  {
    name: "quantity_jeans_chinos_trouser_folding_colored",
    label: "Quantity Jeans/Chinos Trouser Folding-Colored",
    field: "quantity_jeans_chinos_trouser_folding_colored",
  },
  {
    name: "jeans_chinos_trouser_folding_colored",
    label: "Jeans/Chinos Trouser Folding-Colored",
    field: "jeans_chinos_trouser_folding_colored",
  },
  {
    name: "quantity_jeans_chinos_trouser_hanging_colored",
    label: "Quantity Jeans/Chinos Trouser Hanging-Colored",
    field: "quantity_jeans_chinos_trouser_hanging_colored",
  },
  {
    name: "jeans_chinos_trouser_hanging_colored",
    label: "Jeans/Chinos Trouser Hanging-Colored",
    field: "jeans_chinos_trouser_hanging_colored",
  },
  {
    name: "quantity_jeans_chinos_trouser_folding_white",
    label: "Quantity Jeans/Chinos Trouser Folding-White",
    field: "quantity_jeans_chinos_trouser_folding_white",
  },
  {
    name: "jeans_chinos_trouser_folding_white",
    label: "Jeans/Chinos Trouser Folding-White",
    field: "jeans_chinos_trouser_folding_white",
  },
  {
    name: "quantity_jeans_chinos_trouser_hanging_white",
    label: "Quantity Jeans/Chinos Trouser Hanging-White",
    field: "quantity_jeans_chinos_trouser_hanging_white",
  },
  {
    name: "jeans_chinos_trouser_hanging_white",
    label: "Jeans/Chinos Trouser Hanging-White",
    field: "jeans_chinos_trouser_hanging_white",
  },
  {
    name: "quantity_waist_coat_hanging_colored",
    label: "Quantity Waist Coat Hanging-Colored",
    field: "quantity_waist_coat_hanging_colored",
  },
  {
    name: "waist_coat_hanging_colored",
    label: "Waist Coat Hanging-Colored",
    field: "waist_coat_hanging_colored",
  },
  {
    name: "quantity_waist_coat_hanging_white",
    label: "Quantity Waist Coat Hanging-White",
    field: "quantity_waist_coat_hanging_white",
  },
  {
    name: "waist_coat_hanging_white",
    label: "Waist Coat Hanging-White",
    field: "waist_coat_hanging_white",
  },
  {
    name: "quantity_tie_colored",
    label: "Quantity Tie Colored",
    field: "quantity_tie_colored",
  },
  {
    name: "tie_colored",
    label: "Tie Colored",
    field: "tie_colored",
  },
  {
    name: "quantity_tie_white",
    label: "Quantity Tie White",
    field: "quantity_tie_white",
  },
  {
    name: "tie_white",
    label: "Tie White",
    field: "tie_white",
  },
  {
    name: "quantity_shorts_folding_colored",
    label: "Quantity Shorts Folding-Colored",
    field: "quantity_shorts_folding_colored",
  },
  {
    name: "shorts_folding_colored",
    label: "Shorts Folding-Colored",
    field: "shorts_folding_colored",
  },
  {
    name: "quantity_shorts_hanging_colored",
    label: "Quantity Shorts Hanging-Colored",
    field: "quantity_shorts_hanging_colored",
  },
  {
    name: "shorts_hanging_colored",
    label: "Shorts Hanging-Colored",
    field: "shorts_hanging_colored",
  },
  {
    name: "quantity_shorts_folding_white",
    label: "Quantity Shorts Folding-White",
    field: "quantity_shorts_folding_white",
  },
  {
    name: "shorts_folding_white",
    label: "Shorts Folding-White",
    field: "shorts_folding_white",
  },
  {
    name: "quantity_shorts_hanging_white",
    label: "Quantity Shorts Hanging-White",
    field: "quantity_shorts_hanging_white",
  },
  {
    name: "shorts_hanging_white",
    label: "Shorts Hanging-White",
    field: "shorts_hanging_white",
  },
  {
    name: "quantity_singlet_colored",
    label: "Quantity Singlet Colored",
    field: "quantity_singlet_colored",
  },
  {
    name: "singlet_colored",
    label: "Singlet Colored",
    field: "singlet_colored",
  },
  {
    name: "quantity_singlet_white",
    label: "Quantity Singlet White",
    field: "quantity_singlet_white",
  },
  {
    name: "singlet_white",
    label: "Singlet White",
    field: "singlet_white",
  },
  {
    name: "quantity_boxer_colored",
    label: "Quantity Boxer Colored",
    field: "quantity_boxer_colored",
  },
  {
    name: "boxer_colored",
    label: "Boxer Colored",
    field: "boxer_colored",
  },
  {
    name: "quantity_boxer_white",
    label: "Quantity Boxer White",
    field: "quantity_boxer_white",
  },
  {
    name: "boxer_white",
    label: "Boxer White",
    field: "boxer_white",
  },
  {
    name: "quantity_male_2pcs_suit_hanging_colored",
    label: "Quantity Male 2 Pcs Suit Hanging-Colored",
    field: "quantity_male_2pcs_suit_hanging_colored",
  },
  {
    name: "male_2pcs_suit_hanging_colored",
    label: "Male 2 Pcs Suit Hanging-Colored",
    field: "male_2pcs_suit_hanging_colored",
  },
  {
    name: "quantity_male_2pcs_suit_hanging_white",
    label: "Quantity Male 2 Pcs Suit Hanging-White",
    field: "quantity_male_2pcs_suit_hanging_white",
  },
  {
    name: "male_2pcs_suit_hanging_white",
    label: "Male 2 Pcs Suit Hanging-White",
    field: "male_2pcs_suit_hanging_white",
  },
  {
    name: "quantity_male_3pcs_suit_hanging_colored",
    label: "Quantity Male 3 Pcs Suit Hanging-Colored",
    field: "quantity_male_3pcs_suit_hanging_colored",
  },
  {
    name: "male_3pcs_suit_hanging_colored",
    label: "Male 3 Pcs Suit Hanging-Colored",
    field: "male_3pcs_suit_hanging_colored",
  },
  {
    name: "quantity_male_3pcs_suit_hanging_white",
    label: "Quantity Male 3 Pcs Suit Hanging-White",
    field: "quantity_male_3pcs_suit_hanging_white",
  },
  {
    name: "male_3pcs_suit_hanging_white",
    label: "Male 3 Pcs Suit Hanging-White",
    field: "male_3pcs_suit_hanging_white",
  },
  {
    name: "quantity_female_2pcs_suit_hanging_colored",
    label: "Quantity Female 2 Pcs Suit Hanging-Colored",
    field: "quantity_female_2pcs_suit_hanging_colored",
  },
  {
    name: "female_2pcs_suit_hanging_colored",
    label: "Female 2 Pcs Suit Hanging-Colored",
    field: "female_2pcs_suit_hanging_colored",
  },
  {
    name: "quantity_female_2pcs_suit_hanging_white",
    label: "Quantity Female 2 Pcs Suit Hanging-White",
    field: "quantity_female_2pcs_suit_hanging_white",
  },
  {
    name: "female_2pcs_suit_hanging_white",
    label: "Female 2 Pcs Suit Hanging-White",
    field: "female_2pcs_suit_hanging_white",
  },
  {
    name: "quantity_female_3pcs_suit_hanging_colored",
    label: "Quantity Female 3 Pcs Suit Hanging-Colored",
    field: "quantity_female_3pcs_suit_hanging_colored",
  },
  {
    name: "female_3pcs_suit_hanging_colored",
    label: "Female 3 Pcs Suit Hanging-Colored",
    field: "female_3pcs_suit_hanging_colored",
  },
  {
    name: "quantity_female_3pcs_suit_hanging_white",
    label: "Quantity Female 3 Pcs Suit Hanging-White",
    field: "quantity_female_3pcs_suit_hanging_white",
  },
  {
    name: "female_3pcs_suit_hanging_white",
    label: "Female 3 Pcs Suit Hanging-White",
    field: "female_3pcs_suit_hanging_white",
  },
  {
    name: "quantity_male_jacket_only_colored",
    label: "Quantity Male Jacket Only Colored",
    field: "quantity_male_jacket_only_colored",
  },
  {
    name: "male_jacket_only_colored",
    label: "Male Jacket Only Colored",
    field: "male_jacket_only_colored",
  },
  {
    name: "quantity_male_jacket_only_white",
    label: "Quantity Male Jacket Only White",
    field: "quantity_male_jacket_only_white",
  },
  {
    name: "male_jacket_only_white",
    label: "Male Jacket Only White",
    field: "male_jacket_only_white",
  },
  {
    name: "quantity_female_jacket_only_colored",
    label: "Quantity Female Jacket Only Colored",
    field: "quantity_female_jacket_only_colored",
  },
  {
    name: "female_jacket_only_colored",
    label: "Female Jacket Only Colored",
    field: "female_jacket_only_colored",
  },
  {
    name: "quantity_female_jacket_only_white",
    label: "Quantity Female Jacket Only White",
    field: "quantity_female_jacket_only_white",
  },
  {
    name: "female_jacket_only_white",
    label: "Female Jacket Only White",
    field: "female_jacket_only_white",
  },
  {
    name: "quantity_wedding_gown_small_and_little_accessories_white",
    label: "Quantity Wedding Gown Small With Little Accessories White",
    field: "quantity_wedding_gown_small_and_little_accessories_white",
  },
  {
    name: "wedding_gown_small_and_little_accessories_white",
    label: "Wedding Gown Small With Little Accessories White",
    field: "wedding_gown_small_and_little_accessories_white",
  },
  {
    name: "quantity_wedding_gown_big_and_plenty_accessories_white",
    label: "Quantity Wedding Gown Big With Plenty Accessories White",
    field: "quantity_wedding_gown_big_and_plenty_accessories_white",
  },
  {
    name: "wedding_gown_big_and_plenty_accessories_white",
    label: "Wedding Gown Big With Plenty Accessories White",
    field: "wedding_gown_big_and_plenty_accessories_white",
  },
  {
    name: "quantity_Kids_blouse_folding_colored",
    label: "Quantity Kids Blouse Folding-Colored",
    field: "quantity_Kids_blouse_folding_colored",
  },
  {
    name: "Kids_blouse_folding_colored",
    label: "Kids Blouse Folding-Colored",
    field: "Kids_blouse_folding_colored",
  },
  {
    name: "quantity_Kids_blouse_hanging_colored",
    label: "Quantity Kids Blouse Hanging-Colored",
    field: "quantity_Kids_blouse_hanging_colored",
  },
  {
    name: "Kids_blouse_hanging_colored",
    label: "Kids Blouse Hanging-Colored",
    field: "Kids_blouse_hanging_colored",
  },
  {
    name: "quantity_Kids_blouse_folding_white",
    label: "Quantity Kids Blouse Folding-White",
    field: "quantity_Kids_blouse_folding_white",
  },
  {
    name: "Kids_blouse_folding_white",
    label: "Kids Blouse Folding-White",
    field: "Kids_blouse_folding_white",
  },
  {
    name: "quantity_Kids_blouse_hanging_white",
    label: "Quantity Kids Blouse Hanging-White",
    field: "quantity_Kids_blouse_hanging_white",
  },
  {
    name: "Kids_blouse_hanging_white",
    label: "Kids Blouse Hanging-White",
    field: "Kids_blouse_hanging_white",
  },
  {
    name: "quantity_jalamia_colored",
    label: "Quantity Jalamia Colored",
    field: "quantity_jalamia_colored",
  },
  {
    name: "jalamia_colored",
    label: "Jalamia Colored",
    field: "jalamia_colored",
  },
  {
    name: "quantity_jalamia_white",
    label: "Quantity Jalamia White",
    field: "quantity_jalamia_white",
  },
  {
    name: "jalamia_white",
    label: "Jalamia White",
    field: "jalamia_white",
  },
  {
    name: "quantity_camisole_colored",
    label: "Quantity Camisole Colored",
    field: "quantity_camisole_colored",
  },
  {
    name: "camisole_colored",
    label: "Camisole Colored",
    field: "camisole_colored",
  },
  {
    name: "quantity_camisole_white",
    label: "Quantity Camisole White",
    field: "quantity_camisole_white",
  },
  {
    name: "camisole_white",
    label: "Camisole White",
    field: "camisole_white",
  },
  {
    name: "quantity_wrapper_buba_scarf_colored",
    label: "Quantity Wrapper, Buba And Scarf Colored",
    field: "quantity_wrapper_buba_scarf_colored",
  },
  {
    name: "wrapper_buba_scarf_colored",
    label: "Wrapper, Buba And Scarf Colored",
    field: "wrapper_buba_scarf_colored",
  },
  {
    name: "quantity_wrapper_buba_scarf_white",
    label: "Quantity Wrapper, Buba And Scarf White",
    field: "quantity_wrapper_buba_scarf_white",
  },
  {
    name: "wrapper_buba_scarf_white",
    label: "Wrapper, Buba And Scarf White",
    field: "wrapper_buba_scarf_white",
  },
  {
    name: "quantity_wrapper_buba_no_scarf_colored",
    label: "Quantity Wrapper, Buba And No-Scarf Colored",
    field: "quantity_wrapper_buba_no_scarf_colored",
  },
  {
    name: "wrapper_buba_no_scarf_colored",
    label: "Wrapper, Buba And No-Scarf Colored",
    field: "wrapper_buba_no_scarf_colored",
  },
  {
    name: "quantity_wrapper_buba_no_scarf_white",
    label: "Quantity Wrapper, Buba And No-Scarf White",
    field: "quantity_wrapper_buba_no_scarf_white",
  },
  {
    name: "wrapper_buba_no_scarf_white",
    label: "Wrapper, Buba And No-Scarf White",
    field: "wrapper_buba_no_scarf_white",
  },
  {
    name: "quantity_wrapper_only_colored",
    label: "Quantity Wrapper Only Colored",
    field: "quantity_wrapper_only_colored",
  },
  {
    name: "wrapper_only_colored",
    label: "Wrapper Only Colored",
    field: "wrapper_only_colored",
  },
  {
    name: "quantity_wrapper_only_white",
    label: "Quantity Wrapper Only White",
    field: "quantity_wrapper_only_white",
  },
  {
    name: "wrapper_only_white",
    label: "Wrapper Only White",
    field: "wrapper_only_white",
  },
  {
    name: "quantity_two_wrapper_scarf_or_no_scarf_colored",
    label: "Quantity Two Wrapper Scarf/No-Scarf Only Colored",
    field: "quantity_two_wrapper_scarf_or_no_scarf_colored",
  },
  {
    name: "two_wrapper_scarf_or_no_scarf_colored",
    label: "Two Wrapper Scarf/No-Scarf Only Colored",
    field: "two_wrapper_scarf_or_no_scarf_colored",
  },
  {
    name: "quantity_two_wrapper_scarf_or_no_scarf_white",
    label: "Quantity Two Wrapper Scarf/No-Scarf Only White",
    field: "quantity_two_wrapper_scarf_or_no_scarf_white",
  },
  {
    name: "two_wrapper_scarf_or_no_scarf_white",
    label: "Two Wrapper Scarf/No-Scarf Only White",
    field: "two_wrapper_scarf_or_no_scarf_white",
  },
  {
    name: "quantity_aso_oke_agbada_and_cap_colored",
    label: "Quantity Aso-Oke Agbada and Cap 2pcs Colored",
    field: "quantity_aso_oke_agbada_and_cap_colored",
  },
  {
    name: "aso_oke_agbada_and_cap_colored",
    label: "Aso-Oke Agbada and Cap 2pcs Colored",
    field: "aso_oke_agbada_and_cap_colored",
  },
  {
    name: "quantity_male_aso_oke_and_cap_3pcs_colored",
    label: "Quantity Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored",
    field: "quantity_male_aso_oke_and_cap_3pcs_colored",
  },
  {
    name: "male_aso_oke_and_cap_3pcs_colored",
    label: "Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored",
    field: "male_aso_oke_and_cap_3pcs_colored",
  },
  {
    name: "quantity_aso_oke_wrapper_buba_gele_colored",
    label: "Quantity Aso-Oke Wrapper, Buba and Gele 3pcs Colored",
    field: "quantity_aso_oke_wrapper_buba_gele_colored",
  },
  {
    name: "aso_oke_wrapper_buba_gele_colored",
    label: "Aso-Oke Wrapper, Buba and Gele 3pcs Colored",
    field: "aso_oke_wrapper_buba_gele_colored",
  },
  {
    name: "quantity_aso_oke_wrapper_gele_colored",
    label: "Quantity Aso-Oke Wrapper and Gele 2pcs Colored",
    field: "quantity_aso_oke_wrapper_gele_colored",
  },
  {
    name: "aso_oke_wrapper_gele_colored",
    label: "Aso-Oke Wrapper and Gele 2pcs Colored",
    field: "aso_oke_wrapper_gele_colored",
  },
  {
    name: "quantity_aso_oke_wrapper_gele_ipele_colored",
    label: "Quantity Aso-Oke Wrapper, Gele and Ipele 3pcs Colored",
    field: "quantity_aso_oke_wrapper_gele_ipele_colored",
  },
  {
    name: "aso_oke_wrapper_gele_ipele_colored",
    label: "Aso-Oke Wrapper, Gele and Ipele 3pcs Colored",
    field: "aso_oke_wrapper_gele_ipele_colored",
  },
  {
    name: "quantity_aso_oke_wrapper_gele_ipele_white",
    label: "Quantity Aso-Oke Wrapper, Gele and Ipele 3pcs White",
    field: "quantity_aso_oke_wrapper_gele_ipele_white",
  },
  {
    name: "aso_oke_wrapper_gele_ipele_white",
    label: "Aso-Oke Wrapper, Gele and Ipele 3pcs White",
    field: "aso_oke_wrapper_gele_ipele_white",
  },
  {
    name: "quantity_aso_oke_headtie_ipele_colored",
    label: "Quantity Aso-Oke Head-Tie Ipele 2pcs White",
    field: "quantity_aso_oke_headtie_ipele_colored",
  },
  {
    name: "aso_oke_headtie_ipele_colored",
    label: "Aso-Oke Head-Tie Ipele 2pcs White",
    field: "aso_oke_headtie_ipele_colored",
  },
  {
    name: "quantity_male_complete_aso_oke_white",
    label: "Quantity Complete Male Aso-Oke 3pcs White",
    field: "quantity_male_complete_aso_oke_white",
  },
  {
    name: "male_complete_aso_oke_white",
    label: "Complete Male Aso-Oke 3pcs White",
    field: "male_complete_aso_oke_white",
  },
  {
    name: "quantity_female_complete_aso_oke_white",
    label: "Quantity Complete Female Aso-Oke 3pcs White",
    field: "quantity_female_complete_aso_oke_white",
  },
  {
    name: "female_complete_aso_oke_white",
    label: "Complete Female Aso-Oke 3pcs White",
    field: "female_complete_aso_oke_white",
  },
  {
    name: "quantity_female_inner_wear_colored",
    label: "Quantity Female Inner-Wear Colored",
    field: "quantity_female_inner_wear_colored",
  },
  {
    name: "female_inner_wear_colored",
    label: "Female Inner-Wear Colored",
    field: "female_inner_wear_colored",
  },
  {
    name: "quantity_female_inner_wear_white",
    label: "Quantity Female Inner-Wear White",
    field: "quantity_female_inner_wear_white",
  },
  {
    name: "female_inner_wear_white",
    label: "Female Inner-Wear White",
    field: "female_inner_wear_white",
  },
  {
    name: "quantity_head_tie_gele_colored",
    label: "Quantity Head-Tie/Gele Colored",
    field: "quantity_head_tie_gele_colored",
  },
  {
    name: "head_tie_gele_colored",
    label: "Head-Tie/Gele Colored",
    field: "head_tie_gele_colored",
  },
  {
    name: "quantity_head_tie_gele_white",
    label: "Quantity Head-Tie/Gele White",
    field: "quantity_head_tie_gele_white",
  },
  {
    name: "head_tie_gele_white",
    label: "Head-Tie/Gele White",
    field: "head_tie_gele_white",
  },
  {
    name: "quantity_gown_children_colored",
    label: "Quantity Gown Children Colored",
    field: "quantity_gown_children_colored",
  },
  {
    name: "gown_children_colored",
    label: "Gown Children Colored",
    field: "gown_children_colored",
  },
  {
    name: "quantity_gown_children_white",
    label: "Quantity Gown Children White",
    field: "quantity_gown_children_white",
  },
  {
    name: "gown_children_white",
    label: "Gown Children White",
    field: "gown_children_white",
  },
  {
    name: "quantity_gown_english_adult_folding_colored",
    label: "Quantity Gown English Adult Folding Colored",
    field: "quantity_gown_english_adult_folding_colored",
  },
  {
    name: "gown_english_adult_folding_colored",
    label: "Gown English Adult Folding Colored",
    field: "gown_english_adult_folding_colored",
  },
  {
    name: "quantity_gown_english_adult_folding_white",
    label: "Quantity Gown English Adult Folding White",
    field: "quantity_gown_english_adult_folding_white",
  },
  {
    name: "gown_english_adult_folding_white",
    label: "Gown English Adult Folding White",
    field: "gown_english_adult_folding_white",
  },
  {
    name: "quantity_gown_english_adult_hanging_colored",
    label: "Quantity Gown English Adult Hanging Colored",
    field: "quantity_gown_english_adult_hanging_colored",
  },
  {
    name: "gown_english_adult_hanging_colored",
    label: "Gown English Adult Hanging Colored",
    field: "gown_english_adult_hanging_colored",
  },
  {
    name: "quantity_gown_english_adult_hanging_white",
    label: "Quantity Gown English Adult Hanging White",
    field: "quantity_gown_english_adult_hanging_white",
  },
  {
    name: "gown_english_adult_hanging_white",
    label: "Gown English Adult Hanging White",
    field: "gown_english_adult_hanging_white",
  },
  {
    name: "quantity_gown_native_folding_colored",
    label: "Quantity Gown Native Folding Colored",
    field: "quantity_gown_native_folding_colored",
  },
  {
    name: "gown_native_folding_colored",
    label: "Gown Native Folding Colored",
    field: "gown_native_folding_colored",
  },
  {
    name: "quantity_gown_native_folding_white",
    label: "Quantity Gown Native Folding White",
    field: "quantity_gown_native_folding_white",
  },
  {
    name: "gown_native_folding_white",
    label: "Gown Native Folding White",
    field: "gown_native_folding_white",
  },
  {
    name: "quantity_skirt_and_blouse_english_hanging_colored",
    label: "Quantity Skirt and Blouse English 2pcs Hanging Colored",
    field: "quantity_skirt_and_blouse_english_hanging_colored",
  },
  {
    name: "skirt_and_blouse_english_hanging_colored",
    label: "Skirt and Blouse English 2pcs Hanging Colored",
    field: "skirt_and_blouse_english_hanging_colored",
  },
  {
    name: "quantity_skirt_and_blouse_english_hanging_white",
    label: "Quantity Skirt and Blouse English 2pcs Hanging White",
    field: "quantity_skirt_and_blouse_english_hanging_white",
  },
  {
    name: "skirt_and_blouse_english_hanging_white",
    label: "Skirt and Blouse English 2pcs Hanging White",
    field: "skirt_and_blouse_english_hanging_white",
  },
  {
    name: "quantity_skirt_and_blouse_native_folding_colored",
    label: "Quantity Skirt and Blouse Native 2pcs Folding Colored",
    field: "quantity_skirt_and_blouse_native_folding_colored",
  },
  {
    name: "skirt_and_blouse_native_folding_colored",
    label: "Skirt and Blouse Native 2pcs Folding Colored",
    field: "skirt_and_blouse_native_folding_colored",
  },
  {
    name: "quantity_skirt_and_blouse_native_folding_white",
    label: "Quantity Skirt and Blouse Native 2pcs Folding White",
    field: "quantity_skirt_and_blouse_native_folding_white",
  },
  {
    name: "skirt_and_blouse_native_folding_white",
    label: "Skirt and Blouse Native 2pcs Folding White",
    field: "skirt_and_blouse_native_folding_white",
  },
  {
    name: "quantity_female_native_buba_and_trouser_colored",
    label: "Quantity Female Native Buba and Trouser 2pcs Colored",
    field: "quantity_female_native_buba_and_trouser_colored",
  },
  {
    name: "female_native_buba_and_trouser_colored",
    label: "Female Native Buba and Trouser 2pcs Colored",
    field: "female_native_buba_and_trouser_colored",
  },
  {
    name: "quantity_female_native_buba_and_trouser_white",
    label: "Quantity Female Native Buba and Trouser 2pcs White",
    field: "quantity_female_native_buba_and_trouser_white",
  },
  {
    name: "female_native_buba_and_trouser_white",
    label: "Female Native Buba and Trouser 2pcs White",
    field: "female_native_buba_and_trouser_white",
  },
  {
    name: "quantity_male_cap_colored",
    label: "Quantity Male Cap Colored",
    field: "quantity_male_cap_colored",
  },
  {
    name: "male_cap_colored",
    label: "Male Cap Colored",
    field: "male_cap_colored",
  },
  {
    name: "quantity_male_cap_white",
    label: "Quantity Male Cap White",
    field: "quantity_male_cap_white",
  },
  {
    name: "male_cap_white",
    label: "Male Cap White",
    field: "male_cap_white",
  },
  {
    name: "quantity_female_cap_colored",
    label: "Quantity Female Cap Colored",
    field: "quantity_female_cap_colored",
  },
  {
    name: "female_cap_colored",
    label: "Female Cap Colored",
    field: "female_cap_colored",
  },
  {
    name: "quantity_female_cap_white",
    label: "Quantity Female Cap White",
    field: "quantity_female_cap_white",
  },
  {
    name: "female_cap_white",
    label: "Female Cap White",
    field: "female_cap_white",
  },
  {
    name: "quantity_turban_colored",
    label: "Quantity Turban Colored",
    field: "quantity_turban_colored",
  },
  {
    name: "turban_colored",
    label: "Turban Colored",
    field: "turban_colored",
  },
  {
    name: "quantity_turban_white",
    label: "Quantity Turban White",
    field: "quantity_turban_white",
  },
  {
    name: "turban_white",
    label: "Turban White",
    field: "turban_white",
  },
  {
    name: "quantity_sweater_small_colored",
    label: "Quantity Sweater Small Colored",
    field: "quantity_sweater_small_colored",
  },
  {
    name: "sweater_small_colored",
    label: "Sweater Small Colored",
    field: "sweater_small_colored",
  },
  {
    name: "quantity_sweater_small_white",
    label: "Quantity Sweater Small White",
    field: "quantity_sweater_small_white",
  },
  {
    name: "sweater_small_white",
    label: "Sweater Small White",
    field: "sweater_small_white",
  },
  {
    name: "quantity_sweater_normal_colored",
    label: "Quantity Sweater Normal Colored",
    field: "quantity_sweater_normal_colored",
  },
  {
    name: "sweater_normal_colored",
    label: "Sweater Normal Colored",
    field: "sweater_normal_colored",
  },
  {
    name: "quantity_sweater_normal_white",
    label: "Quantity Sweater Normal White",
    field: "quantity_sweater_normal_white",
  },
  {
    name: "sweater_normal_white",
    label: "Sweater Normal White",
    field: "sweater_normal_white",
  },
  {
    name: "quantity_sweater_big_colored",
    label: "Quantity Sweater Big Colored",
    field: "quantity_sweater_big_colored",
  },
  {
    name: "sweater_big_colored",
    label: "Sweater Big Colored",
    field: "sweater_big_colored",
  },
  {
    name: "quantity_sweater_big_white",
    label: "Quantity Sweater Big White",
    field: "quantity_sweater_big_white",
  },
  {
    name: "sweater_big_white",
    label: "Sweater Big White",
    field: "sweater_big_white",
  },
  {
    name: "quantity_towel_small_colored",
    label: "Quantity Towel Small Colored",
    field: "quantity_towel_small_colored",
  },
  {
    name: "towel_small_colored",
    label: "Towel Small Colored",
    field: "towel_small_colored",
  },
  {
    name: "quantity_towel_small_white",
    label: "Quantity Towel Small White",
    field: "quantity_towel_small_white",
  },
  {
    name: "towel_small_white",
    label: "Towel Small White",
    field: "towel_small_white",
  },
  {
    name: "quantity_towel_normal_colored",
    label: "Quantity Towel Normal Colored",
    field: "quantity_towel_normal_colored",
  },
  {
    name: "towel_normal_colored",
    label: "Towel Normal Colored",
    field: "towel_normal_colored",
  },
  {
    name: "quantity_towel_normal_white",
    label: "Quantity Towel Normal White",
    field: "quantity_towel_normal_white",
  },
  {
    name: "towel_normal_white",
    label: "Towel Normal White",
    field: "towel_normal_white",
  },
  {
    name: "quantity_towel_big_colored",
    label: "Quantity Towel Big Colored",
    field: "quantity_towel_big_colored",
  },
  {
    name: "towel_big_colored",
    label: "Towel Big Colored",
    field: "towel_big_colored",
  },
  {
    name: "quantity_towel_big_white",
    label: "Quantity Towel Big White",
    field: "quantity_towel_big_white",
  },
  {
    name: "towel_big_white",
    label: "Towel Big White",
    field: "towel_big_white",
  },
  {
    name: "quantity_bed_spread_normal_colored",
    label: "Quantity Bed-Spread Normal Colored",
    field: "quantity_bed_spread_normal_colored",
  },
  {
    name: "bed_spread_normal_colored",
    label: "Bed-Spread Normal Colored",
    field: "bed_spread_normal_colored",
  },
  {
    name: "quantity_bed_spread_normal_white",
    label: "Quantity Bed-Spread Normal White",
    field: "quantity_bed_spread_normal_white",
  },
  {
    name: "bed_spread_normal_white",
    label: "Bed-Spread Normal White",
    field: "bed_spread_normal_white",
  },
  {
    name: "quantity_bed_spread_big_colored",
    label: "Quantity Bed-Spread Big Colored",
    field: "quantity_bed_spread_big_colored",
  },
  {
    name: "bed_spread_big_colored",
    label: "Bed-Spread Big Colored",
    field: "bed_spread_big_colored",
  },
  {
    name: "quantity_bed_spread_big_white",
    label: "Quantity Bed-Spread Big White",
    field: "quantity_bed_spread_big_white",
  },
  {
    name: "bed_spread_big_white",
    label: "Bed-Spread Big White",
    field: "bed_spread_big_white",
  },
  {
    name: "quantity_bed_spread_double_colored",
    label: "Quantity Bed-Spread Double Colored",
    field: "quantity_bed_spread_double_colored",
  },
  {
    name: "bed_spread_double_colored",
    label: "Bed-Spread Double Colored",
    field: "bed_spread_double_colored",
  },
  {
    name: "quantity_bed_spread_double_white",
    label: "Quantity Bed-Spread Double White",
    field: "quantity_bed_spread_double_white",
  },
  {
    name: "bed_spread_double_white",
    label: "Bed-Spread Double White",
    field: "bed_spread_double_white",
  },
  {
    name: "quantity_duvet_normal_colored",
    label: "Quantity Duvet Normal Colored",
    field: "quantity_duvet_normal_colored",
  },
  {
    name: "duvet_normal_colored",
    label: "Duvet Normal Colored",
    field: "duvet_normal_colored",
  },
  {
    name: "quantity_duvet_normal_white",
    label: "Quantity Duvet Normal White",
    field: "quantity_duvet_normal_white",
  },
  {
    name: "duvet_normal_white",
    label: "Duvet Normal White",
    field: "duvet_normal_white",
  },
  {
    name: "quantity_duvet_big_colored",
    label: "Quantity Duvet Big Colored",
    field: "quantity_duvet_big_colored",
  },
  {
    name: "duvet_big_colored",
    label: "Duvet Big Colored",
    field: "duvet_big_colored",
  },
  {
    name: "quantity_duvet_big_white",
    label: "Quantity Duvet Big White",
    field: "quantity_duvet_big_white",
  },
  {
    name: "duvet_big_white",
    label: "Duvet Big White",
    field: "duvet_big_white",
  },
  {
    name: "quantity_curtain_normal_colored",
    label: "Quantity Curtain Normal Colored",
    field: "quantity_curtain_normal_colored",
  },
  {
    name: "curtain_normal_colored",
    label: "Curtain Normal Colored",
    field: "curtain_normal_colored",
  },
  {
    name: "quantity_curtain_big_colored",
    label: "Quantity Curtain Big Colored",
    field: "quantity_curtain_big_colored",
  },
  {
    name: "curtain_big_colored",
    label: "Curtain Big Colored",
    field: "curtain_big_colored",
  },
  {
    name: "quantity_curtain_very_big_colored",
    label: "Quantity Curtain Very Big Colored",
    field: "quantity_curtain_very_big_colored",
  },
  {
    name: "curtain_very_big_colored",
    label: "Curtain Very Big Colored",
    field: "curtain_very_big_colored",
  },
  {
    name: "quantity_blanket_colored",
    label: "Quantity Blanket Colored",
    field: "quantity_blanket_colored",
  },
  {
    name: "blanket_colored",
    label: "Blanket Colored",
    field: "blanket_colored",
  },
  {
    name: "quantity_pyjamas_small_colored",
    label: "Quantity Pyjamas Small Colored",
    field: "quantity_pyjamas_small_colored",
  },
  {
    name: "pyjamas_small_colored",
    label: "Pyjamas Small Colored",
    field: "pyjamas_small_colored",
  },
  {
    name: "quantity_pyjamas_small_white",
    label: "Quantity Pyjamas Small White",
    field: "quantity_pyjamas_small_white",
  },
  {
    name: "pyjamas_small_white",
    label: "Pyjamas Small White",
    field: "pyjamas_small_white",
  },
  {
    name: "quantity_pyjamas_big_colored",
    label: "Quantity Pyjamas Big Colored",
    field: "quantity_pyjamas_big_colored",
  },
  {
    name: "pyjamas_big_colored",
    label: "Pyjamas Big Colored",
    field: "pyjamas_big_colored",
  },
  {
    name: "quantity_pyjamas_big_white",
    label: "Quantity Pyjamas Big White",
    field: "quantity_pyjamas_big_white",
  },
  {
    name: "pyjamas_big_white",
    label: "Pyjamas Big White",
    field: "pyjamas_big_white",
  },
  {
    name: "quantity_pillow_cases_colored",
    label: "Quantity Pillow Cases Colored",
    field: "quantity_pillow_cases_colored",
  },
  {
    name: "pillow_cases_colored",
    label: "Pillow Cases Colored",
    field: "pillow_cases_colored",
  },
  {
    name: "quantity_pillow_cases_white",
    label: "Quantity Pillow Cases White",
    field: "quantity_pillow_cases_white",
  },
  {
    name: "pillow_cases_white",
    label: "Pillow Cases White",
    field: "pillow_cases_white",
  },
  { name: "ready", label: "Ready", field: "ready" },
  { name: "quantity", label: "Quantity", field: "quantity" },
  { name: "addon", label: "Addon", field: "addon" },
  { name: "addon_amount", label: "Addon Amount", field: "addon_amount" },
  {
    name: "customer_collected",
    label: "Customer Collected",
    field: "customer_collected",
  },
  { name: "comment_section", label: "Comment", field: "comment_section" },
  { name: "discount", label: "Discount", field: "discount" },
  { name: "deposit", label: "Deposit", field: "deposit" },
  { name: "deposit_type", label: "Deposit Type", field: "deposit_type" },
  { name: "balance", label: "Balance", field: "balance" },
  { name: "final_amount", label: "Final Amount", field: "final_amount" },
];

const $router = useRouter();
const $route = useRoute();

const onView = (da) => {
  // let da = popupData.value;
  // console.log(popupData.value, "popupData.value");
  // console.log(da, "da");

  for (let key in da) {
    // 1. Check for removal first:
    if (
      key === "ID" ||
      key === "CreatedAt" ||
      key === "UpdatedAt" ||
      key === "stored_at" ||
      key === "collected_on" ||
      key === "Collected On" ||
      key === "ironing_stage" ||
      key === "ironing_stage_status" ||
      key === "washing_stage" ||
      key === "washing_stage_status" ||
      key === "packing_stage" ||
      key === "packing_stage_status" ||
      // key === "ready" ||
      key === "ready_status"
    ) {
      delete da[key];
      continue; // Move to the next iteration to avoid unnecessary checks
    }

    // 2. Handle null or 0 values:
    if (da[key] === 0 || da[key] === null) {
      delete da[key];
      continue; // Move to the next iteration
    }

    // 3. Replace key with label if found in columns:
    const matchingColumn = columns.find((column) => column.field === key);
    if (matchingColumn) {
      da[matchingColumn.label] = da[key];
      delete da[key];
    }
  }

  // Specify which keys should be at the top and bottom
  const topKeys = [
    "Intake ID",
    "Customer",
    "Customer Phone",
    "Collection Date",
    "Current Status",
    "Quantity",
  ];
  const bottomKeys = [
    "Comment",
    "Staff",
    "Addon",
    "Addon Amount",
    "Discount",
    "Deposit",
    "Deposit Type",
    "Final Amount",
    "Balance",
    "Ready",
    "Customer Collected",
  ];

  // Reorder the object
  const orderedObject = reorderObject(da, topKeys, bottomKeys);
  data_.value = orderedObject;
  // console.log(data_.value, "ghyfutdbr");
  // customer_name.value = data_.value.customer;
  viewIntake.value = true;
};

const onSubmit = () => {
  $q.loading.show({
    message: "Some important process  is in progress. Hang on...",
  });

  axios
    // .get(`${base}/users/account/${phone_number.value}`)
    .get(`http://127.0.0.1:3000/api/v1/users/account/${phone_number.value}`)
    .then((response) => {
      _data.value = response.data.data.reverse();
      // console.log(_data.value, "ytui");
      for (let key in _data.value) {
        // 1. Check for removal first:
        if (
          key === "ID" ||
          key === "CreatedAt" ||
          key === "UpdatedAt"
          // ||
          // key === "stored_at" ||
          // key === "ironing_stage" ||
          // key === "ironing_stage_status" ||
          // key === "washing_stage" ||
          // key === "washing_stage_status" ||
          // key === "packing_stage" ||
          // key === "packing_stage_status" ||
          // key === "ready" ||
          // key === "ready_status"
        ) {
          delete _data.value[key];
          continue; // Move to the next iteration to avoid unnecessary checks
        }

        // 2. Handle null or 0 values:
        if (_data.value[key] === 0 || _data.value[key] === null) {
          delete _data.value[key];
          continue; // Move to the next iteration
        }

        // 3. Replace key with label if found in columns:
        const matchingColumn = columns.find((column) => column.field === key);
        if (matchingColumn) {
          _data.value[matchingColumn.label] = _data.value[key];
          delete _data.value[key];
        }
      }
      // console.log(_data.value, "qaz xsw edc vfr tgb ngt");
      customer_name.value = _data.value[0].customer;
      $q.loading.hide();
      onReset();
    })
    .catch((e) => {
      console.log(e, "e");
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Process not found",
        icon: "report_problem",
      });
      $q.loading.hide();
    });
};

const onReset = () => {
  phone_number.value = null;
};

// Function to reorder the object
function reorderObject(obj, topKeys, bottomKeys) {
  // Create a new ordered object
  const result = {};

  // 1. Add top keys in the specified order
  topKeys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });

  // 2. Get remaining keys and sort them alphabetically
  const remainingKeys = Object.keys(obj)
    .filter((key) => !topKeys.includes(key) && !bottomKeys.includes(key))
    .sort();

  // 3. Add sorted middle keys
  remainingKeys.forEach((key) => {
    result[key] = obj[key];
  });

  // 4. Add bottom keys in the specified order
  bottomKeys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });

  return result;
}
</script>

<style lang="sass" scoped>
.login
  display: flex
  align-items: center
  justify-content: center

.my-card
  width: 100%
  max-width: 800px
</style>
