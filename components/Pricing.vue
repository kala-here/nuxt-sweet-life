<template>
  <div>
    <div class="text--center mb-4"><h1>Pricing</h1></div>

    <div class="d-flex justify-space-between">
      <div
        v-for="pricingCard of pricing"
        :key="pricingCard.label"
        :aria-label="pricingCard.ariaLabel"
      >
        <div>{{ pricingCard.label }}</div>
        <div>3 Days: {{ pricingCard.threeDays }}</div>
        <div>4 Days: {{ pricingCard.fourDays }}</div>
        <div>5 Days: {{ pricingCard.fiveDays }}</div>
        <div>6 Days: {{ pricingCard.sixDays }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      pricing: [
        {
          label: "One Tent",
          ariaLabel: "one tent rental prices",
          threeDays: "$235",
          fourDays: "$250",
          fiveDays: "$275",
          sixDays: "$300",
        },
        {
          label: "Two Tents",
          ariaLabel: "two tents rental prices",
          threeDays: "$420-470",
          fourDays: "$450-500",
          fiveDays: "$500-550",
          sixDays: "$550-600",
        },
        {
          label: "Three Tents",
          ariaLabel: "three tents rental prices",
          threeDays: "$630-705",
          fourDays: "$675-750",
          fiveDays: "$750-825",
          sixDays: "$825-900",
        },
        {
          label: "Four Tents",
          ariaLabel: "four tents rental prices",
          threeDays: "$840-940",
          fourDays: "$900-1,000",
          fiveDays: "$1,000-1,100",
          sixDays: "$1,100-1,200",
        },
      ],
    };
  },
};
</script>

<style></style>
