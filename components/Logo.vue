<template>
  <NuxtLink
    class="text--deco-none home-link"
    to="/"
    :aria-label="title"
  >
    <v-img :src="require('../static/logo.svg')" max-width="300" class="mt-12" />
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
.logo-container__height {
  height: 300px;
}
</style>
