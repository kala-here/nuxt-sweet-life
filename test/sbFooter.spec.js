import { within, render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import SBFooter from '@/components/SBFooter.vue';

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
    const email = 'info@seabreezerentals.org';
    const { getByLabelText } = render(SBFooter);
    const emailElement = getByLabelText(
      'email us at info@seabreezerentals.org'
    );
    expect(emailElement).toHaveTextContent('info@seabreezerentals.org');
  });

  test('it has copyright info', () => {
    const { getByLabelText } = render(SBFooter);
    const thisYear = new Date().getFullYear();
    const copyrightMsg = `${thisYear} Seabreeze Cabana Rentals`;

    const copyright = getByLabelText(`Copyright ${copyrightMsg}`);
    expect(copyright).toHaveTextContent(copyrightMsg);
  });
});
