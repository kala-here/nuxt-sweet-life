import AppBar from '@/components/AppBar.vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import { testNuxtLink } from './utils/helpers.js';

const vuetify = new Vuetify();
const wrapper = mount(AppBar, {
  vuetify,
});

describe('App bar tests', () => {
  test('content', () => {
    testNuxtLink(wrapper, '.home-link', 'Seabreeze Cabana Rentals', '/');
    testNuxtLink(wrapper, '.contact-link', 'contact', '/contact');
    testNuxtLink(wrapper, '.faq-link', 'FAQ', '/faq');
  });
});
