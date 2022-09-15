<template>
  <v-app>
    <app-bar />
    <s-b-footer />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SBFooter from '../components/SBFooter.vue';
import AppBar from '../components/AppBar.vue';

export default {
  name: 'DefaultLayout',
  components: { AppBar, SBFooter },
  data() {
    return {};
  },
};
</script>
