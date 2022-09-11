import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import HomePage from '@/layouts/default.vue';

describe('Home Page tests', () => {
  test('it has an app bar', () => {
    const { getByLabelText } = render(HomePage);
    const title = getByLabelText('Welome to Sweet Life Rentals');
    expect(title).toHaveTextContent('Sweet Life Rentals');
  });
  test('it has a footer', () => {
    const { getByLabelText } = render(HomePage);

    const thisYear = new Date().getFullYear();
    const copyrightMsg = `2019 - ${thisYear} Sweet Life Rentals`;

    const copyright = getByLabelText(`Copyright ${copyrightMsg}`);
    expect(copyright).toHaveTextContent(copyrightMsg);
  });
});
