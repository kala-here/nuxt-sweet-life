<template>
  <div class="d-flex align-center justify-center flex-wrap">
    <div
      v-for="pricingCard of pricing"
      :key="pricingCard.label"
      :aria-label="pricingCard.ariaLabel"
    >
      <price-card :details="pricingCard" class="mx-1 my-1 z-2" />
    </div>
  </div>
</template>

<script>
import PriceCard from './PriceCard.vue';
export default {
  name: 'Pricing',
  components: { PriceCard },
  data() {
    return {
      pricing: [
        {
          label: '1 TENT',
          ariaLabel: 'one tent rental prices',
          threeDays: '240', //235
          fourDays: '265', //250
          fiveDays: '290', //275
          sixDays: '315', //300
          additionalDaysCost: '25',
        },
        {
          label: '2 TENTS',
          ariaLabel: 'two tents rental prices',
          threeDays: '420', //420-470
          fourDays: '460', //450-500
          fiveDays: '500', //500-550
          sixDays: '540', //550-600
          additionalDaysCost: '50',
        },
        {
          label: '3 TENTS',
          ariaLabel: 'three tents rental prices',
          threeDays: '630', // '630-705'
          fourDays: '700', // '675-750'
          fiveDays: '770', // '750-825'
          sixDays: '840', // '825-900'
          additionalDaysCost: '75',
        },
        // {
        //   label: 'CUSTOM', //FOUR TENTS
        //   ariaLabel: 'custom order',
        //   customSubtitle: 'TAILORED TO YOU',
        //   customMessage:
        //     "We want to hear from you. Please reach out to us with your thoughts and we'll see what we can pull together!",
        //   threeDays: '', //840-940
        //   fourDays: '', //900-1,000
        //   fiveDays: '', //1,000-1,100
        //   sixDays: '', //1,100-1,200
        //   additionalDaysCost: '', //100
        // },
      ],
    };
  },
};
</script>

<style></style>
