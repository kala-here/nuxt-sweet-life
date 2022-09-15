<template>
  <v-app-bar fixed app>
    <v-toolbar-title
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
