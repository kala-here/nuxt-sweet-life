import { within, render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import SBFooter from '@/components/SBFooter.vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';

const vuetify = new Vuetify();
const wrapper = mount(SBFooter, {
  vuetify,
});

describe('SBFooter tests', () => {
  test('it has location information', () => {
    const townsList = ['Oak Island, NC', 'Caswell Beach, NC', 'Southport, NC'];
    const { getByLabelText } = render(SBFooter);
    const towns = getByLabelText('service locations');

    expect(towns.childElementCount).toBe(townsList.length);

    for (const town of townsList) {
      expect(within(towns).getByText(town));
    }
  });

  test('it has an email for contact info', () => {
    expect(wrapper.text()).toContain('info@seabreezerentals.org');
  });

  test('it has copyright info', () => {
    const thisYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(`${thisYear} Seabreeze Cabana Rentals`);
  });
});
