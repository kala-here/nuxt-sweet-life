<template>
  <v-footer absolute app class="d-flex flex-column justify-center py-6">
    <div class="my-6 text--center" aria-label="service locations">
      <div v-for="town of servicingAreas" :key="town">{{ town }}</div>
    </div>

    <div class="my-6" v-if="socialMedia.length">
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

    <div aria-label="email us at info@seabreezerentals.org" class="my-6">
      info@seabreezerentals.org
    </div>

    <div :aria-label="`Copyright ${copyright}`">&copy; {{ copyright }}</div>
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
