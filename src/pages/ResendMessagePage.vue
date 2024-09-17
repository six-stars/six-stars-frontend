<template>
  <q-page class="q-pa-md">
    <div class="text-black text-h4">Resend Message Page</div>
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
          <q-tab name="your_notify_report" label="YourNotify Report" />
          <q-tab name="see_resend_message" label="See all Message Sent" />
          <q-tab name="search_resend_message" label="Search for a Message" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="your_notify_report">
            <YourNotifyReportPage />
          </q-tab-panel>
          <q-tab-panel name="see_resend_message">
            <AllResendMessagePage />
          </q-tab-panel>
          <q-tab-panel name="search_resend_message">
            <!-- <get-one-payment></get-one-payment> -->
            <GetOneResendMessage />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { watch, ref } from "vue";
import YourNotifyReportPage from "src/components/resendmessage/YourNotifyReportPage.vue";
import AllResendMessagePage from "src/components/resendmessage/AllResendMessagePage.vue";
import GetOneResendMessage from "src/components/resendmessage/GetOneResendMessage.vue";
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

const name = "ResendMessagePage";
const tab = ref("your_notify_report");
</script>

<style lang="sass" scoped></style>
