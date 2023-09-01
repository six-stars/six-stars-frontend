<template>
  <q-page class="q-pa-md">
    <div class="text-black text-h4">Admin</div>
    <div class="q-gutter-y-md" full-width>
      <q-card>
        <q-tabs v-model="tab" class="text-grey" active-color="primary" indicator-color="primary" align="left"
          narrow-indicator>
          <q-tab name="create_user" label="Create User" />
          <q-tab name="see_users" label="See all Users" />
          <q-tab name="search_user" label="Search for a User" />
          <!-- <q-tab name="delete_user" label="Delete a User" /> -->
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
          <!-- <q-tab-panel name="delete_user">
            <delete-one-user></delete-one-user>
          </q-tab-panel> -->

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

          <!-- <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel> -->
        </q-tab-panels>
      </q-card>

    </div>
  </q-page>
</template>

<script setup>
import { ref, watch} from 'vue'
import {  QTabs, QTab, QTabPanels, QTabPanel } from 'quasar'
import { useUserStore } from '../stores/user-store'
import { useRouter } from 'vue-router'
import CreateUsersPage from 'src/components/users/CreateUsersPage.vue'
import AllUsersPage from 'src/components/users/AllUsersPage.vue'
import GetOneUser from 'src/components/users/GetOneUser.vue'
import DeleteOneUser from 'src/components/users/DeleteOneUser.vue'
import CreatePricesPage from 'src/components/users/prices/CreatePricesPage.vue'
import AllPricesPage from 'src/components/users/prices/AllPricesPage.vue'
import GetOnePricePage from 'src/components/users/prices/GetOnePricePage.vue'
import DeleteOneIntake from 'src/components/users/intakes/DeleteOneIntake.vue'
import DeleteOneCustomerPage from 'src/components/users/customers/DeleteOneCustomerPage.vue'

const name = 'AdminPages'

const tab = ref('create_user')

const useStore = useUserStore()

const $router = useRouter()

var token = useStore.getToken

watch(() => {
  var decoded = useStore.checkToken(token);
  console.log(decoded);
  console.log("decoded");
  if (decoded == true) {
    useStore.clearUser();
    // useStore.logout();
    $router.replace('/')
  }
})

</script>
