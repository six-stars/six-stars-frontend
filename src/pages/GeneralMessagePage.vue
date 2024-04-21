<template>
  <q-page class="q-pa-md">
    <div class="text-black text-h4">General Message Page</div>
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
          <q-tab name="send_general_message" label="Send a General Message" />
          <q-tab
            name="see_general_message"
            label="See all General Message Sent"
          />
          <q-tab
            name="search_general_message"
            label="Search for General Message"
          />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="send_general_message">
            <SendGeneralMessagePage />
          </q-tab-panel>
          <q-tab-panel name="see_general_message">
            <AllGeneralMessagePage />
          </q-tab-panel>
          <q-tab-panel name="search_general_message">
            <GetOneGeneralMessage />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { watch, ref } from "vue";
import SendGeneralMessagePage from "src/components/generalmessage/SendGeneralMessagePage.vue";
import AllGeneralMessagePage from "src/components/generalmessage/AllGeneralMessagePage.vue";
import GetOneGeneralMessage from "src/components/generalmessage/GetOneGeneralMessage.vue";
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
  console.log(decoded);
  console.log("decoded");
  if (decoded == true) {
    useStore.clearUser();
    // useStore.logout();
    $router.replace("/");
  }
});

const name = "GeneralMessagePage";
const tab = ref("send_general_message");
</script>

<style lang="sass" scoped></style>
