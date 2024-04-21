<template>
  <q-layout view="hHh LpR fFf">
    <!-- <q-layout view="lHh lpR lFf"> -->
    <q-header class="bg-transparent">
      <q-toolbar class="text-primary bg-white">
        <!-- <div class="bg-transparent"> -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="gt-sm"
        />

        <q-toolbar-title class="text-center">
          <img src="src/assets/logo/Six_Stars_2.jpeg" class="sizzz" />
        </q-toolbar-title>

        <q-btn-dropdown
          flat
          dense
          class="bgC"
          label=""
          dropdown-icon="change_history"
        >
          <q-list>
            <q-item clickable v-close-popup @click="logOut">
              <q-item-section avatar>
                <q-avatar icon="logout" class="bg-white text-red" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Log Out</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <!-- </div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="gt-sm"
      :width="200"
    >
      <q-list>
        <q-item header class="q-mb-xl" clickable v-ripple>
          <q-item-section>
            <q-img
              class="absolute-top"
              src="src/assets/s3-img.png"
              style="height: 150px"
            >
            </q-img>
          </q-item-section>
        </q-item>

        <!-- </q-item> -->
        <q-item class="q-pt-xl" v-show="show1">
          <q-item-section>
            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-item-section>
        </q-item>
        <q-item class="q-pt-xl q-ml-sm" to="/process" clickable v-show="show2">
          <q-item-section avatar>
            <q-avatar icon="fas fa-sync-alt" class="bg-white text-teal" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="bg-white text-teal">Process</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pt-xl q-ml-sm" to="/message" clickable v-show="show3">
          <q-item-section avatar>
            <q-avatar icon="inbox" class="bg-white text-teal" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="bg-white text-teal">Messages</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          class="q-pt-xl q-ml-sm"
          to="/general_message"
          clickable
          v-show="show"
        >
          <q-item-section avatar>
            <q-avatar icon="inbox" class="bg-white text-teal" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="bg-white text-teal"
              >General Messages</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item class="q-pt-xl q-ml-sm" to="/admin" clickable v-show="show">
          <q-item-section avatar>
            <q-avatar icon="man" class="bg-white text-teal" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="bg-white text-teal">Admin</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pt-xl q-ml-sm" @click="logOut" clickable>
          <q-item-section avatar>
            <q-avatar icon="logout" class="bg-white text-red" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Log Out</q-item-label>
            <!-- <q-item-label caption>February 22, 2016</q-item-label> -->
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />

      <q-page-sticky position="bottom-right" :offset="[18, 18]" class="lt-md">
        <q-fab icon="keyboard_arrow_up" direction="up" color="primary">
          <q-fab-action
            square
            external-label
            label-position="left"
            label="Logout"
            color="blue"
            icon="logout"
            to=""
            @click="logOut"
          />
          <q-fab-action
            square
            external-label
            label-position="left"
            label="Payment"
            color="primary"
            icon="fas fa-dollar"
            to="/payment"
          />
          <q-fab-action
            square
            external-label
            label-position="left"
            label="Process"
            color="primary"
            icon="fas fa-sync-alt"
            to="/process"
          />
          <!-- <q-fab-action square external-label label-position="left" label="Referral" color="primary"
            icon="fas fa-user-friends" to="/referral" /> -->
          <q-fab-action
            square
            external-label
            label-position="left"
            label="Messages"
            color="teal"
            icon="inbox"
            to="/message"
            clickable
            v-show="show3"
          />
          <q-fab-action
            square
            external-label
            label-position="left"
            label="General Messages"
            color="teal"
            icon="inbox"
            to="/general_message"
            clickable
            v-show="show3"
          />
          <q-fab-action
            square
            external-label
            label-position="left"
            label="Admin"
            color="teal"
            icon="man"
            to="/admin"
            clickable
            v-show="show"
          />
        </q-fab>
      </q-page-sticky>
    </q-page-container>

    <q-footer bordered class="bg-white text-black lt-md">
      <q-toolbar>
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" /> -->
        <q-toolbar-title>
          <div class="q-pa-md">
            <div class="q-gutter-y-md">
              <q-tabs v-model="tab" align="justify" class="text-primary">
                <q-route-tab
                  to="/main"
                  :ripple="{ color: 'orange' }"
                  name="profile"
                  icon="fa-solid fa-address-card"
                  label="Profile"
                />
                <q-route-tab
                  to="/customer"
                  :ripple="{ color: 'orange' }"
                  name="customer"
                  icon="groups"
                  label="Customer"
                />
                <q-route-tab
                  to="/intake"
                  :ripple="{ color: 'orange' }"
                  name="intake"
                  icon="local_laundry_service"
                  label="Intake"
                />
              </q-tabs>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeMount } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from "quasar";
import { useUserStore } from "../stores/user-store";
import { useRouter } from "vue-router";
import { axios, api, base } from "boot/axios";

const linksList = [
  {
    title: "Profile",
    // caption: 'quasar.dev',
    icon: "dashboard",
    link: "/main",
  },
  {
    title: "Customer",
    // caption: 'github.com/quasarframework',
    icon: "groups",
    link: "/customer",
  },
  {
    title: "Intakes",
    // caption: 'github.com/quasarframework',
    icon: "local_laundry_service",
    link: "/intake",
  },
  {
    title: "Process",
    // caption: 'github.com/quasarframework',
    icon: "badge",
    link: "/process",
  },
  {
    title: "Payment",
    // caption: 'github.com/quasarframework',
    icon: "payments",
    link: "/payment",
  },
  // {
  //   title: "Messages",
  //   // caption: 'github.com/quasarframework',
  //   icon: "inbox",
  //   link: "/message",
  // },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);

    const useStore = useUserStore();
    const $router = useRouter();
    const imageUpload = ref(false);

    const logOut = () => {
      // useStore.clearUser();
      $router.replace("/");
      useStore.logout();
      // $store.dispatch('auth/logOutUser')
      // $q.localStorage.remove('profile')
      // $q.localStorage.remove('wallet')
      // $q.localStorage.clear()
    };

    const data = ref([]);

    const loadData = () => {
      const id = useStore.getEmail || null;
      axios
        .get(`${base}/profile/${id}/`)
        .then((response) => {
          data.value = response.data;
          $q.localStorage.set("profile", JSON.stringify(data.value));
          // console.log(data.value, "MainLayout yello!")
          // $q.notify({
          //   color: 'green',
          //   position: 'bottom',
          //   message: 'Saved',
          //   icon: 'check'
          // })
        })
        .catch(() => {
          $q.notify({
            color: "negative",
            position: "bottom",
            message: "Please refresh",
            icon: "report_problem",
          });
        });
    };

    // onBeforeMount(() => {
    //   loadData()
    //   setTimeout(fName(), 5000)
    // })
    const show = ref(false);
    const show1 = ref(true);
    const show2 = ref(false);
    const show3 = ref(false);
    let userType = ref("");

    const check = () => {
      userType.value = useStore.getUser_type;
      if (userType.value == "Super_Admin") {
        show.value = true;
        show3.value = true;
      }
    };
    const check1 = () => {
      userType.value = useStore.getUser_type;
      if (userType.value == "Presser" || userType.value == "Washer") {
        show1.value = false;
        show2.value = true;
      }
    };
    const check3 = () => {
      userType.value = useStore.getUser_type;
      if (userType.value == "Manager" || userType.value == "Front_Desk") {
        show1.value = true;
        show2.value = false;
        show3.value = true;
      }
    };
    // const check2 = () => {
    //   userType.value = useStore.getUser_type
    //   if (userType.value == "Presser" || userType.value == "Washer") {
    //     show2.value = true;
    //   }
    // }

    onMounted(() => {
      // loadData()
      check(), check1(), check3();
      // check2()
    });

    return {
      show,
      show1,
      show2,
      show3,
      check,
      check1,
      check3,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tab: ref("dashboard"),
      fabLeft: ref(true),
      fabCenter: ref(true),
      fabRight: ref(true),
      onClick() {
        // console.log('Clicked on a fab action')
      },
      logOut,
      loadData,
      data,
    };
  },
});
</script>

<style lang="sass" scoped>
.sizzz
  width: 180px
.bgC
  color: #001951
</style>
