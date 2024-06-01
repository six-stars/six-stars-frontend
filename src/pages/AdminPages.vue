<template>
  <q-page class="q-pa-md">
    <div class="text-black text-h4">Admin</div>
    <div class="q-gutter-y-md" full-width>
      <!-- <q-card>
        <q-tabs v-model="tab" class="text-grey" active-color="primary" indicator-color="primary" align="left"
          narrow-indicator>
          <q-tab name="create_user" label="Create User" />
          <q-tab name="see_users" label="See all Users" />
          <q-tab name="search_user" label="Search for a User" />
          <q-tab name="create_price" label="Create Price" />
          <q-tab name="see_price" label="See All Price" />
          <q-tab name="search_price" label="Get One Price" />
          <q-tab name="delete_intake" label="Delete Intake" />
          <q-tab name="delete_customer" label="Delete Customer" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="create_user">
            <create-users-page></create-users-page>
          </q-tab-panel>
          <q-tab-panel name="see_users">
            <all-users-page></all-users-page>
          </q-tab-panel>
          <q-tab-panel name="search_user">
            <get-one-user></get-one-user>
          </q-tab-panel>

          <q-tab-panel name="create_price">
            <create-prices-page></create-prices-page>
          </q-tab-panel>
          <q-tab-panel name="see_price">
            <all-prices-page></all-prices-page>
          </q-tab-panel>
          <q-tab-panel name="search_price">
            <get-one-price-page></get-one-price-page>
          </q-tab-panel>

          <q-tab-panel name="delete_intake">
            <delete-one-intake></delete-one-intake>
          </q-tab-panel>

          <q-tab-panel name="delete_customer">
            <delete-one-customer-page></delete-one-customer-page>
          </q-tab-panel>
        </q-tab-panels>
      </q-card> -->

      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="users" label="Users" />
          <q-tab name="completed_work" label="Completed Work" />
          <q-tab name="price" label="Price" />
          <q-tab name="intake" label="Intake" />
          <q-tab name="customer" label="Customers" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="users" class="q-pa-none">
            <q-splitter v-model="splitterModel">
              <template v-slot:before>
                <q-tabs v-model="innerTab1" vertical class="text-primary">
                  <q-tab
                    name="innerCreateUsers"
                    icon="create"
                    label="Create a User"
                  />
                  <q-tab
                    name="innerAllUsers"
                    icon="visibility"
                    label="See All Users"
                  />
                  <q-tab
                    name="innerSearchUser"
                    icon="search"
                    label="Search for a User"
                  />
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels
                  v-model="innerTab1"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >
                  <q-tab-panel name="innerCreateUsers">
                    <create-users-page></create-users-page>
                  </q-tab-panel>

                  <q-tab-panel name="innerAllUsers">
                    <all-users-page></all-users-page>
                  </q-tab-panel>

                  <q-tab-panel name="innerSearchUser">
                    <get-one-user></get-one-user>
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>

          <q-tab-panel name="completed_work" class="q-pa-none">
            <q-splitter v-model="splitterModel">
              <template v-slot:before>
                <q-tabs v-model="innerTab2" vertical class="text-primary">
                  <q-tab
                    name="innerAllCompletedWork"
                    icon="visibility"
                    label="See All Completed Work"
                  />
                  <q-tab
                    name="innerGetOneIntakeCompleted"
                    icon="search"
                    label="Search for a Completed Work"
                  />
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels
                  v-model="innerTab2"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >

                  <q-tab-panel name="innerAllCompletedWork">
                    <AllCompletedWorkPage />
                  </q-tab-panel>

                  <q-tab-panel name="innerGetOneIntakeCompleted">
                    <GetOneIntakeCompletedPage />
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>

          <q-tab-panel name="price" class="q-pa-none">
            <q-splitter v-model="splitterModel">
              <template v-slot:before>
                <q-tabs v-model="innerTab3" vertical class="text-primary">
                  <q-tab
                    name="innerCreatePrice"
                    icon="create"
                    label="Create a Price"
                  />
                  <q-tab
                    name="innerAllPrices"
                    icon="visibility"
                    label="See All Prices"
                  />
                  <q-tab
                    name="innerSearchPrice"
                    icon="search"
                    label="Search for a Price"
                  />
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels
                  v-model="innerTab3"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >
                  <q-tab-panel name="innerCreatePrice">
                    <create-prices-page></create-prices-page>
                  </q-tab-panel>

                  <q-tab-panel name="innerAllPrices">
                    <all-prices-page></all-prices-page>
                  </q-tab-panel>

                  <q-tab-panel name="innerSearchPrice">
                    <get-one-price-page></get-one-price-page>
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>

          <q-tab-panel name="intake" class="q-pa-none">
            <q-splitter v-model="splitterModel">
              <template v-slot:before>
                <q-tabs v-model="innerTab4" vertical class="text-primary">
                  <q-tab
                    name="innerDeleteIntake"
                    icon="delete"
                    label="Delete an Intake"
                  />
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels
                  v-model="innerTab4"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >
                  <q-tab-panel name="innerDeleteIntake">
                    <delete-one-intake></delete-one-intake>
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>

          <q-tab-panel name="customer" class="q-pa-none">
            <q-splitter v-model="splitterModel">
              <template v-slot:before>
                <q-tabs v-model="innerTab5" vertical class="text-primary">
                  <q-tab
                    name="innerDeleteCustomer"
                    icon="delete"
                    label="Delete a Customer"
                  />
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels
                  v-model="innerTab5"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >
                  <q-tab-panel name="innerDeleteCustomer">
                    <delete-one-customer-page></delete-one-customer-page>
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, watch } from "vue";
import { QTabs, QTab, QTabPanels, QTabPanel } from "quasar";
import { useUserStore } from "../stores/user-store";
import { useRouter } from "vue-router";
import CreateUsersPage from "src/components/users/CreateUsersPage.vue";
import AllUsersPage from "src/components/users/AllUsersPage.vue";
import GetOneUser from "src/components/users/GetOneUser.vue";
// import DeleteOneUser from 'src/components/users/DeleteOneUser.vue'
import CreatePricesPage from "src/components/users/prices/CreatePricesPage.vue";
import AllPricesPage from "src/components/users/prices/AllPricesPage.vue";
import GetOnePricePage from "src/components/users/prices/GetOnePricePage.vue";
import AllCompletedWorkPage from "src/components/users/completed_work/AllCompletedWorkPage.vue";
import GetOneIntakeCompletedPage from "src/components/users/completed_work/GetOneIntakeCompletedPage.vue";
import DeleteOneIntake from "src/components/users/intakes/DeleteOneIntake.vue";
import DeleteOneCustomerPage from "src/components/users/customers/DeleteOneCustomerPage.vue";

const name = "AdminPages";

// const tab = ref("create_user");
const tab = ref("users");
const innerTab1 = ref("innerCreateUsers");
const innerTab2 = ref("innerAllCompletedWork");
const innerTab3 = ref("innerCreatePrice");
const innerTab4 = ref("innerDeleteIntake");
const innerTab5 = ref("innerDeleteCustomer");
const splitterModel = ref(20);

const useStore = useUserStore();

const $router = useRouter();

var token = useStore.getToken;

watch(() => {
  var decoded = useStore.checkToken(token);
  console.log(decoded);
  console.log("decoded");
  if (decoded == true) {
    useStore.clearUser();
    // useStore.logout();
    $router.replace("/");
  }
});
</script>
