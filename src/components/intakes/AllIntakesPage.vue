<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="All Intakes"
      :columns="columns2"
      :rows="data"
      row-key="CreatedAt"
      flat
      bordered
      :loading="true"
      :filter="filter"
      :pagination="pagination"
      @request="handleTableRequest"
    >
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
          <!-- <q-td key="quantity_male_native_2pcs_folding_colored" :props="props">
            {{ props.row.quantity_male_native_2pcs_folding_colored }}
          </q-td>
          <q-td key="male_native_2pcs_folding_colored" :props="props">
            {{ props.row.male_native_2pcs_folding_colored }}
          </q-td>
          <q-td key="quantity_male_native_2pcs_hanging_colored" :props="props">
            {{ props.row.quantity_male_native_2pcs_hanging_colored }}
          </q-td>
          <q-td key="male_native_2pcs_hanging_colored" :props="props">
            {{ props.row.male_native_2pcs_hanging_colored }}
          </q-td>
          <q-td key="quantity_male_native_2pcs_folding_white" :props="props">
            {{ props.row.quantity_male_native_2pcs_folding_white }}
          </q-td>
          <q-td key="male_native_2pcs_folding_white" :props="props">
            {{ props.row.male_native_2pcs_folding_white }}
          </q-td>
          <q-td key="quantity_male_native_2pcs_hanging_white" :props="props">
            {{ props.row.quantity_male_native_2pcs_hanging_white }}
          </q-td>
          <q-td key="male_native_2pcs_hanging_white" :props="props">
            {{ props.row.male_native_2pcs_hanging_white }}
          </q-td>
          <q-td
            key="quantity_male_native_3pcs_notAgbada_folding_colored"
            :props="props"
          >
            {{ props.row.quantity_male_native_3pcs_notAgbada_folding_colored }}
          </q-td>
          <q-td key="male_native_3pcs_notAgbada_folding_colored" :props="props">
            {{ props.row.male_native_3pcs_notAgbada_folding_colored }}
          </q-td>
          <q-td
            key="quantity_male_native_3pcs_notAgbada_hanging_colored"
            :props="props"
          >
            {{ props.row.quantity_male_native_3pcs_notAgbada_hanging_colored }}
          </q-td>
          <q-td key="male_native_3pcs_notAgbada_hanging_colored" :props="props">
            {{ props.row.male_native_3pcs_notAgbada_hanging_colored }}
          </q-td>
          <q-td
            key="quantity_male_native_3pcs_notAgbada_folding_white"
            :props="props"
          >
            {{ props.row.quantity_male_native_3pcs_notAgbada_folding_white }}
          </q-td>
          <q-td key="male_native_3pcs_notAgbada_folding_white" :props="props">
            {{ props.row.male_native_3pcs_notAgbada_folding_white }}
          </q-td>
          <q-td
            key="quantity_male_native_3pcs_notAgbada_hanging_white"
            :props="props"
          >
            {{ props.row.quantity_male_native_3pcs_notAgbada_hanging_white }}
          </q-td>
          <q-td key="male_native_3pcs_notAgbada_hanging_white" :props="props">
            {{ props.row.male_native_3pcs_notAgbada_hanging_white }}
          </q-td>
          <q-td key="quantity_native_top_only_folding_colored" :props="props">
            {{ props.row.quantity_native_top_only_folding_colored }}
          </q-td>
          <q-td key="native_top_only_folding_colored" :props="props">
            {{ props.row.native_top_only_folding_colored }}
          </q-td>
          <q-td key="quantity_native_top_only_hanging_colored" :props="props">
            {{ props.row.quantity_native_top_only_hanging_colored }}
          </q-td>
          <q-td key="native_top_only_hanging_colored" :props="props">
            {{ props.row.native_top_only_hanging_colored }}
          </q-td>
          <q-td key="quantity_native_top_only_folding_white" :props="props">
            {{ props.row.quantity_native_top_only_folding_white }}
          </q-td>
          <q-td key="native_top_only_folding_white" :props="props">
            {{ props.row.native_top_only_folding_white }}
          </q-td>
          <q-td key="quantity_native_top_only_hanging_white" :props="props">
            {{ props.row.quantity_native_top_only_hanging_white }}
          </q-td>
          <q-td key="native_top_only_hanging_white" :props="props">
            {{ props.row.native_top_only_hanging_white }}
          </q-td>
          <q-td
            key="quantity_native_trouser_only_folding_colored"
            :props="props"
          >
            {{ props.row.quantity_native_trouser_only_folding_colored }}
          </q-td>
          <q-td key="native_trouser_only_folding_colored" :props="props">
            {{ props.row.native_trouser_only_folding_colored }}
          </q-td>
          <q-td
            key="quantity_native_trouser_only_hanging_colored"
            :props="props"
          >
            {{ props.row.quantity_native_trouser_only_hanging_colored }}
          </q-td>
          <q-td key="native_trouser_only_hanging_colored" :props="props">
            {{ props.row.native_trouser_only_hanging_colored }}
          </q-td>
          <q-td key="quantity_native_trouser_only_folding_white" :props="props">
            {{ props.row.quantity_native_trouser_only_folding_white }}
          </q-td>
          <q-td key="native_trouser_only_folding_white" :props="props">
            {{ props.row.native_trouser_only_folding_white }}
          </q-td>
          <q-td key="quantity_native_trouser_only_hanging_white" :props="props">
            {{ props.row.quantity_native_trouser_only_hanging_white }}
          </q-td>
          <q-td key="native_trouser_only_hanging_white" :props="props">
            {{ props.row.native_trouser_only_hanging_white }}
          </q-td>
          <q-td key="quantity_male_agbada_only_folding_colored" :props="props">
            {{ props.row.quantity_male_agbada_only_folding_colored }}
          </q-td>
          <q-td key="male_agbada_only_folding_colored" :props="props">
            {{ props.row.male_agbada_only_folding_colored }}
          </q-td>
          <q-td key="quantity_male_agbada_only_hanging_colored" :props="props">
            {{ props.row.quantity_male_agbada_only_hanging_colored }}
          </q-td>
          <q-td key="male_agbada_only_hanging_colored" :props="props">
            {{ props.row.male_agbada_only_hanging_colored }}
          </q-td>
          <q-td key="quantity_male_agbada_only_folding_white" :props="props">
            {{ props.row.quantity_male_agbada_only_folding_white }}
          </q-td>
          <q-td key="male_agbada_only_folding_white" :props="props">
            {{ props.row.male_agbada_only_folding_white }}
          </q-td>
          <q-td key="quantity_male_agbada_only_hanging_white" :props="props">
            {{ props.row.quantity_male_agbada_only_hanging_white }}
          </q-td>
          <q-td key="male_agbada_only_hanging_white" :props="props">
            {{ props.row.male_agbada_only_hanging_white }}
          </q-td>
          <q-td
            key="quantity_complete_male_agbada_3pcs_Folding_colored"
            :props="props"
          >
            {{ props.row.quantity_complete_male_agbada_3pcs_Folding_colored }}
          </q-td>
          <q-td key="complete_male_agbada_3pcs_Folding_colored" :props="props">
            {{ props.row.complete_male_agbada_3pcs_Folding_colored }}
          </q-td>
          <q-td
            key="quantity_complete_male_agbada_3pcs_Hanging_colored"
            :props="props"
          >
            {{ props.row.quantity_complete_male_agbada_3pcs_Hanging_colored }}
          </q-td>
          <q-td key="complete_male_agbada_3pcs_Hanging_colored" :props="props">
            {{ props.row.complete_male_agbada_3pcs_Hanging_colored }}
          </q-td>
          <q-td
            key="quantity_complete_male_agbada_3pcs_Folding_white"
            :props="props"
          >
            {{ props.row.quantity_complete_male_agbada_3pcs_Folding_white }}
          </q-td>
          <q-td key="complete_male_agbada_3pcs_Folding_white" :props="props">
            {{ props.row.complete_male_agbada_3pcs_Folding_white }}
          </q-td>
          <q-td
            key="quantity_complete_male_agbada_3pcs_Hanging_white"
            :props="props"
          >
            {{ props.row.quantity_complete_male_agbada_3pcs_Hanging_white }}
          </q-td>
          <q-td key="complete_male_agbada_3pcs_Hanging_white" :props="props">
            {{ props.row.complete_male_agbada_3pcs_Hanging_white }}
          </q-td>
          <q-td key="quantity_normal_shirt_folding_colored" :props="props">
            {{ props.row.quantity_normal_shirt_folding_colored }}
          </q-td>
          <q-td key="normal_shirt_folding_colored" :props="props">
            {{ props.row.normal_shirt_folding_colored }}
          </q-td>
          <q-td key="quantity_normal_shirt_hanging_colored" :props="props">
            {{ props.row.quantity_normal_shirt_hanging_colored }}
          </q-td>
          <q-td key="normal_shirt_hanging_colored" :props="props">
            {{ props.row.normal_shirt_hanging_colored }}
          </q-td>
          <q-td key="quantity_normal_shirt_folding_white" :props="props">
            {{ props.row.quantity_normal_shirt_folding_white }}
          </q-td>
          <q-td key="normal_shirt_folding_white" :props="props">
            {{ props.row.normal_shirt_folding_white }}
          </q-td>
          <q-td key="quantity_normal_shirt_hanging_white" :props="props">
            {{ props.row.quantity_normal_shirt_hanging_white }}
          </q-td>
          <q-td key="normal_shirt_hanging_white" :props="props">
            {{ props.row.normal_shirt_hanging_white }}
          </q-td>

          <q-td key="quantity_blouse_folding_colored" :props="props">
            {{ props.row.quantity_blouse_folding_colored }}
          </q-td>
          <q-td key="blouse_folding_colored" :props="props">
            {{ props.row.blouse_folding_colored }}
          </q-td>
          <q-td key="quantity_blouse_hanging_colored" :props="props">
            {{ props.row.quantity_blouse_hanging_colored }}
          </q-td>
          <q-td key="blouse_hanging_colored" :props="props">
            {{ props.row.blouse_hanging_colored }}
          </q-td>
          <q-td key="quantity_blouse_folding_white" :props="props">
            {{ props.row.quantity_blouse_folding_white }}
          </q-td>
          <q-td key="blouse_folding_white" :props="props">
            {{ props.row.blouse_folding_white }}
          </q-td>
          <q-td key="quantity_blouse_hanging_white" :props="props">
            {{ props.row.quantity_blouse_hanging_white }}
          </q-td>
          <q-td key="blouse_hanging_white" :props="props">
            {{ props.row.blouse_hanging_white }}
          </q-td>
          <q-td key="quantity_blouse_x_large_folding_colored" :props="props">
            {{ props.row.quantity_blouse_x_large_folding_colored }}
          </q-td>
          <q-td key="blouse_x_large_folding_colored" :props="props">
            {{ props.row.blouse_x_large_folding_colored }}
          </q-td>
          <q-td key="quantity_blouse_x_large_hanging_colored" :props="props">
            {{ props.row.quantity_blouse_x_large_hanging_colored }}
          </q-td>
          <q-td key="blouse_x_large_hanging_colored" :props="props">
            {{ props.row.blouse_x_large_hanging_colored }}
          </q-td>
          <q-td key="quantity_blouse_x_large_folding_white" :props="props">
            {{ props.row.quantity_blouse_x_large_folding_white }}
          </q-td>
          <q-td key="blouse_x_large_folding_white" :props="props">
            {{ props.row.blouse_x_large_folding_white }}
          </q-td>
          <q-td key="quantity_blouse_x_large_hanging_white" :props="props">
            {{ props.row.quantity_blouse_x_large_hanging_white }}
          </q-td>
          <q-td key="blouse_x_large_hanging_white" :props="props">
            {{ props.row.blouse_x_large_hanging_white }}
          </q-td>
          <q-td key="quantity_female_shirt_folding_colored" :props="props">
            {{ props.row.quantity_female_shirt_folding_colored }}
          </q-td>
          <q-td key="female_shirt_folding_colored" :props="props">
            {{ props.row.female_shirt_folding_colored }}
          </q-td>
          <q-td key="quantity_female_shirt_hanging_colored" :props="props">
            {{ props.row.quantity_female_shirt_hanging_colored }}
          </q-td>
          <q-td key="female_shirt_hanging_colored" :props="props">
            {{ props.row.female_shirt_hanging_colored }}
          </q-td>
          <q-td key="quantity_female_shirt_folding_white" :props="props">
            {{ props.row.quantity_female_shirt_folding_white }}
          </q-td>
          <q-td key="female_shirt_folding_white" :props="props">
            {{ props.row.female_shirt_folding_white }}
          </q-td>
          <q-td key="quantity_female_shirt_hanging_white" :props="props">
            {{ props.row.quantity_female_shirt_hanging_white }}
          </q-td>
          <q-td key="female_shirt_hanging_white" :props="props">
            {{ props.row.female_shirt_hanging_white }}
          </q-td>
          <q-td key="quantity_tshirt_polo_small_folding_colored" :props="props">
            {{ props.row.quantity_tshirt_polo_small_folding_colored }}
          </q-td>
          <q-td key="tshirt_polo_small_folding_colored" :props="props">
            {{ props.row.tshirt_polo_small_folding_colored }}
          </q-td>
          <q-td key="quantity_tshirt_polo_small_hanging_colored" :props="props">
            {{ props.row.quantity_tshirt_polo_small_hanging_colored }}
          </q-td>
          <q-td key="tshirt_polo_small_hanging_colored" :props="props">
            {{ props.row.tshirt_polo_small_hanging_colored }}
          </q-td>
          <q-td key="quantity_tshirt_polo_small_folding_white" :props="props">
            {{ props.row.quantity_tshirt_polo_small_folding_white }}
          </q-td>
          <q-td key="tshirt_polo_small_folding_white" :props="props">
            {{ props.row.tshirt_polo_small_folding_white }}
          </q-td>
          <q-td key="quantity_tshirt_polo_small_hanging_white" :props="props">
            {{ props.row.quantity_tshirt_polo_small_hanging_white }}
          </q-td>
          <q-td key="tshirt_polo_small_hanging_white" :props="props">
            {{ props.row.tshirt_polo_small_hanging_white }}
          </q-td>
          <q-td
            key="quantity_tshirt_polo_medium_folding_colored"
            :props="props"
          >
            {{ props.row.quantity_tshirt_polo_medium_folding_colored }}
          </q-td>
          <q-td key="tshirt_polo_medium_folding_colored" :props="props">
            {{ props.row.tshirt_polo_medium_folding_colored }}
          </q-td>
          <q-td
            key="quantity_tshirt_polo_medium_hanging_colored"
            :props="props"
          >
            {{ props.row.quantity_tshirt_polo_medium_hanging_colored }}
          </q-td>
          <q-td key="tshirt_polo_medium_hanging_colored" :props="props">
            {{ props.row.tshirt_polo_medium_hanging_colored }}
          </q-td>
          <q-td key="quantity_tshirt_polo_medium_folding_white" :props="props">
            {{ props.row.quantity_tshirt_polo_medium_folding_white }}
          </q-td>
          <q-td key="tshirt_polo_medium_folding_white" :props="props">
            {{ props.row.tshirt_polo_medium_folding_white }}
          </q-td>
          <q-td key="quantity_tshirt_polo_medium_hanging_white" :props="props">
            {{ props.row.quantity_tshirt_polo_medium_hanging_white }}
          </q-td>
          <q-td key="tshirt_polo_medium_hanging_white" :props="props">
            {{ props.row.tshirt_polo_medium_hanging_white }}
          </q-td>
          <q-td key="quantity_tshirt_polo_big_folding_colored" :props="props">
            {{ props.row.quantity_tshirt_polo_big_folding_colored }}
          </q-td>
          <q-td key="tshirt_polo_big_folding_colored" :props="props">
            {{ props.row.tshirt_polo_big_folding_colored }}
          </q-td>
          <q-td key="quantity_tshirt_polo_big_hanging_colored" :props="props">
            {{ props.row.quantity_tshirt_polo_big_hanging_colored }}
          </q-td>
          <q-td key="tshirt_polo_big_hanging_colored" :props="props">
            {{ props.row.tshirt_polo_big_hanging_colored }}
          </q-td>
          <q-td key="quantity_tshirt_polo_big_folding_white" :props="props">
            {{ props.row.quantity_tshirt_polo_big_folding_white }}
          </q-td>
          <q-td key="tshirt_polo_big_folding_white" :props="props">
            {{ props.row.tshirt_polo_big_folding_white }}
          </q-td>
          <q-td key="quantity_tshirt_polo_big_hanging_white" :props="props">
            {{ props.row.quantity_tshirt_polo_big_hanging_white }}
          </q-td>
          <q-td key="tshirt_polo_big_hanging_white" :props="props">
            {{ props.row.tshirt_polo_big_hanging_white }}
          </q-td>
          <q-td key="quantity_shirt_x_large_folding_colored" :props="props">
            {{ props.row.quantity_shirt_x_large_folding_colored }}
          </q-td>
          <q-td key="shirt_x_large_folding_colored" :props="props">
            {{ props.row.shirt_x_large_folding_colored }}
          </q-td>
          <q-td key="quantity_shirt_x_large_hanging_colored" :props="props">
            {{ props.row.quantity_shirt_x_large_hanging_colored }}
          </q-td>
          <q-td key="shirt_x_large_hanging_colored" :props="props">
            {{ props.row.shirt_x_large_hanging_colored }}
          </q-td>
          <q-td key="quantity_shirt_x_large_folding_white" :props="props">
            {{ props.row.quantity_shirt_x_large_folding_white }}
          </q-td>
          <q-td key="shirt_x_large_folding_white" :props="props">
            {{ props.row.shirt_x_large_folding_white }}
          </q-td>
          <q-td key="quantity_shirt_x_large_hanging_white" :props="props">
            {{ props.row.quantity_shirt_x_large_hanging_white }}
          </q-td>
          <q-td key="shirt_x_large_hanging_white" :props="props">
            {{ props.row.shirt_x_large_hanging_white }}
          </q-td>
          <q-td key="quantity_shirt_big_folding_colored" :props="props">
            {{ props.row.quantity_shirt_big_folding_colored }}
          </q-td>
          <q-td key="shirt_big_folding_colored" :props="props">
            {{ props.row.shirt_big_folding_colored }}
          </q-td>
          <q-td key="quantity_shirt_big_hanging_colored" :props="props">
            {{ props.row.quantity_shirt_big_hanging_colored }}
          </q-td>
          <q-td key="shirt_big_hanging_colored" :props="props">
            {{ props.row.shirt_big_hanging_colored }}
          </q-td>
          <q-td key="quantity_shirt_big_folding_white" :props="props">
            {{ props.row.quantity_shirt_big_folding_white }}
          </q-td>
          <q-td key="shirt_big_folding_white" :props="props">
            {{ props.row.shirt_big_folding_white }}
          </q-td>
          <q-td key="quantity_shirt_big_hanging_white" :props="props">
            {{ props.row.quantity_shirt_big_hanging_white }}
          </q-td>
          <q-td key="shirt_big_hanging_white" :props="props">
            {{ props.row.shirt_big_hanging_white }}
          </q-td>
          <q-td key="quantity_shirt_children_folding_colored" :props="props">
            {{ props.row.quantity_shirt_children_folding_colored }}
          </q-td>
          <q-td key="shirt_children_folding_colored" :props="props">
            {{ props.row.shirt_children_folding_colored }}
          </q-td>
          <q-td key="quantity_shirt_children_hanging_colored" :props="props">
            {{ props.row.quantity_shirt_children_hanging_colored }}
          </q-td>
          <q-td key="shirt_children_hanging_colored" :props="props">
            {{ props.row.shirt_children_hanging_colored }}
          </q-td>
          <q-td key="quantity_shirt_children_folding_white" :props="props">
            {{ props.row.quantity_shirt_children_folding_white }}
          </q-td>
          <q-td key="shirt_children_folding_white" :props="props">
            {{ props.row.shirt_children_folding_white }}
          </q-td>
          <q-td key="quantity_plain_trouser_folding_colored" :props="props">
            {{ props.row.quantity_plain_trouser_folding_colored }}
          </q-td>
          <q-td key="plain_trouser_folding_colored" :props="props">
            {{ props.row.plain_trouser_folding_colored }}
          </q-td>
          <q-td key="quantity_plain_trouser_hanging_colored" :props="props">
            {{ props.row.quantity_plain_trouser_hanging_colored }}
          </q-td>
          <q-td key="plain_trouser_hanging_colored" :props="props">
            {{ props.row.plain_trouser_hanging_colored }}
          </q-td>
          <q-td key="quantity_plain_trouser_folding_white" :props="props">
            {{ props.row.quantity_plain_trouser_folding_white }}
          </q-td>
          <q-td key="plain_trouser_folding_white" :props="props">
            {{ props.row.plain_trouser_folding_white }}
          </q-td>
          <q-td key="quantity_plain_trouser_hanging_white" :props="props">
            {{ props.row.quantity_plain_trouser_hanging_white }}
          </q-td>
          <q-td key="plain_trouser_hanging_white" :props="props">
            {{ props.row.plain_trouser_hanging_white }}
          </q-td>
          <q-td
            key="quantity_jeans_chinos_trouser_folding_colored"
            :props="props"
          >
            {{ props.row.quantity_jeans_chinos_trouser_folding_colored }}
          </q-td>
          <q-td key="jeans_chinos_trouser_folding_colored" :props="props">
            {{ props.row.jeans_chinos_trouser_folding_colored }}
          </q-td>
          <q-td
            key="quantity_jeans_chinos_trouser_hanging_colored"
            :props="props"
          >
            {{ props.row.quantity_jeans_chinos_trouser_hanging_colored }}
          </q-td>
          <q-td key="jeans_chinos_trouser_hanging_colored" :props="props">
            {{ props.row.jeans_chinos_trouser_hanging_colored }}
          </q-td>
          <q-td
            key="quantity_jeans_chinos_trouser_folding_white"
            :props="props"
          >
            {{ props.row.quantity_jeans_chinos_trouser_folding_white }}
          </q-td>
          <q-td key="jeans_chinos_trouser_folding_white" :props="props">
            {{ props.row.jeans_chinos_trouser_folding_white }}
          </q-td>
          <q-td
            key="quantity_jeans_chinos_trouser_hanging_white"
            :props="props"
          >
            {{ props.row.quantity_jeans_chinos_trouser_hanging_white }}
          </q-td>
          <q-td key="jeans_chinos_trouser_hanging_white" :props="props">
            {{ props.row.jeans_chinos_trouser_hanging_white }}
          </q-td>
          <q-td key="quantity_waist_coat_hanging_colored" :props="props">
            {{ props.row.quantity_waist_coat_hanging_colored }}
          </q-td>
          <q-td key="waist_coat_hanging_colored" :props="props">
            {{ props.row.waist_coat_hanging_colored }}
          </q-td>
          <q-td key="quantity_waist_coat_hanging_white" :props="props">
            {{ props.row.quantity_waist_coat_hanging_white }}
          </q-td>
          <q-td key="waist_coat_hanging_white" :props="props">
            {{ props.row.waist_coat_hanging_white }}
          </q-td>
          <q-td key="quantity_tie_colored" :props="props">
            {{ props.row.quantity_tie_colored }}
          </q-td>
          <q-td key="tie_colored" :props="props">
            {{ props.row.tie_colored }}
          </q-td>
          <q-td key="quantity_tie_white" :props="props">
            {{ props.row.quantity_tie_white }}
          </q-td>
          <q-td key="tie_white" :props="props">
            {{ props.row.tie_white }}
          </q-td>
          <q-td key="quantity_shorts_folding_colored" :props="props">
            {{ props.row.quantity_shorts_folding_colored }}
          </q-td>
          <q-td key="shorts_folding_colored" :props="props">
            {{ props.row.shorts_folding_colored }}
          </q-td>
          <q-td key="quantity_shorts_hanging_colored" :props="props">
            {{ props.row.quantity_shorts_hanging_colored }}
          </q-td>
          <q-td key="shorts_hanging_colored" :props="props">
            {{ props.row.shorts_hanging_colored }}
          </q-td>
          <q-td key="quantity_shorts_folding_white" :props="props">
            {{ props.row.quantity_shorts_folding_white }}
          </q-td>
          <q-td key="shorts_folding_white" :props="props">
            {{ props.row.shorts_folding_white }}
          </q-td>
          <q-td key="quantity_shorts_hanging_white" :props="props">
            {{ props.row.quantity_shorts_hanging_white }}
          </q-td>
          <q-td key="shorts_hanging_white" :props="props">
            {{ props.row.shorts_hanging_white }}
          </q-td>
          <q-td key="quantity_singlet_colored" :props="props">
            {{ props.row.quantity_singlet_colored }}
          </q-td>
          <q-td key="singlet_colored" :props="props">
            {{ props.row.singlet_colored }}
          </q-td>
          <q-td key="quantity_singlet_white" :props="props">
            {{ props.row.quantity_singlet_white }}
          </q-td>
          <q-td key="singlet_white" :props="props">
            {{ props.row.singlet_white }}
          </q-td>
          <q-td key="quantity_boxer_colored" :props="props">
            {{ props.row.quantity_boxer_colored }}
          </q-td>
          <q-td key="boxer_colored" :props="props">
            {{ props.row.boxer_colored }}
          </q-td>
          <q-td key="quantity_boxer_white" :props="props">
            {{ props.row.quantity_boxer_white }}
          </q-td>
          <q-td key="boxer_white" :props="props">
            {{ props.row.boxer_white }}
          </q-td>

          <q-td key="quantity_male_2pcs_suit_hanging_colored" :props="props">
            {{ props.row.quantity_male_2pcs_suit_hanging_colored }}
          </q-td>
          <q-td key="male_2pcs_suit_hanging_colored" :props="props">
            {{ props.row.male_2pcs_suit_hanging_colored }}
          </q-td>
          <q-td key="quantity_male_2pcs_suit_hanging_white" :props="props">
            {{ props.row.quantity_male_2pcs_suit_hanging_white }}
          </q-td>
          <q-td key="male_2pcs_suit_hanging_white" :props="props">
            {{ props.row.male_2pcs_suit_hanging_white }}
          </q-td>
          <q-td key="quantity_male_3pcs_suit_hanging_colored" :props="props">
            {{ props.row.quantity_male_3pcs_suit_hanging_colored }}
          </q-td>
          <q-td key="male_3pcs_suit_hanging_colored" :props="props">
            {{ props.row.male_3pcs_suit_hanging_colored }}
          </q-td>
          <q-td key="quantity_male_3pcs_suit_hanging_white" :props="props">
            {{ props.row.quantity_male_3pcs_suit_hanging_white }}
          </q-td>
          <q-td key="male_3pcs_suit_hanging_white" :props="props">
            {{ props.row.male_3pcs_suit_hanging_white }}
          </q-td>
          <q-td key="quantity_female_2pcs_suit_hanging_colored" :props="props">
            {{ props.row.quantity_female_2pcs_suit_hanging_colored }}
          </q-td>
          <q-td key="female_2pcs_suit_hanging_colored" :props="props">
            {{ props.row.female_2pcs_suit_hanging_colored }}
          </q-td>
          <q-td key="quantity_female_2pcs_suit_hanging_white" :props="props">
            {{ props.row.quantity_female_2pcs_suit_hanging_white }}
          </q-td>
          <q-td key="female_2pcs_suit_hanging_white" :props="props">
            {{ props.row.female_2pcs_suit_hanging_white }}
          </q-td>
          <q-td key="quantity_female_3pcs_suit_hanging_colored" :props="props">
            {{ props.row.quantity_female_3pcs_suit_hanging_colored }}
          </q-td>
          <q-td key="female_3pcs_suit_hanging_colored" :props="props">
            {{ props.row.female_3pcs_suit_hanging_colored }}
          </q-td>
          <q-td key="quantity_female_3pcs_suit_hanging_white" :props="props">
            {{ props.row.quantity_female_3pcs_suit_hanging_white }}
          </q-td>
          <q-td key="female_3pcs_suit_hanging_white" :props="props">
            {{ props.row.female_3pcs_suit_hanging_white }}
          </q-td>
          <q-td key="quantity_male_jacket_only_colored" :props="props">
            {{ props.row.quantity_male_jacket_only_colored }}
          </q-td>
          <q-td key="male_jacket_only_colored" :props="props">
            {{ props.row.male_jacket_only_colored }}
          </q-td>
          <q-td key="quantity_male_jacket_only_white" :props="props">
            {{ props.row.quantity_male_jacket_only_white }}
          </q-td>
          <q-td key="male_jacket_only_white" :props="props">
            {{ props.row.male_jacket_only_white }}
          </q-td>
          <q-td key="quantity_female_jacket_only_colored" :props="props">
            {{ props.row.quantity_female_jacket_only_colored }}
          </q-td>
          <q-td key="female_jacket_only_colored" :props="props">
            {{ props.row.female_jacket_only_colored }}
          </q-td>
          <q-td key="quantity_female_jacket_only_white" :props="props">
            {{ props.row.quantity_female_jacket_only_white }}
          </q-td>
          <q-td key="female_jacket_only_white" :props="props">
            {{ props.row.female_jacket_only_white }}
          </q-td>
          <q-td
            key="quantity_wedding_gown_small_and_little_accessories_white"
            :props="props"
          >
            {{
              props.row.quantity_wedding_gown_small_and_little_accessories_white
            }}
          </q-td>
          <q-td
            key="wedding_gown_small_and_little_accessories_white"
            :props="props"
          >
            {{ props.row.wedding_gown_small_and_little_accessories_white }}
          </q-td>
          <q-td
            key="quantity_wedding_gown_big_and_plenty_accessories_white"
            :props="props"
          >
            {{
              props.row.quantity_wedding_gown_big_and_plenty_accessories_white
            }}
          </q-td>
          <q-td
            key="wedding_gown_big_and_plenty_accessories_white"
            :props="props"
          >
            {{ props.row.wedding_gown_big_and_plenty_accessories_white }}
          </q-td>
          <q-td key="quantity_Kids_blouse_folding_colored" :props="props">
            {{ props.row.quantity_Kids_blouse_folding_colored }}
          </q-td>
          <q-td key="Kids_blouse_folding_colored" :props="props">
            {{ props.row.Kids_blouse_folding_colored }}
          </q-td>
          <q-td key="quantity_Kids_blouse_hanging_colored" :props="props">
            {{ props.row.quantity_Kids_blouse_hanging_colored }}
          </q-td>
          <q-td key="Kids_blouse_hanging_colored" :props="props">
            {{ props.row.Kids_blouse_hanging_colored }}
          </q-td>
          <q-td key="quantity_Kids_blouse_folding_white" :props="props">
            {{ props.row.quantity_Kids_blouse_folding_white }}
          </q-td>
          <q-td key="Kids_blouse_folding_white" :props="props">
            {{ props.row.Kids_blouse_folding_white }}
          </q-td>
          <q-td key="quantity_Kids_blouse_hanging_white" :props="props">
            {{ props.row.quantity_Kids_blouse_hanging_white }}
          </q-td>
          <q-td key="Kids_blouse_hanging_white" :props="props">
            {{ props.row.Kids_blouse_hanging_white }}
          </q-td>
          <q-td key="quantity_jalamia_colored" :props="props">
            {{ props.row.quantity_jalamia_colored }}
          </q-td>
          <q-td key="jalamia_colored" :props="props">
            {{ props.row.jalamia_colored }}
          </q-td>
          <q-td key="quantity_jalamia_white" :props="props">
            {{ props.row.quantity_jalamia_white }}
          </q-td>
          <q-td key="jalamia_white" :props="props">
            {{ props.row.jalamia_white }}
          </q-td>
          <q-td key="quantity_camisole_colored" :props="props">
            {{ props.row.quantity_camisole_colored }}
          </q-td>
          <q-td key="camisole_colored" :props="props">
            {{ props.row.camisole_colored }}
          </q-td>
          <q-td key="quantity_camisole_white" :props="props">
            {{ props.row.quantity_camisole_white }}
          </q-td>
          <q-td key="camisole_white" :props="props">
            {{ props.row.camisole_white }}
          </q-td>
          <q-td key="quantity_wrapper_buba_scarf_colored" :props="props">
            {{ props.row.quantity_wrapper_buba_scarf_colored }}
          </q-td>
          <q-td key="wrapper_buba_scarf_colored" :props="props">
            {{ props.row.wrapper_buba_scarf_colored }}
          </q-td>
          <q-td key="quantity_wrapper_buba_scarf_white" :props="props">
            {{ props.row.quantity_wrapper_buba_scarf_white }}
          </q-td>
          <q-td key="wrapper_buba_scarf_white" :props="props">
            {{ props.row.wrapper_buba_scarf_white }}
          </q-td>
          <q-td key="quantity_wrapper_buba_no_scarf_colored" :props="props">
            {{ props.row.quantity_wrapper_buba_no_scarf_colored }}
          </q-td>
          <q-td key="wrapper_buba_no_scarf_colored" :props="props">
            {{ props.row.wrapper_buba_no_scarf_colored }}
          </q-td>
          <q-td key="quantity_wrapper_buba_no_scarf_white" :props="props">
            {{ props.row.quantity_wrapper_buba_no_scarf_white }}
          </q-td>
          <q-td key="wrapper_buba_no_scarf_white" :props="props">
            {{ props.row.wrapper_buba_no_scarf_white }}
          </q-td>
          <q-td key="quantity_wrapper_only_colored" :props="props">
            {{ props.row.quantity_wrapper_only_colored }}
          </q-td>
          <q-td key="wrapper_only_colored" :props="props">
            {{ props.row.wrapper_only_colored }}
          </q-td>
          <q-td key="quantity_wrapper_only_white" :props="props">
            {{ props.row.quantity_wrapper_only_white }}
          </q-td>
          <q-td key="wrapper_only_white" :props="props">
            {{ props.row.wrapper_only_white }}
          </q-td>
          <q-td
            key="quantity_two_wrapper_scarf_or_no_scarf_colored"
            :props="props"
          >
            {{ props.row.quantity_two_wrapper_scarf_or_no_scarf_colored }}
          </q-td>
          <q-td key="two_wrapper_scarf_or_no_scarf_colored" :props="props">
            {{ props.row.two_wrapper_scarf_or_no_scarf_colored }}
          </q-td>
          <q-td
            key="quantity_two_wrapper_scarf_or_no_scarf_white"
            :props="props"
          >
            {{ props.row.quantity_two_wrapper_scarf_or_no_scarf_white }}
          </q-td>
          <q-td key="two_wrapper_scarf_or_no_scarf_white" :props="props">
            {{ props.row.two_wrapper_scarf_or_no_scarf_white }}
          </q-td>
          <q-td key="quantity_aso_oke_agbada_and_cap_colored" :props="props">
            {{ props.row.quantity_aso_oke_agbada_and_cap_colored }}
          </q-td>
          <q-td key="aso_oke_agbada_and_cap_colored" :props="props">
            {{ props.row.aso_oke_agbada_and_cap_colored }}
          </q-td>
          <q-td key="quantity_male_aso_oke_and_cap_3pcs_colored" :props="props">
            {{ props.row.quantity_male_aso_oke_and_cap_3pcs_colored }}
          </q-td>
          <q-td key="male_aso_oke_and_cap_3pcs_colored" :props="props">
            {{ props.row.male_aso_oke_and_cap_3pcs_colored }}
          </q-td>
          <q-td key="quantity_aso_oke_wrapper_buba_gele_colored" :props="props">
            {{ props.row.quantity_aso_oke_wrapper_buba_gele_colored }}
          </q-td>
          <q-td key="aso_oke_wrapper_buba_gele_colored" :props="props">
            {{ props.row.aso_oke_wrapper_buba_gele_colored }}
          </q-td>
          <q-td key="quantity_aso_oke_wrapper_gele_colored" :props="props">
            {{ props.row.quantity_aso_oke_wrapper_gele_colored }}
          </q-td>
          <q-td key="aso_oke_wrapper_gele_colored" :props="props">
            {{ props.row.aso_oke_wrapper_gele_colored }}
          </q-td>
          <q-td
            key="quantity_aso_oke_wrapper_gele_ipele_colored"
            :props="props"
          >
            {{ props.row.quantity_aso_oke_wrapper_gele_ipele_colored }}
          </q-td>
          <q-td key="aso_oke_wrapper_gele_ipele_colored" :props="props">
            {{ props.row.aso_oke_wrapper_gele_ipele_colored }}
          </q-td>
          <q-td key="quantity_aso_oke_wrapper_gele_ipele_white" :props="props">
            {{ props.row.quantity_aso_oke_wrapper_gele_ipele_white }}
          </q-td>
          <q-td key="aso_oke_wrapper_gele_ipele_white" :props="props">
            {{ props.row.aso_oke_wrapper_gele_ipele_white }}
          </q-td>
          <q-td key="quantity_aso_oke_headtie_ipele_colored" :props="props">
            {{ props.row.quantity_aso_oke_headtie_ipele_colored }}
          </q-td>
          <q-td key="aso_oke_headtie_ipele_colored" :props="props">
            {{ props.row.aso_oke_headtie_ipele_colored }}
          </q-td>
          <q-td key="quantity_male_complete_aso_oke_white" :props="props">
            {{ props.row.quantity_male_complete_aso_oke_white }}
          </q-td>
          <q-td key="male_complete_aso_oke_white" :props="props">
            {{ props.row.male_complete_aso_oke_white }}
          </q-td>
          <q-td key="quantity_female_complete_aso_oke_white" :props="props">
            {{ props.row.quantity_female_complete_aso_oke_white }}
          </q-td>
          <q-td key="female_complete_aso_oke_white" :props="props">
            {{ props.row.female_complete_aso_oke_white }}
          </q-td>
          <q-td key="quantity_female_inner_wear_colored" :props="props">
            {{ props.row.quantity_female_inner_wear_colored }}
          </q-td>
          <q-td key="female_inner_wear_colored" :props="props">
            {{ props.row.female_inner_wear_colored }}
          </q-td>
          <q-td key="quantity_female_inner_wear_white" :props="props">
            {{ props.row.quantity_female_inner_wear_white }}
          </q-td>
          <q-td key="female_inner_wear_white" :props="props">
            {{ props.row.female_inner_wear_white }}
          </q-td>
          <q-td key="quantity_head_tie_gele_colored" :props="props">
            {{ props.row.quantity_head_tie_gele_colored }}
          </q-td>
          <q-td key="head_tie_gele_colored" :props="props">
            {{ props.row.head_tie_gele_colored }}
          </q-td>
          <q-td key="quantity_head_tie_gele_white" :props="props">
            {{ props.row.quantity_head_tie_gele_white }}
          </q-td>
          <q-td key="head_tie_gele_white" :props="props">
            {{ props.row.head_tie_gele_white }}
          </q-td>
          <q-td key="quantity_gown_children_colored" :props="props">
            {{ props.row.quantity_gown_children_colored }}
          </q-td>
          <q-td key="gown_children_colored" :props="props">
            {{ props.row.gown_children_colored }}
          </q-td>
          <q-td key="quantity_gown_children_white" :props="props">
            {{ props.row.quantity_gown_children_white }}
          </q-td>
          <q-td key="gown_children_white" :props="props">
            {{ props.row.gown_children_white }}
          </q-td>
          <q-td
            key="quantity_gown_english_adult_folding_colored"
            :props="props"
          >
            {{ props.row.quantity_gown_english_adult_folding_colored }}
          </q-td>
          <q-td key="gown_english_adult_folding_colored" :props="props">
            {{ props.row.gown_english_adult_folding_colored }}
          </q-td>
          <q-td key="quantity_gown_english_adult_folding_white" :props="props">
            {{ props.row.quantity_gown_english_adult_folding_white }}
          </q-td>
          <q-td key="gown_english_adult_folding_white" :props="props">
            {{ props.row.gown_english_adult_folding_white }}
          </q-td>
          <q-td
            key="quantity_gown_english_adult_hanging_colored"
            :props="props"
          >
            {{ props.row.quantity_gown_english_adult_hanging_colored }}
          </q-td>
          <q-td key="gown_english_adult_hanging_colored" :props="props">
            {{ props.row.gown_english_adult_hanging_colored }}
          </q-td>
          <q-td key="quantity_gown_english_adult_hanging_white" :props="props">
            {{ props.row.quantity_gown_english_adult_hanging_white }}
          </q-td>
          <q-td key="gown_english_adult_hanging_white" :props="props">
            {{ props.row.gown_english_adult_hanging_white }}
          </q-td>
          <q-td key="quantity_gown_native_folding_colored" :props="props">
            {{ props.row.quantity_gown_native_folding_colored }}
          </q-td>
          <q-td key="gown_native_folding_colored" :props="props">
            {{ props.row.gown_native_folding_colored }}
          </q-td>
          <q-td key="quantity_gown_native_folding_white" :props="props">
            {{ props.row.quantity_gown_native_folding_white }}
          </q-td>
          <q-td key="gown_native_folding_white" :props="props">
            {{ props.row.gown_native_folding_white }}
          </q-td>
          <q-td
            key="quantity_skirt_and_blouse_english_hanging_colored"
            :props="props"
          >
            {{ props.row.quantity_skirt_and_blouse_english_hanging_colored }}
          </q-td>
          <q-td key="skirt_and_blouse_english_hanging_colored" :props="props">
            {{ props.row.skirt_and_blouse_english_hanging_colored }}
          </q-td>
          <q-td
            key="quantity_skirt_and_blouse_english_hanging_white"
            :props="props"
          >
            {{ props.row.quantity_skirt_and_blouse_english_hanging_white }}
          </q-td>
          <q-td key="skirt_and_blouse_english_hanging_white" :props="props">
            {{ props.row.skirt_and_blouse_english_hanging_white }}
          </q-td>
          <q-td
            key="quantity_skirt_and_blouse_native_folding_colored"
            :props="props"
          >
            {{ props.row.quantity_skirt_and_blouse_native_folding_colored }}
          </q-td>
          <q-td key="skirt_and_blouse_native_folding_colored" :props="props">
            {{ props.row.skirt_and_blouse_native_folding_colored }}
          </q-td>
          <q-td
            key="quantity_skirt_and_blouse_native_folding_white"
            :props="props"
          >
            {{ props.row.quantity_skirt_and_blouse_native_folding_white }}
          </q-td>
          <q-td key="skirt_and_blouse_native_folding_white" :props="props">
            {{ props.row.skirt_and_blouse_native_folding_white }}
          </q-td>
          <q-td
            key="quantity_female_native_buba_and_trouser_colored"
            :props="props"
          >
            {{ props.row.quantity_female_native_buba_and_trouser_colored }}
          </q-td>
          <q-td key="female_native_buba_and_trouser_colored" :props="props">
            {{ props.row.female_native_buba_and_trouser_colored }}
          </q-td>
          <q-td
            key="quantity_female_native_buba_and_trouser_white"
            :props="props"
          >
            {{ props.row.quantity_female_native_buba_and_trouser_white }}
          </q-td>
          <q-td key="female_native_buba_and_trouser_white" :props="props">
            {{ props.row.female_native_buba_and_trouser_white }}
          </q-td>
          <q-td key="quantity_male_cap_colored" :props="props">
            {{ props.row.quantity_male_cap_colored }}
          </q-td>
          <q-td key="male_cap_colored" :props="props">
            {{ props.row.male_cap_colored }}
          </q-td>
          <q-td key="quantity_male_cap_white" :props="props">
            {{ props.row.quantity_male_cap_white }}
          </q-td>
          <q-td key="male_cap_white" :props="props">
            {{ props.row.male_cap_white }}
          </q-td>
          <q-td key="quantity_female_cap_colored" :props="props">
            {{ props.row.quantity_female_cap_colored }}
          </q-td>
          <q-td key="female_cap_colored" :props="props">
            {{ props.row.female_cap_colored }}
          </q-td>
          <q-td key="quantity_female_cap_white" :props="props">
            {{ props.row.quantity_female_cap_white }}
          </q-td>
          <q-td key="female_cap_white" :props="props">
            {{ props.row.female_cap_white }}
          </q-td>
          <q-td key="quantity_turban_colored" :props="props">
            {{ props.row.quantity_turban_colored }}
          </q-td>
          <q-td key="turban_colored" :props="props">
            {{ props.row.turban_colored }}
          </q-td>
          <q-td key="quantity_turban_white" :props="props">
            {{ props.row.quantity_turban_white }}
          </q-td>
          <q-td key="turban_white" :props="props">
            {{ props.row.turban_white }}
          </q-td>
          <q-td key="quantity_sweater_small_colored" :props="props">
            {{ props.row.quantity_sweater_small_colored }}
          </q-td>
          <q-td key="sweater_small_colored" :props="props">
            {{ props.row.sweater_small_colored }}
          </q-td>
          <q-td key="quantity_sweater_small_white" :props="props">
            {{ props.row.quantity_sweater_small_white }}
          </q-td>
          <q-td key="sweater_small_white" :props="props">
            {{ props.row.sweater_small_white }}
          </q-td>
          <q-td key="quantity_sweater_normal_colored" :props="props">
            {{ props.row.quantity_sweater_normal_colored }}
          </q-td>
          <q-td key="sweater_normal_colored" :props="props">
            {{ props.row.sweater_normal_colored }}
          </q-td>
          <q-td key="quantity_sweater_normal_white" :props="props">
            {{ props.row.quantity_sweater_normal_white }}
          </q-td>
          <q-td key="sweater_normal_white" :props="props">
            {{ props.row.sweater_normal_white }}
          </q-td>
          <q-td key="quantity_sweater_big_colored" :props="props">
            {{ props.row.quantity_sweater_big_colored }}
          </q-td>
          <q-td key="sweater_big_colored" :props="props">
            {{ props.row.sweater_big_colored }}
          </q-td>
          <q-td key="quantity_sweater_big_white" :props="props">
            {{ props.row.quantity_sweater_big_white }}
          </q-td>
          <q-td key="sweater_big_white" :props="props">
            {{ props.row.sweater_big_white }}
          </q-td>
          <q-td key="quantity_towel_small_colored" :props="props">
            {{ props.row.quantity_towel_small_colored }}
          </q-td>
          <q-td key="towel_small_colored" :props="props">
            {{ props.row.towel_small_colored }}
          </q-td>
          <q-td key="quantity_towel_small_white" :props="props">
            {{ props.row.quantity_towel_small_white }}
          </q-td>
          <q-td key="towel_small_white" :props="props">
            {{ props.row.towel_small_white }}
          </q-td>
          <q-td key="quantity_towel_normal_colored" :props="props">
            {{ props.row.quantity_towel_normal_colored }}
          </q-td>
          <q-td key="towel_normal_colored" :props="props">
            {{ props.row.towel_normal_colored }}
          </q-td>
          <q-td key="quantity_towel_normal_white" :props="props">
            {{ props.row.quantity_towel_normal_white }}
          </q-td>
          <q-td key="towel_normal_white" :props="props">
            {{ props.row.towel_normal_white }}
          </q-td>
          <q-td key="quantity_towel_big_colored" :props="props">
            {{ props.row.quantity_towel_big_colored }}
          </q-td>
          <q-td key="towel_big_colored" :props="props">
            {{ props.row.towel_big_colored }}
          </q-td>
          <q-td key="quantity_towel_big_white" :props="props">
            {{ props.row.quantity_towel_big_white }}
          </q-td>
          <q-td key="towel_big_white" :props="props">
            {{ props.row.towel_big_white }}
          </q-td>
          <q-td key="quantity_bed_spread_normal_colored" :props="props">
            {{ props.row.quantity_bed_spread_normal_colored }}
          </q-td>
          <q-td key="bed_spread_normal_colored" :props="props">
            {{ props.row.bed_spread_normal_colored }}
          </q-td>
          <q-td key="quantity_bed_spread_normal_white" :props="props">
            {{ props.row.quantity_bed_spread_normal_white }}
          </q-td>
          <q-td key="bed_spread_normal_white" :props="props">
            {{ props.row.bed_spread_normal_white }}
          </q-td>
          <q-td key="quantity_bed_spread_big_colored" :props="props">
            {{ props.row.quantity_bed_spread_big_colored }}
          </q-td>
          <q-td key="bed_spread_big_colored" :props="props">
            {{ props.row.bed_spread_big_colored }}
          </q-td>
          <q-td key="quantity_bed_spread_big_white" :props="props">
            {{ props.row.quantity_bed_spread_big_white }}
          </q-td>
          <q-td key="bed_spread_big_white" :props="props">
            {{ props.row.bed_spread_big_white }}
          </q-td>
          <q-td key="quantity_bed_spread_double_colored" :props="props">
            {{ props.row.quantity_bed_spread_double_colored }}
          </q-td>
          <q-td key="bed_spread_double_colored" :props="props">
            {{ props.row.bed_spread_double_colored }}
          </q-td>
          <q-td key="quantity_bed_spread_double_white" :props="props">
            {{ props.row.quantity_bed_spread_double_white }}
          </q-td>
          <q-td key="bed_spread_double_white" :props="props">
            {{ props.row.bed_spread_double_white }}
          </q-td>
          <q-td key="quantity_duvet_normal_colored" :props="props">
            {{ props.row.quantity_duvet_normal_colored }}
          </q-td>
          <q-td key="duvet_normal_colored" :props="props">
            {{ props.row.duvet_normal_colored }}
          </q-td>
          <q-td key="quantity_duvet_normal_white" :props="props">
            {{ props.row.quantity_duvet_normal_white }}
          </q-td>
          <q-td key="duvet_normal_white" :props="props">
            {{ props.row.duvet_normal_white }}
          </q-td>
          <q-td key="quantity_duvet_big_colored" :props="props">
            {{ props.row.quantity_duvet_big_colored }}
          </q-td>
          <q-td key="duvet_big_colored" :props="props">
            {{ props.row.duvet_big_colored }}
          </q-td>
          <q-td key="quantity_duvet_big_white" :props="props">
            {{ props.row.quantity_duvet_big_white }}
          </q-td>
          <q-td key="duvet_big_white" :props="props">
            {{ props.row.duvet_big_white }}
          </q-td>
          <q-td key="quantity_curtain_normal_colored" :props="props">
            {{ props.row.quantity_curtain_normal_colored }}
          </q-td>
          <q-td key="curtain_normal_colored" :props="props">
            {{ props.row.curtain_normal_colored }}
          </q-td>
          <q-td key="quantity_curtain_big_colored" :props="props">
            {{ props.row.quantity_curtain_big_colored }}
          </q-td>
          <q-td key="curtain_big_colored" :props="props">
            {{ props.row.curtain_big_colored }}
          </q-td>
          <q-td key="quantity_curtain_very_big_colored" :props="props">
            {{ props.row.quantity_curtain_very_big_colored }}
          </q-td>
          <q-td key="curtain_very_big_colored" :props="props">
            {{ props.row.curtain_very_big_colored }}
          </q-td>
          <q-td key="quantity_pyjamas_small_colored" :props="props">
            {{ props.row.quantity_pyjamas_small_colored }}
          </q-td>
          <q-td key="pyjamas_small_colored" :props="props">
            {{ props.row.pyjamas_small_colored }}
          </q-td>
          <q-td key="quantity_pyjamas_small_white" :props="props">
            {{ props.row.quantity_pyjamas_small_white }}
          </q-td>
          <q-td key="pyjamas_small_white" :props="props">
            {{ props.row.pyjamas_small_white }}
          </q-td>
          <q-td key="quantity_pyjamas_big_colored" :props="props">
            {{ props.row.quantity_pyjamas_big_colored }}
          </q-td>
          <q-td key="pyjamas_big_colored" :props="props">
            {{ props.row.pyjamas_big_colored }}
          </q-td>
          <q-td key="quantity_pyjamas_big_white" :props="props">
            {{ props.row.quantity_pyjamas_big_white }}
          </q-td>
          <q-td key="pyjamas_big_white" :props="props">
            {{ props.row.pyjamas_big_white }}
          </q-td>
          <q-td key="quantity_blanket_colored" :props="props">
            {{ props.row.quantity_blanket_colored }}
          </q-td>
          <q-td key="blanket_colored" :props="props">
            {{ props.row.blanket_colored }}
          </q-td>
          <q-td key="quantity_pillow_cases_colored" :props="props">
            {{ props.row.quantity_pillow_cases_colored }}
          </q-td>
          <q-td key="pillow_cases_colored" :props="props">
            {{ props.row.pillow_cases_colored }}
          </q-td>
          <q-td key="quantity_pillow_cases_white" :props="props">
            {{ props.row.quantity_pillow_cases_white }}
          </q-td>
          <q-td key="pillow_cases_white" :props="props">
            {{ props.row.pillow_cases_white }}
          </q-td> -->
          <q-td key="comment_section" :props="props">
            {{ props.row.comment_section }}
          </q-td>
          <q-td key="discount" :props="props">
            {{ props.row.discount }}
          </q-td>
          <q-td key="addon" :props="props">
            {{ props.row.addon }}
          </q-td>
          <q-td key="addon_amount" :props="props">
            {{ props.row.addon_amount }}
          </q-td>
          <q-td key="deposit" :props="props">
            {{ props.row.deposit }}
          </q-td>
          <q-td key="deposit_type" :props="props">
            {{ props.row.deposit_type }}
          </q-td>
          <q-td key="balance" :props="props">
            {{ props.row.balance }}
          </q-td>
          <q-td key="final_amount" :props="props">
            {{ props.row.final_amount }}
          </q-td>
          <q-td key="customer_collected" :props="props">
            {{ props.row.customer_collected }}
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

    <div class="text-right full-width q-pl-md">
      <q-btn
        v-if="pagination.page > 1"
        rounded
        color="secondary"
        label="Previous Page"
        @click="handlePreviousPage"
      />
      <q-btn
        v-if="pageEnd == true"
        rounded
        color="primary"
        label="Next Page"
        @click="handleNextPage"
      />
    </div>

    <q-dialog v-model="moreDetails">
      <div class="my-card-2 text-primary">
        <q-card>
          <q-card-section>
            <div
              class="row q-pt-sm"
              v-for="(value, key) in dataMore"
              :key="key"
            >
              <div class="col-12 col-md-7 q-pl-md">
                <div class="text-subtitle2 bg-teal-9 text-white">{{ key }}</div>
              </div>
              <div class="col-12 col-md-5 q-pl-md">
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
const pageEnd = ref(false);

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
    name: "quantity_male_native_2pcs_folding_colored",
    label: "Quantity Male Native 2 Pcs Folding-Colored",
    field: "quantity_male_native_2pcs_folding_colored",
  },
  {
    name: "male_native_2pcs_folding_colored",
    label: "Male Native 2 Pcs Folding-Colored",
    field: "male_native_2pcs_folding_colored",
  },
  {
    name: "quantity_male_native_2pcs_hanging_colored",
    label: "Quantity Male Native 2 Pcs Hanging-Colored",
    field: "quantity_male_native_2pcs_hanging_colored",
  },
  {
    name: "male_native_2pcs_hanging_colored",
    label: "Male Native 2 Pcs Hanging-Colored",
    field: "male_native_2pcs_hanging_colored",
  },
  {
    name: "quantity_male_native_2pcs_folding_white",
    label: "Quantity Male Native 2 Pcs Folding-White",
    field: "quantity_male_native_2pcs_folding_white",
  },
  {
    name: "male_native_2pcs_folding_white",
    label: "Male Native 2 Pcs Folding-White",
    field: "male_native_2pcs_folding_white",
  },
  {
    name: "quantity_male_native_2pcs_hanging_white",
    label: "Quantity Male Native 2 Pcs Hanging-White",
    field: "quantity_male_native_2pcs_hanging_white",
  },
  {
    name: "male_native_2pcs_hanging_white",
    label: "Male Native 2 Pcs Hanging-White",
    field: "male_native_2pcs_hanging_white",
  },
  {
    name: "quantity_male_native_3pcs_notAgbada_folding_colored",
    label: "Quantity Male Native 3 Pcs Not-Agbada Folding-Colored",
    field: "quantity_male_native_3pcs_notAgbada_folding_colored",
  },
  {
    name: "male_native_3pcs_notAgbada_folding_colored",
    label: "Male Native 3 Pcs Not-Agbada Folding-Colored",
    field: "male_native_3pcs_notAgbada_folding_colored",
  },
  {
    name: "quantity_male_native_3pcs_notAgbada_hanging_colored",
    label: "Quantity Male Native 3 Pcs Not-Agbada Hanging-Colored",
    field: "quantity_male_native_3pcs_notAgbada_hanging_colored",
  },
  {
    name: "male_native_3pcs_notAgbada_hanging_colored",
    label: "Male Native 3 Pcs Not-Agbada Hanging-Colored",
    field: "male_native_3pcs_notAgbada_hanging_colored",
  },
  {
    name: "quantity_male_native_3pcs_notAgbada_folding_white",
    label: "Quantity Male Native 3 Pcs Not-Agbada Folding-White",
    field: "quantity_male_native_3pcs_notAgbada_folding_white",
  },
  {
    name: "male_native_3pcs_notAgbada_folding_white",
    label: "Male Native 3 Pcs Not-Agbada Folding-White",
    field: "male_native_3pcs_notAgbada_folding_white",
  },
  {
    name: "quantity_male_native_3pcs_notAgbada_hanging_white",
    label: "Quantity Male Native 3 Pcs Not-Agbada Hanging-White",
    field: "quantity_male_native_3pcs_notAgbada_hanging_white",
  },
  {
    name: "male_native_3pcs_notAgbada_hanging_white",
    label: "Male Native 3 Pcs Not-Agbada Hanging-White",
    field: "male_native_3pcs_notAgbada_hanging_white",
  },
  {
    name: "quantity_native_top_only_folding_colored",
    label: "Quantity Native Top Only Folding-Colored",
    field: "quantity_native_top_only_folding_colored",
  },
  {
    name: "native_top_only_folding_colored",
    label: "Native Top Only Folding-Colored",
    field: "native_top_only_folding_colored",
  },
  {
    name: "quantity_native_top_only_hanging_colored",
    label: "Quantity Native Top Only Hanging-Colored",
    field: "quantity_native_top_only_hanging_colored",
  },
  {
    name: "native_top_only_hanging_colored",
    label: "Native Top Only Hanging-Colored",
    field: "native_top_only_hanging_colored",
  },
  {
    name: "quantity_native_top_only_folding_white",
    label: "Quantity Native Top Only Folding-White",
    field: "quantity_native_top_only_folding_white",
  },
  {
    name: "native_top_only_folding_white",
    label: "Native Top Only Folding-White",
    field: "native_top_only_folding_white",
  },
  {
    name: "quantity_native_top_only_hanging_white",
    label: "Quantity Native Top Only Hanging-White",
    field: "quantity_native_top_only_hanging_white",
  },
  {
    name: "native_top_only_hanging_white",
    label: "Native Top Only Hanging-White",
    field: "native_top_only_hanging_white",
  },
  {
    name: "quantity_native_trouser_only_folding_colored",
    label: "Quantity Native Trouser Only Folding-Colored",
    field: "quantity_native_trouser_only_folding_colored",
  },
  {
    name: "native_trouser_only_folding_colored",
    label: "Native Trouser Only Folding-Colored",
    field: "native_trouser_only_folding_colored",
  },
  {
    name: "quantity_native_trouser_only_hanging_colored",
    label: "Quantity Native Trouser Only Hanging-Colored",
    field: "quantity_native_trouser_only_hanging_colored",
  },
  {
    name: "native_trouser_only_hanging_colored",
    label: "Native Trouser Only Hanging-Colored",
    field: "native_trouser_only_hanging_colored",
  },
  {
    name: "quantity_native_trouser_only_folding_white",
    label: "Quantity Native Trouser Only Folding-White",
    field: "quantity_native_trouser_only_folding_white",
  },
  {
    name: "native_trouser_only_folding_white",
    label: "Native Trouser Only Folding-White",
    field: "native_trouser_only_folding_white",
  },
  {
    name: "quantity_native_trouser_only_hanging_white",
    label: "Quantity Native Trouser Only Hanging-White",
    field: "quantity_native_trouser_only_hanging_white",
  },
  {
    name: "native_trouser_only_hanging_white",
    label: "Native Trouser Only Hanging-White",
    field: "native_trouser_only_hanging_white",
  },
  {
    name: "quantity_male_agbada_only_folding_colored",
    label: "Quantity Agbada Only Folding-Colored",
    field: "quantity_male_agbada_only_folding_colored",
  },
  {
    name: "male_agbada_only_folding_colored",
    label: "Agbada Only Folding-Colored",
    field: "male_agbada_only_folding_colored",
  },
  {
    name: "quantity_male_agbada_only_hanging_colored",
    label: "Quantity Agbada Only Hanging-Colored",
    field: "quantity_male_agbada_only_hanging_colored",
  },
  {
    name: "male_agbada_only_hanging_colored",
    label: "Agbada Only Hanging-Colored",
    field: "male_agbada_only_hanging_colored",
  },
  {
    name: "quantity_male_agbada_only_folding_white",
    label: "Quantity Agbada Only Folding-White",
    field: "quantity_male_agbada_only_folding_white",
  },
  {
    name: "male_agbada_only_folding_white",
    label: "Agbada Only Folding-White",
    field: "male_agbada_only_folding_white",
  },
  {
    name: "quantity_male_agbada_only_hanging_white",
    label: "Quantity Agbada Only Hanging-White",
    field: "quantity_male_agbada_only_hanging_white",
  },
  {
    name: "male_agbada_only_hanging_white",
    label: "Agbada Only Hanging-White",
    field: "male_agbada_only_hanging_white",
  },
  {
    name: "quantity_complete_male_agbada_3pcs_Folding_colored",
    label: "Quantity Complete Male Agbada 3 Pcs Hanging-Colored",
    field: "quantity_complete_male_agbada_3pcs_Folding_colored",
  },
  {
    name: "complete_male_agbada_3pcs_Folding_colored",
    label: "Complete Male Agbada 3 Pcs Hanging-Colored",
    field: "complete_male_agbada_3pcs_Folding_colored",
  },
  {
    name: "quantity_complete_male_agbada_3pcs_Hanging_colored",
    label: "Quantity Complete Male Agbada 3 Pcs Hanging-Colored",
    field: "quantity_complete_male_agbada_3pcs_Hanging_colored",
  },
  {
    name: "complete_male_agbada_3pcs_Hanging_colored",
    label: "Complete Male Agbada 3 Pcs Hanging-Colored",
    field: "complete_male_agbada_3pcs_Hanging_colored",
  },
  {
    name: "quantity_complete_male_agbada_3pcs_Folding_white",
    label: "Quantity Complete Male Agbada 3 Pcs Hanging-White",
    field: "quantity_complete_male_agbada_3pcs_Folding_white",
  },
  {
    name: "complete_male_agbada_3pcs_Folding_white",
    label: "Complete Male Agbada 3 Pcs Hanging-White",
    field: "complete_male_agbada_3pcs_Folding_white",
  },
  {
    name: "quantity_complete_male_agbada_3pcs_Hanging_white",
    label: "Quantity Complete Male Agbada 3 Pcs Hanging-White",
    field: "quantity_complete_male_agbada_3pcs_Hanging_white",
  },
  {
    name: "complete_male_agbada_3pcs_Hanging_white",
    label: "Complete Male Agbada 3 Pcs Hanging-White",
    field: "complete_male_agbada_3pcs_Hanging_white",
  },
  {
    name: "quantity_normal_shirt_folding_colored",
    label: "Quantity Shirt Folding-Colored",
    field: "quantity_normal_shirt_folding_colored",
  },
  {
    name: "normal_shirt_folding_colored",
    label: "Shirt Folding-Colored",
    field: "normal_shirt_folding_colored",
  },
  {
    name: "quantity_normal_shirt_hanging_colored",
    label: "Quantity Shirt Hanging-Colored",
    field: "quantity_normal_shirt_hanging_colored",
  },
  {
    name: "normal_shirt_hanging_colored",
    label: "Shirt Hanging-Colored",
    field: "normal_shirt_hanging_colored",
  },
  {
    name: "quantity_normal_shirt_folding_white",
    label: "Quantity Shirt Folding-White",
    field: "quantity_normal_shirt_folding_white",
  },
  {
    name: "normal_shirt_folding_white",
    label: "Shirt Folding-White",
    field: "normal_shirt_folding_white",
  },
  {
    name: "quantity_normal_shirt_hanging_white",
    label: "Quantity Shirt Hanging-White",
    field: "quantity_normal_shirt_hanging_white",
  },
  {
    name: "normal_shirt_hanging_white",
    label: "Shirt Hanging-White",
    field: "normal_shirt_hanging_white",
  },
  {
    name: "quantity_shirt_big_folding_colored",
    label: "Quantity Shirt Big Folding-Colored",
    field: "quantity_shirt_big_folding_colored",
  },
  {
    name: "shirt_big_folding_colored",
    label: "Shirt Big Folding-Colored",
    field: "shirt_big_folding_colored",
  },
  {
    name: "quantity_shirt_big_hanging_colored",
    label: "Quantity Shirt Big Hanging-Colored",
    field: "quantity_shirt_big_hanging_colored",
  },
  {
    name: "shirt_big_hanging_colored",
    label: "Shirt Big Hanging-Colored",
    field: "shirt_big_hanging_colored",
  },
  {
    name: "quantity_shirt_big_folding_white",
    label: "Quantity Shirt Big Folding-White",
    field: "quantity_shirt_big_folding_white",
  },
  {
    name: "shirt_big_folding_white",
    label: "Shirt Big Folding-White",
    field: "shirt_big_folding_white",
  },
  {
    name: "quantity_shirt_big_hanging_white",
    label: "Quantity Shirt Big Hanging-White",
    field: "quantity_shirt_big_hanging_white",
  },
  {
    name: "shirt_big_hanging_white",
    label: "Shirt Big Hanging-White",
    field: "shirt_big_hanging_white",
  },
  {
    name: "quantity_shirt_x_large_folding_colored",
    label: "Quantity Shirt XLarge Folding-Colored",
    field: "quantity_shirt_x_large_folding_colored",
  },
  {
    name: "shirt_x_large_folding_colored",
    label: "Shirt XLarge Folding-Colored",
    field: "shirt_x_large_folding_colored",
  },
  {
    name: "quantity_shirt_x_large_hanging_colored",
    label: "Quantity Shirt XLarge Hanging-Colored",
    field: "quantity_shirt_x_large_hanging_colored",
  },
  {
    name: "shirt_x_large_hanging_colored",
    label: "Shirt XLarge Hanging-Colored",
    field: "shirt_x_large_hanging_colored",
  },
  {
    name: "quantity_shirt_x_large_folding_white",
    label: "Quantity Shirt XLarge Folding-White",
    field: "quantity_shirt_x_large_folding_white",
  },
  {
    name: "shirt_x_large_folding_white",
    label: "Shirt XLarge Folding-White",
    field: "shirt_x_large_folding_white",
  },
  {
    name: "quantity_shirt_x_large_hanging_white",
    label: "Quantity Shirt XLarge Hanging-White",
    field: "quantity_shirt_x_large_hanging_white",
  },
  {
    name: "shirt_x_large_hanging_white",
    label: "Shirt XLarge Hanging-White",
    field: "shirt_x_large_hanging_white",
  },
  {
    name: "quantity_shirt_children_folding_colored",
    label: "Quantity Shirt Children Folding-Colored",
    field: "quantity_shirt_children_folding_colored",
  },
  {
    name: "shirt_children_folding_colored",
    label: "Shirt Children Folding-Colored",
    field: "shirt_children_folding_colored",
  },
  {
    name: "quantity_shirt_children_hanging_colored",
    label: "Quantity Shirt Children Hanging-Colored",
    field: "quantity_shirt_children_hanging_colored",
  },
  {
    name: "shirt_children_hanging_colored",
    label: "Shirt Children Hanging-Colored",
    field: "shirt_children_hanging_colored",
  },
  {
    name: "quantity_shirt_children_folding_white",
    label: "Quantity Shirt Children Folding-White",
    field: "quantity_shirt_children_folding_white",
  },
  {
    name: "shirt_children_folding_white",
    label: "Shirt Children Folding-White",
    field: "shirt_children_folding_white",
  },
  {
    name: "quantity_shirt_children_hanging_white",
    label: "Quantity Shirt Children Hanging-White",
    field: "quantity_shirt_children_hanging_white",
  },
  {
    name: "shirt_children_hanging_white",
    label: "Shirt Children Hanging-White",
    field: "shirt_children_hanging_white",
  },
  {
    name: "quantity_blouse_folding_colored",
    label: "Quantity Blouse Folding-Colored",
    field: "quantity_blouse_folding_colored",
  },
  {
    name: "blouse_folding_colored",
    label: "Blouse Folding-Colored",
    field: "blouse_folding_colored",
  },
  {
    name: "quantity_blouse_hanging_colored",
    label: "Quantity Blouse Hanging-Colored",
    field: "quantity_blouse_hanging_colored",
  },
  {
    name: "blouse_hanging_colored",
    label: "Blouse Hanging-Colored",
    field: "blouse_hanging_colored",
  },
  {
    name: "quantity_blouse_folding_white",
    label: "Quantity Blouse Folding-White",
    field: "quantity_blouse_folding_white",
  },
  {
    name: "blouse_folding_white",
    label: "Blouse Folding-White",
    field: "blouse_folding_white",
  },
  {
    name: "quantity_blouse_hanging_white",
    label: "Quantity Blouse Hanging-White",
    field: "quantity_blouse_hanging_white",
  },
  {
    name: "blouse_hanging_white",
    label: "Blouse Hanging-White",
    field: "blouse_hanging_white",
  },
  {
    name: "quantity_blouse_x_large_folding_colored",
    label: "Quantity Blouse XLarge Folding-Colored",
    field: "quantity_blouse_x_large_folding_colored",
  },
  {
    name: "blouse_x_large_folding_colored",
    label: "Blouse XLarge Folding-Colored",
    field: "blouse_x_large_folding_colored",
  },
  {
    name: "quantity_blouse_x_large_hanging_colored",
    label: "Quantity Blouse XLarge Hanging-Colored",
    field: "quantity_blouse_x_large_hanging_colored",
  },
  {
    name: "blouse_x_large_hanging_colored",
    label: "Blouse XLarge Hanging-Colored",
    field: "blouse_x_large_hanging_colored",
  },
  {
    name: "quantity_blouse_x_large_folding_white",
    label: "Quantity Blouse XLarge Folding-White",
    field: "quantity_blouse_x_large_folding_white",
  },
  {
    name: "blouse_x_large_folding_white",
    label: "Blouse XLarge Folding-White",
    field: "blouse_x_large_folding_white",
  },
  {
    name: "quantity_blouse_x_large_hanging_white",
    label: "Quantity Blouse XLarge Hanging-White",
    field: "quantity_blouse_x_large_hanging_white",
  },
  {
    name: "blouse_x_large_hanging_white",
    label: "Blouse XLarge Hanging-White",
    field: "blouse_x_large_hanging_white",
  },
  {
    name: "quantity_female_shirt_folding_colored",
    label: "Quantity Female Shirt Folding-Colored",
    field: "quantity_female_shirt_folding_colored",
  },
  {
    name: "female_shirt_folding_colored",
    label: "Female Shirt Folding-Colored",
    field: "female_shirt_folding_colored",
  },
  {
    name: "quantity_female_shirt_hanging_colored",
    label: "Quantity Female Shirt Hanging-Colored",
    field: "quantity_female_shirt_hanging_colored",
  },
  {
    name: "female_shirt_hanging_colored",
    label: "Female Shirt Hanging-Colored",
    field: "female_shirt_hanging_colored",
  },
  {
    name: "quantity_female_shirt_folding_white",
    label: "Quantity Female Shirt Folding-White",
    field: "quantity_female_shirt_folding_white",
  },
  {
    name: "female_shirt_folding_white",
    label: "Female Shirt Folding-White",
    field: "female_shirt_folding_white",
  },
  {
    name: "quantity_female_shirt_hanging_white",
    label: "Quantity Female Shirt Hanging-White",
    field: "quantity_female_shirt_hanging_white",
  },
  {
    name: "female_shirt_hanging_white",
    label: "Female Shirt Hanging-White",
    field: "female_shirt_hanging_white",
  },
  {
    name: "quantity_tshirt_polo_small_folding_colored",
    label: "Quantity TShirt/Polo Small Folding-Colored",
    field: "quantity_tshirt_polo_small_folding_colored",
  },
  {
    name: "tshirt_polo_small_folding_colored",
    label: "TShirt/Polo Small Folding-Colored",
    field: "tshirt_polo_small_folding_colored",
  },
  {
    name: "quantity_tshirt_polo_small_hanging_colored",
    label: "Quantity TShirt/Polo Small Hanging-Colored",
    field: "quantity_tshirt_polo_small_hanging_colored",
  },
  {
    name: "tshirt_polo_small_hanging_colored",
    label: "TShirt/Polo Small Hanging-Colored",
    field: "tshirt_polo_small_hanging_colored",
  },
  {
    name: "quantity_tshirt_polo_small_folding_white",
    label: "Quantity TShirt/Polo Small Folding-White",
    field: "quantity_tshirt_polo_small_folding_white",
  },
  {
    name: "tshirt_polo_small_folding_white",
    label: "TShirt/Polo Small Folding-White",
    field: "tshirt_polo_small_folding_white",
  },
  {
    name: "quantity_tshirt_polo_small_hanging_white",
    label: "Quantity TShirt/Polo Small Hanging-White",
    field: "quantity_tshirt_polo_small_hanging_white",
  },
  {
    name: "tshirt_polo_small_hanging_white",
    label: "TShirt/Polo Small Hanging-White",
    field: "tshirt_polo_small_hanging_white",
  },
  {
    name: "quantity_tshirt_polo_medium_folding_colored",
    label: "Quantity TShirt/Polo Medium Folding-Colored",
    field: "quantity_tshirt_polo_medium_folding_colored",
  },
  {
    name: "tshirt_polo_medium_folding_colored",
    label: "TShirt/Polo Medium Folding-Colored",
    field: "tshirt_polo_medium_folding_colored",
  },
  {
    name: "quantity_tshirt_polo_medium_hanging_colored",
    label: "Quantity TShirt/Polo Medium Hanging-Colored",
    field: "quantity_tshirt_polo_medium_hanging_colored",
  },
  {
    name: "tshirt_polo_medium_hanging_colored",
    label: "TShirt/Polo Medium Hanging-Colored",
    field: "tshirt_polo_medium_hanging_colored",
  },
  {
    name: "quantity_tshirt_polo_medium_folding_white",
    label: "Quantity TShirt/Polo Medium Folding-White",
    field: "quantity_tshirt_polo_medium_folding_white",
  },
  {
    name: "tshirt_polo_medium_folding_white",
    label: "TShirt/Polo Medium Folding-White",
    field: "tshirt_polo_medium_folding_white",
  },
  {
    name: "quantity_tshirt_polo_medium_hanging_white",
    label: "Quantity TShirt/Polo Medium Hanging-White",
    field: "quantity_tshirt_polo_medium_hanging_white",
  },
  {
    name: "tshirt_polo_medium_hanging_white",
    label: "TShirt/Polo Medium Hanging-White",
    field: "tshirt_polo_medium_hanging_white",
  },
  {
    name: "quantity_tshirt_polo_big_folding_colored",
    label: "Quantity TShirt/Polo Big Folding-Colored",
    field: "quantity_tshirt_polo_big_folding_colored",
  },
  {
    name: "tshirt_polo_big_folding_colored",
    label: "TShirt/Polo Big Folding-Colored",
    field: "tshirt_polo_big_folding_colored",
  },
  {
    name: "quantity_tshirt_polo_big_hanging_colored",
    label: "Quantity TShirt/Polo Big Hanging-Colored",
    field: "quantity_tshirt_polo_big_hanging_colored",
  },
  {
    name: "tshirt_polo_big_hanging_colored",
    label: "TShirt/Polo Big Hanging-Colored",
    field: "tshirt_polo_big_hanging_colored",
  },
  {
    name: "quantity_tshirt_polo_big_folding_white",
    label: "Quantity TShirt/Polo Big Folding-White",
    field: "quantity_tshirt_polo_big_folding_white",
  },
  {
    name: "tshirt_polo_big_folding_white",
    label: "TShirt/Polo Big Folding-White",
    field: "tshirt_polo_big_folding_white",
  },
  {
    name: "quantity_tshirt_polo_big_hanging_white",
    label: "Quantity TShirt/Polo Big Hanging-White",
    field: "quantity_tshirt_polo_big_hanging_white",
  },
  {
    name: "tshirt_polo_big_hanging_white",
    label: "TShirt/Polo Big Hanging-White",
    field: "tshirt_polo_big_hanging_white",
  },
  {
    name: "quantity_plain_trouser_folding_colored",
    label: "Quantity Trouser Folding-Colored",
    field: "quantity_plain_trouser_folding_colored",
  },
  {
    name: "plain_trouser_folding_colored",
    label: "Trouser Folding-Colored",
    field: "plain_trouser_folding_colored",
  },
  {
    name: "quantity_plain_trouser_hanging_colored",
    label: "Quantity Trouser Hanging-Colored",
    field: "quantity_plain_trouser_hanging_colored",
  },
  {
    name: "plain_trouser_hanging_colored",
    label: "Trouser Hanging-Colored",
    field: "plain_trouser_hanging_colored",
  },
  {
    name: "quantity_plain_trouser_folding_white",
    label: "Quantity Trouser Folding-White",
    field: "quantity_plain_trouser_folding_white",
  },
  {
    name: "plain_trouser_folding_white",
    label: "Trouser Folding-White",
    field: "plain_trouser_folding_white",
  },
  {
    name: "quantity_plain_trouser_hanging_white",
    label: "Quantity Trouser Hanging-White",
    field: "quantity_plain_trouser_hanging_white",
  },
  {
    name: "plain_trouser_hanging_white",
    label: "Trouser Hanging-White",
    field: "plain_trouser_hanging_white",
  },
  {
    name: "quantity_jeans_chinos_trouser_folding_colored",
    label: "Quantity Jeans/Chinos Trouser Folding-Colored",
    field: "quantity_jeans_chinos_trouser_folding_colored",
  },
  {
    name: "jeans_chinos_trouser_folding_colored",
    label: "Jeans/Chinos Trouser Folding-Colored",
    field: "jeans_chinos_trouser_folding_colored",
  },
  {
    name: "quantity_jeans_chinos_trouser_hanging_colored",
    label: "Quantity Jeans/Chinos Trouser Hanging-Colored",
    field: "quantity_jeans_chinos_trouser_hanging_colored",
  },
  {
    name: "jeans_chinos_trouser_hanging_colored",
    label: "Jeans/Chinos Trouser Hanging-Colored",
    field: "jeans_chinos_trouser_hanging_colored",
  },
  {
    name: "quantity_jeans_chinos_trouser_folding_white",
    label: "Quantity Jeans/Chinos Trouser Folding-White",
    field: "quantity_jeans_chinos_trouser_folding_white",
  },
  {
    name: "jeans_chinos_trouser_folding_white",
    label: "Jeans/Chinos Trouser Folding-White",
    field: "jeans_chinos_trouser_folding_white",
  },
  {
    name: "quantity_jeans_chinos_trouser_hanging_white",
    label: "Quantity Jeans/Chinos Trouser Hanging-White",
    field: "quantity_jeans_chinos_trouser_hanging_white",
  },
  {
    name: "jeans_chinos_trouser_hanging_white",
    label: "Jeans/Chinos Trouser Hanging-White",
    field: "jeans_chinos_trouser_hanging_white",
  },
  {
    name: "quantity_waist_coat_hanging_colored",
    label: "Quantity Waist Coat Hanging-Colored",
    field: "quantity_waist_coat_hanging_colored",
  },
  {
    name: "waist_coat_hanging_colored",
    label: "Waist Coat Hanging-Colored",
    field: "waist_coat_hanging_colored",
  },
  {
    name: "quantity_waist_coat_hanging_white",
    label: "Quantity Waist Coat Hanging-White",
    field: "quantity_waist_coat_hanging_white",
  },
  {
    name: "waist_coat_hanging_white",
    label: "Waist Coat Hanging-White",
    field: "waist_coat_hanging_white",
  },
  {
    name: "quantity_tie_colored",
    label: "Quantity Tie Colored",
    field: "quantity_tie_colored",
  },
  {
    name: "tie_colored",
    label: "Tie Colored",
    field: "tie_colored",
  },
  {
    name: "quantity_tie_white",
    label: "Quantity Tie White",
    field: "quantity_tie_white",
  },
  {
    name: "tie_white",
    label: "Tie White",
    field: "tie_white",
  },
  {
    name: "quantity_shorts_folding_colored",
    label: "Quantity Shorts Folding-Colored",
    field: "quantity_shorts_folding_colored",
  },
  {
    name: "shorts_folding_colored",
    label: "Shorts Folding-Colored",
    field: "shorts_folding_colored",
  },
  {
    name: "quantity_shorts_hanging_colored",
    label: "Quantity Shorts Hanging-Colored",
    field: "quantity_shorts_hanging_colored",
  },
  {
    name: "shorts_hanging_colored",
    label: "Shorts Hanging-Colored",
    field: "shorts_hanging_colored",
  },
  {
    name: "quantity_shorts_folding_white",
    label: "Quantity Shorts Folding-White",
    field: "quantity_shorts_folding_white",
  },
  {
    name: "shorts_folding_white",
    label: "Shorts Folding-White",
    field: "shorts_folding_white",
  },
  {
    name: "quantity_shorts_hanging_white",
    label: "Quantity Shorts Hanging-White",
    field: "quantity_shorts_hanging_white",
  },
  {
    name: "shorts_hanging_white",
    label: "Shorts Hanging-White",
    field: "shorts_hanging_white",
  },
  {
    name: "quantity_singlet_colored",
    label: "Quantity Singlet Colored",
    field: "quantity_singlet_colored",
  },
  {
    name: "singlet_colored",
    label: "Singlet Colored",
    field: "singlet_colored",
  },
  {
    name: "quantity_singlet_white",
    label: "Quantity Singlet White",
    field: "quantity_singlet_white",
  },
  {
    name: "singlet_white",
    label: "Singlet White",
    field: "singlet_white",
  },
  {
    name: "quantity_boxer_colored",
    label: "Quantity Boxer Colored",
    field: "quantity_boxer_colored",
  },
  {
    name: "boxer_colored",
    label: "Boxer Colored",
    field: "boxer_colored",
  },
  {
    name: "quantity_boxer_white",
    label: "Quantity Boxer White",
    field: "quantity_boxer_white",
  },
  {
    name: "boxer_white",
    label: "Boxer White",
    field: "boxer_white",
  },
  {
    name: "quantity_male_2pcs_suit_hanging_colored",
    label: "Quantity Male 2 Pcs Suit Hanging-Colored",
    field: "quantity_male_2pcs_suit_hanging_colored",
  },
  {
    name: "male_2pcs_suit_hanging_colored",
    label: "Male 2 Pcs Suit Hanging-Colored",
    field: "male_2pcs_suit_hanging_colored",
  },
  {
    name: "quantity_male_2pcs_suit_hanging_white",
    label: "Quantity Male 2 Pcs Suit Hanging-White",
    field: "quantity_male_2pcs_suit_hanging_white",
  },
  {
    name: "male_2pcs_suit_hanging_white",
    label: "Male 2 Pcs Suit Hanging-White",
    field: "male_2pcs_suit_hanging_white",
  },
  {
    name: "quantity_male_3pcs_suit_hanging_colored",
    label: "Quantity Male 3 Pcs Suit Hanging-Colored",
    field: "quantity_male_3pcs_suit_hanging_colored",
  },
  {
    name: "male_3pcs_suit_hanging_colored",
    label: "Male 3 Pcs Suit Hanging-Colored",
    field: "male_3pcs_suit_hanging_colored",
  },
  {
    name: "quantity_male_3pcs_suit_hanging_white",
    label: "Quantity Male 3 Pcs Suit Hanging-White",
    field: "quantity_male_3pcs_suit_hanging_white",
  },
  {
    name: "male_3pcs_suit_hanging_white",
    label: "Male 3 Pcs Suit Hanging-White",
    field: "male_3pcs_suit_hanging_white",
  },
  {
    name: "quantity_female_2pcs_suit_hanging_colored",
    label: "Quantity Female 2 Pcs Suit Hanging-Colored",
    field: "quantity_female_2pcs_suit_hanging_colored",
  },
  {
    name: "female_2pcs_suit_hanging_colored",
    label: "Female 2 Pcs Suit Hanging-Colored",
    field: "female_2pcs_suit_hanging_colored",
  },
  {
    name: "quantity_female_2pcs_suit_hanging_white",
    label: "Quantity Female 2 Pcs Suit Hanging-White",
    field: "quantity_female_2pcs_suit_hanging_white",
  },
  {
    name: "female_2pcs_suit_hanging_white",
    label: "Female 2 Pcs Suit Hanging-White",
    field: "female_2pcs_suit_hanging_white",
  },
  {
    name: "quantity_female_3pcs_suit_hanging_colored",
    label: "Quantity Female 3 Pcs Suit Hanging-Colored",
    field: "quantity_female_3pcs_suit_hanging_colored",
  },
  {
    name: "female_3pcs_suit_hanging_colored",
    label: "Female 3 Pcs Suit Hanging-Colored",
    field: "female_3pcs_suit_hanging_colored",
  },
  {
    name: "quantity_female_3pcs_suit_hanging_white",
    label: "Quantity Female 3 Pcs Suit Hanging-White",
    field: "quantity_female_3pcs_suit_hanging_white",
  },
  {
    name: "female_3pcs_suit_hanging_white",
    label: "Female 3 Pcs Suit Hanging-White",
    field: "female_3pcs_suit_hanging_white",
  },
  {
    name: "quantity_male_jacket_only_colored",
    label: "Quantity Male Jacket Only Colored",
    field: "quantity_male_jacket_only_colored",
  },
  {
    name: "male_jacket_only_colored",
    label: "Male Jacket Only Colored",
    field: "male_jacket_only_colored",
  },
  {
    name: "quantity_male_jacket_only_white",
    label: "Quantity Male Jacket Only White",
    field: "quantity_male_jacket_only_white",
  },
  {
    name: "male_jacket_only_white",
    label: "Male Jacket Only White",
    field: "male_jacket_only_white",
  },
  {
    name: "quantity_female_jacket_only_colored",
    label: "Quantity Female Jacket Only Colored",
    field: "quantity_female_jacket_only_colored",
  },
  {
    name: "female_jacket_only_colored",
    label: "Female Jacket Only Colored",
    field: "female_jacket_only_colored",
  },
  {
    name: "quantity_female_jacket_only_white",
    label: "Quantity Female Jacket Only White",
    field: "quantity_female_jacket_only_white",
  },
  {
    name: "female_jacket_only_white",
    label: "Female Jacket Only White",
    field: "female_jacket_only_white",
  },
  {
    name: "quantity_wedding_gown_small_and_little_accessories_white",
    label: "Quantity Wedding Gown Small With Little Accessories White",
    field: "quantity_wedding_gown_small_and_little_accessories_white",
  },
  {
    name: "wedding_gown_small_and_little_accessories_white",
    label: "Wedding Gown Small With Little Accessories White",
    field: "wedding_gown_small_and_little_accessories_white",
  },
  {
    name: "quantity_wedding_gown_big_and_plenty_accessories_white",
    label: "Quantity Wedding Gown Big With Plenty Accessories White",
    field: "quantity_wedding_gown_big_and_plenty_accessories_white",
  },
  {
    name: "wedding_gown_big_and_plenty_accessories_white",
    label: "Wedding Gown Big With Plenty Accessories White",
    field: "wedding_gown_big_and_plenty_accessories_white",
  },
  {
    name: "quantity_Kids_blouse_folding_colored",
    label: "Quantity Kids Blouse Folding-Colored",
    field: "quantity_Kids_blouse_folding_colored",
  },
  {
    name: "Kids_blouse_folding_colored",
    label: "Kids Blouse Folding-Colored",
    field: "Kids_blouse_folding_colored",
  },
  {
    name: "quantity_Kids_blouse_hanging_colored",
    label: "Quantity Kids Blouse Hanging-Colored",
    field: "quantity_Kids_blouse_hanging_colored",
  },
  {
    name: "Kids_blouse_hanging_colored",
    label: "Kids Blouse Hanging-Colored",
    field: "Kids_blouse_hanging_colored",
  },
  {
    name: "quantity_Kids_blouse_folding_white",
    label: "Quantity Kids Blouse Folding-White",
    field: "quantity_Kids_blouse_folding_white",
  },
  {
    name: "Kids_blouse_folding_white",
    label: "Kids Blouse Folding-White",
    field: "Kids_blouse_folding_white",
  },
  {
    name: "quantity_Kids_blouse_hanging_white",
    label: "Quantity Kids Blouse Hanging-White",
    field: "quantity_Kids_blouse_hanging_white",
  },
  {
    name: "Kids_blouse_hanging_white",
    label: "Kids Blouse Hanging-White",
    field: "Kids_blouse_hanging_white",
  },
  {
    name: "quantity_jalamia_colored",
    label: "Quantity Jalamia Colored",
    field: "quantity_jalamia_colored",
  },
  {
    name: "jalamia_colored",
    label: "Jalamia Colored",
    field: "jalamia_colored",
  },
  {
    name: "quantity_jalamia_white",
    label: "Quantity Jalamia White",
    field: "quantity_jalamia_white",
  },
  {
    name: "jalamia_white",
    label: "Jalamia White",
    field: "jalamia_white",
  },
  {
    name: "quantity_camisole_colored",
    label: "Quantity Camisole Colored",
    field: "quantity_camisole_colored",
  },
  {
    name: "camisole_colored",
    label: "Camisole Colored",
    field: "camisole_colored",
  },
  {
    name: "quantity_camisole_white",
    label: "Quantity Camisole White",
    field: "quantity_camisole_white",
  },
  {
    name: "camisole_white",
    label: "Camisole White",
    field: "camisole_white",
  },
  {
    name: "quantity_wrapper_buba_scarf_colored",
    label: "Quantity Wrapper, Buba And Scarf Colored",
    field: "quantity_wrapper_buba_scarf_colored",
  },
  {
    name: "wrapper_buba_scarf_colored",
    label: "Wrapper, Buba And Scarf Colored",
    field: "wrapper_buba_scarf_colored",
  },
  {
    name: "quantity_wrapper_buba_scarf_white",
    label: "Quantity Wrapper, Buba And Scarf White",
    field: "quantity_wrapper_buba_scarf_white",
  },
  {
    name: "wrapper_buba_scarf_white",
    label: "Wrapper, Buba And Scarf White",
    field: "wrapper_buba_scarf_white",
  },
  {
    name: "quantity_wrapper_buba_no_scarf_colored",
    label: "Quantity Wrapper, Buba And No-Scarf Colored",
    field: "quantity_wrapper_buba_no_scarf_colored",
  },
  {
    name: "wrapper_buba_no_scarf_colored",
    label: "Wrapper, Buba And No-Scarf Colored",
    field: "wrapper_buba_no_scarf_colored",
  },
  {
    name: "quantity_wrapper_buba_no_scarf_white",
    label: "Quantity Wrapper, Buba And No-Scarf White",
    field: "quantity_wrapper_buba_no_scarf_white",
  },
  {
    name: "wrapper_buba_no_scarf_white",
    label: "Wrapper, Buba And No-Scarf White",
    field: "wrapper_buba_no_scarf_white",
  },
  {
    name: "quantity_wrapper_only_colored",
    label: "Quantity Wrapper Only Colored",
    field: "quantity_wrapper_only_colored",
  },
  {
    name: "wrapper_only_colored",
    label: "Wrapper Only Colored",
    field: "wrapper_only_colored",
  },
  {
    name: "quantity_wrapper_only_white",
    label: "Quantity Wrapper Only White",
    field: "quantity_wrapper_only_white",
  },
  {
    name: "wrapper_only_white",
    label: "Wrapper Only White",
    field: "wrapper_only_white",
  },
  {
    name: "quantity_two_wrapper_scarf_or_no_scarf_colored",
    label: "Quantity Two Wrapper Scarf/No-Scarf Only Colored",
    field: "quantity_two_wrapper_scarf_or_no_scarf_colored",
  },
  {
    name: "two_wrapper_scarf_or_no_scarf_colored",
    label: "Two Wrapper Scarf/No-Scarf Only Colored",
    field: "two_wrapper_scarf_or_no_scarf_colored",
  },
  {
    name: "quantity_two_wrapper_scarf_or_no_scarf_white",
    label: "Quantity Two Wrapper Scarf/No-Scarf Only White",
    field: "quantity_two_wrapper_scarf_or_no_scarf_white",
  },
  {
    name: "two_wrapper_scarf_or_no_scarf_white",
    label: "Two Wrapper Scarf/No-Scarf Only White",
    field: "two_wrapper_scarf_or_no_scarf_white",
  },
  {
    name: "quantity_aso_oke_agbada_and_cap_colored",
    label: "Quantity Aso-Oke Agbada and Cap 2pcs Colored",
    field: "quantity_aso_oke_agbada_and_cap_colored",
  },
  {
    name: "aso_oke_agbada_and_cap_colored",
    label: "Aso-Oke Agbada and Cap 2pcs Colored",
    field: "aso_oke_agbada_and_cap_colored",
  },
  {
    name: "quantity_male_aso_oke_and_cap_3pcs_colored",
    label: "Quantity Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored",
    field: "quantity_male_aso_oke_and_cap_3pcs_colored",
  },
  {
    name: "male_aso_oke_and_cap_3pcs_colored",
    label: "Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored",
    field: "male_aso_oke_and_cap_3pcs_colored",
  },
  {
    name: "quantity_aso_oke_wrapper_buba_gele_colored",
    label: "Quantity Aso-Oke Wrapper, Buba and Gele 3pcs Colored",
    field: "quantity_aso_oke_wrapper_buba_gele_colored",
  },
  {
    name: "aso_oke_wrapper_buba_gele_colored",
    label: "Aso-Oke Wrapper, Buba and Gele 3pcs Colored",
    field: "aso_oke_wrapper_buba_gele_colored",
  },
  {
    name: "quantity_aso_oke_wrapper_gele_colored",
    label: "Quantity Aso-Oke Wrapper and Gele 2pcs Colored",
    field: "quantity_aso_oke_wrapper_gele_colored",
  },
  {
    name: "aso_oke_wrapper_gele_colored",
    label: "Aso-Oke Wrapper and Gele 2pcs Colored",
    field: "aso_oke_wrapper_gele_colored",
  },
  {
    name: "quantity_aso_oke_wrapper_gele_ipele_colored",
    label: "Quantity Aso-Oke Wrapper, Gele and Ipele 3pcs Colored",
    field: "quantity_aso_oke_wrapper_gele_ipele_colored",
  },
  {
    name: "aso_oke_wrapper_gele_ipele_colored",
    label: "Aso-Oke Wrapper, Gele and Ipele 3pcs Colored",
    field: "aso_oke_wrapper_gele_ipele_colored",
  },
  {
    name: "quantity_aso_oke_wrapper_gele_ipele_white",
    label: "Quantity Aso-Oke Wrapper, Gele and Ipele 3pcs White",
    field: "quantity_aso_oke_wrapper_gele_ipele_white",
  },
  {
    name: "aso_oke_wrapper_gele_ipele_white",
    label: "Aso-Oke Wrapper, Gele and Ipele 3pcs White",
    field: "aso_oke_wrapper_gele_ipele_white",
  },
  {
    name: "quantity_aso_oke_headtie_ipele_colored",
    label: "Quantity Aso-Oke Head-Tie Ipele 2pcs White",
    field: "quantity_aso_oke_headtie_ipele_colored",
  },
  {
    name: "aso_oke_headtie_ipele_colored",
    label: "Aso-Oke Head-Tie Ipele 2pcs White",
    field: "aso_oke_headtie_ipele_colored",
  },
  {
    name: "quantity_male_complete_aso_oke_white",
    label: "Quantity Complete Male Aso-Oke 3pcs White",
    field: "quantity_male_complete_aso_oke_white",
  },
  {
    name: "male_complete_aso_oke_white",
    label: "Complete Male Aso-Oke 3pcs White",
    field: "male_complete_aso_oke_white",
  },
  {
    name: "quantity_female_complete_aso_oke_white",
    label: "Quantity Complete Female Aso-Oke 3pcs White",
    field: "quantity_female_complete_aso_oke_white",
  },
  {
    name: "female_complete_aso_oke_white",
    label: "Complete Female Aso-Oke 3pcs White",
    field: "female_complete_aso_oke_white",
  },
  {
    name: "quantity_female_inner_wear_colored",
    label: "Quantity Female Inner-Wear Colored",
    field: "quantity_female_inner_wear_colored",
  },
  {
    name: "female_inner_wear_colored",
    label: "Female Inner-Wear Colored",
    field: "female_inner_wear_colored",
  },
  {
    name: "quantity_female_inner_wear_white",
    label: "Quantity Female Inner-Wear White",
    field: "quantity_female_inner_wear_white",
  },
  {
    name: "female_inner_wear_white",
    label: "Female Inner-Wear White",
    field: "female_inner_wear_white",
  },
  {
    name: "quantity_head_tie_gele_colored",
    label: "Quantity Head-Tie/Gele Colored",
    field: "quantity_head_tie_gele_colored",
  },
  {
    name: "head_tie_gele_colored",
    label: "Head-Tie/Gele Colored",
    field: "head_tie_gele_colored",
  },
  {
    name: "quantity_head_tie_gele_white",
    label: "Quantity Head-Tie/Gele White",
    field: "quantity_head_tie_gele_white",
  },
  {
    name: "head_tie_gele_white",
    label: "Head-Tie/Gele White",
    field: "head_tie_gele_white",
  },
  {
    name: "quantity_gown_children_colored",
    label: "Quantity Gown Children Colored",
    field: "quantity_gown_children_colored",
  },
  {
    name: "gown_children_colored",
    label: "Gown Children Colored",
    field: "gown_children_colored",
  },
  {
    name: "quantity_gown_children_white",
    label: "Quantity Gown Children White",
    field: "quantity_gown_children_white",
  },
  {
    name: "gown_children_white",
    label: "Gown Children White",
    field: "gown_children_white",
  },
  {
    name: "quantity_gown_english_adult_folding_colored",
    label: "Quantity Gown English Adult Folding Colored",
    field: "quantity_gown_english_adult_folding_colored",
  },
  {
    name: "gown_english_adult_folding_colored",
    label: "Gown English Adult Folding Colored",
    field: "gown_english_adult_folding_colored",
  },
  {
    name: "quantity_gown_english_adult_folding_white",
    label: "Quantity Gown English Adult Folding White",
    field: "quantity_gown_english_adult_folding_white",
  },
  {
    name: "gown_english_adult_folding_white",
    label: "Gown English Adult Folding White",
    field: "gown_english_adult_folding_white",
  },
  {
    name: "quantity_gown_english_adult_hanging_colored",
    label: "Quantity Gown English Adult Hanging Colored",
    field: "quantity_gown_english_adult_hanging_colored",
  },
  {
    name: "gown_english_adult_hanging_colored",
    label: "Gown English Adult Hanging Colored",
    field: "gown_english_adult_hanging_colored",
  },
  {
    name: "quantity_gown_english_adult_hanging_white",
    label: "Quantity Gown English Adult Hanging White",
    field: "quantity_gown_english_adult_hanging_white",
  },
  {
    name: "gown_english_adult_hanging_white",
    label: "Gown English Adult Hanging White",
    field: "gown_english_adult_hanging_white",
  },
  {
    name: "quantity_gown_native_folding_colored",
    label: "Quantity Gown Native Folding Colored",
    field: "quantity_gown_native_folding_colored",
  },
  {
    name: "gown_native_folding_colored",
    label: "Gown Native Folding Colored",
    field: "gown_native_folding_colored",
  },
  {
    name: "quantity_gown_native_folding_white",
    label: "Quantity Gown Native Folding White",
    field: "quantity_gown_native_folding_white",
  },
  {
    name: "gown_native_folding_white",
    label: "Gown Native Folding White",
    field: "gown_native_folding_white",
  },
  {
    name: "quantity_skirt_and_blouse_english_hanging_colored",
    label: "Quantity Skirt and Blouse English 2pcs Hanging Colored",
    field: "quantity_skirt_and_blouse_english_hanging_colored",
  },
  {
    name: "skirt_and_blouse_english_hanging_colored",
    label: "Skirt and Blouse English 2pcs Hanging Colored",
    field: "skirt_and_blouse_english_hanging_colored",
  },
  {
    name: "quantity_skirt_and_blouse_english_hanging_white",
    label: "Quantity Skirt and Blouse English 2pcs Hanging White",
    field: "quantity_skirt_and_blouse_english_hanging_white",
  },
  {
    name: "skirt_and_blouse_english_hanging_white",
    label: "Skirt and Blouse English 2pcs Hanging White",
    field: "skirt_and_blouse_english_hanging_white",
  },
  {
    name: "quantity_skirt_and_blouse_native_folding_colored",
    label: "Quantity Skirt and Blouse Native 2pcs Folding Colored",
    field: "quantity_skirt_and_blouse_native_folding_colored",
  },
  {
    name: "skirt_and_blouse_native_folding_colored",
    label: "Skirt and Blouse Native 2pcs Folding Colored",
    field: "skirt_and_blouse_native_folding_colored",
  },
  {
    name: "quantity_skirt_and_blouse_native_folding_white",
    label: "Quantity Skirt and Blouse Native 2pcs Folding White",
    field: "quantity_skirt_and_blouse_native_folding_white",
  },
  {
    name: "skirt_and_blouse_native_folding_white",
    label: "Skirt and Blouse Native 2pcs Folding White",
    field: "skirt_and_blouse_native_folding_white",
  },
  {
    name: "quantity_female_native_buba_and_trouser_colored",
    label: "Quantity Female Native Buba and Trouser 2pcs Colored",
    field: "quantity_female_native_buba_and_trouser_colored",
  },
  {
    name: "female_native_buba_and_trouser_colored",
    label: "Female Native Buba and Trouser 2pcs Colored",
    field: "female_native_buba_and_trouser_colored",
  },
  {
    name: "quantity_female_native_buba_and_trouser_white",
    label: "Quantity Female Native Buba and Trouser 2pcs White",
    field: "quantity_female_native_buba_and_trouser_white",
  },
  {
    name: "female_native_buba_and_trouser_white",
    label: "Female Native Buba and Trouser 2pcs White",
    field: "female_native_buba_and_trouser_white",
  },
  {
    name: "quantity_male_cap_colored",
    label: "Quantity Male Cap Colored",
    field: "quantity_male_cap_colored",
  },
  {
    name: "male_cap_colored",
    label: "Male Cap Colored",
    field: "male_cap_colored",
  },
  {
    name: "quantity_male_cap_white",
    label: "Quantity Male Cap White",
    field: "quantity_male_cap_white",
  },
  {
    name: "male_cap_white",
    label: "Male Cap White",
    field: "male_cap_white",
  },
  {
    name: "quantity_female_cap_colored",
    label: "Quantity Female Cap Colored",
    field: "quantity_female_cap_colored",
  },
  {
    name: "female_cap_colored",
    label: "Female Cap Colored",
    field: "female_cap_colored",
  },
  {
    name: "quantity_female_cap_white",
    label: "Quantity Female Cap White",
    field: "quantity_female_cap_white",
  },
  {
    name: "female_cap_white",
    label: "Female Cap White",
    field: "female_cap_white",
  },
  {
    name: "quantity_turban_colored",
    label: "Quantity Turban Colored",
    field: "quantity_turban_colored",
  },
  {
    name: "turban_colored",
    label: "Turban Colored",
    field: "turban_colored",
  },
  {
    name: "quantity_turban_white",
    label: "Quantity Turban White",
    field: "quantity_turban_white",
  },
  {
    name: "turban_white",
    label: "Turban White",
    field: "turban_white",
  },
  {
    name: "quantity_sweater_small_colored",
    label: "Quantity Sweater Small Colored",
    field: "quantity_sweater_small_colored",
  },
  {
    name: "sweater_small_colored",
    label: "Sweater Small Colored",
    field: "sweater_small_colored",
  },
  {
    name: "quantity_sweater_small_white",
    label: "Quantity Sweater Small White",
    field: "quantity_sweater_small_white",
  },
  {
    name: "sweater_small_white",
    label: "Sweater Small White",
    field: "sweater_small_white",
  },
  {
    name: "quantity_sweater_normal_colored",
    label: "Quantity Sweater Normal Colored",
    field: "quantity_sweater_normal_colored",
  },
  {
    name: "sweater_normal_colored",
    label: "Sweater Normal Colored",
    field: "sweater_normal_colored",
  },
  {
    name: "quantity_sweater_normal_white",
    label: "Quantity Sweater Normal White",
    field: "quantity_sweater_normal_white",
  },
  {
    name: "sweater_normal_white",
    label: "Sweater Normal White",
    field: "sweater_normal_white",
  },
  {
    name: "quantity_sweater_big_colored",
    label: "Quantity Sweater Big Colored",
    field: "quantity_sweater_big_colored",
  },
  {
    name: "sweater_big_colored",
    label: "Sweater Big Colored",
    field: "sweater_big_colored",
  },
  {
    name: "quantity_sweater_big_white",
    label: "Quantity Sweater Big White",
    field: "quantity_sweater_big_white",
  },
  {
    name: "sweater_big_white",
    label: "Sweater Big White",
    field: "sweater_big_white",
  },
  {
    name: "quantity_towel_small_colored",
    label: "Quantity Towel Small Colored",
    field: "quantity_towel_small_colored",
  },
  {
    name: "towel_small_colored",
    label: "Towel Small Colored",
    field: "towel_small_colored",
  },
  {
    name: "quantity_towel_small_white",
    label: "Quantity Towel Small White",
    field: "quantity_towel_small_white",
  },
  {
    name: "towel_small_white",
    label: "Towel Small White",
    field: "towel_small_white",
  },
  {
    name: "quantity_towel_normal_colored",
    label: "Quantity Towel Normal Colored",
    field: "quantity_towel_normal_colored",
  },
  {
    name: "towel_normal_colored",
    label: "Towel Normal Colored",
    field: "towel_normal_colored",
  },
  {
    name: "quantity_towel_normal_white",
    label: "Quantity Towel Normal White",
    field: "quantity_towel_normal_white",
  },
  {
    name: "towel_normal_white",
    label: "Towel Normal White",
    field: "towel_normal_white",
  },
  {
    name: "quantity_towel_big_colored",
    label: "Quantity Towel Big Colored",
    field: "quantity_towel_big_colored",
  },
  {
    name: "towel_big_colored",
    label: "Towel Big Colored",
    field: "towel_big_colored",
  },
  {
    name: "quantity_towel_big_white",
    label: "Quantity Towel Big White",
    field: "quantity_towel_big_white",
  },
  {
    name: "towel_big_white",
    label: "Towel Big White",
    field: "towel_big_white",
  },
  {
    name: "quantity_bed_spread_normal_colored",
    label: "Quantity Bed-Spread Normal Colored",
    field: "quantity_bed_spread_normal_colored",
  },
  {
    name: "bed_spread_normal_colored",
    label: "Bed-Spread Normal Colored",
    field: "bed_spread_normal_colored",
  },
  {
    name: "quantity_bed_spread_normal_white",
    label: "Quantity Bed-Spread Normal White",
    field: "quantity_bed_spread_normal_white",
  },
  {
    name: "bed_spread_normal_white",
    label: "Bed-Spread Normal White",
    field: "bed_spread_normal_white",
  },
  {
    name: "quantity_bed_spread_big_colored",
    label: "Quantity Bed-Spread Big Colored",
    field: "quantity_bed_spread_big_colored",
  },
  {
    name: "bed_spread_big_colored",
    label: "Bed-Spread Big Colored",
    field: "bed_spread_big_colored",
  },
  {
    name: "quantity_bed_spread_big_white",
    label: "Quantity Bed-Spread Big White",
    field: "quantity_bed_spread_big_white",
  },
  {
    name: "bed_spread_big_white",
    label: "Bed-Spread Big White",
    field: "bed_spread_big_white",
  },
  {
    name: "quantity_bed_spread_double_colored",
    label: "Quantity Bed-Spread Double Colored",
    field: "quantity_bed_spread_double_colored",
  },
  {
    name: "bed_spread_double_colored",
    label: "Bed-Spread Double Colored",
    field: "bed_spread_double_colored",
  },
  {
    name: "quantity_bed_spread_double_white",
    label: "Quantity Bed-Spread Double White",
    field: "quantity_bed_spread_double_white",
  },
  {
    name: "bed_spread_double_white",
    label: "Bed-Spread Double White",
    field: "bed_spread_double_white",
  },
  {
    name: "quantity_duvet_normal_colored",
    label: "Quantity Duvet Normal Colored",
    field: "quantity_duvet_normal_colored",
  },
  {
    name: "duvet_normal_colored",
    label: "Duvet Normal Colored",
    field: "duvet_normal_colored",
  },
  {
    name: "quantity_duvet_normal_white",
    label: "Quantity Duvet Normal White",
    field: "quantity_duvet_normal_white",
  },
  {
    name: "duvet_normal_white",
    label: "Duvet Normal White",
    field: "duvet_normal_white",
  },
  {
    name: "quantity_duvet_big_colored",
    label: "Quantity Duvet Big Colored",
    field: "quantity_duvet_big_colored",
  },
  {
    name: "duvet_big_colored",
    label: "Duvet Big Colored",
    field: "duvet_big_colored",
  },
  {
    name: "quantity_duvet_big_white",
    label: "Quantity Duvet Big White",
    field: "quantity_duvet_big_white",
  },
  {
    name: "duvet_big_white",
    label: "Duvet Big White",
    field: "duvet_big_white",
  },
  {
    name: "quantity_curtain_normal_colored",
    label: "Quantity Curtain Normal Colored",
    field: "quantity_curtain_normal_colored",
  },
  {
    name: "curtain_normal_colored",
    label: "Curtain Normal Colored",
    field: "curtain_normal_colored",
  },
  {
    name: "quantity_curtain_big_colored",
    label: "Quantity Curtain Big Colored",
    field: "quantity_curtain_big_colored",
  },
  {
    name: "curtain_big_colored",
    label: "Curtain Big Colored",
    field: "curtain_big_colored",
  },
  {
    name: "quantity_curtain_very_big_colored",
    label: "Quantity Curtain Very Big Colored",
    field: "quantity_curtain_very_big_colored",
  },
  {
    name: "curtain_very_big_colored",
    label: "Curtain Very Big Colored",
    field: "curtain_very_big_colored",
  },
  // {
  //   name: "quantity_blanket_colored",
  //   label: "Quantity Blanket Colored",
  //   field: "quantity_blanket_colored",
  // },
  // {
  //   name: "blanket_colored",
  //   label: "Blanket Colored",
  //   field: "blanket_colored",
  // },
  {
    name: "quantity_pyjamas_small_colored",
    label: "Quantity Pyjamas Small Colored",
    field: "quantity_pyjamas_small_colored",
  },
  {
    name: "pyjamas_small_colored",
    label: "Pyjamas Small Colored",
    field: "pyjamas_small_colored",
  },
  {
    name: "quantity_pyjamas_small_white",
    label: "Quantity Pyjamas Small White",
    field: "quantity_pyjamas_small_white",
  },
  {
    name: "pyjamas_small_white",
    label: "Pyjamas Small White",
    field: "pyjamas_small_white",
  },
  {
    name: "quantity_pyjamas_big_colored",
    label: "Quantity Pyjamas Big Colored",
    field: "quantity_pyjamas_big_colored",
  },
  {
    name: "pyjamas_big_colored",
    label: "Pyjamas Big Colored",
    field: "pyjamas_big_colored",
  },
  {
    name: "quantity_pyjamas_big_white",
    label: "Quantity Pyjamas Big White",
    field: "quantity_pyjamas_big_white",
  },
  {
    name: "pyjamas_big_white",
    label: "Pyjamas Big White",
    field: "pyjamas_big_white",
  },
  {
    name: "quantity_blanket_colored",
    label: "Quantity Blanket Colored",
    field: "quantity_blanket_colored",
  },
  {
    name: "blanket_colored",
    label: "Blanket Colored",
    field: "blanket_colored",
  },
  {
    name: "quantity_pillow_cases_colored",
    label: "Quantity Pillow Cases Colored",
    field: "quantity_pillow_cases_colored",
  },
  {
    name: "pillow_cases_colored",
    label: "Pillow Cases Colored",
    field: "pillow_cases_colored",
  },
  {
    name: "quantity_pillow_cases_white",
    label: "Quantity Pillow Cases White",
    field: "quantity_pillow_cases_white",
  },
  {
    name: "pillow_cases_white",
    label: "Pillow Cases White",
    field: "pillow_cases_white",
  },
  { name: "comment_section", label: "Comment", field: "comment_section" },
  { name: "discount", label: "Discount", field: "discount" },
  { name: "addon", label: "Addon", field: "addon" },
  { name: "addon_amount", label: "Addon Amount", field: "addon_amount" },
  { name: "deposit", label: "Deposit", field: "deposit" },
  { name: "deposit_type", label: "Deposit Type", field: "deposit_type" },
  { name: "balance", label: "Balance", field: "balance" },
  { name: "final_amount", label: "Final Amount", field: "final_amount" },
  {
    name: "customer_collected",
    label: "Customer Collected",
    field: "customer_collected",
  },
];

const columns2 = [
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
  // {
  //   name: "quantity_male_native_2pcs_folding_colored",
  //   label: "Quantity Male Native 2 Pcs Folding-Colored",
  //   field: "quantity_male_native_2pcs_folding_colored",
  // },
  // {
  //   name: "male_native_2pcs_folding_colored",
  //   label: "Male Native 2 Pcs Folding-Colored",
  //   field: "male_native_2pcs_folding_colored",
  // },
  // {
  //   name: "quantity_male_native_2pcs_hanging_colored",
  //   label: "Quantity Male Native 2 Pcs Hanging-Colored",
  //   field: "quantity_male_native_2pcs_hanging_colored",
  // },
  // {
  //   name: "male_native_2pcs_hanging_colored",
  //   label: "Male Native 2 Pcs Hanging-Colored",
  //   field: "male_native_2pcs_hanging_colored",
  // },
  // {
  //   name: "quantity_male_native_2pcs_folding_white",
  //   label: "Quantity Male Native 2 Pcs Folding-White",
  //   field: "quantity_male_native_2pcs_folding_white",
  // },
  // {
  //   name: "male_native_2pcs_folding_white",
  //   label: "Male Native 2 Pcs Folding-White",
  //   field: "male_native_2pcs_folding_white",
  // },
  // {
  //   name: "quantity_male_native_2pcs_hanging_white",
  //   label: "Quantity Male Native 2 Pcs Hanging-White",
  //   field: "quantity_male_native_2pcs_hanging_white",
  // },
  // {
  //   name: "male_native_2pcs_hanging_white",
  //   label: "Male Native 2 Pcs Hanging-White",
  //   field: "male_native_2pcs_hanging_white",
  // },
  // {
  //   name: "quantity_male_native_3pcs_notAgbada_folding_colored",
  //   label: "Quantity Male Native 3 Pcs Not-Agbada Folding-Colored",
  //   field: "quantity_male_native_3pcs_notAgbada_folding_colored",
  // },
  // {
  //   name: "male_native_3pcs_notAgbada_folding_colored",
  //   label: "Male Native 3 Pcs Not-Agbada Folding-Colored",
  //   field: "male_native_3pcs_notAgbada_folding_colored",
  // },
  // {
  //   name: "quantity_male_native_3pcs_notAgbada_hanging_colored",
  //   label: "Quantity Male Native 3 Pcs Not-Agbada Hanging-Colored",
  //   field: "quantity_male_native_3pcs_notAgbada_hanging_colored",
  // },
  // {
  //   name: "male_native_3pcs_notAgbada_hanging_colored",
  //   label: "Male Native 3 Pcs Not-Agbada Hanging-Colored",
  //   field: "male_native_3pcs_notAgbada_hanging_colored",
  // },
  // {
  //   name: "quantity_male_native_3pcs_notAgbada_folding_white",
  //   label: "Quantity Male Native 3 Pcs Not-Agbada Folding-White",
  //   field: "quantity_male_native_3pcs_notAgbada_folding_white",
  // },
  // {
  //   name: "male_native_3pcs_notAgbada_folding_white",
  //   label: "Male Native 3 Pcs Not-Agbada Folding-White",
  //   field: "male_native_3pcs_notAgbada_folding_white",
  // },
  // {
  //   name: "quantity_male_native_3pcs_notAgbada_hanging_white",
  //   label: "Quantity Male Native 3 Pcs Not-Agbada Hanging-White",
  //   field: "quantity_male_native_3pcs_notAgbada_hanging_white",
  // },
  // {
  //   name: "male_native_3pcs_notAgbada_hanging_white",
  //   label: "Male Native 3 Pcs Not-Agbada Hanging-White",
  //   field: "male_native_3pcs_notAgbada_hanging_white",
  // },
  // {
  //   name: "quantity_native_top_only_folding_colored",
  //   label: "Quantity Native Top Only Folding-Colored",
  //   field: "quantity_native_top_only_folding_colored",
  // },
  // {
  //   name: "native_top_only_folding_colored",
  //   label: "Native Top Only Folding-Colored",
  //   field: "native_top_only_folding_colored",
  // },
  // {
  //   name: "quantity_native_top_only_hanging_colored",
  //   label: "Quantity Native Top Only Hanging-Colored",
  //   field: "quantity_native_top_only_hanging_colored",
  // },
  // {
  //   name: "native_top_only_hanging_colored",
  //   label: "Native Top Only Hanging-Colored",
  //   field: "native_top_only_hanging_colored",
  // },
  // {
  //   name: "quantity_native_top_only_folding_white",
  //   label: "Quantity Native Top Only Folding-White",
  //   field: "quantity_native_top_only_folding_white",
  // },
  // {
  //   name: "native_top_only_folding_white",
  //   label: "Native Top Only Folding-White",
  //   field: "native_top_only_folding_white",
  // },
  // {
  //   name: "quantity_native_top_only_hanging_white",
  //   label: "Quantity Native Top Only Hanging-White",
  //   field: "quantity_native_top_only_hanging_white",
  // },
  // {
  //   name: "native_top_only_hanging_white",
  //   label: "Native Top Only Hanging-White",
  //   field: "native_top_only_hanging_white",
  // },
  // {
  //   name: "quantity_native_trouser_only_folding_colored",
  //   label: "Quantity Native Trouser Only Folding-Colored",
  //   field: "quantity_native_trouser_only_folding_colored",
  // },
  // {
  //   name: "native_trouser_only_folding_colored",
  //   label: "Native Trouser Only Folding-Colored",
  //   field: "native_trouser_only_folding_colored",
  // },
  // {
  //   name: "quantity_native_trouser_only_hanging_colored",
  //   label: "Quantity Native Trouser Only Hanging-Colored",
  //   field: "quantity_native_trouser_only_hanging_colored",
  // },
  // {
  //   name: "native_trouser_only_hanging_colored",
  //   label: "Native Trouser Only Hanging-Colored",
  //   field: "native_trouser_only_hanging_colored",
  // },
  // {
  //   name: "quantity_native_trouser_only_folding_white",
  //   label: "Quantity Native Trouser Only Folding-White",
  //   field: "quantity_native_trouser_only_folding_white",
  // },
  // {
  //   name: "native_trouser_only_folding_white",
  //   label: "Native Trouser Only Folding-White",
  //   field: "native_trouser_only_folding_white",
  // },
  // {
  //   name: "quantity_native_trouser_only_hanging_white",
  //   label: "Quantity Native Trouser Only Hanging-White",
  //   field: "quantity_native_trouser_only_hanging_white",
  // },
  // {
  //   name: "native_trouser_only_hanging_white",
  //   label: "Native Trouser Only Hanging-White",
  //   field: "native_trouser_only_hanging_white",
  // },
  // {
  //   name: "quantity_male_agbada_only_folding_colored",
  //   label: "Quantity Agbada Only Folding-Colored",
  //   field: "quantity_male_agbada_only_folding_colored",
  // },
  // {
  //   name: "male_agbada_only_folding_colored",
  //   label: "Agbada Only Folding-Colored",
  //   field: "male_agbada_only_folding_colored",
  // },
  // {
  //   name: "quantity_male_agbada_only_hanging_colored",
  //   label: "Quantity Agbada Only Hanging-Colored",
  //   field: "quantity_male_agbada_only_hanging_colored",
  // },
  // {
  //   name: "male_agbada_only_hanging_colored",
  //   label: "Agbada Only Hanging-Colored",
  //   field: "male_agbada_only_hanging_colored",
  // },
  // {
  //   name: "quantity_male_agbada_only_folding_white",
  //   label: "Quantity Agbada Only Folding-White",
  //   field: "quantity_male_agbada_only_folding_white",
  // },
  // {
  //   name: "male_agbada_only_folding_white",
  //   label: "Agbada Only Folding-White",
  //   field: "male_agbada_only_folding_white",
  // },
  // {
  //   name: "quantity_male_agbada_only_hanging_white",
  //   label: "Quantity Agbada Only Hanging-White",
  //   field: "quantity_male_agbada_only_hanging_white",
  // },
  // {
  //   name: "male_agbada_only_hanging_white",
  //   label: "Agbada Only Hanging-White",
  //   field: "male_agbada_only_hanging_white",
  // },
  // {
  //   name: "quantity_complete_male_agbada_3pcs_Folding_colored",
  //   label: "Quantity Complete Male Agbada 3 Pcs Hanging-Colored",
  //   field: "quantity_complete_male_agbada_3pcs_Folding_colored",
  // },
  // {
  //   name: "complete_male_agbada_3pcs_Folding_colored",
  //   label: "Complete Male Agbada 3 Pcs Hanging-Colored",
  //   field: "complete_male_agbada_3pcs_Folding_colored",
  // },
  // {
  //   name: "quantity_complete_male_agbada_3pcs_Hanging_colored",
  //   label: "Quantity Complete Male Agbada 3 Pcs Hanging-Colored",
  //   field: "quantity_complete_male_agbada_3pcs_Hanging_colored",
  // },
  // {
  //   name: "complete_male_agbada_3pcs_Hanging_colored",
  //   label: "Complete Male Agbada 3 Pcs Hanging-Colored",
  //   field: "complete_male_agbada_3pcs_Hanging_colored",
  // },
  // {
  //   name: "quantity_complete_male_agbada_3pcs_Folding_white",
  //   label: "Quantity Complete Male Agbada 3 Pcs Hanging-White",
  //   field: "quantity_complete_male_agbada_3pcs_Folding_white",
  // },
  // {
  //   name: "complete_male_agbada_3pcs_Folding_white",
  //   label: "Complete Male Agbada 3 Pcs Hanging-White",
  //   field: "complete_male_agbada_3pcs_Folding_white",
  // },
  // {
  //   name: "quantity_complete_male_agbada_3pcs_Hanging_white",
  //   label: "Quantity Complete Male Agbada 3 Pcs Hanging-White",
  //   field: "quantity_complete_male_agbada_3pcs_Hanging_white",
  // },
  // {
  //   name: "complete_male_agbada_3pcs_Hanging_white",
  //   label: "Complete Male Agbada 3 Pcs Hanging-White",
  //   field: "complete_male_agbada_3pcs_Hanging_white",
  // },
  // {
  //   name: "quantity_normal_shirt_folding_colored",
  //   label: "Quantity Shirt Folding-Colored",
  //   field: "quantity_normal_shirt_folding_colored",
  // },
  // {
  //   name: "normal_shirt_folding_colored",
  //   label: "Shirt Folding-Colored",
  //   field: "normal_shirt_folding_colored",
  // },
  // {
  //   name: "quantity_normal_shirt_hanging_colored",
  //   label: "Quantity Shirt Hanging-Colored",
  //   field: "quantity_normal_shirt_hanging_colored",
  // },
  // {
  //   name: "normal_shirt_hanging_colored",
  //   label: "Shirt Hanging-Colored",
  //   field: "normal_shirt_hanging_colored",
  // },
  // {
  //   name: "quantity_normal_shirt_folding_white",
  //   label: "Quantity Shirt Folding-White",
  //   field: "quantity_normal_shirt_folding_white",
  // },
  // {
  //   name: "normal_shirt_folding_white",
  //   label: "Shirt Folding-White",
  //   field: "normal_shirt_folding_white",
  // },
  // {
  //   name: "quantity_normal_shirt_hanging_white",
  //   label: "Quantity Shirt Hanging-White",
  //   field: "quantity_normal_shirt_hanging_white",
  // },
  // {
  //   name: "normal_shirt_hanging_white",
  //   label: "Shirt Hanging-White",
  //   field: "normal_shirt_hanging_white",
  // },
  // {
  //   name: "quantity_shirt_big_folding_colored",
  //   label: "Quantity Shirt Big Folding-Colored",
  //   field: "quantity_shirt_big_folding_colored",
  // },
  // {
  //   name: "shirt_big_folding_colored",
  //   label: "Shirt Big Folding-Colored",
  //   field: "shirt_big_folding_colored",
  // },
  // {
  //   name: "quantity_shirt_big_hanging_colored",
  //   label: "Quantity Shirt Big Hanging-Colored",
  //   field: "quantity_shirt_big_hanging_colored",
  // },
  // {
  //   name: "shirt_big_hanging_colored",
  //   label: "Shirt Big Hanging-Colored",
  //   field: "shirt_big_hanging_colored",
  // },
  // {
  //   name: "quantity_shirt_big_folding_white",
  //   label: "Quantity Shirt Big Folding-White",
  //   field: "quantity_shirt_big_folding_white",
  // },
  // {
  //   name: "shirt_big_folding_white",
  //   label: "Shirt Big Folding-White",
  //   field: "shirt_big_folding_white",
  // },
  // {
  //   name: "quantity_shirt_big_hanging_white",
  //   label: "Quantity Shirt Big Hanging-White",
  //   field: "quantity_shirt_big_hanging_white",
  // },
  // {
  //   name: "shirt_big_hanging_white",
  //   label: "Shirt Big Hanging-White",
  //   field: "shirt_big_hanging_white",
  // },
  // {
  //   name: "quantity_shirt_x_large_folding_colored",
  //   label: "Quantity Shirt XLarge Folding-Colored",
  //   field: "quantity_shirt_x_large_folding_colored",
  // },
  // {
  //   name: "shirt_x_large_folding_colored",
  //   label: "Shirt XLarge Folding-Colored",
  //   field: "shirt_x_large_folding_colored",
  // },
  // {
  //   name: "quantity_shirt_x_large_hanging_colored",
  //   label: "Quantity Shirt XLarge Hanging-Colored",
  //   field: "quantity_shirt_x_large_hanging_colored",
  // },
  // {
  //   name: "shirt_x_large_hanging_colored",
  //   label: "Shirt XLarge Hanging-Colored",
  //   field: "shirt_x_large_hanging_colored",
  // },
  // {
  //   name: "quantity_shirt_x_large_folding_white",
  //   label: "Quantity Shirt XLarge Folding-White",
  //   field: "quantity_shirt_x_large_folding_white",
  // },
  // {
  //   name: "shirt_x_large_folding_white",
  //   label: "Shirt XLarge Folding-White",
  //   field: "shirt_x_large_folding_white",
  // },
  // {
  //   name: "quantity_shirt_x_large_hanging_white",
  //   label: "Quantity Shirt XLarge Hanging-White",
  //   field: "quantity_shirt_x_large_hanging_white",
  // },
  // {
  //   name: "shirt_x_large_hanging_white",
  //   label: "Shirt XLarge Hanging-White",
  //   field: "shirt_x_large_hanging_white",
  // },
  // {
  //   name: "quantity_shirt_children_folding_colored",
  //   label: "Quantity Shirt Children Folding-Colored",
  //   field: "quantity_shirt_children_folding_colored",
  // },
  // {
  //   name: "shirt_children_folding_colored",
  //   label: "Shirt Children Folding-Colored",
  //   field: "shirt_children_folding_colored",
  // },
  // {
  //   name: "quantity_shirt_children_hanging_colored",
  //   label: "Quantity Shirt Children Hanging-Colored",
  //   field: "quantity_shirt_children_hanging_colored",
  // },
  // {
  //   name: "shirt_children_hanging_colored",
  //   label: "Shirt Children Hanging-Colored",
  //   field: "shirt_children_hanging_colored",
  // },
  // {
  //   name: "quantity_shirt_children_folding_white",
  //   label: "Quantity Shirt Children Folding-White",
  //   field: "quantity_shirt_children_folding_white",
  // },
  // {
  //   name: "shirt_children_folding_white",
  //   label: "Shirt Children Folding-White",
  //   field: "shirt_children_folding_white",
  // },
  // {
  //   name: "quantity_shirt_children_hanging_white",
  //   label: "Quantity Shirt Children Hanging-White",
  //   field: "quantity_shirt_children_hanging_white",
  // },
  // {
  //   name: "shirt_children_hanging_white",
  //   label: "Shirt Children Hanging-White",
  //   field: "shirt_children_hanging_white",
  // },
  // {
  //   name: "quantity_blouse_folding_colored",
  //   label: "Quantity Blouse Folding-Colored",
  //   field: "quantity_blouse_folding_colored",
  // },
  // {
  //   name: "blouse_folding_colored",
  //   label: "Blouse Folding-Colored",
  //   field: "blouse_folding_colored",
  // },
  // {
  //   name: "quantity_blouse_hanging_colored",
  //   label: "Quantity Blouse Hanging-Colored",
  //   field: "quantity_blouse_hanging_colored",
  // },
  // {
  //   name: "blouse_hanging_colored",
  //   label: "Blouse Hanging-Colored",
  //   field: "blouse_hanging_colored",
  // },
  // {
  //   name: "quantity_blouse_folding_white",
  //   label: "Quantity Blouse Folding-White",
  //   field: "quantity_blouse_folding_white",
  // },
  // {
  //   name: "blouse_folding_white",
  //   label: "Blouse Folding-White",
  //   field: "blouse_folding_white",
  // },
  // {
  //   name: "quantity_blouse_hanging_white",
  //   label: "Quantity Blouse Hanging-White",
  //   field: "quantity_blouse_hanging_white",
  // },
  // {
  //   name: "blouse_hanging_white",
  //   label: "Blouse Hanging-White",
  //   field: "blouse_hanging_white",
  // },
  // {
  //   name: "quantity_blouse_x_large_folding_colored",
  //   label: "Quantity Blouse XLarge Folding-Colored",
  //   field: "quantity_blouse_x_large_folding_colored",
  // },
  // {
  //   name: "blouse_x_large_folding_colored",
  //   label: "Blouse XLarge Folding-Colored",
  //   field: "blouse_x_large_folding_colored",
  // },
  // {
  //   name: "quantity_blouse_x_large_hanging_colored",
  //   label: "Quantity Blouse XLarge Hanging-Colored",
  //   field: "quantity_blouse_x_large_hanging_colored",
  // },
  // {
  //   name: "blouse_x_large_hanging_colored",
  //   label: "Blouse XLarge Hanging-Colored",
  //   field: "blouse_x_large_hanging_colored",
  // },
  // {
  //   name: "quantity_blouse_x_large_folding_white",
  //   label: "Quantity Blouse XLarge Folding-White",
  //   field: "quantity_blouse_x_large_folding_white",
  // },
  // {
  //   name: "blouse_x_large_folding_white",
  //   label: "Blouse XLarge Folding-White",
  //   field: "blouse_x_large_folding_white",
  // },
  // {
  //   name: "quantity_blouse_x_large_hanging_white",
  //   label: "Quantity Blouse XLarge Hanging-White",
  //   field: "quantity_blouse_x_large_hanging_white",
  // },
  // {
  //   name: "blouse_x_large_hanging_white",
  //   label: "Blouse XLarge Hanging-White",
  //   field: "blouse_x_large_hanging_white",
  // },
  // {
  //   name: "quantity_female_shirt_folding_colored",
  //   label: "Quantity Female Shirt Folding-Colored",
  //   field: "quantity_female_shirt_folding_colored",
  // },
  // {
  //   name: "female_shirt_folding_colored",
  //   label: "Female Shirt Folding-Colored",
  //   field: "female_shirt_folding_colored",
  // },
  // {
  //   name: "quantity_female_shirt_hanging_colored",
  //   label: "Quantity Female Shirt Hanging-Colored",
  //   field: "quantity_female_shirt_hanging_colored",
  // },
  // {
  //   name: "female_shirt_hanging_colored",
  //   label: "Female Shirt Hanging-Colored",
  //   field: "female_shirt_hanging_colored",
  // },
  // {
  //   name: "quantity_female_shirt_folding_white",
  //   label: "Quantity Female Shirt Folding-White",
  //   field: "quantity_female_shirt_folding_white",
  // },
  // {
  //   name: "female_shirt_folding_white",
  //   label: "Female Shirt Folding-White",
  //   field: "female_shirt_folding_white",
  // },
  // {
  //   name: "quantity_female_shirt_hanging_white",
  //   label: "Quantity Female Shirt Hanging-White",
  //   field: "quantity_female_shirt_hanging_white",
  // },
  // {
  //   name: "female_shirt_hanging_white",
  //   label: "Female Shirt Hanging-White",
  //   field: "female_shirt_hanging_white",
  // },
  // {
  //   name: "quantity_tshirt_polo_small_folding_colored",
  //   label: "Quantity TShirt/Polo Small Folding-Colored",
  //   field: "quantity_tshirt_polo_small_folding_colored",
  // },
  // {
  //   name: "tshirt_polo_small_folding_colored",
  //   label: "TShirt/Polo Small Folding-Colored",
  //   field: "tshirt_polo_small_folding_colored",
  // },
  // {
  //   name: "quantity_tshirt_polo_small_hanging_colored",
  //   label: "Quantity TShirt/Polo Small Hanging-Colored",
  //   field: "quantity_tshirt_polo_small_hanging_colored",
  // },
  // {
  //   name: "tshirt_polo_small_hanging_colored",
  //   label: "TShirt/Polo Small Hanging-Colored",
  //   field: "tshirt_polo_small_hanging_colored",
  // },
  // {
  //   name: "quantity_tshirt_polo_small_folding_white",
  //   label: "Quantity TShirt/Polo Small Folding-White",
  //   field: "quantity_tshirt_polo_small_folding_white",
  // },
  // {
  //   name: "tshirt_polo_small_folding_white",
  //   label: "TShirt/Polo Small Folding-White",
  //   field: "tshirt_polo_small_folding_white",
  // },
  // {
  //   name: "quantity_tshirt_polo_small_hanging_white",
  //   label: "Quantity TShirt/Polo Small Hanging-White",
  //   field: "quantity_tshirt_polo_small_hanging_white",
  // },
  // {
  //   name: "tshirt_polo_small_hanging_white",
  //   label: "TShirt/Polo Small Hanging-White",
  //   field: "tshirt_polo_small_hanging_white",
  // },
  // {
  //   name: "quantity_tshirt_polo_medium_folding_colored",
  //   label: "Quantity TShirt/Polo Medium Folding-Colored",
  //   field: "quantity_tshirt_polo_medium_folding_colored",
  // },
  // {
  //   name: "tshirt_polo_medium_folding_colored",
  //   label: "TShirt/Polo Medium Folding-Colored",
  //   field: "tshirt_polo_medium_folding_colored",
  // },
  // {
  //   name: "quantity_tshirt_polo_medium_hanging_colored",
  //   label: "Quantity TShirt/Polo Medium Hanging-Colored",
  //   field: "quantity_tshirt_polo_medium_hanging_colored",
  // },
  // {
  //   name: "tshirt_polo_medium_hanging_colored",
  //   label: "TShirt/Polo Medium Hanging-Colored",
  //   field: "tshirt_polo_medium_hanging_colored",
  // },
  // {
  //   name: "quantity_tshirt_polo_medium_folding_white",
  //   label: "Quantity TShirt/Polo Medium Folding-White",
  //   field: "quantity_tshirt_polo_medium_folding_white",
  // },
  // {
  //   name: "tshirt_polo_medium_folding_white",
  //   label: "TShirt/Polo Medium Folding-White",
  //   field: "tshirt_polo_medium_folding_white",
  // },
  // {
  //   name: "quantity_tshirt_polo_medium_hanging_white",
  //   label: "Quantity TShirt/Polo Medium Hanging-White",
  //   field: "quantity_tshirt_polo_medium_hanging_white",
  // },
  // {
  //   name: "tshirt_polo_medium_hanging_white",
  //   label: "TShirt/Polo Medium Hanging-White",
  //   field: "tshirt_polo_medium_hanging_white",
  // },
  // {
  //   name: "quantity_tshirt_polo_big_folding_colored",
  //   label: "Quantity TShirt/Polo Big Folding-Colored",
  //   field: "quantity_tshirt_polo_big_folding_colored",
  // },
  // {
  //   name: "tshirt_polo_big_folding_colored",
  //   label: "TShirt/Polo Big Folding-Colored",
  //   field: "tshirt_polo_big_folding_colored",
  // },
  // {
  //   name: "quantity_tshirt_polo_big_hanging_colored",
  //   label: "Quantity TShirt/Polo Big Hanging-Colored",
  //   field: "quantity_tshirt_polo_big_hanging_colored",
  // },
  // {
  //   name: "tshirt_polo_big_hanging_colored",
  //   label: "TShirt/Polo Big Hanging-Colored",
  //   field: "tshirt_polo_big_hanging_colored",
  // },
  // {
  //   name: "quantity_tshirt_polo_big_folding_white",
  //   label: "Quantity TShirt/Polo Big Folding-White",
  //   field: "quantity_tshirt_polo_big_folding_white",
  // },
  // {
  //   name: "tshirt_polo_big_folding_white",
  //   label: "TShirt/Polo Big Folding-White",
  //   field: "tshirt_polo_big_folding_white",
  // },
  // {
  //   name: "quantity_tshirt_polo_big_hanging_white",
  //   label: "Quantity TShirt/Polo Big Hanging-White",
  //   field: "quantity_tshirt_polo_big_hanging_white",
  // },
  // {
  //   name: "tshirt_polo_big_hanging_white",
  //   label: "TShirt/Polo Big Hanging-White",
  //   field: "tshirt_polo_big_hanging_white",
  // },
  // {
  //   name: "quantity_plain_trouser_folding_colored",
  //   label: "Quantity Trouser Folding-Colored",
  //   field: "quantity_plain_trouser_folding_colored",
  // },
  // {
  //   name: "plain_trouser_folding_colored",
  //   label: "Trouser Folding-Colored",
  //   field: "plain_trouser_folding_colored",
  // },
  // {
  //   name: "quantity_plain_trouser_hanging_colored",
  //   label: "Quantity Trouser Hanging-Colored",
  //   field: "quantity_plain_trouser_hanging_colored",
  // },
  // {
  //   name: "plain_trouser_hanging_colored",
  //   label: "Trouser Hanging-Colored",
  //   field: "plain_trouser_hanging_colored",
  // },
  // {
  //   name: "quantity_plain_trouser_folding_white",
  //   label: "Quantity Trouser Folding-White",
  //   field: "quantity_plain_trouser_folding_white",
  // },
  // {
  //   name: "plain_trouser_folding_white",
  //   label: "Trouser Folding-White",
  //   field: "plain_trouser_folding_white",
  // },
  // {
  //   name: "quantity_plain_trouser_hanging_white",
  //   label: "Quantity Trouser Hanging-White",
  //   field: "quantity_plain_trouser_hanging_white",
  // },
  // {
  //   name: "plain_trouser_hanging_white",
  //   label: "Trouser Hanging-White",
  //   field: "plain_trouser_hanging_white",
  // },
  // {
  //   name: "quantity_jeans_chinos_trouser_folding_colored",
  //   label: "Quantity Jeans/Chinos Trouser Folding-Colored",
  //   field: "quantity_jeans_chinos_trouser_folding_colored",
  // },
  // {
  //   name: "jeans_chinos_trouser_folding_colored",
  //   label: "Jeans/Chinos Trouser Folding-Colored",
  //   field: "jeans_chinos_trouser_folding_colored",
  // },
  // {
  //   name: "quantity_jeans_chinos_trouser_hanging_colored",
  //   label: "Quantity Jeans/Chinos Trouser Hanging-Colored",
  //   field: "quantity_jeans_chinos_trouser_hanging_colored",
  // },
  // {
  //   name: "jeans_chinos_trouser_hanging_colored",
  //   label: "Jeans/Chinos Trouser Hanging-Colored",
  //   field: "jeans_chinos_trouser_hanging_colored",
  // },
  // {
  //   name: "quantity_jeans_chinos_trouser_folding_white",
  //   label: "Quantity Jeans/Chinos Trouser Folding-White",
  //   field: "quantity_jeans_chinos_trouser_folding_white",
  // },
  // {
  //   name: "jeans_chinos_trouser_folding_white",
  //   label: "Jeans/Chinos Trouser Folding-White",
  //   field: "jeans_chinos_trouser_folding_white",
  // },
  // {
  //   name: "quantity_jeans_chinos_trouser_hanging_white",
  //   label: "Quantity Jeans/Chinos Trouser Hanging-White",
  //   field: "quantity_jeans_chinos_trouser_hanging_white",
  // },
  // {
  //   name: "jeans_chinos_trouser_hanging_white",
  //   label: "Jeans/Chinos Trouser Hanging-White",
  //   field: "jeans_chinos_trouser_hanging_white",
  // },
  // {
  //   name: "quantity_waist_coat_hanging_colored",
  //   label: "Quantity Waist Coat Hanging-Colored",
  //   field: "quantity_waist_coat_hanging_colored",
  // },
  // {
  //   name: "waist_coat_hanging_colored",
  //   label: "Waist Coat Hanging-Colored",
  //   field: "waist_coat_hanging_colored",
  // },
  // {
  //   name: "quantity_waist_coat_hanging_white",
  //   label: "Quantity Waist Coat Hanging-White",
  //   field: "quantity_waist_coat_hanging_white",
  // },
  // {
  //   name: "waist_coat_hanging_white",
  //   label: "Waist Coat Hanging-White",
  //   field: "waist_coat_hanging_white",
  // },
  // {
  //   name: "quantity_tie_colored",
  //   label: "Quantity Tie Colored",
  //   field: "quantity_tie_colored",
  // },
  // {
  //   name: "tie_colored",
  //   label: "Tie Colored",
  //   field: "tie_colored",
  // },
  // {
  //   name: "quantity_tie_white",
  //   label: "Quantity Tie White",
  //   field: "quantity_tie_white",
  // },
  // {
  //   name: "tie_white",
  //   label: "Tie White",
  //   field: "tie_white",
  // },
  // {
  //   name: "quantity_shorts_folding_colored",
  //   label: "Quantity Shorts Folding-Colored",
  //   field: "quantity_shorts_folding_colored",
  // },
  // {
  //   name: "shorts_folding_colored",
  //   label: "Shorts Folding-Colored",
  //   field: "shorts_folding_colored",
  // },
  // {
  //   name: "quantity_shorts_hanging_colored",
  //   label: "Quantity Shorts Hanging-Colored",
  //   field: "quantity_shorts_hanging_colored",
  // },
  // {
  //   name: "shorts_hanging_colored",
  //   label: "Shorts Hanging-Colored",
  //   field: "shorts_hanging_colored",
  // },
  // {
  //   name: "quantity_shorts_folding_white",
  //   label: "Quantity Shorts Folding-White",
  //   field: "quantity_shorts_folding_white",
  // },
  // {
  //   name: "shorts_folding_white",
  //   label: "Shorts Folding-White",
  //   field: "shorts_folding_white",
  // },
  // {
  //   name: "quantity_shorts_hanging_white",
  //   label: "Quantity Shorts Hanging-White",
  //   field: "quantity_shorts_hanging_white",
  // },
  // {
  //   name: "shorts_hanging_white",
  //   label: "Shorts Hanging-White",
  //   field: "shorts_hanging_white",
  // },
  // {
  //   name: "quantity_singlet_colored",
  //   label: "Quantity Singlet Colored",
  //   field: "quantity_singlet_colored",
  // },
  // {
  //   name: "singlet_colored",
  //   label: "Singlet Colored",
  //   field: "singlet_colored",
  // },
  // {
  //   name: "quantity_singlet_white",
  //   label: "Quantity Singlet White",
  //   field: "quantity_singlet_white",
  // },
  // {
  //   name: "singlet_white",
  //   label: "Singlet White",
  //   field: "singlet_white",
  // },
  // {
  //   name: "quantity_boxer_colored",
  //   label: "Quantity Boxer Colored",
  //   field: "quantity_boxer_colored",
  // },
  // {
  //   name: "boxer_colored",
  //   label: "Boxer Colored",
  //   field: "boxer_colored",
  // },
  // {
  //   name: "quantity_boxer_white",
  //   label: "Quantity Boxer White",
  //   field: "quantity_boxer_white",
  // },
  // {
  //   name: "boxer_white",
  //   label: "Boxer White",
  //   field: "boxer_white",
  // },
  // {
  //   name: "quantity_male_2pcs_suit_hanging_colored",
  //   label: "Quantity Male 2 Pcs Suit Hanging-Colored",
  //   field: "quantity_male_2pcs_suit_hanging_colored",
  // },
  // {
  //   name: "male_2pcs_suit_hanging_colored",
  //   label: "Male 2 Pcs Suit Hanging-Colored",
  //   field: "male_2pcs_suit_hanging_colored",
  // },
  // {
  //   name: "quantity_male_2pcs_suit_hanging_white",
  //   label: "Quantity Male 2 Pcs Suit Hanging-White",
  //   field: "quantity_male_2pcs_suit_hanging_white",
  // },
  // {
  //   name: "male_2pcs_suit_hanging_white",
  //   label: "Male 2 Pcs Suit Hanging-White",
  //   field: "male_2pcs_suit_hanging_white",
  // },
  // {
  //   name: "quantity_male_3pcs_suit_hanging_colored",
  //   label: "Quantity Male 3 Pcs Suit Hanging-Colored",
  //   field: "quantity_male_3pcs_suit_hanging_colored",
  // },
  // {
  //   name: "male_3pcs_suit_hanging_colored",
  //   label: "Male 3 Pcs Suit Hanging-Colored",
  //   field: "male_3pcs_suit_hanging_colored",
  // },
  // {
  //   name: "quantity_male_3pcs_suit_hanging_white",
  //   label: "Quantity Male 3 Pcs Suit Hanging-White",
  //   field: "quantity_male_3pcs_suit_hanging_white",
  // },
  // {
  //   name: "male_3pcs_suit_hanging_white",
  //   label: "Male 3 Pcs Suit Hanging-White",
  //   field: "male_3pcs_suit_hanging_white",
  // },
  // {
  //   name: "quantity_female_2pcs_suit_hanging_colored",
  //   label: "Quantity Female 2 Pcs Suit Hanging-Colored",
  //   field: "quantity_female_2pcs_suit_hanging_colored",
  // },
  // {
  //   name: "female_2pcs_suit_hanging_colored",
  //   label: "Female 2 Pcs Suit Hanging-Colored",
  //   field: "female_2pcs_suit_hanging_colored",
  // },
  // {
  //   name: "quantity_female_2pcs_suit_hanging_white",
  //   label: "Quantity Female 2 Pcs Suit Hanging-White",
  //   field: "quantity_female_2pcs_suit_hanging_white",
  // },
  // {
  //   name: "female_2pcs_suit_hanging_white",
  //   label: "Female 2 Pcs Suit Hanging-White",
  //   field: "female_2pcs_suit_hanging_white",
  // },
  // {
  //   name: "quantity_female_3pcs_suit_hanging_colored",
  //   label: "Quantity Female 3 Pcs Suit Hanging-Colored",
  //   field: "quantity_female_3pcs_suit_hanging_colored",
  // },
  // {
  //   name: "female_3pcs_suit_hanging_colored",
  //   label: "Female 3 Pcs Suit Hanging-Colored",
  //   field: "female_3pcs_suit_hanging_colored",
  // },
  // {
  //   name: "quantity_female_3pcs_suit_hanging_white",
  //   label: "Quantity Female 3 Pcs Suit Hanging-White",
  //   field: "quantity_female_3pcs_suit_hanging_white",
  // },
  // {
  //   name: "female_3pcs_suit_hanging_white",
  //   label: "Female 3 Pcs Suit Hanging-White",
  //   field: "female_3pcs_suit_hanging_white",
  // },
  // {
  //   name: "quantity_male_jacket_only_colored",
  //   label: "Quantity Male Jacket Only Colored",
  //   field: "quantity_male_jacket_only_colored",
  // },
  // {
  //   name: "male_jacket_only_colored",
  //   label: "Male Jacket Only Colored",
  //   field: "male_jacket_only_colored",
  // },
  // {
  //   name: "quantity_male_jacket_only_white",
  //   label: "Quantity Male Jacket Only White",
  //   field: "quantity_male_jacket_only_white",
  // },
  // {
  //   name: "male_jacket_only_white",
  //   label: "Male Jacket Only White",
  //   field: "male_jacket_only_white",
  // },
  // {
  //   name: "quantity_female_jacket_only_colored",
  //   label: "Quantity Female Jacket Only Colored",
  //   field: "quantity_female_jacket_only_colored",
  // },
  // {
  //   name: "female_jacket_only_colored",
  //   label: "Female Jacket Only Colored",
  //   field: "female_jacket_only_colored",
  // },
  // {
  //   name: "quantity_female_jacket_only_white",
  //   label: "Quantity Female Jacket Only White",
  //   field: "quantity_female_jacket_only_white",
  // },
  // {
  //   name: "female_jacket_only_white",
  //   label: "Female Jacket Only White",
  //   field: "female_jacket_only_white",
  // },
  // {
  //   name: "quantity_wedding_gown_small_and_little_accessories_white",
  //   label: "Quantity Wedding Gown Small With Little Accessories White",
  //   field: "quantity_wedding_gown_small_and_little_accessories_white",
  // },
  // {
  //   name: "wedding_gown_small_and_little_accessories_white",
  //   label: "Wedding Gown Small With Little Accessories White",
  //   field: "wedding_gown_small_and_little_accessories_white",
  // },
  // {
  //   name: "quantity_wedding_gown_big_and_plenty_accessories_white",
  //   label: "Quantity Wedding Gown Big With Plenty Accessories White",
  //   field: "quantity_wedding_gown_big_and_plenty_accessories_white",
  // },
  // {
  //   name: "wedding_gown_big_and_plenty_accessories_white",
  //   label: "Wedding Gown Big With Plenty Accessories White",
  //   field: "wedding_gown_big_and_plenty_accessories_white",
  // },
  // {
  //   name: "quantity_Kids_blouse_folding_colored",
  //   label: "Quantity Kids Blouse Folding-Colored",
  //   field: "quantity_Kids_blouse_folding_colored",
  // },
  // {
  //   name: "Kids_blouse_folding_colored",
  //   label: "Kids Blouse Folding-Colored",
  //   field: "Kids_blouse_folding_colored",
  // },
  // {
  //   name: "quantity_Kids_blouse_hanging_colored",
  //   label: "Quantity Kids Blouse Hanging-Colored",
  //   field: "quantity_Kids_blouse_hanging_colored",
  // },
  // {
  //   name: "Kids_blouse_hanging_colored",
  //   label: "Kids Blouse Hanging-Colored",
  //   field: "Kids_blouse_hanging_colored",
  // },
  // {
  //   name: "quantity_Kids_blouse_folding_white",
  //   label: "Quantity Kids Blouse Folding-White",
  //   field: "quantity_Kids_blouse_folding_white",
  // },
  // {
  //   name: "Kids_blouse_folding_white",
  //   label: "Kids Blouse Folding-White",
  //   field: "Kids_blouse_folding_white",
  // },
  // {
  //   name: "quantity_Kids_blouse_hanging_white",
  //   label: "Quantity Kids Blouse Hanging-White",
  //   field: "quantity_Kids_blouse_hanging_white",
  // },
  // {
  //   name: "Kids_blouse_hanging_white",
  //   label: "Kids Blouse Hanging-White",
  //   field: "Kids_blouse_hanging_white",
  // },
  // {
  //   name: "quantity_jalamia_colored",
  //   label: "Quantity Jalamia Colored",
  //   field: "quantity_jalamia_colored",
  // },
  // {
  //   name: "jalamia_colored",
  //   label: "Jalamia Colored",
  //   field: "jalamia_colored",
  // },
  // {
  //   name: "quantity_jalamia_white",
  //   label: "Quantity Jalamia White",
  //   field: "quantity_jalamia_white",
  // },
  // {
  //   name: "jalamia_white",
  //   label: "Jalamia White",
  //   field: "jalamia_white",
  // },
  // {
  //   name: "quantity_camisole_colored",
  //   label: "Quantity Camisole Colored",
  //   field: "quantity_camisole_colored",
  // },
  // {
  //   name: "camisole_colored",
  //   label: "Camisole Colored",
  //   field: "camisole_colored",
  // },
  // {
  //   name: "quantity_camisole_white",
  //   label: "Quantity Camisole White",
  //   field: "quantity_camisole_white",
  // },
  // {
  //   name: "camisole_white",
  //   label: "Camisole White",
  //   field: "camisole_white",
  // },
  // {
  //   name: "quantity_wrapper_buba_scarf_colored",
  //   label: "Quantity Wrapper, Buba And Scarf Colored",
  //   field: "quantity_wrapper_buba_scarf_colored",
  // },
  // {
  //   name: "wrapper_buba_scarf_colored",
  //   label: "Wrapper, Buba And Scarf Colored",
  //   field: "wrapper_buba_scarf_colored",
  // },
  // {
  //   name: "quantity_wrapper_buba_scarf_white",
  //   label: "Quantity Wrapper, Buba And Scarf White",
  //   field: "quantity_wrapper_buba_scarf_white",
  // },
  // {
  //   name: "wrapper_buba_scarf_white",
  //   label: "Wrapper, Buba And Scarf White",
  //   field: "wrapper_buba_scarf_white",
  // },
  // {
  //   name: "quantity_wrapper_buba_no_scarf_colored",
  //   label: "Quantity Wrapper, Buba And No-Scarf Colored",
  //   field: "quantity_wrapper_buba_no_scarf_colored",
  // },
  // {
  //   name: "wrapper_buba_no_scarf_colored",
  //   label: "Wrapper, Buba And No-Scarf Colored",
  //   field: "wrapper_buba_no_scarf_colored",
  // },
  // {
  //   name: "quantity_wrapper_buba_no_scarf_white",
  //   label: "Quantity Wrapper, Buba And No-Scarf White",
  //   field: "quantity_wrapper_buba_no_scarf_white",
  // },
  // {
  //   name: "wrapper_buba_no_scarf_white",
  //   label: "Wrapper, Buba And No-Scarf White",
  //   field: "wrapper_buba_no_scarf_white",
  // },
  // {
  //   name: "quantity_wrapper_only_colored",
  //   label: "Quantity Wrapper Only Colored",
  //   field: "quantity_wrapper_only_colored",
  // },
  // {
  //   name: "wrapper_only_colored",
  //   label: "Wrapper Only Colored",
  //   field: "wrapper_only_colored",
  // },
  // {
  //   name: "quantity_wrapper_only_white",
  //   label: "Quantity Wrapper Only White",
  //   field: "quantity_wrapper_only_white",
  // },
  // {
  //   name: "wrapper_only_white",
  //   label: "Wrapper Only White",
  //   field: "wrapper_only_white",
  // },
  // {
  //   name: "quantity_two_wrapper_scarf_or_no_scarf_colored",
  //   label: "Quantity Two Wrapper Scarf/No-Scarf Only Colored",
  //   field: "quantity_two_wrapper_scarf_or_no_scarf_colored",
  // },
  // {
  //   name: "two_wrapper_scarf_or_no_scarf_colored",
  //   label: "Two Wrapper Scarf/No-Scarf Only Colored",
  //   field: "two_wrapper_scarf_or_no_scarf_colored",
  // },
  // {
  //   name: "quantity_two_wrapper_scarf_or_no_scarf_white",
  //   label: "Quantity Two Wrapper Scarf/No-Scarf Only White",
  //   field: "quantity_two_wrapper_scarf_or_no_scarf_white",
  // },
  // {
  //   name: "two_wrapper_scarf_or_no_scarf_white",
  //   label: "Two Wrapper Scarf/No-Scarf Only White",
  //   field: "two_wrapper_scarf_or_no_scarf_white",
  // },
  // {
  //   name: "quantity_aso_oke_agbada_and_cap_colored",
  //   label: "Quantity Aso-Oke Agbada and Cap 2pcs Colored",
  //   field: "quantity_aso_oke_agbada_and_cap_colored",
  // },
  // {
  //   name: "aso_oke_agbada_and_cap_colored",
  //   label: "Aso-Oke Agbada and Cap 2pcs Colored",
  //   field: "aso_oke_agbada_and_cap_colored",
  // },
  // {
  //   name: "quantity_male_aso_oke_and_cap_3pcs_colored",
  //   label: "Quantity Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored",
  //   field: "quantity_male_aso_oke_and_cap_3pcs_colored",
  // },
  // {
  //   name: "male_aso_oke_and_cap_3pcs_colored",
  //   label: "Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored",
  //   field: "male_aso_oke_and_cap_3pcs_colored",
  // },
  // {
  //   name: "quantity_aso_oke_wrapper_buba_gele_colored",
  //   label: "Quantity Aso-Oke Wrapper, Buba and Gele 3pcs Colored",
  //   field: "quantity_aso_oke_wrapper_buba_gele_colored",
  // },
  // {
  //   name: "aso_oke_wrapper_buba_gele_colored",
  //   label: "Aso-Oke Wrapper, Buba and Gele 3pcs Colored",
  //   field: "aso_oke_wrapper_buba_gele_colored",
  // },
  // {
  //   name: "quantity_aso_oke_wrapper_gele_colored",
  //   label: "Quantity Aso-Oke Wrapper and Gele 2pcs Colored",
  //   field: "quantity_aso_oke_wrapper_gele_colored",
  // },
  // {
  //   name: "aso_oke_wrapper_gele_colored",
  //   label: "Aso-Oke Wrapper and Gele 2pcs Colored",
  //   field: "aso_oke_wrapper_gele_colored",
  // },
  // {
  //   name: "quantity_aso_oke_wrapper_gele_ipele_colored",
  //   label: "Quantity Aso-Oke Wrapper, Gele and Ipele 3pcs Colored",
  //   field: "quantity_aso_oke_wrapper_gele_ipele_colored",
  // },
  // {
  //   name: "aso_oke_wrapper_gele_ipele_colored",
  //   label: "Aso-Oke Wrapper, Gele and Ipele 3pcs Colored",
  //   field: "aso_oke_wrapper_gele_ipele_colored",
  // },
  // {
  //   name: "quantity_aso_oke_wrapper_gele_ipele_white",
  //   label: "Quantity Aso-Oke Wrapper, Gele and Ipele 3pcs White",
  //   field: "quantity_aso_oke_wrapper_gele_ipele_white",
  // },
  // {
  //   name: "aso_oke_wrapper_gele_ipele_white",
  //   label: "Aso-Oke Wrapper, Gele and Ipele 3pcs White",
  //   field: "aso_oke_wrapper_gele_ipele_white",
  // },
  // {
  //   name: "quantity_aso_oke_headtie_ipele_colored",
  //   label: "Quantity Aso-Oke Head-Tie Ipele 2pcs White",
  //   field: "quantity_aso_oke_headtie_ipele_colored",
  // },
  // {
  //   name: "aso_oke_headtie_ipele_colored",
  //   label: "Aso-Oke Head-Tie Ipele 2pcs White",
  //   field: "aso_oke_headtie_ipele_colored",
  // },
  // {
  //   name: "quantity_male_complete_aso_oke_white",
  //   label: "Quantity Complete Male Aso-Oke 3pcs White",
  //   field: "quantity_male_complete_aso_oke_white",
  // },
  // {
  //   name: "male_complete_aso_oke_white",
  //   label: "Complete Male Aso-Oke 3pcs White",
  //   field: "male_complete_aso_oke_white",
  // },
  // {
  //   name: "quantity_female_complete_aso_oke_white",
  //   label: "Quantity Complete Female Aso-Oke 3pcs White",
  //   field: "quantity_female_complete_aso_oke_white",
  // },
  // {
  //   name: "female_complete_aso_oke_white",
  //   label: "Complete Female Aso-Oke 3pcs White",
  //   field: "female_complete_aso_oke_white",
  // },
  // {
  //   name: "quantity_female_inner_wear_colored",
  //   label: "Quantity Female Inner-Wear Colored",
  //   field: "quantity_female_inner_wear_colored",
  // },
  // {
  //   name: "female_inner_wear_colored",
  //   label: "Female Inner-Wear Colored",
  //   field: "female_inner_wear_colored",
  // },
  // {
  //   name: "quantity_female_inner_wear_white",
  //   label: "Quantity Female Inner-Wear White",
  //   field: "quantity_female_inner_wear_white",
  // },
  // {
  //   name: "female_inner_wear_white",
  //   label: "Female Inner-Wear White",
  //   field: "female_inner_wear_white",
  // },
  // {
  //   name: "quantity_head_tie_gele_colored",
  //   label: "Quantity Head-Tie/Gele Colored",
  //   field: "quantity_head_tie_gele_colored",
  // },
  // {
  //   name: "head_tie_gele_colored",
  //   label: "Head-Tie/Gele Colored",
  //   field: "head_tie_gele_colored",
  // },
  // {
  //   name: "quantity_head_tie_gele_white",
  //   label: "Quantity Head-Tie/Gele White",
  //   field: "quantity_head_tie_gele_white",
  // },
  // {
  //   name: "head_tie_gele_white",
  //   label: "Head-Tie/Gele White",
  //   field: "head_tie_gele_white",
  // },
  // {
  //   name: "quantity_gown_children_colored",
  //   label: "Quantity Gown Children Colored",
  //   field: "quantity_gown_children_colored",
  // },
  // {
  //   name: "gown_children_colored",
  //   label: "Gown Children Colored",
  //   field: "gown_children_colored",
  // },
  // {
  //   name: "quantity_gown_children_white",
  //   label: "Quantity Gown Children White",
  //   field: "quantity_gown_children_white",
  // },
  // {
  //   name: "gown_children_white",
  //   label: "Gown Children White",
  //   field: "gown_children_white",
  // },
  // {
  //   name: "quantity_gown_english_adult_folding_colored",
  //   label: "Quantity Gown English Adult Folding Colored",
  //   field: "quantity_gown_english_adult_folding_colored",
  // },
  // {
  //   name: "gown_english_adult_folding_colored",
  //   label: "Gown English Adult Folding Colored",
  //   field: "gown_english_adult_folding_colored",
  // },
  // {
  //   name: "quantity_gown_english_adult_folding_white",
  //   label: "Quantity Gown English Adult Folding White",
  //   field: "quantity_gown_english_adult_folding_white",
  // },
  // {
  //   name: "gown_english_adult_folding_white",
  //   label: "Gown English Adult Folding White",
  //   field: "gown_english_adult_folding_white",
  // },
  // {
  //   name: "quantity_gown_english_adult_hanging_colored",
  //   label: "Quantity Gown English Adult Hanging Colored",
  //   field: "quantity_gown_english_adult_hanging_colored",
  // },
  // {
  //   name: "gown_english_adult_hanging_colored",
  //   label: "Gown English Adult Hanging Colored",
  //   field: "gown_english_adult_hanging_colored",
  // },
  // {
  //   name: "quantity_gown_english_adult_hanging_white",
  //   label: "Quantity Gown English Adult Hanging White",
  //   field: "quantity_gown_english_adult_hanging_white",
  // },
  // {
  //   name: "gown_english_adult_hanging_white",
  //   label: "Gown English Adult Hanging White",
  //   field: "gown_english_adult_hanging_white",
  // },
  // {
  //   name: "quantity_gown_native_folding_colored",
  //   label: "Quantity Gown Native Folding Colored",
  //   field: "quantity_gown_native_folding_colored",
  // },
  // {
  //   name: "gown_native_folding_colored",
  //   label: "Gown Native Folding Colored",
  //   field: "gown_native_folding_colored",
  // },
  // {
  //   name: "quantity_gown_native_folding_white",
  //   label: "Quantity Gown Native Folding White",
  //   field: "quantity_gown_native_folding_white",
  // },
  // {
  //   name: "gown_native_folding_white",
  //   label: "Gown Native Folding White",
  //   field: "gown_native_folding_white",
  // },
  // {
  //   name: "quantity_skirt_and_blouse_english_hanging_colored",
  //   label: "Quantity Skirt and Blouse English 2pcs Hanging Colored",
  //   field: "quantity_skirt_and_blouse_english_hanging_colored",
  // },
  // {
  //   name: "skirt_and_blouse_english_hanging_colored",
  //   label: "Skirt and Blouse English 2pcs Hanging Colored",
  //   field: "skirt_and_blouse_english_hanging_colored",
  // },
  // {
  //   name: "quantity_skirt_and_blouse_english_hanging_white",
  //   label: "Quantity Skirt and Blouse English 2pcs Hanging White",
  //   field: "quantity_skirt_and_blouse_english_hanging_white",
  // },
  // {
  //   name: "skirt_and_blouse_english_hanging_white",
  //   label: "Skirt and Blouse English 2pcs Hanging White",
  //   field: "skirt_and_blouse_english_hanging_white",
  // },
  // {
  //   name: "quantity_skirt_and_blouse_native_folding_colored",
  //   label: "Quantity Skirt and Blouse Native 2pcs Folding Colored",
  //   field: "quantity_skirt_and_blouse_native_folding_colored",
  // },
  // {
  //   name: "skirt_and_blouse_native_folding_colored",
  //   label: "Skirt and Blouse Native 2pcs Folding Colored",
  //   field: "skirt_and_blouse_native_folding_colored",
  // },
  // {
  //   name: "quantity_skirt_and_blouse_native_folding_white",
  //   label: "Quantity Skirt and Blouse Native 2pcs Folding White",
  //   field: "quantity_skirt_and_blouse_native_folding_white",
  // },
  // {
  //   name: "skirt_and_blouse_native_folding_white",
  //   label: "Skirt and Blouse Native 2pcs Folding White",
  //   field: "skirt_and_blouse_native_folding_white",
  // },
  // {
  //   name: "quantity_female_native_buba_and_trouser_colored",
  //   label: "Quantity Female Native Buba and Trouser 2pcs Colored",
  //   field: "quantity_female_native_buba_and_trouser_colored",
  // },
  // {
  //   name: "female_native_buba_and_trouser_colored",
  //   label: "Female Native Buba and Trouser 2pcs Colored",
  //   field: "female_native_buba_and_trouser_colored",
  // },
  // {
  //   name: "quantity_female_native_buba_and_trouser_white",
  //   label: "Quantity Female Native Buba and Trouser 2pcs White",
  //   field: "quantity_female_native_buba_and_trouser_white",
  // },
  // {
  //   name: "female_native_buba_and_trouser_white",
  //   label: "Female Native Buba and Trouser 2pcs White",
  //   field: "female_native_buba_and_trouser_white",
  // },
  // {
  //   name: "quantity_male_cap_colored",
  //   label: "Quantity Male Cap Colored",
  //   field: "quantity_male_cap_colored",
  // },
  // {
  //   name: "male_cap_colored",
  //   label: "Male Cap Colored",
  //   field: "male_cap_colored",
  // },
  // {
  //   name: "quantity_male_cap_white",
  //   label: "Quantity Male Cap White",
  //   field: "quantity_male_cap_white",
  // },
  // {
  //   name: "male_cap_white",
  //   label: "Male Cap White",
  //   field: "male_cap_white",
  // },
  // {
  //   name: "quantity_female_cap_colored",
  //   label: "Quantity Female Cap Colored",
  //   field: "quantity_female_cap_colored",
  // },
  // {
  //   name: "female_cap_colored",
  //   label: "Female Cap Colored",
  //   field: "female_cap_colored",
  // },
  // {
  //   name: "quantity_female_cap_white",
  //   label: "Quantity Female Cap White",
  //   field: "quantity_female_cap_white",
  // },
  // {
  //   name: "female_cap_white",
  //   label: "Female Cap White",
  //   field: "female_cap_white",
  // },
  // {
  //   name: "quantity_turban_colored",
  //   label: "Quantity Turban Colored",
  //   field: "quantity_turban_colored",
  // },
  // {
  //   name: "turban_colored",
  //   label: "Turban Colored",
  //   field: "turban_colored",
  // },
  // {
  //   name: "quantity_turban_white",
  //   label: "Quantity Turban White",
  //   field: "quantity_turban_white",
  // },
  // {
  //   name: "turban_white",
  //   label: "Turban White",
  //   field: "turban_white",
  // },
  // {
  //   name: "quantity_sweater_small_colored",
  //   label: "Quantity Sweater Small Colored",
  //   field: "quantity_sweater_small_colored",
  // },
  // {
  //   name: "sweater_small_colored",
  //   label: "Sweater Small Colored",
  //   field: "sweater_small_colored",
  // },
  // {
  //   name: "quantity_sweater_small_white",
  //   label: "Quantity Sweater Small White",
  //   field: "quantity_sweater_small_white",
  // },
  // {
  //   name: "sweater_small_white",
  //   label: "Sweater Small White",
  //   field: "sweater_small_white",
  // },
  // {
  //   name: "quantity_sweater_normal_colored",
  //   label: "Quantity Sweater Normal Colored",
  //   field: "quantity_sweater_normal_colored",
  // },
  // {
  //   name: "sweater_normal_colored",
  //   label: "Sweater Normal Colored",
  //   field: "sweater_normal_colored",
  // },
  // {
  //   name: "quantity_sweater_normal_white",
  //   label: "Quantity Sweater Normal White",
  //   field: "quantity_sweater_normal_white",
  // },
  // {
  //   name: "sweater_normal_white",
  //   label: "Sweater Normal White",
  //   field: "sweater_normal_white",
  // },
  // {
  //   name: "quantity_sweater_big_colored",
  //   label: "Quantity Sweater Big Colored",
  //   field: "quantity_sweater_big_colored",
  // },
  // {
  //   name: "sweater_big_colored",
  //   label: "Sweater Big Colored",
  //   field: "sweater_big_colored",
  // },
  // {
  //   name: "quantity_sweater_big_white",
  //   label: "Quantity Sweater Big White",
  //   field: "quantity_sweater_big_white",
  // },
  // {
  //   name: "sweater_big_white",
  //   label: "Sweater Big White",
  //   field: "sweater_big_white",
  // },
  // {
  //   name: "quantity_towel_small_colored",
  //   label: "Quantity Towel Small Colored",
  //   field: "quantity_towel_small_colored",
  // },
  // {
  //   name: "towel_small_colored",
  //   label: "Towel Small Colored",
  //   field: "towel_small_colored",
  // },
  // {
  //   name: "quantity_towel_small_white",
  //   label: "Quantity Towel Small White",
  //   field: "quantity_towel_small_white",
  // },
  // {
  //   name: "towel_small_white",
  //   label: "Towel Small White",
  //   field: "towel_small_white",
  // },
  // {
  //   name: "quantity_towel_normal_colored",
  //   label: "Quantity Towel Normal Colored",
  //   field: "quantity_towel_normal_colored",
  // },
  // {
  //   name: "towel_normal_colored",
  //   label: "Towel Normal Colored",
  //   field: "towel_normal_colored",
  // },
  // {
  //   name: "quantity_towel_normal_white",
  //   label: "Quantity Towel Normal White",
  //   field: "quantity_towel_normal_white",
  // },
  // {
  //   name: "towel_normal_white",
  //   label: "Towel Normal White",
  //   field: "towel_normal_white",
  // },
  // {
  //   name: "quantity_towel_big_colored",
  //   label: "Quantity Towel Big Colored",
  //   field: "quantity_towel_big_colored",
  // },
  // {
  //   name: "towel_big_colored",
  //   label: "Towel Big Colored",
  //   field: "towel_big_colored",
  // },
  // {
  //   name: "quantity_towel_big_white",
  //   label: "Quantity Towel Big White",
  //   field: "quantity_towel_big_white",
  // },
  // {
  //   name: "towel_big_white",
  //   label: "Towel Big White",
  //   field: "towel_big_white",
  // },
  // {
  //   name: "quantity_bed_spread_normal_colored",
  //   label: "Quantity Bed-Spread Normal Colored",
  //   field: "quantity_bed_spread_normal_colored",
  // },
  // {
  //   name: "bed_spread_normal_colored",
  //   label: "Bed-Spread Normal Colored",
  //   field: "bed_spread_normal_colored",
  // },
  // {
  //   name: "quantity_bed_spread_normal_white",
  //   label: "Quantity Bed-Spread Normal White",
  //   field: "quantity_bed_spread_normal_white",
  // },
  // {
  //   name: "bed_spread_normal_white",
  //   label: "Bed-Spread Normal White",
  //   field: "bed_spread_normal_white",
  // },
  // {
  //   name: "quantity_bed_spread_big_colored",
  //   label: "Quantity Bed-Spread Big Colored",
  //   field: "quantity_bed_spread_big_colored",
  // },
  // {
  //   name: "bed_spread_big_colored",
  //   label: "Bed-Spread Big Colored",
  //   field: "bed_spread_big_colored",
  // },
  // {
  //   name: "quantity_bed_spread_big_white",
  //   label: "Quantity Bed-Spread Big White",
  //   field: "quantity_bed_spread_big_white",
  // },
  // {
  //   name: "bed_spread_big_white",
  //   label: "Bed-Spread Big White",
  //   field: "bed_spread_big_white",
  // },
  // {
  //   name: "quantity_bed_spread_double_colored",
  //   label: "Quantity Bed-Spread Double Colored",
  //   field: "quantity_bed_spread_double_colored",
  // },
  // {
  //   name: "bed_spread_double_colored",
  //   label: "Bed-Spread Double Colored",
  //   field: "bed_spread_double_colored",
  // },
  // {
  //   name: "quantity_bed_spread_double_white",
  //   label: "Quantity Bed-Spread Double White",
  //   field: "quantity_bed_spread_double_white",
  // },
  // {
  //   name: "bed_spread_double_white",
  //   label: "Bed-Spread Double White",
  //   field: "bed_spread_double_white",
  // },
  // {
  //   name: "quantity_duvet_normal_colored",
  //   label: "Quantity Duvet Normal Colored",
  //   field: "quantity_duvet_normal_colored",
  // },
  // {
  //   name: "duvet_normal_colored",
  //   label: "Duvet Normal Colored",
  //   field: "duvet_normal_colored",
  // },
  // {
  //   name: "quantity_duvet_normal_white",
  //   label: "Quantity Duvet Normal White",
  //   field: "quantity_duvet_normal_white",
  // },
  // {
  //   name: "duvet_normal_white",
  //   label: "Duvet Normal White",
  //   field: "duvet_normal_white",
  // },
  // {
  //   name: "quantity_duvet_big_colored",
  //   label: "Quantity Duvet Big Colored",
  //   field: "quantity_duvet_big_colored",
  // },
  // {
  //   name: "duvet_big_colored",
  //   label: "Duvet Big Colored",
  //   field: "duvet_big_colored",
  // },
  // {
  //   name: "quantity_duvet_big_white",
  //   label: "Quantity Duvet Big White",
  //   field: "quantity_duvet_big_white",
  // },
  // {
  //   name: "duvet_big_white",
  //   label: "Duvet Big White",
  //   field: "duvet_big_white",
  // },
  // {
  //   name: "quantity_curtain_normal_colored",
  //   label: "Quantity Curtain Normal Colored",
  //   field: "quantity_curtain_normal_colored",
  // },
  // {
  //   name: "curtain_normal_colored",
  //   label: "Curtain Normal Colored",
  //   field: "curtain_normal_colored",
  // },
  // {
  //   name: "quantity_curtain_big_colored",
  //   label: "Quantity Curtain Big Colored",
  //   field: "quantity_curtain_big_colored",
  // },
  // {
  //   name: "curtain_big_colored",
  //   label: "Curtain Big Colored",
  //   field: "curtain_big_colored",
  // },
  // {
  //   name: "quantity_curtain_very_big_colored",
  //   label: "Quantity Curtain Very Big Colored",
  //   field: "quantity_curtain_very_big_colored",
  // },
  // {
  //   name: "curtain_very_big_colored",
  //   label: "Curtain Very Big Colored",
  //   field: "curtain_very_big_colored",
  // },
  // // {
  // //   name: "quantity_blanket_colored",
  // //   label: "Quantity Blanket Colored",
  // //   field: "quantity_blanket_colored",
  // // },
  // // {
  // //   name: "blanket_colored",
  // //   label: "Blanket Colored",
  // //   field: "blanket_colored",
  // // },
  // {
  //   name: "quantity_pyjamas_small_colored",
  //   label: "Quantity Pyjamas Small Colored",
  //   field: "quantity_pyjamas_small_colored",
  // },
  // {
  //   name: "pyjamas_small_colored",
  //   label: "Pyjamas Small Colored",
  //   field: "pyjamas_small_colored",
  // },
  // {
  //   name: "quantity_pyjamas_small_white",
  //   label: "Quantity Pyjamas Small White",
  //   field: "quantity_pyjamas_small_white",
  // },
  // {
  //   name: "pyjamas_small_white",
  //   label: "Pyjamas Small White",
  //   field: "pyjamas_small_white",
  // },
  // {
  //   name: "quantity_pyjamas_big_colored",
  //   label: "Quantity Pyjamas Big Colored",
  //   field: "quantity_pyjamas_big_colored",
  // },
  // {
  //   name: "pyjamas_big_colored",
  //   label: "Pyjamas Big Colored",
  //   field: "pyjamas_big_colored",
  // },
  // {
  //   name: "quantity_pyjamas_big_white",
  //   label: "Quantity Pyjamas Big White",
  //   field: "quantity_pyjamas_big_white",
  // },
  // {
  //   name: "pyjamas_big_white",
  //   label: "Pyjamas Big White",
  //   field: "pyjamas_big_white",
  // },
  // {
  //   name: "quantity_blanket_colored",
  //   label: "Quantity Blanket Colored",
  //   field: "quantity_blanket_colored",
  // },
  // {
  //   name: "blanket_colored",
  //   label: "Blanket Colored",
  //   field: "blanket_colored",
  // },
  // {
  //   name: "quantity_pillow_cases_colored",
  //   label: "Quantity Pillow Cases Colored",
  //   field: "quantity_pillow_cases_colored",
  // },
  // {
  //   name: "pillow_cases_colored",
  //   label: "Pillow Cases Colored",
  //   field: "pillow_cases_colored",
  // },
  // {
  //   name: "quantity_pillow_cases_white",
  //   label: "Quantity Pillow Cases White",
  //   field: "quantity_pillow_cases_white",
  // },
  // {
  //   name: "pillow_cases_white",
  //   label: "Pillow Cases White",
  //   field: "pillow_cases_white",
  // },
  { name: "comment_section", label: "Comment", field: "comment_section" },
  { name: "discount", label: "Discount", field: "discount" },
  { name: "addon", label: "Addon", field: "addon" },
  { name: "addon_amount", label: "Addon Amount", field: "addon_amount" },
  { name: "deposit", label: "Deposit", field: "deposit" },
  { name: "deposit_type", label: "Deposit Type", field: "deposit_type" },
  { name: "balance", label: "Balance", field: "balance" },
  { name: "final_amount", label: "Final Amount", field: "final_amount" },
  {
    name: "customer_collected",
    label: "Customer Collected",
    field: "customer_collected",
  },
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

const pagination = ref({
  sortBy: "CreatedAt", // Set default sort field
  descending: false,
  page: 1,
  rowsPerPage: 10,
});

const loadData = (pageNumber) => {
  const token = useStore.getToken;
  console.log(token, "token");
  api
    .get(`/intake/all/${pageNumber}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data.data;
      pageEnd.value = response.data.has_next;
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

const handleTableRequest = (params) => {
  pagination.value = { ...params.pagination, rowsPerPage: 10 }; // Ensure rowsPerPage is 10
  fetchData(pagination.value.page);
};

const handlePreviousPage = () => {
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  if (pagination.value.page > 1) {
    pagination.value.page--;
    loadData(pagination.value.page);
  }
  $q.loading.hide();
};

const handleNextPage = () => {
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  if (pageEnd.value == true) {
    pagination.value.page++;
    loadData(pagination.value.page);
  }
  $q.loading.hide();
};

onMounted(() => {
  loadData(pagination.value.page);
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
