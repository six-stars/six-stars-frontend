<template>
  <q-page class="q-pa-md">
    <div class="text-black text-h4">Prices</div>
    <div class="q-gutter-y-md" full-width>
      <q-card>
        <q-tabs v-model="tab" class="text-grey" active-color="primary" indicator-color="primary" align="left"
          narrow-indicator>
          <q-tab name="create_price" label="Create Price" />
          <q-tab name="see_prices" label="See all Prices" />
          <q-tab name="search_price" label="Search for a Price" />
          <!-- <q-tab name="update_price" label="Update a Price" /> -->
          <q-tab name="delete_price" label="Delete a Price" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <!-- <q-tab-panel name="create_price">
            <create-prices-page></create-prices-page>
          </q-tab-panel>
          <q-tab-panel name="see_prices">
            <all-prices-page></all-prices-page>
          </q-tab-panel>
          <q-tab-panel name="search_price">
            <get-one-price-page></get-one-price-page>
          </q-tab-panel>
          <q-tab-panel name="delete_price">
            <delete-one-price-page></delete-one-price-page>
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
import { ref, watch } from 'vue'
// import CreatePricesPage from 'src/components/prices/CreatePricesPage.vue'
// import AllPricesPage from 'src/components/prices/AllPricesPage.vue'
// import GetOnePricePage from 'src/components/prices/GetOnePricePage.vue'
// import DeleteOnePricePage from 'src/components/prices/DeleteOnePricePage.vue'
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

  const  name = 'PricePages'
  const      tab = ref('create_price')
</script>

<style lang="sass" scoped>
</style>
