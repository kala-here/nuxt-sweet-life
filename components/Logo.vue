<template>
  <NuxtLink
    class="text--deco-none home-link logo-container__height"
    to="/"
    :aria-label="title"
  >
    <v-img :src="require('../static/logo.svg')" max-width="225" class="mt-6" />
  </NuxtLink>
</template>
<script>
export default {
  name: 'Logo',
  data() {
    return {
      title: 'Seabreeze Cabana Rentals',
    };
  },
};
</script>
