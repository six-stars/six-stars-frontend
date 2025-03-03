<template>
  <q-page class="q-pa-md">
    <div class="text-black text-h4">Process</div>
    <div class="q-gutter-y-md" full-width>
      <q-card>
        <q-tabs
          v-model="tab"
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="left"
          narrow-indicator
        >
          <q-tab name="see_process" label="See all Process" />
          <q-tab name="search_process" label="Search for a Process" />
          <q-tab
            name="search_one_customer_process"
            label="Search One Customer Process"
          />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="see_process">
            <all-process-page></all-process-page>
          </q-tab-panel>
          <q-tab-panel name="search_process">
            <get-one-process></get-one-process>
          </q-tab-panel>
          <q-tab-panel name="search_one_customer_process">
            <get-one-customer-all-process></get-one-customer-all-process>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { watch, ref } from "vue";
import AllProcessPage from "src/components/process/AllProcessPage.vue";
import GetOneProcess from "src/components/process/GetOneProcess.vue";
import GetOneCustomerAllProcess from "src/components/process/GetOneCustomerAllProcess.vue";
// import CreateIntakesPage from 'src/components/intakes/CreateIntakesPage.vue'
// import DeleteOneIntake from 'src/components/intakes/DeleteOneIntake.vue'
import { QTabs, QTab, QTabPanels, QTabPanel } from "quasar";
import { useUserStore } from "../stores/user-store";
import { useRouter } from "vue-router";

const useStore = useUserStore();

const $router = useRouter();

var token = useStore.getToken;

watch(() => {
  var decoded = useStore.checkToken(token);
  // console.log(decoded);
  // console.log("decoded");
  if (decoded == true) {
    useStore.clearUser();
    // useStore.logout();
    $router.replace("/");
  }
});

const name = "ProcessPage";
const tab = ref("see_process");
</script>

<style lang="sass" scoped></style>
