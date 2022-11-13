<template>
  <div class="text--center cursor--pointer">
    <v-hover v-slot="{ hover }">
      <v-card :elevation="hover ? 16 : 2" class="pa-6 price-card flex-grow-1">
        <h1>{{ details.label }}</h1>
        <h3 class="mt-n2">FOR 3 DAYS</h3>

        <div class="price-subtitle mt-2">
          <div v-if="!!details.customSubtitle">
            {{ details.customSubtitle }}
          </div>
        </div>

        <div v-if="!details.customSubtitle">
          <div class="d-flex justify-center ml-n3">
            <span class="dollar-sign">$</span>
            <div class="price">{{ details.threeDays }}</div>
          </div>
        </div>

        <div class="mt-6 text--break">
          <div v-if="!!details.customMessage">
            {{ details.customMessage }}
          </div>

          <div v-else>
            Additional days for
            <strong>${{ details.additionalDaysCost }}/day</strong>
          </div>
        </div>

        <v-divider class="mt-8" />

        <v-btn class="my-8">SELECT</v-btn>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'PriceCard',
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.price {
  font-size: 32px;
}
.price-card {
}
.dollar-sign {
  margin-top: 10px;
  margin-right: 4px;
  opacity: 0.5;
  font-size: 18px;
}
.price-subtitle {
  font-size: 14px;
}

/* Extra small devices (phones, 600px and down) */
/* @media only screen and (max-width: 641px) {...} */

/* Small devices (portrait tablets and large phones, 600px and up)*/
@media only screen and (min-width: 642px) {
  .price-card {
    max-width: 190px;
  }
}
@media only screen and (min-width: 957px) {
  .price-card {
    max-width: 300px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
/* @media only screen and (min-width: 768px) {...} */

/* Large devices (laptops/desktops, 992px and up) */
/* @media only screen and (min-width: 992px) {...} */

/* Extra large devices (large laptops and desktops, 1200px and up) */
/* @media only screen and (min-width: 1200px) {...} */
</style>
