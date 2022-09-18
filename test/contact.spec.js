import contactPage from '@/pages/contact.vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import { testEmailLink } from './utils/helpers.js';

const vuetify = new Vuetify();
const wrapper = mount(contactPage, {
  vuetify,
});

describe('Contact page tests', () => {
  test('contains contact info', () => {
    expect(wrapper.text()).toContain(
      'Easily reach us at info@seabreezerentals.org'
    );
    testEmailLink(
      wrapper,
      '.contact-email-link',
      'info@seabreezerentals.org',
      'mailto:info@seabreezerentals.org'
    );
  });
});
