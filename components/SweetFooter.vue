<template>
  <v-footer absolute app class="d-flex flex-column justify-center py-">
    <div class="my-6">
      <a
        v-for="social in socialMedia"
        :key="social.icon"
        :href="social.url"
        role="link"
        class="text-deco--none"
      >
        <v-btn class="mx-4 white--text" icon role="button">
          <v-icon size="24px">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </a>
    </div>
    <div :aria-label="`Copyright ${copyright}`">
      Copyright &copy; {{ copyright }}
    </div>
  </v-footer>
</template>

<script>
const thisYear = new Date().getFullYear();

export default {
  name: 'SweetFooter',
  data() {
    return {
      socialMedia: [
        {
          icon: 'mdi-twitter',
          url: 'https://twitter.com/sweetliferental',
        },
        {
          icon: 'mdi-facebook',
          url: 'https://www.facebook.com/sweetlifeholdenbeach/',
        },
      ],
      copyright: `2019 - ${thisYear} Sweet Life Rentals`,
    };
  },
};
</script>

<style>
.text-deco--none {
  text-decoration: none;
}
</style>
