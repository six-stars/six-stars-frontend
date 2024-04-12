<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Intakes</div> -->
    <!-- <q-separator /> -->
    <div class="q-pt-sm">
      <div class="row">
        <div class="col-12 col-md-8">
          <div>
            <!-- <q-form @submit="onSubmit" @reset="onReset"> -->
            <!-- <p class="text-h6">Customer Name: </p> -->
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Male Native 2 Pcs</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_native_2_pcs }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_native_2_pcs"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_native_2_pcs =
                      lastPrice.male_native_2_pcs * male_native_2_pcs)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Male Native 2 Pcs[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_native_2_pcs_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_native_2_pcs_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_native_2_pcs_hanging =
                      lastPrice.male_native_2_pcs_hanging *
                      male_native_2_pcs_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Male Native 3 Pcs(Not Agbada)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_native_3_pcs_notAgbada }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_native_3_pcs_notAgbada"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_native_3_pcs_notAgbada =
                      lastPrice.male_native_3_pcs_notAgbada *
                      male_native_3_pcs_notAgbada)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Male Native 3 Pcs(Not Agbada)[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_native_3_pcs_notAgbada_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_native_3_pcs_notAgbada_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_native_3_pcs_notAgbada_hanging =
                      lastPrice.male_native_3_pcs_notAgbada_hanging *
                      male_native_3_pcs_notAgbada_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Native Top Only</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.native_top_only }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="native_top_only"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_native_top_only =
                      lastPrice.native_top_only * native_top_only)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Native Trouser Only</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.native_trouser_only }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="native_trouser_only"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_native_trouser_only =
                      lastPrice.native_trouser_only * native_trouser_only)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Complete Male Agbada</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.complete_male_agbada }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="complete_male_agbada"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_complete_male_agbada =
                      lastPrice.complete_male_agbada * complete_male_agbada)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Male Agbada Alone</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_agbada_alone }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_agbada_alone"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_agbada_alone =
                      lastPrice.male_agbada_alone * male_agbada_alone)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Blouse</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.blouse }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blouse"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦ {{ (total_blouse = lastPrice.blouse * blouse) }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Blouse[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.blouse_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blouse_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_blouse_hanging =
                      lastPrice.blouse_hanging * blouse_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Female Shirt</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_shirt }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_shirt"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_female_shirt = lastPrice.female_shirt * female_shirt)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Female Shirt[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_shirt_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_shirt_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_female_shirt_hanging =
                      lastPrice.female_shirt_hanging * female_shirt_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Female Trouser/Jean</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_trouser_jeans }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_trouser_jeans"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_female_trouser_jeans =
                      lastPrice.female_trouser_jeans * female_trouser_jeans)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Female Trouser/Jean[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_trouser_jeans_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_trouser_jeans_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_female_trouser_jeans_hanging =
                      lastPrice.female_trouser_jeans_hanging *
                      female_trouser_jeans_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Skirt & Blouse English</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.skirt_and_blouse_english }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="skirt_and_blouse_english"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_skirt_and_blouse_english =
                      lastPrice.skirt_and_blouse_english *
                      skirt_and_blouse_english)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Skirt & Blouse English[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.skirt_and_blouse_english_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="skirt_and_blouse_english_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_skirt_and_blouse_english_hanging =
                      lastPrice.skirt_and_blouse_english_hanging *
                      skirt_and_blouse_english_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Wrapper, Buba & Gele or Without Gele</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.wrapper_buba_gele }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="wrapper_buba_gele"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_wrapper_buba_gele =
                      lastPrice.wrapper_buba_gele * wrapper_buba_gele)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Female Native Buba & Trouser</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_native_buba_trouser }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_native_buba_trouser"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_female_native_buba_trouser =
                      lastPrice.female_native_buba_trouser *
                      female_native_buba_trouser)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Gown English[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.gown_english_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="gown_english_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_gown_english_hanging =
                      lastPrice.gown_english_hanging * gown_english_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Gown Native</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.gown_native }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="gown_native"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_gown_native = lastPrice.gown_native * gown_native)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Skirt & Blouse Native</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.skirt_and_blouse_native }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="skirt_and_blouse_native"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_skirt_and_blouse_native =
                      lastPrice.skirt_and_blouse_native *
                      skirt_and_blouse_native)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Aso-Oke Wrapper, Buba & Gele</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.aso_oke_wrapper_buba_gele }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="aso_oke_wrapper_buba_gele"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_aso_oke_wrapper_buba_gele =
                      lastPrice.aso_oke_wrapper_buba_gele *
                      aso_oke_wrapper_buba_gele)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Male Complete Aso-Oke</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_complete_aso_oke }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_complete_aso_oke"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_complete_aso_oke =
                      lastPrice.male_complete_aso_oke * male_complete_aso_oke)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">T-Shirt/Polo(Medium)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_medium_t_shirt_or_polo }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_medium_t_shirt_or_polo"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_medium_t_shirt_or_polo =
                      lastPrice.male_medium_t_shirt_or_polo *
                      male_medium_t_shirt_or_polo)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">T-Shirt/Polo(Big)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_big_t_shirt_or_polo }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_big_t_shirt_or_polo"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_big_t_shirt_or_polo =
                      lastPrice.male_big_t_shirt_or_polo *
                      male_big_t_shirt_or_polo)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">T-Shirt/Polo[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_t_shirt_or_polo_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_t_shirt_or_polo_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_t_shirt_or_polo_hanging =
                      lastPrice.male_t_shirt_or_polo_hanging *
                      male_t_shirt_or_polo_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Shirt(Normal)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_normal }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_normal"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_shirt_normal = lastPrice.shirt_normal * shirt_normal)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Shirt(Normal)[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_normal_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_normal_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_shirt_normal_hanging =
                      lastPrice.shirt_normal_hanging * shirt_normal_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Shirt(Big)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.shirt_big }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_big"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{ (total_shirt_big = lastPrice.shirt_big * shirt_big) }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Shirt(Big)[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_big_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_big_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_shirt_big_hanging =
                      lastPrice.shirt_big_hanging * shirt_big_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Plain Trouser</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.plain_trouser }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="plain_trouser"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_plain_trouser =
                      lastPrice.plain_trouser * plain_trouser)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Plain Trouser[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.plain_trouser_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="plain_trouser_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_plain_trouser_hanging =
                      lastPrice.plain_trouser_hanging * plain_trouser_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Jeans/Chinos Trouser</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.jeans_chinos_trouser }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="jeans_chinos_trouser"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_jeans_chinos_trouser =
                      lastPrice.jeans_chinos_trouser * jeans_chinos_trouser)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Jeans/Chinos Trouser[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.jeans_chinos_trouser_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="jeans_chinos_trouser_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_jeans_chinos_trouser_hanging =
                      lastPrice.jeans_chinos_trouser_hanging *
                      jeans_chinos_trouser_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Waist Coat[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.waist_coat_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="waist_coat_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_waist_coat_hanging =
                      lastPrice.waist_coat_hanging * waist_coat_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Tie</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.tie }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tie"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦ {{ (total_tie = lastPrice.tie * tie) }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Shorts</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.shorts }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shorts"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦ {{ (total_shorts = lastPrice.shorts * shorts) }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Shorts[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shorts_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shorts_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_shorts_hanging =
                      lastPrice.shorts_hanging * shorts_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Singlet</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.singlet }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="singlet"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦ {{ (total_singlet = lastPrice.singlet * singlet) }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Boxer</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.boxer }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="boxer"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦ {{ (total_boxer = lastPrice.boxer * boxer) }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Male Two Pcs Suit[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_two_pcs_suit_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_two_pcs_suit_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_two_pcs_suit_hanging =
                      lastPrice.male_two_pcs_suit_hanging *
                      male_two_pcs_suit_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Male Three Pcs Suit[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_three_pcs_suit_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_three_pcs_suit_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_three_pcs_suit_hanging =
                      lastPrice.male_three_pcs_suit_hanging *
                      male_three_pcs_suit_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Female Two Pcs Suit[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_two_pcs_suit_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_two_pcs_suit_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_female_two_pcs_suit_hanging =
                      lastPrice.female_two_pcs_suit_hanging *
                      female_two_pcs_suit_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Female Three Pcs Suit[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_three_pcs_suit_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_three_pcs_suit_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_female_three_pcs_suit_hanging =
                      lastPrice.female_three_pcs_suit_hanging *
                      female_three_pcs_suit_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Male Jacket[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_jacket_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_jacket_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_male_jacket_hanging =
                      lastPrice.male_jacket_hanging * male_jacket_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Female Jacket[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_jacket_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_jacket_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_female_jacket_hanging =
                      lastPrice.female_jacket_hanging * female_jacket_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Jalamia</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.jalamia }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="jalamia"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦ {{ (total_jalamia = lastPrice.jalamia * jalamia) }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Camisole</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.camisole }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="camisole"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{ (total_camisole = lastPrice.camisole * camisole) }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Wrapper Only</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.wrapper_only }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="wrapper_only"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_wrapper_only = lastPrice.wrapper_only * wrapper_only)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Female Inner Wear</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_inner_wear }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_inner_wear"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_female_inner_wear =
                      lastPrice.female_inner_wear * female_inner_wear)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Normal Head Tie/Gele</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.head_tie_gele }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="head_tie_gele"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_head_tie_gele =
                      lastPrice.head_tie_gele * head_tie_gele)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Small Wedding Gown[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.small_wedding_gown_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="small_wedding_gown_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_small_wedding_gown_hanging =
                      lastPrice.small_wedding_gown_hanging *
                      small_wedding_gown_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Big Wedding Gown[Hanging]</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.big_wedding_gown_hanging }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="big_wedding_gown_hanging"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_big_wedding_gown_hanging =
                      lastPrice.big_wedding_gown_hanging *
                      big_wedding_gown_hanging)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Aso-Oke Head Tie/Gele</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.asooke_head_tie }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="asooke_head_tie"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_asooke_head_tie =
                      lastPrice.asooke_head_tie * asooke_head_tie)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Sweater (Normal)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.sweater_normal }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="sweater_normal"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_sweater_normal =
                      lastPrice.sweater_normal * sweater_normal)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Sweater (Big)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.sweater_big }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="sweater_big"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_sweater_big = lastPrice.sweater_big * sweater_big)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Towel(Normal)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.towel_normal }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="towel_normal"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_towel_normal = lastPrice.towel_normal * towel_normal)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Towel(Big)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.towel_big }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="towel_big"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{ (total_towel_big = lastPrice.towel_big * towel_big) }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Bed Spread(Normal)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.bed_spread_normal }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="bed_spread_normal"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_bed_spread_normal =
                      lastPrice.bed_spread_normal * bed_spread_normal)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Bed Spread(Big)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.bed_spread_big }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="bed_spread_big"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_bed_spread_big =
                      lastPrice.bed_spread_big * bed_spread_big)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Duvet</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.duvet }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="duvet"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦ {{ (total_duvet = lastPrice.duvet * duvet) }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Curtain(Normal)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.curtain_normal }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="curtain_normal"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_curtain_normal =
                      lastPrice.curtain_normal * curtain_normal)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Curtain(Big)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.curtain_big }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="curtain_big"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_curtain_big = lastPrice.curtain_big * curtain_big)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Curtain(Very Big)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.curtain_very_big }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="curtain_very_big"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_curtain_very_big =
                      lastPrice.curtain_very_big * curtain_very_big)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Pyjamas(Small)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.pyjamas_small }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="pyjamas_small"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_pyjamas_small =
                      lastPrice.pyjamas_small * pyjamas_small)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Pyjamas(Big)</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.pyjamas_big }}</p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="pyjamas_big"
                  color="teal"
                  thumb-color="black"
                  label-color="black"
                  label-text-color="white"
                  markers
                  switch-marker-labels-side
                  label-always
                  switch-label-side
                  :min="0"
                  :max="20"
                />
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Total: ₦
                  {{
                    (total_pyjamas_big = lastPrice.pyjamas_big * pyjamas_big)
                  }}
                </p>
                <!-- <q-checkbox size="lg" left-label v-model="left" label="Next Label on Left" /> -->
              </div>
            </div>
            <q-separator />
            <!-- <div class="row q-pt-xl">
              <div class="row q-pt-sm">
                <div class="col-12 col-md-6 q-pl-md">
                  <p class="text-h6">Collected On Date:</p>
                  <q-input
                    required
                    class=""
                    v-model="collected_on_date"
                    :min="today"
                    :max="today"
                    outlined
                    type="date"
                  />
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <p class="text-h6">Collected on Time:</p>
                  <q-input
                    required
                    class=""
                    v-model="collected_on_time"
                    outlined
                    type="time"
                  />
                </div>
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-xl">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Collection Date:</p>
              </div>
              <div class="col-12 col-md-10 q-pl-md">
                <q-input
                  required
                  class=""
                  v-model="collection_date"
                  :min="today"
                  outlined
                  type="date"
                />
              </div>
            </div>
            <q-separator /> -->
            <!-- <div class="row q-pt-xl">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Comment: </p>
              </div>
              <div class="col-12 col-md-10 q-pl-md">
                <q-input required class="" v-model="comment_section" outlined type="textarea" hint="" />
              </div>
            </div> -->
            <!-- <q-separator />
            <div class="row q-pt-xl">
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-h6">Deposit: </p>
              </div>
              <div class="col-12 col-md-10 q-pl-md">
                <q-input required class="" v-model="deposit" outlined type="text" hint="" />
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-xl">
              <div class="text-center full-width q-pl-md">
                <p class="text-h4">Final Total: ₦ {{ total_final_amount = total_male_native_2_pcs + total_male_native_2_pcs_hanging +
                  total_complete_male_agbada + total_native_trouser_only + total_native_top_only + total_male_native_3_pcs_notAgbada_hanging + total_male_native_3_pcs_notAgbada + total_female_jacket_hanging +
                  total_male_agbada_alone + total_blouse + total_blouse_hanging + total_female_shirt + total_pyjamas_small + total_pyjamas_big + total_duvet + total_towel_big + total_sweater_big + total_boxer +
                  total_skirt_and_blouse_english + total_female_trouser_jeans_hanging + total_female_trouser_jeans + total_female_shirt_hanging + total_curtain_normal + total_curtain_big + total_curtain_very_big +
                  total_skirt_and_blouse_english_hanging + total_wrapper_buba_gele + total_female_native_buba_trouser + total_gown_english_hanging + total_gown_native + total_bed_spread_normal + total_bed_spread_big +
                  total_skirt_and_blouse_native + total_aso_oke_wrapper_buba_gele + total_male_complete_aso_oke + total_male_medium_t_shirt_or_polo + total_male_big_t_shirt_or_polo + total_towel_normal +
                  total_male_t_shirt_or_polo_hanging + total_shirt_normal + total_shirt_normal_hanging + total_shirt_big + total_shirt_big_hanging + total_plain_trouser + total_plain_trouser_hanging +
                  total_jeans_chinos_trouser + total_jeans_chinos_trouser_hanging + total_waist_coat_hanging + total_tie + total_shorts + total_shorts_hanging + total_singlet + total_sweater_normal  +
                  total_male_three_pcs_suit_hanging + total_female_two_pcs_suit_hanging + total_male_two_pcs_suit_hanging + total_female_three_pcs_suit_hanging + total_male_jacket_hanging + total_asooke_head_tie +
                  total_jalamia + total_camisole + total_wrapper_only + total_female_inner_wear + total_head_tie_gele + total_small_wedding_gown_hanging + total_big_wedding_gown_hanging }}</p>
              </div>
            </div>

            <div class="row q-pt-lg q-pb-xl">
              <div class="text-center full-width q-pl-md">
                <q-btn @click="onSubmit" label="Submit Intake" type="submit" color="primary" style="width: 260px" />
              </div>
            </div> -->
            <!-- </q-form> -->
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="row q-pt-xl">
            <div class="col-12 col-md-2 q-pl-md">
              <p class="text-h6">Comment:</p>
            </div>
            <div class="col-12 col-md-10 q-pl-md">
              <q-input
                required
                class=""
                v-model="comment_section"
                outlined
                type="textarea"
                hint=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row q-pt-xl">
          <div class="row q-pt-sm">
            <div class="col-12 col-md-6 q-pl-md">
              <p class="text-h6">Collected On Date:</p>
              <q-input
                required
                class=""
                v-model="collected_on_date"
                :min="today"
                :max="today"
                outlined
                type="date"
              />
            </div>
            <div class="col-12 col-md-6 q-pl-md">
              <p class="text-h6">Collected on Time:</p>
              <q-input
                required
                class=""
                v-model="collected_on_time"
                outlined
                type="time"
              />
            </div>
          </div>
        </div>
        <div class="row q-pt-xl">
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-h6">Collection Date:</p>
          </div>
          <div class="col-12 col-md-10 q-pl-md">
            <q-input
              required
              class=""
              v-model="collection_date"
              :min="today"
              outlined
              type="date"
            />
          </div>
        </div>
        <q-separator />
        <div class="row q-pt-xl">
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-h6">Deposit:</p>
          </div>
          <div class="col-12 col-md-10 q-pl-md">
            <q-input
              required
              class=""
              v-model="deposit"
              outlined
              type="text"
              hint=""
            />
          </div>
        </div>
        <q-separator />
        <div class="row q-pt-xl">
          <div class="text-center full-width q-pl-md">
            <p class="text-h4">
              Final Total: ₦
              {{
                (total_final_amount =
                  total_male_native_2_pcs +
                  total_male_native_2_pcs_hanging +
                  total_complete_male_agbada +
                  total_native_trouser_only +
                  total_native_top_only +
                  total_male_native_3_pcs_notAgbada_hanging +
                  total_male_native_3_pcs_notAgbada +
                  total_female_jacket_hanging +
                  total_male_agbada_alone +
                  total_blouse +
                  total_blouse_hanging +
                  total_female_shirt +
                  total_pyjamas_small +
                  total_pyjamas_big +
                  total_duvet +
                  total_towel_big +
                  total_sweater_big +
                  total_boxer +
                  total_skirt_and_blouse_english +
                  total_female_trouser_jeans_hanging +
                  total_female_trouser_jeans +
                  total_female_shirt_hanging +
                  total_curtain_normal +
                  total_curtain_big +
                  total_curtain_very_big +
                  total_skirt_and_blouse_english_hanging +
                  total_wrapper_buba_gele +
                  total_female_native_buba_trouser +
                  total_gown_english_hanging +
                  total_gown_native +
                  total_bed_spread_normal +
                  total_bed_spread_big +
                  total_skirt_and_blouse_native +
                  total_aso_oke_wrapper_buba_gele +
                  total_male_complete_aso_oke +
                  total_male_medium_t_shirt_or_polo +
                  total_male_big_t_shirt_or_polo +
                  total_towel_normal +
                  total_male_t_shirt_or_polo_hanging +
                  total_shirt_normal +
                  total_shirt_normal_hanging +
                  total_shirt_big +
                  total_shirt_big_hanging +
                  total_plain_trouser +
                  total_plain_trouser_hanging +
                  total_jeans_chinos_trouser +
                  total_jeans_chinos_trouser_hanging +
                  total_waist_coat_hanging +
                  total_tie +
                  total_shorts +
                  total_shorts_hanging +
                  total_singlet +
                  total_sweater_normal +
                  total_male_three_pcs_suit_hanging +
                  total_female_two_pcs_suit_hanging +
                  total_male_two_pcs_suit_hanging +
                  total_female_three_pcs_suit_hanging +
                  total_male_jacket_hanging +
                  total_asooke_head_tie +
                  total_jalamia +
                  total_camisole +
                  total_wrapper_only +
                  total_female_inner_wear +
                  total_head_tie_gele +
                  total_small_wedding_gown_hanging +
                  total_big_wedding_gown_hanging)
              }}
            </p>
          </div>
        </div>

        <div class="row q-pt-lg q-pb-xl">
          <div class="text-center full-width q-pl-md">
            <q-btn
              @click="onSubmit"
              label="Submit Intake"
              type="submit"
              color="primary"
              style="width: 260px"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { watch, ref, computed, onMounted } from "vue";
import { axios, api, base } from "boot/axios";
import { useQuasar } from "quasar";
import { useUserStore } from "../stores/user-store";
import { useRoute, useRouter } from "vue-router";

name: "CreateIntakesPage";

const $q = useQuasar();
const data = ref([]);
const today = new Date().toISOString().substr(0, 10);
const formData = ref({});
const useStore = useUserStore();
const $route = useRoute();
const $router = useRouter();
const left = ref(false);
const lastPrice = ref([]);

let _first_name = ref("");
let _last_name = ref("");
let _phone = ref("");

const customer = ref("");
const customer_phone = ref("");
const staff = ref("");
const collection_date = ref("");
const collected_on_date = ref("");
const collected_on_time = ref("");
const comment_section = ref("");
const deposit = ref("");

const male_native_2_pcs = ref(0);
const total_male_native_2_pcs = ref("");
watch(total_male_native_2_pcs, () => {});
const male_native_2_pcs_hanging = ref(0);
const total_male_native_2_pcs_hanging = ref("");
watch(total_male_native_2_pcs_hanging, () => {});
const male_native_3_pcs_notAgbada = ref(0);
const total_male_native_3_pcs_notAgbada = ref("");
watch(total_male_native_3_pcs_notAgbada, () => {});
const male_native_3_pcs_notAgbada_hanging = ref(0);
const total_male_native_3_pcs_notAgbada_hanging = ref("");
watch(total_male_native_3_pcs_notAgbada_hanging, () => {});
const native_top_only = ref(0);
const total_native_top_only = ref("");
watch(total_native_top_only, () => {});
const native_trouser_only = ref(0);
const total_native_trouser_only = ref("");
watch(total_native_trouser_only, () => {});
const complete_male_agbada = ref(0);
const total_complete_male_agbada = ref("");
watch(total_complete_male_agbada, () => {});
const male_agbada_alone = ref(0);
const total_male_agbada_alone = ref("");
watch(total_male_agbada_alone, () => {});
const blouse = ref(0);
const total_blouse = ref("");
watch(total_blouse, () => {});
const blouse_hanging = ref(0);
const total_blouse_hanging = ref("");
watch(total_blouse_hanging, () => {});
const female_shirt = ref(0);
const total_female_shirt = ref("");
watch(total_female_shirt, () => {});
const female_shirt_hanging = ref(0);
const total_female_shirt_hanging = ref("");
watch(total_female_shirt_hanging, () => {});
const female_trouser_jeans = ref(0);
const total_female_trouser_jeans = ref("");
watch(total_female_trouser_jeans, () => {});
const female_trouser_jeans_hanging = ref(0);
const total_female_trouser_jeans_hanging = ref("");
watch(total_female_trouser_jeans_hanging, () => {});
const skirt_and_blouse_english = ref(0);
const total_skirt_and_blouse_english = ref("");
watch(total_skirt_and_blouse_english, () => {});
const skirt_and_blouse_english_hanging = ref(0);
const total_skirt_and_blouse_english_hanging = ref("");
watch(total_skirt_and_blouse_english_hanging, () => {});
const wrapper_buba_gele = ref(0);
const total_wrapper_buba_gele = ref("");
watch(total_wrapper_buba_gele, () => {});
const female_native_buba_trouser = ref(0);
const total_female_native_buba_trouser = ref("");
watch(total_female_native_buba_trouser, () => {});
const gown_english_hanging = ref(0);
const total_gown_english_hanging = ref("");
watch(total_gown_english_hanging, () => {});
const gown_native = ref(0);
const total_gown_native = ref("");
watch(total_gown_native, () => {});
const skirt_and_blouse_native = ref(0);
const total_skirt_and_blouse_native = ref("");
watch(total_skirt_and_blouse_native, () => {});
const aso_oke_wrapper_buba_gele = ref(0);
const total_aso_oke_wrapper_buba_gele = ref("");
watch(total_aso_oke_wrapper_buba_gele, () => {});
const male_complete_aso_oke = ref(0);
const total_male_complete_aso_oke = ref("");
watch(total_male_complete_aso_oke, () => {});
const male_medium_t_shirt_or_polo = ref(0);
const total_male_medium_t_shirt_or_polo = ref("");
watch(total_male_medium_t_shirt_or_polo, () => {});
const male_big_t_shirt_or_polo = ref(0);
const total_male_big_t_shirt_or_polo = ref("");
watch(total_male_big_t_shirt_or_polo, () => {});
const male_t_shirt_or_polo_hanging = ref(0);
const total_male_t_shirt_or_polo_hanging = ref("");
watch(total_male_t_shirt_or_polo_hanging, () => {});
const shirt_normal = ref(0);
const total_shirt_normal = ref("");
watch(total_shirt_normal, () => {});
const shirt_normal_hanging = ref(0);
const total_shirt_normal_hanging = ref("");
watch(total_shirt_normal_hanging, () => {});
const shirt_big = ref(0);
const total_shirt_big = ref("");
watch(total_shirt_big, () => {});
const shirt_big_hanging = ref(0);
const total_shirt_big_hanging = ref("");
watch(total_shirt_big_hanging, () => {});
const plain_trouser = ref(0);
const total_plain_trouser = ref("");
watch(total_plain_trouser, () => {});
const plain_trouser_hanging = ref(0);
const total_plain_trouser_hanging = ref("");
watch(total_plain_trouser_hanging, () => {});
const jeans_chinos_trouser = ref(0);
const total_jeans_chinos_trouser = ref("");
watch(total_jeans_chinos_trouser, () => {});
const jeans_chinos_trouser_hanging = ref(0);
const total_jeans_chinos_trouser_hanging = ref("");
watch(total_jeans_chinos_trouser_hanging, () => {});
const waist_coat_hanging = ref(0);
const total_waist_coat_hanging = ref("");
watch(total_waist_coat_hanging, () => {});
const tie = ref(0);
const total_tie = ref("");
watch(total_tie, () => {});
const shorts = ref(0);
const total_shorts = ref("");
watch(total_shorts, () => {});
const shorts_hanging = ref(0);
const total_shorts_hanging = ref("");
watch(total_shorts_hanging, () => {});
const singlet = ref(0);
const total_singlet = ref("");
watch(total_singlet, () => {});
const boxer = ref(0);
const total_boxer = ref("");
watch(total_boxer, () => {});
const male_three_pcs_suit_hanging = ref(0);
const total_male_three_pcs_suit_hanging = ref("");
watch(total_male_three_pcs_suit_hanging, () => {});
const female_two_pcs_suit_hanging = ref(0);
const total_female_two_pcs_suit_hanging = ref("");
watch(total_female_two_pcs_suit_hanging, () => {});
const male_two_pcs_suit_hanging = ref(0);
const total_male_two_pcs_suit_hanging = ref("");
watch(total_male_two_pcs_suit_hanging, () => {});
const female_three_pcs_suit_hanging = ref(0);
const total_female_three_pcs_suit_hanging = ref("");
watch(total_female_three_pcs_suit_hanging, () => {});
const male_jacket_hanging = ref(0);
const total_male_jacket_hanging = ref("");
watch(total_male_jacket_hanging, () => {});
const female_jacket_hanging = ref(0);
const total_female_jacket_hanging = ref("");
watch(total_female_jacket_hanging, () => {});
const jalamia = ref(0);
const total_jalamia = ref("");
watch(total_jalamia, () => {});
const camisole = ref(0);
const total_camisole = ref("");
watch(total_camisole, () => {});
const wrapper_only = ref(0);
const total_wrapper_only = ref("");
watch(total_wrapper_only, () => {});
const female_inner_wear = ref(0);
const total_female_inner_wear = ref("");
watch(total_female_inner_wear, () => {});
const head_tie_gele = ref(0);
const total_head_tie_gele = ref("");
watch(total_head_tie_gele, () => {});
const small_wedding_gown_hanging = ref(0);
const total_small_wedding_gown_hanging = ref("");
watch(total_small_wedding_gown_hanging, () => {});
const big_wedding_gown_hanging = ref(0);
const total_big_wedding_gown_hanging = ref("");
watch(total_big_wedding_gown_hanging, () => {});
const asooke_head_tie = ref(0);
const total_asooke_head_tie = ref("");
watch(total_asooke_head_tie, () => {});
const sweater_normal = ref(0);
const total_sweater_normal = ref("");
watch(total_sweater_normal, () => {});
const sweater_big = ref(0);
const total_sweater_big = ref("");
watch(total_sweater_big, () => {});
const towel_normal = ref(0);
const total_towel_normal = ref("");
watch(total_towel_normal, () => {});
const towel_big = ref(0);
const total_towel_big = ref("");
watch(total_towel_big, () => {});
const bed_spread_normal = ref(0);
const total_bed_spread_normal = ref("");
watch(total_bed_spread_normal, () => {});
const bed_spread_big = ref(0);
const total_bed_spread_big = ref("");
watch(total_bed_spread_big, () => {});
const duvet = ref(0);
const total_duvet = ref("");
watch(total_duvet, () => {});
const curtain_normal = ref(0);
const total_curtain_normal = ref("");
watch(total_curtain_normal, () => {});
const curtain_big = ref(0);
const total_curtain_big = ref("");
watch(total_curtain_big, () => {});
const curtain_very_big = ref(0);
const total_curtain_very_big = ref("");
watch(total_curtain_very_big, () => {});
const pyjamas_small = ref(0);
const total_pyjamas_small = ref("");
watch(total_pyjamas_small, () => {});
const pyjamas_big = ref(0);
const total_pyjamas_big = ref("");
watch(total_pyjamas_big, () => {});

const final_amount = ref(0);
const total_final_amount = ref("");
watch(total_final_amount, () => {});

// var date = new Date(Date.now());
// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear().toString().substr(-2);
// var formattedDate = day + '/' + month + '/' + year;
// console.log(formattedDate);

// function popup1(selectedCustomer) {
//   fixed1.value = true
//   selectedCustomerPopup1.value = selectedCustomer
// }

const onSubmit = () => {
  const token = useStore.getToken;

  const first_name = useStore.getFirst_name;
  const last_name = useStore.getLast_name;
  // console.log(first_name.value, "customer name"),
  // console.log(last_name.value, "customer name"),

  const formData = {
    customer: _first_name.value + " " + _last_name.value,
    customer_phone: _phone.value,
    staff: first_name + " " + last_name,
    quantity_male_native_2_pcs: Number(male_native_2_pcs.value),
    male_native_2_pcs: Number(total_male_native_2_pcs.value),
    quantity_male_native_2_pcs_hanging: Number(male_native_2_pcs_hanging.value),
    male_native_2_pcs_hanging: Number(total_male_native_2_pcs_hanging.value),
    quantity_male_native_3_pcs_notAgbada: Number(
      male_native_3_pcs_notAgbada.value
    ),
    male_native_3_pcs_notAgbada: Number(
      total_male_native_3_pcs_notAgbada.value
    ),
    quantity_male_native_3_pcs_notAgbada_hanging: Number(
      male_native_3_pcs_notAgbada_hanging.value
    ),
    male_native_3_pcs_notAgbada_hanging: Number(
      total_male_native_3_pcs_notAgbada_hanging.value
    ),
    quantity_native_top_only: Number(native_top_only.value),
    native_top_only: Number(total_native_top_only.value),
    quantity_native_trouser_only: Number(native_trouser_only.value),
    native_trouser_only: Number(total_native_trouser_only.value),
    quantity_complete_male_agbada: Number(complete_male_agbada.value),
    complete_male_agbada: Number(total_complete_male_agbada.value),
    quantity_male_agbada_alone: Number(male_agbada_alone.value),
    male_agbada_alone: Number(total_male_agbada_alone.value),
    quantity_blouse: Number(blouse.value),
    blouse: Number(total_blouse.value),
    quantity_blouse_hanging: Number(blouse_hanging.value),
    blouse_hanging: Number(total_blouse_hanging.value),
    quantity_female_shirt: Number(female_shirt.value),
    female_shirt: Number(total_female_shirt.value),
    quantity_female_shirt_hanging: Number(female_shirt_hanging.value),
    female_shirt_hanging: Number(total_female_shirt_hanging.value),
    quantity_female_trouser_jeans: Number(female_trouser_jeans.value),
    female_trouser_jeans: Number(total_female_trouser_jeans.value),
    quantity_female_trouser_jeans_hanging: Number(
      female_trouser_jeans_hanging.value
    ),
    female_trouser_jeans_hanging: Number(
      total_female_trouser_jeans_hanging.value
    ),
    quantity_skirt_and_blouse_english: Number(skirt_and_blouse_english.value),
    skirt_and_blouse_english: Number(total_skirt_and_blouse_english.value),
    quantity_skirt_and_blouse_english_hanging: Number(
      skirt_and_blouse_english_hanging.value
    ),
    skirt_and_blouse_english_hanging: Number(
      total_skirt_and_blouse_english_hanging.value
    ),
    quantity_wrapper_buba_gele: Number(wrapper_buba_gele.value),
    wrapper_buba_gele: Number(total_wrapper_buba_gele.value),
    quantity_female_native_buba_trouser: Number(
      female_native_buba_trouser.value
    ),
    female_native_buba_trouser: Number(total_female_native_buba_trouser.value),
    quantity_gown_english_hanging: Number(gown_english_hanging.value),
    gown_english_hanging: Number(total_gown_english_hanging.value),
    quantity_gown_native: Number(gown_native.value),
    gown_native: Number(total_gown_native.value),
    quantity_skirt_and_blouse_native: Number(skirt_and_blouse_native.value),
    skirt_and_blouse_native: Number(total_skirt_and_blouse_native.value),
    aso_oke_wrapper_buba_gele: Number(aso_oke_wrapper_buba_gele.value),
    quantity_male_complete_aso_oke: Number(male_complete_aso_oke.value),
    male_complete_aso_oke: Number(total_male_complete_aso_oke.value),
    quantity_male_medium_t_shirt_or_polo: Number(
      male_medium_t_shirt_or_polo.value
    ),
    male_medium_t_shirt_or_polo: Number(
      total_male_medium_t_shirt_or_polo.value
    ),
    quantity_male_big_t_shirt_or_polo: Number(male_big_t_shirt_or_polo.value),
    male_big_t_shirt_or_polo: Number(total_male_big_t_shirt_or_polo.value),
    quantity_male_t_shirt_or_polo_hanging: Number(
      male_t_shirt_or_polo_hanging.value
    ),
    male_t_shirt_or_polo_hanging: Number(
      total_male_t_shirt_or_polo_hanging.value
    ),
    quantity_shirt_normal: Number(shirt_normal.value),
    shirt_normal: Number(total_shirt_normal.value),
    quantity_shirt_normal_hanging: Number(shirt_normal_hanging.value),
    shirt_normal_hanging: Number(total_shirt_normal_hanging.value),
    quantity_shirt_big: Number(shirt_big.value),
    shirt_big: Number(total_shirt_big.value),
    quantity_shirt_big_hanging: Number(shirt_big_hanging.value),
    shirt_big_hanging: Number(total_shirt_big_hanging.value),
    quantity_plain_trouser: Number(plain_trouser.value),
    plain_trouser: Number(total_plain_trouser.value),
    quantity_plain_trouser_hanging: Number(plain_trouser_hanging.value),
    plain_trouser_hanging: Number(total_plain_trouser_hanging.value),
    quantity_jeans_chinos_trouser: Number(jeans_chinos_trouser.value),
    jeans_chinos_trouser: Number(total_jeans_chinos_trouser.value),
    quantity_jeans_chinos_trouser_hanging: Number(
      jeans_chinos_trouser_hanging.value
    ),
    jeans_chinos_trouser_hanging: Number(
      total_jeans_chinos_trouser_hanging.value
    ),
    quantity_waist_coat_hanging: Number(waist_coat_hanging.value),
    waist_coat_hanging: Number(total_waist_coat_hanging.value),
    quantity_tie: Number(tie.value),
    tie: Number(total_tie.value),
    quantity_shorts: Number(shorts.value),
    shorts: Number(total_shorts.value),
    quantity_shorts_hanging: Number(shorts_hanging.value),
    shorts_hanging: Number(total_shorts_hanging.value),
    quantity_singlet: Number(singlet.value),
    singlet: Number(total_singlet.value),
    quantity_boxer: Number(boxer.value),
    boxer: Number(total_boxer.value),
    quantity_male_two_pcs_suit_hanging: Number(male_two_pcs_suit_hanging.value),
    male_two_pcs_suit_hanging: Number(total_male_two_pcs_suit_hanging.value),
    quantity_male_three_pcs_suit_hanging: Number(
      male_three_pcs_suit_hanging.value
    ),
    male_three_pcs_suit_hanging: Number(
      total_male_three_pcs_suit_hanging.value
    ),
    quantity_female_two_pcs_suit_hanging: Number(
      female_two_pcs_suit_hanging.value
    ),
    female_two_pcs_suit_hanging: Number(
      total_female_two_pcs_suit_hanging.value
    ),
    quantity_female_three_pcs_suit_hanging: Number(
      female_three_pcs_suit_hanging.value
    ),
    female_three_pcs_suit_hanging: Number(
      total_female_three_pcs_suit_hanging.value
    ),
    quantity_male_jacket_hanging: Number(male_jacket_hanging.value),
    male_jacket_hanging: Number(total_male_jacket_hanging.value),
    quantity_female_jacket_hanging: Number(female_jacket_hanging.value),
    female_jacket_hanging: Number(total_female_jacket_hanging.value),
    quantity_jalamia: Number(jalamia.value),
    jalamia: Number(total_jalamia.value),
    quantity_camisole: Number(camisole.value),
    camisole: Number(total_camisole.value),
    quantity_wrapper_only: Number(wrapper_only.value),
    wrapper_only: Number(total_wrapper_only.value),
    quantity_female_inner_wear: Number(female_inner_wear.value),
    female_inner_wear: Number(total_female_inner_wear.value),
    quantity_head_tie_gele: Number(head_tie_gele.value),
    head_tie_gele: Number(total_head_tie_gele.value),
    quantity_small_wedding_gown_hanging: Number(
      small_wedding_gown_hanging.value
    ),
    small_wedding_gown_hanging: Number(total_small_wedding_gown_hanging.value),
    quantity_big_wedding_gown_hanging: Number(big_wedding_gown_hanging.value),
    big_wedding_gown_hanging: Number(total_big_wedding_gown_hanging.value),
    quantity_asooke_head_tie: Number(asooke_head_tie.value),
    asooke_head_tie: Number(total_asooke_head_tie.value),
    quantity_sweater_normal: Number(sweater_normal.value),
    sweater_normal: Number(total_sweater_normal.value),
    quantity_sweater_big: Number(sweater_big.value),
    sweater_big: Number(total_sweater_big.value),
    quantity_towel_normal: Number(towel_normal.value),
    towel_normal: Number(total_towel_normal.value),
    quantity_towel_big: Number(towel_big.value),
    towel_big: Number(total_towel_big.value),
    quantity_bed_spread_normal: Number(bed_spread_normal.value),
    bed_spread_normal: Number(total_bed_spread_normal.value),
    quantity_bed_spread_big: Number(bed_spread_big.value),
    bed_spread_big: Number(total_bed_spread_big.value),
    quantity_duvet: Number(duvet.value),
    duvet: Number(total_duvet.value),
    quantity_curtain_normal: Number(curtain_normal.value),
    curtain_normal: Number(total_curtain_normal.value),
    quantity_curtain_big: Number(curtain_big.value),
    curtain_big: Number(total_curtain_big.value),
    quantity_curtain_very_big: Number(curtain_very_big.value),
    curtain_very_big: Number(total_curtain_very_big.value),
    quantity_pyjamas_small: Number(pyjamas_small.value),
    pyjamas_small: Number(total_pyjamas_small.value),
    quantity_pyjamas_big: Number(pyjamas_big.value),
    pyjamas_big: Number(total_pyjamas_big.value),
    collection_date: collection_date.value,
    collected_on: collected_on_date.value + " " + collected_on_time.value,
    comment_section: comment_section.value,
    deposit: deposit.value,
    final_amount: total_final_amount.value.toString(),
  };

  // console.log(formData, 'formData1')
  // const formData = new FormData();
  // const formData = ref({})
  // let value = $q.localStorage.getItem('profile')
  // let profile = JSON.parse(value)

  // console.log(customer.value, 'customer')
  // const first_name = useStore.getFirst_name
  // const last_name = useStore.getLast_name

  // const formData = new FormData();

  //   formData.append("customer" , customer.value);
  //   formData.append("customer_phone" , customer_phone.value);
  //   formData.append("staff" , first_name + " " + last_name);
  //   formData.append("male_trouser" , Number(total_male_trouser));
  //   formData.append("female_trouser" , Number(total_female_trouser.value));
  //   formData.append("male_jeans" , Number(total_male_jeans.value));
  //   formData.append("female_jeans" , Number(total_female_jeans.value));
  //   formData.append("babymale_jeans" , Number(total_baby_male_jeans.value));
  //   formData.append("babyfemale_jeans" , Number(total_baby_female_jeans.value));
  //   formData.append("male_native" , Number(total_male_native.value));
  //   formData.append("female_native" , Number(total_female_native.value));
  //   formData.append("complete_male_agbada" , Number(total_complete_male_agbada.value));
  //   formData.append("complete_female_agbada" , Number(total_complete_female_agbada.value));
  //   formData.append("male_suit" , Number(total_male_suit.value));
  //   formData.append("male_three_piece_suit" , Number(total_male_three_piece_suit.value));
  //   formData.append("female_suit" , Number(total_female_suit.value));
  //   formData.append("female_three_piece_suit" , Number(total_female_three_piece_suit.value));
  //   formData.append("male_shirt" , Number(total_male_shirt.value));
  //   formData.append("female_shirt" , Number(total_female_shirt.value));
  //   formData.append("male_t_shirt" , Number(total_male_t_shirt.value));
  //   formData.append("female_t_shirt" , Number(total_female_t_shirt.value));
  //   formData.append("skirt" , Number(total_skirt.value));
  //   formData.append("blouse" , Number(total_blouse.value));
  //   formData.append("skirt_blouse" , Number(total_skirt_and_blouse.value));
  //   formData.append("native_blouse" , Number(total_native_blouse.value));
  //   formData.append("native_skirt" , Number(total_native_skirt.value));
  //   formData.append("native_skirt_blouse" , Number(total_native_skirt_and_blouse.value));
  //   formData.append("male_jacket" , Number(total_male_jacket.value));
  //   formData.append("female_jacket" , Number(total_female_jacket.value));
  //   formData.append("gown" , Number(total_gown.value));
  //   formData.append("wedding_gown" , Number(total_wedding_gown.value));
  //   formData.append("bed_spread" , Number(total_bed_spread.value));
  //   formData.append("pillow_case" , Number(total_pillow_case.value));
  //   formData.append("pillow" , Number(total_pillow.value));
  //   formData.append("duvet" , Number(total_duvet.value));
  //   formData.append("big_towel" , Number(total_big_towel.value));
  //   formData.append("small_towel" , Number(total_small_towel.value));
  //   formData.append("rug" , Number(total_rug.value));
  //   formData.append("male_singlet" , Number(total_male_singlet.value));
  //   formData.append("female_singlet" , Number(total_female_singlet.value));
  //   formData.append("male_inner_vest" , Number(total_male_inner_vest.value));
  //   formData.append("female_inner_vest" , Number(total_female_inner_vest.value));
  //   formData.append("boxer" , Number(total_boxer.value));
  //   formData.append("bra" , Number(total_bra.value));
  //   formData.append("pant" , Number(total_pant.value));
  //   formData.append("collection_date" , collection_date.value);
  //   formData.append("comment_section" , comment_section.value);
  //   formData.append("deposit" , deposit.value);
  //   formData.append("final_amount" , total_final_amount.value);

  // console.log(total_male_trouser, 'total_male_trouser')
  // console.log(customer.value, 'formData1')
  // console.log(customer_phone.value, 'customer_phone')
  // console.log(total_final_amount.value, 'final_amount')
  // console.log(comment_section.value, 'comment_section')

  // console.log(formData.entries, 'formData1')
  // for (const [key, value] of formData.entries()) {
  //   console.log(key + ': ' + value);
  // }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // console.log(token, 'token')
  axios
    .post(`${base}/intake/`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    // axios.post(`${base}/intake/`, formData)
    .then((response) => {
      data.value = response.data;
      console.log(data.value, "intake yello!");
      // onReset()
      $q.notify({
        color: "green",
        position: "bottom",
        message: "Saved",
        icon: "check",
      });
      window.location.reload();
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Loading failed",
        icon: "report_problem",
      });
    });
};

// const allPrice = ref([])

const loadPrice = () => {
  const token = useStore.getToken;
  console.log(token, "token");
  api
    .get(`/price/all`, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      lastPrice.value = response.data.data.reverse().shift();
      console.log(lastPrice.value, "last price");
      // const last_Price = allPrice.value.shift();
      // console.log(last_Price, "last_Price");
      // lastPrice = allPrice.value.shift();
      // console.log(lastPrice, "lastPrice");
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

const ll = () => {
  // console.log($route.params)
  // console.log($route.params.first)
  // console.log($route.params.last)
  // console.log($route.params.phone)
  _first_name.value = $route.params.first;
  _last_name.value = $route.params.last;
  _phone.value = $route.params.phone;
};
onMounted(() => {
  loadPrice();
  ll();
  // console.log($route.query)
});

onMounted(() => {
  loadPrice();
});

const onReset = () => {
  // formData.customer_phone.value = null
  // formData.username.value = null
  // formData.phone_number.value = null
  // formData.date_of_birth.value = null
  // formData.postal_address.value = null
  // formData.country.value = null
  // formData.state.value = null
  // formData.kin_first_name.value = null
  // formData.kin_last_name.value = null
  // formData.kin_email.value = null
  // formData.kin_phone_number.value = null
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
