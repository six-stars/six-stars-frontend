<template>
  <q-page class="q-pa-md">
    <div class="text-black text-h4">Intakes</div>
    <div class="q-gutter-y-md" full-width>
      <q-card>
        <q-tabs v-model="tab" class="text-grey" active-color="primary" indicator-color="primary" align="left"
          narrow-indicator>
          <!-- <q-tab name="create_intake" label="Create Intake" /> -->
          <q-tab name="see_intakes" label="See all Intakes" />
          <q-tab name="search_intake" label="Search for an Intake" />
          <!-- <q-tab name="update_intake" label="Update an Intake" /> -->
          <!-- <q-tab name="delete_intake" label="Delete an Intake" /> -->
          <!-- <q-tab name="movies" label="Movies" /> -->
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <!-- <q-tab-panel name="create_intake">
            <create-intakes-page></create-intakes-page>
          </q-tab-panel> -->
          <q-tab-panel name="see_intakes">
            <all-intakes-page></all-intakes-page>
          </q-tab-panel>
          <q-tab-panel name="search_intake">
            <get-one-intake></get-one-intake>
          </q-tab-panel>
          <!-- <q-tab-panel name="delete_intake">
            <delete-one-intake></delete-one-intake>
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
// import CreateIntakesPage from 'src/components/intakes/CreateIntakesPage.vue'
import AllIntakesPage from 'src/components/intakes/AllIntakesPage.vue'
import GetOneIntake from 'src/components/intakes/GetOneIntake.vue'
// import DeleteOneIntake from 'src/components/intakes/DeleteOneIntake.vue'
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

  const name = 'Intakes'
      const tab = ref('see_intakes')

</script>

<style lang="sass" scoped>
</style>
