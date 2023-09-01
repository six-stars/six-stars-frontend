<template>
  <q-page class="q-pa-md">
    <div class="text-black text-h4">Customers</div>
    <div class="q-gutter-y-md" full-width>
      <q-card>
        <q-tabs v-model="tab" class="text-grey" active-color="primary" indicator-color="primary" align="left"
          narrow-indicator>
          <q-tab name="create_customer" label="Create Customer" />
          <q-tab name="see_customers" label="See all Customers" />
          <q-tab name="search_customer" label="Search for a Customer" />
          <!-- <q-tab name="update_customer" label="Update a Customer" /> -->
          <!-- <q-tab name="delete_customer" label="Delete a Customer" /> -->
          <!-- <q-tab name="movies" label="Movies" /> -->
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="create_customer">
            <create-customers-page></create-customers-page>
          </q-tab-panel>
          <q-tab-panel name="see_customers">
            <all-customers-page></all-customers-page>
          </q-tab-panel>
          <q-tab-panel name="search_customer">
            <get-one-customer-page></get-one-customer-page>
          </q-tab-panel>
          <!-- <q-tab-panel name="delete_customer">
            <delete-one-customer-page></delete-one-customer-page>
          </q-tab-panel> -->

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
import { watch, ref } from 'vue'
import CreateCustomersPage from 'src/components/customers/CreateCustomersPage.vue'
import AllCustomersPage from 'src/components/customers/AllCustomersPage.vue'
import GetOneCustomerPage from 'src/components/customers/GetOneCustomerPage.vue'
// import DeleteOneCustomerPage from 'src/components/customers/DeleteOneCustomerPage.vue'
import { QTabs, QTab, QTabPanels, QTabPanel } from 'quasar'
import { useUserStore } from '../stores/user-store'
import { useRouter } from 'vue-router'

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

  const name = 'CustomerPages'
  const tab = ref('create_customer')
</script>

<style lang="sass" scoped>
</style>
