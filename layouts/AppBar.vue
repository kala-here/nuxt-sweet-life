<template>
  <v-app-bar fixed app class="d-flex justify-center w-full">
    <div>
      <logo />
    </div>
    <!-- <v-spacer />
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
    </NuxtLink> -->
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
  height: 175px !important;
}
</style>
