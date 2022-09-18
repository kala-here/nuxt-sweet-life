import AppBar from '@/components/AppBar.vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import { testLink } from './utils/helpers.js';

const vuetify = new Vuetify();
const wrapper = mount(AppBar, {
  vuetify,
});

describe('App bar tests', () => {
  test('content', () => {
    testLink(wrapper, '.home-link', 'Seabreeze Cabana Rentals', '/');
    testLink(wrapper, '.contact-link', 'contact', '/contact');
  });
});
