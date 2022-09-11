import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import SweetFooter from '@/components/SweetFooter.vue';

describe('SweetFooter tests', () => {
  test('it has nav options: home, reserve now, terms and conditions, faqs', () => {});
  test('it has location information: Holden Beach, NC; phone number', () => {
    // const { getByLabelText } = render(SweetFooter);
    // const title = getByLabelText('Welome to Sweet Life Rentals');
    // expect(title).toHaveTextContent('Sweet Life Rentals');
  });

  test('it has social media links: twitter and facebook', () => {
    const { getAllByRole } = render(SweetFooter);
    const navOptions = getAllByRole('link');
    const twitterIcon = navOptions[0];
    const fbIcon = navOptions[1];

    expect(twitterIcon).toHaveTextContent('mdi-twitter');
    expect(twitterIcon).toHaveAttribute(
      'href',
      'https://twitter.com/sweetliferental'
    );
    expect(fbIcon).toHaveTextContent('mdi-facebook');
    expect(fbIcon).toHaveAttribute(
      'href',
      'https://www.facebook.com/sweetlifeholdenbeach/'
    );

    // TODO: clicking opens link in new tab

    expect(navOptions).toHaveLength(2);
  });

  test('it has copyright info', () => {
    const { getByLabelText } = render(SweetFooter);
    const thisYear = new Date().getFullYear();
    const copyrightMsg = `2019 - ${thisYear} Sweet Life Rentals`;

    const copyright = getByLabelText(`Copyright ${copyrightMsg}`);
    expect(copyright).toHaveTextContent(copyrightMsg);
  });
});
