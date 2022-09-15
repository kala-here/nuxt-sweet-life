import HomePage from '../pages/index.vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';

const vuetify = new Vuetify();
const wrapper = mount(HomePage, {
  vuetify,
});

describe('Home Page tests', () => {
  test('it has pricing', () => {
    expect(wrapper.text()).toContain('Pricing');
  });
});
