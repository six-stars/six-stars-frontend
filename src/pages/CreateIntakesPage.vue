<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Intakes</div> -->
    <!-- <q-separator /> -->
    <div class="q-pt-sm" v-show="main">
      <q-separator />
      <div class="column lt-md">
        <div class="fixed-full overflow-auto">
          <q-btn-toggle
            v-model="category"
            push
            spread
            no-caps
            rounded
            unelevated
            color="white"
            text-color="black"
            toggle-color="blue-11"
            class="col q-mt-sm q-mb-sm"
            :options="[
              { label: 'General', value: '4' },
              { label: 'Male', value: '3' },
              { label: 'Female', value: '2' },
              { label: 'Kids', value: '1' },
            ]"
          />
          <q-separator />
          <!-- <q-scroll-area :style="{ height: '100vh' }"> -->
          <div class="col">
            <!-- <q-form @submit="onSubmit" @reset="onReset"> -->
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Native 2 Pcs Folding-Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_native_2pcs_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_native_2pcs_folding_colored =
                        2 * quan_male_native_2pcs_folding_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_native_2pcs_folding_colored"
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
                    (total_male_native_2pcs_folding_colored =
                      lastPrice.male_native_2pcs_folding_colored *
                      quan_male_native_2pcs_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Native 2 Pcs Hanging-Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_native_2pcs_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_native_2pcs_hanging_colored =
                        2 * quan_male_native_2pcs_hanging_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_native_2pcs_hanging_colored"
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
                    (total_male_native_2pcs_hanging_colored =
                      lastPrice.male_native_2pcs_hanging_colored *
                      quan_male_native_2pcs_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Native 2 Pcs Folding-White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_native_2pcs_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_native_2pcs_folding_white =
                        2 * quan_male_native_2pcs_folding_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_native_2pcs_folding_white"
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
                    (total_male_native_2pcs_folding_white =
                      lastPrice.male_native_2pcs_folding_white *
                      quan_male_native_2pcs_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Native 2 Pcs Hanging-White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_native_2pcs_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_native_2pcs_hanging_white =
                        2 * quan_male_native_2pcs_hanging_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_native_2pcs_hanging_white"
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
                    (total_male_native_2pcs_hanging_white =
                      lastPrice.male_native_2pcs_hanging_white *
                      quan_male_native_2pcs_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Native 3 Pcs Not-Agbada Folding-Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.male_native_3pcs_notAgbada_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_native_3pcs_notAgbada_folding_colored =
                        3 * quan_male_native_3pcs_notAgbada_folding_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_native_3pcs_notAgbada_folding_colored"
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
                    (total_male_native_3pcs_notAgbada_folding_colored =
                      lastPrice.male_native_3pcs_notAgbada_folding_colored *
                      quan_male_native_3pcs_notAgbada_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Native 3 Pcs Not-Agbada Hanging-Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.male_native_3pcs_notAgbada_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_native_3pcs_notAgbada_hanging_colored =
                        3 * quan_male_native_3pcs_notAgbada_hanging_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_native_3pcs_notAgbada_hanging_colored"
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
                    (total_male_native_3pcs_notAgbada_hanging_colored =
                      lastPrice.male_native_3pcs_notAgbada_hanging_colored *
                      quan_male_native_3pcs_notAgbada_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Native 3 Pcs Not-Agbada Folding-White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.male_native_3pcs_notAgbada_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_native_3pcs_notAgbada_folding_white =
                        3 * quan_male_native_3pcs_notAgbada_folding_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_native_3pcs_notAgbada_folding_white"
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
                    (total_male_native_3pcs_notAgbada_folding_white =
                      lastPrice.male_native_3pcs_notAgbada_folding_white *
                      quan_male_native_3pcs_notAgbada_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Native 3 Pcs Not-Agbada Hanging-White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.male_native_3pcs_notAgbada_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_native_3pcs_notAgbada_hanging_white =
                        3 * quan_male_native_3pcs_notAgbada_hanging_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_native_3pcs_notAgbada_hanging_white"
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
                    (total_male_native_3pcs_notAgbada_hanging_white =
                      lastPrice.male_native_3pcs_notAgbada_hanging_white *
                      quan_male_native_3pcs_notAgbada_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Native Top Only Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.native_top_only_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="native_top_only_folding_colored"
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
                    (total_native_top_only_folding_colored =
                      lastPrice.native_top_only_folding_colored *
                      native_top_only_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Native Top Only Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.native_top_only_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="native_top_only_hanging_colored"
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
                    (total_native_top_only_hanging_colored =
                      lastPrice.native_top_only_hanging_colored *
                      native_top_only_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Native Top Only Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.native_top_only_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="native_top_only_folding_white"
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
                    (total_native_top_only_folding_white =
                      lastPrice.native_top_only_folding_white *
                      native_top_only_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Native Top Only Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.native_top_only_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="native_top_only_hanging_white"
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
                    (total_native_top_only_hanging_white =
                      lastPrice.native_top_only_hanging_white *
                      native_top_only_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Native Trouser Only Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.native_trouser_only_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="native_trouser_only_folding_colored"
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
                    (total_native_trouser_only_folding_colored =
                      lastPrice.native_trouser_only_folding_colored *
                      native_trouser_only_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Native Trouser Only Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.native_trouser_only_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="native_trouser_only_hanging_colored"
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
                    (total_native_trouser_only_hanging_colored =
                      lastPrice.native_trouser_only_hanging_colored *
                      native_trouser_only_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Native Trouser Only Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.native_trouser_only_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="native_trouser_only_folding_white"
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
                    (total_native_trouser_only_folding_white =
                      lastPrice.native_trouser_only_folding_white *
                      native_trouser_only_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Native Trouser Only Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.native_trouser_only_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="native_trouser_only_hanging_white"
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
                    (total_native_trouser_only_hanging_white =
                      lastPrice.native_trouser_only_hanging_white *
                      native_trouser_only_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Agbada Only Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_agbada_only_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_agbada_only_folding_colored"
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
                    (total_male_agbada_only_folding_colored =
                      lastPrice.male_agbada_only_folding_colored *
                      male_agbada_only_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Agbada Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_agbada_only_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_agbada_only_hanging_colored"
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
                    (total_male_agbada_only_hanging_colored =
                      lastPrice.male_agbada_only_hanging_colored *
                      male_agbada_only_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Agbada Only Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_agbada_only_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_agbada_only_folding_white"
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
                    (total_male_agbada_only_folding_white =
                      lastPrice.male_agbada_only_folding_white *
                      male_agbada_only_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Agbada Only Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_agbada_only_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_agbada_only_hanging_white"
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
                    (total_male_agbada_only_hanging_white =
                      lastPrice.male_agbada_only_hanging_white *
                      male_agbada_only_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Complete Male Agbada 3 Pcs Folding-Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.complete_male_agbada_3pcs_Folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (complete_male_agbada_3pcs_Folding_colored =
                        3 * quan_complete_male_agbada_3pcs_Folding_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_complete_male_agbada_3pcs_Folding_colored"
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
                    (total_complete_male_agbada_3pcs_Folding_colored =
                      lastPrice.complete_male_agbada_3pcs_Folding_colored *
                      quan_complete_male_agbada_3pcs_Folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Complete Male Agbada 3 Pcs Hanging-Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.complete_male_agbada_3pcs_Hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (complete_male_agbada_3pcs_Hanging_colored =
                        3 * quan_complete_male_agbada_3pcs_Hanging_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_complete_male_agbada_3pcs_Hanging_colored"
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
                    (total_complete_male_agbada_3pcs_Hanging_colored =
                      lastPrice.complete_male_agbada_3pcs_Hanging_colored *
                      quan_complete_male_agbada_3pcs_Hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Complete Male Agbada 3 Pcs Folding-White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.complete_male_agbada_3pcs_Folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (complete_male_agbada_3pcs_Folding_white =
                        3 * quan_complete_male_agbada_3pcs_Folding_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_complete_male_agbada_3pcs_Folding_white"
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
                    (total_complete_male_agbada_3pcs_Folding_white =
                      lastPrice.complete_male_agbada_3pcs_Folding_white *
                      quan_complete_male_agbada_3pcs_Folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Complete Male Agbada 3 Pcs Hanging-White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.complete_male_agbada_3pcs_Hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (complete_male_agbada_3pcs_Hanging_white =
                        3 * quan_complete_male_agbada_3pcs_Hanging_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_complete_male_agbada_3pcs_Hanging_white"
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
                    (total_complete_male_agbada_3pcs_Hanging_white =
                      lastPrice.complete_male_agbada_3pcs_Hanging_white *
                      quan_complete_male_agbada_3pcs_Hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.normal_shirt_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="normal_shirt_folding_colored"
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
                    (total_normal_shirt_folding_colored =
                      lastPrice.normal_shirt_folding_colored *
                      normal_shirt_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.normal_shirt_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="normal_shirt_hanging_colored"
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
                    (total_normal_shirt_hanging_colored =
                      lastPrice.normal_shirt_hanging_colored *
                      normal_shirt_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.normal_shirt_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="normal_shirt_folding_white"
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
                    (total_normal_shirt_folding_white =
                      lastPrice.normal_shirt_folding_white *
                      normal_shirt_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.normal_shirt_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="normal_shirt_hanging_white"
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
                    (total_normal_shirt_hanging_white =
                      lastPrice.normal_shirt_hanging_white *
                      normal_shirt_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Big Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_big_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_big_folding_colored"
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
                    (total_shirt_big_folding_colored =
                      lastPrice.shirt_big_folding_colored *
                      shirt_big_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Big Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_big_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_big_hanging_colored"
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
                    (total_shirt_big_hanging_colored =
                      lastPrice.shirt_big_hanging_colored *
                      shirt_big_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Big Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_big_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_big_folding_white"
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
                    (total_shirt_big_folding_white =
                      lastPrice.shirt_big_folding_white *
                      shirt_big_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Big Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_big_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_big_hanging_white"
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
                    (total_shirt_big_hanging_white =
                      lastPrice.shirt_big_hanging_white *
                      shirt_big_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt XLarge Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_x_large_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_x_large_folding_colored"
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
                    (total_shirt_x_large_folding_colored =
                      lastPrice.shirt_x_large_folding_colored *
                      shirt_x_large_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt XLarge Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_x_large_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_x_large_hanging_colored"
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
                    (total_shirt_x_large_hanging_colored =
                      lastPrice.shirt_x_large_hanging_colored *
                      shirt_x_large_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt XLarge Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_x_large_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_x_large_folding_white"
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
                    (total_shirt_x_large_folding_white =
                      lastPrice.shirt_x_large_folding_white *
                      shirt_x_large_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt XLarge Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_x_large_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_x_large_hanging_white"
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
                    (total_shirt_x_large_hanging_white =
                      lastPrice.shirt_x_large_hanging_white *
                      shirt_x_large_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Children Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_children_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_children_folding_colored"
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
                    (total_shirt_children_folding_colored =
                      lastPrice.shirt_children_folding_colored *
                      shirt_children_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Children Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_children_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_children_hanging_colored"
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
                    (total_shirt_children_hanging_colored =
                      lastPrice.shirt_children_hanging_colored *
                      shirt_children_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Children Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_children_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_children_folding_white"
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
                    (total_shirt_children_folding_white =
                      lastPrice.shirt_children_folding_white *
                      shirt_children_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shirt Children Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shirt_children_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shirt_children_hanging_white"
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
                    (total_shirt_children_hanging_white =
                      lastPrice.shirt_children_hanging_white *
                      shirt_children_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Blouse Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.blouse_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blouse_folding_colored"
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
                    (total_blouse_folding_colored =
                      lastPrice.blouse_folding_colored * blouse_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Blouse Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.blouse_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blouse_hanging_colored"
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
                    (total_blouse_hanging_colored =
                      lastPrice.blouse_hanging_colored * blouse_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Blouse Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.blouse_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blouse_folding_white"
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
                    (total_blouse_folding_white =
                      lastPrice.blouse_folding_white * blouse_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Blouse Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.blouse_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blouse_hanging_white"
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
                    (total_blouse_hanging_white =
                      lastPrice.blouse_hanging_white * blouse_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Blouse XLarge Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.blouse_x_large_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blouse_x_large_folding_colored"
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
                    (total_blouse_x_large_folding_colored =
                      lastPrice.blouse_x_large_folding_colored *
                      blouse_x_large_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Blouse XLarge Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.blouse_x_large_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blouse_x_large_hanging_colored"
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
                    (total_blouse_x_large_hanging_colored =
                      lastPrice.blouse_x_large_hanging_colored *
                      blouse_x_large_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Blouse XLarge Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.blouse_x_large_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blouse_x_large_folding_white"
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
                    (total_blouse_x_large_folding_white =
                      lastPrice.blouse_x_large_folding_white *
                      blouse_x_large_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Blouse XLarge Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.blouse_x_large_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blouse_x_large_hanging_white"
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
                    (total_blouse_x_large_hanging_white =
                      lastPrice.blouse_x_large_hanging_white *
                      blouse_x_large_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Shirt Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_shirt_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_shirt_folding_colored"
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
                    (total_female_shirt_folding_colored =
                      lastPrice.female_shirt_folding_colored *
                      female_shirt_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Shirt Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_shirt_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_shirt_hanging_colored"
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
                    (total_female_shirt_hanging_colored =
                      lastPrice.female_shirt_hanging_colored *
                      female_shirt_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Shirt Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_shirt_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_shirt_folding_white"
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
                    (total_female_shirt_folding_white =
                      lastPrice.female_shirt_folding_white *
                      female_shirt_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Shirt Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_shirt_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_shirt_hanging_white"
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
                    (total_female_shirt_hanging_white =
                      lastPrice.female_shirt_hanging_white *
                      female_shirt_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Small Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_small_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_small_folding_colored"
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
                    (total_tshirt_polo_small_folding_colored =
                      lastPrice.tshirt_polo_small_folding_colored *
                      tshirt_polo_small_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Small Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_small_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_small_hanging_colored"
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
                    (total_tshirt_polo_small_hanging_colored =
                      lastPrice.tshirt_polo_small_hanging_colored *
                      tshirt_polo_small_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Small Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_small_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_small_folding_white"
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
                    (total_tshirt_polo_small_folding_white =
                      lastPrice.tshirt_polo_small_folding_white *
                      tshirt_polo_small_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Small Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_small_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_small_hanging_white"
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
                    (total_tshirt_polo_small_hanging_white =
                      lastPrice.tshirt_polo_small_hanging_white *
                      tshirt_polo_small_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Medium Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_medium_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_medium_folding_colored"
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
                    (total_tshirt_polo_medium_folding_colored =
                      lastPrice.tshirt_polo_medium_folding_colored *
                      tshirt_polo_medium_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Medium Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_medium_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_medium_hanging_colored"
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
                    (total_tshirt_polo_medium_hanging_colored =
                      lastPrice.tshirt_polo_medium_hanging_colored *
                      tshirt_polo_medium_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Medium Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_medium_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_medium_folding_white"
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
                    (total_tshirt_polo_medium_folding_white =
                      lastPrice.tshirt_polo_medium_folding_white *
                      tshirt_polo_medium_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Medium Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_medium_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_medium_hanging_white"
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
                    (total_tshirt_polo_medium_hanging_white =
                      lastPrice.tshirt_polo_medium_hanging_white *
                      tshirt_polo_medium_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Big Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_big_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_big_folding_colored"
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
                    (total_tshirt_polo_big_folding_colored =
                      lastPrice.tshirt_polo_big_folding_colored *
                      tshirt_polo_big_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Big Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_big_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_big_hanging_colored"
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
                    (total_tshirt_polo_big_hanging_colored =
                      lastPrice.tshirt_polo_big_hanging_colored *
                      tshirt_polo_big_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Big Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_big_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_big_folding_white"
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
                    (total_tshirt_polo_big_folding_white =
                      lastPrice.tshirt_polo_big_folding_white *
                      tshirt_polo_big_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  TShirt/Polo Big Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.tshirt_polo_big_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tshirt_polo_big_hanging_white"
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
                    (total_tshirt_polo_big_hanging_white =
                      lastPrice.tshirt_polo_big_hanging_white *
                      tshirt_polo_big_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Trouser Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.plain_trouser_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="plain_trouser_folding_colored"
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
                    (total_plain_trouser_folding_colored =
                      lastPrice.plain_trouser_folding_colored *
                      plain_trouser_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Trouser Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.plain_trouser_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="plain_trouser_hanging_colored"
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
                    (total_plain_trouser_hanging_colored =
                      lastPrice.plain_trouser_hanging_colored *
                      plain_trouser_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Trouser Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.plain_trouser_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="plain_trouser_folding_white"
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
                    (total_plain_trouser_folding_white =
                      lastPrice.plain_trouser_folding_white *
                      plain_trouser_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Trouser Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.plain_trouser_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="plain_trouser_hanging_white"
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
                    (total_plain_trouser_hanging_white =
                      lastPrice.plain_trouser_hanging_white *
                      plain_trouser_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Jeans/Chinos Trouser Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.jeans_chinos_trouser_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="jeans_chinos_trouser_folding_colored"
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
                    (total_jeans_chinos_trouser_folding_colored =
                      lastPrice.jeans_chinos_trouser_folding_colored *
                      jeans_chinos_trouser_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Jeans/Chinos Trouser Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.jeans_chinos_trouser_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="jeans_chinos_trouser_hanging_colored"
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
                    (total_jeans_chinos_trouser_hanging_colored =
                      lastPrice.jeans_chinos_trouser_hanging_colored *
                      jeans_chinos_trouser_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Jeans/Chinos Trouser Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.jeans_chinos_trouser_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="jeans_chinos_trouser_folding_white"
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
                    (total_jeans_chinos_trouser_folding_white =
                      lastPrice.jeans_chinos_trouser_folding_white *
                      jeans_chinos_trouser_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Jeans/Chinos Trouser Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.jeans_chinos_trouser_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="jeans_chinos_trouser_hanging_white"
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
                    (total_jeans_chinos_trouser_hanging_white =
                      lastPrice.jeans_chinos_trouser_hanging_white *
                      jeans_chinos_trouser_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Waist Coat Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.waist_coat_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="waist_coat_hanging_colored"
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
                    (total_waist_coat_hanging_colored =
                      lastPrice.waist_coat_hanging_colored *
                      waist_coat_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Waist Coat Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.waist_coat_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="waist_coat_hanging_white"
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
                    (total_waist_coat_hanging_white =
                      lastPrice.waist_coat_hanging_white *
                      waist_coat_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Tie Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.tie_colored }}</p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tie_colored"
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
                    (total_tie_colored = lastPrice.tie_colored * tie_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Tie White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.tie_white }}</p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="tie_white"
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
                  {{ (total_tie_white = lastPrice.tie_white * tie_white) }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shorts Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shorts_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shorts_folding_colored"
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
                    (total_shorts_folding_colored =
                      lastPrice.shorts_folding_colored * shorts_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shorts Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shorts_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shorts_hanging_colored"
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
                    (total_shorts_hanging_colored =
                      lastPrice.shorts_hanging_colored * shorts_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shorts Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shorts_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shorts_folding_white"
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
                    (total_shorts_folding_white =
                      lastPrice.shorts_folding_white * shorts_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Shorts Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.shorts_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="shorts_hanging_white"
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
                    (total_shorts_hanging_white =
                      lastPrice.shorts_hanging_white * shorts_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Singlet Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.singlet_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="singlet_colored"
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
                    (total_singlet_colored =
                      lastPrice.singlet_colored * singlet_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Singlet White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.singlet_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="singlet_white"
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
                    (total_singlet_white =
                      lastPrice.singlet_white * singlet_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Boxer Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.boxer_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="boxer_colored"
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
                    (total_boxer_colored =
                      lastPrice.boxer_colored * boxer_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Boxer White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">Price: {{ lastPrice.boxer_white }}</p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="boxer_white"
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
                    (total_boxer_white = lastPrice.boxer_white * boxer_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male 2 Pcs Suit Hanging-Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_2pcs_suit_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_2pcs_suit_hanging_colored =
                        2 * quan_male_2pcs_suit_hanging_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_2pcs_suit_hanging_colored"
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
                    (total_male_2pcs_suit_hanging_colored =
                      lastPrice.male_2pcs_suit_hanging_colored *
                      quan_male_2pcs_suit_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male 2 Pcs Suit Hanging-White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_2pcs_suit_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_2pcs_suit_hanging_white =
                        2 * quan_male_2pcs_suit_hanging_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_2pcs_suit_hanging_white"
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
                    (total_male_2pcs_suit_hanging_white =
                      lastPrice.male_2pcs_suit_hanging_white *
                      quan_male_2pcs_suit_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male 3 Pcs Suit Hanging-Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_3pcs_suit_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_3pcs_suit_hanging_colored =
                        3 * quan_male_3pcs_suit_hanging_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_3pcs_suit_hanging_colored"
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
                    (total_male_3pcs_suit_hanging_colored =
                      lastPrice.male_3pcs_suit_hanging_colored *
                      quan_male_3pcs_suit_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male 3 Pcs Suit Hanging-White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_3pcs_suit_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_3pcs_suit_hanging_white =
                        3 * quan_male_3pcs_suit_hanging_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_3pcs_suit_hanging_white"
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
                    (toal_male_3pcs_suit_hanging_white =
                      lastPrice.male_3pcs_suit_hanging_white *
                      quan_male_3pcs_suit_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female 2 Pcs Suit Hanging-Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_2pcs_suit_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (female_2pcs_suit_hanging_colored =
                        2 * quan_female_2pcs_suit_hanging_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_female_2pcs_suit_hanging_colored"
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
                    (total_female_2pcs_suit_hanging_colored =
                      lastPrice.female_2pcs_suit_hanging_colored *
                      quan_female_2pcs_suit_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female 2 Pcs Suit Hanging-White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_2pcs_suit_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (female_2pcs_suit_hanging_white =
                        2 * quan_female_2pcs_suit_hanging_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_female_2pcs_suit_hanging_white"
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
                    (total_female_2pcs_suit_hanging_white =
                      lastPrice.female_2pcs_suit_hanging_white *
                      quan_female_2pcs_suit_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female 3 Pcs Suit Hanging-Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_3pcs_suit_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (female_3pcs_suit_hanging_colored =
                        3 * quan_female_3pcs_suit_hanging_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_female_3pcs_suit_hanging_colored"
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
                    (total_female_3pcs_suit_hanging_colored =
                      lastPrice.female_3pcs_suit_hanging_colored *
                      quan_female_3pcs_suit_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female 3 Pcs Suit Hanging-White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_3pcs_suit_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (female_3pcs_suit_hanging_white =
                        3 * quan_female_3pcs_suit_hanging_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_female_3pcs_suit_hanging_white"
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
                    (toal_female_3pcs_suit_hanging_white =
                      lastPrice.female_3pcs_suit_hanging_white *
                      quan_female_3pcs_suit_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Jacket Only Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_jacket_only_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_jacket_only_colored"
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
                    (total_male_jacket_only_colored =
                      lastPrice.male_jacket_only_colored *
                      male_jacket_only_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Jacket Only White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_jacket_only_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_jacket_only_white"
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
                    (total_male_jacket_only_white =
                      lastPrice.male_jacket_only_white * male_jacket_only_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Jacket Only Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_jacket_only_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_jacket_only_colored"
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
                    (total_female_jacket_only_colored =
                      lastPrice.female_jacket_only_colored *
                      female_jacket_only_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Jacket Only White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_jacket_only_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_jacket_only_white"
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
                    (total_female_jacket_only_white =
                      lastPrice.female_jacket_only_white *
                      female_jacket_only_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Wedding Gown Small With Little Accessories White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price:
                  {{
                    lastPrice.wedding_gown_small_and_little_accessories_white
                  }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="wedding_gown_small_and_little_accessories_white"
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
                    (total_wedding_gown_small_and_little_accessories_white =
                      lastPrice.wedding_gown_small_and_little_accessories_white *
                      wedding_gown_small_and_little_accessories_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Wedding Gown Big With Plenty Accessories White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price:
                  {{ lastPrice.wedding_gown_big_and_plenty_accessories_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="wedding_gown_big_and_plenty_accessories_white"
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
                    (total_wedding_gown_big_and_plenty_accessories_white =
                      lastPrice.wedding_gown_big_and_plenty_accessories_white *
                      wedding_gown_big_and_plenty_accessories_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Kids Blouse Folding-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.Kids_blouse_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="Kids_blouse_folding_colored"
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
                    (total_Kids_blouse_folding_colored =
                      lastPrice.Kids_blouse_folding_colored *
                      Kids_blouse_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Kids Blouse Hanging-Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.Kids_blouse_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="Kids_blouse_hanging_colored"
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
                    (total_Kids_blouse_hanging_colored =
                      lastPrice.Kids_blouse_hanging_colored *
                      Kids_blouse_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Kids Blouse Folding-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.Kids_blouse_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="Kids_blouse_folding_white"
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
                    (total_Kids_blouse_folding_white =
                      lastPrice.Kids_blouse_folding_white *
                      Kids_blouse_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Kids Blouse Hanging-White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.Kids_blouse_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="Kids_blouse_hanging_white"
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
                    (total_Kids_blouse_hanging_white =
                      lastPrice.Kids_blouse_hanging_white *
                      Kids_blouse_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Jalamia Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.jalamia_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="jalamia_colored"
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
                    (total_jalamia_colored =
                      lastPrice.jalamia_colored * jalamia_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Jalamia White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.jalamia_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="jalamia_white"
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
                    (total_jalamia_white =
                      lastPrice.jalamia_white * jalamia_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Camisole Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.camisole_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="camisole_colored"
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
                    (total_camisole_colored =
                      lastPrice.camisole_colored * camisole_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Camisole White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.camisole_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="camisole_white"
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
                    (total_camisole_white =
                      lastPrice.camisole_white * camisole_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Wrapper, Buba And Scarf Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.wrapper_buba_scarf_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="wrapper_buba_scarf_colored"
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
                    (total_wrapper_buba_scarf_colored =
                      lastPrice.wrapper_buba_scarf_colored *
                      wrapper_buba_scarf_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Wrapper, Buba And Scarf White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.wrapper_buba_scarf_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="wrapper_buba_scarf_white"
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
                    (total_wrapper_buba_scarf_white =
                      lastPrice.wrapper_buba_scarf_white *
                      wrapper_buba_scarf_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Wrapper, Buba And No-Scarf Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.wrapper_buba_no_scarf_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="wrapper_buba_no_scarf_colored"
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
                    (total_wrapper_buba_no_scarf_colored =
                      lastPrice.wrapper_buba_no_scarf_colored *
                      wrapper_buba_no_scarf_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Wrapper, Buba And No-Scarf White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.wrapper_buba_no_scarf_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="wrapper_buba_no_scarf_white"
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
                    (total_wrapper_buba_no_scarf_white =
                      lastPrice.wrapper_buba_no_scarf_white *
                      wrapper_buba_no_scarf_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Wrapper Only Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.wrapper_only_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="wrapper_only_colored"
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
                    (total_wrapper_only_colored =
                      lastPrice.wrapper_only_colored * wrapper_only_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Wrapper Only White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.wrapper_only_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="wrapper_only_white"
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
                    (total_wrapper_only_white =
                      lastPrice.wrapper_only_white * wrapper_only_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Two Wrapper Scarf/No-Scarf Only Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.two_wrapper_scarf_or_no_scarf_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="two_wrapper_scarf_or_no_scarf_colored"
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
                    (total_two_wrapper_scarf_or_no_scarf_colored =
                      lastPrice.two_wrapper_scarf_or_no_scarf_colored *
                      two_wrapper_scarf_or_no_scarf_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Two Wrapper Scarf/No-Scarf White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.two_wrapper_scarf_or_no_scarf_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="two_wrapper_scarf_or_no_scarf_white"
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
                    (total_two_wrapper_scarf_or_no_scarf_white =
                      lastPrice.two_wrapper_scarf_or_no_scarf_white *
                      two_wrapper_scarf_or_no_scarf_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Aso-Oke Agbada and Cap 2pcs Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.aso_oke_agbada_and_cap_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (aso_oke_agbada_and_cap_colored =
                        2 * quan_aso_oke_agbada_and_cap_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_aso_oke_agbada_and_cap_colored"
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
                    (total_aso_oke_agbada_and_cap_colored =
                      lastPrice.aso_oke_agbada_and_cap_colored *
                      quan_aso_oke_agbada_and_cap_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_aso_oke_and_cap_3pcs_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_aso_oke_and_cap_3pcs_colored =
                        3 * quan_male_aso_oke_and_cap_3pcs_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_aso_oke_and_cap_3pcs_colored"
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
                    (total_male_aso_oke_and_cap_3pcs_colored =
                      lastPrice.male_aso_oke_and_cap_3pcs_colored *
                      quan_male_aso_oke_and_cap_3pcs_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Aso-Oke Wrapper, Buba and Gele 3pcs Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.aso_oke_wrapper_buba_gele_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (aso_oke_wrapper_buba_gele_colored =
                        3 * quan_aso_oke_wrapper_buba_gele_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_aso_oke_wrapper_buba_gele_colored"
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
                    (total_aso_oke_wrapper_buba_gele_colored =
                      lastPrice.aso_oke_wrapper_buba_gele_colored *
                      quan_aso_oke_wrapper_buba_gele_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Aso-Oke Wrapper and Gele 2pcs Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.aso_oke_wrapper_gele_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (aso_oke_wrapper_gele_colored =
                        2 * quan_aso_oke_wrapper_gele_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_aso_oke_wrapper_gele_colored"
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
                    (total_aso_oke_wrapper_gele_colored =
                      lastPrice.aso_oke_wrapper_gele_colored *
                      quan_aso_oke_wrapper_gele_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Aso-Oke Wrapper, Gele and Ipele 3pcs Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.aso_oke_wrapper_gele_ipele_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (aso_oke_wrapper_gele_ipele_colored =
                        3 * quan_aso_oke_wrapper_gele_ipele_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_aso_oke_wrapper_gele_ipele_colored"
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
                    (total_aso_oke_wrapper_gele_ipele_colored =
                      lastPrice.aso_oke_wrapper_gele_ipele_colored *
                      quan_aso_oke_wrapper_gele_ipele_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Aso-Oke Wrapper, Gele and Ipele 3pcs White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.aso_oke_wrapper_gele_ipele_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (aso_oke_wrapper_gele_ipele_white =
                        3 * quan_aso_oke_wrapper_gele_ipele_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_aso_oke_wrapper_gele_ipele_white"
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
                    (total_aso_oke_wrapper_gele_ipele_white =
                      lastPrice.aso_oke_wrapper_gele_ipele_white *
                      quan_aso_oke_wrapper_gele_ipele_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Aso-Oke Head-Tie Ipele 2pcs White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.aso_oke_headtie_ipele_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (aso_oke_headtie_ipele_colored =
                        2 * quan_aso_oke_headtie_ipele_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_aso_oke_headtie_ipele_colored"
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
                    (total_aso_oke_headtie_ipele_colored =
                      lastPrice.aso_oke_headtie_ipele_colored *
                      quan_aso_oke_headtie_ipele_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Complete Male Aso-Oke 3pcs White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_complete_aso_oke_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (male_complete_aso_oke_white =
                        3 * quan_male_complete_aso_oke_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_male_complete_aso_oke_white"
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
                    (total_male_complete_aso_oke_white =
                      lastPrice.male_complete_aso_oke_white *
                      quan_male_complete_aso_oke_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Complete Female Aso-Oke 3pcs White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_complete_aso_oke_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (female_complete_aso_oke_white =
                        3 * quan_female_complete_aso_oke_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_female_complete_aso_oke_white"
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
                    (total_female_complete_aso_oke_white =
                      lastPrice.female_complete_aso_oke_white *
                      quan_female_complete_aso_oke_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Inner-Wear Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_inner_wear_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_inner_wear_colored"
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
                    (total_female_inner_wear_colored =
                      lastPrice.female_inner_wear_colored *
                      female_inner_wear_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Inner-Wear White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_inner_wear_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_inner_wear_white"
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
                    (total_female_inner_wear_white =
                      lastPrice.female_inner_wear_white *
                      female_inner_wear_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Head-Tie/Gele Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.head_tie_gele_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="head_tie_gele_colored"
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
                    (total_head_tie_gele_colored =
                      lastPrice.head_tie_gele_colored * head_tie_gele_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Head-Tie/Gele White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.head_tie_gele_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="head_tie_gele_white"
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
                    (total_head_tie_gele_white =
                      lastPrice.head_tie_gele_white * head_tie_gele_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Gown Children Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.gown_children_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="gown_children_colored"
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
                    (total_gown_children_colored =
                      lastPrice.gown_children_colored * gown_children_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Gown Children White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.gown_children_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="gown_children_white"
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
                    (total_gown_children_white =
                      lastPrice.gown_children_white * gown_children_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Gown English Adult Folding Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.gown_english_adult_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="gown_english_adult_folding_colored"
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
                    (total_gown_english_adult_folding_colored =
                      lastPrice.gown_english_adult_folding_colored *
                      gown_english_adult_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Gown English Adult Folding White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.gown_english_adult_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="gown_english_adult_folding_white"
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
                    (total_gown_english_adult_folding_white =
                      lastPrice.gown_english_adult_folding_white *
                      gown_english_adult_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Gown English Adult Hanging Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.gown_english_adult_hanging_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="gown_english_adult_hanging_colored"
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
                    (total_gown_english_adult_hanging_colored =
                      lastPrice.gown_english_adult_hanging_colored *
                      gown_english_adult_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Gown English Adult Hanging White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.gown_english_adult_hanging_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="gown_english_adult_hanging_white"
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
                    (total_gown_english_adult_hanging_white =
                      lastPrice.gown_english_adult_hanging_white *
                      gown_english_adult_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Gown Native Folding Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.gown_native_folding_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="gown_native_folding_colored"
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
                    (total_gown_native_folding_colored =
                      lastPrice.gown_native_folding_colored *
                      gown_native_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Gown Native Folding White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.gown_native_folding_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="gown_native_folding_white"
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
                    (total_gown_native_folding_white =
                      lastPrice.gown_native_folding_white *
                      gown_native_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Adult White Garment With Cap Folding
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.adult_white_garment_folding_with_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="adult_white_garment_folding_with_cap"
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
                    (total_adult_white_garment_folding_with_cap =
                      lastPrice.adult_white_garment_folding_with_cap *
                      adult_white_garment_folding_with_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Adult White Garment Without Cap Folding
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.adult_white_garment_folding_without_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="adult_white_garment_folding_without_cap"
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
                    (total_adult_white_garment_folding_without_cap =
                      lastPrice.adult_white_garment_folding_without_cap *
                      adult_white_garment_folding_without_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Adult White Garment With Cap Hanging
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.adult_white_garment_hanging_with_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="adult_white_garment_hanging_with_cap"
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
                    (total_adult_white_garment_hanging_with_cap =
                      lastPrice.adult_white_garment_hanging_with_cap *
                      adult_white_garment_hanging_with_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Adult White Garment Without Cap Hanging
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.adult_white_garment_hanging_without_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="adult_white_garment_hanging_without_cap"
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
                    (total_adult_white_garment_hanging_without_cap =
                      lastPrice.adult_white_garment_hanging_without_cap *
                      adult_white_garment_hanging_without_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Children White Garment With Cap Folding
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.children_white_garment_folding_with_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="children_white_garment_folding_with_cap"
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
                    (total_children_white_garment_folding_with_cap =
                      lastPrice.children_white_garment_folding_with_cap *
                      children_white_garment_folding_with_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Children White Garment Without Cap Folding
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.children_white_garment_folding_without_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="children_white_garment_folding_without_cap"
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
                    (total_children_white_garment_folding_without_cap =
                      lastPrice.children_white_garment_folding_without_cap *
                      children_white_garment_folding_without_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Children White Garment With Cap Hanging
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.children_white_garment_hanging_with_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="children_white_garment_hanging_with_cap"
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
                    (total_children_white_garment_hanging_with_cap =
                      lastPrice.children_white_garment_hanging_with_cap *
                      children_white_garment_hanging_with_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Children White Garment Without Cap Hanging
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.children_white_garment_hanging_without_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="children_white_garment_hanging_without_cap"
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
                    (total_children_white_garment_hanging_without_cap =
                      lastPrice.children_white_garment_hanging_without_cap *
                      children_white_garment_hanging_without_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Skirt and Blouse English 2pcs Hanging Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.skirt_and_blouse_english_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (skirt_and_blouse_english_hanging_colored =
                        2 * quan_skirt_and_blouse_english_hanging_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_skirt_and_blouse_english_hanging_colored"
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
                    (total_skirt_and_blouse_english_hanging_colored =
                      lastPrice.skirt_and_blouse_english_hanging_colored *
                      quan_skirt_and_blouse_english_hanging_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Skirt and Blouse English 2pcs Hanging White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.skirt_and_blouse_english_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (skirt_and_blouse_english_hanging_white =
                        2 * quan_skirt_and_blouse_english_hanging_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_skirt_and_blouse_english_hanging_white"
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
                    (total_skirt_and_blouse_english_hanging_white =
                      lastPrice.skirt_and_blouse_english_hanging_white *
                      quan_skirt_and_blouse_english_hanging_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Skirt and Blouse Native 2pcs Folding Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.skirt_and_blouse_native_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (skirt_and_blouse_native_folding_colored =
                        2 * quan_skirt_and_blouse_native_folding_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_skirt_and_blouse_native_folding_colored"
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
                    (total_skirt_and_blouse_native_folding_colored =
                      lastPrice.skirt_and_blouse_native_folding_colored *
                      quan_skirt_and_blouse_native_folding_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Skirt and Blouse Native 2pcs Folding White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.skirt_and_blouse_native_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (skirt_and_blouse_native_folding_white =
                        2 * quan_skirt_and_blouse_native_folding_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_skirt_and_blouse_native_folding_white"
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
                    (total_skirt_and_blouse_native_folding_white =
                      lastPrice.skirt_and_blouse_native_folding_white *
                      quan_skirt_and_blouse_native_folding_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Native Buba and Trouser 2pcs Colored
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{ lastPrice.female_native_buba_and_trouser_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (female_native_buba_and_trouser_colored =
                        2 * quan_female_native_buba_and_trouser_colored)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_female_native_buba_and_trouser_colored"
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
                    (total_female_native_buba_and_trouser_colored =
                      lastPrice.female_native_buba_and_trouser_colored *
                      quan_female_native_buba_and_trouser_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Native Buba and Trouser 2pcs White
                </p>
              </div>
              <div class="column">
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_native_buba_and_trouser_white }}
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <q-chip square color="primary" text-color="white">
                    Quantity:
                    {{
                      (female_native_buba_and_trouser_white =
                        2 * quan_female_native_buba_and_trouser_white)
                    }}
                  </q-chip>
                </div>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="quan_female_native_buba_and_trouser_white"
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
                    (total_female_native_buba_and_trouser_white =
                      lastPrice.female_native_buba_and_trouser_white *
                      quan_female_native_buba_and_trouser_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Cap Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_cap_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_cap_colored"
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
                    (total_male_cap_colored =
                      lastPrice.male_cap_colored * male_cap_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '3'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Male Cap White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.male_cap_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="male_cap_white"
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
                    (total_male_cap_white =
                      lastPrice.male_cap_white * male_cap_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '3'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Cap Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_cap_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_cap_colored"
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
                    (total_female_cap_colored =
                      lastPrice.female_cap_colored * female_cap_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '2'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Female Cap White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.female_cap_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="female_cap_white"
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
                    (total_female_cap_white =
                      lastPrice.female_cap_white * female_cap_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '2'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Turban Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.turban_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="turban_colored"
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
                    (total_turban_colored =
                      lastPrice.turban_colored * turban_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Turban White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.turban_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="turban_white"
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
                    (total_turban_white = lastPrice.turban_white * turban_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Sweater Small Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.sweater_small_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="sweater_small_colored"
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
                    (total_sweater_small_colored =
                      lastPrice.sweater_small_colored * sweater_small_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Sweater Small White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.sweater_small_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="sweater_small_white"
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
                    (total_sweater_small_white =
                      lastPrice.sweater_small_white * sweater_small_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Sweater Normal Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.sweater_normal_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="sweater_normal_colored"
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
                    (total_sweater_normal_colored =
                      lastPrice.sweater_normal_colored * sweater_normal_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Sweater Normal White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.sweater_normal_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="sweater_normal_white"
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
                    (total_sweater_normal_white =
                      lastPrice.sweater_normal_white * sweater_normal_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Sweater Big Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.sweater_big_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="sweater_big_colored"
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
                    (total_sweater_big_colored =
                      lastPrice.sweater_big_colored * sweater_big_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Sweater Big White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.sweater_big_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="sweater_big_white"
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
                    (total_sweater_big_white =
                      lastPrice.sweater_big_white * sweater_big_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Towel Small Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.towel_small_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="towel_small_colored"
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
                    (total_towel_small_colored =
                      lastPrice.towel_small_colored * towel_small_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Towel Small White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.towel_small_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="towel_small_white"
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
                    (total_towel_small_white =
                      lastPrice.towel_small_white * towel_small_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Towel Normal Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.towel_normal_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="towel_normal_colored"
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
                    (total_towel_normal_colored =
                      lastPrice.towel_normal_colored * towel_normal_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Towel Normal White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.towel_normal_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="towel_normal_white"
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
                    (total_towel_normal_white =
                      lastPrice.towel_normal_white * towel_normal_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Towel Big Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.towel_big_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="towel_big_colored"
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
                    (total_towel_big_colored =
                      lastPrice.towel_big_colored * towel_big_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Towel Big White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.towel_big_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="towel_big_white"
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
                    (total_towel_big_white =
                      lastPrice.towel_big_white * towel_big_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Bed-Spread Normal Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.bed_spread_normal_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="bed_spread_normal_colored"
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
                    (total_bed_spread_normal_colored =
                      lastPrice.bed_spread_normal_colored *
                      bed_spread_normal_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Bed-Spread Normal White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.bed_spread_normal_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="bed_spread_normal_white"
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
                    (total_bed_spread_normal_white =
                      lastPrice.bed_spread_normal_white *
                      bed_spread_normal_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Bed-Spread Big Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.bed_spread_big_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="bed_spread_big_colored"
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
                    (total_bed_spread_big_colored =
                      lastPrice.bed_spread_big_colored * bed_spread_big_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Bed-Spread Big White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.bed_spread_big_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="bed_spread_big_white"
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
                    (total_bed_spread_big_white =
                      lastPrice.bed_spread_big_white * bed_spread_big_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Bed-Spread Double Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.bed_spread_double_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="bed_spread_double_colored"
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
                    (total_bed_spread_double_colored =
                      lastPrice.bed_spread_double_colored *
                      bed_spread_double_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Bed-Spread Double White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.bed_spread_double_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="bed_spread_double_white"
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
                    (total_bed_spread_double_white =
                      lastPrice.bed_spread_double_white *
                      bed_spread_double_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Duvet Normal Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.duvet_normal_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="duvet_normal_colored"
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
                    (total_duvet_normal_colored =
                      lastPrice.duvet_normal_colored * duvet_normal_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Duvet Normal White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.duvet_normal_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="duvet_normal_white"
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
                    (total_duvet_normal_white =
                      lastPrice.duvet_normal_white * duvet_normal_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Duvet Big Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.duvet_big_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="duvet_big_colored"
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
                    (total_duvet_big_colored =
                      lastPrice.duvet_big_colored * duvet_big_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Duvet Big White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.duvet_big_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="duvet_big_white"
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
                    (total_duvet_big_white =
                      lastPrice.duvet_big_white * duvet_big_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Curtain Normal Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.curtain_normal_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="curtain_normal_colored"
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
                    (total_curtain_normal_colored =
                      lastPrice.curtain_normal_colored * curtain_normal_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Curtain Big Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.curtain_big_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="curtain_big_colored"
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
                    (total_curtain_big_colored =
                      lastPrice.curtain_big_colored * curtain_big_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Curtain Very Big Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.curtain_very_big_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="curtain_very_big_colored"
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
                    (total_curtain_very_big_colored =
                      lastPrice.curtain_very_big_colored *
                      curtain_very_big_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Pyjamas Small Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.pyjamas_small_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="pyjamas_small_colored"
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
                    (total_pyjamas_small_colored =
                      lastPrice.pyjamas_small_colored * pyjamas_small_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Pyjamas Small White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.pyjamas_small_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="pyjamas_small_white"
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
                    (total_pyjamas_small_white =
                      lastPrice.pyjamas_small_white * pyjamas_small_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Pyjamas Big Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.pyjamas_big_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="pyjamas_big_colored"
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
                    (total_pyjamas_big_colored =
                      lastPrice.pyjamas_big_colored * pyjamas_big_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Pyjamas Big White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.pyjamas_big_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="pyjamas_big_white"
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
                    (total_pyjamas_big_white =
                      lastPrice.pyjamas_big_white * pyjamas_big_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Blanket Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.blanket_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="blanket_colored"
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
                    (total_blanket_colored =
                      lastPrice.blanket_colored * blanket_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Pillow Cases Colored
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.pillow_cases_colored }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="pillow_cases_colored"
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
                    (total_pillow_cases_colored =
                      lastPrice.pillow_cases_colored * pillow_cases_colored)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Pillow Cases White
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.pillow_cases_white }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="pillow_cases_white"
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
                    (total_pillow_cases_white =
                      lastPrice.pillow_cases_white * pillow_cases_white)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <!-- </q-form> -->
          </div>
          <!-- </q-scroll-area> -->
          <div class="col q-mb-xl">
            <q-separator />
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <p class="text-subtitle1 text-center">Comment:</p>
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
            <q-separator />
            <div class="row q-pt-sm q-pb-sm">
              <div class="col-12 col-md-6 q-pl-md">
                <p class="text-subtitle1 text-center">Collection Date:</p>
                <q-input
                  required
                  class=""
                  v-model="collection_date"
                  :min="today"
                  outlined
                  type="date"
                />
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <p class="text-subtitle1 text-center">Discount:</p>
                <q-input class="" v-model="discount" outlined type="number" />
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <p class="text-subtitle1 text-center">Deposit:</p>
                <q-input
                  required
                  class=""
                  v-model="deposit"
                  outlined
                  type="number"
                  hint=""
                />
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-sm">
              <div class="col-12 col-md-12 q-pl-md">
                <p class="text-subtitle1 text-center">Deposit Type:</p>
                <q-select
                  outlined
                  v-model="deposit_type"
                  :options="optionsDepositType"
                  hint="POS, Cash etc"
                />
              </div>
            </div>
            <q-separator />
            <div class="row q-pt-sm">
              <div class="text-center full-width q-pl-md">
                <p class="text-h6">
                  Final Total: ₦
                  {{
                    (total_final_amount =
                      Number(total_male_native_2pcs_folding_colored) +
                      Number(total_male_native_2pcs_hanging_colored) +
                      Number(total_male_native_2pcs_folding_white) +
                      Number(total_male_native_2pcs_hanging_white) +
                      Number(total_male_native_3pcs_notAgbada_folding_colored) +
                      Number(total_male_native_3pcs_notAgbada_hanging_colored) +
                      Number(total_male_native_3pcs_notAgbada_folding_white) +
                      Number(total_male_native_3pcs_notAgbada_hanging_white) +
                      Number(total_native_top_only_folding_colored) +
                      Number(total_native_top_only_hanging_colored) +
                      Number(total_native_top_only_folding_white) +
                      Number(total_native_top_only_hanging_white) +
                      Number(total_native_trouser_only_folding_colored) +
                      Number(total_native_trouser_only_hanging_colored) +
                      Number(total_native_trouser_only_folding_white) +
                      Number(total_native_trouser_only_hanging_white) +
                      Number(total_male_agbada_only_folding_colored) +
                      Number(total_male_agbada_only_hanging_colored) +
                      Number(total_male_agbada_only_folding_white) +
                      Number(total_male_agbada_only_hanging_white) +
                      Number(total_complete_male_agbada_3pcs_Folding_colored) +
                      Number(total_complete_male_agbada_3pcs_Hanging_colored) +
                      Number(total_complete_male_agbada_3pcs_Folding_white) +
                      Number(total_complete_male_agbada_3pcs_Hanging_white) +
                      Number(total_normal_shirt_folding_colored) +
                      Number(total_normal_shirt_hanging_colored) +
                      Number(total_normal_shirt_folding_white) +
                      Number(total_normal_shirt_hanging_white) +
                      Number(total_blouse_folding_colored) +
                      Number(total_blouse_hanging_colored) +
                      Number(total_blouse_folding_white) +
                      Number(total_blouse_hanging_white) +
                      Number(total_blouse_x_large_folding_colored) +
                      Number(total_blouse_x_large_hanging_colored) +
                      Number(total_blouse_x_large_folding_white) +
                      Number(total_blouse_x_large_hanging_white) +
                      Number(total_female_shirt_folding_colored) +
                      Number(total_female_shirt_hanging_colored) +
                      Number(total_female_shirt_folding_white) +
                      Number(total_female_shirt_hanging_white) +
                      Number(total_tshirt_polo_small_folding_colored) +
                      Number(total_tshirt_polo_small_hanging_colored) +
                      Number(total_tshirt_polo_small_folding_white) +
                      Number(total_tshirt_polo_small_hanging_white) +
                      Number(total_tshirt_polo_medium_folding_colored) +
                      Number(total_tshirt_polo_medium_hanging_colored) +
                      Number(total_tshirt_polo_medium_folding_white) +
                      Number(total_tshirt_polo_medium_hanging_white) +
                      Number(total_tshirt_polo_big_folding_colored) +
                      Number(total_tshirt_polo_big_hanging_colored) +
                      Number(total_tshirt_polo_big_folding_white) +
                      Number(total_tshirt_polo_big_hanging_white) +
                      Number(total_shirt_x_large_folding_colored) +
                      Number(total_shirt_x_large_hanging_colored) +
                      Number(total_shirt_x_large_folding_white) +
                      Number(total_shirt_x_large_hanging_white) +
                      Number(total_shirt_big_folding_colored) +
                      Number(total_shirt_big_hanging_colored) +
                      Number(total_shirt_big_folding_white) +
                      Number(total_shirt_big_hanging_white) +
                      Number(total_shirt_children_folding_colored) +
                      Number(total_shirt_children_hanging_colored) +
                      Number(total_shirt_children_folding_white) +
                      Number(total_shirt_children_hanging_white) +
                      Number(total_plain_trouser_folding_colored) +
                      Number(total_plain_trouser_hanging_colored) +
                      Number(total_plain_trouser_folding_white) +
                      Number(total_plain_trouser_hanging_white) +
                      Number(total_jeans_chinos_trouser_folding_colored) +
                      Number(total_jeans_chinos_trouser_hanging_colored) +
                      Number(total_jeans_chinos_trouser_folding_white) +
                      Number(total_jeans_chinos_trouser_hanging_white) +
                      Number(total_waist_coat_hanging_colored) +
                      Number(total_waist_coat_hanging_white) +
                      Number(total_tie_colored) +
                      Number(total_tie_white) +
                      Number(total_shorts_folding_colored) +
                      Number(total_shorts_hanging_colored) +
                      Number(total_shorts_folding_white) +
                      Number(total_shorts_hanging_white) +
                      Number(total_singlet_colored) +
                      Number(total_singlet_white) +
                      Number(total_boxer_colored) +
                      Number(total_boxer_white) +
                      Number(total_male_2pcs_suit_hanging_colored) +
                      Number(total_male_2pcs_suit_hanging_white) +
                      Number(total_male_3pcs_suit_hanging_colored) +
                      Number(total_male_3pcs_suit_hanging_white) +
                      Number(total_female_2pcs_suit_hanging_colored) +
                      Number(total_female_2pcs_suit_hanging_white) +
                      Number(total_female_3pcs_suit_hanging_colored) +
                      Number(total_female_3pcs_suit_hanging_white) +
                      Number(total_male_jacket_only_colored) +
                      Number(total_male_jacket_only_white) +
                      Number(total_female_jacket_only_colored) +
                      Number(total_female_jacket_only_white) +
                      Number(
                        total_wedding_gown_small_and_little_accessories_white
                      ) +
                      Number(
                        total_wedding_gown_big_and_plenty_accessories_white
                      ) +
                      Number(total_Kids_blouse_folding_colored) +
                      Number(total_Kids_blouse_hanging_colored) +
                      Number(total_Kids_blouse_folding_white) +
                      Number(total_Kids_blouse_hanging_white) +
                      Number(total_jalamia_colored) +
                      Number(total_jalamia_white) +
                      Number(total_camisole_colored) +
                      Number(total_camisole_white) +
                      Number(total_wrapper_buba_scarf_colored) +
                      Number(total_wrapper_buba_scarf_white) +
                      Number(total_wrapper_buba_no_scarf_colored) +
                      Number(total_wrapper_buba_no_scarf_white) +
                      Number(total_wrapper_only_colored) +
                      Number(total_wrapper_only_white) +
                      Number(total_two_wrapper_scarf_or_no_scarf_colored) +
                      Number(total_two_wrapper_scarf_or_no_scarf_white) +
                      Number(total_aso_oke_agbada_and_cap_colored) +
                      Number(total_male_aso_oke_and_cap_3pcs_colored) +
                      Number(total_aso_oke_wrapper_buba_gele_colored) +
                      Number(total_aso_oke_wrapper_gele_colored) +
                      Number(total_aso_oke_wrapper_gele_ipele_colored) +
                      Number(total_aso_oke_wrapper_gele_ipele_white) +
                      Number(total_aso_oke_headtie_ipele_colored) +
                      Number(total_male_complete_aso_oke_white) +
                      Number(total_female_complete_aso_oke_white) +
                      Number(total_female_inner_wear_colored) +
                      Number(total_female_inner_wear_white) +
                      Number(total_head_tie_gele_colored) +
                      Number(total_head_tie_gele_white) +
                      Number(total_gown_children_colored) +
                      Number(total_gown_children_white) +
                      Number(total_gown_english_adult_folding_colored) +
                      Number(total_gown_english_adult_folding_white) +
                      Number(total_gown_english_adult_hanging_colored) +
                      Number(total_gown_english_adult_hanging_white) +
                      Number(total_gown_native_folding_colored) +
                      Number(total_gown_native_folding_white) +
                      Number(total_adult_white_garment_folding_with_cap) +
                      Number(total_adult_white_garment_folding_without_cap) +
                      Number(total_adult_white_garment_hanging_with_cap) +
                      Number(total_adult_white_garment_hanging_without_cap) +
                      Number(total_children_white_garment_folding_with_cap) +
                      Number(total_children_white_garment_folding_without_cap) +
                      Number(total_children_white_garment_hanging_with_cap) +
                      Number(total_children_white_garment_hanging_without_cap) +
                      Number(total_skirt_and_blouse_english_hanging_colored) +
                      Number(total_skirt_and_blouse_english_hanging_white) +
                      Number(total_skirt_and_blouse_native_folding_colored) +
                      Number(total_skirt_and_blouse_native_folding_white) +
                      Number(total_female_native_buba_and_trouser_colored) +
                      Number(total_female_native_buba_and_trouser_white) +
                      Number(total_male_cap_colored) +
                      Number(total_male_cap_white) +
                      Number(total_female_cap_colored) +
                      Number(total_female_cap_white) +
                      Number(total_turban_colored) +
                      Number(total_turban_white) +
                      Number(total_sweater_small_colored) +
                      Number(total_sweater_small_white) +
                      Number(total_sweater_normal_colored) +
                      Number(total_sweater_normal_white) +
                      Number(total_sweater_big_colored) +
                      Number(total_sweater_big_white) +
                      Number(total_towel_small_colored) +
                      Number(total_towel_small_white) +
                      Number(total_towel_normal_colored) +
                      Number(total_towel_normal_white) +
                      Number(total_towel_big_colored) +
                      Number(total_towel_big_white) +
                      Number(total_bed_spread_normal_colored) +
                      Number(total_bed_spread_normal_white) +
                      Number(total_bed_spread_big_colored) +
                      Number(total_bed_spread_big_white) +
                      Number(total_bed_spread_double_colored) +
                      Number(total_bed_spread_double_white) +
                      Number(total_duvet_normal_colored) +
                      Number(total_duvet_normal_white) +
                      Number(total_duvet_big_colored) +
                      Number(total_duvet_big_white) +
                      Number(total_curtain_normal_colored) +
                      Number(total_curtain_big_colored) +
                      Number(total_curtain_very_big_colored) +
                      Number(total_pyjamas_small_colored) +
                      Number(total_pyjamas_small_white) +
                      Number(total_pyjamas_big_colored) +
                      Number(total_pyjamas_big_white) +
                      Number(total_blanket_colored) +
                      Number(total_pillow_cases_colored) +
                      Number(total_pillow_cases_white))
                  }}
                </p>
              </div>
            </div>

            <div class="row q-pt-md q-pb-xl">
              <div class="q-mb-xl text-center full-width q-pl-md">
                <q-btn
                  :disabled="!collection_date || !comment_section"
                  @click="continue_"
                  label="Continue"
                  type="submit"
                  color="primary"
                />
                <!-- style="width: 260px" -->
              </div>
            </div>
          </div>
          <!-- </q-form> -->
        </div>
        <!-- </q-scroll-area> -->
      </div>
      <div class="row gt-sm">
        <div class="col-9">
          <q-btn-toggle
            v-model="category"
            push
            spread
            no-caps
            rounded
            unelevated
            color="white"
            text-color="primary"
            toggle-color="primary"
            class="q-mt-sm q-mb-sm"
            :options="[
              { label: 'General', value: '4' },
              { label: 'Male', value: '3' },
              { label: 'Female', value: '2' },
              { label: 'Kids', value: '1' },
            ]"
          />
          <q-separator />
          <q-scroll-area :style="{ height: '100vh' }">
            <div>
              <!-- <q-form @submit="onSubmit" @reset="onReset"> -->

              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Native 2 Pcs Folding-Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.male_native_2pcs_folding_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_native_2pcs_folding_colored =
                          2 * quan_male_native_2pcs_folding_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_native_2pcs_folding_colored"
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
                      (total_male_native_2pcs_folding_colored =
                        lastPrice.male_native_2pcs_folding_colored *
                        quan_male_native_2pcs_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Native 2 Pcs Hanging-Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.male_native_2pcs_hanging_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_native_2pcs_hanging_colored =
                          2 * quan_male_native_2pcs_hanging_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_native_2pcs_hanging_colored"
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
                      (total_male_native_2pcs_hanging_colored =
                        lastPrice.male_native_2pcs_hanging_colored *
                        quan_male_native_2pcs_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Native 2 Pcs Folding-White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.male_native_2pcs_folding_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_native_2pcs_folding_white =
                          2 * quan_male_native_2pcs_folding_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_native_2pcs_folding_white"
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
                      (total_male_native_2pcs_folding_white =
                        lastPrice.male_native_2pcs_folding_white *
                        quan_male_native_2pcs_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Native 2 Pcs Hanging-White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.male_native_2pcs_hanging_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_native_2pcs_hanging_white =
                          2 * quan_male_native_2pcs_hanging_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_native_2pcs_hanging_white"
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
                      (total_male_native_2pcs_hanging_white =
                        lastPrice.male_native_2pcs_hanging_white *
                        quan_male_native_2pcs_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Native 3 Pcs Not-Agbada Folding-Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.male_native_3pcs_notAgbada_folding_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_native_3pcs_notAgbada_folding_colored =
                          3 * quan_male_native_3pcs_notAgbada_folding_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_native_3pcs_notAgbada_folding_colored"
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
                      (total_male_native_3pcs_notAgbada_folding_colored =
                        lastPrice.male_native_3pcs_notAgbada_folding_colored *
                        quan_male_native_3pcs_notAgbada_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Native 3 Pcs Not-Agbada Hanging-Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.male_native_3pcs_notAgbada_hanging_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_native_3pcs_notAgbada_hanging_colored =
                          3 * quan_male_native_3pcs_notAgbada_hanging_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_native_3pcs_notAgbada_hanging_colored"
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
                      (total_male_native_3pcs_notAgbada_hanging_colored =
                        lastPrice.male_native_3pcs_notAgbada_hanging_colored *
                        quan_male_native_3pcs_notAgbada_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Native 3 Pcs Not-Agbada Folding-White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.male_native_3pcs_notAgbada_folding_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_native_3pcs_notAgbada_folding_white =
                          3 * quan_male_native_3pcs_notAgbada_folding_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_native_3pcs_notAgbada_folding_white"
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
                      (total_male_native_3pcs_notAgbada_folding_white =
                        lastPrice.male_native_3pcs_notAgbada_folding_white *
                        quan_male_native_3pcs_notAgbada_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Native 3 Pcs Not-Agbada Hanging-White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.male_native_3pcs_notAgbada_hanging_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_native_3pcs_notAgbada_hanging_white =
                          3 * quan_male_native_3pcs_notAgbada_hanging_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_native_3pcs_notAgbada_hanging_white"
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
                      (total_male_native_3pcs_notAgbada_hanging_white =
                        lastPrice.male_native_3pcs_notAgbada_hanging_white *
                        quan_male_native_3pcs_notAgbada_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Native Top Only Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.native_top_only_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="native_top_only_folding_colored"
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
                      (total_native_top_only_folding_colored =
                        lastPrice.native_top_only_folding_colored *
                        native_top_only_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Native Top Only Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.native_top_only_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="native_top_only_hanging_colored"
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
                      (total_native_top_only_hanging_colored =
                        lastPrice.native_top_only_hanging_colored *
                        native_top_only_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Native Top Only Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.native_top_only_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="native_top_only_folding_white"
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
                      (total_native_top_only_folding_white =
                        lastPrice.native_top_only_folding_white *
                        native_top_only_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Native Top Only Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.native_top_only_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="native_top_only_hanging_white"
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
                      (total_native_top_only_hanging_white =
                        lastPrice.native_top_only_hanging_white *
                        native_top_only_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Native Trouser Only Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.native_trouser_only_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="native_trouser_only_folding_colored"
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
                      (total_native_trouser_only_folding_colored =
                        lastPrice.native_trouser_only_folding_colored *
                        native_trouser_only_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Native Trouser Only Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.native_trouser_only_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="native_trouser_only_hanging_colored"
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
                      (total_native_trouser_only_hanging_colored =
                        lastPrice.native_trouser_only_hanging_colored *
                        native_trouser_only_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Native Trouser Only Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.native_trouser_only_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="native_trouser_only_folding_white"
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
                      (total_native_trouser_only_folding_white =
                        lastPrice.native_trouser_only_folding_white *
                        native_trouser_only_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Native Trouser Only Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.native_trouser_only_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="native_trouser_only_hanging_white"
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
                      (total_native_trouser_only_hanging_white =
                        lastPrice.native_trouser_only_hanging_white *
                        native_trouser_only_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Agbada Only Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_agbada_only_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="male_agbada_only_folding_colored"
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
                      (total_male_agbada_only_folding_colored =
                        lastPrice.male_agbada_only_folding_colored *
                        male_agbada_only_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Agbada Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_agbada_only_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="male_agbada_only_hanging_colored"
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
                      (total_male_agbada_only_hanging_colored =
                        lastPrice.male_agbada_only_hanging_colored *
                        male_agbada_only_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Agbada Only Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_agbada_only_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="male_agbada_only_folding_white"
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
                      (total_male_agbada_only_folding_white =
                        lastPrice.male_agbada_only_folding_white *
                        male_agbada_only_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Agbada Only Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_agbada_only_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="male_agbada_only_hanging_white"
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
                      (total_male_agbada_only_hanging_white =
                        lastPrice.male_agbada_only_hanging_white *
                        male_agbada_only_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Complete Male Agbada 3 Pcs Folding-Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.complete_male_agbada_3pcs_Folding_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (complete_male_agbada_3pcs_Folding_colored =
                          3 * quan_complete_male_agbada_3pcs_Folding_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_complete_male_agbada_3pcs_Folding_colored"
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
                      (total_complete_male_agbada_3pcs_Folding_colored =
                        lastPrice.complete_male_agbada_3pcs_Folding_colored *
                        quan_complete_male_agbada_3pcs_Folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Complete Male Agbada 3 Pcs Hanging-Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.complete_male_agbada_3pcs_Hanging_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (complete_male_agbada_3pcs_Hanging_colored =
                          3 * quan_complete_male_agbada_3pcs_Hanging_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_complete_male_agbada_3pcs_Hanging_colored"
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
                      (total_complete_male_agbada_3pcs_Hanging_colored =
                        lastPrice.complete_male_agbada_3pcs_Hanging_colored *
                        quan_complete_male_agbada_3pcs_Hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Complete Male Agbada 3 Pcs Folding-White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.complete_male_agbada_3pcs_Folding_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (complete_male_agbada_3pcs_Folding_white =
                          3 * quan_complete_male_agbada_3pcs_Folding_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_complete_male_agbada_3pcs_Folding_white"
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
                      (total_complete_male_agbada_3pcs_Folding_white =
                        lastPrice.complete_male_agbada_3pcs_Folding_white *
                        quan_complete_male_agbada_3pcs_Folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Complete Male Agbada 3 Pcs Hanging-White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.complete_male_agbada_3pcs_Hanging_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (complete_male_agbada_3pcs_Hanging_white =
                          3 * quan_complete_male_agbada_3pcs_Hanging_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_complete_male_agbada_3pcs_Hanging_white"
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
                      (total_complete_male_agbada_3pcs_Hanging_white =
                        lastPrice.complete_male_agbada_3pcs_Hanging_white *
                        quan_complete_male_agbada_3pcs_Hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.normal_shirt_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="normal_shirt_folding_colored"
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
                      (total_normal_shirt_folding_colored =
                        lastPrice.normal_shirt_folding_colored *
                        normal_shirt_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.normal_shirt_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="normal_shirt_hanging_colored"
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
                      (total_normal_shirt_hanging_colored =
                        lastPrice.normal_shirt_hanging_colored *
                        normal_shirt_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.normal_shirt_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="normal_shirt_folding_white"
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
                      (total_normal_shirt_folding_white =
                        lastPrice.normal_shirt_folding_white *
                        normal_shirt_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.normal_shirt_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="normal_shirt_hanging_white"
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
                      (total_normal_shirt_hanging_white =
                        lastPrice.normal_shirt_hanging_white *
                        normal_shirt_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Big Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_big_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_big_folding_colored"
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
                      (total_shirt_big_folding_colored =
                        lastPrice.shirt_big_folding_colored *
                        shirt_big_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Big Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_big_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_big_hanging_colored"
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
                      (total_shirt_big_hanging_colored =
                        lastPrice.shirt_big_hanging_colored *
                        shirt_big_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Big Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_big_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_big_folding_white"
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
                      (total_shirt_big_folding_white =
                        lastPrice.shirt_big_folding_white *
                        shirt_big_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Big Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_big_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_big_hanging_white"
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
                      (total_shirt_big_hanging_white =
                        lastPrice.shirt_big_hanging_white *
                        shirt_big_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt XLarge Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_x_large_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_x_large_folding_colored"
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
                      (total_shirt_x_large_folding_colored =
                        lastPrice.shirt_x_large_folding_colored *
                        shirt_x_large_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt XLarge Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_x_large_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_x_large_hanging_colored"
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
                      (total_shirt_x_large_hanging_colored =
                        lastPrice.shirt_x_large_hanging_colored *
                        shirt_x_large_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt XLarge Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_x_large_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_x_large_folding_white"
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
                      (total_shirt_x_large_folding_white =
                        lastPrice.shirt_x_large_folding_white *
                        shirt_x_large_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt XLarge Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_x_large_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_x_large_hanging_white"
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
                      (total_shirt_x_large_hanging_white =
                        lastPrice.shirt_x_large_hanging_white *
                        shirt_x_large_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '1'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Children Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_children_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_children_folding_colored"
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
                      (total_shirt_children_folding_colored =
                        lastPrice.shirt_children_folding_colored *
                        shirt_children_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '1'" />
              <div v-show="category === '1'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Children Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_children_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_children_hanging_colored"
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
                      (total_shirt_children_hanging_colored =
                        lastPrice.shirt_children_hanging_colored *
                        shirt_children_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '1'" />
              <div v-show="category === '1'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Children Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_children_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_children_folding_white"
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
                      (total_shirt_children_folding_white =
                        lastPrice.shirt_children_folding_white *
                        shirt_children_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '1'" />
              <div v-show="category === '1'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shirt Children Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shirt_children_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shirt_children_hanging_white"
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
                      (total_shirt_children_hanging_white =
                        lastPrice.shirt_children_hanging_white *
                        shirt_children_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '1'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Blouse Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.blouse_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="blouse_folding_colored"
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
                      (total_blouse_folding_colored =
                        lastPrice.blouse_folding_colored *
                        blouse_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Blouse Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.blouse_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="blouse_hanging_colored"
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
                      (total_blouse_hanging_colored =
                        lastPrice.blouse_hanging_colored *
                        blouse_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Blouse Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.blouse_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="blouse_folding_white"
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
                      (total_blouse_folding_white =
                        lastPrice.blouse_folding_white * blouse_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Blouse Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.blouse_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="blouse_hanging_white"
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
                      (total_blouse_hanging_white =
                        lastPrice.blouse_hanging_white * blouse_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Blouse XLarge Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.blouse_x_large_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="blouse_x_large_folding_colored"
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
                      (total_blouse_x_large_folding_colored =
                        lastPrice.blouse_x_large_folding_colored *
                        blouse_x_large_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Blouse XLarge Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.blouse_x_large_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="blouse_x_large_hanging_colored"
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
                      (total_blouse_x_large_hanging_colored =
                        lastPrice.blouse_x_large_hanging_colored *
                        blouse_x_large_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Blouse XLarge Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.blouse_x_large_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="blouse_x_large_folding_white"
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
                      (total_blouse_x_large_folding_white =
                        lastPrice.blouse_x_large_folding_white *
                        blouse_x_large_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Blouse XLarge Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.blouse_x_large_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="blouse_x_large_hanging_white"
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
                      (total_blouse_x_large_hanging_white =
                        lastPrice.blouse_x_large_hanging_white *
                        blouse_x_large_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Shirt Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_shirt_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="female_shirt_folding_colored"
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
                      (total_female_shirt_folding_colored =
                        lastPrice.female_shirt_folding_colored *
                        female_shirt_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Shirt Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_shirt_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="female_shirt_hanging_colored"
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
                      (total_female_shirt_hanging_colored =
                        lastPrice.female_shirt_hanging_colored *
                        female_shirt_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Shirt Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_shirt_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="female_shirt_folding_white"
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
                      (total_female_shirt_folding_white =
                        lastPrice.female_shirt_folding_white *
                        female_shirt_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Shirt Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_shirt_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="female_shirt_hanging_white"
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
                      (total_female_shirt_hanging_white =
                        lastPrice.female_shirt_hanging_white *
                        female_shirt_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Small Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_small_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_small_folding_colored"
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
                      (total_tshirt_polo_small_folding_colored =
                        lastPrice.tshirt_polo_small_folding_colored *
                        tshirt_polo_small_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Small Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_small_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_small_hanging_colored"
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
                      (total_tshirt_polo_small_hanging_colored =
                        lastPrice.tshirt_polo_small_hanging_colored *
                        tshirt_polo_small_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Small Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_small_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_small_folding_white"
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
                      (total_tshirt_polo_small_folding_white =
                        lastPrice.tshirt_polo_small_folding_white *
                        tshirt_polo_small_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Small Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_small_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_small_hanging_white"
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
                      (total_tshirt_polo_small_hanging_white =
                        lastPrice.tshirt_polo_small_hanging_white *
                        tshirt_polo_small_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Medium Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_medium_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_medium_folding_colored"
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
                      (total_tshirt_polo_medium_folding_colored =
                        lastPrice.tshirt_polo_medium_folding_colored *
                        tshirt_polo_medium_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Medium Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_medium_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_medium_hanging_colored"
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
                      (total_tshirt_polo_medium_hanging_colored =
                        lastPrice.tshirt_polo_medium_hanging_colored *
                        tshirt_polo_medium_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Medium Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_medium_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_medium_folding_white"
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
                      (total_tshirt_polo_medium_folding_white =
                        lastPrice.tshirt_polo_medium_folding_white *
                        tshirt_polo_medium_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Medium Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_medium_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_medium_hanging_white"
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
                      (total_tshirt_polo_medium_hanging_white =
                        lastPrice.tshirt_polo_medium_hanging_white *
                        tshirt_polo_medium_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Big Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_big_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_big_folding_colored"
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
                      (total_tshirt_polo_big_folding_colored =
                        lastPrice.tshirt_polo_big_folding_colored *
                        tshirt_polo_big_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Big Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_big_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_big_hanging_colored"
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
                      (total_tshirt_polo_big_hanging_colored =
                        lastPrice.tshirt_polo_big_hanging_colored *
                        tshirt_polo_big_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Big Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_big_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_big_folding_white"
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
                      (total_tshirt_polo_big_folding_white =
                        lastPrice.tshirt_polo_big_folding_white *
                        tshirt_polo_big_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    TShirt/Polo Big Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tshirt_polo_big_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tshirt_polo_big_hanging_white"
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
                      (total_tshirt_polo_big_hanging_white =
                        lastPrice.tshirt_polo_big_hanging_white *
                        tshirt_polo_big_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Trouser Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.plain_trouser_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="plain_trouser_folding_colored"
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
                      (total_plain_trouser_folding_colored =
                        lastPrice.plain_trouser_folding_colored *
                        plain_trouser_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Trouser Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.plain_trouser_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="plain_trouser_hanging_colored"
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
                      (total_plain_trouser_hanging_colored =
                        lastPrice.plain_trouser_hanging_colored *
                        plain_trouser_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Trouser Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.plain_trouser_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="plain_trouser_folding_white"
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
                      (total_plain_trouser_folding_white =
                        lastPrice.plain_trouser_folding_white *
                        plain_trouser_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Trouser Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.plain_trouser_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="plain_trouser_hanging_white"
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
                      (total_plain_trouser_hanging_white =
                        lastPrice.plain_trouser_hanging_white *
                        plain_trouser_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Jeans/Chinos Trouser Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.jeans_chinos_trouser_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="jeans_chinos_trouser_folding_colored"
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
                      (total_jeans_chinos_trouser_folding_colored =
                        lastPrice.jeans_chinos_trouser_folding_colored *
                        jeans_chinos_trouser_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Jeans/Chinos Trouser Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.jeans_chinos_trouser_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="jeans_chinos_trouser_hanging_colored"
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
                      (total_jeans_chinos_trouser_hanging_colored =
                        lastPrice.jeans_chinos_trouser_hanging_colored *
                        jeans_chinos_trouser_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Jeans/Chinos Trouser Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.jeans_chinos_trouser_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="jeans_chinos_trouser_folding_white"
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
                      (total_jeans_chinos_trouser_folding_white =
                        lastPrice.jeans_chinos_trouser_folding_white *
                        jeans_chinos_trouser_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Jeans/Chinos Trouser Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.jeans_chinos_trouser_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="jeans_chinos_trouser_hanging_white"
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
                      (total_jeans_chinos_trouser_hanging_white =
                        lastPrice.jeans_chinos_trouser_hanging_white *
                        jeans_chinos_trouser_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Waist Coat Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.waist_coat_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="waist_coat_hanging_colored"
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
                      (total_waist_coat_hanging_colored =
                        lastPrice.waist_coat_hanging_colored *
                        waist_coat_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Waist Coat Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.waist_coat_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="waist_coat_hanging_white"
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
                      (total_waist_coat_hanging_white =
                        lastPrice.waist_coat_hanging_white *
                        waist_coat_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Tie Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.tie_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tie_colored"
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
                      (total_tie_colored = lastPrice.tie_colored * tie_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Tie White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">Price: {{ lastPrice.tie_white }}</p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="tie_white"
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
                    {{ (total_tie_white = lastPrice.tie_white * tie_white) }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shorts Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shorts_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shorts_folding_colored"
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
                      (total_shorts_folding_colored =
                        lastPrice.shorts_folding_colored *
                        shorts_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shorts Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shorts_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shorts_hanging_colored"
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
                      (total_shorts_hanging_colored =
                        lastPrice.shorts_hanging_colored *
                        shorts_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shorts Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shorts_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shorts_folding_white"
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
                      (total_shorts_folding_white =
                        lastPrice.shorts_folding_white * shorts_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Shorts Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.shorts_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="shorts_hanging_white"
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
                      (total_shorts_hanging_white =
                        lastPrice.shorts_hanging_white * shorts_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Singlet Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.singlet_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="singlet_colored"
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
                      (total_singlet_colored =
                        lastPrice.singlet_colored * singlet_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Singlet White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.singlet_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="singlet_white"
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
                      (total_singlet_white =
                        lastPrice.singlet_white * singlet_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Boxer Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.boxer_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="boxer_colored"
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
                      (total_boxer_colored =
                        lastPrice.boxer_colored * boxer_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Boxer White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.boxer_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="boxer_white"
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
                      (total_boxer_white = lastPrice.boxer_white * boxer_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male 2 Pcs Suit Hanging-Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.male_2pcs_suit_hanging_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_2pcs_suit_hanging_colored =
                          2 * quan_male_2pcs_suit_hanging_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_2pcs_suit_hanging_colored"
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
                      (total_male_2pcs_suit_hanging_colored =
                        lastPrice.male_2pcs_suit_hanging_colored *
                        quan_male_2pcs_suit_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male 2 Pcs Suit Hanging-White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.male_2pcs_suit_hanging_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_2pcs_suit_hanging_white =
                          2 * quan_male_2pcs_suit_hanging_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_2pcs_suit_hanging_white"
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
                      (total_male_2pcs_suit_hanging_white =
                        lastPrice.male_2pcs_suit_hanging_white *
                        quan_male_2pcs_suit_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male 3 Pcs Suit Hanging-Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.male_3pcs_suit_hanging_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_3pcs_suit_hanging_colored =
                          3 * quan_male_3pcs_suit_hanging_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_3pcs_suit_hanging_colored"
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
                      (total_male_3pcs_suit_hanging_colored =
                        lastPrice.male_3pcs_suit_hanging_colored *
                        quan_male_3pcs_suit_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male 3 Pcs Suit Hanging-White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.male_3pcs_suit_hanging_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_3pcs_suit_hanging_white =
                          3 * quan_male_3pcs_suit_hanging_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_3pcs_suit_hanging_white"
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
                      (toal_male_3pcs_suit_hanging_white =
                        lastPrice.male_3pcs_suit_hanging_white *
                        quan_male_3pcs_suit_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female 2 Pcs Suit Hanging-Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.female_2pcs_suit_hanging_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (female_2pcs_suit_hanging_colored =
                          2 * quan_female_2pcs_suit_hanging_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_female_2pcs_suit_hanging_colored"
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
                      (total_female_2pcs_suit_hanging_colored =
                        lastPrice.female_2pcs_suit_hanging_colored *
                        quan_female_2pcs_suit_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female 2 Pcs Suit Hanging-White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.female_2pcs_suit_hanging_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (female_2pcs_suit_hanging_white =
                          2 * quan_female_2pcs_suit_hanging_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_female_2pcs_suit_hanging_white"
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
                      (total_female_2pcs_suit_hanging_white =
                        lastPrice.female_2pcs_suit_hanging_white *
                        quan_female_2pcs_suit_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female 3 Pcs Suit Hanging-Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.female_3pcs_suit_hanging_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (female_3pcs_suit_hanging_colored =
                          3 * quan_female_3pcs_suit_hanging_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_female_3pcs_suit_hanging_colored"
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
                      (total_female_3pcs_suit_hanging_colored =
                        lastPrice.female_3pcs_suit_hanging_colored *
                        quan_female_3pcs_suit_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female 3 Pcs Suit Hanging-White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.female_3pcs_suit_hanging_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (female_3pcs_suit_hanging_white =
                          3 * quan_female_3pcs_suit_hanging_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_female_3pcs_suit_hanging_white"
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
                      (toal_female_3pcs_suit_hanging_white =
                        lastPrice.female_3pcs_suit_hanging_white *
                        quan_female_3pcs_suit_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Jacket Only Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_jacket_only_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="male_jacket_only_colored"
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
                      (total_male_jacket_only_colored =
                        lastPrice.male_jacket_only_colored *
                        male_jacket_only_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Jacket Only White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_jacket_only_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="male_jacket_only_white"
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
                      (total_male_jacket_only_white =
                        lastPrice.male_jacket_only_white *
                        male_jacket_only_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Jacket Only Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_jacket_only_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="female_jacket_only_colored"
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
                      (total_female_jacket_only_colored =
                        lastPrice.female_jacket_only_colored *
                        female_jacket_only_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Jacket Only White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_jacket_only_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="female_jacket_only_white"
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
                      (total_female_jacket_only_white =
                        lastPrice.female_jacket_only_white *
                        female_jacket_only_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Wedding Gown Small With Little Accessories White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{
                      lastPrice.wedding_gown_small_and_little_accessories_white
                    }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="wedding_gown_small_and_little_accessories_white"
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
                      (total_wedding_gown_small_and_little_accessories_white =
                        lastPrice.wedding_gown_small_and_little_accessories_white *
                        wedding_gown_small_and_little_accessories_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Wedding Gown Big With Plenty Accessories White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price:
                    {{
                      lastPrice.wedding_gown_big_and_plenty_accessories_white
                    }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="wedding_gown_big_and_plenty_accessories_white"
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
                      (total_wedding_gown_big_and_plenty_accessories_white =
                        lastPrice.wedding_gown_big_and_plenty_accessories_white *
                        wedding_gown_big_and_plenty_accessories_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '1'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Kids Blouse Folding-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.Kids_blouse_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="Kids_blouse_folding_colored"
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
                      (total_Kids_blouse_folding_colored =
                        lastPrice.Kids_blouse_folding_colored *
                        Kids_blouse_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '1'" />
              <div v-show="category === '1'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Kids Blouse Hanging-Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.Kids_blouse_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="Kids_blouse_hanging_colored"
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
                      (total_Kids_blouse_hanging_colored =
                        lastPrice.Kids_blouse_hanging_colored *
                        Kids_blouse_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '1'" />
              <div v-show="category === '1'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Kids Blouse Folding-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.Kids_blouse_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="Kids_blouse_folding_white"
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
                      (total_Kids_blouse_folding_white =
                        lastPrice.Kids_blouse_folding_white *
                        Kids_blouse_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '1'" />
              <div v-show="category === '1'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Kids Blouse Hanging-White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.Kids_blouse_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="Kids_blouse_hanging_white"
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
                      (total_Kids_blouse_hanging_white =
                        lastPrice.Kids_blouse_hanging_white *
                        Kids_blouse_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '1'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Jalamia Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.jalamia_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="jalamia_colored"
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
                      (total_jalamia_colored =
                        lastPrice.jalamia_colored * jalamia_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Jalamia White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.jalamia_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="jalamia_white"
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
                      (total_jalamia_white =
                        lastPrice.jalamia_white * jalamia_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Camisole Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.camisole_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="camisole_colored"
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
                      (total_camisole_colored =
                        lastPrice.camisole_colored * camisole_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Camisole White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.camisole_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="camisole_white"
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
                      (total_camisole_white =
                        lastPrice.camisole_white * camisole_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Wrapper, Buba And Scarf Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.wrapper_buba_scarf_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="wrapper_buba_scarf_colored"
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
                      (total_wrapper_buba_scarf_colored =
                        lastPrice.wrapper_buba_scarf_colored *
                        wrapper_buba_scarf_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Wrapper, Buba And Scarf White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.wrapper_buba_scarf_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="wrapper_buba_scarf_white"
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
                      (total_wrapper_buba_scarf_white =
                        lastPrice.wrapper_buba_scarf_white *
                        wrapper_buba_scarf_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Wrapper, Buba And No-Scarf Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.wrapper_buba_no_scarf_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="wrapper_buba_no_scarf_colored"
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
                      (total_wrapper_buba_no_scarf_colored =
                        lastPrice.wrapper_buba_no_scarf_colored *
                        wrapper_buba_no_scarf_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Wrapper, Buba And No-Scarf White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.wrapper_buba_no_scarf_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="wrapper_buba_no_scarf_white"
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
                      (total_wrapper_buba_no_scarf_white =
                        lastPrice.wrapper_buba_no_scarf_white *
                        wrapper_buba_no_scarf_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Wrapper Only Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.wrapper_only_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="wrapper_only_colored"
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
                      (total_wrapper_only_colored =
                        lastPrice.wrapper_only_colored * wrapper_only_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Wrapper Only White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.wrapper_only_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="wrapper_only_white"
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
                      (total_wrapper_only_white =
                        lastPrice.wrapper_only_white * wrapper_only_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Two Wrapper Scarf/No-Scarf Only Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.two_wrapper_scarf_or_no_scarf_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="two_wrapper_scarf_or_no_scarf_colored"
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
                      (total_two_wrapper_scarf_or_no_scarf_colored =
                        lastPrice.two_wrapper_scarf_or_no_scarf_colored *
                        two_wrapper_scarf_or_no_scarf_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Two Wrapper Scarf/No-Scarf White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.two_wrapper_scarf_or_no_scarf_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="two_wrapper_scarf_or_no_scarf_white"
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
                      (total_two_wrapper_scarf_or_no_scarf_white =
                        lastPrice.two_wrapper_scarf_or_no_scarf_white *
                        two_wrapper_scarf_or_no_scarf_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Aso-Oke Agbada and Cap 2pcs Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.aso_oke_agbada_and_cap_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (aso_oke_agbada_and_cap_colored =
                          2 * quan_aso_oke_agbada_and_cap_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_aso_oke_agbada_and_cap_colored"
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
                      (total_aso_oke_agbada_and_cap_colored =
                        lastPrice.aso_oke_agbada_and_cap_colored *
                        quan_aso_oke_agbada_and_cap_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.male_aso_oke_and_cap_3pcs_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_aso_oke_and_cap_3pcs_colored =
                          3 * quan_male_aso_oke_and_cap_3pcs_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_aso_oke_and_cap_3pcs_colored"
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
                      (total_male_aso_oke_and_cap_3pcs_colored =
                        lastPrice.male_aso_oke_and_cap_3pcs_colored *
                        quan_male_aso_oke_and_cap_3pcs_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Aso-Oke Wrapper, Buba and Gele 3pcs Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.aso_oke_wrapper_buba_gele_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (aso_oke_wrapper_buba_gele_colored =
                          3 * quan_aso_oke_wrapper_buba_gele_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_aso_oke_wrapper_buba_gele_colored"
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
                      (total_aso_oke_wrapper_buba_gele_colored =
                        lastPrice.aso_oke_wrapper_buba_gele_colored *
                        quan_aso_oke_wrapper_buba_gele_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Aso-Oke Wrapper and Gele 2pcs Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.aso_oke_wrapper_gele_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (aso_oke_wrapper_gele_colored =
                          2 * quan_aso_oke_wrapper_gele_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_aso_oke_wrapper_gele_colored"
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
                      (total_aso_oke_wrapper_gele_colored =
                        lastPrice.aso_oke_wrapper_gele_colored *
                        quan_aso_oke_wrapper_gele_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Aso-Oke Wrapper, Gele and Ipele 3pcs Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.aso_oke_wrapper_gele_ipele_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (aso_oke_wrapper_gele_ipele_colored =
                          3 * quan_aso_oke_wrapper_gele_ipele_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_aso_oke_wrapper_gele_ipele_colored"
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
                      (total_aso_oke_wrapper_gele_ipele_colored =
                        lastPrice.aso_oke_wrapper_gele_ipele_colored *
                        quan_aso_oke_wrapper_gele_ipele_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Aso-Oke Wrapper, Gele and Ipele 3pcs White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.aso_oke_wrapper_gele_ipele_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (aso_oke_wrapper_gele_ipele_white =
                          3 * quan_aso_oke_wrapper_gele_ipele_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_aso_oke_wrapper_gele_ipele_white"
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
                      (total_aso_oke_wrapper_gele_ipele_white =
                        lastPrice.aso_oke_wrapper_gele_ipele_white *
                        quan_aso_oke_wrapper_gele_ipele_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Aso-Oke Head-Tie Ipele 2pcs White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.aso_oke_headtie_ipele_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (aso_oke_headtie_ipele_colored =
                          2 * quan_aso_oke_headtie_ipele_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_aso_oke_headtie_ipele_colored"
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
                      (total_aso_oke_headtie_ipele_colored =
                        lastPrice.aso_oke_headtie_ipele_colored *
                        quan_aso_oke_headtie_ipele_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Complete Male 3pcs White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.male_complete_aso_oke_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (male_complete_aso_oke_white =
                          3 * quan_male_complete_aso_oke_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_male_complete_aso_oke_white"
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
                      (total_male_complete_aso_oke_white =
                        lastPrice.male_complete_aso_oke_white *
                        quan_male_complete_aso_oke_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Complete Female 3pcs White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price: {{ lastPrice.female_complete_aso_oke_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (female_complete_aso_oke_white =
                          3 * quan_female_complete_aso_oke_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_female_complete_aso_oke_white"
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
                      (total_female_complete_aso_oke_white =
                        lastPrice.female_complete_aso_oke_white *
                        quan_female_complete_aso_oke_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Inner-Wear Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_inner_wear_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="female_inner_wear_colored"
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
                      (total_female_inner_wear_colored =
                        lastPrice.female_inner_wear_colored *
                        female_inner_wear_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Inner-Wear White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_inner_wear_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="female_inner_wear_white"
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
                      (total_female_inner_wear_white =
                        lastPrice.female_inner_wear_white *
                        female_inner_wear_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Head-Tie/Gele Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.head_tie_gele_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="head_tie_gele_colored"
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
                      (total_head_tie_gele_colored =
                        lastPrice.head_tie_gele_colored * head_tie_gele_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Head-Tie/Gele White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.head_tie_gele_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="head_tie_gele_white"
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
                      (total_head_tie_gele_white =
                        lastPrice.head_tie_gele_white * head_tie_gele_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Gown Children Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.gown_children_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="gown_children_colored"
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
                      (total_gown_children_colored =
                        lastPrice.gown_children_colored * gown_children_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Gown Children White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.gown_children_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="gown_children_white"
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
                      (total_gown_children_white =
                        lastPrice.gown_children_white * gown_children_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Gown English Adult Folding Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.gown_english_adult_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="gown_english_adult_folding_colored"
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
                      (total_gown_english_adult_folding_colored =
                        lastPrice.gown_english_adult_folding_colored *
                        gown_english_adult_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Gown English Adult Folding White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.gown_english_adult_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="gown_english_adult_folding_white"
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
                      (total_gown_english_adult_folding_white =
                        lastPrice.gown_english_adult_folding_white *
                        gown_english_adult_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Gown English Adult Hanging Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.gown_english_adult_hanging_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="gown_english_adult_hanging_colored"
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
                      (total_gown_english_adult_hanging_colored =
                        lastPrice.gown_english_adult_hanging_colored *
                        gown_english_adult_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Gown English Adult Hanging White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.gown_english_adult_hanging_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="gown_english_adult_hanging_white"
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
                      (total_gown_english_adult_hanging_white =
                        lastPrice.gown_english_adult_hanging_white *
                        gown_english_adult_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Gown Native Folding Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.gown_native_folding_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="gown_native_folding_colored"
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
                      (total_gown_native_folding_colored =
                        lastPrice.gown_native_folding_colored *
                        gown_native_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Gown Native Folding White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.gown_native_folding_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="gown_native_folding_white"
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
                      (total_gown_native_folding_white =
                        lastPrice.gown_native_folding_white *
                        gown_native_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '1'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Adult White Garment With Cap Folding
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.adult_white_garment_folding_with_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="adult_white_garment_folding_with_cap"
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
                    (total_adult_white_garment_folding_with_cap =
                      lastPrice.adult_white_garment_folding_with_cap *
                      adult_white_garment_folding_with_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Adult White Garment Without Cap Folding
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.adult_white_garment_folding_without_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="adult_white_garment_folding_without_cap"
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
                    (total_adult_white_garment_folding_without_cap =
                      lastPrice.adult_white_garment_folding_without_cap *
                      adult_white_garment_folding_without_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Adult White Garment With Cap Hanging
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.adult_white_garment_hanging_with_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="adult_white_garment_hanging_with_cap"
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
                    (total_adult_white_garment_hanging_with_cap =
                      lastPrice.adult_white_garment_hanging_with_cap *
                      adult_white_garment_hanging_with_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '4'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Adult White Garment Without Cap Hanging
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.adult_white_garment_hanging_without_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="adult_white_garment_hanging_without_cap"
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
                    (total_adult_white_garment_hanging_without_cap =
                      lastPrice.adult_white_garment_hanging_without_cap *
                      adult_white_garment_hanging_without_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '4'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Children White Garment With Cap Folding
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.children_white_garment_folding_with_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="children_white_garment_folding_with_cap"
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
                    (total_children_white_garment_folding_with_cap =
                      lastPrice.children_white_garment_folding_with_cap *
                      children_white_garment_folding_with_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Children White Garment Without Cap Folding
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.children_white_garment_folding_without_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="children_white_garment_folding_without_cap"
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
                    (total_children_white_garment_folding_without_cap =
                      lastPrice.children_white_garment_folding_without_cap *
                      children_white_garment_folding_without_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Children White Garment With Cap Hanging
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.children_white_garment_hanging_with_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="children_white_garment_hanging_with_cap"
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
                    (total_children_white_garment_hanging_with_cap =
                      lastPrice.children_white_garment_hanging_with_cap *
                      children_white_garment_hanging_with_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
            <div v-show="category === '1'" class="row q-pt-lg">
              <div class="col-12 col-md-2 q-pl-md">
                <p
                  class="text-h6 bg-blue-11 q-pa-sm"
                  style="border-radius: 15%; color: black"
                >
                  Children White Garment Without Cap Hanging
                </p>
              </div>
              <div class="col-12 col-md-2 q-pl-md">
                <p class="text-subtitle1">
                  Price: {{ lastPrice.children_white_garment_hanging_without_cap }}
                </p>
              </div>
              <div class="col-12 col-md-6 q-pl-md">
                <q-slider
                  v-model="children_white_garment_hanging_without_cap"
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
                    (total_children_white_garment_hanging_without_cap =
                      lastPrice.children_white_garment_hanging_without_cap *
                      children_white_garment_hanging_without_cap)
                  }}
                </p>
              </div>
            </div>
            <q-separator v-show="category === '1'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Skirt and Blouse English 2pcs Hanging Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.skirt_and_blouse_english_hanging_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (skirt_and_blouse_english_hanging_colored =
                          2 * quan_skirt_and_blouse_english_hanging_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_skirt_and_blouse_english_hanging_colored"
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
                      (total_skirt_and_blouse_english_hanging_colored =
                        lastPrice.skirt_and_blouse_english_hanging_colored *
                        quan_skirt_and_blouse_english_hanging_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Skirt and Blouse English 2pcs Hanging White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.skirt_and_blouse_english_hanging_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (skirt_and_blouse_english_hanging_white =
                          2 * quan_skirt_and_blouse_english_hanging_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_skirt_and_blouse_english_hanging_white"
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
                      (total_skirt_and_blouse_english_hanging_white =
                        lastPrice.skirt_and_blouse_english_hanging_white *
                        quan_skirt_and_blouse_english_hanging_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Skirt and Blouse Native 2pcs Folding Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.skirt_and_blouse_native_folding_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (skirt_and_blouse_native_folding_colored =
                          2 * quan_skirt_and_blouse_native_folding_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_skirt_and_blouse_native_folding_colored"
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
                      (total_skirt_and_blouse_native_folding_colored =
                        lastPrice.skirt_and_blouse_native_folding_colored *
                        quan_skirt_and_blouse_native_folding_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Skirt and Blouse Native 2pcs Folding White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.skirt_and_blouse_native_folding_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (skirt_and_blouse_native_folding_white =
                          2 * quan_skirt_and_blouse_native_folding_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_skirt_and_blouse_native_folding_white"
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
                      (total_skirt_and_blouse_native_folding_white =
                        lastPrice.skirt_and_blouse_native_folding_white *
                        quan_skirt_and_blouse_native_folding_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Native Buba and Trouser 2pcs Colored
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.female_native_buba_and_trouser_colored }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (female_native_buba_and_trouser_colored =
                          2 * quan_female_native_buba_and_trouser_colored)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_female_native_buba_and_trouser_colored"
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
                      (total_female_native_buba_and_trouser_colored =
                        lastPrice.female_native_buba_and_trouser_colored *
                        quan_female_native_buba_and_trouser_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Native Buba and Trouser 2pcs White
                  </p>
                </div>
                <div class="column">
                  <div class="col-12 col-md-2 q-pl-md">
                    <p class="text-subtitle1">
                      Price:
                      {{ lastPrice.female_native_buba_and_trouser_white }}
                    </p>
                  </div>
                  <div class="col-12 col-md-2 q-pl-md">
                    <q-chip square color="primary" text-color="white">
                      Quantity:
                      {{
                        (female_native_buba_and_trouser_white =
                          2 * quan_female_native_buba_and_trouser_white)
                      }}
                    </q-chip>
                  </div>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="quan_female_native_buba_and_trouser_white"
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
                      (total_female_native_buba_and_trouser_white =
                        lastPrice.female_native_buba_and_trouser_white *
                        quan_female_native_buba_and_trouser_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Cap Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_cap_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="male_cap_colored"
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
                      (total_male_cap_colored =
                        lastPrice.male_cap_colored * male_cap_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '3'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Male Cap White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.male_cap_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="male_cap_white"
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
                      (total_male_cap_white =
                        lastPrice.male_cap_white * male_cap_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '3'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Cap Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_cap_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="female_cap_colored"
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
                      (total_female_cap_colored =
                        lastPrice.female_cap_colored * female_cap_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '2'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Female Cap White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.female_cap_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="female_cap_white"
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
                      (total_female_cap_white =
                        lastPrice.female_cap_white * female_cap_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '2'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Turban Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.turban_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="turban_colored"
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
                      (total_turban_colored =
                        lastPrice.turban_colored * turban_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Turban White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.turban_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="turban_white"
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
                      (total_turban_white =
                        lastPrice.turban_white * turban_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Sweater Small Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.sweater_small_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="sweater_small_colored"
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
                      (total_sweater_small_colored =
                        lastPrice.sweater_small_colored * sweater_small_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Sweater Small White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.sweater_small_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="sweater_small_white"
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
                      (total_sweater_small_white =
                        lastPrice.sweater_small_white * sweater_small_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Sweater Normal Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.sweater_normal_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="sweater_normal_colored"
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
                      (total_sweater_normal_colored =
                        lastPrice.sweater_normal_colored *
                        sweater_normal_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Sweater Normal White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.sweater_normal_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="sweater_normal_white"
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
                      (total_sweater_normal_white =
                        lastPrice.sweater_normal_white * sweater_normal_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Sweater Big Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.sweater_big_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="sweater_big_colored"
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
                      (total_sweater_big_colored =
                        lastPrice.sweater_big_colored * sweater_big_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Sweater Big White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.sweater_big_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="sweater_big_white"
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
                      (total_sweater_big_white =
                        lastPrice.sweater_big_white * sweater_big_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Towel Small Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.towel_small_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="towel_small_colored"
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
                      (total_towel_small_colored =
                        lastPrice.towel_small_colored * towel_small_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Towel Small White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.towel_small_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="towel_small_white"
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
                      (total_towel_small_white =
                        lastPrice.towel_small_white * towel_small_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Towel Normal Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.towel_normal_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="towel_normal_colored"
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
                      (total_towel_normal_colored =
                        lastPrice.towel_normal_colored * towel_normal_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Towel Normal White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.towel_normal_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="towel_normal_white"
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
                      (total_towel_normal_white =
                        lastPrice.towel_normal_white * towel_normal_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Towel Big Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.towel_big_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="towel_big_colored"
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
                      (total_towel_big_colored =
                        lastPrice.towel_big_colored * towel_big_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Towel Big White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.towel_big_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="towel_big_white"
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
                      (total_towel_big_white =
                        lastPrice.towel_big_white * towel_big_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Bed-Spread Normal Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.bed_spread_normal_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="bed_spread_normal_colored"
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
                      (total_bed_spread_normal_colored =
                        lastPrice.bed_spread_normal_colored *
                        bed_spread_normal_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Bed-Spread Normal White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.bed_spread_normal_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="bed_spread_normal_white"
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
                      (total_bed_spread_normal_white =
                        lastPrice.bed_spread_normal_white *
                        bed_spread_normal_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Bed-Spread Big Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.bed_spread_big_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="bed_spread_big_colored"
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
                      (total_bed_spread_big_colored =
                        lastPrice.bed_spread_big_colored *
                        bed_spread_big_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Bed-Spread Big White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.bed_spread_big_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="bed_spread_big_white"
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
                      (total_bed_spread_big_white =
                        lastPrice.bed_spread_big_white * bed_spread_big_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Bed-Spread Double Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.bed_spread_double_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="bed_spread_double_colored"
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
                      (total_bed_spread_double_colored =
                        lastPrice.bed_spread_double_colored *
                        bed_spread_double_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Bed-Spread Double White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.bed_spread_double_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="bed_spread_double_white"
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
                      (total_bed_spread_double_white =
                        lastPrice.bed_spread_double_white *
                        bed_spread_double_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Duvet Normal Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.duvet_normal_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="duvet_normal_colored"
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
                      (total_duvet_normal_colored =
                        lastPrice.duvet_normal_colored * duvet_normal_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Duvet Normal White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.duvet_normal_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="duvet_normal_white"
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
                      (total_duvet_normal_white =
                        lastPrice.duvet_normal_white * duvet_normal_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Duvet Big Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.duvet_big_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="duvet_big_colored"
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
                      (total_duvet_big_colored =
                        lastPrice.duvet_big_colored * duvet_big_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Duvet Big White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.duvet_big_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="duvet_big_white"
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
                      (total_duvet_big_white =
                        lastPrice.duvet_big_white * duvet_big_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Curtain Normal Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.curtain_normal_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="curtain_normal_colored"
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
                      (total_curtain_normal_colored =
                        lastPrice.curtain_normal_colored *
                        curtain_normal_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Curtain Big Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.curtain_big_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="curtain_big_colored"
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
                      (total_curtain_big_colored =
                        lastPrice.curtain_big_colored * curtain_big_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Curtain Very Big Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.curtain_very_big_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="curtain_very_big_colored"
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
                      (total_curtain_very_big_colored =
                        lastPrice.curtain_very_big_colored *
                        curtain_very_big_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Pyjamas Small Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.pyjamas_small_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="pyjamas_small_colored"
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
                      (total_pyjamas_small_colored =
                        lastPrice.pyjamas_small_colored * pyjamas_small_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Pyjamas Small White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.pyjamas_small_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="pyjamas_small_white"
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
                      (total_pyjamas_small_white =
                        lastPrice.pyjamas_small_white * pyjamas_small_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Pyjamas Big Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.pyjamas_big_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="pyjamas_big_colored"
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
                      (total_pyjamas_big_colored =
                        lastPrice.pyjamas_big_colored * pyjamas_big_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Pyjamas Big White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.pyjamas_big_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="pyjamas_big_white"
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
                      (total_pyjamas_big_white =
                        lastPrice.pyjamas_big_white * pyjamas_big_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Blanket Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.blanket_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="blanket_colored"
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
                      (total_blanket_colored =
                        lastPrice.blanket_colored * blanket_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Pillow Cases Colored
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.pillow_cases_colored }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="pillow_cases_colored"
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
                      (total_pillow_cases_colored =
                        lastPrice.pillow_cases_colored * pillow_cases_colored)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <div v-show="category === '4'" class="row q-pt-lg">
                <div class="col-12 col-md-2 q-pl-md">
                  <p
                    class="text-h6 bg-primary q-pa-sm"
                    style="border-radius: 15%; color: white"
                  >
                    Pillow Cases White
                  </p>
                </div>
                <div class="col-12 col-md-2 q-pl-md">
                  <p class="text-subtitle1">
                    Price: {{ lastPrice.pillow_cases_white }}
                  </p>
                </div>
                <div class="col-12 col-md-6 q-pl-md">
                  <q-slider
                    v-model="pillow_cases_white"
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
                      (total_pillow_cases_white =
                        lastPrice.pillow_cases_white * pillow_cases_white)
                    }}
                  </p>
                </div>
              </div>
              <q-separator v-show="category === '4'" />
              <!-- </q-form> -->
            </div>
          </q-scroll-area>
        </div>
        <div class="col-3">
          <div class="row q-pt-sm">
            <div class="col-12 col-md-12 q-pl-md">
              <p class="text-subtitle1 text-center">Comment:</p>
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
          <q-separator />
          <div class="row q-pt-sm q-pb-sm">
            <div class="col-12 col-md-6 q-pl-md">
              <p class="text-subtitle1 text-center">Collection Date:</p>
              <q-input
                required
                class=""
                v-model="collection_date"
                :min="today"
                outlined
                type="date"
              />
            </div>
            <div class="col-12 col-md-6 q-pl-md">
              <p class="text-subtitle1 text-center">Discount:</p>
              <q-input class="" v-model="discount" outlined type="number" />
            </div>
          </div>
          <q-separator />
          <div class="row q-pt-sm">
            <div class="col-12 col-md-12 q-pl-md">
              <p class="text-subtitle1 text-center">Deposit:</p>
              <q-input
                required
                class=""
                v-model="deposit"
                outlined
                type="number"
                hint=""
              />
            </div>
          </div>
          <q-separator />
          <div class="row q-pt-sm">
            <div class="col-12 col-md-12 q-pl-md">
              <p class="text-subtitle1 text-center">Deposit Type:</p>
              <q-select
                outlined
                v-model="deposit_type"
                :options="optionsDepositType"
                hint="POS, Cash etc"
              />
            </div>
          </div>
          <q-separator />
          <div class="row q-pt-sm">
            <div class="text-center full-width q-pl-md">
              <p class="text-h6">
                Final Total: ₦
                {{
                  (total_final_amount =
                    Number(total_male_native_2pcs_folding_colored) +
                    Number(total_male_native_2pcs_hanging_colored) +
                    Number(total_male_native_2pcs_folding_white) +
                    Number(total_male_native_2pcs_hanging_white) +
                    Number(total_male_native_3pcs_notAgbada_folding_colored) +
                    Number(total_male_native_3pcs_notAgbada_hanging_colored) +
                    Number(total_male_native_3pcs_notAgbada_folding_white) +
                    Number(total_male_native_3pcs_notAgbada_hanging_white) +
                    Number(total_native_top_only_folding_colored) +
                    Number(total_native_top_only_hanging_colored) +
                    Number(total_native_top_only_folding_white) +
                    Number(total_native_top_only_hanging_white) +
                    Number(total_native_trouser_only_folding_colored) +
                    Number(total_native_trouser_only_hanging_colored) +
                    Number(total_native_trouser_only_folding_white) +
                    Number(total_native_trouser_only_hanging_white) +
                    Number(total_male_agbada_only_folding_colored) +
                    Number(total_male_agbada_only_hanging_colored) +
                    Number(total_male_agbada_only_folding_white) +
                    Number(total_male_agbada_only_hanging_white) +
                    Number(total_complete_male_agbada_3pcs_Folding_colored) +
                    Number(total_complete_male_agbada_3pcs_Hanging_colored) +
                    Number(total_complete_male_agbada_3pcs_Folding_white) +
                    Number(total_complete_male_agbada_3pcs_Hanging_white) +
                    Number(total_normal_shirt_folding_colored) +
                    Number(total_normal_shirt_hanging_colored) +
                    Number(total_normal_shirt_folding_white) +
                    Number(total_normal_shirt_hanging_white) +
                    Number(total_blouse_folding_colored) +
                    Number(total_blouse_hanging_colored) +
                    Number(total_blouse_folding_white) +
                    Number(total_blouse_hanging_white) +
                    Number(total_blouse_x_large_folding_colored) +
                    Number(total_blouse_x_large_hanging_colored) +
                    Number(total_blouse_x_large_folding_white) +
                    Number(total_blouse_x_large_hanging_white) +
                    Number(total_female_shirt_folding_colored) +
                    Number(total_female_shirt_hanging_colored) +
                    Number(total_female_shirt_folding_white) +
                    Number(total_female_shirt_hanging_white) +
                    Number(total_tshirt_polo_small_folding_colored) +
                    Number(total_tshirt_polo_small_hanging_colored) +
                    Number(total_tshirt_polo_small_folding_white) +
                    Number(total_tshirt_polo_small_hanging_white) +
                    Number(total_tshirt_polo_medium_folding_colored) +
                    Number(total_tshirt_polo_medium_hanging_colored) +
                    Number(total_tshirt_polo_medium_folding_white) +
                    Number(total_tshirt_polo_medium_hanging_white) +
                    Number(total_tshirt_polo_big_folding_colored) +
                    Number(total_tshirt_polo_big_hanging_colored) +
                    Number(total_tshirt_polo_big_folding_white) +
                    Number(total_tshirt_polo_big_hanging_white) +
                    Number(total_shirt_x_large_folding_colored) +
                    Number(total_shirt_x_large_hanging_colored) +
                    Number(total_shirt_x_large_folding_white) +
                    Number(total_shirt_x_large_hanging_white) +
                    Number(total_shirt_big_folding_colored) +
                    Number(total_shirt_big_hanging_colored) +
                    Number(total_shirt_big_folding_white) +
                    Number(total_shirt_big_hanging_white) +
                    Number(total_shirt_children_folding_colored) +
                    Number(total_shirt_children_hanging_colored) +
                    Number(total_shirt_children_folding_white) +
                    Number(total_shirt_children_hanging_white) +
                    Number(total_plain_trouser_folding_colored) +
                    Number(total_plain_trouser_hanging_colored) +
                    Number(total_plain_trouser_folding_white) +
                    Number(total_plain_trouser_hanging_white) +
                    Number(total_jeans_chinos_trouser_folding_colored) +
                    Number(total_jeans_chinos_trouser_hanging_colored) +
                    Number(total_jeans_chinos_trouser_folding_white) +
                    Number(total_jeans_chinos_trouser_hanging_white) +
                    Number(total_waist_coat_hanging_colored) +
                    Number(total_waist_coat_hanging_white) +
                    Number(total_tie_colored) +
                    Number(total_tie_white) +
                    Number(total_shorts_folding_colored) +
                    Number(total_shorts_hanging_colored) +
                    Number(total_shorts_folding_white) +
                    Number(total_shorts_hanging_white) +
                    Number(total_singlet_colored) +
                    Number(total_singlet_white) +
                    Number(total_boxer_colored) +
                    Number(total_boxer_white) +
                    Number(total_male_2pcs_suit_hanging_colored) +
                    Number(total_male_2pcs_suit_hanging_white) +
                    Number(total_male_3pcs_suit_hanging_colored) +
                    Number(total_male_3pcs_suit_hanging_white) +
                    Number(total_female_2pcs_suit_hanging_colored) +
                    Number(total_female_2pcs_suit_hanging_white) +
                    Number(total_female_3pcs_suit_hanging_colored) +
                    Number(total_female_3pcs_suit_hanging_white) +
                    Number(total_male_jacket_only_colored) +
                    Number(total_male_jacket_only_white) +
                    Number(total_female_jacket_only_colored) +
                    Number(total_female_jacket_only_white) +
                    Number(
                      total_wedding_gown_small_and_little_accessories_white
                    ) +
                    Number(
                      total_wedding_gown_big_and_plenty_accessories_white
                    ) +
                    Number(total_Kids_blouse_folding_colored) +
                    Number(total_Kids_blouse_hanging_colored) +
                    Number(total_Kids_blouse_folding_white) +
                    Number(total_Kids_blouse_hanging_white) +
                    Number(total_jalamia_colored) +
                    Number(total_jalamia_white) +
                    Number(total_camisole_colored) +
                    Number(total_camisole_white) +
                    Number(total_wrapper_buba_scarf_colored) +
                    Number(total_wrapper_buba_scarf_white) +
                    Number(total_wrapper_buba_no_scarf_colored) +
                    Number(total_wrapper_buba_no_scarf_white) +
                    Number(total_wrapper_only_colored) +
                    Number(total_wrapper_only_white) +
                    Number(total_two_wrapper_scarf_or_no_scarf_colored) +
                    Number(total_two_wrapper_scarf_or_no_scarf_white) +
                    Number(total_aso_oke_agbada_and_cap_colored) +
                    Number(total_male_aso_oke_and_cap_3pcs_colored) +
                    Number(total_aso_oke_wrapper_buba_gele_colored) +
                    Number(total_aso_oke_wrapper_gele_colored) +
                    Number(total_aso_oke_wrapper_gele_ipele_colored) +
                    Number(total_aso_oke_wrapper_gele_ipele_white) +
                    Number(total_aso_oke_headtie_ipele_colored) +
                    Number(total_male_complete_aso_oke_white) +
                    Number(total_female_complete_aso_oke_white) +
                    Number(total_female_inner_wear_colored) +
                    Number(total_female_inner_wear_white) +
                    Number(total_head_tie_gele_colored) +
                    Number(total_head_tie_gele_white) +
                    Number(total_gown_children_colored) +
                    Number(total_gown_children_white) +
                    Number(total_gown_english_adult_folding_colored) +
                    Number(total_gown_english_adult_folding_white) +
                    Number(total_gown_english_adult_hanging_colored) +
                    Number(total_gown_english_adult_hanging_white) +
                    Number(total_gown_native_folding_colored) +
                    Number(total_gown_native_folding_white) +
                    Number(total_adult_white_garment_folding_with_cap) +
                    Number(total_adult_white_garment_folding_without_cap) +
                    Number(total_adult_white_garment_hanging_with_cap) +
                    Number(total_adult_white_garment_hanging_without_cap) +
                    Number(total_children_white_garment_folding_with_cap) +
                    Number(total_children_white_garment_folding_without_cap) +
                    Number(total_children_white_garment_hanging_with_cap) +
                    Number(total_children_white_garment_hanging_without_cap) +
                    Number(total_skirt_and_blouse_english_hanging_colored) +
                    Number(total_skirt_and_blouse_english_hanging_white) +
                    Number(total_skirt_and_blouse_native_folding_colored) +
                    Number(total_skirt_and_blouse_native_folding_white) +
                    Number(total_female_native_buba_and_trouser_colored) +
                    Number(total_female_native_buba_and_trouser_white) +
                    Number(total_male_cap_colored) +
                    Number(total_male_cap_white) +
                    Number(total_female_cap_colored) +
                    Number(total_female_cap_white) +
                    Number(total_turban_colored) +
                    Number(total_turban_white) +
                    Number(total_sweater_small_colored) +
                    Number(total_sweater_small_white) +
                    Number(total_sweater_normal_colored) +
                    Number(total_sweater_normal_white) +
                    Number(total_sweater_big_colored) +
                    Number(total_sweater_big_white) +
                    Number(total_towel_small_colored) +
                    Number(total_towel_small_white) +
                    Number(total_towel_normal_colored) +
                    Number(total_towel_normal_white) +
                    Number(total_towel_big_colored) +
                    Number(total_towel_big_white) +
                    Number(total_bed_spread_normal_colored) +
                    Number(total_bed_spread_normal_white) +
                    Number(total_bed_spread_big_colored) +
                    Number(total_bed_spread_big_white) +
                    Number(total_bed_spread_double_colored) +
                    Number(total_bed_spread_double_white) +
                    Number(total_duvet_normal_colored) +
                    Number(total_duvet_normal_white) +
                    Number(total_duvet_big_colored) +
                    Number(total_duvet_big_white) +
                    Number(total_curtain_normal_colored) +
                    Number(total_curtain_big_colored) +
                    Number(total_curtain_very_big_colored) +
                    Number(total_pyjamas_small_colored) +
                    Number(total_pyjamas_small_white) +
                    Number(total_pyjamas_big_colored) +
                    Number(total_pyjamas_big_white) +
                    Number(total_blanket_colored) +
                    Number(total_pillow_cases_colored) +
                    Number(total_pillow_cases_white))
                }}
              </p>
            </div>
          </div>

          <div class="row q-pt-md q-pb-md">
            <div class="text-center full-width q-pl-md">
              <q-btn
                :disabled="!collection_date || !comment_section"
                @click="continue_"
                label="Continue"
                type="submit"
                color="primary"
              />
              <!-- style="width: 260px" -->
            </div>
          </div>
        </div>
      </div>
      <q-separator />
    </div>
    <div class="q-pt-sm" v-show="summary">
      <q-separator />
      <div class="row q-pt-lg q-pb-xl">
        <div class="text-left full-width q-pl-md">
          <q-btn @click="back_" label="Back" color="red" style="width: 60px" />
        </div>
      </div>
      <q-separator />
      <div>
        <div v-show="male_native_2pcs_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Male Native 2 Pcs Folding-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_native_2pcs_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{
              (male_native_2pcs_folding_colored =
                2 * quan_male_native_2pcs_folding_colored)
            }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_native_2pcs_folding_colored =
                  lastPrice.male_native_2pcs_folding_colored *
                  quan_male_native_2pcs_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_native_2pcs_folding_colored != 0" />
        <div v-show="male_native_2pcs_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Male Native 2 Pcs Hanging-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_native_2pcs_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{
              (male_native_2pcs_hanging_colored =
                2 * quan_male_native_2pcs_hanging_colored)
            }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_native_2pcs_hanging_colored =
                  lastPrice.male_native_2pcs_hanging_colored *
                  quan_male_native_2pcs_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_native_2pcs_hanging_colored != 0" />
        <div v-show="male_native_2pcs_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Male Native 2 Pcs Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_native_2pcs_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{
              (male_native_2pcs_folding_white =
                2 * quan_male_native_2pcs_folding_white)
            }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_native_2pcs_folding_white =
                  lastPrice.male_native_2pcs_folding_white *
                  quan_male_native_2pcs_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_native_2pcs_folding_white != 0" />
        <div v-show="male_native_2pcs_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Male Native 2 Pcs Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_native_2pcs_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{
              (male_native_2pcs_hanging_white =
                2 * quan_male_native_2pcs_hanging_white)
            }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_native_2pcs_hanging_white =
                  lastPrice.male_native_2pcs_hanging_white *
                  quan_male_native_2pcs_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_native_2pcs_hanging_white != 0" />
        <div
          v-show="male_native_3pcs_notAgbada_folding_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Male Native 3 Pcs Not-Agbada Folding-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.male_native_3pcs_notAgbada_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{
              (male_native_3pcs_notAgbada_folding_colored =
                3 * quan_male_native_3pcs_notAgbada_folding_colored)
            }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_native_3pcs_notAgbada_folding_colored =
                  lastPrice.male_native_3pcs_notAgbada_folding_colored *
                  quan_male_native_3pcs_notAgbada_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_native_3pcs_notAgbada_folding_colored != 0" />
        <div
          v-show="male_native_3pcs_notAgbada_hanging_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Male Native 3 Pcs Not-Agbada Hanging-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.male_native_3pcs_notAgbada_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{
              (male_native_3pcs_notAgbada_hanging_colored =
                3 * quan_male_native_3pcs_notAgbada_hanging_colored)
            }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_native_3pcs_notAgbada_hanging_colored =
                  lastPrice.male_native_3pcs_notAgbada_hanging_colored *
                  quan_male_native_3pcs_notAgbada_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_native_3pcs_notAgbada_hanging_colored != 0" />
        <div
          v-show="male_native_3pcs_notAgbada_folding_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Male Native 3 Pcs Not-Agbada Folding-White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.male_native_3pcs_notAgbada_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{
              (male_native_3pcs_notAgbada_folding_white =
                3 * quan_male_native_3pcs_notAgbada_folding_white)
            }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_native_3pcs_notAgbada_folding_white =
                  lastPrice.male_native_3pcs_notAgbada_folding_white *
                  quan_male_native_3pcs_notAgbada_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_native_3pcs_notAgbada_folding_white != 0" />
        <div
          v-show="male_native_3pcs_notAgbada_hanging_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Male Native 3 Pcs Not-Agbada Hanging-White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.male_native_3pcs_notAgbada_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{
              (male_native_3pcs_notAgbada_hanging_white =
                3 * quan_male_native_3pcs_notAgbada_hanging_white)
            }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_native_3pcs_notAgbada_hanging_white =
                  lastPrice.male_native_3pcs_notAgbada_hanging_white *
                  quan_male_native_3pcs_notAgbada_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_native_3pcs_notAgbada_hanging_white != 0" />
        <div v-show="native_top_only_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Native Top Only Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.native_top_only_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ native_top_only_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_native_top_only_folding_colored =
                  lastPrice.native_top_only_folding_colored *
                  native_top_only_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="native_top_only_folding_colored != 0" />
        <div v-show="native_top_only_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Native Top Only Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.native_top_only_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ native_top_only_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_native_top_only_hanging_colored =
                  lastPrice.native_top_only_hanging_colored *
                  native_top_only_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="native_top_only_hanging_colored != 0" />
        <div v-show="native_top_only_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Native Top Only Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.native_top_only_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ native_top_only_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_native_top_only_folding_white =
                  lastPrice.native_top_only_folding_white *
                  native_top_only_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="native_top_only_folding_white != 0" />
        <div v-show="native_top_only_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Native Top Only Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.native_top_only_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ native_top_only_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_native_top_only_hanging_white =
                  lastPrice.native_top_only_hanging_white *
                  native_top_only_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="native_top_only_hanging_white != 0" />
        <div
          v-show="native_trouser_only_folding_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Native Trouser Only Folding-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.native_trouser_only_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ native_trouser_only_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_native_trouser_only_folding_colored =
                  lastPrice.native_trouser_only_folding_colored *
                  native_trouser_only_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="native_trouser_only_folding_colored != 0" />
        <div
          v-show="native_trouser_only_hanging_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Native Trouser Only Hanging-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.native_trouser_only_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ native_trouser_only_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_native_trouser_only_hanging_colored =
                  lastPrice.native_trouser_only_hanging_colored *
                  native_trouser_only_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="native_trouser_only_hanging_colored != 0" />
        <div
          v-show="native_trouser_only_folding_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Native Trouser Only Folding-White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.native_trouser_only_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ native_trouser_only_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_native_trouser_only_folding_white =
                  lastPrice.native_trouser_only_folding_white *
                  native_trouser_only_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="native_trouser_only_folding_white != 0" />
        <div
          v-show="native_trouser_only_hanging_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Native Trouser Only Hanging-White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.native_trouser_only_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ native_trouser_only_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_native_trouser_only_hanging_white =
                  lastPrice.native_trouser_only_hanging_white *
                  native_trouser_only_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="native_trouser_only_hanging_white != 0" />
        <div v-show="male_agbada_only_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Agbada Only Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_agbada_only_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ male_agbada_only_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_agbada_only_folding_colored =
                  lastPrice.male_agbada_only_folding_colored *
                  male_agbada_only_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_agbada_only_folding_colored != 0" />
        <div v-show="male_agbada_only_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Agbada Only Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_agbada_only_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ male_agbada_only_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_agbada_only_hanging_colored =
                  lastPrice.male_agbada_only_hanging_colored *
                  male_agbada_only_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_agbada_only_hanging_colored != 0" />
        <div v-show="male_agbada_only_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Agbada Only Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_agbada_only_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ male_agbada_only_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_agbada_only_folding_white =
                  lastPrice.male_agbada_only_folding_white *
                  male_agbada_only_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_agbada_only_folding_white != 0" />
        <div v-show="male_agbada_only_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Agbada Only Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_agbada_only_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ male_agbada_only_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_agbada_only_hanging_white =
                  lastPrice.male_agbada_only_hanging_white *
                  male_agbada_only_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_agbada_only_hanging_white != 0" />
        <div
          v-show="complete_male_agbada_3pcs_Folding_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Complete Male Agbada 3 Pcs Folding-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.complete_male_agbada_3pcs_Folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ complete_male_agbada_3pcs_Folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_complete_male_agbada_3pcs_Folding_colored =
                  lastPrice.complete_male_agbada_3pcs_Folding_colored *
                  quan_complete_male_agbada_3pcs_Folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="complete_male_agbada_3pcs_Folding_colored != 0" />
        <div
          v-show="complete_male_agbada_3pcs_Hanging_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Complete Male Agbada 3 Pcs Hanging-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.complete_male_agbada_3pcs_Hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ complete_male_agbada_3pcs_Hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_complete_male_agbada_3pcs_Hanging_colored =
                  lastPrice.complete_male_agbada_3pcs_Hanging_colored *
                  quan_complete_male_agbada_3pcs_Hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="complete_male_agbada_3pcs_Hanging_colored != 0" />
        <div
          v-show="complete_male_agbada_3pcs_Folding_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Complete Male Agbada 3 Pcs Folding-White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.complete_male_agbada_3pcs_Folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ complete_male_agbada_3pcs_Folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_complete_male_agbada_3pcs_Folding_white =
                  lastPrice.complete_male_agbada_3pcs_Folding_white *
                  quan_complete_male_agbada_3pcs_Folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="complete_male_agbada_3pcs_Folding_white != 0" />
        <div
          v-show="complete_male_agbada_3pcs_Hanging_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Complete Male Agbada 3 Pcs Hanging-White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.complete_male_agbada_3pcs_Hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ complete_male_agbada_3pcs_Hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_complete_male_agbada_3pcs_Hanging_white =
                  lastPrice.complete_male_agbada_3pcs_Hanging_white *
                  quan_complete_male_agbada_3pcs_Hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="complete_male_agbada_3pcs_Hanging_white != 0" />
        <div v-show="normal_shirt_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.normal_shirt_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ normal_shirt_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_normal_shirt_folding_colored =
                  lastPrice.normal_shirt_folding_colored *
                  normal_shirt_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="normal_shirt_folding_colored != 0" />
        <div v-show="normal_shirt_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.normal_shirt_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ normal_shirt_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_normal_shirt_hanging_colored =
                  lastPrice.normal_shirt_hanging_colored *
                  normal_shirt_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="normal_shirt_hanging_colored != 0" />
        <div v-show="normal_shirt_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.normal_shirt_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ normal_shirt_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_normal_shirt_folding_white =
                  lastPrice.normal_shirt_folding_white *
                  normal_shirt_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="normal_shirt_folding_white != 0" />
        <div v-show="normal_shirt_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.normal_shirt_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ normal_shirt_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_normal_shirt_hanging_white =
                  lastPrice.normal_shirt_hanging_white *
                  normal_shirt_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="normal_shirt_hanging_white != 0" />
        <div v-show="shirt_big_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Big Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_big_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_big_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_big_folding_colored =
                  lastPrice.shirt_big_folding_colored *
                  shirt_big_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_big_folding_colored != 0" />
        <div v-show="shirt_big_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Big Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_big_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_big_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_big_hanging_colored =
                  lastPrice.shirt_big_hanging_colored *
                  shirt_big_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_big_hanging_colored != 0" />
        <div v-show="shirt_big_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Big Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_big_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_big_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_big_folding_white =
                  lastPrice.shirt_big_folding_white * shirt_big_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_big_folding_white != 0" />
        <div v-show="shirt_big_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Big Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_big_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_big_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_big_hanging_white =
                  lastPrice.shirt_big_hanging_white * shirt_big_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_big_hanging_white != 0" />
        <div v-show="shirt_x_large_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt XLarge Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_x_large_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_x_large_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_x_large_folding_colored =
                  lastPrice.shirt_x_large_folding_colored *
                  shirt_x_large_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_x_large_folding_colored != 0" />
        <div v-show="shirt_x_large_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt XLarge Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_x_large_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_x_large_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_x_large_hanging_colored =
                  lastPrice.shirt_x_large_hanging_colored *
                  shirt_x_large_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_x_large_hanging_colored != 0" />
        <div v-show="shirt_x_large_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt XLarge Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_x_large_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_x_large_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_x_large_folding_white =
                  lastPrice.shirt_x_large_folding_white *
                  shirt_x_large_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_x_large_folding_white != 0" />
        <div v-show="shirt_x_large_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt XLarge Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_x_large_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_x_large_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_x_large_hanging_white =
                  lastPrice.shirt_x_large_hanging_white *
                  shirt_x_large_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_x_large_hanging_white != 0" />
        <div v-show="shirt_children_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Children Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_children_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_children_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_children_folding_colored =
                  lastPrice.shirt_children_folding_colored *
                  shirt_children_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_children_folding_colored != 0" />
        <div v-show="shirt_children_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Children Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_children_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_children_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_children_hanging_colored =
                  lastPrice.shirt_children_hanging_colored *
                  shirt_children_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_children_hanging_colored != 0" />
        <div v-show="shirt_children_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Children Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_children_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_children_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_children_folding_white =
                  lastPrice.shirt_children_folding_white *
                  shirt_children_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_children_folding_white != 0" />
        <div v-show="shirt_children_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shirt Children Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shirt_children_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shirt_children_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shirt_children_hanging_white =
                  lastPrice.shirt_children_hanging_white *
                  shirt_children_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shirt_children_hanging_white != 0" />
        <div v-show="blouse_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Blouse Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.blouse_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ blouse_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_blouse_folding_colored =
                  lastPrice.blouse_folding_colored * blouse_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="blouse_folding_colored != 0" />
        <div v-show="blouse_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Blouse Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.blouse_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ blouse_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_blouse_hanging_colored =
                  lastPrice.blouse_hanging_colored * blouse_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="blouse_hanging_colored != 0" />
        <div v-show="blouse_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Blouse Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.blouse_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ blouse_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_blouse_folding_white =
                  lastPrice.blouse_folding_white * blouse_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="blouse_folding_white != 0" />
        <div v-show="blouse_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Blouse Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.blouse_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ blouse_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_blouse_hanging_white =
                  lastPrice.blouse_hanging_white * blouse_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="blouse_hanging_white != 0" />
        <div v-show="blouse_x_large_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Blouse XLarge Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.blouse_x_large_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ blouse_x_large_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_blouse_x_large_folding_colored =
                  lastPrice.blouse_x_large_folding_colored *
                  blouse_x_large_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="blouse_x_large_folding_colored != 0" />
        <div v-show="blouse_x_large_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Blouse XLarge Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.blouse_x_large_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ blouse_x_large_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_blouse_x_large_hanging_colored =
                  lastPrice.blouse_x_large_hanging_colored *
                  blouse_x_large_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="blouse_x_large_hanging_colored != 0" />
        <div v-show="blouse_x_large_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Blouse XLarge Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.blouse_x_large_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ blouse_x_large_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_blouse_x_large_folding_white =
                  lastPrice.blouse_x_large_folding_white *
                  blouse_x_large_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="blouse_x_large_folding_white != 0" />
        <div v-show="blouse_x_large_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Blouse XLarge Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.blouse_x_large_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ blouse_x_large_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_blouse_x_large_hanging_white =
                  lastPrice.blouse_x_large_hanging_white *
                  blouse_x_large_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="blouse_x_large_hanging_white != 0" />
        <div v-show="female_shirt_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female Shirt Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_shirt_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ female_shirt_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_shirt_folding_colored =
                  lastPrice.female_shirt_folding_colored *
                  female_shirt_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_shirt_folding_colored != 0" />
        <div v-show="female_shirt_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female Shirt Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_shirt_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ female_shirt_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_shirt_hanging_colored =
                  lastPrice.female_shirt_hanging_colored *
                  female_shirt_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_shirt_hanging_colored != 0" />
        <div v-show="female_shirt_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female Shirt Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_shirt_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ female_shirt_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_shirt_folding_white =
                  lastPrice.female_shirt_folding_white *
                  female_shirt_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_shirt_folding_white != 0" />
        <div v-show="female_shirt_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female Shirt Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_shirt_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ female_shirt_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_shirt_hanging_white =
                  lastPrice.female_shirt_hanging_white *
                  female_shirt_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_shirt_hanging_white != 0" />
        <div
          v-show="tshirt_polo_small_folding_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              TShirt/Polo Small Folding-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_small_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_small_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_small_folding_colored =
                  lastPrice.tshirt_polo_small_folding_colored *
                  tshirt_polo_small_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_small_folding_colored != 0" />
        <div
          v-show="tshirt_polo_small_hanging_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              TShirt/Polo Small Hanging-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_small_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_small_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_small_hanging_colored =
                  lastPrice.tshirt_polo_small_hanging_colored *
                  tshirt_polo_small_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_small_hanging_colored != 0" />
        <div v-show="tshirt_polo_small_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">TShirt/Polo Small Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_small_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_small_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_small_folding_white =
                  lastPrice.tshirt_polo_small_folding_white *
                  tshirt_polo_small_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_small_folding_white != 0" />
        <div v-show="tshirt_polo_small_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">TShirt/Polo Small Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_small_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_small_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_small_hanging_white =
                  lastPrice.tshirt_polo_small_hanging_white *
                  tshirt_polo_small_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_small_hanging_white != 0" />
        <div
          v-show="tshirt_polo_medium_folding_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              TShirt/Polo Medium Folding-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_medium_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_medium_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_medium_folding_colored =
                  lastPrice.tshirt_polo_medium_folding_colored *
                  tshirt_polo_medium_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_medium_folding_colored != 0" />
        <div
          v-show="tshirt_polo_medium_hanging_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              TShirt/Polo Medium Hanging-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_medium_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_medium_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_medium_hanging_colored =
                  lastPrice.tshirt_polo_medium_hanging_colored *
                  tshirt_polo_medium_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_medium_hanging_colored != 0" />
        <div v-show="tshirt_polo_medium_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">TShirt/Polo Medium Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_medium_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_medium_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_medium_folding_white =
                  lastPrice.tshirt_polo_medium_folding_white *
                  tshirt_polo_medium_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_medium_folding_white != 0" />
        <div v-show="tshirt_polo_medium_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">TShirt/Polo Medium Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_medium_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_medium_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_medium_hanging_white =
                  lastPrice.tshirt_polo_medium_hanging_white *
                  tshirt_polo_medium_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_medium_hanging_white != 0" />
        <div v-show="tshirt_polo_big_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">TShirt/Polo Big Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_big_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_big_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_big_folding_colored =
                  lastPrice.tshirt_polo_big_folding_colored *
                  tshirt_polo_big_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_big_folding_colored != 0" />
        <div v-show="tshirt_polo_big_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">TShirt/Polo Big Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_big_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_big_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_big_hanging_colored =
                  lastPrice.tshirt_polo_big_hanging_colored *
                  tshirt_polo_big_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_big_hanging_colored != 0" />
        <div v-show="tshirt_polo_big_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">TShirt/Polo Big Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_big_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_big_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_big_folding_white =
                  lastPrice.tshirt_polo_big_folding_white *
                  tshirt_polo_big_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_big_folding_white != 0" />
        <div v-show="tshirt_polo_big_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">TShirt/Polo Big Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.tshirt_polo_big_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ tshirt_polo_big_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_tshirt_polo_big_hanging_white =
                  lastPrice.tshirt_polo_big_hanging_white *
                  tshirt_polo_big_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="tshirt_polo_big_hanging_white != 0" />
        <div v-show="plain_trouser_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Trouser Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.plain_trouser_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ plain_trouser_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_plain_trouser_folding_colored =
                  lastPrice.plain_trouser_folding_colored *
                  plain_trouser_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="plain_trouser_folding_colored != 0" />
        <div v-show="plain_trouser_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Trouser Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.plain_trouser_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ plain_trouser_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_plain_trouser_hanging_colored =
                  lastPrice.plain_trouser_hanging_colored *
                  plain_trouser_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="plain_trouser_hanging_colored != 0" />
        <div v-show="plain_trouser_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Trouser Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.plain_trouser_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ plain_trouser_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_plain_trouser_folding_white =
                  lastPrice.plain_trouser_folding_white *
                  plain_trouser_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="plain_trouser_folding_white != 0" />
        <div v-show="plain_trouser_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Trouser Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.plain_trouser_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ plain_trouser_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_plain_trouser_hanging_white =
                  lastPrice.plain_trouser_hanging_white *
                  plain_trouser_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="plain_trouser_hanging_white != 0" />
        <div
          v-show="jeans_chinos_trouser_folding_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Jeans/Chinos Trouser Folding-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.jeans_chinos_trouser_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ jeans_chinos_trouser_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_jeans_chinos_trouser_folding_colored =
                  lastPrice.jeans_chinos_trouser_folding_colored *
                  jeans_chinos_trouser_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="jeans_chinos_trouser_folding_colored != 0" />
        <div
          v-show="jeans_chinos_trouser_hanging_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Jeans/Chinos Trouser Hanging-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.jeans_chinos_trouser_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ jeans_chinos_trouser_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_jeans_chinos_trouser_hanging_colored =
                  lastPrice.jeans_chinos_trouser_hanging_colored *
                  jeans_chinos_trouser_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="jeans_chinos_trouser_hanging_colored != 0" />
        <div
          v-show="jeans_chinos_trouser_folding_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Jeans/Chinos Trouser Folding-White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.jeans_chinos_trouser_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ jeans_chinos_trouser_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_jeans_chinos_trouser_folding_white =
                  lastPrice.jeans_chinos_trouser_folding_white *
                  jeans_chinos_trouser_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="jeans_chinos_trouser_folding_white != 0" />
        <div
          v-show="jeans_chinos_trouser_hanging_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Jeans/Chinos Trouser Hanging-White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.jeans_chinos_trouser_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ jeans_chinos_trouser_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_jeans_chinos_trouser_hanging_white =
                  lastPrice.jeans_chinos_trouser_hanging_white *
                  jeans_chinos_trouser_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="jeans_chinos_trouser_hanging_white != 0" />
        <div v-show="waist_coat_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Waist Coat Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.waist_coat_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ waist_coat_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_waist_coat_hanging_colored =
                  lastPrice.waist_coat_hanging_colored *
                  waist_coat_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="waist_coat_hanging_colored != 0" />
        <div v-show="waist_coat_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Waist Coat Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.waist_coat_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ waist_coat_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_waist_coat_hanging_white =
                  lastPrice.waist_coat_hanging_white * waist_coat_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="waist_coat_hanging_white != 0" />
        <div v-show="tie_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Tie Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.tie_colored }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">Quantity: {{ tie_colored }}</div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{ (total_tie_colored = lastPrice.tie_colored * tie_colored) }}
            </p>
          </div>
        </div>
        <q-separator v-show="tie_colored != 0" />
        <div v-show="tie_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Tie White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.tie_white }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">Quantity: {{ tie_white }}</div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{ (total_tie_white = lastPrice.tie_white * tie_white) }}
            </p>
          </div>
        </div>
        <q-separator v-show="tie_white != 0" />
        <div v-show="shorts_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shorts Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shorts_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shorts_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shorts_folding_colored =
                  lastPrice.shorts_folding_colored * shorts_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shorts_folding_colored != 0" />
        <div v-show="shorts_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shorts Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shorts_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shorts_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shorts_hanging_colored =
                  lastPrice.shorts_hanging_colored * shorts_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shorts_hanging_colored != 0" />
        <div v-show="shorts_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shorts Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shorts_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shorts_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shorts_folding_white =
                  lastPrice.shorts_folding_white * shorts_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shorts_folding_white != 0" />
        <div v-show="shorts_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Shorts Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.shorts_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ shorts_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_shorts_hanging_white =
                  lastPrice.shorts_hanging_white * shorts_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="shorts_hanging_white != 0" />
        <div v-show="singlet_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Singlet Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.singlet_colored }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ singlet_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_singlet_colored =
                  lastPrice.singlet_colored * singlet_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="singlet_colored != 0" />
        <div v-show="singlet_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Singlet White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.singlet_white }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ singlet_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_singlet_white = lastPrice.singlet_white * singlet_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="singlet_white != 0" />
        <div v-show="boxer_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Boxer Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.boxer_colored }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ boxer_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_boxer_colored = lastPrice.boxer_colored * boxer_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="boxer_colored != 0" />
        <div v-show="boxer_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Boxer White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.boxer_white }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">Quantity: {{ boxer_white }}</div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{ (total_boxer_white = lastPrice.boxer_white * boxer_white) }}
            </p>
          </div>
        </div>
        <q-separator v-show="boxer_white != 0" />
        <div v-show="male_2pcs_suit_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Male 2 Pcs Suit Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_2pcs_suit_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ male_2pcs_suit_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_2pcs_suit_hanging_colored =
                  lastPrice.male_2pcs_suit_hanging_colored *
                  quan_male_2pcs_suit_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_2pcs_suit_hanging_colored != 0" />
        <div v-show="male_2pcs_suit_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Male 2 Pcs Suit Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_2pcs_suit_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ male_2pcs_suit_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_2pcs_suit_hanging_white =
                  lastPrice.male_2pcs_suit_hanging_white *
                  quan_male_2pcs_suit_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_2pcs_suit_hanging_white != 0" />
        <div v-show="male_3pcs_suit_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Male 3 Pcs Suit Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_3pcs_suit_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ male_3pcs_suit_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_3pcs_suit_hanging_colored =
                  lastPrice.male_3pcs_suit_hanging_colored *
                  quan_male_3pcs_suit_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_3pcs_suit_hanging_colored != 0" />
        <div v-show="male_3pcs_suit_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Male 3 Pcs Suit Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_3pcs_suit_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ male_3pcs_suit_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (toal_male_3pcs_suit_hanging_white =
                  lastPrice.male_3pcs_suit_hanging_white *
                  quan_male_3pcs_suit_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_3pcs_suit_hanging_white != 0" />
        <div v-show="female_2pcs_suit_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Female 2 Pcs Suit Hanging-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_2pcs_suit_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ female_2pcs_suit_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_2pcs_suit_hanging_colored =
                  lastPrice.female_2pcs_suit_hanging_colored *
                  quan_female_2pcs_suit_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_2pcs_suit_hanging_colored != 0" />
        <div v-show="female_2pcs_suit_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female 2 Pcs Suit Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_2pcs_suit_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ female_2pcs_suit_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_2pcs_suit_hanging_white =
                  lastPrice.female_2pcs_suit_hanging_white *
                  quan_female_2pcs_suit_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_2pcs_suit_hanging_white != 0" />
        <div v-show="female_3pcs_suit_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Female 3 Pcs Suit Hanging-Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_3pcs_suit_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ female_3pcs_suit_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_3pcs_suit_hanging_colored =
                  lastPrice.female_3pcs_suit_hanging_colored *
                  quan_female_3pcs_suit_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_3pcs_suit_hanging_colored != 0" />
        <div v-show="female_3pcs_suit_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female 3 Pcs Suit Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_3pcs_suit_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ female_3pcs_suit_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (toal_female_3pcs_suit_hanging_white =
                  lastPrice.female_3pcs_suit_hanging_white *
                  quan_female_3pcs_suit_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_3pcs_suit_hanging_white != 0" />
        <div v-show="male_jacket_only_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Male Jacket Only Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_jacket_only_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ male_jacket_only_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_jacket_only_colored =
                  lastPrice.male_jacket_only_colored * male_jacket_only_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_jacket_only_colored != 0" />
        <div v-show="male_jacket_only_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Male Jacket Only White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_jacket_only_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ male_jacket_only_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_jacket_only_white =
                  lastPrice.male_jacket_only_white * male_jacket_only_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_jacket_only_white != 0" />
        <div v-show="female_jacket_only_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female Jacket Only Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_jacket_only_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ female_jacket_only_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_jacket_only_colored =
                  lastPrice.female_jacket_only_colored *
                  female_jacket_only_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_jacket_only_colored != 0" />
        <div v-show="female_jacket_only_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female Jacket Only White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_jacket_only_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ female_jacket_only_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_jacket_only_white =
                  lastPrice.female_jacket_only_white * female_jacket_only_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_jacket_only_white != 0" />
        <div
          v-show="wedding_gown_small_and_little_accessories_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Wedding Gown Small With Little Accessories White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.wedding_gown_small_and_little_accessories_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ wedding_gown_small_and_little_accessories_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_wedding_gown_small_and_little_accessories_white =
                  lastPrice.wedding_gown_small_and_little_accessories_white *
                  wedding_gown_small_and_little_accessories_white)
              }}
            </p>
          </div>
        </div>
        <q-separator
          v-show="wedding_gown_small_and_little_accessories_white != 0"
        />
        <div
          v-show="wedding_gown_big_and_plenty_accessories_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Wedding Gown Big With Plenty Accessories White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.wedding_gown_big_and_plenty_accessories_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ wedding_gown_big_and_plenty_accessories_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_wedding_gown_big_and_plenty_accessories_white =
                  lastPrice.wedding_gown_big_and_plenty_accessories_white *
                  wedding_gown_big_and_plenty_accessories_white)
              }}
            </p>
          </div>
        </div>
        <q-separator
          v-show="wedding_gown_big_and_plenty_accessories_white != 0"
        />
        <div v-show="Kids_blouse_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Kids Blouse Folding-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.Kids_blouse_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ Kids_blouse_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_Kids_blouse_folding_colored =
                  lastPrice.Kids_blouse_folding_colored *
                  Kids_blouse_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="Kids_blouse_folding_colored != 0" />
        <div v-show="Kids_blouse_hanging_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Kids Blouse Hanging-Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.Kids_blouse_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ Kids_blouse_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_Kids_blouse_hanging_colored =
                  lastPrice.Kids_blouse_hanging_colored *
                  Kids_blouse_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="Kids_blouse_hanging_colored != 0" />
        <div v-show="Kids_blouse_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Kids Blouse Folding-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.Kids_blouse_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ Kids_blouse_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_Kids_blouse_folding_white =
                  lastPrice.Kids_blouse_folding_white *
                  Kids_blouse_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="Kids_blouse_folding_white != 0" />
        <div v-show="Kids_blouse_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Kids Blouse Hanging-White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.Kids_blouse_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ Kids_blouse_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_Kids_blouse_hanging_white =
                  lastPrice.Kids_blouse_hanging_white *
                  Kids_blouse_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="Kids_blouse_hanging_white != 0" />
        <div v-show="jalamia_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Jalamia Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.jalamia_colored }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ jalamia_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_jalamia_colored =
                  lastPrice.jalamia_colored * jalamia_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="jalamia_colored != 0" />
        <div v-show="jalamia_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Jalamia White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.jalamia_white }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ jalamia_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_jalamia_white = lastPrice.jalamia_white * jalamia_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="jalamia_white != 0" />
        <div v-show="camisole_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Camisole Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.camisole_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ camisole_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_camisole_colored =
                  lastPrice.camisole_colored * camisole_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="camisole_colored != 0" />
        <div v-show="camisole_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Camisole White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.camisole_white }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ camisole_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_camisole_white =
                  lastPrice.camisole_white * camisole_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="camisole_white != 0" />
        <div v-show="wrapper_buba_scarf_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Wrapper, Buba And Scarf Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.wrapper_buba_scarf_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ wrapper_buba_scarf_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_wrapper_buba_scarf_colored =
                  lastPrice.wrapper_buba_scarf_colored *
                  wrapper_buba_scarf_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="wrapper_buba_scarf_colored != 0" />
        <div v-show="wrapper_buba_scarf_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Wrapper, Buba And Scarf White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.wrapper_buba_scarf_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ wrapper_buba_scarf_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_wrapper_buba_scarf_white =
                  lastPrice.wrapper_buba_scarf_white * wrapper_buba_scarf_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="wrapper_buba_scarf_white != 0" />
        <div v-show="wrapper_buba_no_scarf_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Wrapper, Buba And No Scarf Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.wrapper_buba_no_scarf_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ wrapper_buba_no_scarf_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_wrapper_buba_no_scarf_colored =
                  lastPrice.wrapper_buba_no_scarf_colored *
                  wrapper_buba_no_scarf_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="wrapper_buba_no_scarf_colored != 0" />
        <div v-show="wrapper_buba_no_scarf_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Wrapper, Buba And No Scarf White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.wrapper_buba_no_scarf_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ wrapper_buba_no_scarf_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_wrapper_buba_no_scarf_white =
                  lastPrice.wrapper_buba_no_scarf_white *
                  wrapper_buba_no_scarf_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="wrapper_buba_no_scarf_white != 0" />
        <div v-show="wrapper_only_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Wrapper Only Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.wrapper_only_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ wrapper_only_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_wrapper_only_colored =
                  lastPrice.wrapper_only_colored * wrapper_only_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="wrapper_only_colored != 0" />
        <div v-show="wrapper_only_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Wrapper Only White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.wrapper_only_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ wrapper_only_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_wrapper_only_white =
                  lastPrice.wrapper_only_white * wrapper_only_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="wrapper_only_white != 0" />
        <div
          v-show="two_wrapper_scarf_or_no_scarf_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Two Wrapper Scarf/No-Scarf Only Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.two_wrapper_scarf_or_no_scarf_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ two_wrapper_scarf_or_no_scarf_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_two_wrapper_scarf_or_no_scarf_colored =
                  lastPrice.two_wrapper_scarf_or_no_scarf_colored *
                  two_wrapper_scarf_or_no_scarf_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="two_wrapper_scarf_or_no_scarf_colored != 0" />
        <div
          v-show="two_wrapper_scarf_or_no_scarf_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Two Wrapper Scarf/No-Scarf White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.two_wrapper_scarf_or_no_scarf_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ two_wrapper_scarf_or_no_scarf_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_two_wrapper_scarf_or_no_scarf_white =
                  lastPrice.two_wrapper_scarf_or_no_scarf_white *
                  two_wrapper_scarf_or_no_scarf_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="two_wrapper_scarf_or_no_scarf_white != 0" />
        <div v-show="aso_oke_agbada_and_cap_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Aso-Oke Agbada and Cap 2pcs Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.aso_oke_agbada_and_cap_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ aso_oke_agbada_and_cap_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_aso_oke_agbada_and_cap_colored =
                  lastPrice.aso_oke_agbada_and_cap_colored *
                  quan_aso_oke_agbada_and_cap_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="aso_oke_agbada_and_cap_colored != 0" />
        <div
          v-show="male_aso_oke_and_cap_3pcs_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Aso-Oke Agbada, Sokoto and Cap 3 Pcs Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_aso_oke_and_cap_3pcs_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ male_aso_oke_and_cap_3pcs_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_aso_oke_and_cap_3pcs_colored =
                  lastPrice.male_aso_oke_and_cap_3pcs_colored *
                  quan_male_aso_oke_and_cap_3pcs_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_aso_oke_and_cap_3pcs_colored != 0" />
        <div
          v-show="aso_oke_wrapper_buba_gele_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Aso-Oke Wrapper, Buba and Gele 3pcs Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.aso_oke_wrapper_buba_gele_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ aso_oke_wrapper_buba_gele_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_aso_oke_wrapper_buba_gele_colored =
                  lastPrice.aso_oke_wrapper_buba_gele_colored *
                  quan_aso_oke_wrapper_buba_gele_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="aso_oke_wrapper_buba_gele_colored != 0" />
        <div v-show="aso_oke_wrapper_gele_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Aso-Oke Wrapper and Gele 2pcs Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.aso_oke_wrapper_gele_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ aso_oke_wrapper_gele_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_aso_oke_wrapper_gele_colored =
                  lastPrice.aso_oke_wrapper_gele_colored *
                  quan_aso_oke_wrapper_gele_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="aso_oke_wrapper_gele_colored != 0" />
        <div
          v-show="aso_oke_wrapper_gele_ipele_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Aso-Oke Wrapper, Gele and Ipele 3pcs Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.aso_oke_wrapper_gele_ipele_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ aso_oke_wrapper_gele_ipele_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_aso_oke_wrapper_gele_ipele_colored =
                  lastPrice.aso_oke_wrapper_gele_ipele_colored *
                  quan_aso_oke_wrapper_gele_ipele_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="aso_oke_wrapper_gele_ipele_colored != 0" />
        <div v-show="aso_oke_wrapper_gele_ipele_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Aso-Oke Wrapper, Gele and Ipele 3pcs White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.aso_oke_wrapper_gele_ipele_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ aso_oke_wrapper_gele_ipele_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_aso_oke_wrapper_gele_ipele_white =
                  lastPrice.aso_oke_wrapper_gele_ipele_white *
                  quan_aso_oke_wrapper_gele_ipele_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="aso_oke_wrapper_gele_ipele_white != 0" />
        <div v-show="aso_oke_headtie_ipele_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Aso-Oke Head-Tie Ipele 2pcs White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.aso_oke_headtie_ipele_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ aso_oke_headtie_ipele_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_aso_oke_headtie_ipele_colored =
                  lastPrice.aso_oke_headtie_ipele_colored *
                  quan_aso_oke_headtie_ipele_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="aso_oke_headtie_ipele_colored != 0" />
        <div v-show="male_complete_aso_oke_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Complete Male Aso-oke White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_complete_aso_oke_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ male_complete_aso_oke_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_complete_aso_oke_white =
                  lastPrice.male_complete_aso_oke_white *
                  quan_male_complete_aso_oke_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_complete_aso_oke_white != 0" />
        <div v-show="female_complete_aso_oke_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Complete Female Aso-oke White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_complete_aso_oke_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ female_complete_aso_oke_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_complete_aso_oke_white =
                  lastPrice.female_complete_aso_oke_white *
                  quan_female_complete_aso_oke_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_complete_aso_oke_white != 0" />
        <div v-show="female_inner_wear_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female Inner-Wear Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_inner_wear_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ female_inner_wear_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_inner_wear_colored =
                  lastPrice.female_inner_wear_colored *
                  female_inner_wear_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_inner_wear_colored != 0" />
        <div v-show="female_inner_wear_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female Inner-Wear White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_inner_wear_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ female_inner_wear_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_inner_wear_white =
                  lastPrice.female_inner_wear_white * female_inner_wear_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_inner_wear_white != 0" />
        <div v-show="head_tie_gele_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Head-Tie/Gele Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.head_tie_gele_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ head_tie_gele_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_head_tie_gele_colored =
                  lastPrice.head_tie_gele_colored * head_tie_gele_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="head_tie_gele_colored != 0" />
        <div v-show="head_tie_gele_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Head-Tie/Gele White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.head_tie_gele_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ head_tie_gele_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_head_tie_gele_white =
                  lastPrice.head_tie_gele_white * head_tie_gele_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="head_tie_gele_white != 0" />
        <div v-show="gown_children_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Gown Children Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.gown_children_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ gown_children_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_gown_children_colored =
                  lastPrice.gown_children_colored * gown_children_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="gown_children_colored != 0" />
        <div v-show="gown_children_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Gown Children White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.gown_children_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ gown_children_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_gown_children_white =
                  lastPrice.gown_children_white * gown_children_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="gown_children_white != 0" />
        <div
          v-show="gown_english_adult_folding_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Gown English Adult Folding Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.gown_english_adult_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ gown_english_adult_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_gown_english_adult_folding_colored =
                  lastPrice.gown_english_adult_folding_colored *
                  gown_english_adult_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="gown_english_adult_folding_colored != 0" />
        <div v-show="gown_english_adult_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Gown English Adult Folding White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.gown_english_adult_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ gown_english_adult_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_gown_english_adult_folding_white =
                  lastPrice.gown_english_adult_folding_white *
                  gown_english_adult_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="gown_english_adult_folding_white != 0" />
        <div
          v-show="gown_english_adult_hanging_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Gown English Adult Hanging Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.gown_english_adult_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ gown_english_adult_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_gown_english_adult_hanging_colored =
                  lastPrice.gown_english_adult_hanging_colored *
                  gown_english_adult_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="gown_english_adult_hanging_colored != 0" />
        <div v-show="gown_english_adult_hanging_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Gown English Adult Hanging White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.gown_english_adult_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ gown_english_adult_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_gown_english_adult_hanging_white =
                  lastPrice.gown_english_adult_hanging_white *
                  gown_english_adult_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="gown_english_adult_hanging_white != 0" />
        <div v-show="gown_native_folding_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Gown Native Folding Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.gown_native_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ gown_native_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_gown_native_folding_colored =
                  lastPrice.gown_native_folding_colored *
                  gown_native_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="gown_native_folding_colored != 0" />
        <div v-show="gown_native_folding_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Gown Native Folding White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.gown_native_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ gown_native_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_gown_native_folding_white =
                  lastPrice.gown_native_folding_white *
                  gown_native_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="gown_native_folding_white != 0" />
        <div v-show="adult_white_garment_folding_with_cap != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Adult White Garment With Cap Folding</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.adult_white_garment_folding_with_cap }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ adult_white_garment_folding_with_cap }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_adult_white_garment_folding_with_cap =
                  lastPrice.adult_white_garment_folding_with_cap *
                  adult_white_garment_folding_with_cap)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="adult_white_garment_folding_with_cap != 0" />
        <div v-show="adult_white_garment_folding_without_cap != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Adult White Garment Without Cap Folding</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.adult_white_garment_folding_without_cap }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ adult_white_garment_folding_without_cap }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_adult_white_garment_folding_without_cap =
                  lastPrice.adult_white_garment_folding_without_cap *
                  adult_white_garment_folding_without_cap)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="adult_white_garment_folding_without_cap != 0" />
        <div v-show="adult_white_garment_hanging_with_cap != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Adult White Garment With Cap Hanging</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.adult_white_garment_hanging_with_cap }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ adult_white_garment_hanging_with_cap }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_adult_white_garment_hanging_with_cap =
                  lastPrice.adult_white_garment_hanging_with_cap *
                  adult_white_garment_hanging_with_cap)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="adult_white_garment_hanging_with_cap != 0" />
        <div v-show="adult_white_garment_hanging_without_cap != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Adult White Garment Without Cap Hanging</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.adult_white_garment_hanging_without_cap }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ adult_white_garment_hanging_without_cap }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_adult_white_garment_hanging_without_cap =
                  lastPrice.adult_white_garment_hanging_without_cap *
                  adult_white_garment_hanging_without_cap)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="adult_white_garment_hanging_without_cap != 0" />
        <div v-show="children_white_garment_folding_with_cap != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Children White Garment With Cap Folding</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.children_white_garment_folding_with_cap }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ children_white_garment_folding_with_cap }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_children_white_garment_folding_with_cap =
                  lastPrice.children_white_garment_folding_with_cap *
                  children_white_garment_folding_with_cap)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="children_white_garment_folding_with_cap != 0" />
        <div v-show="children_white_garment_folding_without_cap != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Children White Garment Without Cap Folding</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.children_white_garment_folding_without_cap }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ children_white_garment_folding_without_cap }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_children_white_garment_folding_without_cap =
                  lastPrice.children_white_garment_folding_without_cap *
                  children_white_garment_folding_without_cap)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="children_white_garment_folding_without_cap != 0" />
        <div v-show="children_white_garment_hanging_with_cap != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Children White Garment With Cap Hanging</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.children_white_garment_hanging_with_cap }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ children_white_garment_hanging_with_cap }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_children_white_garment_hanging_with_cap =
                  lastPrice.children_white_garment_hanging_with_cap *
                  children_white_garment_hanging_with_cap)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="children_white_garment_hanging_with_cap != 0" />
        <div v-show="children_white_garment_hanging_without_cap != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Children White Garment Without Cap Hanging</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.children_white_garment_hanging_without_cap }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ children_white_garment_hanging_without_cap }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_children_white_garment_hanging_without_cap =
                  lastPrice.children_white_garment_hanging_without_cap *
                  children_white_garment_hanging_without_cap)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="children_white_garment_hanging_without_cap != 0" />
        <div
          v-show="skirt_and_blouse_english_hanging_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Skirt and Blouse English 2pcs Hanging Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.skirt_and_blouse_english_hanging_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ skirt_and_blouse_english_hanging_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_skirt_and_blouse_english_hanging_colored =
                  lastPrice.skirt_and_blouse_english_hanging_colored *
                  quan_skirt_and_blouse_english_hanging_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="skirt_and_blouse_english_hanging_colored != 0" />
        <div
          v-show="skirt_and_blouse_english_hanging_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Skirt and Blouse English 2pcs Hanging White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.skirt_and_blouse_english_hanging_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ skirt_and_blouse_english_hanging_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_skirt_and_blouse_english_hanging_white =
                  lastPrice.skirt_and_blouse_english_hanging_white *
                  quan_skirt_and_blouse_english_hanging_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="skirt_and_blouse_english_hanging_white != 0" />
        <div
          v-show="skirt_and_blouse_native_folding_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Skirt and Blouse Native 2pcs Folding Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.skirt_and_blouse_native_folding_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ skirt_and_blouse_native_folding_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_skirt_and_blouse_native_folding_colored =
                  lastPrice.skirt_and_blouse_native_folding_colored *
                  quan_skirt_and_blouse_native_folding_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="skirt_and_blouse_native_folding_colored != 0" />
        <div
          v-show="skirt_and_blouse_native_folding_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Skirt and Blouse Native 2pcs Folding White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.skirt_and_blouse_native_folding_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ skirt_and_blouse_native_folding_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_skirt_and_blouse_native_folding_white =
                  lastPrice.skirt_and_blouse_native_folding_white *
                  quan_skirt_and_blouse_native_folding_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="skirt_and_blouse_native_folding_white != 0" />
        <div
          v-show="female_native_buba_and_trouser_colored != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Female Native Buba and Trouser 2pcs Colored
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price:
              {{ lastPrice.female_native_buba_and_trouser_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ female_native_buba_and_trouser_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_native_buba_and_trouser_colored =
                  lastPrice.female_native_buba_and_trouser_colored *
                  quan_female_native_buba_and_trouser_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_native_buba_and_trouser_colored != 0" />
        <div
          v-show="female_native_buba_and_trouser_white != 0"
          class="row q-pt-lg"
        >
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">
              Female Native Buba and Trouser 2pcs White
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_native_buba_and_trouser_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity:
            {{ female_native_buba_and_trouser_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_native_buba_and_trouser_white =
                  lastPrice.female_native_buba_and_trouser_white *
                  quan_female_native_buba_and_trouser_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_native_buba_and_trouser_white != 0" />
        <div v-show="male_cap_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Male Cap Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.male_cap_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ male_cap_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_cap_colored =
                  lastPrice.male_cap_colored * male_cap_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_cap_colored != 0" />
        <div v-show="male_cap_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Male Cap White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.male_cap_white }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ male_cap_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_male_cap_white =
                  lastPrice.male_cap_white * male_cap_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="male_cap_white != 0" />
        <div v-show="female_cap_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female Cap Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_cap_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ female_cap_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_cap_colored =
                  lastPrice.female_cap_colored * female_cap_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_cap_colored != 0" />
        <div v-show="female_cap_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Female Cap White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.female_cap_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ female_cap_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_female_cap_white =
                  lastPrice.female_cap_white * female_cap_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="female_cap_white != 0" />
        <div v-show="turban_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Turban Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.turban_colored }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ turban_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_turban_colored =
                  lastPrice.turban_colored * turban_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="turban_colored != 0" />
        <div v-show="turban_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Turban White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.turban_white }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ turban_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{ (total_turban_white = lastPrice.turban_white * turban_white) }}
            </p>
          </div>
        </div>
        <q-separator v-show="turban_white != 0" />
        <div v-show="sweater_small_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Sweater Small Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.sweater_small_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ sweater_small_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_sweater_small_colored =
                  lastPrice.sweater_small_colored * sweater_small_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="sweater_small_colored != 0" />
        <div v-show="sweater_small_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Sweater Small White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.sweater_small_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ sweater_small_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_sweater_small_white =
                  lastPrice.sweater_small_white * sweater_small_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="sweater_small_white != 0" />
        <div v-show="sweater_normal_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Sweater Normal Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.sweater_normal_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ sweater_normal_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_sweater_normal_colored =
                  lastPrice.sweater_normal_colored * sweater_normal_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="sweater_normal_colored != 0" />
        <div v-show="sweater_normal_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Sweater Normal White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.sweater_normal_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ sweater_normal_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_sweater_normal_white =
                  lastPrice.sweater_normal_white * sweater_normal_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="sweater_normal_white != 0" />
        <div v-show="sweater_big_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Sweater Big Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.sweater_big_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ sweater_big_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_sweater_big_colored =
                  lastPrice.sweater_big_colored * sweater_big_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="sweater_big_colored != 0" />
        <div v-show="sweater_big_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Sweater Big White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.sweater_big_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ sweater_big_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_sweater_big_white =
                  lastPrice.sweater_big_white * sweater_big_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="sweater_big_white != 0" />
        <div v-show="towel_small_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Towel Small Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.towel_small_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ towel_small_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_towel_small_colored =
                  lastPrice.towel_small_colored * towel_small_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="towel_small_colored != 0" />
        <div v-show="towel_small_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Towel Small White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.towel_small_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ towel_small_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_towel_small_white =
                  lastPrice.towel_small_white * towel_small_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="towel_small_white != 0" />
        <div v-show="towel_normal_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Towel Normal Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.towel_normal_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ towel_normal_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_towel_normal_colored =
                  lastPrice.towel_normal_colored * towel_normal_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="towel_normal_colored != 0" />
        <div v-show="towel_normal_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Towel Normal White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.towel_normal_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ towel_normal_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_towel_normal_white =
                  lastPrice.towel_normal_white * towel_normal_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="towel_normal_white != 0" />
        <div v-show="towel_big_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Towel Big Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.towel_big_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ towel_big_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_towel_big_colored =
                  lastPrice.towel_big_colored * towel_big_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="towel_big_colored != 0" />
        <div v-show="towel_big_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Towel Big White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.towel_big_white }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ towel_big_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_towel_big_white =
                  lastPrice.towel_big_white * towel_big_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="towel_big_white != 0" />
        <div v-show="bed_spread_normal_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Bed-Spread Normal Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.bed_spread_normal_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ bed_spread_normal_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_bed_spread_normal_colored =
                  lastPrice.bed_spread_normal_colored *
                  bed_spread_normal_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="bed_spread_normal_colored != 0" />
        <div v-show="bed_spread_normal_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Bed-Spread Normal White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.bed_spread_normal_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ bed_spread_normal_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_bed_spread_normal_white =
                  lastPrice.bed_spread_normal_white * bed_spread_normal_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="bed_spread_normal_white != 0" />
        <div v-show="bed_spread_big_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Bed-Spread Big Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.bed_spread_big_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ bed_spread_big_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_bed_spread_big_colored =
                  lastPrice.bed_spread_big_colored * bed_spread_big_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="bed_spread_big_colored != 0" />
        <div v-show="bed_spread_big_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Bed-Spread Big White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.bed_spread_big_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ bed_spread_big_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_bed_spread_big_white =
                  lastPrice.bed_spread_big_white * bed_spread_big_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="bed_spread_big_white != 0" />
        <div v-show="bed_spread_double_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Bed-Spread Double Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.bed_spread_double_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ bed_spread_double_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_bed_spread_double_colored =
                  lastPrice.bed_spread_double_colored *
                  bed_spread_double_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="bed_spread_double_colored != 0" />
        <div v-show="bed_spread_double_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Bed-Spread Double White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.bed_spread_double_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ bed_spread_double_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_bed_spread_double_white =
                  lastPrice.bed_spread_double_white * bed_spread_double_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="bed_spread_double_white != 0" />
        <div v-show="duvet_normal_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Duvet Normal Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.duvet_normal_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ duvet_normal_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_duvet_normal_colored =
                  lastPrice.duvet_normal_colored * duvet_normal_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="duvet_normal_colored != 0" />
        <div v-show="duvet_normal_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Duvet Normal White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.duvet_normal_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ duvet_normal_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_duvet_normal_white =
                  lastPrice.duvet_normal_white * duvet_normal_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="duvet_normal_white != 0" />
        <div v-show="duvet_big_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Duvet Big Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.duvet_big_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ duvet_big_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_duvet_big_colored =
                  lastPrice.duvet_big_colored * duvet_big_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="duvet_big_colored != 0" />
        <div v-show="duvet_big_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Duvet Big White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.duvet_big_white }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ duvet_big_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_duvet_big_white =
                  lastPrice.duvet_big_white * duvet_big_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="duvet_big_white != 0" />
        <div v-show="curtain_normal_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Curtain Normal Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.curtain_normal_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ curtain_normal_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_curtain_normal_colored =
                  lastPrice.curtain_normal_colored * curtain_normal_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="curtain_normal_colored != 0" />
        <div v-show="curtain_big_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Curtain Big Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.curtain_big_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ curtain_big_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_curtain_big_colored =
                  lastPrice.curtain_big_colored * curtain_big_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="curtain_big_colored != 0" />
        <div v-show="curtain_very_big_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Curtain Very Big Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.curtain_very_big_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ curtain_very_big_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_curtain_very_big_colored =
                  lastPrice.curtain_very_big_colored * curtain_very_big_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="curtain_very_big_colored != 0" />
        <div v-show="pyjamas_small_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Pyjamas Small Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.pyjamas_small_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ pyjamas_small_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_pyjamas_small_colored =
                  lastPrice.pyjamas_small_colored * pyjamas_small_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="pyjamas_small_colored != 0" />
        <div v-show="pyjamas_small_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Pyjamas Small White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.pyjamas_small_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ pyjamas_small_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_pyjamas_small_white =
                  lastPrice.pyjamas_small_white * pyjamas_small_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="pyjamas_small_white != 0" />
        <div v-show="pyjamas_big_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Pyjamas Big Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.pyjamas_big_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ pyjamas_big_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_pyjamas_big_colored =
                  lastPrice.pyjamas_big_colored * pyjamas_big_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="pyjamas_big_colored != 0" />
        <div v-show="pyjamas_big_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Pyjamas Big White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.pyjamas_big_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ pyjamas_big_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_pyjamas_big_white =
                  lastPrice.pyjamas_big_white * pyjamas_big_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="pyjamas_big_white != 0" />
        <div v-show="blanket_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Blanket Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">Price: {{ lastPrice.blanket_colored }}</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ blanket_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_blanket_colored =
                  lastPrice.blanket_colored * blanket_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="blanket_colored != 0" />
        <div v-show="pillow_cases_colored != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Pillow Cases Colored</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.pillow_cases_colored }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ pillow_cases_colored }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_pillow_cases_colored =
                  lastPrice.pillow_cases_colored * pillow_cases_colored)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="pillow_cases_colored != 0" />
        <div v-show="pillow_cases_white != 0" class="row q-pt-lg">
          <div class="col-12 col-md-6 q-pl-md">
            <p class="text-h6 text-primary">Pillow Cases White</p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Price: {{ lastPrice.pillow_cases_white }}
            </p>
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            Quantity: {{ pillow_cases_white }}
          </div>
          <div class="col-12 col-md-2 q-pl-md">
            <p class="text-subtitle1">
              Total: ₦
              {{
                (total_pillow_cases_white =
                  lastPrice.pillow_cases_white * pillow_cases_white)
              }}
            </p>
          </div>
        </div>
        <q-separator v-show="pillow_cases_white != 0" />
      </div>
      <div class="row q-pt-md">
        <div class="col-12 col-md-12 q-pl-md">
          <p class="text-h6">Comment:</p>
          {{ comment_section }}
        </div>
      </div>
      <q-separator />
      <div class="row q-pt-md">
        <div class="col-12 col-md-6 q-pl-md">
          <p class="text-h6">Collected Date:</p>
          {{ collected_on_date }}
        </div>
        <div class="col-12 col-md-6 q-pl-md">
          <p class="text-h6">Collected Time:</p>
          {{ collected_on_time }}
        </div>
      </div>
      <div class="row q-pt-md">
        <div class="col-12 col-md-2 q-pl-md">
          <p class="text-h6">Collection Date:</p>
        </div>
        <div class="col-12 col-md-10 q-pl-md">
          {{ collection_date }}
        </div>
      </div>
      <div class="row q-pt-md">
        <div class="col-12 col-md-4 q-pl-md">
          <p class="text-h6">Discount:</p>
          {{ discount }}%
        </div>
        <div class="col-12 col-md-4 q-pl-md">
          <p class="text-h6">Deposit:</p>
          ₦{{ deposit }}
        </div>
        <div class="col-12 col-md-4 q-pl-md">
          <p class="text-h6">Deposit Type:</p>
          {{ deposit_type }}
        </div>
      </div>
      <q-separator />
      <div class="row q-pt-md">
        <div class="text-center full-width q-pl-md">
          <p class="text-h4">
            Final Total: ₦{{ total_final_amount }}
            <!-- {{
              (total_final_amount =
                Number(total_male_native_2_pcs) +
                Number(total_male_native_2_pcs_hanging) +
                Number(total_complete_male_agbada) +
                Number(total_native_trouser_only) +
                Number(total_native_top_only) +
                Number(total_male_native_3_pcs_notAgbada_hanging) +
                Number(total_male_native_3_pcs_notAgbada) +
                Number(total_female_jacket_hanging) +
                Number(total_male_agbada_alone) +
                Number(total_blouse) +
                Number(total_blouse_hanging) +
                Number(total_female_shirt) +
                Number(total_pyjamas_small) +
                Number(total_pyjamas_big) +
                Number(total_duvet) +
                Number(total_towel_big) +
                Number(total_sweater_big) +
                Number(total_boxer) +
                Number(total_skirt_and_blouse_english) +
                Number(total_female_trouser_jeans_hanging) +
                Number(total_female_trouser_jeans) +
                Number(total_female_shirt_hanging) +
                Number(total_curtain_normal) +
                Number(total_curtain_big) +
                Number(total_curtain_very_big) +
                Number(total_skirt_and_blouse_english_hanging) +
                Number(total_wrapper_buba_gele) +
                Number(total_female_native_buba_trouser) +
                Number(total_gown_english_hanging) +
                Number(total_gown_native) +
                Number(total_bed_spread_normal) +
                Number(total_bed_spread_big) +
                Number(total_skirt_and_blouse_native) +
                Number(total_aso_oke_wrapper_buba_gele) +
                Number(total_male_complete_aso_oke) +
                Number(total_male_medium_t_shirt_or_polo) +
                Number(total_male_big_t_shirt_or_polo) +
                Number(total_towel_normal) +
                Number(total_male_t_shirt_or_polo_hanging) +
                Number(total_shirt_normal) +
                Number(total_shirt_normal_hanging) +
                Number(total_shirt_big) +
                Number(total_shirt_big_hanging) +
                Number(total_plain_trouser) +
                Number(total_plain_trouser_hanging) +
                Number(total_jeans_chinos_trouser) +
                Number(total_jeans_chinos_trouser_hanging) +
                Number(total_waist_coat_hanging) +
                Number(total_tie) +
                Number(total_shorts) +
                Number(total_shorts_hanging) +
                Number(total_singlet) +
                Number(total_sweater_normal) +
                Number(total_male_three_pcs_suit_hanging) +
                Number(total_female_two_pcs_suit_hanging) +
                Number(total_male_two_pcs_suit_hanging) +
                Number(total_female_three_pcs_suit_hanging) +
                Number(total_male_jacket_hanging) +
                Number(total_asooke_head_tie) +
                Number(total_jalamia) +
                Number(total_camisole) +
                Number(total_wrapper_only) +
                Number(total_female_inner_wear) +
                Number(total_head_tie_gele) +
                Number(total_small_wedding_gown_hanging) +
                Number(total_big_wedding_gown_hanging))
            }} -->
          </p>
        </div>
      </div>

      <div class="row q-pt-lg q-pb-md">
        <div class="text-center full-width q-pl-md">
          <q-btn
            :loading="isloading"
            @click="onSubmit"
            label="Submit Intake"
            type="submit"
            color="primary"
            style="width: 260px"
          />
        </div>
      </div>
    </div>
    <!-- </div> -->
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
const formData = ref({});
const useStore = useUserStore();
const $route = useRoute();
const $router = useRouter();
const isloading = ref(false);
const left = ref(false);
const main = ref(true);
const summary = ref(false);
const lastPrice = ref([]);
const category = ref("4");
const today = new Date().toISOString().slice(0, 10);
// const today = new Date().toISOString().substr(0, 10);

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
const discount = ref("");
const deposit = ref(0);
const deposit_type = ref("");
const optionsDepositType = ["POS", "CASH", "BANK TRANSFER"];

const quan_male_native_2pcs_folding_colored = ref(0);
const male_native_2pcs_folding_colored = ref(0);
const total_male_native_2pcs_folding_colored = ref("");
watch(total_male_native_2pcs_folding_colored, () => {});
const quan_male_native_2pcs_hanging_colored = ref(0);
const male_native_2pcs_hanging_colored = ref(0);
const total_male_native_2pcs_hanging_colored = ref("");
watch(total_male_native_2pcs_hanging_colored, () => {});
const quan_male_native_2pcs_folding_white = ref(0);
const male_native_2pcs_folding_white = ref(0);
const total_male_native_2pcs_folding_white = ref("");
watch(total_male_native_2pcs_folding_white, () => {});
const quan_male_native_2pcs_hanging_white = ref(0);
const male_native_2pcs_hanging_white = ref(0);
const total_male_native_2pcs_hanging_white = ref("");
watch(total_male_native_2pcs_hanging_white, () => {});
const quan_male_native_3pcs_notAgbada_folding_colored = ref(0);
const male_native_3pcs_notAgbada_folding_colored = ref(0);
const total_male_native_3pcs_notAgbada_folding_colored = ref("");
watch(total_male_native_3pcs_notAgbada_folding_colored, () => {});
const quan_male_native_3pcs_notAgbada_hanging_colored = ref(0);
const male_native_3pcs_notAgbada_hanging_colored = ref(0);
const total_male_native_3pcs_notAgbada_hanging_colored = ref("");
watch(total_male_native_3pcs_notAgbada_hanging_colored, () => {});
const quan_male_native_3pcs_notAgbada_folding_white = ref(0);
const male_native_3pcs_notAgbada_folding_white = ref(0);
const total_male_native_3pcs_notAgbada_folding_white = ref("");
watch(total_male_native_3pcs_notAgbada_folding_white, () => {});
const quan_male_native_3pcs_notAgbada_hanging_white = ref(0);
const male_native_3pcs_notAgbada_hanging_white = ref(0);
const total_male_native_3pcs_notAgbada_hanging_white = ref("");
watch(total_male_native_3pcs_notAgbada_hanging_white, () => {});
const native_top_only_folding_colored = ref(0);
const total_native_top_only_folding_colored = ref("");
watch(total_native_top_only_folding_colored, () => {});
const native_top_only_hanging_colored = ref(0);
const total_native_top_only_hanging_colored = ref("");
watch(total_native_top_only_hanging_colored, () => {});
const native_top_only_folding_white = ref(0);
const total_native_top_only_folding_white = ref("");
watch(total_native_top_only_folding_white, () => {});
const native_top_only_hanging_white = ref(0);
const total_native_top_only_hanging_white = ref("");
watch(total_native_top_only_hanging_white, () => {});
const native_trouser_only_folding_colored = ref(0);
const total_native_trouser_only_folding_colored = ref("");
watch(total_native_trouser_only_folding_colored, () => {});
const native_trouser_only_hanging_colored = ref(0);
const total_native_trouser_only_hanging_colored = ref("");
watch(total_native_trouser_only_hanging_colored, () => {});
const native_trouser_only_folding_white = ref(0);
const total_native_trouser_only_folding_white = ref("");
watch(total_native_trouser_only_folding_white, () => {});
const native_trouser_only_hanging_white = ref(0);
const total_native_trouser_only_hanging_white = ref("");
watch(total_native_trouser_only_hanging_white, () => {});
const male_agbada_only_folding_colored = ref(0);
const total_male_agbada_only_folding_colored = ref("");
watch(total_male_agbada_only_folding_colored, () => {});
const male_agbada_only_hanging_colored = ref(0);
const total_male_agbada_only_hanging_colored = ref("");
watch(total_male_agbada_only_hanging_colored, () => {});
const male_agbada_only_folding_white = ref(0);
const total_male_agbada_only_folding_white = ref("");
watch(total_male_agbada_only_folding_white, () => {});
const male_agbada_only_hanging_white = ref(0);
const total_male_agbada_only_hanging_white = ref("");
watch(total_male_agbada_only_hanging_white, () => {});
const quan_complete_male_agbada_3pcs_Folding_colored = ref(0);
const complete_male_agbada_3pcs_Folding_colored = ref(0);
const total_complete_male_agbada_3pcs_Folding_colored = ref("");
watch(total_complete_male_agbada_3pcs_Folding_colored, () => {});
const quan_complete_male_agbada_3pcs_Hanging_colored = ref(0);
const complete_male_agbada_3pcs_Hanging_colored = ref(0);
const total_complete_male_agbada_3pcs_Hanging_colored = ref("");
watch(total_complete_male_agbada_3pcs_Hanging_colored, () => {});
const quan_complete_male_agbada_3pcs_Folding_white = ref(0);
const complete_male_agbada_3pcs_Folding_white = ref(0);
const total_complete_male_agbada_3pcs_Folding_white = ref("");
watch(total_complete_male_agbada_3pcs_Folding_white, () => {});
const quan_complete_male_agbada_3pcs_Hanging_white = ref(0);
const complete_male_agbada_3pcs_Hanging_white = ref(0);
const total_complete_male_agbada_3pcs_Hanging_white = ref("");
watch(total_complete_male_agbada_3pcs_Hanging_white, () => {});
const normal_shirt_folding_colored = ref(0);
const total_normal_shirt_folding_colored = ref("");
watch(total_normal_shirt_folding_colored, () => {});
const normal_shirt_hanging_colored = ref(0);
const total_normal_shirt_hanging_colored = ref("");
watch(total_normal_shirt_hanging_colored, () => {});
const normal_shirt_folding_white = ref(0);
const total_normal_shirt_folding_white = ref("");
watch(total_normal_shirt_folding_white, () => {});
const normal_shirt_hanging_white = ref(0);
const total_normal_shirt_hanging_white = ref("");
watch(total_normal_shirt_hanging_white, () => {});
//1st page
const blouse_folding_colored = ref(0);
const total_blouse_folding_colored = ref("");
watch(total_blouse_folding_colored, () => {});
const blouse_hanging_colored = ref(0);
const total_blouse_hanging_colored = ref("");
watch(total_blouse_hanging_colored, () => {});
const blouse_folding_white = ref(0);
const total_blouse_folding_white = ref("");
watch(total_blouse_folding_white, () => {});
const blouse_hanging_white = ref(0);
const total_blouse_hanging_white = ref("");
watch(total_blouse_hanging_white, () => {});
const blouse_x_large_folding_colored = ref(0);
const total_blouse_x_large_folding_colored = ref("");
watch(total_blouse_x_large_folding_colored, () => {});
const blouse_x_large_hanging_colored = ref(0);
const total_blouse_x_large_hanging_colored = ref("");
watch(total_blouse_x_large_hanging_colored, () => {});
const blouse_x_large_folding_white = ref(0);
const total_blouse_x_large_folding_white = ref("");
watch(total_blouse_x_large_folding_white, () => {});
const blouse_x_large_hanging_white = ref(0);
const total_blouse_x_large_hanging_white = ref("");
watch(total_blouse_x_large_hanging_white, () => {});
const female_shirt_folding_colored = ref(0);
const total_female_shirt_folding_colored = ref("");
watch(total_female_shirt_folding_colored, () => {});
const female_shirt_hanging_colored = ref(0);
const total_female_shirt_hanging_colored = ref("");
watch(total_female_shirt_hanging_colored, () => {});
const female_shirt_folding_white = ref(0);
const total_female_shirt_folding_white = ref("");
watch(total_female_shirt_folding_white, () => {});
const female_shirt_hanging_white = ref(0);
const total_female_shirt_hanging_white = ref("");
watch(total_female_shirt_hanging_white, () => {});
const tshirt_polo_small_folding_colored = ref(0);
const total_tshirt_polo_small_folding_colored = ref("");
watch(total_tshirt_polo_small_folding_colored, () => {});
const tshirt_polo_small_hanging_colored = ref(0);
const total_tshirt_polo_small_hanging_colored = ref("");
watch(total_tshirt_polo_small_hanging_colored, () => {});
const tshirt_polo_small_folding_white = ref(0);
const total_tshirt_polo_small_folding_white = ref("");
watch(total_tshirt_polo_small_folding_white, () => {});
const tshirt_polo_small_hanging_white = ref(0);
const total_tshirt_polo_small_hanging_white = ref("");
watch(total_tshirt_polo_small_hanging_white, () => {});
const tshirt_polo_medium_folding_colored = ref(0);
const total_tshirt_polo_medium_folding_colored = ref("");
watch(total_tshirt_polo_medium_folding_colored, () => {});
const tshirt_polo_medium_hanging_colored = ref(0);
const total_tshirt_polo_medium_hanging_colored = ref("");
watch(total_tshirt_polo_medium_hanging_colored, () => {});
const tshirt_polo_medium_folding_white = ref(0);
const total_tshirt_polo_medium_folding_white = ref("");
watch(total_tshirt_polo_medium_folding_white, () => {});
const tshirt_polo_medium_hanging_white = ref(0);
const total_tshirt_polo_medium_hanging_white = ref("");
watch(total_tshirt_polo_medium_hanging_white, () => {});
const tshirt_polo_big_folding_colored = ref(0);
const total_tshirt_polo_big_folding_colored = ref("");
watch(total_tshirt_polo_big_folding_colored, () => {});
const tshirt_polo_big_hanging_colored = ref(0);
const total_tshirt_polo_big_hanging_colored = ref("");
watch(total_tshirt_polo_big_hanging_colored, () => {});
const tshirt_polo_big_folding_white = ref(0);
const total_tshirt_polo_big_folding_white = ref("");
watch(total_tshirt_polo_big_folding_white, () => {});
const tshirt_polo_big_hanging_white = ref(0);
const total_tshirt_polo_big_hanging_white = ref("");
watch(total_tshirt_polo_big_hanging_white, () => {});
const shirt_x_large_folding_colored = ref(0);
const total_shirt_x_large_folding_colored = ref("");
watch(total_shirt_x_large_folding_colored, () => {});
const shirt_x_large_hanging_colored = ref(0);
const total_shirt_x_large_hanging_colored = ref("");
watch(total_shirt_x_large_hanging_colored, () => {});
const shirt_x_large_folding_white = ref(0);
const total_shirt_x_large_folding_white = ref("");
watch(total_shirt_x_large_folding_white, () => {});
const shirt_x_large_hanging_white = ref(0);
const total_shirt_x_large_hanging_white = ref("");
watch(total_shirt_x_large_hanging_white, () => {});
//2nd page
const shirt_big_folding_colored = ref(0);
const total_shirt_big_folding_colored = ref("");
watch(total_shirt_big_folding_colored, () => {});
const shirt_big_hanging_colored = ref(0);
const total_shirt_big_hanging_colored = ref("");
watch(total_shirt_big_hanging_colored, () => {});
const shirt_big_folding_white = ref(0);
const total_shirt_big_folding_white = ref("");
watch(total_shirt_big_folding_white, () => {});
const shirt_big_hanging_white = ref(0);
const total_shirt_big_hanging_white = ref("");
watch(total_shirt_big_hanging_white, () => {});
const shirt_children_folding_colored = ref(0);
const total_shirt_children_folding_colored = ref("");
watch(total_shirt_children_folding_colored, () => {});
const shirt_children_hanging_colored = ref(0);
const total_shirt_children_hanging_colored = ref("");
watch(total_shirt_children_hanging_colored, () => {});
const shirt_children_folding_white = ref(0);
const total_shirt_children_folding_white = ref("");
watch(total_shirt_children_folding_white, () => {});
const shirt_children_hanging_white = ref(0);
const total_shirt_children_hanging_white = ref("");
watch(total_shirt_children_hanging_white, () => {});
const plain_trouser_folding_colored = ref(0);
const total_plain_trouser_folding_colored = ref("");
watch(total_plain_trouser_folding_colored, () => {});
const plain_trouser_hanging_colored = ref(0);
const total_plain_trouser_hanging_colored = ref("");
watch(total_plain_trouser_hanging_colored, () => {});
const plain_trouser_folding_white = ref(0);
const total_plain_trouser_folding_white = ref("");
watch(total_plain_trouser_folding_white, () => {});
const plain_trouser_hanging_white = ref(0);
const total_plain_trouser_hanging_white = ref("");
watch(total_plain_trouser_hanging_white, () => {});
const jeans_chinos_trouser_folding_colored = ref(0);
const total_jeans_chinos_trouser_folding_colored = ref("");
watch(total_jeans_chinos_trouser_folding_colored, () => {});
const jeans_chinos_trouser_hanging_colored = ref(0);
const total_jeans_chinos_trouser_hanging_colored = ref("");
watch(total_jeans_chinos_trouser_hanging_colored, () => {});
const jeans_chinos_trouser_folding_white = ref(0);
const total_jeans_chinos_trouser_folding_white = ref("");
watch(total_jeans_chinos_trouser_folding_white, () => {});
const jeans_chinos_trouser_hanging_white = ref(0);
const total_jeans_chinos_trouser_hanging_white = ref("");
watch(total_jeans_chinos_trouser_hanging_white, () => {});
const waist_coat_hanging_colored = ref(0);
const total_waist_coat_hanging_colored = ref("");
watch(total_waist_coat_hanging_colored, () => {});
const waist_coat_hanging_white = ref(0);
const total_waist_coat_hanging_white = ref("");
watch(total_waist_coat_hanging_white, () => {});
const tie_colored = ref(0);
const total_tie_colored = ref("");
watch(total_tie_colored, () => {});
const tie_white = ref(0);
const total_tie_white = ref("");
watch(total_tie_white, () => {});
const shorts_folding_colored = ref(0);
const total_shorts_folding_colored = ref("");
watch(total_shorts_folding_colored, () => {});
const shorts_hanging_colored = ref(0);
const total_shorts_hanging_colored = ref("");
watch(total_shorts_hanging_colored, () => {});
const shorts_folding_white = ref(0);
const total_shorts_folding_white = ref("");
watch(total_shorts_folding_white, () => {});
const shorts_hanging_white = ref(0);
const total_shorts_hanging_white = ref("");
watch(total_shorts_hanging_white, () => {});
const singlet_colored = ref(0);
const total_singlet_colored = ref("");
watch(total_singlet_colored, () => {});
const singlet_white = ref(0);
const total_singlet_white = ref("");
watch(total_singlet_white, () => {});
const boxer_colored = ref(0);
const total_boxer_colored = ref("");
watch(total_boxer_colored, () => {});
const boxer_white = ref(0);
const total_boxer_white = ref("");
watch(total_boxer_white, () => {});
//3rd page
const quan_male_2pcs_suit_hanging_colored = ref(0);
const male_2pcs_suit_hanging_colored = ref(0);
const total_male_2pcs_suit_hanging_colored = ref("");
watch(total_male_2pcs_suit_hanging_colored, () => {});
const quan_male_2pcs_suit_hanging_white = ref(0);
const male_2pcs_suit_hanging_white = ref(0);
const total_male_2pcs_suit_hanging_white = ref("");
watch(total_male_2pcs_suit_hanging_white, () => {});
const quan_male_3pcs_suit_hanging_colored = ref(0);
const male_3pcs_suit_hanging_colored = ref(0);
const total_male_3pcs_suit_hanging_colored = ref("");
watch(total_male_3pcs_suit_hanging_colored, () => {});
const quan_male_3pcs_suit_hanging_white = ref(0);
const male_3pcs_suit_hanging_white = ref(0);
const total_male_3pcs_suit_hanging_white = ref("");
watch(total_male_3pcs_suit_hanging_white, () => {});
const quan_female_2pcs_suit_hanging_colored = ref(0);
const female_2pcs_suit_hanging_colored = ref(0);
const total_female_2pcs_suit_hanging_colored = ref("");
watch(total_female_2pcs_suit_hanging_colored, () => {});
const quan_female_2pcs_suit_hanging_white = ref(0);
const female_2pcs_suit_hanging_white = ref(0);
const total_female_2pcs_suit_hanging_white = ref("");
watch(total_female_2pcs_suit_hanging_white, () => {});
const quan_female_3pcs_suit_hanging_colored = ref(0);
const female_3pcs_suit_hanging_colored = ref(0);
const total_female_3pcs_suit_hanging_colored = ref("");
watch(total_female_3pcs_suit_hanging_colored, () => {});
const quan_female_3pcs_suit_hanging_white = ref(0);
const female_3pcs_suit_hanging_white = ref(0);
const total_female_3pcs_suit_hanging_white = ref("");
watch(total_female_3pcs_suit_hanging_white, () => {});
const male_jacket_only_colored = ref(0);
const total_male_jacket_only_colored = ref("");
watch(total_male_jacket_only_colored, () => {});
const male_jacket_only_white = ref(0);
const total_male_jacket_only_white = ref("");
watch(total_male_jacket_only_white, () => {});
const female_jacket_only_colored = ref(0);
const total_female_jacket_only_colored = ref("");
watch(total_female_jacket_only_colored, () => {});
const female_jacket_only_white = ref(0);
const total_female_jacket_only_white = ref("");
watch(total_female_jacket_only_white, () => {});
const wedding_gown_small_and_little_accessories_white = ref(0);
const total_wedding_gown_small_and_little_accessories_white = ref("");
watch(total_wedding_gown_small_and_little_accessories_white, () => {});
const wedding_gown_big_and_plenty_accessories_white = ref(0);
const total_wedding_gown_big_and_plenty_accessories_white = ref("");
watch(total_wedding_gown_big_and_plenty_accessories_white, () => {});
const Kids_blouse_folding_colored = ref(0);
const total_Kids_blouse_folding_colored = ref("");
watch(total_Kids_blouse_folding_colored, () => {});
const Kids_blouse_hanging_colored = ref(0);
const total_Kids_blouse_hanging_colored = ref("");
watch(total_Kids_blouse_hanging_colored, () => {});
const Kids_blouse_folding_white = ref(0);
const total_Kids_blouse_folding_white = ref("");
watch(total_Kids_blouse_folding_white, () => {});
const Kids_blouse_hanging_white = ref(0);
const total_Kids_blouse_hanging_white = ref("");
watch(total_Kids_blouse_hanging_white, () => {});
const jalamia_colored = ref(0);
const total_jalamia_colored = ref("");
watch(total_jalamia_colored, () => {});
const jalamia_white = ref(0);
const total_jalamia_white = ref("");
watch(total_jalamia_white, () => {});
const camisole_colored = ref(0);
const total_camisole_colored = ref("");
watch(total_camisole_colored, () => {});
const camisole_white = ref(0);
const total_camisole_white = ref("");
watch(total_camisole_white, () => {});
const wrapper_buba_scarf_colored = ref(0);
const total_wrapper_buba_scarf_colored = ref("");
watch(total_wrapper_buba_scarf_colored, () => {});
const wrapper_buba_scarf_white = ref(0);
const total_wrapper_buba_scarf_white = ref("");
watch(total_wrapper_buba_scarf_white, () => {});
const wrapper_buba_no_scarf_colored = ref(0);
const total_wrapper_buba_no_scarf_colored = ref("");
watch(total_wrapper_buba_no_scarf_colored, () => {});
const wrapper_buba_no_scarf_white = ref(0);
const total_wrapper_buba_no_scarf_white = ref("");
watch(total_wrapper_buba_no_scarf_white, () => {});
//4th page
const wrapper_only_colored = ref(0);
const total_wrapper_only_colored = ref("");
watch(total_wrapper_only_colored, () => {});
const wrapper_only_white = ref(0);
const total_wrapper_only_white = ref("");
watch(total_wrapper_only_white, () => {});
const two_wrapper_scarf_or_no_scarf_colored = ref(0);
const total_two_wrapper_scarf_or_no_scarf_colored = ref("");
watch(total_two_wrapper_scarf_or_no_scarf_colored, () => {});
const two_wrapper_scarf_or_no_scarf_white = ref(0);
const total_two_wrapper_scarf_or_no_scarf_white = ref("");
watch(total_two_wrapper_scarf_or_no_scarf_white, () => {});
const quan_aso_oke_agbada_and_cap_colored = ref(0);
const aso_oke_agbada_and_cap_colored = ref(0);
const total_aso_oke_agbada_and_cap_colored = ref("");
watch(total_aso_oke_agbada_and_cap_colored, () => {});
const quan_male_aso_oke_and_cap_3pcs_colored = ref(0);
const male_aso_oke_and_cap_3pcs_colored = ref(0);
const total_male_aso_oke_and_cap_3pcs_colored = ref("");
watch(total_male_aso_oke_and_cap_3pcs_colored, () => {});
const quan_aso_oke_wrapper_buba_gele_colored = ref(0);
const aso_oke_wrapper_buba_gele_colored = ref(0);
const total_aso_oke_wrapper_buba_gele_colored = ref("");
watch(total_aso_oke_wrapper_buba_gele_colored, () => {});
const quan_aso_oke_wrapper_gele_colored = ref(0);
const aso_oke_wrapper_gele_colored = ref(0);
const total_aso_oke_wrapper_gele_colored = ref("");
watch(total_aso_oke_wrapper_gele_colored, () => {});
const quan_aso_oke_wrapper_gele_ipele_colored = ref(0);
const aso_oke_wrapper_gele_ipele_colored = ref(0);
const total_aso_oke_wrapper_gele_ipele_colored = ref("");
watch(total_aso_oke_wrapper_gele_ipele_colored, () => {});
const quan_aso_oke_wrapper_gele_ipele_white = ref(0);
const aso_oke_wrapper_gele_ipele_white = ref(0);
const total_aso_oke_wrapper_gele_ipele_white = ref("");
watch(total_aso_oke_wrapper_gele_ipele_white, () => {});
const quan_aso_oke_headtie_ipele_colored = ref(0);
const aso_oke_headtie_ipele_colored = ref(0);
const total_aso_oke_headtie_ipele_colored = ref("");
watch(total_aso_oke_headtie_ipele_colored, () => {});
const quan_male_complete_aso_oke_white = ref(0);
const male_complete_aso_oke_white = ref(0);
const total_male_complete_aso_oke_white = ref("");
watch(total_male_complete_aso_oke_white, () => {});
const quan_female_complete_aso_oke_white = ref(0);
const female_complete_aso_oke_white = ref(0);
const total_female_complete_aso_oke_white = ref("");
watch(total_female_complete_aso_oke_white, () => {});
const female_inner_wear_colored = ref(0);
const total_female_inner_wear_colored = ref("");
watch(total_female_inner_wear_colored, () => {});
const female_inner_wear_white = ref(0);
const total_female_inner_wear_white = ref("");
watch(total_female_inner_wear_white, () => {});
const head_tie_gele_colored = ref(0);
const total_head_tie_gele_colored = ref("");
watch(total_head_tie_gele_colored, () => {});
const head_tie_gele_white = ref(0);
const total_head_tie_gele_white = ref("");
watch(total_head_tie_gele_white, () => {});
const gown_children_colored = ref(0);
const total_gown_children_colored = ref("");
watch(total_gown_children_colored, () => {});
const gown_children_white = ref(0);
const total_gown_children_white = ref("");
watch(total_gown_children_white, () => {});
const gown_english_adult_folding_colored = ref(0);
const total_gown_english_adult_folding_colored = ref("");
watch(total_gown_english_adult_folding_colored, () => {});
const gown_english_adult_folding_white = ref(0);
const total_gown_english_adult_folding_white = ref("");
watch(total_gown_english_adult_folding_white, () => {});
const gown_english_adult_hanging_colored = ref(0);
const total_gown_english_adult_hanging_colored = ref("");
watch(total_gown_english_adult_hanging_colored, () => {});
const gown_english_adult_hanging_white = ref(0);
const total_gown_english_adult_hanging_white = ref("");
watch(total_gown_english_adult_hanging_white, () => {});
const gown_native_folding_colored = ref(0);
const total_gown_native_folding_colored = ref("");
watch(total_gown_native_folding_colored, () => {});
const gown_native_folding_white = ref(0);
const total_gown_native_folding_white = ref("");
watch(total_gown_native_folding_white, () => {});
const adult_white_garment_folding_with_cap = ref(0);
const total_adult_white_garment_folding_with_cap = ref("");
watch(total_adult_white_garment_folding_with_cap, () => {});
const adult_white_garment_folding_without_cap = ref(0);
const total_adult_white_garment_folding_without_cap = ref("");
watch(total_adult_white_garment_folding_without_cap, () => {});
const adult_white_garment_hanging_with_cap = ref(0);
const total_adult_white_garment_hanging_with_cap = ref("");
watch(total_adult_white_garment_hanging_with_cap, () => {});
const adult_white_garment_hanging_without_cap = ref(0);
const total_adult_white_garment_hanging_without_cap = ref("");
watch(total_adult_white_garment_hanging_without_cap, () => {});
const children_white_garment_folding_with_cap = ref(0);
const total_children_white_garment_folding_with_cap = ref("");
watch(total_children_white_garment_folding_with_cap, () => {});
const children_white_garment_folding_without_cap = ref(0);
const total_children_white_garment_folding_without_cap = ref("");
watch(total_children_white_garment_folding_without_cap, () => {});
const children_white_garment_hanging_with_cap = ref(0);
const total_children_white_garment_hanging_with_cap = ref("");
watch(total_children_white_garment_hanging_with_cap, () => {});
const children_white_garment_hanging_without_cap = ref(0);
const total_children_white_garment_hanging_without_cap = ref("");
watch(total_children_white_garment_hanging_without_cap, () => {});
//5th page
const quan_skirt_and_blouse_english_hanging_colored = ref(0);
const skirt_and_blouse_english_hanging_colored = ref(0);
const total_skirt_and_blouse_english_hanging_colored = ref("");
watch(total_skirt_and_blouse_english_hanging_colored, () => {});
const quan_skirt_and_blouse_english_hanging_white = ref(0);
const skirt_and_blouse_english_hanging_white = ref(0);
const total_skirt_and_blouse_english_hanging_white = ref("");
watch(total_skirt_and_blouse_english_hanging_white, () => {});
const quan_skirt_and_blouse_native_folding_colored = ref(0);
const skirt_and_blouse_native_folding_colored = ref(0);
const total_skirt_and_blouse_native_folding_colored = ref("");
watch(total_skirt_and_blouse_native_folding_colored, () => {});
const quan_skirt_and_blouse_native_folding_white = ref(0);
const skirt_and_blouse_native_folding_white = ref(0);
const total_skirt_and_blouse_native_folding_white = ref("");
watch(total_skirt_and_blouse_native_folding_white, () => {});
const quan_female_native_buba_and_trouser_colored = ref(0);
const female_native_buba_and_trouser_colored = ref(0);
const total_female_native_buba_and_trouser_colored = ref("");
watch(total_female_native_buba_and_trouser_colored, () => {});
const quan_female_native_buba_and_trouser_white = ref(0);
const female_native_buba_and_trouser_white = ref(0);
const total_female_native_buba_and_trouser_white = ref("");
watch(total_female_native_buba_and_trouser_white, () => {});
const male_cap_colored = ref(0);
const total_male_cap_colored = ref("");
watch(total_male_cap_colored, () => {});
const male_cap_white = ref(0);
const total_male_cap_white = ref("");
watch(total_male_cap_white, () => {});
const female_cap_colored = ref(0);
const total_female_cap_colored = ref("");
watch(total_female_cap_colored, () => {});
const female_cap_white = ref(0);
const total_female_cap_white = ref("");
watch(total_female_cap_white, () => {});
const turban_colored = ref(0);
const total_turban_colored = ref("");
watch(total_turban_colored, () => {});
const turban_white = ref(0);
const total_turban_white = ref("");
watch(total_turban_white, () => {});
const sweater_small_colored = ref(0);
const total_sweater_small_colored = ref("");
watch(total_sweater_small_colored, () => {});
const sweater_small_white = ref(0);
const total_sweater_small_white = ref("");
watch(total_sweater_small_white, () => {});
const sweater_normal_colored = ref(0);
const total_sweater_normal_colored = ref("");
watch(total_sweater_normal_colored, () => {});
const sweater_normal_white = ref(0);
const total_sweater_normal_white = ref("");
watch(total_sweater_normal_white, () => {});
const sweater_big_colored = ref(0);
const total_sweater_big_colored = ref("");
watch(total_sweater_big_colored, () => {});
const sweater_big_white = ref(0);
const total_sweater_big_white = ref("");
watch(total_sweater_big_white, () => {});
const towel_small_colored = ref(0);
const total_towel_small_colored = ref("");
watch(total_towel_small_colored, () => {});
const towel_small_white = ref(0);
const total_towel_small_white = ref("");
watch(total_towel_small_white, () => {});
const towel_normal_colored = ref(0);
const total_towel_normal_colored = ref("");
watch(total_towel_normal_colored, () => {});
const towel_normal_white = ref(0);
const total_towel_normal_white = ref("");
watch(total_towel_normal_white, () => {});
const towel_big_colored = ref(0);
const total_towel_big_colored = ref("");
watch(total_towel_big_colored, () => {});
const towel_big_white = ref(0);
const total_towel_big_white = ref("");
watch(total_towel_big_white, () => {});
const bed_spread_normal_colored = ref(0);
const total_bed_spread_normal_colored = ref("");
watch(total_bed_spread_normal_colored, () => {});
const bed_spread_normal_white = ref(0);
const total_bed_spread_normal_white = ref("");
watch(total_bed_spread_normal_white, () => {});
const bed_spread_big_colored = ref(0);
const total_bed_spread_big_colored = ref("");
watch(total_bed_spread_big_colored, () => {});
const bed_spread_big_white = ref(0);
const total_bed_spread_big_white = ref("");
watch(total_bed_spread_big_white, () => {});
//6th
const bed_spread_double_colored = ref(0);
const total_bed_spread_double_colored = ref("");
watch(total_bed_spread_double_colored, () => {});
const bed_spread_double_white = ref(0);
const total_bed_spread_double_white = ref("");
watch(total_bed_spread_double_white, () => {});
const duvet_normal_colored = ref(0);
const total_duvet_normal_colored = ref("");
watch(total_duvet_normal_colored, () => {});
const duvet_normal_white = ref(0);
const total_duvet_normal_white = ref("");
watch(total_duvet_normal_white, () => {});
const duvet_big_colored = ref(0);
const total_duvet_big_colored = ref("");
watch(total_duvet_big_colored, () => {});
const duvet_big_white = ref(0);
const total_duvet_big_white = ref("");
watch(total_duvet_big_white, () => {});
const curtain_normal_colored = ref(0);
const total_curtain_normal_colored = ref("");
watch(total_curtain_normal_colored, () => {});
const curtain_big_colored = ref(0);
const total_curtain_big_colored = ref("");
watch(total_curtain_big_colored, () => {});
const curtain_very_big_colored = ref(0);
const total_curtain_very_big_colored = ref("");
watch(total_curtain_very_big_colored, () => {});
const pyjamas_small_colored = ref(0);
const total_pyjamas_small_colored = ref("");
watch(total_pyjamas_small_colored, () => {});
const pyjamas_small_white = ref(0);
const total_pyjamas_small_white = ref("");
watch(total_pyjamas_small_white, () => {});
const pyjamas_big_colored = ref(0);
const total_pyjamas_big_colored = ref("");
watch(total_pyjamas_big_colored, () => {});
const pyjamas_big_white = ref(0);
const total_pyjamas_big_white = ref("");
watch(total_pyjamas_big_white, () => {});
const blanket_colored = ref(0);
const total_blanket_colored = ref("");
watch(total_blanket_colored, () => {});
const pillow_cases_colored = ref(0);
const total_pillow_cases_colored = ref("");
watch(total_pillow_cases_colored, () => {});
const pillow_cases_white = ref(0);
const total_pillow_cases_white = ref("");
watch(total_pillow_cases_white, () => {});

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
  isloading.value = true;
  const token = useStore.getToken;
  $q.loading.show({
    message: "Loading. Please wait...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });
  const first_name = useStore.getFirst_name;
  const last_name = useStore.getLast_name;
  // console.log(first_name.value, "customer name"),
  // console.log(last_name.value, "customer name"),

  const formData = {
    customer: _first_name.value + " " + _last_name.value,
    customer_phone: _phone.value,
    staff: first_name,
    //
    //1st
    quantity_male_native_2pcs_folding_colored: Number(
      male_native_2pcs_folding_colored.value
    ),
    male_native_2pcs_folding_colored: Number(
      total_male_native_2pcs_folding_colored.value
    ),
    quantity_male_native_2pcs_hanging_colored: Number(
      male_native_2pcs_hanging_colored.value
    ),
    male_native_2pcs_hanging_colored: Number(
      total_male_native_2pcs_hanging_colored.value
    ),
    quantity_male_native_2pcs_folding_white: Number(
      male_native_2pcs_folding_white.value
    ),
    male_native_2pcs_folding_white: Number(
      total_male_native_2pcs_folding_white.value
    ),
    quantity_male_native_2pcs_hanging_white: Number(
      male_native_2pcs_hanging_white.value
    ),
    male_native_2pcs_hanging_white: Number(
      total_male_native_2pcs_hanging_white.value
    ),
    quantity_male_native_3pcs_notAgbada_folding_colored: Number(
      male_native_3pcs_notAgbada_folding_colored.value
    ),
    male_native_3pcs_notAgbada_folding_colored: Number(
      total_male_native_3pcs_notAgbada_folding_colored.value
    ),
    quantity_male_native_3pcs_notAgbada_hanging_colored: Number(
      male_native_3pcs_notAgbada_hanging_colored.value
    ),
    male_native_3pcs_notAgbada_hanging_colored: Number(
      total_male_native_3pcs_notAgbada_hanging_colored.value
    ),
    quantity_male_native_3pcs_notAgbada_folding_white: Number(
      male_native_3pcs_notAgbada_folding_white.value
    ),
    male_native_3pcs_notAgbada_folding_white: Number(
      total_male_native_3pcs_notAgbada_folding_white.value
    ),
    quantity_male_native_3pcs_notAgbada_hanging_white: Number(
      male_native_3pcs_notAgbada_hanging_white.value
    ),
    male_native_3pcs_notAgbada_hanging_white: Number(
      total_male_native_3pcs_notAgbada_hanging_white.value
    ),
    quantity_native_top_only_folding_colored: Number(
      native_top_only_folding_colored.value
    ),
    native_top_only_folding_colored: Number(
      total_native_top_only_folding_colored.value
    ),
    quantity_native_top_only_hanging_colored: Number(
      native_top_only_hanging_colored.value
    ),
    native_top_only_hanging_colored: Number(
      total_native_top_only_hanging_colored.value
    ),
    quantity_native_top_only_folding_white: Number(
      native_top_only_folding_white.value
    ),
    native_top_only_folding_white: Number(
      total_native_top_only_folding_white.value
    ),
    quantity_native_top_only_hanging_white: Number(
      native_top_only_hanging_white.value
    ),
    native_top_only_hanging_white: Number(
      total_native_top_only_hanging_white.value
    ),
    quantity_native_trouser_only_folding_colored: Number(
      native_trouser_only_folding_colored.value
    ),
    native_trouser_only_folding_colored: Number(
      total_native_trouser_only_folding_colored.value
    ),
    quantity_native_trouser_only_hanging_colored: Number(
      native_trouser_only_hanging_colored.value
    ),
    native_trouser_only_hanging_colored: Number(
      total_native_trouser_only_hanging_colored.value
    ),
    quantity_native_trouser_only_folding_white: Number(
      native_trouser_only_folding_white.value
    ),
    native_trouser_only_folding_white: Number(
      total_native_trouser_only_folding_white.value
    ),
    quantity_native_trouser_only_hanging_white: Number(
      native_trouser_only_hanging_white.value
    ),
    native_trouser_only_hanging_white: Number(
      total_native_trouser_only_hanging_white.value
    ),
    quantity_male_agbada_only_folding_colored: Number(
      male_agbada_only_folding_colored.value
    ),
    male_agbada_only_folding_colored: Number(
      total_male_agbada_only_folding_colored.value
    ),
    quantity_male_agbada_only_hanging_colored: Number(
      male_agbada_only_hanging_colored.value
    ),
    male_agbada_only_hanging_colored: Number(
      total_male_agbada_only_hanging_colored.value
    ),
    quantity_male_agbada_only_folding_white: Number(
      male_agbada_only_folding_white.value
    ),
    male_agbada_only_folding_white: Number(
      total_male_agbada_only_folding_white.value
    ),
    quantity_male_agbada_only_hanging_white: Number(
      male_agbada_only_hanging_white.value
    ),
    male_agbada_only_hanging_white: Number(
      total_male_agbada_only_hanging_white.value
    ),
    quantity_complete_male_agbada_3pcs_Folding_colored: Number(
      complete_male_agbada_3pcs_Folding_colored.value
    ),
    complete_male_agbada_3pcs_Folding_colored: Number(
      total_complete_male_agbada_3pcs_Folding_colored.value
    ),
    quantity_complete_male_agbada_3pcs_Hanging_colored: Number(
      complete_male_agbada_3pcs_Hanging_colored.value
    ),
    complete_male_agbada_3pcs_Hanging_colored: Number(
      total_complete_male_agbada_3pcs_Hanging_colored.value
    ),
    quantity_complete_male_agbada_3pcs_Folding_white: Number(
      complete_male_agbada_3pcs_Folding_white.value
    ),
    complete_male_agbada_3pcs_Folding_white: Number(
      total_complete_male_agbada_3pcs_Folding_white.value
    ),
    quantity_complete_male_agbada_3pcs_Hanging_white: Number(
      complete_male_agbada_3pcs_Hanging_white.value
    ),
    complete_male_agbada_3pcs_Hanging_white: Number(
      total_complete_male_agbada_3pcs_Hanging_white.value
    ),
    quantity_normal_shirt_folding_colored: Number(
      normal_shirt_folding_colored.value
    ),
    normal_shirt_folding_colored: Number(
      total_normal_shirt_folding_colored.value
    ),
    quantity_normal_shirt_hanging_colored: Number(
      normal_shirt_hanging_colored.value
    ),
    normal_shirt_hanging_colored: Number(
      total_normal_shirt_hanging_colored.value
    ),
    quantity_normal_shirt_folding_white: Number(
      normal_shirt_folding_white.value
    ),
    normal_shirt_folding_white: Number(total_normal_shirt_folding_white.value),
    quantity_normal_shirt_hanging_white: Number(
      normal_shirt_hanging_white.value
    ),
    normal_shirt_hanging_white: Number(total_normal_shirt_hanging_white.value),
    //2nd page
    quantity_blouse_folding_colored: Number(blouse_folding_colored.value),
    blouse_folding_colored: Number(total_blouse_folding_colored.value),
    quantity_blouse_hanging_colored: Number(blouse_hanging_colored.value),
    blouse_hanging_colored: Number(total_blouse_hanging_colored.value),
    quantity_blouse_folding_white: Number(blouse_folding_white.value),
    blouse_folding_white: Number(total_blouse_folding_white.value),
    quantity_blouse_hanging_white: Number(blouse_hanging_white.value),
    blouse_hanging_white: Number(total_blouse_hanging_white.value),
    quantity_blouse_x_large_folding_colored: Number(
      blouse_x_large_folding_colored.value
    ),
    blouse_x_large_folding_colored: Number(
      total_blouse_x_large_folding_colored.value
    ),
    quantity_blouse_x_large_hanging_colored: Number(
      blouse_x_large_hanging_colored.value
    ),
    blouse_x_large_hanging_colored: Number(
      total_blouse_x_large_hanging_colored.value
    ),
    quantity_blouse_x_large_folding_white: Number(
      blouse_x_large_folding_white.value
    ),
    blouse_x_large_folding_white: Number(
      total_blouse_x_large_folding_white.value
    ),
    quantity_blouse_x_large_hanging_white: Number(
      blouse_x_large_hanging_white.value
    ),
    blouse_x_large_hanging_white: Number(
      total_blouse_x_large_hanging_white.value
    ),
    quantity_female_shirt_folding_colored: Number(
      female_shirt_folding_colored.value
    ),
    female_shirt_folding_colored: Number(
      total_female_shirt_folding_colored.value
    ),
    quantity_female_shirt_hanging_colored: Number(
      female_shirt_hanging_colored.value
    ),
    female_shirt_hanging_colored: Number(
      total_female_shirt_hanging_colored.value
    ),
    quantity_female_shirt_folding_white: Number(
      female_shirt_folding_white.value
    ),
    female_shirt_folding_white: Number(total_female_shirt_folding_white.value),
    quantity_female_shirt_hanging_white: Number(
      female_shirt_hanging_white.value
    ),
    female_shirt_hanging_white: Number(total_female_shirt_hanging_white.value),
    quantity_tshirt_polo_small_folding_colored: Number(
      tshirt_polo_small_folding_colored.value
    ),
    tshirt_polo_small_folding_colored: Number(
      total_tshirt_polo_small_folding_colored.value
    ),
    quantity_tshirt_polo_small_hanging_colored: Number(
      tshirt_polo_small_hanging_colored.value
    ),
    tshirt_polo_small_hanging_colored: Number(
      total_tshirt_polo_small_hanging_colored.value
    ),
    quantity_tshirt_polo_small_folding_white: Number(
      tshirt_polo_small_folding_white.value
    ),
    tshirt_polo_small_folding_white: Number(
      total_tshirt_polo_small_folding_white.value
    ),
    quantity_tshirt_polo_small_hanging_white: Number(
      tshirt_polo_small_hanging_white.value
    ),
    tshirt_polo_small_hanging_white: Number(
      total_tshirt_polo_small_hanging_white.value
    ),
    quantity_tshirt_polo_medium_folding_colored: Number(
      tshirt_polo_medium_folding_colored.value
    ),
    tshirt_polo_medium_folding_colored: Number(
      total_tshirt_polo_medium_folding_colored.value
    ),
    quantity_tshirt_polo_medium_hanging_colored: Number(
      tshirt_polo_medium_hanging_colored.value
    ),
    tshirt_polo_medium_hanging_colored: Number(
      total_tshirt_polo_medium_hanging_colored.value
    ),
    quantity_tshirt_polo_medium_folding_white: Number(
      tshirt_polo_medium_folding_white.value
    ),
    tshirt_polo_medium_folding_white: Number(
      total_tshirt_polo_medium_folding_white.value
    ),
    quantity_tshirt_polo_medium_hanging_white: Number(
      tshirt_polo_medium_hanging_white.value
    ),
    tshirt_polo_medium_hanging_white: Number(
      total_tshirt_polo_medium_hanging_white.value
    ),
    quantity_tshirt_polo_big_folding_colored: Number(
      tshirt_polo_big_folding_colored.value
    ),
    tshirt_polo_big_folding_colored: Number(
      total_tshirt_polo_big_folding_colored.value
    ),
    quantity_tshirt_polo_big_hanging_colored: Number(
      tshirt_polo_big_hanging_colored.value
    ),
    tshirt_polo_big_hanging_colored: Number(
      total_tshirt_polo_big_hanging_colored.value
    ),
    quantity_tshirt_polo_big_folding_white: Number(
      tshirt_polo_big_folding_white.value
    ),
    tshirt_polo_big_folding_white: Number(
      total_tshirt_polo_big_folding_white.value
    ),
    quantity_tshirt_polo_big_hanging_white: Number(
      tshirt_polo_big_hanging_white.value
    ),
    tshirt_polo_big_hanging_white: Number(
      total_tshirt_polo_big_hanging_white.value
    ),
    quantity_shirt_x_large_folding_colored: Number(
      shirt_x_large_folding_colored.value
    ),
    shirt_x_large_folding_colored: Number(
      total_shirt_x_large_folding_colored.value
    ),
    quantity_shirt_x_large_hanging_colored: Number(
      shirt_x_large_hanging_colored.value
    ),
    shirt_x_large_hanging_colored: Number(
      total_shirt_x_large_hanging_colored.value
    ),
    quantity_shirt_x_large_folding_white: Number(
      shirt_x_large_folding_white.value
    ),
    shirt_x_large_folding_white: Number(
      total_shirt_x_large_folding_white.value
    ),
    quantity_shirt_x_large_hanging_white: Number(
      shirt_x_large_hanging_white.value
    ),
    shirt_x_large_hanging_white: Number(
      total_shirt_x_large_hanging_white.value
    ),
    //3rd page
    quantity_shirt_big_folding_colored: Number(shirt_big_folding_colored.value),
    shirt_big_folding_colored: Number(total_shirt_big_folding_colored.value),
    quantity_shirt_big_hanging_colored: Number(shirt_big_hanging_colored.value),
    shirt_big_hanging_colored: Number(total_shirt_big_hanging_colored.value),
    quantity_shirt_big_folding_white: Number(shirt_big_folding_white.value),
    shirt_big_folding_white: Number(total_shirt_big_folding_white.value),
    quantity_shirt_big_hanging_white: Number(shirt_big_hanging_white.value),
    shirt_big_hanging_white: Number(total_shirt_big_hanging_white.value),
    quantity_shirt_children_folding_colored: Number(
      shirt_children_folding_colored.value
    ),
    shirt_children_folding_colored: Number(
      total_shirt_children_folding_colored.value
    ),
    quantity_shirt_children_hanging_colored: Number(
      shirt_children_hanging_colored.value
    ),
    shirt_children_hanging_colored: Number(
      total_shirt_children_hanging_colored.value
    ),
    quantity_shirt_children_folding_white: Number(
      shirt_children_folding_white.value
    ),
    shirt_children_folding_white: Number(
      total_shirt_children_folding_white.value
    ),
    quantity_shirt_children_hanging_white: Number(
      shirt_children_hanging_white.value
    ),
    shirt_children_hanging_white: Number(
      total_shirt_children_hanging_white.value
    ),
    quantity_plain_trouser_folding_colored: Number(
      plain_trouser_folding_colored.value
    ),
    plain_trouser_folding_colored: Number(
      total_plain_trouser_folding_colored.value
    ),
    quantity_plain_trouser_hanging_colored: Number(
      plain_trouser_hanging_colored.value
    ),
    plain_trouser_hanging_colored: Number(
      total_plain_trouser_hanging_colored.value
    ),
    quantity_plain_trouser_folding_white: Number(
      plain_trouser_folding_white.value
    ),
    plain_trouser_folding_white: Number(
      total_plain_trouser_folding_white.value
    ),
    quantity_plain_trouser_hanging_white: Number(
      plain_trouser_hanging_white.value
    ),
    plain_trouser_hanging_white: Number(
      total_plain_trouser_hanging_white.value
    ),
    quantity_jeans_chinos_trouser_folding_colored: Number(
      jeans_chinos_trouser_folding_colored.value
    ),
    jeans_chinos_trouser_folding_colored: Number(
      total_jeans_chinos_trouser_folding_colored.value
    ),
    quantity_jeans_chinos_trouser_hanging_colored: Number(
      jeans_chinos_trouser_hanging_colored.value
    ),
    jeans_chinos_trouser_hanging_colored: Number(
      total_jeans_chinos_trouser_hanging_colored.value
    ),
    quantity_jeans_chinos_trouser_folding_white: Number(
      jeans_chinos_trouser_folding_white.value
    ),
    jeans_chinos_trouser_folding_white: Number(
      total_jeans_chinos_trouser_folding_white.value
    ),
    quantity_jeans_chinos_trouser_hanging_white: Number(
      jeans_chinos_trouser_hanging_white.value
    ),
    jeans_chinos_trouser_hanging_white: Number(
      total_jeans_chinos_trouser_hanging_white.value
    ),
    quantity_waist_coat_hanging_colored: Number(
      waist_coat_hanging_colored.value
    ),
    waist_coat_hanging_colored: Number(total_waist_coat_hanging_colored.value),
    quantity_waist_coat_hanging_white: Number(waist_coat_hanging_white.value),
    waist_coat_hanging_white: Number(total_waist_coat_hanging_white.value),
    quantity_tie_colored: Number(tie_colored.value),
    tie_colored: Number(total_tie_colored.value),
    quantity_tie_white: Number(tie_white.value),
    tie_white: Number(total_tie_white.value),
    quantity_shorts_folding_colored: Number(shorts_folding_colored.value),
    shorts_folding_colored: Number(total_shorts_folding_colored.value),
    quantity_shorts_hanging_colored: Number(shorts_hanging_colored.value),
    shorts_hanging_colored: Number(total_shorts_hanging_colored.value),
    quantity_shorts_folding_white: Number(shorts_folding_white.value),
    shorts_folding_white: Number(total_shorts_folding_white.value),
    quantity_shorts_hanging_white: Number(shorts_hanging_white.value),
    shorts_hanging_white: Number(total_shorts_hanging_white.value),
    quantity_singlet_colored: Number(singlet_colored.value),
    singlet_colored: Number(total_singlet_colored.value),
    quantity_singlet_white: Number(singlet_white.value),
    singlet_white: Number(total_singlet_white.value),
    quantity_boxer_colored: Number(boxer_colored.value),
    boxer_colored: Number(total_boxer_colored.value),
    quantity_boxer_white: Number(boxer_white.value),
    boxer_white: Number(total_boxer_white.value),
    //4th page
    quantity_male_2pcs_suit_hanging_colored: Number(
      male_2pcs_suit_hanging_colored.value
    ),
    male_2pcs_suit_hanging_colored: Number(
      total_male_2pcs_suit_hanging_colored.value
    ),
    quantity_male_2pcs_suit_hanging_white: Number(
      male_2pcs_suit_hanging_white.value
    ),
    male_2pcs_suit_hanging_white: Number(
      total_male_2pcs_suit_hanging_white.value
    ),
    quantity_male_3pcs_suit_hanging_colored: Number(
      male_3pcs_suit_hanging_colored.value
    ),
    male_3pcs_suit_hanging_colored: Number(
      total_male_3pcs_suit_hanging_colored.value
    ),
    quantity_male_3pcs_suit_hanging_white: Number(
      male_3pcs_suit_hanging_white.value
    ),
    male_3pcs_suit_hanging_white: Number(
      total_male_3pcs_suit_hanging_white.value
    ),
    quantity_female_2pcs_suit_hanging_colored: Number(
      female_2pcs_suit_hanging_colored.value
    ),
    female_2pcs_suit_hanging_colored: Number(
      total_female_2pcs_suit_hanging_colored.value
    ),
    quantity_female_2pcs_suit_hanging_white: Number(
      female_2pcs_suit_hanging_white.value
    ),
    female_2pcs_suit_hanging_white: Number(
      total_female_2pcs_suit_hanging_white.value
    ),
    quantity_female_3pcs_suit_hanging_colored: Number(
      female_3pcs_suit_hanging_colored.value
    ),
    female_3pcs_suit_hanging_colored: Number(
      total_female_3pcs_suit_hanging_colored.value
    ),
    quantity_female_3pcs_suit_hanging_white: Number(
      female_3pcs_suit_hanging_white.value
    ),
    female_3pcs_suit_hanging_white: Number(
      total_female_3pcs_suit_hanging_white.value
    ),
    quantity_male_jacket_only_colored: Number(male_jacket_only_colored.value),
    male_jacket_only_colored: Number(total_male_jacket_only_colored.value),
    quantity_male_jacket_only_white: Number(male_jacket_only_white.value),
    male_jacket_only_white: Number(total_male_jacket_only_white.value),
    quantity_female_jacket_only_colored: Number(
      female_jacket_only_colored.value
    ),
    female_jacket_only_colored: Number(total_female_jacket_only_colored.value),
    quantity_female_jacket_only_white: Number(female_jacket_only_white.value),
    female_jacket_only_white: Number(total_female_jacket_only_white.value),
    quantity_wedding_gown_small_and_little_accessories_white: Number(
      wedding_gown_small_and_little_accessories_white.value
    ),
    wedding_gown_small_and_little_accessories_white: Number(
      total_wedding_gown_small_and_little_accessories_white.value
    ),
    quantity_wedding_gown_big_and_plenty_accessories_white: Number(
      wedding_gown_big_and_plenty_accessories_white.value
    ),
    wedding_gown_big_and_plenty_accessories_white: Number(
      total_wedding_gown_big_and_plenty_accessories_white.value
    ),
    quantity_Kids_blouse_folding_colored: Number(
      Kids_blouse_folding_colored.value
    ),
    Kids_blouse_folding_colored: Number(
      total_Kids_blouse_folding_colored.value
    ),
    quantity_Kids_blouse_hanging_colored: Number(
      Kids_blouse_hanging_colored.value
    ),
    Kids_blouse_hanging_colored: Number(
      total_Kids_blouse_hanging_colored.value
    ),
    quantity_Kids_blouse_folding_white: Number(Kids_blouse_folding_white.value),
    Kids_blouse_folding_white: Number(total_Kids_blouse_folding_white.value),
    quantity_Kids_blouse_hanging_white: Number(Kids_blouse_hanging_white.value),
    Kids_blouse_hanging_white: Number(total_Kids_blouse_hanging_white.value),
    quantity_jalamia_colored: Number(jalamia_colored.value),
    jalamia_colored: Number(total_jalamia_colored.value),
    quantity_jalamia_white: Number(jalamia_white.value),
    jalamia_white: Number(total_jalamia_white.value),
    quantity_camisole_colored: Number(camisole_colored.value),
    camisole_colored: Number(total_camisole_colored.value),
    quantity_camisole_white: Number(camisole_white.value),
    camisole_white: Number(total_camisole_white.value),
    quantity_wrapper_buba_scarf_colored: Number(
      wrapper_buba_scarf_colored.value
    ),
    wrapper_buba_scarf_colored: Number(total_wrapper_buba_scarf_colored.value),
    quantity_wrapper_buba_scarf_white: Number(wrapper_buba_scarf_white.value),
    wrapper_buba_scarf_white: Number(total_wrapper_buba_scarf_white.value),
    quantity_wrapper_buba_no_scarf_colored: Number(
      wrapper_buba_no_scarf_colored.value
    ),
    wrapper_buba_no_scarf_colored: Number(
      total_wrapper_buba_no_scarf_colored.value
    ),
    quantity_wrapper_buba_no_scarf_white: Number(
      wrapper_buba_no_scarf_white.value
    ),
    wrapper_buba_no_scarf_white: Number(
      total_wrapper_buba_no_scarf_white.value
    ),
    //5th page
    quantity_wrapper_only_colored: Number(wrapper_only_colored.value),
    wrapper_only_colored: Number(total_wrapper_only_colored.value),
    quantity_wrapper_only_white: Number(wrapper_only_white.value),
    wrapper_only_white: Number(total_wrapper_only_white.value),
    quantity_two_wrapper_scarf_or_no_scarf_colored: Number(
      two_wrapper_scarf_or_no_scarf_colored.value
    ),
    two_wrapper_scarf_or_no_scarf_colored: Number(
      total_two_wrapper_scarf_or_no_scarf_colored.value
    ),
    quantity_two_wrapper_scarf_or_no_scarf_white: Number(
      two_wrapper_scarf_or_no_scarf_white.value
    ),
    two_wrapper_scarf_or_no_scarf_white: Number(
      total_two_wrapper_scarf_or_no_scarf_white.value
    ),
    quantity_aso_oke_agbada_and_cap_colored: Number(
      aso_oke_agbada_and_cap_colored.value
    ),
    aso_oke_agbada_and_cap_colored: Number(
      total_aso_oke_agbada_and_cap_colored.value
    ),
    quantity_male_aso_oke_and_cap_3pcs_colored: Number(
      male_aso_oke_and_cap_3pcs_colored.value
    ),
    male_aso_oke_and_cap_3pcs_colored: Number(
      total_male_aso_oke_and_cap_3pcs_colored.value
    ),
    quantity_aso_oke_wrapper_buba_gele_colored: Number(
      aso_oke_wrapper_buba_gele_colored.value
    ),
    aso_oke_wrapper_buba_gele_colored: Number(
      total_aso_oke_wrapper_buba_gele_colored.value
    ),
    quantity_aso_oke_wrapper_gele_colored: Number(
      aso_oke_wrapper_gele_colored.value
    ),
    aso_oke_wrapper_gele_colored: Number(
      total_aso_oke_wrapper_gele_colored.value
    ),
    quantity_aso_oke_wrapper_gele_ipele_colored: Number(
      aso_oke_wrapper_gele_ipele_colored.value
    ),
    aso_oke_wrapper_gele_ipele_colored: Number(
      total_aso_oke_wrapper_gele_ipele_colored.value
    ),
    quantity_aso_oke_wrapper_gele_ipele_white: Number(
      aso_oke_wrapper_gele_ipele_white.value
    ),
    aso_oke_wrapper_gele_ipele_white: Number(
      total_aso_oke_wrapper_gele_ipele_white.value
    ),
    quantity_aso_oke_headtie_ipele_colored: Number(
      aso_oke_headtie_ipele_colored.value
    ),
    aso_oke_headtie_ipele_colored: Number(
      total_aso_oke_headtie_ipele_colored.value
    ),
    quantity_male_complete_aso_oke_white: Number(
      male_complete_aso_oke_white.value
    ),
    male_complete_aso_oke_white: Number(
      total_male_complete_aso_oke_white.value
    ),
    quantity_female_complete_aso_oke_white: Number(
      female_complete_aso_oke_white.value
    ),
    female_complete_aso_oke_white: Number(
      total_female_complete_aso_oke_white.value
    ),
    quantity_female_inner_wear_colored: Number(female_inner_wear_colored.value),
    female_inner_wear_colored: Number(total_female_inner_wear_colored.value),
    quantity_female_inner_wear_white: Number(female_inner_wear_white.value),
    female_inner_wear_white: Number(total_female_inner_wear_white.value),
    quantity_head_tie_gele_colored: Number(head_tie_gele_colored.value),
    head_tie_gele_colored: Number(total_head_tie_gele_colored.value),
    quantity_head_tie_gele_white: Number(head_tie_gele_white.value),
    head_tie_gele_white: Number(total_head_tie_gele_white.value),
    quantity_gown_children_colored: Number(gown_children_colored.value),
    gown_children_colored: Number(total_gown_children_colored.value),
    quantity_gown_children_white: Number(gown_children_white.value),
    gown_children_white: Number(total_gown_children_white.value),
    quantity_gown_english_adult_folding_colored: Number(
      gown_english_adult_folding_colored.value
    ),
    gown_english_adult_folding_colored: Number(
      total_gown_english_adult_folding_colored.value
    ),
    quantity_gown_english_adult_folding_white: Number(
      gown_english_adult_folding_white.value
    ),
    gown_english_adult_folding_white: Number(
      total_gown_english_adult_folding_white.value
    ),
    quantity_gown_english_adult_hanging_colored: Number(
      gown_english_adult_hanging_colored.value
    ),
    gown_english_adult_hanging_colored: Number(
      total_gown_english_adult_hanging_colored.value
    ),
    quantity_gown_english_adult_hanging_white: Number(
      gown_english_adult_hanging_white.value
    ),
    gown_english_adult_hanging_white: Number(
      total_gown_english_adult_hanging_white.value
    ),
    quantity_gown_native_folding_colored: Number(
      gown_native_folding_colored.value
    ),
    gown_native_folding_colored: Number(
      total_gown_native_folding_colored.value
    ),
    quantity_gown_native_folding_white: Number(gown_native_folding_white.value),
    gown_native_folding_white: Number(total_gown_native_folding_white.value),
    quantity_adult_white_garment_folding_with_cap: Number(adult_white_garment_folding_with_cap.value),
    adult_white_garment_folding_with_cap: Number(total_adult_white_garment_folding_with_cap.value),
    quantity_adult_white_garment_folding_without_cap: Number(adult_white_garment_folding_without_cap.value),
    adult_white_garment_folding_without_cap: Number(total_adult_white_garment_folding_without_cap.value),
    quantity_adult_white_garment_hanging_with_cap: Number(adult_white_garment_hanging_with_cap.value),
    adult_white_garment_hanging_with_cap: Number(total_adult_white_garment_hanging_with_cap.value),
    quantity_adult_white_garment_hanging_without_cap: Number(adult_white_garment_hanging_without_cap.value),
    adult_white_garment_hanging_without_cap: Number(total_adult_white_garment_hanging_without_cap.value),
    quantity_children_white_garment_folding_with_cap: Number(children_white_garment_folding_with_cap.value),
    children_white_garment_folding_with_cap: Number(total_children_white_garment_folding_with_cap.value),
    quantity_children_white_garment_folding_without_cap: Number(children_white_garment_folding_without_cap.value),
    children_white_garment_folding_without_cap: Number(total_children_white_garment_folding_without_cap.value),
    quantity_children_white_garment_hanging_with_cap: Number(children_white_garment_hanging_with_cap.value),
    children_white_garment_hanging_with_cap: Number(total_children_white_garment_hanging_with_cap.value),
    quantity_children_white_garment_hanging_without_cap: Number(children_white_garment_hanging_without_cap.value),
    children_white_garment_hanging_without_cap: Number(total_children_white_garment_hanging_without_cap.value),
    //6th page
    quantity_skirt_and_blouse_english_hanging_colored: Number(
      skirt_and_blouse_english_hanging_colored.value
    ),
    skirt_and_blouse_english_hanging_colored: Number(
      total_skirt_and_blouse_english_hanging_colored.value
    ),
    quantity_skirt_and_blouse_english_hanging_white: Number(
      skirt_and_blouse_english_hanging_white.value
    ),
    skirt_and_blouse_english_hanging_white: Number(
      total_skirt_and_blouse_english_hanging_white.value
    ),
    quantity_skirt_and_blouse_native_folding_colored: Number(
      skirt_and_blouse_native_folding_colored.value
    ),
    skirt_and_blouse_native_folding_colored: Number(
      total_skirt_and_blouse_native_folding_colored.value
    ),
    quantity_skirt_and_blouse_native_folding_white: Number(
      skirt_and_blouse_native_folding_white.value
    ),
    skirt_and_blouse_native_folding_white: Number(
      total_skirt_and_blouse_native_folding_white.value
    ),
    quantity_female_native_buba_and_trouser_colored: Number(
      female_native_buba_and_trouser_colored.value
    ),
    female_native_buba_and_trouser_colored: Number(
      total_female_native_buba_and_trouser_colored.value
    ),
    quantity_female_native_buba_and_trouser_white: Number(
      female_native_buba_and_trouser_white.value
    ),
    female_native_buba_and_trouser_white: Number(
      total_female_native_buba_and_trouser_white.value
    ),
    quantity_male_cap_colored: Number(male_cap_colored.value),
    male_cap_colored: Number(total_male_cap_colored.value),
    quantity_male_cap_white: Number(male_cap_white.value),
    male_cap_white: Number(total_male_cap_white.value),
    quantity_female_cap_colored: Number(female_cap_colored.value),
    female_cap_colored: Number(total_female_cap_colored.value),
    quantity_female_cap_white: Number(female_cap_white.value),
    female_cap_white: Number(total_female_cap_white.value),
    quantity_turban_colored: Number(turban_colored.value),
    turban_colored: Number(total_turban_colored.value),
    quantity_turban_white: Number(turban_white.value),
    turban_white: Number(total_turban_white.value),
    quantity_sweater_small_colored: Number(sweater_small_colored.value),
    sweater_small_colored: Number(total_sweater_small_colored.value),
    quantity_sweater_small_white: Number(sweater_small_white.value),
    sweater_small_white: Number(total_sweater_small_white.value),
    quantity_sweater_normal_colored: Number(sweater_normal_colored.value),
    sweater_normal_colored: Number(total_sweater_normal_colored.value),
    quantity_sweater_normal_white: Number(sweater_normal_white.value),
    sweater_normal_white: Number(total_sweater_normal_white.value),
    quantity_sweater_big_colored: Number(sweater_big_colored.value),
    sweater_big_colored: Number(total_sweater_big_colored.value),
    quantity_sweater_big_white: Number(sweater_big_white.value),
    sweater_big_white: Number(total_sweater_big_white.value),
    quantity_towel_small_colored: Number(towel_small_colored.value),
    towel_small_colored: Number(total_towel_small_colored.value),
    quantity_towel_small_white: Number(towel_small_white.value),
    towel_small_white: Number(total_towel_small_white.value),
    quantity_towel_normal_colored: Number(towel_normal_colored.value),
    towel_normal_colored: Number(total_towel_normal_colored.value),
    quantity_towel_normal_white: Number(towel_normal_white.value),
    towel_normal_white: Number(total_towel_normal_white.value),
    quantity_towel_big_colored: Number(towel_big_colored.value),
    towel_big_colored: Number(total_towel_big_colored.value),
    quantity_towel_big_white: Number(towel_big_white.value),
    towel_big_white: Number(total_towel_big_white.value),
    quantity_bed_spread_normal_colored: Number(bed_spread_normal_colored.value),
    bed_spread_normal_colored: Number(total_bed_spread_normal_colored.value),
    quantity_bed_spread_normal_white: Number(bed_spread_normal_white.value),
    bed_spread_normal_white: Number(total_bed_spread_normal_white.value),
    quantity_bed_spread_big_colored: Number(bed_spread_big_colored.value),
    bed_spread_big_colored: Number(total_bed_spread_big_colored.value),
    quantity_bed_spread_big_white: Number(bed_spread_big_white.value),
    bed_spread_big_white: Number(total_bed_spread_big_white.value),
    //7th
    quantity_bed_spread_double_colored: Number(bed_spread_double_colored.value),
    bed_spread_double_colored: Number(total_bed_spread_double_colored.value),
    quantity_bed_spread_double_white: Number(bed_spread_double_white.value),
    bed_spread_double_white: Number(total_bed_spread_double_white.value),
    quantity_duvet_normal_colored: Number(duvet_normal_colored.value),
    duvet_normal_colored: Number(total_duvet_normal_colored.value),
    quantity_duvet_normal_white: Number(duvet_normal_white.value),
    duvet_normal_white: Number(total_duvet_normal_white.value),
    quantity_duvet_big_colored: Number(duvet_big_colored.value),
    duvet_big_colored: Number(total_duvet_big_colored.value),
    quantity_duvet_big_white: Number(duvet_big_white.value),
    duvet_big_white: Number(total_duvet_big_white.value),
    quantity_curtain_normal_colored: Number(curtain_normal_colored.value),
    curtain_normal_colored: Number(total_curtain_normal_colored.value),
    quantity_curtain_big_colored: Number(curtain_big_colored.value),
    curtain_big_colored: Number(total_curtain_big_colored.value),
    quantity_curtain_very_big_colored: Number(curtain_very_big_colored.value),
    curtain_very_big_colored: Number(total_curtain_very_big_colored.value),
    quantity_pyjamas_small_colored: Number(pyjamas_small_colored.value),
    pyjamas_small_colored: Number(total_pyjamas_small_colored.value),
    quantity_pyjamas_small_white: Number(pyjamas_small_white.value),
    pyjamas_small_white: Number(total_pyjamas_small_white.value),
    quantity_pyjamas_big_colored: Number(pyjamas_big_colored.value),
    pyjamas_big_colored: Number(total_pyjamas_big_colored.value),
    quantity_pyjamas_big_white: Number(pyjamas_big_white.value),
    pyjamas_big_white: Number(total_pyjamas_big_white.value),
    quantity_blanket_colored: Number(blanket_colored.value),
    blanket_colored: Number(total_blanket_colored.value),
    quantity_pillow_cases_colored: Number(pillow_cases_colored.value),
    pillow_cases_colored: Number(total_pillow_cases_colored.value),
    quantity_pillow_cases_white: Number(pillow_cases_white.value),
    pillow_cases_white: Number(total_pillow_cases_white.value),

    //
    collection_date: collection_date.value,
    collected_on: collected_on_date.value + " " + collected_on_time.value,
    comment_section: comment_section.value,
    discount: discount.value,
    deposit: deposit.value.toString(),
    deposit_type: deposit_type.value,
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
  //   formData.append("discount" , discount.value);
  //   formData.append("deposit" , deposit.value);
  //   formData.append("deposit_type" , deposit_type.value);
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
      $q.loading.hide();
      $q.notify({
        color: "green",
        position: "bottom",
        message: "Saved",
        icon: "check",
      });
      $router.replace("/intake");
      isloading.value = false;
    })
    .catch(() => {
      $q.loading.hide();
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Loading failed",
        icon: "report_problem",
      });
      isloading.value = false;
    });
};

const continue_ = () => {
  const today = new Date();

  // Get current date in DD/MM/YYYY format
  const date = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Get current time in 10:47 AM/PM format
  const time = today.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  collected_on_date.value = date;
  collected_on_time.value = time;

  main.value = false;
  summary.value = true;
};

const back_ = () => {
  main.value = true;
  summary.value = false;
};

// const allPrice = ref([])

const loadPrice = () => {
  const token = useStore.getToken;
  console.log(token, "token");
  api
    .get(`/price/all/1`, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      lastPrice.value = response.data.data.shift();
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

// onMounted(() => {
//   loadPrice();
// });

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
