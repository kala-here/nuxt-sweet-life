<template>
  <v-app-bar fixed app class="">
    <v-toolbar-title class="top-0">
      <logo />
    </v-toolbar-title>
    <v-spacer />
    <NuxtLink
      v-for="(link, index) of links"
      :key="link"
      :class="[
        `text--deco-none ${link.toLowerCase()}-link`,
        { 'mr-2': index !== links.length - 1 },
      ]"
      :to="`/${link.toLowerCase()}`"
    >
      {{ link }}
    </NuxtLink>
  </v-app-bar>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  name: 'AppBar',
  components: { Logo },
  data() {
    return {
      title: 'Seabreeze Cabana Rentals',
      links: ['Contact', 'FAQ', 'Reserve'],
    };
  },
};
</script>
<style>
.v-toolbar,
.v-toolbar__content {
  height: 127px !important;
}
</style>
