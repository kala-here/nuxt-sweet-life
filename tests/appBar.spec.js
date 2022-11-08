import Vuetify from 'vuetify';
import AppBar from '@/layouts/AppBar.vue';
import { mount } from '@vue/test-utils';

const vuetify = new Vuetify();

describe('App bar tests', () => {
  test('title is Seabreeze Cabana Rentals', () => {
    const wrapper = mount(AppBar, {
      vuetify,
    });
    expect(wrapper.text()).toContain('Seabreeze Cabana Rentals');
  });
});
