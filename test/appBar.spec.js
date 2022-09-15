import AppBar from '@/components/AppBar.vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';

const vuetify = new Vuetify();
const wrapper = mount(AppBar, {
  vuetify,
});

describe('App bar tests', () => {
  test('title is Seabreeze Cabana Rentals', () => {
    expect(wrapper.text()).toContain('Seabreeze Cabana Rentals');
  });
});
