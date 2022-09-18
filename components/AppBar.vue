<template>
  <v-app-bar fixed app>
    <v-toolbar-title>
      <NuxtLink class="text--deco-none home-link" to="/">{{ title }}</NuxtLink>
    </v-toolbar-title>
    <v-spacer />
    <NuxtLink class="text--deco-none contact-link" to="/contact"
      >contact</NuxtLink
    >
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data() {
    return {
      title: 'Seabreeze Cabana Rentals',
    };
  },
};
</script>
<style>
.text--deco-none {
  text-decoration: none;
}
</style>
