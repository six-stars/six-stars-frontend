<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="All Intakes"
      :columns="columns"
      :rows="data"
      row-key="name"
      flat
      bordered
      :loading="true"
      :filter="filter"
    >
      <!-- :visible-columns="[
        'collected_on',
        'collection_date',
        'customer',
        'customer_phone',
        'intake_id',
        'staff',
        'quantity_male_native_2_pcs',
        'male_native_2_pcs',
        'quantity_male_native_2_pcs_hanging',
        'male_native_2_pcs_hanging',
        'quantity_male_native_3_pcs_notAgbada',
        'male_native_3_pcs_notAgbada',
        'quantity_male_native_3_pcs_notAgbada_hanging',
        'male_native_3_pcs_notAgbada_hanging',
        'quantity_native_top_only',
        'native_top_only',
        'quantity_native_trouser_only',
        'native_trouser_only',
        'quantity_complete_male_agbada',
        'complete_male_agbada',
        'quantity_male_agbada_alone',
        'male_agbada_alone',
        'quantity_blouse',
        'blouse',
        'quantity_blouse_hanging',
        'blouse_hanging',
        'quantity_female_shirt',
        'female_shirt',
        'quantity_female_shirt_hanging',
        'female_shirt_hanging',
        'quantity_female_trouser_jeans',
        'female_trouser_jeans',
        'quantity_female_trouser_jeans_hanging',
        'female_trouser_jeans_hanging',
        'quantity_skirt_and_blouse_english',
        'skirt_and_blouse_english',
        'quantity_skirt_and_blouse_english_hanging',
        'skirt_and_blouse_english_hanging',
        'quantity_wrapper_buba_gele',
        'wrapper_buba_gele',
        'quantity_female_native_buba_trouser',
        'female_native_buba_trouser',
        'quantity_gown_english_hanging',
        'gown_english_hanging',
        'quantity_gown_native',
        'gown_native',
        'quantity_skirt_and_blouse_native',
        'skirt_and_blouse_native',
        'quantity_aso_oke_wrapper_buba_gele',
        'aso_oke_wrapper_buba_gele',
        'quantity_male_complete_aso_oke',
        'male_complete_aso_oke',
        'quantity_male_medium_t_shirt_or_polo',
        'male_medium_t_shirt_or_polo',
        'quantity_male_big_t_shirt_or_polo',
        'male_big_t_shirt_or_polo',
        'quantity_male_t_shirt_or_polo_hanging',
        'male_t_shirt_or_polo_hanging',
        'quantity_shirt_normal',
        'shirt_normal',
        'quantity_shirt_normal_hanging',
        'shirt_normal_hanging',
        'quantity_shirt_big',
        'shirt_big',
        'quantity_shirt_big_hanging',
        'shirt_big_hanging',
        'quantity_plain_trouser',
        'plain_trouser',
        'quantity_plain_trouser_hanging',
        'plain_trouser_hanging',
        'quantity_jeans_chinos_trouser',
        'jeans_chinos_trouser',
        'quantity_jeans_chinos_trouser_hanging',
        'jeans_chinos_trouser_hanging',
        'quantity_waist_coat_hanging',
        'waist_coat_hanging',
        'quantity_tie',
        'tie',
        'quantity_shorts',
        'shorts',
        'quantity_shorts_hanging',
        'shorts_hanging',
        'quantity_singlet',
        'singlet',
        'quantity_boxer',
        'boxer',
        'quantity_male_two_pcs_suit_hanging',
        'male_two_pcs_suit_hanging',
        'quantity_male_three_pcs_suit_hanging',
        'male_three_pcs_suit_hanging',
        'quantity_female_two_pcs_suit_hanging',
        'female_two_pcs_suit_hanging',
        'quantity_female_three_pcs_suit_hanging',
        'female_three_pcs_suit_hanging',
        'quantity_male_jacket_hanging',
        'male_jacket_hanging',
        'quantity_female_jacket_hanging',
        'female_jacket_hanging',
        'quantity_jalamia',
        'jalamia',
        'quantity_camisole',
        'camisole',
        'quantity_wrapper_only',
        'wrapper_only',
        'quantity_female_inner_wear',
        'female_inner_wear',
        'quantity_head_tie_gele',
        'head_tie_gele',
        'quantity_small_wedding_gown_hanging',
        'small_wedding_gown_hanging',
        'quantity_big_wedding_gown_hanging',
        'big_wedding_gown_hanging',
        'quantity_asooke_head_tie',
        'asooke_head_tie',
        'quantity_sweater_normal',
        'sweater_normal',
        'quantity_sweater_big',
        'sweater_big',
        'quantity_towel_normal',
        'towel_normal',
        'quantity_towel_big',
        'towel_big',
        'quantity_bed_spread_normal',
        'bed_spread_normal',
        'quantity_bed_spread_big',
        'bed_spread_big',
        'quantity_duvet',
        'duvet',
        'quantity_curtain_normal',
        'curtain_normal',
        'quantity_curtain_big',
        'curtain_big',
        'quantity_curtain_very_big',
        'curtain_very_big',
        'quantity_pyjamas_small',
        'pyjamas_small',
        'quantity_pyjamas_big',
        'pyjamas_big',
        'comment_section',
        'balance',
        'final_amount',
      ]" -->
      <template v-slot:body="props">
        <q-tr :props="props" @click="onRowClick(props.row)">
          <q-td key="collected_on" :props="props">
            {{ props.row.collected_on }}
          </q-td>
          <q-td key="collection_date" :props="props">
            {{ props.row.collection_date }}
          </q-td>
          <q-td key="customer" :props="props">
            {{ props.row.customer }}
          </q-td>
          <q-td key="customer_phone" :props="props">
            {{ props.row.customer_phone }}
          </q-td>
          <q-td key="intake_id" :props="props">
            <q-badge color="green">
              {{ props.row.intake_id }}
            </q-badge>
          </q-td>
          <q-td key="staff" :props="props">
            {{ props.row.staff }}
          </q-td>
          <q-td key="quantity_male_native_2_pcs" :props="props">
            {{ props.row.quantity_male_native_2_pcs }}
          </q-td>
          <q-td key="male_native_2_pcs" :props="props">
            {{ props.row.male_native_2_pcs }}
          </q-td>
          <q-td key="quantity_male_native_2_pcs_hanging" :props="props">
            {{ props.row.quantity_male_native_2_pcs_hanging }}
          </q-td>
          <q-td key="male_native_2_pcs_hanging" :props="props">
            {{ props.row.male_native_2_pcs_hanging }}
          </q-td>
          <q-td key="quantity_male_native_3_pcs_notAgbada" :props="props">
            {{ props.row.quantity_male_native_3_pcs_notAgbada }}
          </q-td>
          <q-td key="male_native_3_pcs_notAgbada" :props="props">
            {{ props.row.male_native_3_pcs_notAgbada }}
          </q-td>
          <q-td
            key="quantity_male_native_3_pcs_notAgbada_hanging"
            :props="props"
          >
            {{ props.row.quantity_male_native_3_pcs_notAgbada_hanging }}
          </q-td>
          <q-td key="male_native_3_pcs_notAgbada_hanging" :props="props">
            {{ props.row.male_native_3_pcs_notAgbada_hanging }}
          </q-td>
          <q-td key="quantity_native_top_only" :props="props">
            {{ props.row.quantity_native_top_only }}
          </q-td>
          <q-td key="native_top_only" :props="props">
            {{ props.row.native_top_only }}
          </q-td>
          <q-td key="quantity_native_trouser_only" :props="props">
            {{ props.row.quantity_native_trouser_only }}
          </q-td>
          <q-td key="native_trouser_only" :props="props">
            {{ props.row.native_trouser_only }}
          </q-td>
          <q-td key="quantity_complete_male_agbada" :props="props">
            {{ props.row.quantity_complete_male_agbada }}
          </q-td>
          <q-td key="complete_male_agbada" :props="props">
            {{ props.row.complete_male_agbada }}
          </q-td>
          <q-td key="quantity_male_agbada_alone" :props="props">
            {{ props.row.quantity_male_agbada_alone }}
          </q-td>
          <q-td key="male_agbada_alone" :props="props">
            {{ props.row.male_agbada_alone }}
          </q-td>
          <q-td key="quantity_blouse" :props="props">
            {{ props.row.quantity_blouse }}
          </q-td>
          <q-td key="blouse" :props="props">
            {{ props.row.blouse }}
          </q-td>
          <q-td key="quantity_blouse_hanging" :props="props">
            {{ props.row.quantity_blouse_hanging }}
          </q-td>
          <q-td key="blouse_hanging" :props="props">
            {{ props.row.blouse_hanging }}
          </q-td>
          <q-td key="quantity_female_shirt" :props="props">
            {{ props.row.quantity_female_shirt }}
          </q-td>
          <q-td key="female_shirt" :props="props">
            {{ props.row.female_shirt }}
          </q-td>
          <q-td key="quantity_female_shirt_hanging" :props="props">
            {{ props.row.quantity_female_shirt_hanging }}
          </q-td>
          <q-td key="female_shirt_hanging" :props="props">
            {{ props.row.female_shirt_hanging }}
          </q-td>
          <q-td key="quantity_female_trouser_jeans" :props="props">
            {{ props.row.quantity_female_trouser_jeans }}
          </q-td>
          <q-td key="female_trouser_jeans" :props="props">
            {{ props.row.female_trouser_jeans }}
          </q-td>
          <q-td key="quantity_female_trouser_jeans_hanging" :props="props">
            {{ props.row.quantity_female_trouser_jeans_hanging }}
          </q-td>
          <q-td key="female_trouser_jeans_hanging" :props="props">
            {{ props.row.female_trouser_jeans_hanging }}
          </q-td>
          <q-td key="quantity_skirt_and_blouse_english" :props="props">
            {{ props.row.quantity_skirt_and_blouse_english }}
          </q-td>
          <q-td key="skirt_and_blouse_english" :props="props">
            {{ props.row.skirt_and_blouse_english }}
          </q-td>
          <q-td key="quantity_skirt_and_blouse_english_hanging" :props="props">
            {{ props.row.quantity_skirt_and_blouse_english_hanging }}
          </q-td>
          <q-td key="skirt_and_blouse_english_hanging" :props="props">
            {{ props.row.skirt_and_blouse_english_hanging }}
          </q-td>
          <q-td key="quantity_wrapper_buba_gele" :props="props">
            {{ props.row.quantity_wrapper_buba_gele }}
          </q-td>
          <q-td key="wrapper_buba_gele" :props="props">
            {{ props.row.wrapper_buba_gele }}
          </q-td>
          <q-td key="quantity_female_native_buba_trouser" :props="props">
            {{ props.row.quantity_female_native_buba_trouser }}
          </q-td>
          <q-td key="female_native_buba_trouser" :props="props">
            {{ props.row.female_native_buba_trouser }}
          </q-td>
          <q-td key="quantity_gown_english_hanging" :props="props">
            {{ props.row.quantity_gown_english_hanging }}
          </q-td>
          <q-td key="gown_english_hanging" :props="props">
            {{ props.row.gown_english_hanging }}
          </q-td>
          <q-td key="quantity_gown_native" :props="props">
            {{ props.row.quantity_gown_native }}
          </q-td>
          <q-td key="gown_native" :props="props">
            {{ props.row.gown_native }}
          </q-td>
          <q-td key="quantity_skirt_and_blouse_native" :props="props">
            {{ props.row.quantity_skirt_and_blouse_native }}
          </q-td>
          <q-td key="skirt_and_blouse_native" :props="props">
            {{ props.row.skirt_and_blouse_native }}
          </q-td>
          <q-td key="quantity_aso_oke_wrapper_buba_gele" :props="props">
            {{ props.row.quantity_aso_oke_wrapper_buba_gele }}
          </q-td>
          <q-td key="aso_oke_wrapper_buba_gele" :props="props">
            {{ props.row.aso_oke_wrapper_buba_gele }}
          </q-td>
          <q-td key="quantity_male_complete_aso_oke" :props="props">
            {{ props.row.quantity_male_complete_aso_oke }}
          </q-td>
          <q-td key="male_complete_aso_oke" :props="props">
            {{ props.row.male_complete_aso_oke }}
          </q-td>
          <q-td key="quantity_male_medium_t_shirt_or_polo" :props="props">
            {{ props.row.quantity_male_medium_t_shirt_or_polo }}
          </q-td>
          <q-td key="male_medium_t_shirt_or_polo" :props="props">
            {{ props.row.male_medium_t_shirt_or_polo }}
          </q-td>
          <q-td key="quantity_male_big_t_shirt_or_polo" :props="props">
            {{ props.row.quantity_male_big_t_shirt_or_polo }}
          </q-td>
          <q-td key="male_big_t_shirt_or_polo" :props="props">
            {{ props.row.male_big_t_shirt_or_polo }}
          </q-td>
          <q-td key="quantity_male_t_shirt_or_polo_hanging" :props="props">
            {{ props.row.quantity_male_t_shirt_or_polo_hanging }}
          </q-td>
          <q-td key="male_t_shirt_or_polo_hanging" :props="props">
            {{ props.row.male_t_shirt_or_polo_hanging }}
          </q-td>
          <q-td key="quantity_shirt_normal" :props="props">
            {{ props.row.quantity_shirt_normal }}
          </q-td>
          <q-td key="shirt_normal" :props="props">
            {{ props.row.shirt_normal }}
          </q-td>
          <q-td key="quantity_shirt_normal_hanging" :props="props">
            {{ props.row.quantity_shirt_normal_hanging }}
          </q-td>
          <q-td key="shirt_normal_hanging" :props="props">
            {{ props.row.shirt_normal_hanging }}
          </q-td>
          <q-td key="quantity_shirt_big" :props="props">
            {{ props.row.quantity_shirt_big }}
          </q-td>
          <q-td key="shirt_big" :props="props">
            {{ props.row.shirt_big }}
          </q-td>
          <q-td key="quantity_shirt_big_hanging" :props="props">
            {{ props.row.quantity_shirt_big_hanging }}
          </q-td>
          <q-td key="shirt_big_hanging" :props="props">
            {{ props.row.shirt_big_hanging }}
          </q-td>
          <q-td key="quantity_plain_trouser" :props="props">
            {{ props.row.quantity_plain_trouser }}
          </q-td>
          <q-td key="plain_trouser" :props="props">
            {{ props.row.plain_trouser }}
          </q-td>
          <q-td key="quantity_plain_trouser_hanging" :props="props">
            {{ props.row.quantity_plain_trouser_hanging }}
          </q-td>
          <q-td key="plain_trouser_hanging" :props="props">
            {{ props.row.plain_trouser_hanging }}
          </q-td>
          <q-td key="quantity_jeans_chinos_trouser" :props="props">
            {{ props.row.quantity_jeans_chinos_trouser }}
          </q-td>
          <q-td key="jeans_chinos_trouser" :props="props">
            {{ props.row.jeans_chinos_trouser }}
          </q-td>
          <q-td key="quantity_jeans_chinos_trouser_hanging" :props="props">
            {{ props.row.quantity_jeans_chinos_trouser_hanging }}
          </q-td>
          <q-td key="jeans_chinos_trouser_hanging" :props="props">
            {{ props.row.jeans_chinos_trouser_hanging }}
          </q-td>
          <q-td key="quantity_waist_coat_hanging" :props="props">
            {{ props.row.quantity_waist_coat_hanging }}
          </q-td>
          <q-td key="waist_coat_hanging" :props="props">
            {{ props.row.waist_coat_hanging }}
          </q-td>
          <q-td key="quantity_tie" :props="props">
            {{ props.row.quantity_tie }}
          </q-td>
          <q-td key="tie" :props="props">
            {{ props.row.tie }}
          </q-td>
          <q-td key="quantity_shorts" :props="props">
            {{ props.row.quantity_shorts }}
          </q-td>
          <q-td key="shorts" :props="props">
            {{ props.row.shorts }}
          </q-td>
          <q-td key="quantity_shorts_hanging" :props="props">
            {{ props.row.quantity_shorts_hanging }}
          </q-td>
          <q-td key="shorts_hanging" :props="props">
            {{ props.row.shorts_hanging }}
          </q-td>
          <q-td key="quantity_singlet" :props="props">
            {{ props.row.quantity_singlet }}
          </q-td>
          <q-td key="singlet" :props="props">
            {{ props.row.singlet }}
          </q-td>
          <q-td key="quantity_boxer" :props="props">
            {{ props.row.quantity_boxer }}
          </q-td>
          <q-td key="boxer" :props="props">
            {{ props.row.boxer }}
          </q-td>
          <q-td key="quantity_male_two_pcs_suit_hanging" :props="props">
            {{ props.row.quantity_male_two_pcs_suit_hanging }}
          </q-td>
          <q-td key="male_two_pcs_suit_hanging" :props="props">
            {{ props.row.male_two_pcs_suit_hanging }}
          </q-td>
          <q-td key="quantity_male_three_pcs_suit_hanging" :props="props">
            {{ props.row.quantity_male_three_pcs_suit_hanging }}
          </q-td>
          <q-td key="male_three_pcs_suit_hanging" :props="props">
            {{ props.row.male_three_pcs_suit_hanging }}
          </q-td>
          <q-td key="quantity_female_two_pcs_suit_hanging" :props="props">
            {{ props.row.quantity_female_two_pcs_suit_hanging }}
          </q-td>
          <q-td key="female_two_pcs_suit_hanging" :props="props">
            {{ props.row.female_two_pcs_suit_hanging }}
          </q-td>
          <q-td key="quantity_female_three_pcs_suit_hanging" :props="props">
            {{ props.row.quantity_female_three_pcs_suit_hanging }}
          </q-td>
          <q-td key="female_three_pcs_suit_hanging" :props="props">
            {{ props.row.female_three_pcs_suit_hanging }}
          </q-td>
          <q-td key="quantity_male_jacket_hanging" :props="props">
            {{ props.row.quantity_male_jacket_hanging }}
          </q-td>
          <q-td key="male_jacket_hanging" :props="props">
            {{ props.row.male_jacket_hanging }}
          </q-td>
          <q-td key="quantity_female_jacket_hanging" :props="props">
            {{ props.row.quantity_female_jacket_hanging }}
          </q-td>
          <q-td key="female_jacket_hanging" :props="props">
            {{ props.row.female_jacket_hanging }}
          </q-td>
          <q-td key="quantity_jalamia" :props="props">
            {{ props.row.quantity_jalamia }}
          </q-td>
          <q-td key="jalamia" :props="props">
            {{ props.row.jalamia }}
          </q-td>
          <q-td key="quantity_camisole" :props="props">
            {{ props.row.quantity_camisole }}
          </q-td>
          <q-td key="camisole" :props="props">
            {{ props.row.camisole }}
          </q-td>
          <q-td key="quantity_wrapper_only" :props="props">
            {{ props.row.quantity_wrapper_only }}
          </q-td>
          <q-td key="wrapper_only" :props="props">
            {{ props.row.wrapper_only }}
          </q-td>
          <q-td key="quantity_female_inner_wear" :props="props">
            {{ props.row.quantity_female_inner_wear }}
          </q-td>
          <q-td key="female_inner_wear" :props="props">
            {{ props.row.female_inner_wear }}
          </q-td>
          <q-td key="quantity_head_tie_gele" :props="props">
            {{ props.row.quantity_head_tie_gele }}
          </q-td>
          <q-td key="head_tie_gele" :props="props">
            {{ props.row.head_tie_gele }}
          </q-td>
          <q-td key="quantity_small_wedding_gown_hanging" :props="props">
            {{ props.row.quantity_small_wedding_gown_hanging }}
          </q-td>
          <q-td key="small_wedding_gown_hanging" :props="props">
            {{ props.row.small_wedding_gown_hanging }}
          </q-td>
          <q-td key="quantity_big_wedding_gown_hanging" :props="props">
            {{ props.row.quantity_big_wedding_gown_hanging }}
          </q-td>
          <q-td key="big_wedding_gown_hanging" :props="props">
            {{ props.row.big_wedding_gown_hanging }}
          </q-td>
          <q-td key="quantity_asooke_head_tie" :props="props">
            {{ props.row.quantity_asooke_head_tie }}
          </q-td>
          <q-td key="asooke_head_tie" :props="props">
            {{ props.row.asooke_head_tie }}
          </q-td>
          <q-td key="quantity_sweater_normal" :props="props">
            {{ props.row.quantity_sweater_normal }}
          </q-td>
          <q-td key="sweater_normal" :props="props">
            {{ props.row.sweater_normal }}
          </q-td>
          <q-td key="quantity_sweater_big" :props="props">
            {{ props.row.quantity_sweater_big }}
          </q-td>
          <q-td key="sweater_big" :props="props">
            {{ props.row.sweater_big }}
          </q-td>
          <q-td key="quantity_towel_normal" :props="props">
            {{ props.row.quantity_towel_normal }}
          </q-td>
          <q-td key="towel_normal" :props="props">
            {{ props.row.towel_normal }}
          </q-td>
          <q-td key="quantity_towel_big" :props="props">
            {{ props.row.quantity_towel_big }}
          </q-td>
          <q-td key="towel_big" :props="props">
            {{ props.row.towel_big }}
          </q-td>
          <q-td key="quantity_bed_spread_normal" :props="props">
            {{ props.row.quantity_bed_spread_normal }}
          </q-td>
          <q-td key="bed_spread_normal" :props="props">
            {{ props.row.bed_spread_normal }}
          </q-td>
          <q-td key="quantity_bed_spread_big" :props="props">
            {{ props.row.quantity_bed_spread_big }}
          </q-td>
          <q-td key="bed_spread_big" :props="props">
            {{ props.row.bed_spread_big }}
          </q-td>
          <q-td key="quantity_duvet" :props="props">
            {{ props.row.quantity_duvet }}
          </q-td>
          <q-td key="duvet" :props="props">
            {{ props.row.duvet }}
          </q-td>
          <q-td key="quantity_curtain_normal" :props="props">
            {{ props.row.quantity_curtain_normal }}
          </q-td>
          <q-td key="curtain_normal" :props="props">
            {{ props.row.curtain_normal }}
          </q-td>
          <q-td key="quantity_curtain_big" :props="props">
            {{ props.row.quantity_curtain_big }}
          </q-td>
          <q-td key="curtain_big" :props="props">
            {{ props.row.curtain_big }}
          </q-td>
          <q-td key="quantity_curtain_very_big" :props="props">
            {{ props.row.quantity_curtain_very_big }}
          </q-td>
          <q-td key="curtain_very_big" :props="props">
            {{ props.row.curtain_very_big }}
          </q-td>
          <q-td key="quantity_pyjamas_small" :props="props">
            {{ props.row.quantity_pyjamas_small }}
          </q-td>
          <q-td key="pyjamas_small" :props="props">
            {{ props.row.pyjamas_small }}
          </q-td>
          <q-td key="quantity_pyjamas_big" :props="props">
            {{ props.row.quantity_pyjamas_big }}
          </q-td>
          <q-td key="pyjamas_big" :props="props">
            {{ props.row.pyjamas_big }}
          </q-td>
          <q-td key="comment_section" :props="props">
            {{ props.row.comment_section }}
          </q-td>
          <q-td key="discount" :props="props">
            {{ props.row.discount }}
          </q-td>
          <q-td key="deposit" :props="props">
            {{ props.row.deposit }}
          </q-td>
          <q-td key="balance" :props="props">
            {{ props.row.balance }}
          </q-td>
          <q-td key="final_amount" :props="props">
            {{ props.row.final_amount }}
          </q-td>
        </q-tr>
      </template>
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>

    <q-dialog v-model="moreDetails">
      <div class="my-card-2">
        <q-card>
          <q-card-section>
            <div
              class="row q-pt-sm"
              v-for="(value, key) in dataMore"
              :key="key"
            >
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-subtitle2 bg-grey">{{ key }}</div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <div class="text-h6">{{ value }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator dark />

          <q-card-actions align="right">
            <q-btn flat v-close-popup color="red">Close</q-btn>
            <!-- <q-btn @click="onUpdate(data.intake_id)" flat
              >Complete Payment</q-btn
            > -->
          </q-card-actions>
        </q-card>
      </div>
    </q-dialog>
    <!-- :visible-columns="['created_at', 'updated_at', 'deleted_at']" -->
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { axios, api, base } from "boot/axios";
import { copyToClipboard, useQuasar } from "quasar";
import { useUserStore } from "../../stores/user-store";
import { useRouter } from "vue-router";

name: "AllIntakePage";

let filter = ref("");
const $q = useQuasar();
const useStore = useUserStore();
const data = ref([]);
const beforeDataMore = ref([]);
const dataMore = ref([]);
const anotherColumns = ref([]);
const moreDetails = ref(false);

const columns = [
  { name: "collected_on", label: "Collected On", field: "collected_on" },
  {
    name: "collection_date",
    label: "Collection Date",
    field: "collection_date",
  },
  { name: "customer", label: "Customer", field: "customer" },
  { name: "customer_phone", label: "Customer Phone", field: "customer_phone" },
  { name: "intake_id", label: "Intake ID", field: "intake_id" },
  { name: "staff", label: "Staff", field: "staff" },
  {
    name: "quantity_male_native_2_pcs",
    label: "Quantity Male Native 2pcs",
    field: "quantity_male_native_2_pcs",
  },
  {
    name: "male_native_2_pcs",
    label: "Male Native 2pcs",
    field: "male_native_2_pcs",
  },
  {
    name: "quantity_male_native_2_pcs_hanging",
    label: "Quantity Male Native 2pcs[Hanging]",
    field: "quantity_male_native_2_pcs_hanging",
  },
  {
    name: "male_native_2_pcs_hanging",
    label: "Male Native 2pcs[Hanging]",
    field: "male_native_2_pcs_hanging",
  },
  {
    name: "quantity_male_native_3_pcs_notAgbada",
    label: "Quantity Male Native 3pcs Not-Agbada",
    field: "quantity_male_native_3_pcs_notAgbada",
  },
  {
    name: "male_native_3_pcs_notAgbada",
    label: "Male Native 3pcs Not-Agbada",
    field: "male_native_3_pcs_notAgbada",
  },
  {
    name: "quantity_male_native_3_pcs_notAgbada_hanging",
    label: "Quantity Male Native 3pcs Not-Agbada[Hanging]",
    field: "quantity_male_native_3_pcs_notAgbada_hanging",
  },
  {
    name: "male_native_3_pcs_notAgbada_hanging",
    label: "Male Native 3pcs Not-Agbada[Hanging]",
    field: "male_native_3_pcs_notAgbada_hanging",
  },
  {
    name: "quantity_native_top_only",
    label: "Quantity Native Top Only",
    field: "quantity_native_top_only",
  },
  {
    name: "native_top_only",
    label: "Native Top Only",
    field: "native_top_only",
  },
  {
    name: "quantity_native_trouser_only",
    label: "Quantity Native Trouser Only",
    field: "quantity_native_trouser_only",
  },
  {
    name: "native_trouser_only",
    label: "Native Trouser Only",
    field: "native_trouser_only",
  },
  {
    name: "quantity_complete_male_agbada",
    label: "Quantity Complete Male Agbada",
    field: "quantity_complete_male_agbada",
  },
  {
    name: "complete_male_agbada",
    label: "Complete Male Agbada",
    field: "complete_male_agbada",
  },
  {
    name: "quantity_male_agbada_alone",
    label: "Quantity Male Agbada Alone",
    field: "quantity_male_agbada_alone",
  },
  {
    name: "male_agbada_alone",
    label: "Male Agbada Alone",
    field: "male_agbada_alone",
  },
  {
    name: "quantity_blouse",
    label: "Quantity Blouse",
    field: "quantity_blouse",
  },
  {
    name: "blouse",
    label: "Blouse",
    field: "blouse",
  },
  {
    name: "quantity_blouse_hanging",
    label: "Quantity Blouse[Hanging]",
    field: "quantity_blouse_hanging",
  },
  {
    name: "blouse_hanging",
    label: "Blouse[Hanging]",
    field: "blouse_hanging",
  },
  {
    name: "quantity_female_shirt",
    label: "Quantity Female Shirt",
    field: "quantity_female_shirt",
  },
  {
    name: "female_shirt",
    label: "Female Shirt",
    field: "female_shirt",
  },
  {
    name: "quantity_female_shirt_hanging",
    label: "Quantity Female Shirt[Hanging]",
    field: "quantity_female_shirt_hanging",
  },
  {
    name: "female_shirt_hanging",
    label: "Female Shirt[Hanging]",
    field: "female_shirt_hanging",
  },
  {
    name: "quantity_female_trouser_jeans",
    label: "Quantity Female Trouser Jeans",
    field: "quantity_female_trouser_jeans",
  },
  {
    name: "female_trouser_jeans",
    label: "Female Trouser Jeans",
    field: "female_trouser_jeans",
  },
  {
    name: "quantity_female_trouser_jeans_hanging",
    label: "Quantity Female Trouser Jeans[Hanging]",
    field: "quantity_female_trouser_jeans_hanging",
  },
  {
    name: "female_trouser_jeans_hanging",
    label: "Female Trouser Jeans[Hanging]",
    field: "female_trouser_jeans_hanging",
  },
  {
    name: "quantity_skirt_and_blouse_english",
    label: "Quantity Skirt-and-Blouse English",
    field: "quantity_skirt_and_blouse_english",
  },
  {
    name: "skirt_and_blouse_english",
    label: "Skirt-and-Blouse English",
    field: "skirt_and_blouse_english",
  },
  {
    name: "quantity_skirt_and_blouse_english_hanging",
    label: "Quantity Skirt-and-Blouse English[Hanging]",
    field: "quantity_skirt_and_blouse_english_hanging",
  },
  {
    name: "skirt_and_blouse_english_hanging",
    label: "Skirt-and-Blouse English[Hanging]",
    field: "skirt_and_blouse_english_hanging",
  },
  {
    name: "quantity_wrapper_buba_gele",
    label: "Quantity Wrapper Buba Gele",
    field: "quantity_wrapper_buba_gele",
  },
  {
    name: "wrapper_buba_gele",
    label: "Wrapper Buba Gele",
    field: "wrapper_buba_gele",
  },
  {
    name: "quantity_female_native_buba_trouser",
    label: "Quantity Female Native Buba Trouser",
    field: "quantity_female_native_buba_trouser",
  },
  {
    name: "female_native_buba_trouser",
    label: "Female Native Buba Trouser",
    field: "female_native_buba_trouser",
  },
  {
    name: "quantity_gown_english_hanging",
    label: "Quantity Gown English[Hanging]",
    field: "quantity_gown_english_hanging",
  },
  {
    name: "gown_english_hanging",
    label: "Gown English[Hanging]",
    field: "gown_english_hanging",
  },
  {
    name: "quantity_gown_native",
    label: "Quantity Gown Native",
    field: "quantity_gown_native",
  },
  {
    name: "gown_native",
    label: "Gown Native",
    field: "gown_native",
  },
  {
    name: "quantity_skirt_and_blouse_native",
    label: "Quantity Skirt-and-Blouse Native",
    field: "quantity_skirt_and_blouse_native",
  },
  {
    name: "skirt_and_blouse_native",
    label: "Skirt-and-Blouse Native",
    field: "skirt_and_blouse_native",
  },
  {
    name: "quantity_aso_oke_wrapper_buba_gele",
    label: "Quantity Aso-Oke Wrapper Buba Gele",
    field: "quantity_aso_oke_wrapper_buba_gele",
  },
  {
    name: "aso_oke_wrapper_buba_gele",
    label: "Aso-Oke Wrapper Buba Gele",
    field: "aso_oke_wrapper_buba_gele",
  },
  {
    name: "quantity_male_complete_aso_oke",
    label: "Quantity Male Complete Aso-Oke",
    field: "quantity_male_complete_aso_oke",
  },
  {
    name: "male_complete_aso_oke",
    label: "Male Complete Aso-Oke",
    field: "male_complete_aso_oke",
  },
  {
    name: "quantity_male_medium_t_shirt_or_polo",
    label: "Quantity Male Medium T-Shirt/Polo",
    field: "quantity_male_medium_t_shirt_or_polo",
  },
  {
    name: "male_medium_t_shirt_or_polo",
    label: "Male Medium T-Shirt/Polo",
    field: "male_medium_t_shirt_or_polo",
  },
  {
    name: "quantity_male_big_t_shirt_or_polo",
    label: "Quantity Male Big T-Shirt/Polo",
    field: "quantity_male_big_t_shirt_or_polo",
  },
  {
    name: "male_big_t_shirt_or_polo",
    label: "Male Big T-Shirt/Polo",
    field: "male_big_t_shirt_or_polo",
  },
  {
    name: "quantity_male_t_shirt_or_polo_hanging",
    label: "Quantity Male T-Shirt/Polo[Hanging]",
    field: "quantity_male_t_shirt_or_polo_hanging",
  },
  {
    name: "male_t_shirt_or_polo_hanging",
    label: "Male T-Shirt/Polo[Hanging]",
    field: "male_t_shirt_or_polo_hanging",
  },
  {
    name: "quantity_shirt_normal",
    label: "Quantity Shirt Normal",
    field: "quantity_shirt_normal",
  },
  {
    name: "shirt_normal",
    label: "Shirt Normal",
    field: "shirt_normal",
  },
  {
    name: "quantity_shirt_normal_hanging",
    label: "Quantity Shirt Normal[Hanging]",
    field: "quantity_shirt_normal_hanging",
  },
  {
    name: "shirt_normal_hanging",
    label: "Shirt Normal[Hanging]",
    field: "shirt_normal_hanging",
  },
  {
    name: "quantity_shirt_big",
    label: "Quantity Shirt Big",
    field: "quantity_shirt_big",
  },
  {
    name: "shirt_big",
    label: "Shirt Big",
    field: "shirt_big",
  },
  {
    name: "quantity_shirt_big_hanging",
    label: "Quantity Shirt Big[Hanging]",
    field: "quantity_shirt_big_hanging",
  },
  {
    name: "shirt_big_hanging",
    label: "Shirt Big[Hanging]",
    field: "shirt_big_hanging",
  },
  {
    name: "quantity_plain_trouser",
    label: "Quantity Plain Trouser",
    field: "quantity_plain_trouser",
  },
  {
    name: "plain_trouser",
    label: "Plain Trouser",
    field: "plain_trouser",
  },
  {
    name: "quantity_plain_trouser_hanging",
    label: "Quantity Plain Trouser[Hanging]",
    field: "quantity_plain_trouser_hanging",
  },
  {
    name: "plain_trouser_hanging",
    label: "Plain Trouser[Hanging]",
    field: "plain_trouser_hanging",
  },
  {
    name: "quantity_jeans_chinos_trouser",
    label: "Quantity Jeans Chinos Trouser",
    field: "quantity_jeans_chinos_trouser",
  },
  {
    name: "jeans_chinos_trouser",
    label: "Jeans Chinos Trouser",
    field: "jeans_chinos_trouser",
  },
  {
    name: "quantity_jeans_chinos_trouser_hanging",
    label: "Quantity Jeans Chinos Trouser[Hanging]",
    field: "quantity_jeans_chinos_trouser_hanging",
  },
  {
    name: "jeans_chinos_trouser_hanging",
    label: "Jeans Chinos Trouser[Hanging]",
    field: "jeans_chinos_trouser_hanging",
  },
  {
    name: "quantity_waist_coat_hanging",
    label: "Quantity Waist Coat[Hanging]",
    field: "quantity_waist_coat_hanging",
  },
  {
    name: "waist_coat_hanging",
    label: "Waist Coat[Hanging]",
    field: "waist_coat_hanging",
  },
  { name: "quantity_tie", label: "Quantity Tie", field: "quantity_tie" },
  { name: "tie", label: "Tie", field: "tie" },
  {
    name: "quantity_shorts",
    label: "Quantity Shorts",
    field: "quantity_shorts",
  },
  {
    name: "shorts",
    label: "Shorts",
    field: "shorts",
  },
  {
    name: "quantity_shorts_hanging",
    label: "Quantity Shorts[Hanging]",
    field: "quantity_shorts_hanging",
  },
  {
    name: "shorts_hanging",
    label: "Shorts[Hanging]",
    field: "shorts_hanging",
  },
  {
    name: "quantity_singlet",
    label: "Quantity Singlet",
    field: "quantity_singlet",
  },
  {
    name: "singlet",
    label: "Singlet",
    field: "singlet",
  },
  { name: "quantity_boxer", label: "Quantity Boxer", field: "quantity_boxer" },
  { name: "boxer", label: "Boxer", field: "boxer" },
  {
    name: "quantity_male_two_pcs_suit_hanging",
    label: "Quantity Male 2pcs Suit[Hanging]",
    field: "quantity_male_two_pcs_suit_hanging",
  },
  {
    name: "male_two_pcs_suit_hanging",
    label: "Male 2pcs Suit[Hanging]",
    field: "male_two_pcs_suit_hanging",
  },
  {
    name: "quantity_male_three_pcs_suit_hanging",
    label: "Quantity Male 3pcs Suit[Hanging]",
    field: "quantity_male_three_pcs_suit_hanging",
  },
  {
    name: "male_three_pcs_suit_hanging",
    label: "Male 3pcs Suit[Hanging]",
    field: "male_three_pcs_suit_hanging",
  },
  {
    name: "quantity_female_two_pcs_suit_hanging",
    label: "Quantity Female 2pcs Suit[Hanging]",
    field: "quantity_female_two_pcs_suit_hanging",
  },
  {
    name: "female_two_pcs_suit_hanging",
    label: "Female 2pcs Suit[Hanging]",
    field: "female_two_pcs_suit_hanging",
  },
  {
    name: "quantity_female_three_pcs_suit_hanging",
    label: "Quantity Female 3pcs Suit[Hanging]",
    field: "quantity_female_three_pcs_suit_hanging",
  },
  {
    name: "female_three_pcs_suit_hanging",
    label: "Female 3pcs Suit[Hanging]",
    field: "female_three_pcs_suit_hanging",
  },
  {
    name: "quantity_male_jacket_hanging",
    label: "Quantity Male Jacket[Hanging]",
    field: "quantity_male_jacket_hanging",
  },
  {
    name: "male_jacket_hanging",
    label: "Male Jacket[Hanging]",
    field: "male_jacket_hanging",
  },
  {
    name: "quantity_female_jacket_hanging",
    label: "Quantity Female Jacket[Hanging]",
    field: "quantity_female_jacket_hanging",
  },
  {
    name: "female_jacket_hanging",
    label: "Female Jacket[Hanging]",
    field: "female_jacket_hanging",
  },
  {
    name: "quantity_jalamia",
    label: "Quantity Jalamia",
    field: "quantity_jalamia",
  },
  {
    name: "jalamia",
    label: "Jalamia",
    field: "jalamia",
  },
  {
    name: "quantity_camisole",
    label: "Quantity Camisole",
    field: "quantity_camisole",
  },
  { name: "camisole", label: "Camisole", field: "camisole" },
  {
    name: "quantity_wrapper_only",
    label: "Quantity Wrapper Only",
    field: "quantity_wrapper_only",
  },
  { name: "wrapper_only", label: "Wrapper Only", field: "wrapper_only" },
  {
    name: "quantity_female_inner_wear",
    label: "Quantity Female Inner-Wear",
    field: "quantity_female_inner_wear",
  },
  {
    name: "female_inner_wear",
    label: "Female Inner-Wear",
    field: "female_inner_wear",
  },
  {
    name: "quantity_head_tie_gele",
    label: "Quantity Head Tie Gele",
    field: "quantity_head_tie_gele",
  },
  { name: "head_tie_gele", label: "Head Tie Gele", field: "head_tie_gele" },
  {
    name: "quantity_small_wedding_gown_hanging",
    label: "Quantity Small Wedding Gown[Hanging]",
    field: "quantity_small_wedding_gown_hanging",
  },
  {
    name: "small_wedding_gown_hanging",
    label: "Small Wedding Gown[Hanging]",
    field: "small_wedding_gown_hanging",
  },
  {
    name: "quantity_big_wedding_gown_hanging",
    label: "Quantity Big Wedding Gown[Hanging]",
    field: "quantity_big_wedding_gown_hanging",
  },
  {
    name: "big_wedding_gown_hanging",
    label: "Big Wedding Gown[Hanging]",
    field: "big_wedding_gown_hanging",
  },
  {
    name: "quantity_asooke_head_tie",
    label: "Quantity Aso-Oke Head Tie",
    field: "quantity_asooke_head_tie",
  },
  {
    name: "asooke_head_tie",
    label: "Aso-Oke Head Tie",
    field: "asooke_head_tie",
  },
  {
    name: "quantity_sweater_normal",
    label: "Quantity Sweater Normal",
    field: "quantity_sweater_normal",
  },
  { name: "sweater_normal", label: "Sweater Normal", field: "sweater_normal" },
  {
    name: "quantity_sweater_big",
    label: "Quantity Sweater Big",
    field: "quantity_sweater_big",
  },
  { name: "sweater_big", label: "Sweater Big", field: "sweater_big" },
  {
    name: "quantity_towel_normal",
    label: "Quantity Towel Normal",
    field: "quantity_towel_normal",
  },
  { name: "towel_normal", label: "Towel Normal", field: "towel_normal" },
  {
    name: "quantity_towel_big",
    label: "Quantity Towel Big",
    field: "quantity_towel_big",
  },
  { name: "towel_big", label: "Towel Big", field: "towel_big" },
  {
    name: "quantity_bed_spread_normal",
    label: "Quantity Bed Spread Normal",
    field: "quantity_bed_spread_normal",
  },
  {
    name: "bed_spread_normal",
    label: "Bed Spread Normal",
    field: "bed_spread_normal",
  },
  {
    name: "quantity_bed_spread_big",
    label: "Quantity Bed Spread Big",
    field: "quantity_bed_spread_big",
  },
  { name: "bed_spread_big", label: "Bed Spread Big", field: "bed_spread_big" },
  { name: "quantity_duvet", label: "Quantity Duvet", field: "quantity_duvet" },
  { name: "duvet", label: "Duvet", field: "duvet" },
  {
    name: "quantity_curtain_normal",
    label: "Quantity Curtain Normal",
    field: "quantity_curtain_normal",
  },
  { name: "curtain_normal", label: "Curtain Normal", field: "curtain_normal" },
  {
    name: "quantity_curtain_big",
    label: "Quantity Curtain Big",
    field: "quantity_curtain_big",
  },
  { name: "curtain_big", label: "Curtain Big", field: "curtain_big" },
  {
    name: "quantity_curtain_very_big",
    label: "Quantity Curtain Very Big",
    field: "quantity_curtain_very_big",
  },
  {
    name: "curtain_very_big",
    label: "Curtain Very Big",
    field: "curtain_very_big",
  },
  {
    name: "quantity_pyjamas_small",
    label: "Quantity Pyjamas Small",
    field: "quantity_pyjamas_small",
  },
  { name: "pyjamas_small", label: "Pyjamas Small", field: "pyjamas_small" },
  {
    name: "quantity_pyjamas_big",
    label: "Quantity Pyjamas Big",
    field: "quantity_pyjamas_big",
  },
  { name: "pyjamas_big", label: "Pyjamas Big", field: "quantity_pyjamas_big" },
  { name: "comment_section", label: "Comment", field: "comment_section" },
  { name: "discount", label: "Discount", field: "discount" },
  { name: "deposit", label: "Deposit", field: "deposit" },
  { name: "balance", label: "Balance", field: "balance" },
  { name: "final_amount", label: "Final Amount", field: "final_amount" },
];

const onRowClick = (row) => {
  moreDetails.value = true;
  beforeDataMore.value = row;
  anotherColumns.value = columns;
  // for (let key in beforeDataMore.value) {
  //   if (beforeDataMore.value[key] === 0 || beforeDataMore.value[key] === null) {
  //     delete beforeDataMore.value[key];
  //   }
  // }
  for (let key in beforeDataMore.value) {
    // 1. Check for removal first:
    if (key === "ID" || key === "CreatedAt" || key === "UpdatedAt") {
      delete beforeDataMore.value[key];
      continue; // Move to the next iteration to avoid unnecessary checks
    }

    // 2. Handle null or 0 values:
    if (beforeDataMore.value[key] === 0 || beforeDataMore.value[key] === null) {
      delete beforeDataMore.value[key];
      continue; // Move to the next iteration
    }

    // 3. Replace key with label if found in anotherColumns:
    const matchingColumn_ = anotherColumns.value.find(
      (column_) => column_.field === key
    );
    if (matchingColumn_) {
      beforeDataMore.value[matchingColumn_.label] = beforeDataMore.value[key];
      delete beforeDataMore.value[key];
    }
  }
  dataMore.value = beforeDataMore.value;
};

const loadData = () => {
  const token = useStore.getToken;
  console.log(token, "token");
  api
    .get(`/intake/all`, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      data.value = response.data.data.reverse();
      console.log(data.value, "yello!");
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Please refresh page",
        icon: "report_problem",
      });
    });
};

onMounted(() => {
  loadData();
});
</script>

<style lang="sass">
.my-card-2
  width: 100%
.my-sticky-header-table
  /* height or max-height is important */
  height: 510px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: $primary
    color: $white
    /* background-color: #c1f4cd */

  thead
    color: $white

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
