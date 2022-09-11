<template>
  <v-footer absolute app>
    <div :aria-label="copyright">&copy; {{ copyright }}</div>
  </v-footer>
</template>

<script>
const thisYear = new Date().getFullYear();

export default {
  name: 'SweetFooter',
  data() {
    return {
      copyright: `${thisYear} Sweet Life Rentals`,
    };
  },
};
</script>
