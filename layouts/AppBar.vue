<template>
  <v-app-bar fixed app>
    <v-toolbar-title>
      <NuxtLink class="text--deco-none home-link" to="/">{{ title }}</NuxtLink>
    </v-toolbar-title>
    <v-spacer />
    <NuxtLink
      v-for="link of links"
      :key="link"
      :class="`text--deco-none ${link.toLowerCase()}-link`"
      :to="`/${link.toLowerCase()}`"
    >
      {{ link }}
    </NuxtLink>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data() {
    return {
      title: 'Seabreeze Cabana Rentals',
      links: ['Contact', 'FAQ', 'Reserve'],
    };
  },
};
</script>
<style>
.text--deco-none {
  text-decoration: none;
}
</style>
