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
            <q-input
              required
              class=""
              outlined
              v-model="male_native_2pcs_folding_colored"
              type="number"
              hint="Male Native 2 Pcs Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              outlined
              v-model="male_native_2pcs_hanging_colored"
              type="number"
              hint="Male Native 2 Pcs Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              outlined
              v-model="male_native_2pcs_folding_white"
              type="number"
              hint="Male Native 2 Pcs Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              outlined
              v-model="male_native_2pcs_hanging_white"
              type="number"
              hint="Male Native 2 Pcs Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              outlined
              v-model="male_native_3pcs_notAgbada_folding_colored"
              type="number"
              hint="Male Native 3 Pcs Not-Agbada Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              outlined
              v-model="male_native_3pcs_notAgbada_hanging_colored"
              type="number"
              hint="Male Native 3 Pcs Not-Agbada Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_native_3pcs_notAgbada_folding_white"
              outlined
              type="number"
              hint="Male Native 3 Pcs Not-Agbada Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_native_3pcs_notAgbada_hanging_white"
              outlined
              type="number"
              hint="Male Native 3 Pcs Not-Agbada Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="native_top_only_folding_colored"
              outlined
              type="number"
              hint="Native Top Only Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="native_top_only_hanging_colored"
              outlined
              type="number"
              hint="Native Top Only Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="native_top_only_folding_white"
              outlined
              type="number"
              hint="Native Top Only Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="native_top_only_hanging_white"
              outlined
              type="number"
              hint="Native Top Only Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="native_trouser_only_folding_colored"
              outlined
              type="number"
              hint="Native Trouser Only Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="native_trouser_only_hanging_colored"
              outlined
              type="number"
              hint="Native Trouser Only Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="native_trouser_only_folding_white"
              outlined
              type="number"
              hint="Native Trouser Only Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="native_trouser_only_hanging_white"
              outlined
              type="number"
              hint="Native Trouser Only Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_agbada_only_folding_colored"
              outlined
              type="number"
              hint="Agbada Only Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_agbada_only_hanging_colored"
              outlined
              type="number"
              hint="Agbada Only Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_agbada_only_folding_white"
              outlined
              type="number"
              hint="Agbada Only Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_agbada_only_hanging_white"
              outlined
              type="number"
              hint="Agbada Only Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="complete_male_agbada_3pcs_Folding_colored"
              outlined
              type="number"
              hint="Complete Male Agbada 3 Pcs Hanging-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="complete_male_agbada_3pcs_Hanging_colored"
              outlined
              type="number"
              hint="Complete Male Agbada 3 Pcs Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="complete_male_agbada_3pcs_Folding_white"
              outlined
              type="number"
              hint="Complete Male Agbada 3 Pcs Hanging-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="complete_male_agbada_3pcs_Hanging_white"
              outlined
              type="number"
              hint="Complete Male Agbada 3 Pcs Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="normal_shirt_folding_colored"
              outlined
              type="number"
              hint="Shirt Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="normal_shirt_hanging_colored"
              outlined
              type="number"
              hint="Shirt Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="normal_shirt_folding_white"
              outlined
              type="number"
              hint="Shirt Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="normal_shirt_hanging_white"
              outlined
              type="number"
              hint="Shirt Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_big_folding_colored"
              outlined
              type="number"
              hint="Shirt Big Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_big_hanging_colored"
              outlined
              type="number"
              hint="Shirt Big Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_big_folding_white"
              outlined
              type="number"
              hint="Shirt Big Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_big_hanging_white"
              outlined
              type="number"
              hint="Shirt Big Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_x_large_folding_colored"
              outlined
              type="number"
              hint="Shirt XLarge Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_x_large_hanging_colored"
              outlined
              type="number"
              hint="Shirt XLarge Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_x_large_folding_white"
              outlined
              type="number"
              hint="Shirt XLarge Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_x_large_hanging_white"
              outlined
              type="number"
              hint="Shirt XLarge Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_children_folding_colored"
              outlined
              type="number"
              hint="Shirt Children Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_children_hanging_colored"
              outlined
              type="number"
              hint="Shirt Children Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_children_folding_white"
              outlined
              type="number"
              hint="Shirt Children Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shirt_children_hanging_white"
              outlined
              type="number"
              hint="Shirt Children Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="blouse_folding_colored"
              outlined
              type="number"
              hint="Blouse Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="blouse_hanging_colored"
              outlined
              type="number"
              hint="Blouse Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="blouse_folding_white"
              outlined
              type="number"
              hint="Blouse Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="blouse_hanging_white"
              outlined
              type="number"
              hint="Blouse Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="blouse_x_large_folding_colored"
              outlined
              type="number"
              hint="Blouse XLarge Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="blouse_x_large_hanging_colored"
              outlined
              type="number"
              hint="Blouse XLarge Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="blouse_x_large_folding_white"
              outlined
              type="number"
              hint="Blouse XLarge Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="blouse_x_large_hanging_white"
              outlined
              type="number"
              hint="Blouse XLarge Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_shirt_folding_colored"
              outlined
              type="number"
              hint="Female Shirt Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_shirt_hanging_colored"
              outlined
              type="number"
              hint="Female Shirt Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_shirt_folding_white"
              outlined
              type="number"
              hint="Female Shirt Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_shirt_hanging_white"
              outlined
              type="number"
              hint="Female Shirt Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_small_folding_colored"
              outlined
              type="number"
              hint="TShirt/Polo Small Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_small_hanging_colored"
              outlined
              type="number"
              hint="TShirt/Polo Small Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_small_folding_white"
              outlined
              type="number"
              hint="TShirt/Polo Small Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_small_hanging_white"
              outlined
              type="number"
              hint="TShirt/Polo Small Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_medium_folding_colored"
              outlined
              type="number"
              hint="TShirt/Polo Medium Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_medium_hanging_colored"
              outlined
              type="number"
              hint="TShirt/Polo Medium Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_medium_folding_white"
              outlined
              type="number"
              hint="TShirt/Polo Medium Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_medium_hanging_white"
              outlined
              type="number"
              hint="TShirt/Polo Medium Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_big_folding_colored"
              outlined
              type="number"
              hint="TShirt/Polo Big Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_big_hanging_colored"
              outlined
              type="number"
              hint="TShirt/Polo Big Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_big_folding_white"
              outlined
              type="number"
              hint="TShirt/Polo Big Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tshirt_polo_big_hanging_white"
              outlined
              type="number"
              hint="TShirt/Polo Big Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="plain_trouser_folding_colored"
              outlined
              type="number"
              hint="Trouser Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="plain_trouser_hanging_colored"
              outlined
              type="number"
              hint="Trouser Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="plain_trouser_folding_white"
              outlined
              type="number"
              hint="Trouser Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="plain_trouser_hanging_white"
              outlined
              type="number"
              hint="Trouser Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="jeans_chinos_trouser_folding_colored"
              outlined
              type="number"
              hint="Jeans/Chinos Trouser Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="jeans_chinos_trouser_hanging_colored"
              outlined
              type="number"
              hint="Jeans/Chinos Trouser Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="jeans_chinos_trouser_folding_white"
              outlined
              type="number"
              hint="Jeans/Chinos Trouser Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="jeans_chinos_trouser_hanging_white"
              outlined
              type="number"
              hint="Jeans/Chinos Trouser Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="waist_coat_hanging_colored"
              outlined
              type="number"
              hint="Waist Coat Hanging-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="waist_coat_hanging_white"
              outlined
              type="number"
              hint="Waist Coat Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tie_colored"
              outlined
              type="number"
              hint="Tie Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="tie_white"
              outlined
              type="number"
              hint="Tie White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shorts_folding_colored"
              outlined
              type="number"
              hint="Shorts Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shorts_hanging_colored"
              outlined
              type="number"
              hint="Shorts Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shorts_folding_white"
              outlined
              type="number"
              hint="Shorts Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="shorts_hanging_white"
              outlined
              type="number"
              hint="Shorts Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="singlet_colored"
              outlined
              type="number"
              hint="Singlet Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="singlet_white"
              outlined
              type="number"
              hint="Singlet White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="boxer_colored"
              outlined
              type="number"
              hint="Boxer Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="boxer_white"
              outlined
              type="number"
              hint="Boxer White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_2pcs_suit_hanging_colored"
              outlined
              type="number"
              hint="Male 2 Pcs Suit Hanging-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_2pcs_suit_hanging_white"
              outlined
              type="number"
              hint="Male 2 Pcs Suit Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_3pcs_suit_hanging_colored"
              outlined
              type="number"
              hint="Male 3 Pcs Suit Hanging-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_3pcs_suit_hanging_white"
              outlined
              type="number"
              hint="Male 3 Pcs Suit Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_2pcs_suit_hanging_colored"
              outlined
              type="number"
              hint="Female 2 Pcs Suit Hanging-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_2pcs_suit_hanging_white"
              outlined
              type="number"
              hint="Female 2 Pcs Suit Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_3pcs_suit_hanging_colored"
              outlined
              type="number"
              hint="Female 3 Pcs Suit Hanging-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_3pcs_suit_hanging_white"
              outlined
              type="number"
              hint="Female 3 Pcs Suit Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_jacket_only_colored"
              outlined
              type="number"
              hint="Male Jacket Only Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_jacket_only_white"
              outlined
              type="number"
              hint="Male Jacket Only White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_jacket_only_colored"
              outlined
              type="number"
              hint="Female Jacket Only Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_jacket_only_white"
              outlined
              type="number"
              hint="Female Jacket Only White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="wedding_gown_small_and_little_accessories_white"
              outlined
              type="number"
              hint="Wedding Gown Small With Little Accessories White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="wedding_gown_big_and_plenty_accessories_white"
              outlined
              type="number"
              hint="Wedding Gown Big With Plenty Accessories White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="Kids_blouse_folding_colored"
              outlined
              type="number"
              hint="Kids Blouse Folding-Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="Kids_blouse_hanging_colored"
              outlined
              type="number"
              hint="Kids Blouse Hanging-Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="Kids_blouse_folding_white"
              outlined
              type="number"
              hint="Kids Blouse Folding-White"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="Kids_blouse_hanging_white"
              outlined
              type="number"
              hint="Kids Blouse Hanging-White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="jalamia_colored"
              outlined
              type="number"
              hint="Jalamia Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="jalamia_white"
              outlined
              type="number"
              hint="Jalamia White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="camisole_colored"
              outlined
              type="number"
              hint="Camisole Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="camisole_white"
              outlined
              type="number"
              hint="Camisole White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="wrapper_buba_scarf_colored"
              outlined
              type="number"
              hint="Wrapper, Buba And Scarf Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="wrapper_buba_scarf_white"
              outlined
              type="number"
              hint="Wrapper, Buba And Scarf White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="wrapper_buba_no_scarf_colored"
              outlined
              type="number"
              hint="Wrapper and Buba(No Scarf) Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="wrapper_buba_no_scarf_white"
              outlined
              type="number"
              hint="Wrapper and Buba(No Scarf) White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="wrapper_only_colored"
              outlined
              type="number"
              hint="Wrapper Only Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="wrapper_only_white"
              outlined
              type="number"
              hint="Wrapper Only White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="two_wrapper_scarf_or_no_scarf_colored"
              outlined
              type="number"
              hint="Two Wrapper Scarf/No-Scarf Only Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="two_wrapper_scarf_or_no_scarf_white"
              outlined
              type="number"
              hint="Two Wrapper Scarf/No-Scarf Only White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="aso_oke_agbada_and_cap_colored"
              outlined
              type="number"
              hint="Aso-Oke Agbada and Cap 2pcs Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_aso_oke_and_cap_3pcs_colored"
              outlined
              type="number"
              hint="Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="aso_oke_wrapper_buba_gele_colored"
              outlined
              type="number"
              hint="Aso-Oke Wrapper, Buba and Gele 3pcs Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="aso_oke_wrapper_gele_colored"
              outlined
              type="number"
              hint="Aso-Oke Wrapper and Gele 2pcs Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="aso_oke_wrapper_gele_ipele_colored"
              outlined
              type="number"
              hint="Aso-Oke Wrapper, Gele and Ipele 3pcs Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="aso_oke_wrapper_gele_ipele_white"
              outlined
              type="number"
              hint="Aso-Oke Wrapper, Gele and Ipele 3pcs White"
            />
          </div>
        </div>
        <!-- <div class="row q-pt-sm">
        </div> -->
        <div class="row q-pt-sm">
          <div class="col-12 col-md-4 q-pl-md">
            <q-input
              required
              class=""
              v-model="aso_oke_headtie_ipele_colored"
              outlined
              type="number"
              hint="Aso-Oke Head-Tie Ipele 2pcs White"
            />
          </div>
          <div class="col-12 col-md-4 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_complete_aso_oke_white"
              outlined
              type="number"
              hint="Male Complete Aso-Oke White"
            />
          </div>
          <div class="col-12 col-md-4 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_complete_aso_oke_white"
              outlined
              type="number"
              hint="Female Complete Aso-Oke White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_inner_wear_colored"
              outlined
              type="number"
              hint="Female Inner-Wear Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_inner_wear_white"
              outlined
              type="number"
              hint="Female Inner-Wear White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="head_tie_gele_colored"
              outlined
              type="number"
              hint="Head-Tie/Gele Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="head_tie_gele_white"
              outlined
              type="number"
              hint="Head-Tie/Gele White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="gown_children_colored"
              outlined
              type="number"
              hint="Gown Children Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="gown_children_white"
              outlined
              type="number"
              hint="Gown Children White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="gown_english_adult_folding_colored"
              outlined
              type="number"
              hint="Gown English Adult Folding Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="gown_english_adult_folding_white"
              outlined
              type="number"
              hint="Gown English Adult Folding White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="gown_english_adult_hanging_colored"
              outlined
              type="number"
              hint="Gown English Adult Hanging Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="gown_english_adult_hanging_white"
              outlined
              type="number"
              hint="Gown English Adult Hanging White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="gown_native_folding_colored"
              outlined
              type="number"
              hint="Gown Native Folding Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="gown_native_folding_white"
              outlined
              type="number"
              hint="Gown Native Folding White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="adult_white_garment_folding_with_cap"
              outlined
              type="number"
              hint="Adult White Garment With Cap (F)"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="adult_white_garment_folding_without_cap"
              outlined
              type="number"
              hint="Adult White Garment Without Cap (F)"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="adult_white_garment_hanging_with_cap"
              outlined
              type="number"
              hint="Adult White Garment with Cap (H)"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="adult_white_garment_hanging_without_cap"
              outlined
              type="number"
              hint="Adult White Garment without Cap (H)"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="children_white_garment_folding_with_cap"
              outlined
              type="number"
              hint="Children White Garment with Cap (F)"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="children_white_garment_folding_without_cap"
              outlined
              type="number"
              hint="Children White Garment Without Cap (F)"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="children_white_garment_hanging_with_cap"
              outlined
              type="number"
              hint="Children White Garment With Cap (H)"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="children_white_garment_hanging_without_cap"
              outlined
              type="number"
              hint="Children White Garment Without Cap (H)"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="skirt_and_blouse_english_hanging_colored"
              outlined
              type="number"
              hint="Skirt and Blouse English 2pcs Hanging Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="skirt_and_blouse_english_hanging_white"
              outlined
              type="number"
              hint="Skirt and Blouse English 2pcs Hanging White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="skirt_and_blouse_native_folding_colored"
              outlined
              type="number"
              hint="Skirt and Blouse Native 2pcs Folding Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="skirt_and_blouse_native_folding_white"
              outlined
              type="number"
              hint="Skirt and Blouse Native 2pcs Folding White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_native_buba_and_trouser_colored"
              outlined
              type="number"
              hint="Female Native Buba and Trouser 2pcs Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_native_buba_and_trouser_white"
              outlined
              type="number"
              hint="Female Native Buba and Trouser 2pcs White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_cap_colored"
              outlined
              type="number"
              hint="Male Cap Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="male_cap_white"
              outlined
              type="number"
              hint="Male Cap White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_cap_colored"
              outlined
              type="number"
              hint="Female Cap Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="female_cap_white"
              outlined
              type="number"
              hint="Female Cap White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="turban_colored"
              outlined
              type="number"
              hint="Turban Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="turban_white"
              outlined
              type="number"
              hint="Turban White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="sweater_small_colored"
              outlined
              type="number"
              hint="Sweater Small Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="sweater_small_white"
              outlined
              type="number"
              hint="Sweater Small White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="sweater_normal_colored"
              outlined
              type="number"
              hint="Sweater Normal Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="sweater_normal_white"
              outlined
              type="number"
              hint="Sweater Normal White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="sweater_big_colored"
              outlined
              type="number"
              hint="Sweater Big Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="sweater_big_white"
              outlined
              type="number"
              hint="Sweater Big White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="towel_small_colored"
              outlined
              type="number"
              hint="Towel Small Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="towel_small_white"
              outlined
              type="number"
              hint="Towel Small White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="towel_normal_colored"
              outlined
              type="number"
              hint="Towel Normal Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="towel_normal_white"
              outlined
              type="number"
              hint="Towel Normal White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="towel_big_colored"
              outlined
              type="number"
              hint="Towel Big Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="towel_big_white"
              outlined
              type="number"
              hint="Towel Big White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="bed_spread_normal_colored"
              outlined
              type="number"
              hint="Bed-Spread Normal Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="bed_spread_normal_white"
              outlined
              type="number"
              hint="Bed-Spread Normal White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="bed_spread_big_colored"
              outlined
              type="number"
              hint="Bed-Spread Big Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="bed_spread_big_white"
              outlined
              type="number"
              hint="Bed-Spread Big White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="bed_spread_double_colored"
              outlined
              type="number"
              hint="Bed-Spread Double Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="bed_spread_double_white"
              outlined
              type="number"
              hint="Bed-Spread Double White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="duvet_normal_colored"
              outlined
              type="number"
              hint="Duvet Normal Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="duvet_normal_white"
              outlined
              type="number"
              hint="Duvet Normal White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="duvet_big_colored"
              outlined
              type="number"
              hint="Duvet Big Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="duvet_big_white"
              outlined
              type="number"
              hint="Duvet Big White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="curtain_normal_colored"
              outlined
              type="number"
              hint="Curtain Normal Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="curtain_big_colored"
              outlined
              type="number"
              hint="Curtain Big Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="curtain_very_big_colored"
              outlined
              type="number"
              hint="Curtain Very Big Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="blanket_colored"
              outlined
              type="number"
              hint="Blanket Colored"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="pyjamas_small_colored"
              outlined
              type="number"
              hint="Pyjamas Small Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="pyjamas_small_white"
              outlined
              type="number"
              hint="Pyjamas Small White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="pyjamas_big_colored"
              outlined
              type="number"
              hint="Pyjamas Big Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="pyjamas_big_white"
              outlined
              type="number"
              hint="Pyjamas Big White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="pillow_cases_colored"
              outlined
              type="number"
              hint="Pillow Cases Colored"
            />
          </div>
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="pillow_cases_white"
              outlined
              type="number"
              hint="Pillow Cases White"
            />
          </div>
        </div>
        <div class="row q-pt-sm">
          <!-- <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="pillow_cases_white"
              outlined
              type="number"
              hint=""
            />
          </div> -->
          <div class="col-12 col-md-6 q-pl-md">
            <q-input
              required
              class=""
              v-model="comment"
              outlined
              type="text"
              hint="Comment"
            />
          </div>
        </div>

        <div class="row q-pt-lg">
          <div class="text-center full-width q-pl-md">
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              style="width: 260px"
            />
          </div>
          <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { axios, api, base } from "boot/axios";
import { useQuasar } from "quasar";
import { useUserStore } from "../../../stores/user-store";

name: "CreatePricesPage";

const $q = useQuasar();
const data = ref([]);
const formData = ref({});

const male_native_2pcs_folding_colored = ref("");
const male_native_2pcs_hanging_colored = ref("");
const male_native_2pcs_folding_white = ref("");
const male_native_2pcs_hanging_white = ref("");
const male_native_3pcs_notAgbada_folding_colored = ref("");
const male_native_3pcs_notAgbada_hanging_colored = ref("");
const male_native_3pcs_notAgbada_folding_white = ref("");
const male_native_3pcs_notAgbada_hanging_white = ref("");
const native_top_only_folding_colored = ref("");
const native_top_only_hanging_colored = ref("");
const native_top_only_folding_white = ref("");
const native_top_only_hanging_white = ref("");
const native_trouser_only_folding_colored = ref("");
const native_trouser_only_hanging_colored = ref("");
const native_trouser_only_folding_white = ref("");
const native_trouser_only_hanging_white = ref("");
const male_agbada_only_folding_colored = ref("");
const male_agbada_only_hanging_colored = ref("");
const male_agbada_only_folding_white = ref("");
const male_agbada_only_hanging_white = ref("");
const complete_male_agbada_3pcs_Folding_colored = ref("");
const complete_male_agbada_3pcs_Hanging_colored = ref("");
const complete_male_agbada_3pcs_Folding_white = ref("");
const complete_male_agbada_3pcs_Hanging_white = ref("");
const normal_shirt_folding_colored = ref("");
const normal_shirt_hanging_colored = ref("");
const normal_shirt_folding_white = ref("");
const normal_shirt_hanging_white = ref("");
//1st page
const blouse_folding_colored = ref("");
const blouse_hanging_colored = ref("");
const blouse_folding_white = ref("");
const blouse_hanging_white = ref("");
const blouse_x_large_folding_colored = ref("");
const blouse_x_large_hanging_colored = ref("");
const blouse_x_large_folding_white = ref("");
const blouse_x_large_hanging_white = ref("");
const female_shirt_folding_colored = ref("");
const female_shirt_hanging_colored = ref("");
const female_shirt_folding_white = ref("");
const female_shirt_hanging_white = ref("");
const tshirt_polo_small_folding_colored = ref("");
const tshirt_polo_small_hanging_colored = ref("");
const tshirt_polo_small_folding_white = ref("");
const tshirt_polo_small_hanging_white = ref("");
const tshirt_polo_medium_folding_colored = ref("");
const tshirt_polo_medium_hanging_colored = ref("");
const tshirt_polo_medium_folding_white = ref("");
const tshirt_polo_medium_hanging_white = ref("");
const tshirt_polo_big_folding_colored = ref("");
const tshirt_polo_big_hanging_colored = ref("");
const tshirt_polo_big_folding_white = ref("");
const tshirt_polo_big_hanging_white = ref("");
const shirt_x_large_folding_colored = ref("");
const shirt_x_large_hanging_colored = ref("");
const shirt_x_large_folding_white = ref("");
const shirt_x_large_hanging_white = ref("");
//2nd page
const shirt_big_folding_colored = ref("");
const shirt_big_hanging_colored = ref("");
const shirt_big_folding_white = ref("");
const shirt_big_hanging_white = ref("");
const shirt_children_folding_colored = ref("");
const shirt_children_hanging_colored = ref("");
const shirt_children_folding_white = ref("");
const shirt_children_hanging_white = ref("");
const plain_trouser_folding_colored = ref("");
const plain_trouser_hanging_colored = ref("");
const plain_trouser_folding_white = ref("");
const plain_trouser_hanging_white = ref("");
const jeans_chinos_trouser_folding_colored = ref("");
const jeans_chinos_trouser_hanging_colored = ref("");
const jeans_chinos_trouser_folding_white = ref("");
const jeans_chinos_trouser_hanging_white = ref("");
const waist_coat_hanging_colored = ref("");
const waist_coat_hanging_white = ref("");
const tie_colored = ref("");
const tie_white = ref("");
const shorts_folding_colored = ref("");
const shorts_hanging_colored = ref("");
const shorts_folding_white = ref("");
const shorts_hanging_white = ref("");
const singlet_colored = ref("");
const singlet_white = ref("");
const boxer_colored = ref("");
const boxer_white = ref("");
//3rd page
const male_2pcs_suit_hanging_colored = ref("");
const male_2pcs_suit_hanging_white = ref("");
const male_3pcs_suit_hanging_colored = ref("");
const male_3pcs_suit_hanging_white = ref("");
const female_2pcs_suit_hanging_colored = ref("");
const female_2pcs_suit_hanging_white = ref("");
const female_3pcs_suit_hanging_colored = ref("");
const female_3pcs_suit_hanging_white = ref("");
const male_jacket_only_colored = ref("");
const male_jacket_only_white = ref("");
const female_jacket_only_colored = ref("");
const female_jacket_only_white = ref("");
const wedding_gown_small_and_little_accessories_white = ref("");
const wedding_gown_big_and_plenty_accessories_white = ref("");
const Kids_blouse_folding_colored = ref("");
const Kids_blouse_hanging_colored = ref("");
const Kids_blouse_folding_white = ref("");
const Kids_blouse_hanging_white = ref("");
const jalamia_colored = ref("");
const jalamia_white = ref("");
const camisole_colored = ref("");
const camisole_white = ref("");
const wrapper_buba_scarf_colored = ref("");
const wrapper_buba_scarf_white = ref("");
const wrapper_buba_no_scarf_colored = ref("");
const wrapper_buba_no_scarf_white = ref("");
//4th page
const wrapper_only_colored = ref("");
const wrapper_only_white = ref("");
const two_wrapper_scarf_or_no_scarf_colored = ref("");
const two_wrapper_scarf_or_no_scarf_white = ref("");
const aso_oke_agbada_and_cap_colored = ref("");
const male_aso_oke_and_cap_3pcs_colored = ref("");
const aso_oke_wrapper_buba_gele_colored = ref("");
const aso_oke_wrapper_gele_colored = ref("");
const aso_oke_wrapper_gele_ipele_colored = ref("");
const aso_oke_wrapper_gele_ipele_white = ref("");
const aso_oke_headtie_ipele_colored = ref("");
const male_complete_aso_oke_white = ref("");
const female_complete_aso_oke_white = ref("");
const female_inner_wear_colored = ref("");
const female_inner_wear_white = ref("");
const head_tie_gele_colored = ref("");
const head_tie_gele_white = ref("");
const gown_children_colored = ref("");
const gown_children_white = ref("");
const gown_english_adult_folding_colored = ref("");
const gown_english_adult_folding_white = ref("");
const gown_english_adult_hanging_colored = ref("");
const gown_english_adult_hanging_white = ref("");
const gown_native_folding_colored = ref("");
const gown_native_folding_white = ref("");
const adult_white_garment_folding_with_cap = ref("");
const adult_white_garment_folding_without_cap = ref("");
const adult_white_garment_hanging_with_cap = ref("");
const adult_white_garment_hanging_without_cap = ref("");
const children_white_garment_folding_with_cap = ref("");
const children_white_garment_folding_without_cap = ref("");
const children_white_garment_hanging_with_cap = ref("");
const children_white_garment_hanging_without_cap = ref("");
//5th page
const skirt_and_blouse_english_hanging_colored = ref("");
const skirt_and_blouse_english_hanging_white = ref("");
const skirt_and_blouse_native_folding_colored = ref("");
const skirt_and_blouse_native_folding_white = ref("");
const female_native_buba_and_trouser_colored = ref("");
const female_native_buba_and_trouser_white = ref("");
const male_cap_colored = ref("");
const male_cap_white = ref("");
const female_cap_colored = ref("");
const female_cap_white = ref("");
const turban_colored = ref("");
const turban_white = ref("");
const sweater_small_colored = ref("");
const sweater_small_white = ref("");
const sweater_normal_colored = ref("");
const sweater_normal_white = ref("");
const sweater_big_colored = ref("");
const sweater_big_white = ref("");
const towel_small_colored = ref("");
const towel_small_white = ref("");
const towel_normal_colored = ref("");
const towel_normal_white = ref("");
const towel_big_colored = ref("");
const towel_big_white = ref("");
const bed_spread_normal_colored = ref("");
const bed_spread_normal_white = ref("");
const bed_spread_big_colored = ref("");
const bed_spread_big_white = ref("");
//6th
const bed_spread_double_colored = ref("");
const bed_spread_double_white = ref("");
const duvet_normal_colored = ref("");
const duvet_normal_white = ref("");
const duvet_big_colored = ref("");
const duvet_big_white = ref("");
const curtain_normal_colored = ref("");
const curtain_big_colored = ref("");
const curtain_very_big_colored = ref("");
const pyjamas_small_colored = ref("");
const pyjamas_small_white = ref("");
const pyjamas_big_colored = ref("");
const pyjamas_big_white = ref("");
const blanket_colored = ref("");
const pillow_cases_colored = ref("");
const pillow_cases_white = ref("");

const comment = ref("");

const useStore = useUserStore();

const onSubmit = () => {
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  const _first_name = useStore.getFirst_name;
  const _last_name = useStore.getLast_name;

  const formData = {
    staff: _first_name + " " + _last_name,
    //
    //1st
    male_native_2pcs_folding_colored: Number(
      male_native_2pcs_folding_colored.value
    ),
    male_native_2pcs_hanging_colored: Number(
      male_native_2pcs_hanging_colored.value
    ),
    male_native_2pcs_folding_white: Number(
      male_native_2pcs_folding_white.value
    ),
    male_native_2pcs_hanging_white: Number(
      male_native_2pcs_hanging_white.value
    ),
    male_native_3pcs_notAgbada_folding_colored: Number(
      male_native_3pcs_notAgbada_folding_colored.value
    ),
    male_native_3pcs_notAgbada_hanging_colored: Number(
      male_native_3pcs_notAgbada_hanging_colored.value
    ),
    male_native_3pcs_notAgbada_folding_white: Number(
      male_native_3pcs_notAgbada_folding_white.value
    ),
    male_native_3pcs_notAgbada_hanging_white: Number(
      male_native_3pcs_notAgbada_hanging_white.value
    ),
    native_top_only_folding_colored: Number(
      native_top_only_folding_colored.value
    ),
    native_top_only_hanging_colored: Number(
      native_top_only_hanging_colored.value
    ),
    native_top_only_folding_white: Number(native_top_only_folding_white.value),
    native_top_only_hanging_white: Number(native_top_only_hanging_white.value),
    native_trouser_only_folding_colored: Number(
      native_trouser_only_folding_colored.value
    ),
    native_trouser_only_hanging_colored: Number(
      native_trouser_only_hanging_colored.value
    ),
    native_trouser_only_folding_white: Number(
      native_trouser_only_folding_white.value
    ),
    native_trouser_only_hanging_white: Number(
      native_trouser_only_hanging_white.value
    ),
    male_agbada_only_folding_colored: Number(
      male_agbada_only_folding_colored.value
    ),
    male_agbada_only_hanging_colored: Number(
      male_agbada_only_hanging_colored.value
    ),
    male_agbada_only_folding_white: Number(
      male_agbada_only_folding_white.value
    ),
    male_agbada_only_hanging_white: Number(
      male_agbada_only_hanging_white.value
    ),
    complete_male_agbada_3pcs_Folding_colored: Number(
      complete_male_agbada_3pcs_Folding_colored.value
    ),
    complete_male_agbada_3pcs_Hanging_colored: Number(
      complete_male_agbada_3pcs_Hanging_colored.value
    ),
    complete_male_agbada_3pcs_Folding_white: Number(
      complete_male_agbada_3pcs_Folding_white.value
    ),
    complete_male_agbada_3pcs_Hanging_white: Number(
      complete_male_agbada_3pcs_Hanging_white.value
    ),
    normal_shirt_folding_colored: Number(normal_shirt_folding_colored.value),
    normal_shirt_hanging_colored: Number(normal_shirt_hanging_colored.value),
    normal_shirt_folding_white: Number(normal_shirt_folding_white.value),
    normal_shirt_hanging_white: Number(normal_shirt_hanging_white.value),
    //2nd page
    blouse_folding_colored: Number(blouse_folding_colored.value),
    blouse_hanging_colored: Number(blouse_hanging_colored.value),
    blouse_folding_white: Number(blouse_folding_white.value),
    blouse_hanging_white: Number(blouse_hanging_white.value),
    blouse_x_large_folding_colored: Number(
      blouse_x_large_folding_colored.value
    ),
    blouse_x_large_hanging_colored: Number(
      blouse_x_large_hanging_colored.value
    ),
    blouse_x_large_folding_white: Number(blouse_x_large_folding_white.value),
    blouse_x_large_hanging_white: Number(blouse_x_large_hanging_white.value),
    female_shirt_folding_colored: Number(female_shirt_folding_colored.value),
    female_shirt_hanging_colored: Number(female_shirt_hanging_colored.value),
    female_shirt_folding_white: Number(female_shirt_folding_white.value),
    female_shirt_hanging_white: Number(female_shirt_hanging_white.value),
    tshirt_polo_small_folding_colored: Number(
      tshirt_polo_small_folding_colored.value
    ),
    tshirt_polo_small_hanging_colored: Number(
      tshirt_polo_small_hanging_colored.value
    ),
    tshirt_polo_small_folding_white: Number(
      tshirt_polo_small_folding_white.value
    ),
    tshirt_polo_small_hanging_white: Number(
      tshirt_polo_small_hanging_white.value
    ),
    tshirt_polo_medium_folding_colored: Number(
      tshirt_polo_medium_folding_colored.value
    ),
    tshirt_polo_medium_hanging_colored: Number(
      tshirt_polo_medium_hanging_colored.value
    ),
    tshirt_polo_medium_folding_white: Number(
      tshirt_polo_medium_folding_white.value
    ),
    tshirt_polo_medium_hanging_white: Number(
      tshirt_polo_medium_hanging_white.value
    ),
    tshirt_polo_big_folding_colored: Number(
      tshirt_polo_big_folding_colored.value
    ),
    tshirt_polo_big_hanging_colored: Number(
      tshirt_polo_big_hanging_colored.value
    ),
    tshirt_polo_big_folding_white: Number(tshirt_polo_big_folding_white.value),
    tshirt_polo_big_hanging_white: Number(tshirt_polo_big_hanging_white.value),
    shirt_x_large_folding_colored: Number(shirt_x_large_folding_colored.value),
    shirt_x_large_hanging_colored: Number(shirt_x_large_hanging_colored.value),
    shirt_x_large_folding_white: Number(shirt_x_large_folding_white.value),
    shirt_x_large_hanging_white: Number(shirt_x_large_hanging_white.value),
    //3rd page
    shirt_big_folding_colored: Number(shirt_big_folding_colored.value),
    shirt_big_hanging_colored: Number(shirt_big_hanging_colored.value),
    shirt_big_folding_white: Number(shirt_big_folding_white.value),
    shirt_big_hanging_white: Number(shirt_big_hanging_white.value),
    shirt_children_folding_colored: Number(
      shirt_children_folding_colored.value
    ),
    shirt_children_hanging_colored: Number(
      shirt_children_hanging_colored.value
    ),
    shirt_children_folding_white: Number(shirt_children_folding_white.value),
    shirt_children_hanging_white: Number(shirt_children_hanging_white.value),
    plain_trouser_folding_colored: Number(plain_trouser_folding_colored.value),
    plain_trouser_hanging_colored: Number(plain_trouser_hanging_colored.value),
    plain_trouser_folding_white: Number(plain_trouser_folding_white.value),
    plain_trouser_hanging_white: Number(plain_trouser_hanging_white.value),
    jeans_chinos_trouser_folding_colored: Number(
      jeans_chinos_trouser_folding_colored.value
    ),
    jeans_chinos_trouser_hanging_colored: Number(
      jeans_chinos_trouser_hanging_colored.value
    ),
    jeans_chinos_trouser_folding_white: Number(
      jeans_chinos_trouser_folding_white.value
    ),
    jeans_chinos_trouser_hanging_white: Number(
      jeans_chinos_trouser_hanging_white.value
    ),
    waist_coat_hanging_colored: Number(waist_coat_hanging_colored.value),
    waist_coat_hanging_white: Number(waist_coat_hanging_white.value),
    tie_colored: Number(tie_colored.value),
    tie_white: Number(tie_white.value),
    shorts_folding_colored: Number(shorts_folding_colored.value),
    shorts_hanging_colored: Number(shorts_hanging_colored.value),
    shorts_folding_white: Number(shorts_folding_white.value),
    shorts_hanging_white: Number(shorts_hanging_white.value),
    singlet_colored: Number(singlet_colored.value),
    singlet_white: Number(singlet_white.value),
    boxer_colored: Number(boxer_colored.value),
    boxer_white: Number(boxer_white.value),
    //4th page
    male_2pcs_suit_hanging_colored: Number(
      male_2pcs_suit_hanging_colored.value
    ),
    male_2pcs_suit_hanging_white: Number(male_2pcs_suit_hanging_white.value),
    male_3pcs_suit_hanging_colored: Number(
      male_3pcs_suit_hanging_colored.value
    ),
    male_3pcs_suit_hanging_white: Number(male_3pcs_suit_hanging_white.value),
    female_2pcs_suit_hanging_colored: Number(
      female_2pcs_suit_hanging_colored.value
    ),
    female_2pcs_suit_hanging_white: Number(
      female_2pcs_suit_hanging_white.value
    ),
    female_3pcs_suit_hanging_colored: Number(
      female_3pcs_suit_hanging_colored.value
    ),
    female_3pcs_suit_hanging_white: Number(
      female_3pcs_suit_hanging_white.value
    ),
    male_jacket_only_colored: Number(male_jacket_only_colored.value),
    male_jacket_only_white: Number(male_jacket_only_white.value),
    female_jacket_only_colored: Number(female_jacket_only_colored.value),
    female_jacket_only_white: Number(female_jacket_only_white.value),
    wedding_gown_small_and_little_accessories_white: Number(
      wedding_gown_small_and_little_accessories_white.value
    ),
    wedding_gown_big_and_plenty_accessories_white: Number(
      wedding_gown_big_and_plenty_accessories_white.value
    ),
    Kids_blouse_folding_colored: Number(Kids_blouse_folding_colored.value),
    Kids_blouse_hanging_colored: Number(Kids_blouse_hanging_colored.value),
    Kids_blouse_folding_white: Number(Kids_blouse_folding_white.value),
    Kids_blouse_hanging_white: Number(Kids_blouse_hanging_white.value),
    jalamia_colored: Number(jalamia_colored.value),
    jalamia_white: Number(jalamia_white.value),
    camisole_colored: Number(camisole_colored.value),
    camisole_white: Number(camisole_white.value),
    wrapper_buba_scarf_colored: Number(wrapper_buba_scarf_colored.value),
    wrapper_buba_scarf_white: Number(wrapper_buba_scarf_white.value),
    wrapper_buba_no_scarf_colored: Number(wrapper_buba_no_scarf_colored.value),
    wrapper_buba_no_scarf_white: Number(wrapper_buba_no_scarf_white.value),
    //5th page
    wrapper_only_colored: Number(wrapper_only_colored.value),
    wrapper_only_white: Number(wrapper_only_white.value),
    two_wrapper_scarf_or_no_scarf_colored: Number(
      two_wrapper_scarf_or_no_scarf_colored.value
    ),
    two_wrapper_scarf_or_no_scarf_white: Number(
      two_wrapper_scarf_or_no_scarf_white.value
    ),
    aso_oke_agbada_and_cap_colored: Number(
      aso_oke_agbada_and_cap_colored.value
    ),
    male_aso_oke_and_cap_3pcs_colored: Number(
      male_aso_oke_and_cap_3pcs_colored.value
    ),
    aso_oke_wrapper_buba_gele_colored: Number(
      aso_oke_wrapper_buba_gele_colored.value
    ),
    aso_oke_wrapper_gele_colored: Number(aso_oke_wrapper_gele_colored.value),
    aso_oke_wrapper_gele_ipele_colored: Number(
      aso_oke_wrapper_gele_ipele_colored.value
    ),
    aso_oke_wrapper_gele_ipele_white: Number(
      aso_oke_wrapper_gele_ipele_white.value
    ),
    aso_oke_headtie_ipele_colored: Number(aso_oke_headtie_ipele_colored.value),
    male_complete_aso_oke_white: Number(male_complete_aso_oke_white.value),
    female_complete_aso_oke_white: Number(female_complete_aso_oke_white.value),
    female_inner_wear_colored: Number(female_inner_wear_colored.value),
    female_inner_wear_white: Number(female_inner_wear_white.value),
    head_tie_gele_colored: Number(head_tie_gele_colored.value),
    head_tie_gele_white: Number(head_tie_gele_white.value),
    gown_children_colored: Number(gown_children_colored.value),
    gown_children_white: Number(gown_children_white.value),
    gown_english_adult_folding_colored: Number(
      gown_english_adult_folding_colored.value
    ),
    gown_english_adult_folding_white: Number(
      gown_english_adult_folding_white.value
    ),
    gown_english_adult_hanging_colored: Number(
      gown_english_adult_hanging_colored.value
    ),
    gown_english_adult_hanging_white: Number(
      gown_english_adult_hanging_white.value
    ),
    gown_native_folding_colored: Number(gown_native_folding_colored.value),
    gown_native_folding_white: Number(gown_native_folding_white.value),
    adult_white_garment_folding_with_cap: Number(
      adult_white_garment_folding_with_cap.value
    ),
    adult_white_garment_folding_without_cap: Number(
      adult_white_garment_folding_without_cap.value
    ),
    adult_white_garment_hanging_with_cap: Number(
      adult_white_garment_hanging_with_cap.value
    ),
    adult_white_garment_hanging_without_cap: Number(
      adult_white_garment_hanging_without_cap.value
    ),
    children_white_garment_folding_with_cap: Number(
      children_white_garment_folding_with_cap.value
    ),
    children_white_garment_folding_without_cap: Number(
      children_white_garment_folding_without_cap.value
    ),
    children_white_garment_hanging_with_cap: Number(
      children_white_garment_hanging_with_cap.value
    ),
    children_white_garment_hanging_without_cap: Number(
      children_white_garment_hanging_without_cap.value
    ),
    skirt_and_blouse_english_hanging_colored: Number(
      skirt_and_blouse_english_hanging_colored.value
    ),
    skirt_and_blouse_english_hanging_white: Number(
      skirt_and_blouse_english_hanging_white.value
    ),
    skirt_and_blouse_native_folding_colored: Number(
      skirt_and_blouse_native_folding_colored.value
    ),
    skirt_and_blouse_native_folding_white: Number(
      skirt_and_blouse_native_folding_white.value
    ),
    female_native_buba_and_trouser_colored: Number(
      female_native_buba_and_trouser_colored.value
    ),
    female_native_buba_and_trouser_white: Number(
      female_native_buba_and_trouser_white.value
    ),
    male_cap_colored: Number(male_cap_colored.value),
    male_cap_white: Number(male_cap_white.value),
    female_cap_colored: Number(female_cap_colored.value),
    female_cap_white: Number(female_cap_white.value),
    turban_colored: Number(turban_colored.value),
    turban_white: Number(turban_white.value),
    sweater_small_colored: Number(sweater_small_colored.value),
    sweater_small_white: Number(sweater_small_white.value),
    sweater_normal_colored: Number(sweater_normal_colored.value),
    sweater_normal_white: Number(sweater_normal_white.value),
    sweater_big_colored: Number(sweater_big_colored.value),
    sweater_big_white: Number(sweater_big_white.value),
    towel_small_colored: Number(towel_small_colored.value),
    towel_small_white: Number(towel_small_white.value),
    towel_normal_colored: Number(towel_normal_colored.value),
    towel_normal_white: Number(towel_normal_white.value),
    towel_big_colored: Number(towel_big_colored.value),
    towel_big_white: Number(towel_big_white.value),
    bed_spread_normal_colored: Number(bed_spread_normal_colored.value),
    bed_spread_normal_white: Number(bed_spread_normal_white.value),
    bed_spread_big_colored: Number(bed_spread_big_colored.value),
    bed_spread_big_white: Number(bed_spread_big_white.value),
    //7th
    bed_spread_double_colored: Number(bed_spread_double_colored.value),
    bed_spread_double_white: Number(bed_spread_double_white.value),
    duvet_normal_colored: Number(duvet_normal_colored.value),
    duvet_normal_white: Number(duvet_normal_white.value),
    duvet_big_colored: Number(duvet_big_colored.value),
    duvet_big_white: Number(duvet_big_white.value),
    curtain_normal_colored: Number(curtain_normal_colored.value),
    curtain_big_colored: Number(curtain_big_colored.value),
    curtain_very_big_colored: Number(curtain_very_big_colored.value),
    pyjamas_small_colored: Number(pyjamas_small_colored.value),
    pyjamas_small_white: Number(pyjamas_small_white.value),
    pyjamas_big_colored: Number(pyjamas_big_colored.value),
    pyjamas_big_white: Number(pyjamas_big_white.value),
    blanket_colored: Number(blanket_colored.value),
    pillow_cases_colored: Number(pillow_cases_colored.value),
    pillow_cases_white: Number(pillow_cases_white.value),

    //
    comment: comment.value,
  };

  const token = useStore.getToken;
  console.log(formData.value, "formData");
  axios
    .post(`${base}/price/`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      data.value = response.data;
      console.log(data.value, "user");
      // onReset()
      $q.loading.hide();
      $q.notify({
        color: "green",
        position: "bottom",
        message: data.value.message,
        icon: "check",
      });
    })
    .catch(() => {
      $q.loading.hide();
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Loading failed",
        icon: "report_problem",
      });
    });
};

const onReset = () => {
  formData.value = null;
};
</script>

<style lang="sass" scoped>
.sizzz
  min-width: 300px
  max-width: 500px
.sizz1
  min-width: 275px
  max-width: 475px
</style>
