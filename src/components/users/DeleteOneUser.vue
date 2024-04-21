<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <div class="row q-pt-sm">
        <q-form @submit="onSubmit" @reset="onReset" class="">
          <div class="col-12 col-md-12 q-pl-md">
            <q-input
              label="User Phone Number"
              class=""
              outlined
              v-model="phone_number"
              hint=""
            />
          </div>
          <div class="col-12 q-pl-md">
            <q-btn class="bg-primary text-white" type="submit">Delete</q-btn>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";
import { useRouter } from "vue-router";

const name = "DeleteOneUserPage";

const $q = useQuasar();
const data = ref(null);
const phone_number = ref("");
const useStore = useUserStore();

const onSubmit = () => {
  // const formData = {
  //   user_id: user_id.value,
  // }
  const token = useStore.getToken;
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  axios
    .delete(`${base}/user/${phone_number.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data;
      console.log(data.value);
      $q.loading.hide();
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "User Deleted",
      });
      // fixed0.value = true;
    })
    .catch(() => {
      $q.loading.hide();
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "User not found",
        icon: "report_problem",
      });
    });
};

const onReset = () => {
  user_id.value = null;
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
.siz
  width: 100%
  max-width: 250px
  height: 100%
.siz1
  width: 250px
  max-width: 250px
  height: 150px
  margin-top: -8px
.bgPropfunds
  background-color: $propfunds
select
  margin-top: 10px
  margin-right: 10px
  padding: 15px 10px
  background: rgba(196, 196, 196, 0.1)
  border: 2px solid grey
  border-radius: 4px
  outline: none
  width: 540px
.btn2
  border: none
  border-radius: 3px
  font-weight: 500
  font-size: 18px
  height: 40px
  margin-right: 10px
  background-color: #001951
  color: white
  cursor: pointer
.is-s
  background-color: #001951
  color: white
</style>
