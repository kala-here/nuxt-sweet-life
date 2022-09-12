import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import HomePage from '@/layouts/default.vue';

describe('Home Page tests', () => {
  test('it has an app bar', () => {
    const { getByLabelText } = render(HomePage);
    const title = getByLabelText('Welome to Seabreeze Cabana Rentals');
    expect(title).toHaveTextContent('Seabreeze Cabana Rentals');
  });
  test('it has a footer', () => {
    const { getByLabelText } = render(HomePage);

    const thisYear = new Date().getFullYear();
    const copyrightMsg = `${thisYear} Seabreeze Cabana Rentals`;

    const copyright = getByLabelText(`Copyright ${copyrightMsg}`);
    expect(copyright).toHaveTextContent(copyrightMsg);
  });
});
