<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Create Users</div>
    <q-separator /> -->
    <div class="q-pt-lg">
      <q-form @submit="onSubmit" @reset="onReset">
        <!-- <div class="row q-pt-sm">
          <div class="col-12 q-pl-md">
            <q-input required class="" outlined v-model="name" hint="Name" />
          </div>
        </div> -->
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" outlined v-model="male_native_2_pcs" type="number" hint="Male Native 2 Pcs" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" outlined v-model="male_native_2_pcs_hanging" type="number" hint="Male Native 2 Pcs[Hanging] " />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" outlined v-model="male_native_3_pcs_notAgbada" type="number" hint="Male Native 3 Pcs(Not Agbada)" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" outlined v-model="male_native_3_pcs_notAgbada_hanging" type="number" hint="Male Native 3 Pcs(Not Agbada)[Hanging] " />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" outlined v-model="native_top_only" type="number" hint="Native Top Only" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" outlined v-model="native_trouser_only" type="number" hint="Native Trouser Only" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="complete_male_agbada" outlined type="number" hint="Complete Male Agbada" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="male_agbada_alone" outlined type="number" hint="Male Agbada Alone" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="blouse" outlined type="number" hint="Blouse" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="blouse_hanging" outlined type="number" hint="Blouse[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="female_shirt" outlined type="number" hint="Female Shirt" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="female_shirt_hanging" outlined type="number" hint="Female Shirt[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="female_trouser_jeans" outlined type="number" hint="Female Trouser/Jean" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="female_trouser_jeans_hanging" outlined type="number" hint="Female Trouser/Jean[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="skirt_and_blouse_english" outlined type="number" hint="Skirt & Blouse English" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="skirt_and_blouse_english_hanging" outlined type="number" hint="Skirt & Blouse English[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="wrapper_buba_gele" outlined type="number" hint="Wrapper, Buba & Gele or Without Gele" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="female_native_buba_trouser" outlined type="number" hint="Female Native Buba & Trouser" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="gown_english_hanging" outlined type="number" hint="Gown English[Hanging]" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="gown_native" outlined type="number" hint="Gown Native" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="skirt_and_blouse_native" outlined type="number" hint="Skirt & Blouse Native" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="aso_oke_wrapper_buba_gele" outlined type="number" hint="Aso-Oke Wrapper, Buba & Gele" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="male_complete_aso_oke" outlined type="number" hint="Male Complete Aso-Oke" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="male_medium_t_shirt_or_polo" outlined type="number" hint="T-Shirt/Polo(Medium)" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="male_big_t_shirt_or_polo" outlined type="number" hint="T-Shirt/Polo(Big)" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="male_t_shirt_or_polo_hanging" outlined type="number" hint="T-Shirt/Polo[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="shirt_normal" outlined type="number" hint="Shirt(Normal)" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="shirt_normal_hanging" outlined type="number" hint="Shirt(Normal)[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="shirt_big" outlined type="number" hint="Shirt(Big)" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="shirt_big_hanging" outlined type="number" hint="Shirt(Big)[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="plain_trouser" outlined type="number" hint="Plain Trouser" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="plain_trouser_hanging" outlined type="number" hint="Plain Trouser[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="jeans_chinos_trouser" outlined type="number" hint="Jeans/Chinos Trouser" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="jeans_chinos_trouser_hanging" outlined type="number" hint="Jeans/Chinos Trouser[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="waist_coat_hanging" outlined type="number" hint="Waist Coat[Hanging]" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="tie" outlined type="number" hint="Tie" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="shorts" outlined type="number" hint="Shorts" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="shorts_hanging" outlined type="number" hint="Shorts[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="boxer" outlined type="number" hint="Boxer" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="singlet" outlined type="number" hint="Singlet" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="male_two_pcs_suit_hanging" outlined type="number" hint="Male Two Pcs Suit[Hanging]" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="male_three_pcs_suit_hanging" outlined type="number" hint="Male Three Pcs Suit[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="female_two_pcs_suit_hanging" outlined type="number" hint="Female Two Pcs Suit[Hanging]" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="female_three_pcs_suit_hanging" outlined type="number" hint="Female Three Pcs Suit[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="male_jacket_hanging" outlined type="number" hint="Male Jacket[Hanging]" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="female_jacket_hanging" outlined type="number" hint="Female Jacket[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="jalamia" outlined type="number" hint="Jalamia" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="camisole" outlined type="number" hint="Camisole" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="wrapper_only" outlined type="number" hint="Wrapper Only" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="female_inner_wear" outlined type="number" hint="Female Inner Wear" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="head_tie_gele" outlined type="number" hint="Normal Head Tie/Gele" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="asooke_head_tie" outlined type="number" hint="Aso-Oke Head Tie/Gele" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="sweater_normal" outlined type="number" hint="Sweater (Normal)" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="sweater_big" outlined type="number" hint="Sweater (Big)" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="towel_normal" outlined type="number" hint="Towel(Normal)" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="towel_big" outlined type="number" hint="Towel(Big)" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="bed_spread_normal" outlined type="number" hint="Bed Spread(Normal)" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="bed_spread_big" outlined type="number" hint="Bed Spread(Big)" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="duvet" outlined type="number" hint="Duvet" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="curtain_normal" outlined type="number" hint="Curtain(Normal)" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="curtain_big" outlined type="number" hint="Curtain(Big)" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="curtain_very_big" outlined type="number" hint="Curtain(Very Big)" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="pyjamas_small" outlined type="number" hint="Pyjamas(Small)" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="pyjamas_big" outlined type="number" hint="Pyjamas(Big)" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="small_wedding_gown_hanging" outlined type="number" hint="Small Wedding Gown[Hanging]" />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input required class="" v-model="big_wedding_gown_hanging" outlined type="number" hint="Big Wedding Gown[Hanging]" />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 q-pl-md">
            <q-input required class="" v-model="comment" outlined type="text" hint="Comment" />
          </div>
        </div>

        <div class="row q-pt-lg">
          <div class="text-center full-width q-pl-md">
            <q-btn label="Submit" type="submit" color="primary" style="width: 260px" />
          </div>
          <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
        </div>

      </q-form>

    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { axios, api, base } from 'boot/axios'
import { useQuasar } from 'quasar'
import { useUserStore } from '../../../stores/user-store'

  name: 'CreatePricesPage'

const $q = useQuasar()
const data = ref([])
const formData = ref({})

  // const name = ref('')
	const male_native_2_pcs = ref('')
	const male_native_2_pcs_hanging = ref('')
	const male_native_3_pcs_notAgbada = ref('')
	const male_native_3_pcs_notAgbada_hanging = ref('')
	const native_top_only = ref('')
	const native_trouser_only = ref('')
	const complete_male_agbada = ref('')
	const male_agbada_alone = ref('')
	const blouse = ref('')
	const blouse_hanging = ref('')
	const female_shirt = ref('')
	const female_shirt_hanging = ref('')
	const female_trouser_jeans = ref('')
	const female_trouser_jeans_hanging = ref('')
	const skirt_and_blouse_english = ref('')
	const skirt_and_blouse_english_hanging = ref('')
	const wrapper_buba_gele = ref('')
	const female_native_buba_trouser = ref('')
	const gown_english_hanging = ref('')
	const gown_native = ref('')
	const skirt_and_blouse_native = ref('')
	const aso_oke_wrapper_buba_gele = ref('')
	const male_complete_aso_oke = ref('')
	const male_medium_t_shirt_or_polo = ref('')
	const male_big_t_shirt_or_polo = ref('')
	const male_t_shirt_or_polo_hanging = ref('')
	const shirt_normal = ref('')
	const shirt_normal_hanging = ref('')
	const shirt_big = ref('')
	const shirt_big_hanging = ref('')
	const plain_trouser = ref('')
	const plain_trouser_hanging = ref('')
	const jeans_chinos_trouser = ref('')
	const jeans_chinos_trouser_hanging = ref('')
	const waist_coat_hanging = ref('')
	const tie = ref('')
	const shorts = ref('')
	const shorts_hanging = ref('')
	const singlet = ref('')
	const boxer = ref('')
	const male_two_pcs_suit_hanging = ref('')
	const male_three_pcs_suit_hanging = ref('')
	const female_two_pcs_suit_hanging = ref('')
	const female_three_pcs_suit_hanging = ref('')
	const male_jacket_hanging = ref('')
	const female_jacket_hanging = ref('')
	const jalamia = ref('')
	const camisole = ref('')
	const wrapper_only = ref('')
	const female_inner_wear = ref('')
	const head_tie_gele = ref('')
	const small_wedding_gown_hanging = ref('')
	const big_wedding_gown_hanging = ref('')
	const asooke_head_tie = ref('')
	const sweater_normal = ref('')
	const sweater_big = ref('')
	const towel_normal = ref('')
	const towel_big = ref('')
	const bed_spread_normal = ref('')
	const bed_spread_big = ref('')
	const duvet = ref('')
	const curtain_normal = ref('')
	const curtain_big = ref('')
	const curtain_very_big = ref('')
	const pyjamas_small = ref('')
	const pyjamas_big = ref('')
	const comment = ref('')

const useStore = useUserStore()

const onSubmit = () => {
  
  const _first_name = useStore.getFirst_name
  const _last_name = useStore.getLast_name

  const formData = {
    staff : _first_name + " " + _last_name,
    male_native_2_pcs : Number(male_native_2_pcs.value),
    male_native_2_pcs_hanging : Number(male_native_2_pcs_hanging.value),
    male_native_3_pcs_notAgbada : Number(male_native_3_pcs_notAgbada.value),
    male_native_3_pcs_notAgbada_hanging : Number(male_native_3_pcs_notAgbada_hanging.value),
    native_top_only : Number(native_top_only.value),
    native_trouser_only : Number(native_trouser_only.value),
    complete_male_agbada : Number(complete_male_agbada.value),
    male_agbada_alone : Number(male_agbada_alone.value),
    blouse : Number(blouse.value),
    blouse_hanging : Number(blouse_hanging.value),
    female_shirt : Number(female_shirt.value),
    female_shirt_hanging : Number(female_shirt_hanging.value),
    female_trouser_jeans : Number(female_trouser_jeans.value),
    female_trouser_jeans_hanging : Number(female_trouser_jeans_hanging.value),
    skirt_and_blouse_english : Number(skirt_and_blouse_english.value),
    skirt_and_blouse_english_hanging : Number(skirt_and_blouse_english_hanging.value),
    wrapper_buba_gele : Number(wrapper_buba_gele.value),
    female_native_buba_trouser : Number(female_native_buba_trouser.value),
    gown_english_hanging : Number(gown_english_hanging.value),
    gown_native : Number(gown_native.value),
    skirt_and_blouse_native : Number(skirt_and_blouse_native.value),
    aso_oke_wrapper_buba_gele : Number(aso_oke_wrapper_buba_gele.value),
    male_complete_aso_oke : Number(male_complete_aso_oke.value),
    male_medium_t_shirt_or_polo : Number(male_medium_t_shirt_or_polo.value),
    male_big_t_shirt_or_polo : Number(male_big_t_shirt_or_polo.value),
    male_t_shirt_or_polo_hanging : Number(male_t_shirt_or_polo_hanging.value),
    shirt_normal : Number(shirt_normal.value),
    shirt_normal_hanging : Number(shirt_normal_hanging.value),
    shirt_big : Number(shirt_big.value),
    shirt_big_hanging : Number(shirt_big_hanging.value),
    plain_trouser : Number(plain_trouser.value),
    plain_trouser_hanging : Number(plain_trouser_hanging.value),
    jeans_chinos_trouser : Number(jeans_chinos_trouser.value),
    jeans_chinos_trouser_hanging : Number(jeans_chinos_trouser_hanging.value),
    waist_coat_hanging : Number(waist_coat_hanging.value),
    tie : Number(tie.value),
    shorts : Number(shorts.value),
    shorts_hanging : Number(shorts_hanging.value),
    singlet : Number(singlet.value),
    boxer : Number(boxer.value),
    male_two_pcs_suit_hanging : Number(male_two_pcs_suit_hanging.value),
    male_three_pcs_suit_hanging : Number(male_three_pcs_suit_hanging.value),
    female_two_pcs_suit_hanging : Number(female_two_pcs_suit_hanging.value),
    female_three_pcs_suit_hanging : Number(female_three_pcs_suit_hanging.value),
    male_jacket_hanging : Number(male_jacket_hanging.value),
    female_jacket_hanging : Number(female_jacket_hanging.value),
    jalamia : Number(jalamia.value),
    camisole : Number(camisole.value),
    wrapper_only : Number(wrapper_only.value),
    female_inner_wear : Number(female_inner_wear.value),
    head_tie_gele : Number(head_tie_gele.value),
    small_wedding_gown_hanging : Number(small_wedding_gown_hanging.value),
    big_wedding_gown_hanging : Number(big_wedding_gown_hanging.value),
    asooke_head_tie : Number(asooke_head_tie.value),
    sweater_normal : Number(sweater_normal.value),
    sweater_big : Number(sweater_big.value),
    towel_normal : Number(towel_normal.value),
    towel_big : Number(towel_big.value),
    bed_spread_normal : Number(bed_spread_normal.value),
    bed_spread_big : Number(bed_spread_big.value),
    duvet : Number(duvet.value),
    curtain_normal : Number(curtain_normal.value),
    curtain_big : Number(curtain_big.value),
    curtain_very_big : Number(curtain_very_big.value),
    pyjamas_small : Number(pyjamas_small.value),
    pyjamas_big : Number(pyjamas_big.value),
    comment : comment.value,
  }

  const token = useStore.getToken
  console.log(formData.value, 'formData')
  axios.post(`${base}/price/`, formData,
    { headers: { "Authorization": `Bearer ${token}` }, })
    .then((response) => {
      data.value = response.data
      console.log(data.value, "user")
      // onReset()
      $q.notify({
        color: 'green',
        position: 'bottom',
        message: data.value.message,
        icon: 'check'
      })
    })
    .catch(() => {
      $q.notify({
        color: 'negative',
        position: 'bottom',
        message: 'Loading failed',
        icon: 'report_problem'
      })
    })
}

const onReset = () => {
  formData.value = null
}

</script>

<style lang="sass" scoped>
.sizzz
  min-width: 300px
  max-width: 500px
.sizz1
  min-width: 275px
  max-width: 475px
</style>
