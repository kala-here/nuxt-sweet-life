<template>
  <v-app>
    <app-bar />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <s-b-footer />
  </v-app>
</template>

<script>
import SBFooter from './SBFooter.vue';
import AppBar from './AppBar.vue';

export default {
  name: 'DefaultLayout',
  components: { AppBar, SBFooter },
  data() {
    return {};
  },
};
</script>
