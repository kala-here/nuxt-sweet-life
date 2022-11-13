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
  background-image: url(../static/grass-ocean-clouds.JPG) !important;
  // background-repeat: no-repeat !important;
  // background-attachment: fixed !important;
}
// main {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   .container {
//     max-width: 100vh;
//     // width: fit-content;
//     // display: flex;
//     // align-items: center;
//   }
// }
// @media only screen and (min-width: 642px) and (max-width: 1000px) {
//   .v-application {
//     /* background-image: url(../static/723178.svg) !important; */
//     /* background-repeat: no-repeat !important; */
//     /* background-position-y: 100% !important; */
//   }
//   main {
//     display: flex;
//     align-items: flex-start;
//   }
// }
</style>
