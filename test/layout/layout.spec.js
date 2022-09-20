import layout from '@/layouts/default.vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';

const vuetify = new Vuetify();
const wrapper = mount(layout, {
  vuetify,
});

describe('Layout tests', () => {
  test('it has an app bar', () => {
    expect(wrapper.text()).toContain('Seabreeze Cabana Rentals');
  });
  test('it has a footer', () => {
    const thisYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(`${thisYear} Seabreeze Cabana Rentals`);
  });
});
