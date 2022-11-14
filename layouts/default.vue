<template>
  <v-app>
    <app-bar class="z-3" />

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
<style lang="scss">
.v-application {
  background-image: url(../static/dots-2.svg) !important;
  background-position: 0 50vh !important;
  background-repeat: repeat-x !important;
  background-attachment: fixed !important;
}
</style>
