import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import Footer from '@/components/Footer.vue';

describe('Footer tests', () => {
  test('it has nav options: home, reserve now, terms and conditions, faqs', () => {
    // const { getByLabelText } = render(Footer);
    // const title = getByLabelText('Welome to Sweet Life Rentals');
    // expect(title).toHaveTextContent('Sweet Life Rentals');
  });
  test('it has location information: Holden Beach, NC; phone number', () => {
    // const { getByLabelText } = render(Footer);
    // const title = getByLabelText('Welome to Sweet Life Rentals');
    // expect(title).toHaveTextContent('Sweet Life Rentals');
  });

  test('it has social media links: twitter and facebook', () => {
    // const { getByLabelText } = render(Footer);
    // const title = getByLabelText('Welome to Sweet Life Rentals');
    // expect(title).toHaveTextContent('Sweet Life Rentals');
  });

  test('it has copyright info', () => {
    const { getByLabelText } = render(Footer);
    const thisYear = new Date().getFullYear();
    const copyrightMsg = `${thisYear} Sweet Life Rentals`;

    const copyright = getByLabelText(copyrightMsg);
    expect(copyright).toHaveTextContent(copyrightMsg);
  });
});
