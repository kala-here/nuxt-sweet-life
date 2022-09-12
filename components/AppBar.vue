<template>
  <v-app-bar fixed app>
    <v-toolbar-title
      aria-label="Welome to Seabreeze Cabana Rentals"
      v-text="title"
    />
    <v-spacer />
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
