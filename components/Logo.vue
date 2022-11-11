<template>
  <NuxtLink
    class="text--deco-none home-link logo-container__height"
    to="/"
    :aria-label="title"
  >
    <v-img
      :src="require('../static/logo.svg')"
      max-width="250"
      class="logo mt-9"
    />
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
<style>
.logo {
  position: relative;
}
</style>
