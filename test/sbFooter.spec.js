import Vuetify from 'vuetify';
import '@testing-library/jest-dom';
import SBFooter from '@/components/SBFooter.vue';
import { mount } from '@vue/test-utils';
import { testEmailLink } from './utils/helpers.js';

let vuetify, wrapper;

describe('SBFooter tests', () => {
  beforeEach(() => {
    vuetify = new Vuetify();
    wrapper = mount(SBFooter, {
      vuetify,
    });
  });
  test('it has location information', () => {
    const townsList = ['Oak Island, NC', 'Caswell Beach, NC', 'Southport, NC'];
    const towns = wrapper.find('div');

    expect(towns.attributes('aria-label')).toBe('service locations');

    for (const town of townsList) {
      expect(wrapper.text()).toContain(town);
    }
  });

  test('it has an email for contact info', () => {
    expect(wrapper.text()).toContain('info@seabreezerentals.org');
    testEmailLink(
      wrapper,
      '.contact-email-link',
      'info@seabreezerentals.org',
      'mailto:info@seabreezerentals.org'
    );
  });

  test('it has copyright info', () => {
    const thisYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(`${thisYear} Seabreeze Cabana Rentals`);
  });
});
