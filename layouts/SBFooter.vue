<template>
  <v-footer absolute app class="footer__bg d-flex justify-center">
    <!-- <div class="mt-3" v-if="socialMedia.length">
      <a
        v-for="social in socialMedia"
        :key="social.icon"
        :href="social.url"
        role="link"
        class="text-deco--none"
        target="_blank"
      >
        <v-btn class="mx-4 white--text" icon role="button">
          <v-icon size="24px" :name="social.icon">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </a>
    </div>

    <div class="mt-3">
      <a :href="`mailto:${email}`" class="contact-email-link">{{ email }}</a>
    </div> -->

    <div>&copy; {{ copyright }}</div>
    <!-- <div class="text--center mt-3" aria-label="service locations">
      <span class="mx-2" v-for="town of servicingAreas" :key="town">{{
        town
      }}</span>
    </div> -->
  </v-footer>
</template>

<script>
const thisYear = new Date().getFullYear();

export default {
  name: 'SBFooter',
  data() {
    return {
      servicingAreas: ['Oak Island, NC', 'Caswell Beach, NC', 'Southport, NC'],
      socialMedia: [],
      copyright: `${thisYear} Seabreeze Cabana Rentals`,
      email: 'info@seabreezerentals.org',
    };
  },
};
</script>

<style>
.text-deco--none {
  text-decoration: none;
}

.text--center {
  text-align: center;
}
</style>
