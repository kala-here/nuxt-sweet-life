<template>
  <v-app>
    <sweet-app-bar />
    <sweet-footer />

    <!-- <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main> -->
  </v-app>
</template>

<script>
import SweetFooter from '../components/SweetFooter.vue';
import SweetAppBar from '../components/SweetAppBar.vue';

export default {
  name: 'DefaultLayout',
  components: { SweetAppBar, SweetFooter },
  data() {
    return {};
  },
};
</script>
